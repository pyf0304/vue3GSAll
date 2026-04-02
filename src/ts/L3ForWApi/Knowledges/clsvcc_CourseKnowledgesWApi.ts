
 /**
 * 类名:clsvcc_CourseKnowledgesWApi
 * 表名:vcc_CourseKnowledges(01120141)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:12
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v课程知识点(vcc_CourseKnowledges)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvcc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clsvcc_CourseKnowledgesEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vcc_CourseKnowledges_Controller = "vcc_CourseKnowledgesApi";
 export const vcc_CourseKnowledges_ConstructorName = "vcc_CourseKnowledges";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseKnowledgeId:关键字
 * @returns 对象
 **/
export  async function vcc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId: string): Promise<clsvcc_CourseKnowledgesEN|null>  
{
const strThisFuncName = "GetObjByCourseKnowledgeIdAsync";

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clsvcc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clsvcc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdAsync)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCourseKnowledgeId";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseKnowledgeId,
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
const objvcc_CourseKnowledges = vcc_CourseKnowledges_GetObjFromJsonObj(returnObj);
return objvcc_CourseKnowledges;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function vcc_CourseKnowledges_GetObjByCourseKnowledgeIdCache(strCourseKnowledgeId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByCourseKnowledgeIdCache";

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clsvcc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clsvcc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdCache)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
try
{
const arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache.filter(x => 
 x.courseKnowledgeId == strCourseKnowledgeId );
let objvcc_CourseKnowledges: clsvcc_CourseKnowledgesEN;
if (arrvcc_CourseKnowledgesSel.length > 0)
{
objvcc_CourseKnowledges = arrvcc_CourseKnowledgesSel[0];
return objvcc_CourseKnowledges;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvcc_CourseKnowledgesConst = await vcc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
if (objvcc_CourseKnowledgesConst != null)
{
vcc_CourseKnowledges_ReFreshThisCache(strCourseId);
return objvcc_CourseKnowledgesConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCourseKnowledgeId, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function vcc_CourseKnowledges_GetObjByCourseKnowledgeIdlocalStorage(strCourseKnowledgeId: string) {
const strThisFuncName = "GetObjByCourseKnowledgeIdlocalStorage";

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clsvcc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clsvcc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdlocalStorage)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseKnowledgeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvcc_CourseKnowledgesCache: clsvcc_CourseKnowledgesEN = JSON.parse(strTempObj);
return objvcc_CourseKnowledgesCache;
}
try
{
const objvcc_CourseKnowledges = await vcc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
if (objvcc_CourseKnowledges != null)
{
localStorage.setItem(strKey, JSON.stringify(objvcc_CourseKnowledges));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvcc_CourseKnowledges;
}
return objvcc_CourseKnowledges;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCourseKnowledgeId, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vcc_CourseKnowledges_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvcc_CourseKnowledgesWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvcc_CourseKnowledgesWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvcc_CourseKnowledgesEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvcc_CourseKnowledgesEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strCourseKnowledgeId = strInValue;
if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
return "";
}
const objvcc_CourseKnowledges = await vcc_CourseKnowledges_GetObjByCourseKnowledgeIdCache(strCourseKnowledgeId , strCourseIdClassfy);
if (objvcc_CourseKnowledges == null) return "";
if (objvcc_CourseKnowledges.GetFldValue(strOutFldName) == null) return "";
return objvcc_CourseKnowledges.GetFldValue(strOutFldName).toString();
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
export  function vcc_CourseKnowledges_SortFunDefa(a:clsvcc_CourseKnowledgesEN , b:clsvcc_CourseKnowledgesEN): number 
{
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
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
export  function vcc_CourseKnowledges_SortFunDefa2Fld(a:clsvcc_CourseKnowledgesEN , b:clsvcc_CourseKnowledgesEN): number 
{
if (a.knowledgeName == b.knowledgeName) return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
else return a.knowledgeName.localeCompare(b.knowledgeName);
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
export  function vcc_CourseKnowledges_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.knowledgeName.localeCompare(b.knowledgeName);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTitle:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.knowledgeTitle == null) return -1;
if (b.knowledgeTitle == null) return 1;
return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeContent:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.knowledgeContent == null) return -1;
if (b.knowledgeContent == null) return 1;
return a.knowledgeContent.localeCompare(b.knowledgeContent);
}
case clsvcc_CourseKnowledgesEN.con_CourseId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvcc_CourseKnowledgesEN.con_CourseCode:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvcc_CourseKnowledgesEN.con_CourseName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvcc_CourseKnowledgesEN.con_CourseChapterId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsvcc_CourseKnowledgesEN.con_UserId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvcc_CourseKnowledgesEN.con_ChapterId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.chapterId == null) return -1;
if (b.chapterId == null) return 1;
return a.chapterId.localeCompare(b.chapterId);
}
case clsvcc_CourseKnowledgesEN.con_UploadDate:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.uploadDate == null) return -1;
if (b.uploadDate == null) return 1;
return a.uploadDate.localeCompare(b.uploadDate);
}
case clsvcc_CourseKnowledgesEN.con_SectionId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvcc_CourseKnowledgesEN.con_IsShow:
return (a: clsvcc_CourseKnowledgesEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsvcc_CourseKnowledgesEN.con_ChapterName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.chapterName == null) return -1;
if (b.chapterName == null) return 1;
return a.chapterName.localeCompare(b.chapterName);
}
case clsvcc_CourseKnowledgesEN.con_IsCast:
return (a: clsvcc_CourseKnowledgesEN) => {
if (a.isCast == true) return 1;
else return -1
}
case clsvcc_CourseKnowledgesEN.con_SectionName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvcc_CourseKnowledgesEN.con_LikeCount:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.likeCount-b.likeCount;
}
case clsvcc_CourseKnowledgesEN.con_ChapterNameSim:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.chapterNameSim == null) return -1;
if (b.chapterNameSim == null) return 1;
return a.chapterNameSim.localeCompare(b.chapterNameSim);
}
case clsvcc_CourseKnowledgesEN.con_UpdDate:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvcc_CourseKnowledgesEN.con_SectionNameSim:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.sectionNameSim == null) return -1;
if (b.sectionNameSim == null) return 1;
return a.sectionNameSim.localeCompare(b.sectionNameSim);
}
case clsvcc_CourseKnowledgesEN.con_Memo:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvcc_CourseKnowledgesEN.con_QuestionNum:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.questionNum-b.questionNum;
}
case clsvcc_CourseKnowledgesEN.con_OrderNum:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return a.orderNum-b.orderNum;
}
case clsvcc_CourseKnowledgesEN.con_UpdUser:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTypeId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.knowledgeTypeId == null) return -1;
if (b.knowledgeTypeId == null) return 1;
return a.knowledgeTypeId.localeCompare(b.knowledgeTypeId);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTypeName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (a.knowledgeTypeName == null) return -1;
if (b.knowledgeTypeName == null) return 1;
return a.knowledgeTypeName.localeCompare(b.knowledgeTypeName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CourseKnowledges]中不存在!(in ${ vcc_CourseKnowledges_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.knowledgeName.localeCompare(a.knowledgeName);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTitle:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.knowledgeTitle == null) return -1;
if (a.knowledgeTitle == null) return 1;
return b.knowledgeTitle.localeCompare(a.knowledgeTitle);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeContent:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.knowledgeContent == null) return -1;
if (a.knowledgeContent == null) return 1;
return b.knowledgeContent.localeCompare(a.knowledgeContent);
}
case clsvcc_CourseKnowledgesEN.con_CourseId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvcc_CourseKnowledgesEN.con_CourseCode:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvcc_CourseKnowledgesEN.con_CourseName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvcc_CourseKnowledgesEN.con_CourseChapterId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsvcc_CourseKnowledgesEN.con_UserId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvcc_CourseKnowledgesEN.con_ChapterId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.chapterId == null) return -1;
if (a.chapterId == null) return 1;
return b.chapterId.localeCompare(a.chapterId);
}
case clsvcc_CourseKnowledgesEN.con_UploadDate:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.uploadDate == null) return -1;
if (a.uploadDate == null) return 1;
return b.uploadDate.localeCompare(a.uploadDate);
}
case clsvcc_CourseKnowledgesEN.con_SectionId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvcc_CourseKnowledgesEN.con_IsShow:
return (b: clsvcc_CourseKnowledgesEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsvcc_CourseKnowledgesEN.con_ChapterName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.chapterName == null) return -1;
if (a.chapterName == null) return 1;
return b.chapterName.localeCompare(a.chapterName);
}
case clsvcc_CourseKnowledgesEN.con_IsCast:
return (b: clsvcc_CourseKnowledgesEN) => {
if (b.isCast == true) return 1;
else return -1
}
case clsvcc_CourseKnowledgesEN.con_SectionName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvcc_CourseKnowledgesEN.con_LikeCount:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.likeCount-a.likeCount;
}
case clsvcc_CourseKnowledgesEN.con_ChapterNameSim:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.chapterNameSim == null) return -1;
if (a.chapterNameSim == null) return 1;
return b.chapterNameSim.localeCompare(a.chapterNameSim);
}
case clsvcc_CourseKnowledgesEN.con_UpdDate:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvcc_CourseKnowledgesEN.con_SectionNameSim:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.sectionNameSim == null) return -1;
if (a.sectionNameSim == null) return 1;
return b.sectionNameSim.localeCompare(a.sectionNameSim);
}
case clsvcc_CourseKnowledgesEN.con_Memo:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvcc_CourseKnowledgesEN.con_QuestionNum:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.questionNum-a.questionNum;
}
case clsvcc_CourseKnowledgesEN.con_OrderNum:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
return b.orderNum-a.orderNum;
}
case clsvcc_CourseKnowledgesEN.con_UpdUser:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTypeId:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.knowledgeTypeId == null) return -1;
if (a.knowledgeTypeId == null) return 1;
return b.knowledgeTypeId.localeCompare(a.knowledgeTypeId);
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTypeName:
return (a: clsvcc_CourseKnowledgesEN, b: clsvcc_CourseKnowledgesEN) => {
if (b.knowledgeTypeName == null) return -1;
if (a.knowledgeTypeName == null) return 1;
return b.knowledgeTypeName.localeCompare(a.knowledgeTypeName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CourseKnowledges]中不存在!(in ${ vcc_CourseKnowledges_ConstructorName}.${ strThisFuncName})`;
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
export  async function vcc_CourseKnowledges_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.courseKnowledgeId === value;
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeName:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.knowledgeName === value;
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTitle:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.knowledgeTitle === value;
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeContent:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.knowledgeContent === value;
}
case clsvcc_CourseKnowledgesEN.con_CourseId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.courseId === value;
}
case clsvcc_CourseKnowledgesEN.con_CourseCode:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.courseCode === value;
}
case clsvcc_CourseKnowledgesEN.con_CourseName:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.courseName === value;
}
case clsvcc_CourseKnowledgesEN.con_CourseChapterId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.courseChapterId === value;
}
case clsvcc_CourseKnowledgesEN.con_UserId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.userId === value;
}
case clsvcc_CourseKnowledgesEN.con_ChapterId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.chapterId === value;
}
case clsvcc_CourseKnowledgesEN.con_UploadDate:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.uploadDate === value;
}
case clsvcc_CourseKnowledgesEN.con_SectionId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.sectionId === value;
}
case clsvcc_CourseKnowledgesEN.con_IsShow:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.isShow === value;
}
case clsvcc_CourseKnowledgesEN.con_ChapterName:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.chapterName === value;
}
case clsvcc_CourseKnowledgesEN.con_IsCast:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.isCast === value;
}
case clsvcc_CourseKnowledgesEN.con_SectionName:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.sectionName === value;
}
case clsvcc_CourseKnowledgesEN.con_LikeCount:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.likeCount === value;
}
case clsvcc_CourseKnowledgesEN.con_ChapterNameSim:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.chapterNameSim === value;
}
case clsvcc_CourseKnowledgesEN.con_UpdDate:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.updDate === value;
}
case clsvcc_CourseKnowledgesEN.con_SectionNameSim:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.sectionNameSim === value;
}
case clsvcc_CourseKnowledgesEN.con_Memo:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.memo === value;
}
case clsvcc_CourseKnowledgesEN.con_QuestionNum:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.questionNum === value;
}
case clsvcc_CourseKnowledgesEN.con_OrderNum:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.orderNum === value;
}
case clsvcc_CourseKnowledgesEN.con_UpdUser:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.updUser === value;
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTypeId:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.knowledgeTypeId === value;
}
case clsvcc_CourseKnowledgesEN.con_KnowledgeTypeName:
return (obj: clsvcc_CourseKnowledgesEN) => {
return obj.knowledgeTypeName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CourseKnowledges]中不存在!(in ${ vcc_CourseKnowledges_ConstructorName}.${ strThisFuncName})`;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vcc_CourseKnowledges_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvcc_CourseKnowledgesWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvcc_CourseKnowledgesWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvcc_CourseKnowledges = await vcc_CourseKnowledges_GetObjLstCache(strCourseIdClassfy);
if (arrvcc_CourseKnowledges == null) return [];
let arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledges;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvcc_CourseKnowledgesSel.length == 0) return [];
return arrvcc_CourseKnowledgesSel.map(x=>x.courseKnowledgeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vcc_CourseKnowledges_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetFirstObjAsync(strWhereCond: string): Promise<clsvcc_CourseKnowledgesEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const objvcc_CourseKnowledges = vcc_CourseKnowledges_GetObjFromJsonObj(returnObj);
return objvcc_CourseKnowledges;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvcc_CourseKnowledgesEN.WhereFormat) == false)
{
strWhereCond = Format(clsvcc_CourseKnowledgesEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvcc_CourseKnowledgesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvcc_CourseKnowledgesEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvcc_CourseKnowledgesExObjLstCache: Array<clsvcc_CourseKnowledgesEN> = CacheHelper.Get(strKey);
const arrvcc_CourseKnowledgesObjLstT = vcc_CourseKnowledges_GetObjLstByJSONObjLst(arrvcc_CourseKnowledgesExObjLstCache);
return arrvcc_CourseKnowledgesObjLstT;
}
try
{
const arrvcc_CourseKnowledgesExObjLst = await vcc_CourseKnowledges_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvcc_CourseKnowledgesExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvcc_CourseKnowledgesExObjLst.length);
console.log(strInfo);
return arrvcc_CourseKnowledgesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvcc_CourseKnowledgesEN.WhereFormat) == false)
{
strWhereCond = Format(clsvcc_CourseKnowledgesEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvcc_CourseKnowledgesEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvcc_CourseKnowledgesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvcc_CourseKnowledgesEN.CacheAddiCondition);
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
const arrvcc_CourseKnowledgesExObjLstCache: Array<clsvcc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
const arrvcc_CourseKnowledgesObjLstT = vcc_CourseKnowledges_GetObjLstByJSONObjLst(arrvcc_CourseKnowledgesExObjLstCache);
return arrvcc_CourseKnowledgesObjLstT;
}
try
{
const arrvcc_CourseKnowledgesExObjLst = await vcc_CourseKnowledges_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvcc_CourseKnowledgesExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvcc_CourseKnowledgesExObjLst.length);
console.log(strInfo);
return arrvcc_CourseKnowledgesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvcc_CourseKnowledgesObjLstCache: Array<clsvcc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
return arrvcc_CourseKnowledgesObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvcc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvcc_CourseKnowledgesEN.WhereFormat) == false)
{
strWhereCond = Format(clsvcc_CourseKnowledgesEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvcc_CourseKnowledgesEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvcc_CourseKnowledgesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvcc_CourseKnowledgesEN.CacheAddiCondition);
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
const arrvcc_CourseKnowledgesExObjLstCache: Array<clsvcc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
const arrvcc_CourseKnowledgesObjLstT = vcc_CourseKnowledges_GetObjLstByJSONObjLst(arrvcc_CourseKnowledgesExObjLstCache);
return arrvcc_CourseKnowledgesObjLstT;
}
try
{
const arrvcc_CourseKnowledgesExObjLst = await vcc_CourseKnowledges_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvcc_CourseKnowledgesExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvcc_CourseKnowledgesExObjLst.length);
console.log(strInfo);
return arrvcc_CourseKnowledgesExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvcc_CourseKnowledgesObjLstCache: Array<clsvcc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
return arrvcc_CourseKnowledgesObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstCache(strCourseId: string): Promise<Array<clsvcc_CourseKnowledgesEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvcc_CourseKnowledgesWApi.vcc_CourseKnowledges_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvcc_CourseKnowledgesWApi.vcc_CourseKnowledges_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvcc_CourseKnowledgesObjLstCache;
switch (clsvcc_CourseKnowledgesEN.CacheModeId)
{
case "04"://sessionStorage
arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstClientCache(strCourseId);
break;
default:
arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstClientCache(strCourseId);
break;
}
return arrvcc_CourseKnowledgesObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvcc_CourseKnowledgesObjLstCache;
switch (clsvcc_CourseKnowledgesEN.CacheModeId)
{
case "04"://sessionStorage
arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrvcc_CourseKnowledgesObjLstCache = null;
break;
default:
arrvcc_CourseKnowledgesObjLstCache = null;
break;
}
return arrvcc_CourseKnowledgesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseKnowledgeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vcc_CourseKnowledges_GetSubObjLstCache(objvcc_CourseKnowledgesCond: clsvcc_CourseKnowledgesEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
let arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache;
if (objvcc_CourseKnowledgesCond.sfFldComparisonOp == null || objvcc_CourseKnowledgesCond.sfFldComparisonOp == "") return arrvcc_CourseKnowledgesSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvcc_CourseKnowledgesCond.sfFldComparisonOp);
//console.log("clsvcc_CourseKnowledgesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvcc_CourseKnowledgesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvcc_CourseKnowledgesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvcc_CourseKnowledgesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvcc_CourseKnowledgesCond), vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvcc_CourseKnowledgesEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseKnowledgeId:关键字列表
 * @returns 对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId: Array<string>): Promise<Array<clsvcc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstByCourseKnowledgeIdLstAsync";
const strAction = "GetObjLstByCourseKnowledgeIdLst";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseKnowledgeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param arrstrCourseKnowledgeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vcc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstCache(arrCourseKnowledgeIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByCourseKnowledgeIdLstCache";
try
{
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
const arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache.filter(x => arrCourseKnowledgeIdLst.indexOf(x.courseKnowledgeId)>-1);
return arrvcc_CourseKnowledgesSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrCourseKnowledgeIdLst.join(","), vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvcc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvcc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvcc_CourseKnowledgesEN>();
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrvcc_CourseKnowledgesObjLstCache.length == 0) return arrvcc_CourseKnowledgesObjLstCache;
let arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvcc_CourseKnowledgesCond = new clsvcc_CourseKnowledgesEN();
ObjectAssign(objvcc_CourseKnowledgesCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvcc_CourseKnowledgesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvcc_CourseKnowledgesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvcc_CourseKnowledgesSel.length == 0) return arrvcc_CourseKnowledgesSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.sort(vcc_CourseKnowledges_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.sort(objPagerPara.sortFun);
}
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.slice(intStart, intEnd);     
return arrvcc_CourseKnowledgesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvcc_CourseKnowledgesEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vcc_CourseKnowledges_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvcc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvcc_CourseKnowledgesEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objstrCourseKnowledgeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vcc_CourseKnowledges_IsExistRecordCache(objvcc_CourseKnowledgesCond: clsvcc_CourseKnowledgesEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrvcc_CourseKnowledgesObjLstCache == null) return false;
let arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache;
if (objvcc_CourseKnowledgesCond.sfFldComparisonOp == null || objvcc_CourseKnowledgesCond.sfFldComparisonOp == "") return arrvcc_CourseKnowledgesSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvcc_CourseKnowledgesCond.sfFldComparisonOp);
//console.log("clsvcc_CourseKnowledgesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvcc_CourseKnowledgesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvcc_CourseKnowledgesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvcc_CourseKnowledgesSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvcc_CourseKnowledgesCond), vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function vcc_CourseKnowledges_IsExistCache(strCourseKnowledgeId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrvcc_CourseKnowledgesObjLstCache == null) return false;
try
{
const arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache.filter(x => x.courseKnowledgeId == strCourseKnowledgeId);
if (arrvcc_CourseKnowledgesSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strCourseKnowledgeId, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strCourseKnowledgeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vcc_CourseKnowledges_IsExistAsync(strCourseKnowledgeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseKnowledgeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function vcc_CourseKnowledges_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vcc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objvcc_CourseKnowledgesCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vcc_CourseKnowledges_GetRecCountByCondCache(objvcc_CourseKnowledgesCond: clsvcc_CourseKnowledgesEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvcc_CourseKnowledgesObjLstCache = await vcc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrvcc_CourseKnowledgesObjLstCache == null) return 0;
let arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesObjLstCache;
if (objvcc_CourseKnowledgesCond.sfFldComparisonOp == null || objvcc_CourseKnowledgesCond.sfFldComparisonOp == "") return arrvcc_CourseKnowledgesSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvcc_CourseKnowledgesCond.sfFldComparisonOp);
//console.log("clsvcc_CourseKnowledgesWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvcc_CourseKnowledgesCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvcc_CourseKnowledgesCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvcc_CourseKnowledgesSel = arrvcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvcc_CourseKnowledgesSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvcc_CourseKnowledgesCond), vcc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  function vcc_CourseKnowledges_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vcc_CourseKnowledges_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsvcc_CourseKnowledgesWApi.vcc_CourseKnowledges_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_CourseKnowledgesWApi.vcc_CourseKnowledges_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvcc_CourseKnowledgesEN._CurrTabName, strCourseId);
switch (clsvcc_CourseKnowledgesEN.CacheModeId)
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
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_CourseKnowledges_GetJSONStrByObj (pobjvcc_CourseKnowledgesEN: clsvcc_CourseKnowledgesEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvcc_CourseKnowledgesEN);
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
export  function vcc_CourseKnowledges_GetObjLstByJSONStr (strJSON: string): Array<clsvcc_CourseKnowledgesEN>
{
let arrvcc_CourseKnowledgesObjLst = new Array<clsvcc_CourseKnowledgesEN>();
if (strJSON === "")
{
return arrvcc_CourseKnowledgesObjLst;
}
try
{
arrvcc_CourseKnowledgesObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvcc_CourseKnowledgesObjLst;
}
return arrvcc_CourseKnowledgesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvcc_CourseKnowledgesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vcc_CourseKnowledges_GetObjLstByJSONObjLst (arrvcc_CourseKnowledgesObjLstS: Array<clsvcc_CourseKnowledgesEN>): Array<clsvcc_CourseKnowledgesEN>
{
const arrvcc_CourseKnowledgesObjLst = new Array<clsvcc_CourseKnowledgesEN>();
for (const objInFor of arrvcc_CourseKnowledgesObjLstS) {
const obj1 = vcc_CourseKnowledges_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvcc_CourseKnowledgesObjLst.push(obj1);
}
return arrvcc_CourseKnowledgesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_CourseKnowledges_GetObjByJSONStr (strJSON: string): clsvcc_CourseKnowledgesEN
{
let pobjvcc_CourseKnowledgesEN = new clsvcc_CourseKnowledgesEN();
if (strJSON === "")
{
return pobjvcc_CourseKnowledgesEN;
}
try
{
pobjvcc_CourseKnowledgesEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvcc_CourseKnowledgesEN;
}
return pobjvcc_CourseKnowledgesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vcc_CourseKnowledges_GetCombineCondition(objvcc_CourseKnowledgesCond: clsvcc_CourseKnowledgesEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_CourseKnowledgeId, objvcc_CourseKnowledgesCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_KnowledgeName) == true)
{
const strComparisonOpKnowledgeName:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_KnowledgeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_KnowledgeName, objvcc_CourseKnowledgesCond.knowledgeName, strComparisonOpKnowledgeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_KnowledgeTitle) == true)
{
const strComparisonOpKnowledgeTitle:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_KnowledgeTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_KnowledgeTitle, objvcc_CourseKnowledgesCond.knowledgeTitle, strComparisonOpKnowledgeTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_CourseId, objvcc_CourseKnowledgesCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_CourseCode, objvcc_CourseKnowledgesCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_CourseName, objvcc_CourseKnowledgesCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_CourseChapterId, objvcc_CourseKnowledgesCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_UserId, objvcc_CourseKnowledgesCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_ChapterId) == true)
{
const strComparisonOpChapterId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_ChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_ChapterId, objvcc_CourseKnowledgesCond.chapterId, strComparisonOpChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_UploadDate) == true)
{
const strComparisonOpUploadDate:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_UploadDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_UploadDate, objvcc_CourseKnowledgesCond.uploadDate, strComparisonOpUploadDate);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_SectionId, objvcc_CourseKnowledgesCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_IsShow) == true)
{
if (objvcc_CourseKnowledgesCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseKnowledgesEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseKnowledgesEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_ChapterName) == true)
{
const strComparisonOpChapterName:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_ChapterName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_ChapterName, objvcc_CourseKnowledgesCond.chapterName, strComparisonOpChapterName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_IsCast) == true)
{
if (objvcc_CourseKnowledgesCond.isCast == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseKnowledgesEN.con_IsCast);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseKnowledgesEN.con_IsCast);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_SectionName, objvcc_CourseKnowledgesCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseKnowledgesEN.con_LikeCount, objvcc_CourseKnowledgesCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_ChapterNameSim) == true)
{
const strComparisonOpChapterNameSim:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_ChapterNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_ChapterNameSim, objvcc_CourseKnowledgesCond.chapterNameSim, strComparisonOpChapterNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_UpdDate, objvcc_CourseKnowledgesCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_SectionNameSim) == true)
{
const strComparisonOpSectionNameSim:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_SectionNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_SectionNameSim, objvcc_CourseKnowledgesCond.sectionNameSim, strComparisonOpSectionNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_Memo, objvcc_CourseKnowledgesCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseKnowledgesEN.con_QuestionNum, objvcc_CourseKnowledgesCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseKnowledgesEN.con_OrderNum, objvcc_CourseKnowledgesCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_UpdUser, objvcc_CourseKnowledgesCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_KnowledgeTypeId) == true)
{
const strComparisonOpKnowledgeTypeId:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_KnowledgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_KnowledgeTypeId, objvcc_CourseKnowledgesCond.knowledgeTypeId, strComparisonOpKnowledgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseKnowledgesCond.dicFldComparisonOp, clsvcc_CourseKnowledgesEN.con_KnowledgeTypeName) == true)
{
const strComparisonOpKnowledgeTypeName:string = objvcc_CourseKnowledgesCond.dicFldComparisonOp[clsvcc_CourseKnowledgesEN.con_KnowledgeTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseKnowledgesEN.con_KnowledgeTypeName, objvcc_CourseKnowledgesCond.knowledgeTypeName, strComparisonOpKnowledgeTypeName);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvcc_CourseKnowledgesENS:源对象
 * @param objvcc_CourseKnowledgesENT:目标对象
*/
export  function vcc_CourseKnowledges_CopyObjTo(objvcc_CourseKnowledgesENS: clsvcc_CourseKnowledgesEN , objvcc_CourseKnowledgesENT: clsvcc_CourseKnowledgesEN ): void 
{
objvcc_CourseKnowledgesENT.courseKnowledgeId = objvcc_CourseKnowledgesENS.courseKnowledgeId; //知识点Id
objvcc_CourseKnowledgesENT.knowledgeName = objvcc_CourseKnowledgesENS.knowledgeName; //知识点名称
objvcc_CourseKnowledgesENT.knowledgeTitle = objvcc_CourseKnowledgesENS.knowledgeTitle; //知识点标题
objvcc_CourseKnowledgesENT.knowledgeContent = objvcc_CourseKnowledgesENS.knowledgeContent; //知识点内容
objvcc_CourseKnowledgesENT.courseId = objvcc_CourseKnowledgesENS.courseId; //课程Id
objvcc_CourseKnowledgesENT.courseCode = objvcc_CourseKnowledgesENS.courseCode; //课程代码
objvcc_CourseKnowledgesENT.courseName = objvcc_CourseKnowledgesENS.courseName; //课程名称
objvcc_CourseKnowledgesENT.courseChapterId = objvcc_CourseKnowledgesENS.courseChapterId; //课程章节ID
objvcc_CourseKnowledgesENT.userId = objvcc_CourseKnowledgesENS.userId; //用户ID
objvcc_CourseKnowledgesENT.chapterId = objvcc_CourseKnowledgesENS.chapterId; //章Id
objvcc_CourseKnowledgesENT.uploadDate = objvcc_CourseKnowledgesENS.uploadDate; //上传时间
objvcc_CourseKnowledgesENT.sectionId = objvcc_CourseKnowledgesENS.sectionId; //节Id
objvcc_CourseKnowledgesENT.isShow = objvcc_CourseKnowledgesENS.isShow; //是否启用
objvcc_CourseKnowledgesENT.chapterName = objvcc_CourseKnowledgesENS.chapterName; //章名
objvcc_CourseKnowledgesENT.isCast = objvcc_CourseKnowledgesENS.isCast; //是否播放
objvcc_CourseKnowledgesENT.sectionName = objvcc_CourseKnowledgesENS.sectionName; //节名
objvcc_CourseKnowledgesENT.likeCount = objvcc_CourseKnowledgesENS.likeCount; //资源喜欢数量
objvcc_CourseKnowledgesENT.chapterNameSim = objvcc_CourseKnowledgesENS.chapterNameSim; //章名简称
objvcc_CourseKnowledgesENT.updDate = objvcc_CourseKnowledgesENS.updDate; //修改日期
objvcc_CourseKnowledgesENT.sectionNameSim = objvcc_CourseKnowledgesENS.sectionNameSim; //节名简称
objvcc_CourseKnowledgesENT.memo = objvcc_CourseKnowledgesENS.memo; //备注
objvcc_CourseKnowledgesENT.questionNum = objvcc_CourseKnowledgesENS.questionNum; //题目数
objvcc_CourseKnowledgesENT.orderNum = objvcc_CourseKnowledgesENS.orderNum; //序号
objvcc_CourseKnowledgesENT.updUser = objvcc_CourseKnowledgesENS.updUser; //修改人
objvcc_CourseKnowledgesENT.knowledgeTypeId = objvcc_CourseKnowledgesENS.knowledgeTypeId; //知识点类型Id
objvcc_CourseKnowledgesENT.knowledgeTypeName = objvcc_CourseKnowledgesENS.knowledgeTypeName; //知识点类型名
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvcc_CourseKnowledgesENS:源对象
 * @param objvcc_CourseKnowledgesENT:目标对象
*/
export  function vcc_CourseKnowledges_GetObjFromJsonObj(objvcc_CourseKnowledgesENS: clsvcc_CourseKnowledgesEN): clsvcc_CourseKnowledgesEN 
{
 const objvcc_CourseKnowledgesENT: clsvcc_CourseKnowledgesEN = new clsvcc_CourseKnowledgesEN();
ObjectAssign(objvcc_CourseKnowledgesENT, objvcc_CourseKnowledgesENS);
 return objvcc_CourseKnowledgesENT;
}