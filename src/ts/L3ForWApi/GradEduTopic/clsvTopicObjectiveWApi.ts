
 /**
 * 类名:clsvTopicObjectiveWApi
 * 表名:vTopicObjective(01120617)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:37
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
 * 客观表视图(vTopicObjective)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月29日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvTopicObjectiveEN } from "@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vTopicObjective_Controller = "vTopicObjectiveApi";
 export const vTopicObjective_ConstructorName = "vTopicObjective";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicObjectiveId:关键字
 * @returns 对象
 **/
export  async function vTopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId: string): Promise<clsvTopicObjectiveEN|null>  
{
const strThisFuncName = "GetObjByTopicObjectiveIdAsync";

if (IsNullOrEmpty(strTopicObjectiveId) == true)
{
  const strMsg = Format("参数:[strTopicObjectiveId]不能为空!(In clsvTopicObjectiveWApi.GetObjByTopicObjectiveIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicObjectiveId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicObjectiveId]的长度:[{0}]不正确!(clsvTopicObjectiveWApi.GetObjByTopicObjectiveIdAsync)", strTopicObjectiveId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTopicObjectiveId";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTopicObjectiveId,
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
const objvTopicObjective = vTopicObjective_GetObjFromJsonObj(returnObj);
return objvTopicObjective;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
 * @param strTopicObjectiveId:所给的关键字
 * @returns 对象
*/
export  async function vTopicObjective_GetObjByTopicObjectiveIdCache(strTopicObjectiveId:string,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByTopicObjectiveIdCache";

if (IsNullOrEmpty(strTopicObjectiveId) == true)
{
  const strMsg = Format("参数:[strTopicObjectiveId]不能为空!(In clsvTopicObjectiveWApi.GetObjByTopicObjectiveIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicObjectiveId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicObjectiveId]的长度:[{0}]不正确!(clsvTopicObjectiveWApi.GetObjByTopicObjectiveIdCache)", strTopicObjectiveId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
try
{
const arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache.filter(x => 
 x.topicObjectiveId == strTopicObjectiveId );
let objvTopicObjective: clsvTopicObjectiveEN;
if (arrvTopicObjectiveSel.length > 0)
{
objvTopicObjective = arrvTopicObjectiveSel[0];
return objvTopicObjective;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvTopicObjectiveConst = await vTopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
if (objvTopicObjectiveConst != null)
{
vTopicObjective_ReFreshThisCache(strIdCurrEduCls);
return objvTopicObjectiveConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTopicObjectiveId, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTopicObjectiveId:所给的关键字
 * @returns 对象
*/
export  async function vTopicObjective_GetObjByTopicObjectiveIdlocalStorage(strTopicObjectiveId: string) {
const strThisFuncName = "GetObjByTopicObjectiveIdlocalStorage";

if (IsNullOrEmpty(strTopicObjectiveId) == true)
{
  const strMsg = Format("参数:[strTopicObjectiveId]不能为空!(In clsvTopicObjectiveWApi.GetObjByTopicObjectiveIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicObjectiveId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicObjectiveId]的长度:[{0}]不正确!(clsvTopicObjectiveWApi.GetObjByTopicObjectiveIdlocalStorage)", strTopicObjectiveId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strTopicObjectiveId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvTopicObjectiveCache: clsvTopicObjectiveEN = JSON.parse(strTempObj);
return objvTopicObjectiveCache;
}
try
{
const objvTopicObjective = await vTopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
if (objvTopicObjective != null)
{
localStorage.setItem(strKey, JSON.stringify(objvTopicObjective));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvTopicObjective;
}
return objvTopicObjective;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strTopicObjectiveId, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vTopicObjective_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvTopicObjectiveWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvTopicObjectiveWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvTopicObjectiveEN.con_TopicObjectiveId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvTopicObjectiveEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvTopicObjectiveEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strTopicObjectiveId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objvTopicObjective = await vTopicObjective_GetObjByTopicObjectiveIdCache(strTopicObjectiveId , strIdCurrEduClsClassfy);
if (objvTopicObjective == null) return "";
if (objvTopicObjective.GetFldValue(strOutFldName) == null) return "";
return objvTopicObjective.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTopicObjective_SortFunDefa(a:clsvTopicObjectiveEN , b:clsvTopicObjectiveEN): number 
{
return a.topicObjectiveId.localeCompare(b.topicObjectiveId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTopicObjective_SortFunDefa2Fld(a:clsvTopicObjectiveEN , b:clsvTopicObjectiveEN): number 
{
if (a.paperTitle == b.paperTitle) return a.paperContent.localeCompare(b.paperContent);
else return a.paperTitle.localeCompare(b.paperTitle);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTopicObjective_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvTopicObjectiveEN.con_PaperTitle:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvTopicObjectiveEN.con_PaperContent:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.paperContent == null) return -1;
if (b.paperContent == null) return 1;
return a.paperContent.localeCompare(b.paperContent);
}
case clsvTopicObjectiveEN.con_Author:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.author == null) return -1;
if (b.author == null) return 1;
return a.author.localeCompare(b.author);
}
case clsvTopicObjectiveEN.con_Keyword:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsvTopicObjectiveEN.con_TopicObjectiveId:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.topicObjectiveId.localeCompare(b.topicObjectiveId);
}
case clsvTopicObjectiveEN.con_ObjectiveName:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.objectiveName == null) return -1;
if (b.objectiveName == null) return 1;
return a.objectiveName.localeCompare(b.objectiveName);
}
case clsvTopicObjectiveEN.con_ObjectiveContent:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.objectiveContent == null) return -1;
if (b.objectiveContent == null) return 1;
return a.objectiveContent.localeCompare(b.objectiveContent);
}
case clsvTopicObjectiveEN.con_ObjectiveType:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.objectiveType == null) return -1;
if (b.objectiveType == null) return 1;
return a.objectiveType.localeCompare(b.objectiveType);
}
case clsvTopicObjectiveEN.con_SourceId:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.sourceId == null) return -1;
if (b.sourceId == null) return 1;
return a.sourceId.localeCompare(b.sourceId);
}
case clsvTopicObjectiveEN.con_Conclusion:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.conclusion == null) return -1;
if (b.conclusion == null) return 1;
return a.conclusion.localeCompare(b.conclusion);
}
case clsvTopicObjectiveEN.con_IsSubmit:
return (a: clsvTopicObjectiveEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvTopicObjectiveEN.con_UpdDate:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvTopicObjectiveEN.con_Memo:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvTopicObjectiveEN.con_ObjectiveTypeName:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.objectiveTypeName == null) return -1;
if (b.objectiveTypeName == null) return 1;
return a.objectiveTypeName.localeCompare(b.objectiveTypeName);
}
case clsvTopicObjectiveEN.con_CitationCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.citationCount-b.citationCount;
}
case clsvTopicObjectiveEN.con_AppraiseCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvTopicObjectiveEN.con_Score:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.score-b.score;
}
case clsvTopicObjectiveEN.con_StuScore:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.stuScore-b.stuScore;
}
case clsvTopicObjectiveEN.con_TeaScore:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.teaScore-b.teaScore;
}
case clsvTopicObjectiveEN.con_IdCurrEduCls:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvTopicObjectiveEN.con_PdfContent:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvTopicObjectiveEN.con_PdfPageNum:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsvTopicObjectiveEN.con_OkCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.okCount-b.okCount;
}
case clsvTopicObjectiveEN.con_VersionCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return a.versionCount-b.versionCount;
}
case clsvTopicObjectiveEN.con_CreateDate:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvTopicObjectiveEN.con_ShareId:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsvTopicObjectiveEN.con_UpdUser:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTopicObjective]中不存在!(in ${ vTopicObjective_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvTopicObjectiveEN.con_PaperTitle:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvTopicObjectiveEN.con_PaperContent:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.paperContent == null) return -1;
if (a.paperContent == null) return 1;
return b.paperContent.localeCompare(a.paperContent);
}
case clsvTopicObjectiveEN.con_Author:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.author == null) return -1;
if (a.author == null) return 1;
return b.author.localeCompare(a.author);
}
case clsvTopicObjectiveEN.con_Keyword:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsvTopicObjectiveEN.con_TopicObjectiveId:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.topicObjectiveId.localeCompare(a.topicObjectiveId);
}
case clsvTopicObjectiveEN.con_ObjectiveName:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.objectiveName == null) return -1;
if (a.objectiveName == null) return 1;
return b.objectiveName.localeCompare(a.objectiveName);
}
case clsvTopicObjectiveEN.con_ObjectiveContent:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.objectiveContent == null) return -1;
if (a.objectiveContent == null) return 1;
return b.objectiveContent.localeCompare(a.objectiveContent);
}
case clsvTopicObjectiveEN.con_ObjectiveType:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.objectiveType == null) return -1;
if (a.objectiveType == null) return 1;
return b.objectiveType.localeCompare(a.objectiveType);
}
case clsvTopicObjectiveEN.con_SourceId:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.sourceId == null) return -1;
if (a.sourceId == null) return 1;
return b.sourceId.localeCompare(a.sourceId);
}
case clsvTopicObjectiveEN.con_Conclusion:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.conclusion == null) return -1;
if (a.conclusion == null) return 1;
return b.conclusion.localeCompare(a.conclusion);
}
case clsvTopicObjectiveEN.con_IsSubmit:
return (b: clsvTopicObjectiveEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvTopicObjectiveEN.con_UpdDate:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvTopicObjectiveEN.con_Memo:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvTopicObjectiveEN.con_ObjectiveTypeName:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.objectiveTypeName == null) return -1;
if (a.objectiveTypeName == null) return 1;
return b.objectiveTypeName.localeCompare(a.objectiveTypeName);
}
case clsvTopicObjectiveEN.con_CitationCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.citationCount-a.citationCount;
}
case clsvTopicObjectiveEN.con_AppraiseCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvTopicObjectiveEN.con_Score:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.score-a.score;
}
case clsvTopicObjectiveEN.con_StuScore:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.stuScore-a.stuScore;
}
case clsvTopicObjectiveEN.con_TeaScore:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.teaScore-a.teaScore;
}
case clsvTopicObjectiveEN.con_IdCurrEduCls:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvTopicObjectiveEN.con_PdfContent:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvTopicObjectiveEN.con_PdfPageNum:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsvTopicObjectiveEN.con_OkCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.okCount-a.okCount;
}
case clsvTopicObjectiveEN.con_VersionCount:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
return b.versionCount-a.versionCount;
}
case clsvTopicObjectiveEN.con_CreateDate:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvTopicObjectiveEN.con_ShareId:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsvTopicObjectiveEN.con_UpdUser:
return (a: clsvTopicObjectiveEN, b: clsvTopicObjectiveEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTopicObjective]中不存在!(in ${ vTopicObjective_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vTopicObjective_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvTopicObjectiveEN.con_PaperTitle:
return (obj: clsvTopicObjectiveEN) => {
return obj.paperTitle === value;
}
case clsvTopicObjectiveEN.con_PaperContent:
return (obj: clsvTopicObjectiveEN) => {
return obj.paperContent === value;
}
case clsvTopicObjectiveEN.con_Author:
return (obj: clsvTopicObjectiveEN) => {
return obj.author === value;
}
case clsvTopicObjectiveEN.con_Keyword:
return (obj: clsvTopicObjectiveEN) => {
return obj.keyword === value;
}
case clsvTopicObjectiveEN.con_TopicObjectiveId:
return (obj: clsvTopicObjectiveEN) => {
return obj.topicObjectiveId === value;
}
case clsvTopicObjectiveEN.con_ObjectiveName:
return (obj: clsvTopicObjectiveEN) => {
return obj.objectiveName === value;
}
case clsvTopicObjectiveEN.con_ObjectiveContent:
return (obj: clsvTopicObjectiveEN) => {
return obj.objectiveContent === value;
}
case clsvTopicObjectiveEN.con_ObjectiveType:
return (obj: clsvTopicObjectiveEN) => {
return obj.objectiveType === value;
}
case clsvTopicObjectiveEN.con_SourceId:
return (obj: clsvTopicObjectiveEN) => {
return obj.sourceId === value;
}
case clsvTopicObjectiveEN.con_Conclusion:
return (obj: clsvTopicObjectiveEN) => {
return obj.conclusion === value;
}
case clsvTopicObjectiveEN.con_IsSubmit:
return (obj: clsvTopicObjectiveEN) => {
return obj.isSubmit === value;
}
case clsvTopicObjectiveEN.con_UpdDate:
return (obj: clsvTopicObjectiveEN) => {
return obj.updDate === value;
}
case clsvTopicObjectiveEN.con_Memo:
return (obj: clsvTopicObjectiveEN) => {
return obj.memo === value;
}
case clsvTopicObjectiveEN.con_ObjectiveTypeName:
return (obj: clsvTopicObjectiveEN) => {
return obj.objectiveTypeName === value;
}
case clsvTopicObjectiveEN.con_CitationCount:
return (obj: clsvTopicObjectiveEN) => {
return obj.citationCount === value;
}
case clsvTopicObjectiveEN.con_AppraiseCount:
return (obj: clsvTopicObjectiveEN) => {
return obj.appraiseCount === value;
}
case clsvTopicObjectiveEN.con_Score:
return (obj: clsvTopicObjectiveEN) => {
return obj.score === value;
}
case clsvTopicObjectiveEN.con_StuScore:
return (obj: clsvTopicObjectiveEN) => {
return obj.stuScore === value;
}
case clsvTopicObjectiveEN.con_TeaScore:
return (obj: clsvTopicObjectiveEN) => {
return obj.teaScore === value;
}
case clsvTopicObjectiveEN.con_IdCurrEduCls:
return (obj: clsvTopicObjectiveEN) => {
return obj.idCurrEduCls === value;
}
case clsvTopicObjectiveEN.con_PdfContent:
return (obj: clsvTopicObjectiveEN) => {
return obj.pdfContent === value;
}
case clsvTopicObjectiveEN.con_PdfPageNum:
return (obj: clsvTopicObjectiveEN) => {
return obj.pdfPageNum === value;
}
case clsvTopicObjectiveEN.con_OkCount:
return (obj: clsvTopicObjectiveEN) => {
return obj.okCount === value;
}
case clsvTopicObjectiveEN.con_VersionCount:
return (obj: clsvTopicObjectiveEN) => {
return obj.versionCount === value;
}
case clsvTopicObjectiveEN.con_CreateDate:
return (obj: clsvTopicObjectiveEN) => {
return obj.createDate === value;
}
case clsvTopicObjectiveEN.con_ShareId:
return (obj: clsvTopicObjectiveEN) => {
return obj.shareId === value;
}
case clsvTopicObjectiveEN.con_UpdUser:
return (obj: clsvTopicObjectiveEN) => {
return obj.updUser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTopicObjective]中不存在!(in ${ vTopicObjective_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vTopicObjective_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvTopicObjectiveWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvTopicObjectiveWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvTopicObjectiveEN.con_TopicObjectiveId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvTopicObjective = await vTopicObjective_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrvTopicObjective == null) return [];
let arrvTopicObjectiveSel = arrvTopicObjective;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvTopicObjectiveSel.length == 0) return [];
return arrvTopicObjectiveSel.map(x=>x.topicObjectiveId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vTopicObjective_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetFirstObjAsync(strWhereCond: string): Promise<clsvTopicObjectiveEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const objvTopicObjective = vTopicObjective_GetObjFromJsonObj(returnObj);
return objvTopicObjective;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvTopicObjectiveEN.WhereFormat) == false)
{
strWhereCond = Format(clsvTopicObjectiveEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvTopicObjectiveEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTopicObjectiveEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvTopicObjectiveExObjLstCache: Array<clsvTopicObjectiveEN> = CacheHelper.Get(strKey);
const arrvTopicObjectiveObjLstT = vTopicObjective_GetObjLstByJSONObjLst(arrvTopicObjectiveExObjLstCache);
return arrvTopicObjectiveObjLstT;
}
try
{
const arrvTopicObjectiveExObjLst = await vTopicObjective_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvTopicObjectiveExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTopicObjectiveExObjLst.length);
console.log(strInfo);
return arrvTopicObjectiveExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTopicObjective_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvTopicObjectiveEN.WhereFormat) == false)
{
strWhereCond = Format(clsvTopicObjectiveEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvTopicObjectiveEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvTopicObjectiveEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTopicObjectiveEN.CacheAddiCondition);
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
const arrvTopicObjectiveExObjLstCache: Array<clsvTopicObjectiveEN> = JSON.parse(strTempObjLst);
const arrvTopicObjectiveObjLstT = vTopicObjective_GetObjLstByJSONObjLst(arrvTopicObjectiveExObjLstCache);
return arrvTopicObjectiveObjLstT;
}
try
{
const arrvTopicObjectiveExObjLst = await vTopicObjective_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvTopicObjectiveExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTopicObjectiveExObjLst.length);
console.log(strInfo);
return arrvTopicObjectiveExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTopicObjective_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvTopicObjectiveObjLstCache: Array<clsvTopicObjectiveEN> = JSON.parse(strTempObjLst);
return arrvTopicObjectiveObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vTopicObjective_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvTopicObjectiveEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTopicObjective_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTopicObjective_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvTopicObjectiveEN.WhereFormat) == false)
{
strWhereCond = Format(clsvTopicObjectiveEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvTopicObjectiveEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvTopicObjectiveEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTopicObjectiveEN.CacheAddiCondition);
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
const arrvTopicObjectiveExObjLstCache: Array<clsvTopicObjectiveEN> = JSON.parse(strTempObjLst);
const arrvTopicObjectiveObjLstT = vTopicObjective_GetObjLstByJSONObjLst(arrvTopicObjectiveExObjLstCache);
return arrvTopicObjectiveObjLstT;
}
try
{
const arrvTopicObjectiveExObjLst = await vTopicObjective_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvTopicObjectiveExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTopicObjectiveExObjLst.length);
console.log(strInfo);
return arrvTopicObjectiveExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTopicObjective_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvTopicObjectiveObjLstCache: Array<clsvTopicObjectiveEN> = JSON.parse(strTempObjLst);
return arrvTopicObjectiveObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTopicObjective_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsvTopicObjectiveEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvTopicObjectiveWApi.vTopicObjective_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvTopicObjectiveWApi.vTopicObjective_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrvTopicObjectiveObjLstCache;
switch (clsvTopicObjectiveEN.CacheModeId)
{
case "04"://sessionStorage
arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrvTopicObjectiveObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTopicObjective_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvTopicObjectiveObjLstCache;
switch (clsvTopicObjectiveEN.CacheModeId)
{
case "04"://sessionStorage
arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvTopicObjectiveObjLstCache = null;
break;
default:
arrvTopicObjectiveObjLstCache = null;
break;
}
return arrvTopicObjectiveObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicObjectiveIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vTopicObjective_GetSubObjLstCache(objvTopicObjectiveCond: clsvTopicObjectiveEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
let arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache;
if (objvTopicObjectiveCond.sfFldComparisonOp == null || objvTopicObjectiveCond.sfFldComparisonOp == "") return arrvTopicObjectiveSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvTopicObjectiveCond.sfFldComparisonOp);
//console.log("clsvTopicObjectiveWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvTopicObjectiveCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvTopicObjectiveCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvTopicObjectiveSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvTopicObjectiveCond), vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTopicObjectiveEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicObjectiveId:关键字列表
 * @returns 对象列表
 **/
export  async function vTopicObjective_GetObjLstByTopicObjectiveIdLstAsync(arrTopicObjectiveId: Array<string>): Promise<Array<clsvTopicObjectiveEN>>  
{
const strThisFuncName = "GetObjLstByTopicObjectiveIdLstAsync";
const strAction = "GetObjLstByTopicObjectiveIdLst";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTopicObjectiveId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTopicObjective_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTopicObjective_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
 * @param arrstrTopicObjectiveIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vTopicObjective_GetObjLstByTopicObjectiveIdLstCache(arrTopicObjectiveIdLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByTopicObjectiveIdLstCache";
try
{
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
const arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache.filter(x => arrTopicObjectiveIdLst.indexOf(x.topicObjectiveId)>-1);
return arrvTopicObjectiveSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrTopicObjectiveIdLst.join(","), vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvTopicObjectiveEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTopicObjective_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTopicObjective_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvTopicObjectiveEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTopicObjective_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTopicObjective_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvTopicObjectiveEN>();
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
if (arrvTopicObjectiveObjLstCache.length == 0) return arrvTopicObjectiveObjLstCache;
let arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvTopicObjectiveCond = new clsvTopicObjectiveEN();
ObjectAssign(objvTopicObjectiveCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvTopicObjectiveWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvTopicObjectiveCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvTopicObjectiveSel.length == 0) return arrvTopicObjectiveSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvTopicObjectiveSel = arrvTopicObjectiveSel.sort(vTopicObjective_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvTopicObjectiveSel = arrvTopicObjectiveSel.sort(objPagerPara.sortFun);
}
arrvTopicObjectiveSel = arrvTopicObjectiveSel.slice(intStart, intEnd);     
return arrvTopicObjectiveSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTopicObjectiveEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vTopicObjective_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvTopicObjectiveEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvTopicObjectiveEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTopicObjective_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTopicObjective_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
 * @param objstrTopicObjectiveIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vTopicObjective_IsExistRecordCache(objvTopicObjectiveCond: clsvTopicObjectiveEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
if (arrvTopicObjectiveObjLstCache == null) return false;
let arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache;
if (objvTopicObjectiveCond.sfFldComparisonOp == null || objvTopicObjectiveCond.sfFldComparisonOp == "") return arrvTopicObjectiveSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvTopicObjectiveCond.sfFldComparisonOp);
//console.log("clsvTopicObjectiveWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvTopicObjectiveCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvTopicObjectiveCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvTopicObjectiveSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvTopicObjectiveCond), vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
 * @param strTopicObjectiveId:所给的关键字
 * @returns 对象
*/
export  async function vTopicObjective_IsExistCache(strTopicObjectiveId:string,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
if (arrvTopicObjectiveObjLstCache == null) return false;
try
{
const arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache.filter(x => x.topicObjectiveId == strTopicObjectiveId);
if (arrvTopicObjectiveSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strTopicObjectiveId, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strTopicObjectiveId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vTopicObjective_IsExistAsync(strTopicObjectiveId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTopicObjectiveId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
export  async function vTopicObjective_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vTopicObjective_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTopicObjective_ConstructorName, strThisFuncName);
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
 * @param objvTopicObjectiveCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vTopicObjective_GetRecCountByCondCache(objvTopicObjectiveCond: clsvTopicObjectiveEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvTopicObjectiveObjLstCache = await vTopicObjective_GetObjLstCache(strIdCurrEduCls);
if (arrvTopicObjectiveObjLstCache == null) return 0;
let arrvTopicObjectiveSel = arrvTopicObjectiveObjLstCache;
if (objvTopicObjectiveCond.sfFldComparisonOp == null || objvTopicObjectiveCond.sfFldComparisonOp == "") return arrvTopicObjectiveSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvTopicObjectiveCond.sfFldComparisonOp);
//console.log("clsvTopicObjectiveWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvTopicObjectiveCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvTopicObjectiveCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTopicObjectiveSel = arrvTopicObjectiveSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvTopicObjectiveSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvTopicObjectiveCond), vTopicObjective_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vTopicObjective_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vTopicObjective_ReFreshThisCache(strIdCurrEduCls: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvTopicObjectiveEN._CurrTabName, strIdCurrEduCls);
switch (clsvTopicObjectiveEN.CacheModeId)
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTopicObjective_GetJSONStrByObj (pobjvTopicObjectiveEN: clsvTopicObjectiveEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvTopicObjectiveEN);
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
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vTopicObjective_GetObjLstByJSONStr (strJSON: string): Array<clsvTopicObjectiveEN>
{
let arrvTopicObjectiveObjLst = new Array<clsvTopicObjectiveEN>();
if (strJSON === "")
{
return arrvTopicObjectiveObjLst;
}
try
{
arrvTopicObjectiveObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvTopicObjectiveObjLst;
}
return arrvTopicObjectiveObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTopicObjectiveObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vTopicObjective_GetObjLstByJSONObjLst (arrvTopicObjectiveObjLstS: Array<clsvTopicObjectiveEN>): Array<clsvTopicObjectiveEN>
{
const arrvTopicObjectiveObjLst = new Array<clsvTopicObjectiveEN>();
for (const objInFor of arrvTopicObjectiveObjLstS) {
const obj1 = vTopicObjective_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvTopicObjectiveObjLst.push(obj1);
}
return arrvTopicObjectiveObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTopicObjective_GetObjByJSONStr (strJSON: string): clsvTopicObjectiveEN
{
let pobjvTopicObjectiveEN = new clsvTopicObjectiveEN();
if (strJSON === "")
{
return pobjvTopicObjectiveEN;
}
try
{
pobjvTopicObjectiveEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvTopicObjectiveEN;
}
return pobjvTopicObjectiveEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vTopicObjective_GetCombineCondition(objvTopicObjectiveCond: clsvTopicObjectiveEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_PaperTitle, objvTopicObjectiveCond.paperTitle, strComparisonOpPaperTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_Author) == true)
{
const strComparisonOpAuthor:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_Author];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_Author, objvTopicObjectiveCond.author, strComparisonOpAuthor);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_Keyword, objvTopicObjectiveCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_TopicObjectiveId) == true)
{
const strComparisonOpTopicObjectiveId:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_TopicObjectiveId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_TopicObjectiveId, objvTopicObjectiveCond.topicObjectiveId, strComparisonOpTopicObjectiveId);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_ObjectiveName) == true)
{
const strComparisonOpObjectiveName:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_ObjectiveName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_ObjectiveName, objvTopicObjectiveCond.objectiveName, strComparisonOpObjectiveName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_ObjectiveType) == true)
{
const strComparisonOpObjectiveType:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_ObjectiveType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_ObjectiveType, objvTopicObjectiveCond.objectiveType, strComparisonOpObjectiveType);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_SourceId) == true)
{
const strComparisonOpSourceId:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_SourceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_SourceId, objvTopicObjectiveCond.sourceId, strComparisonOpSourceId);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_Conclusion) == true)
{
const strComparisonOpConclusion:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_Conclusion];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_Conclusion, objvTopicObjectiveCond.conclusion, strComparisonOpConclusion);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_IsSubmit) == true)
{
if (objvTopicObjectiveCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTopicObjectiveEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTopicObjectiveEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_UpdDate, objvTopicObjectiveCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_Memo, objvTopicObjectiveCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_ObjectiveTypeName) == true)
{
const strComparisonOpObjectiveTypeName:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_ObjectiveTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_ObjectiveTypeName, objvTopicObjectiveCond.objectiveTypeName, strComparisonOpObjectiveTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_CitationCount, objvTopicObjectiveCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_AppraiseCount, objvTopicObjectiveCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_Score) == true)
{
const strComparisonOpScore:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_Score, objvTopicObjectiveCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_StuScore, objvTopicObjectiveCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_TeaScore, objvTopicObjectiveCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_IdCurrEduCls, objvTopicObjectiveCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_PdfContent, objvTopicObjectiveCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_PdfPageNum, objvTopicObjectiveCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_OkCount, objvTopicObjectiveCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvTopicObjectiveEN.con_VersionCount, objvTopicObjectiveCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_CreateDate, objvTopicObjectiveCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_ShareId, objvTopicObjectiveCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objvTopicObjectiveCond.dicFldComparisonOp, clsvTopicObjectiveEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvTopicObjectiveCond.dicFldComparisonOp[clsvTopicObjectiveEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTopicObjectiveEN.con_UpdUser, objvTopicObjectiveCond.updUser, strComparisonOpUpdUser);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvTopicObjectiveENS:源对象
 * @param objvTopicObjectiveENT:目标对象
*/
export  function vTopicObjective_CopyObjTo(objvTopicObjectiveENS: clsvTopicObjectiveEN , objvTopicObjectiveENT: clsvTopicObjectiveEN ): void 
{
objvTopicObjectiveENT.paperTitle = objvTopicObjectiveENS.paperTitle; //论文标题
objvTopicObjectiveENT.paperContent = objvTopicObjectiveENS.paperContent; //主题内容
objvTopicObjectiveENT.author = objvTopicObjectiveENS.author; //作者
objvTopicObjectiveENT.keyword = objvTopicObjectiveENS.keyword; //关键字
objvTopicObjectiveENT.topicObjectiveId = objvTopicObjectiveENS.topicObjectiveId; //客观Id
objvTopicObjectiveENT.objectiveName = objvTopicObjectiveENS.objectiveName; //客观名称
objvTopicObjectiveENT.objectiveContent = objvTopicObjectiveENS.objectiveContent; //客观内容
objvTopicObjectiveENT.objectiveType = objvTopicObjectiveENS.objectiveType; //客观类型
objvTopicObjectiveENT.sourceId = objvTopicObjectiveENS.sourceId; //来源Id
objvTopicObjectiveENT.conclusion = objvTopicObjectiveENS.conclusion; //结论
objvTopicObjectiveENT.isSubmit = objvTopicObjectiveENS.isSubmit; //是否提交
objvTopicObjectiveENT.updDate = objvTopicObjectiveENS.updDate; //修改日期
objvTopicObjectiveENT.memo = objvTopicObjectiveENS.memo; //备注
objvTopicObjectiveENT.objectiveTypeName = objvTopicObjectiveENS.objectiveTypeName; //ObjectiveTypeName
objvTopicObjectiveENT.citationCount = objvTopicObjectiveENS.citationCount; //引用统计
objvTopicObjectiveENT.appraiseCount = objvTopicObjectiveENS.appraiseCount; //评论数
objvTopicObjectiveENT.score = objvTopicObjectiveENS.score; //评分
objvTopicObjectiveENT.stuScore = objvTopicObjectiveENS.stuScore; //学生平均分
objvTopicObjectiveENT.teaScore = objvTopicObjectiveENS.teaScore; //教师评分
objvTopicObjectiveENT.idCurrEduCls = objvTopicObjectiveENS.idCurrEduCls; //教学班流水号
objvTopicObjectiveENT.pdfContent = objvTopicObjectiveENS.pdfContent; //Pdf内容
objvTopicObjectiveENT.pdfPageNum = objvTopicObjectiveENS.pdfPageNum; //Pdf页码
objvTopicObjectiveENT.okCount = objvTopicObjectiveENS.okCount; //点赞统计
objvTopicObjectiveENT.versionCount = objvTopicObjectiveENS.versionCount; //版本统计
objvTopicObjectiveENT.createDate = objvTopicObjectiveENS.createDate; //建立日期
objvTopicObjectiveENT.shareId = objvTopicObjectiveENS.shareId; //分享Id
objvTopicObjectiveENT.updUser = objvTopicObjectiveENS.updUser; //修改人
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTopicObjectiveENS:源对象
 * @param objvTopicObjectiveENT:目标对象
*/
export  function vTopicObjective_GetObjFromJsonObj(objvTopicObjectiveENS: clsvTopicObjectiveEN): clsvTopicObjectiveEN 
{
 const objvTopicObjectiveENT: clsvTopicObjectiveEN = new clsvTopicObjectiveEN();
ObjectAssign(objvTopicObjectiveENT, objvTopicObjectiveENS);
 return objvTopicObjectiveENT;
}