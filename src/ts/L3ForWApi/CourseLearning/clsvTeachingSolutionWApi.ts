
 /**
 * 类名:clsvTeachingSolutionWApi
 * 表名:vTeachingSolution(01120138)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:44:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v教学方案(vTeachingSolution)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvTeachingSolutionEN } from "@/ts/L0Entity/CourseLearning/clsvTeachingSolutionEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vTeachingSolution_Controller = "vTeachingSolutionApi";
 export const vTeachingSolution_ConstructorName = "vTeachingSolution";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTeachingSolutionId:关键字
 * @returns 对象
 **/
export  async function vTeachingSolution_GetObjByTeachingSolutionIdAsync(strTeachingSolutionId: string): Promise<clsvTeachingSolutionEN|null>  
{
const strThisFuncName = "GetObjByTeachingSolutionIdAsync";

if (IsNullOrEmpty(strTeachingSolutionId) == true)
{
  const strMsg = Format("参数:[strTeachingSolutionId]不能为空!(In clsvTeachingSolutionWApi.GetObjByTeachingSolutionIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTeachingSolutionId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTeachingSolutionId]的长度:[{0}]不正确!(clsvTeachingSolutionWApi.GetObjByTeachingSolutionIdAsync)", strTeachingSolutionId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTeachingSolutionId";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTeachingSolutionId,
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
const objvTeachingSolution = vTeachingSolution_GetObjFromJsonObj(returnObj);
return objvTeachingSolution;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByTeachingSolutionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByTeachingSolutionIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByTeachingSolutionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vTeachingSolution_SortFunDefa(a:clsvTeachingSolutionEN , b:clsvTeachingSolutionEN): number 
{
return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
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
export  function vTeachingSolution_SortFunDefa2Fld(a:clsvTeachingSolutionEN , b:clsvTeachingSolutionEN): number 
{
if (a.teachingSolutionName == b.teachingSolutionName) return a.courseId.localeCompare(b.courseId);
else return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
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
export  function vTeachingSolution_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvTeachingSolutionEN.con_TeachingSolutionId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
}
case clsvTeachingSolutionEN.con_TeachingSolutionName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
}
case clsvTeachingSolutionEN.con_CourseId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvTeachingSolutionEN.con_CourseCode:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvTeachingSolutionEN.con_CourseDescription:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.courseDescription == null) return -1;
if (b.courseDescription == null) return 1;
return a.courseDescription.localeCompare(b.courseDescription);
}
case clsvTeachingSolutionEN.con_IdTeacher:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.idTeacher.localeCompare(b.idTeacher);
}
case clsvTeachingSolutionEN.con_TeacherId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.teacherId.localeCompare(b.teacherId);
}
case clsvTeachingSolutionEN.con_TeacherName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.teacherName.localeCompare(b.teacherName);
}
case clsvTeachingSolutionEN.con_IdSex:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.idSex.localeCompare(b.idSex);
}
case clsvTeachingSolutionEN.con_SexDesc:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.sexDesc == null) return -1;
if (b.sexDesc == null) return 1;
return a.sexDesc.localeCompare(b.sexDesc);
}
case clsvTeachingSolutionEN.con_CollegeName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.collegeName.localeCompare(b.collegeName);
}
case clsvTeachingSolutionEN.con_IdProfGrade:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.idProfGrade.localeCompare(b.idProfGrade);
}
case clsvTeachingSolutionEN.con_ProfenssionalGradeName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.profenssionalGradeName.localeCompare(b.profenssionalGradeName);
}
case clsvTeachingSolutionEN.con_CollegeId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.collegeId.localeCompare(b.collegeId);
}
case clsvTeachingSolutionEN.con_IdXzCollege:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvTeachingSolutionEN.con_IdXzMajor:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvTeachingSolutionEN.con_BriefIntroduction:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.briefIntroduction == null) return -1;
if (b.briefIntroduction == null) return 1;
return a.briefIntroduction.localeCompare(b.briefIntroduction);
}
case clsvTeachingSolutionEN.con_UpdDate:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvTeachingSolutionEN.con_UpdUser:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsvTeachingSolutionEN.con_Memo:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeachingSolution]中不存在!(in ${ vTeachingSolution_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvTeachingSolutionEN.con_TeachingSolutionId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.teachingSolutionId.localeCompare(a.teachingSolutionId);
}
case clsvTeachingSolutionEN.con_TeachingSolutionName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.teachingSolutionName.localeCompare(a.teachingSolutionName);
}
case clsvTeachingSolutionEN.con_CourseId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvTeachingSolutionEN.con_CourseCode:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvTeachingSolutionEN.con_CourseDescription:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.courseDescription == null) return -1;
if (a.courseDescription == null) return 1;
return b.courseDescription.localeCompare(a.courseDescription);
}
case clsvTeachingSolutionEN.con_IdTeacher:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.idTeacher.localeCompare(a.idTeacher);
}
case clsvTeachingSolutionEN.con_TeacherId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.teacherId.localeCompare(a.teacherId);
}
case clsvTeachingSolutionEN.con_TeacherName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.teacherName.localeCompare(a.teacherName);
}
case clsvTeachingSolutionEN.con_IdSex:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.idSex.localeCompare(a.idSex);
}
case clsvTeachingSolutionEN.con_SexDesc:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.sexDesc == null) return -1;
if (a.sexDesc == null) return 1;
return b.sexDesc.localeCompare(a.sexDesc);
}
case clsvTeachingSolutionEN.con_CollegeName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.collegeName.localeCompare(a.collegeName);
}
case clsvTeachingSolutionEN.con_IdProfGrade:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.idProfGrade.localeCompare(a.idProfGrade);
}
case clsvTeachingSolutionEN.con_ProfenssionalGradeName:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.profenssionalGradeName.localeCompare(a.profenssionalGradeName);
}
case clsvTeachingSolutionEN.con_CollegeId:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.collegeId.localeCompare(a.collegeId);
}
case clsvTeachingSolutionEN.con_IdXzCollege:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvTeachingSolutionEN.con_IdXzMajor:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvTeachingSolutionEN.con_BriefIntroduction:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.briefIntroduction == null) return -1;
if (a.briefIntroduction == null) return 1;
return b.briefIntroduction.localeCompare(a.briefIntroduction);
}
case clsvTeachingSolutionEN.con_UpdDate:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvTeachingSolutionEN.con_UpdUser:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsvTeachingSolutionEN.con_Memo:
return (a: clsvTeachingSolutionEN, b: clsvTeachingSolutionEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeachingSolution]中不存在!(in ${ vTeachingSolution_ConstructorName}.${ strThisFuncName})`;
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
export  async function vTeachingSolution_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvTeachingSolutionEN.con_TeachingSolutionId:
return (obj: clsvTeachingSolutionEN) => {
return obj.teachingSolutionId === value;
}
case clsvTeachingSolutionEN.con_TeachingSolutionName:
return (obj: clsvTeachingSolutionEN) => {
return obj.teachingSolutionName === value;
}
case clsvTeachingSolutionEN.con_CourseId:
return (obj: clsvTeachingSolutionEN) => {
return obj.courseId === value;
}
case clsvTeachingSolutionEN.con_CourseCode:
return (obj: clsvTeachingSolutionEN) => {
return obj.courseCode === value;
}
case clsvTeachingSolutionEN.con_CourseDescription:
return (obj: clsvTeachingSolutionEN) => {
return obj.courseDescription === value;
}
case clsvTeachingSolutionEN.con_IdTeacher:
return (obj: clsvTeachingSolutionEN) => {
return obj.idTeacher === value;
}
case clsvTeachingSolutionEN.con_TeacherId:
return (obj: clsvTeachingSolutionEN) => {
return obj.teacherId === value;
}
case clsvTeachingSolutionEN.con_TeacherName:
return (obj: clsvTeachingSolutionEN) => {
return obj.teacherName === value;
}
case clsvTeachingSolutionEN.con_IdSex:
return (obj: clsvTeachingSolutionEN) => {
return obj.idSex === value;
}
case clsvTeachingSolutionEN.con_SexDesc:
return (obj: clsvTeachingSolutionEN) => {
return obj.sexDesc === value;
}
case clsvTeachingSolutionEN.con_CollegeName:
return (obj: clsvTeachingSolutionEN) => {
return obj.collegeName === value;
}
case clsvTeachingSolutionEN.con_IdProfGrade:
return (obj: clsvTeachingSolutionEN) => {
return obj.idProfGrade === value;
}
case clsvTeachingSolutionEN.con_ProfenssionalGradeName:
return (obj: clsvTeachingSolutionEN) => {
return obj.profenssionalGradeName === value;
}
case clsvTeachingSolutionEN.con_CollegeId:
return (obj: clsvTeachingSolutionEN) => {
return obj.collegeId === value;
}
case clsvTeachingSolutionEN.con_IdXzCollege:
return (obj: clsvTeachingSolutionEN) => {
return obj.idXzCollege === value;
}
case clsvTeachingSolutionEN.con_IdXzMajor:
return (obj: clsvTeachingSolutionEN) => {
return obj.idXzMajor === value;
}
case clsvTeachingSolutionEN.con_BriefIntroduction:
return (obj: clsvTeachingSolutionEN) => {
return obj.briefIntroduction === value;
}
case clsvTeachingSolutionEN.con_UpdDate:
return (obj: clsvTeachingSolutionEN) => {
return obj.updDate === value;
}
case clsvTeachingSolutionEN.con_UpdUser:
return (obj: clsvTeachingSolutionEN) => {
return obj.updUser === value;
}
case clsvTeachingSolutionEN.con_Memo:
return (obj: clsvTeachingSolutionEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeachingSolution]中不存在!(in ${ vTeachingSolution_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vTeachingSolution__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vTeachingSolution_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_GetFirstObjAsync(strWhereCond: string): Promise<clsvTeachingSolutionEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const objvTeachingSolution = vTeachingSolution_GetObjFromJsonObj(returnObj);
return objvTeachingSolution;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvTeachingSolutionEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
 * @param arrTeachingSolutionId:关键字列表
 * @returns 对象列表
 **/
export  async function vTeachingSolution_GetObjLstByTeachingSolutionIdLstAsync(arrTeachingSolutionId: Array<string>): Promise<Array<clsvTeachingSolutionEN>>  
{
const strThisFuncName = "GetObjLstByTeachingSolutionIdLstAsync";
const strAction = "GetObjLstByTeachingSolutionIdLst";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTeachingSolutionId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByTeachingSolutionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vTeachingSolution_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvTeachingSolutionEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvTeachingSolutionEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvTeachingSolutionEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvTeachingSolutionEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeachingSolution_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
 * @param strTeachingSolutionId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vTeachingSolution_IsExistAsync(strTeachingSolutionId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTeachingSolutionId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  async function vTeachingSolution_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vTeachingSolution_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeachingSolution_ConstructorName, strThisFuncName);
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
export  function vTeachingSolution_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vTeachingSolution_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vTeachingSolution_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvTeachingSolutionEN.con_TeachingSolutionId, clsvTeachingSolutionEN.con_TeachingSolutionName, "v教学方案");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTeachingSolution_GetJSONStrByObj (pobjvTeachingSolutionEN: clsvTeachingSolutionEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvTeachingSolutionEN);
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
export  function vTeachingSolution_GetObjLstByJSONStr (strJSON: string): Array<clsvTeachingSolutionEN>
{
let arrvTeachingSolutionObjLst = new Array<clsvTeachingSolutionEN>();
if (strJSON === "")
{
return arrvTeachingSolutionObjLst;
}
try
{
arrvTeachingSolutionObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvTeachingSolutionObjLst;
}
return arrvTeachingSolutionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTeachingSolutionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vTeachingSolution_GetObjLstByJSONObjLst (arrvTeachingSolutionObjLstS: Array<clsvTeachingSolutionEN>): Array<clsvTeachingSolutionEN>
{
const arrvTeachingSolutionObjLst = new Array<clsvTeachingSolutionEN>();
for (const objInFor of arrvTeachingSolutionObjLstS) {
const obj1 = vTeachingSolution_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvTeachingSolutionObjLst.push(obj1);
}
return arrvTeachingSolutionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTeachingSolution_GetObjByJSONStr (strJSON: string): clsvTeachingSolutionEN
{
let pobjvTeachingSolutionEN = new clsvTeachingSolutionEN();
if (strJSON === "")
{
return pobjvTeachingSolutionEN;
}
try
{
pobjvTeachingSolutionEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvTeachingSolutionEN;
}
return pobjvTeachingSolutionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vTeachingSolution_GetCombineCondition(objvTeachingSolutionCond: clsvTeachingSolutionEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_TeachingSolutionId) == true)
{
const strComparisonOpTeachingSolutionId:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_TeachingSolutionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_TeachingSolutionId, objvTeachingSolutionCond.teachingSolutionId, strComparisonOpTeachingSolutionId);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_TeachingSolutionName) == true)
{
const strComparisonOpTeachingSolutionName:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_TeachingSolutionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_TeachingSolutionName, objvTeachingSolutionCond.teachingSolutionName, strComparisonOpTeachingSolutionName);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_CourseId, objvTeachingSolutionCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_CourseCode, objvTeachingSolutionCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_CourseDescription) == true)
{
const strComparisonOpCourseDescription:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_CourseDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_CourseDescription, objvTeachingSolutionCond.courseDescription, strComparisonOpCourseDescription);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_IdTeacher, objvTeachingSolutionCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_TeacherId) == true)
{
const strComparisonOpTeacherId:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_TeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_TeacherId, objvTeachingSolutionCond.teacherId, strComparisonOpTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_TeacherName) == true)
{
const strComparisonOpTeacherName:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_TeacherName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_TeacherName, objvTeachingSolutionCond.teacherName, strComparisonOpTeacherName);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_IdSex) == true)
{
const strComparisonOpIdSex:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_IdSex];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_IdSex, objvTeachingSolutionCond.idSex, strComparisonOpIdSex);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_SexDesc) == true)
{
const strComparisonOpSexDesc:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_SexDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_SexDesc, objvTeachingSolutionCond.sexDesc, strComparisonOpSexDesc);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_CollegeName, objvTeachingSolutionCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_IdProfGrade) == true)
{
const strComparisonOpIdProfGrade:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_IdProfGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_IdProfGrade, objvTeachingSolutionCond.idProfGrade, strComparisonOpIdProfGrade);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_ProfenssionalGradeName) == true)
{
const strComparisonOpProfenssionalGradeName:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_ProfenssionalGradeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_ProfenssionalGradeName, objvTeachingSolutionCond.profenssionalGradeName, strComparisonOpProfenssionalGradeName);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_CollegeId, objvTeachingSolutionCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_IdXzCollege, objvTeachingSolutionCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_IdXzMajor, objvTeachingSolutionCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_BriefIntroduction) == true)
{
const strComparisonOpBriefIntroduction:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_BriefIntroduction];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_BriefIntroduction, objvTeachingSolutionCond.briefIntroduction, strComparisonOpBriefIntroduction);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_UpdDate, objvTeachingSolutionCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_UpdUser, objvTeachingSolutionCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvTeachingSolutionCond.dicFldComparisonOp, clsvTeachingSolutionEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvTeachingSolutionCond.dicFldComparisonOp[clsvTeachingSolutionEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeachingSolutionEN.con_Memo, objvTeachingSolutionCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvTeachingSolutionENS:源对象
 * @param objvTeachingSolutionENT:目标对象
*/
export  function vTeachingSolution_CopyObjTo(objvTeachingSolutionENS: clsvTeachingSolutionEN , objvTeachingSolutionENT: clsvTeachingSolutionEN ): void 
{
objvTeachingSolutionENT.teachingSolutionId = objvTeachingSolutionENS.teachingSolutionId; //教学方案Id
objvTeachingSolutionENT.teachingSolutionName = objvTeachingSolutionENS.teachingSolutionName; //教学方案名称
objvTeachingSolutionENT.courseId = objvTeachingSolutionENS.courseId; //课程Id
objvTeachingSolutionENT.courseCode = objvTeachingSolutionENS.courseCode; //课程代码
objvTeachingSolutionENT.courseDescription = objvTeachingSolutionENS.courseDescription; //课程描述
objvTeachingSolutionENT.idTeacher = objvTeachingSolutionENS.idTeacher; //教师流水号
objvTeachingSolutionENT.teacherId = objvTeachingSolutionENS.teacherId; //教师工号
objvTeachingSolutionENT.teacherName = objvTeachingSolutionENS.teacherName; //教师姓名
objvTeachingSolutionENT.idSex = objvTeachingSolutionENS.idSex; //性别流水号
objvTeachingSolutionENT.sexDesc = objvTeachingSolutionENS.sexDesc; //性别名称
objvTeachingSolutionENT.collegeName = objvTeachingSolutionENS.collegeName; //学院名称
objvTeachingSolutionENT.idProfGrade = objvTeachingSolutionENS.idProfGrade; //专业职称流水号
objvTeachingSolutionENT.profenssionalGradeName = objvTeachingSolutionENS.profenssionalGradeName; //专业职称
objvTeachingSolutionENT.collegeId = objvTeachingSolutionENS.collegeId; //学院ID
objvTeachingSolutionENT.idXzCollege = objvTeachingSolutionENS.idXzCollege; //学院流水号
objvTeachingSolutionENT.idXzMajor = objvTeachingSolutionENS.idXzMajor; //专业流水号
objvTeachingSolutionENT.briefIntroduction = objvTeachingSolutionENS.briefIntroduction; //简介
objvTeachingSolutionENT.updDate = objvTeachingSolutionENS.updDate; //修改日期
objvTeachingSolutionENT.updUser = objvTeachingSolutionENS.updUser; //修改人
objvTeachingSolutionENT.memo = objvTeachingSolutionENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTeachingSolutionENS:源对象
 * @param objvTeachingSolutionENT:目标对象
*/
export  function vTeachingSolution_GetObjFromJsonObj(objvTeachingSolutionENS: clsvTeachingSolutionEN): clsvTeachingSolutionEN 
{
 const objvTeachingSolutionENT: clsvTeachingSolutionEN = new clsvTeachingSolutionEN();
ObjectAssign(objvTeachingSolutionENT, objvTeachingSolutionENS);
 return objvTeachingSolutionENT;
}