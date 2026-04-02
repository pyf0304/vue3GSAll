
 /**
 * 类名:clsvQxUsersWApi
 * 表名:vQxUsers(01120564)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:11
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQx用户(vQxUsers)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvQxUsersEN } from "@/ts/L0Entity/BaseInfo/clsvQxUsersEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vQxUsers_Controller = "vQxUsersApi";
 export const vQxUsers_ConstructorName = "vQxUsers";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function vQxUsers_GetObjByUserIdAsync(strUserId: string): Promise<clsvQxUsersEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvQxUsersWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const objvQxUsers = vQxUsers_GetObjFromJsonObj(returnObj);
return objvQxUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxUsers_SortFunDefa(a:clsvQxUsersEN , b:clsvQxUsersEN): number 
{
return a.userId.localeCompare(b.userId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxUsers_SortFunDefa2Fld(a:clsvQxUsersEN , b:clsvQxUsersEN): number 
{
if (a.userName == b.userName) return a.userStateId.localeCompare(b.userStateId);
else return a.userName.localeCompare(b.userName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxUsers_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxUsersEN.con_UserId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvQxUsersEN.con_UserName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return a.userName.localeCompare(b.userName);
}
case clsvQxUsersEN.con_UserStateId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsvQxUsersEN.con_Memo:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvQxUsersEN.con_UserStateName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.userStateName == null) return -1;
if (b.userStateName == null) return 1;
return a.userStateName.localeCompare(b.userStateName);
}
case clsvQxUsersEN.con_DepartmentId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.departmentId == null) return -1;
if (b.departmentId == null) return 1;
return a.departmentId.localeCompare(b.departmentId);
}
case clsvQxUsersEN.con_UpDepartmentId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.upDepartmentId == null) return -1;
if (b.upDepartmentId == null) return 1;
return a.upDepartmentId.localeCompare(b.upDepartmentId);
}
case clsvQxUsersEN.con_DepartmentName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.departmentName == null) return -1;
if (b.departmentName == null) return 1;
return a.departmentName.localeCompare(b.departmentName);
}
case clsvQxUsersEN.con_UpDepartmentName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.upDepartmentName == null) return -1;
if (b.upDepartmentName == null) return 1;
return a.upDepartmentName.localeCompare(b.upDepartmentName);
}
case clsvQxUsersEN.con_DepartmentTypeName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.departmentTypeName == null) return -1;
if (b.departmentTypeName == null) return 1;
return a.departmentTypeName.localeCompare(b.departmentTypeName);
}
case clsvQxUsersEN.con_DepartmentTypeId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.departmentTypeId == null) return -1;
if (b.departmentTypeId == null) return 1;
return a.departmentTypeId.localeCompare(b.departmentTypeId);
}
case clsvQxUsersEN.con_DepartmentAbbrName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.departmentAbbrName == null) return -1;
if (b.departmentAbbrName == null) return 1;
return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
}
case clsvQxUsersEN.con_UpdDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvQxUsersEN.con_UpdUser:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvQxUsersEN.con_EffitiveBeginDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return a.effitiveBeginDate.localeCompare(b.effitiveBeginDate);
}
case clsvQxUsersEN.con_EffitiveEndDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return a.effitiveEndDate.localeCompare(b.effitiveEndDate);
}
case clsvQxUsersEN.con_StuTeacherId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return a.stuTeacherId.localeCompare(b.stuTeacherId);
}
case clsvQxUsersEN.con_IdentityId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.identityId == null) return -1;
if (b.identityId == null) return 1;
return a.identityId.localeCompare(b.identityId);
}
case clsvQxUsersEN.con_Password:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.password == null) return -1;
if (b.password == null) return 1;
return a.password.localeCompare(b.password);
}
case clsvQxUsersEN.con_IdentityDesc:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.identityDesc == null) return -1;
if (b.identityDesc == null) return 1;
return a.identityDesc.localeCompare(b.identityDesc);
}
case clsvQxUsersEN.con_IsSynch:
return (a: clsvQxUsersEN) => {
if (a.isSynch == true) return 1;
else return -1
}
case clsvQxUsersEN.con_SynchDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.synchDate == null) return -1;
if (b.synchDate == null) return 1;
return a.synchDate.localeCompare(b.synchDate);
}
case clsvQxUsersEN.con_OpenId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.openId == null) return -1;
if (b.openId == null) return 1;
return a.openId.localeCompare(b.openId);
}
case clsvQxUsersEN.con_CollegeName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvQxUsersEN.con_IdXzCollege:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvQxUsersEN.con_Email:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxUsers]中不存在!(in ${ vQxUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxUsersEN.con_UserId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvQxUsersEN.con_UserName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return b.userName.localeCompare(a.userName);
}
case clsvQxUsersEN.con_UserStateId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsvQxUsersEN.con_Memo:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvQxUsersEN.con_UserStateName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.userStateName == null) return -1;
if (a.userStateName == null) return 1;
return b.userStateName.localeCompare(a.userStateName);
}
case clsvQxUsersEN.con_DepartmentId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.departmentId == null) return -1;
if (a.departmentId == null) return 1;
return b.departmentId.localeCompare(a.departmentId);
}
case clsvQxUsersEN.con_UpDepartmentId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.upDepartmentId == null) return -1;
if (a.upDepartmentId == null) return 1;
return b.upDepartmentId.localeCompare(a.upDepartmentId);
}
case clsvQxUsersEN.con_DepartmentName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.departmentName == null) return -1;
if (a.departmentName == null) return 1;
return b.departmentName.localeCompare(a.departmentName);
}
case clsvQxUsersEN.con_UpDepartmentName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.upDepartmentName == null) return -1;
if (a.upDepartmentName == null) return 1;
return b.upDepartmentName.localeCompare(a.upDepartmentName);
}
case clsvQxUsersEN.con_DepartmentTypeName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.departmentTypeName == null) return -1;
if (a.departmentTypeName == null) return 1;
return b.departmentTypeName.localeCompare(a.departmentTypeName);
}
case clsvQxUsersEN.con_DepartmentTypeId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.departmentTypeId == null) return -1;
if (a.departmentTypeId == null) return 1;
return b.departmentTypeId.localeCompare(a.departmentTypeId);
}
case clsvQxUsersEN.con_DepartmentAbbrName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.departmentAbbrName == null) return -1;
if (a.departmentAbbrName == null) return 1;
return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
}
case clsvQxUsersEN.con_UpdDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvQxUsersEN.con_UpdUser:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvQxUsersEN.con_EffitiveBeginDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return b.effitiveBeginDate.localeCompare(a.effitiveBeginDate);
}
case clsvQxUsersEN.con_EffitiveEndDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return b.effitiveEndDate.localeCompare(a.effitiveEndDate);
}
case clsvQxUsersEN.con_StuTeacherId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
return b.stuTeacherId.localeCompare(a.stuTeacherId);
}
case clsvQxUsersEN.con_IdentityId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.identityId == null) return -1;
if (a.identityId == null) return 1;
return b.identityId.localeCompare(a.identityId);
}
case clsvQxUsersEN.con_Password:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.password == null) return -1;
if (a.password == null) return 1;
return b.password.localeCompare(a.password);
}
case clsvQxUsersEN.con_IdentityDesc:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.identityDesc == null) return -1;
if (a.identityDesc == null) return 1;
return b.identityDesc.localeCompare(a.identityDesc);
}
case clsvQxUsersEN.con_IsSynch:
return (b: clsvQxUsersEN) => {
if (b.isSynch == true) return 1;
else return -1
}
case clsvQxUsersEN.con_SynchDate:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.synchDate == null) return -1;
if (a.synchDate == null) return 1;
return b.synchDate.localeCompare(a.synchDate);
}
case clsvQxUsersEN.con_OpenId:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.openId == null) return -1;
if (a.openId == null) return 1;
return b.openId.localeCompare(a.openId);
}
case clsvQxUsersEN.con_CollegeName:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvQxUsersEN.con_IdXzCollege:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvQxUsersEN.con_Email:
return (a: clsvQxUsersEN, b: clsvQxUsersEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxUsers]中不存在!(in ${ vQxUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxUsers_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxUsersEN.con_UserId:
return (obj: clsvQxUsersEN) => {
return obj.userId === value;
}
case clsvQxUsersEN.con_UserName:
return (obj: clsvQxUsersEN) => {
return obj.userName === value;
}
case clsvQxUsersEN.con_UserStateId:
return (obj: clsvQxUsersEN) => {
return obj.userStateId === value;
}
case clsvQxUsersEN.con_Memo:
return (obj: clsvQxUsersEN) => {
return obj.memo === value;
}
case clsvQxUsersEN.con_UserStateName:
return (obj: clsvQxUsersEN) => {
return obj.userStateName === value;
}
case clsvQxUsersEN.con_DepartmentId:
return (obj: clsvQxUsersEN) => {
return obj.departmentId === value;
}
case clsvQxUsersEN.con_UpDepartmentId:
return (obj: clsvQxUsersEN) => {
return obj.upDepartmentId === value;
}
case clsvQxUsersEN.con_DepartmentName:
return (obj: clsvQxUsersEN) => {
return obj.departmentName === value;
}
case clsvQxUsersEN.con_UpDepartmentName:
return (obj: clsvQxUsersEN) => {
return obj.upDepartmentName === value;
}
case clsvQxUsersEN.con_DepartmentTypeName:
return (obj: clsvQxUsersEN) => {
return obj.departmentTypeName === value;
}
case clsvQxUsersEN.con_DepartmentTypeId:
return (obj: clsvQxUsersEN) => {
return obj.departmentTypeId === value;
}
case clsvQxUsersEN.con_DepartmentAbbrName:
return (obj: clsvQxUsersEN) => {
return obj.departmentAbbrName === value;
}
case clsvQxUsersEN.con_UpdDate:
return (obj: clsvQxUsersEN) => {
return obj.updDate === value;
}
case clsvQxUsersEN.con_UpdUser:
return (obj: clsvQxUsersEN) => {
return obj.updUser === value;
}
case clsvQxUsersEN.con_EffitiveBeginDate:
return (obj: clsvQxUsersEN) => {
return obj.effitiveBeginDate === value;
}
case clsvQxUsersEN.con_EffitiveEndDate:
return (obj: clsvQxUsersEN) => {
return obj.effitiveEndDate === value;
}
case clsvQxUsersEN.con_StuTeacherId:
return (obj: clsvQxUsersEN) => {
return obj.stuTeacherId === value;
}
case clsvQxUsersEN.con_IdentityId:
return (obj: clsvQxUsersEN) => {
return obj.identityId === value;
}
case clsvQxUsersEN.con_Password:
return (obj: clsvQxUsersEN) => {
return obj.password === value;
}
case clsvQxUsersEN.con_IdentityDesc:
return (obj: clsvQxUsersEN) => {
return obj.identityDesc === value;
}
case clsvQxUsersEN.con_IsSynch:
return (obj: clsvQxUsersEN) => {
return obj.isSynch === value;
}
case clsvQxUsersEN.con_SynchDate:
return (obj: clsvQxUsersEN) => {
return obj.synchDate === value;
}
case clsvQxUsersEN.con_OpenId:
return (obj: clsvQxUsersEN) => {
return obj.openId === value;
}
case clsvQxUsersEN.con_CollegeName:
return (obj: clsvQxUsersEN) => {
return obj.collegeName === value;
}
case clsvQxUsersEN.con_IdXzCollege:
return (obj: clsvQxUsersEN) => {
return obj.idXzCollege === value;
}
case clsvQxUsersEN.con_Email:
return (obj: clsvQxUsersEN) => {
return obj.email === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxUsers]中不存在!(in ${ vQxUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vQxUsers__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxUsers_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxUsersEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const objvQxUsers = vQxUsers_GetObjFromJsonObj(returnObj);
return objvQxUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxUsersEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsvQxUsersEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxUsersEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxUsersEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxUsersEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxUsersEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  async function vQxUsers_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vQxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxUsers_ConstructorName, strThisFuncName);
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
export  function vQxUsers_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxUsers_GetJSONStrByObj (pobjvQxUsersEN: clsvQxUsersEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxUsersEN);
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vQxUsers_GetObjLstByJSONStr (strJSON: string): Array<clsvQxUsersEN>
{
let arrvQxUsersObjLst = new Array<clsvQxUsersEN>();
if (strJSON === "")
{
return arrvQxUsersObjLst;
}
try
{
arrvQxUsersObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxUsersObjLst;
}
return arrvQxUsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxUsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxUsers_GetObjLstByJSONObjLst (arrvQxUsersObjLstS: Array<clsvQxUsersEN>): Array<clsvQxUsersEN>
{
const arrvQxUsersObjLst = new Array<clsvQxUsersEN>();
for (const objInFor of arrvQxUsersObjLstS) {
const obj1 = vQxUsers_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxUsersObjLst.push(obj1);
}
return arrvQxUsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxUsers_GetObjByJSONStr (strJSON: string): clsvQxUsersEN
{
let pobjvQxUsersEN = new clsvQxUsersEN();
if (strJSON === "")
{
return pobjvQxUsersEN;
}
try
{
pobjvQxUsersEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxUsersEN;
}
return pobjvQxUsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxUsers_GetCombineCondition(objvQxUsersCond: clsvQxUsersEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UserId, objvQxUsersCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UserName, objvQxUsersCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UserStateId, objvQxUsersCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_Memo, objvQxUsersCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UserStateName) == true)
{
const strComparisonOpUserStateName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UserStateName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UserStateName, objvQxUsersCond.userStateName, strComparisonOpUserStateName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_DepartmentId) == true)
{
const strComparisonOpDepartmentId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_DepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_DepartmentId, objvQxUsersCond.departmentId, strComparisonOpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UpDepartmentId) == true)
{
const strComparisonOpUpDepartmentId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UpDepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UpDepartmentId, objvQxUsersCond.upDepartmentId, strComparisonOpUpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_DepartmentName) == true)
{
const strComparisonOpDepartmentName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_DepartmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_DepartmentName, objvQxUsersCond.departmentName, strComparisonOpDepartmentName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UpDepartmentName) == true)
{
const strComparisonOpUpDepartmentName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UpDepartmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UpDepartmentName, objvQxUsersCond.upDepartmentName, strComparisonOpUpDepartmentName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_DepartmentTypeName) == true)
{
const strComparisonOpDepartmentTypeName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_DepartmentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_DepartmentTypeName, objvQxUsersCond.departmentTypeName, strComparisonOpDepartmentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_DepartmentTypeId) == true)
{
const strComparisonOpDepartmentTypeId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_DepartmentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_DepartmentTypeId, objvQxUsersCond.departmentTypeId, strComparisonOpDepartmentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_DepartmentAbbrName) == true)
{
const strComparisonOpDepartmentAbbrName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_DepartmentAbbrName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_DepartmentAbbrName, objvQxUsersCond.departmentAbbrName, strComparisonOpDepartmentAbbrName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UpdDate, objvQxUsersCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_UpdUser, objvQxUsersCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_EffitiveBeginDate) == true)
{
const strComparisonOpEffitiveBeginDate:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_EffitiveBeginDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_EffitiveBeginDate, objvQxUsersCond.effitiveBeginDate, strComparisonOpEffitiveBeginDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_EffitiveEndDate) == true)
{
const strComparisonOpEffitiveEndDate:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_EffitiveEndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_EffitiveEndDate, objvQxUsersCond.effitiveEndDate, strComparisonOpEffitiveEndDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_StuTeacherId) == true)
{
const strComparisonOpStuTeacherId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_StuTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_StuTeacherId, objvQxUsersCond.stuTeacherId, strComparisonOpStuTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_IdentityId, objvQxUsersCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_Password) == true)
{
const strComparisonOpPassword:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_Password];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_Password, objvQxUsersCond.password, strComparisonOpPassword);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_IdentityDesc) == true)
{
const strComparisonOpIdentityDesc:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_IdentityDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_IdentityDesc, objvQxUsersCond.identityDesc, strComparisonOpIdentityDesc);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_IsSynch) == true)
{
if (objvQxUsersCond.isSynch == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxUsersEN.con_IsSynch);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxUsersEN.con_IsSynch);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_SynchDate) == true)
{
const strComparisonOpSynchDate:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_SynchDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_SynchDate, objvQxUsersCond.synchDate, strComparisonOpSynchDate);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_OpenId) == true)
{
const strComparisonOpOpenId:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_OpenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_OpenId, objvQxUsersCond.openId, strComparisonOpOpenId);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_CollegeName, objvQxUsersCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_IdXzCollege, objvQxUsersCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvQxUsersCond.dicFldComparisonOp, clsvQxUsersEN.con_Email) == true)
{
const strComparisonOpEmail:string = objvQxUsersCond.dicFldComparisonOp[clsvQxUsersEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxUsersEN.con_Email, objvQxUsersCond.email, strComparisonOpEmail);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvQxUsersENS:源对象
 * @param objvQxUsersENT:目标对象
*/
export  function vQxUsers_CopyObjTo(objvQxUsersENS: clsvQxUsersEN , objvQxUsersENT: clsvQxUsersEN ): void 
{
objvQxUsersENT.userId = objvQxUsersENS.userId; //用户ID
objvQxUsersENT.userName = objvQxUsersENS.userName; //用户名
objvQxUsersENT.userStateId = objvQxUsersENS.userStateId; //用户状态Id
objvQxUsersENT.memo = objvQxUsersENS.memo; //备注
objvQxUsersENT.userStateName = objvQxUsersENS.userStateName; //用户状态名
objvQxUsersENT.departmentId = objvQxUsersENS.departmentId; //部门Id
objvQxUsersENT.upDepartmentId = objvQxUsersENS.upDepartmentId; //UpDepartmentId
objvQxUsersENT.departmentName = objvQxUsersENS.departmentName; //部门名称
objvQxUsersENT.upDepartmentName = objvQxUsersENS.upDepartmentName; //UpDepartmentName
objvQxUsersENT.departmentTypeName = objvQxUsersENS.departmentTypeName; //DepartmentTypeName
objvQxUsersENT.departmentTypeId = objvQxUsersENS.departmentTypeId; //DepartmentTypeId
objvQxUsersENT.departmentAbbrName = objvQxUsersENS.departmentAbbrName; //DepartmentAbbrName
objvQxUsersENT.updDate = objvQxUsersENS.updDate; //修改日期
objvQxUsersENT.updUser = objvQxUsersENS.updUser; //修改人
objvQxUsersENT.effitiveBeginDate = objvQxUsersENS.effitiveBeginDate; //有效开始日期
objvQxUsersENT.effitiveEndDate = objvQxUsersENS.effitiveEndDate; //有效结束日期
objvQxUsersENT.stuTeacherId = objvQxUsersENS.stuTeacherId; //学工号
objvQxUsersENT.identityId = objvQxUsersENS.identityId; //身份Id
objvQxUsersENT.password = objvQxUsersENS.password; //口令
objvQxUsersENT.identityDesc = objvQxUsersENS.identityDesc; //身份描述
objvQxUsersENT.isSynch = objvQxUsersENS.isSynch; //是否同步
objvQxUsersENT.synchDate = objvQxUsersENS.synchDate; //同步日期
objvQxUsersENT.openId = objvQxUsersENS.openId; //微信OpenId
objvQxUsersENT.collegeName = objvQxUsersENS.collegeName; //学院名称
objvQxUsersENT.idXzCollege = objvQxUsersENS.idXzCollege; //学院流水号
objvQxUsersENT.email = objvQxUsersENS.email; //电子邮箱
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxUsersENS:源对象
 * @param objvQxUsersENT:目标对象
*/
export  function vQxUsers_GetObjFromJsonObj(objvQxUsersENS: clsvQxUsersEN): clsvQxUsersEN 
{
 const objvQxUsersENT: clsvQxUsersEN = new clsvQxUsersEN();
ObjectAssign(objvQxUsersENT, objvQxUsersENS);
 return objvQxUsersENT;
}