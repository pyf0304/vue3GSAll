
 /**
 * 类名:clsvRTViewpointRelaWApi
 * 表名:vRTViewpointRela(01120541)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 02:05:00
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
 * v主题观点关系(vRTViewpointRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年01月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvRTViewpointRelaEN } from "@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vRTViewpointRela_Controller = "vRTViewpointRelaApi";
 export const vRTViewpointRela_ConstructorName = "vRTViewpointRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vRTViewpointRela_GetObjBymIdAsync(lngmId: number): Promise<clsvRTViewpointRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvRTViewpointRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objvRTViewpointRela = vRTViewpointRela_GetObjFromJsonObj(returnObj);
return objvRTViewpointRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vRTViewpointRela_SortFunDefa(a:clsvRTViewpointRelaEN , b:clsvRTViewpointRelaEN): number 
{
return a.mId-b.mId;
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
export  function vRTViewpointRela_SortFunDefa2Fld(a:clsvRTViewpointRelaEN , b:clsvRTViewpointRelaEN): number 
{
if (a.viewpointName == b.viewpointName) return a.viewpointContent.localeCompare(b.viewpointContent);
else return a.viewpointName.localeCompare(b.viewpointName);
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
export  function vRTViewpointRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvRTViewpointRelaEN.con_mId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.mId-b.mId;
}
case clsvRTViewpointRelaEN.con_ViewpointName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewpointName == null) return -1;
if (b.viewpointName == null) return 1;
return a.viewpointName.localeCompare(b.viewpointName);
}
case clsvRTViewpointRelaEN.con_ViewpointContent:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewpointContent == null) return -1;
if (b.viewpointContent == null) return 1;
return a.viewpointContent.localeCompare(b.viewpointContent);
}
case clsvRTViewpointRelaEN.con_ViewpointId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewpointId == null) return -1;
if (b.viewpointId == null) return 1;
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsvRTViewpointRelaEN.con_ProposePeople:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.proposePeople == null) return -1;
if (b.proposePeople == null) return 1;
return a.proposePeople.localeCompare(b.proposePeople);
}
case clsvRTViewpointRelaEN.con_ViewpointTypeId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewpointTypeId == null) return -1;
if (b.viewpointTypeId == null) return 1;
return a.viewpointTypeId.localeCompare(b.viewpointTypeId);
}
case clsvRTViewpointRelaEN.con_ViewpointTypeName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewpointTypeName == null) return -1;
if (b.viewpointTypeName == null) return 1;
return a.viewpointTypeName.localeCompare(b.viewpointTypeName);
}
case clsvRTViewpointRelaEN.con_Reason:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.reason == null) return -1;
if (b.reason == null) return 1;
return a.reason.localeCompare(b.reason);
}
case clsvRTViewpointRelaEN.con_Source:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.source == null) return -1;
if (b.source == null) return 1;
return a.source.localeCompare(b.source);
}
case clsvRTViewpointRelaEN.con_TopicId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsvRTViewpointRelaEN.con_TopicName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.topicName == null) return -1;
if (b.topicName == null) return 1;
return a.topicName.localeCompare(b.topicName);
}
case clsvRTViewpointRelaEN.con_TopicContent:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.topicContent == null) return -1;
if (b.topicContent == null) return 1;
return a.topicContent.localeCompare(b.topicContent);
}
case clsvRTViewpointRelaEN.con_TopicProposePeople:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.topicProposePeople == null) return -1;
if (b.topicProposePeople == null) return 1;
return a.topicProposePeople.localeCompare(b.topicProposePeople);
}
case clsvRTViewpointRelaEN.con_UpdDate:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvRTViewpointRelaEN.con_UpdUser:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvRTViewpointRelaEN.con_Memo:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvRTViewpointRelaEN.con_IsSubmit:
return (a: clsvRTViewpointRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvRTViewpointRelaEN.con_AppraiseCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvRTViewpointRelaEN.con_OkCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.okCount-b.okCount;
}
case clsvRTViewpointRelaEN.con_Score:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.score-b.score;
}
case clsvRTViewpointRelaEN.con_UserTypeId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.userTypeId == null) return -1;
if (b.userTypeId == null) return 1;
return a.userTypeId.localeCompare(b.userTypeId);
}
case clsvRTViewpointRelaEN.con_UserTypeName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.userTypeName == null) return -1;
if (b.userTypeName == null) return 1;
return a.userTypeName.localeCompare(b.userTypeName);
}
case clsvRTViewpointRelaEN.con_CitationCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.citationCount-b.citationCount;
}
case clsvRTViewpointRelaEN.con_CitationId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.citationId == null) return -1;
if (b.citationId == null) return 1;
return a.citationId.localeCompare(b.citationId);
}
case clsvRTViewpointRelaEN.con_StuScore:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.stuScore-b.stuScore;
}
case clsvRTViewpointRelaEN.con_TeaScore:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.teaScore-b.teaScore;
}
case clsvRTViewpointRelaEN.con_ViewsDate:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewsDate == null) return -1;
if (b.viewsDate == null) return 1;
return a.viewsDate.localeCompare(b.viewsDate);
}
case clsvRTViewpointRelaEN.con_ViewsUserId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.viewsUserId == null) return -1;
if (b.viewsUserId == null) return 1;
return a.viewsUserId.localeCompare(b.viewsUserId);
}
case clsvRTViewpointRelaEN.con_IdCurrEduCls:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvRTViewpointRelaEN.con_PdfContent:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvRTViewpointRelaEN.con_PdfPageNum:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsvRTViewpointRelaEN.con_VersionCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.versionCount-b.versionCount;
}
case clsvRTViewpointRelaEN.con_CreateDate:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvRTViewpointRelaEN.con_ShareId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsvRTViewpointRelaEN.con_IsRecommend:
return (a: clsvRTViewpointRelaEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
case clsvRTViewpointRelaEN.con_ClassificationId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return a.classificationId-b.classificationId;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTViewpointRela]中不存在!(in ${ vRTViewpointRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvRTViewpointRelaEN.con_mId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.mId-a.mId;
}
case clsvRTViewpointRelaEN.con_ViewpointName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewpointName == null) return -1;
if (a.viewpointName == null) return 1;
return b.viewpointName.localeCompare(a.viewpointName);
}
case clsvRTViewpointRelaEN.con_ViewpointContent:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewpointContent == null) return -1;
if (a.viewpointContent == null) return 1;
return b.viewpointContent.localeCompare(a.viewpointContent);
}
case clsvRTViewpointRelaEN.con_ViewpointId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewpointId == null) return -1;
if (a.viewpointId == null) return 1;
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsvRTViewpointRelaEN.con_ProposePeople:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.proposePeople == null) return -1;
if (a.proposePeople == null) return 1;
return b.proposePeople.localeCompare(a.proposePeople);
}
case clsvRTViewpointRelaEN.con_ViewpointTypeId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewpointTypeId == null) return -1;
if (a.viewpointTypeId == null) return 1;
return b.viewpointTypeId.localeCompare(a.viewpointTypeId);
}
case clsvRTViewpointRelaEN.con_ViewpointTypeName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewpointTypeName == null) return -1;
if (a.viewpointTypeName == null) return 1;
return b.viewpointTypeName.localeCompare(a.viewpointTypeName);
}
case clsvRTViewpointRelaEN.con_Reason:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.reason == null) return -1;
if (a.reason == null) return 1;
return b.reason.localeCompare(a.reason);
}
case clsvRTViewpointRelaEN.con_Source:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.source == null) return -1;
if (a.source == null) return 1;
return b.source.localeCompare(a.source);
}
case clsvRTViewpointRelaEN.con_TopicId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsvRTViewpointRelaEN.con_TopicName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.topicName == null) return -1;
if (a.topicName == null) return 1;
return b.topicName.localeCompare(a.topicName);
}
case clsvRTViewpointRelaEN.con_TopicContent:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.topicContent == null) return -1;
if (a.topicContent == null) return 1;
return b.topicContent.localeCompare(a.topicContent);
}
case clsvRTViewpointRelaEN.con_TopicProposePeople:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.topicProposePeople == null) return -1;
if (a.topicProposePeople == null) return 1;
return b.topicProposePeople.localeCompare(a.topicProposePeople);
}
case clsvRTViewpointRelaEN.con_UpdDate:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvRTViewpointRelaEN.con_UpdUser:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvRTViewpointRelaEN.con_Memo:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvRTViewpointRelaEN.con_IsSubmit:
return (b: clsvRTViewpointRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvRTViewpointRelaEN.con_AppraiseCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvRTViewpointRelaEN.con_OkCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.okCount-a.okCount;
}
case clsvRTViewpointRelaEN.con_Score:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.score-a.score;
}
case clsvRTViewpointRelaEN.con_UserTypeId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.userTypeId == null) return -1;
if (a.userTypeId == null) return 1;
return b.userTypeId.localeCompare(a.userTypeId);
}
case clsvRTViewpointRelaEN.con_UserTypeName:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.userTypeName == null) return -1;
if (a.userTypeName == null) return 1;
return b.userTypeName.localeCompare(a.userTypeName);
}
case clsvRTViewpointRelaEN.con_CitationCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.citationCount-a.citationCount;
}
case clsvRTViewpointRelaEN.con_CitationId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.citationId == null) return -1;
if (a.citationId == null) return 1;
return b.citationId.localeCompare(a.citationId);
}
case clsvRTViewpointRelaEN.con_StuScore:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.stuScore-a.stuScore;
}
case clsvRTViewpointRelaEN.con_TeaScore:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.teaScore-a.teaScore;
}
case clsvRTViewpointRelaEN.con_ViewsDate:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewsDate == null) return -1;
if (a.viewsDate == null) return 1;
return b.viewsDate.localeCompare(a.viewsDate);
}
case clsvRTViewpointRelaEN.con_ViewsUserId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.viewsUserId == null) return -1;
if (a.viewsUserId == null) return 1;
return b.viewsUserId.localeCompare(a.viewsUserId);
}
case clsvRTViewpointRelaEN.con_IdCurrEduCls:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvRTViewpointRelaEN.con_PdfContent:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvRTViewpointRelaEN.con_PdfPageNum:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsvRTViewpointRelaEN.con_VersionCount:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.versionCount-a.versionCount;
}
case clsvRTViewpointRelaEN.con_CreateDate:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvRTViewpointRelaEN.con_ShareId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsvRTViewpointRelaEN.con_IsRecommend:
return (b: clsvRTViewpointRelaEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
case clsvRTViewpointRelaEN.con_ClassificationId:
return (a: clsvRTViewpointRelaEN, b: clsvRTViewpointRelaEN) => {
return b.classificationId-a.classificationId;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTViewpointRela]中不存在!(in ${ vRTViewpointRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vRTViewpointRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvRTViewpointRelaEN.con_mId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.mId === value;
}
case clsvRTViewpointRelaEN.con_ViewpointName:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewpointName === value;
}
case clsvRTViewpointRelaEN.con_ViewpointContent:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewpointContent === value;
}
case clsvRTViewpointRelaEN.con_ViewpointId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewpointId === value;
}
case clsvRTViewpointRelaEN.con_ProposePeople:
return (obj: clsvRTViewpointRelaEN) => {
return obj.proposePeople === value;
}
case clsvRTViewpointRelaEN.con_ViewpointTypeId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewpointTypeId === value;
}
case clsvRTViewpointRelaEN.con_ViewpointTypeName:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewpointTypeName === value;
}
case clsvRTViewpointRelaEN.con_Reason:
return (obj: clsvRTViewpointRelaEN) => {
return obj.reason === value;
}
case clsvRTViewpointRelaEN.con_Source:
return (obj: clsvRTViewpointRelaEN) => {
return obj.source === value;
}
case clsvRTViewpointRelaEN.con_TopicId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.topicId === value;
}
case clsvRTViewpointRelaEN.con_TopicName:
return (obj: clsvRTViewpointRelaEN) => {
return obj.topicName === value;
}
case clsvRTViewpointRelaEN.con_TopicContent:
return (obj: clsvRTViewpointRelaEN) => {
return obj.topicContent === value;
}
case clsvRTViewpointRelaEN.con_TopicProposePeople:
return (obj: clsvRTViewpointRelaEN) => {
return obj.topicProposePeople === value;
}
case clsvRTViewpointRelaEN.con_UpdDate:
return (obj: clsvRTViewpointRelaEN) => {
return obj.updDate === value;
}
case clsvRTViewpointRelaEN.con_UpdUser:
return (obj: clsvRTViewpointRelaEN) => {
return obj.updUser === value;
}
case clsvRTViewpointRelaEN.con_Memo:
return (obj: clsvRTViewpointRelaEN) => {
return obj.memo === value;
}
case clsvRTViewpointRelaEN.con_IsSubmit:
return (obj: clsvRTViewpointRelaEN) => {
return obj.isSubmit === value;
}
case clsvRTViewpointRelaEN.con_AppraiseCount:
return (obj: clsvRTViewpointRelaEN) => {
return obj.appraiseCount === value;
}
case clsvRTViewpointRelaEN.con_OkCount:
return (obj: clsvRTViewpointRelaEN) => {
return obj.okCount === value;
}
case clsvRTViewpointRelaEN.con_Score:
return (obj: clsvRTViewpointRelaEN) => {
return obj.score === value;
}
case clsvRTViewpointRelaEN.con_UserTypeId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.userTypeId === value;
}
case clsvRTViewpointRelaEN.con_UserTypeName:
return (obj: clsvRTViewpointRelaEN) => {
return obj.userTypeName === value;
}
case clsvRTViewpointRelaEN.con_CitationCount:
return (obj: clsvRTViewpointRelaEN) => {
return obj.citationCount === value;
}
case clsvRTViewpointRelaEN.con_CitationId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.citationId === value;
}
case clsvRTViewpointRelaEN.con_StuScore:
return (obj: clsvRTViewpointRelaEN) => {
return obj.stuScore === value;
}
case clsvRTViewpointRelaEN.con_TeaScore:
return (obj: clsvRTViewpointRelaEN) => {
return obj.teaScore === value;
}
case clsvRTViewpointRelaEN.con_ViewsDate:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewsDate === value;
}
case clsvRTViewpointRelaEN.con_ViewsUserId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.viewsUserId === value;
}
case clsvRTViewpointRelaEN.con_IdCurrEduCls:
return (obj: clsvRTViewpointRelaEN) => {
return obj.idCurrEduCls === value;
}
case clsvRTViewpointRelaEN.con_PdfContent:
return (obj: clsvRTViewpointRelaEN) => {
return obj.pdfContent === value;
}
case clsvRTViewpointRelaEN.con_PdfPageNum:
return (obj: clsvRTViewpointRelaEN) => {
return obj.pdfPageNum === value;
}
case clsvRTViewpointRelaEN.con_VersionCount:
return (obj: clsvRTViewpointRelaEN) => {
return obj.versionCount === value;
}
case clsvRTViewpointRelaEN.con_CreateDate:
return (obj: clsvRTViewpointRelaEN) => {
return obj.createDate === value;
}
case clsvRTViewpointRelaEN.con_ShareId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.shareId === value;
}
case clsvRTViewpointRelaEN.con_IsRecommend:
return (obj: clsvRTViewpointRelaEN) => {
return obj.isRecommend === value;
}
case clsvRTViewpointRelaEN.con_ClassificationId:
return (obj: clsvRTViewpointRelaEN) => {
return obj.classificationId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTViewpointRela]中不存在!(in ${ vRTViewpointRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vRTViewpointRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vRTViewpointRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvRTViewpointRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const objvRTViewpointRela = vRTViewpointRela_GetObjFromJsonObj(returnObj);
return objvRTViewpointRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function vRTViewpointRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vRTViewpointRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvRTViewpointRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvRTViewpointRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvRTViewpointRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTViewpointRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vRTViewpointRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  async function vRTViewpointRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vRTViewpointRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTViewpointRela_ConstructorName, strThisFuncName);
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
export  function vRTViewpointRela_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTViewpointRela_GetJSONStrByObj (pobjvRTViewpointRelaEN: clsvRTViewpointRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvRTViewpointRelaEN);
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
export  function vRTViewpointRela_GetObjLstByJSONStr (strJSON: string): Array<clsvRTViewpointRelaEN>
{
let arrvRTViewpointRelaObjLst = new Array<clsvRTViewpointRelaEN>();
if (strJSON === "")
{
return arrvRTViewpointRelaObjLst;
}
try
{
arrvRTViewpointRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvRTViewpointRelaObjLst;
}
return arrvRTViewpointRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTViewpointRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vRTViewpointRela_GetObjLstByJSONObjLst (arrvRTViewpointRelaObjLstS: Array<clsvRTViewpointRelaEN>): Array<clsvRTViewpointRelaEN>
{
const arrvRTViewpointRelaObjLst = new Array<clsvRTViewpointRelaEN>();
for (const objInFor of arrvRTViewpointRelaObjLstS) {
const obj1 = vRTViewpointRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvRTViewpointRelaObjLst.push(obj1);
}
return arrvRTViewpointRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTViewpointRela_GetObjByJSONStr (strJSON: string): clsvRTViewpointRelaEN
{
let pobjvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
if (strJSON === "")
{
return pobjvRTViewpointRelaEN;
}
try
{
pobjvRTViewpointRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvRTViewpointRelaEN;
}
return pobjvRTViewpointRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vRTViewpointRela_GetCombineCondition(objvRTViewpointRelaCond: clsvRTViewpointRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_mId, objvRTViewpointRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ViewpointName) == true)
{
const strComparisonOpViewpointName:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ViewpointName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ViewpointName, objvRTViewpointRelaCond.viewpointName, strComparisonOpViewpointName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ViewpointId, objvRTViewpointRelaCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ProposePeople) == true)
{
const strComparisonOpProposePeople:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ProposePeople, objvRTViewpointRelaCond.proposePeople, strComparisonOpProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ViewpointTypeId) == true)
{
const strComparisonOpViewpointTypeId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ViewpointTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ViewpointTypeId, objvRTViewpointRelaCond.viewpointTypeId, strComparisonOpViewpointTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ViewpointTypeName) == true)
{
const strComparisonOpViewpointTypeName:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ViewpointTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ViewpointTypeName, objvRTViewpointRelaCond.viewpointTypeName, strComparisonOpViewpointTypeName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_Source) == true)
{
const strComparisonOpSource:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_Source];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_Source, objvRTViewpointRelaCond.source, strComparisonOpSource);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_TopicId, objvRTViewpointRelaCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_TopicName) == true)
{
const strComparisonOpTopicName:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_TopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_TopicName, objvRTViewpointRelaCond.topicName, strComparisonOpTopicName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_TopicProposePeople) == true)
{
const strComparisonOpTopicProposePeople:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_TopicProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_TopicProposePeople, objvRTViewpointRelaCond.topicProposePeople, strComparisonOpTopicProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_UpdDate, objvRTViewpointRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_UpdUser, objvRTViewpointRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_Memo, objvRTViewpointRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_IsSubmit) == true)
{
if (objvRTViewpointRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTViewpointRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTViewpointRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_AppraiseCount, objvRTViewpointRelaCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_OkCount, objvRTViewpointRelaCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_Score) == true)
{
const strComparisonOpScore:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_Score, objvRTViewpointRelaCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_UserTypeId, objvRTViewpointRelaCond.userTypeId, strComparisonOpUserTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_UserTypeName) == true)
{
const strComparisonOpUserTypeName:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_UserTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_UserTypeName, objvRTViewpointRelaCond.userTypeName, strComparisonOpUserTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_CitationCount, objvRTViewpointRelaCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_CitationId) == true)
{
const strComparisonOpCitationId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_CitationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_CitationId, objvRTViewpointRelaCond.citationId, strComparisonOpCitationId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_StuScore, objvRTViewpointRelaCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_TeaScore, objvRTViewpointRelaCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ViewsDate) == true)
{
const strComparisonOpViewsDate:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ViewsDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ViewsDate, objvRTViewpointRelaCond.viewsDate, strComparisonOpViewsDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ViewsUserId) == true)
{
const strComparisonOpViewsUserId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ViewsUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ViewsUserId, objvRTViewpointRelaCond.viewsUserId, strComparisonOpViewsUserId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_IdCurrEduCls, objvRTViewpointRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_PdfContent, objvRTViewpointRelaCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_PdfPageNum, objvRTViewpointRelaCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_VersionCount, objvRTViewpointRelaCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_CreateDate, objvRTViewpointRelaCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTViewpointRelaEN.con_ShareId, objvRTViewpointRelaCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_IsRecommend) == true)
{
if (objvRTViewpointRelaCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTViewpointRelaEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTViewpointRelaEN.con_IsRecommend);
}
}
if (Object.prototype.hasOwnProperty.call(objvRTViewpointRelaCond.dicFldComparisonOp, clsvRTViewpointRelaEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objvRTViewpointRelaCond.dicFldComparisonOp[clsvRTViewpointRelaEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} {1}", clsvRTViewpointRelaEN.con_ClassificationId, objvRTViewpointRelaCond.classificationId, strComparisonOpClassificationId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTViewpointRelaENS:源对象
 * @param objvRTViewpointRelaENT:目标对象
*/
export  function vRTViewpointRela_CopyObjTo(objvRTViewpointRelaENS: clsvRTViewpointRelaEN , objvRTViewpointRelaENT: clsvRTViewpointRelaEN ): void 
{
objvRTViewpointRelaENT.mId = objvRTViewpointRelaENS.mId; //mId
objvRTViewpointRelaENT.viewpointName = objvRTViewpointRelaENS.viewpointName; //观点名称
objvRTViewpointRelaENT.viewpointContent = objvRTViewpointRelaENS.viewpointContent; //观点内容
objvRTViewpointRelaENT.viewpointId = objvRTViewpointRelaENS.viewpointId; //观点Id
objvRTViewpointRelaENT.proposePeople = objvRTViewpointRelaENS.proposePeople; //提出人
objvRTViewpointRelaENT.viewpointTypeId = objvRTViewpointRelaENS.viewpointTypeId; //观点类型Id
objvRTViewpointRelaENT.viewpointTypeName = objvRTViewpointRelaENS.viewpointTypeName; //观点类型名
objvRTViewpointRelaENT.reason = objvRTViewpointRelaENS.reason; //理由
objvRTViewpointRelaENT.source = objvRTViewpointRelaENS.source; //来源
objvRTViewpointRelaENT.topicId = objvRTViewpointRelaENS.topicId; //主题Id
objvRTViewpointRelaENT.topicName = objvRTViewpointRelaENS.topicName; //栏目主题
objvRTViewpointRelaENT.topicContent = objvRTViewpointRelaENS.topicContent; //主题内容
objvRTViewpointRelaENT.topicProposePeople = objvRTViewpointRelaENS.topicProposePeople; //主题提出人
objvRTViewpointRelaENT.updDate = objvRTViewpointRelaENS.updDate; //修改日期
objvRTViewpointRelaENT.updUser = objvRTViewpointRelaENS.updUser; //修改人
objvRTViewpointRelaENT.memo = objvRTViewpointRelaENS.memo; //备注
objvRTViewpointRelaENT.isSubmit = objvRTViewpointRelaENS.isSubmit; //是否提交
objvRTViewpointRelaENT.appraiseCount = objvRTViewpointRelaENS.appraiseCount; //评论数
objvRTViewpointRelaENT.okCount = objvRTViewpointRelaENS.okCount; //点赞统计
objvRTViewpointRelaENT.score = objvRTViewpointRelaENS.score; //评分
objvRTViewpointRelaENT.userTypeId = objvRTViewpointRelaENS.userTypeId; //用户类型Id
objvRTViewpointRelaENT.userTypeName = objvRTViewpointRelaENS.userTypeName; //用户类型名称
objvRTViewpointRelaENT.citationCount = objvRTViewpointRelaENS.citationCount; //引用统计
objvRTViewpointRelaENT.citationId = objvRTViewpointRelaENS.citationId; //引用Id
objvRTViewpointRelaENT.stuScore = objvRTViewpointRelaENS.stuScore; //学生平均分
objvRTViewpointRelaENT.teaScore = objvRTViewpointRelaENS.teaScore; //教师评分
objvRTViewpointRelaENT.viewsDate = objvRTViewpointRelaENS.viewsDate; //观点日期
objvRTViewpointRelaENT.viewsUserId = objvRTViewpointRelaENS.viewsUserId; //观点用户Id
objvRTViewpointRelaENT.idCurrEduCls = objvRTViewpointRelaENS.idCurrEduCls; //教学班流水号
objvRTViewpointRelaENT.pdfContent = objvRTViewpointRelaENS.pdfContent; //Pdf内容
objvRTViewpointRelaENT.pdfPageNum = objvRTViewpointRelaENS.pdfPageNum; //Pdf页码
objvRTViewpointRelaENT.versionCount = objvRTViewpointRelaENS.versionCount; //版本统计
objvRTViewpointRelaENT.createDate = objvRTViewpointRelaENS.createDate; //建立日期
objvRTViewpointRelaENT.shareId = objvRTViewpointRelaENS.shareId; //分享Id
objvRTViewpointRelaENT.isRecommend = objvRTViewpointRelaENS.isRecommend; //是否推荐
objvRTViewpointRelaENT.classificationId = objvRTViewpointRelaENS.classificationId; //分类Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTViewpointRelaENS:源对象
 * @param objvRTViewpointRelaENT:目标对象
*/
export  function vRTViewpointRela_GetObjFromJsonObj(objvRTViewpointRelaENS: clsvRTViewpointRelaEN): clsvRTViewpointRelaEN 
{
 const objvRTViewpointRelaENT: clsvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
ObjectAssign(objvRTViewpointRelaENT, objvRTViewpointRelaENS);
 return objvRTViewpointRelaENT;
}