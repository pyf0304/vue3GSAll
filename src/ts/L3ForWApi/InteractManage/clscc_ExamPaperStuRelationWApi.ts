
 /**
 * 类名:clscc_ExamPaperStuRelationWApi
 * 表名:cc_ExamPaperStuRelation(01120235)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/11 17:17:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 考卷与学生关系(cc_ExamPaperStuRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年12月11日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clscc_ExamPaperStuRelationEN } from "@/ts/L0Entity/InteractManage/clscc_ExamPaperStuRelationEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_ExamPaperStuRelation_Controller = "cc_ExamPaperStuRelationApi";
 export const cc_ExamPaperStuRelation_ConstructorName = "cc_ExamPaperStuRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdExamPaperStuRelation:关键字
 * @returns 对象
 **/
export  async function cc_ExamPaperStuRelation_GetObjByIdExamPaperStuRelationAsync(lngIdExamPaperStuRelation: number): Promise<clscc_ExamPaperStuRelationEN|null>  
{
const strThisFuncName = "GetObjByIdExamPaperStuRelationAsync";

if (lngIdExamPaperStuRelation == 0)
{
  const strMsg = Format("参数:[lngIdExamPaperStuRelation]不能为空!(In clscc_ExamPaperStuRelationWApi.GetObjByIdExamPaperStuRelationAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdExamPaperStuRelation";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdExamPaperStuRelation,
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
const objcc_ExamPaperStuRelation = cc_ExamPaperStuRelation_GetObjFromJsonObj(returnObj);
return objcc_ExamPaperStuRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param lngIdExamPaperStuRelation:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperStuRelation_GetObjByIdExamPaperStuRelationCache(lngIdExamPaperStuRelation:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdExamPaperStuRelationCache";

if (lngIdExamPaperStuRelation == 0)
{
  const strMsg = Format("参数:[lngIdExamPaperStuRelation]不能为空!(In clscc_ExamPaperStuRelationWApi.GetObjByIdExamPaperStuRelationCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
try
{
const arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache.filter(x => 
 x.idExamPaperStuRelation == lngIdExamPaperStuRelation );
let objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationEN;
if (arrcc_ExamPaperStuRelationSel.length > 0)
{
objcc_ExamPaperStuRelation = arrcc_ExamPaperStuRelationSel[0];
return objcc_ExamPaperStuRelation;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_ExamPaperStuRelationConst = await cc_ExamPaperStuRelation_GetObjByIdExamPaperStuRelationAsync(lngIdExamPaperStuRelation);
if (objcc_ExamPaperStuRelationConst != null)
{
cc_ExamPaperStuRelation_ReFreshThisCache(strIdCurrEduCls);
return objcc_ExamPaperStuRelationConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdExamPaperStuRelation, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngIdExamPaperStuRelation:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperStuRelation_GetObjByIdExamPaperStuRelationlocalStorage(lngIdExamPaperStuRelation: number) {
const strThisFuncName = "GetObjByIdExamPaperStuRelationlocalStorage";

if (lngIdExamPaperStuRelation == 0)
{
  const strMsg = Format("参数:[lngIdExamPaperStuRelation]不能为空!(In clscc_ExamPaperStuRelationWApi.GetObjByIdExamPaperStuRelationlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, lngIdExamPaperStuRelation);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_ExamPaperStuRelationCache: clscc_ExamPaperStuRelationEN = JSON.parse(strTempObj);
return objcc_ExamPaperStuRelationCache;
}
try
{
const objcc_ExamPaperStuRelation = await cc_ExamPaperStuRelation_GetObjByIdExamPaperStuRelationAsync(lngIdExamPaperStuRelation);
if (objcc_ExamPaperStuRelation != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_ExamPaperStuRelation));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_ExamPaperStuRelation;
}
return objcc_ExamPaperStuRelation;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdExamPaperStuRelation, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_ExamPaperStuRelation:所给的对象
 * @returns 对象
*/
export  async function cc_ExamPaperStuRelation_UpdateObjInLstCache(objcc_ExamPaperStuRelation: clscc_ExamPaperStuRelationEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
const obj = arrcc_ExamPaperStuRelationObjLstCache.find(x => x.courseExamPaperId == objcc_ExamPaperStuRelation.courseExamPaperId && x.idStudentInfo == objcc_ExamPaperStuRelation.idStudentInfo && x.idCurrEduCls == objcc_ExamPaperStuRelation.idCurrEduCls);
if (obj != null)
{
objcc_ExamPaperStuRelation.idExamPaperStuRelation = obj.idExamPaperStuRelation;
ObjectAssign( obj, objcc_ExamPaperStuRelation);
}
else
{
arrcc_ExamPaperStuRelationObjLstCache.push(objcc_ExamPaperStuRelation);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function cc_ExamPaperStuRelation_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clscc_ExamPaperStuRelationWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clscc_ExamPaperStuRelationWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_ExamPaperStuRelationEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_ExamPaperStuRelationEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngIdExamPaperStuRelation = Number(strInValue);
if (lngIdExamPaperStuRelation == 0)
{
return "";
}
const objcc_ExamPaperStuRelation = await cc_ExamPaperStuRelation_GetObjByIdExamPaperStuRelationCache(lngIdExamPaperStuRelation , strIdCurrEduClsClassfy);
if (objcc_ExamPaperStuRelation == null) return "";
if (objcc_ExamPaperStuRelation.GetFldValue(strOutFldName) == null) return "";
return objcc_ExamPaperStuRelation.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_ExamPaperStuRelation_SortFunDefa(a:clscc_ExamPaperStuRelationEN , b:clscc_ExamPaperStuRelationEN): number 
{
return a.idExamPaperStuRelation-b.idExamPaperStuRelation;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_ExamPaperStuRelation_SortFunDefa2Fld(a:clscc_ExamPaperStuRelationEN , b:clscc_ExamPaperStuRelationEN): number 
{
if (a.courseExamPaperId == b.courseExamPaperId) return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
else return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_ExamPaperStuRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.idExamPaperStuRelation-b.idExamPaperStuRelation;
}
case clscc_ExamPaperStuRelationEN.con_CourseExamPaperId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.courseExamPaperId == null) return -1;
if (b.courseExamPaperId == null) return 1;
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clscc_ExamPaperStuRelationEN.con_IdCurrEduCls:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clscc_ExamPaperStuRelationEN.con_Scores:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.scores-b.scores;
}
case clscc_ExamPaperStuRelationEN.con_SpecifyCompletionDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.specifyCompletionDate.localeCompare(b.specifyCompletionDate);
}
case clscc_ExamPaperStuRelationEN.con_IdStudentInfo:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clscc_ExamPaperStuRelationEN.con_AnswerModeId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.answerModeId == null) return -1;
if (b.answerModeId == null) return 1;
return a.answerModeId.localeCompare(b.answerModeId);
}
case clscc_ExamPaperStuRelationEN.con_AnswerOptionId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.answerOptionId == null) return -1;
if (b.answerOptionId == null) return 1;
return a.answerOptionId.localeCompare(b.answerOptionId);
}
case clscc_ExamPaperStuRelationEN.con_AnswerMultiOptions:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.answerMultiOptions == null) return -1;
if (b.answerMultiOptions == null) return 1;
return a.answerMultiOptions.localeCompare(b.answerMultiOptions);
}
case clscc_ExamPaperStuRelationEN.con_StuAnswerText:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.stuAnswerText == null) return -1;
if (b.stuAnswerText == null) return 1;
return a.stuAnswerText.localeCompare(b.stuAnswerText);
}
case clscc_ExamPaperStuRelationEN.con_IsPublish:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isPublish == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsLook:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isLook == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsSave:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isSave == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsSubmit:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_ApplySendBackDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.applySendBackDate == null) return -1;
if (b.applySendBackDate == null) return 1;
return a.applySendBackDate.localeCompare(b.applySendBackDate);
}
case clscc_ExamPaperStuRelationEN.con_IsApplySendBack:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isApplySendBack == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_RealFinishDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.realFinishDate == null) return -1;
if (b.realFinishDate == null) return 1;
return a.realFinishDate.localeCompare(b.realFinishDate);
}
case clscc_ExamPaperStuRelationEN.con_OperateTime:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.operateTime == null) return -1;
if (b.operateTime == null) return 1;
return a.operateTime.localeCompare(b.operateTime);
}
case clscc_ExamPaperStuRelationEN.con_Score:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.score-b.score;
}
case clscc_ExamPaperStuRelationEN.con_Comment:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.comment == null) return -1;
if (b.comment == null) return 1;
return a.comment.localeCompare(b.comment);
}
case clscc_ExamPaperStuRelationEN.con_IsMarking:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isMarking == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_MarkerId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.markerId == null) return -1;
if (b.markerId == null) return 1;
return a.markerId.localeCompare(b.markerId);
}
case clscc_ExamPaperStuRelationEN.con_MarkDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.markDate == null) return -1;
if (b.markDate == null) return 1;
return a.markDate.localeCompare(b.markDate);
}
case clscc_ExamPaperStuRelationEN.con_IsSendBack:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isSendBack == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsInErrorQuestion:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isInErrorQuestion == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_WorkTypeId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.workTypeId.localeCompare(b.workTypeId);
}
case clscc_ExamPaperStuRelationEN.con_AnswerIP:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.answerIP == null) return -1;
if (b.answerIP == null) return 1;
return a.answerIP.localeCompare(b.answerIP);
}
case clscc_ExamPaperStuRelationEN.con_AnswerDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.answerDate == null) return -1;
if (b.answerDate == null) return 1;
return a.answerDate.localeCompare(b.answerDate);
}
case clscc_ExamPaperStuRelationEN.con_AnswerTime:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.answerTime == null) return -1;
if (b.answerTime == null) return 1;
return a.answerTime.localeCompare(b.answerTime);
}
case clscc_ExamPaperStuRelationEN.con_IsRight:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isRight == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsAccessKnowledge:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isAccessKnowledge == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsNotProcessTimeout:
return (a: clscc_ExamPaperStuRelationEN) => {
if (a.isNotProcessTimeout == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_SchoolYear:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clscc_ExamPaperStuRelationEN.con_SchoolTerm:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clscc_ExamPaperStuRelationEN.con_UpdDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_ExamPaperStuRelationEN.con_UpdUserId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_ExamPaperStuRelationEN.con_Memo:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperStuRelation]中不存在!(in ${ cc_ExamPaperStuRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.idExamPaperStuRelation-a.idExamPaperStuRelation;
}
case clscc_ExamPaperStuRelationEN.con_CourseExamPaperId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.courseExamPaperId == null) return -1;
if (a.courseExamPaperId == null) return 1;
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clscc_ExamPaperStuRelationEN.con_IdCurrEduCls:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clscc_ExamPaperStuRelationEN.con_Scores:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.scores-a.scores;
}
case clscc_ExamPaperStuRelationEN.con_SpecifyCompletionDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.specifyCompletionDate.localeCompare(a.specifyCompletionDate);
}
case clscc_ExamPaperStuRelationEN.con_IdStudentInfo:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clscc_ExamPaperStuRelationEN.con_AnswerModeId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.answerModeId == null) return -1;
if (a.answerModeId == null) return 1;
return b.answerModeId.localeCompare(a.answerModeId);
}
case clscc_ExamPaperStuRelationEN.con_AnswerOptionId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.answerOptionId == null) return -1;
if (a.answerOptionId == null) return 1;
return b.answerOptionId.localeCompare(a.answerOptionId);
}
case clscc_ExamPaperStuRelationEN.con_AnswerMultiOptions:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.answerMultiOptions == null) return -1;
if (a.answerMultiOptions == null) return 1;
return b.answerMultiOptions.localeCompare(a.answerMultiOptions);
}
case clscc_ExamPaperStuRelationEN.con_StuAnswerText:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.stuAnswerText == null) return -1;
if (a.stuAnswerText == null) return 1;
return b.stuAnswerText.localeCompare(a.stuAnswerText);
}
case clscc_ExamPaperStuRelationEN.con_IsPublish:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isPublish == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsLook:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isLook == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsSave:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isSave == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsSubmit:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_ApplySendBackDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.applySendBackDate == null) return -1;
if (a.applySendBackDate == null) return 1;
return b.applySendBackDate.localeCompare(a.applySendBackDate);
}
case clscc_ExamPaperStuRelationEN.con_IsApplySendBack:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isApplySendBack == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_RealFinishDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.realFinishDate == null) return -1;
if (a.realFinishDate == null) return 1;
return b.realFinishDate.localeCompare(a.realFinishDate);
}
case clscc_ExamPaperStuRelationEN.con_OperateTime:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.operateTime == null) return -1;
if (a.operateTime == null) return 1;
return b.operateTime.localeCompare(a.operateTime);
}
case clscc_ExamPaperStuRelationEN.con_Score:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.score-a.score;
}
case clscc_ExamPaperStuRelationEN.con_Comment:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.comment == null) return -1;
if (a.comment == null) return 1;
return b.comment.localeCompare(a.comment);
}
case clscc_ExamPaperStuRelationEN.con_IsMarking:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isMarking == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_MarkerId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.markerId == null) return -1;
if (a.markerId == null) return 1;
return b.markerId.localeCompare(a.markerId);
}
case clscc_ExamPaperStuRelationEN.con_MarkDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.markDate == null) return -1;
if (a.markDate == null) return 1;
return b.markDate.localeCompare(a.markDate);
}
case clscc_ExamPaperStuRelationEN.con_IsSendBack:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isSendBack == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsInErrorQuestion:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isInErrorQuestion == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_WorkTypeId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.workTypeId.localeCompare(a.workTypeId);
}
case clscc_ExamPaperStuRelationEN.con_AnswerIP:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.answerIP == null) return -1;
if (a.answerIP == null) return 1;
return b.answerIP.localeCompare(a.answerIP);
}
case clscc_ExamPaperStuRelationEN.con_AnswerDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.answerDate == null) return -1;
if (a.answerDate == null) return 1;
return b.answerDate.localeCompare(a.answerDate);
}
case clscc_ExamPaperStuRelationEN.con_AnswerTime:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.answerTime == null) return -1;
if (a.answerTime == null) return 1;
return b.answerTime.localeCompare(a.answerTime);
}
case clscc_ExamPaperStuRelationEN.con_IsRight:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isRight == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsAccessKnowledge:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isAccessKnowledge == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_IsNotProcessTimeout:
return (b: clscc_ExamPaperStuRelationEN) => {
if (b.isNotProcessTimeout == true) return 1;
else return -1
}
case clscc_ExamPaperStuRelationEN.con_SchoolYear:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clscc_ExamPaperStuRelationEN.con_SchoolTerm:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clscc_ExamPaperStuRelationEN.con_UpdDate:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_ExamPaperStuRelationEN.con_UpdUserId:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_ExamPaperStuRelationEN.con_Memo:
return (a: clscc_ExamPaperStuRelationEN, b: clscc_ExamPaperStuRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperStuRelation]中不存在!(in ${ cc_ExamPaperStuRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function cc_ExamPaperStuRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.idExamPaperStuRelation === value;
}
case clscc_ExamPaperStuRelationEN.con_CourseExamPaperId:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.courseExamPaperId === value;
}
case clscc_ExamPaperStuRelationEN.con_IdCurrEduCls:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.idCurrEduCls === value;
}
case clscc_ExamPaperStuRelationEN.con_Scores:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.scores === value;
}
case clscc_ExamPaperStuRelationEN.con_SpecifyCompletionDate:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.specifyCompletionDate === value;
}
case clscc_ExamPaperStuRelationEN.con_IdStudentInfo:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.idStudentInfo === value;
}
case clscc_ExamPaperStuRelationEN.con_AnswerModeId:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.answerModeId === value;
}
case clscc_ExamPaperStuRelationEN.con_AnswerOptionId:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.answerOptionId === value;
}
case clscc_ExamPaperStuRelationEN.con_AnswerMultiOptions:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.answerMultiOptions === value;
}
case clscc_ExamPaperStuRelationEN.con_StuAnswerText:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.stuAnswerText === value;
}
case clscc_ExamPaperStuRelationEN.con_IsPublish:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isPublish === value;
}
case clscc_ExamPaperStuRelationEN.con_IsLook:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isLook === value;
}
case clscc_ExamPaperStuRelationEN.con_IsSave:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isSave === value;
}
case clscc_ExamPaperStuRelationEN.con_IsSubmit:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isSubmit === value;
}
case clscc_ExamPaperStuRelationEN.con_ApplySendBackDate:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.applySendBackDate === value;
}
case clscc_ExamPaperStuRelationEN.con_IsApplySendBack:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isApplySendBack === value;
}
case clscc_ExamPaperStuRelationEN.con_RealFinishDate:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.realFinishDate === value;
}
case clscc_ExamPaperStuRelationEN.con_OperateTime:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.operateTime === value;
}
case clscc_ExamPaperStuRelationEN.con_Score:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.score === value;
}
case clscc_ExamPaperStuRelationEN.con_Comment:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.comment === value;
}
case clscc_ExamPaperStuRelationEN.con_IsMarking:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isMarking === value;
}
case clscc_ExamPaperStuRelationEN.con_MarkerId:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.markerId === value;
}
case clscc_ExamPaperStuRelationEN.con_MarkDate:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.markDate === value;
}
case clscc_ExamPaperStuRelationEN.con_IsSendBack:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isSendBack === value;
}
case clscc_ExamPaperStuRelationEN.con_IsInErrorQuestion:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isInErrorQuestion === value;
}
case clscc_ExamPaperStuRelationEN.con_WorkTypeId:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.workTypeId === value;
}
case clscc_ExamPaperStuRelationEN.con_AnswerIP:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.answerIP === value;
}
case clscc_ExamPaperStuRelationEN.con_AnswerDate:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.answerDate === value;
}
case clscc_ExamPaperStuRelationEN.con_AnswerTime:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.answerTime === value;
}
case clscc_ExamPaperStuRelationEN.con_IsRight:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isRight === value;
}
case clscc_ExamPaperStuRelationEN.con_IsAccessKnowledge:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isAccessKnowledge === value;
}
case clscc_ExamPaperStuRelationEN.con_IsNotProcessTimeout:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.isNotProcessTimeout === value;
}
case clscc_ExamPaperStuRelationEN.con_SchoolYear:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.schoolYear === value;
}
case clscc_ExamPaperStuRelationEN.con_SchoolTerm:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.schoolTerm === value;
}
case clscc_ExamPaperStuRelationEN.con_UpdDate:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.updDate === value;
}
case clscc_ExamPaperStuRelationEN.con_UpdUserId:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.updUserId === value;
}
case clscc_ExamPaperStuRelationEN.con_Memo:
return (obj: clscc_ExamPaperStuRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExamPaperStuRelation]中不存在!(in ${ cc_ExamPaperStuRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function cc_ExamPaperStuRelation_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clscc_ExamPaperStuRelationWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clscc_ExamPaperStuRelationWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrcc_ExamPaperStuRelation = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrcc_ExamPaperStuRelation == null) return [];
let arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelation;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_ExamPaperStuRelationSel.length == 0) return [];
return arrcc_ExamPaperStuRelationSel.map(x=>x.idExamPaperStuRelation);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExamPaperStuRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetFirstObjAsync(strWhereCond: string): Promise<clscc_ExamPaperStuRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const objcc_ExamPaperStuRelation = cc_ExamPaperStuRelation_GetObjFromJsonObj(returnObj);
return objcc_ExamPaperStuRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_ExamPaperStuRelationEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_ExamPaperStuRelationEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clscc_ExamPaperStuRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExamPaperStuRelationEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_ExamPaperStuRelationExObjLstCache: Array<clscc_ExamPaperStuRelationEN> = CacheHelper.Get(strKey);
const arrcc_ExamPaperStuRelationObjLstT = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(arrcc_ExamPaperStuRelationExObjLstCache);
return arrcc_ExamPaperStuRelationObjLstT;
}
try
{
const arrcc_ExamPaperStuRelationExObjLst = await cc_ExamPaperStuRelation_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_ExamPaperStuRelationExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExamPaperStuRelationExObjLst.length);
console.log(strInfo);
return arrcc_ExamPaperStuRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_ExamPaperStuRelationEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_ExamPaperStuRelationEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clscc_ExamPaperStuRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExamPaperStuRelationEN.CacheAddiCondition);
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
const arrcc_ExamPaperStuRelationExObjLstCache: Array<clscc_ExamPaperStuRelationEN> = JSON.parse(strTempObjLst);
const arrcc_ExamPaperStuRelationObjLstT = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(arrcc_ExamPaperStuRelationExObjLstCache);
return arrcc_ExamPaperStuRelationObjLstT;
}
try
{
const arrcc_ExamPaperStuRelationExObjLst = await cc_ExamPaperStuRelation_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_ExamPaperStuRelationExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExamPaperStuRelationExObjLst.length);
console.log(strInfo);
return arrcc_ExamPaperStuRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_ExamPaperStuRelationObjLstCache: Array<clscc_ExamPaperStuRelationEN> = JSON.parse(strTempObjLst);
return arrcc_ExamPaperStuRelationObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_ExamPaperStuRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_ExamPaperStuRelationEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_ExamPaperStuRelationEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clscc_ExamPaperStuRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExamPaperStuRelationEN.CacheAddiCondition);
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
const arrcc_ExamPaperStuRelationExObjLstCache: Array<clscc_ExamPaperStuRelationEN> = JSON.parse(strTempObjLst);
const arrcc_ExamPaperStuRelationObjLstT = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(arrcc_ExamPaperStuRelationExObjLstCache);
return arrcc_ExamPaperStuRelationObjLstT;
}
try
{
const arrcc_ExamPaperStuRelationExObjLst = await cc_ExamPaperStuRelation_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_ExamPaperStuRelationExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExamPaperStuRelationExObjLst.length);
console.log(strInfo);
return arrcc_ExamPaperStuRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_ExamPaperStuRelationObjLstCache: Array<clscc_ExamPaperStuRelationEN> = JSON.parse(strTempObjLst);
return arrcc_ExamPaperStuRelationObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clscc_ExamPaperStuRelationEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clscc_ExamPaperStuRelationWApi.cc_ExamPaperStuRelation_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clscc_ExamPaperStuRelationWApi.cc_ExamPaperStuRelation_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrcc_ExamPaperStuRelationObjLstCache;
switch (clscc_ExamPaperStuRelationEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrcc_ExamPaperStuRelationObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_ExamPaperStuRelationObjLstCache;
switch (clscc_ExamPaperStuRelationEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrcc_ExamPaperStuRelationObjLstCache = null;
break;
default:
arrcc_ExamPaperStuRelationObjLstCache = null;
break;
}
return arrcc_ExamPaperStuRelationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngIdExamPaperStuRelationCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_ExamPaperStuRelation_GetSubObjLstCache(objcc_ExamPaperStuRelationCond: clscc_ExamPaperStuRelationEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
let arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache;
if (objcc_ExamPaperStuRelationCond.sfFldComparisonOp == null || objcc_ExamPaperStuRelationCond.sfFldComparisonOp == "") return arrcc_ExamPaperStuRelationSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_ExamPaperStuRelationCond.sfFldComparisonOp);
//console.log("clscc_ExamPaperStuRelationWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_ExamPaperStuRelationCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperStuRelationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_ExamPaperStuRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_ExamPaperStuRelationCond), cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_ExamPaperStuRelationEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdExamPaperStuRelation:关键字列表
 * @returns 对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstByIdExamPaperStuRelationLstAsync(arrIdExamPaperStuRelation: Array<string>): Promise<Array<clscc_ExamPaperStuRelationEN>>  
{
const strThisFuncName = "GetObjLstByIdExamPaperStuRelationLstAsync";
const strAction = "GetObjLstByIdExamPaperStuRelationLst";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdExamPaperStuRelation, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param arrlngIdExamPaperStuRelationLst:关键字列表
 * @returns 对象列表
*/
export  async function cc_ExamPaperStuRelation_GetObjLstByIdExamPaperStuRelationLstCache(arrIdExamPaperStuRelationLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByIdExamPaperStuRelationLstCache";
try
{
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
const arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache.filter(x => arrIdExamPaperStuRelationLst.indexOf(x.idExamPaperStuRelation)>-1);
return arrcc_ExamPaperStuRelationSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdExamPaperStuRelationLst.join(","), cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_ExamPaperStuRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_ExamPaperStuRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamPaperStuRelationEN>();
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
if (arrcc_ExamPaperStuRelationObjLstCache.length == 0) return arrcc_ExamPaperStuRelationObjLstCache;
let arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objcc_ExamPaperStuRelationCond = new clscc_ExamPaperStuRelationEN();
ObjectAssign(objcc_ExamPaperStuRelationCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clscc_ExamPaperStuRelationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperStuRelationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_ExamPaperStuRelationSel.length == 0) return arrcc_ExamPaperStuRelationSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(cc_ExamPaperStuRelation_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.sort(objPagerPara.sortFun);
}
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.slice(intStart, intEnd);     
return arrcc_ExamPaperStuRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_ExamPaperStuRelationEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_ExamPaperStuRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_ExamPaperStuRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExamPaperStuRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExamPaperStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param lngIdExamPaperStuRelation:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_ExamPaperStuRelation_DelRecordAsync(lngIdExamPaperStuRelation: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngIdExamPaperStuRelation);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param arrIdExamPaperStuRelation:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_ExamPaperStuRelation_Delcc_ExamPaperStuRelationsAsync(arrIdExamPaperStuRelation: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_ExamPaperStuRelationsAsync";
const strAction = "Delcc_ExamPaperStuRelations";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdExamPaperStuRelation, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_Delcc_ExamPaperStuRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_ExamPaperStuRelationsByCondAsync";
const strAction = "Delcc_ExamPaperStuRelationsByCond";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExamPaperStuRelation_AddNewRecordAsync(objcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_ExamPaperStuRelationEN);
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_ExamPaperStuRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_ExamPaperStuRelation_AddNewRecordWithReturnKeyAsync(objcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExamPaperStuRelation_UpdateRecordAsync(objcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_ExamPaperStuRelationEN.sfUpdFldSetStr === undefined || objcc_ExamPaperStuRelationEN.sfUpdFldSetStr === null || objcc_ExamPaperStuRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperStuRelationEN.idExamPaperStuRelation);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExamPaperStuRelation_UpdateWithConditionAsync(objcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_ExamPaperStuRelationEN.sfUpdFldSetStr === undefined || objcc_ExamPaperStuRelationEN.sfUpdFldSetStr === null || objcc_ExamPaperStuRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExamPaperStuRelationEN.idExamPaperStuRelation);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);
objcc_ExamPaperStuRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExamPaperStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param objlngIdExamPaperStuRelationCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_ExamPaperStuRelation_IsExistRecordCache(objcc_ExamPaperStuRelationCond: clscc_ExamPaperStuRelationEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
if (arrcc_ExamPaperStuRelationObjLstCache == null) return false;
let arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache;
if (objcc_ExamPaperStuRelationCond.sfFldComparisonOp == null || objcc_ExamPaperStuRelationCond.sfFldComparisonOp == "") return arrcc_ExamPaperStuRelationSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_ExamPaperStuRelationCond.sfFldComparisonOp);
//console.log("clscc_ExamPaperStuRelationWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_ExamPaperStuRelationCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperStuRelationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_ExamPaperStuRelationSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_ExamPaperStuRelationCond), cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param lngIdExamPaperStuRelation:所给的关键字
 * @returns 对象
*/
export  async function cc_ExamPaperStuRelation_IsExistCache(lngIdExamPaperStuRelation:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
if (arrcc_ExamPaperStuRelationObjLstCache == null) return false;
try
{
const arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache.filter(x => x.idExamPaperStuRelation == lngIdExamPaperStuRelation);
if (arrcc_ExamPaperStuRelationSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngIdExamPaperStuRelation, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngIdExamPaperStuRelation:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_ExamPaperStuRelation_IsExistAsync(lngIdExamPaperStuRelation: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdExamPaperStuRelation
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_ExamPaperStuRelationCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_ExamPaperStuRelation_GetRecCountByCondCache(objcc_ExamPaperStuRelationCond: clscc_ExamPaperStuRelationEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_ExamPaperStuRelationObjLstCache = await cc_ExamPaperStuRelation_GetObjLstCache(strIdCurrEduCls);
if (arrcc_ExamPaperStuRelationObjLstCache == null) return 0;
let arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationObjLstCache;
if (objcc_ExamPaperStuRelationCond.sfFldComparisonOp == null || objcc_ExamPaperStuRelationCond.sfFldComparisonOp == "") return arrcc_ExamPaperStuRelationSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objcc_ExamPaperStuRelationCond.sfFldComparisonOp);
//console.log("clscc_ExamPaperStuRelationWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objcc_ExamPaperStuRelationCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objcc_ExamPaperStuRelationCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExamPaperStuRelationSel = arrcc_ExamPaperStuRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_ExamPaperStuRelationSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_ExamPaperStuRelationCond), cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_ExamPaperStuRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_ExamPaperStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExamPaperStuRelation_ConstructorName, strThisFuncName);
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
export  function cc_ExamPaperStuRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_ExamPaperStuRelation_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clscc_ExamPaperStuRelationWApi.clscc_ExamPaperStuRelationWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clscc_ExamPaperStuRelationWApi.clscc_ExamPaperStuRelationWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
switch (clscc_ExamPaperStuRelationEN.CacheModeId)
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
export  function cc_ExamPaperStuRelation_ReFreshThisCache(strIdCurrEduCls: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clscc_ExamPaperStuRelationEN._CurrTabName, strIdCurrEduCls);
switch (clscc_ExamPaperStuRelationEN.CacheModeId)
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
export  function cc_ExamPaperStuRelation_CheckPropertyNew(pobjcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) === true 
 || pobjcc_ExamPaperStuRelationEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[教学班流水号]不能为空(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) === true )
{
 throw new Error("(errid:Watl000411)字段[指定完成日期]不能为空(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) === true )
{
 throw new Error("(errid:Watl000411)字段[学生流水号]不能为空(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.workTypeId) === true )
{
 throw new Error("(errid:Watl000411)字段[作业类型Id]不能为空(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.courseExamPaperId)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.idCurrEduCls)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[指定完成日期(specifyCompletionDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.idStudentInfo) > 8)
{
 throw new Error("(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.idStudentInfo)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerModeId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerModeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[答案模式Id(answerModeId)]的长度不能超过4(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerModeId)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerOptionId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerOptionId) > 8)
{
 throw new Error("(errid:Watl000413)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerOptionId)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) > 300)
{
 throw new Error("(errid:Watl000413)字段[多选项答案(answerMultiOptions)]的长度不能超过300(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerMultiOptions)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.applySendBackDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.applySendBackDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[申请退回日期(applySendBackDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.applySendBackDate)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.realFinishDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.realFinishDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.realFinishDate)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.operateTime) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.operateTime) > 14)
{
 throw new Error("(errid:Watl000413)字段[操作时间(operateTime)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.operateTime)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markerId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.markerId) > 20)
{
 throw new Error("(errid:Watl000413)字段[打分者(markerId)]的长度不能超过20(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.markerId)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.markDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[打分日期(markDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.markDate)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.workTypeId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.workTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[作业类型Id(workTypeId)]的长度不能超过2(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.workTypeId)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerIP) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerIP) > 30)
{
 throw new Error("(errid:Watl000413)字段[回答IP(answerIP)]的长度不能超过30(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerIP)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerDate) > 8)
{
 throw new Error("(errid:Watl000413)字段[回答日期(answerDate)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerDate)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerTime) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerTime) > 10)
{
 throw new Error("(errid:Watl000413)字段[回答时间(answerTime)]的长度不能超过10(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerTime)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolYear) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.schoolYear)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolTerm) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.schoolTerm)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.updDate)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updUserId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.updUserId)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.memo) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.memo)(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation && undefined !== pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation && tzDataType.isNumber(pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation) === false)
{
 throw new Error("(errid:Watl000414)字段[流水号(idExamPaperStuRelation)]的值:[$(pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation)], 非法,应该为数值型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.courseExamPaperId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) === false)
{
 throw new Error("(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[$(pobjcc_ExamPaperStuRelationEN.courseExamPaperId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) == false && undefined !== pobjcc_ExamPaperStuRelationEN.idCurrEduCls && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjcc_ExamPaperStuRelationEN.idCurrEduCls)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.scores && undefined !== pobjcc_ExamPaperStuRelationEN.scores && tzDataType.isNumber(pobjcc_ExamPaperStuRelationEN.scores) === false)
{
 throw new Error("(errid:Watl000414)字段[分值(scores)]的值:[$(pobjcc_ExamPaperStuRelationEN.scores)], 非法,应该为数值型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.specifyCompletionDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) === false)
{
 throw new Error("(errid:Watl000414)字段[指定完成日期(specifyCompletionDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) == false && undefined !== pobjcc_ExamPaperStuRelationEN.idStudentInfo && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.idStudentInfo) === false)
{
 throw new Error("(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[$(pobjcc_ExamPaperStuRelationEN.idStudentInfo)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerModeId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerModeId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerModeId) === false)
{
 throw new Error("(errid:Watl000414)字段[答案模式Id(answerModeId)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerModeId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerOptionId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerOptionId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerOptionId) === false)
{
 throw new Error("(errid:Watl000414)字段[回答选项Id(answerOptionId)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerOptionId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerMultiOptions && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) === false)
{
 throw new Error("(errid:Watl000414)字段[多选项答案(answerMultiOptions)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerMultiOptions)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.stuAnswerText) == false && undefined !== pobjcc_ExamPaperStuRelationEN.stuAnswerText && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.stuAnswerText) === false)
{
 throw new Error("(errid:Watl000414)字段[学生回答文本(stuAnswerText)]的值:[$(pobjcc_ExamPaperStuRelationEN.stuAnswerText)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isPublish && undefined !== pobjcc_ExamPaperStuRelationEN.isPublish && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isPublish) === false)
{
 throw new Error("(errid:Watl000414)字段[是否发布(isPublish)]的值:[$(pobjcc_ExamPaperStuRelationEN.isPublish)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isLook && undefined !== pobjcc_ExamPaperStuRelationEN.isLook && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isLook) === false)
{
 throw new Error("(errid:Watl000414)字段[是否查看(isLook)]的值:[$(pobjcc_ExamPaperStuRelationEN.isLook)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isSave && undefined !== pobjcc_ExamPaperStuRelationEN.isSave && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isSave) === false)
{
 throw new Error("(errid:Watl000414)字段[是否保存(isSave)]的值:[$(pobjcc_ExamPaperStuRelationEN.isSave)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isSubmit && undefined !== pobjcc_ExamPaperStuRelationEN.isSubmit && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjcc_ExamPaperStuRelationEN.isSubmit)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.applySendBackDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.applySendBackDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.applySendBackDate) === false)
{
 throw new Error("(errid:Watl000414)字段[申请退回日期(applySendBackDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.applySendBackDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isApplySendBack && undefined !== pobjcc_ExamPaperStuRelationEN.isApplySendBack && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isApplySendBack) === false)
{
 throw new Error("(errid:Watl000414)字段[是否申请退回(isApplySendBack)]的值:[$(pobjcc_ExamPaperStuRelationEN.isApplySendBack)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.realFinishDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.realFinishDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.realFinishDate) === false)
{
 throw new Error("(errid:Watl000414)字段[实际完成日期(realFinishDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.realFinishDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.operateTime) == false && undefined !== pobjcc_ExamPaperStuRelationEN.operateTime && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.operateTime) === false)
{
 throw new Error("(errid:Watl000414)字段[操作时间(operateTime)]的值:[$(pobjcc_ExamPaperStuRelationEN.operateTime)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.score && undefined !== pobjcc_ExamPaperStuRelationEN.score && tzDataType.isNumber(pobjcc_ExamPaperStuRelationEN.score) === false)
{
 throw new Error("(errid:Watl000414)字段[得分(score)]的值:[$(pobjcc_ExamPaperStuRelationEN.score)], 非法,应该为数值型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.comment) == false && undefined !== pobjcc_ExamPaperStuRelationEN.comment && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.comment) === false)
{
 throw new Error("(errid:Watl000414)字段[批注(comment)]的值:[$(pobjcc_ExamPaperStuRelationEN.comment)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isMarking && undefined !== pobjcc_ExamPaperStuRelationEN.isMarking && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isMarking) === false)
{
 throw new Error("(errid:Watl000414)字段[是否批阅(isMarking)]的值:[$(pobjcc_ExamPaperStuRelationEN.isMarking)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markerId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.markerId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.markerId) === false)
{
 throw new Error("(errid:Watl000414)字段[打分者(markerId)]的值:[$(pobjcc_ExamPaperStuRelationEN.markerId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.markDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.markDate) === false)
{
 throw new Error("(errid:Watl000414)字段[打分日期(markDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.markDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isSendBack && undefined !== pobjcc_ExamPaperStuRelationEN.isSendBack && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isSendBack) === false)
{
 throw new Error("(errid:Watl000414)字段[是否退回(isSendBack)]的值:[$(pobjcc_ExamPaperStuRelationEN.isSendBack)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isInErrorQuestion && undefined !== pobjcc_ExamPaperStuRelationEN.isInErrorQuestion && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isInErrorQuestion) === false)
{
 throw new Error("(errid:Watl000414)字段[是否进入错题(isInErrorQuestion)]的值:[$(pobjcc_ExamPaperStuRelationEN.isInErrorQuestion)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.workTypeId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.workTypeId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.workTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[作业类型Id(workTypeId)]的值:[$(pobjcc_ExamPaperStuRelationEN.workTypeId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerIP) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerIP && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerIP) === false)
{
 throw new Error("(errid:Watl000414)字段[回答IP(answerIP)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerIP)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerDate) === false)
{
 throw new Error("(errid:Watl000414)字段[回答日期(answerDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerTime) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerTime && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerTime) === false)
{
 throw new Error("(errid:Watl000414)字段[回答时间(answerTime)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerTime)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isRight && undefined !== pobjcc_ExamPaperStuRelationEN.isRight && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isRight) === false)
{
 throw new Error("(errid:Watl000414)字段[是否正确(isRight)]的值:[$(pobjcc_ExamPaperStuRelationEN.isRight)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isAccessKnowledge && undefined !== pobjcc_ExamPaperStuRelationEN.isAccessKnowledge && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isAccessKnowledge) === false)
{
 throw new Error("(errid:Watl000414)字段[是否处理知识点(isAccessKnowledge)]的值:[$(pobjcc_ExamPaperStuRelationEN.isAccessKnowledge)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout && undefined !== pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout) === false)
{
 throw new Error("(errid:Watl000414)字段[是否不处理超时(isNotProcessTimeout)]的值:[$(pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolYear) == false && undefined !== pobjcc_ExamPaperStuRelationEN.schoolYear && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjcc_ExamPaperStuRelationEN.schoolYear)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolTerm) == false && undefined !== pobjcc_ExamPaperStuRelationEN.schoolTerm && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjcc_ExamPaperStuRelationEN.schoolTerm)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.updDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.updDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updUserId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.updUserId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjcc_ExamPaperStuRelationEN.updUserId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.memo) == false && undefined !== pobjcc_ExamPaperStuRelationEN.memo && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_ExamPaperStuRelationEN.memo)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) == false && pobjcc_ExamPaperStuRelationEN.courseExamPaperId != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) !=  8)
{
 throw ("(errid:Watl000415)字段[考卷流水号]作为外键字段,长度应该为8(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) == false && pobjcc_ExamPaperStuRelationEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) == false && pobjcc_ExamPaperStuRelationEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuRelationEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000415)字段[学生流水号]作为外键字段,长度应该为8(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_ExamPaperStuRelation_CheckProperty4Update(pobjcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.courseExamPaperId)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.idCurrEduCls)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[指定完成日期(specifyCompletionDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.idStudentInfo) > 8)
{
 throw new Error("(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.idStudentInfo)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerModeId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerModeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[答案模式Id(answerModeId)]的长度不能超过4(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerModeId)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerOptionId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerOptionId) > 8)
{
 throw new Error("(errid:Watl000416)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerOptionId)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) > 300)
{
 throw new Error("(errid:Watl000416)字段[多选项答案(answerMultiOptions)]的长度不能超过300(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerMultiOptions)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.applySendBackDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.applySendBackDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[申请退回日期(applySendBackDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.applySendBackDate)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.realFinishDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.realFinishDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.realFinishDate)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.operateTime) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.operateTime) > 14)
{
 throw new Error("(errid:Watl000416)字段[操作时间(operateTime)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.operateTime)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markerId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.markerId) > 20)
{
 throw new Error("(errid:Watl000416)字段[打分者(markerId)]的长度不能超过20(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.markerId)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.markDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[打分日期(markDate)]的长度不能超过14(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.markDate)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.workTypeId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.workTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[作业类型Id(workTypeId)]的长度不能超过2(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.workTypeId)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerIP) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerIP) > 30)
{
 throw new Error("(errid:Watl000416)字段[回答IP(answerIP)]的长度不能超过30(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerIP)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerDate) > 8)
{
 throw new Error("(errid:Watl000416)字段[回答日期(answerDate)]的长度不能超过8(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerDate)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerTime) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.answerTime) > 10)
{
 throw new Error("(errid:Watl000416)字段[回答时间(answerTime)]的长度不能超过10(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.answerTime)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolYear) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.schoolYear)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolTerm) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.schoolTerm)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updDate) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.updDate)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updUserId) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.updUserId)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.memo) == false && GetStrLen(pobjcc_ExamPaperStuRelationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 考卷与学生关系(cc_ExamPaperStuRelation))!值:$(pobjcc_ExamPaperStuRelationEN.memo)(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation && undefined !== pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation && tzDataType.isNumber(pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation) === false)
{
 throw new Error("(errid:Watl000417)字段[流水号(idExamPaperStuRelation)]的值:[$(pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation)], 非法,应该为数值型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.courseExamPaperId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) === false)
{
 throw new Error("(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[$(pobjcc_ExamPaperStuRelationEN.courseExamPaperId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) == false && undefined !== pobjcc_ExamPaperStuRelationEN.idCurrEduCls && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjcc_ExamPaperStuRelationEN.idCurrEduCls)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.scores && undefined !== pobjcc_ExamPaperStuRelationEN.scores && tzDataType.isNumber(pobjcc_ExamPaperStuRelationEN.scores) === false)
{
 throw new Error("(errid:Watl000417)字段[分值(scores)]的值:[$(pobjcc_ExamPaperStuRelationEN.scores)], 非法,应该为数值型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.specifyCompletionDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate) === false)
{
 throw new Error("(errid:Watl000417)字段[指定完成日期(specifyCompletionDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.specifyCompletionDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) == false && undefined !== pobjcc_ExamPaperStuRelationEN.idStudentInfo && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.idStudentInfo) === false)
{
 throw new Error("(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[$(pobjcc_ExamPaperStuRelationEN.idStudentInfo)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerModeId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerModeId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerModeId) === false)
{
 throw new Error("(errid:Watl000417)字段[答案模式Id(answerModeId)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerModeId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerOptionId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerOptionId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerOptionId) === false)
{
 throw new Error("(errid:Watl000417)字段[回答选项Id(answerOptionId)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerOptionId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerMultiOptions && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerMultiOptions) === false)
{
 throw new Error("(errid:Watl000417)字段[多选项答案(answerMultiOptions)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerMultiOptions)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.stuAnswerText) == false && undefined !== pobjcc_ExamPaperStuRelationEN.stuAnswerText && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.stuAnswerText) === false)
{
 throw new Error("(errid:Watl000417)字段[学生回答文本(stuAnswerText)]的值:[$(pobjcc_ExamPaperStuRelationEN.stuAnswerText)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isPublish && undefined !== pobjcc_ExamPaperStuRelationEN.isPublish && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isPublish) === false)
{
 throw new Error("(errid:Watl000417)字段[是否发布(isPublish)]的值:[$(pobjcc_ExamPaperStuRelationEN.isPublish)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isLook && undefined !== pobjcc_ExamPaperStuRelationEN.isLook && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isLook) === false)
{
 throw new Error("(errid:Watl000417)字段[是否查看(isLook)]的值:[$(pobjcc_ExamPaperStuRelationEN.isLook)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isSave && undefined !== pobjcc_ExamPaperStuRelationEN.isSave && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isSave) === false)
{
 throw new Error("(errid:Watl000417)字段[是否保存(isSave)]的值:[$(pobjcc_ExamPaperStuRelationEN.isSave)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isSubmit && undefined !== pobjcc_ExamPaperStuRelationEN.isSubmit && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjcc_ExamPaperStuRelationEN.isSubmit)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.applySendBackDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.applySendBackDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.applySendBackDate) === false)
{
 throw new Error("(errid:Watl000417)字段[申请退回日期(applySendBackDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.applySendBackDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isApplySendBack && undefined !== pobjcc_ExamPaperStuRelationEN.isApplySendBack && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isApplySendBack) === false)
{
 throw new Error("(errid:Watl000417)字段[是否申请退回(isApplySendBack)]的值:[$(pobjcc_ExamPaperStuRelationEN.isApplySendBack)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.realFinishDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.realFinishDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.realFinishDate) === false)
{
 throw new Error("(errid:Watl000417)字段[实际完成日期(realFinishDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.realFinishDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.operateTime) == false && undefined !== pobjcc_ExamPaperStuRelationEN.operateTime && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.operateTime) === false)
{
 throw new Error("(errid:Watl000417)字段[操作时间(operateTime)]的值:[$(pobjcc_ExamPaperStuRelationEN.operateTime)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.score && undefined !== pobjcc_ExamPaperStuRelationEN.score && tzDataType.isNumber(pobjcc_ExamPaperStuRelationEN.score) === false)
{
 throw new Error("(errid:Watl000417)字段[得分(score)]的值:[$(pobjcc_ExamPaperStuRelationEN.score)], 非法,应该为数值型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.comment) == false && undefined !== pobjcc_ExamPaperStuRelationEN.comment && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.comment) === false)
{
 throw new Error("(errid:Watl000417)字段[批注(comment)]的值:[$(pobjcc_ExamPaperStuRelationEN.comment)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isMarking && undefined !== pobjcc_ExamPaperStuRelationEN.isMarking && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isMarking) === false)
{
 throw new Error("(errid:Watl000417)字段[是否批阅(isMarking)]的值:[$(pobjcc_ExamPaperStuRelationEN.isMarking)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markerId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.markerId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.markerId) === false)
{
 throw new Error("(errid:Watl000417)字段[打分者(markerId)]的值:[$(pobjcc_ExamPaperStuRelationEN.markerId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.markDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.markDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.markDate) === false)
{
 throw new Error("(errid:Watl000417)字段[打分日期(markDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.markDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isSendBack && undefined !== pobjcc_ExamPaperStuRelationEN.isSendBack && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isSendBack) === false)
{
 throw new Error("(errid:Watl000417)字段[是否退回(isSendBack)]的值:[$(pobjcc_ExamPaperStuRelationEN.isSendBack)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isInErrorQuestion && undefined !== pobjcc_ExamPaperStuRelationEN.isInErrorQuestion && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isInErrorQuestion) === false)
{
 throw new Error("(errid:Watl000417)字段[是否进入错题(isInErrorQuestion)]的值:[$(pobjcc_ExamPaperStuRelationEN.isInErrorQuestion)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.workTypeId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.workTypeId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.workTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[作业类型Id(workTypeId)]的值:[$(pobjcc_ExamPaperStuRelationEN.workTypeId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerIP) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerIP && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerIP) === false)
{
 throw new Error("(errid:Watl000417)字段[回答IP(answerIP)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerIP)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerDate) === false)
{
 throw new Error("(errid:Watl000417)字段[回答日期(answerDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.answerTime) == false && undefined !== pobjcc_ExamPaperStuRelationEN.answerTime && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.answerTime) === false)
{
 throw new Error("(errid:Watl000417)字段[回答时间(answerTime)]的值:[$(pobjcc_ExamPaperStuRelationEN.answerTime)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isRight && undefined !== pobjcc_ExamPaperStuRelationEN.isRight && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isRight) === false)
{
 throw new Error("(errid:Watl000417)字段[是否正确(isRight)]的值:[$(pobjcc_ExamPaperStuRelationEN.isRight)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isAccessKnowledge && undefined !== pobjcc_ExamPaperStuRelationEN.isAccessKnowledge && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isAccessKnowledge) === false)
{
 throw new Error("(errid:Watl000417)字段[是否处理知识点(isAccessKnowledge)]的值:[$(pobjcc_ExamPaperStuRelationEN.isAccessKnowledge)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout && undefined !== pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout && tzDataType.isBoolean(pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout) === false)
{
 throw new Error("(errid:Watl000417)字段[是否不处理超时(isNotProcessTimeout)]的值:[$(pobjcc_ExamPaperStuRelationEN.isNotProcessTimeout)], 非法,应该为布尔型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolYear) == false && undefined !== pobjcc_ExamPaperStuRelationEN.schoolYear && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjcc_ExamPaperStuRelationEN.schoolYear)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.schoolTerm) == false && undefined !== pobjcc_ExamPaperStuRelationEN.schoolTerm && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjcc_ExamPaperStuRelationEN.schoolTerm)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updDate) == false && undefined !== pobjcc_ExamPaperStuRelationEN.updDate && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_ExamPaperStuRelationEN.updDate)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.updUserId) == false && undefined !== pobjcc_ExamPaperStuRelationEN.updUserId && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjcc_ExamPaperStuRelationEN.updUserId)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.memo) == false && undefined !== pobjcc_ExamPaperStuRelationEN.memo && tzDataType.isString(pobjcc_ExamPaperStuRelationEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_ExamPaperStuRelationEN.memo)], 非法,应该为字符型(In 考卷与学生关系(cc_ExamPaperStuRelation))!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation 
 || pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation != null && pobjcc_ExamPaperStuRelationEN.idExamPaperStuRelation.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[流水号]不能为空(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) == false && pobjcc_ExamPaperStuRelationEN.courseExamPaperId != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuRelationEN.courseExamPaperId) !=  8)
{
 throw ("(errid:Watl000418)字段[考卷流水号]作为外键字段,长度应该为8(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) == false && pobjcc_ExamPaperStuRelationEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuRelationEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_ExamPaperStuRelationEN.idStudentInfo) == false && pobjcc_ExamPaperStuRelationEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_ExamPaperStuRelationEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000418)字段[学生流水号]作为外键字段,长度应该为8(In 考卷与学生关系)!(clscc_ExamPaperStuRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_ExamPaperStuRelation_GetJSONStrByObj (pobjcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN): string
{
pobjcc_ExamPaperStuRelationEN.sfUpdFldSetStr = pobjcc_ExamPaperStuRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_ExamPaperStuRelationEN);
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
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function cc_ExamPaperStuRelation_GetObjLstByJSONStr (strJSON: string): Array<clscc_ExamPaperStuRelationEN>
{
let arrcc_ExamPaperStuRelationObjLst = new Array<clscc_ExamPaperStuRelationEN>();
if (strJSON === "")
{
return arrcc_ExamPaperStuRelationObjLst;
}
try
{
arrcc_ExamPaperStuRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_ExamPaperStuRelationObjLst;
}
return arrcc_ExamPaperStuRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_ExamPaperStuRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_ExamPaperStuRelation_GetObjLstByJSONObjLst (arrcc_ExamPaperStuRelationObjLstS: Array<clscc_ExamPaperStuRelationEN>): Array<clscc_ExamPaperStuRelationEN>
{
const arrcc_ExamPaperStuRelationObjLst = new Array<clscc_ExamPaperStuRelationEN>();
for (const objInFor of arrcc_ExamPaperStuRelationObjLstS) {
const obj1 = cc_ExamPaperStuRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_ExamPaperStuRelationObjLst.push(obj1);
}
return arrcc_ExamPaperStuRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_ExamPaperStuRelation_GetObjByJSONStr (strJSON: string): clscc_ExamPaperStuRelationEN
{
let pobjcc_ExamPaperStuRelationEN = new clscc_ExamPaperStuRelationEN();
if (strJSON === "")
{
return pobjcc_ExamPaperStuRelationEN;
}
try
{
pobjcc_ExamPaperStuRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_ExamPaperStuRelationEN;
}
return pobjcc_ExamPaperStuRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_ExamPaperStuRelation_GetCombineCondition(objcc_ExamPaperStuRelationCond: clscc_ExamPaperStuRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation) == true)
{
const strComparisonOpIdExamPaperStuRelation:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation];
strWhereCond += Format(" And {0} {2} {1}", clscc_ExamPaperStuRelationEN.con_IdExamPaperStuRelation, objcc_ExamPaperStuRelationCond.idExamPaperStuRelation, strComparisonOpIdExamPaperStuRelation);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_CourseExamPaperId, objcc_ExamPaperStuRelationCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_IdCurrEduCls, objcc_ExamPaperStuRelationCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_Scores) == true)
{
const strComparisonOpScores:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_Scores];
strWhereCond += Format(" And {0} {2} {1}", clscc_ExamPaperStuRelationEN.con_Scores, objcc_ExamPaperStuRelationCond.scores, strComparisonOpScores);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_SpecifyCompletionDate) == true)
{
const strComparisonOpSpecifyCompletionDate:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_SpecifyCompletionDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_SpecifyCompletionDate, objcc_ExamPaperStuRelationCond.specifyCompletionDate, strComparisonOpSpecifyCompletionDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_IdStudentInfo, objcc_ExamPaperStuRelationCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_AnswerModeId) == true)
{
const strComparisonOpAnswerModeId:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_AnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_AnswerModeId, objcc_ExamPaperStuRelationCond.answerModeId, strComparisonOpAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_AnswerOptionId) == true)
{
const strComparisonOpAnswerOptionId:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_AnswerOptionId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_AnswerOptionId, objcc_ExamPaperStuRelationCond.answerOptionId, strComparisonOpAnswerOptionId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_AnswerMultiOptions) == true)
{
const strComparisonOpAnswerMultiOptions:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_AnswerMultiOptions];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_AnswerMultiOptions, objcc_ExamPaperStuRelationCond.answerMultiOptions, strComparisonOpAnswerMultiOptions);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsPublish) == true)
{
if (objcc_ExamPaperStuRelationCond.isPublish == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsPublish);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsPublish);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsLook) == true)
{
if (objcc_ExamPaperStuRelationCond.isLook == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsLook);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsLook);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsSave) == true)
{
if (objcc_ExamPaperStuRelationCond.isSave == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsSave);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsSave);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsSubmit) == true)
{
if (objcc_ExamPaperStuRelationCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_ApplySendBackDate) == true)
{
const strComparisonOpApplySendBackDate:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_ApplySendBackDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_ApplySendBackDate, objcc_ExamPaperStuRelationCond.applySendBackDate, strComparisonOpApplySendBackDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsApplySendBack) == true)
{
if (objcc_ExamPaperStuRelationCond.isApplySendBack == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsApplySendBack);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsApplySendBack);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_RealFinishDate) == true)
{
const strComparisonOpRealFinishDate:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_RealFinishDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_RealFinishDate, objcc_ExamPaperStuRelationCond.realFinishDate, strComparisonOpRealFinishDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_OperateTime) == true)
{
const strComparisonOpOperateTime:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_OperateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_OperateTime, objcc_ExamPaperStuRelationCond.operateTime, strComparisonOpOperateTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_Score) == true)
{
const strComparisonOpScore:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clscc_ExamPaperStuRelationEN.con_Score, objcc_ExamPaperStuRelationCond.score, strComparisonOpScore);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsMarking) == true)
{
if (objcc_ExamPaperStuRelationCond.isMarking == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsMarking);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsMarking);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_MarkerId) == true)
{
const strComparisonOpMarkerId:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_MarkerId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_MarkerId, objcc_ExamPaperStuRelationCond.markerId, strComparisonOpMarkerId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_MarkDate) == true)
{
const strComparisonOpMarkDate:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_MarkDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_MarkDate, objcc_ExamPaperStuRelationCond.markDate, strComparisonOpMarkDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsSendBack) == true)
{
if (objcc_ExamPaperStuRelationCond.isSendBack == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsSendBack);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsSendBack);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsInErrorQuestion) == true)
{
if (objcc_ExamPaperStuRelationCond.isInErrorQuestion == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsInErrorQuestion);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsInErrorQuestion);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_WorkTypeId) == true)
{
const strComparisonOpWorkTypeId:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_WorkTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_WorkTypeId, objcc_ExamPaperStuRelationCond.workTypeId, strComparisonOpWorkTypeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_AnswerIP) == true)
{
const strComparisonOpAnswerIP:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_AnswerIP];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_AnswerIP, objcc_ExamPaperStuRelationCond.answerIP, strComparisonOpAnswerIP);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_AnswerDate) == true)
{
const strComparisonOpAnswerDate:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_AnswerDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_AnswerDate, objcc_ExamPaperStuRelationCond.answerDate, strComparisonOpAnswerDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_AnswerTime) == true)
{
const strComparisonOpAnswerTime:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_AnswerTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_AnswerTime, objcc_ExamPaperStuRelationCond.answerTime, strComparisonOpAnswerTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsRight) == true)
{
if (objcc_ExamPaperStuRelationCond.isRight == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsRight);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsRight);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsAccessKnowledge) == true)
{
if (objcc_ExamPaperStuRelationCond.isAccessKnowledge == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsAccessKnowledge);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsAccessKnowledge);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_IsNotProcessTimeout) == true)
{
if (objcc_ExamPaperStuRelationCond.isNotProcessTimeout == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExamPaperStuRelationEN.con_IsNotProcessTimeout);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExamPaperStuRelationEN.con_IsNotProcessTimeout);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolYear, objcc_ExamPaperStuRelationCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_SchoolTerm, objcc_ExamPaperStuRelationCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_UpdDate, objcc_ExamPaperStuRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_UpdUserId, objcc_ExamPaperStuRelationCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExamPaperStuRelationCond.dicFldComparisonOp, clscc_ExamPaperStuRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_ExamPaperStuRelationCond.dicFldComparisonOp[clscc_ExamPaperStuRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExamPaperStuRelationEN.con_Memo, objcc_ExamPaperStuRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_ExamPaperStuRelation(考卷与学生关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_ExamPaperStuRelation_GetUniCondStr(objcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objcc_ExamPaperStuRelationEN.courseExamPaperId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_ExamPaperStuRelationEN.idStudentInfo);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objcc_ExamPaperStuRelationEN.idCurrEduCls);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_ExamPaperStuRelation(考卷与学生关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseExamPaperId: 考卷流水号(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_ExamPaperStuRelation_GetUniCondStr4Update(objcc_ExamPaperStuRelationEN: clscc_ExamPaperStuRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdExamPaperStuRelation <> '{0}'", objcc_ExamPaperStuRelationEN.idExamPaperStuRelation);
 strWhereCond +=  Format(" and CourseExamPaperId = '{0}'", objcc_ExamPaperStuRelationEN.courseExamPaperId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_ExamPaperStuRelationEN.idStudentInfo);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objcc_ExamPaperStuRelationEN.idCurrEduCls);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_ExamPaperStuRelationENS:源对象
 * @param objcc_ExamPaperStuRelationENT:目标对象
*/
export  function cc_ExamPaperStuRelation_CopyObjTo(objcc_ExamPaperStuRelationENS: clscc_ExamPaperStuRelationEN , objcc_ExamPaperStuRelationENT: clscc_ExamPaperStuRelationEN ): void 
{
objcc_ExamPaperStuRelationENT.idExamPaperStuRelation = objcc_ExamPaperStuRelationENS.idExamPaperStuRelation; //流水号
objcc_ExamPaperStuRelationENT.courseExamPaperId = objcc_ExamPaperStuRelationENS.courseExamPaperId; //考卷流水号
objcc_ExamPaperStuRelationENT.idCurrEduCls = objcc_ExamPaperStuRelationENS.idCurrEduCls; //教学班流水号
objcc_ExamPaperStuRelationENT.scores = objcc_ExamPaperStuRelationENS.scores; //分值
objcc_ExamPaperStuRelationENT.specifyCompletionDate = objcc_ExamPaperStuRelationENS.specifyCompletionDate; //指定完成日期
objcc_ExamPaperStuRelationENT.idStudentInfo = objcc_ExamPaperStuRelationENS.idStudentInfo; //学生流水号
objcc_ExamPaperStuRelationENT.answerModeId = objcc_ExamPaperStuRelationENS.answerModeId; //答案模式Id
objcc_ExamPaperStuRelationENT.answerOptionId = objcc_ExamPaperStuRelationENS.answerOptionId; //回答选项Id
objcc_ExamPaperStuRelationENT.answerMultiOptions = objcc_ExamPaperStuRelationENS.answerMultiOptions; //多选项答案
objcc_ExamPaperStuRelationENT.stuAnswerText = objcc_ExamPaperStuRelationENS.stuAnswerText; //学生回答文本
objcc_ExamPaperStuRelationENT.isPublish = objcc_ExamPaperStuRelationENS.isPublish; //是否发布
objcc_ExamPaperStuRelationENT.isLook = objcc_ExamPaperStuRelationENS.isLook; //是否查看
objcc_ExamPaperStuRelationENT.isSave = objcc_ExamPaperStuRelationENS.isSave; //是否保存
objcc_ExamPaperStuRelationENT.isSubmit = objcc_ExamPaperStuRelationENS.isSubmit; //是否提交
objcc_ExamPaperStuRelationENT.applySendBackDate = objcc_ExamPaperStuRelationENS.applySendBackDate; //申请退回日期
objcc_ExamPaperStuRelationENT.isApplySendBack = objcc_ExamPaperStuRelationENS.isApplySendBack; //是否申请退回
objcc_ExamPaperStuRelationENT.realFinishDate = objcc_ExamPaperStuRelationENS.realFinishDate; //实际完成日期
objcc_ExamPaperStuRelationENT.operateTime = objcc_ExamPaperStuRelationENS.operateTime; //操作时间
objcc_ExamPaperStuRelationENT.score = objcc_ExamPaperStuRelationENS.score; //得分
objcc_ExamPaperStuRelationENT.comment = objcc_ExamPaperStuRelationENS.comment; //批注
objcc_ExamPaperStuRelationENT.isMarking = objcc_ExamPaperStuRelationENS.isMarking; //是否批阅
objcc_ExamPaperStuRelationENT.markerId = objcc_ExamPaperStuRelationENS.markerId; //打分者
objcc_ExamPaperStuRelationENT.markDate = objcc_ExamPaperStuRelationENS.markDate; //打分日期
objcc_ExamPaperStuRelationENT.isSendBack = objcc_ExamPaperStuRelationENS.isSendBack; //是否退回
objcc_ExamPaperStuRelationENT.isInErrorQuestion = objcc_ExamPaperStuRelationENS.isInErrorQuestion; //是否进入错题
objcc_ExamPaperStuRelationENT.workTypeId = objcc_ExamPaperStuRelationENS.workTypeId; //作业类型Id
objcc_ExamPaperStuRelationENT.answerIP = objcc_ExamPaperStuRelationENS.answerIP; //回答IP
objcc_ExamPaperStuRelationENT.answerDate = objcc_ExamPaperStuRelationENS.answerDate; //回答日期
objcc_ExamPaperStuRelationENT.answerTime = objcc_ExamPaperStuRelationENS.answerTime; //回答时间
objcc_ExamPaperStuRelationENT.isRight = objcc_ExamPaperStuRelationENS.isRight; //是否正确
objcc_ExamPaperStuRelationENT.isAccessKnowledge = objcc_ExamPaperStuRelationENS.isAccessKnowledge; //是否处理知识点
objcc_ExamPaperStuRelationENT.isNotProcessTimeout = objcc_ExamPaperStuRelationENS.isNotProcessTimeout; //是否不处理超时
objcc_ExamPaperStuRelationENT.schoolYear = objcc_ExamPaperStuRelationENS.schoolYear; //学年
objcc_ExamPaperStuRelationENT.schoolTerm = objcc_ExamPaperStuRelationENS.schoolTerm; //学期
objcc_ExamPaperStuRelationENT.updDate = objcc_ExamPaperStuRelationENS.updDate; //修改日期
objcc_ExamPaperStuRelationENT.updUserId = objcc_ExamPaperStuRelationENS.updUserId; //修改用户Id
objcc_ExamPaperStuRelationENT.memo = objcc_ExamPaperStuRelationENS.memo; //备注
objcc_ExamPaperStuRelationENT.sfUpdFldSetStr = objcc_ExamPaperStuRelationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_ExamPaperStuRelationENS:源对象
 * @param objcc_ExamPaperStuRelationENT:目标对象
*/
export  function cc_ExamPaperStuRelation_GetObjFromJsonObj(objcc_ExamPaperStuRelationENS: clscc_ExamPaperStuRelationEN): clscc_ExamPaperStuRelationEN 
{
 const objcc_ExamPaperStuRelationENT: clscc_ExamPaperStuRelationEN = new clscc_ExamPaperStuRelationEN();
ObjectAssign(objcc_ExamPaperStuRelationENT, objcc_ExamPaperStuRelationENS);
 return objcc_ExamPaperStuRelationENT;
}