
 /**
 * 类名:clsSysSocialRelationsVerWApi
 * 表名:SysSocialRelationsVer(01120645)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:50
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 社会关系版本表(SysSocialRelationsVer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysSocialRelationsVerEN } from "@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsVerEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const sysSocialRelationsVer_Controller = "SysSocialRelationsVerApi";
 export const sysSocialRelationsVer_ConstructorName = "sysSocialRelationsVer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngSocialVId:关键字
 * @returns 对象
 **/
export  async function SysSocialRelationsVer_GetObjBySocialVIdAsync(lngSocialVId: number): Promise<clsSysSocialRelationsVerEN|null>  
{
const strThisFuncName = "GetObjBySocialVIdAsync";

if (lngSocialVId == 0)
{
  const strMsg = Format("参数:[lngSocialVId]不能为空!(In clsSysSocialRelationsVerWApi.GetObjBySocialVIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBySocialVId";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSocialVId,
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
const objSysSocialRelationsVer = SysSocialRelationsVer_GetObjFromJsonObj(returnObj);
return objSysSocialRelationsVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBySocialVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBySocialVIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBySocialVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function SysSocialRelationsVer_SortFunDefa(a:clsSysSocialRelationsVerEN , b:clsSysSocialRelationsVerEN): number 
{
return a.socialVId-b.socialVId;
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
export  function SysSocialRelationsVer_SortFunDefa2Fld(a:clsSysSocialRelationsVerEN , b:clsSysSocialRelationsVerEN): number 
{
if (a.socialId == b.socialId) return a.fullName.localeCompare(b.fullName);
else return a.socialId.localeCompare(b.socialId);
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
export  function SysSocialRelationsVer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSysSocialRelationsVerEN.con_SocialVId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
return a.socialVId-b.socialVId;
}
case clsSysSocialRelationsVerEN.con_SocialId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
return a.socialId.localeCompare(b.socialId);
}
case clsSysSocialRelationsVerEN.con_FullName:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.fullName == null) return -1;
if (b.fullName == null) return 1;
return a.fullName.localeCompare(b.fullName);
}
case clsSysSocialRelationsVerEN.con_Nationality:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.nationality == null) return -1;
if (b.nationality == null) return 1;
return a.nationality.localeCompare(b.nationality);
}
case clsSysSocialRelationsVerEN.con_WorkUnit:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.workUnit == null) return -1;
if (b.workUnit == null) return 1;
return a.workUnit.localeCompare(b.workUnit);
}
case clsSysSocialRelationsVerEN.con_Major:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.major == null) return -1;
if (b.major == null) return 1;
return a.major.localeCompare(b.major);
}
case clsSysSocialRelationsVerEN.con_Achievement:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.achievement == null) return -1;
if (b.achievement == null) return 1;
return a.achievement.localeCompare(b.achievement);
}
case clsSysSocialRelationsVerEN.con_DetailedDescription:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.detailedDescription == null) return -1;
if (b.detailedDescription == null) return 1;
return a.detailedDescription.localeCompare(b.detailedDescription);
}
case clsSysSocialRelationsVerEN.con_LevelId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsSysSocialRelationsVerEN.con_UpdUser:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsSysSocialRelationsVerEN.con_UpdDate:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsSysSocialRelationsVerEN.con_IdCurrEduCls:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsSysSocialRelationsVerEN.con_Memo:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsSysSocialRelationsVerEN.con_CitationId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (a.citationId == null) return -1;
if (b.citationId == null) return 1;
return a.citationId.localeCompare(b.citationId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSocialRelationsVer]中不存在!(in ${ sysSocialRelationsVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSysSocialRelationsVerEN.con_SocialVId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
return b.socialVId-a.socialVId;
}
case clsSysSocialRelationsVerEN.con_SocialId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
return b.socialId.localeCompare(a.socialId);
}
case clsSysSocialRelationsVerEN.con_FullName:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.fullName == null) return -1;
if (a.fullName == null) return 1;
return b.fullName.localeCompare(a.fullName);
}
case clsSysSocialRelationsVerEN.con_Nationality:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.nationality == null) return -1;
if (a.nationality == null) return 1;
return b.nationality.localeCompare(a.nationality);
}
case clsSysSocialRelationsVerEN.con_WorkUnit:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.workUnit == null) return -1;
if (a.workUnit == null) return 1;
return b.workUnit.localeCompare(a.workUnit);
}
case clsSysSocialRelationsVerEN.con_Major:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.major == null) return -1;
if (a.major == null) return 1;
return b.major.localeCompare(a.major);
}
case clsSysSocialRelationsVerEN.con_Achievement:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.achievement == null) return -1;
if (a.achievement == null) return 1;
return b.achievement.localeCompare(a.achievement);
}
case clsSysSocialRelationsVerEN.con_DetailedDescription:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.detailedDescription == null) return -1;
if (a.detailedDescription == null) return 1;
return b.detailedDescription.localeCompare(a.detailedDescription);
}
case clsSysSocialRelationsVerEN.con_LevelId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsSysSocialRelationsVerEN.con_UpdUser:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsSysSocialRelationsVerEN.con_UpdDate:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsSysSocialRelationsVerEN.con_IdCurrEduCls:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsSysSocialRelationsVerEN.con_Memo:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsSysSocialRelationsVerEN.con_CitationId:
return (a: clsSysSocialRelationsVerEN, b: clsSysSocialRelationsVerEN) => {
if (b.citationId == null) return -1;
if (a.citationId == null) return 1;
return b.citationId.localeCompare(a.citationId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSocialRelationsVer]中不存在!(in ${ sysSocialRelationsVer_ConstructorName}.${ strThisFuncName})`;
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
export  async function SysSocialRelationsVer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSysSocialRelationsVerEN.con_SocialVId:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.socialVId === value;
}
case clsSysSocialRelationsVerEN.con_SocialId:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.socialId === value;
}
case clsSysSocialRelationsVerEN.con_FullName:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.fullName === value;
}
case clsSysSocialRelationsVerEN.con_Nationality:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.nationality === value;
}
case clsSysSocialRelationsVerEN.con_WorkUnit:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.workUnit === value;
}
case clsSysSocialRelationsVerEN.con_Major:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.major === value;
}
case clsSysSocialRelationsVerEN.con_Achievement:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.achievement === value;
}
case clsSysSocialRelationsVerEN.con_DetailedDescription:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.detailedDescription === value;
}
case clsSysSocialRelationsVerEN.con_LevelId:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.levelId === value;
}
case clsSysSocialRelationsVerEN.con_UpdUser:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.updUser === value;
}
case clsSysSocialRelationsVerEN.con_UpdDate:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.updDate === value;
}
case clsSysSocialRelationsVerEN.con_IdCurrEduCls:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.idCurrEduCls === value;
}
case clsSysSocialRelationsVerEN.con_Memo:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.memo === value;
}
case clsSysSocialRelationsVerEN.con_CitationId:
return (obj: clsSysSocialRelationsVerEN) => {
return obj.citationId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSocialRelationsVer]中不存在!(in ${ sysSocialRelationsVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[SysSocialRelationsVer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysSocialRelationsVer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetFirstObjAsync(strWhereCond: string): Promise<clsSysSocialRelationsVerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const objSysSocialRelationsVer = SysSocialRelationsVer_GetObjFromJsonObj(returnObj);
return objSysSocialRelationsVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSysSocialRelationsVerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelationsVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param arrSocialVId:关键字列表
 * @returns 对象列表
 **/
export  async function SysSocialRelationsVer_GetObjLstBySocialVIdLstAsync(arrSocialVId: Array<string>): Promise<Array<clsSysSocialRelationsVerEN>>  
{
const strThisFuncName = "GetObjLstBySocialVIdLstAsync";
const strAction = "GetObjLstBySocialVIdLst";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSocialVId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelationsVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBySocialVIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function SysSocialRelationsVer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSysSocialRelationsVerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelationsVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSysSocialRelationsVerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelationsVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSysSocialRelationsVerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSysSocialRelationsVerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelationsVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param lngSocialVId:关键字
 * @returns 获取删除的结果
 **/
export  async function SysSocialRelationsVer_DelRecordAsync(lngSocialVId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngSocialVId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param arrSocialVId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SysSocialRelationsVer_DelSysSocialRelationsVersAsync(arrSocialVId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSysSocialRelationsVersAsync";
const strAction = "DelSysSocialRelationsVers";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSocialVId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_DelSysSocialRelationsVersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSysSocialRelationsVersByCondAsync";
const strAction = "DelSysSocialRelationsVersByCond";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsVerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysSocialRelationsVer_AddNewRecordAsync(objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSysSocialRelationsVerEN);
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSysSocialRelationsVerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SysSocialRelationsVer_AddNewRecordWithReturnKeyAsync(objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsVerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SysSocialRelationsVer_UpdateRecordAsync(objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSysSocialRelationsVerEN.sfUpdFldSetStr === undefined || objSysSocialRelationsVerEN.sfUpdFldSetStr === null || objSysSocialRelationsVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysSocialRelationsVerEN.socialVId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsVerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysSocialRelationsVer_UpdateWithConditionAsync(objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSysSocialRelationsVerEN.sfUpdFldSetStr === undefined || objSysSocialRelationsVerEN.sfUpdFldSetStr === null || objSysSocialRelationsVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysSocialRelationsVerEN.socialVId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);
objSysSocialRelationsVerEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
 * @param lngSocialVId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SysSocialRelationsVer_IsExistAsync(lngSocialVId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSocialVId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelationsVer_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(sysSocialRelationsVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelationsVer_ConstructorName, strThisFuncName);
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
export  function SysSocialRelationsVer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SysSocialRelationsVer_CheckPropertyNew(pobjSysSocialRelationsVerEN: clsSysSocialRelationsVerEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.socialId) === true )
{
 throw new Error("(errid:Watl000411)字段[社会Id]不能为空(In 社会关系版本表)!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.socialId) == false && GetStrLen(pobjSysSocialRelationsVerEN.socialId) > 10)
{
 throw new Error("(errid:Watl000413)字段[社会Id(socialId)]的长度不能超过10(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.socialId)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.fullName) == false && GetStrLen(pobjSysSocialRelationsVerEN.fullName) > 50)
{
 throw new Error("(errid:Watl000413)字段[姓名(fullName)]的长度不能超过50(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.fullName)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.nationality) == false && GetStrLen(pobjSysSocialRelationsVerEN.nationality) > 50)
{
 throw new Error("(errid:Watl000413)字段[国籍(nationality)]的长度不能超过50(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.nationality)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.workUnit) == false && GetStrLen(pobjSysSocialRelationsVerEN.workUnit) > 100)
{
 throw new Error("(errid:Watl000413)字段[工作单位(workUnit)]的长度不能超过100(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.workUnit)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.major) == false && GetStrLen(pobjSysSocialRelationsVerEN.major) > 50)
{
 throw new Error("(errid:Watl000413)字段[专业(major)]的长度不能超过50(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.major)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.achievement) == false && GetStrLen(pobjSysSocialRelationsVerEN.achievement) > 5000)
{
 throw new Error("(errid:Watl000413)字段[成就(achievement)]的长度不能超过5000(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.achievement)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.levelId) == false && GetStrLen(pobjSysSocialRelationsVerEN.levelId) > 2)
{
 throw new Error("(errid:Watl000413)字段[级别Id(levelId)]的长度不能超过2(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.levelId)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updUser) == false && GetStrLen(pobjSysSocialRelationsVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.updUser)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updDate) == false && GetStrLen(pobjSysSocialRelationsVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.updDate)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.idCurrEduCls) == false && GetStrLen(pobjSysSocialRelationsVerEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.idCurrEduCls)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.memo) == false && GetStrLen(pobjSysSocialRelationsVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.memo)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.citationId) == false && GetStrLen(pobjSysSocialRelationsVerEN.citationId) > 8)
{
 throw new Error("(errid:Watl000413)字段[引用Id(citationId)]的长度不能超过8(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.citationId)(clsSysSocialRelationsVerBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjSysSocialRelationsVerEN.socialVId && undefined !== pobjSysSocialRelationsVerEN.socialVId && tzDataType.isNumber(pobjSysSocialRelationsVerEN.socialVId) === false)
{
 throw new Error("(errid:Watl000414)字段[SocialVId(socialVId)]的值:[$(pobjSysSocialRelationsVerEN.socialVId)], 非法,应该为数值型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.socialId) == false && undefined !== pobjSysSocialRelationsVerEN.socialId && tzDataType.isString(pobjSysSocialRelationsVerEN.socialId) === false)
{
 throw new Error("(errid:Watl000414)字段[社会Id(socialId)]的值:[$(pobjSysSocialRelationsVerEN.socialId)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.fullName) == false && undefined !== pobjSysSocialRelationsVerEN.fullName && tzDataType.isString(pobjSysSocialRelationsVerEN.fullName) === false)
{
 throw new Error("(errid:Watl000414)字段[姓名(fullName)]的值:[$(pobjSysSocialRelationsVerEN.fullName)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.nationality) == false && undefined !== pobjSysSocialRelationsVerEN.nationality && tzDataType.isString(pobjSysSocialRelationsVerEN.nationality) === false)
{
 throw new Error("(errid:Watl000414)字段[国籍(nationality)]的值:[$(pobjSysSocialRelationsVerEN.nationality)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.workUnit) == false && undefined !== pobjSysSocialRelationsVerEN.workUnit && tzDataType.isString(pobjSysSocialRelationsVerEN.workUnit) === false)
{
 throw new Error("(errid:Watl000414)字段[工作单位(workUnit)]的值:[$(pobjSysSocialRelationsVerEN.workUnit)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.major) == false && undefined !== pobjSysSocialRelationsVerEN.major && tzDataType.isString(pobjSysSocialRelationsVerEN.major) === false)
{
 throw new Error("(errid:Watl000414)字段[专业(major)]的值:[$(pobjSysSocialRelationsVerEN.major)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.achievement) == false && undefined !== pobjSysSocialRelationsVerEN.achievement && tzDataType.isString(pobjSysSocialRelationsVerEN.achievement) === false)
{
 throw new Error("(errid:Watl000414)字段[成就(achievement)]的值:[$(pobjSysSocialRelationsVerEN.achievement)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.detailedDescription) == false && undefined !== pobjSysSocialRelationsVerEN.detailedDescription && tzDataType.isString(pobjSysSocialRelationsVerEN.detailedDescription) === false)
{
 throw new Error("(errid:Watl000414)字段[详细说明(detailedDescription)]的值:[$(pobjSysSocialRelationsVerEN.detailedDescription)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.levelId) == false && undefined !== pobjSysSocialRelationsVerEN.levelId && tzDataType.isString(pobjSysSocialRelationsVerEN.levelId) === false)
{
 throw new Error("(errid:Watl000414)字段[级别Id(levelId)]的值:[$(pobjSysSocialRelationsVerEN.levelId)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updUser) == false && undefined !== pobjSysSocialRelationsVerEN.updUser && tzDataType.isString(pobjSysSocialRelationsVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysSocialRelationsVerEN.updUser)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updDate) == false && undefined !== pobjSysSocialRelationsVerEN.updDate && tzDataType.isString(pobjSysSocialRelationsVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysSocialRelationsVerEN.updDate)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.idCurrEduCls) == false && undefined !== pobjSysSocialRelationsVerEN.idCurrEduCls && tzDataType.isString(pobjSysSocialRelationsVerEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysSocialRelationsVerEN.idCurrEduCls)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.memo) == false && undefined !== pobjSysSocialRelationsVerEN.memo && tzDataType.isString(pobjSysSocialRelationsVerEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysSocialRelationsVerEN.memo)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.citationId) == false && undefined !== pobjSysSocialRelationsVerEN.citationId && tzDataType.isString(pobjSysSocialRelationsVerEN.citationId) === false)
{
 throw new Error("(errid:Watl000414)字段[引用Id(citationId)]的值:[$(pobjSysSocialRelationsVerEN.citationId)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SysSocialRelationsVer_CheckProperty4Update(pobjSysSocialRelationsVerEN: clsSysSocialRelationsVerEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.socialId) == false && GetStrLen(pobjSysSocialRelationsVerEN.socialId) > 10)
{
 throw new Error("(errid:Watl000416)字段[社会Id(socialId)]的长度不能超过10(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.socialId)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.fullName) == false && GetStrLen(pobjSysSocialRelationsVerEN.fullName) > 50)
{
 throw new Error("(errid:Watl000416)字段[姓名(fullName)]的长度不能超过50(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.fullName)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.nationality) == false && GetStrLen(pobjSysSocialRelationsVerEN.nationality) > 50)
{
 throw new Error("(errid:Watl000416)字段[国籍(nationality)]的长度不能超过50(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.nationality)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.workUnit) == false && GetStrLen(pobjSysSocialRelationsVerEN.workUnit) > 100)
{
 throw new Error("(errid:Watl000416)字段[工作单位(workUnit)]的长度不能超过100(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.workUnit)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.major) == false && GetStrLen(pobjSysSocialRelationsVerEN.major) > 50)
{
 throw new Error("(errid:Watl000416)字段[专业(major)]的长度不能超过50(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.major)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.achievement) == false && GetStrLen(pobjSysSocialRelationsVerEN.achievement) > 5000)
{
 throw new Error("(errid:Watl000416)字段[成就(achievement)]的长度不能超过5000(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.achievement)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.levelId) == false && GetStrLen(pobjSysSocialRelationsVerEN.levelId) > 2)
{
 throw new Error("(errid:Watl000416)字段[级别Id(levelId)]的长度不能超过2(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.levelId)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updUser) == false && GetStrLen(pobjSysSocialRelationsVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.updUser)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updDate) == false && GetStrLen(pobjSysSocialRelationsVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.updDate)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.idCurrEduCls) == false && GetStrLen(pobjSysSocialRelationsVerEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.idCurrEduCls)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.memo) == false && GetStrLen(pobjSysSocialRelationsVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.memo)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.citationId) == false && GetStrLen(pobjSysSocialRelationsVerEN.citationId) > 8)
{
 throw new Error("(errid:Watl000416)字段[引用Id(citationId)]的长度不能超过8(In 社会关系版本表(SysSocialRelationsVer))!值:$(pobjSysSocialRelationsVerEN.citationId)(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjSysSocialRelationsVerEN.socialVId && undefined !== pobjSysSocialRelationsVerEN.socialVId && tzDataType.isNumber(pobjSysSocialRelationsVerEN.socialVId) === false)
{
 throw new Error("(errid:Watl000417)字段[SocialVId(socialVId)]的值:[$(pobjSysSocialRelationsVerEN.socialVId)], 非法,应该为数值型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.socialId) == false && undefined !== pobjSysSocialRelationsVerEN.socialId && tzDataType.isString(pobjSysSocialRelationsVerEN.socialId) === false)
{
 throw new Error("(errid:Watl000417)字段[社会Id(socialId)]的值:[$(pobjSysSocialRelationsVerEN.socialId)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.fullName) == false && undefined !== pobjSysSocialRelationsVerEN.fullName && tzDataType.isString(pobjSysSocialRelationsVerEN.fullName) === false)
{
 throw new Error("(errid:Watl000417)字段[姓名(fullName)]的值:[$(pobjSysSocialRelationsVerEN.fullName)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.nationality) == false && undefined !== pobjSysSocialRelationsVerEN.nationality && tzDataType.isString(pobjSysSocialRelationsVerEN.nationality) === false)
{
 throw new Error("(errid:Watl000417)字段[国籍(nationality)]的值:[$(pobjSysSocialRelationsVerEN.nationality)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.workUnit) == false && undefined !== pobjSysSocialRelationsVerEN.workUnit && tzDataType.isString(pobjSysSocialRelationsVerEN.workUnit) === false)
{
 throw new Error("(errid:Watl000417)字段[工作单位(workUnit)]的值:[$(pobjSysSocialRelationsVerEN.workUnit)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.major) == false && undefined !== pobjSysSocialRelationsVerEN.major && tzDataType.isString(pobjSysSocialRelationsVerEN.major) === false)
{
 throw new Error("(errid:Watl000417)字段[专业(major)]的值:[$(pobjSysSocialRelationsVerEN.major)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.achievement) == false && undefined !== pobjSysSocialRelationsVerEN.achievement && tzDataType.isString(pobjSysSocialRelationsVerEN.achievement) === false)
{
 throw new Error("(errid:Watl000417)字段[成就(achievement)]的值:[$(pobjSysSocialRelationsVerEN.achievement)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.detailedDescription) == false && undefined !== pobjSysSocialRelationsVerEN.detailedDescription && tzDataType.isString(pobjSysSocialRelationsVerEN.detailedDescription) === false)
{
 throw new Error("(errid:Watl000417)字段[详细说明(detailedDescription)]的值:[$(pobjSysSocialRelationsVerEN.detailedDescription)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.levelId) == false && undefined !== pobjSysSocialRelationsVerEN.levelId && tzDataType.isString(pobjSysSocialRelationsVerEN.levelId) === false)
{
 throw new Error("(errid:Watl000417)字段[级别Id(levelId)]的值:[$(pobjSysSocialRelationsVerEN.levelId)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updUser) == false && undefined !== pobjSysSocialRelationsVerEN.updUser && tzDataType.isString(pobjSysSocialRelationsVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysSocialRelationsVerEN.updUser)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.updDate) == false && undefined !== pobjSysSocialRelationsVerEN.updDate && tzDataType.isString(pobjSysSocialRelationsVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysSocialRelationsVerEN.updDate)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.idCurrEduCls) == false && undefined !== pobjSysSocialRelationsVerEN.idCurrEduCls && tzDataType.isString(pobjSysSocialRelationsVerEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysSocialRelationsVerEN.idCurrEduCls)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.memo) == false && undefined !== pobjSysSocialRelationsVerEN.memo && tzDataType.isString(pobjSysSocialRelationsVerEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysSocialRelationsVerEN.memo)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsVerEN.citationId) == false && undefined !== pobjSysSocialRelationsVerEN.citationId && tzDataType.isString(pobjSysSocialRelationsVerEN.citationId) === false)
{
 throw new Error("(errid:Watl000417)字段[引用Id(citationId)]的值:[$(pobjSysSocialRelationsVerEN.citationId)], 非法,应该为字符型(In 社会关系版本表(SysSocialRelationsVer))!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjSysSocialRelationsVerEN.socialVId 
 || pobjSysSocialRelationsVerEN.socialVId != null && pobjSysSocialRelationsVerEN.socialVId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[SocialVId]不能为空(In 社会关系版本表)!(clsSysSocialRelationsVerBL:CheckProperty4Update)");
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
export  function SysSocialRelationsVer_GetJSONStrByObj (pobjSysSocialRelationsVerEN: clsSysSocialRelationsVerEN): string
{
pobjSysSocialRelationsVerEN.sfUpdFldSetStr = pobjSysSocialRelationsVerEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSysSocialRelationsVerEN);
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
export  function SysSocialRelationsVer_GetObjLstByJSONStr (strJSON: string): Array<clsSysSocialRelationsVerEN>
{
let arrSysSocialRelationsVerObjLst = new Array<clsSysSocialRelationsVerEN>();
if (strJSON === "")
{
return arrSysSocialRelationsVerObjLst;
}
try
{
arrSysSocialRelationsVerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSysSocialRelationsVerObjLst;
}
return arrSysSocialRelationsVerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysSocialRelationsVerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SysSocialRelationsVer_GetObjLstByJSONObjLst (arrSysSocialRelationsVerObjLstS: Array<clsSysSocialRelationsVerEN>): Array<clsSysSocialRelationsVerEN>
{
const arrSysSocialRelationsVerObjLst = new Array<clsSysSocialRelationsVerEN>();
for (const objInFor of arrSysSocialRelationsVerObjLstS) {
const obj1 = SysSocialRelationsVer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSysSocialRelationsVerObjLst.push(obj1);
}
return arrSysSocialRelationsVerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysSocialRelationsVer_GetObjByJSONStr (strJSON: string): clsSysSocialRelationsVerEN
{
let pobjSysSocialRelationsVerEN = new clsSysSocialRelationsVerEN();
if (strJSON === "")
{
return pobjSysSocialRelationsVerEN;
}
try
{
pobjSysSocialRelationsVerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSysSocialRelationsVerEN;
}
return pobjSysSocialRelationsVerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SysSocialRelationsVer_GetCombineCondition(objSysSocialRelationsVerCond: clsSysSocialRelationsVerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_SocialVId) == true)
{
const strComparisonOpSocialVId:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_SocialVId];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsVerEN.con_SocialVId, objSysSocialRelationsVerCond.socialVId, strComparisonOpSocialVId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_SocialId) == true)
{
const strComparisonOpSocialId:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_SocialId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_SocialId, objSysSocialRelationsVerCond.socialId, strComparisonOpSocialId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_FullName) == true)
{
const strComparisonOpFullName:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_FullName];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_FullName, objSysSocialRelationsVerCond.fullName, strComparisonOpFullName);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_Nationality) == true)
{
const strComparisonOpNationality:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_Nationality];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_Nationality, objSysSocialRelationsVerCond.nationality, strComparisonOpNationality);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_WorkUnit) == true)
{
const strComparisonOpWorkUnit:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_WorkUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_WorkUnit, objSysSocialRelationsVerCond.workUnit, strComparisonOpWorkUnit);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_Major) == true)
{
const strComparisonOpMajor:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_Major];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_Major, objSysSocialRelationsVerCond.major, strComparisonOpMajor);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_Achievement) == true)
{
const strComparisonOpAchievement:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_Achievement];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_Achievement, objSysSocialRelationsVerCond.achievement, strComparisonOpAchievement);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_LevelId, objSysSocialRelationsVerCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_UpdUser, objSysSocialRelationsVerCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_UpdDate, objSysSocialRelationsVerCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_IdCurrEduCls, objSysSocialRelationsVerCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_Memo, objSysSocialRelationsVerCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsVerCond.dicFldComparisonOp, clsSysSocialRelationsVerEN.con_CitationId) == true)
{
const strComparisonOpCitationId:string = objSysSocialRelationsVerCond.dicFldComparisonOp[clsSysSocialRelationsVerEN.con_CitationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsVerEN.con_CitationId, objSysSocialRelationsVerCond.citationId, strComparisonOpCitationId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysSocialRelationsVer(社会关系版本表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSocialId: 社会Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysSocialRelationsVer_GetUniCondStr(objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and SocialId = '{0}'", objSysSocialRelationsVerEN.socialId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysSocialRelationsVer(社会关系版本表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSocialId: 社会Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysSocialRelationsVer_GetUniCondStr4Update(objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and SocialVId <> '{0}'", objSysSocialRelationsVerEN.socialVId);
 strWhereCond +=  Format(" and SocialId = '{0}'", objSysSocialRelationsVerEN.socialId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysSocialRelationsVerENS:源对象
 * @param objSysSocialRelationsVerENT:目标对象
*/
export  function SysSocialRelationsVer_CopyObjTo(objSysSocialRelationsVerENS: clsSysSocialRelationsVerEN , objSysSocialRelationsVerENT: clsSysSocialRelationsVerEN ): void 
{
objSysSocialRelationsVerENT.socialVId = objSysSocialRelationsVerENS.socialVId; //SocialVId
objSysSocialRelationsVerENT.socialId = objSysSocialRelationsVerENS.socialId; //社会Id
objSysSocialRelationsVerENT.fullName = objSysSocialRelationsVerENS.fullName; //姓名
objSysSocialRelationsVerENT.nationality = objSysSocialRelationsVerENS.nationality; //国籍
objSysSocialRelationsVerENT.workUnit = objSysSocialRelationsVerENS.workUnit; //工作单位
objSysSocialRelationsVerENT.major = objSysSocialRelationsVerENS.major; //专业
objSysSocialRelationsVerENT.achievement = objSysSocialRelationsVerENS.achievement; //成就
objSysSocialRelationsVerENT.detailedDescription = objSysSocialRelationsVerENS.detailedDescription; //详细说明
objSysSocialRelationsVerENT.levelId = objSysSocialRelationsVerENS.levelId; //级别Id
objSysSocialRelationsVerENT.updUser = objSysSocialRelationsVerENS.updUser; //修改人
objSysSocialRelationsVerENT.updDate = objSysSocialRelationsVerENS.updDate; //修改日期
objSysSocialRelationsVerENT.idCurrEduCls = objSysSocialRelationsVerENS.idCurrEduCls; //教学班流水号
objSysSocialRelationsVerENT.memo = objSysSocialRelationsVerENS.memo; //备注
objSysSocialRelationsVerENT.citationId = objSysSocialRelationsVerENS.citationId; //引用Id
objSysSocialRelationsVerENT.sfUpdFldSetStr = objSysSocialRelationsVerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysSocialRelationsVerENS:源对象
 * @param objSysSocialRelationsVerENT:目标对象
*/
export  function SysSocialRelationsVer_GetObjFromJsonObj(objSysSocialRelationsVerENS: clsSysSocialRelationsVerEN): clsSysSocialRelationsVerEN 
{
 const objSysSocialRelationsVerENT: clsSysSocialRelationsVerEN = new clsSysSocialRelationsVerEN();
ObjectAssign(objSysSocialRelationsVerENT, objSysSocialRelationsVerENS);
 return objSysSocialRelationsVerENT;
}