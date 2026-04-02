
 /**
 * 类名:clsCurrEduClsWApi
 * 表名:CurrEduCls(01120123)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:00:31
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
 * 当前教学班(CurrEduCls)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsCurrEduClsEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const currEduCls_Controller = "CurrEduClsApi";
 export const currEduCls_ConstructorName = "currEduCls";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 对象
 **/
export  async function CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls: string): Promise<clsCurrEduClsEN|null>  
{
const strThisFuncName = "GetObjByIdCurrEduClsAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsWApi.GetObjByIdCurrEduClsAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsWApi.GetObjByIdCurrEduClsAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdCurrEduCls";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
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
const objCurrEduCls = CurrEduCls_GetObjFromJsonObj(returnObj);
return objCurrEduCls;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function CurrEduCls_GetObjByIdCurrEduClsCache(strIdCurrEduCls:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdCurrEduClsCache";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsWApi.GetObjByIdCurrEduClsCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsWApi.GetObjByIdCurrEduClsCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
try
{
const arrCurrEduClsSel = arrCurrEduClsObjLstCache.filter(x => 
 x.idCurrEduCls == strIdCurrEduCls );
let objCurrEduCls: clsCurrEduClsEN;
if (arrCurrEduClsSel.length > 0)
{
objCurrEduCls = arrCurrEduClsSel[0];
return objCurrEduCls;
}
else
{
if (bolTryAsyncOnce == true)
{
const objCurrEduClsConst = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
if (objCurrEduClsConst != null)
{
CurrEduCls_ReFreshThisCache(strCourseId);
return objCurrEduClsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCurrEduCls, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function CurrEduCls_GetObjByIdCurrEduClslocalStorage(strIdCurrEduCls: string) {
const strThisFuncName = "GetObjByIdCurrEduClslocalStorage";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsWApi.GetObjByIdCurrEduClslocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsWApi.GetObjByIdCurrEduClslocalStorage)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objCurrEduClsCache: clsCurrEduClsEN = JSON.parse(strTempObj);
return objCurrEduClsCache;
}
try
{
const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
if (objCurrEduCls != null)
{
localStorage.setItem(strKey, JSON.stringify(objCurrEduCls));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objCurrEduCls;
}
return objCurrEduCls;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCurrEduCls, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCurrEduCls:所给的对象
 * @returns 对象
*/
export  async function CurrEduCls_UpdateObjInLstCache(objCurrEduCls: clsCurrEduClsEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
const obj = arrCurrEduClsObjLstCache.find(x => x.eduClsName == objCurrEduCls.eduClsName);
if (obj != null)
{
objCurrEduCls.idCurrEduCls = obj.idCurrEduCls;
ObjectAssign( obj, objCurrEduCls);
}
else
{
arrCurrEduClsObjLstCache.push(objCurrEduCls);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function CurrEduCls_GetNameByIdCurrEduClsCache(strIdCurrEduCls: string,strCourseId: string) {

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsWApi.GetNameByIdCurrEduClsCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsWApi.GetNameByIdCurrEduClsCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
if (arrCurrEduClsObjLstCache == null) return "";
try
{
const arrCurrEduClsSel = arrCurrEduClsObjLstCache.filter(x => 
 x.idCurrEduCls == strIdCurrEduCls );
let objCurrEduCls: clsCurrEduClsEN;
if (arrCurrEduClsSel.length > 0)
{
objCurrEduCls = arrCurrEduClsSel[0];
return objCurrEduCls.eduClsName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdCurrEduCls);
console.error(strMsg);
alert(strMsg);
}
return "";
}

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
export  async function CurrEduCls_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsCurrEduClsWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsCurrEduClsWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsCurrEduClsEN.con_IdCurrEduCls)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsCurrEduClsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsCurrEduClsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdCurrEduCls = strInValue;
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
return "";
}
const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsCache(strIdCurrEduCls , strCourseIdClassfy);
if (objCurrEduCls == null) return "";
if (objCurrEduCls.GetFldValue(strOutFldName) == null) return "";
return objCurrEduCls.GetFldValue(strOutFldName).toString();
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
export  function CurrEduCls_SortFunDefa(a:clsCurrEduClsEN , b:clsCurrEduClsEN): number 
{
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function CurrEduCls_SortFunDefa2Fld(a:clsCurrEduClsEN , b:clsCurrEduClsEN): number 
{
if (a.currEduClsId == b.currEduClsId) return a.eduClsName.localeCompare(b.eduClsName);
else return a.currEduClsId.localeCompare(b.currEduClsId);
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
export  function CurrEduCls_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCurrEduClsEN.con_IdCurrEduCls:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsCurrEduClsEN.con_CurrEduClsId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.currEduClsId.localeCompare(b.currEduClsId);
}
case clsCurrEduClsEN.con_EduClsName:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsCurrEduClsEN.con_EduClsTypeId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.eduClsTypeId == null) return -1;
if (b.eduClsTypeId == null) return 1;
return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
}
case clsCurrEduClsEN.con_CourseId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsCurrEduClsEN.con_TeachingSolutionId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.teachingSolutionId == null) return -1;
if (b.teachingSolutionId == null) return 1;
return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
}
case clsCurrEduClsEN.con_IdXzCollege:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsCurrEduClsEN.con_IdXzMajor:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsCurrEduClsEN.con_IdEduWay:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idEduWay == null) return -1;
if (b.idEduWay == null) return 1;
return a.idEduWay.localeCompare(b.idEduWay);
}
case clsCurrEduClsEN.con_IdClassRoomType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idClassRoomType == null) return -1;
if (b.idClassRoomType == null) return 1;
return a.idClassRoomType.localeCompare(b.idClassRoomType);
}
case clsCurrEduClsEN.con_TotalLessonQty:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.totalLessonQty-b.totalLessonQty;
}
case clsCurrEduClsEN.con_MaxStuQty:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.maxStuQty-b.maxStuQty;
}
case clsCurrEduClsEN.con_WeekQty:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.weekQty-b.weekQty;
}
case clsCurrEduClsEN.con_ScheUnitPW:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.scheUnitPW-b.scheUnitPW;
}
case clsCurrEduClsEN.con_WeekStatusId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.weekStatusId == null) return -1;
if (b.weekStatusId == null) return 1;
return a.weekStatusId.localeCompare(b.weekStatusId);
}
case clsCurrEduClsEN.con_CustomerWeek:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.customerWeek == null) return -1;
if (b.customerWeek == null) return 1;
return a.customerWeek.localeCompare(b.customerWeek);
}
case clsCurrEduClsEN.con_LessonQtyPerWeek:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.lessonQtyPerWeek-b.lessonQtyPerWeek;
}
case clsCurrEduClsEN.con_Mark:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.mark-b.mark;
}
case clsCurrEduClsEN.con_IdUniZone:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idUniZone == null) return -1;
if (b.idUniZone == null) return 1;
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsCurrEduClsEN.con_IdGradeBase:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsCurrEduClsEN.con_IsEffective:
return (a: clsCurrEduClsEN) => {
if (a.isEffective == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_IsForPaperReading:
return (a: clsCurrEduClsEN) => {
if (a.isForPaperReading == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_SchoolYear:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsCurrEduClsEN.con_SchoolTerm:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsCurrEduClsEN.con_IdCourseType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idCourseType == null) return -1;
if (b.idCourseType == null) return 1;
return a.idCourseType.localeCompare(b.idCourseType);
}
case clsCurrEduClsEN.con_IsDegree:
return (a: clsCurrEduClsEN) => {
if (a.isDegree == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_IdScoreType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idScoreType == null) return -1;
if (b.idScoreType == null) return 1;
return a.idScoreType.localeCompare(b.idScoreType);
}
case clsCurrEduClsEN.con_GetScoreWayId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.getScoreWayId == null) return -1;
if (b.getScoreWayId == null) return 1;
return a.getScoreWayId.localeCompare(b.getScoreWayId);
}
case clsCurrEduClsEN.con_IsProportionalCtrl:
return (a: clsCurrEduClsEN) => {
if (a.isProportionalCtrl == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_IdExamType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.idExamType == null) return -1;
if (b.idExamType == null) return 1;
return a.idExamType.localeCompare(b.idExamType);
}
case clsCurrEduClsEN.con_ExamTime:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.examTime == null) return -1;
if (b.examTime == null) return 1;
return a.examTime.localeCompare(b.examTime);
}
case clsCurrEduClsEN.con_BeginWeek:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return a.beginWeek-b.beginWeek;
}
case clsCurrEduClsEN.con_UserType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.userType == null) return -1;
if (b.userType == null) return 1;
return a.userType.localeCompare(b.userType);
}
case clsCurrEduClsEN.con_ModifyDate:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsCurrEduClsEN.con_ModifyUserId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsCurrEduClsEN.con_Memo:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CurrEduCls]中不存在!(in ${ currEduCls_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsCurrEduClsEN.con_IdCurrEduCls:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsCurrEduClsEN.con_CurrEduClsId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.currEduClsId.localeCompare(a.currEduClsId);
}
case clsCurrEduClsEN.con_EduClsName:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsCurrEduClsEN.con_EduClsTypeId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.eduClsTypeId == null) return -1;
if (a.eduClsTypeId == null) return 1;
return b.eduClsTypeId.localeCompare(a.eduClsTypeId);
}
case clsCurrEduClsEN.con_CourseId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsCurrEduClsEN.con_TeachingSolutionId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.teachingSolutionId == null) return -1;
if (a.teachingSolutionId == null) return 1;
return b.teachingSolutionId.localeCompare(a.teachingSolutionId);
}
case clsCurrEduClsEN.con_IdXzCollege:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsCurrEduClsEN.con_IdXzMajor:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsCurrEduClsEN.con_IdEduWay:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idEduWay == null) return -1;
if (a.idEduWay == null) return 1;
return b.idEduWay.localeCompare(a.idEduWay);
}
case clsCurrEduClsEN.con_IdClassRoomType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idClassRoomType == null) return -1;
if (a.idClassRoomType == null) return 1;
return b.idClassRoomType.localeCompare(a.idClassRoomType);
}
case clsCurrEduClsEN.con_TotalLessonQty:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.totalLessonQty-a.totalLessonQty;
}
case clsCurrEduClsEN.con_MaxStuQty:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.maxStuQty-a.maxStuQty;
}
case clsCurrEduClsEN.con_WeekQty:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.weekQty-a.weekQty;
}
case clsCurrEduClsEN.con_ScheUnitPW:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.scheUnitPW-a.scheUnitPW;
}
case clsCurrEduClsEN.con_WeekStatusId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.weekStatusId == null) return -1;
if (a.weekStatusId == null) return 1;
return b.weekStatusId.localeCompare(a.weekStatusId);
}
case clsCurrEduClsEN.con_CustomerWeek:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.customerWeek == null) return -1;
if (a.customerWeek == null) return 1;
return b.customerWeek.localeCompare(a.customerWeek);
}
case clsCurrEduClsEN.con_LessonQtyPerWeek:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.lessonQtyPerWeek-a.lessonQtyPerWeek;
}
case clsCurrEduClsEN.con_Mark:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.mark-a.mark;
}
case clsCurrEduClsEN.con_IdUniZone:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idUniZone == null) return -1;
if (a.idUniZone == null) return 1;
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsCurrEduClsEN.con_IdGradeBase:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsCurrEduClsEN.con_IsEffective:
return (b: clsCurrEduClsEN) => {
if (b.isEffective == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_IsForPaperReading:
return (b: clsCurrEduClsEN) => {
if (b.isForPaperReading == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_SchoolYear:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsCurrEduClsEN.con_SchoolTerm:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsCurrEduClsEN.con_IdCourseType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idCourseType == null) return -1;
if (a.idCourseType == null) return 1;
return b.idCourseType.localeCompare(a.idCourseType);
}
case clsCurrEduClsEN.con_IsDegree:
return (b: clsCurrEduClsEN) => {
if (b.isDegree == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_IdScoreType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idScoreType == null) return -1;
if (a.idScoreType == null) return 1;
return b.idScoreType.localeCompare(a.idScoreType);
}
case clsCurrEduClsEN.con_GetScoreWayId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.getScoreWayId == null) return -1;
if (a.getScoreWayId == null) return 1;
return b.getScoreWayId.localeCompare(a.getScoreWayId);
}
case clsCurrEduClsEN.con_IsProportionalCtrl:
return (b: clsCurrEduClsEN) => {
if (b.isProportionalCtrl == true) return 1;
else return -1
}
case clsCurrEduClsEN.con_IdExamType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.idExamType == null) return -1;
if (a.idExamType == null) return 1;
return b.idExamType.localeCompare(a.idExamType);
}
case clsCurrEduClsEN.con_ExamTime:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.examTime == null) return -1;
if (a.examTime == null) return 1;
return b.examTime.localeCompare(a.examTime);
}
case clsCurrEduClsEN.con_BeginWeek:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
return b.beginWeek-a.beginWeek;
}
case clsCurrEduClsEN.con_UserType:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.userType == null) return -1;
if (a.userType == null) return 1;
return b.userType.localeCompare(a.userType);
}
case clsCurrEduClsEN.con_ModifyDate:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsCurrEduClsEN.con_ModifyUserId:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsCurrEduClsEN.con_Memo:
return (a: clsCurrEduClsEN, b: clsCurrEduClsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CurrEduCls]中不存在!(in ${ currEduCls_ConstructorName}.${ strThisFuncName})`;
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
export  async function CurrEduCls_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsCurrEduClsEN.con_IdCurrEduCls:
return (obj: clsCurrEduClsEN) => {
return obj.idCurrEduCls === value;
}
case clsCurrEduClsEN.con_CurrEduClsId:
return (obj: clsCurrEduClsEN) => {
return obj.currEduClsId === value;
}
case clsCurrEduClsEN.con_EduClsName:
return (obj: clsCurrEduClsEN) => {
return obj.eduClsName === value;
}
case clsCurrEduClsEN.con_EduClsTypeId:
return (obj: clsCurrEduClsEN) => {
return obj.eduClsTypeId === value;
}
case clsCurrEduClsEN.con_CourseId:
return (obj: clsCurrEduClsEN) => {
return obj.courseId === value;
}
case clsCurrEduClsEN.con_TeachingSolutionId:
return (obj: clsCurrEduClsEN) => {
return obj.teachingSolutionId === value;
}
case clsCurrEduClsEN.con_IdXzCollege:
return (obj: clsCurrEduClsEN) => {
return obj.idXzCollege === value;
}
case clsCurrEduClsEN.con_IdXzMajor:
return (obj: clsCurrEduClsEN) => {
return obj.idXzMajor === value;
}
case clsCurrEduClsEN.con_IdEduWay:
return (obj: clsCurrEduClsEN) => {
return obj.idEduWay === value;
}
case clsCurrEduClsEN.con_IdClassRoomType:
return (obj: clsCurrEduClsEN) => {
return obj.idClassRoomType === value;
}
case clsCurrEduClsEN.con_TotalLessonQty:
return (obj: clsCurrEduClsEN) => {
return obj.totalLessonQty === value;
}
case clsCurrEduClsEN.con_MaxStuQty:
return (obj: clsCurrEduClsEN) => {
return obj.maxStuQty === value;
}
case clsCurrEduClsEN.con_WeekQty:
return (obj: clsCurrEduClsEN) => {
return obj.weekQty === value;
}
case clsCurrEduClsEN.con_ScheUnitPW:
return (obj: clsCurrEduClsEN) => {
return obj.scheUnitPW === value;
}
case clsCurrEduClsEN.con_WeekStatusId:
return (obj: clsCurrEduClsEN) => {
return obj.weekStatusId === value;
}
case clsCurrEduClsEN.con_CustomerWeek:
return (obj: clsCurrEduClsEN) => {
return obj.customerWeek === value;
}
case clsCurrEduClsEN.con_LessonQtyPerWeek:
return (obj: clsCurrEduClsEN) => {
return obj.lessonQtyPerWeek === value;
}
case clsCurrEduClsEN.con_Mark:
return (obj: clsCurrEduClsEN) => {
return obj.mark === value;
}
case clsCurrEduClsEN.con_IdUniZone:
return (obj: clsCurrEduClsEN) => {
return obj.idUniZone === value;
}
case clsCurrEduClsEN.con_IdGradeBase:
return (obj: clsCurrEduClsEN) => {
return obj.idGradeBase === value;
}
case clsCurrEduClsEN.con_IsEffective:
return (obj: clsCurrEduClsEN) => {
return obj.isEffective === value;
}
case clsCurrEduClsEN.con_IsForPaperReading:
return (obj: clsCurrEduClsEN) => {
return obj.isForPaperReading === value;
}
case clsCurrEduClsEN.con_SchoolYear:
return (obj: clsCurrEduClsEN) => {
return obj.schoolYear === value;
}
case clsCurrEduClsEN.con_SchoolTerm:
return (obj: clsCurrEduClsEN) => {
return obj.schoolTerm === value;
}
case clsCurrEduClsEN.con_IdCourseType:
return (obj: clsCurrEduClsEN) => {
return obj.idCourseType === value;
}
case clsCurrEduClsEN.con_IsDegree:
return (obj: clsCurrEduClsEN) => {
return obj.isDegree === value;
}
case clsCurrEduClsEN.con_IdScoreType:
return (obj: clsCurrEduClsEN) => {
return obj.idScoreType === value;
}
case clsCurrEduClsEN.con_GetScoreWayId:
return (obj: clsCurrEduClsEN) => {
return obj.getScoreWayId === value;
}
case clsCurrEduClsEN.con_IsProportionalCtrl:
return (obj: clsCurrEduClsEN) => {
return obj.isProportionalCtrl === value;
}
case clsCurrEduClsEN.con_IdExamType:
return (obj: clsCurrEduClsEN) => {
return obj.idExamType === value;
}
case clsCurrEduClsEN.con_ExamTime:
return (obj: clsCurrEduClsEN) => {
return obj.examTime === value;
}
case clsCurrEduClsEN.con_BeginWeek:
return (obj: clsCurrEduClsEN) => {
return obj.beginWeek === value;
}
case clsCurrEduClsEN.con_UserType:
return (obj: clsCurrEduClsEN) => {
return obj.userType === value;
}
case clsCurrEduClsEN.con_ModifyDate:
return (obj: clsCurrEduClsEN) => {
return obj.modifyDate === value;
}
case clsCurrEduClsEN.con_ModifyUserId:
return (obj: clsCurrEduClsEN) => {
return obj.modifyUserId === value;
}
case clsCurrEduClsEN.con_Memo:
return (obj: clsCurrEduClsEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CurrEduCls]中不存在!(in ${ currEduCls_ConstructorName}.${ strThisFuncName})`;
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
export  async function CurrEduCls_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsCurrEduClsWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsCurrEduClsWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsCurrEduClsEN.con_IdCurrEduCls)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrCurrEduCls = await CurrEduCls_GetObjLstCache(strCourseIdClassfy);
if (arrCurrEduCls == null) return [];
let arrCurrEduClsSel = arrCurrEduCls;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrCurrEduClsSel.length == 0) return [];
return arrCurrEduClsSel.map(x=>x.idCurrEduCls);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CurrEduCls_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetFirstObjAsync(strWhereCond: string): Promise<clsCurrEduClsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const objCurrEduCls = CurrEduCls_GetObjFromJsonObj(returnObj);
return objCurrEduCls;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsCurrEduClsEN.WhereFormat) == false)
{
strWhereCond = Format(clsCurrEduClsEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsCurrEduClsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCurrEduClsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrCurrEduClsExObjLstCache: Array<clsCurrEduClsEN> = CacheHelper.Get(strKey);
const arrCurrEduClsObjLstT = CurrEduCls_GetObjLstByJSONObjLst(arrCurrEduClsExObjLstCache);
return arrCurrEduClsObjLstT;
}
try
{
const arrCurrEduClsExObjLst = await CurrEduCls_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrCurrEduClsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCurrEduClsExObjLst.length);
console.log(strInfo);
return arrCurrEduClsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduCls_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsCurrEduClsEN.WhereFormat) == false)
{
strWhereCond = Format(clsCurrEduClsEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsCurrEduClsEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsCurrEduClsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCurrEduClsEN.CacheAddiCondition);
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
const arrCurrEduClsExObjLstCache: Array<clsCurrEduClsEN> = JSON.parse(strTempObjLst);
const arrCurrEduClsObjLstT = CurrEduCls_GetObjLstByJSONObjLst(arrCurrEduClsExObjLstCache);
return arrCurrEduClsObjLstT;
}
try
{
const arrCurrEduClsExObjLst = await CurrEduCls_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrCurrEduClsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCurrEduClsExObjLst.length);
console.log(strInfo);
return arrCurrEduClsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduCls_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrCurrEduClsObjLstCache: Array<clsCurrEduClsEN> = JSON.parse(strTempObjLst);
return arrCurrEduClsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function CurrEduCls_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsCurrEduClsEN.WhereFormat) == false)
{
strWhereCond = Format(clsCurrEduClsEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsCurrEduClsEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsCurrEduClsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCurrEduClsEN.CacheAddiCondition);
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
const arrCurrEduClsExObjLstCache: Array<clsCurrEduClsEN> = JSON.parse(strTempObjLst);
const arrCurrEduClsObjLstT = CurrEduCls_GetObjLstByJSONObjLst(arrCurrEduClsExObjLstCache);
return arrCurrEduClsObjLstT;
}
try
{
const arrCurrEduClsExObjLst = await CurrEduCls_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrCurrEduClsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCurrEduClsExObjLst.length);
console.log(strInfo);
return arrCurrEduClsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduCls_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrCurrEduClsObjLstCache: Array<clsCurrEduClsEN> = JSON.parse(strTempObjLst);
return arrCurrEduClsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduCls_GetObjLstCache(strCourseId: string): Promise<Array<clsCurrEduClsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsCurrEduClsWApi.CurrEduCls_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsCurrEduClsWApi.CurrEduCls_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrCurrEduClsObjLstCache;
switch (clsCurrEduClsEN.CacheModeId)
{
case "04"://sessionStorage
arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstClientCache(strCourseId);
break;
default:
arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstClientCache(strCourseId);
break;
}
return arrCurrEduClsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduCls_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrCurrEduClsObjLstCache;
switch (clsCurrEduClsEN.CacheModeId)
{
case "04"://sessionStorage
arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrCurrEduClsObjLstCache = null;
break;
default:
arrCurrEduClsObjLstCache = null;
break;
}
return arrCurrEduClsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdCurrEduClsCond:条件对象
 * @returns 对象列表子集
*/
export  async function CurrEduCls_GetSubObjLstCache(objCurrEduClsCond: clsCurrEduClsEN ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
let arrCurrEduClsSel = arrCurrEduClsObjLstCache;
if (objCurrEduClsCond.sfFldComparisonOp == null || objCurrEduClsCond.sfFldComparisonOp == "") return arrCurrEduClsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCurrEduClsCond.sfFldComparisonOp);
//console.log("clsCurrEduClsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCurrEduClsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCurrEduClsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objCurrEduClsCond), currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCurrEduClsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdCurrEduCls:关键字列表
 * @returns 对象列表
 **/
export  async function CurrEduCls_GetObjLstByIdCurrEduClsLstAsync(arrIdCurrEduCls: Array<string>): Promise<Array<clsCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstByIdCurrEduClsLstAsync";
const strAction = "GetObjLstByIdCurrEduClsLst";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdCurrEduCls, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param arrstrIdCurrEduClsLst:关键字列表
 * @returns 对象列表
*/
export  async function CurrEduCls_GetObjLstByIdCurrEduClsLstCache(arrIdCurrEduClsLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByIdCurrEduClsLstCache";
try
{
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
const arrCurrEduClsSel = arrCurrEduClsObjLstCache.filter(x => arrIdCurrEduClsLst.indexOf(x.idCurrEduCls)>-1);
return arrCurrEduClsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdCurrEduClsLst.join(","), currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsCurrEduClsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsCurrEduClsEN>();
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
if (arrCurrEduClsObjLstCache.length == 0) return arrCurrEduClsObjLstCache;
let arrCurrEduClsSel = arrCurrEduClsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objCurrEduClsCond = new clsCurrEduClsEN();
ObjectAssign(objCurrEduClsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsCurrEduClsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCurrEduClsSel.length == 0) return arrCurrEduClsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCurrEduClsSel = arrCurrEduClsSel.sort(CurrEduCls_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCurrEduClsSel = arrCurrEduClsSel.sort(objPagerPara.sortFun);
}
arrCurrEduClsSel = arrCurrEduClsSel.slice(intStart, intEnd);     
return arrCurrEduClsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCurrEduClsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function CurrEduCls_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsCurrEduClsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:关键字
 * @returns 获取删除的结果
 **/
export  async function CurrEduCls_DelRecordAsync(strIdCurrEduCls: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(currEduCls_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdCurrEduCls);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param arrIdCurrEduCls:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function CurrEduCls_DelCurrEduClssAsync(arrIdCurrEduCls: Array<string>): Promise<number> 
{
const strThisFuncName = "DelCurrEduClssAsync";
const strAction = "DelCurrEduClss";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdCurrEduCls, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_DelCurrEduClssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelCurrEduClssByCondAsync";
const strAction = "DelCurrEduClssByCond";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CurrEduCls_AddNewRecordAsync(objCurrEduClsEN: clsCurrEduClsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objCurrEduClsEN);
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CurrEduCls_AddNewRecordWithMaxIdAsync(objCurrEduClsEN: clsCurrEduClsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function CurrEduCls_AddNewRecordWithReturnKeyAsync(objCurrEduClsEN: clsCurrEduClsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CurrEduCls_UpdateRecordAsync(objCurrEduClsEN: clsCurrEduClsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objCurrEduClsEN.sfUpdFldSetStr === undefined || objCurrEduClsEN.sfUpdFldSetStr === null || objCurrEduClsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCurrEduClsEN.idCurrEduCls);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CurrEduCls_UpdateWithConditionAsync(objCurrEduClsEN: clsCurrEduClsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objCurrEduClsEN.sfUpdFldSetStr === undefined || objCurrEduClsEN.sfUpdFldSetStr === null || objCurrEduClsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCurrEduClsEN.idCurrEduCls);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);
objCurrEduClsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objstrIdCurrEduClsCond:条件对象
 * @returns 对象列表子集
*/
export  async function CurrEduCls_IsExistRecordCache(objCurrEduClsCond: clsCurrEduClsEN,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
if (arrCurrEduClsObjLstCache == null) return false;
let arrCurrEduClsSel = arrCurrEduClsObjLstCache;
if (objCurrEduClsCond.sfFldComparisonOp == null || objCurrEduClsCond.sfFldComparisonOp == "") return arrCurrEduClsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCurrEduClsCond.sfFldComparisonOp);
//console.log("clsCurrEduClsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCurrEduClsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCurrEduClsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objCurrEduClsCond), currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function CurrEduCls_IsExistCache(strIdCurrEduCls:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
if (arrCurrEduClsObjLstCache == null) return false;
try
{
const arrCurrEduClsSel = arrCurrEduClsObjLstCache.filter(x => x.idCurrEduCls == strIdCurrEduCls);
if (arrCurrEduClsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdCurrEduCls, currEduCls_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function CurrEduCls_IsExistAsync(strIdCurrEduCls: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function CurrEduCls_GetRecCountByCondCache(objCurrEduClsCond: clsCurrEduClsEN ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrCurrEduClsObjLstCache = await CurrEduCls_GetObjLstCache(strCourseId);
if (arrCurrEduClsObjLstCache == null) return 0;
let arrCurrEduClsSel = arrCurrEduClsObjLstCache;
if (objCurrEduClsCond.sfFldComparisonOp == null || objCurrEduClsCond.sfFldComparisonOp == "") return arrCurrEduClsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCurrEduClsCond.sfFldComparisonOp);
//console.log("clsCurrEduClsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCurrEduClsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsSel = arrCurrEduClsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCurrEduClsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objCurrEduClsCond), currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  async function CurrEduCls_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(currEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduCls_ConstructorName, strThisFuncName);
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
export  function CurrEduCls_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function CurrEduCls_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsCurrEduClsWApi.clsCurrEduClsWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsCurrEduClsWApi.clsCurrEduClsWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
switch (clsCurrEduClsEN.CacheModeId)
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
export  function CurrEduCls_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsCurrEduClsWApi.CurrEduCls_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsCurrEduClsWApi.CurrEduCls_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsCurrEduClsEN._CurrTabName, strCourseId);
switch (clsCurrEduClsEN.CacheModeId)
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

 * @param strCourseId:
*/
export  async function CurrEduCls_BindDdl_IdCurrEduClsByCourseIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsCurrEduClsWApi.BindDdl_IdCurrEduClsByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsCurrEduClsWApi.BindDdl_IdCurrEduClsByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdCurrEduClsByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdCurrEduClsByCourseIdInDivCache");
let arrObjLstSel = await CurrEduCls_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsCurrEduClsEN.con_IdCurrEduCls, clsCurrEduClsEN.con_EduClsName, "当前教学班");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CurrEduCls_CheckPropertyNew(pobjCurrEduClsEN: clsCurrEduClsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjCurrEduClsEN.currEduClsId) === true )
{
 throw new Error("(errid:Watl000411)字段[教学班Id]不能为空(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsName) === true )
{
 throw new Error("(errid:Watl000411)字段[教学班名]不能为空(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCurrEduClsEN.idCurrEduCls) == false && GetStrLen(pobjCurrEduClsEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idCurrEduCls)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.currEduClsId) == false && GetStrLen(pobjCurrEduClsEN.currEduClsId) > 15)
{
 throw new Error("(errid:Watl000413)字段[教学班Id(currEduClsId)]的长度不能超过15(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.currEduClsId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsName) == false && GetStrLen(pobjCurrEduClsEN.eduClsName) > 100)
{
 throw new Error("(errid:Watl000413)字段[教学班名(eduClsName)]的长度不能超过100(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.eduClsName)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsTypeId) == false && GetStrLen(pobjCurrEduClsEN.eduClsTypeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[教学班类型Id(eduClsTypeId)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.eduClsTypeId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.courseId) == false && GetStrLen(pobjCurrEduClsEN.courseId) > 8)
{
 throw new Error("(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.courseId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.teachingSolutionId) == false && GetStrLen(pobjCurrEduClsEN.teachingSolutionId) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学方案Id(teachingSolutionId)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.teachingSolutionId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzCollege) == false && GetStrLen(pobjCurrEduClsEN.idXzCollege) > 4)
{
 throw new Error("(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idXzCollege)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzMajor) == false && GetStrLen(pobjCurrEduClsEN.idXzMajor) > 8)
{
 throw new Error("(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idXzMajor)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idEduWay) == false && GetStrLen(pobjCurrEduClsEN.idEduWay) > 4)
{
 throw new Error("(errid:Watl000413)字段[教学方式流水号(idEduWay)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idEduWay)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idClassRoomType) == false && GetStrLen(pobjCurrEduClsEN.idClassRoomType) > 4)
{
 throw new Error("(errid:Watl000413)字段[教室类型流水号(idClassRoomType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idClassRoomType)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.weekStatusId) == false && GetStrLen(pobjCurrEduClsEN.weekStatusId) > 2)
{
 throw new Error("(errid:Watl000413)字段[周状态编号(单,双,全周)(weekStatusId)]的长度不能超过2(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.weekStatusId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.customerWeek) == false && GetStrLen(pobjCurrEduClsEN.customerWeek) > 50)
{
 throw new Error("(errid:Watl000413)字段[自定义上课周(customerWeek)]的长度不能超过50(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.customerWeek)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idUniZone) == false && GetStrLen(pobjCurrEduClsEN.idUniZone) > 4)
{
 throw new Error("(errid:Watl000413)字段[校区流水号(idUniZone)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idUniZone)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idGradeBase) == false && GetStrLen(pobjCurrEduClsEN.idGradeBase) > 4)
{
 throw new Error("(errid:Watl000413)字段[年级流水号(idGradeBase)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idGradeBase)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolYear) == false && GetStrLen(pobjCurrEduClsEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.schoolYear)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolTerm) == false && GetStrLen(pobjCurrEduClsEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.schoolTerm)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idCourseType) == false && GetStrLen(pobjCurrEduClsEN.idCourseType) > 4)
{
 throw new Error("(errid:Watl000413)字段[课程类型流水号(idCourseType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idCourseType)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idScoreType) == false && GetStrLen(pobjCurrEduClsEN.idScoreType) > 4)
{
 throw new Error("(errid:Watl000413)字段[成绩类型流水号(idScoreType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idScoreType)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.getScoreWayId) == false && GetStrLen(pobjCurrEduClsEN.getScoreWayId) > 2)
{
 throw new Error("(errid:Watl000413)字段[获得成绩方式Id(getScoreWayId)]的长度不能超过2(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.getScoreWayId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idExamType) == false && GetStrLen(pobjCurrEduClsEN.idExamType) > 4)
{
 throw new Error("(errid:Watl000413)字段[考试方式流水号(idExamType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idExamType)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.examTime) == false && GetStrLen(pobjCurrEduClsEN.examTime) > 8)
{
 throw new Error("(errid:Watl000413)字段[考试时间(examTime)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.examTime)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.userType) == false && GetStrLen(pobjCurrEduClsEN.userType) > 50)
{
 throw new Error("(errid:Watl000413)字段[用户类型(userType)]的长度不能超过50(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.userType)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyDate) == false && GetStrLen(pobjCurrEduClsEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.modifyDate)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyUserId) == false && GetStrLen(pobjCurrEduClsEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.modifyUserId)(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.memo) == false && GetStrLen(pobjCurrEduClsEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.memo)(clsCurrEduClsBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCurrEduClsEN.idCurrEduCls) == false && undefined !== pobjCurrEduClsEN.idCurrEduCls && tzDataType.isString(pobjCurrEduClsEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjCurrEduClsEN.idCurrEduCls)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.currEduClsId) == false && undefined !== pobjCurrEduClsEN.currEduClsId && tzDataType.isString(pobjCurrEduClsEN.currEduClsId) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班Id(currEduClsId)]的值:[$(pobjCurrEduClsEN.currEduClsId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsName) == false && undefined !== pobjCurrEduClsEN.eduClsName && tzDataType.isString(pobjCurrEduClsEN.eduClsName) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班名(eduClsName)]的值:[$(pobjCurrEduClsEN.eduClsName)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsTypeId) == false && undefined !== pobjCurrEduClsEN.eduClsTypeId && tzDataType.isString(pobjCurrEduClsEN.eduClsTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班类型Id(eduClsTypeId)]的值:[$(pobjCurrEduClsEN.eduClsTypeId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.courseId) == false && undefined !== pobjCurrEduClsEN.courseId && tzDataType.isString(pobjCurrEduClsEN.courseId) === false)
{
 throw new Error("(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjCurrEduClsEN.courseId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.teachingSolutionId) == false && undefined !== pobjCurrEduClsEN.teachingSolutionId && tzDataType.isString(pobjCurrEduClsEN.teachingSolutionId) === false)
{
 throw new Error("(errid:Watl000414)字段[教学方案Id(teachingSolutionId)]的值:[$(pobjCurrEduClsEN.teachingSolutionId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzCollege) == false && undefined !== pobjCurrEduClsEN.idXzCollege && tzDataType.isString(pobjCurrEduClsEN.idXzCollege) === false)
{
 throw new Error("(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[$(pobjCurrEduClsEN.idXzCollege)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzMajor) == false && undefined !== pobjCurrEduClsEN.idXzMajor && tzDataType.isString(pobjCurrEduClsEN.idXzMajor) === false)
{
 throw new Error("(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjCurrEduClsEN.idXzMajor)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idEduWay) == false && undefined !== pobjCurrEduClsEN.idEduWay && tzDataType.isString(pobjCurrEduClsEN.idEduWay) === false)
{
 throw new Error("(errid:Watl000414)字段[教学方式流水号(idEduWay)]的值:[$(pobjCurrEduClsEN.idEduWay)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idClassRoomType) == false && undefined !== pobjCurrEduClsEN.idClassRoomType && tzDataType.isString(pobjCurrEduClsEN.idClassRoomType) === false)
{
 throw new Error("(errid:Watl000414)字段[教室类型流水号(idClassRoomType)]的值:[$(pobjCurrEduClsEN.idClassRoomType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.totalLessonQty && undefined !== pobjCurrEduClsEN.totalLessonQty && tzDataType.isNumber(pobjCurrEduClsEN.totalLessonQty) === false)
{
 throw new Error("(errid:Watl000414)字段[总课时数(totalLessonQty)]的值:[$(pobjCurrEduClsEN.totalLessonQty)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.maxStuQty && undefined !== pobjCurrEduClsEN.maxStuQty && tzDataType.isNumber(pobjCurrEduClsEN.maxStuQty) === false)
{
 throw new Error("(errid:Watl000414)字段[最大学生数(maxStuQty)]的值:[$(pobjCurrEduClsEN.maxStuQty)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.weekQty && undefined !== pobjCurrEduClsEN.weekQty && tzDataType.isNumber(pobjCurrEduClsEN.weekQty) === false)
{
 throw new Error("(errid:Watl000414)字段[总周数(weekQty)]的值:[$(pobjCurrEduClsEN.weekQty)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.scheUnitPW && undefined !== pobjCurrEduClsEN.scheUnitPW && tzDataType.isNumber(pobjCurrEduClsEN.scheUnitPW) === false)
{
 throw new Error("(errid:Watl000414)字段[周排课次数(scheUnitPW)]的值:[$(pobjCurrEduClsEN.scheUnitPW)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.weekStatusId) == false && undefined !== pobjCurrEduClsEN.weekStatusId && tzDataType.isString(pobjCurrEduClsEN.weekStatusId) === false)
{
 throw new Error("(errid:Watl000414)字段[周状态编号(单,双,全周)(weekStatusId)]的值:[$(pobjCurrEduClsEN.weekStatusId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.customerWeek) == false && undefined !== pobjCurrEduClsEN.customerWeek && tzDataType.isString(pobjCurrEduClsEN.customerWeek) === false)
{
 throw new Error("(errid:Watl000414)字段[自定义上课周(customerWeek)]的值:[$(pobjCurrEduClsEN.customerWeek)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.lessonQtyPerWeek && undefined !== pobjCurrEduClsEN.lessonQtyPerWeek && tzDataType.isNumber(pobjCurrEduClsEN.lessonQtyPerWeek) === false)
{
 throw new Error("(errid:Watl000414)字段[周课时数(lessonQtyPerWeek)]的值:[$(pobjCurrEduClsEN.lessonQtyPerWeek)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.mark && undefined !== pobjCurrEduClsEN.mark && tzDataType.isNumber(pobjCurrEduClsEN.mark) === false)
{
 throw new Error("(errid:Watl000414)字段[获得学分(mark)]的值:[$(pobjCurrEduClsEN.mark)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idUniZone) == false && undefined !== pobjCurrEduClsEN.idUniZone && tzDataType.isString(pobjCurrEduClsEN.idUniZone) === false)
{
 throw new Error("(errid:Watl000414)字段[校区流水号(idUniZone)]的值:[$(pobjCurrEduClsEN.idUniZone)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idGradeBase) == false && undefined !== pobjCurrEduClsEN.idGradeBase && tzDataType.isString(pobjCurrEduClsEN.idGradeBase) === false)
{
 throw new Error("(errid:Watl000414)字段[年级流水号(idGradeBase)]的值:[$(pobjCurrEduClsEN.idGradeBase)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.isEffective && undefined !== pobjCurrEduClsEN.isEffective && tzDataType.isBoolean(pobjCurrEduClsEN.isEffective) === false)
{
 throw new Error("(errid:Watl000414)字段[是否有效(isEffective)]的值:[$(pobjCurrEduClsEN.isEffective)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.isForPaperReading && undefined !== pobjCurrEduClsEN.isForPaperReading && tzDataType.isBoolean(pobjCurrEduClsEN.isForPaperReading) === false)
{
 throw new Error("(errid:Watl000414)字段[是否参与论文阅读(isForPaperReading)]的值:[$(pobjCurrEduClsEN.isForPaperReading)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolYear) == false && undefined !== pobjCurrEduClsEN.schoolYear && tzDataType.isString(pobjCurrEduClsEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjCurrEduClsEN.schoolYear)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolTerm) == false && undefined !== pobjCurrEduClsEN.schoolTerm && tzDataType.isString(pobjCurrEduClsEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjCurrEduClsEN.schoolTerm)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idCourseType) == false && undefined !== pobjCurrEduClsEN.idCourseType && tzDataType.isString(pobjCurrEduClsEN.idCourseType) === false)
{
 throw new Error("(errid:Watl000414)字段[课程类型流水号(idCourseType)]的值:[$(pobjCurrEduClsEN.idCourseType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.isDegree && undefined !== pobjCurrEduClsEN.isDegree && tzDataType.isBoolean(pobjCurrEduClsEN.isDegree) === false)
{
 throw new Error("(errid:Watl000414)字段[是否学位课(isDegree)]的值:[$(pobjCurrEduClsEN.isDegree)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idScoreType) == false && undefined !== pobjCurrEduClsEN.idScoreType && tzDataType.isString(pobjCurrEduClsEN.idScoreType) === false)
{
 throw new Error("(errid:Watl000414)字段[成绩类型流水号(idScoreType)]的值:[$(pobjCurrEduClsEN.idScoreType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.getScoreWayId) == false && undefined !== pobjCurrEduClsEN.getScoreWayId && tzDataType.isString(pobjCurrEduClsEN.getScoreWayId) === false)
{
 throw new Error("(errid:Watl000414)字段[获得成绩方式Id(getScoreWayId)]的值:[$(pobjCurrEduClsEN.getScoreWayId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.isProportionalCtrl && undefined !== pobjCurrEduClsEN.isProportionalCtrl && tzDataType.isBoolean(pobjCurrEduClsEN.isProportionalCtrl) === false)
{
 throw new Error("(errid:Watl000414)字段[是否比例控制(isProportionalCtrl)]的值:[$(pobjCurrEduClsEN.isProportionalCtrl)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idExamType) == false && undefined !== pobjCurrEduClsEN.idExamType && tzDataType.isString(pobjCurrEduClsEN.idExamType) === false)
{
 throw new Error("(errid:Watl000414)字段[考试方式流水号(idExamType)]的值:[$(pobjCurrEduClsEN.idExamType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.examTime) == false && undefined !== pobjCurrEduClsEN.examTime && tzDataType.isString(pobjCurrEduClsEN.examTime) === false)
{
 throw new Error("(errid:Watl000414)字段[考试时间(examTime)]的值:[$(pobjCurrEduClsEN.examTime)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsEN.beginWeek && undefined !== pobjCurrEduClsEN.beginWeek && tzDataType.isNumber(pobjCurrEduClsEN.beginWeek) === false)
{
 throw new Error("(errid:Watl000414)字段[开始周(beginWeek)]的值:[$(pobjCurrEduClsEN.beginWeek)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.userType) == false && undefined !== pobjCurrEduClsEN.userType && tzDataType.isString(pobjCurrEduClsEN.userType) === false)
{
 throw new Error("(errid:Watl000414)字段[用户类型(userType)]的值:[$(pobjCurrEduClsEN.userType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyDate) == false && undefined !== pobjCurrEduClsEN.modifyDate && tzDataType.isString(pobjCurrEduClsEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjCurrEduClsEN.modifyDate)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyUserId) == false && undefined !== pobjCurrEduClsEN.modifyUserId && tzDataType.isString(pobjCurrEduClsEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjCurrEduClsEN.modifyUserId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.memo) == false && undefined !== pobjCurrEduClsEN.memo && tzDataType.isString(pobjCurrEduClsEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjCurrEduClsEN.memo)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjCurrEduClsEN.courseId) == false && pobjCurrEduClsEN.courseId != '[nuull]' && GetStrLen(pobjCurrEduClsEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idEduWay) == false && pobjCurrEduClsEN.idEduWay != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idEduWay) !=  4)
{
 throw ("(errid:Watl000415)字段[教学方式流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idClassRoomType) == false && pobjCurrEduClsEN.idClassRoomType != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idClassRoomType) !=  4)
{
 throw ("(errid:Watl000415)字段[教室类型流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.weekStatusId) == false && pobjCurrEduClsEN.weekStatusId != '[nuull]' && GetStrLen(pobjCurrEduClsEN.weekStatusId) !=  2)
{
 throw ("(errid:Watl000415)字段[周状态编号(单,双,全周)]作为外键字段,长度应该为2(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idUniZone) == false && pobjCurrEduClsEN.idUniZone != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idUniZone) !=  4)
{
 throw ("(errid:Watl000415)字段[校区流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idGradeBase) == false && pobjCurrEduClsEN.idGradeBase != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idGradeBase) !=  4)
{
 throw ("(errid:Watl000415)字段[年级流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CurrEduCls_CheckProperty4Update(pobjCurrEduClsEN: clsCurrEduClsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCurrEduClsEN.idCurrEduCls) == false && GetStrLen(pobjCurrEduClsEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idCurrEduCls)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.currEduClsId) == false && GetStrLen(pobjCurrEduClsEN.currEduClsId) > 15)
{
 throw new Error("(errid:Watl000416)字段[教学班Id(currEduClsId)]的长度不能超过15(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.currEduClsId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsName) == false && GetStrLen(pobjCurrEduClsEN.eduClsName) > 100)
{
 throw new Error("(errid:Watl000416)字段[教学班名(eduClsName)]的长度不能超过100(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.eduClsName)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsTypeId) == false && GetStrLen(pobjCurrEduClsEN.eduClsTypeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[教学班类型Id(eduClsTypeId)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.eduClsTypeId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.courseId) == false && GetStrLen(pobjCurrEduClsEN.courseId) > 8)
{
 throw new Error("(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.courseId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.teachingSolutionId) == false && GetStrLen(pobjCurrEduClsEN.teachingSolutionId) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学方案Id(teachingSolutionId)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.teachingSolutionId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzCollege) == false && GetStrLen(pobjCurrEduClsEN.idXzCollege) > 4)
{
 throw new Error("(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idXzCollege)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzMajor) == false && GetStrLen(pobjCurrEduClsEN.idXzMajor) > 8)
{
 throw new Error("(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idXzMajor)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idEduWay) == false && GetStrLen(pobjCurrEduClsEN.idEduWay) > 4)
{
 throw new Error("(errid:Watl000416)字段[教学方式流水号(idEduWay)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idEduWay)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idClassRoomType) == false && GetStrLen(pobjCurrEduClsEN.idClassRoomType) > 4)
{
 throw new Error("(errid:Watl000416)字段[教室类型流水号(idClassRoomType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idClassRoomType)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.weekStatusId) == false && GetStrLen(pobjCurrEduClsEN.weekStatusId) > 2)
{
 throw new Error("(errid:Watl000416)字段[周状态编号(单,双,全周)(weekStatusId)]的长度不能超过2(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.weekStatusId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.customerWeek) == false && GetStrLen(pobjCurrEduClsEN.customerWeek) > 50)
{
 throw new Error("(errid:Watl000416)字段[自定义上课周(customerWeek)]的长度不能超过50(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.customerWeek)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idUniZone) == false && GetStrLen(pobjCurrEduClsEN.idUniZone) > 4)
{
 throw new Error("(errid:Watl000416)字段[校区流水号(idUniZone)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idUniZone)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idGradeBase) == false && GetStrLen(pobjCurrEduClsEN.idGradeBase) > 4)
{
 throw new Error("(errid:Watl000416)字段[年级流水号(idGradeBase)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idGradeBase)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolYear) == false && GetStrLen(pobjCurrEduClsEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.schoolYear)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolTerm) == false && GetStrLen(pobjCurrEduClsEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.schoolTerm)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idCourseType) == false && GetStrLen(pobjCurrEduClsEN.idCourseType) > 4)
{
 throw new Error("(errid:Watl000416)字段[课程类型流水号(idCourseType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idCourseType)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idScoreType) == false && GetStrLen(pobjCurrEduClsEN.idScoreType) > 4)
{
 throw new Error("(errid:Watl000416)字段[成绩类型流水号(idScoreType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idScoreType)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.getScoreWayId) == false && GetStrLen(pobjCurrEduClsEN.getScoreWayId) > 2)
{
 throw new Error("(errid:Watl000416)字段[获得成绩方式Id(getScoreWayId)]的长度不能超过2(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.getScoreWayId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idExamType) == false && GetStrLen(pobjCurrEduClsEN.idExamType) > 4)
{
 throw new Error("(errid:Watl000416)字段[考试方式流水号(idExamType)]的长度不能超过4(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.idExamType)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.examTime) == false && GetStrLen(pobjCurrEduClsEN.examTime) > 8)
{
 throw new Error("(errid:Watl000416)字段[考试时间(examTime)]的长度不能超过8(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.examTime)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.userType) == false && GetStrLen(pobjCurrEduClsEN.userType) > 50)
{
 throw new Error("(errid:Watl000416)字段[用户类型(userType)]的长度不能超过50(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.userType)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyDate) == false && GetStrLen(pobjCurrEduClsEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.modifyDate)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyUserId) == false && GetStrLen(pobjCurrEduClsEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.modifyUserId)(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.memo) == false && GetStrLen(pobjCurrEduClsEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 当前教学班(CurrEduCls))!值:$(pobjCurrEduClsEN.memo)(clsCurrEduClsBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCurrEduClsEN.idCurrEduCls) == false && undefined !== pobjCurrEduClsEN.idCurrEduCls && tzDataType.isString(pobjCurrEduClsEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjCurrEduClsEN.idCurrEduCls)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.currEduClsId) == false && undefined !== pobjCurrEduClsEN.currEduClsId && tzDataType.isString(pobjCurrEduClsEN.currEduClsId) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班Id(currEduClsId)]的值:[$(pobjCurrEduClsEN.currEduClsId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsName) == false && undefined !== pobjCurrEduClsEN.eduClsName && tzDataType.isString(pobjCurrEduClsEN.eduClsName) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班名(eduClsName)]的值:[$(pobjCurrEduClsEN.eduClsName)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.eduClsTypeId) == false && undefined !== pobjCurrEduClsEN.eduClsTypeId && tzDataType.isString(pobjCurrEduClsEN.eduClsTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班类型Id(eduClsTypeId)]的值:[$(pobjCurrEduClsEN.eduClsTypeId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.courseId) == false && undefined !== pobjCurrEduClsEN.courseId && tzDataType.isString(pobjCurrEduClsEN.courseId) === false)
{
 throw new Error("(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjCurrEduClsEN.courseId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.teachingSolutionId) == false && undefined !== pobjCurrEduClsEN.teachingSolutionId && tzDataType.isString(pobjCurrEduClsEN.teachingSolutionId) === false)
{
 throw new Error("(errid:Watl000417)字段[教学方案Id(teachingSolutionId)]的值:[$(pobjCurrEduClsEN.teachingSolutionId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzCollege) == false && undefined !== pobjCurrEduClsEN.idXzCollege && tzDataType.isString(pobjCurrEduClsEN.idXzCollege) === false)
{
 throw new Error("(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[$(pobjCurrEduClsEN.idXzCollege)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idXzMajor) == false && undefined !== pobjCurrEduClsEN.idXzMajor && tzDataType.isString(pobjCurrEduClsEN.idXzMajor) === false)
{
 throw new Error("(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjCurrEduClsEN.idXzMajor)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idEduWay) == false && undefined !== pobjCurrEduClsEN.idEduWay && tzDataType.isString(pobjCurrEduClsEN.idEduWay) === false)
{
 throw new Error("(errid:Watl000417)字段[教学方式流水号(idEduWay)]的值:[$(pobjCurrEduClsEN.idEduWay)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idClassRoomType) == false && undefined !== pobjCurrEduClsEN.idClassRoomType && tzDataType.isString(pobjCurrEduClsEN.idClassRoomType) === false)
{
 throw new Error("(errid:Watl000417)字段[教室类型流水号(idClassRoomType)]的值:[$(pobjCurrEduClsEN.idClassRoomType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.totalLessonQty && undefined !== pobjCurrEduClsEN.totalLessonQty && tzDataType.isNumber(pobjCurrEduClsEN.totalLessonQty) === false)
{
 throw new Error("(errid:Watl000417)字段[总课时数(totalLessonQty)]的值:[$(pobjCurrEduClsEN.totalLessonQty)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.maxStuQty && undefined !== pobjCurrEduClsEN.maxStuQty && tzDataType.isNumber(pobjCurrEduClsEN.maxStuQty) === false)
{
 throw new Error("(errid:Watl000417)字段[最大学生数(maxStuQty)]的值:[$(pobjCurrEduClsEN.maxStuQty)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.weekQty && undefined !== pobjCurrEduClsEN.weekQty && tzDataType.isNumber(pobjCurrEduClsEN.weekQty) === false)
{
 throw new Error("(errid:Watl000417)字段[总周数(weekQty)]的值:[$(pobjCurrEduClsEN.weekQty)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.scheUnitPW && undefined !== pobjCurrEduClsEN.scheUnitPW && tzDataType.isNumber(pobjCurrEduClsEN.scheUnitPW) === false)
{
 throw new Error("(errid:Watl000417)字段[周排课次数(scheUnitPW)]的值:[$(pobjCurrEduClsEN.scheUnitPW)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.weekStatusId) == false && undefined !== pobjCurrEduClsEN.weekStatusId && tzDataType.isString(pobjCurrEduClsEN.weekStatusId) === false)
{
 throw new Error("(errid:Watl000417)字段[周状态编号(单,双,全周)(weekStatusId)]的值:[$(pobjCurrEduClsEN.weekStatusId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.customerWeek) == false && undefined !== pobjCurrEduClsEN.customerWeek && tzDataType.isString(pobjCurrEduClsEN.customerWeek) === false)
{
 throw new Error("(errid:Watl000417)字段[自定义上课周(customerWeek)]的值:[$(pobjCurrEduClsEN.customerWeek)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.lessonQtyPerWeek && undefined !== pobjCurrEduClsEN.lessonQtyPerWeek && tzDataType.isNumber(pobjCurrEduClsEN.lessonQtyPerWeek) === false)
{
 throw new Error("(errid:Watl000417)字段[周课时数(lessonQtyPerWeek)]的值:[$(pobjCurrEduClsEN.lessonQtyPerWeek)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.mark && undefined !== pobjCurrEduClsEN.mark && tzDataType.isNumber(pobjCurrEduClsEN.mark) === false)
{
 throw new Error("(errid:Watl000417)字段[获得学分(mark)]的值:[$(pobjCurrEduClsEN.mark)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idUniZone) == false && undefined !== pobjCurrEduClsEN.idUniZone && tzDataType.isString(pobjCurrEduClsEN.idUniZone) === false)
{
 throw new Error("(errid:Watl000417)字段[校区流水号(idUniZone)]的值:[$(pobjCurrEduClsEN.idUniZone)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idGradeBase) == false && undefined !== pobjCurrEduClsEN.idGradeBase && tzDataType.isString(pobjCurrEduClsEN.idGradeBase) === false)
{
 throw new Error("(errid:Watl000417)字段[年级流水号(idGradeBase)]的值:[$(pobjCurrEduClsEN.idGradeBase)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.isEffective && undefined !== pobjCurrEduClsEN.isEffective && tzDataType.isBoolean(pobjCurrEduClsEN.isEffective) === false)
{
 throw new Error("(errid:Watl000417)字段[是否有效(isEffective)]的值:[$(pobjCurrEduClsEN.isEffective)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.isForPaperReading && undefined !== pobjCurrEduClsEN.isForPaperReading && tzDataType.isBoolean(pobjCurrEduClsEN.isForPaperReading) === false)
{
 throw new Error("(errid:Watl000417)字段[是否参与论文阅读(isForPaperReading)]的值:[$(pobjCurrEduClsEN.isForPaperReading)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolYear) == false && undefined !== pobjCurrEduClsEN.schoolYear && tzDataType.isString(pobjCurrEduClsEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjCurrEduClsEN.schoolYear)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.schoolTerm) == false && undefined !== pobjCurrEduClsEN.schoolTerm && tzDataType.isString(pobjCurrEduClsEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjCurrEduClsEN.schoolTerm)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idCourseType) == false && undefined !== pobjCurrEduClsEN.idCourseType && tzDataType.isString(pobjCurrEduClsEN.idCourseType) === false)
{
 throw new Error("(errid:Watl000417)字段[课程类型流水号(idCourseType)]的值:[$(pobjCurrEduClsEN.idCourseType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.isDegree && undefined !== pobjCurrEduClsEN.isDegree && tzDataType.isBoolean(pobjCurrEduClsEN.isDegree) === false)
{
 throw new Error("(errid:Watl000417)字段[是否学位课(isDegree)]的值:[$(pobjCurrEduClsEN.isDegree)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idScoreType) == false && undefined !== pobjCurrEduClsEN.idScoreType && tzDataType.isString(pobjCurrEduClsEN.idScoreType) === false)
{
 throw new Error("(errid:Watl000417)字段[成绩类型流水号(idScoreType)]的值:[$(pobjCurrEduClsEN.idScoreType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.getScoreWayId) == false && undefined !== pobjCurrEduClsEN.getScoreWayId && tzDataType.isString(pobjCurrEduClsEN.getScoreWayId) === false)
{
 throw new Error("(errid:Watl000417)字段[获得成绩方式Id(getScoreWayId)]的值:[$(pobjCurrEduClsEN.getScoreWayId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.isProportionalCtrl && undefined !== pobjCurrEduClsEN.isProportionalCtrl && tzDataType.isBoolean(pobjCurrEduClsEN.isProportionalCtrl) === false)
{
 throw new Error("(errid:Watl000417)字段[是否比例控制(isProportionalCtrl)]的值:[$(pobjCurrEduClsEN.isProportionalCtrl)], 非法,应该为布尔型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idExamType) == false && undefined !== pobjCurrEduClsEN.idExamType && tzDataType.isString(pobjCurrEduClsEN.idExamType) === false)
{
 throw new Error("(errid:Watl000417)字段[考试方式流水号(idExamType)]的值:[$(pobjCurrEduClsEN.idExamType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.examTime) == false && undefined !== pobjCurrEduClsEN.examTime && tzDataType.isString(pobjCurrEduClsEN.examTime) === false)
{
 throw new Error("(errid:Watl000417)字段[考试时间(examTime)]的值:[$(pobjCurrEduClsEN.examTime)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsEN.beginWeek && undefined !== pobjCurrEduClsEN.beginWeek && tzDataType.isNumber(pobjCurrEduClsEN.beginWeek) === false)
{
 throw new Error("(errid:Watl000417)字段[开始周(beginWeek)]的值:[$(pobjCurrEduClsEN.beginWeek)], 非法,应该为数值型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.userType) == false && undefined !== pobjCurrEduClsEN.userType && tzDataType.isString(pobjCurrEduClsEN.userType) === false)
{
 throw new Error("(errid:Watl000417)字段[用户类型(userType)]的值:[$(pobjCurrEduClsEN.userType)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyDate) == false && undefined !== pobjCurrEduClsEN.modifyDate && tzDataType.isString(pobjCurrEduClsEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjCurrEduClsEN.modifyDate)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.modifyUserId) == false && undefined !== pobjCurrEduClsEN.modifyUserId && tzDataType.isString(pobjCurrEduClsEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjCurrEduClsEN.modifyUserId)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.memo) == false && undefined !== pobjCurrEduClsEN.memo && tzDataType.isString(pobjCurrEduClsEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjCurrEduClsEN.memo)], 非法,应该为字符型(In 当前教学班(CurrEduCls))!(clsCurrEduClsBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjCurrEduClsEN.courseId) == false && pobjCurrEduClsEN.courseId != '[nuull]' && GetStrLen(pobjCurrEduClsEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idEduWay) == false && pobjCurrEduClsEN.idEduWay != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idEduWay) !=  4)
{
 throw ("(errid:Watl000418)字段[教学方式流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idClassRoomType) == false && pobjCurrEduClsEN.idClassRoomType != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idClassRoomType) !=  4)
{
 throw ("(errid:Watl000418)字段[教室类型流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.weekStatusId) == false && pobjCurrEduClsEN.weekStatusId != '[nuull]' && GetStrLen(pobjCurrEduClsEN.weekStatusId) !=  2)
{
 throw ("(errid:Watl000418)字段[周状态编号(单,双,全周)]作为外键字段,长度应该为2(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idUniZone) == false && pobjCurrEduClsEN.idUniZone != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idUniZone) !=  4)
{
 throw ("(errid:Watl000418)字段[校区流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsEN.idGradeBase) == false && pobjCurrEduClsEN.idGradeBase != '[nuull]' && GetStrLen(pobjCurrEduClsEN.idGradeBase) !=  4)
{
 throw ("(errid:Watl000418)字段[年级流水号]作为外键字段,长度应该为4(In 当前教学班)!(clsCurrEduClsBL:CheckPropertyNew)");
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
export  function CurrEduCls_GetJSONStrByObj (pobjCurrEduClsEN: clsCurrEduClsEN): string
{
pobjCurrEduClsEN.sfUpdFldSetStr = pobjCurrEduClsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjCurrEduClsEN);
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
export  function CurrEduCls_GetObjLstByJSONStr (strJSON: string): Array<clsCurrEduClsEN>
{
let arrCurrEduClsObjLst = new Array<clsCurrEduClsEN>();
if (strJSON === "")
{
return arrCurrEduClsObjLst;
}
try
{
arrCurrEduClsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrCurrEduClsObjLst;
}
return arrCurrEduClsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCurrEduClsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function CurrEduCls_GetObjLstByJSONObjLst (arrCurrEduClsObjLstS: Array<clsCurrEduClsEN>): Array<clsCurrEduClsEN>
{
const arrCurrEduClsObjLst = new Array<clsCurrEduClsEN>();
for (const objInFor of arrCurrEduClsObjLstS) {
const obj1 = CurrEduCls_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrCurrEduClsObjLst.push(obj1);
}
return arrCurrEduClsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CurrEduCls_GetObjByJSONStr (strJSON: string): clsCurrEduClsEN
{
let pobjCurrEduClsEN = new clsCurrEduClsEN();
if (strJSON === "")
{
return pobjCurrEduClsEN;
}
try
{
pobjCurrEduClsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjCurrEduClsEN;
}
return pobjCurrEduClsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function CurrEduCls_GetCombineCondition(objCurrEduClsCond: clsCurrEduClsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdCurrEduCls, objCurrEduClsCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_CurrEduClsId) == true)
{
const strComparisonOpCurrEduClsId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_CurrEduClsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_CurrEduClsId, objCurrEduClsCond.currEduClsId, strComparisonOpCurrEduClsId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_EduClsName) == true)
{
const strComparisonOpEduClsName:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_EduClsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_EduClsName, objCurrEduClsCond.eduClsName, strComparisonOpEduClsName);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_EduClsTypeId) == true)
{
const strComparisonOpEduClsTypeId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_EduClsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_EduClsTypeId, objCurrEduClsCond.eduClsTypeId, strComparisonOpEduClsTypeId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_CourseId, objCurrEduClsCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_TeachingSolutionId) == true)
{
const strComparisonOpTeachingSolutionId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_TeachingSolutionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_TeachingSolutionId, objCurrEduClsCond.teachingSolutionId, strComparisonOpTeachingSolutionId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdXzCollege, objCurrEduClsCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdXzMajor, objCurrEduClsCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdEduWay) == true)
{
const strComparisonOpIdEduWay:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdEduWay];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdEduWay, objCurrEduClsCond.idEduWay, strComparisonOpIdEduWay);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdClassRoomType) == true)
{
const strComparisonOpIdClassRoomType:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdClassRoomType];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdClassRoomType, objCurrEduClsCond.idClassRoomType, strComparisonOpIdClassRoomType);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_TotalLessonQty) == true)
{
const strComparisonOpTotalLessonQty:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_TotalLessonQty];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsEN.con_TotalLessonQty, objCurrEduClsCond.totalLessonQty, strComparisonOpTotalLessonQty);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_MaxStuQty) == true)
{
const strComparisonOpMaxStuQty:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_MaxStuQty];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsEN.con_MaxStuQty, objCurrEduClsCond.maxStuQty, strComparisonOpMaxStuQty);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_WeekQty) == true)
{
const strComparisonOpWeekQty:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_WeekQty];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsEN.con_WeekQty, objCurrEduClsCond.weekQty, strComparisonOpWeekQty);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_WeekStatusId) == true)
{
const strComparisonOpWeekStatusId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_WeekStatusId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_WeekStatusId, objCurrEduClsCond.weekStatusId, strComparisonOpWeekStatusId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_CustomerWeek) == true)
{
const strComparisonOpCustomerWeek:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_CustomerWeek];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_CustomerWeek, objCurrEduClsCond.customerWeek, strComparisonOpCustomerWeek);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_Mark) == true)
{
const strComparisonOpMark:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_Mark];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsEN.con_Mark, objCurrEduClsCond.mark, strComparisonOpMark);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdUniZone, objCurrEduClsCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdGradeBase, objCurrEduClsCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IsEffective) == true)
{
if (objCurrEduClsCond.isEffective == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsEN.con_IsEffective);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsEN.con_IsEffective);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IsForPaperReading) == true)
{
if (objCurrEduClsCond.isForPaperReading == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsEN.con_IsForPaperReading);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsEN.con_IsForPaperReading);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_SchoolYear, objCurrEduClsCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_SchoolTerm, objCurrEduClsCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdCourseType) == true)
{
const strComparisonOpIdCourseType:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdCourseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdCourseType, objCurrEduClsCond.idCourseType, strComparisonOpIdCourseType);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IsDegree) == true)
{
if (objCurrEduClsCond.isDegree == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsEN.con_IsDegree);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsEN.con_IsDegree);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdScoreType) == true)
{
const strComparisonOpIdScoreType:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdScoreType];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdScoreType, objCurrEduClsCond.idScoreType, strComparisonOpIdScoreType);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_GetScoreWayId) == true)
{
const strComparisonOpGetScoreWayId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_GetScoreWayId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_GetScoreWayId, objCurrEduClsCond.getScoreWayId, strComparisonOpGetScoreWayId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IsProportionalCtrl) == true)
{
if (objCurrEduClsCond.isProportionalCtrl == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsEN.con_IsProportionalCtrl);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsEN.con_IsProportionalCtrl);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_IdExamType) == true)
{
const strComparisonOpIdExamType:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_IdExamType];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_IdExamType, objCurrEduClsCond.idExamType, strComparisonOpIdExamType);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_ExamTime) == true)
{
const strComparisonOpExamTime:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_ExamTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_ExamTime, objCurrEduClsCond.examTime, strComparisonOpExamTime);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_UserType) == true)
{
const strComparisonOpUserType:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_UserType];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_UserType, objCurrEduClsCond.userType, strComparisonOpUserType);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_ModifyDate, objCurrEduClsCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_ModifyUserId, objCurrEduClsCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsCond.dicFldComparisonOp, clsCurrEduClsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objCurrEduClsCond.dicFldComparisonOp[clsCurrEduClsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsEN.con_Memo, objCurrEduClsCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--CurrEduCls(当前教学班),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strEduClsName: 教学班名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function CurrEduCls_GetUniCondStr(objCurrEduClsEN: clsCurrEduClsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and EduClsName = '{0}'", objCurrEduClsEN.eduClsName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--CurrEduCls(当前教学班),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strEduClsName: 教学班名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function CurrEduCls_GetUniCondStr4Update(objCurrEduClsEN: clsCurrEduClsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdCurrEduCls <> '{0}'", objCurrEduClsEN.idCurrEduCls);
 strWhereCond +=  Format(" and EduClsName = '{0}'", objCurrEduClsEN.eduClsName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCurrEduClsENS:源对象
 * @param objCurrEduClsENT:目标对象
*/
export  function CurrEduCls_CopyObjTo(objCurrEduClsENS: clsCurrEduClsEN , objCurrEduClsENT: clsCurrEduClsEN ): void 
{
objCurrEduClsENT.idCurrEduCls = objCurrEduClsENS.idCurrEduCls; //教学班流水号
objCurrEduClsENT.currEduClsId = objCurrEduClsENS.currEduClsId; //教学班Id
objCurrEduClsENT.eduClsName = objCurrEduClsENS.eduClsName; //教学班名
objCurrEduClsENT.eduClsTypeId = objCurrEduClsENS.eduClsTypeId; //教学班类型Id
objCurrEduClsENT.courseId = objCurrEduClsENS.courseId; //课程Id
objCurrEduClsENT.teachingSolutionId = objCurrEduClsENS.teachingSolutionId; //教学方案Id
objCurrEduClsENT.idXzCollege = objCurrEduClsENS.idXzCollege; //学院流水号
objCurrEduClsENT.idXzMajor = objCurrEduClsENS.idXzMajor; //专业流水号
objCurrEduClsENT.idEduWay = objCurrEduClsENS.idEduWay; //教学方式流水号
objCurrEduClsENT.idClassRoomType = objCurrEduClsENS.idClassRoomType; //教室类型流水号
objCurrEduClsENT.totalLessonQty = objCurrEduClsENS.totalLessonQty; //总课时数
objCurrEduClsENT.maxStuQty = objCurrEduClsENS.maxStuQty; //最大学生数
objCurrEduClsENT.weekQty = objCurrEduClsENS.weekQty; //总周数
objCurrEduClsENT.scheUnitPW = objCurrEduClsENS.scheUnitPW; //周排课次数
objCurrEduClsENT.weekStatusId = objCurrEduClsENS.weekStatusId; //周状态编号(单,双,全周)
objCurrEduClsENT.customerWeek = objCurrEduClsENS.customerWeek; //自定义上课周
objCurrEduClsENT.lessonQtyPerWeek = objCurrEduClsENS.lessonQtyPerWeek; //周课时数
objCurrEduClsENT.mark = objCurrEduClsENS.mark; //获得学分
objCurrEduClsENT.idUniZone = objCurrEduClsENS.idUniZone; //校区流水号
objCurrEduClsENT.idGradeBase = objCurrEduClsENS.idGradeBase; //年级流水号
objCurrEduClsENT.isEffective = objCurrEduClsENS.isEffective; //是否有效
objCurrEduClsENT.isForPaperReading = objCurrEduClsENS.isForPaperReading; //是否参与论文阅读
objCurrEduClsENT.schoolYear = objCurrEduClsENS.schoolYear; //学年
objCurrEduClsENT.schoolTerm = objCurrEduClsENS.schoolTerm; //学期
objCurrEduClsENT.idCourseType = objCurrEduClsENS.idCourseType; //课程类型流水号
objCurrEduClsENT.isDegree = objCurrEduClsENS.isDegree; //是否学位课
objCurrEduClsENT.idScoreType = objCurrEduClsENS.idScoreType; //成绩类型流水号
objCurrEduClsENT.getScoreWayId = objCurrEduClsENS.getScoreWayId; //获得成绩方式Id
objCurrEduClsENT.isProportionalCtrl = objCurrEduClsENS.isProportionalCtrl; //是否比例控制
objCurrEduClsENT.idExamType = objCurrEduClsENS.idExamType; //考试方式流水号
objCurrEduClsENT.examTime = objCurrEduClsENS.examTime; //考试时间
objCurrEduClsENT.beginWeek = objCurrEduClsENS.beginWeek; //开始周
objCurrEduClsENT.userType = objCurrEduClsENS.userType; //用户类型
objCurrEduClsENT.modifyDate = objCurrEduClsENS.modifyDate; //修改日期
objCurrEduClsENT.modifyUserId = objCurrEduClsENS.modifyUserId; //修改人
objCurrEduClsENT.memo = objCurrEduClsENS.memo; //备注
objCurrEduClsENT.sfUpdFldSetStr = objCurrEduClsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCurrEduClsENS:源对象
 * @param objCurrEduClsENT:目标对象
*/
export  function CurrEduCls_GetObjFromJsonObj(objCurrEduClsENS: clsCurrEduClsEN): clsCurrEduClsEN 
{
 const objCurrEduClsENT: clsCurrEduClsEN = new clsCurrEduClsEN();
ObjectAssign(objCurrEduClsENT, objCurrEduClsENS);
 return objCurrEduClsENT;
}