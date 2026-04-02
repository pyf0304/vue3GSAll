
 /**
 * 类名:clsvCurrEduClsStuWApi
 * 表名:vCurrEduClsStu(01120127)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:50:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v教学班与学生关系(vCurrEduClsStu)
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
import { clsvCurrEduClsStuEN } from "@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vCurrEduClsStu_Controller = "vCurrEduClsStuApi";
 export const vCurrEduClsStu_ConstructorName = "vCurrEduClsStu";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdEduClsStu:关键字
 * @returns 对象
 **/
export  async function vCurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu: number): Promise<clsvCurrEduClsStuEN|null>  
{
const strThisFuncName = "GetObjByIdEduClsStuAsync";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStuWApi.GetObjByIdEduClsStuAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdEduClsStu";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsStu,
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
const objvCurrEduClsStu = vCurrEduClsStu_GetObjFromJsonObj(returnObj);
return objvCurrEduClsStu;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_GetObjByIdEduClsStuCache(lngIdEduClsStu:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdEduClsStuCache";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStuWApi.GetObjByIdEduClsStuCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
try
{
const arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache.filter(x => 
 x.idEduClsStu == lngIdEduClsStu );
let objvCurrEduClsStu: clsvCurrEduClsStuEN;
if (arrvCurrEduClsStuSel.length > 0)
{
objvCurrEduClsStu = arrvCurrEduClsStuSel[0];
return objvCurrEduClsStu;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvCurrEduClsStuConst = await vCurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
if (objvCurrEduClsStuConst != null)
{
vCurrEduClsStu_ReFreshThisCache(strIdCurrEduCls);
return objvCurrEduClsStuConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsStu, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_GetObjByIdEduClsStulocalStorage(lngIdEduClsStu: number) {
const strThisFuncName = "GetObjByIdEduClsStulocalStorage";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStuWApi.GetObjByIdEduClsStulocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, lngIdEduClsStu);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvCurrEduClsStuCache: clsvCurrEduClsStuEN = JSON.parse(strTempObj);
return objvCurrEduClsStuCache;
}
try
{
const objvCurrEduClsStu = await vCurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
if (objvCurrEduClsStu != null)
{
localStorage.setItem(strKey, JSON.stringify(objvCurrEduClsStu));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvCurrEduClsStu;
}
return objvCurrEduClsStu;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsStu, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vCurrEduClsStu_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvCurrEduClsStuWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvCurrEduClsStuWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvCurrEduClsStuEN.con_IdEduClsStu)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvCurrEduClsStuEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvCurrEduClsStuEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngIdEduClsStu = Number(strInValue);
if (lngIdEduClsStu == 0)
{
return "";
}
const objvCurrEduClsStu = await vCurrEduClsStu_GetObjByIdEduClsStuCache(lngIdEduClsStu , strIdCurrEduClsClassfy);
if (objvCurrEduClsStu == null) return "";
if (objvCurrEduClsStu.GetFldValue(strOutFldName) == null) return "";
return objvCurrEduClsStu.GetFldValue(strOutFldName).toString();
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
export  function vCurrEduClsStu_SortFunDefa(a:clsvCurrEduClsStuEN , b:clsvCurrEduClsStuEN): number 
{
return a.idEduClsStu-b.idEduClsStu;
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
export  function vCurrEduClsStu_SortFunDefa2Fld(a:clsvCurrEduClsStuEN , b:clsvCurrEduClsStuEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.currEduClsId.localeCompare(b.currEduClsId);
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
export  function vCurrEduClsStu_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvCurrEduClsStuEN.con_IdEduClsStu:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.idEduClsStu-b.idEduClsStu;
}
case clsvCurrEduClsStuEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvCurrEduClsStuEN.con_CurrEduClsId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.currEduClsId == null) return -1;
if (b.currEduClsId == null) return 1;
return a.currEduClsId.localeCompare(b.currEduClsId);
}
case clsvCurrEduClsStuEN.con_EduClsName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsvCurrEduClsStuEN.con_CourseId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvCurrEduClsStuEN.con_CourseCode:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvCurrEduClsStuEN.con_CourseName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvCurrEduClsStuEN.con_TeachingSolutionId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.teachingSolutionId == null) return -1;
if (b.teachingSolutionId == null) return 1;
return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
}
case clsvCurrEduClsStuEN.con_TeachingSolutionName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.teachingSolutionName == null) return -1;
if (b.teachingSolutionName == null) return 1;
return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
}
case clsvCurrEduClsStuEN.con_IdXzCollege:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvCurrEduClsStuEN.con_CollegeId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.collegeId == null) return -1;
if (b.collegeId == null) return 1;
return a.collegeId.localeCompare(b.collegeId);
}
case clsvCurrEduClsStuEN.con_CollegeName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvCurrEduClsStuEN.con_LessonQtyPerWeek:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.lessonQtyPerWeek-b.lessonQtyPerWeek;
}
case clsvCurrEduClsStuEN.con_Mark:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.mark-b.mark;
}
case clsvCurrEduClsStuEN.con_IdUniZone:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.idUniZone == null) return -1;
if (b.idUniZone == null) return 1;
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsvCurrEduClsStuEN.con_GradeBaseName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.gradeBaseName == null) return -1;
if (b.gradeBaseName == null) return 1;
return a.gradeBaseName.localeCompare(b.gradeBaseName);
}
case clsvCurrEduClsStuEN.con_IsEffective:
return (a: clsvCurrEduClsStuEN) => {
if (a.isEffective == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_IdCourseType:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.idCourseType == null) return -1;
if (b.idCourseType == null) return 1;
return a.idCourseType.localeCompare(b.idCourseType);
}
case clsvCurrEduClsStuEN.con_CourseTypeId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.courseTypeId == null) return -1;
if (b.courseTypeId == null) return 1;
return a.courseTypeId.localeCompare(b.courseTypeId);
}
case clsvCurrEduClsStuEN.con_CourseTypeName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.courseTypeName == null) return -1;
if (b.courseTypeName == null) return 1;
return a.courseTypeName.localeCompare(b.courseTypeName);
}
case clsvCurrEduClsStuEN.con_IsDegree:
return (a: clsvCurrEduClsStuEN) => {
if (a.isDegree == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_CurrStuNum:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.currStuNum-b.currStuNum;
}
case clsvCurrEduClsStuEN.con_IdStu:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.idStu == null) return -1;
if (b.idStu == null) return 1;
return a.idStu.localeCompare(b.idStu);
}
case clsvCurrEduClsStuEN.con_StuId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.stuId == null) return -1;
if (b.stuId == null) return 1;
return a.stuId.localeCompare(b.stuId);
}
case clsvCurrEduClsStuEN.con_StuName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.stuName == null) return -1;
if (b.stuName == null) return 1;
return a.stuName.localeCompare(b.stuName);
}
case clsvCurrEduClsStuEN.con_IdSex:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.idSex.localeCompare(b.idSex);
}
case clsvCurrEduClsStuEN.con_SexDesc:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.sexDesc == null) return -1;
if (b.sexDesc == null) return 1;
return a.sexDesc.localeCompare(b.sexDesc);
}
case clsvCurrEduClsStuEN.con_MajorID:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.majorID == null) return -1;
if (b.majorID == null) return 1;
return a.majorID.localeCompare(b.majorID);
}
case clsvCurrEduClsStuEN.con_MajorName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvCurrEduClsStuEN.con_IdAdminCls:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.idAdminCls == null) return -1;
if (b.idAdminCls == null) return 1;
return a.idAdminCls.localeCompare(b.idAdminCls);
}
case clsvCurrEduClsStuEN.con_Birthday:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.birthday == null) return -1;
if (b.birthday == null) return 1;
return a.birthday.localeCompare(b.birthday);
}
case clsvCurrEduClsStuEN.con_EduClsStuStateId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.eduClsStuStateId == null) return -1;
if (b.eduClsStuStateId == null) return 1;
return a.eduClsStuStateId.localeCompare(b.eduClsStuStateId);
}
case clsvCurrEduClsStuEN.con_GetScoreTimes:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.getScoreTimes-b.getScoreTimes;
}
case clsvCurrEduClsStuEN.con_Score:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.score-b.score;
}
case clsvCurrEduClsStuEN.con_TotalScores:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.totalScores-b.totalScores;
}
case clsvCurrEduClsStuEN.con_Ranking:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.ranking-b.ranking;
}
case clsvCurrEduClsStuEN.con_Percentile:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return a.percentile-b.percentile;
}
case clsvCurrEduClsStuEN.con_Confirmed:
return (a: clsvCurrEduClsStuEN) => {
if (a.confirmed == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_SchoolTerm:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsvCurrEduClsStuEN.con_SchoolYear:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsvCurrEduClsStuEN.con_SignInDate:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.signInDate == null) return -1;
if (b.signInDate == null) return 1;
return a.signInDate.localeCompare(b.signInDate);
}
case clsvCurrEduClsStuEN.con_SignInStateID:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.signInStateID == null) return -1;
if (b.signInStateID == null) return 1;
return a.signInStateID.localeCompare(b.signInStateID);
}
case clsvCurrEduClsStuEN.con_SignInUser:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.signInUser == null) return -1;
if (b.signInUser == null) return 1;
return a.signInUser.localeCompare(b.signInUser);
}
case clsvCurrEduClsStuEN.con_ModifyDate:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsvCurrEduClsStuEN.con_ModifyUserId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsvCurrEduClsStuEN.con_CollegeName4Stu:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.collegeName4Stu == null) return -1;
if (b.collegeName4Stu == null) return 1;
return a.collegeName4Stu.localeCompare(b.collegeName4Stu);
}
case clsvCurrEduClsStuEN.con_EduClsTypeName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.eduClsTypeName == null) return -1;
if (b.eduClsTypeName == null) return 1;
return a.eduClsTypeName.localeCompare(b.eduClsTypeName);
}
case clsvCurrEduClsStuEN.con_IsSynScore:
return (a: clsvCurrEduClsStuEN) => {
if (a.isSynScore == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_EduClsTypeId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.eduClsTypeId == null) return -1;
if (b.eduClsTypeId == null) return 1;
return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
}
case clsvCurrEduClsStuEN.con_UserType:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (a.userType == null) return -1;
if (b.userType == null) return 1;
return a.userType.localeCompare(b.userType);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsStu]中不存在!(in ${ vCurrEduClsStu_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvCurrEduClsStuEN.con_IdEduClsStu:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.idEduClsStu-a.idEduClsStu;
}
case clsvCurrEduClsStuEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvCurrEduClsStuEN.con_CurrEduClsId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.currEduClsId == null) return -1;
if (a.currEduClsId == null) return 1;
return b.currEduClsId.localeCompare(a.currEduClsId);
}
case clsvCurrEduClsStuEN.con_EduClsName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsvCurrEduClsStuEN.con_CourseId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvCurrEduClsStuEN.con_CourseCode:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvCurrEduClsStuEN.con_CourseName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvCurrEduClsStuEN.con_TeachingSolutionId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.teachingSolutionId == null) return -1;
if (a.teachingSolutionId == null) return 1;
return b.teachingSolutionId.localeCompare(a.teachingSolutionId);
}
case clsvCurrEduClsStuEN.con_TeachingSolutionName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.teachingSolutionName == null) return -1;
if (a.teachingSolutionName == null) return 1;
return b.teachingSolutionName.localeCompare(a.teachingSolutionName);
}
case clsvCurrEduClsStuEN.con_IdXzCollege:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvCurrEduClsStuEN.con_CollegeId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.collegeId == null) return -1;
if (a.collegeId == null) return 1;
return b.collegeId.localeCompare(a.collegeId);
}
case clsvCurrEduClsStuEN.con_CollegeName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvCurrEduClsStuEN.con_LessonQtyPerWeek:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.lessonQtyPerWeek-a.lessonQtyPerWeek;
}
case clsvCurrEduClsStuEN.con_Mark:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.mark-a.mark;
}
case clsvCurrEduClsStuEN.con_IdUniZone:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.idUniZone == null) return -1;
if (a.idUniZone == null) return 1;
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsvCurrEduClsStuEN.con_GradeBaseName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.gradeBaseName == null) return -1;
if (a.gradeBaseName == null) return 1;
return b.gradeBaseName.localeCompare(a.gradeBaseName);
}
case clsvCurrEduClsStuEN.con_IsEffective:
return (b: clsvCurrEduClsStuEN) => {
if (b.isEffective == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_IdCourseType:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.idCourseType == null) return -1;
if (a.idCourseType == null) return 1;
return b.idCourseType.localeCompare(a.idCourseType);
}
case clsvCurrEduClsStuEN.con_CourseTypeId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.courseTypeId == null) return -1;
if (a.courseTypeId == null) return 1;
return b.courseTypeId.localeCompare(a.courseTypeId);
}
case clsvCurrEduClsStuEN.con_CourseTypeName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.courseTypeName == null) return -1;
if (a.courseTypeName == null) return 1;
return b.courseTypeName.localeCompare(a.courseTypeName);
}
case clsvCurrEduClsStuEN.con_IsDegree:
return (b: clsvCurrEduClsStuEN) => {
if (b.isDegree == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_CurrStuNum:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.currStuNum-a.currStuNum;
}
case clsvCurrEduClsStuEN.con_IdStu:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.idStu == null) return -1;
if (a.idStu == null) return 1;
return b.idStu.localeCompare(a.idStu);
}
case clsvCurrEduClsStuEN.con_StuId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.stuId == null) return -1;
if (a.stuId == null) return 1;
return b.stuId.localeCompare(a.stuId);
}
case clsvCurrEduClsStuEN.con_StuName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.stuName == null) return -1;
if (a.stuName == null) return 1;
return b.stuName.localeCompare(a.stuName);
}
case clsvCurrEduClsStuEN.con_IdSex:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.idSex.localeCompare(a.idSex);
}
case clsvCurrEduClsStuEN.con_SexDesc:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.sexDesc == null) return -1;
if (a.sexDesc == null) return 1;
return b.sexDesc.localeCompare(a.sexDesc);
}
case clsvCurrEduClsStuEN.con_MajorID:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.majorID == null) return -1;
if (a.majorID == null) return 1;
return b.majorID.localeCompare(a.majorID);
}
case clsvCurrEduClsStuEN.con_MajorName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvCurrEduClsStuEN.con_IdAdminCls:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.idAdminCls == null) return -1;
if (a.idAdminCls == null) return 1;
return b.idAdminCls.localeCompare(a.idAdminCls);
}
case clsvCurrEduClsStuEN.con_Birthday:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.birthday == null) return -1;
if (a.birthday == null) return 1;
return b.birthday.localeCompare(a.birthday);
}
case clsvCurrEduClsStuEN.con_EduClsStuStateId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.eduClsStuStateId == null) return -1;
if (a.eduClsStuStateId == null) return 1;
return b.eduClsStuStateId.localeCompare(a.eduClsStuStateId);
}
case clsvCurrEduClsStuEN.con_GetScoreTimes:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.getScoreTimes-a.getScoreTimes;
}
case clsvCurrEduClsStuEN.con_Score:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.score-a.score;
}
case clsvCurrEduClsStuEN.con_TotalScores:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.totalScores-a.totalScores;
}
case clsvCurrEduClsStuEN.con_Ranking:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.ranking-a.ranking;
}
case clsvCurrEduClsStuEN.con_Percentile:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
return b.percentile-a.percentile;
}
case clsvCurrEduClsStuEN.con_Confirmed:
return (b: clsvCurrEduClsStuEN) => {
if (b.confirmed == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_SchoolTerm:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsvCurrEduClsStuEN.con_SchoolYear:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsvCurrEduClsStuEN.con_SignInDate:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.signInDate == null) return -1;
if (a.signInDate == null) return 1;
return b.signInDate.localeCompare(a.signInDate);
}
case clsvCurrEduClsStuEN.con_SignInStateID:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.signInStateID == null) return -1;
if (a.signInStateID == null) return 1;
return b.signInStateID.localeCompare(a.signInStateID);
}
case clsvCurrEduClsStuEN.con_SignInUser:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.signInUser == null) return -1;
if (a.signInUser == null) return 1;
return b.signInUser.localeCompare(a.signInUser);
}
case clsvCurrEduClsStuEN.con_ModifyDate:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsvCurrEduClsStuEN.con_ModifyUserId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsvCurrEduClsStuEN.con_CollegeName4Stu:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.collegeName4Stu == null) return -1;
if (a.collegeName4Stu == null) return 1;
return b.collegeName4Stu.localeCompare(a.collegeName4Stu);
}
case clsvCurrEduClsStuEN.con_EduClsTypeName:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.eduClsTypeName == null) return -1;
if (a.eduClsTypeName == null) return 1;
return b.eduClsTypeName.localeCompare(a.eduClsTypeName);
}
case clsvCurrEduClsStuEN.con_IsSynScore:
return (b: clsvCurrEduClsStuEN) => {
if (b.isSynScore == true) return 1;
else return -1
}
case clsvCurrEduClsStuEN.con_EduClsTypeId:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.eduClsTypeId == null) return -1;
if (a.eduClsTypeId == null) return 1;
return b.eduClsTypeId.localeCompare(a.eduClsTypeId);
}
case clsvCurrEduClsStuEN.con_UserType:
return (a: clsvCurrEduClsStuEN, b: clsvCurrEduClsStuEN) => {
if (b.userType == null) return -1;
if (a.userType == null) return 1;
return b.userType.localeCompare(a.userType);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsStu]中不存在!(in ${ vCurrEduClsStu_ConstructorName}.${ strThisFuncName})`;
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
export  async function vCurrEduClsStu_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvCurrEduClsStuEN.con_IdEduClsStu:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idEduClsStu === value;
}
case clsvCurrEduClsStuEN.con_IdCurrEduCls:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idCurrEduCls === value;
}
case clsvCurrEduClsStuEN.con_CurrEduClsId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.currEduClsId === value;
}
case clsvCurrEduClsStuEN.con_EduClsName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.eduClsName === value;
}
case clsvCurrEduClsStuEN.con_CourseId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.courseId === value;
}
case clsvCurrEduClsStuEN.con_CourseCode:
return (obj: clsvCurrEduClsStuEN) => {
return obj.courseCode === value;
}
case clsvCurrEduClsStuEN.con_CourseName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.courseName === value;
}
case clsvCurrEduClsStuEN.con_TeachingSolutionId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.teachingSolutionId === value;
}
case clsvCurrEduClsStuEN.con_TeachingSolutionName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.teachingSolutionName === value;
}
case clsvCurrEduClsStuEN.con_IdXzCollege:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idXzCollege === value;
}
case clsvCurrEduClsStuEN.con_CollegeId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.collegeId === value;
}
case clsvCurrEduClsStuEN.con_CollegeName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.collegeName === value;
}
case clsvCurrEduClsStuEN.con_LessonQtyPerWeek:
return (obj: clsvCurrEduClsStuEN) => {
return obj.lessonQtyPerWeek === value;
}
case clsvCurrEduClsStuEN.con_Mark:
return (obj: clsvCurrEduClsStuEN) => {
return obj.mark === value;
}
case clsvCurrEduClsStuEN.con_IdUniZone:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idUniZone === value;
}
case clsvCurrEduClsStuEN.con_GradeBaseName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.gradeBaseName === value;
}
case clsvCurrEduClsStuEN.con_IsEffective:
return (obj: clsvCurrEduClsStuEN) => {
return obj.isEffective === value;
}
case clsvCurrEduClsStuEN.con_IdCourseType:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idCourseType === value;
}
case clsvCurrEduClsStuEN.con_CourseTypeId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.courseTypeId === value;
}
case clsvCurrEduClsStuEN.con_CourseTypeName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.courseTypeName === value;
}
case clsvCurrEduClsStuEN.con_IsDegree:
return (obj: clsvCurrEduClsStuEN) => {
return obj.isDegree === value;
}
case clsvCurrEduClsStuEN.con_CurrStuNum:
return (obj: clsvCurrEduClsStuEN) => {
return obj.currStuNum === value;
}
case clsvCurrEduClsStuEN.con_IdStu:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idStu === value;
}
case clsvCurrEduClsStuEN.con_StuId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.stuId === value;
}
case clsvCurrEduClsStuEN.con_StuName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.stuName === value;
}
case clsvCurrEduClsStuEN.con_IdSex:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idSex === value;
}
case clsvCurrEduClsStuEN.con_SexDesc:
return (obj: clsvCurrEduClsStuEN) => {
return obj.sexDesc === value;
}
case clsvCurrEduClsStuEN.con_MajorID:
return (obj: clsvCurrEduClsStuEN) => {
return obj.majorID === value;
}
case clsvCurrEduClsStuEN.con_MajorName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.majorName === value;
}
case clsvCurrEduClsStuEN.con_IdAdminCls:
return (obj: clsvCurrEduClsStuEN) => {
return obj.idAdminCls === value;
}
case clsvCurrEduClsStuEN.con_Birthday:
return (obj: clsvCurrEduClsStuEN) => {
return obj.birthday === value;
}
case clsvCurrEduClsStuEN.con_EduClsStuStateId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.eduClsStuStateId === value;
}
case clsvCurrEduClsStuEN.con_GetScoreTimes:
return (obj: clsvCurrEduClsStuEN) => {
return obj.getScoreTimes === value;
}
case clsvCurrEduClsStuEN.con_Score:
return (obj: clsvCurrEduClsStuEN) => {
return obj.score === value;
}
case clsvCurrEduClsStuEN.con_TotalScores:
return (obj: clsvCurrEduClsStuEN) => {
return obj.totalScores === value;
}
case clsvCurrEduClsStuEN.con_Ranking:
return (obj: clsvCurrEduClsStuEN) => {
return obj.ranking === value;
}
case clsvCurrEduClsStuEN.con_Percentile:
return (obj: clsvCurrEduClsStuEN) => {
return obj.percentile === value;
}
case clsvCurrEduClsStuEN.con_Confirmed:
return (obj: clsvCurrEduClsStuEN) => {
return obj.confirmed === value;
}
case clsvCurrEduClsStuEN.con_SchoolTerm:
return (obj: clsvCurrEduClsStuEN) => {
return obj.schoolTerm === value;
}
case clsvCurrEduClsStuEN.con_SchoolYear:
return (obj: clsvCurrEduClsStuEN) => {
return obj.schoolYear === value;
}
case clsvCurrEduClsStuEN.con_SignInDate:
return (obj: clsvCurrEduClsStuEN) => {
return obj.signInDate === value;
}
case clsvCurrEduClsStuEN.con_SignInStateID:
return (obj: clsvCurrEduClsStuEN) => {
return obj.signInStateID === value;
}
case clsvCurrEduClsStuEN.con_SignInUser:
return (obj: clsvCurrEduClsStuEN) => {
return obj.signInUser === value;
}
case clsvCurrEduClsStuEN.con_ModifyDate:
return (obj: clsvCurrEduClsStuEN) => {
return obj.modifyDate === value;
}
case clsvCurrEduClsStuEN.con_ModifyUserId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.modifyUserId === value;
}
case clsvCurrEduClsStuEN.con_CollegeName4Stu:
return (obj: clsvCurrEduClsStuEN) => {
return obj.collegeName4Stu === value;
}
case clsvCurrEduClsStuEN.con_EduClsTypeName:
return (obj: clsvCurrEduClsStuEN) => {
return obj.eduClsTypeName === value;
}
case clsvCurrEduClsStuEN.con_IsSynScore:
return (obj: clsvCurrEduClsStuEN) => {
return obj.isSynScore === value;
}
case clsvCurrEduClsStuEN.con_EduClsTypeId:
return (obj: clsvCurrEduClsStuEN) => {
return obj.eduClsTypeId === value;
}
case clsvCurrEduClsStuEN.con_UserType:
return (obj: clsvCurrEduClsStuEN) => {
return obj.userType === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsStu]中不存在!(in ${ vCurrEduClsStu_ConstructorName}.${ strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vCurrEduClsStu_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvCurrEduClsStuWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvCurrEduClsStuWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvCurrEduClsStuEN.con_IdEduClsStu)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvCurrEduClsStu = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrvCurrEduClsStu == null) return [];
let arrvCurrEduClsStuSel = arrvCurrEduClsStu;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvCurrEduClsStuSel.length == 0) return [];
return arrvCurrEduClsStuSel.map(x=>x.idEduClsStu);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vCurrEduClsStu_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetFirstObjAsync(strWhereCond: string): Promise<clsvCurrEduClsStuEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const objvCurrEduClsStu = vCurrEduClsStu_GetObjFromJsonObj(returnObj);
return objvCurrEduClsStu;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduClsStuEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduClsStuEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvCurrEduClsStuEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduClsStuEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvCurrEduClsStuExObjLstCache: Array<clsvCurrEduClsStuEN> = CacheHelper.Get(strKey);
const arrvCurrEduClsStuObjLstT = vCurrEduClsStu_GetObjLstByJSONObjLst(arrvCurrEduClsStuExObjLstCache);
return arrvCurrEduClsStuObjLstT;
}
try
{
const arrvCurrEduClsStuExObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvCurrEduClsStuExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduClsStuExObjLst.length);
console.log(strInfo);
return arrvCurrEduClsStuExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduClsStuEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduClsStuEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCurrEduClsStuEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvCurrEduClsStuEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduClsStuEN.CacheAddiCondition);
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
const arrvCurrEduClsStuExObjLstCache: Array<clsvCurrEduClsStuEN> = JSON.parse(strTempObjLst);
const arrvCurrEduClsStuObjLstT = vCurrEduClsStu_GetObjLstByJSONObjLst(arrvCurrEduClsStuExObjLstCache);
return arrvCurrEduClsStuObjLstT;
}
try
{
const arrvCurrEduClsStuExObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvCurrEduClsStuExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduClsStuExObjLst.length);
console.log(strInfo);
return arrvCurrEduClsStuExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvCurrEduClsStuObjLstCache: Array<clsvCurrEduClsStuEN> = JSON.parse(strTempObjLst);
return arrvCurrEduClsStuObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduClsStuEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduClsStuEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCurrEduClsStuEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvCurrEduClsStuEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduClsStuEN.CacheAddiCondition);
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
const arrvCurrEduClsStuExObjLstCache: Array<clsvCurrEduClsStuEN> = JSON.parse(strTempObjLst);
const arrvCurrEduClsStuObjLstT = vCurrEduClsStu_GetObjLstByJSONObjLst(arrvCurrEduClsStuExObjLstCache);
return arrvCurrEduClsStuObjLstT;
}
try
{
const arrvCurrEduClsStuExObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvCurrEduClsStuExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduClsStuExObjLst.length);
console.log(strInfo);
return arrvCurrEduClsStuExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvCurrEduClsStuObjLstCache: Array<clsvCurrEduClsStuEN> = JSON.parse(strTempObjLst);
return arrvCurrEduClsStuObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsvCurrEduClsStuEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStuWApi.vCurrEduClsStu_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStuWApi.vCurrEduClsStu_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrvCurrEduClsStuObjLstCache;
switch (clsvCurrEduClsStuEN.CacheModeId)
{
case "04"://sessionStorage
arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrvCurrEduClsStuObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvCurrEduClsStuObjLstCache;
switch (clsvCurrEduClsStuEN.CacheModeId)
{
case "04"://sessionStorage
arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvCurrEduClsStuObjLstCache = null;
break;
default:
arrvCurrEduClsStuObjLstCache = null;
break;
}
return arrvCurrEduClsStuObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngIdEduClsStuCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCurrEduClsStu_GetSubObjLstCache(objvCurrEduClsStuCond: clsvCurrEduClsStuEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
let arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache;
if (objvCurrEduClsStuCond.sfFldComparisonOp == null || objvCurrEduClsStuCond.sfFldComparisonOp == "") return arrvCurrEduClsStuSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvCurrEduClsStuCond.sfFldComparisonOp);
//console.log("clsvCurrEduClsStuWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvCurrEduClsStuCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCurrEduClsStuSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvCurrEduClsStuCond), vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvCurrEduClsStuEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduClsStu:关键字列表
 * @returns 对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstByIdEduClsStuLstAsync(arrIdEduClsStu: Array<string>): Promise<Array<clsvCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstByIdEduClsStuLstAsync";
const strAction = "GetObjLstByIdEduClsStuLst";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsStu, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
 * @param arrlngIdEduClsStuLst:关键字列表
 * @returns 对象列表
*/
export  async function vCurrEduClsStu_GetObjLstByIdEduClsStuLstCache(arrIdEduClsStuLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByIdEduClsStuLstCache";
try
{
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
const arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache.filter(x => arrIdEduClsStuLst.indexOf(x.idEduClsStu)>-1);
return arrvCurrEduClsStuSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdEduClsStuLst.join(","), vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvCurrEduClsStuEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvCurrEduClsStuEN>();
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStuObjLstCache.length == 0) return arrvCurrEduClsStuObjLstCache;
let arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvCurrEduClsStuCond = new clsvCurrEduClsStuEN();
ObjectAssign(objvCurrEduClsStuCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvCurrEduClsStuWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvCurrEduClsStuSel.length == 0) return arrvCurrEduClsStuSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.sort(vCurrEduClsStu_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.sort(objPagerPara.sortFun);
}
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.slice(intStart, intEnd);     
return arrvCurrEduClsStuSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvCurrEduClsStuEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vCurrEduClsStu_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvCurrEduClsStuEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objlngIdEduClsStuCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCurrEduClsStu_IsExistRecordCache(objvCurrEduClsStuCond: clsvCurrEduClsStuEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStuObjLstCache == null) return false;
let arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache;
if (objvCurrEduClsStuCond.sfFldComparisonOp == null || objvCurrEduClsStuCond.sfFldComparisonOp == "") return arrvCurrEduClsStuSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvCurrEduClsStuCond.sfFldComparisonOp);
//console.log("clsvCurrEduClsStuWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvCurrEduClsStuCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvCurrEduClsStuSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvCurrEduClsStuCond), vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_IsExistCache(lngIdEduClsStu:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStuObjLstCache == null) return false;
try
{
const arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache.filter(x => x.idEduClsStu == lngIdEduClsStu);
if (arrvCurrEduClsStuSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngIdEduClsStu, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngIdEduClsStu:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vCurrEduClsStu_IsExistAsync(lngIdEduClsStu: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsStu
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objvCurrEduClsStuCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vCurrEduClsStu_GetRecCountByCondCache(objvCurrEduClsStuCond: clsvCurrEduClsStuEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvCurrEduClsStuObjLstCache = await vCurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStuObjLstCache == null) return 0;
let arrvCurrEduClsStuSel = arrvCurrEduClsStuObjLstCache;
if (objvCurrEduClsStuCond.sfFldComparisonOp == null || objvCurrEduClsStuCond.sfFldComparisonOp == "") return arrvCurrEduClsStuSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvCurrEduClsStuCond.sfFldComparisonOp);
//console.log("clsvCurrEduClsStuWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvCurrEduClsStuCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStuSel = arrvCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCurrEduClsStuSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvCurrEduClsStuCond), vCurrEduClsStu_ConstructorName, strThisFuncName);
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
export  function vCurrEduClsStu_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vCurrEduClsStu_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduClsStuWApi.vCurrEduClsStu_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduClsStuWApi.vCurrEduClsStu_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
switch (clsvCurrEduClsStuEN.CacheModeId)
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
export  function vCurrEduClsStu_GetJSONStrByObj (pobjvCurrEduClsStuEN: clsvCurrEduClsStuEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvCurrEduClsStuEN);
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
export  function vCurrEduClsStu_GetObjLstByJSONStr (strJSON: string): Array<clsvCurrEduClsStuEN>
{
let arrvCurrEduClsStuObjLst = new Array<clsvCurrEduClsStuEN>();
if (strJSON === "")
{
return arrvCurrEduClsStuObjLst;
}
try
{
arrvCurrEduClsStuObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvCurrEduClsStuObjLst;
}
return arrvCurrEduClsStuObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCurrEduClsStuObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vCurrEduClsStu_GetObjLstByJSONObjLst (arrvCurrEduClsStuObjLstS: Array<clsvCurrEduClsStuEN>): Array<clsvCurrEduClsStuEN>
{
const arrvCurrEduClsStuObjLst = new Array<clsvCurrEduClsStuEN>();
for (const objInFor of arrvCurrEduClsStuObjLstS) {
const obj1 = vCurrEduClsStu_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvCurrEduClsStuObjLst.push(obj1);
}
return arrvCurrEduClsStuObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduClsStu_GetObjByJSONStr (strJSON: string): clsvCurrEduClsStuEN
{
let pobjvCurrEduClsStuEN = new clsvCurrEduClsStuEN();
if (strJSON === "")
{
return pobjvCurrEduClsStuEN;
}
try
{
pobjvCurrEduClsStuEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvCurrEduClsStuEN;
}
return pobjvCurrEduClsStuEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vCurrEduClsStu_GetCombineCondition(objvCurrEduClsStuCond: clsvCurrEduClsStuEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdEduClsStu) == true)
{
const strComparisonOpIdEduClsStu:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdEduClsStu];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_IdEduClsStu, objvCurrEduClsStuCond.idEduClsStu, strComparisonOpIdEduClsStu);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdCurrEduCls, objvCurrEduClsStuCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CurrEduClsId) == true)
{
const strComparisonOpCurrEduClsId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CurrEduClsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CurrEduClsId, objvCurrEduClsStuCond.currEduClsId, strComparisonOpCurrEduClsId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_EduClsName) == true)
{
const strComparisonOpEduClsName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_EduClsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_EduClsName, objvCurrEduClsStuCond.eduClsName, strComparisonOpEduClsName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CourseId, objvCurrEduClsStuCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CourseCode, objvCurrEduClsStuCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CourseName, objvCurrEduClsStuCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_TeachingSolutionId) == true)
{
const strComparisonOpTeachingSolutionId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_TeachingSolutionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_TeachingSolutionId, objvCurrEduClsStuCond.teachingSolutionId, strComparisonOpTeachingSolutionId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_TeachingSolutionName) == true)
{
const strComparisonOpTeachingSolutionName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_TeachingSolutionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_TeachingSolutionName, objvCurrEduClsStuCond.teachingSolutionName, strComparisonOpTeachingSolutionName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdXzCollege, objvCurrEduClsStuCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CollegeId, objvCurrEduClsStuCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CollegeName, objvCurrEduClsStuCond.collegeName, strComparisonOpCollegeName);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_Mark) == true)
{
const strComparisonOpMark:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_Mark];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_Mark, objvCurrEduClsStuCond.mark, strComparisonOpMark);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdUniZone, objvCurrEduClsStuCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_GradeBaseName) == true)
{
const strComparisonOpGradeBaseName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_GradeBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_GradeBaseName, objvCurrEduClsStuCond.gradeBaseName, strComparisonOpGradeBaseName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IsEffective) == true)
{
if (objvCurrEduClsStuCond.isEffective == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsStuEN.con_IsEffective);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsStuEN.con_IsEffective);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdCourseType) == true)
{
const strComparisonOpIdCourseType:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdCourseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdCourseType, objvCurrEduClsStuCond.idCourseType, strComparisonOpIdCourseType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CourseTypeId) == true)
{
const strComparisonOpCourseTypeId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CourseTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CourseTypeId, objvCurrEduClsStuCond.courseTypeId, strComparisonOpCourseTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CourseTypeName) == true)
{
const strComparisonOpCourseTypeName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CourseTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CourseTypeName, objvCurrEduClsStuCond.courseTypeName, strComparisonOpCourseTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IsDegree) == true)
{
if (objvCurrEduClsStuCond.isDegree == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsStuEN.con_IsDegree);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsStuEN.con_IsDegree);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CurrStuNum) == true)
{
const strComparisonOpCurrStuNum:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CurrStuNum];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_CurrStuNum, objvCurrEduClsStuCond.currStuNum, strComparisonOpCurrStuNum);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdStu) == true)
{
const strComparisonOpIdStu:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdStu];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdStu, objvCurrEduClsStuCond.idStu, strComparisonOpIdStu);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_StuId) == true)
{
const strComparisonOpStuId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_StuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_StuId, objvCurrEduClsStuCond.stuId, strComparisonOpStuId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_StuName) == true)
{
const strComparisonOpStuName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_StuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_StuName, objvCurrEduClsStuCond.stuName, strComparisonOpStuName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdSex) == true)
{
const strComparisonOpIdSex:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdSex];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdSex, objvCurrEduClsStuCond.idSex, strComparisonOpIdSex);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_SexDesc) == true)
{
const strComparisonOpSexDesc:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_SexDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_SexDesc, objvCurrEduClsStuCond.sexDesc, strComparisonOpSexDesc);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_MajorID) == true)
{
const strComparisonOpMajorID:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_MajorID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_MajorID, objvCurrEduClsStuCond.majorID, strComparisonOpMajorID);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_MajorName, objvCurrEduClsStuCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IdAdminCls) == true)
{
const strComparisonOpIdAdminCls:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_IdAdminCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_IdAdminCls, objvCurrEduClsStuCond.idAdminCls, strComparisonOpIdAdminCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_Birthday) == true)
{
const strComparisonOpBirthday:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_Birthday];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_Birthday, objvCurrEduClsStuCond.birthday, strComparisonOpBirthday);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_EduClsStuStateId) == true)
{
const strComparisonOpEduClsStuStateId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_EduClsStuStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_EduClsStuStateId, objvCurrEduClsStuCond.eduClsStuStateId, strComparisonOpEduClsStuStateId);
}
//数据类型number(tinyint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_Score) == true)
{
const strComparisonOpScore:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_Score, objvCurrEduClsStuCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_TotalScores) == true)
{
const strComparisonOpTotalScores:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_TotalScores];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_TotalScores, objvCurrEduClsStuCond.totalScores, strComparisonOpTotalScores);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_Ranking) == true)
{
const strComparisonOpRanking:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_Ranking];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_Ranking, objvCurrEduClsStuCond.ranking, strComparisonOpRanking);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_Percentile) == true)
{
const strComparisonOpPercentile:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_Percentile];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStuEN.con_Percentile, objvCurrEduClsStuCond.percentile, strComparisonOpPercentile);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_Confirmed) == true)
{
if (objvCurrEduClsStuCond.confirmed == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsStuEN.con_Confirmed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsStuEN.con_Confirmed);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_SchoolTerm, objvCurrEduClsStuCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_SchoolYear, objvCurrEduClsStuCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_SignInDate) == true)
{
const strComparisonOpSignInDate:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_SignInDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_SignInDate, objvCurrEduClsStuCond.signInDate, strComparisonOpSignInDate);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_SignInStateID) == true)
{
const strComparisonOpSignInStateID:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_SignInStateID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_SignInStateID, objvCurrEduClsStuCond.signInStateID, strComparisonOpSignInStateID);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_SignInUser) == true)
{
const strComparisonOpSignInUser:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_SignInUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_SignInUser, objvCurrEduClsStuCond.signInUser, strComparisonOpSignInUser);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_ModifyDate, objvCurrEduClsStuCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_ModifyUserId, objvCurrEduClsStuCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_CollegeName4Stu) == true)
{
const strComparisonOpCollegeName4Stu:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_CollegeName4Stu];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_CollegeName4Stu, objvCurrEduClsStuCond.collegeName4Stu, strComparisonOpCollegeName4Stu);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_EduClsTypeName) == true)
{
const strComparisonOpEduClsTypeName:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_EduClsTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_EduClsTypeName, objvCurrEduClsStuCond.eduClsTypeName, strComparisonOpEduClsTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_IsSynScore) == true)
{
if (objvCurrEduClsStuCond.isSynScore == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsStuEN.con_IsSynScore);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsStuEN.con_IsSynScore);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_EduClsTypeId) == true)
{
const strComparisonOpEduClsTypeId:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_EduClsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_EduClsTypeId, objvCurrEduClsStuCond.eduClsTypeId, strComparisonOpEduClsTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStuCond.dicFldComparisonOp, clsvCurrEduClsStuEN.con_UserType) == true)
{
const strComparisonOpUserType:string = objvCurrEduClsStuCond.dicFldComparisonOp[clsvCurrEduClsStuEN.con_UserType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStuEN.con_UserType, objvCurrEduClsStuCond.userType, strComparisonOpUserType);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvCurrEduClsStuENS:源对象
 * @param objvCurrEduClsStuENT:目标对象
*/
export  function vCurrEduClsStu_CopyObjTo(objvCurrEduClsStuENS: clsvCurrEduClsStuEN , objvCurrEduClsStuENT: clsvCurrEduClsStuEN ): void 
{
objvCurrEduClsStuENT.idEduClsStu = objvCurrEduClsStuENS.idEduClsStu; //教学班学生流水号
objvCurrEduClsStuENT.idCurrEduCls = objvCurrEduClsStuENS.idCurrEduCls; //教学班流水号
objvCurrEduClsStuENT.currEduClsId = objvCurrEduClsStuENS.currEduClsId; //教学班Id
objvCurrEduClsStuENT.eduClsName = objvCurrEduClsStuENS.eduClsName; //教学班名
objvCurrEduClsStuENT.courseId = objvCurrEduClsStuENS.courseId; //课程Id
objvCurrEduClsStuENT.courseCode = objvCurrEduClsStuENS.courseCode; //课程代码
objvCurrEduClsStuENT.courseName = objvCurrEduClsStuENS.courseName; //课程名称
objvCurrEduClsStuENT.teachingSolutionId = objvCurrEduClsStuENS.teachingSolutionId; //教学方案Id
objvCurrEduClsStuENT.teachingSolutionName = objvCurrEduClsStuENS.teachingSolutionName; //教学方案名称
objvCurrEduClsStuENT.idXzCollege = objvCurrEduClsStuENS.idXzCollege; //学院流水号
objvCurrEduClsStuENT.collegeId = objvCurrEduClsStuENS.collegeId; //学院ID
objvCurrEduClsStuENT.collegeName = objvCurrEduClsStuENS.collegeName; //学院名称
objvCurrEduClsStuENT.lessonQtyPerWeek = objvCurrEduClsStuENS.lessonQtyPerWeek; //周课时数
objvCurrEduClsStuENT.mark = objvCurrEduClsStuENS.mark; //获得学分
objvCurrEduClsStuENT.idUniZone = objvCurrEduClsStuENS.idUniZone; //校区流水号
objvCurrEduClsStuENT.gradeBaseName = objvCurrEduClsStuENS.gradeBaseName; //年级名称
objvCurrEduClsStuENT.isEffective = objvCurrEduClsStuENS.isEffective; //是否有效
objvCurrEduClsStuENT.idCourseType = objvCurrEduClsStuENS.idCourseType; //课程类型流水号
objvCurrEduClsStuENT.courseTypeId = objvCurrEduClsStuENS.courseTypeId; //课程类型ID
objvCurrEduClsStuENT.courseTypeName = objvCurrEduClsStuENS.courseTypeName; //课程类型名称
objvCurrEduClsStuENT.isDegree = objvCurrEduClsStuENS.isDegree; //是否学位课
objvCurrEduClsStuENT.currStuNum = objvCurrEduClsStuENS.currStuNum; //当前学生数
objvCurrEduClsStuENT.idStu = objvCurrEduClsStuENS.idStu; //学生流水号
objvCurrEduClsStuENT.stuId = objvCurrEduClsStuENS.stuId; //学号
objvCurrEduClsStuENT.stuName = objvCurrEduClsStuENS.stuName; //姓名
objvCurrEduClsStuENT.idSex = objvCurrEduClsStuENS.idSex; //性别流水号
objvCurrEduClsStuENT.sexDesc = objvCurrEduClsStuENS.sexDesc; //性别名称
objvCurrEduClsStuENT.majorID = objvCurrEduClsStuENS.majorID; //专业ID
objvCurrEduClsStuENT.majorName = objvCurrEduClsStuENS.majorName; //专业名称
objvCurrEduClsStuENT.idAdminCls = objvCurrEduClsStuENS.idAdminCls; //行政班流水号
objvCurrEduClsStuENT.birthday = objvCurrEduClsStuENS.birthday; //出生日期
objvCurrEduClsStuENT.eduClsStuStateId = objvCurrEduClsStuENS.eduClsStuStateId; //教学班学生状态编号
objvCurrEduClsStuENT.getScoreTimes = objvCurrEduClsStuENS.getScoreTimes; //获得成绩次数
objvCurrEduClsStuENT.score = objvCurrEduClsStuENS.score; //得分
objvCurrEduClsStuENT.totalScores = objvCurrEduClsStuENS.totalScores; //总分值
objvCurrEduClsStuENT.ranking = objvCurrEduClsStuENS.ranking; //名次
objvCurrEduClsStuENT.percentile = objvCurrEduClsStuENS.percentile; //百分位
objvCurrEduClsStuENT.confirmed = objvCurrEduClsStuENS.confirmed; //是否确认
objvCurrEduClsStuENT.schoolTerm = objvCurrEduClsStuENS.schoolTerm; //学期
objvCurrEduClsStuENT.schoolYear = objvCurrEduClsStuENS.schoolYear; //学年
objvCurrEduClsStuENT.signInDate = objvCurrEduClsStuENS.signInDate; //签入时间
objvCurrEduClsStuENT.signInStateID = objvCurrEduClsStuENS.signInStateID; //签入状态表流水号
objvCurrEduClsStuENT.signInUser = objvCurrEduClsStuENS.signInUser; //签入人
objvCurrEduClsStuENT.modifyDate = objvCurrEduClsStuENS.modifyDate; //修改日期
objvCurrEduClsStuENT.modifyUserId = objvCurrEduClsStuENS.modifyUserId; //修改人
objvCurrEduClsStuENT.collegeName4Stu = objvCurrEduClsStuENS.collegeName4Stu; //CollegeName4Stu
objvCurrEduClsStuENT.eduClsTypeName = objvCurrEduClsStuENS.eduClsTypeName; //教学班类型名称
objvCurrEduClsStuENT.isSynScore = objvCurrEduClsStuENS.isSynScore; //是否同步成绩
objvCurrEduClsStuENT.eduClsTypeId = objvCurrEduClsStuENS.eduClsTypeId; //教学班类型Id
objvCurrEduClsStuENT.userType = objvCurrEduClsStuENS.userType; //用户类型
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCurrEduClsStuENS:源对象
 * @param objvCurrEduClsStuENT:目标对象
*/
export  function vCurrEduClsStu_GetObjFromJsonObj(objvCurrEduClsStuENS: clsvCurrEduClsStuEN): clsvCurrEduClsStuEN 
{
 const objvCurrEduClsStuENT: clsvCurrEduClsStuEN = new clsvCurrEduClsStuEN();
ObjectAssign(objvCurrEduClsStuENT, objvCurrEduClsStuENS);
 return objvCurrEduClsStuENT;
}