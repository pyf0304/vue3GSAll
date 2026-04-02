
 /**
 * 类名:clsvUsersWApi
 * 表名:vUsers(01120027)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 09:52:51
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v用户(vUsers)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年12月15日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvUsersEN } from "@/ts/L0Entity/UserManage/clsvUsersEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vUsers_Controller = "vUsersApi";
 export const vUsers_ConstructorName = "vUsers";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function vUsers_GetObjByUserIdAsync(strUserId: string): Promise<clsvUsersEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvUsersWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
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
const objvUsers = vUsers_GetObjFromJsonObj(returnObj);
return objvUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByUserIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vUsers_SortFunDefa(a:clsvUsersEN , b:clsvUsersEN): number 
{
return a.userId.localeCompare(b.userId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vUsers_SortFunDefa2Fld(a:clsvUsersEN , b:clsvUsersEN): number 
{
if (a.userName == b.userName) return a.userStateId.localeCompare(b.userStateId);
else return a.userName.localeCompare(b.userName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vUsers_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvUsersEN.con_UserId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvUsersEN.con_UserName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.userName == null) return -1;
if (b.userName == null) return 1;
return a.userName.localeCompare(b.userName);
}
case clsvUsersEN.con_UserStateId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsvUsersEN.con_UserStateName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.userStateName == null) return -1;
if (b.userStateName == null) return 1;
return a.userStateName.localeCompare(b.userStateName);
}
case clsvUsersEN.con_Password:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.password == null) return -1;
if (b.password == null) return 1;
return a.password.localeCompare(b.password);
}
case clsvUsersEN.con_IsGpUser:
return (a: clsvUsersEN) => {
if (a.isGpUser == true) return 1;
else return -1
}
case clsvUsersEN.con_BeginYearMonth:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.beginYearMonth == null) return -1;
if (b.beginYearMonth == null) return 1;
return a.beginYearMonth.localeCompare(b.beginYearMonth);
}
case clsvUsersEN.con_EndYearMonth:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.endYearMonth == null) return -1;
if (b.endYearMonth == null) return 1;
return a.endYearMonth.localeCompare(b.endYearMonth);
}
case clsvUsersEN.con_IdGradeBase:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsvUsersEN.con_GradeBaseName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.gradeBaseName == null) return -1;
if (b.gradeBaseName == null) return 1;
return a.gradeBaseName.localeCompare(b.gradeBaseName);
}
case clsvUsersEN.con_IdXzCollege:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvUsersEN.con_CollegeId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.collegeId == null) return -1;
if (b.collegeId == null) return 1;
return a.collegeId.localeCompare(b.collegeId);
}
case clsvUsersEN.con_CollegeName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvUsersEN.con_CollegeNameA:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.collegeNameA == null) return -1;
if (b.collegeNameA == null) return 1;
return a.collegeNameA.localeCompare(b.collegeNameA);
}
case clsvUsersEN.con_IdXzMajor:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvUsersEN.con_MajorName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvUsersEN.con_IsLeaved:
return (a: clsvUsersEN) => {
if (a.isLeaved == true) return 1;
else return -1
}
case clsvUsersEN.con_StuIdTeacherId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.stuIdTeacherId == null) return -1;
if (b.stuIdTeacherId == null) return 1;
return a.stuIdTeacherId.localeCompare(b.stuIdTeacherId);
}
case clsvUsersEN.con_IdentityId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return a.identityId.localeCompare(b.identityId);
}
case clsvUsersEN.con_IdentityDesc:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.identityDesc == null) return -1;
if (b.identityDesc == null) return 1;
return a.identityDesc.localeCompare(b.identityDesc);
}
case clsvUsersEN.con_AuditDate:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.auditDate == null) return -1;
if (b.auditDate == null) return 1;
return a.auditDate.localeCompare(b.auditDate);
}
case clsvUsersEN.con_AuditUser:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.auditUser == null) return -1;
if (b.auditUser == null) return 1;
return a.auditUser.localeCompare(b.auditUser);
}
case clsvUsersEN.con_IsAudit:
return (a: clsvUsersEN) => {
if (a.isAudit == true) return 1;
else return -1
}
case clsvUsersEN.con_IsRegister:
return (a: clsvUsersEN) => {
if (a.isRegister == true) return 1;
else return -1
}
case clsvUsersEN.con_RegisterDate:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.registerDate == null) return -1;
if (b.registerDate == null) return 1;
return a.registerDate.localeCompare(b.registerDate);
}
case clsvUsersEN.con_MobilePhone:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.mobilePhone == null) return -1;
if (b.mobilePhone == null) return 1;
return a.mobilePhone.localeCompare(b.mobilePhone);
}
case clsvUsersEN.con_UpdDate:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvUsersEN.con_UpdUser:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvUsersEN.con_Memo:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvUsersEN.con_UserNameWithUserId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return a.userNameWithUserId.localeCompare(b.userNameWithUserId);
}
case clsvUsersEN.con_OpenId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.openId == null) return -1;
if (b.openId == null) return 1;
return a.openId.localeCompare(b.openId);
}
case clsvUsersEN.con_AvatarsPicture:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.avatarsPicture == null) return -1;
if (b.avatarsPicture == null) return 1;
return a.avatarsPicture.localeCompare(b.avatarsPicture);
}
case clsvUsersEN.con_Email:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsvUsersEN.con_PhoneNumber:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsvUsersEN.con_HeadPic:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (a.headPic == null) return -1;
if (b.headPic == null) return 1;
return a.headPic.localeCompare(b.headPic);
}
case clsvUsersEN.con_IsGSuser:
return (a: clsvUsersEN) => {
if (a.isGSuser == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vUsers]中不存在!(in ${ vUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvUsersEN.con_UserId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvUsersEN.con_UserName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.userName == null) return -1;
if (a.userName == null) return 1;
return b.userName.localeCompare(a.userName);
}
case clsvUsersEN.con_UserStateId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsvUsersEN.con_UserStateName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.userStateName == null) return -1;
if (a.userStateName == null) return 1;
return b.userStateName.localeCompare(a.userStateName);
}
case clsvUsersEN.con_Password:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.password == null) return -1;
if (a.password == null) return 1;
return b.password.localeCompare(a.password);
}
case clsvUsersEN.con_IsGpUser:
return (b: clsvUsersEN) => {
if (b.isGpUser == true) return 1;
else return -1
}
case clsvUsersEN.con_BeginYearMonth:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.beginYearMonth == null) return -1;
if (a.beginYearMonth == null) return 1;
return b.beginYearMonth.localeCompare(a.beginYearMonth);
}
case clsvUsersEN.con_EndYearMonth:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.endYearMonth == null) return -1;
if (a.endYearMonth == null) return 1;
return b.endYearMonth.localeCompare(a.endYearMonth);
}
case clsvUsersEN.con_IdGradeBase:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsvUsersEN.con_GradeBaseName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.gradeBaseName == null) return -1;
if (a.gradeBaseName == null) return 1;
return b.gradeBaseName.localeCompare(a.gradeBaseName);
}
case clsvUsersEN.con_IdXzCollege:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvUsersEN.con_CollegeId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.collegeId == null) return -1;
if (a.collegeId == null) return 1;
return b.collegeId.localeCompare(a.collegeId);
}
case clsvUsersEN.con_CollegeName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvUsersEN.con_CollegeNameA:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.collegeNameA == null) return -1;
if (a.collegeNameA == null) return 1;
return b.collegeNameA.localeCompare(a.collegeNameA);
}
case clsvUsersEN.con_IdXzMajor:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvUsersEN.con_MajorName:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvUsersEN.con_IsLeaved:
return (b: clsvUsersEN) => {
if (b.isLeaved == true) return 1;
else return -1
}
case clsvUsersEN.con_StuIdTeacherId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.stuIdTeacherId == null) return -1;
if (a.stuIdTeacherId == null) return 1;
return b.stuIdTeacherId.localeCompare(a.stuIdTeacherId);
}
case clsvUsersEN.con_IdentityId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return b.identityId.localeCompare(a.identityId);
}
case clsvUsersEN.con_IdentityDesc:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.identityDesc == null) return -1;
if (a.identityDesc == null) return 1;
return b.identityDesc.localeCompare(a.identityDesc);
}
case clsvUsersEN.con_AuditDate:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.auditDate == null) return -1;
if (a.auditDate == null) return 1;
return b.auditDate.localeCompare(a.auditDate);
}
case clsvUsersEN.con_AuditUser:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.auditUser == null) return -1;
if (a.auditUser == null) return 1;
return b.auditUser.localeCompare(a.auditUser);
}
case clsvUsersEN.con_IsAudit:
return (b: clsvUsersEN) => {
if (b.isAudit == true) return 1;
else return -1
}
case clsvUsersEN.con_IsRegister:
return (b: clsvUsersEN) => {
if (b.isRegister == true) return 1;
else return -1
}
case clsvUsersEN.con_RegisterDate:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.registerDate == null) return -1;
if (a.registerDate == null) return 1;
return b.registerDate.localeCompare(a.registerDate);
}
case clsvUsersEN.con_MobilePhone:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.mobilePhone == null) return -1;
if (a.mobilePhone == null) return 1;
return b.mobilePhone.localeCompare(a.mobilePhone);
}
case clsvUsersEN.con_UpdDate:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvUsersEN.con_UpdUser:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvUsersEN.con_Memo:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvUsersEN.con_UserNameWithUserId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
return b.userNameWithUserId.localeCompare(a.userNameWithUserId);
}
case clsvUsersEN.con_OpenId:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.openId == null) return -1;
if (a.openId == null) return 1;
return b.openId.localeCompare(a.openId);
}
case clsvUsersEN.con_AvatarsPicture:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.avatarsPicture == null) return -1;
if (a.avatarsPicture == null) return 1;
return b.avatarsPicture.localeCompare(a.avatarsPicture);
}
case clsvUsersEN.con_Email:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsvUsersEN.con_PhoneNumber:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsvUsersEN.con_HeadPic:
return (a: clsvUsersEN, b: clsvUsersEN) => {
if (b.headPic == null) return -1;
if (a.headPic == null) return 1;
return b.headPic.localeCompare(a.headPic);
}
case clsvUsersEN.con_IsGSuser:
return (b: clsvUsersEN) => {
if (b.isGSuser == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vUsers]中不存在!(in ${ vUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vUsers_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvUsersEN.con_UserId:
return (obj: clsvUsersEN) => {
return obj.userId === value;
}
case clsvUsersEN.con_UserName:
return (obj: clsvUsersEN) => {
return obj.userName === value;
}
case clsvUsersEN.con_UserStateId:
return (obj: clsvUsersEN) => {
return obj.userStateId === value;
}
case clsvUsersEN.con_UserStateName:
return (obj: clsvUsersEN) => {
return obj.userStateName === value;
}
case clsvUsersEN.con_Password:
return (obj: clsvUsersEN) => {
return obj.password === value;
}
case clsvUsersEN.con_IsGpUser:
return (obj: clsvUsersEN) => {
return obj.isGpUser === value;
}
case clsvUsersEN.con_BeginYearMonth:
return (obj: clsvUsersEN) => {
return obj.beginYearMonth === value;
}
case clsvUsersEN.con_EndYearMonth:
return (obj: clsvUsersEN) => {
return obj.endYearMonth === value;
}
case clsvUsersEN.con_IdGradeBase:
return (obj: clsvUsersEN) => {
return obj.idGradeBase === value;
}
case clsvUsersEN.con_GradeBaseName:
return (obj: clsvUsersEN) => {
return obj.gradeBaseName === value;
}
case clsvUsersEN.con_IdXzCollege:
return (obj: clsvUsersEN) => {
return obj.idXzCollege === value;
}
case clsvUsersEN.con_CollegeId:
return (obj: clsvUsersEN) => {
return obj.collegeId === value;
}
case clsvUsersEN.con_CollegeName:
return (obj: clsvUsersEN) => {
return obj.collegeName === value;
}
case clsvUsersEN.con_CollegeNameA:
return (obj: clsvUsersEN) => {
return obj.collegeNameA === value;
}
case clsvUsersEN.con_IdXzMajor:
return (obj: clsvUsersEN) => {
return obj.idXzMajor === value;
}
case clsvUsersEN.con_MajorName:
return (obj: clsvUsersEN) => {
return obj.majorName === value;
}
case clsvUsersEN.con_IsLeaved:
return (obj: clsvUsersEN) => {
return obj.isLeaved === value;
}
case clsvUsersEN.con_StuIdTeacherId:
return (obj: clsvUsersEN) => {
return obj.stuIdTeacherId === value;
}
case clsvUsersEN.con_IdentityId:
return (obj: clsvUsersEN) => {
return obj.identityId === value;
}
case clsvUsersEN.con_IdentityDesc:
return (obj: clsvUsersEN) => {
return obj.identityDesc === value;
}
case clsvUsersEN.con_AuditDate:
return (obj: clsvUsersEN) => {
return obj.auditDate === value;
}
case clsvUsersEN.con_AuditUser:
return (obj: clsvUsersEN) => {
return obj.auditUser === value;
}
case clsvUsersEN.con_IsAudit:
return (obj: clsvUsersEN) => {
return obj.isAudit === value;
}
case clsvUsersEN.con_IsRegister:
return (obj: clsvUsersEN) => {
return obj.isRegister === value;
}
case clsvUsersEN.con_RegisterDate:
return (obj: clsvUsersEN) => {
return obj.registerDate === value;
}
case clsvUsersEN.con_MobilePhone:
return (obj: clsvUsersEN) => {
return obj.mobilePhone === value;
}
case clsvUsersEN.con_UpdDate:
return (obj: clsvUsersEN) => {
return obj.updDate === value;
}
case clsvUsersEN.con_UpdUser:
return (obj: clsvUsersEN) => {
return obj.updUser === value;
}
case clsvUsersEN.con_Memo:
return (obj: clsvUsersEN) => {
return obj.memo === value;
}
case clsvUsersEN.con_UserNameWithUserId:
return (obj: clsvUsersEN) => {
return obj.userNameWithUserId === value;
}
case clsvUsersEN.con_OpenId:
return (obj: clsvUsersEN) => {
return obj.openId === value;
}
case clsvUsersEN.con_AvatarsPicture:
return (obj: clsvUsersEN) => {
return obj.avatarsPicture === value;
}
case clsvUsersEN.con_Email:
return (obj: clsvUsersEN) => {
return obj.email === value;
}
case clsvUsersEN.con_PhoneNumber:
return (obj: clsvUsersEN) => {
return obj.phoneNumber === value;
}
case clsvUsersEN.con_HeadPic:
return (obj: clsvUsersEN) => {
return obj.headPic === value;
}
case clsvUsersEN.con_IsGSuser:
return (obj: clsvUsersEN) => {
return obj.isGSuser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vUsers]中不存在!(in ${ vUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vUsers__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vUsers_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_GetFirstObjAsync(strWhereCond: string): Promise<clsvUsersEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const objvUsers = vUsers_GetObjFromJsonObj(returnObj);
return objvUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvUsersEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export  async function vUsers_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsvUsersEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByUserIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vUsers_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvUsersEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvUsersEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvUsersEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvUsersEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vUsers_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  async function vUsers_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vUsers_ConstructorName, strThisFuncName);
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
export  function vUsers_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vUsers_GetJSONStrByObj (pobjvUsersEN: clsvUsersEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvUsersEN);
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
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vUsers_GetObjLstByJSONStr (strJSON: string): Array<clsvUsersEN>
{
let arrvUsersObjLst = new Array<clsvUsersEN>();
if (strJSON === "")
{
return arrvUsersObjLst;
}
try
{
arrvUsersObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvUsersObjLst;
}
return arrvUsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvUsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vUsers_GetObjLstByJSONObjLst (arrvUsersObjLstS: Array<clsvUsersEN>): Array<clsvUsersEN>
{
const arrvUsersObjLst = new Array<clsvUsersEN>();
for (const objInFor of arrvUsersObjLstS) {
const obj1 = vUsers_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvUsersObjLst.push(obj1);
}
return arrvUsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vUsers_GetObjByJSONStr (strJSON: string): clsvUsersEN
{
let pobjvUsersEN = new clsvUsersEN();
if (strJSON === "")
{
return pobjvUsersEN;
}
try
{
pobjvUsersEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvUsersEN;
}
return pobjvUsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vUsers_GetCombineCondition(objvUsersCond: clsvUsersEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UserId, objvUsersCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UserName, objvUsersCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UserStateId, objvUsersCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UserStateName) == true)
{
const strComparisonOpUserStateName:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UserStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UserStateName, objvUsersCond.userStateName, strComparisonOpUserStateName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_Password) == true)
{
const strComparisonOpPassword:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_Password];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_Password, objvUsersCond.password, strComparisonOpPassword);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IsGpUser) == true)
{
if (objvUsersCond.isGpUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvUsersEN.con_IsGpUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvUsersEN.con_IsGpUser);
}
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_BeginYearMonth) == true)
{
const strComparisonOpBeginYearMonth:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_BeginYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_BeginYearMonth, objvUsersCond.beginYearMonth, strComparisonOpBeginYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_EndYearMonth) == true)
{
const strComparisonOpEndYearMonth:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_EndYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_EndYearMonth, objvUsersCond.endYearMonth, strComparisonOpEndYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_IdGradeBase, objvUsersCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_GradeBaseName) == true)
{
const strComparisonOpGradeBaseName:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_GradeBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_GradeBaseName, objvUsersCond.gradeBaseName, strComparisonOpGradeBaseName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_IdXzCollege, objvUsersCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_CollegeId, objvUsersCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_CollegeName, objvUsersCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_CollegeNameA) == true)
{
const strComparisonOpCollegeNameA:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_CollegeNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_CollegeNameA, objvUsersCond.collegeNameA, strComparisonOpCollegeNameA);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_IdXzMajor, objvUsersCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_MajorName, objvUsersCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IsLeaved) == true)
{
if (objvUsersCond.isLeaved == true)
{
strWhereCond += Format(" And {0} = '1'", clsvUsersEN.con_IsLeaved);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvUsersEN.con_IsLeaved);
}
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_StuIdTeacherId) == true)
{
const strComparisonOpStuIdTeacherId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_StuIdTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_StuIdTeacherId, objvUsersCond.stuIdTeacherId, strComparisonOpStuIdTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_IdentityId, objvUsersCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IdentityDesc) == true)
{
const strComparisonOpIdentityDesc:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_IdentityDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_IdentityDesc, objvUsersCond.identityDesc, strComparisonOpIdentityDesc);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_AuditDate) == true)
{
const strComparisonOpAuditDate:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_AuditDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_AuditDate, objvUsersCond.auditDate, strComparisonOpAuditDate);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_AuditUser) == true)
{
const strComparisonOpAuditUser:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_AuditUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_AuditUser, objvUsersCond.auditUser, strComparisonOpAuditUser);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IsAudit) == true)
{
if (objvUsersCond.isAudit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvUsersEN.con_IsAudit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvUsersEN.con_IsAudit);
}
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IsRegister) == true)
{
if (objvUsersCond.isRegister == true)
{
strWhereCond += Format(" And {0} = '1'", clsvUsersEN.con_IsRegister);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvUsersEN.con_IsRegister);
}
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_RegisterDate) == true)
{
const strComparisonOpRegisterDate:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_RegisterDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_RegisterDate, objvUsersCond.registerDate, strComparisonOpRegisterDate);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_MobilePhone) == true)
{
const strComparisonOpMobilePhone:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_MobilePhone];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_MobilePhone, objvUsersCond.mobilePhone, strComparisonOpMobilePhone);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UpdDate, objvUsersCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UpdUser, objvUsersCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_Memo, objvUsersCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_UserNameWithUserId) == true)
{
const strComparisonOpUserNameWithUserId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_UserNameWithUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_UserNameWithUserId, objvUsersCond.userNameWithUserId, strComparisonOpUserNameWithUserId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_OpenId) == true)
{
const strComparisonOpOpenId:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_OpenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_OpenId, objvUsersCond.openId, strComparisonOpOpenId);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_AvatarsPicture) == true)
{
const strComparisonOpAvatarsPicture:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_AvatarsPicture];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_AvatarsPicture, objvUsersCond.avatarsPicture, strComparisonOpAvatarsPicture);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_Email) == true)
{
const strComparisonOpEmail:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_Email, objvUsersCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_PhoneNumber, objvUsersCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_HeadPic) == true)
{
const strComparisonOpHeadPic:string = objvUsersCond.dicFldComparisonOp[clsvUsersEN.con_HeadPic];
strWhereCond += Format(" And {0} {2} '{1}'", clsvUsersEN.con_HeadPic, objvUsersCond.headPic, strComparisonOpHeadPic);
}
if (Object.prototype.hasOwnProperty.call(objvUsersCond.dicFldComparisonOp, clsvUsersEN.con_IsGSuser) == true)
{
if (objvUsersCond.isGSuser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvUsersEN.con_IsGSuser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvUsersEN.con_IsGSuser);
}
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvUsersENS:源对象
 * @param objvUsersENT:目标对象
*/
export  function vUsers_CopyObjTo(objvUsersENS: clsvUsersEN , objvUsersENT: clsvUsersEN ): void 
{
objvUsersENT.userId = objvUsersENS.userId; //用户ID
objvUsersENT.userName = objvUsersENS.userName; //用户名
objvUsersENT.userStateId = objvUsersENS.userStateId; //用户状态Id
objvUsersENT.userStateName = objvUsersENS.userStateName; //用户状态名
objvUsersENT.password = objvUsersENS.password; //口令
objvUsersENT.isGpUser = objvUsersENS.isGpUser; //是否Gp用户
objvUsersENT.beginYearMonth = objvUsersENS.beginYearMonth; //开始年月
objvUsersENT.endYearMonth = objvUsersENS.endYearMonth; //结束年月
objvUsersENT.idGradeBase = objvUsersENS.idGradeBase; //年级流水号
objvUsersENT.gradeBaseName = objvUsersENS.gradeBaseName; //年级名称
objvUsersENT.idXzCollege = objvUsersENS.idXzCollege; //学院流水号
objvUsersENT.collegeId = objvUsersENS.collegeId; //学院ID
objvUsersENT.collegeName = objvUsersENS.collegeName; //学院名称
objvUsersENT.collegeNameA = objvUsersENS.collegeNameA; //学院名称简写
objvUsersENT.idXzMajor = objvUsersENS.idXzMajor; //专业流水号
objvUsersENT.majorName = objvUsersENS.majorName; //专业名称
objvUsersENT.isLeaved = objvUsersENS.isLeaved; //是否离开
objvUsersENT.stuIdTeacherId = objvUsersENS.stuIdTeacherId; //学工号
objvUsersENT.identityId = objvUsersENS.identityId; //身份Id
objvUsersENT.identityDesc = objvUsersENS.identityDesc; //身份描述
objvUsersENT.auditDate = objvUsersENS.auditDate; //AuditDate
objvUsersENT.auditUser = objvUsersENS.auditUser; //AuditUser
objvUsersENT.isAudit = objvUsersENS.isAudit; //是否审核
objvUsersENT.isRegister = objvUsersENS.isRegister; //IsRegister
objvUsersENT.registerDate = objvUsersENS.registerDate; //RegisterDate
objvUsersENT.mobilePhone = objvUsersENS.mobilePhone; //手机
objvUsersENT.updDate = objvUsersENS.updDate; //修改日期
objvUsersENT.updUser = objvUsersENS.updUser; //修改人
objvUsersENT.memo = objvUsersENS.memo; //备注
objvUsersENT.userNameWithUserId = objvUsersENS.userNameWithUserId; //UserNameWithUserId
objvUsersENT.openId = objvUsersENS.openId; //微信OpenId
objvUsersENT.avatarsPicture = objvUsersENS.avatarsPicture; //虚拟头像
objvUsersENT.email = objvUsersENS.email; //电子邮箱
objvUsersENT.phoneNumber = objvUsersENS.phoneNumber; //电话
objvUsersENT.headPic = objvUsersENS.headPic; //头像
objvUsersENT.isGSuser = objvUsersENS.isGSuser; //是否GS用户
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvUsersENS:源对象
 * @param objvUsersENT:目标对象
*/
export  function vUsers_GetObjFromJsonObj(objvUsersENS: clsvUsersEN): clsvUsersEN 
{
 const objvUsersENT: clsvUsersEN = new clsvUsersEN();
ObjectAssign(objvUsersENT, objvUsersENS);
 return objvUsersENT;
}