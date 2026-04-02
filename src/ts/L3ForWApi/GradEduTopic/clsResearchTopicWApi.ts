
 /**
 * 类名:clsResearchTopicWApi
 * 表名:ResearchTopic(01120546)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 18:08:29
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
 * 研究主题(ResearchTopic)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年01月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsResearchTopicEN } from "@/ts/L0Entity/GradEduTopic/clsResearchTopicEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { vResearchTopic_ReFreshThisCache } from "@/ts/L3ForWApi/GradEduTopic/clsvResearchTopicWApi";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const researchTopic_Controller = "ResearchTopicApi";
 export const researchTopic_ConstructorName = "researchTopic";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicId:关键字
 * @returns 对象
 **/
export  async function ResearchTopic_GetObjByTopicIdAsync(strTopicId: string): Promise<clsResearchTopicEN|null>  
{
const strThisFuncName = "GetObjByTopicIdAsync";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsResearchTopicWApi.GetObjByTopicIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsResearchTopicWApi.GetObjByTopicIdAsync)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTopicId";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
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
const objResearchTopic = ResearchTopic_GetObjFromJsonObj(returnObj);
return objResearchTopic;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetObjByTopicIdCache(strTopicId:string,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByTopicIdCache";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsResearchTopicWApi.GetObjByTopicIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsResearchTopicWApi.GetObjByTopicIdCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
try
{
const arrResearchTopicSel = arrResearchTopicObjLstCache.filter(x => 
 x.topicId == strTopicId );
let objResearchTopic: clsResearchTopicEN;
if (arrResearchTopicSel.length > 0)
{
objResearchTopic = arrResearchTopicSel[0];
return objResearchTopic;
}
else
{
if (bolTryAsyncOnce == true)
{
const objResearchTopicConst = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
if (objResearchTopicConst != null)
{
ResearchTopic_ReFreshThisCache(strIdCurrEduCls);
return objResearchTopicConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTopicId, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetObjByTopicIdlocalStorage(strTopicId: string) {
const strThisFuncName = "GetObjByTopicIdlocalStorage";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsResearchTopicWApi.GetObjByTopicIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsResearchTopicWApi.GetObjByTopicIdlocalStorage)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strTopicId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objResearchTopicCache: clsResearchTopicEN = JSON.parse(strTempObj);
return objResearchTopicCache;
}
try
{
const objResearchTopic = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
if (objResearchTopic != null)
{
localStorage.setItem(strKey, JSON.stringify(objResearchTopic));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objResearchTopic;
}
return objResearchTopic;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTopicId, researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objResearchTopic:所给的对象
 * @returns 对象
*/
export  async function ResearchTopic_UpdateObjInLstCache(objResearchTopic: clsResearchTopicEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
const obj = arrResearchTopicObjLstCache.find(x => x.topicId == objResearchTopic.topicId);
if (obj != null)
{
objResearchTopic.topicId = obj.topicId;
ObjectAssign( obj, objResearchTopic);
}
else
{
arrResearchTopicObjLstCache.push(objResearchTopic);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTopicId:所给的关键字
 * @returns 对象
*/
export  async function ResearchTopic_GetNameByTopicIdCache(strTopicId: string,strIdCurrEduCls: string) {

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsResearchTopicWApi.GetNameByTopicIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsResearchTopicWApi.GetNameByTopicIdCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
if (arrResearchTopicObjLstCache == null) return "";
try
{
const arrResearchTopicSel = arrResearchTopicObjLstCache.filter(x => 
 x.topicId == strTopicId );
let objResearchTopic: clsResearchTopicEN;
if (arrResearchTopicSel.length > 0)
{
objResearchTopic = arrResearchTopicSel[0];
return objResearchTopic.topicName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strTopicId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function ResearchTopic_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsResearchTopicWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsResearchTopicWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsResearchTopicEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsResearchTopicEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsResearchTopicEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strTopicId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objResearchTopic = await ResearchTopic_GetObjByTopicIdCache(strTopicId , strIdCurrEduClsClassfy);
if (objResearchTopic == null) return "";
if (objResearchTopic.GetFldValue(strOutFldName) == null) return "";
return objResearchTopic.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ResearchTopic_SortFunDefa(a:clsResearchTopicEN , b:clsResearchTopicEN): number 
{
return a.topicId.localeCompare(b.topicId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ResearchTopic_SortFunDefa2Fld(a:clsResearchTopicEN , b:clsResearchTopicEN): number 
{
if (a.topicName == b.topicName) return a.topicContent.localeCompare(b.topicContent);
else return a.topicName.localeCompare(b.topicName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ResearchTopic_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsResearchTopicEN.con_TopicId:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
return a.topicId.localeCompare(b.topicId);
}
case clsResearchTopicEN.con_TopicName:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.topicName == null) return -1;
if (b.topicName == null) return 1;
return a.topicName.localeCompare(b.topicName);
}
case clsResearchTopicEN.con_TopicContent:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.topicContent == null) return -1;
if (b.topicContent == null) return 1;
return a.topicContent.localeCompare(b.topicContent);
}
case clsResearchTopicEN.con_TopicProposePeople:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.topicProposePeople == null) return -1;
if (b.topicProposePeople == null) return 1;
return a.topicProposePeople.localeCompare(b.topicProposePeople);
}
case clsResearchTopicEN.con_OrderNum:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
return a.orderNum-b.orderNum;
}
case clsResearchTopicEN.con_IsSubmit:
return (a: clsResearchTopicEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsResearchTopicEN.con_IdCurrEduCls:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsResearchTopicEN.con_UpdDate:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsResearchTopicEN.con_ShareId:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
return a.shareId.localeCompare(b.shareId);
}
case clsResearchTopicEN.con_UpdUser:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsResearchTopicEN.con_Memo:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ResearchTopic]中不存在!(in ${ researchTopic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsResearchTopicEN.con_TopicId:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
return b.topicId.localeCompare(a.topicId);
}
case clsResearchTopicEN.con_TopicName:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.topicName == null) return -1;
if (a.topicName == null) return 1;
return b.topicName.localeCompare(a.topicName);
}
case clsResearchTopicEN.con_TopicContent:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.topicContent == null) return -1;
if (a.topicContent == null) return 1;
return b.topicContent.localeCompare(a.topicContent);
}
case clsResearchTopicEN.con_TopicProposePeople:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.topicProposePeople == null) return -1;
if (a.topicProposePeople == null) return 1;
return b.topicProposePeople.localeCompare(a.topicProposePeople);
}
case clsResearchTopicEN.con_OrderNum:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
return b.orderNum-a.orderNum;
}
case clsResearchTopicEN.con_IsSubmit:
return (b: clsResearchTopicEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsResearchTopicEN.con_IdCurrEduCls:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsResearchTopicEN.con_UpdDate:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsResearchTopicEN.con_ShareId:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
return b.shareId.localeCompare(a.shareId);
}
case clsResearchTopicEN.con_UpdUser:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsResearchTopicEN.con_Memo:
return (a: clsResearchTopicEN, b: clsResearchTopicEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ResearchTopic]中不存在!(in ${ researchTopic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ResearchTopic_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsResearchTopicEN.con_TopicId:
return (obj: clsResearchTopicEN) => {
return obj.topicId === value;
}
case clsResearchTopicEN.con_TopicName:
return (obj: clsResearchTopicEN) => {
return obj.topicName === value;
}
case clsResearchTopicEN.con_TopicContent:
return (obj: clsResearchTopicEN) => {
return obj.topicContent === value;
}
case clsResearchTopicEN.con_TopicProposePeople:
return (obj: clsResearchTopicEN) => {
return obj.topicProposePeople === value;
}
case clsResearchTopicEN.con_OrderNum:
return (obj: clsResearchTopicEN) => {
return obj.orderNum === value;
}
case clsResearchTopicEN.con_IsSubmit:
return (obj: clsResearchTopicEN) => {
return obj.isSubmit === value;
}
case clsResearchTopicEN.con_IdCurrEduCls:
return (obj: clsResearchTopicEN) => {
return obj.idCurrEduCls === value;
}
case clsResearchTopicEN.con_UpdDate:
return (obj: clsResearchTopicEN) => {
return obj.updDate === value;
}
case clsResearchTopicEN.con_ShareId:
return (obj: clsResearchTopicEN) => {
return obj.shareId === value;
}
case clsResearchTopicEN.con_UpdUser:
return (obj: clsResearchTopicEN) => {
return obj.updUser === value;
}
case clsResearchTopicEN.con_Memo:
return (obj: clsResearchTopicEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ResearchTopic]中不存在!(in ${ researchTopic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function ResearchTopic_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsResearchTopicWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsResearchTopicWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsResearchTopicEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrResearchTopic = await ResearchTopic_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrResearchTopic == null) return [];
let arrResearchTopicSel = arrResearchTopic;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrResearchTopicSel = arrResearchTopicSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrResearchTopicSel.length == 0) return [];
return arrResearchTopicSel.map(x=>x.topicId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ResearchTopic_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetFirstObjAsync(strWhereCond: string): Promise<clsResearchTopicEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const objResearchTopic = ResearchTopic_GetObjFromJsonObj(returnObj);
return objResearchTopic;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsResearchTopicEN.WhereFormat) == false)
{
strWhereCond = Format(clsResearchTopicEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsResearchTopicEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsResearchTopicEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrResearchTopicExObjLstCache: Array<clsResearchTopicEN> = CacheHelper.Get(strKey);
const arrResearchTopicObjLstT = ResearchTopic_GetObjLstByJSONObjLst(arrResearchTopicExObjLstCache);
return arrResearchTopicObjLstT;
}
try
{
const arrResearchTopicExObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrResearchTopicExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrResearchTopicExObjLst.length);
console.log(strInfo);
return arrResearchTopicExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ResearchTopic_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsResearchTopicEN.WhereFormat) == false)
{
strWhereCond = Format(clsResearchTopicEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsResearchTopicEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsResearchTopicEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsResearchTopicEN.CacheAddiCondition);
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
const arrResearchTopicExObjLstCache: Array<clsResearchTopicEN> = JSON.parse(strTempObjLst);
const arrResearchTopicObjLstT = ResearchTopic_GetObjLstByJSONObjLst(arrResearchTopicExObjLstCache);
return arrResearchTopicObjLstT;
}
try
{
const arrResearchTopicExObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrResearchTopicExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrResearchTopicExObjLst.length);
console.log(strInfo);
return arrResearchTopicExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ResearchTopic_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrResearchTopicObjLstCache: Array<clsResearchTopicEN> = JSON.parse(strTempObjLst);
return arrResearchTopicObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ResearchTopic_GetObjLstAsync(strWhereCond: string): Promise<Array<clsResearchTopicEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", researchTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsResearchTopicEN.WhereFormat) == false)
{
strWhereCond = Format(clsResearchTopicEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsResearchTopicEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsResearchTopicEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsResearchTopicEN.CacheAddiCondition);
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
const arrResearchTopicExObjLstCache: Array<clsResearchTopicEN> = JSON.parse(strTempObjLst);
const arrResearchTopicObjLstT = ResearchTopic_GetObjLstByJSONObjLst(arrResearchTopicExObjLstCache);
return arrResearchTopicObjLstT;
}
try
{
const arrResearchTopicExObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrResearchTopicExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrResearchTopicExObjLst.length);
console.log(strInfo);
return arrResearchTopicExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ResearchTopic_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrResearchTopicObjLstCache: Array<clsResearchTopicEN> = JSON.parse(strTempObjLst);
return arrResearchTopicObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ResearchTopic_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsResearchTopicEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsResearchTopicWApi.ResearchTopic_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsResearchTopicWApi.ResearchTopic_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrResearchTopicObjLstCache;
switch (clsResearchTopicEN.CacheModeId)
{
case "04"://sessionStorage
arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrResearchTopicObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ResearchTopic_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrResearchTopicObjLstCache;
switch (clsResearchTopicEN.CacheModeId)
{
case "04"://sessionStorage
arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrResearchTopicObjLstCache = null;
break;
default:
arrResearchTopicObjLstCache = null;
break;
}
return arrResearchTopicObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ResearchTopic_GetSubObjLstCache(objResearchTopicCond: clsResearchTopicEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
let arrResearchTopicSel = arrResearchTopicObjLstCache;
if (objResearchTopicCond.sfFldComparisonOp == null || objResearchTopicCond.sfFldComparisonOp == "") return arrResearchTopicSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objResearchTopicCond.sfFldComparisonOp);
//console.log("clsResearchTopicWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objResearchTopicCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objResearchTopicCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrResearchTopicSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objResearchTopicCond), researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsResearchTopicEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicId:关键字列表
 * @returns 对象列表
 **/
export  async function ResearchTopic_GetObjLstByTopicIdLstAsync(arrTopicId: Array<string>): Promise<Array<clsResearchTopicEN>>  
{
const strThisFuncName = "GetObjLstByTopicIdLstAsync";
const strAction = "GetObjLstByTopicIdLst";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTopicId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", researchTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param arrstrTopicIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ResearchTopic_GetObjLstByTopicIdLstCache(arrTopicIdLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByTopicIdLstCache";
try
{
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
const arrResearchTopicSel = arrResearchTopicObjLstCache.filter(x => arrTopicIdLst.indexOf(x.topicId)>-1);
return arrResearchTopicSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrTopicIdLst.join(","), researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsResearchTopicEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", researchTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsResearchTopicEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", researchTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsResearchTopicEN>();
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
if (arrResearchTopicObjLstCache.length == 0) return arrResearchTopicObjLstCache;
let arrResearchTopicSel = arrResearchTopicObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objResearchTopicCond = new clsResearchTopicEN();
ObjectAssign(objResearchTopicCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsResearchTopicWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objResearchTopicCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrResearchTopicSel = arrResearchTopicSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrResearchTopicSel.length == 0) return arrResearchTopicSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrResearchTopicSel = arrResearchTopicSel.sort(ResearchTopic_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrResearchTopicSel = arrResearchTopicSel.sort(objPagerPara.sortFun);
}
arrResearchTopicSel = arrResearchTopicSel.slice(intStart, intEnd);     
return arrResearchTopicSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsResearchTopicEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ResearchTopic_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsResearchTopicEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsResearchTopicEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", researchTopic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ResearchTopic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param strTopicId:关键字
 * @returns 获取删除的结果
 **/
export  async function ResearchTopic_DelRecordAsync(strTopicId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(researchTopic_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strTopicId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param arrTopicId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ResearchTopic_DelResearchTopicsAsync(arrTopicId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelResearchTopicsAsync";
const strAction = "DelResearchTopics";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTopicId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_DelResearchTopicsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelResearchTopicsByCondAsync";
const strAction = "DelResearchTopicsByCond";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_AddNewRecordAsync(objResearchTopicEN: clsResearchTopicEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objResearchTopicEN);
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResearchTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_AddNewRecordWithMaxIdAsync(objResearchTopicEN: clsResearchTopicEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResearchTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objResearchTopicEN);
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objResearchTopicEN);
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objResearchTopicEN);
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ResearchTopic_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objResearchTopicEN);
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ResearchTopic_AddNewRecordWithReturnKeyAsync(objResearchTopicEN: clsResearchTopicEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResearchTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ResearchTopic_UpdateRecordAsync(objResearchTopicEN: clsResearchTopicEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objResearchTopicEN.sfUpdFldSetStr === undefined || objResearchTopicEN.sfUpdFldSetStr === null || objResearchTopicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objResearchTopicEN.topicId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResearchTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ResearchTopic_UpdateWithConditionAsync(objResearchTopicEN: clsResearchTopicEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objResearchTopicEN.sfUpdFldSetStr === undefined || objResearchTopicEN.sfUpdFldSetStr === null || objResearchTopicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objResearchTopicEN.topicId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);
objResearchTopicEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objResearchTopicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_IsExistRecordCache(objResearchTopicCond: clsResearchTopicEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
if (arrResearchTopicObjLstCache == null) return false;
let arrResearchTopicSel = arrResearchTopicObjLstCache;
if (objResearchTopicCond.sfFldComparisonOp == null || objResearchTopicCond.sfFldComparisonOp == "") return arrResearchTopicSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objResearchTopicCond.sfFldComparisonOp);
//console.log("clsResearchTopicWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objResearchTopicCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objResearchTopicCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrResearchTopicSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objResearchTopicCond), researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_IsExistCache(strTopicId:string,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
if (arrResearchTopicObjLstCache == null) return false;
try
{
const arrResearchTopicSel = arrResearchTopicObjLstCache.filter(x => x.topicId == strTopicId);
if (arrResearchTopicSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strTopicId, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_IsExistAsync(strTopicId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTopicId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  async function ResearchTopic_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
 * @param objResearchTopicCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ResearchTopic_GetRecCountByCondCache(objResearchTopicCond: clsResearchTopicEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrResearchTopicObjLstCache = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
if (arrResearchTopicObjLstCache == null) return 0;
let arrResearchTopicSel = arrResearchTopicObjLstCache;
if (objResearchTopicCond.sfFldComparisonOp == null || objResearchTopicCond.sfFldComparisonOp == "") return arrResearchTopicSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objResearchTopicCond.sfFldComparisonOp);
//console.log("clsResearchTopicWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objResearchTopicCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objResearchTopicCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrResearchTopicSel = arrResearchTopicSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrResearchTopicSel = arrResearchTopicSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrResearchTopicSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objResearchTopicCond), researchTopic_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function ResearchTopic_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function ResearchTopic_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(researchTopic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, researchTopic_ConstructorName, strThisFuncName);
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
export  function ResearchTopic_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ResearchTopic_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsResearchTopicWApi.clsResearchTopicWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsResearchTopicWApi.clsResearchTopicWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
switch (clsResearchTopicEN.CacheModeId)
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
vResearchTopic_ReFreshThisCache(strIdCurrEduCls);
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ResearchTopic_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsResearchTopicWApi.ResearchTopic_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsResearchTopicWApi.ResearchTopic_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsResearchTopicEN._CurrTabName, strIdCurrEduCls);
switch (clsResearchTopicEN.CacheModeId)
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

 * @param strIdCurrEduCls:
*/
export  async function ResearchTopic_BindDdl_TopicIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsResearchTopicWApi.BindDdl_TopicIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsResearchTopicWApi.BindDdl_TopicIdInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_TopicIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_TopicIdInDivCache");
let arrObjLstSel = await ResearchTopic_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsResearchTopicEN.con_TopicId, clsResearchTopicEN.con_TopicName, "研究主题");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ResearchTopic_CheckPropertyNew(pobjResearchTopicEN: clsResearchTopicEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjResearchTopicEN.shareId) === true 
 || pobjResearchTopicEN.shareId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[分享Id]不能为空(In 研究主题)!(clsResearchTopicBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjResearchTopicEN.topicId) == false && GetStrLen(pobjResearchTopicEN.topicId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.topicId)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicName) == false && GetStrLen(pobjResearchTopicEN.topicName) > 200)
{
 throw new Error("(errid:Watl000413)字段[栏目主题(topicName)]的长度不能超过200(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.topicName)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicProposePeople) == false && GetStrLen(pobjResearchTopicEN.topicProposePeople) > 50)
{
 throw new Error("(errid:Watl000413)字段[主题提出人(topicProposePeople)]的长度不能超过50(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.topicProposePeople)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.idCurrEduCls) == false && GetStrLen(pobjResearchTopicEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.idCurrEduCls)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updDate) == false && GetStrLen(pobjResearchTopicEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.updDate)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.shareId) == false && GetStrLen(pobjResearchTopicEN.shareId) > 2)
{
 throw new Error("(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.shareId)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updUser) == false && GetStrLen(pobjResearchTopicEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.updUser)(clsResearchTopicBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.memo) == false && GetStrLen(pobjResearchTopicEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.memo)(clsResearchTopicBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjResearchTopicEN.topicId) == false && undefined !== pobjResearchTopicEN.topicId && tzDataType.isString(pobjResearchTopicEN.topicId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjResearchTopicEN.topicId)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicName) == false && undefined !== pobjResearchTopicEN.topicName && tzDataType.isString(pobjResearchTopicEN.topicName) === false)
{
 throw new Error("(errid:Watl000414)字段[栏目主题(topicName)]的值:[$(pobjResearchTopicEN.topicName)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicContent) == false && undefined !== pobjResearchTopicEN.topicContent && tzDataType.isString(pobjResearchTopicEN.topicContent) === false)
{
 throw new Error("(errid:Watl000414)字段[主题内容(topicContent)]的值:[$(pobjResearchTopicEN.topicContent)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicProposePeople) == false && undefined !== pobjResearchTopicEN.topicProposePeople && tzDataType.isString(pobjResearchTopicEN.topicProposePeople) === false)
{
 throw new Error("(errid:Watl000414)字段[主题提出人(topicProposePeople)]的值:[$(pobjResearchTopicEN.topicProposePeople)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (null != pobjResearchTopicEN.orderNum && undefined !== pobjResearchTopicEN.orderNum && tzDataType.isNumber(pobjResearchTopicEN.orderNum) === false)
{
 throw new Error("(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjResearchTopicEN.orderNum)], 非法,应该为数值型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (null != pobjResearchTopicEN.isSubmit && undefined !== pobjResearchTopicEN.isSubmit && tzDataType.isBoolean(pobjResearchTopicEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjResearchTopicEN.isSubmit)], 非法,应该为布尔型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.idCurrEduCls) == false && undefined !== pobjResearchTopicEN.idCurrEduCls && tzDataType.isString(pobjResearchTopicEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjResearchTopicEN.idCurrEduCls)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updDate) == false && undefined !== pobjResearchTopicEN.updDate && tzDataType.isString(pobjResearchTopicEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjResearchTopicEN.updDate)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.shareId) == false && undefined !== pobjResearchTopicEN.shareId && tzDataType.isString(pobjResearchTopicEN.shareId) === false)
{
 throw new Error("(errid:Watl000414)字段[分享Id(shareId)]的值:[$(pobjResearchTopicEN.shareId)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updUser) == false && undefined !== pobjResearchTopicEN.updUser && tzDataType.isString(pobjResearchTopicEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjResearchTopicEN.updUser)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.memo) == false && undefined !== pobjResearchTopicEN.memo && tzDataType.isString(pobjResearchTopicEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjResearchTopicEN.memo)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ResearchTopic_CheckProperty4Update(pobjResearchTopicEN: clsResearchTopicEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjResearchTopicEN.topicId) == false && GetStrLen(pobjResearchTopicEN.topicId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.topicId)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicName) == false && GetStrLen(pobjResearchTopicEN.topicName) > 200)
{
 throw new Error("(errid:Watl000416)字段[栏目主题(topicName)]的长度不能超过200(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.topicName)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicProposePeople) == false && GetStrLen(pobjResearchTopicEN.topicProposePeople) > 50)
{
 throw new Error("(errid:Watl000416)字段[主题提出人(topicProposePeople)]的长度不能超过50(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.topicProposePeople)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.idCurrEduCls) == false && GetStrLen(pobjResearchTopicEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.idCurrEduCls)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updDate) == false && GetStrLen(pobjResearchTopicEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.updDate)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.shareId) == false && GetStrLen(pobjResearchTopicEN.shareId) > 2)
{
 throw new Error("(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.shareId)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updUser) == false && GetStrLen(pobjResearchTopicEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.updUser)(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.memo) == false && GetStrLen(pobjResearchTopicEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 研究主题(ResearchTopic))!值:$(pobjResearchTopicEN.memo)(clsResearchTopicBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjResearchTopicEN.topicId) == false && undefined !== pobjResearchTopicEN.topicId && tzDataType.isString(pobjResearchTopicEN.topicId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjResearchTopicEN.topicId)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicName) == false && undefined !== pobjResearchTopicEN.topicName && tzDataType.isString(pobjResearchTopicEN.topicName) === false)
{
 throw new Error("(errid:Watl000417)字段[栏目主题(topicName)]的值:[$(pobjResearchTopicEN.topicName)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicContent) == false && undefined !== pobjResearchTopicEN.topicContent && tzDataType.isString(pobjResearchTopicEN.topicContent) === false)
{
 throw new Error("(errid:Watl000417)字段[主题内容(topicContent)]的值:[$(pobjResearchTopicEN.topicContent)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.topicProposePeople) == false && undefined !== pobjResearchTopicEN.topicProposePeople && tzDataType.isString(pobjResearchTopicEN.topicProposePeople) === false)
{
 throw new Error("(errid:Watl000417)字段[主题提出人(topicProposePeople)]的值:[$(pobjResearchTopicEN.topicProposePeople)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (null != pobjResearchTopicEN.orderNum && undefined !== pobjResearchTopicEN.orderNum && tzDataType.isNumber(pobjResearchTopicEN.orderNum) === false)
{
 throw new Error("(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjResearchTopicEN.orderNum)], 非法,应该为数值型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (null != pobjResearchTopicEN.isSubmit && undefined !== pobjResearchTopicEN.isSubmit && tzDataType.isBoolean(pobjResearchTopicEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjResearchTopicEN.isSubmit)], 非法,应该为布尔型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.idCurrEduCls) == false && undefined !== pobjResearchTopicEN.idCurrEduCls && tzDataType.isString(pobjResearchTopicEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjResearchTopicEN.idCurrEduCls)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updDate) == false && undefined !== pobjResearchTopicEN.updDate && tzDataType.isString(pobjResearchTopicEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjResearchTopicEN.updDate)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.shareId) == false && undefined !== pobjResearchTopicEN.shareId && tzDataType.isString(pobjResearchTopicEN.shareId) === false)
{
 throw new Error("(errid:Watl000417)字段[分享Id(shareId)]的值:[$(pobjResearchTopicEN.shareId)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.updUser) == false && undefined !== pobjResearchTopicEN.updUser && tzDataType.isString(pobjResearchTopicEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjResearchTopicEN.updUser)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjResearchTopicEN.memo) == false && undefined !== pobjResearchTopicEN.memo && tzDataType.isString(pobjResearchTopicEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjResearchTopicEN.memo)], 非法,应该为字符型(In 研究主题(ResearchTopic))!(clsResearchTopicBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ResearchTopic_GetJSONStrByObj (pobjResearchTopicEN: clsResearchTopicEN): string
{
pobjResearchTopicEN.sfUpdFldSetStr = pobjResearchTopicEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjResearchTopicEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function ResearchTopic_GetObjLstByJSONStr (strJSON: string): Array<clsResearchTopicEN>
{
let arrResearchTopicObjLst = new Array<clsResearchTopicEN>();
if (strJSON === "")
{
return arrResearchTopicObjLst;
}
try
{
arrResearchTopicObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrResearchTopicObjLst;
}
return arrResearchTopicObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrResearchTopicObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ResearchTopic_GetObjLstByJSONObjLst (arrResearchTopicObjLstS: Array<clsResearchTopicEN>): Array<clsResearchTopicEN>
{
const arrResearchTopicObjLst = new Array<clsResearchTopicEN>();
for (const objInFor of arrResearchTopicObjLstS) {
const obj1 = ResearchTopic_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrResearchTopicObjLst.push(obj1);
}
return arrResearchTopicObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ResearchTopic_GetObjByJSONStr (strJSON: string): clsResearchTopicEN
{
let pobjResearchTopicEN = new clsResearchTopicEN();
if (strJSON === "")
{
return pobjResearchTopicEN;
}
try
{
pobjResearchTopicEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjResearchTopicEN;
}
return pobjResearchTopicEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ResearchTopic_GetCombineCondition(objResearchTopicCond: clsResearchTopicEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_TopicId, objResearchTopicCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_TopicName) == true)
{
const strComparisonOpTopicName:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_TopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_TopicName, objResearchTopicCond.topicName, strComparisonOpTopicName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_TopicProposePeople) == true)
{
const strComparisonOpTopicProposePeople:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_TopicProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_TopicProposePeople, objResearchTopicCond.topicProposePeople, strComparisonOpTopicProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsResearchTopicEN.con_OrderNum, objResearchTopicCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_IsSubmit) == true)
{
if (objResearchTopicCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsResearchTopicEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsResearchTopicEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_IdCurrEduCls, objResearchTopicCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_UpdDate, objResearchTopicCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_ShareId, objResearchTopicCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_UpdUser, objResearchTopicCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objResearchTopicCond.dicFldComparisonOp, clsResearchTopicEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objResearchTopicCond.dicFldComparisonOp[clsResearchTopicEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsResearchTopicEN.con_Memo, objResearchTopicCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ResearchTopic(研究主题),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ResearchTopic_GetUniCondStr(objResearchTopicEN: clsResearchTopicEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TopicId = '{0}'", objResearchTopicEN.topicId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ResearchTopic(研究主题),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ResearchTopic_GetUniCondStr4Update(objResearchTopicEN: clsResearchTopicEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and TopicId <> '{0}'", objResearchTopicEN.topicId);
 strWhereCond +=  Format(" and TopicId = '{0}'", objResearchTopicEN.topicId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objResearchTopicENS:源对象
 * @param objResearchTopicENT:目标对象
*/
export  function ResearchTopic_CopyObjTo(objResearchTopicENS: clsResearchTopicEN , objResearchTopicENT: clsResearchTopicEN ): void 
{
objResearchTopicENT.topicId = objResearchTopicENS.topicId; //主题Id
objResearchTopicENT.topicName = objResearchTopicENS.topicName; //栏目主题
objResearchTopicENT.topicContent = objResearchTopicENS.topicContent; //主题内容
objResearchTopicENT.topicProposePeople = objResearchTopicENS.topicProposePeople; //主题提出人
objResearchTopicENT.orderNum = objResearchTopicENS.orderNum; //序号
objResearchTopicENT.isSubmit = objResearchTopicENS.isSubmit; //是否提交
objResearchTopicENT.idCurrEduCls = objResearchTopicENS.idCurrEduCls; //教学班流水号
objResearchTopicENT.updDate = objResearchTopicENS.updDate; //修改日期
objResearchTopicENT.shareId = objResearchTopicENS.shareId; //分享Id
objResearchTopicENT.updUser = objResearchTopicENS.updUser; //修改人
objResearchTopicENT.memo = objResearchTopicENS.memo; //备注
objResearchTopicENT.sfUpdFldSetStr = objResearchTopicENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objResearchTopicENS:源对象
 * @param objResearchTopicENT:目标对象
*/
export  function ResearchTopic_GetObjFromJsonObj(objResearchTopicENS: clsResearchTopicEN): clsResearchTopicEN 
{
 const objResearchTopicENT: clsResearchTopicEN = new clsResearchTopicEN();
ObjectAssign(objResearchTopicENT, objResearchTopicENS);
 return objResearchTopicENT;
}