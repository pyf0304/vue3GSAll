
 /**
 * 类名:clsPaperWApi
 * 表名:Paper(01120535)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 01:34:39
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文表(Paper)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月26日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPaperEN } from "@/ts/L0Entity/GradEduPaper/clsPaperEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const paper_Controller = "PaperApi";
 export const paper_ConstructorName = "paper";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperId:关键字
 * @returns 对象
 **/
export  async function Paper_GetObjByPaperIdAsync(strPaperId: string): Promise<clsPaperEN|null>  
{
const strThisFuncName = "GetObjByPaperIdAsync";

if (IsNullOrEmpty(strPaperId) == true)
{
  const strMsg = Format("参数:[strPaperId]不能为空!(In clsPaperWApi.GetObjByPaperIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPaperId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPaperId]的长度:[{0}]不正确!(clsPaperWApi.GetObjByPaperIdAsync)", strPaperId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPaperId";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPaperId,
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
const objPaper = Paper_GetObjFromJsonObj(returnObj);
return objPaper;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPaperIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Paper_SortFunDefa(a:clsPaperEN , b:clsPaperEN): number 
{
return a.paperId.localeCompare(b.paperId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Paper_SortFunDefa2Fld(a:clsPaperEN , b:clsPaperEN): number 
{
if (a.paperTitle == b.paperTitle) return a.paperContent.localeCompare(b.paperContent);
else return a.paperTitle.localeCompare(b.paperTitle);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Paper_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsPaperEN.con_PaperId:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.paperId.localeCompare(b.paperId);
}
case clsPaperEN.con_PaperTitle:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsPaperEN.con_PaperContent:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.paperContent == null) return -1;
if (b.paperContent == null) return 1;
return a.paperContent.localeCompare(b.paperContent);
}
case clsPaperEN.con_Periodical:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.periodical == null) return -1;
if (b.periodical == null) return 1;
return a.periodical.localeCompare(b.periodical);
}
case clsPaperEN.con_Author:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.author == null) return -1;
if (b.author == null) return 1;
return a.author.localeCompare(b.author);
}
case clsPaperEN.con_ResearchQuestion:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.researchQuestion == null) return -1;
if (b.researchQuestion == null) return 1;
return a.researchQuestion.localeCompare(b.researchQuestion);
}
case clsPaperEN.con_Keyword:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsPaperEN.con_LiteratureSources:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.literatureSources == null) return -1;
if (b.literatureSources == null) return 1;
return a.literatureSources.localeCompare(b.literatureSources);
}
case clsPaperEN.con_LiteratureLink:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.literatureLink == null) return -1;
if (b.literatureLink == null) return 1;
return a.literatureLink.localeCompare(b.literatureLink);
}
case clsPaperEN.con_UploadfileUrl:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.uploadfileUrl == null) return -1;
if (b.uploadfileUrl == null) return 1;
return a.uploadfileUrl.localeCompare(b.uploadfileUrl);
}
case clsPaperEN.con_IsQuotethesis:
return (a: clsPaperEN) => {
if (a.isQuotethesis == true) return 1;
else return -1
}
case clsPaperEN.con_QuoteId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.quoteId == null) return -1;
if (b.quoteId == null) return 1;
return a.quoteId.localeCompare(b.quoteId);
}
case clsPaperEN.con_IsChecked:
return (a: clsPaperEN) => {
if (a.isChecked == true) return 1;
else return -1
}
case clsPaperEN.con_Checker:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.checker == null) return -1;
if (b.checker == null) return 1;
return a.checker.localeCompare(b.checker);
}
case clsPaperEN.con_LiteratureTypeId:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.literatureTypeId.localeCompare(b.literatureTypeId);
}
case clsPaperEN.con_BrowseNumber:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.browseNumber-b.browseNumber;
}
case clsPaperEN.con_IsSubmit:
return (a: clsPaperEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsPaperEN.con_AppraiseCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsPaperEN.con_AttachmentCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.attachmentCount-b.attachmentCount;
}
case clsPaperEN.con_CollectionCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.collectionCount-b.collectionCount;
}
case clsPaperEN.con_DownloadCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.downloadCount-b.downloadCount;
}
case clsPaperEN.con_OkCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.okCount-b.okCount;
}
case clsPaperEN.con_Pcount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.pcount-b.pcount;
}
case clsPaperEN.con_Score:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.score-b.score;
}
case clsPaperEN.con_StuScore:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.stuScore-b.stuScore;
}
case clsPaperEN.con_TeaScore:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.teaScore-b.teaScore;
}
case clsPaperEN.con_PaperTypeId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.paperTypeId == null) return -1;
if (b.paperTypeId == null) return 1;
return a.paperTypeId.localeCompare(b.paperTypeId);
}
case clsPaperEN.con_PaperStatusId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.paperStatusId == null) return -1;
if (b.paperStatusId == null) return 1;
return a.paperStatusId.localeCompare(b.paperStatusId);
}
case clsPaperEN.con_VersionCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.versionCount-b.versionCount;
}
case clsPaperEN.con_IsPublic:
return (a: clsPaperEN) => {
if (a.isPublic == true) return 1;
else return -1
}
case clsPaperEN.con_AskQuestion:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.askQuestion == null) return -1;
if (b.askQuestion == null) return 1;
return a.askQuestion.localeCompare(b.askQuestion);
}
case clsPaperEN.con_ResearchStatus:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.researchStatus == null) return -1;
if (b.researchStatus == null) return 1;
return a.researchStatus.localeCompare(b.researchStatus);
}
case clsPaperEN.con_InnovationPoints:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.innovationPoints == null) return -1;
if (b.innovationPoints == null) return 1;
return a.innovationPoints.localeCompare(b.innovationPoints);
}
case clsPaperEN.con_ResearchDesign:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.researchDesign == null) return -1;
if (b.researchDesign == null) return 1;
return a.researchDesign.localeCompare(b.researchDesign);
}
case clsPaperEN.con_DimensionDataProcess:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.dimensionDataProcess == null) return -1;
if (b.dimensionDataProcess == null) return 1;
return a.dimensionDataProcess.localeCompare(b.dimensionDataProcess);
}
case clsPaperEN.con_ExpectedConclusion:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.expectedConclusion == null) return -1;
if (b.expectedConclusion == null) return 1;
return a.expectedConclusion.localeCompare(b.expectedConclusion);
}
case clsPaperEN.con_ShareId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsPaperEN.con_PaperQCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.paperQCount-b.paperQCount;
}
case clsPaperEN.con_SubVCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.subVCount-b.subVCount;
}
case clsPaperEN.con_TagsCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.tagsCount-b.tagsCount;
}
case clsPaperEN.con_TeaQCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return a.teaQCount-b.teaQCount;
}
case clsPaperEN.con_IdStudyLevel:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.idStudyLevel == null) return -1;
if (b.idStudyLevel == null) return 1;
return a.idStudyLevel.localeCompare(b.idStudyLevel);
}
case clsPaperEN.con_IdGrade:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.idGrade == null) return -1;
if (b.idGrade == null) return 1;
return a.idGrade.localeCompare(b.idGrade);
}
case clsPaperEN.con_CreateDate:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsPaperEN.con_UpdUser:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsPaperEN.con_UpdDate:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsPaperEN.con_Memo:
return (a: clsPaperEN, b: clsPaperEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Paper]中不存在!(in ${ paper_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsPaperEN.con_PaperId:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.paperId.localeCompare(a.paperId);
}
case clsPaperEN.con_PaperTitle:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsPaperEN.con_PaperContent:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.paperContent == null) return -1;
if (a.paperContent == null) return 1;
return b.paperContent.localeCompare(a.paperContent);
}
case clsPaperEN.con_Periodical:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.periodical == null) return -1;
if (a.periodical == null) return 1;
return b.periodical.localeCompare(a.periodical);
}
case clsPaperEN.con_Author:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.author == null) return -1;
if (a.author == null) return 1;
return b.author.localeCompare(a.author);
}
case clsPaperEN.con_ResearchQuestion:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.researchQuestion == null) return -1;
if (a.researchQuestion == null) return 1;
return b.researchQuestion.localeCompare(a.researchQuestion);
}
case clsPaperEN.con_Keyword:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsPaperEN.con_LiteratureSources:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.literatureSources == null) return -1;
if (a.literatureSources == null) return 1;
return b.literatureSources.localeCompare(a.literatureSources);
}
case clsPaperEN.con_LiteratureLink:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.literatureLink == null) return -1;
if (a.literatureLink == null) return 1;
return b.literatureLink.localeCompare(a.literatureLink);
}
case clsPaperEN.con_UploadfileUrl:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.uploadfileUrl == null) return -1;
if (a.uploadfileUrl == null) return 1;
return b.uploadfileUrl.localeCompare(a.uploadfileUrl);
}
case clsPaperEN.con_IsQuotethesis:
return (b: clsPaperEN) => {
if (b.isQuotethesis == true) return 1;
else return -1
}
case clsPaperEN.con_QuoteId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.quoteId == null) return -1;
if (a.quoteId == null) return 1;
return b.quoteId.localeCompare(a.quoteId);
}
case clsPaperEN.con_IsChecked:
return (b: clsPaperEN) => {
if (b.isChecked == true) return 1;
else return -1
}
case clsPaperEN.con_Checker:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.checker == null) return -1;
if (a.checker == null) return 1;
return b.checker.localeCompare(a.checker);
}
case clsPaperEN.con_LiteratureTypeId:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.literatureTypeId.localeCompare(a.literatureTypeId);
}
case clsPaperEN.con_BrowseNumber:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.browseNumber-a.browseNumber;
}
case clsPaperEN.con_IsSubmit:
return (b: clsPaperEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsPaperEN.con_AppraiseCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsPaperEN.con_AttachmentCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.attachmentCount-a.attachmentCount;
}
case clsPaperEN.con_CollectionCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.collectionCount-a.collectionCount;
}
case clsPaperEN.con_DownloadCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.downloadCount-a.downloadCount;
}
case clsPaperEN.con_OkCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.okCount-a.okCount;
}
case clsPaperEN.con_Pcount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.pcount-a.pcount;
}
case clsPaperEN.con_Score:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.score-a.score;
}
case clsPaperEN.con_StuScore:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.stuScore-a.stuScore;
}
case clsPaperEN.con_TeaScore:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.teaScore-a.teaScore;
}
case clsPaperEN.con_PaperTypeId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.paperTypeId == null) return -1;
if (a.paperTypeId == null) return 1;
return b.paperTypeId.localeCompare(a.paperTypeId);
}
case clsPaperEN.con_PaperStatusId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.paperStatusId == null) return -1;
if (a.paperStatusId == null) return 1;
return b.paperStatusId.localeCompare(a.paperStatusId);
}
case clsPaperEN.con_VersionCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.versionCount-a.versionCount;
}
case clsPaperEN.con_IsPublic:
return (b: clsPaperEN) => {
if (b.isPublic == true) return 1;
else return -1
}
case clsPaperEN.con_AskQuestion:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.askQuestion == null) return -1;
if (a.askQuestion == null) return 1;
return b.askQuestion.localeCompare(a.askQuestion);
}
case clsPaperEN.con_ResearchStatus:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.researchStatus == null) return -1;
if (a.researchStatus == null) return 1;
return b.researchStatus.localeCompare(a.researchStatus);
}
case clsPaperEN.con_InnovationPoints:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.innovationPoints == null) return -1;
if (a.innovationPoints == null) return 1;
return b.innovationPoints.localeCompare(a.innovationPoints);
}
case clsPaperEN.con_ResearchDesign:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.researchDesign == null) return -1;
if (a.researchDesign == null) return 1;
return b.researchDesign.localeCompare(a.researchDesign);
}
case clsPaperEN.con_DimensionDataProcess:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.dimensionDataProcess == null) return -1;
if (a.dimensionDataProcess == null) return 1;
return b.dimensionDataProcess.localeCompare(a.dimensionDataProcess);
}
case clsPaperEN.con_ExpectedConclusion:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.expectedConclusion == null) return -1;
if (a.expectedConclusion == null) return 1;
return b.expectedConclusion.localeCompare(a.expectedConclusion);
}
case clsPaperEN.con_ShareId:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsPaperEN.con_PaperQCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.paperQCount-a.paperQCount;
}
case clsPaperEN.con_SubVCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.subVCount-a.subVCount;
}
case clsPaperEN.con_TagsCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.tagsCount-a.tagsCount;
}
case clsPaperEN.con_TeaQCount:
return (a: clsPaperEN, b: clsPaperEN) => {
return b.teaQCount-a.teaQCount;
}
case clsPaperEN.con_IdStudyLevel:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.idStudyLevel == null) return -1;
if (a.idStudyLevel == null) return 1;
return b.idStudyLevel.localeCompare(a.idStudyLevel);
}
case clsPaperEN.con_IdGrade:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.idGrade == null) return -1;
if (a.idGrade == null) return 1;
return b.idGrade.localeCompare(a.idGrade);
}
case clsPaperEN.con_CreateDate:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsPaperEN.con_UpdUser:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsPaperEN.con_UpdDate:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsPaperEN.con_Memo:
return (a: clsPaperEN, b: clsPaperEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Paper]中不存在!(in ${ paper_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function Paper_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsPaperEN.con_PaperId:
return (obj: clsPaperEN) => {
return obj.paperId === value;
}
case clsPaperEN.con_PaperTitle:
return (obj: clsPaperEN) => {
return obj.paperTitle === value;
}
case clsPaperEN.con_PaperContent:
return (obj: clsPaperEN) => {
return obj.paperContent === value;
}
case clsPaperEN.con_Periodical:
return (obj: clsPaperEN) => {
return obj.periodical === value;
}
case clsPaperEN.con_Author:
return (obj: clsPaperEN) => {
return obj.author === value;
}
case clsPaperEN.con_ResearchQuestion:
return (obj: clsPaperEN) => {
return obj.researchQuestion === value;
}
case clsPaperEN.con_Keyword:
return (obj: clsPaperEN) => {
return obj.keyword === value;
}
case clsPaperEN.con_LiteratureSources:
return (obj: clsPaperEN) => {
return obj.literatureSources === value;
}
case clsPaperEN.con_LiteratureLink:
return (obj: clsPaperEN) => {
return obj.literatureLink === value;
}
case clsPaperEN.con_UploadfileUrl:
return (obj: clsPaperEN) => {
return obj.uploadfileUrl === value;
}
case clsPaperEN.con_IsQuotethesis:
return (obj: clsPaperEN) => {
return obj.isQuotethesis === value;
}
case clsPaperEN.con_QuoteId:
return (obj: clsPaperEN) => {
return obj.quoteId === value;
}
case clsPaperEN.con_IsChecked:
return (obj: clsPaperEN) => {
return obj.isChecked === value;
}
case clsPaperEN.con_Checker:
return (obj: clsPaperEN) => {
return obj.checker === value;
}
case clsPaperEN.con_LiteratureTypeId:
return (obj: clsPaperEN) => {
return obj.literatureTypeId === value;
}
case clsPaperEN.con_BrowseNumber:
return (obj: clsPaperEN) => {
return obj.browseNumber === value;
}
case clsPaperEN.con_IsSubmit:
return (obj: clsPaperEN) => {
return obj.isSubmit === value;
}
case clsPaperEN.con_AppraiseCount:
return (obj: clsPaperEN) => {
return obj.appraiseCount === value;
}
case clsPaperEN.con_AttachmentCount:
return (obj: clsPaperEN) => {
return obj.attachmentCount === value;
}
case clsPaperEN.con_CollectionCount:
return (obj: clsPaperEN) => {
return obj.collectionCount === value;
}
case clsPaperEN.con_DownloadCount:
return (obj: clsPaperEN) => {
return obj.downloadCount === value;
}
case clsPaperEN.con_OkCount:
return (obj: clsPaperEN) => {
return obj.okCount === value;
}
case clsPaperEN.con_Pcount:
return (obj: clsPaperEN) => {
return obj.pcount === value;
}
case clsPaperEN.con_Score:
return (obj: clsPaperEN) => {
return obj.score === value;
}
case clsPaperEN.con_StuScore:
return (obj: clsPaperEN) => {
return obj.stuScore === value;
}
case clsPaperEN.con_TeaScore:
return (obj: clsPaperEN) => {
return obj.teaScore === value;
}
case clsPaperEN.con_PaperTypeId:
return (obj: clsPaperEN) => {
return obj.paperTypeId === value;
}
case clsPaperEN.con_PaperStatusId:
return (obj: clsPaperEN) => {
return obj.paperStatusId === value;
}
case clsPaperEN.con_VersionCount:
return (obj: clsPaperEN) => {
return obj.versionCount === value;
}
case clsPaperEN.con_IsPublic:
return (obj: clsPaperEN) => {
return obj.isPublic === value;
}
case clsPaperEN.con_AskQuestion:
return (obj: clsPaperEN) => {
return obj.askQuestion === value;
}
case clsPaperEN.con_ResearchStatus:
return (obj: clsPaperEN) => {
return obj.researchStatus === value;
}
case clsPaperEN.con_InnovationPoints:
return (obj: clsPaperEN) => {
return obj.innovationPoints === value;
}
case clsPaperEN.con_ResearchDesign:
return (obj: clsPaperEN) => {
return obj.researchDesign === value;
}
case clsPaperEN.con_DimensionDataProcess:
return (obj: clsPaperEN) => {
return obj.dimensionDataProcess === value;
}
case clsPaperEN.con_ExpectedConclusion:
return (obj: clsPaperEN) => {
return obj.expectedConclusion === value;
}
case clsPaperEN.con_ShareId:
return (obj: clsPaperEN) => {
return obj.shareId === value;
}
case clsPaperEN.con_PaperQCount:
return (obj: clsPaperEN) => {
return obj.paperQCount === value;
}
case clsPaperEN.con_SubVCount:
return (obj: clsPaperEN) => {
return obj.subVCount === value;
}
case clsPaperEN.con_TagsCount:
return (obj: clsPaperEN) => {
return obj.tagsCount === value;
}
case clsPaperEN.con_TeaQCount:
return (obj: clsPaperEN) => {
return obj.teaQCount === value;
}
case clsPaperEN.con_IdStudyLevel:
return (obj: clsPaperEN) => {
return obj.idStudyLevel === value;
}
case clsPaperEN.con_IdGrade:
return (obj: clsPaperEN) => {
return obj.idGrade === value;
}
case clsPaperEN.con_CreateDate:
return (obj: clsPaperEN) => {
return obj.createDate === value;
}
case clsPaperEN.con_UpdUser:
return (obj: clsPaperEN) => {
return obj.updUser === value;
}
case clsPaperEN.con_UpdDate:
return (obj: clsPaperEN) => {
return obj.updDate === value;
}
case clsPaperEN.con_Memo:
return (obj: clsPaperEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Paper]中不存在!(in ${ paper_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[Paper__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Paper_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetFirstObjAsync(strWhereCond: string): Promise<clsPaperEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const objPaper = Paper_GetObjFromJsonObj(returnObj);
return objPaper;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetObjLstAsync(strWhereCond: string): Promise<Array<clsPaperEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param arrPaperId:关键字列表
 * @returns 对象列表
 **/
export  async function Paper_GetObjLstByPaperIdLstAsync(arrPaperId: Array<string>): Promise<Array<clsPaperEN>>  
{
const strThisFuncName = "GetObjLstByPaperIdLstAsync";
const strAction = "GetObjLstByPaperIdLst";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPaperIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function Paper_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsPaperEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsPaperEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsPaperEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsPaperEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", paper_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Paper_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param strPaperId:关键字
 * @returns 获取删除的结果
 **/
export  async function Paper_DelRecordAsync(strPaperId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(paper_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strPaperId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param arrPaperId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Paper_DelPapersAsync(arrPaperId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelPapersAsync";
const strAction = "DelPapers";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_DelPapersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelPapersByCondAsync";
const strAction = "DelPapersByCond";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param objPaperEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Paper_AddNewRecordAsync(objPaperEN: clsPaperEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objPaperEN);
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param objPaperEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Paper_AddNewRecordWithMaxIdAsync(objPaperEN: clsPaperEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param objPaperEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Paper_AddNewRecordWithReturnKeyAsync(objPaperEN: clsPaperEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param objPaperEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Paper_UpdateRecordAsync(objPaperEN: clsPaperEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objPaperEN.sfUpdFldSetStr === undefined || objPaperEN.sfUpdFldSetStr === null || objPaperEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objPaperEN.paperId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param objPaperEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Paper_UpdateWithConditionAsync(objPaperEN: clsPaperEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objPaperEN.sfUpdFldSetStr === undefined || objPaperEN.sfUpdFldSetStr === null || objPaperEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objPaperEN.paperId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(paper_Controller, strAction);
objPaperEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPaperEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * @param strPaperId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Paper_IsExistAsync(strPaperId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPaperId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function Paper_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  async function Paper_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(paper_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, paper_ConstructorName, strThisFuncName);
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
export  function Paper_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function Paper_BindDdl_PaperIdByIdCurrEduClsInDiv(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsPaperWApi.BindDdl_PaperIdByIdCurrEduClsInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsPaperWApi.BindDdl_PaperIdByIdCurrEduClsInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_PaperIdByIdCurrEduClsInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_PaperIdByIdCurrEduClsInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await Paper_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsPaperEN.con_PaperId, clsPaperEN.con_PaperTitle, "论文表");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Paper_CheckPropertyNew(pobjPaperEN: clsPaperEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjPaperEN.paperTitle) === true )
{
 throw new Error(`(errid:Watl000411)字段[论文标题]不能为空(In 论文表)!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[文献类型Id]不能为空(In 论文表)!(clsPaperBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjPaperEN.paperId) == false && GetStrLen(pobjPaperEN.paperId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文表(Paper))!值:${pobjPaperEN.paperId}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTitle) == false && GetStrLen(pobjPaperEN.paperTitle) > 500)
{
 throw new Error(`(errid:Watl000413)字段[论文标题(paperTitle)]的长度不能超过500(In 论文表(Paper))!值:${pobjPaperEN.paperTitle}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.periodical) == false && GetStrLen(pobjPaperEN.periodical) > 100)
{
 throw new Error(`(errid:Watl000413)字段[期刊(periodical)]的长度不能超过100(In 论文表(Paper))!值:${pobjPaperEN.periodical}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.author) == false && GetStrLen(pobjPaperEN.author) > 200)
{
 throw new Error(`(errid:Watl000413)字段[作者(author)]的长度不能超过200(In 论文表(Paper))!值:${pobjPaperEN.author}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchQuestion) == false && GetStrLen(pobjPaperEN.researchQuestion) > 2000)
{
 throw new Error(`(errid:Watl000413)字段[研究问题(researchQuestion)]的长度不能超过2000(In 论文表(Paper))!值:${pobjPaperEN.researchQuestion}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.keyword) == false && GetStrLen(pobjPaperEN.keyword) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[关键字(keyword)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.keyword}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureSources) == false && GetStrLen(pobjPaperEN.literatureSources) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[文献来源(literatureSources)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.literatureSources}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureLink) == false && GetStrLen(pobjPaperEN.literatureLink) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[文献链接(literatureLink)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.literatureLink}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.uploadfileUrl) == false && GetStrLen(pobjPaperEN.uploadfileUrl) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[文件地址(uploadfileUrl)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.uploadfileUrl}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.quoteId) == false && GetStrLen(pobjPaperEN.quoteId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[引用Id(quoteId)]的长度不能超过8(In 论文表(Paper))!值:${pobjPaperEN.quoteId}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.checker) == false && GetStrLen(pobjPaperEN.checker) > 20)
{
 throw new Error(`(errid:Watl000413)字段[审核人(checker)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.checker}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureTypeId) == false && GetStrLen(pobjPaperEN.literatureTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[文献类型Id(literatureTypeId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.literatureTypeId}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTypeId) == false && GetStrLen(pobjPaperEN.paperTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[论文类型Id(paperTypeId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.paperTypeId}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperStatusId) == false && GetStrLen(pobjPaperEN.paperStatusId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[论文状态Id(paperStatusId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.paperStatusId}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.askQuestion) == false && GetStrLen(pobjPaperEN.askQuestion) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[问题提出(askQuestion)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.askQuestion}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchStatus) == false && GetStrLen(pobjPaperEN.researchStatus) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[目前研究的现状(researchStatus)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.researchStatus}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.innovationPoints) == false && GetStrLen(pobjPaperEN.innovationPoints) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[创新点(innovationPoints)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.innovationPoints}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchDesign) == false && GetStrLen(pobjPaperEN.researchDesign) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[研究设计(researchDesign)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.researchDesign}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.dimensionDataProcess) == false && GetStrLen(pobjPaperEN.dimensionDataProcess) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[数据处理的维度(dimensionDataProcess)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.dimensionDataProcess}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.expectedConclusion) == false && GetStrLen(pobjPaperEN.expectedConclusion) > 5000)
{
 throw new Error(`(errid:Watl000413)字段[预期结论(expectedConclusion)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.expectedConclusion}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.shareId) == false && GetStrLen(pobjPaperEN.shareId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.shareId}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.idStudyLevel) == false && GetStrLen(pobjPaperEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 论文表(Paper))!值:${pobjPaperEN.idStudyLevel}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.idGrade) == false && GetStrLen(pobjPaperEN.idGrade) > 4)
{
 throw new Error(`(errid:Watl000413)字段[年级流水号(idGrade)]的长度不能超过4(In 论文表(Paper))!值:${pobjPaperEN.idGrade}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.createDate) == false && GetStrLen(pobjPaperEN.createDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.createDate}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.updUser) == false && GetStrLen(pobjPaperEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.updUser}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.updDate) == false && GetStrLen(pobjPaperEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.updDate}(clsPaperBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjPaperEN.memo) == false && GetStrLen(pobjPaperEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.memo}(clsPaperBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjPaperEN.paperId) == false && undefined !== pobjPaperEN.paperId && tzDataType.isString(pobjPaperEN.paperId) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文Id(paperId)]的值:[${pobjPaperEN.paperId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTitle) == false && undefined !== pobjPaperEN.paperTitle && tzDataType.isString(pobjPaperEN.paperTitle) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文标题(paperTitle)]的值:[${pobjPaperEN.paperTitle}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperContent) == false && undefined !== pobjPaperEN.paperContent && tzDataType.isString(pobjPaperEN.paperContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[主题内容(paperContent)]的值:[${pobjPaperEN.paperContent}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.periodical) == false && undefined !== pobjPaperEN.periodical && tzDataType.isString(pobjPaperEN.periodical) === false)
{
 throw new Error(`(errid:Watl000414)字段[期刊(periodical)]的值:[${pobjPaperEN.periodical}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.author) == false && undefined !== pobjPaperEN.author && tzDataType.isString(pobjPaperEN.author) === false)
{
 throw new Error(`(errid:Watl000414)字段[作者(author)]的值:[${pobjPaperEN.author}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchQuestion) == false && undefined !== pobjPaperEN.researchQuestion && tzDataType.isString(pobjPaperEN.researchQuestion) === false)
{
 throw new Error(`(errid:Watl000414)字段[研究问题(researchQuestion)]的值:[${pobjPaperEN.researchQuestion}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.keyword) == false && undefined !== pobjPaperEN.keyword && tzDataType.isString(pobjPaperEN.keyword) === false)
{
 throw new Error(`(errid:Watl000414)字段[关键字(keyword)]的值:[${pobjPaperEN.keyword}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureSources) == false && undefined !== pobjPaperEN.literatureSources && tzDataType.isString(pobjPaperEN.literatureSources) === false)
{
 throw new Error(`(errid:Watl000414)字段[文献来源(literatureSources)]的值:[${pobjPaperEN.literatureSources}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureLink) == false && undefined !== pobjPaperEN.literatureLink && tzDataType.isString(pobjPaperEN.literatureLink) === false)
{
 throw new Error(`(errid:Watl000414)字段[文献链接(literatureLink)]的值:[${pobjPaperEN.literatureLink}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.uploadfileUrl) == false && undefined !== pobjPaperEN.uploadfileUrl && tzDataType.isString(pobjPaperEN.uploadfileUrl) === false)
{
 throw new Error(`(errid:Watl000414)字段[文件地址(uploadfileUrl)]的值:[${pobjPaperEN.uploadfileUrl}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.isQuotethesis && undefined !== pobjPaperEN.isQuotethesis && tzDataType.isBoolean(pobjPaperEN.isQuotethesis) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否引用论文(isQuotethesis)]的值:[${pobjPaperEN.isQuotethesis}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.quoteId) == false && undefined !== pobjPaperEN.quoteId && tzDataType.isString(pobjPaperEN.quoteId) === false)
{
 throw new Error(`(errid:Watl000414)字段[引用Id(quoteId)]的值:[${pobjPaperEN.quoteId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.isChecked && undefined !== pobjPaperEN.isChecked && tzDataType.isBoolean(pobjPaperEN.isChecked) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否检查(isChecked)]的值:[${pobjPaperEN.isChecked}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.checker) == false && undefined !== pobjPaperEN.checker && tzDataType.isString(pobjPaperEN.checker) === false)
{
 throw new Error(`(errid:Watl000414)字段[审核人(checker)]的值:[${pobjPaperEN.checker}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureTypeId) == false && undefined !== pobjPaperEN.literatureTypeId && tzDataType.isString(pobjPaperEN.literatureTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[文献类型Id(literatureTypeId)]的值:[${pobjPaperEN.literatureTypeId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.browseNumber && undefined !== pobjPaperEN.browseNumber && tzDataType.isNumber(pobjPaperEN.browseNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[浏览量(browseNumber)]的值:[${pobjPaperEN.browseNumber}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.isSubmit && undefined !== pobjPaperEN.isSubmit && tzDataType.isBoolean(pobjPaperEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否提交(isSubmit)]的值:[${pobjPaperEN.isSubmit}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.appraiseCount && undefined !== pobjPaperEN.appraiseCount && tzDataType.isNumber(pobjPaperEN.appraiseCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[评论数(appraiseCount)]的值:[${pobjPaperEN.appraiseCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.attachmentCount && undefined !== pobjPaperEN.attachmentCount && tzDataType.isNumber(pobjPaperEN.attachmentCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[附件计数(attachmentCount)]的值:[${pobjPaperEN.attachmentCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.collectionCount && undefined !== pobjPaperEN.collectionCount && tzDataType.isNumber(pobjPaperEN.collectionCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[收藏数量(collectionCount)]的值:[${pobjPaperEN.collectionCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.downloadCount && undefined !== pobjPaperEN.downloadCount && tzDataType.isNumber(pobjPaperEN.downloadCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[下载数(downloadCount)]的值:[${pobjPaperEN.downloadCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.okCount && undefined !== pobjPaperEN.okCount && tzDataType.isNumber(pobjPaperEN.okCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[点赞统计(okCount)]的值:[${pobjPaperEN.okCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.pcount && undefined !== pobjPaperEN.pcount && tzDataType.isNumber(pobjPaperEN.pcount) === false)
{
 throw new Error(`(errid:Watl000414)字段[读写数(pcount)]的值:[${pobjPaperEN.pcount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.score && undefined !== pobjPaperEN.score && tzDataType.isNumber(pobjPaperEN.score) === false)
{
 throw new Error(`(errid:Watl000414)字段[评分(score)]的值:[${pobjPaperEN.score}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.stuScore && undefined !== pobjPaperEN.stuScore && tzDataType.isNumber(pobjPaperEN.stuScore) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生平均分(stuScore)]的值:[${pobjPaperEN.stuScore}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.teaScore && undefined !== pobjPaperEN.teaScore && tzDataType.isNumber(pobjPaperEN.teaScore) === false)
{
 throw new Error(`(errid:Watl000414)字段[教师评分(teaScore)]的值:[${pobjPaperEN.teaScore}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTypeId) == false && undefined !== pobjPaperEN.paperTypeId && tzDataType.isString(pobjPaperEN.paperTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文类型Id(paperTypeId)]的值:[${pobjPaperEN.paperTypeId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperStatusId) == false && undefined !== pobjPaperEN.paperStatusId && tzDataType.isString(pobjPaperEN.paperStatusId) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文状态Id(paperStatusId)]的值:[${pobjPaperEN.paperStatusId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.versionCount && undefined !== pobjPaperEN.versionCount && tzDataType.isNumber(pobjPaperEN.versionCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[版本统计(versionCount)]的值:[${pobjPaperEN.versionCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.isPublic && undefined !== pobjPaperEN.isPublic && tzDataType.isBoolean(pobjPaperEN.isPublic) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否公开(isPublic)]的值:[${pobjPaperEN.isPublic}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.askQuestion) == false && undefined !== pobjPaperEN.askQuestion && tzDataType.isString(pobjPaperEN.askQuestion) === false)
{
 throw new Error(`(errid:Watl000414)字段[问题提出(askQuestion)]的值:[${pobjPaperEN.askQuestion}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchStatus) == false && undefined !== pobjPaperEN.researchStatus && tzDataType.isString(pobjPaperEN.researchStatus) === false)
{
 throw new Error(`(errid:Watl000414)字段[目前研究的现状(researchStatus)]的值:[${pobjPaperEN.researchStatus}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.innovationPoints) == false && undefined !== pobjPaperEN.innovationPoints && tzDataType.isString(pobjPaperEN.innovationPoints) === false)
{
 throw new Error(`(errid:Watl000414)字段[创新点(innovationPoints)]的值:[${pobjPaperEN.innovationPoints}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchDesign) == false && undefined !== pobjPaperEN.researchDesign && tzDataType.isString(pobjPaperEN.researchDesign) === false)
{
 throw new Error(`(errid:Watl000414)字段[研究设计(researchDesign)]的值:[${pobjPaperEN.researchDesign}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.dimensionDataProcess) == false && undefined !== pobjPaperEN.dimensionDataProcess && tzDataType.isString(pobjPaperEN.dimensionDataProcess) === false)
{
 throw new Error(`(errid:Watl000414)字段[数据处理的维度(dimensionDataProcess)]的值:[${pobjPaperEN.dimensionDataProcess}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.expectedConclusion) == false && undefined !== pobjPaperEN.expectedConclusion && tzDataType.isString(pobjPaperEN.expectedConclusion) === false)
{
 throw new Error(`(errid:Watl000414)字段[预期结论(expectedConclusion)]的值:[${pobjPaperEN.expectedConclusion}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.shareId) == false && undefined !== pobjPaperEN.shareId && tzDataType.isString(pobjPaperEN.shareId) === false)
{
 throw new Error(`(errid:Watl000414)字段[分享Id(shareId)]的值:[${pobjPaperEN.shareId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.paperQCount && undefined !== pobjPaperEN.paperQCount && tzDataType.isNumber(pobjPaperEN.paperQCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文答疑数(paperQCount)]的值:[${pobjPaperEN.paperQCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.subVCount && undefined !== pobjPaperEN.subVCount && tzDataType.isNumber(pobjPaperEN.subVCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文子观点数(subVCount)]的值:[${pobjPaperEN.subVCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.tagsCount && undefined !== pobjPaperEN.tagsCount && tzDataType.isNumber(pobjPaperEN.tagsCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文标注数(tagsCount)]的值:[${pobjPaperEN.tagsCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (null != pobjPaperEN.teaQCount && undefined !== pobjPaperEN.teaQCount && tzDataType.isNumber(pobjPaperEN.teaQCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[教师提问数(teaQCount)]的值:[${pobjPaperEN.teaQCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.idStudyLevel) == false && undefined !== pobjPaperEN.idStudyLevel && tzDataType.isString(pobjPaperEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000414)字段[学段流水号(idStudyLevel)]的值:[${pobjPaperEN.idStudyLevel}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.idGrade) == false && undefined !== pobjPaperEN.idGrade && tzDataType.isString(pobjPaperEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级流水号(idGrade)]的值:[${pobjPaperEN.idGrade}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.createDate) == false && undefined !== pobjPaperEN.createDate && tzDataType.isString(pobjPaperEN.createDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[建立日期(createDate)]的值:[${pobjPaperEN.createDate}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.updUser) == false && undefined !== pobjPaperEN.updUser && tzDataType.isString(pobjPaperEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjPaperEN.updUser}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.updDate) == false && undefined !== pobjPaperEN.updDate && tzDataType.isString(pobjPaperEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPaperEN.updDate}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjPaperEN.memo) == false && undefined !== pobjPaperEN.memo && tzDataType.isString(pobjPaperEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjPaperEN.memo}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Paper_CheckProperty4Update(pobjPaperEN: clsPaperEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjPaperEN.paperId) == false && GetStrLen(pobjPaperEN.paperId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文表(Paper))!值:${pobjPaperEN.paperId}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTitle) == false && GetStrLen(pobjPaperEN.paperTitle) > 500)
{
 throw new Error(`(errid:Watl000416)字段[论文标题(paperTitle)]的长度不能超过500(In 论文表(Paper))!值:${pobjPaperEN.paperTitle}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.periodical) == false && GetStrLen(pobjPaperEN.periodical) > 100)
{
 throw new Error(`(errid:Watl000416)字段[期刊(periodical)]的长度不能超过100(In 论文表(Paper))!值:${pobjPaperEN.periodical}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.author) == false && GetStrLen(pobjPaperEN.author) > 200)
{
 throw new Error(`(errid:Watl000416)字段[作者(author)]的长度不能超过200(In 论文表(Paper))!值:${pobjPaperEN.author}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchQuestion) == false && GetStrLen(pobjPaperEN.researchQuestion) > 2000)
{
 throw new Error(`(errid:Watl000416)字段[研究问题(researchQuestion)]的长度不能超过2000(In 论文表(Paper))!值:${pobjPaperEN.researchQuestion}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.keyword) == false && GetStrLen(pobjPaperEN.keyword) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[关键字(keyword)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.keyword}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureSources) == false && GetStrLen(pobjPaperEN.literatureSources) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[文献来源(literatureSources)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.literatureSources}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureLink) == false && GetStrLen(pobjPaperEN.literatureLink) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[文献链接(literatureLink)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.literatureLink}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.uploadfileUrl) == false && GetStrLen(pobjPaperEN.uploadfileUrl) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[文件地址(uploadfileUrl)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.uploadfileUrl}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.quoteId) == false && GetStrLen(pobjPaperEN.quoteId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[引用Id(quoteId)]的长度不能超过8(In 论文表(Paper))!值:${pobjPaperEN.quoteId}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.checker) == false && GetStrLen(pobjPaperEN.checker) > 20)
{
 throw new Error(`(errid:Watl000416)字段[审核人(checker)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.checker}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureTypeId) == false && GetStrLen(pobjPaperEN.literatureTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[文献类型Id(literatureTypeId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.literatureTypeId}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTypeId) == false && GetStrLen(pobjPaperEN.paperTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[论文类型Id(paperTypeId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.paperTypeId}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperStatusId) == false && GetStrLen(pobjPaperEN.paperStatusId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[论文状态Id(paperStatusId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.paperStatusId}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.askQuestion) == false && GetStrLen(pobjPaperEN.askQuestion) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[问题提出(askQuestion)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.askQuestion}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchStatus) == false && GetStrLen(pobjPaperEN.researchStatus) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[目前研究的现状(researchStatus)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.researchStatus}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.innovationPoints) == false && GetStrLen(pobjPaperEN.innovationPoints) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[创新点(innovationPoints)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.innovationPoints}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchDesign) == false && GetStrLen(pobjPaperEN.researchDesign) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[研究设计(researchDesign)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.researchDesign}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.dimensionDataProcess) == false && GetStrLen(pobjPaperEN.dimensionDataProcess) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[数据处理的维度(dimensionDataProcess)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.dimensionDataProcess}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.expectedConclusion) == false && GetStrLen(pobjPaperEN.expectedConclusion) > 5000)
{
 throw new Error(`(errid:Watl000416)字段[预期结论(expectedConclusion)]的长度不能超过5000(In 论文表(Paper))!值:${pobjPaperEN.expectedConclusion}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.shareId) == false && GetStrLen(pobjPaperEN.shareId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 论文表(Paper))!值:${pobjPaperEN.shareId}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.idStudyLevel) == false && GetStrLen(pobjPaperEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 论文表(Paper))!值:${pobjPaperEN.idStudyLevel}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.idGrade) == false && GetStrLen(pobjPaperEN.idGrade) > 4)
{
 throw new Error(`(errid:Watl000416)字段[年级流水号(idGrade)]的长度不能超过4(In 论文表(Paper))!值:${pobjPaperEN.idGrade}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.createDate) == false && GetStrLen(pobjPaperEN.createDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.createDate}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.updUser) == false && GetStrLen(pobjPaperEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.updUser}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.updDate) == false && GetStrLen(pobjPaperEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文表(Paper))!值:${pobjPaperEN.updDate}(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.memo) == false && GetStrLen(pobjPaperEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文表(Paper))!值:${pobjPaperEN.memo}(clsPaperBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjPaperEN.paperId) == false && undefined !== pobjPaperEN.paperId && tzDataType.isString(pobjPaperEN.paperId) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文Id(paperId)]的值:[${pobjPaperEN.paperId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTitle) == false && undefined !== pobjPaperEN.paperTitle && tzDataType.isString(pobjPaperEN.paperTitle) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文标题(paperTitle)]的值:[${pobjPaperEN.paperTitle}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperContent) == false && undefined !== pobjPaperEN.paperContent && tzDataType.isString(pobjPaperEN.paperContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[主题内容(paperContent)]的值:[${pobjPaperEN.paperContent}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.periodical) == false && undefined !== pobjPaperEN.periodical && tzDataType.isString(pobjPaperEN.periodical) === false)
{
 throw new Error(`(errid:Watl000417)字段[期刊(periodical)]的值:[${pobjPaperEN.periodical}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.author) == false && undefined !== pobjPaperEN.author && tzDataType.isString(pobjPaperEN.author) === false)
{
 throw new Error(`(errid:Watl000417)字段[作者(author)]的值:[${pobjPaperEN.author}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchQuestion) == false && undefined !== pobjPaperEN.researchQuestion && tzDataType.isString(pobjPaperEN.researchQuestion) === false)
{
 throw new Error(`(errid:Watl000417)字段[研究问题(researchQuestion)]的值:[${pobjPaperEN.researchQuestion}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.keyword) == false && undefined !== pobjPaperEN.keyword && tzDataType.isString(pobjPaperEN.keyword) === false)
{
 throw new Error(`(errid:Watl000417)字段[关键字(keyword)]的值:[${pobjPaperEN.keyword}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureSources) == false && undefined !== pobjPaperEN.literatureSources && tzDataType.isString(pobjPaperEN.literatureSources) === false)
{
 throw new Error(`(errid:Watl000417)字段[文献来源(literatureSources)]的值:[${pobjPaperEN.literatureSources}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureLink) == false && undefined !== pobjPaperEN.literatureLink && tzDataType.isString(pobjPaperEN.literatureLink) === false)
{
 throw new Error(`(errid:Watl000417)字段[文献链接(literatureLink)]的值:[${pobjPaperEN.literatureLink}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.uploadfileUrl) == false && undefined !== pobjPaperEN.uploadfileUrl && tzDataType.isString(pobjPaperEN.uploadfileUrl) === false)
{
 throw new Error(`(errid:Watl000417)字段[文件地址(uploadfileUrl)]的值:[${pobjPaperEN.uploadfileUrl}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.isQuotethesis && undefined !== pobjPaperEN.isQuotethesis && tzDataType.isBoolean(pobjPaperEN.isQuotethesis) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否引用论文(isQuotethesis)]的值:[${pobjPaperEN.isQuotethesis}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.quoteId) == false && undefined !== pobjPaperEN.quoteId && tzDataType.isString(pobjPaperEN.quoteId) === false)
{
 throw new Error(`(errid:Watl000417)字段[引用Id(quoteId)]的值:[${pobjPaperEN.quoteId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.isChecked && undefined !== pobjPaperEN.isChecked && tzDataType.isBoolean(pobjPaperEN.isChecked) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否检查(isChecked)]的值:[${pobjPaperEN.isChecked}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.checker) == false && undefined !== pobjPaperEN.checker && tzDataType.isString(pobjPaperEN.checker) === false)
{
 throw new Error(`(errid:Watl000417)字段[审核人(checker)]的值:[${pobjPaperEN.checker}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.literatureTypeId) == false && undefined !== pobjPaperEN.literatureTypeId && tzDataType.isString(pobjPaperEN.literatureTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[文献类型Id(literatureTypeId)]的值:[${pobjPaperEN.literatureTypeId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.browseNumber && undefined !== pobjPaperEN.browseNumber && tzDataType.isNumber(pobjPaperEN.browseNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[浏览量(browseNumber)]的值:[${pobjPaperEN.browseNumber}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.isSubmit && undefined !== pobjPaperEN.isSubmit && tzDataType.isBoolean(pobjPaperEN.isSubmit) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否提交(isSubmit)]的值:[${pobjPaperEN.isSubmit}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.appraiseCount && undefined !== pobjPaperEN.appraiseCount && tzDataType.isNumber(pobjPaperEN.appraiseCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[评论数(appraiseCount)]的值:[${pobjPaperEN.appraiseCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.attachmentCount && undefined !== pobjPaperEN.attachmentCount && tzDataType.isNumber(pobjPaperEN.attachmentCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[附件计数(attachmentCount)]的值:[${pobjPaperEN.attachmentCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.collectionCount && undefined !== pobjPaperEN.collectionCount && tzDataType.isNumber(pobjPaperEN.collectionCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[收藏数量(collectionCount)]的值:[${pobjPaperEN.collectionCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.downloadCount && undefined !== pobjPaperEN.downloadCount && tzDataType.isNumber(pobjPaperEN.downloadCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[下载数(downloadCount)]的值:[${pobjPaperEN.downloadCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.okCount && undefined !== pobjPaperEN.okCount && tzDataType.isNumber(pobjPaperEN.okCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[点赞统计(okCount)]的值:[${pobjPaperEN.okCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.pcount && undefined !== pobjPaperEN.pcount && tzDataType.isNumber(pobjPaperEN.pcount) === false)
{
 throw new Error(`(errid:Watl000417)字段[读写数(pcount)]的值:[${pobjPaperEN.pcount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.score && undefined !== pobjPaperEN.score && tzDataType.isNumber(pobjPaperEN.score) === false)
{
 throw new Error(`(errid:Watl000417)字段[评分(score)]的值:[${pobjPaperEN.score}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.stuScore && undefined !== pobjPaperEN.stuScore && tzDataType.isNumber(pobjPaperEN.stuScore) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生平均分(stuScore)]的值:[${pobjPaperEN.stuScore}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.teaScore && undefined !== pobjPaperEN.teaScore && tzDataType.isNumber(pobjPaperEN.teaScore) === false)
{
 throw new Error(`(errid:Watl000417)字段[教师评分(teaScore)]的值:[${pobjPaperEN.teaScore}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperTypeId) == false && undefined !== pobjPaperEN.paperTypeId && tzDataType.isString(pobjPaperEN.paperTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文类型Id(paperTypeId)]的值:[${pobjPaperEN.paperTypeId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.paperStatusId) == false && undefined !== pobjPaperEN.paperStatusId && tzDataType.isString(pobjPaperEN.paperStatusId) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文状态Id(paperStatusId)]的值:[${pobjPaperEN.paperStatusId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.versionCount && undefined !== pobjPaperEN.versionCount && tzDataType.isNumber(pobjPaperEN.versionCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[版本统计(versionCount)]的值:[${pobjPaperEN.versionCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.isPublic && undefined !== pobjPaperEN.isPublic && tzDataType.isBoolean(pobjPaperEN.isPublic) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否公开(isPublic)]的值:[${pobjPaperEN.isPublic}], 非法,应该为布尔型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.askQuestion) == false && undefined !== pobjPaperEN.askQuestion && tzDataType.isString(pobjPaperEN.askQuestion) === false)
{
 throw new Error(`(errid:Watl000417)字段[问题提出(askQuestion)]的值:[${pobjPaperEN.askQuestion}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchStatus) == false && undefined !== pobjPaperEN.researchStatus && tzDataType.isString(pobjPaperEN.researchStatus) === false)
{
 throw new Error(`(errid:Watl000417)字段[目前研究的现状(researchStatus)]的值:[${pobjPaperEN.researchStatus}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.innovationPoints) == false && undefined !== pobjPaperEN.innovationPoints && tzDataType.isString(pobjPaperEN.innovationPoints) === false)
{
 throw new Error(`(errid:Watl000417)字段[创新点(innovationPoints)]的值:[${pobjPaperEN.innovationPoints}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.researchDesign) == false && undefined !== pobjPaperEN.researchDesign && tzDataType.isString(pobjPaperEN.researchDesign) === false)
{
 throw new Error(`(errid:Watl000417)字段[研究设计(researchDesign)]的值:[${pobjPaperEN.researchDesign}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.dimensionDataProcess) == false && undefined !== pobjPaperEN.dimensionDataProcess && tzDataType.isString(pobjPaperEN.dimensionDataProcess) === false)
{
 throw new Error(`(errid:Watl000417)字段[数据处理的维度(dimensionDataProcess)]的值:[${pobjPaperEN.dimensionDataProcess}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.expectedConclusion) == false && undefined !== pobjPaperEN.expectedConclusion && tzDataType.isString(pobjPaperEN.expectedConclusion) === false)
{
 throw new Error(`(errid:Watl000417)字段[预期结论(expectedConclusion)]的值:[${pobjPaperEN.expectedConclusion}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.shareId) == false && undefined !== pobjPaperEN.shareId && tzDataType.isString(pobjPaperEN.shareId) === false)
{
 throw new Error(`(errid:Watl000417)字段[分享Id(shareId)]的值:[${pobjPaperEN.shareId}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.paperQCount && undefined !== pobjPaperEN.paperQCount && tzDataType.isNumber(pobjPaperEN.paperQCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文答疑数(paperQCount)]的值:[${pobjPaperEN.paperQCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.subVCount && undefined !== pobjPaperEN.subVCount && tzDataType.isNumber(pobjPaperEN.subVCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文子观点数(subVCount)]的值:[${pobjPaperEN.subVCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.tagsCount && undefined !== pobjPaperEN.tagsCount && tzDataType.isNumber(pobjPaperEN.tagsCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文标注数(tagsCount)]的值:[${pobjPaperEN.tagsCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (null != pobjPaperEN.teaQCount && undefined !== pobjPaperEN.teaQCount && tzDataType.isNumber(pobjPaperEN.teaQCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[教师提问数(teaQCount)]的值:[${pobjPaperEN.teaQCount}], 非法,应该为数值型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.idStudyLevel) == false && undefined !== pobjPaperEN.idStudyLevel && tzDataType.isString(pobjPaperEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000417)字段[学段流水号(idStudyLevel)]的值:[${pobjPaperEN.idStudyLevel}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.idGrade) == false && undefined !== pobjPaperEN.idGrade && tzDataType.isString(pobjPaperEN.idGrade) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级流水号(idGrade)]的值:[${pobjPaperEN.idGrade}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.createDate) == false && undefined !== pobjPaperEN.createDate && tzDataType.isString(pobjPaperEN.createDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[建立日期(createDate)]的值:[${pobjPaperEN.createDate}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.updUser) == false && undefined !== pobjPaperEN.updUser && tzDataType.isString(pobjPaperEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjPaperEN.updUser}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.updDate) == false && undefined !== pobjPaperEN.updDate && tzDataType.isString(pobjPaperEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPaperEN.updDate}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjPaperEN.memo) == false && undefined !== pobjPaperEN.memo && tzDataType.isString(pobjPaperEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjPaperEN.memo}], 非法,应该为字符型(In 论文表(Paper))!(clsPaperBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Paper_GetJSONStrByObj (pobjPaperEN: clsPaperEN): string
{
pobjPaperEN.sfUpdFldSetStr = pobjPaperEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjPaperEN);
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
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function Paper_GetObjLstByJSONStr (strJSON: string): Array<clsPaperEN>
{
let arrPaperObjLst = new Array<clsPaperEN>();
if (strJSON === "")
{
return arrPaperObjLst;
}
try
{
arrPaperObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrPaperObjLst;
}
return arrPaperObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPaperObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Paper_GetObjLstByJSONObjLst (arrPaperObjLstS: Array<clsPaperEN>): Array<clsPaperEN>
{
const arrPaperObjLst = new Array<clsPaperEN>();
for (const objInFor of arrPaperObjLstS) {
const obj1 = Paper_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrPaperObjLst.push(obj1);
}
return arrPaperObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Paper_GetObjByJSONStr (strJSON: string): clsPaperEN
{
let pobjPaperEN = new clsPaperEN();
if (strJSON === "")
{
return pobjPaperEN;
}
try
{
pobjPaperEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjPaperEN;
}
return pobjPaperEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Paper_GetCombineCondition(objPaperCond: clsPaperEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_PaperId, objPaperCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_PaperTitle, objPaperCond.paperTitle, strComparisonOpPaperTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Periodical) == true)
{
const strComparisonOpPeriodical:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Periodical];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_Periodical, objPaperCond.periodical, strComparisonOpPeriodical);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Author) == true)
{
const strComparisonOpAuthor:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Author];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_Author, objPaperCond.author, strComparisonOpAuthor);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_ResearchQuestion) == true)
{
const strComparisonOpResearchQuestion:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_ResearchQuestion];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_ResearchQuestion, objPaperCond.researchQuestion, strComparisonOpResearchQuestion);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_Keyword, objPaperCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_LiteratureSources) == true)
{
const strComparisonOpLiteratureSources:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_LiteratureSources];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_LiteratureSources, objPaperCond.literatureSources, strComparisonOpLiteratureSources);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_LiteratureLink) == true)
{
const strComparisonOpLiteratureLink:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_LiteratureLink];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_LiteratureLink, objPaperCond.literatureLink, strComparisonOpLiteratureLink);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_UploadfileUrl) == true)
{
const strComparisonOpUploadfileUrl:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_UploadfileUrl];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_UploadfileUrl, objPaperCond.uploadfileUrl, strComparisonOpUploadfileUrl);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_IsQuotethesis) == true)
{
if (objPaperCond.isQuotethesis == true)
{
strWhereCond += Format(" And {0} = '1'", clsPaperEN.con_IsQuotethesis);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsPaperEN.con_IsQuotethesis);
}
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_QuoteId) == true)
{
const strComparisonOpQuoteId:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_QuoteId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_QuoteId, objPaperCond.quoteId, strComparisonOpQuoteId);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_IsChecked) == true)
{
if (objPaperCond.isChecked == true)
{
strWhereCond += Format(" And {0} = '1'", clsPaperEN.con_IsChecked);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsPaperEN.con_IsChecked);
}
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Checker) == true)
{
const strComparisonOpChecker:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Checker];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_Checker, objPaperCond.checker, strComparisonOpChecker);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_LiteratureTypeId) == true)
{
const strComparisonOpLiteratureTypeId:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_LiteratureTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_LiteratureTypeId, objPaperCond.literatureTypeId, strComparisonOpLiteratureTypeId);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_BrowseNumber) == true)
{
const strComparisonOpBrowseNumber:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_BrowseNumber];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_BrowseNumber, objPaperCond.browseNumber, strComparisonOpBrowseNumber);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_IsSubmit) == true)
{
if (objPaperCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsPaperEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsPaperEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_AppraiseCount, objPaperCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_AttachmentCount) == true)
{
const strComparisonOpAttachmentCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_AttachmentCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_AttachmentCount, objPaperCond.attachmentCount, strComparisonOpAttachmentCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_CollectionCount) == true)
{
const strComparisonOpCollectionCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_CollectionCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_CollectionCount, objPaperCond.collectionCount, strComparisonOpCollectionCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_DownloadCount) == true)
{
const strComparisonOpDownloadCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_DownloadCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_DownloadCount, objPaperCond.downloadCount, strComparisonOpDownloadCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_OkCount, objPaperCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Pcount) == true)
{
const strComparisonOpPcount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Pcount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_Pcount, objPaperCond.pcount, strComparisonOpPcount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Score) == true)
{
const strComparisonOpScore:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_Score, objPaperCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_StuScore, objPaperCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_TeaScore, objPaperCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_PaperTypeId) == true)
{
const strComparisonOpPaperTypeId:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_PaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_PaperTypeId, objPaperCond.paperTypeId, strComparisonOpPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_PaperStatusId) == true)
{
const strComparisonOpPaperStatusId:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_PaperStatusId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_PaperStatusId, objPaperCond.paperStatusId, strComparisonOpPaperStatusId);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_VersionCount, objPaperCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_IsPublic) == true)
{
if (objPaperCond.isPublic == true)
{
strWhereCond += Format(" And {0} = '1'", clsPaperEN.con_IsPublic);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsPaperEN.con_IsPublic);
}
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_AskQuestion) == true)
{
const strComparisonOpAskQuestion:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_AskQuestion];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_AskQuestion, objPaperCond.askQuestion, strComparisonOpAskQuestion);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_ResearchStatus) == true)
{
const strComparisonOpResearchStatus:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_ResearchStatus];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_ResearchStatus, objPaperCond.researchStatus, strComparisonOpResearchStatus);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_InnovationPoints) == true)
{
const strComparisonOpInnovationPoints:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_InnovationPoints];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_InnovationPoints, objPaperCond.innovationPoints, strComparisonOpInnovationPoints);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_ResearchDesign) == true)
{
const strComparisonOpResearchDesign:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_ResearchDesign];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_ResearchDesign, objPaperCond.researchDesign, strComparisonOpResearchDesign);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_DimensionDataProcess) == true)
{
const strComparisonOpDimensionDataProcess:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_DimensionDataProcess];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_DimensionDataProcess, objPaperCond.dimensionDataProcess, strComparisonOpDimensionDataProcess);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_ExpectedConclusion) == true)
{
const strComparisonOpExpectedConclusion:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_ExpectedConclusion];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_ExpectedConclusion, objPaperCond.expectedConclusion, strComparisonOpExpectedConclusion);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_ShareId, objPaperCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_PaperQCount) == true)
{
const strComparisonOpPaperQCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_PaperQCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_PaperQCount, objPaperCond.paperQCount, strComparisonOpPaperQCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_SubVCount) == true)
{
const strComparisonOpSubVCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_SubVCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_SubVCount, objPaperCond.subVCount, strComparisonOpSubVCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_TagsCount) == true)
{
const strComparisonOpTagsCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_TagsCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_TagsCount, objPaperCond.tagsCount, strComparisonOpTagsCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_TeaQCount) == true)
{
const strComparisonOpTeaQCount:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_TeaQCount];
strWhereCond += Format(" And {0} {2} {1}", clsPaperEN.con_TeaQCount, objPaperCond.teaQCount, strComparisonOpTeaQCount);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_IdStudyLevel) == true)
{
const strComparisonOpIdStudyLevel:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_IdStudyLevel];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_IdStudyLevel, objPaperCond.idStudyLevel, strComparisonOpIdStudyLevel);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_IdGrade, objPaperCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_CreateDate, objPaperCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_UpdUser, objPaperCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_UpdDate, objPaperCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objPaperCond.dicFldComparisonOp, clsPaperEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objPaperCond.dicFldComparisonOp[clsPaperEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsPaperEN.con_Memo, objPaperCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Paper(论文表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperTitle: 论文标题(要求唯一的字段)
 * @param strAuthor: 作者(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Paper_GetUniCondStr(objPaperEN: clsPaperEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PaperTitle = '{0}'", objPaperEN.paperTitle);
 strWhereCond +=  Format(" and Author = '{0}'", objPaperEN.author);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Paper(论文表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperTitle: 论文标题(要求唯一的字段)
 * @param strAuthor: 作者(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Paper_GetUniCondStr4Update(objPaperEN: clsPaperEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and PaperId <> '{0}'", objPaperEN.paperId);
 strWhereCond +=  Format(" and PaperTitle = '{0}'", objPaperEN.paperTitle);
 strWhereCond +=  Format(" and Author = '{0}'", objPaperEN.author);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objPaperENS:源对象
 * @param objPaperENT:目标对象
*/
export  function Paper_CopyObjTo(objPaperENS: clsPaperEN , objPaperENT: clsPaperEN ): void 
{
objPaperENT.paperId = objPaperENS.paperId; //论文Id
objPaperENT.paperTitle = objPaperENS.paperTitle; //论文标题
objPaperENT.paperContent = objPaperENS.paperContent; //主题内容
objPaperENT.periodical = objPaperENS.periodical; //期刊
objPaperENT.author = objPaperENS.author; //作者
objPaperENT.researchQuestion = objPaperENS.researchQuestion; //研究问题
objPaperENT.keyword = objPaperENS.keyword; //关键字
objPaperENT.literatureSources = objPaperENS.literatureSources; //文献来源
objPaperENT.literatureLink = objPaperENS.literatureLink; //文献链接
objPaperENT.uploadfileUrl = objPaperENS.uploadfileUrl; //文件地址
objPaperENT.isQuotethesis = objPaperENS.isQuotethesis; //是否引用论文
objPaperENT.quoteId = objPaperENS.quoteId; //引用Id
objPaperENT.isChecked = objPaperENS.isChecked; //是否检查
objPaperENT.checker = objPaperENS.checker; //审核人
objPaperENT.literatureTypeId = objPaperENS.literatureTypeId; //文献类型Id
objPaperENT.browseNumber = objPaperENS.browseNumber; //浏览量
objPaperENT.isSubmit = objPaperENS.isSubmit; //是否提交
objPaperENT.appraiseCount = objPaperENS.appraiseCount; //评论数
objPaperENT.attachmentCount = objPaperENS.attachmentCount; //附件计数
objPaperENT.collectionCount = objPaperENS.collectionCount; //收藏数量
objPaperENT.downloadCount = objPaperENS.downloadCount; //下载数
objPaperENT.okCount = objPaperENS.okCount; //点赞统计
objPaperENT.pcount = objPaperENS.pcount; //读写数
objPaperENT.score = objPaperENS.score; //评分
objPaperENT.stuScore = objPaperENS.stuScore; //学生平均分
objPaperENT.teaScore = objPaperENS.teaScore; //教师评分
objPaperENT.paperTypeId = objPaperENS.paperTypeId; //论文类型Id
objPaperENT.paperStatusId = objPaperENS.paperStatusId; //论文状态Id
objPaperENT.versionCount = objPaperENS.versionCount; //版本统计
objPaperENT.isPublic = objPaperENS.isPublic; //是否公开
objPaperENT.askQuestion = objPaperENS.askQuestion; //问题提出
objPaperENT.researchStatus = objPaperENS.researchStatus; //目前研究的现状
objPaperENT.innovationPoints = objPaperENS.innovationPoints; //创新点
objPaperENT.researchDesign = objPaperENS.researchDesign; //研究设计
objPaperENT.dimensionDataProcess = objPaperENS.dimensionDataProcess; //数据处理的维度
objPaperENT.expectedConclusion = objPaperENS.expectedConclusion; //预期结论
objPaperENT.shareId = objPaperENS.shareId; //分享Id
objPaperENT.paperQCount = objPaperENS.paperQCount; //论文答疑数
objPaperENT.subVCount = objPaperENS.subVCount; //论文子观点数
objPaperENT.tagsCount = objPaperENS.tagsCount; //论文标注数
objPaperENT.teaQCount = objPaperENS.teaQCount; //教师提问数
objPaperENT.idStudyLevel = objPaperENS.idStudyLevel; //学段流水号
objPaperENT.idGrade = objPaperENS.idGrade; //年级流水号
objPaperENT.createDate = objPaperENS.createDate; //建立日期
objPaperENT.updUser = objPaperENS.updUser; //修改人
objPaperENT.updDate = objPaperENS.updDate; //修改日期
objPaperENT.memo = objPaperENS.memo; //备注
objPaperENT.sfUpdFldSetStr = objPaperENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPaperENS:源对象
 * @param objPaperENT:目标对象
*/
export  function Paper_GetObjFromJsonObj(objPaperENS: clsPaperEN): clsPaperEN 
{
 const objPaperENT: clsPaperEN = new clsPaperEN();
ObjectAssign(objPaperENT, objPaperENS);
 return objPaperENT;
}