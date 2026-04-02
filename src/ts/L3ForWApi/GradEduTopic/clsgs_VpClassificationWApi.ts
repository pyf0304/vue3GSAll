
 /**
 * 类名:clsgs_VpClassificationWApi
 * 表名:gs_VpClassification(01120958)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:44
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 各观点分类表(gs_VpClassification)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsgs_VpClassificationEN } from "@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_VpClassification_Controller = "gs_VpClassificationApi";
 export const gs_VpClassification_ConstructorName = "gs_VpClassification";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngClassificationId:关键字
 * @returns 对象
 **/
export  async function gs_VpClassification_GetObjByClassificationIdAsync(lngClassificationId: number): Promise<clsgs_VpClassificationEN|null>  
{
const strThisFuncName = "GetObjByClassificationIdAsync";

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationWApi.GetObjByClassificationIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByClassificationId";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngClassificationId,
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
const objgs_VpClassification = gs_VpClassification_GetObjFromJsonObj(returnObj);
return objgs_VpClassification;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param lngClassificationId:所给的关键字
 * @returns 对象
*/
export  async function gs_VpClassification_GetObjByClassificationIdCache(lngClassificationId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByClassificationIdCache";

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationWApi.GetObjByClassificationIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
try
{
const arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache.filter(x => 
 x.classificationId == lngClassificationId );
let objgs_VpClassification: clsgs_VpClassificationEN;
if (arrgs_VpClassificationSel.length > 0)
{
objgs_VpClassification = arrgs_VpClassificationSel[0];
return objgs_VpClassification;
}
else
{
if (bolTryAsyncOnce == true)
{
const objgs_VpClassificationConst = await gs_VpClassification_GetObjByClassificationIdAsync(lngClassificationId);
if (objgs_VpClassificationConst != null)
{
gs_VpClassification_ReFreshThisCache();
return objgs_VpClassificationConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngClassificationId, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngClassificationId:所给的关键字
 * @returns 对象
*/
export  async function gs_VpClassification_GetObjByClassificationIdlocalStorage(lngClassificationId: number) {
const strThisFuncName = "GetObjByClassificationIdlocalStorage";

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationWApi.GetObjByClassificationIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsgs_VpClassificationEN._CurrTabName, lngClassificationId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objgs_VpClassificationCache: clsgs_VpClassificationEN = JSON.parse(strTempObj);
return objgs_VpClassificationCache;
}
try
{
const objgs_VpClassification = await gs_VpClassification_GetObjByClassificationIdAsync(lngClassificationId);
if (objgs_VpClassification != null)
{
localStorage.setItem(strKey, JSON.stringify(objgs_VpClassification));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objgs_VpClassification;
}
return objgs_VpClassification;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngClassificationId, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objgs_VpClassification:所给的对象
 * @returns 对象
*/
export  async function gs_VpClassification_UpdateObjInLstCache(objgs_VpClassification: clsgs_VpClassificationEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
const obj = arrgs_VpClassificationObjLstCache.find(x => x.classificationName == objgs_VpClassification.classificationName);
if (obj != null)
{
objgs_VpClassification.classificationId = obj.classificationId;
ObjectAssign( obj, objgs_VpClassification);
}
else
{
arrgs_VpClassificationObjLstCache.push(objgs_VpClassification);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngClassificationId:所给的关键字
 * @returns 对象
*/
export  async function gs_VpClassification_GetNameByClassificationIdCache(lngClassificationId: number) {

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationWApi.GetNameByClassificationIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
if (arrgs_VpClassificationObjLstCache == null) return "";
try
{
const arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache.filter(x => 
 x.classificationId == lngClassificationId );
let objgs_VpClassification: clsgs_VpClassificationEN;
if (arrgs_VpClassificationSel.length > 0)
{
objgs_VpClassification = arrgs_VpClassificationSel[0];
return objgs_VpClassification.classificationName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, lngClassificationId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function gs_VpClassification_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsgs_VpClassificationEN.con_ClassificationId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsgs_VpClassificationEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsgs_VpClassificationEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngClassificationId = Number(strInValue);
if (lngClassificationId == 0)
{
return "";
}
const objgs_VpClassification = await gs_VpClassification_GetObjByClassificationIdCache(lngClassificationId );
if (objgs_VpClassification == null) return "";
if (objgs_VpClassification.GetFldValue(strOutFldName) == null) return "";
return objgs_VpClassification.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_VpClassification_SortFunDefa(a:clsgs_VpClassificationEN , b:clsgs_VpClassificationEN): number 
{
return a.classificationId-b.classificationId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_VpClassification_SortFunDefa2Fld(a:clsgs_VpClassificationEN , b:clsgs_VpClassificationEN): number 
{
if (a.classificationName == b.classificationName) return a.orderNum - b.orderNum;
else return a.classificationName.localeCompare(b.classificationName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_VpClassification_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_VpClassificationEN.con_ClassificationId:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
return a.classificationId-b.classificationId;
}
case clsgs_VpClassificationEN.con_ClassificationName:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
return a.classificationName.localeCompare(b.classificationName);
}
case clsgs_VpClassificationEN.con_OrderNum:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
return a.orderNum-b.orderNum;
}
case clsgs_VpClassificationEN.con_InUse:
return (a: clsgs_VpClassificationEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsgs_VpClassificationEN.con_UpdDate:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_VpClassificationEN.con_UpdUser:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_VpClassificationEN.con_Memo:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_VpClassification]中不存在!(in ${ gs_VpClassification_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_VpClassificationEN.con_ClassificationId:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
return b.classificationId-a.classificationId;
}
case clsgs_VpClassificationEN.con_ClassificationName:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
return b.classificationName.localeCompare(a.classificationName);
}
case clsgs_VpClassificationEN.con_OrderNum:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
return b.orderNum-a.orderNum;
}
case clsgs_VpClassificationEN.con_InUse:
return (b: clsgs_VpClassificationEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsgs_VpClassificationEN.con_UpdDate:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_VpClassificationEN.con_UpdUser:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_VpClassificationEN.con_Memo:
return (a: clsgs_VpClassificationEN, b: clsgs_VpClassificationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_VpClassification]中不存在!(in ${ gs_VpClassification_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function gs_VpClassification_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_VpClassificationEN.con_ClassificationId:
return (obj: clsgs_VpClassificationEN) => {
return obj.classificationId === value;
}
case clsgs_VpClassificationEN.con_ClassificationName:
return (obj: clsgs_VpClassificationEN) => {
return obj.classificationName === value;
}
case clsgs_VpClassificationEN.con_OrderNum:
return (obj: clsgs_VpClassificationEN) => {
return obj.orderNum === value;
}
case clsgs_VpClassificationEN.con_InUse:
return (obj: clsgs_VpClassificationEN) => {
return obj.inUse === value;
}
case clsgs_VpClassificationEN.con_UpdDate:
return (obj: clsgs_VpClassificationEN) => {
return obj.updDate === value;
}
case clsgs_VpClassificationEN.con_UpdUser:
return (obj: clsgs_VpClassificationEN) => {
return obj.updUser === value;
}
case clsgs_VpClassificationEN.con_Memo:
return (obj: clsgs_VpClassificationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_VpClassification]中不存在!(in ${ gs_VpClassification_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function gs_VpClassification_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsgs_VpClassificationEN.con_ClassificationId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrgs_VpClassification = await gs_VpClassification_GetObjLstCache();
if (arrgs_VpClassification == null) return [];
let arrgs_VpClassificationSel = arrgs_VpClassification;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrgs_VpClassificationSel.length == 0) return [];
return arrgs_VpClassificationSel.map(x=>x.classificationId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_VpClassification_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_VpClassificationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const objgs_VpClassification = gs_VpClassification_GetObjFromJsonObj(returnObj);
return objgs_VpClassification;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_VpClassificationEN._CurrTabName;
if (IsNullOrEmpty(clsgs_VpClassificationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_VpClassificationEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrgs_VpClassificationExObjLstCache: Array<clsgs_VpClassificationEN> = CacheHelper.Get(strKey);
const arrgs_VpClassificationObjLstT = gs_VpClassification_GetObjLstByJSONObjLst(arrgs_VpClassificationExObjLstCache);
return arrgs_VpClassificationObjLstT;
}
try
{
const arrgs_VpClassificationExObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrgs_VpClassificationExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_VpClassificationExObjLst.length);
console.log(strInfo);
return arrgs_VpClassificationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassification_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_VpClassificationEN._CurrTabName;
if (IsNullOrEmpty(clsgs_VpClassificationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_VpClassificationEN.CacheAddiCondition);
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
const arrgs_VpClassificationExObjLstCache: Array<clsgs_VpClassificationEN> = JSON.parse(strTempObjLst);
const arrgs_VpClassificationObjLstT = gs_VpClassification_GetObjLstByJSONObjLst(arrgs_VpClassificationExObjLstCache);
return arrgs_VpClassificationObjLstT;
}
try
{
const arrgs_VpClassificationExObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrgs_VpClassificationExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_VpClassificationExObjLst.length);
console.log(strInfo);
return arrgs_VpClassificationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassification_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsgs_VpClassificationEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrgs_VpClassificationObjLstCache: Array<clsgs_VpClassificationEN> = JSON.parse(strTempObjLst);
return arrgs_VpClassificationObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function gs_VpClassification_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_VpClassificationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassification_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_VpClassificationEN._CurrTabName;
if (IsNullOrEmpty(clsgs_VpClassificationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_VpClassificationEN.CacheAddiCondition);
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
const arrgs_VpClassificationExObjLstCache: Array<clsgs_VpClassificationEN> = JSON.parse(strTempObjLst);
const arrgs_VpClassificationObjLstT = gs_VpClassification_GetObjLstByJSONObjLst(arrgs_VpClassificationExObjLstCache);
return arrgs_VpClassificationObjLstT;
}
try
{
const arrgs_VpClassificationExObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrgs_VpClassificationExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_VpClassificationExObjLst.length);
console.log(strInfo);
return arrgs_VpClassificationExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassification_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsgs_VpClassificationEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrgs_VpClassificationObjLstCache: Array<clsgs_VpClassificationEN> = JSON.parse(strTempObjLst);
return arrgs_VpClassificationObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassification_GetObjLstCache(): Promise<Array<clsgs_VpClassificationEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrgs_VpClassificationObjLstCache;
switch (clsgs_VpClassificationEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstClientCache();
break;
default:
arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstClientCache();
break;
}
return arrgs_VpClassificationObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassification_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrgs_VpClassificationObjLstCache;
switch (clsgs_VpClassificationEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrgs_VpClassificationObjLstCache = null;
break;
default:
arrgs_VpClassificationObjLstCache = null;
break;
}
return arrgs_VpClassificationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngClassificationIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_VpClassification_GetSubObjLstCache(objgs_VpClassificationCond: clsgs_VpClassificationEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
let arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache;
if (objgs_VpClassificationCond.sfFldComparisonOp == null || objgs_VpClassificationCond.sfFldComparisonOp == "") return arrgs_VpClassificationSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_VpClassificationCond.sfFldComparisonOp);
//console.log("clsgs_VpClassificationWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_VpClassificationCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_VpClassificationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objgs_VpClassificationCond), gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_VpClassificationEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrClassificationId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_VpClassification_GetObjLstByClassificationIdLstAsync(arrClassificationId: Array<string>): Promise<Array<clsgs_VpClassificationEN>>  
{
const strThisFuncName = "GetObjLstByClassificationIdLstAsync";
const strAction = "GetObjLstByClassificationIdLst";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrClassificationId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassification_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param arrlngClassificationIdLst:关键字列表
 * @returns 对象列表
*/
export  async function gs_VpClassification_GetObjLstByClassificationIdLstCache(arrClassificationIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstByClassificationIdLstCache";
try
{
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
const arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache.filter(x => arrClassificationIdLst.indexOf(x.classificationId)>-1);
return arrgs_VpClassificationSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrClassificationIdLst.join(","), gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_VpClassificationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassification_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_VpClassificationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassification_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_VpClassificationEN>();
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
if (arrgs_VpClassificationObjLstCache.length == 0) return arrgs_VpClassificationObjLstCache;
let arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objgs_VpClassificationCond = new clsgs_VpClassificationEN();
ObjectAssign(objgs_VpClassificationCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsgs_VpClassificationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_VpClassificationSel.length == 0) return arrgs_VpClassificationSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrgs_VpClassificationSel = arrgs_VpClassificationSel.sort(gs_VpClassification_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrgs_VpClassificationSel = arrgs_VpClassificationSel.sort(objPagerPara.sortFun);
}
arrgs_VpClassificationSel = arrgs_VpClassificationSel.slice(intStart, intEnd);     
return arrgs_VpClassificationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_VpClassificationEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function gs_VpClassification_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_VpClassificationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_VpClassificationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassification_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param lngClassificationId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_VpClassification_DelRecordAsync(lngClassificationId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngClassificationId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param arrClassificationId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_VpClassification_Delgs_VpClassificationsAsync(arrClassificationId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_VpClassificationsAsync";
const strAction = "Delgs_VpClassifications";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrClassificationId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_Delgs_VpClassificationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_VpClassificationsByCondAsync";
const strAction = "Delgs_VpClassificationsByCond";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassification_AddNewRecordAsync(objgs_VpClassificationEN: clsgs_VpClassificationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_VpClassificationEN);
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassification_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassification_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_VpClassificationEN);
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassification_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_VpClassificationEN);
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassification_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_VpClassificationEN);
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassification_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objgs_VpClassificationEN);
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_VpClassification_AddNewRecordWithReturnKeyAsync(objgs_VpClassificationEN: clsgs_VpClassificationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_VpClassification_UpdateRecordAsync(objgs_VpClassificationEN: clsgs_VpClassificationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_VpClassificationEN.sfUpdFldSetStr === undefined || objgs_VpClassificationEN.sfUpdFldSetStr === null || objgs_VpClassificationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_VpClassificationEN.classificationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_VpClassification_UpdateWithConditionAsync(objgs_VpClassificationEN: clsgs_VpClassificationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_VpClassificationEN.sfUpdFldSetStr === undefined || objgs_VpClassificationEN.sfUpdFldSetStr === null || objgs_VpClassificationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_VpClassificationEN.classificationId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);
objgs_VpClassificationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param objlngClassificationIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_VpClassification_IsExistRecordCache(objgs_VpClassificationCond: clsgs_VpClassificationEN) {
const strThisFuncName = "IsExistRecordCache";
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
if (arrgs_VpClassificationObjLstCache == null) return false;
let arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache;
if (objgs_VpClassificationCond.sfFldComparisonOp == null || objgs_VpClassificationCond.sfFldComparisonOp == "") return arrgs_VpClassificationSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_VpClassificationCond.sfFldComparisonOp);
//console.log("clsgs_VpClassificationWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_VpClassificationCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_VpClassificationSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objgs_VpClassificationCond), gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param lngClassificationId:所给的关键字
 * @returns 对象
*/
export  async function gs_VpClassification_IsExistCache(lngClassificationId:number) {
const strThisFuncName = "IsExistCache";
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
if (arrgs_VpClassificationObjLstCache == null) return false;
try
{
const arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache.filter(x => x.classificationId == lngClassificationId);
if (arrgs_VpClassificationSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngClassificationId, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngClassificationId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_VpClassification_IsExistAsync(lngClassificationId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngClassificationId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationCond:条件对象
 * @returns 对象列表记录数
*/
export  async function gs_VpClassification_GetRecCountByCondCache(objgs_VpClassificationCond: clsgs_VpClassificationEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrgs_VpClassificationObjLstCache = await gs_VpClassification_GetObjLstCache();
if (arrgs_VpClassificationObjLstCache == null) return 0;
let arrgs_VpClassificationSel = arrgs_VpClassificationObjLstCache;
if (objgs_VpClassificationCond.sfFldComparisonOp == null || objgs_VpClassificationCond.sfFldComparisonOp == "") return arrgs_VpClassificationSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_VpClassificationCond.sfFldComparisonOp);
//console.log("clsgs_VpClassificationWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_VpClassificationCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationSel = arrgs_VpClassificationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_VpClassificationSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objgs_VpClassificationCond), gs_VpClassification_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassification_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_VpClassification_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassification_ConstructorName, strThisFuncName);
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
export  function gs_VpClassification_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_VpClassification_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsgs_VpClassificationEN._CurrTabName;
switch (clsgs_VpClassificationEN.CacheModeId)
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
export  function gs_VpClassification_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsgs_VpClassificationEN._CurrTabName;
switch (clsgs_VpClassificationEN.CacheModeId)
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function gs_VpClassification_BindDdl_ClassificationIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_ClassificationIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ClassificationIdInDivCache");
const arrObjLstSel = await gs_VpClassification_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsgs_VpClassificationEN.con_ClassificationId, clsgs_VpClassificationEN.con_ClassificationName, "各观点分类表");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_VpClassification_CheckPropertyNew(pobjgs_VpClassificationEN: clsgs_VpClassificationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_VpClassificationEN.classificationName) === true )
{
 throw new Error("(errid:Watl000411)字段[分类名称]不能为空(In 各观点分类表)!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_VpClassificationEN.classificationName) == false && GetStrLen(pobjgs_VpClassificationEN.classificationName) > 200)
{
 throw new Error("(errid:Watl000413)字段[分类名称(classificationName)]的长度不能超过200(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.classificationName)(clsgs_VpClassificationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updDate) == false && GetStrLen(pobjgs_VpClassificationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.updDate)(clsgs_VpClassificationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updUser) == false && GetStrLen(pobjgs_VpClassificationEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.updUser)(clsgs_VpClassificationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.memo) == false && GetStrLen(pobjgs_VpClassificationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.memo)(clsgs_VpClassificationBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_VpClassificationEN.classificationId && undefined !== pobjgs_VpClassificationEN.classificationId && tzDataType.isNumber(pobjgs_VpClassificationEN.classificationId) === false)
{
 throw new Error("(errid:Watl000414)字段[分类Id(classificationId)]的值:[$(pobjgs_VpClassificationEN.classificationId)], 非法,应该为数值型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.classificationName) == false && undefined !== pobjgs_VpClassificationEN.classificationName && tzDataType.isString(pobjgs_VpClassificationEN.classificationName) === false)
{
 throw new Error("(errid:Watl000414)字段[分类名称(classificationName)]的值:[$(pobjgs_VpClassificationEN.classificationName)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
if (null != pobjgs_VpClassificationEN.orderNum && undefined !== pobjgs_VpClassificationEN.orderNum && tzDataType.isNumber(pobjgs_VpClassificationEN.orderNum) === false)
{
 throw new Error("(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjgs_VpClassificationEN.orderNum)], 非法,应该为数值型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
if (null != pobjgs_VpClassificationEN.inUse && undefined !== pobjgs_VpClassificationEN.inUse && tzDataType.isBoolean(pobjgs_VpClassificationEN.inUse) === false)
{
 throw new Error("(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjgs_VpClassificationEN.inUse)], 非法,应该为布尔型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updDate) == false && undefined !== pobjgs_VpClassificationEN.updDate && tzDataType.isString(pobjgs_VpClassificationEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_VpClassificationEN.updDate)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updUser) == false && undefined !== pobjgs_VpClassificationEN.updUser && tzDataType.isString(pobjgs_VpClassificationEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_VpClassificationEN.updUser)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.memo) == false && undefined !== pobjgs_VpClassificationEN.memo && tzDataType.isString(pobjgs_VpClassificationEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_VpClassificationEN.memo)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_VpClassification_CheckProperty4Update(pobjgs_VpClassificationEN: clsgs_VpClassificationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_VpClassificationEN.classificationName) == false && GetStrLen(pobjgs_VpClassificationEN.classificationName) > 200)
{
 throw new Error("(errid:Watl000416)字段[分类名称(classificationName)]的长度不能超过200(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.classificationName)(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updDate) == false && GetStrLen(pobjgs_VpClassificationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.updDate)(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updUser) == false && GetStrLen(pobjgs_VpClassificationEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.updUser)(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.memo) == false && GetStrLen(pobjgs_VpClassificationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 各观点分类表(gs_VpClassification))!值:$(pobjgs_VpClassificationEN.memo)(clsgs_VpClassificationBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_VpClassificationEN.classificationId && undefined !== pobjgs_VpClassificationEN.classificationId && tzDataType.isNumber(pobjgs_VpClassificationEN.classificationId) === false)
{
 throw new Error("(errid:Watl000417)字段[分类Id(classificationId)]的值:[$(pobjgs_VpClassificationEN.classificationId)], 非法,应该为数值型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.classificationName) == false && undefined !== pobjgs_VpClassificationEN.classificationName && tzDataType.isString(pobjgs_VpClassificationEN.classificationName) === false)
{
 throw new Error("(errid:Watl000417)字段[分类名称(classificationName)]的值:[$(pobjgs_VpClassificationEN.classificationName)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (null != pobjgs_VpClassificationEN.orderNum && undefined !== pobjgs_VpClassificationEN.orderNum && tzDataType.isNumber(pobjgs_VpClassificationEN.orderNum) === false)
{
 throw new Error("(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjgs_VpClassificationEN.orderNum)], 非法,应该为数值型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (null != pobjgs_VpClassificationEN.inUse && undefined !== pobjgs_VpClassificationEN.inUse && tzDataType.isBoolean(pobjgs_VpClassificationEN.inUse) === false)
{
 throw new Error("(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjgs_VpClassificationEN.inUse)], 非法,应该为布尔型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updDate) == false && undefined !== pobjgs_VpClassificationEN.updDate && tzDataType.isString(pobjgs_VpClassificationEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_VpClassificationEN.updDate)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.updUser) == false && undefined !== pobjgs_VpClassificationEN.updUser && tzDataType.isString(pobjgs_VpClassificationEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_VpClassificationEN.updUser)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationEN.memo) == false && undefined !== pobjgs_VpClassificationEN.memo && tzDataType.isString(pobjgs_VpClassificationEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_VpClassificationEN.memo)], 非法,应该为字符型(In 各观点分类表(gs_VpClassification))!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_VpClassificationEN.classificationId 
 || pobjgs_VpClassificationEN.classificationId != null && pobjgs_VpClassificationEN.classificationId.toString()  ===  ""
 || pobjgs_VpClassificationEN.classificationId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000064)字段[分类Id]不能为空(In 各观点分类表)!(clsgs_VpClassificationBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_VpClassification_GetJSONStrByObj (pobjgs_VpClassificationEN: clsgs_VpClassificationEN): string
{
pobjgs_VpClassificationEN.sfUpdFldSetStr = pobjgs_VpClassificationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_VpClassificationEN);
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
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function gs_VpClassification_GetObjLstByJSONStr (strJSON: string): Array<clsgs_VpClassificationEN>
{
let arrgs_VpClassificationObjLst = new Array<clsgs_VpClassificationEN>();
if (strJSON === "")
{
return arrgs_VpClassificationObjLst;
}
try
{
arrgs_VpClassificationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_VpClassificationObjLst;
}
return arrgs_VpClassificationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_VpClassificationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_VpClassification_GetObjLstByJSONObjLst (arrgs_VpClassificationObjLstS: Array<clsgs_VpClassificationEN>): Array<clsgs_VpClassificationEN>
{
const arrgs_VpClassificationObjLst = new Array<clsgs_VpClassificationEN>();
for (const objInFor of arrgs_VpClassificationObjLstS) {
const obj1 = gs_VpClassification_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_VpClassificationObjLst.push(obj1);
}
return arrgs_VpClassificationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_VpClassification_GetObjByJSONStr (strJSON: string): clsgs_VpClassificationEN
{
let pobjgs_VpClassificationEN = new clsgs_VpClassificationEN();
if (strJSON === "")
{
return pobjgs_VpClassificationEN;
}
try
{
pobjgs_VpClassificationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_VpClassificationEN;
}
return pobjgs_VpClassificationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_VpClassification_GetCombineCondition(objgs_VpClassificationCond: clsgs_VpClassificationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objgs_VpClassificationCond.dicFldComparisonOp[clsgs_VpClassificationEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_VpClassificationEN.con_ClassificationId, objgs_VpClassificationCond.classificationId, strComparisonOpClassificationId);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_ClassificationName) == true)
{
const strComparisonOpClassificationName:string = objgs_VpClassificationCond.dicFldComparisonOp[clsgs_VpClassificationEN.con_ClassificationName];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationEN.con_ClassificationName, objgs_VpClassificationCond.classificationName, strComparisonOpClassificationName);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objgs_VpClassificationCond.dicFldComparisonOp[clsgs_VpClassificationEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsgs_VpClassificationEN.con_OrderNum, objgs_VpClassificationCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_InUse) == true)
{
if (objgs_VpClassificationCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsgs_VpClassificationEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsgs_VpClassificationEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_VpClassificationCond.dicFldComparisonOp[clsgs_VpClassificationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationEN.con_UpdDate, objgs_VpClassificationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_VpClassificationCond.dicFldComparisonOp[clsgs_VpClassificationEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationEN.con_UpdUser, objgs_VpClassificationCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationCond.dicFldComparisonOp, clsgs_VpClassificationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_VpClassificationCond.dicFldComparisonOp[clsgs_VpClassificationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationEN.con_Memo, objgs_VpClassificationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_VpClassification(各观点分类表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strClassificationName: 分类名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_VpClassification_GetUniCondStr(objgs_VpClassificationEN: clsgs_VpClassificationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ClassificationName = '{0}'", objgs_VpClassificationEN.classificationName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_VpClassification(各观点分类表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strClassificationName: 分类名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_VpClassification_GetUniCondStr4Update(objgs_VpClassificationEN: clsgs_VpClassificationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ClassificationId <> '{0}'", objgs_VpClassificationEN.classificationId);
 strWhereCond +=  Format(" and ClassificationName = '{0}'", objgs_VpClassificationEN.classificationName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_VpClassificationENS:源对象
 * @param objgs_VpClassificationENT:目标对象
*/
export  function gs_VpClassification_CopyObjTo(objgs_VpClassificationENS: clsgs_VpClassificationEN , objgs_VpClassificationENT: clsgs_VpClassificationEN ): void 
{
objgs_VpClassificationENT.classificationId = objgs_VpClassificationENS.classificationId; //分类Id
objgs_VpClassificationENT.classificationName = objgs_VpClassificationENS.classificationName; //分类名称
objgs_VpClassificationENT.orderNum = objgs_VpClassificationENS.orderNum; //序号
objgs_VpClassificationENT.inUse = objgs_VpClassificationENS.inUse; //是否在用
objgs_VpClassificationENT.updDate = objgs_VpClassificationENS.updDate; //修改日期
objgs_VpClassificationENT.updUser = objgs_VpClassificationENS.updUser; //修改人
objgs_VpClassificationENT.memo = objgs_VpClassificationENS.memo; //备注
objgs_VpClassificationENT.sfUpdFldSetStr = objgs_VpClassificationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_VpClassificationENS:源对象
 * @param objgs_VpClassificationENT:目标对象
*/
export  function gs_VpClassification_GetObjFromJsonObj(objgs_VpClassificationENS: clsgs_VpClassificationEN): clsgs_VpClassificationEN 
{
 const objgs_VpClassificationENT: clsgs_VpClassificationEN = new clsgs_VpClassificationEN();
ObjectAssign(objgs_VpClassificationENT, objgs_VpClassificationENS);
 return objgs_VpClassificationENT;
}