
 /**
 * 类名:clsvRTViewpointWApi
 * 表名:vRTViewpoint(01120956)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:15
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
 * vRTViewpoint(vRTViewpoint)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvRTViewpointEN } from "@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vRTViewpoint_Controller = "vRTViewpointApi";
 export const vRTViewpoint_ConstructorName = "vRTViewpoint";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function vRTViewpoint_SplitKeyLst(strKeyLst: string)  
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
export  async function vRTViewpoint_GetObjByKeyLstAsync(strTopicId: string,lngSubViewpointId: number): Promise<clsvRTViewpointEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsvRTViewpointWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvRTViewpointWApi.GetObjByKeyLstAsync)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvRTViewpointWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const objvRTViewpoint = vRTViewpoint_GetObjFromJsonObj(returnObj);
return objvRTViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByTopicIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vRTViewpoint_SortFunDefa(a:clsvRTViewpointEN , b:clsvRTViewpointEN): number 
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
export  function vRTViewpoint_SortFunDefa2Fld(a:clsvRTViewpointEN , b:clsvRTViewpointEN): number 
{
if (a.topicName == b.topicName) return a.versionCount - b.versionCount;
else return a.topicName.localeCompare(b.topicName);
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
export  function vRTViewpoint_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvRTViewpointEN.con_TopicId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsvRTViewpointEN.con_SubViewpointId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.subViewpointId-b.subViewpointId;
}
case clsvRTViewpointEN.con_TopicName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.topicName == null) return -1;
if (b.topicName == null) return 1;
return a.topicName.localeCompare(b.topicName);
}
case clsvRTViewpointEN.con_VersionCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.versionCount-b.versionCount;
}
case clsvRTViewpointEN.con_CitationCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.citationCount-b.citationCount;
}
case clsvRTViewpointEN.con_TopicContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.topicContent == null) return -1;
if (b.topicContent == null) return 1;
return a.topicContent.localeCompare(b.topicContent);
}
case clsvRTViewpointEN.con_TopicProposePeople:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.topicProposePeople == null) return -1;
if (b.topicProposePeople == null) return 1;
return a.topicProposePeople.localeCompare(b.topicProposePeople);
}
case clsvRTViewpointEN.con_gsKnowledgeTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.gsKnowledgeTypeName.localeCompare(b.gsKnowledgeTypeName);
}
case clsvRTViewpointEN.con_LevelName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.levelName == null) return -1;
if (b.levelName == null) return 1;
return a.levelName.localeCompare(b.levelName);
}
case clsvRTViewpointEN.con_OperationTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.operationTypeName.localeCompare(b.operationTypeName);
}
case clsvRTViewpointEN.con_SubViewpointContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.subViewpointContent == null) return -1;
if (b.subViewpointContent == null) return 1;
return a.subViewpointContent.localeCompare(b.subViewpointContent);
}
case clsvRTViewpointEN.con_PaperId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvRTViewpointEN.con_PaperTitle:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvRTViewpointEN.con_IsSubmit:
return (a: clsvRTViewpointEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvRTViewpointEN.con_SectionId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvRTViewpointEN.con_SectionName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvRTViewpointEN.con_SubViewpointTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.subViewpointTypeId.localeCompare(b.subViewpointTypeId);
}
case clsvRTViewpointEN.con_SubViewpointTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.subViewpointTypeName == null) return -1;
if (b.subViewpointTypeName == null) return 1;
return a.subViewpointTypeName.localeCompare(b.subViewpointTypeName);
}
case clsvRTViewpointEN.con_ExplainTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.explainTypeId == null) return -1;
if (b.explainTypeId == null) return 1;
return a.explainTypeId.localeCompare(b.explainTypeId);
}
case clsvRTViewpointEN.con_ExplainTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.explainTypeName == null) return -1;
if (b.explainTypeName == null) return 1;
return a.explainTypeName.localeCompare(b.explainTypeName);
}
case clsvRTViewpointEN.con_ExplainContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.explainContent == null) return -1;
if (b.explainContent == null) return 1;
return a.explainContent.localeCompare(b.explainContent);
}
case clsvRTViewpointEN.con_IsPublic:
return (a: clsvRTViewpointEN) => {
if (a.isPublic == true) return 1;
else return -1
}
case clsvRTViewpointEN.con_LiteratureSourcesId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.literatureSourcesId == null) return -1;
if (b.literatureSourcesId == null) return 1;
return a.literatureSourcesId.localeCompare(b.literatureSourcesId);
}
case clsvRTViewpointEN.con_OperationTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.operationTypeId.localeCompare(b.operationTypeId);
}
case clsvRTViewpointEN.con_LevelId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsvRTViewpointEN.con_Conclusion:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.conclusion == null) return -1;
if (b.conclusion == null) return 1;
return a.conclusion.localeCompare(b.conclusion);
}
case clsvRTViewpointEN.con_Nationality:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.nationality == null) return -1;
if (b.nationality == null) return 1;
return a.nationality.localeCompare(b.nationality);
}
case clsvRTViewpointEN.con_Achievement:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.achievement == null) return -1;
if (b.achievement == null) return 1;
return a.achievement.localeCompare(b.achievement);
}
case clsvRTViewpointEN.con_Major:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.major == null) return -1;
if (b.major == null) return 1;
return a.major.localeCompare(b.major);
}
case clsvRTViewpointEN.con_WorkUnit:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.workUnit == null) return -1;
if (b.workUnit == null) return 1;
return a.workUnit.localeCompare(b.workUnit);
}
case clsvRTViewpointEN.con_PageNumber:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.pageNumber-b.pageNumber;
}
case clsvRTViewpointEN.con_PdfContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvRTViewpointEN.con_AppraiseCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvRTViewpointEN.con_OkCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.okCount-b.okCount;
}
case clsvRTViewpointEN.con_Score:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.score-b.score;
}
case clsvRTViewpointEN.con_StuScore:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.stuScore-b.stuScore;
}
case clsvRTViewpointEN.con_TeaScore:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.teaScore-b.teaScore;
}
case clsvRTViewpointEN.con_CreateDate:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvRTViewpointEN.con_ShareId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.shareId.localeCompare(b.shareId);
}
case clsvRTViewpointEN.con_SubViewpointTypeOrderNum:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.subViewpointTypeOrderNum-b.subViewpointTypeOrderNum;
}
case clsvRTViewpointEN.con_ProposePeople:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.proposePeople == null) return -1;
if (b.proposePeople == null) return 1;
return a.proposePeople.localeCompare(b.proposePeople);
}
case clsvRTViewpointEN.con_gsKnowledgeTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.gsKnowledgeTypeId == null) return -1;
if (b.gsKnowledgeTypeId == null) return 1;
return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
}
case clsvRTViewpointEN.con_ClassificationId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.classificationId-b.classificationId;
}
case clsvRTViewpointEN.con_IdCurrEduCls:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvRTViewpointEN.con_UpdDate:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvRTViewpointEN.con_UpdUser:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvRTViewpointEN.con_Memo:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvRTViewpointEN.con_ViewPointUserId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.viewPointUserId == null) return -1;
if (b.viewPointUserId == null) return 1;
return a.viewPointUserId.localeCompare(b.viewPointUserId);
}
case clsvRTViewpointEN.con_ViewPointDate:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (a.viewPointDate == null) return -1;
if (b.viewPointDate == null) return 1;
return a.viewPointDate.localeCompare(b.viewPointDate);
}
case clsvRTViewpointEN.con_IsRecommend:
return (a: clsvRTViewpointEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTViewpoint]中不存在!(in ${ vRTViewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvRTViewpointEN.con_TopicId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsvRTViewpointEN.con_SubViewpointId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.subViewpointId-a.subViewpointId;
}
case clsvRTViewpointEN.con_TopicName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.topicName == null) return -1;
if (a.topicName == null) return 1;
return b.topicName.localeCompare(a.topicName);
}
case clsvRTViewpointEN.con_VersionCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.versionCount-a.versionCount;
}
case clsvRTViewpointEN.con_CitationCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.citationCount-a.citationCount;
}
case clsvRTViewpointEN.con_TopicContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.topicContent == null) return -1;
if (a.topicContent == null) return 1;
return b.topicContent.localeCompare(a.topicContent);
}
case clsvRTViewpointEN.con_TopicProposePeople:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.topicProposePeople == null) return -1;
if (a.topicProposePeople == null) return 1;
return b.topicProposePeople.localeCompare(a.topicProposePeople);
}
case clsvRTViewpointEN.con_gsKnowledgeTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.gsKnowledgeTypeName.localeCompare(a.gsKnowledgeTypeName);
}
case clsvRTViewpointEN.con_LevelName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.levelName == null) return -1;
if (a.levelName == null) return 1;
return b.levelName.localeCompare(a.levelName);
}
case clsvRTViewpointEN.con_OperationTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.operationTypeName.localeCompare(a.operationTypeName);
}
case clsvRTViewpointEN.con_SubViewpointContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.subViewpointContent == null) return -1;
if (a.subViewpointContent == null) return 1;
return b.subViewpointContent.localeCompare(a.subViewpointContent);
}
case clsvRTViewpointEN.con_PaperId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvRTViewpointEN.con_PaperTitle:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvRTViewpointEN.con_IsSubmit:
return (b: clsvRTViewpointEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvRTViewpointEN.con_SectionId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvRTViewpointEN.con_SectionName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvRTViewpointEN.con_SubViewpointTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.subViewpointTypeId.localeCompare(a.subViewpointTypeId);
}
case clsvRTViewpointEN.con_SubViewpointTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.subViewpointTypeName == null) return -1;
if (a.subViewpointTypeName == null) return 1;
return b.subViewpointTypeName.localeCompare(a.subViewpointTypeName);
}
case clsvRTViewpointEN.con_ExplainTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.explainTypeId == null) return -1;
if (a.explainTypeId == null) return 1;
return b.explainTypeId.localeCompare(a.explainTypeId);
}
case clsvRTViewpointEN.con_ExplainTypeName:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.explainTypeName == null) return -1;
if (a.explainTypeName == null) return 1;
return b.explainTypeName.localeCompare(a.explainTypeName);
}
case clsvRTViewpointEN.con_ExplainContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.explainContent == null) return -1;
if (a.explainContent == null) return 1;
return b.explainContent.localeCompare(a.explainContent);
}
case clsvRTViewpointEN.con_IsPublic:
return (b: clsvRTViewpointEN) => {
if (b.isPublic == true) return 1;
else return -1
}
case clsvRTViewpointEN.con_LiteratureSourcesId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.literatureSourcesId == null) return -1;
if (a.literatureSourcesId == null) return 1;
return b.literatureSourcesId.localeCompare(a.literatureSourcesId);
}
case clsvRTViewpointEN.con_OperationTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.operationTypeId.localeCompare(a.operationTypeId);
}
case clsvRTViewpointEN.con_LevelId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsvRTViewpointEN.con_Conclusion:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.conclusion == null) return -1;
if (a.conclusion == null) return 1;
return b.conclusion.localeCompare(a.conclusion);
}
case clsvRTViewpointEN.con_Nationality:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.nationality == null) return -1;
if (a.nationality == null) return 1;
return b.nationality.localeCompare(a.nationality);
}
case clsvRTViewpointEN.con_Achievement:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.achievement == null) return -1;
if (a.achievement == null) return 1;
return b.achievement.localeCompare(a.achievement);
}
case clsvRTViewpointEN.con_Major:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.major == null) return -1;
if (a.major == null) return 1;
return b.major.localeCompare(a.major);
}
case clsvRTViewpointEN.con_WorkUnit:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.workUnit == null) return -1;
if (a.workUnit == null) return 1;
return b.workUnit.localeCompare(a.workUnit);
}
case clsvRTViewpointEN.con_PageNumber:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.pageNumber-a.pageNumber;
}
case clsvRTViewpointEN.con_PdfContent:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvRTViewpointEN.con_AppraiseCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvRTViewpointEN.con_OkCount:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.okCount-a.okCount;
}
case clsvRTViewpointEN.con_Score:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.score-a.score;
}
case clsvRTViewpointEN.con_StuScore:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.stuScore-a.stuScore;
}
case clsvRTViewpointEN.con_TeaScore:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.teaScore-a.teaScore;
}
case clsvRTViewpointEN.con_CreateDate:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvRTViewpointEN.con_ShareId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.shareId.localeCompare(a.shareId);
}
case clsvRTViewpointEN.con_SubViewpointTypeOrderNum:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.subViewpointTypeOrderNum-a.subViewpointTypeOrderNum;
}
case clsvRTViewpointEN.con_ProposePeople:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.proposePeople == null) return -1;
if (a.proposePeople == null) return 1;
return b.proposePeople.localeCompare(a.proposePeople);
}
case clsvRTViewpointEN.con_gsKnowledgeTypeId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.gsKnowledgeTypeId == null) return -1;
if (a.gsKnowledgeTypeId == null) return 1;
return b.gsKnowledgeTypeId.localeCompare(a.gsKnowledgeTypeId);
}
case clsvRTViewpointEN.con_ClassificationId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.classificationId-a.classificationId;
}
case clsvRTViewpointEN.con_IdCurrEduCls:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvRTViewpointEN.con_UpdDate:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvRTViewpointEN.con_UpdUser:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvRTViewpointEN.con_Memo:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvRTViewpointEN.con_ViewPointUserId:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.viewPointUserId == null) return -1;
if (a.viewPointUserId == null) return 1;
return b.viewPointUserId.localeCompare(a.viewPointUserId);
}
case clsvRTViewpointEN.con_ViewPointDate:
return (a: clsvRTViewpointEN, b: clsvRTViewpointEN) => {
if (b.viewPointDate == null) return -1;
if (a.viewPointDate == null) return 1;
return b.viewPointDate.localeCompare(a.viewPointDate);
}
case clsvRTViewpointEN.con_IsRecommend:
return (b: clsvRTViewpointEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTViewpoint]中不存在!(in ${ vRTViewpoint_ConstructorName}.${ strThisFuncName})`;
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
export  async function vRTViewpoint_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvRTViewpointEN.con_TopicId:
return (obj: clsvRTViewpointEN) => {
return obj.topicId === value;
}
case clsvRTViewpointEN.con_SubViewpointId:
return (obj: clsvRTViewpointEN) => {
return obj.subViewpointId === value;
}
case clsvRTViewpointEN.con_TopicName:
return (obj: clsvRTViewpointEN) => {
return obj.topicName === value;
}
case clsvRTViewpointEN.con_VersionCount:
return (obj: clsvRTViewpointEN) => {
return obj.versionCount === value;
}
case clsvRTViewpointEN.con_CitationCount:
return (obj: clsvRTViewpointEN) => {
return obj.citationCount === value;
}
case clsvRTViewpointEN.con_TopicContent:
return (obj: clsvRTViewpointEN) => {
return obj.topicContent === value;
}
case clsvRTViewpointEN.con_TopicProposePeople:
return (obj: clsvRTViewpointEN) => {
return obj.topicProposePeople === value;
}
case clsvRTViewpointEN.con_gsKnowledgeTypeName:
return (obj: clsvRTViewpointEN) => {
return obj.gsKnowledgeTypeName === value;
}
case clsvRTViewpointEN.con_LevelName:
return (obj: clsvRTViewpointEN) => {
return obj.levelName === value;
}
case clsvRTViewpointEN.con_OperationTypeName:
return (obj: clsvRTViewpointEN) => {
return obj.operationTypeName === value;
}
case clsvRTViewpointEN.con_SubViewpointContent:
return (obj: clsvRTViewpointEN) => {
return obj.subViewpointContent === value;
}
case clsvRTViewpointEN.con_PaperId:
return (obj: clsvRTViewpointEN) => {
return obj.paperId === value;
}
case clsvRTViewpointEN.con_PaperTitle:
return (obj: clsvRTViewpointEN) => {
return obj.paperTitle === value;
}
case clsvRTViewpointEN.con_IsSubmit:
return (obj: clsvRTViewpointEN) => {
return obj.isSubmit === value;
}
case clsvRTViewpointEN.con_SectionId:
return (obj: clsvRTViewpointEN) => {
return obj.sectionId === value;
}
case clsvRTViewpointEN.con_SectionName:
return (obj: clsvRTViewpointEN) => {
return obj.sectionName === value;
}
case clsvRTViewpointEN.con_SubViewpointTypeId:
return (obj: clsvRTViewpointEN) => {
return obj.subViewpointTypeId === value;
}
case clsvRTViewpointEN.con_SubViewpointTypeName:
return (obj: clsvRTViewpointEN) => {
return obj.subViewpointTypeName === value;
}
case clsvRTViewpointEN.con_ExplainTypeId:
return (obj: clsvRTViewpointEN) => {
return obj.explainTypeId === value;
}
case clsvRTViewpointEN.con_ExplainTypeName:
return (obj: clsvRTViewpointEN) => {
return obj.explainTypeName === value;
}
case clsvRTViewpointEN.con_ExplainContent:
return (obj: clsvRTViewpointEN) => {
return obj.explainContent === value;
}
case clsvRTViewpointEN.con_IsPublic:
return (obj: clsvRTViewpointEN) => {
return obj.isPublic === value;
}
case clsvRTViewpointEN.con_LiteratureSourcesId:
return (obj: clsvRTViewpointEN) => {
return obj.literatureSourcesId === value;
}
case clsvRTViewpointEN.con_OperationTypeId:
return (obj: clsvRTViewpointEN) => {
return obj.operationTypeId === value;
}
case clsvRTViewpointEN.con_LevelId:
return (obj: clsvRTViewpointEN) => {
return obj.levelId === value;
}
case clsvRTViewpointEN.con_Conclusion:
return (obj: clsvRTViewpointEN) => {
return obj.conclusion === value;
}
case clsvRTViewpointEN.con_Nationality:
return (obj: clsvRTViewpointEN) => {
return obj.nationality === value;
}
case clsvRTViewpointEN.con_Achievement:
return (obj: clsvRTViewpointEN) => {
return obj.achievement === value;
}
case clsvRTViewpointEN.con_Major:
return (obj: clsvRTViewpointEN) => {
return obj.major === value;
}
case clsvRTViewpointEN.con_WorkUnit:
return (obj: clsvRTViewpointEN) => {
return obj.workUnit === value;
}
case clsvRTViewpointEN.con_PageNumber:
return (obj: clsvRTViewpointEN) => {
return obj.pageNumber === value;
}
case clsvRTViewpointEN.con_PdfContent:
return (obj: clsvRTViewpointEN) => {
return obj.pdfContent === value;
}
case clsvRTViewpointEN.con_AppraiseCount:
return (obj: clsvRTViewpointEN) => {
return obj.appraiseCount === value;
}
case clsvRTViewpointEN.con_OkCount:
return (obj: clsvRTViewpointEN) => {
return obj.okCount === value;
}
case clsvRTViewpointEN.con_Score:
return (obj: clsvRTViewpointEN) => {
return obj.score === value;
}
case clsvRTViewpointEN.con_StuScore:
return (obj: clsvRTViewpointEN) => {
return obj.stuScore === value;
}
case clsvRTViewpointEN.con_TeaScore:
return (obj: clsvRTViewpointEN) => {
return obj.teaScore === value;
}
case clsvRTViewpointEN.con_CreateDate:
return (obj: clsvRTViewpointEN) => {
return obj.createDate === value;
}
case clsvRTViewpointEN.con_ShareId:
return (obj: clsvRTViewpointEN) => {
return obj.shareId === value;
}
case clsvRTViewpointEN.con_SubViewpointTypeOrderNum:
return (obj: clsvRTViewpointEN) => {
return obj.subViewpointTypeOrderNum === value;
}
case clsvRTViewpointEN.con_ProposePeople:
return (obj: clsvRTViewpointEN) => {
return obj.proposePeople === value;
}
case clsvRTViewpointEN.con_gsKnowledgeTypeId:
return (obj: clsvRTViewpointEN) => {
return obj.gsKnowledgeTypeId === value;
}
case clsvRTViewpointEN.con_ClassificationId:
return (obj: clsvRTViewpointEN) => {
return obj.classificationId === value;
}
case clsvRTViewpointEN.con_IdCurrEduCls:
return (obj: clsvRTViewpointEN) => {
return obj.idCurrEduCls === value;
}
case clsvRTViewpointEN.con_UpdDate:
return (obj: clsvRTViewpointEN) => {
return obj.updDate === value;
}
case clsvRTViewpointEN.con_UpdUser:
return (obj: clsvRTViewpointEN) => {
return obj.updUser === value;
}
case clsvRTViewpointEN.con_Memo:
return (obj: clsvRTViewpointEN) => {
return obj.memo === value;
}
case clsvRTViewpointEN.con_ViewPointUserId:
return (obj: clsvRTViewpointEN) => {
return obj.viewPointUserId === value;
}
case clsvRTViewpointEN.con_ViewPointDate:
return (obj: clsvRTViewpointEN) => {
return obj.viewPointDate === value;
}
case clsvRTViewpointEN.con_IsRecommend:
return (obj: clsvRTViewpointEN) => {
return obj.isRecommend === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTViewpoint]中不存在!(in ${ vRTViewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vRTViewpoint__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vRTViewpoint_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetFirstObjAsync(strWhereCond: string): Promise<clsvRTViewpointEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const objvRTViewpoint = vRTViewpoint_GetObjFromJsonObj(returnObj);
return objvRTViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvRTViewpointEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByTopicIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vRTViewpoint_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvRTViewpointEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvRTViewpointEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvRTViewpointEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvRTViewpointEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
 * @param strTopicId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vRTViewpoint_IsExistAsync(strTopicId: string,lngSubViewpointId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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
export  async function vRTViewpoint_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vRTViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpoint_ConstructorName, strThisFuncName);
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

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vRTViewpoint_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTViewpoint_GetJSONStrByObj (pobjvRTViewpointEN: clsvRTViewpointEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvRTViewpointEN);
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
export  function vRTViewpoint_GetObjLstByJSONStr (strJSON: string): Array<clsvRTViewpointEN>
{
let arrvRTViewpointObjLst = new Array<clsvRTViewpointEN>();
if (strJSON === "")
{
return arrvRTViewpointObjLst;
}
try
{
arrvRTViewpointObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvRTViewpointObjLst;
}
return arrvRTViewpointObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTViewpointObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vRTViewpoint_GetObjLstByJSONObjLst (arrvRTViewpointObjLstS: Array<clsvRTViewpointEN>): Array<clsvRTViewpointEN>
{
const arrvRTViewpointObjLst = new Array<clsvRTViewpointEN>();
for (const objInFor of arrvRTViewpointObjLstS) {
const obj1 = vRTViewpoint_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvRTViewpointObjLst.push(obj1);
}
return arrvRTViewpointObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTViewpoint_GetObjByJSONStr (strJSON: string): clsvRTViewpointEN
{
let pobjvRTViewpointEN = new clsvRTViewpointEN();
if (strJSON === "")
{
return pobjvRTViewpointEN;
}
try
{
pobjvRTViewpointEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvRTViewpointEN;
}
return pobjvRTViewpointEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vRTViewpoint_GetCombineCondition(objvRTViewpointCond: clsvRTViewpointEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_TopicId, objvRTViewpointCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SubViewpointId) == true)
{
const strComparisonOpSubViewpointId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SubViewpointId];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_SubViewpointId, objvRTViewpointCond.subViewpointId, strComparisonOpSubViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_TopicName) == true)
{
const strComparisonOpTopicName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_TopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_TopicName, objvRTViewpointCond.topicName, strComparisonOpTopicName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_VersionCount, objvRTViewpointCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_CitationCount, objvRTViewpointCond.citationCount, strComparisonOpCitationCount);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_TopicProposePeople) == true)
{
const strComparisonOpTopicProposePeople:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_TopicProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_TopicProposePeople, objvRTViewpointCond.topicProposePeople, strComparisonOpTopicProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_gsKnowledgeTypeName) == true)
{
const strComparisonOpgsKnowledgeTypeName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_gsKnowledgeTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_gsKnowledgeTypeName, objvRTViewpointCond.gsKnowledgeTypeName, strComparisonOpgsKnowledgeTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_LevelName) == true)
{
const strComparisonOpLevelName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_LevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_LevelName, objvRTViewpointCond.levelName, strComparisonOpLevelName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_OperationTypeName) == true)
{
const strComparisonOpOperationTypeName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_OperationTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_OperationTypeName, objvRTViewpointCond.operationTypeName, strComparisonOpOperationTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SubViewpointContent) == true)
{
const strComparisonOpSubViewpointContent:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SubViewpointContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_SubViewpointContent, objvRTViewpointCond.subViewpointContent, strComparisonOpSubViewpointContent);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_PaperId, objvRTViewpointCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_PaperTitle, objvRTViewpointCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_IsSubmit) == true)
{
if (objvRTViewpointCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTViewpointEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTViewpointEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_SectionId, objvRTViewpointCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_SectionName, objvRTViewpointCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SubViewpointTypeId) == true)
{
const strComparisonOpSubViewpointTypeId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SubViewpointTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_SubViewpointTypeId, objvRTViewpointCond.subViewpointTypeId, strComparisonOpSubViewpointTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SubViewpointTypeName) == true)
{
const strComparisonOpSubViewpointTypeName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SubViewpointTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_SubViewpointTypeName, objvRTViewpointCond.subViewpointTypeName, strComparisonOpSubViewpointTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ExplainTypeId) == true)
{
const strComparisonOpExplainTypeId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ExplainTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ExplainTypeId, objvRTViewpointCond.explainTypeId, strComparisonOpExplainTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ExplainTypeName) == true)
{
const strComparisonOpExplainTypeName:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ExplainTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ExplainTypeName, objvRTViewpointCond.explainTypeName, strComparisonOpExplainTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ExplainContent) == true)
{
const strComparisonOpExplainContent:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ExplainContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ExplainContent, objvRTViewpointCond.explainContent, strComparisonOpExplainContent);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_IsPublic) == true)
{
if (objvRTViewpointCond.isPublic == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTViewpointEN.con_IsPublic);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTViewpointEN.con_IsPublic);
}
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_LiteratureSourcesId) == true)
{
const strComparisonOpLiteratureSourcesId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_LiteratureSourcesId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_LiteratureSourcesId, objvRTViewpointCond.literatureSourcesId, strComparisonOpLiteratureSourcesId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_OperationTypeId) == true)
{
const strComparisonOpOperationTypeId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_OperationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_OperationTypeId, objvRTViewpointCond.operationTypeId, strComparisonOpOperationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_LevelId, objvRTViewpointCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_Conclusion) == true)
{
const strComparisonOpConclusion:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_Conclusion];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_Conclusion, objvRTViewpointCond.conclusion, strComparisonOpConclusion);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_Nationality) == true)
{
const strComparisonOpNationality:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_Nationality];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_Nationality, objvRTViewpointCond.nationality, strComparisonOpNationality);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_Achievement) == true)
{
const strComparisonOpAchievement:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_Achievement];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_Achievement, objvRTViewpointCond.achievement, strComparisonOpAchievement);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_Major) == true)
{
const strComparisonOpMajor:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_Major];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_Major, objvRTViewpointCond.major, strComparisonOpMajor);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_WorkUnit) == true)
{
const strComparisonOpWorkUnit:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_WorkUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_WorkUnit, objvRTViewpointCond.workUnit, strComparisonOpWorkUnit);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_PageNumber) == true)
{
const strComparisonOpPageNumber:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_PageNumber];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_PageNumber, objvRTViewpointCond.pageNumber, strComparisonOpPageNumber);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_PdfContent, objvRTViewpointCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_AppraiseCount, objvRTViewpointCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_OkCount, objvRTViewpointCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_Score) == true)
{
const strComparisonOpScore:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_Score, objvRTViewpointCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_StuScore, objvRTViewpointCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_TeaScore, objvRTViewpointCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_CreateDate, objvRTViewpointCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ShareId, objvRTViewpointCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_SubViewpointTypeOrderNum) == true)
{
const strComparisonOpSubViewpointTypeOrderNum:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_SubViewpointTypeOrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_SubViewpointTypeOrderNum, objvRTViewpointCond.subViewpointTypeOrderNum, strComparisonOpSubViewpointTypeOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ProposePeople) == true)
{
const strComparisonOpProposePeople:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ProposePeople, objvRTViewpointCond.proposePeople, strComparisonOpProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_gsKnowledgeTypeId) == true)
{
const strComparisonOpgsKnowledgeTypeId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_gsKnowledgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_gsKnowledgeTypeId, objvRTViewpointCond.gsKnowledgeTypeId, strComparisonOpgsKnowledgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointEN.con_ClassificationId, objvRTViewpointCond.classificationId, strComparisonOpClassificationId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_IdCurrEduCls, objvRTViewpointCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_UpdDate, objvRTViewpointCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_UpdUser, objvRTViewpointCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_Memo, objvRTViewpointCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ViewPointUserId) == true)
{
const strComparisonOpViewPointUserId:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ViewPointUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ViewPointUserId, objvRTViewpointCond.viewPointUserId, strComparisonOpViewPointUserId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_ViewPointDate) == true)
{
const strComparisonOpViewPointDate:string = objvRTViewpointCond.dicFldComparisonOp[clsvRTViewpointEN.con_ViewPointDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointEN.con_ViewPointDate, objvRTViewpointCond.viewPointDate, strComparisonOpViewPointDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointCond.dicFldComparisonOp, clsvRTViewpointEN.con_IsRecommend) == true)
{
if (objvRTViewpointCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTViewpointEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTViewpointEN.con_IsRecommend);
}
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTViewpointENS:源对象
 * @param objvRTViewpointENT:目标对象
*/
export  function vRTViewpoint_CopyObjTo(objvRTViewpointENS: clsvRTViewpointEN , objvRTViewpointENT: clsvRTViewpointEN ): void 
{
objvRTViewpointENT.topicId = objvRTViewpointENS.topicId; //主题Id
objvRTViewpointENT.subViewpointId = objvRTViewpointENS.subViewpointId; //子观点Id
objvRTViewpointENT.topicName = objvRTViewpointENS.topicName; //栏目主题
objvRTViewpointENT.versionCount = objvRTViewpointENS.versionCount; //版本统计
objvRTViewpointENT.citationCount = objvRTViewpointENS.citationCount; //引用统计
objvRTViewpointENT.topicContent = objvRTViewpointENS.topicContent; //主题内容
objvRTViewpointENT.topicProposePeople = objvRTViewpointENS.topicProposePeople; //主题提出人
objvRTViewpointENT.gsKnowledgeTypeName = objvRTViewpointENS.gsKnowledgeTypeName; //知识类型名
objvRTViewpointENT.levelName = objvRTViewpointENS.levelName; //级别名称
objvRTViewpointENT.operationTypeName = objvRTViewpointENS.operationTypeName; //操作类型名
objvRTViewpointENT.subViewpointContent = objvRTViewpointENS.subViewpointContent; //详情内容
objvRTViewpointENT.paperId = objvRTViewpointENS.paperId; //论文Id
objvRTViewpointENT.paperTitle = objvRTViewpointENS.paperTitle; //论文标题
objvRTViewpointENT.isSubmit = objvRTViewpointENS.isSubmit; //是否提交
objvRTViewpointENT.sectionId = objvRTViewpointENS.sectionId; //节Id
objvRTViewpointENT.sectionName = objvRTViewpointENS.sectionName; //节名
objvRTViewpointENT.subViewpointTypeId = objvRTViewpointENS.subViewpointTypeId; //类型Id
objvRTViewpointENT.subViewpointTypeName = objvRTViewpointENS.subViewpointTypeName; //类型名称
objvRTViewpointENT.explainTypeId = objvRTViewpointENS.explainTypeId; //说明类型Id
objvRTViewpointENT.explainTypeName = objvRTViewpointENS.explainTypeName; //说明类型名
objvRTViewpointENT.explainContent = objvRTViewpointENS.explainContent; //说明内容
objvRTViewpointENT.isPublic = objvRTViewpointENS.isPublic; //是否公开
objvRTViewpointENT.literatureSourcesId = objvRTViewpointENS.literatureSourcesId; //文献来源
objvRTViewpointENT.operationTypeId = objvRTViewpointENS.operationTypeId; //操作类型ID
objvRTViewpointENT.levelId = objvRTViewpointENS.levelId; //级别Id
objvRTViewpointENT.conclusion = objvRTViewpointENS.conclusion; //结论
objvRTViewpointENT.nationality = objvRTViewpointENS.nationality; //国籍
objvRTViewpointENT.achievement = objvRTViewpointENS.achievement; //成就
objvRTViewpointENT.major = objvRTViewpointENS.major; //专业
objvRTViewpointENT.workUnit = objvRTViewpointENS.workUnit; //工作单位
objvRTViewpointENT.pageNumber = objvRTViewpointENS.pageNumber; //页码
objvRTViewpointENT.pdfContent = objvRTViewpointENS.pdfContent; //Pdf内容
objvRTViewpointENT.appraiseCount = objvRTViewpointENS.appraiseCount; //评论数
objvRTViewpointENT.okCount = objvRTViewpointENS.okCount; //点赞统计
objvRTViewpointENT.score = objvRTViewpointENS.score; //评分
objvRTViewpointENT.stuScore = objvRTViewpointENS.stuScore; //学生平均分
objvRTViewpointENT.teaScore = objvRTViewpointENS.teaScore; //教师评分
objvRTViewpointENT.createDate = objvRTViewpointENS.createDate; //建立日期
objvRTViewpointENT.shareId = objvRTViewpointENS.shareId; //分享Id
objvRTViewpointENT.subViewpointTypeOrderNum = objvRTViewpointENS.subViewpointTypeOrderNum; //子观点类型序号
objvRTViewpointENT.proposePeople = objvRTViewpointENS.proposePeople; //提出人
objvRTViewpointENT.gsKnowledgeTypeId = objvRTViewpointENS.gsKnowledgeTypeId; //知识类型Id
objvRTViewpointENT.classificationId = objvRTViewpointENS.classificationId; //分类Id
objvRTViewpointENT.idCurrEduCls = objvRTViewpointENS.idCurrEduCls; //教学班流水号
objvRTViewpointENT.updDate = objvRTViewpointENS.updDate; //修改日期
objvRTViewpointENT.updUser = objvRTViewpointENS.updUser; //修改人
objvRTViewpointENT.memo = objvRTViewpointENS.memo; //备注
objvRTViewpointENT.viewPointUserId = objvRTViewpointENS.viewPointUserId; //观点用户Id
objvRTViewpointENT.viewPointDate = objvRTViewpointENS.viewPointDate; //观点日期
objvRTViewpointENT.isRecommend = objvRTViewpointENS.isRecommend; //是否推荐
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTViewpointENS:源对象
 * @param objvRTViewpointENT:目标对象
*/
export  function vRTViewpoint_GetObjFromJsonObj(objvRTViewpointENS: clsvRTViewpointEN): clsvRTViewpointEN 
{
 const objvRTViewpointENT: clsvRTViewpointEN = new clsvRTViewpointEN();
ObjectAssign(objvRTViewpointENT, objvRTViewpointENS);
 return objvRTViewpointENT;
}