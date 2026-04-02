
 /**
 * 类名:clsRTViewpointWApi
 * 表名:RTViewpoint(01120955)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:10
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
 * 主题观点关系(RTViewpoint)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper,LocalStorage_GetKeyByPrefix,SessionStorage_GetKeyByPrefix } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsRTViewpointEN } from "@/ts/L0Entity/GradEduTopic/clsRTViewpointEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const rTViewpoint_Controller = "RTViewpointApi";
 export const rTViewpoint_ConstructorName = "rTViewpoint";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function RTViewpoint_SplitKeyLst(strKeyLst: string)  
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
topicId: arrKey[0],
subViewpointId: Number(arrKey[1]),
};
if (IsNullOrEmpty(objKeyLst.topicId)== true)
{
const strMsg = "关键字段(topicId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (objKeyLst.subViewpointId == 0)
{
const strMsg = "关键字段(subViewpointId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicId:关键字
 * @returns 对象
 **/
export  async function RTViewpoint_GetObjByKeyLstAsync(strTopicId: string,lngSubViewpointId: number): Promise<clsRTViewpointEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsRTViewpointWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsRTViewpointWApi.GetObjByKeyLstAsync)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsRTViewpointWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTopicId,
lngSubViewpointId,
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
const objRTViewpoint = RTViewpoint_GetObjFromJsonObj(returnObj);
return objRTViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param strTopicId:所给的关键字
 * @returns 对象
*/
export  async function RTViewpoint_GetObjByKeyLstCache(strTopicId:string,lngSubViewpointId:number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByKeyLstCache";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsRTViewpointWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsRTViewpointWApi.GetObjByKeyLstCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsRTViewpointWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
try
{
const arrRTViewpointSel = arrRTViewpointObjLstCache.filter(x => 
 x.topicId == strTopicId 
 && x.subViewpointId == lngSubViewpointId );
let objRTViewpoint: clsRTViewpointEN;
if (arrRTViewpointSel.length > 0)
{
objRTViewpoint = arrRTViewpointSel[0];
return objRTViewpoint;
}
else
{
if (bolTryAsyncOnce == true)
{
const objRTViewpointConst = await RTViewpoint_GetObjByKeyLstAsync(strTopicId,lngSubViewpointId);
if (objRTViewpointConst != null)
{
RTViewpoint_ReFreshThisCache(strTopicId);
return objRTViewpointConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTopicId, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTopicId:所给的关键字
 * @returns 对象
*/
export  async function RTViewpoint_GetObjByKeyLstlocalStorage(strTopicId: string,lngSubViewpointId: number) {
const strThisFuncName = "GetObjByKeyLstlocalStorage";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsRTViewpointWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsRTViewpointWApi.GetObjByKeyLstlocalStorage)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsRTViewpointWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objRTViewpointCache: clsRTViewpointEN = JSON.parse(strTempObj);
return objRTViewpointCache;
}
try
{
const objRTViewpoint = await RTViewpoint_GetObjByKeyLstAsync(strTopicId,lngSubViewpointId);
if (objRTViewpoint != null)
{
localStorage.setItem(strKey, JSON.stringify(objRTViewpoint));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objRTViewpoint;
}
return objRTViewpoint;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTopicId, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRTViewpoint:所给的对象
 * @returns 对象
*/
export  async function RTViewpoint_UpdateObjInLstCache(objRTViewpoint: clsRTViewpointEN,strTopicId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
const obj = arrRTViewpointObjLstCache.find(x => 
x.topicId == objRTViewpoint.topicId);
if (obj != null)
{
objRTViewpoint.topicId = obj.topicId;
ObjectAssign( obj, objRTViewpoint);
}
else
{
arrRTViewpointObjLstCache.push(objRTViewpoint);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function RTViewpoint_func( strInFldName1:string , strInFldName2:string  , strOutFldName:string ,  strInValue1:string , strInValue2:number  )
{
//const strThisFuncName = "func";

if (strInFldName1 != clsRTViewpointEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName1);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName2 != clsRTViewpointEN.con_SubViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName2);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsRTViewpointEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsRTViewpointEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strTopicId = strInValue1;
if (IsNullOrEmpty(strTopicId) == true)
{
return "";
}
const lngSubViewpointId = Number(strInValue2);
if (lngSubViewpointId == 0)
{
return "";
}
const objRTViewpoint = await RTViewpoint_GetObjByKeyLstCache(strTopicId,lngSubViewpointId );
if (objRTViewpoint == null) return "";
if (objRTViewpoint.GetFldValue(strOutFldName) == null) return "";
return objRTViewpoint.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RTViewpoint_SortFunDefa(a:clsRTViewpointEN , b:clsRTViewpointEN): number 
{
return a.topicId.localeCompare(b.topicId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RTViewpoint_SortFunDefa2Fld(a:clsRTViewpointEN , b:clsRTViewpointEN): number 
{
if (a.proposePeople == b.proposePeople) return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
else return a.proposePeople.localeCompare(b.proposePeople);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function RTViewpoint_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsRTViewpointEN.con_TopicId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.topicId.localeCompare(b.topicId);
}
case clsRTViewpointEN.con_SubViewpointId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.subViewpointId-b.subViewpointId;
}
case clsRTViewpointEN.con_ProposePeople:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.proposePeople.localeCompare(b.proposePeople);
}
case clsRTViewpointEN.con_gsKnowledgeTypeId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
}
case clsRTViewpointEN.con_ClassificationId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.classificationId-b.classificationId;
}
case clsRTViewpointEN.con_IdCurrEduCls:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsRTViewpointEN.con_UpdDate:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsRTViewpointEN.con_UpdUser:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsRTViewpointEN.con_Memo:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RTViewpoint]中不存在!(in ${ rTViewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsRTViewpointEN.con_TopicId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.topicId.localeCompare(a.topicId);
}
case clsRTViewpointEN.con_SubViewpointId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.subViewpointId-a.subViewpointId;
}
case clsRTViewpointEN.con_ProposePeople:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.proposePeople.localeCompare(a.proposePeople);
}
case clsRTViewpointEN.con_gsKnowledgeTypeId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.gsKnowledgeTypeId.localeCompare(a.gsKnowledgeTypeId);
}
case clsRTViewpointEN.con_ClassificationId:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.classificationId-a.classificationId;
}
case clsRTViewpointEN.con_IdCurrEduCls:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsRTViewpointEN.con_UpdDate:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsRTViewpointEN.con_UpdUser:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsRTViewpointEN.con_Memo:
return (a: clsRTViewpointEN, b: clsRTViewpointEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RTViewpoint]中不存在!(in ${ rTViewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function RTViewpoint_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsRTViewpointEN.con_TopicId:
return (obj: clsRTViewpointEN) => {
return obj.topicId === value;
}
case clsRTViewpointEN.con_SubViewpointId:
return (obj: clsRTViewpointEN) => {
return obj.subViewpointId === value;
}
case clsRTViewpointEN.con_ProposePeople:
return (obj: clsRTViewpointEN) => {
return obj.proposePeople === value;
}
case clsRTViewpointEN.con_gsKnowledgeTypeId:
return (obj: clsRTViewpointEN) => {
return obj.gsKnowledgeTypeId === value;
}
case clsRTViewpointEN.con_ClassificationId:
return (obj: clsRTViewpointEN) => {
return obj.classificationId === value;
}
case clsRTViewpointEN.con_IdCurrEduCls:
return (obj: clsRTViewpointEN) => {
return obj.idCurrEduCls === value;
}
case clsRTViewpointEN.con_UpdDate:
return (obj: clsRTViewpointEN) => {
return obj.updDate === value;
}
case clsRTViewpointEN.con_UpdUser:
return (obj: clsRTViewpointEN) => {
return obj.updUser === value;
}
case clsRTViewpointEN.con_Memo:
return (obj: clsRTViewpointEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[RTViewpoint]中不存在!(in ${ rTViewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strTopicId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function RTViewpoint_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strTopicIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strTopicIdClassfy) == true)
{
  const strMsg = Format("参数:[strTopicIdClassfy]不能为空!(In clsRTViewpointWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicIdClassfy]的长度:[{0}]不正确!(clsRTViewpointWApi.funcKey)", strTopicIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsRTViewpointEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName == clsRTViewpointEN.con_SubViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrRTViewpoint = await RTViewpoint_GetObjLstCache(strTopicIdClassfy);
if (arrRTViewpoint == null) return [];
let arrRTViewpointSel = arrRTViewpoint;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrRTViewpointSel = arrRTViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrRTViewpointSel.length == 0) return [];
return arrRTViewpoint.map(x=>`${x.topicId}|${x.subViewpointId}`);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RTViewpoint_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetFirstObjAsync(strWhereCond: string): Promise<clsRTViewpointEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const objRTViewpoint = RTViewpoint_GetObjFromJsonObj(returnObj);
return objRTViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetObjLstClientCache(strTopicId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsRTViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsRTViewpointEN.WhereFormat, strTopicId);
}
else
{
strWhereCond = Format("TopicId='{0}'", strTopicId);
}
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
if (IsNullOrEmpty(clsRTViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRTViewpointEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrRTViewpointExObjLstCache: Array<clsRTViewpointEN> = CacheHelper.Get(strKey);
const arrRTViewpointObjLstT = RTViewpoint_GetObjLstByJSONObjLst(arrRTViewpointExObjLstCache);
return arrRTViewpointObjLstT;
}
try
{
const arrRTViewpointExObjLst = await RTViewpoint_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrRTViewpointExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRTViewpointExObjLst.length);
console.log(strInfo);
return arrRTViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RTViewpoint_GetObjLstlocalStorage(strTopicId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsRTViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsRTViewpointEN.WhereFormat, strTopicId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsRTViewpointEN.con_TopicId, strTopicId);
}
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
if (IsNullOrEmpty(clsRTViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRTViewpointEN.CacheAddiCondition);
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
const arrRTViewpointExObjLstCache: Array<clsRTViewpointEN> = JSON.parse(strTempObjLst);
const arrRTViewpointObjLstT = RTViewpoint_GetObjLstByJSONObjLst(arrRTViewpointExObjLstCache);
return arrRTViewpointObjLstT;
}
try
{
const arrRTViewpointExObjLst = await RTViewpoint_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsRTViewpointEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrRTViewpointExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRTViewpointExObjLst.length);
console.log(strInfo);
return arrRTViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RTViewpoint_GetObjLstlocalStoragePureCache(strTopicId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrRTViewpointObjLstCache: Array<clsRTViewpointEN> = JSON.parse(strTempObjLst);
return arrRTViewpointObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function RTViewpoint_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRTViewpointEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetObjLstsessionStorage(strTopicId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsRTViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsRTViewpointEN.WhereFormat, strTopicId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsRTViewpointEN.con_TopicId, strTopicId);
}
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
if (IsNullOrEmpty(clsRTViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsRTViewpointEN.CacheAddiCondition);
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
const arrRTViewpointExObjLstCache: Array<clsRTViewpointEN> = JSON.parse(strTempObjLst);
const arrRTViewpointObjLstT = RTViewpoint_GetObjLstByJSONObjLst(arrRTViewpointExObjLstCache);
return arrRTViewpointObjLstT;
}
try
{
const arrRTViewpointExObjLst = await RTViewpoint_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsRTViewpointEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrRTViewpointExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrRTViewpointExObjLst.length);
console.log(strInfo);
return arrRTViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RTViewpoint_GetObjLstsessionStoragePureCache(strTopicId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrRTViewpointObjLstCache: Array<clsRTViewpointEN> = JSON.parse(strTempObjLst);
return arrRTViewpointObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RTViewpoint_GetObjLstCache(strTopicId: string): Promise<Array<clsRTViewpointEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空！(In clsRTViewpointWApi.RTViewpoint_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确！(clsRTViewpointWApi.RTViewpoint_GetObjLstCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
let arrRTViewpointObjLstCache;
switch (clsRTViewpointEN.CacheModeId)
{
case "04"://sessionStorage
arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstsessionStorage(strTopicId);
break;
case "03"://localStorage
arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstlocalStorage(strTopicId);
break;
case "02"://ClientCache
arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstClientCache(strTopicId);
break;
default:
arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstClientCache(strTopicId);
break;
}
return arrRTViewpointObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function RTViewpoint_GetObjLstPureCache(strTopicId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrRTViewpointObjLstCache;
switch (clsRTViewpointEN.CacheModeId)
{
case "04"://sessionStorage
arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstsessionStoragePureCache(strTopicId);
break;
case "03"://localStorage
arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstlocalStoragePureCache(strTopicId);
break;
case "02"://ClientCache
arrRTViewpointObjLstCache = null;
break;
default:
arrRTViewpointObjLstCache = null;
break;
}
return arrRTViewpointObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function RTViewpoint_GetSubObjLstCache(objRTViewpointCond: clsRTViewpointEN ,strTopicId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
let arrRTViewpointSel = arrRTViewpointObjLstCache;
if (objRTViewpointCond.sfFldComparisonOp == null || objRTViewpointCond.sfFldComparisonOp == "") return arrRTViewpointSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRTViewpointCond.sfFldComparisonOp);
//console.log("clsRTViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRTViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRTViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRTViewpointSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objRTViewpointCond), rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRTViewpointEN>();
}


 /// <summary>
 /// 把多个关键字段的值连接起来,用|连接(Join)--RTViewpoint(主题观点关系)
 /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
 /// </summary>
 /// <param name = "objRTViewpointEN">需要连接的对象</param>
 /// <returns></returns>
export  function RTViewpoint_JoinByKeyLst(objRTViewpointEN: clsRTViewpointEN):string
{
//检测记录是否存在
const strResult = `${objRTViewpointEN.topicId}|${objRTViewpointEN.subViewpointId}`
return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrTopicIdLst:关键字列表
 * @returns 对象列表
*/
export  async function RTViewpoint_GetObjLstByKeyLstsCache(arrKeysLst: Array<string> ,strTopicId: string) {
const strThisFuncName = "GetObjLstByKeyLstsCache";
try
{
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
const arrRTViewpointSel = arrRTViewpointObjLstCache.filter(x => arrKeysLst.indexOf(RTViewpoint_JoinByKeyLst(x))>-1);
return arrRTViewpointSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrKeysLst.join(","), rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsRTViewpointEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsRTViewpointEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strTopicId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsRTViewpointEN>();
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
if (arrRTViewpointObjLstCache.length == 0) return arrRTViewpointObjLstCache;
let arrRTViewpointSel = arrRTViewpointObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objRTViewpointCond = new clsRTViewpointEN();
ObjectAssign(objRTViewpointCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsRTViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRTViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRTViewpointSel = arrRTViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRTViewpointSel.length == 0) return arrRTViewpointSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrRTViewpointSel = arrRTViewpointSel.sort(RTViewpoint_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrRTViewpointSel = arrRTViewpointSel.sort(objPagerPara.sortFun);
}
arrRTViewpointSel = arrRTViewpointSel.slice(intStart, intEnd);     
return arrRTViewpointSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsRTViewpointEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function RTViewpoint_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsRTViewpointEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsRTViewpointEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", rTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = RTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param strTopicId,lngSubViewpointId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function RTViewpoint_DelRecKeyLstAsync(strTopicId: string,lngSubViewpointId: number): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
"TopicId": strTopicId, 
"SubViewpointId": lngSubViewpointId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_DelRTViewpointsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelRTViewpointsByCondAsync";
const strAction = "DelRTViewpointsByCond";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RTViewpoint_AddNewRecordAsync(objRTViewpointEN: clsRTViewpointEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objRTViewpointEN.topicId === null || objRTViewpointEN.topicId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objRTViewpointEN);
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function RTViewpoint_AddNewRecordWithMaxIdAsync(objRTViewpointEN: clsRTViewpointEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function RTViewpoint_AddNewRecordWithReturnKeyAsync(objRTViewpointEN: clsRTViewpointEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function RTViewpoint_UpdateRecordAsync(objRTViewpointEN: clsRTViewpointEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objRTViewpointEN.sfUpdFldSetStr === undefined || objRTViewpointEN.sfUpdFldSetStr === null || objRTViewpointEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRTViewpointEN.topicId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function RTViewpoint_UpdateWithConditionAsync(objRTViewpointEN: clsRTViewpointEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objRTViewpointEN.sfUpdFldSetStr === undefined || objRTViewpointEN.sfUpdFldSetStr === null || objRTViewpointEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objRTViewpointEN.topicId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);
objRTViewpointEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRTViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objstrTopicIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function RTViewpoint_IsExistRecordCache(objRTViewpointCond: clsRTViewpointEN,strTopicId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
if (arrRTViewpointObjLstCache == null) return false;
let arrRTViewpointSel = arrRTViewpointObjLstCache;
if (objRTViewpointCond.sfFldComparisonOp == null || objRTViewpointCond.sfFldComparisonOp == "") return arrRTViewpointSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRTViewpointCond.sfFldComparisonOp);
//console.log("clsRTViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRTViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRTViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrRTViewpointSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objRTViewpointCond), rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param strTopicId:所给的关键字
 * @returns 对象
*/
export  async function RTViewpoint_IsExistCache(strTopicId:string,lngSubViewpointId:number) {
const strThisFuncName = "IsExistCache";
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
if (arrRTViewpointObjLstCache == null) return false;
try
{
const arrRTViewpointSel = arrRTViewpointObjLstCache.filter(x => x.topicId == strTopicId && x.subViewpointId == lngSubViewpointId);
if (arrRTViewpointSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strTopicId, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strTopicId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function RTViewpoint_IsExistAsync(strTopicId: string,lngSubViewpointId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTopicId,
lngSubViewpointId,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
 * @param objRTViewpointCond:条件对象
 * @returns 对象列表记录数
*/
export  async function RTViewpoint_GetRecCountByCondCache(objRTViewpointCond: clsRTViewpointEN ,strTopicId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrRTViewpointObjLstCache = await RTViewpoint_GetObjLstCache(strTopicId);
if (arrRTViewpointObjLstCache == null) return 0;
let arrRTViewpointSel = arrRTViewpointObjLstCache;
if (objRTViewpointCond.sfFldComparisonOp == null || objRTViewpointCond.sfFldComparisonOp == "") return arrRTViewpointSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objRTViewpointCond.sfFldComparisonOp);
//console.log("clsRTViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objRTViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objRTViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrRTViewpointSel = arrRTViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrRTViewpointSel = arrRTViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrRTViewpointSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objRTViewpointCond), rTViewpoint_ConstructorName, strThisFuncName);
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
export  async function RTViewpoint_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(rTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, rTViewpoint_ConstructorName, strThisFuncName);
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
export  function RTViewpoint_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function RTViewpoint_ReFreshCache(strTopicId: string):void
{

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsRTViewpointWApi.clsRTViewpointWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsRTViewpointWApi.clsRTViewpointWApi.ReFreshCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
switch (clsRTViewpointEN.CacheModeId)
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
export  function RTViewpoint_ReFreshThisCache(strTopicId: string):void
{

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsRTViewpointWApi.RTViewpoint_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsRTViewpointWApi.RTViewpoint_ReFreshThisCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsRTViewpointEN._CurrTabName, strTopicId);
switch (clsRTViewpointEN.CacheModeId)
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RTViewpoint_CheckPropertyNew(pobjRTViewpointEN: clsRTViewpointEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjRTViewpointEN.proposePeople) === true )
{
 throw new Error(`(errid:Watl000411)字段[提出人]不能为空(In 主题观点关系)!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.gsKnowledgeTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识类型Id]不能为空(In 主题观点关系)!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.idCurrEduCls) === true 
 || pobjRTViewpointEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教学班流水号]不能为空(In 主题观点关系)!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 主题观点关系)!(clsRTViewpointBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRTViewpointEN.topicId) == false && GetStrLen(pobjRTViewpointEN.topicId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.topicId}(clsRTViewpointBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.proposePeople) == false && GetStrLen(pobjRTViewpointEN.proposePeople) > 50)
{
 throw new Error(`(errid:Watl000413)字段[提出人(proposePeople)]的长度不能超过50(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.proposePeople}(clsRTViewpointBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.gsKnowledgeTypeId) == false && GetStrLen(pobjRTViewpointEN.gsKnowledgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[知识类型Id(gsKnowledgeTypeId)]的长度不能超过2(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.gsKnowledgeTypeId}(clsRTViewpointBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.idCurrEduCls) == false && GetStrLen(pobjRTViewpointEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.idCurrEduCls}(clsRTViewpointBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updDate) == false && GetStrLen(pobjRTViewpointEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.updDate}(clsRTViewpointBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updUser) == false && GetStrLen(pobjRTViewpointEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.updUser}(clsRTViewpointBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.memo) == false && GetStrLen(pobjRTViewpointEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.memo}(clsRTViewpointBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRTViewpointEN.topicId) == false && undefined !== pobjRTViewpointEN.topicId && tzDataType.isString(pobjRTViewpointEN.topicId) === false)
{
 throw new Error(`(errid:Watl000414)字段[主题Id(topicId)]的值:[${pobjRTViewpointEN.topicId}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (null != pobjRTViewpointEN.subViewpointId && undefined !== pobjRTViewpointEN.subViewpointId && tzDataType.isNumber(pobjRTViewpointEN.subViewpointId) === false)
{
 throw new Error(`(errid:Watl000414)字段[子观点Id(subViewpointId)]的值:[${pobjRTViewpointEN.subViewpointId}], 非法,应该为数值型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.proposePeople) == false && undefined !== pobjRTViewpointEN.proposePeople && tzDataType.isString(pobjRTViewpointEN.proposePeople) === false)
{
 throw new Error(`(errid:Watl000414)字段[提出人(proposePeople)]的值:[${pobjRTViewpointEN.proposePeople}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.gsKnowledgeTypeId) == false && undefined !== pobjRTViewpointEN.gsKnowledgeTypeId && tzDataType.isString(pobjRTViewpointEN.gsKnowledgeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识类型Id(gsKnowledgeTypeId)]的值:[${pobjRTViewpointEN.gsKnowledgeTypeId}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (null != pobjRTViewpointEN.classificationId && undefined !== pobjRTViewpointEN.classificationId && tzDataType.isNumber(pobjRTViewpointEN.classificationId) === false)
{
 throw new Error(`(errid:Watl000414)字段[分类Id(classificationId)]的值:[${pobjRTViewpointEN.classificationId}], 非法,应该为数值型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.idCurrEduCls) == false && undefined !== pobjRTViewpointEN.idCurrEduCls && tzDataType.isString(pobjRTViewpointEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjRTViewpointEN.idCurrEduCls}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updDate) == false && undefined !== pobjRTViewpointEN.updDate && tzDataType.isString(pobjRTViewpointEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjRTViewpointEN.updDate}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updUser) == false && undefined !== pobjRTViewpointEN.updUser && tzDataType.isString(pobjRTViewpointEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjRTViewpointEN.updUser}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.memo) == false && undefined !== pobjRTViewpointEN.memo && tzDataType.isString(pobjRTViewpointEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjRTViewpointEN.memo}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function RTViewpoint_CheckProperty4Update(pobjRTViewpointEN: clsRTViewpointEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjRTViewpointEN.topicId) == false && GetStrLen(pobjRTViewpointEN.topicId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.topicId}(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.proposePeople) == false && GetStrLen(pobjRTViewpointEN.proposePeople) > 50)
{
 throw new Error(`(errid:Watl000416)字段[提出人(proposePeople)]的长度不能超过50(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.proposePeople}(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.gsKnowledgeTypeId) == false && GetStrLen(pobjRTViewpointEN.gsKnowledgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[知识类型Id(gsKnowledgeTypeId)]的长度不能超过2(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.gsKnowledgeTypeId}(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.idCurrEduCls) == false && GetStrLen(pobjRTViewpointEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.idCurrEduCls}(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updDate) == false && GetStrLen(pobjRTViewpointEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.updDate}(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updUser) == false && GetStrLen(pobjRTViewpointEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.updUser}(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.memo) == false && GetStrLen(pobjRTViewpointEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 主题观点关系(RTViewpoint))!值:${pobjRTViewpointEN.memo}(clsRTViewpointBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjRTViewpointEN.topicId) == false && undefined !== pobjRTViewpointEN.topicId && tzDataType.isString(pobjRTViewpointEN.topicId) === false)
{
 throw new Error(`(errid:Watl000417)字段[主题Id(topicId)]的值:[${pobjRTViewpointEN.topicId}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (null != pobjRTViewpointEN.subViewpointId && undefined !== pobjRTViewpointEN.subViewpointId && tzDataType.isNumber(pobjRTViewpointEN.subViewpointId) === false)
{
 throw new Error(`(errid:Watl000417)字段[子观点Id(subViewpointId)]的值:[${pobjRTViewpointEN.subViewpointId}], 非法,应该为数值型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.proposePeople) == false && undefined !== pobjRTViewpointEN.proposePeople && tzDataType.isString(pobjRTViewpointEN.proposePeople) === false)
{
 throw new Error(`(errid:Watl000417)字段[提出人(proposePeople)]的值:[${pobjRTViewpointEN.proposePeople}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.gsKnowledgeTypeId) == false && undefined !== pobjRTViewpointEN.gsKnowledgeTypeId && tzDataType.isString(pobjRTViewpointEN.gsKnowledgeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识类型Id(gsKnowledgeTypeId)]的值:[${pobjRTViewpointEN.gsKnowledgeTypeId}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (null != pobjRTViewpointEN.classificationId && undefined !== pobjRTViewpointEN.classificationId && tzDataType.isNumber(pobjRTViewpointEN.classificationId) === false)
{
 throw new Error(`(errid:Watl000417)字段[分类Id(classificationId)]的值:[${pobjRTViewpointEN.classificationId}], 非法,应该为数值型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.idCurrEduCls) == false && undefined !== pobjRTViewpointEN.idCurrEduCls && tzDataType.isString(pobjRTViewpointEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjRTViewpointEN.idCurrEduCls}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updDate) == false && undefined !== pobjRTViewpointEN.updDate && tzDataType.isString(pobjRTViewpointEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjRTViewpointEN.updDate}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.updUser) == false && undefined !== pobjRTViewpointEN.updUser && tzDataType.isString(pobjRTViewpointEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjRTViewpointEN.updUser}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjRTViewpointEN.memo) == false && undefined !== pobjRTViewpointEN.memo && tzDataType.isString(pobjRTViewpointEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjRTViewpointEN.memo}], 非法,应该为字符型(In 主题观点关系(RTViewpoint))!(clsRTViewpointBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjRTViewpointEN.topicId) === true 
 || pobjRTViewpointEN.topicId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[主题Id]不能为空(In 主题观点关系)!(clsRTViewpointBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RTViewpoint_GetJSONStrByObj (pobjRTViewpointEN: clsRTViewpointEN): string
{
pobjRTViewpointEN.sfUpdFldSetStr = pobjRTViewpointEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjRTViewpointEN);
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function RTViewpoint_GetObjLstByJSONStr (strJSON: string): Array<clsRTViewpointEN>
{
let arrRTViewpointObjLst = new Array<clsRTViewpointEN>();
if (strJSON === "")
{
return arrRTViewpointObjLst;
}
try
{
arrRTViewpointObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrRTViewpointObjLst;
}
return arrRTViewpointObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRTViewpointObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function RTViewpoint_GetObjLstByJSONObjLst (arrRTViewpointObjLstS: Array<clsRTViewpointEN>): Array<clsRTViewpointEN>
{
const arrRTViewpointObjLst = new Array<clsRTViewpointEN>();
for (const objInFor of arrRTViewpointObjLstS) {
const obj1 = RTViewpoint_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrRTViewpointObjLst.push(obj1);
}
return arrRTViewpointObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function RTViewpoint_GetObjByJSONStr (strJSON: string): clsRTViewpointEN
{
let pobjRTViewpointEN = new clsRTViewpointEN();
if (strJSON === "")
{
return pobjRTViewpointEN;
}
try
{
pobjRTViewpointEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjRTViewpointEN;
}
return pobjRTViewpointEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function RTViewpoint_GetCombineCondition(objRTViewpointCond: clsRTViewpointEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_TopicId, objRTViewpointCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_SubViewpointId) == true)
{
const strComparisonOpSubViewpointId:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_SubViewpointId];
strWhereCond += Format(" And {0} {2} {1}", clsRTViewpointEN.con_SubViewpointId, objRTViewpointCond.subViewpointId, strComparisonOpSubViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_ProposePeople) == true)
{
const strComparisonOpProposePeople:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_ProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_ProposePeople, objRTViewpointCond.proposePeople, strComparisonOpProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_gsKnowledgeTypeId) == true)
{
const strComparisonOpgsKnowledgeTypeId:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_gsKnowledgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_gsKnowledgeTypeId, objRTViewpointCond.gsKnowledgeTypeId, strComparisonOpgsKnowledgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} {1}", clsRTViewpointEN.con_ClassificationId, objRTViewpointCond.classificationId, strComparisonOpClassificationId);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_IdCurrEduCls, objRTViewpointCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_UpdDate, objRTViewpointCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_UpdUser, objRTViewpointCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objRTViewpointCond.dicFldComparisonOp, clsRTViewpointEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objRTViewpointCond.dicFldComparisonOp[clsRTViewpointEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsRTViewpointEN.con_Memo, objRTViewpointCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRTViewpointENS:源对象
 * @param objRTViewpointENT:目标对象
*/
export  function RTViewpoint_CopyObjTo(objRTViewpointENS: clsRTViewpointEN , objRTViewpointENT: clsRTViewpointEN ): void 
{
objRTViewpointENT.topicId = objRTViewpointENS.topicId; //主题Id
objRTViewpointENT.subViewpointId = objRTViewpointENS.subViewpointId; //子观点Id
objRTViewpointENT.proposePeople = objRTViewpointENS.proposePeople; //提出人
objRTViewpointENT.gsKnowledgeTypeId = objRTViewpointENS.gsKnowledgeTypeId; //知识类型Id
objRTViewpointENT.classificationId = objRTViewpointENS.classificationId; //分类Id
objRTViewpointENT.idCurrEduCls = objRTViewpointENS.idCurrEduCls; //教学班流水号
objRTViewpointENT.updDate = objRTViewpointENS.updDate; //修改日期
objRTViewpointENT.updUser = objRTViewpointENS.updUser; //修改人
objRTViewpointENT.memo = objRTViewpointENS.memo; //备注
objRTViewpointENT.sfUpdFldSetStr = objRTViewpointENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRTViewpointENS:源对象
 * @param objRTViewpointENT:目标对象
*/
export  function RTViewpoint_GetObjFromJsonObj(objRTViewpointENS: clsRTViewpointEN): clsRTViewpointEN 
{
 const objRTViewpointENT: clsRTViewpointEN = new clsRTViewpointEN();
ObjectAssign(objRTViewpointENT, objRTViewpointENS);
 return objRTViewpointENT;
}