
 /**
 * 类名:clsSysSkillVerWApi
 * 表名:SysSkillVer(01120647)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:49:26
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
 * 系统技能版本(SysSkillVer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysSkillVerEN } from "@/ts/L0Entity/GradEduTopic/clsSysSkillVerEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const sysSkillVer_Controller = "SysSkillVerApi";
 export const sysSkillVer_ConstructorName = "sysSkillVer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngSkillVId:关键字
 * @returns 对象
 **/
export  async function SysSkillVer_GetObjBySkillVIdAsync(lngSkillVId: number): Promise<clsSysSkillVerEN|null>  
{
const strThisFuncName = "GetObjBySkillVIdAsync";

if (lngSkillVId == 0)
{
  const strMsg = Format("参数:[lngSkillVId]不能为空!(In clsSysSkillVerWApi.GetObjBySkillVIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBySkillVId";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSkillVId,
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
const objSysSkillVer = SysSkillVer_GetObjFromJsonObj(returnObj);
return objSysSkillVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBySkillVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBySkillVIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBySkillVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function SysSkillVer_SortFunDefa(a:clsSysSkillVerEN , b:clsSysSkillVerEN): number 
{
return a.skillVId-b.skillVId;
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
export  function SysSkillVer_SortFunDefa2Fld(a:clsSysSkillVerEN , b:clsSysSkillVerEN): number 
{
if (a.skillId == b.skillId) return a.skillName.localeCompare(b.skillName);
else return a.skillId.localeCompare(b.skillId);
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
export  function SysSkillVer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSysSkillVerEN.con_SkillVId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
return a.skillVId-b.skillVId;
}
case clsSysSkillVerEN.con_SkillId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
return a.skillId.localeCompare(b.skillId);
}
case clsSysSkillVerEN.con_SkillName:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.skillName == null) return -1;
if (b.skillName == null) return 1;
return a.skillName.localeCompare(b.skillName);
}
case clsSysSkillVerEN.con_OperationTypeId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.operationTypeId == null) return -1;
if (b.operationTypeId == null) return 1;
return a.operationTypeId.localeCompare(b.operationTypeId);
}
case clsSysSkillVerEN.con_Process:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.process == null) return -1;
if (b.process == null) return 1;
return a.process.localeCompare(b.process);
}
case clsSysSkillVerEN.con_LevelId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsSysSkillVerEN.con_UpdUser:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsSysSkillVerEN.con_UpdDate:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsSysSkillVerEN.con_CitationId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.citationId == null) return -1;
if (b.citationId == null) return 1;
return a.citationId.localeCompare(b.citationId);
}
case clsSysSkillVerEN.con_IdCurrEduCls:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsSysSkillVerEN.con_PdfContent:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsSysSkillVerEN.con_PdfPageNum:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsSysSkillVerEN.con_Memo:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSkillVer]中不存在!(in ${ sysSkillVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSysSkillVerEN.con_SkillVId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
return b.skillVId-a.skillVId;
}
case clsSysSkillVerEN.con_SkillId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
return b.skillId.localeCompare(a.skillId);
}
case clsSysSkillVerEN.con_SkillName:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.skillName == null) return -1;
if (a.skillName == null) return 1;
return b.skillName.localeCompare(a.skillName);
}
case clsSysSkillVerEN.con_OperationTypeId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.operationTypeId == null) return -1;
if (a.operationTypeId == null) return 1;
return b.operationTypeId.localeCompare(a.operationTypeId);
}
case clsSysSkillVerEN.con_Process:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.process == null) return -1;
if (a.process == null) return 1;
return b.process.localeCompare(a.process);
}
case clsSysSkillVerEN.con_LevelId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsSysSkillVerEN.con_UpdUser:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsSysSkillVerEN.con_UpdDate:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsSysSkillVerEN.con_CitationId:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.citationId == null) return -1;
if (a.citationId == null) return 1;
return b.citationId.localeCompare(a.citationId);
}
case clsSysSkillVerEN.con_IdCurrEduCls:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsSysSkillVerEN.con_PdfContent:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsSysSkillVerEN.con_PdfPageNum:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsSysSkillVerEN.con_Memo:
return (a: clsSysSkillVerEN, b: clsSysSkillVerEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSkillVer]中不存在!(in ${ sysSkillVer_ConstructorName}.${ strThisFuncName})`;
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
export  async function SysSkillVer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSysSkillVerEN.con_SkillVId:
return (obj: clsSysSkillVerEN) => {
return obj.skillVId === value;
}
case clsSysSkillVerEN.con_SkillId:
return (obj: clsSysSkillVerEN) => {
return obj.skillId === value;
}
case clsSysSkillVerEN.con_SkillName:
return (obj: clsSysSkillVerEN) => {
return obj.skillName === value;
}
case clsSysSkillVerEN.con_OperationTypeId:
return (obj: clsSysSkillVerEN) => {
return obj.operationTypeId === value;
}
case clsSysSkillVerEN.con_Process:
return (obj: clsSysSkillVerEN) => {
return obj.process === value;
}
case clsSysSkillVerEN.con_LevelId:
return (obj: clsSysSkillVerEN) => {
return obj.levelId === value;
}
case clsSysSkillVerEN.con_UpdUser:
return (obj: clsSysSkillVerEN) => {
return obj.updUser === value;
}
case clsSysSkillVerEN.con_UpdDate:
return (obj: clsSysSkillVerEN) => {
return obj.updDate === value;
}
case clsSysSkillVerEN.con_CitationId:
return (obj: clsSysSkillVerEN) => {
return obj.citationId === value;
}
case clsSysSkillVerEN.con_IdCurrEduCls:
return (obj: clsSysSkillVerEN) => {
return obj.idCurrEduCls === value;
}
case clsSysSkillVerEN.con_PdfContent:
return (obj: clsSysSkillVerEN) => {
return obj.pdfContent === value;
}
case clsSysSkillVerEN.con_PdfPageNum:
return (obj: clsSysSkillVerEN) => {
return obj.pdfPageNum === value;
}
case clsSysSkillVerEN.con_Memo:
return (obj: clsSysSkillVerEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSkillVer]中不存在!(in ${ sysSkillVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[SysSkillVer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysSkillVer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetFirstObjAsync(strWhereCond: string): Promise<clsSysSkillVerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const objSysSkillVer = SysSkillVer_GetObjFromJsonObj(returnObj);
return objSysSkillVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSysSkillVerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSkillVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSkillVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param arrSkillVId:关键字列表
 * @returns 对象列表
 **/
export  async function SysSkillVer_GetObjLstBySkillVIdLstAsync(arrSkillVId: Array<string>): Promise<Array<clsSysSkillVerEN>>  
{
const strThisFuncName = "GetObjLstBySkillVIdLstAsync";
const strAction = "GetObjLstBySkillVIdLst";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSkillVId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSkillVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSkillVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBySkillVIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function SysSkillVer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSysSkillVerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSkillVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSkillVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSysSkillVerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSkillVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSkillVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSysSkillVerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSysSkillVerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSkillVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSkillVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param lngSkillVId:关键字
 * @returns 获取删除的结果
 **/
export  async function SysSkillVer_DelRecordAsync(lngSkillVId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngSkillVId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param arrSkillVId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SysSkillVer_DelSysSkillVersAsync(arrSkillVId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSysSkillVersAsync";
const strAction = "DelSysSkillVers";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSkillVId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_DelSysSkillVersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSysSkillVersByCondAsync";
const strAction = "DelSysSkillVersByCond";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param objSysSkillVerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysSkillVer_AddNewRecordAsync(objSysSkillVerEN: clsSysSkillVerEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSysSkillVerEN);
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSkillVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param objSysSkillVerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SysSkillVer_AddNewRecordWithReturnKeyAsync(objSysSkillVerEN: clsSysSkillVerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSkillVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param objSysSkillVerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SysSkillVer_UpdateRecordAsync(objSysSkillVerEN: clsSysSkillVerEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSysSkillVerEN.sfUpdFldSetStr === undefined || objSysSkillVerEN.sfUpdFldSetStr === null || objSysSkillVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysSkillVerEN.skillVId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSkillVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param objSysSkillVerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysSkillVer_UpdateWithConditionAsync(objSysSkillVerEN: clsSysSkillVerEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSysSkillVerEN.sfUpdFldSetStr === undefined || objSysSkillVerEN.sfUpdFldSetStr === null || objSysSkillVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysSkillVerEN.skillVId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);
objSysSkillVerEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSkillVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
 * @param lngSkillVId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SysSkillVer_IsExistAsync(lngSkillVId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSkillVId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  async function SysSkillVer_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(sysSkillVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSkillVer_ConstructorName, strThisFuncName);
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
export  function SysSkillVer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SysSkillVer_CheckPropertyNew(pobjSysSkillVerEN: clsSysSkillVerEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjSysSkillVerEN.skillId) === true )
{
 throw new Error("(errid:Watl000411)字段[技能Id]不能为空(In 系统技能版本)!(clsSysSkillVerBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysSkillVerEN.skillId) == false && GetStrLen(pobjSysSkillVerEN.skillId) > 10)
{
 throw new Error("(errid:Watl000413)字段[技能Id(skillId)]的长度不能超过10(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.skillId)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.skillName) == false && GetStrLen(pobjSysSkillVerEN.skillName) > 200)
{
 throw new Error("(errid:Watl000413)字段[技能名称(skillName)]的长度不能超过200(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.skillName)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.operationTypeId) == false && GetStrLen(pobjSysSkillVerEN.operationTypeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.operationTypeId)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.levelId) == false && GetStrLen(pobjSysSkillVerEN.levelId) > 2)
{
 throw new Error("(errid:Watl000413)字段[级别Id(levelId)]的长度不能超过2(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.levelId)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updUser) == false && GetStrLen(pobjSysSkillVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.updUser)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updDate) == false && GetStrLen(pobjSysSkillVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.updDate)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.citationId) == false && GetStrLen(pobjSysSkillVerEN.citationId) > 8)
{
 throw new Error("(errid:Watl000413)字段[引用Id(citationId)]的长度不能超过8(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.citationId)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.idCurrEduCls) == false && GetStrLen(pobjSysSkillVerEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.idCurrEduCls)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.pdfContent) == false && GetStrLen(pobjSysSkillVerEN.pdfContent) > 2000)
{
 throw new Error("(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.pdfContent)(clsSysSkillVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.memo) == false && GetStrLen(pobjSysSkillVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.memo)(clsSysSkillVerBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjSysSkillVerEN.skillVId && undefined !== pobjSysSkillVerEN.skillVId && tzDataType.isNumber(pobjSysSkillVerEN.skillVId) === false)
{
 throw new Error("(errid:Watl000414)字段[SkillVId(skillVId)]的值:[$(pobjSysSkillVerEN.skillVId)], 非法,应该为数值型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.skillId) == false && undefined !== pobjSysSkillVerEN.skillId && tzDataType.isString(pobjSysSkillVerEN.skillId) === false)
{
 throw new Error("(errid:Watl000414)字段[技能Id(skillId)]的值:[$(pobjSysSkillVerEN.skillId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.skillName) == false && undefined !== pobjSysSkillVerEN.skillName && tzDataType.isString(pobjSysSkillVerEN.skillName) === false)
{
 throw new Error("(errid:Watl000414)字段[技能名称(skillName)]的值:[$(pobjSysSkillVerEN.skillName)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.operationTypeId) == false && undefined !== pobjSysSkillVerEN.operationTypeId && tzDataType.isString(pobjSysSkillVerEN.operationTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[操作类型ID(operationTypeId)]的值:[$(pobjSysSkillVerEN.operationTypeId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.process) == false && undefined !== pobjSysSkillVerEN.process && tzDataType.isString(pobjSysSkillVerEN.process) === false)
{
 throw new Error("(errid:Watl000414)字段[实施过程(process)]的值:[$(pobjSysSkillVerEN.process)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.levelId) == false && undefined !== pobjSysSkillVerEN.levelId && tzDataType.isString(pobjSysSkillVerEN.levelId) === false)
{
 throw new Error("(errid:Watl000414)字段[级别Id(levelId)]的值:[$(pobjSysSkillVerEN.levelId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updUser) == false && undefined !== pobjSysSkillVerEN.updUser && tzDataType.isString(pobjSysSkillVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysSkillVerEN.updUser)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updDate) == false && undefined !== pobjSysSkillVerEN.updDate && tzDataType.isString(pobjSysSkillVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysSkillVerEN.updDate)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.citationId) == false && undefined !== pobjSysSkillVerEN.citationId && tzDataType.isString(pobjSysSkillVerEN.citationId) === false)
{
 throw new Error("(errid:Watl000414)字段[引用Id(citationId)]的值:[$(pobjSysSkillVerEN.citationId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.idCurrEduCls) == false && undefined !== pobjSysSkillVerEN.idCurrEduCls && tzDataType.isString(pobjSysSkillVerEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysSkillVerEN.idCurrEduCls)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.pdfContent) == false && undefined !== pobjSysSkillVerEN.pdfContent && tzDataType.isString(pobjSysSkillVerEN.pdfContent) === false)
{
 throw new Error("(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[$(pobjSysSkillVerEN.pdfContent)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (null != pobjSysSkillVerEN.pdfPageNum && undefined !== pobjSysSkillVerEN.pdfPageNum && tzDataType.isNumber(pobjSysSkillVerEN.pdfPageNum) === false)
{
 throw new Error("(errid:Watl000414)字段[Pdf页码(pdfPageNum)]的值:[$(pobjSysSkillVerEN.pdfPageNum)], 非法,应该为数值型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.memo) == false && undefined !== pobjSysSkillVerEN.memo && tzDataType.isString(pobjSysSkillVerEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysSkillVerEN.memo)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SysSkillVer_CheckProperty4Update(pobjSysSkillVerEN: clsSysSkillVerEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysSkillVerEN.skillId) == false && GetStrLen(pobjSysSkillVerEN.skillId) > 10)
{
 throw new Error("(errid:Watl000416)字段[技能Id(skillId)]的长度不能超过10(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.skillId)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.skillName) == false && GetStrLen(pobjSysSkillVerEN.skillName) > 200)
{
 throw new Error("(errid:Watl000416)字段[技能名称(skillName)]的长度不能超过200(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.skillName)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.operationTypeId) == false && GetStrLen(pobjSysSkillVerEN.operationTypeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.operationTypeId)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.levelId) == false && GetStrLen(pobjSysSkillVerEN.levelId) > 2)
{
 throw new Error("(errid:Watl000416)字段[级别Id(levelId)]的长度不能超过2(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.levelId)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updUser) == false && GetStrLen(pobjSysSkillVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.updUser)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updDate) == false && GetStrLen(pobjSysSkillVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.updDate)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.citationId) == false && GetStrLen(pobjSysSkillVerEN.citationId) > 8)
{
 throw new Error("(errid:Watl000416)字段[引用Id(citationId)]的长度不能超过8(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.citationId)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.idCurrEduCls) == false && GetStrLen(pobjSysSkillVerEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.idCurrEduCls)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.pdfContent) == false && GetStrLen(pobjSysSkillVerEN.pdfContent) > 2000)
{
 throw new Error("(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.pdfContent)(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.memo) == false && GetStrLen(pobjSysSkillVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 系统技能版本(SysSkillVer))!值:$(pobjSysSkillVerEN.memo)(clsSysSkillVerBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjSysSkillVerEN.skillVId && undefined !== pobjSysSkillVerEN.skillVId && tzDataType.isNumber(pobjSysSkillVerEN.skillVId) === false)
{
 throw new Error("(errid:Watl000417)字段[SkillVId(skillVId)]的值:[$(pobjSysSkillVerEN.skillVId)], 非法,应该为数值型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.skillId) == false && undefined !== pobjSysSkillVerEN.skillId && tzDataType.isString(pobjSysSkillVerEN.skillId) === false)
{
 throw new Error("(errid:Watl000417)字段[技能Id(skillId)]的值:[$(pobjSysSkillVerEN.skillId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.skillName) == false && undefined !== pobjSysSkillVerEN.skillName && tzDataType.isString(pobjSysSkillVerEN.skillName) === false)
{
 throw new Error("(errid:Watl000417)字段[技能名称(skillName)]的值:[$(pobjSysSkillVerEN.skillName)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.operationTypeId) == false && undefined !== pobjSysSkillVerEN.operationTypeId && tzDataType.isString(pobjSysSkillVerEN.operationTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[操作类型ID(operationTypeId)]的值:[$(pobjSysSkillVerEN.operationTypeId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.process) == false && undefined !== pobjSysSkillVerEN.process && tzDataType.isString(pobjSysSkillVerEN.process) === false)
{
 throw new Error("(errid:Watl000417)字段[实施过程(process)]的值:[$(pobjSysSkillVerEN.process)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.levelId) == false && undefined !== pobjSysSkillVerEN.levelId && tzDataType.isString(pobjSysSkillVerEN.levelId) === false)
{
 throw new Error("(errid:Watl000417)字段[级别Id(levelId)]的值:[$(pobjSysSkillVerEN.levelId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updUser) == false && undefined !== pobjSysSkillVerEN.updUser && tzDataType.isString(pobjSysSkillVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysSkillVerEN.updUser)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.updDate) == false && undefined !== pobjSysSkillVerEN.updDate && tzDataType.isString(pobjSysSkillVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysSkillVerEN.updDate)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.citationId) == false && undefined !== pobjSysSkillVerEN.citationId && tzDataType.isString(pobjSysSkillVerEN.citationId) === false)
{
 throw new Error("(errid:Watl000417)字段[引用Id(citationId)]的值:[$(pobjSysSkillVerEN.citationId)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.idCurrEduCls) == false && undefined !== pobjSysSkillVerEN.idCurrEduCls && tzDataType.isString(pobjSysSkillVerEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysSkillVerEN.idCurrEduCls)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.pdfContent) == false && undefined !== pobjSysSkillVerEN.pdfContent && tzDataType.isString(pobjSysSkillVerEN.pdfContent) === false)
{
 throw new Error("(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[$(pobjSysSkillVerEN.pdfContent)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (null != pobjSysSkillVerEN.pdfPageNum && undefined !== pobjSysSkillVerEN.pdfPageNum && tzDataType.isNumber(pobjSysSkillVerEN.pdfPageNum) === false)
{
 throw new Error("(errid:Watl000417)字段[Pdf页码(pdfPageNum)]的值:[$(pobjSysSkillVerEN.pdfPageNum)], 非法,应该为数值型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSkillVerEN.memo) == false && undefined !== pobjSysSkillVerEN.memo && tzDataType.isString(pobjSysSkillVerEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysSkillVerEN.memo)], 非法,应该为字符型(In 系统技能版本(SysSkillVer))!(clsSysSkillVerBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjSysSkillVerEN.skillVId 
 || pobjSysSkillVerEN.skillVId != null && pobjSysSkillVerEN.skillVId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[SkillVId]不能为空(In 系统技能版本)!(clsSysSkillVerBL:CheckProperty4Update)");
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
export  function SysSkillVer_GetJSONStrByObj (pobjSysSkillVerEN: clsSysSkillVerEN): string
{
pobjSysSkillVerEN.sfUpdFldSetStr = pobjSysSkillVerEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSysSkillVerEN);
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
export  function SysSkillVer_GetObjLstByJSONStr (strJSON: string): Array<clsSysSkillVerEN>
{
let arrSysSkillVerObjLst = new Array<clsSysSkillVerEN>();
if (strJSON === "")
{
return arrSysSkillVerObjLst;
}
try
{
arrSysSkillVerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSysSkillVerObjLst;
}
return arrSysSkillVerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysSkillVerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SysSkillVer_GetObjLstByJSONObjLst (arrSysSkillVerObjLstS: Array<clsSysSkillVerEN>): Array<clsSysSkillVerEN>
{
const arrSysSkillVerObjLst = new Array<clsSysSkillVerEN>();
for (const objInFor of arrSysSkillVerObjLstS) {
const obj1 = SysSkillVer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSysSkillVerObjLst.push(obj1);
}
return arrSysSkillVerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysSkillVer_GetObjByJSONStr (strJSON: string): clsSysSkillVerEN
{
let pobjSysSkillVerEN = new clsSysSkillVerEN();
if (strJSON === "")
{
return pobjSysSkillVerEN;
}
try
{
pobjSysSkillVerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSysSkillVerEN;
}
return pobjSysSkillVerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SysSkillVer_GetCombineCondition(objSysSkillVerCond: clsSysSkillVerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_SkillVId) == true)
{
const strComparisonOpSkillVId:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_SkillVId];
strWhereCond += Format(" And {0} {2} {1}", clsSysSkillVerEN.con_SkillVId, objSysSkillVerCond.skillVId, strComparisonOpSkillVId);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_SkillId) == true)
{
const strComparisonOpSkillId:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_SkillId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_SkillId, objSysSkillVerCond.skillId, strComparisonOpSkillId);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_SkillName) == true)
{
const strComparisonOpSkillName:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_SkillName];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_SkillName, objSysSkillVerCond.skillName, strComparisonOpSkillName);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_OperationTypeId) == true)
{
const strComparisonOpOperationTypeId:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_OperationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_OperationTypeId, objSysSkillVerCond.operationTypeId, strComparisonOpOperationTypeId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_LevelId, objSysSkillVerCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_UpdUser, objSysSkillVerCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_UpdDate, objSysSkillVerCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_CitationId) == true)
{
const strComparisonOpCitationId:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_CitationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_CitationId, objSysSkillVerCond.citationId, strComparisonOpCitationId);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_IdCurrEduCls, objSysSkillVerCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_PdfContent, objSysSkillVerCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsSysSkillVerEN.con_PdfPageNum, objSysSkillVerCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objSysSkillVerCond.dicFldComparisonOp, clsSysSkillVerEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSysSkillVerCond.dicFldComparisonOp[clsSysSkillVerEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSkillVerEN.con_Memo, objSysSkillVerCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysSkillVer(系统技能版本),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngSkillVId: SkillVId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysSkillVer_GetUniCondStr(objSysSkillVerEN: clsSysSkillVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and SkillVId = '{0}'", objSysSkillVerEN.skillVId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysSkillVer(系统技能版本),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngSkillVId: SkillVId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysSkillVer_GetUniCondStr4Update(objSysSkillVerEN: clsSysSkillVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and SkillVId <> '{0}'", objSysSkillVerEN.skillVId);
 strWhereCond +=  Format(" and SkillVId = '{0}'", objSysSkillVerEN.skillVId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysSkillVerENS:源对象
 * @param objSysSkillVerENT:目标对象
*/
export  function SysSkillVer_CopyObjTo(objSysSkillVerENS: clsSysSkillVerEN , objSysSkillVerENT: clsSysSkillVerEN ): void 
{
objSysSkillVerENT.skillVId = objSysSkillVerENS.skillVId; //SkillVId
objSysSkillVerENT.skillId = objSysSkillVerENS.skillId; //技能Id
objSysSkillVerENT.skillName = objSysSkillVerENS.skillName; //技能名称
objSysSkillVerENT.operationTypeId = objSysSkillVerENS.operationTypeId; //操作类型ID
objSysSkillVerENT.process = objSysSkillVerENS.process; //实施过程
objSysSkillVerENT.levelId = objSysSkillVerENS.levelId; //级别Id
objSysSkillVerENT.updUser = objSysSkillVerENS.updUser; //修改人
objSysSkillVerENT.updDate = objSysSkillVerENS.updDate; //修改日期
objSysSkillVerENT.citationId = objSysSkillVerENS.citationId; //引用Id
objSysSkillVerENT.idCurrEduCls = objSysSkillVerENS.idCurrEduCls; //教学班流水号
objSysSkillVerENT.pdfContent = objSysSkillVerENS.pdfContent; //Pdf内容
objSysSkillVerENT.pdfPageNum = objSysSkillVerENS.pdfPageNum; //Pdf页码
objSysSkillVerENT.memo = objSysSkillVerENS.memo; //备注
objSysSkillVerENT.sfUpdFldSetStr = objSysSkillVerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysSkillVerENS:源对象
 * @param objSysSkillVerENT:目标对象
*/
export  function SysSkillVer_GetObjFromJsonObj(objSysSkillVerENS: clsSysSkillVerEN): clsSysSkillVerEN 
{
 const objSysSkillVerENT: clsSysSkillVerEN = new clsSysSkillVerEN();
ObjectAssign(objSysSkillVerENT, objSysSkillVerENS);
 return objSysSkillVerENT;
}