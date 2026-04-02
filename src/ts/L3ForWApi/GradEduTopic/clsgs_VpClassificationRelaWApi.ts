
 /**
 * 类名:clsgs_VpClassificationRelaWApi
 * 表名:gs_VpClassificationRela(01120777)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:46
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
 * 观点分类主题关系表(gs_VpClassificationRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsgs_VpClassificationRelaEN } from "@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_VpClassificationRela_Controller = "gs_VpClassificationRelaApi";
 export const gs_VpClassificationRela_ConstructorName = "gs_VpClassificationRela";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function gs_VpClassificationRela_SplitKeyLst(strKeyLst: string)  
{
const arrKey = strKeyLst.split('|');
if (arrKey.length != 2)
{
const strMsg = "请选择需要修改的记录!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
const objKeyLst = {
classificationId: Number(arrKey[0]),
topicId: arrKey[1],
};
if (objKeyLst.classificationId == 0)
{
const strMsg = "关键字段(classificationId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.topicId)== true)
{
const strMsg = "关键字段(topicId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngClassificationId:关键字
 * @returns 对象
 **/
export  async function gs_VpClassificationRela_GetObjByKeyLstAsync(lngClassificationId: number,strTopicId: string): Promise<clsgs_VpClassificationRelaEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsgs_VpClassificationRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsgs_VpClassificationRelaWApi.GetObjByKeyLstAsync)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngClassificationId,
strTopicId,
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
const objgs_VpClassificationRela = gs_VpClassificationRela_GetObjFromJsonObj(returnObj);
return objgs_VpClassificationRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetObjByKeyLstCache(lngClassificationId:number,strTopicId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByKeyLstCache";

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationRelaWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsgs_VpClassificationRelaWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsgs_VpClassificationRelaWApi.GetObjByKeyLstCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
try
{
const arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache.filter(x => 
 x.classificationId == lngClassificationId 
 && x.topicId == strTopicId );
let objgs_VpClassificationRela: clsgs_VpClassificationRelaEN;
if (arrgs_VpClassificationRelaSel.length > 0)
{
objgs_VpClassificationRela = arrgs_VpClassificationRelaSel[0];
return objgs_VpClassificationRela;
}
else
{
if (bolTryAsyncOnce == true)
{
const objgs_VpClassificationRelaConst = await gs_VpClassificationRela_GetObjByKeyLstAsync(lngClassificationId,strTopicId);
if (objgs_VpClassificationRelaConst != null)
{
gs_VpClassificationRela_ReFreshThisCache(strTopicId);
return objgs_VpClassificationRelaConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngClassificationId, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetObjByKeyLstlocalStorage(lngClassificationId: number,strTopicId: string) {
const strThisFuncName = "GetObjByKeyLstlocalStorage";

if (lngClassificationId == 0)
{
  const strMsg = Format("参数:[lngClassificationId]不能为空!(In clsgs_VpClassificationRelaWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsgs_VpClassificationRelaWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsgs_VpClassificationRelaWApi.GetObjByKeyLstlocalStorage)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, lngClassificationId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objgs_VpClassificationRelaCache: clsgs_VpClassificationRelaEN = JSON.parse(strTempObj);
return objgs_VpClassificationRelaCache;
}
try
{
const objgs_VpClassificationRela = await gs_VpClassificationRela_GetObjByKeyLstAsync(lngClassificationId,strTopicId);
if (objgs_VpClassificationRela != null)
{
localStorage.setItem(strKey, JSON.stringify(objgs_VpClassificationRela));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objgs_VpClassificationRela;
}
return objgs_VpClassificationRela;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngClassificationId, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objgs_VpClassificationRela:所给的对象
 * @returns 对象
*/
export  async function gs_VpClassificationRela_UpdateObjInLstCache(objgs_VpClassificationRela: clsgs_VpClassificationRelaEN,strTopicId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
const obj = arrgs_VpClassificationRelaObjLstCache.find(x => x.classificationId == objgs_VpClassificationRela.classificationId && x.topicId == objgs_VpClassificationRela.topicId);
if (obj != null)
{
objgs_VpClassificationRela.classificationId = obj.classificationId;
ObjectAssign( obj, objgs_VpClassificationRela);
}
else
{
arrgs_VpClassificationRelaObjLstCache.push(objgs_VpClassificationRela);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
/*该表没有名称字段,不能生成此函数!*/

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
export  async function gs_VpClassificationRela_func( strInFldName1:string , strInFldName2:string  , strOutFldName:string ,  strInValue1:number , strInValue2:string  )
{
//const strThisFuncName = "func";

if (strInFldName1 != clsgs_VpClassificationRelaEN.con_ClassificationId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName1);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName2 != clsgs_VpClassificationRelaEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName2);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsgs_VpClassificationRelaEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsgs_VpClassificationRelaEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngClassificationId = Number(strInValue1);
if (lngClassificationId == 0)
{
return "";
}
const strTopicId = strInValue2;
if (IsNullOrEmpty(strTopicId) == true)
{
return "";
}
const objgs_VpClassificationRela = await gs_VpClassificationRela_GetObjByKeyLstCache(lngClassificationId,strTopicId );
if (objgs_VpClassificationRela == null) return "";
if (objgs_VpClassificationRela.GetFldValue(strOutFldName) == null) return "";
return objgs_VpClassificationRela.GetFldValue(strOutFldName).toString();
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
export  function gs_VpClassificationRela_SortFunDefa(a:clsgs_VpClassificationRelaEN , b:clsgs_VpClassificationRelaEN): number 
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
export  function gs_VpClassificationRela_SortFunDefa2Fld(a:clsgs_VpClassificationRelaEN , b:clsgs_VpClassificationRelaEN): number 
{
if (a.orderNum == b.orderNum) return a.updDate.localeCompare(b.updDate);
else return a.orderNum - b.orderNum;
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
export  function gs_VpClassificationRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_VpClassificationRelaEN.con_ClassificationId:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
return a.classificationId-b.classificationId;
}
case clsgs_VpClassificationRelaEN.con_TopicId:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
return a.topicId.localeCompare(b.topicId);
}
case clsgs_VpClassificationRelaEN.con_OrderNum:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
return a.orderNum-b.orderNum;
}
case clsgs_VpClassificationRelaEN.con_UpdDate:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_VpClassificationRelaEN.con_UpdUser:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_VpClassificationRelaEN.con_Memo:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_VpClassificationRela]中不存在!(in ${ gs_VpClassificationRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_VpClassificationRelaEN.con_ClassificationId:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
return b.classificationId-a.classificationId;
}
case clsgs_VpClassificationRelaEN.con_TopicId:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
return b.topicId.localeCompare(a.topicId);
}
case clsgs_VpClassificationRelaEN.con_OrderNum:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
return b.orderNum-a.orderNum;
}
case clsgs_VpClassificationRelaEN.con_UpdDate:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_VpClassificationRelaEN.con_UpdUser:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_VpClassificationRelaEN.con_Memo:
return (a: clsgs_VpClassificationRelaEN, b: clsgs_VpClassificationRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_VpClassificationRela]中不存在!(in ${ gs_VpClassificationRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_VpClassificationRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_VpClassificationRelaEN.con_ClassificationId:
return (obj: clsgs_VpClassificationRelaEN) => {
return obj.classificationId === value;
}
case clsgs_VpClassificationRelaEN.con_TopicId:
return (obj: clsgs_VpClassificationRelaEN) => {
return obj.topicId === value;
}
case clsgs_VpClassificationRelaEN.con_OrderNum:
return (obj: clsgs_VpClassificationRelaEN) => {
return obj.orderNum === value;
}
case clsgs_VpClassificationRelaEN.con_UpdDate:
return (obj: clsgs_VpClassificationRelaEN) => {
return obj.updDate === value;
}
case clsgs_VpClassificationRelaEN.con_UpdUser:
return (obj: clsgs_VpClassificationRelaEN) => {
return obj.updUser === value;
}
case clsgs_VpClassificationRelaEN.con_Memo:
return (obj: clsgs_VpClassificationRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_VpClassificationRela]中不存在!(in ${ gs_VpClassificationRela_ConstructorName}.${ strThisFuncName})`;
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
 @param strTopicId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function gs_VpClassificationRela_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strTopicIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strTopicIdClassfy) == true)
{
  const strMsg = Format("参数:[strTopicIdClassfy]不能为空!(In clsgs_VpClassificationRelaWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicIdClassfy]的长度:[{0}]不正确!(clsgs_VpClassificationRelaWApi.funcKey)", strTopicIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsgs_VpClassificationRelaEN.con_ClassificationId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName == clsgs_VpClassificationRelaEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrgs_VpClassificationRela = await gs_VpClassificationRela_GetObjLstCache(strTopicIdClassfy);
if (arrgs_VpClassificationRela == null) return [];
let arrgs_VpClassificationRelaSel = arrgs_VpClassificationRela;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrgs_VpClassificationRelaSel.length == 0) return [];
return arrgs_VpClassificationRela.map(x=>`${x.classificationId}|${x.topicId}`);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_VpClassificationRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_VpClassificationRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const objgs_VpClassificationRela = gs_VpClassificationRela_GetObjFromJsonObj(returnObj);
return objgs_VpClassificationRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetObjLstClientCache(strTopicId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsgs_VpClassificationRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clsgs_VpClassificationRelaEN.WhereFormat, strTopicId);
}
else
{
strWhereCond = Format("TopicId='{0}'", strTopicId);
}
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
if (IsNullOrEmpty(clsgs_VpClassificationRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_VpClassificationRelaEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrgs_VpClassificationRelaExObjLstCache: Array<clsgs_VpClassificationRelaEN> = CacheHelper.Get(strKey);
const arrgs_VpClassificationRelaObjLstT = gs_VpClassificationRela_GetObjLstByJSONObjLst(arrgs_VpClassificationRelaExObjLstCache);
return arrgs_VpClassificationRelaObjLstT;
}
try
{
const arrgs_VpClassificationRelaExObjLst = await gs_VpClassificationRela_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrgs_VpClassificationRelaExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_VpClassificationRelaExObjLst.length);
console.log(strInfo);
return arrgs_VpClassificationRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstlocalStorage(strTopicId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsgs_VpClassificationRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clsgs_VpClassificationRelaEN.WhereFormat, strTopicId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsgs_VpClassificationRelaEN.con_TopicId, strTopicId);
}
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
if (IsNullOrEmpty(clsgs_VpClassificationRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_VpClassificationRelaEN.CacheAddiCondition);
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
const arrgs_VpClassificationRelaExObjLstCache: Array<clsgs_VpClassificationRelaEN> = JSON.parse(strTempObjLst);
const arrgs_VpClassificationRelaObjLstT = gs_VpClassificationRela_GetObjLstByJSONObjLst(arrgs_VpClassificationRelaExObjLstCache);
return arrgs_VpClassificationRelaObjLstT;
}
try
{
const arrgs_VpClassificationRelaExObjLst = await gs_VpClassificationRela_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrgs_VpClassificationRelaExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_VpClassificationRelaExObjLst.length);
console.log(strInfo);
return arrgs_VpClassificationRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstlocalStoragePureCache(strTopicId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrgs_VpClassificationRelaObjLstCache: Array<clsgs_VpClassificationRelaEN> = JSON.parse(strTempObjLst);
return arrgs_VpClassificationRelaObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_VpClassificationRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassificationRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetObjLstsessionStorage(strTopicId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsgs_VpClassificationRelaEN.WhereFormat) == false)
{
strWhereCond = Format(clsgs_VpClassificationRelaEN.WhereFormat, strTopicId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsgs_VpClassificationRelaEN.con_TopicId, strTopicId);
}
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
if (IsNullOrEmpty(clsgs_VpClassificationRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_VpClassificationRelaEN.CacheAddiCondition);
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
const arrgs_VpClassificationRelaExObjLstCache: Array<clsgs_VpClassificationRelaEN> = JSON.parse(strTempObjLst);
const arrgs_VpClassificationRelaObjLstT = gs_VpClassificationRela_GetObjLstByJSONObjLst(arrgs_VpClassificationRelaExObjLstCache);
return arrgs_VpClassificationRelaObjLstT;
}
try
{
const arrgs_VpClassificationRelaExObjLst = await gs_VpClassificationRela_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrgs_VpClassificationRelaExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_VpClassificationRelaExObjLst.length);
console.log(strInfo);
return arrgs_VpClassificationRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstsessionStoragePureCache(strTopicId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrgs_VpClassificationRelaObjLstCache: Array<clsgs_VpClassificationRelaEN> = JSON.parse(strTempObjLst);
return arrgs_VpClassificationRelaObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstCache(strTopicId: string): Promise<Array<clsgs_VpClassificationRelaEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空！(In clsgs_VpClassificationRelaWApi.gs_VpClassificationRela_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确！(clsgs_VpClassificationRelaWApi.gs_VpClassificationRela_GetObjLstCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
let arrgs_VpClassificationRelaObjLstCache;
switch (clsgs_VpClassificationRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstsessionStorage(strTopicId);
break;
case "03"://localStorage
arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstlocalStorage(strTopicId);
break;
case "02"://ClientCache
arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstClientCache(strTopicId);
break;
default:
arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstClientCache(strTopicId);
break;
}
return arrgs_VpClassificationRelaObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstPureCache(strTopicId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrgs_VpClassificationRelaObjLstCache;
switch (clsgs_VpClassificationRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstsessionStoragePureCache(strTopicId);
break;
case "03"://localStorage
arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstlocalStoragePureCache(strTopicId);
break;
case "02"://ClientCache
arrgs_VpClassificationRelaObjLstCache = null;
break;
default:
arrgs_VpClassificationRelaObjLstCache = null;
break;
}
return arrgs_VpClassificationRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngClassificationIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_VpClassificationRela_GetSubObjLstCache(objgs_VpClassificationRelaCond: clsgs_VpClassificationRelaEN ,strTopicId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
let arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache;
if (objgs_VpClassificationRelaCond.sfFldComparisonOp == null || objgs_VpClassificationRelaCond.sfFldComparisonOp == "") return arrgs_VpClassificationRelaSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_VpClassificationRelaCond.sfFldComparisonOp);
//console.log("clsgs_VpClassificationRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_VpClassificationRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_VpClassificationRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objgs_VpClassificationRelaCond), gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_VpClassificationRelaEN>();
}


 /// <summary>
 /// 把多个关键字段的值连接起来,用|连接(Join)--gs_VpClassificationRela(观点分类主题关系表)
 /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
 /// </summary>
 /// <param name = "objgs_VpClassificationRelaEN">需要连接的对象</param>
 /// <returns></returns>
export  function gs_VpClassificationRela_JoinByKeyLst(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN):string
{
//检测记录是否存在
const strResult = `${objgs_VpClassificationRelaEN.classificationId}|${objgs_VpClassificationRelaEN.topicId}`
return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrlngClassificationIdLst:关键字列表
 * @returns 对象列表
*/
export  async function gs_VpClassificationRela_GetObjLstByKeyLstsCache(arrKeysLst: Array<string> ,strTopicId: string) {
const strThisFuncName = "GetObjLstByKeyLstsCache";
try
{
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
const arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache.filter(x => arrKeysLst.indexOf(gs_VpClassificationRela_JoinByKeyLst(x))>-1);
return arrgs_VpClassificationRelaSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrKeysLst.join(","), gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_VpClassificationRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassificationRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_VpClassificationRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassificationRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strTopicId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_VpClassificationRelaEN>();
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
if (arrgs_VpClassificationRelaObjLstCache.length == 0) return arrgs_VpClassificationRelaObjLstCache;
let arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objgs_VpClassificationRelaCond = new clsgs_VpClassificationRelaEN();
ObjectAssign(objgs_VpClassificationRelaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsgs_VpClassificationRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_VpClassificationRelaSel.length == 0) return arrgs_VpClassificationRelaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.sort(gs_VpClassificationRela_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.sort(objPagerPara.sortFun);
}
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.slice(intStart, intEnd);     
return arrgs_VpClassificationRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_VpClassificationRelaEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function gs_VpClassificationRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_VpClassificationRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_VpClassificationRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_VpClassificationRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param lngClassificationId,strTopicId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function gs_VpClassificationRela_DelRecKeyLstAsync(lngClassificationId: number,strTopicId: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
"ClassificationId": lngClassificationId, 
"TopicId": strTopicId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export  async function gs_VpClassificationRela_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKeyLsts, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_Delgs_VpClassificationRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_VpClassificationRelasByCondAsync";
const strAction = "Delgs_VpClassificationRelasByCond";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassificationRela_AddNewRecordAsync(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_VpClassificationRelaEN);
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassificationRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassificationRela_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_VpClassificationRelaEN);
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassificationRela_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_VpClassificationRelaEN);
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassificationRela_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_VpClassificationRelaEN);
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_VpClassificationRela_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objgs_VpClassificationRelaEN);
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_VpClassificationRela_AddNewRecordWithReturnKeyAsync(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_VpClassificationRela_UpdateRecordAsync(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_VpClassificationRelaEN.sfUpdFldSetStr === undefined || objgs_VpClassificationRelaEN.sfUpdFldSetStr === null || objgs_VpClassificationRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_VpClassificationRelaEN.classificationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_VpClassificationRela_UpdateWithConditionAsync(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_VpClassificationRelaEN.sfUpdFldSetStr === undefined || objgs_VpClassificationRelaEN.sfUpdFldSetStr === null || objgs_VpClassificationRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_VpClassificationRelaEN.classificationId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);
objgs_VpClassificationRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_VpClassificationRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_IsExistRecordCache(objgs_VpClassificationRelaCond: clsgs_VpClassificationRelaEN,strTopicId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
if (arrgs_VpClassificationRelaObjLstCache == null) return false;
let arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache;
if (objgs_VpClassificationRelaCond.sfFldComparisonOp == null || objgs_VpClassificationRelaCond.sfFldComparisonOp == "") return arrgs_VpClassificationRelaSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_VpClassificationRelaCond.sfFldComparisonOp);
//console.log("clsgs_VpClassificationRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_VpClassificationRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_VpClassificationRelaSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objgs_VpClassificationRelaCond), gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_IsExistCache(lngClassificationId:number,strTopicId:string) {
const strThisFuncName = "IsExistCache";
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
if (arrgs_VpClassificationRelaObjLstCache == null) return false;
try
{
const arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache.filter(x => x.classificationId == lngClassificationId && x.topicId == strTopicId);
if (arrgs_VpClassificationRelaSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngClassificationId, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_IsExistAsync(lngClassificationId: number,strTopicId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngClassificationId,
strTopicId,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
 * @param objgs_VpClassificationRelaCond:条件对象
 * @returns 对象列表记录数
*/
export  async function gs_VpClassificationRela_GetRecCountByCondCache(objgs_VpClassificationRelaCond: clsgs_VpClassificationRelaEN ,strTopicId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrgs_VpClassificationRelaObjLstCache = await gs_VpClassificationRela_GetObjLstCache(strTopicId);
if (arrgs_VpClassificationRelaObjLstCache == null) return 0;
let arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaObjLstCache;
if (objgs_VpClassificationRelaCond.sfFldComparisonOp == null || objgs_VpClassificationRelaCond.sfFldComparisonOp == "") return arrgs_VpClassificationRelaSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_VpClassificationRelaCond.sfFldComparisonOp);
//console.log("clsgs_VpClassificationRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_VpClassificationRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_VpClassificationRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_VpClassificationRelaSel = arrgs_VpClassificationRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_VpClassificationRelaSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objgs_VpClassificationRelaCond), gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  async function gs_VpClassificationRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_VpClassificationRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_VpClassificationRela_ConstructorName, strThisFuncName);
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
export  function gs_VpClassificationRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_VpClassificationRela_ReFreshCache(strTopicId: string):void
{

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsgs_VpClassificationRelaWApi.clsgs_VpClassificationRelaWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsgs_VpClassificationRelaWApi.clsgs_VpClassificationRelaWApi.ReFreshCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
switch (clsgs_VpClassificationRelaEN.CacheModeId)
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
export  function gs_VpClassificationRela_ReFreshThisCache(strTopicId: string):void
{

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsgs_VpClassificationRelaWApi.gs_VpClassificationRela_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsgs_VpClassificationRelaWApi.gs_VpClassificationRela_ReFreshThisCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsgs_VpClassificationRelaEN._CurrTabName, strTopicId);
switch (clsgs_VpClassificationRelaEN.CacheModeId)
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
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_VpClassificationRela_CheckPropertyNew(pobjgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.topicId) == false && GetStrLen(pobjgs_VpClassificationRelaEN.topicId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.topicId)(clsgs_VpClassificationRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updDate) == false && GetStrLen(pobjgs_VpClassificationRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.updDate)(clsgs_VpClassificationRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updUser) == false && GetStrLen(pobjgs_VpClassificationRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.updUser)(clsgs_VpClassificationRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.memo) == false && GetStrLen(pobjgs_VpClassificationRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.memo)(clsgs_VpClassificationRelaBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_VpClassificationRelaEN.classificationId && undefined !== pobjgs_VpClassificationRelaEN.classificationId && tzDataType.isNumber(pobjgs_VpClassificationRelaEN.classificationId) === false)
{
 throw new Error("(errid:Watl000414)字段[分类Id(classificationId)]的值:[$(pobjgs_VpClassificationRelaEN.classificationId)], 非法,应该为数值型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.topicId) == false && undefined !== pobjgs_VpClassificationRelaEN.topicId && tzDataType.isString(pobjgs_VpClassificationRelaEN.topicId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_VpClassificationRelaEN.topicId)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckPropertyNew0)");
}
if (null != pobjgs_VpClassificationRelaEN.orderNum && undefined !== pobjgs_VpClassificationRelaEN.orderNum && tzDataType.isNumber(pobjgs_VpClassificationRelaEN.orderNum) === false)
{
 throw new Error("(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjgs_VpClassificationRelaEN.orderNum)], 非法,应该为数值型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updDate) == false && undefined !== pobjgs_VpClassificationRelaEN.updDate && tzDataType.isString(pobjgs_VpClassificationRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_VpClassificationRelaEN.updDate)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updUser) == false && undefined !== pobjgs_VpClassificationRelaEN.updUser && tzDataType.isString(pobjgs_VpClassificationRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_VpClassificationRelaEN.updUser)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.memo) == false && undefined !== pobjgs_VpClassificationRelaEN.memo && tzDataType.isString(pobjgs_VpClassificationRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_VpClassificationRelaEN.memo)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_VpClassificationRela_CheckProperty4Update(pobjgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.topicId) == false && GetStrLen(pobjgs_VpClassificationRelaEN.topicId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.topicId)(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updDate) == false && GetStrLen(pobjgs_VpClassificationRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.updDate)(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updUser) == false && GetStrLen(pobjgs_VpClassificationRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.updUser)(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.memo) == false && GetStrLen(pobjgs_VpClassificationRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点分类主题关系表(gs_VpClassificationRela))!值:$(pobjgs_VpClassificationRelaEN.memo)(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_VpClassificationRelaEN.classificationId && undefined !== pobjgs_VpClassificationRelaEN.classificationId && tzDataType.isNumber(pobjgs_VpClassificationRelaEN.classificationId) === false)
{
 throw new Error("(errid:Watl000417)字段[分类Id(classificationId)]的值:[$(pobjgs_VpClassificationRelaEN.classificationId)], 非法,应该为数值型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.topicId) == false && undefined !== pobjgs_VpClassificationRelaEN.topicId && tzDataType.isString(pobjgs_VpClassificationRelaEN.topicId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_VpClassificationRelaEN.topicId)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (null != pobjgs_VpClassificationRelaEN.orderNum && undefined !== pobjgs_VpClassificationRelaEN.orderNum && tzDataType.isNumber(pobjgs_VpClassificationRelaEN.orderNum) === false)
{
 throw new Error("(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjgs_VpClassificationRelaEN.orderNum)], 非法,应该为数值型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updDate) == false && undefined !== pobjgs_VpClassificationRelaEN.updDate && tzDataType.isString(pobjgs_VpClassificationRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_VpClassificationRelaEN.updDate)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.updUser) == false && undefined !== pobjgs_VpClassificationRelaEN.updUser && tzDataType.isString(pobjgs_VpClassificationRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_VpClassificationRelaEN.updUser)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_VpClassificationRelaEN.memo) == false && undefined !== pobjgs_VpClassificationRelaEN.memo && tzDataType.isString(pobjgs_VpClassificationRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_VpClassificationRelaEN.memo)], 非法,应该为字符型(In 观点分类主题关系表(gs_VpClassificationRela))!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_VpClassificationRelaEN.classificationId 
 || pobjgs_VpClassificationRelaEN.classificationId != null && pobjgs_VpClassificationRelaEN.classificationId.toString()  ===  ""
 || pobjgs_VpClassificationRelaEN.classificationId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000064)字段[分类Id]不能为空(In 观点分类主题关系表)!(clsgs_VpClassificationRelaBL:CheckProperty4Update)");
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
export  function gs_VpClassificationRela_GetJSONStrByObj (pobjgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN): string
{
pobjgs_VpClassificationRelaEN.sfUpdFldSetStr = pobjgs_VpClassificationRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_VpClassificationRelaEN);
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
export  function gs_VpClassificationRela_GetObjLstByJSONStr (strJSON: string): Array<clsgs_VpClassificationRelaEN>
{
let arrgs_VpClassificationRelaObjLst = new Array<clsgs_VpClassificationRelaEN>();
if (strJSON === "")
{
return arrgs_VpClassificationRelaObjLst;
}
try
{
arrgs_VpClassificationRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_VpClassificationRelaObjLst;
}
return arrgs_VpClassificationRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_VpClassificationRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_VpClassificationRela_GetObjLstByJSONObjLst (arrgs_VpClassificationRelaObjLstS: Array<clsgs_VpClassificationRelaEN>): Array<clsgs_VpClassificationRelaEN>
{
const arrgs_VpClassificationRelaObjLst = new Array<clsgs_VpClassificationRelaEN>();
for (const objInFor of arrgs_VpClassificationRelaObjLstS) {
const obj1 = gs_VpClassificationRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_VpClassificationRelaObjLst.push(obj1);
}
return arrgs_VpClassificationRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_VpClassificationRela_GetObjByJSONStr (strJSON: string): clsgs_VpClassificationRelaEN
{
let pobjgs_VpClassificationRelaEN = new clsgs_VpClassificationRelaEN();
if (strJSON === "")
{
return pobjgs_VpClassificationRelaEN;
}
try
{
pobjgs_VpClassificationRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_VpClassificationRelaEN;
}
return pobjgs_VpClassificationRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_VpClassificationRela_GetCombineCondition(objgs_VpClassificationRelaCond: clsgs_VpClassificationRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationRelaCond.dicFldComparisonOp, clsgs_VpClassificationRelaEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objgs_VpClassificationRelaCond.dicFldComparisonOp[clsgs_VpClassificationRelaEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_VpClassificationRelaEN.con_ClassificationId, objgs_VpClassificationRelaCond.classificationId, strComparisonOpClassificationId);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationRelaCond.dicFldComparisonOp, clsgs_VpClassificationRelaEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objgs_VpClassificationRelaCond.dicFldComparisonOp[clsgs_VpClassificationRelaEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationRelaEN.con_TopicId, objgs_VpClassificationRelaCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationRelaCond.dicFldComparisonOp, clsgs_VpClassificationRelaEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objgs_VpClassificationRelaCond.dicFldComparisonOp[clsgs_VpClassificationRelaEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsgs_VpClassificationRelaEN.con_OrderNum, objgs_VpClassificationRelaCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationRelaCond.dicFldComparisonOp, clsgs_VpClassificationRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_VpClassificationRelaCond.dicFldComparisonOp[clsgs_VpClassificationRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationRelaEN.con_UpdDate, objgs_VpClassificationRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationRelaCond.dicFldComparisonOp, clsgs_VpClassificationRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_VpClassificationRelaCond.dicFldComparisonOp[clsgs_VpClassificationRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationRelaEN.con_UpdUser, objgs_VpClassificationRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_VpClassificationRelaCond.dicFldComparisonOp, clsgs_VpClassificationRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_VpClassificationRelaCond.dicFldComparisonOp[clsgs_VpClassificationRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_VpClassificationRelaEN.con_Memo, objgs_VpClassificationRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_VpClassificationRela(观点分类主题关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngClassificationId: 分类Id(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_VpClassificationRela_GetUniCondStr(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ClassificationId = '{0}'", objgs_VpClassificationRelaEN.classificationId);
 strWhereCond +=  Format(" and TopicId = '{0}'", objgs_VpClassificationRelaEN.topicId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_VpClassificationRela(观点分类主题关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngClassificationId: 分类Id(要求唯一的字段)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_VpClassificationRela_GetUniCondStr4Update(objgs_VpClassificationRelaEN: clsgs_VpClassificationRelaEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ClassificationId <> '{0}'", objgs_VpClassificationRelaEN.classificationId);
 strWhereCond += Format(" and TopicId <> '{0}'", objgs_VpClassificationRelaEN.topicId);
 strWhereCond +=  Format(" and ClassificationId = '{0}'", objgs_VpClassificationRelaEN.classificationId);
 strWhereCond +=  Format(" and TopicId = '{0}'", objgs_VpClassificationRelaEN.topicId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_VpClassificationRelaENS:源对象
 * @param objgs_VpClassificationRelaENT:目标对象
*/
export  function gs_VpClassificationRela_CopyObjTo(objgs_VpClassificationRelaENS: clsgs_VpClassificationRelaEN , objgs_VpClassificationRelaENT: clsgs_VpClassificationRelaEN ): void 
{
objgs_VpClassificationRelaENT.classificationId = objgs_VpClassificationRelaENS.classificationId; //分类Id
objgs_VpClassificationRelaENT.topicId = objgs_VpClassificationRelaENS.topicId; //主题Id
objgs_VpClassificationRelaENT.orderNum = objgs_VpClassificationRelaENS.orderNum; //序号
objgs_VpClassificationRelaENT.updDate = objgs_VpClassificationRelaENS.updDate; //修改日期
objgs_VpClassificationRelaENT.updUser = objgs_VpClassificationRelaENS.updUser; //修改人
objgs_VpClassificationRelaENT.memo = objgs_VpClassificationRelaENS.memo; //备注
objgs_VpClassificationRelaENT.sfUpdFldSetStr = objgs_VpClassificationRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_VpClassificationRelaENS:源对象
 * @param objgs_VpClassificationRelaENT:目标对象
*/
export  function gs_VpClassificationRela_GetObjFromJsonObj(objgs_VpClassificationRelaENS: clsgs_VpClassificationRelaEN): clsgs_VpClassificationRelaEN 
{
 const objgs_VpClassificationRelaENT: clsgs_VpClassificationRelaEN = new clsgs_VpClassificationRelaEN();
ObjectAssign(objgs_VpClassificationRelaENT, objgs_VpClassificationRelaENS);
 return objgs_VpClassificationRelaENT;
}