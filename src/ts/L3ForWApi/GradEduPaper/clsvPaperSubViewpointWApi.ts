
 /**
 * 类名:clsvPaperSubViewpointWApi
 * 表名:vPaperSubViewpoint(01120551)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:31
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
 * v子观点表(vPaperSubViewpoint)
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
import { clsvPaperSubViewpointEN } from "@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vPaperSubViewpoint_Controller = "vPaperSubViewpointApi";
 export const vPaperSubViewpoint_ConstructorName = "vPaperSubViewpoint";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngSubViewpointId:关键字
 * @returns 对象
 **/
export  async function vPaperSubViewpoint_GetObjBySubViewpointIdAsync(lngSubViewpointId: number): Promise<clsvPaperSubViewpointEN|null>  
{
const strThisFuncName = "GetObjBySubViewpointIdAsync";

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvPaperSubViewpointWApi.GetObjBySubViewpointIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBySubViewpointId";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
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
const objvPaperSubViewpoint = vPaperSubViewpoint_GetObjFromJsonObj(returnObj);
return objvPaperSubViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
*/
export  async function vPaperSubViewpoint_GetObjBySubViewpointIdCache(lngSubViewpointId:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBySubViewpointIdCache";

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvPaperSubViewpointWApi.GetObjBySubViewpointIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
try
{
const arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache.filter(x => 
 x.subViewpointId == lngSubViewpointId );
let objvPaperSubViewpoint: clsvPaperSubViewpointEN;
if (arrvPaperSubViewpointSel.length > 0)
{
objvPaperSubViewpoint = arrvPaperSubViewpointSel[0];
return objvPaperSubViewpoint;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvPaperSubViewpointConst = await vPaperSubViewpoint_GetObjBySubViewpointIdAsync(lngSubViewpointId);
if (objvPaperSubViewpointConst != null)
{
vPaperSubViewpoint_ReFreshThisCache(strIdCurrEduCls);
return objvPaperSubViewpointConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngSubViewpointId, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
*/
export  async function vPaperSubViewpoint_GetObjBySubViewpointIdlocalStorage(lngSubViewpointId: number) {
const strThisFuncName = "GetObjBySubViewpointIdlocalStorage";

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvPaperSubViewpointWApi.GetObjBySubViewpointIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, lngSubViewpointId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvPaperSubViewpointCache: clsvPaperSubViewpointEN = JSON.parse(strTempObj);
return objvPaperSubViewpointCache;
}
try
{
const objvPaperSubViewpoint = await vPaperSubViewpoint_GetObjBySubViewpointIdAsync(lngSubViewpointId);
if (objvPaperSubViewpoint != null)
{
localStorage.setItem(strKey, JSON.stringify(objvPaperSubViewpoint));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvPaperSubViewpoint;
}
return objvPaperSubViewpoint;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngSubViewpointId, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvPaperSubViewpointWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvPaperSubViewpointWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvPaperSubViewpointEN.con_SubViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvPaperSubViewpointEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvPaperSubViewpointEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngSubViewpointId = Number(strInValue);
if (lngSubViewpointId == 0)
{
return "";
}
const objvPaperSubViewpoint = await vPaperSubViewpoint_GetObjBySubViewpointIdCache(lngSubViewpointId , strIdCurrEduClsClassfy);
if (objvPaperSubViewpoint == null) return "";
if (objvPaperSubViewpoint.GetFldValue(strOutFldName) == null) return "";
return objvPaperSubViewpoint.GetFldValue(strOutFldName).toString();
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
export  function vPaperSubViewpoint_SortFunDefa(a:clsvPaperSubViewpointEN , b:clsvPaperSubViewpointEN): number 
{
return a.subViewpointId-b.subViewpointId;
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
export  function vPaperSubViewpoint_SortFunDefa2Fld(a:clsvPaperSubViewpointEN , b:clsvPaperSubViewpointEN): number 
{
if (a.subViewpointContent == b.subViewpointContent) return a.paperRWId.localeCompare(b.paperRWId);
else return a.subViewpointContent.localeCompare(b.subViewpointContent);
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
export  function vPaperSubViewpoint_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvPaperSubViewpointEN.con_SubViewpointId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.subViewpointId-b.subViewpointId;
}
case clsvPaperSubViewpointEN.con_SubViewpointContent:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.subViewpointContent == null) return -1;
if (b.subViewpointContent == null) return 1;
return a.subViewpointContent.localeCompare(b.subViewpointContent);
}
case clsvPaperSubViewpointEN.con_PaperRWId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.paperRWId == null) return -1;
if (b.paperRWId == null) return 1;
return a.paperRWId.localeCompare(b.paperRWId);
}
case clsvPaperSubViewpointEN.con_PaperId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvPaperSubViewpointEN.con_PaperTitle:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvPaperSubViewpointEN.con_IsSubmit:
return (a: clsvPaperSubViewpointEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvPaperSubViewpointEN.con_IdCurrEduCls:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvPaperSubViewpointEN.con_UserId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvPaperSubViewpointEN.con_SectionId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvPaperSubViewpointEN.con_SectionName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.subViewpointTypeId.localeCompare(b.subViewpointTypeId);
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.subViewpointTypeName == null) return -1;
if (b.subViewpointTypeName == null) return 1;
return a.subViewpointTypeName.localeCompare(b.subViewpointTypeName);
}
case clsvPaperSubViewpointEN.con_DefaTitle:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.defaTitle == null) return -1;
if (b.defaTitle == null) return 1;
return a.defaTitle.localeCompare(b.defaTitle);
}
case clsvPaperSubViewpointEN.con_gsKnowledgeTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
}
case clsvPaperSubViewpointEN.con_RWTitle:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.rWTitle == null) return -1;
if (b.rWTitle == null) return 1;
return a.rWTitle.localeCompare(b.rWTitle);
}
case clsvPaperSubViewpointEN.con_ExplainTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.explainTypeId == null) return -1;
if (b.explainTypeId == null) return 1;
return a.explainTypeId.localeCompare(b.explainTypeId);
}
case clsvPaperSubViewpointEN.con_ExplainTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.explainTypeName == null) return -1;
if (b.explainTypeName == null) return 1;
return a.explainTypeName.localeCompare(b.explainTypeName);
}
case clsvPaperSubViewpointEN.con_ExplainContent:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.explainContent == null) return -1;
if (b.explainContent == null) return 1;
return a.explainContent.localeCompare(b.explainContent);
}
case clsvPaperSubViewpointEN.con_IsPublic:
return (a: clsvPaperSubViewpointEN) => {
if (a.isPublic == true) return 1;
else return -1
}
case clsvPaperSubViewpointEN.con_LiteratureSourcesId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.literatureSourcesId == null) return -1;
if (b.literatureSourcesId == null) return 1;
return a.literatureSourcesId.localeCompare(b.literatureSourcesId);
}
case clsvPaperSubViewpointEN.con_OperationTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.operationTypeId == null) return -1;
if (b.operationTypeId == null) return 1;
return a.operationTypeId.localeCompare(b.operationTypeId);
}
case clsvPaperSubViewpointEN.con_LevelId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsvPaperSubViewpointEN.con_Conclusion:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.conclusion == null) return -1;
if (b.conclusion == null) return 1;
return a.conclusion.localeCompare(b.conclusion);
}
case clsvPaperSubViewpointEN.con_Nationality:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.nationality == null) return -1;
if (b.nationality == null) return 1;
return a.nationality.localeCompare(b.nationality);
}
case clsvPaperSubViewpointEN.con_Achievement:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.achievement == null) return -1;
if (b.achievement == null) return 1;
return a.achievement.localeCompare(b.achievement);
}
case clsvPaperSubViewpointEN.con_Major:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.major == null) return -1;
if (b.major == null) return 1;
return a.major.localeCompare(b.major);
}
case clsvPaperSubViewpointEN.con_WorkUnit:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.workUnit == null) return -1;
if (b.workUnit == null) return 1;
return a.workUnit.localeCompare(b.workUnit);
}
case clsvPaperSubViewpointEN.con_PageNumber:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.pageNumber-b.pageNumber;
}
case clsvPaperSubViewpointEN.con_OrderNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.orderNum-b.orderNum;
}
case clsvPaperSubViewpointEN.con_PdfContent:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvPaperSubViewpointEN.con_selectSpanRange:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.selectSpanRange == null) return -1;
if (b.selectSpanRange == null) return 1;
return a.selectSpanRange.localeCompare(b.selectSpanRange);
}
case clsvPaperSubViewpointEN.con_PaperLineNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.paperLineNum-b.paperLineNum;
}
case clsvPaperSubViewpointEN.con_PaperPageNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.paperPageNum-b.paperPageNum;
}
case clsvPaperSubViewpointEN.con_AppraiseCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvPaperSubViewpointEN.con_OkCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.okCount-b.okCount;
}
case clsvPaperSubViewpointEN.con_Score:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.score-b.score;
}
case clsvPaperSubViewpointEN.con_StuScore:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.stuScore-b.stuScore;
}
case clsvPaperSubViewpointEN.con_TeaScore:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.teaScore-b.teaScore;
}
case clsvPaperSubViewpointEN.con_CreateDate:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvPaperSubViewpointEN.con_ShareId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.shareId.localeCompare(b.shareId);
}
case clsvPaperSubViewpointEN.con_AttitudesId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.attitudesId.localeCompare(b.attitudesId);
}
case clsvPaperSubViewpointEN.con_AttitudesName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.attitudesName == null) return -1;
if (b.attitudesName == null) return 1;
return a.attitudesName.localeCompare(b.attitudesName);
}
case clsvPaperSubViewpointEN.con_UpdDate:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvPaperSubViewpointEN.con_UpdUser:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvPaperSubViewpointEN.con_Memo:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvPaperSubViewpointEN.con_SectionOrderNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.sectionOrderNum-b.sectionOrderNum;
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeOrderNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.subViewpointTypeOrderNum-b.subViewpointTypeOrderNum;
}
case clsvPaperSubViewpointEN.con_CitationCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.citationCount-b.citationCount;
}
case clsvPaperSubViewpointEN.con_VersionCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.versionCount-b.versionCount;
}
case clsvPaperSubViewpointEN.con_IsRecommend:
return (a: clsvPaperSubViewpointEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
case clsvPaperSubViewpointEN.con_gsKnowledgeTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return a.gsKnowledgeTypeName.localeCompare(b.gsKnowledgeTypeName);
}
case clsvPaperSubViewpointEN.con_LevelName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.levelName == null) return -1;
if (b.levelName == null) return 1;
return a.levelName.localeCompare(b.levelName);
}
case clsvPaperSubViewpointEN.con_OperationTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.operationTypeName == null) return -1;
if (b.operationTypeName == null) return 1;
return a.operationTypeName.localeCompare(b.operationTypeName);
}
case clsvPaperSubViewpointEN.con_CourseId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperSubViewpoint]中不存在!(in ${ vPaperSubViewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvPaperSubViewpointEN.con_SubViewpointId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.subViewpointId-a.subViewpointId;
}
case clsvPaperSubViewpointEN.con_SubViewpointContent:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.subViewpointContent == null) return -1;
if (a.subViewpointContent == null) return 1;
return b.subViewpointContent.localeCompare(a.subViewpointContent);
}
case clsvPaperSubViewpointEN.con_PaperRWId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.paperRWId == null) return -1;
if (a.paperRWId == null) return 1;
return b.paperRWId.localeCompare(a.paperRWId);
}
case clsvPaperSubViewpointEN.con_PaperId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvPaperSubViewpointEN.con_PaperTitle:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvPaperSubViewpointEN.con_IsSubmit:
return (b: clsvPaperSubViewpointEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvPaperSubViewpointEN.con_IdCurrEduCls:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvPaperSubViewpointEN.con_UserId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvPaperSubViewpointEN.con_SectionId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvPaperSubViewpointEN.con_SectionName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.subViewpointTypeId.localeCompare(a.subViewpointTypeId);
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.subViewpointTypeName == null) return -1;
if (a.subViewpointTypeName == null) return 1;
return b.subViewpointTypeName.localeCompare(a.subViewpointTypeName);
}
case clsvPaperSubViewpointEN.con_DefaTitle:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.defaTitle == null) return -1;
if (a.defaTitle == null) return 1;
return b.defaTitle.localeCompare(a.defaTitle);
}
case clsvPaperSubViewpointEN.con_gsKnowledgeTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.gsKnowledgeTypeId.localeCompare(a.gsKnowledgeTypeId);
}
case clsvPaperSubViewpointEN.con_RWTitle:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.rWTitle == null) return -1;
if (a.rWTitle == null) return 1;
return b.rWTitle.localeCompare(a.rWTitle);
}
case clsvPaperSubViewpointEN.con_ExplainTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.explainTypeId == null) return -1;
if (a.explainTypeId == null) return 1;
return b.explainTypeId.localeCompare(a.explainTypeId);
}
case clsvPaperSubViewpointEN.con_ExplainTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.explainTypeName == null) return -1;
if (a.explainTypeName == null) return 1;
return b.explainTypeName.localeCompare(a.explainTypeName);
}
case clsvPaperSubViewpointEN.con_ExplainContent:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.explainContent == null) return -1;
if (a.explainContent == null) return 1;
return b.explainContent.localeCompare(a.explainContent);
}
case clsvPaperSubViewpointEN.con_IsPublic:
return (b: clsvPaperSubViewpointEN) => {
if (b.isPublic == true) return 1;
else return -1
}
case clsvPaperSubViewpointEN.con_LiteratureSourcesId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.literatureSourcesId == null) return -1;
if (a.literatureSourcesId == null) return 1;
return b.literatureSourcesId.localeCompare(a.literatureSourcesId);
}
case clsvPaperSubViewpointEN.con_OperationTypeId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.operationTypeId == null) return -1;
if (a.operationTypeId == null) return 1;
return b.operationTypeId.localeCompare(a.operationTypeId);
}
case clsvPaperSubViewpointEN.con_LevelId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsvPaperSubViewpointEN.con_Conclusion:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.conclusion == null) return -1;
if (a.conclusion == null) return 1;
return b.conclusion.localeCompare(a.conclusion);
}
case clsvPaperSubViewpointEN.con_Nationality:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.nationality == null) return -1;
if (a.nationality == null) return 1;
return b.nationality.localeCompare(a.nationality);
}
case clsvPaperSubViewpointEN.con_Achievement:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.achievement == null) return -1;
if (a.achievement == null) return 1;
return b.achievement.localeCompare(a.achievement);
}
case clsvPaperSubViewpointEN.con_Major:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.major == null) return -1;
if (a.major == null) return 1;
return b.major.localeCompare(a.major);
}
case clsvPaperSubViewpointEN.con_WorkUnit:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.workUnit == null) return -1;
if (a.workUnit == null) return 1;
return b.workUnit.localeCompare(a.workUnit);
}
case clsvPaperSubViewpointEN.con_PageNumber:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.pageNumber-a.pageNumber;
}
case clsvPaperSubViewpointEN.con_OrderNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.orderNum-a.orderNum;
}
case clsvPaperSubViewpointEN.con_PdfContent:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvPaperSubViewpointEN.con_selectSpanRange:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.selectSpanRange == null) return -1;
if (a.selectSpanRange == null) return 1;
return b.selectSpanRange.localeCompare(a.selectSpanRange);
}
case clsvPaperSubViewpointEN.con_PaperLineNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.paperLineNum-a.paperLineNum;
}
case clsvPaperSubViewpointEN.con_PaperPageNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.paperPageNum-a.paperPageNum;
}
case clsvPaperSubViewpointEN.con_AppraiseCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvPaperSubViewpointEN.con_OkCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.okCount-a.okCount;
}
case clsvPaperSubViewpointEN.con_Score:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.score-a.score;
}
case clsvPaperSubViewpointEN.con_StuScore:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.stuScore-a.stuScore;
}
case clsvPaperSubViewpointEN.con_TeaScore:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.teaScore-a.teaScore;
}
case clsvPaperSubViewpointEN.con_CreateDate:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvPaperSubViewpointEN.con_ShareId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.shareId.localeCompare(a.shareId);
}
case clsvPaperSubViewpointEN.con_AttitudesId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.attitudesId.localeCompare(a.attitudesId);
}
case clsvPaperSubViewpointEN.con_AttitudesName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.attitudesName == null) return -1;
if (a.attitudesName == null) return 1;
return b.attitudesName.localeCompare(a.attitudesName);
}
case clsvPaperSubViewpointEN.con_UpdDate:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvPaperSubViewpointEN.con_UpdUser:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvPaperSubViewpointEN.con_Memo:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvPaperSubViewpointEN.con_SectionOrderNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.sectionOrderNum-a.sectionOrderNum;
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeOrderNum:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.subViewpointTypeOrderNum-a.subViewpointTypeOrderNum;
}
case clsvPaperSubViewpointEN.con_CitationCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.citationCount-a.citationCount;
}
case clsvPaperSubViewpointEN.con_VersionCount:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.versionCount-a.versionCount;
}
case clsvPaperSubViewpointEN.con_IsRecommend:
return (b: clsvPaperSubViewpointEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
case clsvPaperSubViewpointEN.con_gsKnowledgeTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
return b.gsKnowledgeTypeName.localeCompare(a.gsKnowledgeTypeName);
}
case clsvPaperSubViewpointEN.con_LevelName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.levelName == null) return -1;
if (a.levelName == null) return 1;
return b.levelName.localeCompare(a.levelName);
}
case clsvPaperSubViewpointEN.con_OperationTypeName:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.operationTypeName == null) return -1;
if (a.operationTypeName == null) return 1;
return b.operationTypeName.localeCompare(a.operationTypeName);
}
case clsvPaperSubViewpointEN.con_CourseId:
return (a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperSubViewpoint]中不存在!(in ${ vPaperSubViewpoint_ConstructorName}.${ strThisFuncName})`;
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
export  async function vPaperSubViewpoint_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvPaperSubViewpointEN.con_SubViewpointId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.subViewpointId === value;
}
case clsvPaperSubViewpointEN.con_SubViewpointContent:
return (obj: clsvPaperSubViewpointEN) => {
return obj.subViewpointContent === value;
}
case clsvPaperSubViewpointEN.con_PaperRWId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.paperRWId === value;
}
case clsvPaperSubViewpointEN.con_PaperId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.paperId === value;
}
case clsvPaperSubViewpointEN.con_PaperTitle:
return (obj: clsvPaperSubViewpointEN) => {
return obj.paperTitle === value;
}
case clsvPaperSubViewpointEN.con_IsSubmit:
return (obj: clsvPaperSubViewpointEN) => {
return obj.isSubmit === value;
}
case clsvPaperSubViewpointEN.con_IdCurrEduCls:
return (obj: clsvPaperSubViewpointEN) => {
return obj.idCurrEduCls === value;
}
case clsvPaperSubViewpointEN.con_UserId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.userId === value;
}
case clsvPaperSubViewpointEN.con_SectionId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.sectionId === value;
}
case clsvPaperSubViewpointEN.con_SectionName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.sectionName === value;
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.subViewpointTypeId === value;
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.subViewpointTypeName === value;
}
case clsvPaperSubViewpointEN.con_DefaTitle:
return (obj: clsvPaperSubViewpointEN) => {
return obj.defaTitle === value;
}
case clsvPaperSubViewpointEN.con_gsKnowledgeTypeId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.gsKnowledgeTypeId === value;
}
case clsvPaperSubViewpointEN.con_RWTitle:
return (obj: clsvPaperSubViewpointEN) => {
return obj.rWTitle === value;
}
case clsvPaperSubViewpointEN.con_ExplainTypeId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.explainTypeId === value;
}
case clsvPaperSubViewpointEN.con_ExplainTypeName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.explainTypeName === value;
}
case clsvPaperSubViewpointEN.con_ExplainContent:
return (obj: clsvPaperSubViewpointEN) => {
return obj.explainContent === value;
}
case clsvPaperSubViewpointEN.con_IsPublic:
return (obj: clsvPaperSubViewpointEN) => {
return obj.isPublic === value;
}
case clsvPaperSubViewpointEN.con_LiteratureSourcesId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.literatureSourcesId === value;
}
case clsvPaperSubViewpointEN.con_OperationTypeId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.operationTypeId === value;
}
case clsvPaperSubViewpointEN.con_LevelId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.levelId === value;
}
case clsvPaperSubViewpointEN.con_Conclusion:
return (obj: clsvPaperSubViewpointEN) => {
return obj.conclusion === value;
}
case clsvPaperSubViewpointEN.con_Nationality:
return (obj: clsvPaperSubViewpointEN) => {
return obj.nationality === value;
}
case clsvPaperSubViewpointEN.con_Achievement:
return (obj: clsvPaperSubViewpointEN) => {
return obj.achievement === value;
}
case clsvPaperSubViewpointEN.con_Major:
return (obj: clsvPaperSubViewpointEN) => {
return obj.major === value;
}
case clsvPaperSubViewpointEN.con_WorkUnit:
return (obj: clsvPaperSubViewpointEN) => {
return obj.workUnit === value;
}
case clsvPaperSubViewpointEN.con_PageNumber:
return (obj: clsvPaperSubViewpointEN) => {
return obj.pageNumber === value;
}
case clsvPaperSubViewpointEN.con_OrderNum:
return (obj: clsvPaperSubViewpointEN) => {
return obj.orderNum === value;
}
case clsvPaperSubViewpointEN.con_PdfContent:
return (obj: clsvPaperSubViewpointEN) => {
return obj.pdfContent === value;
}
case clsvPaperSubViewpointEN.con_selectSpanRange:
return (obj: clsvPaperSubViewpointEN) => {
return obj.selectSpanRange === value;
}
case clsvPaperSubViewpointEN.con_PaperLineNum:
return (obj: clsvPaperSubViewpointEN) => {
return obj.paperLineNum === value;
}
case clsvPaperSubViewpointEN.con_PaperPageNum:
return (obj: clsvPaperSubViewpointEN) => {
return obj.paperPageNum === value;
}
case clsvPaperSubViewpointEN.con_AppraiseCount:
return (obj: clsvPaperSubViewpointEN) => {
return obj.appraiseCount === value;
}
case clsvPaperSubViewpointEN.con_OkCount:
return (obj: clsvPaperSubViewpointEN) => {
return obj.okCount === value;
}
case clsvPaperSubViewpointEN.con_Score:
return (obj: clsvPaperSubViewpointEN) => {
return obj.score === value;
}
case clsvPaperSubViewpointEN.con_StuScore:
return (obj: clsvPaperSubViewpointEN) => {
return obj.stuScore === value;
}
case clsvPaperSubViewpointEN.con_TeaScore:
return (obj: clsvPaperSubViewpointEN) => {
return obj.teaScore === value;
}
case clsvPaperSubViewpointEN.con_CreateDate:
return (obj: clsvPaperSubViewpointEN) => {
return obj.createDate === value;
}
case clsvPaperSubViewpointEN.con_ShareId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.shareId === value;
}
case clsvPaperSubViewpointEN.con_AttitudesId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.attitudesId === value;
}
case clsvPaperSubViewpointEN.con_AttitudesName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.attitudesName === value;
}
case clsvPaperSubViewpointEN.con_UpdDate:
return (obj: clsvPaperSubViewpointEN) => {
return obj.updDate === value;
}
case clsvPaperSubViewpointEN.con_UpdUser:
return (obj: clsvPaperSubViewpointEN) => {
return obj.updUser === value;
}
case clsvPaperSubViewpointEN.con_Memo:
return (obj: clsvPaperSubViewpointEN) => {
return obj.memo === value;
}
case clsvPaperSubViewpointEN.con_SectionOrderNum:
return (obj: clsvPaperSubViewpointEN) => {
return obj.sectionOrderNum === value;
}
case clsvPaperSubViewpointEN.con_SubViewpointTypeOrderNum:
return (obj: clsvPaperSubViewpointEN) => {
return obj.subViewpointTypeOrderNum === value;
}
case clsvPaperSubViewpointEN.con_CitationCount:
return (obj: clsvPaperSubViewpointEN) => {
return obj.citationCount === value;
}
case clsvPaperSubViewpointEN.con_VersionCount:
return (obj: clsvPaperSubViewpointEN) => {
return obj.versionCount === value;
}
case clsvPaperSubViewpointEN.con_IsRecommend:
return (obj: clsvPaperSubViewpointEN) => {
return obj.isRecommend === value;
}
case clsvPaperSubViewpointEN.con_gsKnowledgeTypeName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.gsKnowledgeTypeName === value;
}
case clsvPaperSubViewpointEN.con_LevelName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.levelName === value;
}
case clsvPaperSubViewpointEN.con_OperationTypeName:
return (obj: clsvPaperSubViewpointEN) => {
return obj.operationTypeName === value;
}
case clsvPaperSubViewpointEN.con_CourseId:
return (obj: clsvPaperSubViewpointEN) => {
return obj.courseId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperSubViewpoint]中不存在!(in ${ vPaperSubViewpoint_ConstructorName}.${ strThisFuncName})`;
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
export  async function vPaperSubViewpoint_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvPaperSubViewpointWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvPaperSubViewpointWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvPaperSubViewpointEN.con_SubViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvPaperSubViewpoint = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrvPaperSubViewpoint == null) return [];
let arrvPaperSubViewpointSel = arrvPaperSubViewpoint;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvPaperSubViewpointSel.length == 0) return [];
return arrvPaperSubViewpointSel.map(x=>x.subViewpointId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vPaperSubViewpoint_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetFirstObjAsync(strWhereCond: string): Promise<clsvPaperSubViewpointEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const objvPaperSubViewpoint = vPaperSubViewpoint_GetObjFromJsonObj(returnObj);
return objvPaperSubViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvPaperSubViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsvPaperSubViewpointEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvPaperSubViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvPaperSubViewpointEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvPaperSubViewpointExObjLstCache: Array<clsvPaperSubViewpointEN> = CacheHelper.Get(strKey);
const arrvPaperSubViewpointObjLstT = vPaperSubViewpoint_GetObjLstByJSONObjLst(arrvPaperSubViewpointExObjLstCache);
return arrvPaperSubViewpointObjLstT;
}
try
{
const arrvPaperSubViewpointExObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvPaperSubViewpointExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvPaperSubViewpointExObjLst.length);
console.log(strInfo);
return arrvPaperSubViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvPaperSubViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsvPaperSubViewpointEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvPaperSubViewpointEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvPaperSubViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvPaperSubViewpointEN.CacheAddiCondition);
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
const arrvPaperSubViewpointExObjLstCache: Array<clsvPaperSubViewpointEN> = JSON.parse(strTempObjLst);
const arrvPaperSubViewpointObjLstT = vPaperSubViewpoint_GetObjLstByJSONObjLst(arrvPaperSubViewpointExObjLstCache);
return arrvPaperSubViewpointObjLstT;
}
try
{
const arrvPaperSubViewpointExObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvPaperSubViewpointExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvPaperSubViewpointExObjLst.length);
console.log(strInfo);
return arrvPaperSubViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvPaperSubViewpointObjLstCache: Array<clsvPaperSubViewpointEN> = JSON.parse(strTempObjLst);
return arrvPaperSubViewpointObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvPaperSubViewpointEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvPaperSubViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsvPaperSubViewpointEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvPaperSubViewpointEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvPaperSubViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvPaperSubViewpointEN.CacheAddiCondition);
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
const arrvPaperSubViewpointExObjLstCache: Array<clsvPaperSubViewpointEN> = JSON.parse(strTempObjLst);
const arrvPaperSubViewpointObjLstT = vPaperSubViewpoint_GetObjLstByJSONObjLst(arrvPaperSubViewpointExObjLstCache);
return arrvPaperSubViewpointObjLstT;
}
try
{
const arrvPaperSubViewpointExObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvPaperSubViewpointExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvPaperSubViewpointExObjLst.length);
console.log(strInfo);
return arrvPaperSubViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvPaperSubViewpointObjLstCache: Array<clsvPaperSubViewpointEN> = JSON.parse(strTempObjLst);
return arrvPaperSubViewpointObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsvPaperSubViewpointEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvPaperSubViewpointWApi.vPaperSubViewpoint_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvPaperSubViewpointWApi.vPaperSubViewpoint_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrvPaperSubViewpointObjLstCache;
switch (clsvPaperSubViewpointEN.CacheModeId)
{
case "04"://sessionStorage
arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrvPaperSubViewpointObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvPaperSubViewpointObjLstCache;
switch (clsvPaperSubViewpointEN.CacheModeId)
{
case "04"://sessionStorage
arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvPaperSubViewpointObjLstCache = null;
break;
default:
arrvPaperSubViewpointObjLstCache = null;
break;
}
return arrvPaperSubViewpointObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngSubViewpointIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vPaperSubViewpoint_GetSubObjLstCache(objvPaperSubViewpointCond: clsvPaperSubViewpointEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
let arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache;
if (objvPaperSubViewpointCond.sfFldComparisonOp == null || objvPaperSubViewpointCond.sfFldComparisonOp == "") return arrvPaperSubViewpointSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvPaperSubViewpointCond.sfFldComparisonOp);
//console.log("clsvPaperSubViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvPaperSubViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvPaperSubViewpointSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvPaperSubViewpointCond), vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvPaperSubViewpointEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSubViewpointId:关键字列表
 * @returns 对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstBySubViewpointIdLstAsync(arrSubViewpointId: Array<string>): Promise<Array<clsvPaperSubViewpointEN>>  
{
const strThisFuncName = "GetObjLstBySubViewpointIdLstAsync";
const strAction = "GetObjLstBySubViewpointIdLst";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSubViewpointId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
 * @param arrlngSubViewpointIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vPaperSubViewpoint_GetObjLstBySubViewpointIdLstCache(arrSubViewpointIdLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstBySubViewpointIdLstCache";
try
{
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
const arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache.filter(x => arrSubViewpointIdLst.indexOf(x.subViewpointId)>-1);
return arrvPaperSubViewpointSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSubViewpointIdLst.join(","), vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvPaperSubViewpointEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvPaperSubViewpointEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvPaperSubViewpointEN>();
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrvPaperSubViewpointObjLstCache.length == 0) return arrvPaperSubViewpointObjLstCache;
let arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvPaperSubViewpointCond = new clsvPaperSubViewpointEN();
ObjectAssign(objvPaperSubViewpointCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvPaperSubViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvPaperSubViewpointSel.length == 0) return arrvPaperSubViewpointSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.sort(vPaperSubViewpoint_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.sort(objPagerPara.sortFun);
}
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.slice(intStart, intEnd);     
return arrvPaperSubViewpointSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvPaperSubViewpointEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvPaperSubViewpointEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvPaperSubViewpointEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
 * @param objlngSubViewpointIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vPaperSubViewpoint_IsExistRecordCache(objvPaperSubViewpointCond: clsvPaperSubViewpointEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrvPaperSubViewpointObjLstCache == null) return false;
let arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache;
if (objvPaperSubViewpointCond.sfFldComparisonOp == null || objvPaperSubViewpointCond.sfFldComparisonOp == "") return arrvPaperSubViewpointSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvPaperSubViewpointCond.sfFldComparisonOp);
//console.log("clsvPaperSubViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvPaperSubViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvPaperSubViewpointSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvPaperSubViewpointCond), vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
*/
export  async function vPaperSubViewpoint_IsExistCache(lngSubViewpointId:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrvPaperSubViewpointObjLstCache == null) return false;
try
{
const arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache.filter(x => x.subViewpointId == lngSubViewpointId);
if (arrvPaperSubViewpointSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngSubViewpointId, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngSubViewpointId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vPaperSubViewpoint_IsExistAsync(lngSubViewpointId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSubViewpointId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vPaperSubViewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
 * @param objvPaperSubViewpointCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vPaperSubViewpoint_GetRecCountByCondCache(objvPaperSubViewpointCond: clsvPaperSubViewpointEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvPaperSubViewpointObjLstCache = await vPaperSubViewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrvPaperSubViewpointObjLstCache == null) return 0;
let arrvPaperSubViewpointSel = arrvPaperSubViewpointObjLstCache;
if (objvPaperSubViewpointCond.sfFldComparisonOp == null || objvPaperSubViewpointCond.sfFldComparisonOp == "") return arrvPaperSubViewpointSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvPaperSubViewpointCond.sfFldComparisonOp);
//console.log("clsvPaperSubViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvPaperSubViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointSel = arrvPaperSubViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvPaperSubViewpointSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvPaperSubViewpointCond), vPaperSubViewpoint_ConstructorName, strThisFuncName);
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
export  function vPaperSubViewpoint_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vPaperSubViewpoint_ReFreshThisCache(strIdCurrEduCls: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvPaperSubViewpointEN._CurrTabName, strIdCurrEduCls);
switch (clsvPaperSubViewpointEN.CacheModeId)
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
export  function vPaperSubViewpoint_GetJSONStrByObj (pobjvPaperSubViewpointEN: clsvPaperSubViewpointEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvPaperSubViewpointEN);
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
export  function vPaperSubViewpoint_GetObjLstByJSONStr (strJSON: string): Array<clsvPaperSubViewpointEN>
{
let arrvPaperSubViewpointObjLst = new Array<clsvPaperSubViewpointEN>();
if (strJSON === "")
{
return arrvPaperSubViewpointObjLst;
}
try
{
arrvPaperSubViewpointObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvPaperSubViewpointObjLst;
}
return arrvPaperSubViewpointObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPaperSubViewpointObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vPaperSubViewpoint_GetObjLstByJSONObjLst (arrvPaperSubViewpointObjLstS: Array<clsvPaperSubViewpointEN>): Array<clsvPaperSubViewpointEN>
{
const arrvPaperSubViewpointObjLst = new Array<clsvPaperSubViewpointEN>();
for (const objInFor of arrvPaperSubViewpointObjLstS) {
const obj1 = vPaperSubViewpoint_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvPaperSubViewpointObjLst.push(obj1);
}
return arrvPaperSubViewpointObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperSubViewpoint_GetObjByJSONStr (strJSON: string): clsvPaperSubViewpointEN
{
let pobjvPaperSubViewpointEN = new clsvPaperSubViewpointEN();
if (strJSON === "")
{
return pobjvPaperSubViewpointEN;
}
try
{
pobjvPaperSubViewpointEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvPaperSubViewpointEN;
}
return pobjvPaperSubViewpointEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vPaperSubViewpoint_GetCombineCondition(objvPaperSubViewpointCond: clsvPaperSubViewpointEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SubViewpointId) == true)
{
const strComparisonOpSubViewpointId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SubViewpointId];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_SubViewpointId, objvPaperSubViewpointCond.subViewpointId, strComparisonOpSubViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SubViewpointContent) == true)
{
const strComparisonOpSubViewpointContent:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SubViewpointContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_SubViewpointContent, objvPaperSubViewpointCond.subViewpointContent, strComparisonOpSubViewpointContent);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PaperRWId) == true)
{
const strComparisonOpPaperRWId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PaperRWId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_PaperRWId, objvPaperSubViewpointCond.paperRWId, strComparisonOpPaperRWId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_PaperId, objvPaperSubViewpointCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_PaperTitle, objvPaperSubViewpointCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_IsSubmit) == true)
{
if (objvPaperSubViewpointCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvPaperSubViewpointEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvPaperSubViewpointEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_IdCurrEduCls, objvPaperSubViewpointCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_UserId, objvPaperSubViewpointCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_SectionId, objvPaperSubViewpointCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_SectionName, objvPaperSubViewpointCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SubViewpointTypeId) == true)
{
const strComparisonOpSubViewpointTypeId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SubViewpointTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_SubViewpointTypeId, objvPaperSubViewpointCond.subViewpointTypeId, strComparisonOpSubViewpointTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SubViewpointTypeName) == true)
{
const strComparisonOpSubViewpointTypeName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SubViewpointTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_SubViewpointTypeName, objvPaperSubViewpointCond.subViewpointTypeName, strComparisonOpSubViewpointTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_DefaTitle) == true)
{
const strComparisonOpDefaTitle:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_DefaTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_DefaTitle, objvPaperSubViewpointCond.defaTitle, strComparisonOpDefaTitle);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_gsKnowledgeTypeId) == true)
{
const strComparisonOpgsKnowledgeTypeId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_gsKnowledgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_gsKnowledgeTypeId, objvPaperSubViewpointCond.gsKnowledgeTypeId, strComparisonOpgsKnowledgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_RWTitle) == true)
{
const strComparisonOpRWTitle:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_RWTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_RWTitle, objvPaperSubViewpointCond.rWTitle, strComparisonOpRWTitle);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_ExplainTypeId) == true)
{
const strComparisonOpExplainTypeId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_ExplainTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_ExplainTypeId, objvPaperSubViewpointCond.explainTypeId, strComparisonOpExplainTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_ExplainTypeName) == true)
{
const strComparisonOpExplainTypeName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_ExplainTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_ExplainTypeName, objvPaperSubViewpointCond.explainTypeName, strComparisonOpExplainTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_ExplainContent) == true)
{
const strComparisonOpExplainContent:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_ExplainContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_ExplainContent, objvPaperSubViewpointCond.explainContent, strComparisonOpExplainContent);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_IsPublic) == true)
{
if (objvPaperSubViewpointCond.isPublic == true)
{
strWhereCond += Format(" And {0} = '1'", clsvPaperSubViewpointEN.con_IsPublic);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvPaperSubViewpointEN.con_IsPublic);
}
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_LiteratureSourcesId) == true)
{
const strComparisonOpLiteratureSourcesId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_LiteratureSourcesId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_LiteratureSourcesId, objvPaperSubViewpointCond.literatureSourcesId, strComparisonOpLiteratureSourcesId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_OperationTypeId) == true)
{
const strComparisonOpOperationTypeId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_OperationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_OperationTypeId, objvPaperSubViewpointCond.operationTypeId, strComparisonOpOperationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_LevelId, objvPaperSubViewpointCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_Conclusion) == true)
{
const strComparisonOpConclusion:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_Conclusion];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_Conclusion, objvPaperSubViewpointCond.conclusion, strComparisonOpConclusion);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_Nationality) == true)
{
const strComparisonOpNationality:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_Nationality];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_Nationality, objvPaperSubViewpointCond.nationality, strComparisonOpNationality);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_Achievement) == true)
{
const strComparisonOpAchievement:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_Achievement];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_Achievement, objvPaperSubViewpointCond.achievement, strComparisonOpAchievement);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_Major) == true)
{
const strComparisonOpMajor:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_Major];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_Major, objvPaperSubViewpointCond.major, strComparisonOpMajor);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_WorkUnit) == true)
{
const strComparisonOpWorkUnit:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_WorkUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_WorkUnit, objvPaperSubViewpointCond.workUnit, strComparisonOpWorkUnit);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PageNumber) == true)
{
const strComparisonOpPageNumber:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PageNumber];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_PageNumber, objvPaperSubViewpointCond.pageNumber, strComparisonOpPageNumber);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_OrderNum, objvPaperSubViewpointCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_PdfContent, objvPaperSubViewpointCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_selectSpanRange) == true)
{
const strComparisonOpselectSpanRange:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_selectSpanRange];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_selectSpanRange, objvPaperSubViewpointCond.selectSpanRange, strComparisonOpselectSpanRange);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PaperLineNum) == true)
{
const strComparisonOpPaperLineNum:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PaperLineNum];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_PaperLineNum, objvPaperSubViewpointCond.paperLineNum, strComparisonOpPaperLineNum);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_PaperPageNum) == true)
{
const strComparisonOpPaperPageNum:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_PaperPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_PaperPageNum, objvPaperSubViewpointCond.paperPageNum, strComparisonOpPaperPageNum);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_AppraiseCount, objvPaperSubViewpointCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_OkCount, objvPaperSubViewpointCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_Score) == true)
{
const strComparisonOpScore:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_Score, objvPaperSubViewpointCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_StuScore, objvPaperSubViewpointCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_TeaScore, objvPaperSubViewpointCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_CreateDate, objvPaperSubViewpointCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_ShareId, objvPaperSubViewpointCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_AttitudesId) == true)
{
const strComparisonOpAttitudesId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_AttitudesId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_AttitudesId, objvPaperSubViewpointCond.attitudesId, strComparisonOpAttitudesId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_AttitudesName) == true)
{
const strComparisonOpAttitudesName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_AttitudesName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_AttitudesName, objvPaperSubViewpointCond.attitudesName, strComparisonOpAttitudesName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_UpdDate, objvPaperSubViewpointCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_UpdUser, objvPaperSubViewpointCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_Memo, objvPaperSubViewpointCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SectionOrderNum) == true)
{
const strComparisonOpSectionOrderNum:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SectionOrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_SectionOrderNum, objvPaperSubViewpointCond.sectionOrderNum, strComparisonOpSectionOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_SubViewpointTypeOrderNum) == true)
{
const strComparisonOpSubViewpointTypeOrderNum:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_SubViewpointTypeOrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_SubViewpointTypeOrderNum, objvPaperSubViewpointCond.subViewpointTypeOrderNum, strComparisonOpSubViewpointTypeOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_CitationCount, objvPaperSubViewpointCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointEN.con_VersionCount, objvPaperSubViewpointCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_IsRecommend) == true)
{
if (objvPaperSubViewpointCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsvPaperSubViewpointEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvPaperSubViewpointEN.con_IsRecommend);
}
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_gsKnowledgeTypeName) == true)
{
const strComparisonOpgsKnowledgeTypeName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_gsKnowledgeTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_gsKnowledgeTypeName, objvPaperSubViewpointCond.gsKnowledgeTypeName, strComparisonOpgsKnowledgeTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_LevelName) == true)
{
const strComparisonOpLevelName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_LevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_LevelName, objvPaperSubViewpointCond.levelName, strComparisonOpLevelName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_OperationTypeName) == true)
{
const strComparisonOpOperationTypeName:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_OperationTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_OperationTypeName, objvPaperSubViewpointCond.operationTypeName, strComparisonOpOperationTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointCond.dicFldComparisonOp, clsvPaperSubViewpointEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvPaperSubViewpointCond.dicFldComparisonOp[clsvPaperSubViewpointEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointEN.con_CourseId, objvPaperSubViewpointCond.courseId, strComparisonOpCourseId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvPaperSubViewpointENS:源对象
 * @param objvPaperSubViewpointENT:目标对象
*/
export  function vPaperSubViewpoint_CopyObjTo(objvPaperSubViewpointENS: clsvPaperSubViewpointEN , objvPaperSubViewpointENT: clsvPaperSubViewpointEN ): void 
{
objvPaperSubViewpointENT.subViewpointId = objvPaperSubViewpointENS.subViewpointId; //子观点Id
objvPaperSubViewpointENT.subViewpointContent = objvPaperSubViewpointENS.subViewpointContent; //详情内容
objvPaperSubViewpointENT.paperRWId = objvPaperSubViewpointENS.paperRWId; //课文阅读
objvPaperSubViewpointENT.paperId = objvPaperSubViewpointENS.paperId; //论文Id
objvPaperSubViewpointENT.paperTitle = objvPaperSubViewpointENS.paperTitle; //论文标题
objvPaperSubViewpointENT.isSubmit = objvPaperSubViewpointENS.isSubmit; //是否提交
objvPaperSubViewpointENT.idCurrEduCls = objvPaperSubViewpointENS.idCurrEduCls; //教学班流水号
objvPaperSubViewpointENT.userId = objvPaperSubViewpointENS.userId; //用户ID
objvPaperSubViewpointENT.sectionId = objvPaperSubViewpointENS.sectionId; //节Id
objvPaperSubViewpointENT.sectionName = objvPaperSubViewpointENS.sectionName; //节名
objvPaperSubViewpointENT.subViewpointTypeId = objvPaperSubViewpointENS.subViewpointTypeId; //类型Id
objvPaperSubViewpointENT.subViewpointTypeName = objvPaperSubViewpointENS.subViewpointTypeName; //类型名称
objvPaperSubViewpointENT.defaTitle = objvPaperSubViewpointENS.defaTitle; //默认标题
objvPaperSubViewpointENT.gsKnowledgeTypeId = objvPaperSubViewpointENS.gsKnowledgeTypeId; //知识类型Id
objvPaperSubViewpointENT.rWTitle = objvPaperSubViewpointENS.rWTitle; //读写标题
objvPaperSubViewpointENT.explainTypeId = objvPaperSubViewpointENS.explainTypeId; //说明类型Id
objvPaperSubViewpointENT.explainTypeName = objvPaperSubViewpointENS.explainTypeName; //说明类型名
objvPaperSubViewpointENT.explainContent = objvPaperSubViewpointENS.explainContent; //说明内容
objvPaperSubViewpointENT.isPublic = objvPaperSubViewpointENS.isPublic; //是否公开
objvPaperSubViewpointENT.literatureSourcesId = objvPaperSubViewpointENS.literatureSourcesId; //文献来源
objvPaperSubViewpointENT.operationTypeId = objvPaperSubViewpointENS.operationTypeId; //操作类型ID
objvPaperSubViewpointENT.levelId = objvPaperSubViewpointENS.levelId; //级别Id
objvPaperSubViewpointENT.conclusion = objvPaperSubViewpointENS.conclusion; //结论
objvPaperSubViewpointENT.nationality = objvPaperSubViewpointENS.nationality; //国籍
objvPaperSubViewpointENT.achievement = objvPaperSubViewpointENS.achievement; //成就
objvPaperSubViewpointENT.major = objvPaperSubViewpointENS.major; //专业
objvPaperSubViewpointENT.workUnit = objvPaperSubViewpointENS.workUnit; //工作单位
objvPaperSubViewpointENT.pageNumber = objvPaperSubViewpointENS.pageNumber; //页码
objvPaperSubViewpointENT.orderNum = objvPaperSubViewpointENS.orderNum; //序号
objvPaperSubViewpointENT.pdfContent = objvPaperSubViewpointENS.pdfContent; //Pdf内容
objvPaperSubViewpointENT.selectSpanRange = objvPaperSubViewpointENS.selectSpanRange; //选择Span范围
objvPaperSubViewpointENT.paperLineNum = objvPaperSubViewpointENS.paperLineNum; //论文行号
objvPaperSubViewpointENT.paperPageNum = objvPaperSubViewpointENS.paperPageNum; //论文页码
objvPaperSubViewpointENT.appraiseCount = objvPaperSubViewpointENS.appraiseCount; //评论数
objvPaperSubViewpointENT.okCount = objvPaperSubViewpointENS.okCount; //点赞统计
objvPaperSubViewpointENT.score = objvPaperSubViewpointENS.score; //评分
objvPaperSubViewpointENT.stuScore = objvPaperSubViewpointENS.stuScore; //学生平均分
objvPaperSubViewpointENT.teaScore = objvPaperSubViewpointENS.teaScore; //教师评分
objvPaperSubViewpointENT.createDate = objvPaperSubViewpointENS.createDate; //建立日期
objvPaperSubViewpointENT.shareId = objvPaperSubViewpointENS.shareId; //分享Id
objvPaperSubViewpointENT.attitudesId = objvPaperSubViewpointENS.attitudesId; //态度Id
objvPaperSubViewpointENT.attitudesName = objvPaperSubViewpointENS.attitudesName; //名称
objvPaperSubViewpointENT.updDate = objvPaperSubViewpointENS.updDate; //修改日期
objvPaperSubViewpointENT.updUser = objvPaperSubViewpointENS.updUser; //修改人
objvPaperSubViewpointENT.memo = objvPaperSubViewpointENS.memo; //备注
objvPaperSubViewpointENT.sectionOrderNum = objvPaperSubViewpointENS.sectionOrderNum; //SectionOrderNum
objvPaperSubViewpointENT.subViewpointTypeOrderNum = objvPaperSubViewpointENS.subViewpointTypeOrderNum; //子观点类型序号
objvPaperSubViewpointENT.citationCount = objvPaperSubViewpointENS.citationCount; //引用统计
objvPaperSubViewpointENT.versionCount = objvPaperSubViewpointENS.versionCount; //版本统计
objvPaperSubViewpointENT.isRecommend = objvPaperSubViewpointENS.isRecommend; //是否推荐
objvPaperSubViewpointENT.gsKnowledgeTypeName = objvPaperSubViewpointENS.gsKnowledgeTypeName; //知识类型名
objvPaperSubViewpointENT.levelName = objvPaperSubViewpointENS.levelName; //级别名称
objvPaperSubViewpointENT.operationTypeName = objvPaperSubViewpointENS.operationTypeName; //操作类型名
objvPaperSubViewpointENT.courseId = objvPaperSubViewpointENS.courseId; //课程Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPaperSubViewpointENS:源对象
 * @param objvPaperSubViewpointENT:目标对象
*/
export  function vPaperSubViewpoint_GetObjFromJsonObj(objvPaperSubViewpointENS: clsvPaperSubViewpointEN): clsvPaperSubViewpointEN 
{
 const objvPaperSubViewpointENT: clsvPaperSubViewpointEN = new clsvPaperSubViewpointEN();
ObjectAssign(objvPaperSubViewpointENT, objvPaperSubViewpointENS);
 return objvPaperSubViewpointENT;
}