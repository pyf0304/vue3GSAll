
 /**
 * 类名:clsQxRolePotenceRelaWApi
 * 表名:QxRolePotenceRela(00140123)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 23:58:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色权限关系(QxRolePotenceRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年01月20日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsQxRolePotenceRelaEN } from "@/ts/L0Entity/PotenceMan/clsQxRolePotenceRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxRolePotenceRela_Controller = "QxRolePotenceRelaApi";
 export const qxRolePotenceRela_ConstructorName = "qxRolePotenceRela";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function QxRolePotenceRela_SplitKeyLst(strKeyLst: string)  
{
const arrKey = strKeyLst.split('|');
if (arrKey.length != 2)
{
const strMsg = "请选择需要修改的记录!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
const objKeyLst = {
roleId: arrKey[0],
potenceId: arrKey[1],
};
if (IsNullOrEmpty(objKeyLst.roleId)== true)
{
const strMsg = "关键字段(roleId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.potenceId)== true)
{
const strMsg = "关键字段(potenceId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleId:关键字
 * @returns 对象
 **/
export  async function QxRolePotenceRela_GetObjByKeyLstAsync(strRoleId: string,strPotenceId: string): Promise<clsQxRolePotenceRelaEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strRoleId) == true)
{
  const strMsg = Format("参数:[strRoleId]不能为空!(In clsQxRolePotenceRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strRoleId.length != 8)
{
const strMsg = Format("缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsQxRolePotenceRelaWApi.GetObjByKeyLstAsync)", strRoleId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strPotenceId) == true)
{
  const strMsg = Format("参数:[strPotenceId]不能为空!(In clsQxRolePotenceRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPotenceId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPotenceId]的长度:[{0}]不正确!(clsQxRolePotenceRelaWApi.GetObjByKeyLstAsync)", strPotenceId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleId,
strPotenceId,
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
const objQxRolePotenceRela = QxRolePotenceRela_GetObjFromJsonObj(returnObj);
return objQxRolePotenceRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByKeyLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByKeyLstlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByRoleIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRolePotenceRela_SortFunDefa(a:clsQxRolePotenceRelaEN , b:clsQxRolePotenceRelaEN): number 
{
return a.roleId.localeCompare(b.roleId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRolePotenceRela_SortFunDefa2Fld(a:clsQxRolePotenceRelaEN , b:clsQxRolePotenceRelaEN): number 
{
if (a.qxPrjId == b.qxPrjId) return a.updDate.localeCompare(b.updDate);
else return a.qxPrjId.localeCompare(b.qxPrjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxRolePotenceRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxRolePotenceRelaEN.con_RoleId:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsQxRolePotenceRelaEN.con_PotenceId:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return a.potenceId.localeCompare(b.potenceId);
}
case clsQxRolePotenceRelaEN.con_QxPrjId:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxRolePotenceRelaEN.con_UpdDate:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxRolePotenceRelaEN.con_UpdUser:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQxRolePotenceRelaEN.con_Memo:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRolePotenceRela]中不存在!(in ${ qxRolePotenceRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxRolePotenceRelaEN.con_RoleId:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsQxRolePotenceRelaEN.con_PotenceId:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return b.potenceId.localeCompare(a.potenceId);
}
case clsQxRolePotenceRelaEN.con_QxPrjId:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxRolePotenceRelaEN.con_UpdDate:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxRolePotenceRelaEN.con_UpdUser:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQxRolePotenceRelaEN.con_Memo:
return (a: clsQxRolePotenceRelaEN, b: clsQxRolePotenceRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRolePotenceRela]中不存在!(in ${ qxRolePotenceRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxRolePotenceRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxRolePotenceRelaEN.con_RoleId:
return (obj: clsQxRolePotenceRelaEN) => {
return obj.roleId === value;
}
case clsQxRolePotenceRelaEN.con_PotenceId:
return (obj: clsQxRolePotenceRelaEN) => {
return obj.potenceId === value;
}
case clsQxRolePotenceRelaEN.con_QxPrjId:
return (obj: clsQxRolePotenceRelaEN) => {
return obj.qxPrjId === value;
}
case clsQxRolePotenceRelaEN.con_UpdDate:
return (obj: clsQxRolePotenceRelaEN) => {
return obj.updDate === value;
}
case clsQxRolePotenceRelaEN.con_UpdUser:
return (obj: clsQxRolePotenceRelaEN) => {
return obj.updUser === value;
}
case clsQxRolePotenceRelaEN.con_Memo:
return (obj: clsQxRolePotenceRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxRolePotenceRela]中不存在!(in ${ qxRolePotenceRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[QxRolePotenceRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRolePotenceRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetFirstObjAsync(strWhereCond: string): Promise<clsQxRolePotenceRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const objQxRolePotenceRela = QxRolePotenceRela_GetObjFromJsonObj(returnObj);
return objQxRolePotenceRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxRolePotenceRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRolePotenceRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByRoleIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function QxRolePotenceRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxRolePotenceRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRolePotenceRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxRolePotenceRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRolePotenceRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxRolePotenceRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxRolePotenceRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxRolePotenceRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param strRoleId,strPotenceId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function QxRolePotenceRela_DelRecKeyLstAsync(strRoleId: string,strPotenceId: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
"RoleId": strRoleId, 
"PotenceId": strPotenceId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export  async function QxRolePotenceRela_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKeyLsts, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_DelQxRolePotenceRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxRolePotenceRelasByCondAsync";
const strAction = "DelQxRolePotenceRelasByCond";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param objQxRolePotenceRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRolePotenceRela_AddNewRecordAsync(objQxRolePotenceRelaEN: clsQxRolePotenceRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objQxRolePotenceRelaEN.roleId === null || objQxRolePotenceRelaEN.roleId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objQxRolePotenceRelaEN);
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolePotenceRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param objQxRolePotenceRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxRolePotenceRela_AddNewRecordWithMaxIdAsync(objQxRolePotenceRelaEN: clsQxRolePotenceRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolePotenceRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param objQxRolePotenceRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxRolePotenceRela_AddNewRecordWithReturnKeyAsync(objQxRolePotenceRelaEN: clsQxRolePotenceRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolePotenceRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param objQxRolePotenceRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxRolePotenceRela_UpdateRecordAsync(objQxRolePotenceRelaEN: clsQxRolePotenceRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxRolePotenceRelaEN.sfUpdFldSetStr === undefined || objQxRolePotenceRelaEN.sfUpdFldSetStr === null || objQxRolePotenceRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRolePotenceRelaEN.roleId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolePotenceRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param objQxRolePotenceRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxRolePotenceRela_UpdateWithConditionAsync(objQxRolePotenceRelaEN: clsQxRolePotenceRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxRolePotenceRelaEN.sfUpdFldSetStr === undefined || objQxRolePotenceRelaEN.sfUpdFldSetStr === null || objQxRolePotenceRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxRolePotenceRelaEN.roleId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);
objQxRolePotenceRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxRolePotenceRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
 * @param strRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function QxRolePotenceRela_IsExistAsync(strRoleId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strRoleId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  async function QxRolePotenceRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxRolePotenceRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxRolePotenceRela_ConstructorName, strThisFuncName);
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
export  function QxRolePotenceRela_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRolePotenceRela_CheckPropertyNew(pobjQxRolePotenceRelaEN: clsQxRolePotenceRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) === true 
 || pobjQxRolePotenceRelaEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[项目Id]不能为空(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updUser) === true )
{
 throw new Error("(errid:Watl000411)字段[修改用户]不能为空(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) == false && GetStrLen(pobjQxRolePotenceRelaEN.roleId) > 8)
{
 throw new Error("(errid:Watl000413)字段[角色Id(roleId)]的长度不能超过8(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.roleId)(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.potenceId) == false && GetStrLen(pobjQxRolePotenceRelaEN.potenceId) > 8)
{
 throw new Error("(errid:Watl000413)字段[权限ID(potenceId)]的长度不能超过8(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.potenceId)(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) == false && GetStrLen(pobjQxRolePotenceRelaEN.qxPrjId) > 4)
{
 throw new Error("(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.qxPrjId)(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updDate) == false && GetStrLen(pobjQxRolePotenceRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.updDate)(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updUser) == false && GetStrLen(pobjQxRolePotenceRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.updUser)(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.memo) == false && GetStrLen(pobjQxRolePotenceRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.memo)(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) == false && undefined !== pobjQxRolePotenceRelaEN.roleId && tzDataType.isString(pobjQxRolePotenceRelaEN.roleId) === false)
{
 throw new Error("(errid:Watl000414)字段[角色Id(roleId)]的值:[$(pobjQxRolePotenceRelaEN.roleId)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.potenceId) == false && undefined !== pobjQxRolePotenceRelaEN.potenceId && tzDataType.isString(pobjQxRolePotenceRelaEN.potenceId) === false)
{
 throw new Error("(errid:Watl000414)字段[权限ID(potenceId)]的值:[$(pobjQxRolePotenceRelaEN.potenceId)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) == false && undefined !== pobjQxRolePotenceRelaEN.qxPrjId && tzDataType.isString(pobjQxRolePotenceRelaEN.qxPrjId) === false)
{
 throw new Error("(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[$(pobjQxRolePotenceRelaEN.qxPrjId)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updDate) == false && undefined !== pobjQxRolePotenceRelaEN.updDate && tzDataType.isString(pobjQxRolePotenceRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjQxRolePotenceRelaEN.updDate)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updUser) == false && undefined !== pobjQxRolePotenceRelaEN.updUser && tzDataType.isString(pobjQxRolePotenceRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改用户(updUser)]的值:[$(pobjQxRolePotenceRelaEN.updUser)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.memo) == false && undefined !== pobjQxRolePotenceRelaEN.memo && tzDataType.isString(pobjQxRolePotenceRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxRolePotenceRelaEN.memo)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) == false && pobjQxRolePotenceRelaEN.roleId != '[nuull]' && GetStrLen(pobjQxRolePotenceRelaEN.roleId) !=  8)
{
 throw ("(errid:Watl000415)字段[角色Id]作为外键字段,长度应该为8(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) == false && pobjQxRolePotenceRelaEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRolePotenceRelaEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxRolePotenceRela_CheckProperty4Update(pobjQxRolePotenceRelaEN: clsQxRolePotenceRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) == false && GetStrLen(pobjQxRolePotenceRelaEN.roleId) > 8)
{
 throw new Error("(errid:Watl000416)字段[角色Id(roleId)]的长度不能超过8(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.roleId)(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.potenceId) == false && GetStrLen(pobjQxRolePotenceRelaEN.potenceId) > 8)
{
 throw new Error("(errid:Watl000416)字段[权限ID(potenceId)]的长度不能超过8(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.potenceId)(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) == false && GetStrLen(pobjQxRolePotenceRelaEN.qxPrjId) > 4)
{
 throw new Error("(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.qxPrjId)(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updDate) == false && GetStrLen(pobjQxRolePotenceRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.updDate)(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updUser) == false && GetStrLen(pobjQxRolePotenceRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.updUser)(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.memo) == false && GetStrLen(pobjQxRolePotenceRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 角色权限关系(QxRolePotenceRela))!值:$(pobjQxRolePotenceRelaEN.memo)(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) == false && undefined !== pobjQxRolePotenceRelaEN.roleId && tzDataType.isString(pobjQxRolePotenceRelaEN.roleId) === false)
{
 throw new Error("(errid:Watl000417)字段[角色Id(roleId)]的值:[$(pobjQxRolePotenceRelaEN.roleId)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.potenceId) == false && undefined !== pobjQxRolePotenceRelaEN.potenceId && tzDataType.isString(pobjQxRolePotenceRelaEN.potenceId) === false)
{
 throw new Error("(errid:Watl000417)字段[权限ID(potenceId)]的值:[$(pobjQxRolePotenceRelaEN.potenceId)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) == false && undefined !== pobjQxRolePotenceRelaEN.qxPrjId && tzDataType.isString(pobjQxRolePotenceRelaEN.qxPrjId) === false)
{
 throw new Error("(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[$(pobjQxRolePotenceRelaEN.qxPrjId)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updDate) == false && undefined !== pobjQxRolePotenceRelaEN.updDate && tzDataType.isString(pobjQxRolePotenceRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjQxRolePotenceRelaEN.updDate)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.updUser) == false && undefined !== pobjQxRolePotenceRelaEN.updUser && tzDataType.isString(pobjQxRolePotenceRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改用户(updUser)]的值:[$(pobjQxRolePotenceRelaEN.updUser)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.memo) == false && undefined !== pobjQxRolePotenceRelaEN.memo && tzDataType.isString(pobjQxRolePotenceRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxRolePotenceRelaEN.memo)], 非法,应该为字符型(In 角色权限关系(QxRolePotenceRela))!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) === true 
 || pobjQxRolePotenceRelaEN.roleId.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000064)字段[角色Id]不能为空(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.roleId) == false && pobjQxRolePotenceRelaEN.roleId != '[nuull]' && GetStrLen(pobjQxRolePotenceRelaEN.roleId) !=  8)
{
 throw ("(errid:Watl000418)字段[角色Id]作为外键字段,长度应该为8(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxRolePotenceRelaEN.qxPrjId) == false && pobjQxRolePotenceRelaEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxRolePotenceRelaEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 角色权限关系)!(clsQxRolePotenceRelaBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRolePotenceRela_GetJSONStrByObj (pobjQxRolePotenceRelaEN: clsQxRolePotenceRelaEN): string
{
pobjQxRolePotenceRelaEN.sfUpdFldSetStr = pobjQxRolePotenceRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxRolePotenceRelaEN);
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
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxRolePotenceRela_GetObjLstByJSONStr (strJSON: string): Array<clsQxRolePotenceRelaEN>
{
let arrQxRolePotenceRelaObjLst = new Array<clsQxRolePotenceRelaEN>();
if (strJSON === "")
{
return arrQxRolePotenceRelaObjLst;
}
try
{
arrQxRolePotenceRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxRolePotenceRelaObjLst;
}
return arrQxRolePotenceRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRolePotenceRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxRolePotenceRela_GetObjLstByJSONObjLst (arrQxRolePotenceRelaObjLstS: Array<clsQxRolePotenceRelaEN>): Array<clsQxRolePotenceRelaEN>
{
const arrQxRolePotenceRelaObjLst = new Array<clsQxRolePotenceRelaEN>();
for (const objInFor of arrQxRolePotenceRelaObjLstS) {
const obj1 = QxRolePotenceRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxRolePotenceRelaObjLst.push(obj1);
}
return arrQxRolePotenceRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-20
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxRolePotenceRela_GetObjByJSONStr (strJSON: string): clsQxRolePotenceRelaEN
{
let pobjQxRolePotenceRelaEN = new clsQxRolePotenceRelaEN();
if (strJSON === "")
{
return pobjQxRolePotenceRelaEN;
}
try
{
pobjQxRolePotenceRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxRolePotenceRelaEN;
}
return pobjQxRolePotenceRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxRolePotenceRela_GetCombineCondition(objQxRolePotenceRelaCond: clsQxRolePotenceRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxRolePotenceRelaCond.dicFldComparisonOp, clsQxRolePotenceRelaEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objQxRolePotenceRelaCond.dicFldComparisonOp[clsQxRolePotenceRelaEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolePotenceRelaEN.con_RoleId, objQxRolePotenceRelaCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objQxRolePotenceRelaCond.dicFldComparisonOp, clsQxRolePotenceRelaEN.con_PotenceId) == true)
{
const strComparisonOpPotenceId:string = objQxRolePotenceRelaCond.dicFldComparisonOp[clsQxRolePotenceRelaEN.con_PotenceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolePotenceRelaEN.con_PotenceId, objQxRolePotenceRelaCond.potenceId, strComparisonOpPotenceId);
}
if (Object.prototype.hasOwnProperty.call(objQxRolePotenceRelaCond.dicFldComparisonOp, clsQxRolePotenceRelaEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxRolePotenceRelaCond.dicFldComparisonOp[clsQxRolePotenceRelaEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolePotenceRelaEN.con_QxPrjId, objQxRolePotenceRelaCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxRolePotenceRelaCond.dicFldComparisonOp, clsQxRolePotenceRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxRolePotenceRelaCond.dicFldComparisonOp[clsQxRolePotenceRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolePotenceRelaEN.con_UpdDate, objQxRolePotenceRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxRolePotenceRelaCond.dicFldComparisonOp, clsQxRolePotenceRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxRolePotenceRelaCond.dicFldComparisonOp[clsQxRolePotenceRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolePotenceRelaEN.con_UpdUser, objQxRolePotenceRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxRolePotenceRelaCond.dicFldComparisonOp, clsQxRolePotenceRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxRolePotenceRelaCond.dicFldComparisonOp[clsQxRolePotenceRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxRolePotenceRelaEN.con_Memo, objQxRolePotenceRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRolePotenceRelaENS:源对象
 * @param objQxRolePotenceRelaENT:目标对象
*/
export  function QxRolePotenceRela_GetObjFromJsonObj(objQxRolePotenceRelaENS: clsQxRolePotenceRelaEN): clsQxRolePotenceRelaEN 
{
 const objQxRolePotenceRelaENT: clsQxRolePotenceRelaEN = new clsQxRolePotenceRelaEN();
ObjectAssign(objQxRolePotenceRelaENT, objQxRolePotenceRelaENS);
 return objQxRolePotenceRelaENT;
}