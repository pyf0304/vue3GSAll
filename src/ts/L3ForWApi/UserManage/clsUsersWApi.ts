
 /**
 * 类名:clsUsersWApi
 * 表名:Users(01120034)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:50
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
 * 用户(Users)
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
import { clsUsersEN } from "@/ts/L0Entity/UserManage/clsUsersEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const users_Controller = "UsersApi";
 export const users_ConstructorName = "users";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function Users_GetObjByUserIdAsync(strUserId: string): Promise<clsUsersEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsUsersWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const objUsers = Users_GetObjFromJsonObj(returnObj);
return objUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function Users_GetObjByUserIdCache(strUserId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByUserIdCache";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsUsersWApi.GetObjByUserIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrUsersObjLstCache = await Users_GetObjLstCache();
try
{
const arrUsersSel = arrUsersObjLstCache.filter(x => 
 x.userId == strUserId );
let objUsers: clsUsersEN;
if (arrUsersSel.length > 0)
{
objUsers = arrUsersSel[0];
return objUsers;
}
else
{
if (bolTryAsyncOnce == true)
{
const objUsersConst = await Users_GetObjByUserIdAsync(strUserId);
if (objUsersConst != null)
{
Users_ReFreshThisCache();
return objUsersConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserId, users_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function Users_GetObjByUserIdlocalStorage(strUserId: string) {
const strThisFuncName = "GetObjByUserIdlocalStorage";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsUsersWApi.GetObjByUserIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsUsersEN._CurrTabName, strUserId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objUsersCache: clsUsersEN = JSON.parse(strTempObj);
return objUsersCache;
}
try
{
const objUsers = await Users_GetObjByUserIdAsync(strUserId);
if (objUsers != null)
{
localStorage.setItem(strKey, JSON.stringify(objUsers));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objUsers;
}
return objUsers;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strUserId, users_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objUsers:所给的对象
 * @returns 对象
*/
export  async function Users_UpdateObjInLstCache(objUsers: clsUsersEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrUsersObjLstCache = await Users_GetObjLstCache();
const obj = arrUsersObjLstCache.find(x => 
x.userId == objUsers.userId);
if (obj != null)
{
objUsers.userId = obj.userId;
ObjectAssign( obj, objUsers);
}
else
{
arrUsersObjLstCache.push(objUsers);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, users_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function Users_GetNameByUserIdCache(strUserId: string) {

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsUsersWApi.GetNameByUserIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrUsersObjLstCache = await Users_GetObjLstCache();
if (arrUsersObjLstCache == null) return "";
try
{
const arrUsersSel = arrUsersObjLstCache.filter(x => 
 x.userId == strUserId );
let objUsers: clsUsersEN;
if (arrUsersSel.length > 0)
{
objUsers = arrUsersSel[0];
return objUsers.userName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strUserId);
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
 * @returns 返回一个输出字段值
*/
export  async function Users_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsUsersEN.con_UserId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsUsersEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsUsersEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strUserId = strInValue;
if (IsNullOrEmpty(strUserId) == true)
{
return "";
}
const objUsers = await Users_GetObjByUserIdCache(strUserId );
if (objUsers == null) return "";
if (objUsers.GetFldValue(strOutFldName) == null) return "";
return objUsers.GetFldValue(strOutFldName).toString();
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
export  function Users_SortFunDefa(a:clsUsersEN , b:clsUsersEN): number 
{
return a.userId.localeCompare(b.userId);
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
export  function Users_SortFunDefa2Fld(a:clsUsersEN , b:clsUsersEN): number 
{
if (a.userName == b.userName) return a.departmentId.localeCompare(b.departmentId);
else return a.userName.localeCompare(b.userName);
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
export  function Users_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsUsersEN.con_UserId:
return (a: clsUsersEN, b: clsUsersEN) => {
return a.userId.localeCompare(b.userId);
}
case clsUsersEN.con_UserName:
return (a: clsUsersEN, b: clsUsersEN) => {
return a.userName.localeCompare(b.userName);
}
case clsUsersEN.con_DepartmentId:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.departmentId == null) return -1;
if (b.departmentId == null) return 1;
return a.departmentId.localeCompare(b.departmentId);
}
case clsUsersEN.con_UserStateId:
return (a: clsUsersEN, b: clsUsersEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsUsersEN.con_Password:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.password == null) return -1;
if (b.password == null) return 1;
return a.password.localeCompare(b.password);
}
case clsUsersEN.con_IsGpUser:
return (a: clsUsersEN) => {
if (a.isGpUser == true) return 1;
else return -1
}
case clsUsersEN.con_IdSchool:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsUsersEN.con_BeginYearMonth:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.beginYearMonth == null) return -1;
if (b.beginYearMonth == null) return 1;
return a.beginYearMonth.localeCompare(b.beginYearMonth);
}
case clsUsersEN.con_EndYearMonth:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.endYearMonth == null) return -1;
if (b.endYearMonth == null) return 1;
return a.endYearMonth.localeCompare(b.endYearMonth);
}
case clsUsersEN.con_IdGradeBase:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsUsersEN.con_IdGrade:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.idGrade == null) return -1;
if (b.idGrade == null) return 1;
return a.idGrade.localeCompare(b.idGrade);
}
case clsUsersEN.con_IdXzCollege:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsUsersEN.con_IdXzMajor:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsUsersEN.con_IsLeaved:
return (a: clsUsersEN) => {
if (a.isLeaved == true) return 1;
else return -1
}
case clsUsersEN.con_StuIdTeacherId:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.stuIdTeacherId == null) return -1;
if (b.stuIdTeacherId == null) return 1;
return a.stuIdTeacherId.localeCompare(b.stuIdTeacherId);
}
case clsUsersEN.con_Email:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsUsersEN.con_PhoneNumber:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsUsersEN.con_AvatarsPicture:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.avatarsPicture == null) return -1;
if (b.avatarsPicture == null) return 1;
return a.avatarsPicture.localeCompare(b.avatarsPicture);
}
case clsUsersEN.con_IdentityId:
return (a: clsUsersEN, b: clsUsersEN) => {
return a.identityId.localeCompare(b.identityId);
}
case clsUsersEN.con_AuditDate:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.auditDate == null) return -1;
if (b.auditDate == null) return 1;
return a.auditDate.localeCompare(b.auditDate);
}
case clsUsersEN.con_AuditUser:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.auditUser == null) return -1;
if (b.auditUser == null) return 1;
return a.auditUser.localeCompare(b.auditUser);
}
case clsUsersEN.con_IsAudit:
return (a: clsUsersEN) => {
if (a.isAudit == true) return 1;
else return -1
}
case clsUsersEN.con_IsRegister:
return (a: clsUsersEN) => {
if (a.isRegister == true) return 1;
else return -1
}
case clsUsersEN.con_RegisterDate:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.registerDate == null) return -1;
if (b.registerDate == null) return 1;
return a.registerDate.localeCompare(b.registerDate);
}
case clsUsersEN.con_MobilePhone:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.mobilePhone == null) return -1;
if (b.mobilePhone == null) return 1;
return a.mobilePhone.localeCompare(b.mobilePhone);
}
case clsUsersEN.con_OpenId:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.openId == null) return -1;
if (b.openId == null) return 1;
return a.openId.localeCompare(b.openId);
}
case clsUsersEN.con_UpdDate:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsUsersEN.con_UpdUser:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsUsersEN.con_Memo:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsUsersEN.con_HeadPic:
return (a: clsUsersEN, b: clsUsersEN) => {
if (a.headPic == null) return -1;
if (b.headPic == null) return 1;
return a.headPic.localeCompare(b.headPic);
}
case clsUsersEN.con_IsGSuser:
return (a: clsUsersEN) => {
if (a.isGSuser == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Users]中不存在!(in ${ users_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsUsersEN.con_UserId:
return (a: clsUsersEN, b: clsUsersEN) => {
return b.userId.localeCompare(a.userId);
}
case clsUsersEN.con_UserName:
return (a: clsUsersEN, b: clsUsersEN) => {
return b.userName.localeCompare(a.userName);
}
case clsUsersEN.con_DepartmentId:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.departmentId == null) return -1;
if (a.departmentId == null) return 1;
return b.departmentId.localeCompare(a.departmentId);
}
case clsUsersEN.con_UserStateId:
return (a: clsUsersEN, b: clsUsersEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsUsersEN.con_Password:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.password == null) return -1;
if (a.password == null) return 1;
return b.password.localeCompare(a.password);
}
case clsUsersEN.con_IsGpUser:
return (b: clsUsersEN) => {
if (b.isGpUser == true) return 1;
else return -1
}
case clsUsersEN.con_IdSchool:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsUsersEN.con_BeginYearMonth:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.beginYearMonth == null) return -1;
if (a.beginYearMonth == null) return 1;
return b.beginYearMonth.localeCompare(a.beginYearMonth);
}
case clsUsersEN.con_EndYearMonth:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.endYearMonth == null) return -1;
if (a.endYearMonth == null) return 1;
return b.endYearMonth.localeCompare(a.endYearMonth);
}
case clsUsersEN.con_IdGradeBase:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsUsersEN.con_IdGrade:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.idGrade == null) return -1;
if (a.idGrade == null) return 1;
return b.idGrade.localeCompare(a.idGrade);
}
case clsUsersEN.con_IdXzCollege:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsUsersEN.con_IdXzMajor:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsUsersEN.con_IsLeaved:
return (b: clsUsersEN) => {
if (b.isLeaved == true) return 1;
else return -1
}
case clsUsersEN.con_StuIdTeacherId:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.stuIdTeacherId == null) return -1;
if (a.stuIdTeacherId == null) return 1;
return b.stuIdTeacherId.localeCompare(a.stuIdTeacherId);
}
case clsUsersEN.con_Email:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsUsersEN.con_PhoneNumber:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsUsersEN.con_AvatarsPicture:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.avatarsPicture == null) return -1;
if (a.avatarsPicture == null) return 1;
return b.avatarsPicture.localeCompare(a.avatarsPicture);
}
case clsUsersEN.con_IdentityId:
return (a: clsUsersEN, b: clsUsersEN) => {
return b.identityId.localeCompare(a.identityId);
}
case clsUsersEN.con_AuditDate:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.auditDate == null) return -1;
if (a.auditDate == null) return 1;
return b.auditDate.localeCompare(a.auditDate);
}
case clsUsersEN.con_AuditUser:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.auditUser == null) return -1;
if (a.auditUser == null) return 1;
return b.auditUser.localeCompare(a.auditUser);
}
case clsUsersEN.con_IsAudit:
return (b: clsUsersEN) => {
if (b.isAudit == true) return 1;
else return -1
}
case clsUsersEN.con_IsRegister:
return (b: clsUsersEN) => {
if (b.isRegister == true) return 1;
else return -1
}
case clsUsersEN.con_RegisterDate:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.registerDate == null) return -1;
if (a.registerDate == null) return 1;
return b.registerDate.localeCompare(a.registerDate);
}
case clsUsersEN.con_MobilePhone:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.mobilePhone == null) return -1;
if (a.mobilePhone == null) return 1;
return b.mobilePhone.localeCompare(a.mobilePhone);
}
case clsUsersEN.con_OpenId:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.openId == null) return -1;
if (a.openId == null) return 1;
return b.openId.localeCompare(a.openId);
}
case clsUsersEN.con_UpdDate:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsUsersEN.con_UpdUser:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsUsersEN.con_Memo:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsUsersEN.con_HeadPic:
return (a: clsUsersEN, b: clsUsersEN) => {
if (b.headPic == null) return -1;
if (a.headPic == null) return 1;
return b.headPic.localeCompare(a.headPic);
}
case clsUsersEN.con_IsGSuser:
return (b: clsUsersEN) => {
if (b.isGSuser == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Users]中不存在!(in ${ users_ConstructorName}.${ strThisFuncName})`;
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
export  async function Users_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsUsersEN.con_UserId:
return (obj: clsUsersEN) => {
return obj.userId === value;
}
case clsUsersEN.con_UserName:
return (obj: clsUsersEN) => {
return obj.userName === value;
}
case clsUsersEN.con_DepartmentId:
return (obj: clsUsersEN) => {
return obj.departmentId === value;
}
case clsUsersEN.con_UserStateId:
return (obj: clsUsersEN) => {
return obj.userStateId === value;
}
case clsUsersEN.con_Password:
return (obj: clsUsersEN) => {
return obj.password === value;
}
case clsUsersEN.con_IsGpUser:
return (obj: clsUsersEN) => {
return obj.isGpUser === value;
}
case clsUsersEN.con_IdSchool:
return (obj: clsUsersEN) => {
return obj.idSchool === value;
}
case clsUsersEN.con_BeginYearMonth:
return (obj: clsUsersEN) => {
return obj.beginYearMonth === value;
}
case clsUsersEN.con_EndYearMonth:
return (obj: clsUsersEN) => {
return obj.endYearMonth === value;
}
case clsUsersEN.con_IdGradeBase:
return (obj: clsUsersEN) => {
return obj.idGradeBase === value;
}
case clsUsersEN.con_IdGrade:
return (obj: clsUsersEN) => {
return obj.idGrade === value;
}
case clsUsersEN.con_IdXzCollege:
return (obj: clsUsersEN) => {
return obj.idXzCollege === value;
}
case clsUsersEN.con_IdXzMajor:
return (obj: clsUsersEN) => {
return obj.idXzMajor === value;
}
case clsUsersEN.con_IsLeaved:
return (obj: clsUsersEN) => {
return obj.isLeaved === value;
}
case clsUsersEN.con_StuIdTeacherId:
return (obj: clsUsersEN) => {
return obj.stuIdTeacherId === value;
}
case clsUsersEN.con_Email:
return (obj: clsUsersEN) => {
return obj.email === value;
}
case clsUsersEN.con_PhoneNumber:
return (obj: clsUsersEN) => {
return obj.phoneNumber === value;
}
case clsUsersEN.con_AvatarsPicture:
return (obj: clsUsersEN) => {
return obj.avatarsPicture === value;
}
case clsUsersEN.con_IdentityId:
return (obj: clsUsersEN) => {
return obj.identityId === value;
}
case clsUsersEN.con_AuditDate:
return (obj: clsUsersEN) => {
return obj.auditDate === value;
}
case clsUsersEN.con_AuditUser:
return (obj: clsUsersEN) => {
return obj.auditUser === value;
}
case clsUsersEN.con_IsAudit:
return (obj: clsUsersEN) => {
return obj.isAudit === value;
}
case clsUsersEN.con_IsRegister:
return (obj: clsUsersEN) => {
return obj.isRegister === value;
}
case clsUsersEN.con_RegisterDate:
return (obj: clsUsersEN) => {
return obj.registerDate === value;
}
case clsUsersEN.con_MobilePhone:
return (obj: clsUsersEN) => {
return obj.mobilePhone === value;
}
case clsUsersEN.con_OpenId:
return (obj: clsUsersEN) => {
return obj.openId === value;
}
case clsUsersEN.con_UpdDate:
return (obj: clsUsersEN) => {
return obj.updDate === value;
}
case clsUsersEN.con_UpdUser:
return (obj: clsUsersEN) => {
return obj.updUser === value;
}
case clsUsersEN.con_Memo:
return (obj: clsUsersEN) => {
return obj.memo === value;
}
case clsUsersEN.con_HeadPic:
return (obj: clsUsersEN) => {
return obj.headPic === value;
}
case clsUsersEN.con_IsGSuser:
return (obj: clsUsersEN) => {
return obj.isGSuser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Users]中不存在!(in ${ users_ConstructorName}.${ strThisFuncName})`;
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
 * @returns 返回一个关键字值列表
*/
export  async function Users_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsUsersEN.con_UserId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrUsers = await Users_GetObjLstCache();
if (arrUsers == null) return [];
let arrUsersSel = arrUsers;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrUsersSel = arrUsersSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrUsersSel.length == 0) return [];
return arrUsersSel.map(x=>x.userId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Users_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetFirstObjAsync(strWhereCond: string): Promise<clsUsersEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const objUsers = Users_GetObjFromJsonObj(returnObj);
return objUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsUsersEN._CurrTabName;
if (IsNullOrEmpty(clsUsersEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsUsersEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrUsersExObjLstCache: Array<clsUsersEN> = CacheHelper.Get(strKey);
const arrUsersObjLstT = Users_GetObjLstByJSONObjLst(arrUsersExObjLstCache);
return arrUsersObjLstT;
}
try
{
const arrUsersExObjLst = await Users_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrUsersExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrUsersExObjLst.length);
console.log(strInfo);
return arrUsersExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, users_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Users_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsUsersEN._CurrTabName;
if (IsNullOrEmpty(clsUsersEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsUsersEN.CacheAddiCondition);
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
const arrUsersExObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
const arrUsersObjLstT = Users_GetObjLstByJSONObjLst(arrUsersExObjLstCache);
return arrUsersObjLstT;
}
try
{
const arrUsersExObjLst = await Users_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrUsersExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrUsersExObjLst.length);
console.log(strInfo);
return arrUsersExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, users_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Users_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsUsersEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrUsersObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
return arrUsersObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function Users_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUsersEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsUsersEN._CurrTabName;
if (IsNullOrEmpty(clsUsersEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsUsersEN.CacheAddiCondition);
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
const arrUsersExObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
const arrUsersObjLstT = Users_GetObjLstByJSONObjLst(arrUsersExObjLstCache);
return arrUsersObjLstT;
}
try
{
const arrUsersExObjLst = await Users_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrUsersExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrUsersExObjLst.length);
console.log(strInfo);
return arrUsersExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, users_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Users_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsUsersEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrUsersObjLstCache: Array<clsUsersEN> = JSON.parse(strTempObjLst);
return arrUsersObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Users_GetObjLstCache(): Promise<Array<clsUsersEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrUsersObjLstCache;
switch (clsUsersEN.CacheModeId)
{
case "04"://sessionStorage
arrUsersObjLstCache = await Users_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrUsersObjLstCache = await Users_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrUsersObjLstCache = await Users_GetObjLstClientCache();
break;
default:
arrUsersObjLstCache = await Users_GetObjLstClientCache();
break;
}
return arrUsersObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Users_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrUsersObjLstCache;
switch (clsUsersEN.CacheModeId)
{
case "04"://sessionStorage
arrUsersObjLstCache = await Users_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrUsersObjLstCache = await Users_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrUsersObjLstCache = null;
break;
default:
arrUsersObjLstCache = null;
break;
}
return arrUsersObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function Users_GetSubObjLstCache(objUsersCond: clsUsersEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrUsersObjLstCache = await Users_GetObjLstCache();
let arrUsersSel = arrUsersObjLstCache;
if (objUsersCond.sfFldComparisonOp == null || objUsersCond.sfFldComparisonOp == "") return arrUsersSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objUsersCond.sfFldComparisonOp);
//console.log("clsUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objUsersCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objUsersCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrUsersSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objUsersCond), users_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsUsersEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export  async function Users_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsUsersEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param arrstrUserIdLst:关键字列表
 * @returns 对象列表
*/
export  async function Users_GetObjLstByUserIdLstCache(arrUserIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByUserIdLstCache";
try
{
const arrUsersObjLstCache = await Users_GetObjLstCache();
const arrUsersSel = arrUsersObjLstCache.filter(x => arrUserIdLst.indexOf(x.userId)>-1);
return arrUsersSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrUserIdLst.join(","), users_ConstructorName, strThisFuncName);
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
export  async function Users_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUsersEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsUsersEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsUsersEN>();
const arrUsersObjLstCache = await Users_GetObjLstCache();
if (arrUsersObjLstCache.length == 0) return arrUsersObjLstCache;
let arrUsersSel = arrUsersObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objUsersCond = new clsUsersEN();
ObjectAssign(objUsersCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsUsersWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objUsersCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrUsersSel = arrUsersSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrUsersSel.length == 0) return arrUsersSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrUsersSel = arrUsersSel.sort(Users_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrUsersSel = arrUsersSel.sort(objPagerPara.sortFun);
}
arrUsersSel = arrUsersSel.slice(intStart, intEnd);     
return arrUsersSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, users_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsUsersEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function Users_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsUsersEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsUsersEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 获取删除的结果
 **/
export  async function Users_DelRecordAsync(strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(users_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strUserId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param arrUserId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Users_DelUserssAsync(arrUserId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelUserssAsync";
const strAction = "DelUserss";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_DelUserssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelUserssByCondAsync";
const strAction = "DelUserssByCond";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Users_AddNewRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objUsersEN.userId === null || objUsersEN.userId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objUsersEN);
const strUrl = GetWebApiUrl(users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Users_AddNewRecordWithMaxIdAsync(objUsersEN: clsUsersEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objUsersEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Users_AddNewRecordWithReturnKeyAsync(objUsersEN: clsUsersEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objUsersEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Users_UpdateRecordAsync(objUsersEN: clsUsersEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objUsersEN.sfUpdFldSetStr === undefined || objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUsersEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(users_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objUsersEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Users_UpdateWithConditionAsync(objUsersEN: clsUsersEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objUsersEN.sfUpdFldSetStr === undefined || objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUsersEN.userId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(users_Controller, strAction);
objUsersEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function Users_IsExistRecordCache(objUsersCond: clsUsersEN) {
const strThisFuncName = "IsExistRecordCache";
const arrUsersObjLstCache = await Users_GetObjLstCache();
if (arrUsersObjLstCache == null) return false;
let arrUsersSel = arrUsersObjLstCache;
if (objUsersCond.sfFldComparisonOp == null || objUsersCond.sfFldComparisonOp == "") return arrUsersSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objUsersCond.sfFldComparisonOp);
//console.log("clsUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objUsersCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objUsersCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrUsersSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objUsersCond), users_ConstructorName, strThisFuncName);
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
export  async function Users_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param strUserId:所给的关键字
 * @returns 对象
*/
export  async function Users_IsExistCache(strUserId:string) {
const strThisFuncName = "IsExistCache";
const arrUsersObjLstCache = await Users_GetObjLstCache();
if (arrUsersObjLstCache == null) return false;
try
{
const arrUsersSel = arrUsersObjLstCache.filter(x => x.userId == strUserId);
if (arrUsersSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strUserId, users_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Users_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  async function Users_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
 * @param objUsersCond:条件对象
 * @returns 对象列表记录数
*/
export  async function Users_GetRecCountByCondCache(objUsersCond: clsUsersEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrUsersObjLstCache = await Users_GetObjLstCache();
if (arrUsersObjLstCache == null) return 0;
let arrUsersSel = arrUsersObjLstCache;
if (objUsersCond.sfFldComparisonOp == null || objUsersCond.sfFldComparisonOp == "") return arrUsersSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objUsersCond.sfFldComparisonOp);
//console.log("clsUsersWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objUsersCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objUsersCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrUsersSel = arrUsersSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrUsersSel = arrUsersSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrUsersSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objUsersCond), users_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function Users_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(users_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_ConstructorName, strThisFuncName);
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
export  function Users_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function Users_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsUsersEN._CurrTabName;
switch (clsUsersEN.CacheModeId)
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
export  function Users_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsUsersEN._CurrTabName;
switch (clsUsersEN.CacheModeId)
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

*/
export  async function Users_Cache(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await Users_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsUsersEN.con_UserId, clsUsersEN.con_UserName, "用户");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Users_CheckPropertyNew(pobjUsersEN: clsUsersEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjUsersEN.userName) === true )
{
 throw new Error("(errid:Watl000411)字段[用户名]不能为空(In 用户)!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.userStateId) === true )
{
 throw new Error("(errid:Watl000411)字段[用户状态Id]不能为空(In 用户)!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.identityId) === true 
 || pobjUsersEN.identityId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[身份Id]不能为空(In 用户)!(clsUsersBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUsersEN.userId) == false && GetStrLen(pobjUsersEN.userId) > 18)
{
 throw new Error("(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户(Users))!值:$(pobjUsersEN.userId)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.userName) == false && GetStrLen(pobjUsersEN.userName) > 30)
{
 throw new Error("(errid:Watl000413)字段[用户名(userName)]的长度不能超过30(In 用户(Users))!值:$(pobjUsersEN.userName)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.departmentId) == false && GetStrLen(pobjUsersEN.departmentId) > 8)
{
 throw new Error("(errid:Watl000413)字段[部门Id(departmentId)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.departmentId)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.userStateId) == false && GetStrLen(pobjUsersEN.userStateId) > 2)
{
 throw new Error("(errid:Watl000413)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户(Users))!值:$(pobjUsersEN.userStateId)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.password) == false && GetStrLen(pobjUsersEN.password) > 20)
{
 throw new Error("(errid:Watl000413)字段[口令(password)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.password)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.idSchool) == false && GetStrLen(pobjUsersEN.idSchool) > 4)
{
 throw new Error("(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idSchool)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.beginYearMonth) == false && GetStrLen(pobjUsersEN.beginYearMonth) > 8)
{
 throw new Error("(errid:Watl000413)字段[开始年月(beginYearMonth)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.beginYearMonth)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.endYearMonth) == false && GetStrLen(pobjUsersEN.endYearMonth) > 8)
{
 throw new Error("(errid:Watl000413)字段[结束年月(endYearMonth)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.endYearMonth)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.idGradeBase) == false && GetStrLen(pobjUsersEN.idGradeBase) > 4)
{
 throw new Error("(errid:Watl000413)字段[年级流水号(idGradeBase)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idGradeBase)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.idGrade) == false && GetStrLen(pobjUsersEN.idGrade) > 4)
{
 throw new Error("(errid:Watl000413)字段[年级流水号(idGrade)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idGrade)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzCollege) == false && GetStrLen(pobjUsersEN.idXzCollege) > 4)
{
 throw new Error("(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idXzCollege)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzMajor) == false && GetStrLen(pobjUsersEN.idXzMajor) > 8)
{
 throw new Error("(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.idXzMajor)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.stuIdTeacherId) == false && GetStrLen(pobjUsersEN.stuIdTeacherId) > 20)
{
 throw new Error("(errid:Watl000413)字段[学工号(stuIdTeacherId)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.stuIdTeacherId)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.email) == false && GetStrLen(pobjUsersEN.email) > 100)
{
 throw new Error("(errid:Watl000413)字段[电子邮箱(email)]的长度不能超过100(In 用户(Users))!值:$(pobjUsersEN.email)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.phoneNumber) == false && GetStrLen(pobjUsersEN.phoneNumber) > 15)
{
 throw new Error("(errid:Watl000413)字段[电话(phoneNumber)]的长度不能超过15(In 用户(Users))!值:$(pobjUsersEN.phoneNumber)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.avatarsPicture) == false && GetStrLen(pobjUsersEN.avatarsPicture) > 100)
{
 throw new Error("(errid:Watl000413)字段[虚拟头像(avatarsPicture)]的长度不能超过100(In 用户(Users))!值:$(pobjUsersEN.avatarsPicture)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.identityId) == false && GetStrLen(pobjUsersEN.identityId) > 2)
{
 throw new Error("(errid:Watl000413)字段[身份Id(identityId)]的长度不能超过2(In 用户(Users))!值:$(pobjUsersEN.identityId)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.auditDate) == false && GetStrLen(pobjUsersEN.auditDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[AuditDate(auditDate)]的长度不能超过14(In 用户(Users))!值:$(pobjUsersEN.auditDate)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.auditUser) == false && GetStrLen(pobjUsersEN.auditUser) > 18)
{
 throw new Error("(errid:Watl000413)字段[AuditUser(auditUser)]的长度不能超过18(In 用户(Users))!值:$(pobjUsersEN.auditUser)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.registerDate) == false && GetStrLen(pobjUsersEN.registerDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[RegisterDate(registerDate)]的长度不能超过14(In 用户(Users))!值:$(pobjUsersEN.registerDate)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.mobilePhone) == false && GetStrLen(pobjUsersEN.mobilePhone) > 20)
{
 throw new Error("(errid:Watl000413)字段[手机(mobilePhone)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.mobilePhone)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.openId) == false && GetStrLen(pobjUsersEN.openId) > 50)
{
 throw new Error("(errid:Watl000413)字段[微信OpenId(openId)]的长度不能超过50(In 用户(Users))!值:$(pobjUsersEN.openId)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.updDate) == false && GetStrLen(pobjUsersEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.updDate)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.updUser) == false && GetStrLen(pobjUsersEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.updUser)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.memo) == false && GetStrLen(pobjUsersEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户(Users))!值:$(pobjUsersEN.memo)(clsUsersBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjUsersEN.headPic) == false && GetStrLen(pobjUsersEN.headPic) > 500)
{
 throw new Error("(errid:Watl000413)字段[头像(headPic)]的长度不能超过500(In 用户(Users))!值:$(pobjUsersEN.headPic)(clsUsersBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjUsersEN.userId) == false && undefined !== pobjUsersEN.userId && tzDataType.isString(pobjUsersEN.userId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjUsersEN.userId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.userName) == false && undefined !== pobjUsersEN.userName && tzDataType.isString(pobjUsersEN.userName) === false)
{
 throw new Error("(errid:Watl000414)字段[用户名(userName)]的值:[$(pobjUsersEN.userName)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.departmentId) == false && undefined !== pobjUsersEN.departmentId && tzDataType.isString(pobjUsersEN.departmentId) === false)
{
 throw new Error("(errid:Watl000414)字段[部门Id(departmentId)]的值:[$(pobjUsersEN.departmentId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.userStateId) == false && undefined !== pobjUsersEN.userStateId && tzDataType.isString(pobjUsersEN.userStateId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户状态Id(userStateId)]的值:[$(pobjUsersEN.userStateId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.password) == false && undefined !== pobjUsersEN.password && tzDataType.isString(pobjUsersEN.password) === false)
{
 throw new Error("(errid:Watl000414)字段[口令(password)]的值:[$(pobjUsersEN.password)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (null != pobjUsersEN.isGpUser && undefined !== pobjUsersEN.isGpUser && tzDataType.isBoolean(pobjUsersEN.isGpUser) === false)
{
 throw new Error("(errid:Watl000414)字段[是否Gp用户(isGpUser)]的值:[$(pobjUsersEN.isGpUser)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.idSchool) == false && undefined !== pobjUsersEN.idSchool && tzDataType.isString(pobjUsersEN.idSchool) === false)
{
 throw new Error("(errid:Watl000414)字段[学校流水号(idSchool)]的值:[$(pobjUsersEN.idSchool)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.beginYearMonth) == false && undefined !== pobjUsersEN.beginYearMonth && tzDataType.isString(pobjUsersEN.beginYearMonth) === false)
{
 throw new Error("(errid:Watl000414)字段[开始年月(beginYearMonth)]的值:[$(pobjUsersEN.beginYearMonth)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.endYearMonth) == false && undefined !== pobjUsersEN.endYearMonth && tzDataType.isString(pobjUsersEN.endYearMonth) === false)
{
 throw new Error("(errid:Watl000414)字段[结束年月(endYearMonth)]的值:[$(pobjUsersEN.endYearMonth)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.idGradeBase) == false && undefined !== pobjUsersEN.idGradeBase && tzDataType.isString(pobjUsersEN.idGradeBase) === false)
{
 throw new Error("(errid:Watl000414)字段[年级流水号(idGradeBase)]的值:[$(pobjUsersEN.idGradeBase)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.idGrade) == false && undefined !== pobjUsersEN.idGrade && tzDataType.isString(pobjUsersEN.idGrade) === false)
{
 throw new Error("(errid:Watl000414)字段[年级流水号(idGrade)]的值:[$(pobjUsersEN.idGrade)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzCollege) == false && undefined !== pobjUsersEN.idXzCollege && tzDataType.isString(pobjUsersEN.idXzCollege) === false)
{
 throw new Error("(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[$(pobjUsersEN.idXzCollege)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzMajor) == false && undefined !== pobjUsersEN.idXzMajor && tzDataType.isString(pobjUsersEN.idXzMajor) === false)
{
 throw new Error("(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjUsersEN.idXzMajor)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (null != pobjUsersEN.isLeaved && undefined !== pobjUsersEN.isLeaved && tzDataType.isBoolean(pobjUsersEN.isLeaved) === false)
{
 throw new Error("(errid:Watl000414)字段[是否离开(isLeaved)]的值:[$(pobjUsersEN.isLeaved)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.stuIdTeacherId) == false && undefined !== pobjUsersEN.stuIdTeacherId && tzDataType.isString(pobjUsersEN.stuIdTeacherId) === false)
{
 throw new Error("(errid:Watl000414)字段[学工号(stuIdTeacherId)]的值:[$(pobjUsersEN.stuIdTeacherId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.email) == false && undefined !== pobjUsersEN.email && tzDataType.isString(pobjUsersEN.email) === false)
{
 throw new Error("(errid:Watl000414)字段[电子邮箱(email)]的值:[$(pobjUsersEN.email)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.phoneNumber) == false && undefined !== pobjUsersEN.phoneNumber && tzDataType.isString(pobjUsersEN.phoneNumber) === false)
{
 throw new Error("(errid:Watl000414)字段[电话(phoneNumber)]的值:[$(pobjUsersEN.phoneNumber)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.avatarsPicture) == false && undefined !== pobjUsersEN.avatarsPicture && tzDataType.isString(pobjUsersEN.avatarsPicture) === false)
{
 throw new Error("(errid:Watl000414)字段[虚拟头像(avatarsPicture)]的值:[$(pobjUsersEN.avatarsPicture)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.identityId) == false && undefined !== pobjUsersEN.identityId && tzDataType.isString(pobjUsersEN.identityId) === false)
{
 throw new Error("(errid:Watl000414)字段[身份Id(identityId)]的值:[$(pobjUsersEN.identityId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.auditDate) == false && undefined !== pobjUsersEN.auditDate && tzDataType.isString(pobjUsersEN.auditDate) === false)
{
 throw new Error("(errid:Watl000414)字段[AuditDate(auditDate)]的值:[$(pobjUsersEN.auditDate)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.auditUser) == false && undefined !== pobjUsersEN.auditUser && tzDataType.isString(pobjUsersEN.auditUser) === false)
{
 throw new Error("(errid:Watl000414)字段[AuditUser(auditUser)]的值:[$(pobjUsersEN.auditUser)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (null != pobjUsersEN.isAudit && undefined !== pobjUsersEN.isAudit && tzDataType.isBoolean(pobjUsersEN.isAudit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否审核(isAudit)]的值:[$(pobjUsersEN.isAudit)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (null != pobjUsersEN.isRegister && undefined !== pobjUsersEN.isRegister && tzDataType.isBoolean(pobjUsersEN.isRegister) === false)
{
 throw new Error("(errid:Watl000414)字段[IsRegister(isRegister)]的值:[$(pobjUsersEN.isRegister)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.registerDate) == false && undefined !== pobjUsersEN.registerDate && tzDataType.isString(pobjUsersEN.registerDate) === false)
{
 throw new Error("(errid:Watl000414)字段[RegisterDate(registerDate)]的值:[$(pobjUsersEN.registerDate)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.mobilePhone) == false && undefined !== pobjUsersEN.mobilePhone && tzDataType.isString(pobjUsersEN.mobilePhone) === false)
{
 throw new Error("(errid:Watl000414)字段[手机(mobilePhone)]的值:[$(pobjUsersEN.mobilePhone)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.openId) == false && undefined !== pobjUsersEN.openId && tzDataType.isString(pobjUsersEN.openId) === false)
{
 throw new Error("(errid:Watl000414)字段[微信OpenId(openId)]的值:[$(pobjUsersEN.openId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.updDate) == false && undefined !== pobjUsersEN.updDate && tzDataType.isString(pobjUsersEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjUsersEN.updDate)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.updUser) == false && undefined !== pobjUsersEN.updUser && tzDataType.isString(pobjUsersEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjUsersEN.updUser)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.memo) == false && undefined !== pobjUsersEN.memo && tzDataType.isString(pobjUsersEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjUsersEN.memo)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjUsersEN.headPic) == false && undefined !== pobjUsersEN.headPic && tzDataType.isString(pobjUsersEN.headPic) === false)
{
 throw new Error("(errid:Watl000414)字段[头像(headPic)]的值:[$(pobjUsersEN.headPic)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
if (null != pobjUsersEN.isGSuser && undefined !== pobjUsersEN.isGSuser && tzDataType.isBoolean(pobjUsersEN.isGSuser) === false)
{
 throw new Error("(errid:Watl000414)字段[是否GS用户(isGSuser)]的值:[$(pobjUsersEN.isGSuser)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Users_CheckProperty4Update(pobjUsersEN: clsUsersEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUsersEN.userId) == false && GetStrLen(pobjUsersEN.userId) > 18)
{
 throw new Error("(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户(Users))!值:$(pobjUsersEN.userId)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.userName) == false && GetStrLen(pobjUsersEN.userName) > 30)
{
 throw new Error("(errid:Watl000416)字段[用户名(userName)]的长度不能超过30(In 用户(Users))!值:$(pobjUsersEN.userName)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.departmentId) == false && GetStrLen(pobjUsersEN.departmentId) > 8)
{
 throw new Error("(errid:Watl000416)字段[部门Id(departmentId)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.departmentId)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.userStateId) == false && GetStrLen(pobjUsersEN.userStateId) > 2)
{
 throw new Error("(errid:Watl000416)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户(Users))!值:$(pobjUsersEN.userStateId)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.password) == false && GetStrLen(pobjUsersEN.password) > 20)
{
 throw new Error("(errid:Watl000416)字段[口令(password)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.password)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idSchool) == false && GetStrLen(pobjUsersEN.idSchool) > 4)
{
 throw new Error("(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idSchool)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.beginYearMonth) == false && GetStrLen(pobjUsersEN.beginYearMonth) > 8)
{
 throw new Error("(errid:Watl000416)字段[开始年月(beginYearMonth)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.beginYearMonth)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.endYearMonth) == false && GetStrLen(pobjUsersEN.endYearMonth) > 8)
{
 throw new Error("(errid:Watl000416)字段[结束年月(endYearMonth)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.endYearMonth)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idGradeBase) == false && GetStrLen(pobjUsersEN.idGradeBase) > 4)
{
 throw new Error("(errid:Watl000416)字段[年级流水号(idGradeBase)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idGradeBase)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idGrade) == false && GetStrLen(pobjUsersEN.idGrade) > 4)
{
 throw new Error("(errid:Watl000416)字段[年级流水号(idGrade)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idGrade)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzCollege) == false && GetStrLen(pobjUsersEN.idXzCollege) > 4)
{
 throw new Error("(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 用户(Users))!值:$(pobjUsersEN.idXzCollege)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzMajor) == false && GetStrLen(pobjUsersEN.idXzMajor) > 8)
{
 throw new Error("(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 用户(Users))!值:$(pobjUsersEN.idXzMajor)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.stuIdTeacherId) == false && GetStrLen(pobjUsersEN.stuIdTeacherId) > 20)
{
 throw new Error("(errid:Watl000416)字段[学工号(stuIdTeacherId)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.stuIdTeacherId)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.email) == false && GetStrLen(pobjUsersEN.email) > 100)
{
 throw new Error("(errid:Watl000416)字段[电子邮箱(email)]的长度不能超过100(In 用户(Users))!值:$(pobjUsersEN.email)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.phoneNumber) == false && GetStrLen(pobjUsersEN.phoneNumber) > 15)
{
 throw new Error("(errid:Watl000416)字段[电话(phoneNumber)]的长度不能超过15(In 用户(Users))!值:$(pobjUsersEN.phoneNumber)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.avatarsPicture) == false && GetStrLen(pobjUsersEN.avatarsPicture) > 100)
{
 throw new Error("(errid:Watl000416)字段[虚拟头像(avatarsPicture)]的长度不能超过100(In 用户(Users))!值:$(pobjUsersEN.avatarsPicture)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.identityId) == false && GetStrLen(pobjUsersEN.identityId) > 2)
{
 throw new Error("(errid:Watl000416)字段[身份Id(identityId)]的长度不能超过2(In 用户(Users))!值:$(pobjUsersEN.identityId)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.auditDate) == false && GetStrLen(pobjUsersEN.auditDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[AuditDate(auditDate)]的长度不能超过14(In 用户(Users))!值:$(pobjUsersEN.auditDate)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.auditUser) == false && GetStrLen(pobjUsersEN.auditUser) > 18)
{
 throw new Error("(errid:Watl000416)字段[AuditUser(auditUser)]的长度不能超过18(In 用户(Users))!值:$(pobjUsersEN.auditUser)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.registerDate) == false && GetStrLen(pobjUsersEN.registerDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[RegisterDate(registerDate)]的长度不能超过14(In 用户(Users))!值:$(pobjUsersEN.registerDate)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.mobilePhone) == false && GetStrLen(pobjUsersEN.mobilePhone) > 20)
{
 throw new Error("(errid:Watl000416)字段[手机(mobilePhone)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.mobilePhone)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.openId) == false && GetStrLen(pobjUsersEN.openId) > 50)
{
 throw new Error("(errid:Watl000416)字段[微信OpenId(openId)]的长度不能超过50(In 用户(Users))!值:$(pobjUsersEN.openId)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.updDate) == false && GetStrLen(pobjUsersEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.updDate)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.updUser) == false && GetStrLen(pobjUsersEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户(Users))!值:$(pobjUsersEN.updUser)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.memo) == false && GetStrLen(pobjUsersEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户(Users))!值:$(pobjUsersEN.memo)(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.headPic) == false && GetStrLen(pobjUsersEN.headPic) > 500)
{
 throw new Error("(errid:Watl000416)字段[头像(headPic)]的长度不能超过500(In 用户(Users))!值:$(pobjUsersEN.headPic)(clsUsersBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjUsersEN.userId) == false && undefined !== pobjUsersEN.userId && tzDataType.isString(pobjUsersEN.userId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjUsersEN.userId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.userName) == false && undefined !== pobjUsersEN.userName && tzDataType.isString(pobjUsersEN.userName) === false)
{
 throw new Error("(errid:Watl000417)字段[用户名(userName)]的值:[$(pobjUsersEN.userName)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.departmentId) == false && undefined !== pobjUsersEN.departmentId && tzDataType.isString(pobjUsersEN.departmentId) === false)
{
 throw new Error("(errid:Watl000417)字段[部门Id(departmentId)]的值:[$(pobjUsersEN.departmentId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.userStateId) == false && undefined !== pobjUsersEN.userStateId && tzDataType.isString(pobjUsersEN.userStateId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户状态Id(userStateId)]的值:[$(pobjUsersEN.userStateId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.password) == false && undefined !== pobjUsersEN.password && tzDataType.isString(pobjUsersEN.password) === false)
{
 throw new Error("(errid:Watl000417)字段[口令(password)]的值:[$(pobjUsersEN.password)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (null != pobjUsersEN.isGpUser && undefined !== pobjUsersEN.isGpUser && tzDataType.isBoolean(pobjUsersEN.isGpUser) === false)
{
 throw new Error("(errid:Watl000417)字段[是否Gp用户(isGpUser)]的值:[$(pobjUsersEN.isGpUser)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idSchool) == false && undefined !== pobjUsersEN.idSchool && tzDataType.isString(pobjUsersEN.idSchool) === false)
{
 throw new Error("(errid:Watl000417)字段[学校流水号(idSchool)]的值:[$(pobjUsersEN.idSchool)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.beginYearMonth) == false && undefined !== pobjUsersEN.beginYearMonth && tzDataType.isString(pobjUsersEN.beginYearMonth) === false)
{
 throw new Error("(errid:Watl000417)字段[开始年月(beginYearMonth)]的值:[$(pobjUsersEN.beginYearMonth)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.endYearMonth) == false && undefined !== pobjUsersEN.endYearMonth && tzDataType.isString(pobjUsersEN.endYearMonth) === false)
{
 throw new Error("(errid:Watl000417)字段[结束年月(endYearMonth)]的值:[$(pobjUsersEN.endYearMonth)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idGradeBase) == false && undefined !== pobjUsersEN.idGradeBase && tzDataType.isString(pobjUsersEN.idGradeBase) === false)
{
 throw new Error("(errid:Watl000417)字段[年级流水号(idGradeBase)]的值:[$(pobjUsersEN.idGradeBase)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idGrade) == false && undefined !== pobjUsersEN.idGrade && tzDataType.isString(pobjUsersEN.idGrade) === false)
{
 throw new Error("(errid:Watl000417)字段[年级流水号(idGrade)]的值:[$(pobjUsersEN.idGrade)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzCollege) == false && undefined !== pobjUsersEN.idXzCollege && tzDataType.isString(pobjUsersEN.idXzCollege) === false)
{
 throw new Error("(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[$(pobjUsersEN.idXzCollege)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.idXzMajor) == false && undefined !== pobjUsersEN.idXzMajor && tzDataType.isString(pobjUsersEN.idXzMajor) === false)
{
 throw new Error("(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjUsersEN.idXzMajor)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (null != pobjUsersEN.isLeaved && undefined !== pobjUsersEN.isLeaved && tzDataType.isBoolean(pobjUsersEN.isLeaved) === false)
{
 throw new Error("(errid:Watl000417)字段[是否离开(isLeaved)]的值:[$(pobjUsersEN.isLeaved)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.stuIdTeacherId) == false && undefined !== pobjUsersEN.stuIdTeacherId && tzDataType.isString(pobjUsersEN.stuIdTeacherId) === false)
{
 throw new Error("(errid:Watl000417)字段[学工号(stuIdTeacherId)]的值:[$(pobjUsersEN.stuIdTeacherId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.email) == false && undefined !== pobjUsersEN.email && tzDataType.isString(pobjUsersEN.email) === false)
{
 throw new Error("(errid:Watl000417)字段[电子邮箱(email)]的值:[$(pobjUsersEN.email)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.phoneNumber) == false && undefined !== pobjUsersEN.phoneNumber && tzDataType.isString(pobjUsersEN.phoneNumber) === false)
{
 throw new Error("(errid:Watl000417)字段[电话(phoneNumber)]的值:[$(pobjUsersEN.phoneNumber)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.avatarsPicture) == false && undefined !== pobjUsersEN.avatarsPicture && tzDataType.isString(pobjUsersEN.avatarsPicture) === false)
{
 throw new Error("(errid:Watl000417)字段[虚拟头像(avatarsPicture)]的值:[$(pobjUsersEN.avatarsPicture)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.identityId) == false && undefined !== pobjUsersEN.identityId && tzDataType.isString(pobjUsersEN.identityId) === false)
{
 throw new Error("(errid:Watl000417)字段[身份Id(identityId)]的值:[$(pobjUsersEN.identityId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.auditDate) == false && undefined !== pobjUsersEN.auditDate && tzDataType.isString(pobjUsersEN.auditDate) === false)
{
 throw new Error("(errid:Watl000417)字段[AuditDate(auditDate)]的值:[$(pobjUsersEN.auditDate)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.auditUser) == false && undefined !== pobjUsersEN.auditUser && tzDataType.isString(pobjUsersEN.auditUser) === false)
{
 throw new Error("(errid:Watl000417)字段[AuditUser(auditUser)]的值:[$(pobjUsersEN.auditUser)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (null != pobjUsersEN.isAudit && undefined !== pobjUsersEN.isAudit && tzDataType.isBoolean(pobjUsersEN.isAudit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否审核(isAudit)]的值:[$(pobjUsersEN.isAudit)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (null != pobjUsersEN.isRegister && undefined !== pobjUsersEN.isRegister && tzDataType.isBoolean(pobjUsersEN.isRegister) === false)
{
 throw new Error("(errid:Watl000417)字段[IsRegister(isRegister)]的值:[$(pobjUsersEN.isRegister)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.registerDate) == false && undefined !== pobjUsersEN.registerDate && tzDataType.isString(pobjUsersEN.registerDate) === false)
{
 throw new Error("(errid:Watl000417)字段[RegisterDate(registerDate)]的值:[$(pobjUsersEN.registerDate)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.mobilePhone) == false && undefined !== pobjUsersEN.mobilePhone && tzDataType.isString(pobjUsersEN.mobilePhone) === false)
{
 throw new Error("(errid:Watl000417)字段[手机(mobilePhone)]的值:[$(pobjUsersEN.mobilePhone)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.openId) == false && undefined !== pobjUsersEN.openId && tzDataType.isString(pobjUsersEN.openId) === false)
{
 throw new Error("(errid:Watl000417)字段[微信OpenId(openId)]的值:[$(pobjUsersEN.openId)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.updDate) == false && undefined !== pobjUsersEN.updDate && tzDataType.isString(pobjUsersEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjUsersEN.updDate)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.updUser) == false && undefined !== pobjUsersEN.updUser && tzDataType.isString(pobjUsersEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjUsersEN.updUser)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.memo) == false && undefined !== pobjUsersEN.memo && tzDataType.isString(pobjUsersEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjUsersEN.memo)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjUsersEN.headPic) == false && undefined !== pobjUsersEN.headPic && tzDataType.isString(pobjUsersEN.headPic) === false)
{
 throw new Error("(errid:Watl000417)字段[头像(headPic)]的值:[$(pobjUsersEN.headPic)], 非法,应该为字符型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
if (null != pobjUsersEN.isGSuser && undefined !== pobjUsersEN.isGSuser && tzDataType.isBoolean(pobjUsersEN.isGSuser) === false)
{
 throw new Error("(errid:Watl000417)字段[是否GS用户(isGSuser)]的值:[$(pobjUsersEN.isGSuser)], 非法,应该为布尔型(In 用户(Users))!(clsUsersBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjUsersEN.userId) === true )
{
 throw new Error("(errid:Watl000064)字段[用户ID]不能为空(In 用户)!(clsUsersBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Users_GetJSONStrByObj (pobjUsersEN: clsUsersEN): string
{
pobjUsersEN.sfUpdFldSetStr = pobjUsersEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjUsersEN);
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
export  function Users_GetObjLstByJSONStr (strJSON: string): Array<clsUsersEN>
{
let arrUsersObjLst = new Array<clsUsersEN>();
if (strJSON === "")
{
return arrUsersObjLst;
}
try
{
arrUsersObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrUsersObjLst;
}
return arrUsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Users_GetObjLstByJSONObjLst (arrUsersObjLstS: Array<clsUsersEN>): Array<clsUsersEN>
{
const arrUsersObjLst = new Array<clsUsersEN>();
for (const objInFor of arrUsersObjLstS) {
const obj1 = Users_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrUsersObjLst.push(obj1);
}
return arrUsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Users_GetObjByJSONStr (strJSON: string): clsUsersEN
{
let pobjUsersEN = new clsUsersEN();
if (strJSON === "")
{
return pobjUsersEN;
}
try
{
pobjUsersEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjUsersEN;
}
return pobjUsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Users_GetCombineCondition(objUsersCond: clsUsersEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_UserId, objUsersCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_UserName, objUsersCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_DepartmentId) == true)
{
const strComparisonOpDepartmentId:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_DepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_DepartmentId, objUsersCond.departmentId, strComparisonOpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_UserStateId, objUsersCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_Password) == true)
{
const strComparisonOpPassword:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_Password];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_Password, objUsersCond.password, strComparisonOpPassword);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IsGpUser) == true)
{
if (objUsersCond.isGpUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsGpUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsGpUser);
}
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_IdSchool, objUsersCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_BeginYearMonth) == true)
{
const strComparisonOpBeginYearMonth:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_BeginYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_BeginYearMonth, objUsersCond.beginYearMonth, strComparisonOpBeginYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_EndYearMonth) == true)
{
const strComparisonOpEndYearMonth:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_EndYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_EndYearMonth, objUsersCond.endYearMonth, strComparisonOpEndYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_IdGradeBase, objUsersCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_IdGrade, objUsersCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_IdXzCollege, objUsersCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_IdXzMajor, objUsersCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IsLeaved) == true)
{
if (objUsersCond.isLeaved == true)
{
strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsLeaved);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsLeaved);
}
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_StuIdTeacherId) == true)
{
const strComparisonOpStuIdTeacherId:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_StuIdTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_StuIdTeacherId, objUsersCond.stuIdTeacherId, strComparisonOpStuIdTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_Email) == true)
{
const strComparisonOpEmail:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_Email, objUsersCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_PhoneNumber, objUsersCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_AvatarsPicture) == true)
{
const strComparisonOpAvatarsPicture:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_AvatarsPicture];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_AvatarsPicture, objUsersCond.avatarsPicture, strComparisonOpAvatarsPicture);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_IdentityId, objUsersCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_AuditDate) == true)
{
const strComparisonOpAuditDate:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_AuditDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_AuditDate, objUsersCond.auditDate, strComparisonOpAuditDate);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_AuditUser) == true)
{
const strComparisonOpAuditUser:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_AuditUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_AuditUser, objUsersCond.auditUser, strComparisonOpAuditUser);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IsAudit) == true)
{
if (objUsersCond.isAudit == true)
{
strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsAudit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsAudit);
}
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IsRegister) == true)
{
if (objUsersCond.isRegister == true)
{
strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsRegister);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsRegister);
}
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_RegisterDate) == true)
{
const strComparisonOpRegisterDate:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_RegisterDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_RegisterDate, objUsersCond.registerDate, strComparisonOpRegisterDate);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_MobilePhone) == true)
{
const strComparisonOpMobilePhone:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_MobilePhone];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_MobilePhone, objUsersCond.mobilePhone, strComparisonOpMobilePhone);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_OpenId) == true)
{
const strComparisonOpOpenId:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_OpenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_OpenId, objUsersCond.openId, strComparisonOpOpenId);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_UpdDate, objUsersCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_UpdUser, objUsersCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_Memo, objUsersCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_HeadPic) == true)
{
const strComparisonOpHeadPic:string = objUsersCond.dicFldComparisonOp[clsUsersEN.con_HeadPic];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsersEN.con_HeadPic, objUsersCond.headPic, strComparisonOpHeadPic);
}
if (Object.prototype.hasOwnProperty.call(objUsersCond.dicFldComparisonOp, clsUsersEN.con_IsGSuser) == true)
{
if (objUsersCond.isGSuser == true)
{
strWhereCond += Format(" And {0} = '1'", clsUsersEN.con_IsGSuser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsUsersEN.con_IsGSuser);
}
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objUsersENS:源对象
 * @param objUsersENT:目标对象
*/
export  function Users_CopyObjTo(objUsersENS: clsUsersEN , objUsersENT: clsUsersEN ): void 
{
objUsersENT.userId = objUsersENS.userId; //用户ID
objUsersENT.userName = objUsersENS.userName; //用户名
objUsersENT.departmentId = objUsersENS.departmentId; //部门Id
objUsersENT.userStateId = objUsersENS.userStateId; //用户状态Id
objUsersENT.password = objUsersENS.password; //口令
objUsersENT.isGpUser = objUsersENS.isGpUser; //是否Gp用户
objUsersENT.idSchool = objUsersENS.idSchool; //学校流水号
objUsersENT.beginYearMonth = objUsersENS.beginYearMonth; //开始年月
objUsersENT.endYearMonth = objUsersENS.endYearMonth; //结束年月
objUsersENT.idGradeBase = objUsersENS.idGradeBase; //年级流水号
objUsersENT.idGrade = objUsersENS.idGrade; //年级流水号
objUsersENT.idXzCollege = objUsersENS.idXzCollege; //学院流水号
objUsersENT.idXzMajor = objUsersENS.idXzMajor; //专业流水号
objUsersENT.isLeaved = objUsersENS.isLeaved; //是否离开
objUsersENT.stuIdTeacherId = objUsersENS.stuIdTeacherId; //学工号
objUsersENT.email = objUsersENS.email; //电子邮箱
objUsersENT.phoneNumber = objUsersENS.phoneNumber; //电话
objUsersENT.avatarsPicture = objUsersENS.avatarsPicture; //虚拟头像
objUsersENT.identityId = objUsersENS.identityId; //身份Id
objUsersENT.auditDate = objUsersENS.auditDate; //AuditDate
objUsersENT.auditUser = objUsersENS.auditUser; //AuditUser
objUsersENT.isAudit = objUsersENS.isAudit; //是否审核
objUsersENT.isRegister = objUsersENS.isRegister; //IsRegister
objUsersENT.registerDate = objUsersENS.registerDate; //RegisterDate
objUsersENT.mobilePhone = objUsersENS.mobilePhone; //手机
objUsersENT.openId = objUsersENS.openId; //微信OpenId
objUsersENT.updDate = objUsersENS.updDate; //修改日期
objUsersENT.updUser = objUsersENS.updUser; //修改人
objUsersENT.memo = objUsersENS.memo; //备注
objUsersENT.headPic = objUsersENS.headPic; //头像
objUsersENT.isGSuser = objUsersENS.isGSuser; //是否GS用户
objUsersENT.sfUpdFldSetStr = objUsersENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUsersENS:源对象
 * @param objUsersENT:目标对象
*/
export  function Users_GetObjFromJsonObj(objUsersENS: clsUsersEN): clsUsersEN 
{
 const objUsersENT: clsUsersEN = new clsUsersEN();
ObjectAssign(objUsersENT, objUsersENS);
 return objUsersENT;
}