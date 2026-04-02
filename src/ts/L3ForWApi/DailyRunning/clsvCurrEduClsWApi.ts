
 /**
 * 类名:clsvCurrEduClsWApi
 * 表名:vCurrEduCls(01120126)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 17:00:29
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
 * v当前教学班(vCurrEduCls)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvCurrEduClsEN } from "@/ts/L0Entity/DailyRunning/clsvCurrEduClsEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vCurrEduCls_Controller = "vCurrEduClsApi";
 export const vCurrEduCls_ConstructorName = "vCurrEduCls";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 对象
 **/
export  async function vCurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls: string): Promise<clsvCurrEduClsEN|null>  
{
const strThisFuncName = "GetObjByIdCurrEduClsAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduClsWApi.GetObjByIdCurrEduClsAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduClsWApi.GetObjByIdCurrEduClsAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdCurrEduCls";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const objvCurrEduCls = vCurrEduCls_GetObjFromJsonObj(returnObj);
return objvCurrEduCls;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdCurrEduClsCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdCurrEduClslocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByIdCurrEduClsCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vCurrEduCls_SortFunDefa(a:clsvCurrEduClsEN , b:clsvCurrEduClsEN): number 
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
export  function vCurrEduCls_SortFunDefa2Fld(a:clsvCurrEduClsEN , b:clsvCurrEduClsEN): number 
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
export  function vCurrEduCls_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvCurrEduClsEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvCurrEduClsEN.con_CurrEduClsId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.currEduClsId.localeCompare(b.currEduClsId);
}
case clsvCurrEduClsEN.con_EduClsName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsvCurrEduClsEN.con_EduClsTypeId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
}
case clsvCurrEduClsEN.con_EduClsTypeName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.eduClsTypeName == null) return -1;
if (b.eduClsTypeName == null) return 1;
return a.eduClsTypeName.localeCompare(b.eduClsTypeName);
}
case clsvCurrEduClsEN.con_CourseId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvCurrEduClsEN.con_CourseCode:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvCurrEduClsEN.con_CourseDescription:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.courseDescription == null) return -1;
if (b.courseDescription == null) return 1;
return a.courseDescription.localeCompare(b.courseDescription);
}
case clsvCurrEduClsEN.con_CourseName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvCurrEduClsEN.con_ViewCount:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.viewCount-b.viewCount;
}
case clsvCurrEduClsEN.con_ExampleImgPath:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.exampleImgPath == null) return -1;
if (b.exampleImgPath == null) return 1;
return a.exampleImgPath.localeCompare(b.exampleImgPath);
}
case clsvCurrEduClsEN.con_TeachingSolutionId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
}
case clsvCurrEduClsEN.con_TeachingSolutionName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.teachingSolutionName == null) return -1;
if (b.teachingSolutionName == null) return 1;
return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
}
case clsvCurrEduClsEN.con_IdTeacher:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.idTeacher == null) return -1;
if (b.idTeacher == null) return 1;
return a.idTeacher.localeCompare(b.idTeacher);
}
case clsvCurrEduClsEN.con_TeacherId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.teacherId == null) return -1;
if (b.teacherId == null) return 1;
return a.teacherId.localeCompare(b.teacherId);
}
case clsvCurrEduClsEN.con_TeacherName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.teacherName == null) return -1;
if (b.teacherName == null) return 1;
return a.teacherName.localeCompare(b.teacherName);
}
case clsvCurrEduClsEN.con_IdXzCollege:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvCurrEduClsEN.con_CollegeId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.collegeId == null) return -1;
if (b.collegeId == null) return 1;
return a.collegeId.localeCompare(b.collegeId);
}
case clsvCurrEduClsEN.con_CollegeName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvCurrEduClsEN.con_ClgEnglishName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.clgEnglishName == null) return -1;
if (b.clgEnglishName == null) return 1;
return a.clgEnglishName.localeCompare(b.clgEnglishName);
}
case clsvCurrEduClsEN.con_PhoneNumber:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsvCurrEduClsEN.con_IdXzMajor:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvCurrEduClsEN.con_MajorName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvCurrEduClsEN.con_IdEduWay:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.idEduWay.localeCompare(b.idEduWay);
}
case clsvCurrEduClsEN.con_IdClassRoomType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.idClassRoomType.localeCompare(b.idClassRoomType);
}
case clsvCurrEduClsEN.con_TotalLessonQty:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.totalLessonQty-b.totalLessonQty;
}
case clsvCurrEduClsEN.con_MaxStuQty:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.maxStuQty-b.maxStuQty;
}
case clsvCurrEduClsEN.con_WeekQty:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.weekQty-b.weekQty;
}
case clsvCurrEduClsEN.con_ScheUnitPW:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.scheUnitPW-b.scheUnitPW;
}
case clsvCurrEduClsEN.con_WeekStatusId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.weekStatusId == null) return -1;
if (b.weekStatusId == null) return 1;
return a.weekStatusId.localeCompare(b.weekStatusId);
}
case clsvCurrEduClsEN.con_CustomerWeek:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.customerWeek == null) return -1;
if (b.customerWeek == null) return 1;
return a.customerWeek.localeCompare(b.customerWeek);
}
case clsvCurrEduClsEN.con_LessonQtyPerWeek:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.lessonQtyPerWeek-b.lessonQtyPerWeek;
}
case clsvCurrEduClsEN.con_Mark:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.mark-b.mark;
}
case clsvCurrEduClsEN.con_IdUniZone:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.idUniZone == null) return -1;
if (b.idUniZone == null) return 1;
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsvCurrEduClsEN.con_IdGradeBase:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsvCurrEduClsEN.con_GradeBaseId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.gradeBaseId == null) return -1;
if (b.gradeBaseId == null) return 1;
return a.gradeBaseId.localeCompare(b.gradeBaseId);
}
case clsvCurrEduClsEN.con_GradeBaseName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.gradeBaseName == null) return -1;
if (b.gradeBaseName == null) return 1;
return a.gradeBaseName.localeCompare(b.gradeBaseName);
}
case clsvCurrEduClsEN.con_GradeBaseNameA:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.gradeBaseNameA == null) return -1;
if (b.gradeBaseNameA == null) return 1;
return a.gradeBaseNameA.localeCompare(b.gradeBaseNameA);
}
case clsvCurrEduClsEN.con_IsEffective:
return (a: clsvCurrEduClsEN) => {
if (a.isEffective == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_IsForPaperReading:
return (a: clsvCurrEduClsEN) => {
if (a.isForPaperReading == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_SchoolYear:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsvCurrEduClsEN.con_SchoolTerm:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsvCurrEduClsEN.con_IdCourseType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.idCourseType.localeCompare(b.idCourseType);
}
case clsvCurrEduClsEN.con_CourseTypeId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.courseTypeId == null) return -1;
if (b.courseTypeId == null) return 1;
return a.courseTypeId.localeCompare(b.courseTypeId);
}
case clsvCurrEduClsEN.con_CourseTypeName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.courseTypeName == null) return -1;
if (b.courseTypeName == null) return 1;
return a.courseTypeName.localeCompare(b.courseTypeName);
}
case clsvCurrEduClsEN.con_IsDegree:
return (a: clsvCurrEduClsEN) => {
if (a.isDegree == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_IdScoreType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.idScoreType == null) return -1;
if (b.idScoreType == null) return 1;
return a.idScoreType.localeCompare(b.idScoreType);
}
case clsvCurrEduClsEN.con_GetScoreWayId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.getScoreWayId == null) return -1;
if (b.getScoreWayId == null) return 1;
return a.getScoreWayId.localeCompare(b.getScoreWayId);
}
case clsvCurrEduClsEN.con_IsProportionalCtrl:
return (a: clsvCurrEduClsEN) => {
if (a.isProportionalCtrl == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_IdExamType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.idExamType == null) return -1;
if (b.idExamType == null) return 1;
return a.idExamType.localeCompare(b.idExamType);
}
case clsvCurrEduClsEN.con_BeginWeek:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.beginWeek-b.beginWeek;
}
case clsvCurrEduClsEN.con_UserType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.userType == null) return -1;
if (b.userType == null) return 1;
return a.userType.localeCompare(b.userType);
}
case clsvCurrEduClsEN.con_ModifyDate:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsvCurrEduClsEN.con_ModifyUserId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsvCurrEduClsEN.con_Memo:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvCurrEduClsEN.con_CurrStuNumValid:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.currStuNumValid-b.currStuNumValid;
}
case clsvCurrEduClsEN.con_CurrStuNum:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return a.currStuNum-b.currStuNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduCls]中不存在!(in ${ vCurrEduCls_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvCurrEduClsEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvCurrEduClsEN.con_CurrEduClsId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.currEduClsId.localeCompare(a.currEduClsId);
}
case clsvCurrEduClsEN.con_EduClsName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsvCurrEduClsEN.con_EduClsTypeId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.eduClsTypeId.localeCompare(a.eduClsTypeId);
}
case clsvCurrEduClsEN.con_EduClsTypeName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.eduClsTypeName == null) return -1;
if (a.eduClsTypeName == null) return 1;
return b.eduClsTypeName.localeCompare(a.eduClsTypeName);
}
case clsvCurrEduClsEN.con_CourseId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvCurrEduClsEN.con_CourseCode:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvCurrEduClsEN.con_CourseDescription:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.courseDescription == null) return -1;
if (a.courseDescription == null) return 1;
return b.courseDescription.localeCompare(a.courseDescription);
}
case clsvCurrEduClsEN.con_CourseName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvCurrEduClsEN.con_ViewCount:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.viewCount-a.viewCount;
}
case clsvCurrEduClsEN.con_ExampleImgPath:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.exampleImgPath == null) return -1;
if (a.exampleImgPath == null) return 1;
return b.exampleImgPath.localeCompare(a.exampleImgPath);
}
case clsvCurrEduClsEN.con_TeachingSolutionId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.teachingSolutionId.localeCompare(a.teachingSolutionId);
}
case clsvCurrEduClsEN.con_TeachingSolutionName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.teachingSolutionName == null) return -1;
if (a.teachingSolutionName == null) return 1;
return b.teachingSolutionName.localeCompare(a.teachingSolutionName);
}
case clsvCurrEduClsEN.con_IdTeacher:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.idTeacher == null) return -1;
if (a.idTeacher == null) return 1;
return b.idTeacher.localeCompare(a.idTeacher);
}
case clsvCurrEduClsEN.con_TeacherId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.teacherId == null) return -1;
if (a.teacherId == null) return 1;
return b.teacherId.localeCompare(a.teacherId);
}
case clsvCurrEduClsEN.con_TeacherName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.teacherName == null) return -1;
if (a.teacherName == null) return 1;
return b.teacherName.localeCompare(a.teacherName);
}
case clsvCurrEduClsEN.con_IdXzCollege:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvCurrEduClsEN.con_CollegeId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.collegeId == null) return -1;
if (a.collegeId == null) return 1;
return b.collegeId.localeCompare(a.collegeId);
}
case clsvCurrEduClsEN.con_CollegeName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvCurrEduClsEN.con_ClgEnglishName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.clgEnglishName == null) return -1;
if (a.clgEnglishName == null) return 1;
return b.clgEnglishName.localeCompare(a.clgEnglishName);
}
case clsvCurrEduClsEN.con_PhoneNumber:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsvCurrEduClsEN.con_IdXzMajor:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvCurrEduClsEN.con_MajorName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvCurrEduClsEN.con_IdEduWay:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.idEduWay.localeCompare(a.idEduWay);
}
case clsvCurrEduClsEN.con_IdClassRoomType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.idClassRoomType.localeCompare(a.idClassRoomType);
}
case clsvCurrEduClsEN.con_TotalLessonQty:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.totalLessonQty-a.totalLessonQty;
}
case clsvCurrEduClsEN.con_MaxStuQty:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.maxStuQty-a.maxStuQty;
}
case clsvCurrEduClsEN.con_WeekQty:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.weekQty-a.weekQty;
}
case clsvCurrEduClsEN.con_ScheUnitPW:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.scheUnitPW-a.scheUnitPW;
}
case clsvCurrEduClsEN.con_WeekStatusId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.weekStatusId == null) return -1;
if (a.weekStatusId == null) return 1;
return b.weekStatusId.localeCompare(a.weekStatusId);
}
case clsvCurrEduClsEN.con_CustomerWeek:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.customerWeek == null) return -1;
if (a.customerWeek == null) return 1;
return b.customerWeek.localeCompare(a.customerWeek);
}
case clsvCurrEduClsEN.con_LessonQtyPerWeek:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.lessonQtyPerWeek-a.lessonQtyPerWeek;
}
case clsvCurrEduClsEN.con_Mark:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.mark-a.mark;
}
case clsvCurrEduClsEN.con_IdUniZone:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.idUniZone == null) return -1;
if (a.idUniZone == null) return 1;
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsvCurrEduClsEN.con_IdGradeBase:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsvCurrEduClsEN.con_GradeBaseId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.gradeBaseId == null) return -1;
if (a.gradeBaseId == null) return 1;
return b.gradeBaseId.localeCompare(a.gradeBaseId);
}
case clsvCurrEduClsEN.con_GradeBaseName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.gradeBaseName == null) return -1;
if (a.gradeBaseName == null) return 1;
return b.gradeBaseName.localeCompare(a.gradeBaseName);
}
case clsvCurrEduClsEN.con_GradeBaseNameA:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.gradeBaseNameA == null) return -1;
if (a.gradeBaseNameA == null) return 1;
return b.gradeBaseNameA.localeCompare(a.gradeBaseNameA);
}
case clsvCurrEduClsEN.con_IsEffective:
return (b: clsvCurrEduClsEN) => {
if (b.isEffective == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_IsForPaperReading:
return (b: clsvCurrEduClsEN) => {
if (b.isForPaperReading == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_SchoolYear:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsvCurrEduClsEN.con_SchoolTerm:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsvCurrEduClsEN.con_IdCourseType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.idCourseType.localeCompare(a.idCourseType);
}
case clsvCurrEduClsEN.con_CourseTypeId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.courseTypeId == null) return -1;
if (a.courseTypeId == null) return 1;
return b.courseTypeId.localeCompare(a.courseTypeId);
}
case clsvCurrEduClsEN.con_CourseTypeName:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.courseTypeName == null) return -1;
if (a.courseTypeName == null) return 1;
return b.courseTypeName.localeCompare(a.courseTypeName);
}
case clsvCurrEduClsEN.con_IsDegree:
return (b: clsvCurrEduClsEN) => {
if (b.isDegree == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_IdScoreType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.idScoreType == null) return -1;
if (a.idScoreType == null) return 1;
return b.idScoreType.localeCompare(a.idScoreType);
}
case clsvCurrEduClsEN.con_GetScoreWayId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.getScoreWayId == null) return -1;
if (a.getScoreWayId == null) return 1;
return b.getScoreWayId.localeCompare(a.getScoreWayId);
}
case clsvCurrEduClsEN.con_IsProportionalCtrl:
return (b: clsvCurrEduClsEN) => {
if (b.isProportionalCtrl == true) return 1;
else return -1
}
case clsvCurrEduClsEN.con_IdExamType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.idExamType == null) return -1;
if (a.idExamType == null) return 1;
return b.idExamType.localeCompare(a.idExamType);
}
case clsvCurrEduClsEN.con_BeginWeek:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.beginWeek-a.beginWeek;
}
case clsvCurrEduClsEN.con_UserType:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.userType == null) return -1;
if (a.userType == null) return 1;
return b.userType.localeCompare(a.userType);
}
case clsvCurrEduClsEN.con_ModifyDate:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsvCurrEduClsEN.con_ModifyUserId:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsvCurrEduClsEN.con_Memo:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvCurrEduClsEN.con_CurrStuNumValid:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.currStuNumValid-a.currStuNumValid;
}
case clsvCurrEduClsEN.con_CurrStuNum:
return (a: clsvCurrEduClsEN, b: clsvCurrEduClsEN) => {
return b.currStuNum-a.currStuNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduCls]中不存在!(in ${ vCurrEduCls_ConstructorName}.${ strThisFuncName})`;
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
export  async function vCurrEduCls_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvCurrEduClsEN.con_IdCurrEduCls:
return (obj: clsvCurrEduClsEN) => {
return obj.idCurrEduCls === value;
}
case clsvCurrEduClsEN.con_CurrEduClsId:
return (obj: clsvCurrEduClsEN) => {
return obj.currEduClsId === value;
}
case clsvCurrEduClsEN.con_EduClsName:
return (obj: clsvCurrEduClsEN) => {
return obj.eduClsName === value;
}
case clsvCurrEduClsEN.con_EduClsTypeId:
return (obj: clsvCurrEduClsEN) => {
return obj.eduClsTypeId === value;
}
case clsvCurrEduClsEN.con_EduClsTypeName:
return (obj: clsvCurrEduClsEN) => {
return obj.eduClsTypeName === value;
}
case clsvCurrEduClsEN.con_CourseId:
return (obj: clsvCurrEduClsEN) => {
return obj.courseId === value;
}
case clsvCurrEduClsEN.con_CourseCode:
return (obj: clsvCurrEduClsEN) => {
return obj.courseCode === value;
}
case clsvCurrEduClsEN.con_CourseDescription:
return (obj: clsvCurrEduClsEN) => {
return obj.courseDescription === value;
}
case clsvCurrEduClsEN.con_CourseName:
return (obj: clsvCurrEduClsEN) => {
return obj.courseName === value;
}
case clsvCurrEduClsEN.con_ViewCount:
return (obj: clsvCurrEduClsEN) => {
return obj.viewCount === value;
}
case clsvCurrEduClsEN.con_ExampleImgPath:
return (obj: clsvCurrEduClsEN) => {
return obj.exampleImgPath === value;
}
case clsvCurrEduClsEN.con_TeachingSolutionId:
return (obj: clsvCurrEduClsEN) => {
return obj.teachingSolutionId === value;
}
case clsvCurrEduClsEN.con_TeachingSolutionName:
return (obj: clsvCurrEduClsEN) => {
return obj.teachingSolutionName === value;
}
case clsvCurrEduClsEN.con_IdTeacher:
return (obj: clsvCurrEduClsEN) => {
return obj.idTeacher === value;
}
case clsvCurrEduClsEN.con_TeacherId:
return (obj: clsvCurrEduClsEN) => {
return obj.teacherId === value;
}
case clsvCurrEduClsEN.con_TeacherName:
return (obj: clsvCurrEduClsEN) => {
return obj.teacherName === value;
}
case clsvCurrEduClsEN.con_IdXzCollege:
return (obj: clsvCurrEduClsEN) => {
return obj.idXzCollege === value;
}
case clsvCurrEduClsEN.con_CollegeId:
return (obj: clsvCurrEduClsEN) => {
return obj.collegeId === value;
}
case clsvCurrEduClsEN.con_CollegeName:
return (obj: clsvCurrEduClsEN) => {
return obj.collegeName === value;
}
case clsvCurrEduClsEN.con_ClgEnglishName:
return (obj: clsvCurrEduClsEN) => {
return obj.clgEnglishName === value;
}
case clsvCurrEduClsEN.con_PhoneNumber:
return (obj: clsvCurrEduClsEN) => {
return obj.phoneNumber === value;
}
case clsvCurrEduClsEN.con_IdXzMajor:
return (obj: clsvCurrEduClsEN) => {
return obj.idXzMajor === value;
}
case clsvCurrEduClsEN.con_MajorName:
return (obj: clsvCurrEduClsEN) => {
return obj.majorName === value;
}
case clsvCurrEduClsEN.con_IdEduWay:
return (obj: clsvCurrEduClsEN) => {
return obj.idEduWay === value;
}
case clsvCurrEduClsEN.con_IdClassRoomType:
return (obj: clsvCurrEduClsEN) => {
return obj.idClassRoomType === value;
}
case clsvCurrEduClsEN.con_TotalLessonQty:
return (obj: clsvCurrEduClsEN) => {
return obj.totalLessonQty === value;
}
case clsvCurrEduClsEN.con_MaxStuQty:
return (obj: clsvCurrEduClsEN) => {
return obj.maxStuQty === value;
}
case clsvCurrEduClsEN.con_WeekQty:
return (obj: clsvCurrEduClsEN) => {
return obj.weekQty === value;
}
case clsvCurrEduClsEN.con_ScheUnitPW:
return (obj: clsvCurrEduClsEN) => {
return obj.scheUnitPW === value;
}
case clsvCurrEduClsEN.con_WeekStatusId:
return (obj: clsvCurrEduClsEN) => {
return obj.weekStatusId === value;
}
case clsvCurrEduClsEN.con_CustomerWeek:
return (obj: clsvCurrEduClsEN) => {
return obj.customerWeek === value;
}
case clsvCurrEduClsEN.con_LessonQtyPerWeek:
return (obj: clsvCurrEduClsEN) => {
return obj.lessonQtyPerWeek === value;
}
case clsvCurrEduClsEN.con_Mark:
return (obj: clsvCurrEduClsEN) => {
return obj.mark === value;
}
case clsvCurrEduClsEN.con_IdUniZone:
return (obj: clsvCurrEduClsEN) => {
return obj.idUniZone === value;
}
case clsvCurrEduClsEN.con_IdGradeBase:
return (obj: clsvCurrEduClsEN) => {
return obj.idGradeBase === value;
}
case clsvCurrEduClsEN.con_GradeBaseId:
return (obj: clsvCurrEduClsEN) => {
return obj.gradeBaseId === value;
}
case clsvCurrEduClsEN.con_GradeBaseName:
return (obj: clsvCurrEduClsEN) => {
return obj.gradeBaseName === value;
}
case clsvCurrEduClsEN.con_GradeBaseNameA:
return (obj: clsvCurrEduClsEN) => {
return obj.gradeBaseNameA === value;
}
case clsvCurrEduClsEN.con_IsEffective:
return (obj: clsvCurrEduClsEN) => {
return obj.isEffective === value;
}
case clsvCurrEduClsEN.con_IsForPaperReading:
return (obj: clsvCurrEduClsEN) => {
return obj.isForPaperReading === value;
}
case clsvCurrEduClsEN.con_SchoolYear:
return (obj: clsvCurrEduClsEN) => {
return obj.schoolYear === value;
}
case clsvCurrEduClsEN.con_SchoolTerm:
return (obj: clsvCurrEduClsEN) => {
return obj.schoolTerm === value;
}
case clsvCurrEduClsEN.con_IdCourseType:
return (obj: clsvCurrEduClsEN) => {
return obj.idCourseType === value;
}
case clsvCurrEduClsEN.con_CourseTypeId:
return (obj: clsvCurrEduClsEN) => {
return obj.courseTypeId === value;
}
case clsvCurrEduClsEN.con_CourseTypeName:
return (obj: clsvCurrEduClsEN) => {
return obj.courseTypeName === value;
}
case clsvCurrEduClsEN.con_IsDegree:
return (obj: clsvCurrEduClsEN) => {
return obj.isDegree === value;
}
case clsvCurrEduClsEN.con_IdScoreType:
return (obj: clsvCurrEduClsEN) => {
return obj.idScoreType === value;
}
case clsvCurrEduClsEN.con_GetScoreWayId:
return (obj: clsvCurrEduClsEN) => {
return obj.getScoreWayId === value;
}
case clsvCurrEduClsEN.con_IsProportionalCtrl:
return (obj: clsvCurrEduClsEN) => {
return obj.isProportionalCtrl === value;
}
case clsvCurrEduClsEN.con_IdExamType:
return (obj: clsvCurrEduClsEN) => {
return obj.idExamType === value;
}
case clsvCurrEduClsEN.con_BeginWeek:
return (obj: clsvCurrEduClsEN) => {
return obj.beginWeek === value;
}
case clsvCurrEduClsEN.con_UserType:
return (obj: clsvCurrEduClsEN) => {
return obj.userType === value;
}
case clsvCurrEduClsEN.con_ModifyDate:
return (obj: clsvCurrEduClsEN) => {
return obj.modifyDate === value;
}
case clsvCurrEduClsEN.con_ModifyUserId:
return (obj: clsvCurrEduClsEN) => {
return obj.modifyUserId === value;
}
case clsvCurrEduClsEN.con_Memo:
return (obj: clsvCurrEduClsEN) => {
return obj.memo === value;
}
case clsvCurrEduClsEN.con_CurrStuNumValid:
return (obj: clsvCurrEduClsEN) => {
return obj.currStuNumValid === value;
}
case clsvCurrEduClsEN.con_CurrStuNum:
return (obj: clsvCurrEduClsEN) => {
return obj.currStuNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduCls]中不存在!(in ${ vCurrEduCls_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vCurrEduCls__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vCurrEduCls_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetFirstObjAsync(strWhereCond: string): Promise<clsvCurrEduClsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const objvCurrEduCls = vCurrEduCls_GetObjFromJsonObj(returnObj);
return objvCurrEduCls;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
 * @param arrIdCurrEduCls:关键字列表
 * @returns 对象列表
 **/
export  async function vCurrEduCls_GetObjLstByIdCurrEduClsLstAsync(arrIdCurrEduCls: Array<string>): Promise<Array<clsvCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstByIdCurrEduClsLstAsync";
const strAction = "GetObjLstByIdCurrEduClsLst";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdCurrEduClsLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vCurrEduCls_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvCurrEduClsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvCurrEduClsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvCurrEduClsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vCurrEduCls_IsExistAsync(strIdCurrEduCls: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vCurrEduCls_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_ConstructorName, strThisFuncName);
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
export  function vCurrEduCls_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vCurrEduCls_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await vCurrEduCls_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvCurrEduClsEN.con_IdCurrEduCls, clsvCurrEduClsEN.con_EduClsName, "v当前教学班");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduCls_GetJSONStrByObj (pobjvCurrEduClsEN: clsvCurrEduClsEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvCurrEduClsEN);
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
export  function vCurrEduCls_GetObjLstByJSONStr (strJSON: string): Array<clsvCurrEduClsEN>
{
let arrvCurrEduClsObjLst = new Array<clsvCurrEduClsEN>();
if (strJSON === "")
{
return arrvCurrEduClsObjLst;
}
try
{
arrvCurrEduClsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvCurrEduClsObjLst;
}
return arrvCurrEduClsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCurrEduClsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vCurrEduCls_GetObjLstByJSONObjLst (arrvCurrEduClsObjLstS: Array<clsvCurrEduClsEN>): Array<clsvCurrEduClsEN>
{
const arrvCurrEduClsObjLst = new Array<clsvCurrEduClsEN>();
for (const objInFor of arrvCurrEduClsObjLstS) {
const obj1 = vCurrEduCls_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvCurrEduClsObjLst.push(obj1);
}
return arrvCurrEduClsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduCls_GetObjByJSONStr (strJSON: string): clsvCurrEduClsEN
{
let pobjvCurrEduClsEN = new clsvCurrEduClsEN();
if (strJSON === "")
{
return pobjvCurrEduClsEN;
}
try
{
pobjvCurrEduClsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvCurrEduClsEN;
}
return pobjvCurrEduClsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vCurrEduCls_GetCombineCondition(objvCurrEduClsCond: clsvCurrEduClsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdCurrEduCls, objvCurrEduClsCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CurrEduClsId) == true)
{
const strComparisonOpCurrEduClsId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CurrEduClsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CurrEduClsId, objvCurrEduClsCond.currEduClsId, strComparisonOpCurrEduClsId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_EduClsName) == true)
{
const strComparisonOpEduClsName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_EduClsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_EduClsName, objvCurrEduClsCond.eduClsName, strComparisonOpEduClsName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_EduClsTypeId) == true)
{
const strComparisonOpEduClsTypeId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_EduClsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_EduClsTypeId, objvCurrEduClsCond.eduClsTypeId, strComparisonOpEduClsTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_EduClsTypeName) == true)
{
const strComparisonOpEduClsTypeName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_EduClsTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_EduClsTypeName, objvCurrEduClsCond.eduClsTypeName, strComparisonOpEduClsTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CourseId, objvCurrEduClsCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CourseCode, objvCurrEduClsCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CourseDescription) == true)
{
const strComparisonOpCourseDescription:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CourseDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CourseDescription, objvCurrEduClsCond.courseDescription, strComparisonOpCourseDescription);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CourseName, objvCurrEduClsCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_ViewCount) == true)
{
const strComparisonOpViewCount:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_ViewCount];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_ViewCount, objvCurrEduClsCond.viewCount, strComparisonOpViewCount);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_ExampleImgPath) == true)
{
const strComparisonOpExampleImgPath:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_ExampleImgPath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_ExampleImgPath, objvCurrEduClsCond.exampleImgPath, strComparisonOpExampleImgPath);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_TeachingSolutionId) == true)
{
const strComparisonOpTeachingSolutionId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_TeachingSolutionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_TeachingSolutionId, objvCurrEduClsCond.teachingSolutionId, strComparisonOpTeachingSolutionId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_TeachingSolutionName) == true)
{
const strComparisonOpTeachingSolutionName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_TeachingSolutionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_TeachingSolutionName, objvCurrEduClsCond.teachingSolutionName, strComparisonOpTeachingSolutionName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdTeacher, objvCurrEduClsCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_TeacherId) == true)
{
const strComparisonOpTeacherId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_TeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_TeacherId, objvCurrEduClsCond.teacherId, strComparisonOpTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_TeacherName) == true)
{
const strComparisonOpTeacherName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_TeacherName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_TeacherName, objvCurrEduClsCond.teacherName, strComparisonOpTeacherName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdXzCollege, objvCurrEduClsCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CollegeId, objvCurrEduClsCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CollegeName, objvCurrEduClsCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_ClgEnglishName) == true)
{
const strComparisonOpClgEnglishName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_ClgEnglishName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_ClgEnglishName, objvCurrEduClsCond.clgEnglishName, strComparisonOpClgEnglishName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_PhoneNumber, objvCurrEduClsCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdXzMajor, objvCurrEduClsCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_MajorName, objvCurrEduClsCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdEduWay) == true)
{
const strComparisonOpIdEduWay:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdEduWay];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdEduWay, objvCurrEduClsCond.idEduWay, strComparisonOpIdEduWay);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdClassRoomType) == true)
{
const strComparisonOpIdClassRoomType:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdClassRoomType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdClassRoomType, objvCurrEduClsCond.idClassRoomType, strComparisonOpIdClassRoomType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_TotalLessonQty) == true)
{
const strComparisonOpTotalLessonQty:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_TotalLessonQty];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_TotalLessonQty, objvCurrEduClsCond.totalLessonQty, strComparisonOpTotalLessonQty);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_MaxStuQty) == true)
{
const strComparisonOpMaxStuQty:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_MaxStuQty];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_MaxStuQty, objvCurrEduClsCond.maxStuQty, strComparisonOpMaxStuQty);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_WeekQty) == true)
{
const strComparisonOpWeekQty:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_WeekQty];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_WeekQty, objvCurrEduClsCond.weekQty, strComparisonOpWeekQty);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_WeekStatusId) == true)
{
const strComparisonOpWeekStatusId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_WeekStatusId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_WeekStatusId, objvCurrEduClsCond.weekStatusId, strComparisonOpWeekStatusId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CustomerWeek) == true)
{
const strComparisonOpCustomerWeek:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CustomerWeek];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CustomerWeek, objvCurrEduClsCond.customerWeek, strComparisonOpCustomerWeek);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_Mark) == true)
{
const strComparisonOpMark:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_Mark];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_Mark, objvCurrEduClsCond.mark, strComparisonOpMark);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdUniZone, objvCurrEduClsCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdGradeBase, objvCurrEduClsCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_GradeBaseId) == true)
{
const strComparisonOpGradeBaseId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_GradeBaseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_GradeBaseId, objvCurrEduClsCond.gradeBaseId, strComparisonOpGradeBaseId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_GradeBaseName) == true)
{
const strComparisonOpGradeBaseName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_GradeBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_GradeBaseName, objvCurrEduClsCond.gradeBaseName, strComparisonOpGradeBaseName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_GradeBaseNameA) == true)
{
const strComparisonOpGradeBaseNameA:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_GradeBaseNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_GradeBaseNameA, objvCurrEduClsCond.gradeBaseNameA, strComparisonOpGradeBaseNameA);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IsEffective) == true)
{
if (objvCurrEduClsCond.isEffective == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsEN.con_IsEffective);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsEN.con_IsEffective);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IsForPaperReading) == true)
{
if (objvCurrEduClsCond.isForPaperReading == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsEN.con_IsForPaperReading);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsEN.con_IsForPaperReading);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_SchoolYear, objvCurrEduClsCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_SchoolTerm, objvCurrEduClsCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdCourseType) == true)
{
const strComparisonOpIdCourseType:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdCourseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdCourseType, objvCurrEduClsCond.idCourseType, strComparisonOpIdCourseType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CourseTypeId) == true)
{
const strComparisonOpCourseTypeId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CourseTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CourseTypeId, objvCurrEduClsCond.courseTypeId, strComparisonOpCourseTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CourseTypeName) == true)
{
const strComparisonOpCourseTypeName:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CourseTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_CourseTypeName, objvCurrEduClsCond.courseTypeName, strComparisonOpCourseTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IsDegree) == true)
{
if (objvCurrEduClsCond.isDegree == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsEN.con_IsDegree);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsEN.con_IsDegree);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdScoreType) == true)
{
const strComparisonOpIdScoreType:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdScoreType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdScoreType, objvCurrEduClsCond.idScoreType, strComparisonOpIdScoreType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_GetScoreWayId) == true)
{
const strComparisonOpGetScoreWayId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_GetScoreWayId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_GetScoreWayId, objvCurrEduClsCond.getScoreWayId, strComparisonOpGetScoreWayId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IsProportionalCtrl) == true)
{
if (objvCurrEduClsCond.isProportionalCtrl == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsEN.con_IsProportionalCtrl);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsEN.con_IsProportionalCtrl);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_IdExamType) == true)
{
const strComparisonOpIdExamType:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_IdExamType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_IdExamType, objvCurrEduClsCond.idExamType, strComparisonOpIdExamType);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_UserType) == true)
{
const strComparisonOpUserType:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_UserType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_UserType, objvCurrEduClsCond.userType, strComparisonOpUserType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_ModifyDate, objvCurrEduClsCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_ModifyUserId, objvCurrEduClsCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsEN.con_Memo, objvCurrEduClsCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CurrStuNumValid) == true)
{
const strComparisonOpCurrStuNumValid:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CurrStuNumValid];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_CurrStuNumValid, objvCurrEduClsCond.currStuNumValid, strComparisonOpCurrStuNumValid);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsCond.dicFldComparisonOp, clsvCurrEduClsEN.con_CurrStuNum) == true)
{
const strComparisonOpCurrStuNum:string = objvCurrEduClsCond.dicFldComparisonOp[clsvCurrEduClsEN.con_CurrStuNum];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsEN.con_CurrStuNum, objvCurrEduClsCond.currStuNum, strComparisonOpCurrStuNum);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvCurrEduClsENS:源对象
 * @param objvCurrEduClsENT:目标对象
*/
export  function vCurrEduCls_CopyObjTo(objvCurrEduClsENS: clsvCurrEduClsEN , objvCurrEduClsENT: clsvCurrEduClsEN ): void 
{
objvCurrEduClsENT.idCurrEduCls = objvCurrEduClsENS.idCurrEduCls; //教学班流水号
objvCurrEduClsENT.currEduClsId = objvCurrEduClsENS.currEduClsId; //教学班Id
objvCurrEduClsENT.eduClsName = objvCurrEduClsENS.eduClsName; //教学班名
objvCurrEduClsENT.eduClsTypeId = objvCurrEduClsENS.eduClsTypeId; //教学班类型Id
objvCurrEduClsENT.eduClsTypeName = objvCurrEduClsENS.eduClsTypeName; //教学班类型名称
objvCurrEduClsENT.courseId = objvCurrEduClsENS.courseId; //课程Id
objvCurrEduClsENT.courseCode = objvCurrEduClsENS.courseCode; //课程代码
objvCurrEduClsENT.courseDescription = objvCurrEduClsENS.courseDescription; //课程描述
objvCurrEduClsENT.courseName = objvCurrEduClsENS.courseName; //课程名称
objvCurrEduClsENT.viewCount = objvCurrEduClsENS.viewCount; //浏览量
objvCurrEduClsENT.exampleImgPath = objvCurrEduClsENS.exampleImgPath; //示例图路径
objvCurrEduClsENT.teachingSolutionId = objvCurrEduClsENS.teachingSolutionId; //教学方案Id
objvCurrEduClsENT.teachingSolutionName = objvCurrEduClsENS.teachingSolutionName; //教学方案名称
objvCurrEduClsENT.idTeacher = objvCurrEduClsENS.idTeacher; //教师流水号
objvCurrEduClsENT.teacherId = objvCurrEduClsENS.teacherId; //教师工号
objvCurrEduClsENT.teacherName = objvCurrEduClsENS.teacherName; //教师姓名
objvCurrEduClsENT.idXzCollege = objvCurrEduClsENS.idXzCollege; //学院流水号
objvCurrEduClsENT.collegeId = objvCurrEduClsENS.collegeId; //学院ID
objvCurrEduClsENT.collegeName = objvCurrEduClsENS.collegeName; //学院名称
objvCurrEduClsENT.clgEnglishName = objvCurrEduClsENS.clgEnglishName; //ClgEnglishName
objvCurrEduClsENT.phoneNumber = objvCurrEduClsENS.phoneNumber; //电话
objvCurrEduClsENT.idXzMajor = objvCurrEduClsENS.idXzMajor; //专业流水号
objvCurrEduClsENT.majorName = objvCurrEduClsENS.majorName; //专业名称
objvCurrEduClsENT.idEduWay = objvCurrEduClsENS.idEduWay; //教学方式流水号
objvCurrEduClsENT.idClassRoomType = objvCurrEduClsENS.idClassRoomType; //教室类型流水号
objvCurrEduClsENT.totalLessonQty = objvCurrEduClsENS.totalLessonQty; //总课时数
objvCurrEduClsENT.maxStuQty = objvCurrEduClsENS.maxStuQty; //最大学生数
objvCurrEduClsENT.weekQty = objvCurrEduClsENS.weekQty; //总周数
objvCurrEduClsENT.scheUnitPW = objvCurrEduClsENS.scheUnitPW; //周排课次数
objvCurrEduClsENT.weekStatusId = objvCurrEduClsENS.weekStatusId; //周状态编号(单,双,全周)
objvCurrEduClsENT.customerWeek = objvCurrEduClsENS.customerWeek; //自定义上课周
objvCurrEduClsENT.lessonQtyPerWeek = objvCurrEduClsENS.lessonQtyPerWeek; //周课时数
objvCurrEduClsENT.mark = objvCurrEduClsENS.mark; //获得学分
objvCurrEduClsENT.idUniZone = objvCurrEduClsENS.idUniZone; //校区流水号
objvCurrEduClsENT.idGradeBase = objvCurrEduClsENS.idGradeBase; //年级流水号
objvCurrEduClsENT.gradeBaseId = objvCurrEduClsENS.gradeBaseId; //年级代号
objvCurrEduClsENT.gradeBaseName = objvCurrEduClsENS.gradeBaseName; //年级名称
objvCurrEduClsENT.gradeBaseNameA = objvCurrEduClsENS.gradeBaseNameA; //年级名称缩写
objvCurrEduClsENT.isEffective = objvCurrEduClsENS.isEffective; //是否有效
objvCurrEduClsENT.isForPaperReading = objvCurrEduClsENS.isForPaperReading; //是否参与论文阅读
objvCurrEduClsENT.schoolYear = objvCurrEduClsENS.schoolYear; //学年
objvCurrEduClsENT.schoolTerm = objvCurrEduClsENS.schoolTerm; //学期
objvCurrEduClsENT.idCourseType = objvCurrEduClsENS.idCourseType; //课程类型流水号
objvCurrEduClsENT.courseTypeId = objvCurrEduClsENS.courseTypeId; //课程类型ID
objvCurrEduClsENT.courseTypeName = objvCurrEduClsENS.courseTypeName; //课程类型名称
objvCurrEduClsENT.isDegree = objvCurrEduClsENS.isDegree; //是否学位课
objvCurrEduClsENT.idScoreType = objvCurrEduClsENS.idScoreType; //成绩类型流水号
objvCurrEduClsENT.getScoreWayId = objvCurrEduClsENS.getScoreWayId; //获得成绩方式Id
objvCurrEduClsENT.isProportionalCtrl = objvCurrEduClsENS.isProportionalCtrl; //是否比例控制
objvCurrEduClsENT.idExamType = objvCurrEduClsENS.idExamType; //考试方式流水号
objvCurrEduClsENT.beginWeek = objvCurrEduClsENS.beginWeek; //开始周
objvCurrEduClsENT.userType = objvCurrEduClsENS.userType; //用户类型
objvCurrEduClsENT.modifyDate = objvCurrEduClsENS.modifyDate; //修改日期
objvCurrEduClsENT.modifyUserId = objvCurrEduClsENS.modifyUserId; //修改人
objvCurrEduClsENT.memo = objvCurrEduClsENS.memo; //备注
objvCurrEduClsENT.currStuNumValid = objvCurrEduClsENS.currStuNumValid; //CurrStuNum_Valid
objvCurrEduClsENT.currStuNum = objvCurrEduClsENS.currStuNum; //当前学生数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCurrEduClsENS:源对象
 * @param objvCurrEduClsENT:目标对象
*/
export  function vCurrEduCls_GetObjFromJsonObj(objvCurrEduClsENS: clsvCurrEduClsEN): clsvCurrEduClsEN 
{
 const objvCurrEduClsENT: clsvCurrEduClsEN = new clsvCurrEduClsEN();
ObjectAssign(objvCurrEduClsENT, objvCurrEduClsENS);
 return objvCurrEduClsENT;
}