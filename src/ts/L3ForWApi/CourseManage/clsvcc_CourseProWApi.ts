
 /**
 * 类名:clsvcc_CourseProWApi
 * 表名:vcc_CoursePro(01120213)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v课程Pro(vcc_CoursePro)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvcc_CourseProEN } from "@/ts/L0Entity/CourseManage/clsvcc_CourseProEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vcc_CoursePro_Controller = "vcc_CourseProApi";
 export const vcc_CoursePro_ConstructorName = "vcc_CoursePro";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseId:关键字
 * @returns 对象
 **/
export  async function vcc_CoursePro_GetObjByCourseIdAsync(strCourseId: string): Promise<clsvcc_CourseProEN|null>  
{
const strThisFuncName = "GetObjByCourseIdAsync";

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsvcc_CourseProWApi.GetObjByCourseIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvcc_CourseProWApi.GetObjByCourseIdAsync)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCourseId";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseId,
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
const objvcc_CoursePro = vcc_CoursePro_GetObjFromJsonObj(returnObj);
return objvcc_CoursePro;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCourseIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByCourseIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByCourseIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vcc_CoursePro_SortFunDefa(a:clsvcc_CourseProEN , b:clsvcc_CourseProEN): number 
{
return a.courseId.localeCompare(b.courseId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vcc_CoursePro_SortFunDefa2Fld(a:clsvcc_CourseProEN , b:clsvcc_CourseProEN): number 
{
if (a.likeCount == b.likeCount) return a.courseCode.localeCompare(b.courseCode);
else return a.likeCount - b.likeCount;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vcc_CoursePro_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvcc_CourseProEN.con_CourseId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsvcc_CourseProEN.con_LikeCount:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.likeCount-b.likeCount;
}
case clsvcc_CourseProEN.con_CourseCode:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvcc_CourseProEN.con_CourseDescription:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.courseDescription == null) return -1;
if (b.courseDescription == null) return 1;
return a.courseDescription.localeCompare(b.courseDescription);
}
case clsvcc_CourseProEN.con_CourseName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.courseName.localeCompare(b.courseName);
}
case clsvcc_CourseProEN.con_CourseTypeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.courseTypeId == null) return -1;
if (b.courseTypeId == null) return 1;
return a.courseTypeId.localeCompare(b.courseTypeId);
}
case clsvcc_CourseProEN.con_CourseTypeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.courseTypeName == null) return -1;
if (b.courseTypeName == null) return 1;
return a.courseTypeName.localeCompare(b.courseTypeName);
}
case clsvcc_CourseProEN.con_CreateDate:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvcc_CourseProEN.con_ExcellentTypeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.excellentTypeId == null) return -1;
if (b.excellentTypeId == null) return 1;
return a.excellentTypeId.localeCompare(b.excellentTypeId);
}
case clsvcc_CourseProEN.con_ExcellentTypeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.excellentTypeName == null) return -1;
if (b.excellentTypeName == null) return 1;
return a.excellentTypeName.localeCompare(b.excellentTypeName);
}
case clsvcc_CourseProEN.con_ExcellentYear:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.excellentYear-b.excellentYear;
}
case clsvcc_CourseProEN.con_IsBuildingCourse:
return (a: clsvcc_CourseProEN) => {
if (a.isBuildingCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsDoubleLanguageCourse:
return (a: clsvcc_CourseProEN) => {
if (a.isDoubleLanguageCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsOpen:
return (a: clsvcc_CourseProEN) => {
if (a.isOpen == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsRecommendedCourse:
return (a: clsvcc_CourseProEN) => {
if (a.isRecommendedCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsSelfPropelledCourse:
return (a: clsvcc_CourseProEN) => {
if (a.isSelfPropelledCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_OperationDate:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.operationDate == null) return -1;
if (b.operationDate == null) return 1;
return a.operationDate.localeCompare(b.operationDate);
}
case clsvcc_CourseProEN.con_OrderNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.orderNum-b.orderNum;
}
case clsvcc_CourseProEN.con_OuterLink:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.outerLink == null) return -1;
if (b.outerLink == null) return 1;
return a.outerLink.localeCompare(b.outerLink);
}
case clsvcc_CourseProEN.con_ViewCount:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.viewCount-b.viewCount;
}
case clsvcc_CourseProEN.con_ThemeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.themeId == null) return -1;
if (b.themeId == null) return 1;
return a.themeId.localeCompare(b.themeId);
}
case clsvcc_CourseProEN.con_ThemeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.themeName == null) return -1;
if (b.themeName == null) return 1;
return a.themeName.localeCompare(b.themeName);
}
case clsvcc_CourseProEN.con_ExampleImgPath:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.exampleImgPath == null) return -1;
if (b.exampleImgPath == null) return 1;
return a.exampleImgPath.localeCompare(b.exampleImgPath);
}
case clsvcc_CourseProEN.con_IdXzMajor:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvcc_CourseProEN.con_MajorID:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.majorID == null) return -1;
if (b.majorID == null) return 1;
return a.majorID.localeCompare(b.majorID);
}
case clsvcc_CourseProEN.con_MajorName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvcc_CourseProEN.con_IdXzCollege:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvcc_CourseProEN.con_CollegeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.collegeId == null) return -1;
if (b.collegeId == null) return 1;
return a.collegeId.localeCompare(b.collegeId);
}
case clsvcc_CourseProEN.con_CollegeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvcc_CourseProEN.con_CollegeNameA:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.collegeNameA == null) return -1;
if (b.collegeNameA == null) return 1;
return a.collegeNameA.localeCompare(b.collegeNameA);
}
case clsvcc_CourseProEN.con_Memo:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvcc_CourseProEN.con_QuestionNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.questionNum-b.questionNum;
}
case clsvcc_CourseProEN.con_KnowledgesNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.knowledgesNum-b.knowledgesNum;
}
case clsvcc_CourseProEN.con_TeacherNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.teacherNum-b.teacherNum;
}
case clsvcc_CourseProEN.con_ChapterNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return a.chapterNum-b.chapterNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CoursePro]中不存在!(in ${ vcc_CoursePro_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvcc_CourseProEN.con_CourseId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsvcc_CourseProEN.con_LikeCount:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.likeCount-a.likeCount;
}
case clsvcc_CourseProEN.con_CourseCode:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvcc_CourseProEN.con_CourseDescription:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.courseDescription == null) return -1;
if (a.courseDescription == null) return 1;
return b.courseDescription.localeCompare(a.courseDescription);
}
case clsvcc_CourseProEN.con_CourseName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.courseName.localeCompare(a.courseName);
}
case clsvcc_CourseProEN.con_CourseTypeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.courseTypeId == null) return -1;
if (a.courseTypeId == null) return 1;
return b.courseTypeId.localeCompare(a.courseTypeId);
}
case clsvcc_CourseProEN.con_CourseTypeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.courseTypeName == null) return -1;
if (a.courseTypeName == null) return 1;
return b.courseTypeName.localeCompare(a.courseTypeName);
}
case clsvcc_CourseProEN.con_CreateDate:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvcc_CourseProEN.con_ExcellentTypeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.excellentTypeId == null) return -1;
if (a.excellentTypeId == null) return 1;
return b.excellentTypeId.localeCompare(a.excellentTypeId);
}
case clsvcc_CourseProEN.con_ExcellentTypeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.excellentTypeName == null) return -1;
if (a.excellentTypeName == null) return 1;
return b.excellentTypeName.localeCompare(a.excellentTypeName);
}
case clsvcc_CourseProEN.con_ExcellentYear:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.excellentYear-a.excellentYear;
}
case clsvcc_CourseProEN.con_IsBuildingCourse:
return (b: clsvcc_CourseProEN) => {
if (b.isBuildingCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsDoubleLanguageCourse:
return (b: clsvcc_CourseProEN) => {
if (b.isDoubleLanguageCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsOpen:
return (b: clsvcc_CourseProEN) => {
if (b.isOpen == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsRecommendedCourse:
return (b: clsvcc_CourseProEN) => {
if (b.isRecommendedCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_IsSelfPropelledCourse:
return (b: clsvcc_CourseProEN) => {
if (b.isSelfPropelledCourse == true) return 1;
else return -1
}
case clsvcc_CourseProEN.con_OperationDate:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.operationDate == null) return -1;
if (a.operationDate == null) return 1;
return b.operationDate.localeCompare(a.operationDate);
}
case clsvcc_CourseProEN.con_OrderNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.orderNum-a.orderNum;
}
case clsvcc_CourseProEN.con_OuterLink:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.outerLink == null) return -1;
if (a.outerLink == null) return 1;
return b.outerLink.localeCompare(a.outerLink);
}
case clsvcc_CourseProEN.con_ViewCount:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.viewCount-a.viewCount;
}
case clsvcc_CourseProEN.con_ThemeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.themeId == null) return -1;
if (a.themeId == null) return 1;
return b.themeId.localeCompare(a.themeId);
}
case clsvcc_CourseProEN.con_ThemeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.themeName == null) return -1;
if (a.themeName == null) return 1;
return b.themeName.localeCompare(a.themeName);
}
case clsvcc_CourseProEN.con_ExampleImgPath:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.exampleImgPath == null) return -1;
if (a.exampleImgPath == null) return 1;
return b.exampleImgPath.localeCompare(a.exampleImgPath);
}
case clsvcc_CourseProEN.con_IdXzMajor:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvcc_CourseProEN.con_MajorID:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.majorID == null) return -1;
if (a.majorID == null) return 1;
return b.majorID.localeCompare(a.majorID);
}
case clsvcc_CourseProEN.con_MajorName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvcc_CourseProEN.con_IdXzCollege:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvcc_CourseProEN.con_CollegeId:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.collegeId == null) return -1;
if (a.collegeId == null) return 1;
return b.collegeId.localeCompare(a.collegeId);
}
case clsvcc_CourseProEN.con_CollegeName:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvcc_CourseProEN.con_CollegeNameA:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.collegeNameA == null) return -1;
if (a.collegeNameA == null) return 1;
return b.collegeNameA.localeCompare(a.collegeNameA);
}
case clsvcc_CourseProEN.con_Memo:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvcc_CourseProEN.con_QuestionNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.questionNum-a.questionNum;
}
case clsvcc_CourseProEN.con_KnowledgesNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.knowledgesNum-a.knowledgesNum;
}
case clsvcc_CourseProEN.con_TeacherNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.teacherNum-a.teacherNum;
}
case clsvcc_CourseProEN.con_ChapterNum:
return (a: clsvcc_CourseProEN, b: clsvcc_CourseProEN) => {
return b.chapterNum-a.chapterNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CoursePro]中不存在!(in ${ vcc_CoursePro_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vcc_CoursePro_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvcc_CourseProEN.con_CourseId:
return (obj: clsvcc_CourseProEN) => {
return obj.courseId === value;
}
case clsvcc_CourseProEN.con_LikeCount:
return (obj: clsvcc_CourseProEN) => {
return obj.likeCount === value;
}
case clsvcc_CourseProEN.con_CourseCode:
return (obj: clsvcc_CourseProEN) => {
return obj.courseCode === value;
}
case clsvcc_CourseProEN.con_CourseDescription:
return (obj: clsvcc_CourseProEN) => {
return obj.courseDescription === value;
}
case clsvcc_CourseProEN.con_CourseName:
return (obj: clsvcc_CourseProEN) => {
return obj.courseName === value;
}
case clsvcc_CourseProEN.con_CourseTypeId:
return (obj: clsvcc_CourseProEN) => {
return obj.courseTypeId === value;
}
case clsvcc_CourseProEN.con_CourseTypeName:
return (obj: clsvcc_CourseProEN) => {
return obj.courseTypeName === value;
}
case clsvcc_CourseProEN.con_CreateDate:
return (obj: clsvcc_CourseProEN) => {
return obj.createDate === value;
}
case clsvcc_CourseProEN.con_ExcellentTypeId:
return (obj: clsvcc_CourseProEN) => {
return obj.excellentTypeId === value;
}
case clsvcc_CourseProEN.con_ExcellentTypeName:
return (obj: clsvcc_CourseProEN) => {
return obj.excellentTypeName === value;
}
case clsvcc_CourseProEN.con_ExcellentYear:
return (obj: clsvcc_CourseProEN) => {
return obj.excellentYear === value;
}
case clsvcc_CourseProEN.con_IsBuildingCourse:
return (obj: clsvcc_CourseProEN) => {
return obj.isBuildingCourse === value;
}
case clsvcc_CourseProEN.con_IsDoubleLanguageCourse:
return (obj: clsvcc_CourseProEN) => {
return obj.isDoubleLanguageCourse === value;
}
case clsvcc_CourseProEN.con_IsOpen:
return (obj: clsvcc_CourseProEN) => {
return obj.isOpen === value;
}
case clsvcc_CourseProEN.con_IsRecommendedCourse:
return (obj: clsvcc_CourseProEN) => {
return obj.isRecommendedCourse === value;
}
case clsvcc_CourseProEN.con_IsSelfPropelledCourse:
return (obj: clsvcc_CourseProEN) => {
return obj.isSelfPropelledCourse === value;
}
case clsvcc_CourseProEN.con_OperationDate:
return (obj: clsvcc_CourseProEN) => {
return obj.operationDate === value;
}
case clsvcc_CourseProEN.con_OrderNum:
return (obj: clsvcc_CourseProEN) => {
return obj.orderNum === value;
}
case clsvcc_CourseProEN.con_OuterLink:
return (obj: clsvcc_CourseProEN) => {
return obj.outerLink === value;
}
case clsvcc_CourseProEN.con_ViewCount:
return (obj: clsvcc_CourseProEN) => {
return obj.viewCount === value;
}
case clsvcc_CourseProEN.con_ThemeId:
return (obj: clsvcc_CourseProEN) => {
return obj.themeId === value;
}
case clsvcc_CourseProEN.con_ThemeName:
return (obj: clsvcc_CourseProEN) => {
return obj.themeName === value;
}
case clsvcc_CourseProEN.con_ExampleImgPath:
return (obj: clsvcc_CourseProEN) => {
return obj.exampleImgPath === value;
}
case clsvcc_CourseProEN.con_IdXzMajor:
return (obj: clsvcc_CourseProEN) => {
return obj.idXzMajor === value;
}
case clsvcc_CourseProEN.con_MajorID:
return (obj: clsvcc_CourseProEN) => {
return obj.majorID === value;
}
case clsvcc_CourseProEN.con_MajorName:
return (obj: clsvcc_CourseProEN) => {
return obj.majorName === value;
}
case clsvcc_CourseProEN.con_IdXzCollege:
return (obj: clsvcc_CourseProEN) => {
return obj.idXzCollege === value;
}
case clsvcc_CourseProEN.con_CollegeId:
return (obj: clsvcc_CourseProEN) => {
return obj.collegeId === value;
}
case clsvcc_CourseProEN.con_CollegeName:
return (obj: clsvcc_CourseProEN) => {
return obj.collegeName === value;
}
case clsvcc_CourseProEN.con_CollegeNameA:
return (obj: clsvcc_CourseProEN) => {
return obj.collegeNameA === value;
}
case clsvcc_CourseProEN.con_Memo:
return (obj: clsvcc_CourseProEN) => {
return obj.memo === value;
}
case clsvcc_CourseProEN.con_QuestionNum:
return (obj: clsvcc_CourseProEN) => {
return obj.questionNum === value;
}
case clsvcc_CourseProEN.con_KnowledgesNum:
return (obj: clsvcc_CourseProEN) => {
return obj.knowledgesNum === value;
}
case clsvcc_CourseProEN.con_TeacherNum:
return (obj: clsvcc_CourseProEN) => {
return obj.teacherNum === value;
}
case clsvcc_CourseProEN.con_ChapterNum:
return (obj: clsvcc_CourseProEN) => {
return obj.chapterNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_CoursePro]中不存在!(in ${ vcc_CoursePro_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vcc_CoursePro__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vcc_CoursePro_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_GetFirstObjAsync(strWhereCond: string): Promise<clsvcc_CourseProEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const objvcc_CoursePro = vcc_CoursePro_GetObjFromJsonObj(returnObj);
return objvcc_CoursePro;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvcc_CourseProEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CoursePro_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
 * @param arrCourseId:关键字列表
 * @returns 对象列表
 **/
export  async function vcc_CoursePro_GetObjLstByCourseIdLstAsync(arrCourseId: Array<string>): Promise<Array<clsvcc_CourseProEN>>  
{
const strThisFuncName = "GetObjLstByCourseIdLstAsync";
const strAction = "GetObjLstByCourseIdLst";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CoursePro_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCourseIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vcc_CoursePro_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvcc_CourseProEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CoursePro_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvcc_CourseProEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CoursePro_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvcc_CourseProEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvcc_CourseProEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_CoursePro_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
 * @param strCourseId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vcc_CoursePro_IsExistAsync(strCourseId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  async function vcc_CoursePro_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vcc_CoursePro_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_CoursePro_ConstructorName, strThisFuncName);
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
export  function vcc_CoursePro_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_CoursePro_GetJSONStrByObj (pobjvcc_CourseProEN: clsvcc_CourseProEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvcc_CourseProEN);
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vcc_CoursePro_GetObjLstByJSONStr (strJSON: string): Array<clsvcc_CourseProEN>
{
let arrvcc_CourseProObjLst = new Array<clsvcc_CourseProEN>();
if (strJSON === "")
{
return arrvcc_CourseProObjLst;
}
try
{
arrvcc_CourseProObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvcc_CourseProObjLst;
}
return arrvcc_CourseProObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvcc_CourseProObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vcc_CoursePro_GetObjLstByJSONObjLst (arrvcc_CourseProObjLstS: Array<clsvcc_CourseProEN>): Array<clsvcc_CourseProEN>
{
const arrvcc_CourseProObjLst = new Array<clsvcc_CourseProEN>();
for (const objInFor of arrvcc_CourseProObjLstS) {
const obj1 = vcc_CoursePro_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvcc_CourseProObjLst.push(obj1);
}
return arrvcc_CourseProObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_CoursePro_GetObjByJSONStr (strJSON: string): clsvcc_CourseProEN
{
let pobjvcc_CourseProEN = new clsvcc_CourseProEN();
if (strJSON === "")
{
return pobjvcc_CourseProEN;
}
try
{
pobjvcc_CourseProEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvcc_CourseProEN;
}
return pobjvcc_CourseProEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vcc_CoursePro_GetCombineCondition(objvcc_CourseProCond: clsvcc_CourseProEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CourseId, objvcc_CourseProCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_LikeCount, objvcc_CourseProCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CourseCode, objvcc_CourseProCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CourseDescription) == true)
{
const strComparisonOpCourseDescription:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CourseDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CourseDescription, objvcc_CourseProCond.courseDescription, strComparisonOpCourseDescription);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CourseName, objvcc_CourseProCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CourseTypeId) == true)
{
const strComparisonOpCourseTypeId:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CourseTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CourseTypeId, objvcc_CourseProCond.courseTypeId, strComparisonOpCourseTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CourseTypeName) == true)
{
const strComparisonOpCourseTypeName:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CourseTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CourseTypeName, objvcc_CourseProCond.courseTypeName, strComparisonOpCourseTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CreateDate, objvcc_CourseProCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ExcellentTypeId) == true)
{
const strComparisonOpExcellentTypeId:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ExcellentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_ExcellentTypeId, objvcc_CourseProCond.excellentTypeId, strComparisonOpExcellentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ExcellentTypeName) == true)
{
const strComparisonOpExcellentTypeName:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ExcellentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_ExcellentTypeName, objvcc_CourseProCond.excellentTypeName, strComparisonOpExcellentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ExcellentYear) == true)
{
const strComparisonOpExcellentYear:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ExcellentYear];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_ExcellentYear, objvcc_CourseProCond.excellentYear, strComparisonOpExcellentYear);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IsBuildingCourse) == true)
{
if (objvcc_CourseProCond.isBuildingCourse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseProEN.con_IsBuildingCourse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseProEN.con_IsBuildingCourse);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IsDoubleLanguageCourse) == true)
{
if (objvcc_CourseProCond.isDoubleLanguageCourse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseProEN.con_IsDoubleLanguageCourse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseProEN.con_IsDoubleLanguageCourse);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IsOpen) == true)
{
if (objvcc_CourseProCond.isOpen == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseProEN.con_IsOpen);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseProEN.con_IsOpen);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IsRecommendedCourse) == true)
{
if (objvcc_CourseProCond.isRecommendedCourse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseProEN.con_IsRecommendedCourse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseProEN.con_IsRecommendedCourse);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IsSelfPropelledCourse) == true)
{
if (objvcc_CourseProCond.isSelfPropelledCourse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvcc_CourseProEN.con_IsSelfPropelledCourse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvcc_CourseProEN.con_IsSelfPropelledCourse);
}
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_OperationDate) == true)
{
const strComparisonOpOperationDate:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_OperationDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_OperationDate, objvcc_CourseProCond.operationDate, strComparisonOpOperationDate);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_OrderNum, objvcc_CourseProCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_OuterLink) == true)
{
const strComparisonOpOuterLink:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_OuterLink];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_OuterLink, objvcc_CourseProCond.outerLink, strComparisonOpOuterLink);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ViewCount) == true)
{
const strComparisonOpViewCount:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ViewCount];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_ViewCount, objvcc_CourseProCond.viewCount, strComparisonOpViewCount);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ThemeId) == true)
{
const strComparisonOpThemeId:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ThemeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_ThemeId, objvcc_CourseProCond.themeId, strComparisonOpThemeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ThemeName) == true)
{
const strComparisonOpThemeName:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ThemeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_ThemeName, objvcc_CourseProCond.themeName, strComparisonOpThemeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ExampleImgPath) == true)
{
const strComparisonOpExampleImgPath:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ExampleImgPath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_ExampleImgPath, objvcc_CourseProCond.exampleImgPath, strComparisonOpExampleImgPath);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_IdXzMajor, objvcc_CourseProCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_MajorID) == true)
{
const strComparisonOpMajorID:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_MajorID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_MajorID, objvcc_CourseProCond.majorID, strComparisonOpMajorID);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_MajorName, objvcc_CourseProCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_IdXzCollege, objvcc_CourseProCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CollegeId, objvcc_CourseProCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CollegeName, objvcc_CourseProCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_CollegeNameA) == true)
{
const strComparisonOpCollegeNameA:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_CollegeNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_CollegeNameA, objvcc_CourseProCond.collegeNameA, strComparisonOpCollegeNameA);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_CourseProEN.con_Memo, objvcc_CourseProCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_QuestionNum, objvcc_CourseProCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_KnowledgesNum) == true)
{
const strComparisonOpKnowledgesNum:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_KnowledgesNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_KnowledgesNum, objvcc_CourseProCond.knowledgesNum, strComparisonOpKnowledgesNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_TeacherNum) == true)
{
const strComparisonOpTeacherNum:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_TeacherNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_TeacherNum, objvcc_CourseProCond.teacherNum, strComparisonOpTeacherNum);
}
if (Object.prototype.hasOwnProperty.call(objvcc_CourseProCond.dicFldComparisonOp, clsvcc_CourseProEN.con_ChapterNum) == true)
{
const strComparisonOpChapterNum:string = objvcc_CourseProCond.dicFldComparisonOp[clsvcc_CourseProEN.con_ChapterNum];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_CourseProEN.con_ChapterNum, objvcc_CourseProCond.chapterNum, strComparisonOpChapterNum);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvcc_CourseProENS:源对象
 * @param objvcc_CourseProENT:目标对象
*/
export  function vcc_CoursePro_CopyObjTo(objvcc_CourseProENS: clsvcc_CourseProEN , objvcc_CourseProENT: clsvcc_CourseProEN ): void 
{
objvcc_CourseProENT.courseId = objvcc_CourseProENS.courseId; //课程Id
objvcc_CourseProENT.likeCount = objvcc_CourseProENS.likeCount; //LikeCount
objvcc_CourseProENT.courseCode = objvcc_CourseProENS.courseCode; //课程代码
objvcc_CourseProENT.courseDescription = objvcc_CourseProENS.courseDescription; //课程描述
objvcc_CourseProENT.courseName = objvcc_CourseProENS.courseName; //课程名称
objvcc_CourseProENT.courseTypeId = objvcc_CourseProENS.courseTypeId; //课程类型ID
objvcc_CourseProENT.courseTypeName = objvcc_CourseProENS.courseTypeName; //课程类型名称
objvcc_CourseProENT.createDate = objvcc_CourseProENS.createDate; //建立日期
objvcc_CourseProENT.excellentTypeId = objvcc_CourseProENS.excellentTypeId; //精品课程类型Id
objvcc_CourseProENT.excellentTypeName = objvcc_CourseProENS.excellentTypeName; //精品课程类型名称
objvcc_CourseProENT.excellentYear = objvcc_CourseProENS.excellentYear; //课程年份
objvcc_CourseProENT.isBuildingCourse = objvcc_CourseProENS.isBuildingCourse; //是否已建设课程
objvcc_CourseProENT.isDoubleLanguageCourse = objvcc_CourseProENS.isDoubleLanguageCourse; //是否双语课程
objvcc_CourseProENT.isOpen = objvcc_CourseProENS.isOpen; //是否公开
objvcc_CourseProENT.isRecommendedCourse = objvcc_CourseProENS.isRecommendedCourse; //是否推荐课程
objvcc_CourseProENT.isSelfPropelledCourse = objvcc_CourseProENS.isSelfPropelledCourse; //是否自荐课程
objvcc_CourseProENT.operationDate = objvcc_CourseProENS.operationDate; //操作时间
objvcc_CourseProENT.orderNum = objvcc_CourseProENS.orderNum; //序号
objvcc_CourseProENT.outerLink = objvcc_CourseProENS.outerLink; //外链地址
objvcc_CourseProENT.viewCount = objvcc_CourseProENS.viewCount; //浏览量
objvcc_CourseProENT.themeId = objvcc_CourseProENS.themeId; //主题Id
objvcc_CourseProENT.themeName = objvcc_CourseProENS.themeName; //主题名
objvcc_CourseProENT.exampleImgPath = objvcc_CourseProENS.exampleImgPath; //示例图路径
objvcc_CourseProENT.idXzMajor = objvcc_CourseProENS.idXzMajor; //专业流水号
objvcc_CourseProENT.majorID = objvcc_CourseProENS.majorID; //专业ID
objvcc_CourseProENT.majorName = objvcc_CourseProENS.majorName; //专业名称
objvcc_CourseProENT.idXzCollege = objvcc_CourseProENS.idXzCollege; //学院流水号
objvcc_CourseProENT.collegeId = objvcc_CourseProENS.collegeId; //学院ID
objvcc_CourseProENT.collegeName = objvcc_CourseProENS.collegeName; //学院名称
objvcc_CourseProENT.collegeNameA = objvcc_CourseProENS.collegeNameA; //学院名称简写
objvcc_CourseProENT.memo = objvcc_CourseProENS.memo; //备注
objvcc_CourseProENT.questionNum = objvcc_CourseProENS.questionNum; //题目数
objvcc_CourseProENT.knowledgesNum = objvcc_CourseProENS.knowledgesNum; //知识点数
objvcc_CourseProENT.teacherNum = objvcc_CourseProENS.teacherNum; //教师数
objvcc_CourseProENT.chapterNum = objvcc_CourseProENS.chapterNum; //章节数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvcc_CourseProENS:源对象
 * @param objvcc_CourseProENT:目标对象
*/
export  function vcc_CoursePro_GetObjFromJsonObj(objvcc_CourseProENS: clsvcc_CourseProEN): clsvcc_CourseProEN 
{
 const objvcc_CourseProENT: clsvcc_CourseProEN = new clsvcc_CourseProEN();
ObjectAssign(objvcc_CourseProENT, objvcc_CourseProENS);
 return objvcc_CourseProENT;
}