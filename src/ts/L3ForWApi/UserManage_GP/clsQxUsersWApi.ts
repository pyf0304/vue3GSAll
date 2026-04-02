
 /**
 * 类名:clsQxUsersWApi
 * 表名:QxUsers(00140015)
 * 版本:2024.05.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/05/19 00:42:50
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户(QxUsers)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年05月19日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsQxUsersEN } from "@/ts/L0Entity/UserManage_GP/clsQxUsersEN";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUsers_Controller = "QxUsersApi";
 export const qxUsers_ConstructorName = "qxUsers";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function QxUsers_GetObjByUserIdAsync(strUserId: string): Promise<clsQxUsersEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsQxUsersWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const objQxUsers = QxUsers_GetObjFromJsonObj(returnObj);
return objQxUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUsers_SortFunDefa(a:clsQxUsersEN , b:clsQxUsersEN): number 
{
return a.userId.localeCompare(b.userId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUsers_SortFunDefa2Fld(a:clsQxUsersEN , b:clsQxUsersEN): number 
{
if (a.userName == b.userName) return a.departmentId.localeCompare(b.departmentId);
else return a.userName.localeCompare(b.userName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUsers_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUsersEN.con_UserId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUsersEN.con_UserName:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return a.userName.localeCompare(b.userName);
}
case clsQxUsersEN.con_DepartmentId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.departmentId == null) return -1;
if (b.departmentId == null) return 1;
return a.departmentId.localeCompare(b.departmentId);
}
case clsQxUsersEN.con_UserStateId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return a.userStateId.localeCompare(b.userStateId);
}
case clsQxUsersEN.con_Password:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return a.password.localeCompare(b.password);
}
case clsQxUsersEN.con_EffitiveBeginDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.effitiveBeginDate == null) return -1;
if (b.effitiveBeginDate == null) return 1;
return a.effitiveBeginDate.localeCompare(b.effitiveBeginDate);
}
case clsQxUsersEN.con_EffitiveEndDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.effitiveEndDate == null) return -1;
if (b.effitiveEndDate == null) return 1;
return a.effitiveEndDate.localeCompare(b.effitiveEndDate);
}
case clsQxUsersEN.con_StuTeacherId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.stuTeacherId == null) return -1;
if (b.stuTeacherId == null) return 1;
return a.stuTeacherId.localeCompare(b.stuTeacherId);
}
case clsQxUsersEN.con_IdentityId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.identityId == null) return -1;
if (b.identityId == null) return 1;
return a.identityId.localeCompare(b.identityId);
}
case clsQxUsersEN.con_IsArchive:
return (a: clsQxUsersEN) => {
if (a.isArchive == true) return 1;
else return -1
}
case clsQxUsersEN.con_OpenId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.openId == null) return -1;
if (b.openId == null) return 1;
return a.openId.localeCompare(b.openId);
}
case clsQxUsersEN.con_Email:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsQxUsersEN.con_PhoneNumber:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsQxUsersEN.con_IsSynch:
return (a: clsQxUsersEN) => {
if (a.isSynch == true) return 1;
else return -1
}
case clsQxUsersEN.con_SynchDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.synchDate == null) return -1;
if (b.synchDate == null) return 1;
return a.synchDate.localeCompare(b.synchDate);
}
case clsQxUsersEN.con_DetailInfoTab:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.detailInfoTab == null) return -1;
if (b.detailInfoTab == null) return 1;
return a.detailInfoTab.localeCompare(b.detailInfoTab);
}
case clsQxUsersEN.con_IdGradeBase:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsQxUsersEN.con_IdSchool:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsQxUsersEN.con_IdXzCollege:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsQxUsersEN.con_UpdDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsQxUsersEN.con_UpdUser:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsQxUsersEN.con_Memo:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers]中不存在!(in ${ qxUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUsersEN.con_UserId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUsersEN.con_UserName:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return b.userName.localeCompare(a.userName);
}
case clsQxUsersEN.con_DepartmentId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.departmentId == null) return -1;
if (a.departmentId == null) return 1;
return b.departmentId.localeCompare(a.departmentId);
}
case clsQxUsersEN.con_UserStateId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return b.userStateId.localeCompare(a.userStateId);
}
case clsQxUsersEN.con_Password:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
return b.password.localeCompare(a.password);
}
case clsQxUsersEN.con_EffitiveBeginDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.effitiveBeginDate == null) return -1;
if (a.effitiveBeginDate == null) return 1;
return b.effitiveBeginDate.localeCompare(a.effitiveBeginDate);
}
case clsQxUsersEN.con_EffitiveEndDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.effitiveEndDate == null) return -1;
if (a.effitiveEndDate == null) return 1;
return b.effitiveEndDate.localeCompare(a.effitiveEndDate);
}
case clsQxUsersEN.con_StuTeacherId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.stuTeacherId == null) return -1;
if (a.stuTeacherId == null) return 1;
return b.stuTeacherId.localeCompare(a.stuTeacherId);
}
case clsQxUsersEN.con_IdentityId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.identityId == null) return -1;
if (a.identityId == null) return 1;
return b.identityId.localeCompare(a.identityId);
}
case clsQxUsersEN.con_IsArchive:
return (b: clsQxUsersEN) => {
if (b.isArchive == true) return 1;
else return -1
}
case clsQxUsersEN.con_OpenId:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.openId == null) return -1;
if (a.openId == null) return 1;
return b.openId.localeCompare(a.openId);
}
case clsQxUsersEN.con_Email:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsQxUsersEN.con_PhoneNumber:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsQxUsersEN.con_IsSynch:
return (b: clsQxUsersEN) => {
if (b.isSynch == true) return 1;
else return -1
}
case clsQxUsersEN.con_SynchDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.synchDate == null) return -1;
if (a.synchDate == null) return 1;
return b.synchDate.localeCompare(a.synchDate);
}
case clsQxUsersEN.con_DetailInfoTab:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.detailInfoTab == null) return -1;
if (a.detailInfoTab == null) return 1;
return b.detailInfoTab.localeCompare(a.detailInfoTab);
}
case clsQxUsersEN.con_IdGradeBase:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsQxUsersEN.con_IdSchool:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsQxUsersEN.con_IdXzCollege:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsQxUsersEN.con_UpdDate:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsQxUsersEN.con_UpdUser:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsQxUsersEN.con_Memo:
return (a: clsQxUsersEN, b: clsQxUsersEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers]中不存在!(in ${ qxUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUsers_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUsersEN.con_UserId:
return (obj: clsQxUsersEN) => {
return obj.userId === value;
}
case clsQxUsersEN.con_UserName:
return (obj: clsQxUsersEN) => {
return obj.userName === value;
}
case clsQxUsersEN.con_DepartmentId:
return (obj: clsQxUsersEN) => {
return obj.departmentId === value;
}
case clsQxUsersEN.con_UserStateId:
return (obj: clsQxUsersEN) => {
return obj.userStateId === value;
}
case clsQxUsersEN.con_Password:
return (obj: clsQxUsersEN) => {
return obj.password === value;
}
case clsQxUsersEN.con_EffitiveBeginDate:
return (obj: clsQxUsersEN) => {
return obj.effitiveBeginDate === value;
}
case clsQxUsersEN.con_EffitiveEndDate:
return (obj: clsQxUsersEN) => {
return obj.effitiveEndDate === value;
}
case clsQxUsersEN.con_StuTeacherId:
return (obj: clsQxUsersEN) => {
return obj.stuTeacherId === value;
}
case clsQxUsersEN.con_IdentityId:
return (obj: clsQxUsersEN) => {
return obj.identityId === value;
}
case clsQxUsersEN.con_IsArchive:
return (obj: clsQxUsersEN) => {
return obj.isArchive === value;
}
case clsQxUsersEN.con_OpenId:
return (obj: clsQxUsersEN) => {
return obj.openId === value;
}
case clsQxUsersEN.con_Email:
return (obj: clsQxUsersEN) => {
return obj.email === value;
}
case clsQxUsersEN.con_PhoneNumber:
return (obj: clsQxUsersEN) => {
return obj.phoneNumber === value;
}
case clsQxUsersEN.con_IsSynch:
return (obj: clsQxUsersEN) => {
return obj.isSynch === value;
}
case clsQxUsersEN.con_SynchDate:
return (obj: clsQxUsersEN) => {
return obj.synchDate === value;
}
case clsQxUsersEN.con_DetailInfoTab:
return (obj: clsQxUsersEN) => {
return obj.detailInfoTab === value;
}
case clsQxUsersEN.con_IdGradeBase:
return (obj: clsQxUsersEN) => {
return obj.idGradeBase === value;
}
case clsQxUsersEN.con_IdSchool:
return (obj: clsQxUsersEN) => {
return obj.idSchool === value;
}
case clsQxUsersEN.con_IdXzCollege:
return (obj: clsQxUsersEN) => {
return obj.idXzCollege === value;
}
case clsQxUsersEN.con_UpdDate:
return (obj: clsQxUsersEN) => {
return obj.updDate === value;
}
case clsQxUsersEN.con_UpdUser:
return (obj: clsQxUsersEN) => {
return obj.updUser === value;
}
case clsQxUsersEN.con_Memo:
return (obj: clsQxUsersEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUsers]中不存在!(in ${ qxUsers_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[QxUsers__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUsers_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUsersEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const objQxUsers = QxUsers_GetObjFromJsonObj(returnObj);
return objQxUsers;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUsersEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsQxUsersEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUsersEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUsersEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUsersEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUsersEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUsers_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUsers_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_DelRecordAsync(strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_DelQxUserssAsync(arrUserId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserssAsync";
const strAction = "DelQxUserss";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_DelQxUserssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserssByCondAsync";
const strAction = "DelQxUserssByCond";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
 * @param objQxUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUsers_AddNewRecordAsync(objQxUsersEN: clsQxUsersEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxUsersEN.userId === null || objQxUsersEN.userId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxUsersEN);
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
 * @param objQxUsersEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUsers_AddNewRecordWithMaxIdAsync(objQxUsersEN: clsQxUsersEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
 * @param objQxUsersEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUsers_AddNewRecordWithReturnKeyAsync(objQxUsersEN: clsQxUsersEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
 * @param objQxUsersEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUsers_UpdateRecordAsync(objQxUsersEN: clsQxUsersEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUsersEN.sfUpdFldSetStr === undefined || objQxUsersEN.sfUpdFldSetStr === null || objQxUsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsersEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
 * @param objQxUsersEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUsers_UpdateWithConditionAsync(objQxUsersEN: clsQxUsersEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUsersEN.sfUpdFldSetStr === undefined || objQxUsersEN.sfUpdFldSetStr === null || objQxUsersEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUsersEN.userId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);
objQxUsersEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUsersEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  async function QxUsers_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function QxUsers_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUsers_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUsers_ConstructorName, strThisFuncName);
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
export  function QxUsers_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function QxUsers_BindDdl_UserIdInDiv(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_UserIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_UserIdInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await QxUsers_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsQxUsersEN.con_UserId, clsQxUsersEN.con_UserName, "用户");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUsers_CheckPropertyNew(pobjQxUsersEN: clsQxUsersEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUsersEN.userName) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户名]不能为空(In 用户)!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) === true 
 || pobjQxUsersEN.userStateId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户状态Id]不能为空(In 用户)!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.password) === true )
{
 throw new Error(`(errid:Watl000411)字段[口令]不能为空(In 用户)!(clsQxUsersBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUsersEN.userId) == false && GetStrLen(pobjQxUsersEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户(QxUsers))!值:${pobjQxUsersEN.userId}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userName) == false && GetStrLen(pobjQxUsersEN.userName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[用户名(userName)]的长度不能超过30(In 用户(QxUsers))!值:${pobjQxUsersEN.userName}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.departmentId) == false && GetStrLen(pobjQxUsersEN.departmentId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[部门Id(departmentId)]的长度不能超过8(In 用户(QxUsers))!值:${pobjQxUsersEN.departmentId}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) == false && GetStrLen(pobjQxUsersEN.userStateId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户(QxUsers))!值:${pobjQxUsersEN.userStateId}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.password) == false && GetStrLen(pobjQxUsersEN.password) > 20)
{
 throw new Error(`(errid:Watl000413)字段[口令(password)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.password}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false && GetStrLen(pobjQxUsersEN.effitiveBeginDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户(QxUsers))!值:${pobjQxUsersEN.effitiveBeginDate}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false && GetStrLen(pobjQxUsersEN.effitiveEndDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户(QxUsers))!值:${pobjQxUsersEN.effitiveEndDate}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false && GetStrLen(pobjQxUsersEN.stuTeacherId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.stuTeacherId}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.identityId) == false && GetStrLen(pobjQxUsersEN.identityId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[身份编号(identityId)]的长度不能超过2(In 用户(QxUsers))!值:${pobjQxUsersEN.identityId}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.openId) == false && GetStrLen(pobjQxUsersEN.openId) > 50)
{
 throw new Error(`(errid:Watl000413)字段[微信openid(openId)]的长度不能超过50(In 用户(QxUsers))!值:${pobjQxUsersEN.openId}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.email) == false && GetStrLen(pobjQxUsersEN.email) > 100)
{
 throw new Error(`(errid:Watl000413)字段[邮箱(email)]的长度不能超过100(In 用户(QxUsers))!值:${pobjQxUsersEN.email}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false && GetStrLen(pobjQxUsersEN.phoneNumber) > 15)
{
 throw new Error(`(errid:Watl000413)字段[电话号码(phoneNumber)]的长度不能超过15(In 用户(QxUsers))!值:${pobjQxUsersEN.phoneNumber}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.synchDate) == false && GetStrLen(pobjQxUsersEN.synchDate) > 30)
{
 throw new Error(`(errid:Watl000413)字段[同步日期(synchDate)]的长度不能超过30(In 用户(QxUsers))!值:${pobjQxUsersEN.synchDate}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.detailInfoTab) == false && GetStrLen(pobjQxUsersEN.detailInfoTab) > 30)
{
 throw new Error(`(errid:Watl000413)字段[详细信息表(detailInfoTab)]的长度不能超过30(In 用户(QxUsers))!值:${pobjQxUsersEN.detailInfoTab}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idGradeBase) == false && GetStrLen(pobjQxUsersEN.idGradeBase) > 4)
{
 throw new Error(`(errid:Watl000413)字段[年级流水号(idGradeBase)]的长度不能超过4(In 用户(QxUsers))!值:${pobjQxUsersEN.idGradeBase}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idSchool) == false && GetStrLen(pobjQxUsersEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 用户(QxUsers))!值:${pobjQxUsersEN.idSchool}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idXzCollege) == false && GetStrLen(pobjQxUsersEN.idXzCollege) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学院Id(idXzCollege)]的长度不能超过4(In 用户(QxUsers))!值:${pobjQxUsersEN.idXzCollege}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updDate) == false && GetStrLen(pobjQxUsersEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.updDate}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updUser) == false && GetStrLen(pobjQxUsersEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.updUser}(clsQxUsersBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.memo) == false && GetStrLen(pobjQxUsersEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户(QxUsers))!值:${pobjQxUsersEN.memo}(clsQxUsersBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUsersEN.userId) == false && undefined !== pobjQxUsersEN.userId && tzDataType.isString(pobjQxUsersEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUsersEN.userId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userName) == false && undefined !== pobjQxUsersEN.userName && tzDataType.isString(pobjQxUsersEN.userName) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户名(userName)]的值:[${pobjQxUsersEN.userName}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.departmentId) == false && undefined !== pobjQxUsersEN.departmentId && tzDataType.isString(pobjQxUsersEN.departmentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[部门Id(departmentId)]的值:[${pobjQxUsersEN.departmentId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) == false && undefined !== pobjQxUsersEN.userStateId && tzDataType.isString(pobjQxUsersEN.userStateId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户状态Id(userStateId)]的值:[${pobjQxUsersEN.userStateId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.password) == false && undefined !== pobjQxUsersEN.password && tzDataType.isString(pobjQxUsersEN.password) === false)
{
 throw new Error(`(errid:Watl000414)字段[口令(password)]的值:[${pobjQxUsersEN.password}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false && undefined !== pobjQxUsersEN.effitiveBeginDate && tzDataType.isString(pobjQxUsersEN.effitiveBeginDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[有效开始日期(effitiveBeginDate)]的值:[${pobjQxUsersEN.effitiveBeginDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false && undefined !== pobjQxUsersEN.effitiveEndDate && tzDataType.isString(pobjQxUsersEN.effitiveEndDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[有效结束日期(effitiveEndDate)]的值:[${pobjQxUsersEN.effitiveEndDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false && undefined !== pobjQxUsersEN.stuTeacherId && tzDataType.isString(pobjQxUsersEN.stuTeacherId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学工号(stuTeacherId)]的值:[${pobjQxUsersEN.stuTeacherId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.identityId) == false && undefined !== pobjQxUsersEN.identityId && tzDataType.isString(pobjQxUsersEN.identityId) === false)
{
 throw new Error(`(errid:Watl000414)字段[身份编号(identityId)]的值:[${pobjQxUsersEN.identityId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsersEN.isArchive && undefined !== pobjQxUsersEN.isArchive && tzDataType.isBoolean(pobjQxUsersEN.isArchive) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否存档(isArchive)]的值:[${pobjQxUsersEN.isArchive}], 非法,应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.openId) == false && undefined !== pobjQxUsersEN.openId && tzDataType.isString(pobjQxUsersEN.openId) === false)
{
 throw new Error(`(errid:Watl000414)字段[微信openid(openId)]的值:[${pobjQxUsersEN.openId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.email) == false && undefined !== pobjQxUsersEN.email && tzDataType.isString(pobjQxUsersEN.email) === false)
{
 throw new Error(`(errid:Watl000414)字段[邮箱(email)]的值:[${pobjQxUsersEN.email}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false && undefined !== pobjQxUsersEN.phoneNumber && tzDataType.isString(pobjQxUsersEN.phoneNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[电话号码(phoneNumber)]的值:[${pobjQxUsersEN.phoneNumber}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (null != pobjQxUsersEN.isSynch && undefined !== pobjQxUsersEN.isSynch && tzDataType.isBoolean(pobjQxUsersEN.isSynch) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否同步(isSynch)]的值:[${pobjQxUsersEN.isSynch}], 非法,应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.synchDate) == false && undefined !== pobjQxUsersEN.synchDate && tzDataType.isString(pobjQxUsersEN.synchDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[同步日期(synchDate)]的值:[${pobjQxUsersEN.synchDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.detailInfoTab) == false && undefined !== pobjQxUsersEN.detailInfoTab && tzDataType.isString(pobjQxUsersEN.detailInfoTab) === false)
{
 throw new Error(`(errid:Watl000414)字段[详细信息表(detailInfoTab)]的值:[${pobjQxUsersEN.detailInfoTab}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idGradeBase) == false && undefined !== pobjQxUsersEN.idGradeBase && tzDataType.isString(pobjQxUsersEN.idGradeBase) === false)
{
 throw new Error(`(errid:Watl000414)字段[年级流水号(idGradeBase)]的值:[${pobjQxUsersEN.idGradeBase}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idSchool) == false && undefined !== pobjQxUsersEN.idSchool && tzDataType.isString(pobjQxUsersEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjQxUsersEN.idSchool}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idXzCollege) == false && undefined !== pobjQxUsersEN.idXzCollege && tzDataType.isString(pobjQxUsersEN.idXzCollege) === false)
{
 throw new Error(`(errid:Watl000414)字段[学院Id(idXzCollege)]的值:[${pobjQxUsersEN.idXzCollege}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updDate) == false && undefined !== pobjQxUsersEN.updDate && tzDataType.isString(pobjQxUsersEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxUsersEN.updDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updUser) == false && undefined !== pobjQxUsersEN.updUser && tzDataType.isString(pobjQxUsersEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxUsersEN.updUser}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.memo) == false && undefined !== pobjQxUsersEN.memo && tzDataType.isString(pobjQxUsersEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUsersEN.memo}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) == false && pobjQxUsersEN.userStateId != '[nuull]' && GetStrLen(pobjQxUsersEN.userStateId) !=  2)
{
 throw ("(errid:Watl000415)字段[用户状态Id]作为外键字段,长度应该为2(In 用户)!(clsQxUsersBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUsers_CheckProperty4Update(pobjQxUsersEN: clsQxUsersEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUsersEN.userId) == false && GetStrLen(pobjQxUsersEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户(QxUsers))!值:${pobjQxUsersEN.userId}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userName) == false && GetStrLen(pobjQxUsersEN.userName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[用户名(userName)]的长度不能超过30(In 用户(QxUsers))!值:${pobjQxUsersEN.userName}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.departmentId) == false && GetStrLen(pobjQxUsersEN.departmentId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[部门Id(departmentId)]的长度不能超过8(In 用户(QxUsers))!值:${pobjQxUsersEN.departmentId}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) == false && GetStrLen(pobjQxUsersEN.userStateId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[用户状态Id(userStateId)]的长度不能超过2(In 用户(QxUsers))!值:${pobjQxUsersEN.userStateId}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.password) == false && GetStrLen(pobjQxUsersEN.password) > 20)
{
 throw new Error(`(errid:Watl000416)字段[口令(password)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.password}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false && GetStrLen(pobjQxUsersEN.effitiveBeginDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户(QxUsers))!值:${pobjQxUsersEN.effitiveBeginDate}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false && GetStrLen(pobjQxUsersEN.effitiveEndDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户(QxUsers))!值:${pobjQxUsersEN.effitiveEndDate}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false && GetStrLen(pobjQxUsersEN.stuTeacherId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.stuTeacherId}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.identityId) == false && GetStrLen(pobjQxUsersEN.identityId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[身份编号(identityId)]的长度不能超过2(In 用户(QxUsers))!值:${pobjQxUsersEN.identityId}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.openId) == false && GetStrLen(pobjQxUsersEN.openId) > 50)
{
 throw new Error(`(errid:Watl000416)字段[微信openid(openId)]的长度不能超过50(In 用户(QxUsers))!值:${pobjQxUsersEN.openId}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.email) == false && GetStrLen(pobjQxUsersEN.email) > 100)
{
 throw new Error(`(errid:Watl000416)字段[邮箱(email)]的长度不能超过100(In 用户(QxUsers))!值:${pobjQxUsersEN.email}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false && GetStrLen(pobjQxUsersEN.phoneNumber) > 15)
{
 throw new Error(`(errid:Watl000416)字段[电话号码(phoneNumber)]的长度不能超过15(In 用户(QxUsers))!值:${pobjQxUsersEN.phoneNumber}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.synchDate) == false && GetStrLen(pobjQxUsersEN.synchDate) > 30)
{
 throw new Error(`(errid:Watl000416)字段[同步日期(synchDate)]的长度不能超过30(In 用户(QxUsers))!值:${pobjQxUsersEN.synchDate}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.detailInfoTab) == false && GetStrLen(pobjQxUsersEN.detailInfoTab) > 30)
{
 throw new Error(`(errid:Watl000416)字段[详细信息表(detailInfoTab)]的长度不能超过30(In 用户(QxUsers))!值:${pobjQxUsersEN.detailInfoTab}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idGradeBase) == false && GetStrLen(pobjQxUsersEN.idGradeBase) > 4)
{
 throw new Error(`(errid:Watl000416)字段[年级流水号(idGradeBase)]的长度不能超过4(In 用户(QxUsers))!值:${pobjQxUsersEN.idGradeBase}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idSchool) == false && GetStrLen(pobjQxUsersEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 用户(QxUsers))!值:${pobjQxUsersEN.idSchool}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idXzCollege) == false && GetStrLen(pobjQxUsersEN.idXzCollege) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学院Id(idXzCollege)]的长度不能超过4(In 用户(QxUsers))!值:${pobjQxUsersEN.idXzCollege}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updDate) == false && GetStrLen(pobjQxUsersEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.updDate}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updUser) == false && GetStrLen(pobjQxUsersEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 用户(QxUsers))!值:${pobjQxUsersEN.updUser}(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.memo) == false && GetStrLen(pobjQxUsersEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户(QxUsers))!值:${pobjQxUsersEN.memo}(clsQxUsersBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxUsersEN.userId) == false && undefined !== pobjQxUsersEN.userId && tzDataType.isString(pobjQxUsersEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUsersEN.userId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userName) == false && undefined !== pobjQxUsersEN.userName && tzDataType.isString(pobjQxUsersEN.userName) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户名(userName)]的值:[${pobjQxUsersEN.userName}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.departmentId) == false && undefined !== pobjQxUsersEN.departmentId && tzDataType.isString(pobjQxUsersEN.departmentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[部门Id(departmentId)]的值:[${pobjQxUsersEN.departmentId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) == false && undefined !== pobjQxUsersEN.userStateId && tzDataType.isString(pobjQxUsersEN.userStateId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户状态Id(userStateId)]的值:[${pobjQxUsersEN.userStateId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.password) == false && undefined !== pobjQxUsersEN.password && tzDataType.isString(pobjQxUsersEN.password) === false)
{
 throw new Error(`(errid:Watl000417)字段[口令(password)]的值:[${pobjQxUsersEN.password}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveBeginDate) == false && undefined !== pobjQxUsersEN.effitiveBeginDate && tzDataType.isString(pobjQxUsersEN.effitiveBeginDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[有效开始日期(effitiveBeginDate)]的值:[${pobjQxUsersEN.effitiveBeginDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.effitiveEndDate) == false && undefined !== pobjQxUsersEN.effitiveEndDate && tzDataType.isString(pobjQxUsersEN.effitiveEndDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[有效结束日期(effitiveEndDate)]的值:[${pobjQxUsersEN.effitiveEndDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.stuTeacherId) == false && undefined !== pobjQxUsersEN.stuTeacherId && tzDataType.isString(pobjQxUsersEN.stuTeacherId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学工号(stuTeacherId)]的值:[${pobjQxUsersEN.stuTeacherId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.identityId) == false && undefined !== pobjQxUsersEN.identityId && tzDataType.isString(pobjQxUsersEN.identityId) === false)
{
 throw new Error(`(errid:Watl000417)字段[身份编号(identityId)]的值:[${pobjQxUsersEN.identityId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (null != pobjQxUsersEN.isArchive && undefined !== pobjQxUsersEN.isArchive && tzDataType.isBoolean(pobjQxUsersEN.isArchive) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否存档(isArchive)]的值:[${pobjQxUsersEN.isArchive}], 非法,应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.openId) == false && undefined !== pobjQxUsersEN.openId && tzDataType.isString(pobjQxUsersEN.openId) === false)
{
 throw new Error(`(errid:Watl000417)字段[微信openid(openId)]的值:[${pobjQxUsersEN.openId}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.email) == false && undefined !== pobjQxUsersEN.email && tzDataType.isString(pobjQxUsersEN.email) === false)
{
 throw new Error(`(errid:Watl000417)字段[邮箱(email)]的值:[${pobjQxUsersEN.email}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.phoneNumber) == false && undefined !== pobjQxUsersEN.phoneNumber && tzDataType.isString(pobjQxUsersEN.phoneNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[电话号码(phoneNumber)]的值:[${pobjQxUsersEN.phoneNumber}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (null != pobjQxUsersEN.isSynch && undefined !== pobjQxUsersEN.isSynch && tzDataType.isBoolean(pobjQxUsersEN.isSynch) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否同步(isSynch)]的值:[${pobjQxUsersEN.isSynch}], 非法,应该为布尔型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.synchDate) == false && undefined !== pobjQxUsersEN.synchDate && tzDataType.isString(pobjQxUsersEN.synchDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[同步日期(synchDate)]的值:[${pobjQxUsersEN.synchDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.detailInfoTab) == false && undefined !== pobjQxUsersEN.detailInfoTab && tzDataType.isString(pobjQxUsersEN.detailInfoTab) === false)
{
 throw new Error(`(errid:Watl000417)字段[详细信息表(detailInfoTab)]的值:[${pobjQxUsersEN.detailInfoTab}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idGradeBase) == false && undefined !== pobjQxUsersEN.idGradeBase && tzDataType.isString(pobjQxUsersEN.idGradeBase) === false)
{
 throw new Error(`(errid:Watl000417)字段[年级流水号(idGradeBase)]的值:[${pobjQxUsersEN.idGradeBase}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idSchool) == false && undefined !== pobjQxUsersEN.idSchool && tzDataType.isString(pobjQxUsersEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjQxUsersEN.idSchool}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.idXzCollege) == false && undefined !== pobjQxUsersEN.idXzCollege && tzDataType.isString(pobjQxUsersEN.idXzCollege) === false)
{
 throw new Error(`(errid:Watl000417)字段[学院Id(idXzCollege)]的值:[${pobjQxUsersEN.idXzCollege}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updDate) == false && undefined !== pobjQxUsersEN.updDate && tzDataType.isString(pobjQxUsersEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxUsersEN.updDate}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.updUser) == false && undefined !== pobjQxUsersEN.updUser && tzDataType.isString(pobjQxUsersEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxUsersEN.updUser}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUsersEN.memo) == false && undefined !== pobjQxUsersEN.memo && tzDataType.isString(pobjQxUsersEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUsersEN.memo}], 非法,应该为字符型(In 用户(QxUsers))!(clsQxUsersBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxUsersEN.userId) === true 
 || pobjQxUsersEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[用户ID]不能为空(In 用户)!(clsQxUsersBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUsersEN.userStateId) == false && pobjQxUsersEN.userStateId != '[nuull]' && GetStrLen(pobjQxUsersEN.userStateId) !=  2)
{
 throw ("(errid:Watl000418)字段[用户状态Id]作为外键字段,长度应该为2(In 用户)!(clsQxUsersBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUsers_GetJSONStrByObj (pobjQxUsersEN: clsQxUsersEN): string
{
pobjQxUsersEN.sfUpdFldSetStr = pobjQxUsersEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUsersEN);
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
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxUsers_GetObjLstByJSONStr (strJSON: string): Array<clsQxUsersEN>
{
let arrQxUsersObjLst = new Array<clsQxUsersEN>();
if (strJSON === "")
{
return arrQxUsersObjLst;
}
try
{
arrQxUsersObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUsersObjLst;
}
return arrQxUsersObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUsersObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUsers_GetObjLstByJSONObjLst (arrQxUsersObjLstS: Array<clsQxUsersEN>): Array<clsQxUsersEN>
{
const arrQxUsersObjLst = new Array<clsQxUsersEN>();
for (const objInFor of arrQxUsersObjLstS) {
const obj1 = QxUsers_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUsersObjLst.push(obj1);
}
return arrQxUsersObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-05-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUsers_GetObjByJSONStr (strJSON: string): clsQxUsersEN
{
let pobjQxUsersEN = new clsQxUsersEN();
if (strJSON === "")
{
return pobjQxUsersEN;
}
try
{
pobjQxUsersEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUsersEN;
}
return pobjQxUsersEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUsers_GetCombineCondition(objQxUsersCond: clsQxUsersEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_UserId, objQxUsersCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_UserName, objQxUsersCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_DepartmentId) == true)
{
const strComparisonOpDepartmentId:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_DepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_DepartmentId, objQxUsersCond.departmentId, strComparisonOpDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_UserStateId) == true)
{
const strComparisonOpUserStateId:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UserStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_UserStateId, objQxUsersCond.userStateId, strComparisonOpUserStateId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_Password) == true)
{
const strComparisonOpPassword:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_Password];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_Password, objQxUsersCond.password, strComparisonOpPassword);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_EffitiveBeginDate) == true)
{
const strComparisonOpEffitiveBeginDate:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_EffitiveBeginDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_EffitiveBeginDate, objQxUsersCond.effitiveBeginDate, strComparisonOpEffitiveBeginDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_EffitiveEndDate) == true)
{
const strComparisonOpEffitiveEndDate:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_EffitiveEndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_EffitiveEndDate, objQxUsersCond.effitiveEndDate, strComparisonOpEffitiveEndDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_StuTeacherId) == true)
{
const strComparisonOpStuTeacherId:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_StuTeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_StuTeacherId, objQxUsersCond.stuTeacherId, strComparisonOpStuTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_IdentityId) == true)
{
const strComparisonOpIdentityId:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_IdentityId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_IdentityId, objQxUsersCond.identityId, strComparisonOpIdentityId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_IsArchive) == true)
{
if (objQxUsersCond.isArchive == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsersEN.con_IsArchive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsersEN.con_IsArchive);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_OpenId) == true)
{
const strComparisonOpOpenId:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_OpenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_OpenId, objQxUsersCond.openId, strComparisonOpOpenId);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_Email) == true)
{
const strComparisonOpEmail:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_Email, objQxUsersCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_PhoneNumber, objQxUsersCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_IsSynch) == true)
{
if (objQxUsersCond.isSynch == true)
{
strWhereCond += Format(" And {0} = '1'", clsQxUsersEN.con_IsSynch);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsQxUsersEN.con_IsSynch);
}
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_SynchDate) == true)
{
const strComparisonOpSynchDate:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_SynchDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_SynchDate, objQxUsersCond.synchDate, strComparisonOpSynchDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_DetailInfoTab) == true)
{
const strComparisonOpDetailInfoTab:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_DetailInfoTab];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_DetailInfoTab, objQxUsersCond.detailInfoTab, strComparisonOpDetailInfoTab);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_IdGradeBase, objQxUsersCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_IdSchool, objQxUsersCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_IdXzCollege, objQxUsersCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_UpdDate, objQxUsersCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_UpdUser, objQxUsersCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxUsersCond.dicFldComparisonOp, clsQxUsersEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUsersCond.dicFldComparisonOp[clsQxUsersEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUsersEN.con_Memo, objQxUsersCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUsersENS:源对象
 * @param objQxUsersENT:目标对象
*/
export  function QxUsers_GetObjFromJsonObj(objQxUsersENS: clsQxUsersEN): clsQxUsersEN 
{
 const objQxUsersENT: clsQxUsersEN = new clsQxUsersEN();
ObjectAssign(objQxUsersENT, objQxUsersENS);
 return objQxUsersENT;
}