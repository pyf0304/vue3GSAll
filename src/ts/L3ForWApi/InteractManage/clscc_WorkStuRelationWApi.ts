
 /**
 * 类名:clscc_WorkStuRelationWApi
 * 表名:cc_WorkStuRelation(01120145)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:56
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
 * 作业与学生关系(cc_WorkStuRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clscc_WorkStuRelationEN } from "@/ts/L0Entity/InteractManage/clscc_WorkStuRelationEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cc_WorkStuRelation_Controller = "cc_WorkStuRelationApi";
 export const cc_WorkStuRelation_ConstructorName = "cc_WorkStuRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdWorkStuRelation:关键字
 * @returns 对象
 **/
export  async function cc_WorkStuRelation_GetObjByIdWorkStuRelationAsync(lngIdWorkStuRelation: number): Promise<clscc_WorkStuRelationEN|null>  
{
const strThisFuncName = "GetObjByIdWorkStuRelationAsync";

if (lngIdWorkStuRelation == 0)
{
  const strMsg = Format("参数:[lngIdWorkStuRelation]不能为空!(In clscc_WorkStuRelationWApi.GetObjByIdWorkStuRelationAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdWorkStuRelation";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdWorkStuRelation,
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
const objcc_WorkStuRelation = cc_WorkStuRelation_GetObjFromJsonObj(returnObj);
return objcc_WorkStuRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdWorkStuRelationCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdWorkStuRelationlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByIdWorkStuRelationCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_WorkStuRelation_SortFunDefa(a:clscc_WorkStuRelationEN , b:clscc_WorkStuRelationEN): number 
{
return a.idWorkStuRelation-b.idWorkStuRelation;
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
export  function cc_WorkStuRelation_SortFunDefa2Fld(a:clscc_WorkStuRelationEN , b:clscc_WorkStuRelationEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.questionId.localeCompare(b.questionId);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function cc_WorkStuRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_WorkStuRelationEN.con_IdWorkStuRelation:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.idWorkStuRelation-b.idWorkStuRelation;
}
case clscc_WorkStuRelationEN.con_IdCurrEduCls:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clscc_WorkStuRelationEN.con_QuestionId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.questionId.localeCompare(b.questionId);
}
case clscc_WorkStuRelationEN.con_Scores:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.scores-b.scores;
}
case clscc_WorkStuRelationEN.con_SpecifyCompletionDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.specifyCompletionDate.localeCompare(b.specifyCompletionDate);
}
case clscc_WorkStuRelationEN.con_IdStudentInfo:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clscc_WorkStuRelationEN.con_AnswerModeId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.answerModeId == null) return -1;
if (b.answerModeId == null) return 1;
return a.answerModeId.localeCompare(b.answerModeId);
}
case clscc_WorkStuRelationEN.con_AnswerOptionId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.answerOptionId == null) return -1;
if (b.answerOptionId == null) return 1;
return a.answerOptionId.localeCompare(b.answerOptionId);
}
case clscc_WorkStuRelationEN.con_AnswerMultiOptions:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.answerMultiOptions == null) return -1;
if (b.answerMultiOptions == null) return 1;
return a.answerMultiOptions.localeCompare(b.answerMultiOptions);
}
case clscc_WorkStuRelationEN.con_AnswerBoolResult:
return (a: clscc_WorkStuRelationEN) => {
if (a.answerBoolResult == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_StuAnswerText:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.stuAnswerText == null) return -1;
if (b.stuAnswerText == null) return 1;
return a.stuAnswerText.localeCompare(b.stuAnswerText);
}
case clscc_WorkStuRelationEN.con_IsPublish:
return (a: clscc_WorkStuRelationEN) => {
if (a.isPublish == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsLook:
return (a: clscc_WorkStuRelationEN) => {
if (a.isLook == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsSave:
return (a: clscc_WorkStuRelationEN) => {
if (a.isSave == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsSubmit:
return (a: clscc_WorkStuRelationEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_ApplySendBackDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.applySendBackDate == null) return -1;
if (b.applySendBackDate == null) return 1;
return a.applySendBackDate.localeCompare(b.applySendBackDate);
}
case clscc_WorkStuRelationEN.con_IsApplySendBack:
return (a: clscc_WorkStuRelationEN) => {
if (a.isApplySendBack == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_RealFinishDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.realFinishDate == null) return -1;
if (b.realFinishDate == null) return 1;
return a.realFinishDate.localeCompare(b.realFinishDate);
}
case clscc_WorkStuRelationEN.con_OperateTime:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.operateTime == null) return -1;
if (b.operateTime == null) return 1;
return a.operateTime.localeCompare(b.operateTime);
}
case clscc_WorkStuRelationEN.con_Score:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.score-b.score;
}
case clscc_WorkStuRelationEN.con_Comment:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.comment == null) return -1;
if (b.comment == null) return 1;
return a.comment.localeCompare(b.comment);
}
case clscc_WorkStuRelationEN.con_IsMarking:
return (a: clscc_WorkStuRelationEN) => {
if (a.isMarking == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_MarkerId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.markerId == null) return -1;
if (b.markerId == null) return 1;
return a.markerId.localeCompare(b.markerId);
}
case clscc_WorkStuRelationEN.con_MarkDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.markDate == null) return -1;
if (b.markDate == null) return 1;
return a.markDate.localeCompare(b.markDate);
}
case clscc_WorkStuRelationEN.con_IsSendBack:
return (a: clscc_WorkStuRelationEN) => {
if (a.isSendBack == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsInErrorQuestion:
return (a: clscc_WorkStuRelationEN) => {
if (a.isInErrorQuestion == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_WorkTypeId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.workTypeId.localeCompare(b.workTypeId);
}
case clscc_WorkStuRelationEN.con_AnswerIP:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.answerIP == null) return -1;
if (b.answerIP == null) return 1;
return a.answerIP.localeCompare(b.answerIP);
}
case clscc_WorkStuRelationEN.con_AnswerDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.answerDate == null) return -1;
if (b.answerDate == null) return 1;
return a.answerDate.localeCompare(b.answerDate);
}
case clscc_WorkStuRelationEN.con_AnswerTime:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.answerTime == null) return -1;
if (b.answerTime == null) return 1;
return a.answerTime.localeCompare(b.answerTime);
}
case clscc_WorkStuRelationEN.con_CourseExamPaperId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.courseExamPaperId == null) return -1;
if (b.courseExamPaperId == null) return 1;
return a.courseExamPaperId.localeCompare(b.courseExamPaperId);
}
case clscc_WorkStuRelationEN.con_IsRight:
return (a: clscc_WorkStuRelationEN) => {
if (a.isRight == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsAccessKnowledge:
return (a: clscc_WorkStuRelationEN) => {
if (a.isAccessKnowledge == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsNotProcessTimeout:
return (a: clscc_WorkStuRelationEN) => {
if (a.isNotProcessTimeout == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_SchoolYear:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clscc_WorkStuRelationEN.con_SchoolTerm:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clscc_WorkStuRelationEN.con_ErrMsg:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.errMsg == null) return -1;
if (b.errMsg == null) return 1;
return a.errMsg.localeCompare(b.errMsg);
}
case clscc_WorkStuRelationEN.con_CourseId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_WorkStuRelationEN.con_UpdDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_WorkStuRelationEN.con_UpdUserId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_WorkStuRelationEN.con_Memo:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_WorkStuRelation]中不存在!(in ${ cc_WorkStuRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_WorkStuRelationEN.con_IdWorkStuRelation:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.idWorkStuRelation-a.idWorkStuRelation;
}
case clscc_WorkStuRelationEN.con_IdCurrEduCls:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clscc_WorkStuRelationEN.con_QuestionId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.questionId.localeCompare(a.questionId);
}
case clscc_WorkStuRelationEN.con_Scores:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.scores-a.scores;
}
case clscc_WorkStuRelationEN.con_SpecifyCompletionDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.specifyCompletionDate.localeCompare(a.specifyCompletionDate);
}
case clscc_WorkStuRelationEN.con_IdStudentInfo:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clscc_WorkStuRelationEN.con_AnswerModeId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.answerModeId == null) return -1;
if (a.answerModeId == null) return 1;
return b.answerModeId.localeCompare(a.answerModeId);
}
case clscc_WorkStuRelationEN.con_AnswerOptionId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.answerOptionId == null) return -1;
if (a.answerOptionId == null) return 1;
return b.answerOptionId.localeCompare(a.answerOptionId);
}
case clscc_WorkStuRelationEN.con_AnswerMultiOptions:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.answerMultiOptions == null) return -1;
if (a.answerMultiOptions == null) return 1;
return b.answerMultiOptions.localeCompare(a.answerMultiOptions);
}
case clscc_WorkStuRelationEN.con_AnswerBoolResult:
return (b: clscc_WorkStuRelationEN) => {
if (b.answerBoolResult == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_StuAnswerText:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.stuAnswerText == null) return -1;
if (a.stuAnswerText == null) return 1;
return b.stuAnswerText.localeCompare(a.stuAnswerText);
}
case clscc_WorkStuRelationEN.con_IsPublish:
return (b: clscc_WorkStuRelationEN) => {
if (b.isPublish == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsLook:
return (b: clscc_WorkStuRelationEN) => {
if (b.isLook == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsSave:
return (b: clscc_WorkStuRelationEN) => {
if (b.isSave == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsSubmit:
return (b: clscc_WorkStuRelationEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_ApplySendBackDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.applySendBackDate == null) return -1;
if (a.applySendBackDate == null) return 1;
return b.applySendBackDate.localeCompare(a.applySendBackDate);
}
case clscc_WorkStuRelationEN.con_IsApplySendBack:
return (b: clscc_WorkStuRelationEN) => {
if (b.isApplySendBack == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_RealFinishDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.realFinishDate == null) return -1;
if (a.realFinishDate == null) return 1;
return b.realFinishDate.localeCompare(a.realFinishDate);
}
case clscc_WorkStuRelationEN.con_OperateTime:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.operateTime == null) return -1;
if (a.operateTime == null) return 1;
return b.operateTime.localeCompare(a.operateTime);
}
case clscc_WorkStuRelationEN.con_Score:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.score-a.score;
}
case clscc_WorkStuRelationEN.con_Comment:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.comment == null) return -1;
if (a.comment == null) return 1;
return b.comment.localeCompare(a.comment);
}
case clscc_WorkStuRelationEN.con_IsMarking:
return (b: clscc_WorkStuRelationEN) => {
if (b.isMarking == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_MarkerId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.markerId == null) return -1;
if (a.markerId == null) return 1;
return b.markerId.localeCompare(a.markerId);
}
case clscc_WorkStuRelationEN.con_MarkDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.markDate == null) return -1;
if (a.markDate == null) return 1;
return b.markDate.localeCompare(a.markDate);
}
case clscc_WorkStuRelationEN.con_IsSendBack:
return (b: clscc_WorkStuRelationEN) => {
if (b.isSendBack == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsInErrorQuestion:
return (b: clscc_WorkStuRelationEN) => {
if (b.isInErrorQuestion == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_WorkTypeId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.workTypeId.localeCompare(a.workTypeId);
}
case clscc_WorkStuRelationEN.con_AnswerIP:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.answerIP == null) return -1;
if (a.answerIP == null) return 1;
return b.answerIP.localeCompare(a.answerIP);
}
case clscc_WorkStuRelationEN.con_AnswerDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.answerDate == null) return -1;
if (a.answerDate == null) return 1;
return b.answerDate.localeCompare(a.answerDate);
}
case clscc_WorkStuRelationEN.con_AnswerTime:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.answerTime == null) return -1;
if (a.answerTime == null) return 1;
return b.answerTime.localeCompare(a.answerTime);
}
case clscc_WorkStuRelationEN.con_CourseExamPaperId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.courseExamPaperId == null) return -1;
if (a.courseExamPaperId == null) return 1;
return b.courseExamPaperId.localeCompare(a.courseExamPaperId);
}
case clscc_WorkStuRelationEN.con_IsRight:
return (b: clscc_WorkStuRelationEN) => {
if (b.isRight == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsAccessKnowledge:
return (b: clscc_WorkStuRelationEN) => {
if (b.isAccessKnowledge == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_IsNotProcessTimeout:
return (b: clscc_WorkStuRelationEN) => {
if (b.isNotProcessTimeout == true) return 1;
else return -1
}
case clscc_WorkStuRelationEN.con_SchoolYear:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clscc_WorkStuRelationEN.con_SchoolTerm:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clscc_WorkStuRelationEN.con_ErrMsg:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.errMsg == null) return -1;
if (a.errMsg == null) return 1;
return b.errMsg.localeCompare(a.errMsg);
}
case clscc_WorkStuRelationEN.con_CourseId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_WorkStuRelationEN.con_UpdDate:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_WorkStuRelationEN.con_UpdUserId:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_WorkStuRelationEN.con_Memo:
return (a: clscc_WorkStuRelationEN, b: clscc_WorkStuRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_WorkStuRelation]中不存在!(in ${ cc_WorkStuRelation_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_WorkStuRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_WorkStuRelationEN.con_IdWorkStuRelation:
return (obj: clscc_WorkStuRelationEN) => {
return obj.idWorkStuRelation === value;
}
case clscc_WorkStuRelationEN.con_IdCurrEduCls:
return (obj: clscc_WorkStuRelationEN) => {
return obj.idCurrEduCls === value;
}
case clscc_WorkStuRelationEN.con_QuestionId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.questionId === value;
}
case clscc_WorkStuRelationEN.con_Scores:
return (obj: clscc_WorkStuRelationEN) => {
return obj.scores === value;
}
case clscc_WorkStuRelationEN.con_SpecifyCompletionDate:
return (obj: clscc_WorkStuRelationEN) => {
return obj.specifyCompletionDate === value;
}
case clscc_WorkStuRelationEN.con_IdStudentInfo:
return (obj: clscc_WorkStuRelationEN) => {
return obj.idStudentInfo === value;
}
case clscc_WorkStuRelationEN.con_AnswerModeId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerModeId === value;
}
case clscc_WorkStuRelationEN.con_AnswerOptionId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerOptionId === value;
}
case clscc_WorkStuRelationEN.con_AnswerMultiOptions:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerMultiOptions === value;
}
case clscc_WorkStuRelationEN.con_AnswerBoolResult:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerBoolResult === value;
}
case clscc_WorkStuRelationEN.con_StuAnswerText:
return (obj: clscc_WorkStuRelationEN) => {
return obj.stuAnswerText === value;
}
case clscc_WorkStuRelationEN.con_IsPublish:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isPublish === value;
}
case clscc_WorkStuRelationEN.con_IsLook:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isLook === value;
}
case clscc_WorkStuRelationEN.con_IsSave:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isSave === value;
}
case clscc_WorkStuRelationEN.con_IsSubmit:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isSubmit === value;
}
case clscc_WorkStuRelationEN.con_ApplySendBackDate:
return (obj: clscc_WorkStuRelationEN) => {
return obj.applySendBackDate === value;
}
case clscc_WorkStuRelationEN.con_IsApplySendBack:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isApplySendBack === value;
}
case clscc_WorkStuRelationEN.con_RealFinishDate:
return (obj: clscc_WorkStuRelationEN) => {
return obj.realFinishDate === value;
}
case clscc_WorkStuRelationEN.con_OperateTime:
return (obj: clscc_WorkStuRelationEN) => {
return obj.operateTime === value;
}
case clscc_WorkStuRelationEN.con_Score:
return (obj: clscc_WorkStuRelationEN) => {
return obj.score === value;
}
case clscc_WorkStuRelationEN.con_Comment:
return (obj: clscc_WorkStuRelationEN) => {
return obj.comment === value;
}
case clscc_WorkStuRelationEN.con_IsMarking:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isMarking === value;
}
case clscc_WorkStuRelationEN.con_MarkerId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.markerId === value;
}
case clscc_WorkStuRelationEN.con_MarkDate:
return (obj: clscc_WorkStuRelationEN) => {
return obj.markDate === value;
}
case clscc_WorkStuRelationEN.con_IsSendBack:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isSendBack === value;
}
case clscc_WorkStuRelationEN.con_IsInErrorQuestion:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isInErrorQuestion === value;
}
case clscc_WorkStuRelationEN.con_WorkTypeId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.workTypeId === value;
}
case clscc_WorkStuRelationEN.con_AnswerIP:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerIP === value;
}
case clscc_WorkStuRelationEN.con_AnswerDate:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerDate === value;
}
case clscc_WorkStuRelationEN.con_AnswerTime:
return (obj: clscc_WorkStuRelationEN) => {
return obj.answerTime === value;
}
case clscc_WorkStuRelationEN.con_CourseExamPaperId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.courseExamPaperId === value;
}
case clscc_WorkStuRelationEN.con_IsRight:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isRight === value;
}
case clscc_WorkStuRelationEN.con_IsAccessKnowledge:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isAccessKnowledge === value;
}
case clscc_WorkStuRelationEN.con_IsNotProcessTimeout:
return (obj: clscc_WorkStuRelationEN) => {
return obj.isNotProcessTimeout === value;
}
case clscc_WorkStuRelationEN.con_SchoolYear:
return (obj: clscc_WorkStuRelationEN) => {
return obj.schoolYear === value;
}
case clscc_WorkStuRelationEN.con_SchoolTerm:
return (obj: clscc_WorkStuRelationEN) => {
return obj.schoolTerm === value;
}
case clscc_WorkStuRelationEN.con_ErrMsg:
return (obj: clscc_WorkStuRelationEN) => {
return obj.errMsg === value;
}
case clscc_WorkStuRelationEN.con_CourseId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.courseId === value;
}
case clscc_WorkStuRelationEN.con_UpdDate:
return (obj: clscc_WorkStuRelationEN) => {
return obj.updDate === value;
}
case clscc_WorkStuRelationEN.con_UpdUserId:
return (obj: clscc_WorkStuRelationEN) => {
return obj.updUserId === value;
}
case clscc_WorkStuRelationEN.con_Memo:
return (obj: clscc_WorkStuRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_WorkStuRelation]中不存在!(in ${ cc_WorkStuRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[cc_WorkStuRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_WorkStuRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_WorkStuRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_WorkStuRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_WorkStuRelation_GetFirstObjAsync(strWhereCond: string): Promise<clscc_WorkStuRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const objcc_WorkStuRelation = cc_WorkStuRelation_GetObjFromJsonObj(returnObj);
return objcc_WorkStuRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_WorkStuRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_WorkStuRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_WorkStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdWorkStuRelation:关键字列表
 * @returns 对象列表
 **/
export  async function cc_WorkStuRelation_GetObjLstByIdWorkStuRelationLstAsync(arrIdWorkStuRelation: Array<string>): Promise<Array<clscc_WorkStuRelationEN>>  
{
const strThisFuncName = "GetObjLstByIdWorkStuRelationLstAsync";
const strAction = "GetObjLstByIdWorkStuRelationLst";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdWorkStuRelation, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_WorkStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdWorkStuRelationLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function cc_WorkStuRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_WorkStuRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_WorkStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_WorkStuRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_WorkStuRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_WorkStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_WorkStuRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_WorkStuRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_WorkStuRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_WorkStuRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
 * @param lngIdWorkStuRelation:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_WorkStuRelation_DelRecordAsync(lngIdWorkStuRelation: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngIdWorkStuRelation);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
 * @param arrIdWorkStuRelation:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_WorkStuRelation_Delcc_WorkStuRelationsAsync(arrIdWorkStuRelation: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_WorkStuRelationsAsync";
const strAction = "Delcc_WorkStuRelations";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdWorkStuRelation, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_WorkStuRelation_Delcc_WorkStuRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_WorkStuRelationsByCondAsync";
const strAction = "Delcc_WorkStuRelationsByCond";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_WorkStuRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_WorkStuRelation_AddNewRecordAsync(objcc_WorkStuRelationEN: clscc_WorkStuRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_WorkStuRelationEN);
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_WorkStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_WorkStuRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_WorkStuRelation_AddNewRecordWithReturnKeyAsync(objcc_WorkStuRelationEN: clscc_WorkStuRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_WorkStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_WorkStuRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_WorkStuRelation_UpdateRecordAsync(objcc_WorkStuRelationEN: clscc_WorkStuRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_WorkStuRelationEN.sfUpdFldSetStr === undefined || objcc_WorkStuRelationEN.sfUpdFldSetStr === null || objcc_WorkStuRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_WorkStuRelationEN.idWorkStuRelation);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_WorkStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_WorkStuRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_WorkStuRelation_UpdateWithConditionAsync(objcc_WorkStuRelationEN: clscc_WorkStuRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_WorkStuRelationEN.sfUpdFldSetStr === undefined || objcc_WorkStuRelationEN.sfUpdFldSetStr === null || objcc_WorkStuRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_WorkStuRelationEN.idWorkStuRelation);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);
objcc_WorkStuRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_WorkStuRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function cc_WorkStuRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngIdWorkStuRelation:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_WorkStuRelation_IsExistAsync(lngIdWorkStuRelation: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdWorkStuRelation
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  async function cc_WorkStuRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function cc_WorkStuRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_WorkStuRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_WorkStuRelation_ConstructorName, strThisFuncName);
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
export  function cc_WorkStuRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_WorkStuRelation_CheckPropertyNew(pobjcc_WorkStuRelationEN: clscc_WorkStuRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idCurrEduCls) === true 
 || pobjcc_WorkStuRelationEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[教学班流水号]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.questionId) === true 
 || pobjcc_WorkStuRelationEN.questionId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[题目Id]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.specifyCompletionDate) === true )
{
 throw new Error("(errid:Watl000411)字段[指定完成日期]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) === true )
{
 throw new Error("(errid:Watl000411)字段[学生流水号]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.workTypeId) === true )
{
 throw new Error("(errid:Watl000411)字段[作业类型Id]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseId) === true 
 || pobjcc_WorkStuRelationEN.courseId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[课程Id]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idCurrEduCls) == false && GetStrLen(pobjcc_WorkStuRelationEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.idCurrEduCls)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.questionId) == false && GetStrLen(pobjcc_WorkStuRelationEN.questionId) > 8)
{
 throw new Error("(errid:Watl000413)字段[题目Id(questionId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.questionId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.specifyCompletionDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.specifyCompletionDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[指定完成日期(specifyCompletionDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.specifyCompletionDate)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) == false && GetStrLen(pobjcc_WorkStuRelationEN.idStudentInfo) > 8)
{
 throw new Error("(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.idStudentInfo)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerModeId) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerModeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[答案模式Id(answerModeId)]的长度不能超过4(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerModeId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerOptionId) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerOptionId) > 8)
{
 throw new Error("(errid:Watl000413)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerOptionId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerMultiOptions) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerMultiOptions) > 300)
{
 throw new Error("(errid:Watl000413)字段[多选项答案(answerMultiOptions)]的长度不能超过300(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerMultiOptions)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.applySendBackDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.applySendBackDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[申请退回日期(applySendBackDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.applySendBackDate)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.realFinishDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.realFinishDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.realFinishDate)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.operateTime) == false && GetStrLen(pobjcc_WorkStuRelationEN.operateTime) > 14)
{
 throw new Error("(errid:Watl000413)字段[操作时间(operateTime)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.operateTime)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markerId) == false && GetStrLen(pobjcc_WorkStuRelationEN.markerId) > 20)
{
 throw new Error("(errid:Watl000413)字段[打分者(markerId)]的长度不能超过20(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.markerId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.markDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[打分日期(markDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.markDate)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.workTypeId) == false && GetStrLen(pobjcc_WorkStuRelationEN.workTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[作业类型Id(workTypeId)]的长度不能超过2(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.workTypeId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerIP) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerIP) > 30)
{
 throw new Error("(errid:Watl000413)字段[回答IP(answerIP)]的长度不能超过30(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerIP)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerDate) > 8)
{
 throw new Error("(errid:Watl000413)字段[回答日期(answerDate)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerDate)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerTime) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerTime) > 10)
{
 throw new Error("(errid:Watl000413)字段[回答时间(answerTime)]的长度不能超过10(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerTime)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseExamPaperId) == false && GetStrLen(pobjcc_WorkStuRelationEN.courseExamPaperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.courseExamPaperId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolYear) == false && GetStrLen(pobjcc_WorkStuRelationEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.schoolYear)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolTerm) == false && GetStrLen(pobjcc_WorkStuRelationEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.schoolTerm)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.errMsg) == false && GetStrLen(pobjcc_WorkStuRelationEN.errMsg) > 200)
{
 throw new Error("(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过200(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.errMsg)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseId) == false && GetStrLen(pobjcc_WorkStuRelationEN.courseId) > 8)
{
 throw new Error("(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.courseId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.updDate)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updUserId) == false && GetStrLen(pobjcc_WorkStuRelationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.updUserId)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.memo) == false && GetStrLen(pobjcc_WorkStuRelationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.memo)(clscc_WorkStuRelationBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjcc_WorkStuRelationEN.idWorkStuRelation && undefined !== pobjcc_WorkStuRelationEN.idWorkStuRelation && tzDataType.isNumber(pobjcc_WorkStuRelationEN.idWorkStuRelation) === false)
{
 throw new Error("(errid:Watl000414)字段[流水号(idWorkStuRelation)]的值:[$(pobjcc_WorkStuRelationEN.idWorkStuRelation)], 非法,应该为数值型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idCurrEduCls) == false && undefined !== pobjcc_WorkStuRelationEN.idCurrEduCls && tzDataType.isString(pobjcc_WorkStuRelationEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjcc_WorkStuRelationEN.idCurrEduCls)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.questionId) == false && undefined !== pobjcc_WorkStuRelationEN.questionId && tzDataType.isString(pobjcc_WorkStuRelationEN.questionId) === false)
{
 throw new Error("(errid:Watl000414)字段[题目Id(questionId)]的值:[$(pobjcc_WorkStuRelationEN.questionId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.scores && undefined !== pobjcc_WorkStuRelationEN.scores && tzDataType.isNumber(pobjcc_WorkStuRelationEN.scores) === false)
{
 throw new Error("(errid:Watl000414)字段[分值(scores)]的值:[$(pobjcc_WorkStuRelationEN.scores)], 非法,应该为数值型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.specifyCompletionDate) == false && undefined !== pobjcc_WorkStuRelationEN.specifyCompletionDate && tzDataType.isString(pobjcc_WorkStuRelationEN.specifyCompletionDate) === false)
{
 throw new Error("(errid:Watl000414)字段[指定完成日期(specifyCompletionDate)]的值:[$(pobjcc_WorkStuRelationEN.specifyCompletionDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) == false && undefined !== pobjcc_WorkStuRelationEN.idStudentInfo && tzDataType.isString(pobjcc_WorkStuRelationEN.idStudentInfo) === false)
{
 throw new Error("(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[$(pobjcc_WorkStuRelationEN.idStudentInfo)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerModeId) == false && undefined !== pobjcc_WorkStuRelationEN.answerModeId && tzDataType.isString(pobjcc_WorkStuRelationEN.answerModeId) === false)
{
 throw new Error("(errid:Watl000414)字段[答案模式Id(answerModeId)]的值:[$(pobjcc_WorkStuRelationEN.answerModeId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerOptionId) == false && undefined !== pobjcc_WorkStuRelationEN.answerOptionId && tzDataType.isString(pobjcc_WorkStuRelationEN.answerOptionId) === false)
{
 throw new Error("(errid:Watl000414)字段[回答选项Id(answerOptionId)]的值:[$(pobjcc_WorkStuRelationEN.answerOptionId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerMultiOptions) == false && undefined !== pobjcc_WorkStuRelationEN.answerMultiOptions && tzDataType.isString(pobjcc_WorkStuRelationEN.answerMultiOptions) === false)
{
 throw new Error("(errid:Watl000414)字段[多选项答案(answerMultiOptions)]的值:[$(pobjcc_WorkStuRelationEN.answerMultiOptions)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.answerBoolResult && undefined !== pobjcc_WorkStuRelationEN.answerBoolResult && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.answerBoolResult) === false)
{
 throw new Error("(errid:Watl000414)字段[答案布尔结果(answerBoolResult)]的值:[$(pobjcc_WorkStuRelationEN.answerBoolResult)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.stuAnswerText) == false && undefined !== pobjcc_WorkStuRelationEN.stuAnswerText && tzDataType.isString(pobjcc_WorkStuRelationEN.stuAnswerText) === false)
{
 throw new Error("(errid:Watl000414)字段[学生回答文本(stuAnswerText)]的值:[$(pobjcc_WorkStuRelationEN.stuAnswerText)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isPublish && undefined !== pobjcc_WorkStuRelationEN.isPublish && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isPublish) === false)
{
 throw new Error("(errid:Watl000414)字段[是否发布(isPublish)]的值:[$(pobjcc_WorkStuRelationEN.isPublish)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isLook && undefined !== pobjcc_WorkStuRelationEN.isLook && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isLook) === false)
{
 throw new Error("(errid:Watl000414)字段[是否查看(isLook)]的值:[$(pobjcc_WorkStuRelationEN.isLook)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isSave && undefined !== pobjcc_WorkStuRelationEN.isSave && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isSave) === false)
{
 throw new Error("(errid:Watl000414)字段[是否保存(isSave)]的值:[$(pobjcc_WorkStuRelationEN.isSave)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isSubmit && undefined !== pobjcc_WorkStuRelationEN.isSubmit && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjcc_WorkStuRelationEN.isSubmit)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.applySendBackDate) == false && undefined !== pobjcc_WorkStuRelationEN.applySendBackDate && tzDataType.isString(pobjcc_WorkStuRelationEN.applySendBackDate) === false)
{
 throw new Error("(errid:Watl000414)字段[申请退回日期(applySendBackDate)]的值:[$(pobjcc_WorkStuRelationEN.applySendBackDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isApplySendBack && undefined !== pobjcc_WorkStuRelationEN.isApplySendBack && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isApplySendBack) === false)
{
 throw new Error("(errid:Watl000414)字段[是否申请退回(isApplySendBack)]的值:[$(pobjcc_WorkStuRelationEN.isApplySendBack)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.realFinishDate) == false && undefined !== pobjcc_WorkStuRelationEN.realFinishDate && tzDataType.isString(pobjcc_WorkStuRelationEN.realFinishDate) === false)
{
 throw new Error("(errid:Watl000414)字段[实际完成日期(realFinishDate)]的值:[$(pobjcc_WorkStuRelationEN.realFinishDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.operateTime) == false && undefined !== pobjcc_WorkStuRelationEN.operateTime && tzDataType.isString(pobjcc_WorkStuRelationEN.operateTime) === false)
{
 throw new Error("(errid:Watl000414)字段[操作时间(operateTime)]的值:[$(pobjcc_WorkStuRelationEN.operateTime)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.score && undefined !== pobjcc_WorkStuRelationEN.score && tzDataType.isNumber(pobjcc_WorkStuRelationEN.score) === false)
{
 throw new Error("(errid:Watl000414)字段[得分(score)]的值:[$(pobjcc_WorkStuRelationEN.score)], 非法,应该为数值型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.comment) == false && undefined !== pobjcc_WorkStuRelationEN.comment && tzDataType.isString(pobjcc_WorkStuRelationEN.comment) === false)
{
 throw new Error("(errid:Watl000414)字段[批注(comment)]的值:[$(pobjcc_WorkStuRelationEN.comment)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isMarking && undefined !== pobjcc_WorkStuRelationEN.isMarking && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isMarking) === false)
{
 throw new Error("(errid:Watl000414)字段[是否批阅(isMarking)]的值:[$(pobjcc_WorkStuRelationEN.isMarking)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markerId) == false && undefined !== pobjcc_WorkStuRelationEN.markerId && tzDataType.isString(pobjcc_WorkStuRelationEN.markerId) === false)
{
 throw new Error("(errid:Watl000414)字段[打分者(markerId)]的值:[$(pobjcc_WorkStuRelationEN.markerId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markDate) == false && undefined !== pobjcc_WorkStuRelationEN.markDate && tzDataType.isString(pobjcc_WorkStuRelationEN.markDate) === false)
{
 throw new Error("(errid:Watl000414)字段[打分日期(markDate)]的值:[$(pobjcc_WorkStuRelationEN.markDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isSendBack && undefined !== pobjcc_WorkStuRelationEN.isSendBack && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isSendBack) === false)
{
 throw new Error("(errid:Watl000414)字段[是否退回(isSendBack)]的值:[$(pobjcc_WorkStuRelationEN.isSendBack)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isInErrorQuestion && undefined !== pobjcc_WorkStuRelationEN.isInErrorQuestion && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isInErrorQuestion) === false)
{
 throw new Error("(errid:Watl000414)字段[是否进入错题(isInErrorQuestion)]的值:[$(pobjcc_WorkStuRelationEN.isInErrorQuestion)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.workTypeId) == false && undefined !== pobjcc_WorkStuRelationEN.workTypeId && tzDataType.isString(pobjcc_WorkStuRelationEN.workTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[作业类型Id(workTypeId)]的值:[$(pobjcc_WorkStuRelationEN.workTypeId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerIP) == false && undefined !== pobjcc_WorkStuRelationEN.answerIP && tzDataType.isString(pobjcc_WorkStuRelationEN.answerIP) === false)
{
 throw new Error("(errid:Watl000414)字段[回答IP(answerIP)]的值:[$(pobjcc_WorkStuRelationEN.answerIP)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerDate) == false && undefined !== pobjcc_WorkStuRelationEN.answerDate && tzDataType.isString(pobjcc_WorkStuRelationEN.answerDate) === false)
{
 throw new Error("(errid:Watl000414)字段[回答日期(answerDate)]的值:[$(pobjcc_WorkStuRelationEN.answerDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerTime) == false && undefined !== pobjcc_WorkStuRelationEN.answerTime && tzDataType.isString(pobjcc_WorkStuRelationEN.answerTime) === false)
{
 throw new Error("(errid:Watl000414)字段[回答时间(answerTime)]的值:[$(pobjcc_WorkStuRelationEN.answerTime)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseExamPaperId) == false && undefined !== pobjcc_WorkStuRelationEN.courseExamPaperId && tzDataType.isString(pobjcc_WorkStuRelationEN.courseExamPaperId) === false)
{
 throw new Error("(errid:Watl000414)字段[考卷流水号(courseExamPaperId)]的值:[$(pobjcc_WorkStuRelationEN.courseExamPaperId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isRight && undefined !== pobjcc_WorkStuRelationEN.isRight && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isRight) === false)
{
 throw new Error("(errid:Watl000414)字段[是否正确(isRight)]的值:[$(pobjcc_WorkStuRelationEN.isRight)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isAccessKnowledge && undefined !== pobjcc_WorkStuRelationEN.isAccessKnowledge && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isAccessKnowledge) === false)
{
 throw new Error("(errid:Watl000414)字段[是否处理知识点(isAccessKnowledge)]的值:[$(pobjcc_WorkStuRelationEN.isAccessKnowledge)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (null != pobjcc_WorkStuRelationEN.isNotProcessTimeout && undefined !== pobjcc_WorkStuRelationEN.isNotProcessTimeout && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isNotProcessTimeout) === false)
{
 throw new Error("(errid:Watl000414)字段[是否不处理超时(isNotProcessTimeout)]的值:[$(pobjcc_WorkStuRelationEN.isNotProcessTimeout)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolYear) == false && undefined !== pobjcc_WorkStuRelationEN.schoolYear && tzDataType.isString(pobjcc_WorkStuRelationEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjcc_WorkStuRelationEN.schoolYear)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolTerm) == false && undefined !== pobjcc_WorkStuRelationEN.schoolTerm && tzDataType.isString(pobjcc_WorkStuRelationEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjcc_WorkStuRelationEN.schoolTerm)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.errMsg) == false && undefined !== pobjcc_WorkStuRelationEN.errMsg && tzDataType.isString(pobjcc_WorkStuRelationEN.errMsg) === false)
{
 throw new Error("(errid:Watl000414)字段[错误信息(errMsg)]的值:[$(pobjcc_WorkStuRelationEN.errMsg)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseId) == false && undefined !== pobjcc_WorkStuRelationEN.courseId && tzDataType.isString(pobjcc_WorkStuRelationEN.courseId) === false)
{
 throw new Error("(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjcc_WorkStuRelationEN.courseId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updDate) == false && undefined !== pobjcc_WorkStuRelationEN.updDate && tzDataType.isString(pobjcc_WorkStuRelationEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcc_WorkStuRelationEN.updDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updUserId) == false && undefined !== pobjcc_WorkStuRelationEN.updUserId && tzDataType.isString(pobjcc_WorkStuRelationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjcc_WorkStuRelationEN.updUserId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.memo) == false && undefined !== pobjcc_WorkStuRelationEN.memo && tzDataType.isString(pobjcc_WorkStuRelationEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjcc_WorkStuRelationEN.memo)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) == false && pobjcc_WorkStuRelationEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_WorkStuRelationEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000415)字段[学生流水号]作为外键字段,长度应该为8(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_WorkStuRelation_CheckProperty4Update(pobjcc_WorkStuRelationEN: clscc_WorkStuRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idCurrEduCls) == false && GetStrLen(pobjcc_WorkStuRelationEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.idCurrEduCls)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.questionId) == false && GetStrLen(pobjcc_WorkStuRelationEN.questionId) > 8)
{
 throw new Error("(errid:Watl000416)字段[题目Id(questionId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.questionId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.specifyCompletionDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.specifyCompletionDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[指定完成日期(specifyCompletionDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.specifyCompletionDate)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) == false && GetStrLen(pobjcc_WorkStuRelationEN.idStudentInfo) > 8)
{
 throw new Error("(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.idStudentInfo)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerModeId) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerModeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[答案模式Id(answerModeId)]的长度不能超过4(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerModeId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerOptionId) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerOptionId) > 8)
{
 throw new Error("(errid:Watl000416)字段[回答选项Id(answerOptionId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerOptionId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerMultiOptions) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerMultiOptions) > 300)
{
 throw new Error("(errid:Watl000416)字段[多选项答案(answerMultiOptions)]的长度不能超过300(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerMultiOptions)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.applySendBackDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.applySendBackDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[申请退回日期(applySendBackDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.applySendBackDate)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.realFinishDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.realFinishDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[实际完成日期(realFinishDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.realFinishDate)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.operateTime) == false && GetStrLen(pobjcc_WorkStuRelationEN.operateTime) > 14)
{
 throw new Error("(errid:Watl000416)字段[操作时间(operateTime)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.operateTime)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markerId) == false && GetStrLen(pobjcc_WorkStuRelationEN.markerId) > 20)
{
 throw new Error("(errid:Watl000416)字段[打分者(markerId)]的长度不能超过20(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.markerId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.markDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[打分日期(markDate)]的长度不能超过14(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.markDate)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.workTypeId) == false && GetStrLen(pobjcc_WorkStuRelationEN.workTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[作业类型Id(workTypeId)]的长度不能超过2(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.workTypeId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerIP) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerIP) > 30)
{
 throw new Error("(errid:Watl000416)字段[回答IP(answerIP)]的长度不能超过30(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerIP)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerDate) > 8)
{
 throw new Error("(errid:Watl000416)字段[回答日期(answerDate)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerDate)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerTime) == false && GetStrLen(pobjcc_WorkStuRelationEN.answerTime) > 10)
{
 throw new Error("(errid:Watl000416)字段[回答时间(answerTime)]的长度不能超过10(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.answerTime)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseExamPaperId) == false && GetStrLen(pobjcc_WorkStuRelationEN.courseExamPaperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[考卷流水号(courseExamPaperId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.courseExamPaperId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolYear) == false && GetStrLen(pobjcc_WorkStuRelationEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.schoolYear)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolTerm) == false && GetStrLen(pobjcc_WorkStuRelationEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.schoolTerm)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.errMsg) == false && GetStrLen(pobjcc_WorkStuRelationEN.errMsg) > 200)
{
 throw new Error("(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过200(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.errMsg)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseId) == false && GetStrLen(pobjcc_WorkStuRelationEN.courseId) > 8)
{
 throw new Error("(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.courseId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updDate) == false && GetStrLen(pobjcc_WorkStuRelationEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.updDate)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updUserId) == false && GetStrLen(pobjcc_WorkStuRelationEN.updUserId) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.updUserId)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.memo) == false && GetStrLen(pobjcc_WorkStuRelationEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 作业与学生关系(cc_WorkStuRelation))!值:$(pobjcc_WorkStuRelationEN.memo)(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjcc_WorkStuRelationEN.idWorkStuRelation && undefined !== pobjcc_WorkStuRelationEN.idWorkStuRelation && tzDataType.isNumber(pobjcc_WorkStuRelationEN.idWorkStuRelation) === false)
{
 throw new Error("(errid:Watl000417)字段[流水号(idWorkStuRelation)]的值:[$(pobjcc_WorkStuRelationEN.idWorkStuRelation)], 非法,应该为数值型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idCurrEduCls) == false && undefined !== pobjcc_WorkStuRelationEN.idCurrEduCls && tzDataType.isString(pobjcc_WorkStuRelationEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjcc_WorkStuRelationEN.idCurrEduCls)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.questionId) == false && undefined !== pobjcc_WorkStuRelationEN.questionId && tzDataType.isString(pobjcc_WorkStuRelationEN.questionId) === false)
{
 throw new Error("(errid:Watl000417)字段[题目Id(questionId)]的值:[$(pobjcc_WorkStuRelationEN.questionId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.scores && undefined !== pobjcc_WorkStuRelationEN.scores && tzDataType.isNumber(pobjcc_WorkStuRelationEN.scores) === false)
{
 throw new Error("(errid:Watl000417)字段[分值(scores)]的值:[$(pobjcc_WorkStuRelationEN.scores)], 非法,应该为数值型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.specifyCompletionDate) == false && undefined !== pobjcc_WorkStuRelationEN.specifyCompletionDate && tzDataType.isString(pobjcc_WorkStuRelationEN.specifyCompletionDate) === false)
{
 throw new Error("(errid:Watl000417)字段[指定完成日期(specifyCompletionDate)]的值:[$(pobjcc_WorkStuRelationEN.specifyCompletionDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) == false && undefined !== pobjcc_WorkStuRelationEN.idStudentInfo && tzDataType.isString(pobjcc_WorkStuRelationEN.idStudentInfo) === false)
{
 throw new Error("(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[$(pobjcc_WorkStuRelationEN.idStudentInfo)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerModeId) == false && undefined !== pobjcc_WorkStuRelationEN.answerModeId && tzDataType.isString(pobjcc_WorkStuRelationEN.answerModeId) === false)
{
 throw new Error("(errid:Watl000417)字段[答案模式Id(answerModeId)]的值:[$(pobjcc_WorkStuRelationEN.answerModeId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerOptionId) == false && undefined !== pobjcc_WorkStuRelationEN.answerOptionId && tzDataType.isString(pobjcc_WorkStuRelationEN.answerOptionId) === false)
{
 throw new Error("(errid:Watl000417)字段[回答选项Id(answerOptionId)]的值:[$(pobjcc_WorkStuRelationEN.answerOptionId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerMultiOptions) == false && undefined !== pobjcc_WorkStuRelationEN.answerMultiOptions && tzDataType.isString(pobjcc_WorkStuRelationEN.answerMultiOptions) === false)
{
 throw new Error("(errid:Watl000417)字段[多选项答案(answerMultiOptions)]的值:[$(pobjcc_WorkStuRelationEN.answerMultiOptions)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.answerBoolResult && undefined !== pobjcc_WorkStuRelationEN.answerBoolResult && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.answerBoolResult) === false)
{
 throw new Error("(errid:Watl000417)字段[答案布尔结果(answerBoolResult)]的值:[$(pobjcc_WorkStuRelationEN.answerBoolResult)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.stuAnswerText) == false && undefined !== pobjcc_WorkStuRelationEN.stuAnswerText && tzDataType.isString(pobjcc_WorkStuRelationEN.stuAnswerText) === false)
{
 throw new Error("(errid:Watl000417)字段[学生回答文本(stuAnswerText)]的值:[$(pobjcc_WorkStuRelationEN.stuAnswerText)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isPublish && undefined !== pobjcc_WorkStuRelationEN.isPublish && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isPublish) === false)
{
 throw new Error("(errid:Watl000417)字段[是否发布(isPublish)]的值:[$(pobjcc_WorkStuRelationEN.isPublish)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isLook && undefined !== pobjcc_WorkStuRelationEN.isLook && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isLook) === false)
{
 throw new Error("(errid:Watl000417)字段[是否查看(isLook)]的值:[$(pobjcc_WorkStuRelationEN.isLook)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isSave && undefined !== pobjcc_WorkStuRelationEN.isSave && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isSave) === false)
{
 throw new Error("(errid:Watl000417)字段[是否保存(isSave)]的值:[$(pobjcc_WorkStuRelationEN.isSave)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isSubmit && undefined !== pobjcc_WorkStuRelationEN.isSubmit && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjcc_WorkStuRelationEN.isSubmit)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.applySendBackDate) == false && undefined !== pobjcc_WorkStuRelationEN.applySendBackDate && tzDataType.isString(pobjcc_WorkStuRelationEN.applySendBackDate) === false)
{
 throw new Error("(errid:Watl000417)字段[申请退回日期(applySendBackDate)]的值:[$(pobjcc_WorkStuRelationEN.applySendBackDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isApplySendBack && undefined !== pobjcc_WorkStuRelationEN.isApplySendBack && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isApplySendBack) === false)
{
 throw new Error("(errid:Watl000417)字段[是否申请退回(isApplySendBack)]的值:[$(pobjcc_WorkStuRelationEN.isApplySendBack)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.realFinishDate) == false && undefined !== pobjcc_WorkStuRelationEN.realFinishDate && tzDataType.isString(pobjcc_WorkStuRelationEN.realFinishDate) === false)
{
 throw new Error("(errid:Watl000417)字段[实际完成日期(realFinishDate)]的值:[$(pobjcc_WorkStuRelationEN.realFinishDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.operateTime) == false && undefined !== pobjcc_WorkStuRelationEN.operateTime && tzDataType.isString(pobjcc_WorkStuRelationEN.operateTime) === false)
{
 throw new Error("(errid:Watl000417)字段[操作时间(operateTime)]的值:[$(pobjcc_WorkStuRelationEN.operateTime)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.score && undefined !== pobjcc_WorkStuRelationEN.score && tzDataType.isNumber(pobjcc_WorkStuRelationEN.score) === false)
{
 throw new Error("(errid:Watl000417)字段[得分(score)]的值:[$(pobjcc_WorkStuRelationEN.score)], 非法,应该为数值型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.comment) == false && undefined !== pobjcc_WorkStuRelationEN.comment && tzDataType.isString(pobjcc_WorkStuRelationEN.comment) === false)
{
 throw new Error("(errid:Watl000417)字段[批注(comment)]的值:[$(pobjcc_WorkStuRelationEN.comment)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isMarking && undefined !== pobjcc_WorkStuRelationEN.isMarking && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isMarking) === false)
{
 throw new Error("(errid:Watl000417)字段[是否批阅(isMarking)]的值:[$(pobjcc_WorkStuRelationEN.isMarking)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markerId) == false && undefined !== pobjcc_WorkStuRelationEN.markerId && tzDataType.isString(pobjcc_WorkStuRelationEN.markerId) === false)
{
 throw new Error("(errid:Watl000417)字段[打分者(markerId)]的值:[$(pobjcc_WorkStuRelationEN.markerId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.markDate) == false && undefined !== pobjcc_WorkStuRelationEN.markDate && tzDataType.isString(pobjcc_WorkStuRelationEN.markDate) === false)
{
 throw new Error("(errid:Watl000417)字段[打分日期(markDate)]的值:[$(pobjcc_WorkStuRelationEN.markDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isSendBack && undefined !== pobjcc_WorkStuRelationEN.isSendBack && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isSendBack) === false)
{
 throw new Error("(errid:Watl000417)字段[是否退回(isSendBack)]的值:[$(pobjcc_WorkStuRelationEN.isSendBack)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isInErrorQuestion && undefined !== pobjcc_WorkStuRelationEN.isInErrorQuestion && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isInErrorQuestion) === false)
{
 throw new Error("(errid:Watl000417)字段[是否进入错题(isInErrorQuestion)]的值:[$(pobjcc_WorkStuRelationEN.isInErrorQuestion)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.workTypeId) == false && undefined !== pobjcc_WorkStuRelationEN.workTypeId && tzDataType.isString(pobjcc_WorkStuRelationEN.workTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[作业类型Id(workTypeId)]的值:[$(pobjcc_WorkStuRelationEN.workTypeId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerIP) == false && undefined !== pobjcc_WorkStuRelationEN.answerIP && tzDataType.isString(pobjcc_WorkStuRelationEN.answerIP) === false)
{
 throw new Error("(errid:Watl000417)字段[回答IP(answerIP)]的值:[$(pobjcc_WorkStuRelationEN.answerIP)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerDate) == false && undefined !== pobjcc_WorkStuRelationEN.answerDate && tzDataType.isString(pobjcc_WorkStuRelationEN.answerDate) === false)
{
 throw new Error("(errid:Watl000417)字段[回答日期(answerDate)]的值:[$(pobjcc_WorkStuRelationEN.answerDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.answerTime) == false && undefined !== pobjcc_WorkStuRelationEN.answerTime && tzDataType.isString(pobjcc_WorkStuRelationEN.answerTime) === false)
{
 throw new Error("(errid:Watl000417)字段[回答时间(answerTime)]的值:[$(pobjcc_WorkStuRelationEN.answerTime)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseExamPaperId) == false && undefined !== pobjcc_WorkStuRelationEN.courseExamPaperId && tzDataType.isString(pobjcc_WorkStuRelationEN.courseExamPaperId) === false)
{
 throw new Error("(errid:Watl000417)字段[考卷流水号(courseExamPaperId)]的值:[$(pobjcc_WorkStuRelationEN.courseExamPaperId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isRight && undefined !== pobjcc_WorkStuRelationEN.isRight && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isRight) === false)
{
 throw new Error("(errid:Watl000417)字段[是否正确(isRight)]的值:[$(pobjcc_WorkStuRelationEN.isRight)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isAccessKnowledge && undefined !== pobjcc_WorkStuRelationEN.isAccessKnowledge && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isAccessKnowledge) === false)
{
 throw new Error("(errid:Watl000417)字段[是否处理知识点(isAccessKnowledge)]的值:[$(pobjcc_WorkStuRelationEN.isAccessKnowledge)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (null != pobjcc_WorkStuRelationEN.isNotProcessTimeout && undefined !== pobjcc_WorkStuRelationEN.isNotProcessTimeout && tzDataType.isBoolean(pobjcc_WorkStuRelationEN.isNotProcessTimeout) === false)
{
 throw new Error("(errid:Watl000417)字段[是否不处理超时(isNotProcessTimeout)]的值:[$(pobjcc_WorkStuRelationEN.isNotProcessTimeout)], 非法,应该为布尔型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolYear) == false && undefined !== pobjcc_WorkStuRelationEN.schoolYear && tzDataType.isString(pobjcc_WorkStuRelationEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjcc_WorkStuRelationEN.schoolYear)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.schoolTerm) == false && undefined !== pobjcc_WorkStuRelationEN.schoolTerm && tzDataType.isString(pobjcc_WorkStuRelationEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjcc_WorkStuRelationEN.schoolTerm)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.errMsg) == false && undefined !== pobjcc_WorkStuRelationEN.errMsg && tzDataType.isString(pobjcc_WorkStuRelationEN.errMsg) === false)
{
 throw new Error("(errid:Watl000417)字段[错误信息(errMsg)]的值:[$(pobjcc_WorkStuRelationEN.errMsg)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.courseId) == false && undefined !== pobjcc_WorkStuRelationEN.courseId && tzDataType.isString(pobjcc_WorkStuRelationEN.courseId) === false)
{
 throw new Error("(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjcc_WorkStuRelationEN.courseId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updDate) == false && undefined !== pobjcc_WorkStuRelationEN.updDate && tzDataType.isString(pobjcc_WorkStuRelationEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcc_WorkStuRelationEN.updDate)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.updUserId) == false && undefined !== pobjcc_WorkStuRelationEN.updUserId && tzDataType.isString(pobjcc_WorkStuRelationEN.updUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjcc_WorkStuRelationEN.updUserId)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.memo) == false && undefined !== pobjcc_WorkStuRelationEN.memo && tzDataType.isString(pobjcc_WorkStuRelationEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjcc_WorkStuRelationEN.memo)], 非法,应该为字符型(In 作业与学生关系(cc_WorkStuRelation))!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjcc_WorkStuRelationEN.idWorkStuRelation 
 || pobjcc_WorkStuRelationEN.idWorkStuRelation != null && pobjcc_WorkStuRelationEN.idWorkStuRelation.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[流水号]不能为空(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_WorkStuRelationEN.idStudentInfo) == false && pobjcc_WorkStuRelationEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_WorkStuRelationEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000418)字段[学生流水号]作为外键字段,长度应该为8(In 作业与学生关系)!(clscc_WorkStuRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_WorkStuRelation_GetJSONStrByObj (pobjcc_WorkStuRelationEN: clscc_WorkStuRelationEN): string
{
pobjcc_WorkStuRelationEN.sfUpdFldSetStr = pobjcc_WorkStuRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_WorkStuRelationEN);
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
export  function cc_WorkStuRelation_GetObjLstByJSONStr (strJSON: string): Array<clscc_WorkStuRelationEN>
{
let arrcc_WorkStuRelationObjLst = new Array<clscc_WorkStuRelationEN>();
if (strJSON === "")
{
return arrcc_WorkStuRelationObjLst;
}
try
{
arrcc_WorkStuRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_WorkStuRelationObjLst;
}
return arrcc_WorkStuRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_WorkStuRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_WorkStuRelation_GetObjLstByJSONObjLst (arrcc_WorkStuRelationObjLstS: Array<clscc_WorkStuRelationEN>): Array<clscc_WorkStuRelationEN>
{
const arrcc_WorkStuRelationObjLst = new Array<clscc_WorkStuRelationEN>();
for (const objInFor of arrcc_WorkStuRelationObjLstS) {
const obj1 = cc_WorkStuRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_WorkStuRelationObjLst.push(obj1);
}
return arrcc_WorkStuRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_WorkStuRelation_GetObjByJSONStr (strJSON: string): clscc_WorkStuRelationEN
{
let pobjcc_WorkStuRelationEN = new clscc_WorkStuRelationEN();
if (strJSON === "")
{
return pobjcc_WorkStuRelationEN;
}
try
{
pobjcc_WorkStuRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_WorkStuRelationEN;
}
return pobjcc_WorkStuRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_WorkStuRelation_GetCombineCondition(objcc_WorkStuRelationCond: clscc_WorkStuRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IdWorkStuRelation) == true)
{
const strComparisonOpIdWorkStuRelation:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_IdWorkStuRelation];
strWhereCond += Format(" And {0} {2} {1}", clscc_WorkStuRelationEN.con_IdWorkStuRelation, objcc_WorkStuRelationCond.idWorkStuRelation, strComparisonOpIdWorkStuRelation);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_IdCurrEduCls, objcc_WorkStuRelationCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_QuestionId, objcc_WorkStuRelationCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_Scores) == true)
{
const strComparisonOpScores:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_Scores];
strWhereCond += Format(" And {0} {2} {1}", clscc_WorkStuRelationEN.con_Scores, objcc_WorkStuRelationCond.scores, strComparisonOpScores);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_SpecifyCompletionDate) == true)
{
const strComparisonOpSpecifyCompletionDate:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_SpecifyCompletionDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_SpecifyCompletionDate, objcc_WorkStuRelationCond.specifyCompletionDate, strComparisonOpSpecifyCompletionDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_IdStudentInfo, objcc_WorkStuRelationCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerModeId) == true)
{
const strComparisonOpAnswerModeId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_AnswerModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_AnswerModeId, objcc_WorkStuRelationCond.answerModeId, strComparisonOpAnswerModeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerOptionId) == true)
{
const strComparisonOpAnswerOptionId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_AnswerOptionId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_AnswerOptionId, objcc_WorkStuRelationCond.answerOptionId, strComparisonOpAnswerOptionId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerMultiOptions) == true)
{
const strComparisonOpAnswerMultiOptions:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_AnswerMultiOptions];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_AnswerMultiOptions, objcc_WorkStuRelationCond.answerMultiOptions, strComparisonOpAnswerMultiOptions);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerBoolResult) == true)
{
if (objcc_WorkStuRelationCond.answerBoolResult == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_AnswerBoolResult);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_AnswerBoolResult);
}
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsPublish) == true)
{
if (objcc_WorkStuRelationCond.isPublish == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsPublish);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsPublish);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsLook) == true)
{
if (objcc_WorkStuRelationCond.isLook == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsLook);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsLook);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsSave) == true)
{
if (objcc_WorkStuRelationCond.isSave == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsSave);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsSave);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsSubmit) == true)
{
if (objcc_WorkStuRelationCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_ApplySendBackDate) == true)
{
const strComparisonOpApplySendBackDate:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_ApplySendBackDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_ApplySendBackDate, objcc_WorkStuRelationCond.applySendBackDate, strComparisonOpApplySendBackDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsApplySendBack) == true)
{
if (objcc_WorkStuRelationCond.isApplySendBack == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsApplySendBack);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsApplySendBack);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_RealFinishDate) == true)
{
const strComparisonOpRealFinishDate:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_RealFinishDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_RealFinishDate, objcc_WorkStuRelationCond.realFinishDate, strComparisonOpRealFinishDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_OperateTime) == true)
{
const strComparisonOpOperateTime:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_OperateTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_OperateTime, objcc_WorkStuRelationCond.operateTime, strComparisonOpOperateTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_Score) == true)
{
const strComparisonOpScore:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clscc_WorkStuRelationEN.con_Score, objcc_WorkStuRelationCond.score, strComparisonOpScore);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsMarking) == true)
{
if (objcc_WorkStuRelationCond.isMarking == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsMarking);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsMarking);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_MarkerId) == true)
{
const strComparisonOpMarkerId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_MarkerId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_MarkerId, objcc_WorkStuRelationCond.markerId, strComparisonOpMarkerId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_MarkDate) == true)
{
const strComparisonOpMarkDate:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_MarkDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_MarkDate, objcc_WorkStuRelationCond.markDate, strComparisonOpMarkDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsSendBack) == true)
{
if (objcc_WorkStuRelationCond.isSendBack == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsSendBack);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsSendBack);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsInErrorQuestion) == true)
{
if (objcc_WorkStuRelationCond.isInErrorQuestion == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsInErrorQuestion);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsInErrorQuestion);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_WorkTypeId) == true)
{
const strComparisonOpWorkTypeId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_WorkTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_WorkTypeId, objcc_WorkStuRelationCond.workTypeId, strComparisonOpWorkTypeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerIP) == true)
{
const strComparisonOpAnswerIP:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_AnswerIP];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_AnswerIP, objcc_WorkStuRelationCond.answerIP, strComparisonOpAnswerIP);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerDate) == true)
{
const strComparisonOpAnswerDate:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_AnswerDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_AnswerDate, objcc_WorkStuRelationCond.answerDate, strComparisonOpAnswerDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_AnswerTime) == true)
{
const strComparisonOpAnswerTime:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_AnswerTime];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_AnswerTime, objcc_WorkStuRelationCond.answerTime, strComparisonOpAnswerTime);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_CourseExamPaperId) == true)
{
const strComparisonOpCourseExamPaperId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_CourseExamPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_CourseExamPaperId, objcc_WorkStuRelationCond.courseExamPaperId, strComparisonOpCourseExamPaperId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsRight) == true)
{
if (objcc_WorkStuRelationCond.isRight == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsRight);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsRight);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsAccessKnowledge) == true)
{
if (objcc_WorkStuRelationCond.isAccessKnowledge == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsAccessKnowledge);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsAccessKnowledge);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_IsNotProcessTimeout) == true)
{
if (objcc_WorkStuRelationCond.isNotProcessTimeout == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_WorkStuRelationEN.con_IsNotProcessTimeout);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_WorkStuRelationEN.con_IsNotProcessTimeout);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_SchoolYear, objcc_WorkStuRelationCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_SchoolTerm, objcc_WorkStuRelationCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_ErrMsg) == true)
{
const strComparisonOpErrMsg:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_ErrMsg];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_ErrMsg, objcc_WorkStuRelationCond.errMsg, strComparisonOpErrMsg);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_CourseId, objcc_WorkStuRelationCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_UpdDate, objcc_WorkStuRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_UpdUserId, objcc_WorkStuRelationCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_WorkStuRelationCond.dicFldComparisonOp, clscc_WorkStuRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_WorkStuRelationCond.dicFldComparisonOp[clscc_WorkStuRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_WorkStuRelationEN.con_Memo, objcc_WorkStuRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_WorkStuRelation(作业与学生关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strQuestionId: 题目Id(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_WorkStuRelation_GetUniCondStr(objcc_WorkStuRelationEN: clscc_WorkStuRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objcc_WorkStuRelationEN.idCurrEduCls);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objcc_WorkStuRelationEN.questionId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_WorkStuRelationEN.idStudentInfo);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_WorkStuRelation(作业与学生关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strQuestionId: 题目Id(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_WorkStuRelation_GetUniCondStr4Update(objcc_WorkStuRelationEN: clscc_WorkStuRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdWorkStuRelation <> '{0}'", objcc_WorkStuRelationEN.idWorkStuRelation);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objcc_WorkStuRelationEN.idCurrEduCls);
 strWhereCond +=  Format(" and QuestionId = '{0}'", objcc_WorkStuRelationEN.questionId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_WorkStuRelationEN.idStudentInfo);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_WorkStuRelationENS:源对象
 * @param objcc_WorkStuRelationENT:目标对象
*/
export  function cc_WorkStuRelation_CopyObjTo(objcc_WorkStuRelationENS: clscc_WorkStuRelationEN , objcc_WorkStuRelationENT: clscc_WorkStuRelationEN ): void 
{
objcc_WorkStuRelationENT.idWorkStuRelation = objcc_WorkStuRelationENS.idWorkStuRelation; //流水号
objcc_WorkStuRelationENT.idCurrEduCls = objcc_WorkStuRelationENS.idCurrEduCls; //教学班流水号
objcc_WorkStuRelationENT.questionId = objcc_WorkStuRelationENS.questionId; //题目Id
objcc_WorkStuRelationENT.scores = objcc_WorkStuRelationENS.scores; //分值
objcc_WorkStuRelationENT.specifyCompletionDate = objcc_WorkStuRelationENS.specifyCompletionDate; //指定完成日期
objcc_WorkStuRelationENT.idStudentInfo = objcc_WorkStuRelationENS.idStudentInfo; //学生流水号
objcc_WorkStuRelationENT.answerModeId = objcc_WorkStuRelationENS.answerModeId; //答案模式Id
objcc_WorkStuRelationENT.answerOptionId = objcc_WorkStuRelationENS.answerOptionId; //回答选项Id
objcc_WorkStuRelationENT.answerMultiOptions = objcc_WorkStuRelationENS.answerMultiOptions; //多选项答案
objcc_WorkStuRelationENT.answerBoolResult = objcc_WorkStuRelationENS.answerBoolResult; //答案布尔结果
objcc_WorkStuRelationENT.stuAnswerText = objcc_WorkStuRelationENS.stuAnswerText; //学生回答文本
objcc_WorkStuRelationENT.isPublish = objcc_WorkStuRelationENS.isPublish; //是否发布
objcc_WorkStuRelationENT.isLook = objcc_WorkStuRelationENS.isLook; //是否查看
objcc_WorkStuRelationENT.isSave = objcc_WorkStuRelationENS.isSave; //是否保存
objcc_WorkStuRelationENT.isSubmit = objcc_WorkStuRelationENS.isSubmit; //是否提交
objcc_WorkStuRelationENT.applySendBackDate = objcc_WorkStuRelationENS.applySendBackDate; //申请退回日期
objcc_WorkStuRelationENT.isApplySendBack = objcc_WorkStuRelationENS.isApplySendBack; //是否申请退回
objcc_WorkStuRelationENT.realFinishDate = objcc_WorkStuRelationENS.realFinishDate; //实际完成日期
objcc_WorkStuRelationENT.operateTime = objcc_WorkStuRelationENS.operateTime; //操作时间
objcc_WorkStuRelationENT.score = objcc_WorkStuRelationENS.score; //得分
objcc_WorkStuRelationENT.comment = objcc_WorkStuRelationENS.comment; //批注
objcc_WorkStuRelationENT.isMarking = objcc_WorkStuRelationENS.isMarking; //是否批阅
objcc_WorkStuRelationENT.markerId = objcc_WorkStuRelationENS.markerId; //打分者
objcc_WorkStuRelationENT.markDate = objcc_WorkStuRelationENS.markDate; //打分日期
objcc_WorkStuRelationENT.isSendBack = objcc_WorkStuRelationENS.isSendBack; //是否退回
objcc_WorkStuRelationENT.isInErrorQuestion = objcc_WorkStuRelationENS.isInErrorQuestion; //是否进入错题
objcc_WorkStuRelationENT.workTypeId = objcc_WorkStuRelationENS.workTypeId; //作业类型Id
objcc_WorkStuRelationENT.answerIP = objcc_WorkStuRelationENS.answerIP; //回答IP
objcc_WorkStuRelationENT.answerDate = objcc_WorkStuRelationENS.answerDate; //回答日期
objcc_WorkStuRelationENT.answerTime = objcc_WorkStuRelationENS.answerTime; //回答时间
objcc_WorkStuRelationENT.courseExamPaperId = objcc_WorkStuRelationENS.courseExamPaperId; //考卷流水号
objcc_WorkStuRelationENT.isRight = objcc_WorkStuRelationENS.isRight; //是否正确
objcc_WorkStuRelationENT.isAccessKnowledge = objcc_WorkStuRelationENS.isAccessKnowledge; //是否处理知识点
objcc_WorkStuRelationENT.isNotProcessTimeout = objcc_WorkStuRelationENS.isNotProcessTimeout; //是否不处理超时
objcc_WorkStuRelationENT.schoolYear = objcc_WorkStuRelationENS.schoolYear; //学年
objcc_WorkStuRelationENT.schoolTerm = objcc_WorkStuRelationENS.schoolTerm; //学期
objcc_WorkStuRelationENT.errMsg = objcc_WorkStuRelationENS.errMsg; //错误信息
objcc_WorkStuRelationENT.courseId = objcc_WorkStuRelationENS.courseId; //课程Id
objcc_WorkStuRelationENT.updDate = objcc_WorkStuRelationENS.updDate; //修改日期
objcc_WorkStuRelationENT.updUserId = objcc_WorkStuRelationENS.updUserId; //修改用户Id
objcc_WorkStuRelationENT.memo = objcc_WorkStuRelationENS.memo; //备注
objcc_WorkStuRelationENT.sfUpdFldSetStr = objcc_WorkStuRelationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_WorkStuRelationENS:源对象
 * @param objcc_WorkStuRelationENT:目标对象
*/
export  function cc_WorkStuRelation_GetObjFromJsonObj(objcc_WorkStuRelationENS: clscc_WorkStuRelationEN): clscc_WorkStuRelationEN 
{
 const objcc_WorkStuRelationENT: clscc_WorkStuRelationEN = new clscc_WorkStuRelationEN();
ObjectAssign(objcc_WorkStuRelationENT, objcc_WorkStuRelationENS);
 return objcc_WorkStuRelationENT;
}