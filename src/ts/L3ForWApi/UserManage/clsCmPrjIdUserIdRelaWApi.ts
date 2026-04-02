
 /**
 * 类名:clsCmPrjIdUserIdRelaWApi
 * 表名:CmPrjIdUserIdRela(01120946)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:02
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
 * Cm项目Id用户关系(CmPrjIdUserIdRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsCmPrjIdUserIdRelaEN } from "@/ts/L0Entity/UserManage/clsCmPrjIdUserIdRelaEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const cmPrjIdUserIdRela_Controller = "CmPrjIdUserIdRelaApi";
 export const cmPrjIdUserIdRela_ConstructorName = "cmPrjIdUserIdRela";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function CmPrjIdUserIdRela_SplitKeyLst(strKeyLst: string)  
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
cmPrjId: arrKey[0],
userId: arrKey[1],
};
if (IsNullOrEmpty(objKeyLst.cmPrjId)== true)
{
const strMsg = "关键字段(cmPrjId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.userId)== true)
{
const strMsg = "关键字段(userId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmPrjId:关键字
 * @returns 对象
 **/
export  async function CmPrjIdUserIdRela_GetObjByKeyLstAsync(strCmPrjId: string,strUserId: string): Promise<clsCmPrjIdUserIdRelaEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (IsNullOrEmpty(strCmPrjId) == true)
{
  const strMsg = Format("参数:[strCmPrjId]不能为空!(In clsCmPrjIdUserIdRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCmPrjId.length != 6)
{
const strMsg = Format("缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCmPrjIdUserIdRelaWApi.GetObjByKeyLstAsync)", strCmPrjId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsCmPrjIdUserIdRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCmPrjId,
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
const objCmPrjIdUserIdRela = CmPrjIdUserIdRela_GetObjFromJsonObj(returnObj);
return objCmPrjIdUserIdRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetNameByCmPrjIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function CmPrjIdUserIdRela_SortFunDefa(a:clsCmPrjIdUserIdRelaEN , b:clsCmPrjIdUserIdRelaEN): number 
{
return a.cmPrjId.localeCompare(b.cmPrjId);
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
export  function CmPrjIdUserIdRela_SortFunDefa2Fld(a:clsCmPrjIdUserIdRelaEN , b:clsCmPrjIdUserIdRelaEN): number 
{
if (a.updDate == b.updDate) return a.updUser.localeCompare(b.updUser);
else return a.updDate.localeCompare(b.updDate);
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
export  function CmPrjIdUserIdRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCmPrjIdUserIdRelaEN.con_CmPrjId:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
return a.cmPrjId.localeCompare(b.cmPrjId);
}
case clsCmPrjIdUserIdRelaEN.con_UserId:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
return a.userId.localeCompare(b.userId);
}
case clsCmPrjIdUserIdRelaEN.con_UpdDate:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsCmPrjIdUserIdRelaEN.con_UpdUser:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsCmPrjIdUserIdRelaEN.con_Memo:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CmPrjIdUserIdRela]中不存在!(in ${ cmPrjIdUserIdRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsCmPrjIdUserIdRelaEN.con_CmPrjId:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
return b.cmPrjId.localeCompare(a.cmPrjId);
}
case clsCmPrjIdUserIdRelaEN.con_UserId:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
return b.userId.localeCompare(a.userId);
}
case clsCmPrjIdUserIdRelaEN.con_UpdDate:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsCmPrjIdUserIdRelaEN.con_UpdUser:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsCmPrjIdUserIdRelaEN.con_Memo:
return (a: clsCmPrjIdUserIdRelaEN, b: clsCmPrjIdUserIdRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CmPrjIdUserIdRela]中不存在!(in ${ cmPrjIdUserIdRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function CmPrjIdUserIdRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsCmPrjIdUserIdRelaEN.con_CmPrjId:
return (obj: clsCmPrjIdUserIdRelaEN) => {
return obj.cmPrjId === value;
}
case clsCmPrjIdUserIdRelaEN.con_UserId:
return (obj: clsCmPrjIdUserIdRelaEN) => {
return obj.userId === value;
}
case clsCmPrjIdUserIdRelaEN.con_UpdDate:
return (obj: clsCmPrjIdUserIdRelaEN) => {
return obj.updDate === value;
}
case clsCmPrjIdUserIdRelaEN.con_UpdUser:
return (obj: clsCmPrjIdUserIdRelaEN) => {
return obj.updUser === value;
}
case clsCmPrjIdUserIdRelaEN.con_Memo:
return (obj: clsCmPrjIdUserIdRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CmPrjIdUserIdRela]中不存在!(in ${ cmPrjIdUserIdRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[CmPrjIdUserIdRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CmPrjIdUserIdRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetFirstObjAsync(strWhereCond: string): Promise<clsCmPrjIdUserIdRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const objCmPrjIdUserIdRela = CmPrjIdUserIdRela_GetObjFromJsonObj(returnObj);
return objCmPrjIdUserIdRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCmPrjIdUserIdRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CmPrjIdUserIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjLstByCmPrjIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function CmPrjIdUserIdRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsCmPrjIdUserIdRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CmPrjIdUserIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsCmPrjIdUserIdRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CmPrjIdUserIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsCmPrjIdUserIdRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsCmPrjIdUserIdRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CmPrjIdUserIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param strCmPrjId,strUserId:关键字列表
 * @returns 获取删除的结果
 **/
export  async function CmPrjIdUserIdRela_DelRecKeyLstAsync(strCmPrjId: string,strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecKeyLstAsync";
const strAction = "DelRecKeyLst";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
"CmPrjId": strCmPrjId, 
"UserId": strUserId, 
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_DelRecKeyLstsAsync(arrKeyLsts: Array<string>): Promise<number> 
{
const strThisFuncName = "DelRecKeyLstsAsync";
const strAction = "DelRecKeyLsts";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_DelCmPrjIdUserIdRelasByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelCmPrjIdUserIdRelasByCondAsync";
const strAction = "DelCmPrjIdUserIdRelasByCond";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param objCmPrjIdUserIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CmPrjIdUserIdRela_AddNewRecordAsync(objCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objCmPrjIdUserIdRelaEN.cmPrjId === null || objCmPrjIdUserIdRelaEN.cmPrjId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objCmPrjIdUserIdRelaEN);
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCmPrjIdUserIdRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param objCmPrjIdUserIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CmPrjIdUserIdRela_AddNewRecordWithMaxIdAsync(objCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCmPrjIdUserIdRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param objCmPrjIdUserIdRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function CmPrjIdUserIdRela_AddNewRecordWithReturnKeyAsync(objCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCmPrjIdUserIdRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param objCmPrjIdUserIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CmPrjIdUserIdRela_UpdateRecordAsync(objCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objCmPrjIdUserIdRelaEN.sfUpdFldSetStr === undefined || objCmPrjIdUserIdRelaEN.sfUpdFldSetStr === null || objCmPrjIdUserIdRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCmPrjIdUserIdRelaEN.cmPrjId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCmPrjIdUserIdRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param objCmPrjIdUserIdRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CmPrjIdUserIdRela_UpdateWithConditionAsync(objCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objCmPrjIdUserIdRelaEN.sfUpdFldSetStr === undefined || objCmPrjIdUserIdRelaEN.sfUpdFldSetStr === null || objCmPrjIdUserIdRelaEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCmPrjIdUserIdRelaEN.cmPrjId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);
objCmPrjIdUserIdRelaEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCmPrjIdUserIdRelaEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
 * @param strCmPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function CmPrjIdUserIdRela_IsExistAsync(strCmPrjId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCmPrjId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  async function CmPrjIdUserIdRela_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cmPrjIdUserIdRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cmPrjIdUserIdRela_ConstructorName, strThisFuncName);
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
export  function CmPrjIdUserIdRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function CmPrjIdUserIdRela_CheckPropertyNew(pobjCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.cmPrjId) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.cmPrjId) > 6)
{
 throw new Error("(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.cmPrjId)(clsCmPrjIdUserIdRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.userId) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.userId) > 18)
{
 throw new Error("(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.userId)(clsCmPrjIdUserIdRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updDate) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.updDate)(clsCmPrjIdUserIdRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updUser) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.updUser)(clsCmPrjIdUserIdRelaBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.memo) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.memo)(clsCmPrjIdUserIdRelaBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.cmPrjId) == false && undefined !== pobjCmPrjIdUserIdRelaEN.cmPrjId && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.cmPrjId) === false)
{
 throw new Error("(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjCmPrjIdUserIdRelaEN.cmPrjId)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.userId) == false && undefined !== pobjCmPrjIdUserIdRelaEN.userId && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.userId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjCmPrjIdUserIdRelaEN.userId)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updDate) == false && undefined !== pobjCmPrjIdUserIdRelaEN.updDate && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCmPrjIdUserIdRelaEN.updDate)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updUser) == false && undefined !== pobjCmPrjIdUserIdRelaEN.updUser && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjCmPrjIdUserIdRelaEN.updUser)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.memo) == false && undefined !== pobjCmPrjIdUserIdRelaEN.memo && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjCmPrjIdUserIdRelaEN.memo)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CmPrjIdUserIdRela_CheckProperty4Update(pobjCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.cmPrjId) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.cmPrjId) > 6)
{
 throw new Error("(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.cmPrjId)(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.userId) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.userId) > 18)
{
 throw new Error("(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.userId)(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updDate) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.updDate)(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updUser) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.updUser)(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.memo) == false && GetStrLen(pobjCmPrjIdUserIdRelaEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In Cm项目Id用户关系(CmPrjIdUserIdRela))!值:$(pobjCmPrjIdUserIdRelaEN.memo)(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.cmPrjId) == false && undefined !== pobjCmPrjIdUserIdRelaEN.cmPrjId && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.cmPrjId) === false)
{
 throw new Error("(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjCmPrjIdUserIdRelaEN.cmPrjId)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.userId) == false && undefined !== pobjCmPrjIdUserIdRelaEN.userId && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.userId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjCmPrjIdUserIdRelaEN.userId)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updDate) == false && undefined !== pobjCmPrjIdUserIdRelaEN.updDate && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCmPrjIdUserIdRelaEN.updDate)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.updUser) == false && undefined !== pobjCmPrjIdUserIdRelaEN.updUser && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjCmPrjIdUserIdRelaEN.updUser)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.memo) == false && undefined !== pobjCmPrjIdUserIdRelaEN.memo && tzDataType.isString(pobjCmPrjIdUserIdRelaEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjCmPrjIdUserIdRelaEN.memo)], 非法,应该为字符型(In Cm项目Id用户关系(CmPrjIdUserIdRela))!(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjCmPrjIdUserIdRelaEN.cmPrjId) === true )
{
 throw new Error("(errid:Watl000064)字段[CM工程Id]不能为空(In Cm项目Id用户关系)!(clsCmPrjIdUserIdRelaBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CmPrjIdUserIdRela_GetJSONStrByObj (pobjCmPrjIdUserIdRelaEN: clsCmPrjIdUserIdRelaEN): string
{
pobjCmPrjIdUserIdRelaEN.sfUpdFldSetStr = pobjCmPrjIdUserIdRelaEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjCmPrjIdUserIdRelaEN);
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
export  function CmPrjIdUserIdRela_GetObjLstByJSONStr (strJSON: string): Array<clsCmPrjIdUserIdRelaEN>
{
let arrCmPrjIdUserIdRelaObjLst = new Array<clsCmPrjIdUserIdRelaEN>();
if (strJSON === "")
{
return arrCmPrjIdUserIdRelaObjLst;
}
try
{
arrCmPrjIdUserIdRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrCmPrjIdUserIdRelaObjLst;
}
return arrCmPrjIdUserIdRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCmPrjIdUserIdRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function CmPrjIdUserIdRela_GetObjLstByJSONObjLst (arrCmPrjIdUserIdRelaObjLstS: Array<clsCmPrjIdUserIdRelaEN>): Array<clsCmPrjIdUserIdRelaEN>
{
const arrCmPrjIdUserIdRelaObjLst = new Array<clsCmPrjIdUserIdRelaEN>();
for (const objInFor of arrCmPrjIdUserIdRelaObjLstS) {
const obj1 = CmPrjIdUserIdRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrCmPrjIdUserIdRelaObjLst.push(obj1);
}
return arrCmPrjIdUserIdRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CmPrjIdUserIdRela_GetObjByJSONStr (strJSON: string): clsCmPrjIdUserIdRelaEN
{
let pobjCmPrjIdUserIdRelaEN = new clsCmPrjIdUserIdRelaEN();
if (strJSON === "")
{
return pobjCmPrjIdUserIdRelaEN;
}
try
{
pobjCmPrjIdUserIdRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjCmPrjIdUserIdRelaEN;
}
return pobjCmPrjIdUserIdRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function CmPrjIdUserIdRela_GetCombineCondition(objCmPrjIdUserIdRelaCond: clsCmPrjIdUserIdRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objCmPrjIdUserIdRelaCond.dicFldComparisonOp, clsCmPrjIdUserIdRelaEN.con_CmPrjId) == true)
{
const strComparisonOpCmPrjId:string = objCmPrjIdUserIdRelaCond.dicFldComparisonOp[clsCmPrjIdUserIdRelaEN.con_CmPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCmPrjIdUserIdRelaEN.con_CmPrjId, objCmPrjIdUserIdRelaCond.cmPrjId, strComparisonOpCmPrjId);
}
if (Object.prototype.hasOwnProperty.call(objCmPrjIdUserIdRelaCond.dicFldComparisonOp, clsCmPrjIdUserIdRelaEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objCmPrjIdUserIdRelaCond.dicFldComparisonOp[clsCmPrjIdUserIdRelaEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCmPrjIdUserIdRelaEN.con_UserId, objCmPrjIdUserIdRelaCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objCmPrjIdUserIdRelaCond.dicFldComparisonOp, clsCmPrjIdUserIdRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objCmPrjIdUserIdRelaCond.dicFldComparisonOp[clsCmPrjIdUserIdRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsCmPrjIdUserIdRelaEN.con_UpdDate, objCmPrjIdUserIdRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objCmPrjIdUserIdRelaCond.dicFldComparisonOp, clsCmPrjIdUserIdRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objCmPrjIdUserIdRelaCond.dicFldComparisonOp[clsCmPrjIdUserIdRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsCmPrjIdUserIdRelaEN.con_UpdUser, objCmPrjIdUserIdRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objCmPrjIdUserIdRelaCond.dicFldComparisonOp, clsCmPrjIdUserIdRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objCmPrjIdUserIdRelaCond.dicFldComparisonOp[clsCmPrjIdUserIdRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsCmPrjIdUserIdRelaEN.con_Memo, objCmPrjIdUserIdRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCmPrjIdUserIdRelaENS:源对象
 * @param objCmPrjIdUserIdRelaENT:目标对象
*/
export  function CmPrjIdUserIdRela_CopyObjTo(objCmPrjIdUserIdRelaENS: clsCmPrjIdUserIdRelaEN , objCmPrjIdUserIdRelaENT: clsCmPrjIdUserIdRelaEN ): void 
{
objCmPrjIdUserIdRelaENT.cmPrjId = objCmPrjIdUserIdRelaENS.cmPrjId; //CM工程Id
objCmPrjIdUserIdRelaENT.userId = objCmPrjIdUserIdRelaENS.userId; //用户ID
objCmPrjIdUserIdRelaENT.updDate = objCmPrjIdUserIdRelaENS.updDate; //修改日期
objCmPrjIdUserIdRelaENT.updUser = objCmPrjIdUserIdRelaENS.updUser; //修改人
objCmPrjIdUserIdRelaENT.memo = objCmPrjIdUserIdRelaENS.memo; //备注
objCmPrjIdUserIdRelaENT.sfUpdFldSetStr = objCmPrjIdUserIdRelaENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCmPrjIdUserIdRelaENS:源对象
 * @param objCmPrjIdUserIdRelaENT:目标对象
*/
export  function CmPrjIdUserIdRela_GetObjFromJsonObj(objCmPrjIdUserIdRelaENS: clsCmPrjIdUserIdRelaEN): clsCmPrjIdUserIdRelaEN 
{
 const objCmPrjIdUserIdRelaENT: clsCmPrjIdUserIdRelaEN = new clsCmPrjIdUserIdRelaEN();
ObjectAssign(objCmPrjIdUserIdRelaENT, objCmPrjIdUserIdRelaENS);
 return objCmPrjIdUserIdRelaENT;
}