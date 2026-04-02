
 /**
 * 类名:clsPaperSubResTypeWApi
 * 表名:PaperSubResType(01120965)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/25 16:56:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文子资源类型(PaperSubResType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月25日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPaperSubResTypeEN } from "@/ts/L0Entity/ResourceMan/clsPaperSubResTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const paperSubResType_Controller = "PaperSubResTypeApi";
 export const paperSubResType_ConstructorName = "paperSubResType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperSubResTypeId:关键字
 * @returns 对象
 **/
export  async function PaperSubResType_GetObjByPaperSubResTypeIdAsync(strPaperSubResTypeId: string): Promise<clsPaperSubResTypeEN|null>  
{
const strThisFuncName = "GetObjByPaperSubResTypeIdAsync";

if (IsNullOrEmpty(strPaperSubResTypeId) == true)
{
  const strMsg = Format("参数:[strPaperSubResTypeId]不能为空!(In clsPaperSubResTypeWApi.GetObjByPaperSubResTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPaperSubResTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strPaperSubResTypeId]的长度:[{0}]不正确!(clsPaperSubResTypeWApi.GetObjByPaperSubResTypeIdAsync)", strPaperSubResTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPaperSubResTypeId";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPaperSubResTypeId,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objPaperSubResType = PaperSubResType_GetObjFromJsonObj(returnObj);
return objPaperSubResType;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strPaperSubResTypeId:所给的关键字
 * @returns 对象
*/
export  async function PaperSubResType_GetObjByPaperSubResTypeIdCache(strPaperSubResTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByPaperSubResTypeIdCache";

if (IsNullOrEmpty(strPaperSubResTypeId) == true)
{
  const strMsg = Format("参数:[strPaperSubResTypeId]不能为空!(In clsPaperSubResTypeWApi.GetObjByPaperSubResTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strPaperSubResTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strPaperSubResTypeId]的长度:[{0}]不正确!(clsPaperSubResTypeWApi.GetObjByPaperSubResTypeIdCache)", strPaperSubResTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
try
{
const arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache.filter(x => 
 x.paperSubResTypeId == strPaperSubResTypeId );
let objPaperSubResType: clsPaperSubResTypeEN;
if (arrPaperSubResTypeSel.length > 0)
{
objPaperSubResType = arrPaperSubResTypeSel[0];
return objPaperSubResType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objPaperSubResTypeConst = await PaperSubResType_GetObjByPaperSubResTypeIdAsync(strPaperSubResTypeId);
if (objPaperSubResTypeConst != null)
{
PaperSubResType_ReFreshThisCache();
return objPaperSubResTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strPaperSubResTypeId, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPaperSubResTypeId:所给的关键字
 * @returns 对象
*/
export  async function PaperSubResType_GetObjByPaperSubResTypeIdlocalStorage(strPaperSubResTypeId: string) {
const strThisFuncName = "GetObjByPaperSubResTypeIdlocalStorage";

if (IsNullOrEmpty(strPaperSubResTypeId) == true)
{
  const strMsg = Format("参数:[strPaperSubResTypeId]不能为空!(In clsPaperSubResTypeWApi.GetObjByPaperSubResTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strPaperSubResTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strPaperSubResTypeId]的长度:[{0}]不正确!(clsPaperSubResTypeWApi.GetObjByPaperSubResTypeIdlocalStorage)", strPaperSubResTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsPaperSubResTypeEN._CurrTabName, strPaperSubResTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objPaperSubResTypeCache: clsPaperSubResTypeEN = JSON.parse(strTempObj);
return objPaperSubResTypeCache;
}
try
{
const objPaperSubResType = await PaperSubResType_GetObjByPaperSubResTypeIdAsync(strPaperSubResTypeId);
if (objPaperSubResType != null)
{
localStorage.setItem(strKey, JSON.stringify(objPaperSubResType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objPaperSubResType;
}
return objPaperSubResType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strPaperSubResTypeId, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPaperSubResType:所给的对象
 * @returns 对象
*/
export  async function PaperSubResType_UpdateObjInLstCache(objPaperSubResType: clsPaperSubResTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
const obj = arrPaperSubResTypeObjLstCache.find(x => 
x.paperSubResTypeId == objPaperSubResType.paperSubResTypeId);
if (obj != null)
{
objPaperSubResType.paperSubResTypeId = obj.paperSubResTypeId;
ObjectAssign( obj, objPaperSubResType);
}
else
{
arrPaperSubResTypeObjLstCache.push(objPaperSubResType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPaperSubResTypeId:所给的关键字
 * @returns 对象
*/
export  async function PaperSubResType_GetNameByPaperSubResTypeIdCache(strPaperSubResTypeId: string) {

if (IsNullOrEmpty(strPaperSubResTypeId) == true)
{
  const strMsg = Format("参数:[strPaperSubResTypeId]不能为空!(In clsPaperSubResTypeWApi.GetNameByPaperSubResTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strPaperSubResTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strPaperSubResTypeId]的长度:[{0}]不正确!(clsPaperSubResTypeWApi.GetNameByPaperSubResTypeIdCache)", strPaperSubResTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
if (arrPaperSubResTypeObjLstCache == null) return "";
try
{
const arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache.filter(x => 
 x.paperSubResTypeId == strPaperSubResTypeId );
let objPaperSubResType: clsPaperSubResTypeEN;
if (arrPaperSubResTypeSel.length > 0)
{
objPaperSubResType = arrPaperSubResTypeSel[0];
return objPaperSubResType.paperSubResTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strPaperSubResTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function PaperSubResType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsPaperSubResTypeEN.con_PaperSubResTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsPaperSubResTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsPaperSubResTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strPaperSubResTypeId = strInValue;
if (IsNullOrEmpty(strPaperSubResTypeId) == true)
{
return "";
}
const objPaperSubResType = await PaperSubResType_GetObjByPaperSubResTypeIdCache(strPaperSubResTypeId );
if (objPaperSubResType == null) return "";
if (objPaperSubResType.GetFldValue(strOutFldName) == null) return "";
return objPaperSubResType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function PaperSubResType_SortFunDefa(a:clsPaperSubResTypeEN , b:clsPaperSubResTypeEN): number 
{
return a.paperSubResTypeId.localeCompare(b.paperSubResTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function PaperSubResType_SortFunDefa2Fld(a:clsPaperSubResTypeEN , b:clsPaperSubResTypeEN): number 
{
if (a.paperSubResTypeName == b.paperSubResTypeName) return a.paperSubResTypeENName.localeCompare(b.paperSubResTypeENName);
else return a.paperSubResTypeName.localeCompare(b.paperSubResTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function PaperSubResType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsPaperSubResTypeEN.con_PaperSubResTypeId:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
return a.paperSubResTypeId.localeCompare(b.paperSubResTypeId);
}
case clsPaperSubResTypeEN.con_PaperSubResTypeName:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
return a.paperSubResTypeName.localeCompare(b.paperSubResTypeName);
}
case clsPaperSubResTypeEN.con_PaperSubResTypeENName:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (a.paperSubResTypeENName == null) return -1;
if (b.paperSubResTypeENName == null) return 1;
return a.paperSubResTypeENName.localeCompare(b.paperSubResTypeENName);
}
case clsPaperSubResTypeEN.con_FileExtentNameLst:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (a.fileExtentNameLst == null) return -1;
if (b.fileExtentNameLst == null) return 1;
return a.fileExtentNameLst.localeCompare(b.fileExtentNameLst);
}
case clsPaperSubResTypeEN.con_FileExtentNameLst2:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (a.fileExtentNameLst2 == null) return -1;
if (b.fileExtentNameLst2 == null) return 1;
return a.fileExtentNameLst2.localeCompare(b.fileExtentNameLst2);
}
case clsPaperSubResTypeEN.con_IsUse:
return (a: clsPaperSubResTypeEN) => {
if (a.isUse == true) return 1;
else return -1
}
case clsPaperSubResTypeEN.con_OrderNum:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
return a.orderNum-b.orderNum;
}
case clsPaperSubResTypeEN.con_UpdDate:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsPaperSubResTypeEN.con_UpdUser:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsPaperSubResTypeEN.con_Memo:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[PaperSubResType]中不存在!(in ${ paperSubResType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsPaperSubResTypeEN.con_PaperSubResTypeId:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
return b.paperSubResTypeId.localeCompare(a.paperSubResTypeId);
}
case clsPaperSubResTypeEN.con_PaperSubResTypeName:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
return b.paperSubResTypeName.localeCompare(a.paperSubResTypeName);
}
case clsPaperSubResTypeEN.con_PaperSubResTypeENName:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (b.paperSubResTypeENName == null) return -1;
if (a.paperSubResTypeENName == null) return 1;
return b.paperSubResTypeENName.localeCompare(a.paperSubResTypeENName);
}
case clsPaperSubResTypeEN.con_FileExtentNameLst:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (b.fileExtentNameLst == null) return -1;
if (a.fileExtentNameLst == null) return 1;
return b.fileExtentNameLst.localeCompare(a.fileExtentNameLst);
}
case clsPaperSubResTypeEN.con_FileExtentNameLst2:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (b.fileExtentNameLst2 == null) return -1;
if (a.fileExtentNameLst2 == null) return 1;
return b.fileExtentNameLst2.localeCompare(a.fileExtentNameLst2);
}
case clsPaperSubResTypeEN.con_IsUse:
return (b: clsPaperSubResTypeEN) => {
if (b.isUse == true) return 1;
else return -1
}
case clsPaperSubResTypeEN.con_OrderNum:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
return b.orderNum-a.orderNum;
}
case clsPaperSubResTypeEN.con_UpdDate:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsPaperSubResTypeEN.con_UpdUser:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsPaperSubResTypeEN.con_Memo:
return (a: clsPaperSubResTypeEN, b: clsPaperSubResTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[PaperSubResType]中不存在!(in ${ paperSubResType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function PaperSubResType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsPaperSubResTypeEN.con_PaperSubResTypeId:
return (obj: clsPaperSubResTypeEN) => {
return obj.paperSubResTypeId === value;
}
case clsPaperSubResTypeEN.con_PaperSubResTypeName:
return (obj: clsPaperSubResTypeEN) => {
return obj.paperSubResTypeName === value;
}
case clsPaperSubResTypeEN.con_PaperSubResTypeENName:
return (obj: clsPaperSubResTypeEN) => {
return obj.paperSubResTypeENName === value;
}
case clsPaperSubResTypeEN.con_FileExtentNameLst:
return (obj: clsPaperSubResTypeEN) => {
return obj.fileExtentNameLst === value;
}
case clsPaperSubResTypeEN.con_FileExtentNameLst2:
return (obj: clsPaperSubResTypeEN) => {
return obj.fileExtentNameLst2 === value;
}
case clsPaperSubResTypeEN.con_IsUse:
return (obj: clsPaperSubResTypeEN) => {
return obj.isUse === value;
}
case clsPaperSubResTypeEN.con_OrderNum:
return (obj: clsPaperSubResTypeEN) => {
return obj.orderNum === value;
}
case clsPaperSubResTypeEN.con_UpdDate:
return (obj: clsPaperSubResTypeEN) => {
return obj.updDate === value;
}
case clsPaperSubResTypeEN.con_UpdUser:
return (obj: clsPaperSubResTypeEN) => {
return obj.updUser === value;
}
case clsPaperSubResTypeEN.con_Memo:
return (obj: clsPaperSubResTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[PaperSubResType]中不存在!(in ${ paperSubResType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function PaperSubResType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsPaperSubResTypeEN.con_PaperSubResTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrPaperSubResType = await PaperSubResType_GetObjLstCache();
if (arrPaperSubResType == null) return [];
let arrPaperSubResTypeSel = arrPaperSubResType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrPaperSubResTypeSel.length == 0) return [];
return arrPaperSubResTypeSel.map(x=>x.paperSubResTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function PaperSubResType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function PaperSubResType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFldName,
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const arrId = data.returnStrLst.split(',');
return arrId;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
*/
export  async function PaperSubResType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export  async function PaperSubResType_GetFirstObjAsync(strWhereCond: string): Promise<clsPaperSubResTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objPaperSubResType = PaperSubResType_GetObjFromJsonObj(returnObj);
return objPaperSubResType;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsPaperSubResTypeEN._CurrTabName;
if (IsNullOrEmpty(clsPaperSubResTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsPaperSubResTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrPaperSubResTypeExObjLstCache: Array<clsPaperSubResTypeEN> = CacheHelper.Get(strKey);
const arrPaperSubResTypeObjLstT = PaperSubResType_GetObjLstByJSONObjLst(arrPaperSubResTypeExObjLstCache);
return arrPaperSubResTypeObjLstT;
}
try
{
const arrPaperSubResTypeExObjLst = await PaperSubResType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrPaperSubResTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrPaperSubResTypeExObjLst.length);
console.log(strInfo);
return arrPaperSubResTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsPaperSubResTypeEN._CurrTabName;
if (IsNullOrEmpty(clsPaperSubResTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsPaperSubResTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrPaperSubResTypeExObjLstCache: Array<clsPaperSubResTypeEN> = JSON.parse(strTempObjLst);
const arrPaperSubResTypeObjLstT = PaperSubResType_GetObjLstByJSONObjLst(arrPaperSubResTypeExObjLstCache);
return arrPaperSubResTypeObjLstT;
}
try
{
const arrPaperSubResTypeExObjLst = await PaperSubResType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrPaperSubResTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrPaperSubResTypeExObjLst.length);
console.log(strInfo);
return arrPaperSubResTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsPaperSubResTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrPaperSubResTypeObjLstCache: Array<clsPaperSubResTypeEN> = JSON.parse(strTempObjLst);
return arrPaperSubResTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function PaperSubResType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsPaperSubResTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperSubResType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperSubResType_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsPaperSubResTypeEN._CurrTabName;
if (IsNullOrEmpty(clsPaperSubResTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsPaperSubResTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrPaperSubResTypeExObjLstCache: Array<clsPaperSubResTypeEN> = JSON.parse(strTempObjLst);
const arrPaperSubResTypeObjLstT = PaperSubResType_GetObjLstByJSONObjLst(arrPaperSubResTypeExObjLstCache);
return arrPaperSubResTypeObjLstT;
}
try
{
const arrPaperSubResTypeExObjLst = await PaperSubResType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrPaperSubResTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrPaperSubResTypeExObjLst.length);
console.log(strInfo);
return arrPaperSubResTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsPaperSubResTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrPaperSubResTypeObjLstCache: Array<clsPaperSubResTypeEN> = JSON.parse(strTempObjLst);
return arrPaperSubResTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstCache(): Promise<Array<clsPaperSubResTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrPaperSubResTypeObjLstCache;
switch (clsPaperSubResTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstClientCache();
break;
default:
arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstClientCache();
break;
}
return arrPaperSubResTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function PaperSubResType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrPaperSubResTypeObjLstCache;
switch (clsPaperSubResTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrPaperSubResTypeObjLstCache = null;
break;
default:
arrPaperSubResTypeObjLstCache = null;
break;
}
return arrPaperSubResTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPaperSubResTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function PaperSubResType_GetSubObjLstCache(objPaperSubResTypeCond: clsPaperSubResTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
let arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache;
if (objPaperSubResTypeCond.sfFldComparisonOp == null || objPaperSubResTypeCond.sfFldComparisonOp == "") return arrPaperSubResTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objPaperSubResTypeCond.sfFldComparisonOp);
//console.log("clsPaperSubResTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objPaperSubResTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objPaperSubResTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrPaperSubResTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objPaperSubResTypeCond), paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsPaperSubResTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperSubResTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function PaperSubResType_GetObjLstByPaperSubResTypeIdLstAsync(arrPaperSubResTypeId: Array<string>): Promise<Array<clsPaperSubResTypeEN>>  
{
const strThisFuncName = "GetObjLstByPaperSubResTypeIdLstAsync";
const strAction = "GetObjLstByPaperSubResTypeIdLst";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperSubResTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperSubResType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperSubResType_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrPaperSubResTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function PaperSubResType_GetObjLstByPaperSubResTypeIdLstCache(arrPaperSubResTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByPaperSubResTypeIdLstCache";
try
{
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
const arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache.filter(x => arrPaperSubResTypeIdLst.indexOf(x.paperSubResTypeId)>-1);
return arrPaperSubResTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrPaperSubResTypeIdLst.join(","), paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function PaperSubResType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsPaperSubResTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTopPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperSubResType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperSubResType_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function PaperSubResType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsPaperSubResTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRangePara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperSubResType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperSubResType_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function PaperSubResType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsPaperSubResTypeEN>();
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
if (arrPaperSubResTypeObjLstCache.length == 0) return arrPaperSubResTypeObjLstCache;
let arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objPaperSubResTypeCond = new clsPaperSubResTypeEN();
ObjectAssign(objPaperSubResTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsPaperSubResTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objPaperSubResTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrPaperSubResTypeSel.length == 0) return arrPaperSubResTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrPaperSubResTypeSel = arrPaperSubResTypeSel.sort(PaperSubResType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrPaperSubResTypeSel = arrPaperSubResTypeSel.sort(objPagerPara.sortFun);
}
arrPaperSubResTypeSel = arrPaperSubResTypeSel.slice(intStart, intEnd);     
return arrPaperSubResTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsPaperSubResTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function PaperSubResType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsPaperSubResTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsPaperSubResTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPagerPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paperSubResType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = PaperSubResType_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strPaperSubResTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function PaperSubResType_DelRecordAsync(strPaperSubResTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strPaperSubResTypeId);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrPaperSubResTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function PaperSubResType_DelPaperSubResTypesAsync(arrPaperSubResTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelPaperSubResTypesAsync";
const strAction = "DelPaperSubResTypes";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperSubResTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function PaperSubResType_DelPaperSubResTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelPaperSubResTypesByCondAsync";
const strAction = "DelPaperSubResTypesByCond";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objPaperSubResTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function PaperSubResType_AddNewRecordAsync(objPaperSubResTypeEN: clsPaperSubResTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objPaperSubResTypeEN.paperSubResTypeId === null || objPaperSubResTypeEN.paperSubResTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objPaperSubResTypeEN);
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperSubResTypeEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objPaperSubResTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function PaperSubResType_AddNewRecordWithMaxIdAsync(objPaperSubResTypeEN: clsPaperSubResTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperSubResTypeEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPaperSubResTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function PaperSubResType_AddNewRecordWithReturnKeyAsync(objPaperSubResTypeEN: clsPaperSubResTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperSubResTypeEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objPaperSubResTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function PaperSubResType_UpdateRecordAsync(objPaperSubResTypeEN: clsPaperSubResTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objPaperSubResTypeEN.sfUpdFldSetStr === undefined || objPaperSubResTypeEN.sfUpdFldSetStr === null || objPaperSubResTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objPaperSubResTypeEN.paperSubResTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperSubResTypeEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objPaperSubResTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function PaperSubResType_UpdateWithConditionAsync(objPaperSubResTypeEN: clsPaperSubResTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objPaperSubResTypeEN.sfUpdFldSetStr === undefined || objPaperSubResTypeEN.sfUpdFldSetStr === null || objPaperSubResTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objPaperSubResTypeEN.paperSubResTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);
objPaperSubResTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperSubResTypeEN, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrPaperSubResTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function PaperSubResType_IsExistRecordCache(objPaperSubResTypeCond: clsPaperSubResTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
if (arrPaperSubResTypeObjLstCache == null) return false;
let arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache;
if (objPaperSubResTypeCond.sfFldComparisonOp == null || objPaperSubResTypeCond.sfFldComparisonOp == "") return arrPaperSubResTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objPaperSubResTypeCond.sfFldComparisonOp);
//console.log("clsPaperSubResTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objPaperSubResTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objPaperSubResTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrPaperSubResTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objPaperSubResTypeCond), paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function PaperSubResType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strPaperSubResTypeId:所给的关键字
 * @returns 对象
*/
export  async function PaperSubResType_IsExistCache(strPaperSubResTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
if (arrPaperSubResTypeObjLstCache == null) return false;
try
{
const arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache.filter(x => x.paperSubResTypeId == strPaperSubResTypeId);
if (arrPaperSubResTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strPaperSubResTypeId, paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strPaperSubResTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function PaperSubResType_IsExistAsync(strPaperSubResTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPaperSubResTypeId
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export  async function PaperSubResType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objPaperSubResTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function PaperSubResType_GetRecCountByCondCache(objPaperSubResTypeCond: clsPaperSubResTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrPaperSubResTypeObjLstCache = await PaperSubResType_GetObjLstCache();
if (arrPaperSubResTypeObjLstCache == null) return 0;
let arrPaperSubResTypeSel = arrPaperSubResTypeObjLstCache;
if (objPaperSubResTypeCond.sfFldComparisonOp == null || objPaperSubResTypeCond.sfFldComparisonOp == "") return arrPaperSubResTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objPaperSubResTypeCond.sfFldComparisonOp);
//console.log("clsPaperSubResTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objPaperSubResTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objPaperSubResTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrPaperSubResTypeSel = arrPaperSubResTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrPaperSubResTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objPaperSubResTypeCond), paperSubResType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function PaperSubResType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(paperSubResType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paperSubResType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function PaperSubResType_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}

 /**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function PaperSubResType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsPaperSubResTypeEN._CurrTabName;
switch (clsPaperSubResTypeEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function PaperSubResType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsPaperSubResTypeEN._CurrTabName;
switch (clsPaperSubResTypeEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}

//(IsNeedGC == false)该表下拉框功能不需要生成;
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function PaperSubResType_BindDdl_PaperSubResTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_PaperSubResTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_PaperSubResTypeIdInDivCache");
const arrObjLstSel = await PaperSubResType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsPaperSubResTypeEN.con_PaperSubResTypeId, clsPaperSubResTypeEN.con_PaperSubResTypeName, "论文子资源类型");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function PaperSubResType_CheckPropertyNew(pobjPaperSubResTypeEN: clsPaperSubResTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[论文子资源类型名]不能为空(In 论文子资源类型)!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeId) == false && GetStrLen(pobjPaperSubResTypeEN.paperSubResTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[论文子资源类型Id(paperSubResTypeId)]的长度不能超过4(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.paperSubResTypeId}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeName) == false && GetStrLen(pobjPaperSubResTypeEN.paperSubResTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[论文子资源类型名(paperSubResTypeName)]的长度不能超过50(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.paperSubResTypeName}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeENName) == false && GetStrLen(pobjPaperSubResTypeEN.paperSubResTypeENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[论文子资源类型英文名(paperSubResTypeENName)]的长度不能超过50(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.paperSubResTypeENName}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst) == false && GetStrLen(pobjPaperSubResTypeEN.fileExtentNameLst) > 200)
{
 throw new Error(`(errid:Watl000413)字段[文件扩展名列表(fileExtentNameLst)]的长度不能超过200(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.fileExtentNameLst}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst2) == false && GetStrLen(pobjPaperSubResTypeEN.fileExtentNameLst2) > 200)
{
 throw new Error(`(errid:Watl000413)字段[文件扩展名列表2(fileExtentNameLst2)]的长度不能超过200(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.fileExtentNameLst2}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updDate) == false && GetStrLen(pobjPaperSubResTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.updDate}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updUser) == false && GetStrLen(pobjPaperSubResTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.updUser}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.memo) == false && GetStrLen(pobjPaperSubResTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.memo}(clsPaperSubResTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeId) == false && undefined !== pobjPaperSubResTypeEN.paperSubResTypeId && tzDataType.isString(pobjPaperSubResTypeEN.paperSubResTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文子资源类型Id(paperSubResTypeId)]的值:[${pobjPaperSubResTypeEN.paperSubResTypeId}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeName) == false && undefined !== pobjPaperSubResTypeEN.paperSubResTypeName && tzDataType.isString(pobjPaperSubResTypeEN.paperSubResTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文子资源类型名(paperSubResTypeName)]的值:[${pobjPaperSubResTypeEN.paperSubResTypeName}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeENName) == false && undefined !== pobjPaperSubResTypeEN.paperSubResTypeENName && tzDataType.isString(pobjPaperSubResTypeEN.paperSubResTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文子资源类型英文名(paperSubResTypeENName)]的值:[${pobjPaperSubResTypeEN.paperSubResTypeENName}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst) == false && undefined !== pobjPaperSubResTypeEN.fileExtentNameLst && tzDataType.isString(pobjPaperSubResTypeEN.fileExtentNameLst) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件扩展名列表(fileExtentNameLst)]的值:[${pobjPaperSubResTypeEN.fileExtentNameLst}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst2) == false && undefined !== pobjPaperSubResTypeEN.fileExtentNameLst2 && tzDataType.isString(pobjPaperSubResTypeEN.fileExtentNameLst2) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件扩展名列表2(fileExtentNameLst2)]的值:[${pobjPaperSubResTypeEN.fileExtentNameLst2}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (null != pobjPaperSubResTypeEN.isUse && undefined !== pobjPaperSubResTypeEN.isUse && tzDataType.isBoolean(pobjPaperSubResTypeEN.isUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否使用(isUse)]的值:[${pobjPaperSubResTypeEN.isUse}], 非法,应该为布尔型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (null != pobjPaperSubResTypeEN.orderNum && undefined !== pobjPaperSubResTypeEN.orderNum && tzDataType.isNumber(pobjPaperSubResTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjPaperSubResTypeEN.orderNum}], 非法,应该为数值型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updDate) == false && undefined !== pobjPaperSubResTypeEN.updDate && tzDataType.isString(pobjPaperSubResTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPaperSubResTypeEN.updDate}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updUser) == false && undefined !== pobjPaperSubResTypeEN.updUser && tzDataType.isString(pobjPaperSubResTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjPaperSubResTypeEN.updUser}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.memo) == false && undefined !== pobjPaperSubResTypeEN.memo && tzDataType.isString(pobjPaperSubResTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjPaperSubResTypeEN.memo}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function PaperSubResType_CheckProperty4Update(pobjPaperSubResTypeEN: clsPaperSubResTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeId) == false && GetStrLen(pobjPaperSubResTypeEN.paperSubResTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[论文子资源类型Id(paperSubResTypeId)]的长度不能超过4(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.paperSubResTypeId}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeName) == false && GetStrLen(pobjPaperSubResTypeEN.paperSubResTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[论文子资源类型名(paperSubResTypeName)]的长度不能超过50(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.paperSubResTypeName}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeENName) == false && GetStrLen(pobjPaperSubResTypeEN.paperSubResTypeENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[论文子资源类型英文名(paperSubResTypeENName)]的长度不能超过50(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.paperSubResTypeENName}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst) == false && GetStrLen(pobjPaperSubResTypeEN.fileExtentNameLst) > 200)
{
 throw new Error(`(errid:Watl000416)字段[文件扩展名列表(fileExtentNameLst)]的长度不能超过200(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.fileExtentNameLst}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst2) == false && GetStrLen(pobjPaperSubResTypeEN.fileExtentNameLst2) > 200)
{
 throw new Error(`(errid:Watl000416)字段[文件扩展名列表2(fileExtentNameLst2)]的长度不能超过200(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.fileExtentNameLst2}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updDate) == false && GetStrLen(pobjPaperSubResTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.updDate}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updUser) == false && GetStrLen(pobjPaperSubResTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.updUser}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.memo) == false && GetStrLen(pobjPaperSubResTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文子资源类型(PaperSubResType))!值:${pobjPaperSubResTypeEN.memo}(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeId) == false && undefined !== pobjPaperSubResTypeEN.paperSubResTypeId && tzDataType.isString(pobjPaperSubResTypeEN.paperSubResTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文子资源类型Id(paperSubResTypeId)]的值:[${pobjPaperSubResTypeEN.paperSubResTypeId}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeName) == false && undefined !== pobjPaperSubResTypeEN.paperSubResTypeName && tzDataType.isString(pobjPaperSubResTypeEN.paperSubResTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文子资源类型名(paperSubResTypeName)]的值:[${pobjPaperSubResTypeEN.paperSubResTypeName}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeENName) == false && undefined !== pobjPaperSubResTypeEN.paperSubResTypeENName && tzDataType.isString(pobjPaperSubResTypeEN.paperSubResTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文子资源类型英文名(paperSubResTypeENName)]的值:[${pobjPaperSubResTypeEN.paperSubResTypeENName}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst) == false && undefined !== pobjPaperSubResTypeEN.fileExtentNameLst && tzDataType.isString(pobjPaperSubResTypeEN.fileExtentNameLst) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件扩展名列表(fileExtentNameLst)]的值:[${pobjPaperSubResTypeEN.fileExtentNameLst}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.fileExtentNameLst2) == false && undefined !== pobjPaperSubResTypeEN.fileExtentNameLst2 && tzDataType.isString(pobjPaperSubResTypeEN.fileExtentNameLst2) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件扩展名列表2(fileExtentNameLst2)]的值:[${pobjPaperSubResTypeEN.fileExtentNameLst2}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (null != pobjPaperSubResTypeEN.isUse && undefined !== pobjPaperSubResTypeEN.isUse && tzDataType.isBoolean(pobjPaperSubResTypeEN.isUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否使用(isUse)]的值:[${pobjPaperSubResTypeEN.isUse}], 非法,应该为布尔型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (null != pobjPaperSubResTypeEN.orderNum && undefined !== pobjPaperSubResTypeEN.orderNum && tzDataType.isNumber(pobjPaperSubResTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjPaperSubResTypeEN.orderNum}], 非法,应该为数值型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updDate) == false && undefined !== pobjPaperSubResTypeEN.updDate && tzDataType.isString(pobjPaperSubResTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPaperSubResTypeEN.updDate}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.updUser) == false && undefined !== pobjPaperSubResTypeEN.updUser && tzDataType.isString(pobjPaperSubResTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjPaperSubResTypeEN.updUser}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperSubResTypeEN.memo) == false && undefined !== pobjPaperSubResTypeEN.memo && tzDataType.isString(pobjPaperSubResTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjPaperSubResTypeEN.memo}], 非法,应该为字符型(In 论文子资源类型(PaperSubResType))!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjPaperSubResTypeEN.paperSubResTypeId) === true 
 || pobjPaperSubResTypeEN.paperSubResTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[论文子资源类型Id]不能为空(In 论文子资源类型)!(clsPaperSubResTypeBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function PaperSubResType_GetJSONStrByObj (pobjPaperSubResTypeEN: clsPaperSubResTypeEN): string
{
pobjPaperSubResTypeEN.sfUpdFldSetStr = pobjPaperSubResTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjPaperSubResTypeEN);
}
catch(objException)
{
const strEx = GetExceptionStr(objException);
myShowErrorMsg(strEx);
}
if (strJson == undefined) return "";
else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function PaperSubResType_GetObjLstByJSONStr (strJSON: string): Array<clsPaperSubResTypeEN>
{
let arrPaperSubResTypeObjLst = new Array<clsPaperSubResTypeEN>();
if (strJSON === "")
{
return arrPaperSubResTypeObjLst;
}
try
{
arrPaperSubResTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrPaperSubResTypeObjLst;
}
return arrPaperSubResTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperSubResTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function PaperSubResType_GetObjLstByJSONObjLst (arrPaperSubResTypeObjLstS: Array<clsPaperSubResTypeEN>): Array<clsPaperSubResTypeEN>
{
const arrPaperSubResTypeObjLst = new Array<clsPaperSubResTypeEN>();
for (const objInFor of arrPaperSubResTypeObjLstS) {
const obj1 = PaperSubResType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrPaperSubResTypeObjLst.push(obj1);
}
return arrPaperSubResTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function PaperSubResType_GetObjByJSONStr (strJSON: string): clsPaperSubResTypeEN
{
let pobjPaperSubResTypeEN = new clsPaperSubResTypeEN();
if (strJSON === "")
{
return pobjPaperSubResTypeEN;
}
try
{
pobjPaperSubResTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjPaperSubResTypeEN;
}
return pobjPaperSubResTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function PaperSubResType_GetCombineCondition(objPaperSubResTypeCond: clsPaperSubResTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_PaperSubResTypeId) == true)
{
const strComparisonOpPaperSubResTypeId:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_PaperSubResTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_PaperSubResTypeId, objPaperSubResTypeCond.paperSubResTypeId, strComparisonOpPaperSubResTypeId);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_PaperSubResTypeName) == true)
{
const strComparisonOpPaperSubResTypeName:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_PaperSubResTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_PaperSubResTypeName, objPaperSubResTypeCond.paperSubResTypeName, strComparisonOpPaperSubResTypeName);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_PaperSubResTypeENName) == true)
{
const strComparisonOpPaperSubResTypeENName:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_PaperSubResTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_PaperSubResTypeENName, objPaperSubResTypeCond.paperSubResTypeENName, strComparisonOpPaperSubResTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_FileExtentNameLst) == true)
{
const strComparisonOpFileExtentNameLst:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_FileExtentNameLst];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_FileExtentNameLst, objPaperSubResTypeCond.fileExtentNameLst, strComparisonOpFileExtentNameLst);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_FileExtentNameLst2) == true)
{
const strComparisonOpFileExtentNameLst2:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_FileExtentNameLst2];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_FileExtentNameLst2, objPaperSubResTypeCond.fileExtentNameLst2, strComparisonOpFileExtentNameLst2);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_IsUse) == true)
{
if (objPaperSubResTypeCond.isUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsPaperSubResTypeEN.con_IsUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsPaperSubResTypeEN.con_IsUse);
}
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsPaperSubResTypeEN.con_OrderNum, objPaperSubResTypeCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_UpdDate, objPaperSubResTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_UpdUser, objPaperSubResTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objPaperSubResTypeCond.dicFldComparisonOp, clsPaperSubResTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objPaperSubResTypeCond.dicFldComparisonOp[clsPaperSubResTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperSubResTypeEN.con_Memo, objPaperSubResTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperSubResTypeENS:源对象
 * @param objPaperSubResTypeENT:目标对象
*/
export  function PaperSubResType_CopyObjTo(objPaperSubResTypeENS: clsPaperSubResTypeEN , objPaperSubResTypeENT: clsPaperSubResTypeEN ): void 
{
objPaperSubResTypeENT.paperSubResTypeId = objPaperSubResTypeENS.paperSubResTypeId; //论文子资源类型Id
objPaperSubResTypeENT.paperSubResTypeName = objPaperSubResTypeENS.paperSubResTypeName; //论文子资源类型名
objPaperSubResTypeENT.paperSubResTypeENName = objPaperSubResTypeENS.paperSubResTypeENName; //论文子资源类型英文名
objPaperSubResTypeENT.fileExtentNameLst = objPaperSubResTypeENS.fileExtentNameLst; //文件扩展名列表
objPaperSubResTypeENT.fileExtentNameLst2 = objPaperSubResTypeENS.fileExtentNameLst2; //文件扩展名列表2
objPaperSubResTypeENT.isUse = objPaperSubResTypeENS.isUse; //是否使用
objPaperSubResTypeENT.orderNum = objPaperSubResTypeENS.orderNum; //序号
objPaperSubResTypeENT.updDate = objPaperSubResTypeENS.updDate; //修改日期
objPaperSubResTypeENT.updUser = objPaperSubResTypeENS.updUser; //修改人
objPaperSubResTypeENT.memo = objPaperSubResTypeENS.memo; //备注
objPaperSubResTypeENT.sfUpdFldSetStr = objPaperSubResTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperSubResTypeENS:源对象
 * @param objPaperSubResTypeENT:目标对象
*/
export  function PaperSubResType_GetObjFromJsonObj(objPaperSubResTypeENS: clsPaperSubResTypeEN): clsPaperSubResTypeEN 
{
 const objPaperSubResTypeENT: clsPaperSubResTypeEN = new clsPaperSubResTypeEN();
ObjectAssign(objPaperSubResTypeENT, objPaperSubResTypeENS);
 return objPaperSubResTypeENT;
}