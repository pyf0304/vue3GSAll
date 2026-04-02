
 /**
 * 类名:clsgs_PaperParagraphVerWApi
 * 表名:gs_PaperParagraphVer(01120743)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文段落版本(gs_PaperParagraphVer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsgs_PaperParagraphVerEN } from "@/ts/L0Entity/GradEduPaper/clsgs_PaperParagraphVerEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_PaperParagraphVer_Controller = "gs_PaperParagraphVerApi";
 export const gs_PaperParagraphVer_ConstructorName = "gs_PaperParagraphVer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngParagraphVId:关键字
 * @returns 对象
 **/
export  async function gs_PaperParagraphVer_GetObjByParagraphVIdAsync(lngParagraphVId: number): Promise<clsgs_PaperParagraphVerEN|null>  
{
const strThisFuncName = "GetObjByParagraphVIdAsync";

if (lngParagraphVId == 0)
{
  const strMsg = Format("参数:[lngParagraphVId]不能为空!(In clsgs_PaperParagraphVerWApi.GetObjByParagraphVIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByParagraphVId";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngParagraphVId,
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
const objgs_PaperParagraphVer = gs_PaperParagraphVer_GetObjFromJsonObj(returnObj);
return objgs_PaperParagraphVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByParagraphVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByParagraphVIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByParagraphVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function gs_PaperParagraphVer_SortFunDefa(a:clsgs_PaperParagraphVerEN , b:clsgs_PaperParagraphVerEN): number 
{
return a.paragraphVId-b.paragraphVId;
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
export  function gs_PaperParagraphVer_SortFunDefa2Fld(a:clsgs_PaperParagraphVerEN , b:clsgs_PaperParagraphVerEN): number 
{
if (a.paragraphId == b.paragraphId) return a.sectionId.localeCompare(b.sectionId);
else return a.paragraphId.localeCompare(b.paragraphId);
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
export  function gs_PaperParagraphVer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_PaperParagraphVerEN.con_ParagraphVId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return a.paragraphVId-b.paragraphVId;
}
case clsgs_PaperParagraphVerEN.con_ParagraphId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return a.paragraphId.localeCompare(b.paragraphId);
}
case clsgs_PaperParagraphVerEN.con_SectionId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return a.sectionId.localeCompare(b.sectionId);
}
case clsgs_PaperParagraphVerEN.con_ParagraphTypeId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return a.paragraphTypeId.localeCompare(b.paragraphTypeId);
}
case clsgs_PaperParagraphVerEN.con_ParagraphContent:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (a.paragraphContent == null) return -1;
if (b.paragraphContent == null) return 1;
return a.paragraphContent.localeCompare(b.paragraphContent);
}
case clsgs_PaperParagraphVerEN.con_UpdDate:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_PaperParagraphVerEN.con_UpdUser:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_PaperParagraphVerEN.con_Memo:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsgs_PaperParagraphVerEN.con_PaperId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_PaperParagraphVer]中不存在!(in ${ gs_PaperParagraphVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_PaperParagraphVerEN.con_ParagraphVId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return b.paragraphVId-a.paragraphVId;
}
case clsgs_PaperParagraphVerEN.con_ParagraphId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return b.paragraphId.localeCompare(a.paragraphId);
}
case clsgs_PaperParagraphVerEN.con_SectionId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return b.sectionId.localeCompare(a.sectionId);
}
case clsgs_PaperParagraphVerEN.con_ParagraphTypeId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
return b.paragraphTypeId.localeCompare(a.paragraphTypeId);
}
case clsgs_PaperParagraphVerEN.con_ParagraphContent:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (b.paragraphContent == null) return -1;
if (a.paragraphContent == null) return 1;
return b.paragraphContent.localeCompare(a.paragraphContent);
}
case clsgs_PaperParagraphVerEN.con_UpdDate:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_PaperParagraphVerEN.con_UpdUser:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_PaperParagraphVerEN.con_Memo:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsgs_PaperParagraphVerEN.con_PaperId:
return (a: clsgs_PaperParagraphVerEN, b: clsgs_PaperParagraphVerEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_PaperParagraphVer]中不存在!(in ${ gs_PaperParagraphVer_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_PaperParagraphVer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_PaperParagraphVerEN.con_ParagraphVId:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.paragraphVId === value;
}
case clsgs_PaperParagraphVerEN.con_ParagraphId:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.paragraphId === value;
}
case clsgs_PaperParagraphVerEN.con_SectionId:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.sectionId === value;
}
case clsgs_PaperParagraphVerEN.con_ParagraphTypeId:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.paragraphTypeId === value;
}
case clsgs_PaperParagraphVerEN.con_ParagraphContent:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.paragraphContent === value;
}
case clsgs_PaperParagraphVerEN.con_UpdDate:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.updDate === value;
}
case clsgs_PaperParagraphVerEN.con_UpdUser:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.updUser === value;
}
case clsgs_PaperParagraphVerEN.con_Memo:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.memo === value;
}
case clsgs_PaperParagraphVerEN.con_PaperId:
return (obj: clsgs_PaperParagraphVerEN) => {
return obj.paperId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_PaperParagraphVer]中不存在!(in ${ gs_PaperParagraphVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_PaperParagraphVer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_PaperParagraphVer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_PaperParagraphVerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const objgs_PaperParagraphVer = gs_PaperParagraphVer_GetObjFromJsonObj(returnObj);
return objgs_PaperParagraphVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_PaperParagraphVerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PaperParagraphVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param arrParagraphVId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_PaperParagraphVer_GetObjLstByParagraphVIdLstAsync(arrParagraphVId: Array<string>): Promise<Array<clsgs_PaperParagraphVerEN>>  
{
const strThisFuncName = "GetObjLstByParagraphVIdLstAsync";
const strAction = "GetObjLstByParagraphVIdLst";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrParagraphVId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PaperParagraphVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByParagraphVIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function gs_PaperParagraphVer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_PaperParagraphVerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PaperParagraphVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_PaperParagraphVerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PaperParagraphVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_PaperParagraphVerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperParagraphVerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_PaperParagraphVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param lngParagraphVId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_PaperParagraphVer_DelRecordAsync(lngParagraphVId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngParagraphVId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param arrParagraphVId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_PaperParagraphVer_Delgs_PaperParagraphVersAsync(arrParagraphVId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_PaperParagraphVersAsync";
const strAction = "Delgs_PaperParagraphVers";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrParagraphVId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_Delgs_PaperParagraphVersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_PaperParagraphVersByCondAsync";
const strAction = "Delgs_PaperParagraphVersByCond";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param objgs_PaperParagraphVerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_PaperParagraphVer_AddNewRecordAsync(objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_PaperParagraphVerEN);
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PaperParagraphVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param objgs_PaperParagraphVerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_PaperParagraphVer_AddNewRecordWithReturnKeyAsync(objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PaperParagraphVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param objgs_PaperParagraphVerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_PaperParagraphVer_UpdateRecordAsync(objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_PaperParagraphVerEN.sfUpdFldSetStr === undefined || objgs_PaperParagraphVerEN.sfUpdFldSetStr === null || objgs_PaperParagraphVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_PaperParagraphVerEN.paragraphVId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PaperParagraphVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param objgs_PaperParagraphVerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_PaperParagraphVer_UpdateWithConditionAsync(objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_PaperParagraphVerEN.sfUpdFldSetStr === undefined || objgs_PaperParagraphVerEN.sfUpdFldSetStr === null || objgs_PaperParagraphVerEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_PaperParagraphVerEN.paragraphVId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);
objgs_PaperParagraphVerEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_PaperParagraphVerEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
 * @param lngParagraphVId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_PaperParagraphVer_IsExistAsync(lngParagraphVId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngParagraphVId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  async function gs_PaperParagraphVer_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_PaperParagraphVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_PaperParagraphVer_ConstructorName, strThisFuncName);
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
export  function gs_PaperParagraphVer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_PaperParagraphVer_CheckPropertyNew(pobjgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphId) === true )
{
 throw new Error("(errid:Watl000411)字段[段落Id]不能为空(In 论文段落版本)!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.sectionId) === true )
{
 throw new Error("(errid:Watl000411)字段[节Id]不能为空(In 论文段落版本)!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphTypeId) === true )
{
 throw new Error("(errid:Watl000411)字段[段落类型Id]不能为空(In 论文段落版本)!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.paragraphId) > 10)
{
 throw new Error("(errid:Watl000413)字段[段落Id(paragraphId)]的长度不能超过10(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.paragraphId)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.sectionId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.sectionId) > 8)
{
 throw new Error("(errid:Watl000413)字段[节Id(sectionId)]的长度不能超过8(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.sectionId)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphTypeId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.paragraphTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[段落类型Id(paragraphTypeId)]的长度不能超过2(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.paragraphTypeId)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updDate) == false && GetStrLen(pobjgs_PaperParagraphVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.updDate)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updUser) == false && GetStrLen(pobjgs_PaperParagraphVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.updUser)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.memo) == false && GetStrLen(pobjgs_PaperParagraphVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.memo)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paperId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.paperId) > 8)
{
 throw new Error("(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.paperId)(clsgs_PaperParagraphVerBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_PaperParagraphVerEN.paragraphVId && undefined !== pobjgs_PaperParagraphVerEN.paragraphVId && tzDataType.isNumber(pobjgs_PaperParagraphVerEN.paragraphVId) === false)
{
 throw new Error("(errid:Watl000414)字段[段落版本Id(paragraphVId)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphVId)], 非法,应该为数值型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphId) == false && undefined !== pobjgs_PaperParagraphVerEN.paragraphId && tzDataType.isString(pobjgs_PaperParagraphVerEN.paragraphId) === false)
{
 throw new Error("(errid:Watl000414)字段[段落Id(paragraphId)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.sectionId) == false && undefined !== pobjgs_PaperParagraphVerEN.sectionId && tzDataType.isString(pobjgs_PaperParagraphVerEN.sectionId) === false)
{
 throw new Error("(errid:Watl000414)字段[节Id(sectionId)]的值:[$(pobjgs_PaperParagraphVerEN.sectionId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphTypeId) == false && undefined !== pobjgs_PaperParagraphVerEN.paragraphTypeId && tzDataType.isString(pobjgs_PaperParagraphVerEN.paragraphTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[段落类型Id(paragraphTypeId)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphTypeId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphContent) == false && undefined !== pobjgs_PaperParagraphVerEN.paragraphContent && tzDataType.isString(pobjgs_PaperParagraphVerEN.paragraphContent) === false)
{
 throw new Error("(errid:Watl000414)字段[段落内容(paragraphContent)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphContent)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updDate) == false && undefined !== pobjgs_PaperParagraphVerEN.updDate && tzDataType.isString(pobjgs_PaperParagraphVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_PaperParagraphVerEN.updDate)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updUser) == false && undefined !== pobjgs_PaperParagraphVerEN.updUser && tzDataType.isString(pobjgs_PaperParagraphVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_PaperParagraphVerEN.updUser)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.memo) == false && undefined !== pobjgs_PaperParagraphVerEN.memo && tzDataType.isString(pobjgs_PaperParagraphVerEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_PaperParagraphVerEN.memo)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paperId) == false && undefined !== pobjgs_PaperParagraphVerEN.paperId && tzDataType.isString(pobjgs_PaperParagraphVerEN.paperId) === false)
{
 throw new Error("(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_PaperParagraphVerEN.paperId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_PaperParagraphVer_CheckProperty4Update(pobjgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.paragraphId) > 10)
{
 throw new Error("(errid:Watl000416)字段[段落Id(paragraphId)]的长度不能超过10(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.paragraphId)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.sectionId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.sectionId) > 8)
{
 throw new Error("(errid:Watl000416)字段[节Id(sectionId)]的长度不能超过8(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.sectionId)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphTypeId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.paragraphTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[段落类型Id(paragraphTypeId)]的长度不能超过2(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.paragraphTypeId)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updDate) == false && GetStrLen(pobjgs_PaperParagraphVerEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.updDate)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updUser) == false && GetStrLen(pobjgs_PaperParagraphVerEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.updUser)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.memo) == false && GetStrLen(pobjgs_PaperParagraphVerEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.memo)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paperId) == false && GetStrLen(pobjgs_PaperParagraphVerEN.paperId) > 8)
{
 throw new Error("(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 论文段落版本(gs_PaperParagraphVer))!值:$(pobjgs_PaperParagraphVerEN.paperId)(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_PaperParagraphVerEN.paragraphVId && undefined !== pobjgs_PaperParagraphVerEN.paragraphVId && tzDataType.isNumber(pobjgs_PaperParagraphVerEN.paragraphVId) === false)
{
 throw new Error("(errid:Watl000417)字段[段落版本Id(paragraphVId)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphVId)], 非法,应该为数值型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphId) == false && undefined !== pobjgs_PaperParagraphVerEN.paragraphId && tzDataType.isString(pobjgs_PaperParagraphVerEN.paragraphId) === false)
{
 throw new Error("(errid:Watl000417)字段[段落Id(paragraphId)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.sectionId) == false && undefined !== pobjgs_PaperParagraphVerEN.sectionId && tzDataType.isString(pobjgs_PaperParagraphVerEN.sectionId) === false)
{
 throw new Error("(errid:Watl000417)字段[节Id(sectionId)]的值:[$(pobjgs_PaperParagraphVerEN.sectionId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphTypeId) == false && undefined !== pobjgs_PaperParagraphVerEN.paragraphTypeId && tzDataType.isString(pobjgs_PaperParagraphVerEN.paragraphTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[段落类型Id(paragraphTypeId)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphTypeId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paragraphContent) == false && undefined !== pobjgs_PaperParagraphVerEN.paragraphContent && tzDataType.isString(pobjgs_PaperParagraphVerEN.paragraphContent) === false)
{
 throw new Error("(errid:Watl000417)字段[段落内容(paragraphContent)]的值:[$(pobjgs_PaperParagraphVerEN.paragraphContent)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updDate) == false && undefined !== pobjgs_PaperParagraphVerEN.updDate && tzDataType.isString(pobjgs_PaperParagraphVerEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_PaperParagraphVerEN.updDate)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.updUser) == false && undefined !== pobjgs_PaperParagraphVerEN.updUser && tzDataType.isString(pobjgs_PaperParagraphVerEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_PaperParagraphVerEN.updUser)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.memo) == false && undefined !== pobjgs_PaperParagraphVerEN.memo && tzDataType.isString(pobjgs_PaperParagraphVerEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_PaperParagraphVerEN.memo)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_PaperParagraphVerEN.paperId) == false && undefined !== pobjgs_PaperParagraphVerEN.paperId && tzDataType.isString(pobjgs_PaperParagraphVerEN.paperId) === false)
{
 throw new Error("(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_PaperParagraphVerEN.paperId)], 非法,应该为字符型(In 论文段落版本(gs_PaperParagraphVer))!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_PaperParagraphVerEN.paragraphVId 
 || pobjgs_PaperParagraphVerEN.paragraphVId != null && pobjgs_PaperParagraphVerEN.paragraphVId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[段落版本Id]不能为空(In 论文段落版本)!(clsgs_PaperParagraphVerBL:CheckProperty4Update)");
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
export  function gs_PaperParagraphVer_GetJSONStrByObj (pobjgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN): string
{
pobjgs_PaperParagraphVerEN.sfUpdFldSetStr = pobjgs_PaperParagraphVerEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_PaperParagraphVerEN);
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
export  function gs_PaperParagraphVer_GetObjLstByJSONStr (strJSON: string): Array<clsgs_PaperParagraphVerEN>
{
let arrgs_PaperParagraphVerObjLst = new Array<clsgs_PaperParagraphVerEN>();
if (strJSON === "")
{
return arrgs_PaperParagraphVerObjLst;
}
try
{
arrgs_PaperParagraphVerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_PaperParagraphVerObjLst;
}
return arrgs_PaperParagraphVerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_PaperParagraphVerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_PaperParagraphVer_GetObjLstByJSONObjLst (arrgs_PaperParagraphVerObjLstS: Array<clsgs_PaperParagraphVerEN>): Array<clsgs_PaperParagraphVerEN>
{
const arrgs_PaperParagraphVerObjLst = new Array<clsgs_PaperParagraphVerEN>();
for (const objInFor of arrgs_PaperParagraphVerObjLstS) {
const obj1 = gs_PaperParagraphVer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_PaperParagraphVerObjLst.push(obj1);
}
return arrgs_PaperParagraphVerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_PaperParagraphVer_GetObjByJSONStr (strJSON: string): clsgs_PaperParagraphVerEN
{
let pobjgs_PaperParagraphVerEN = new clsgs_PaperParagraphVerEN();
if (strJSON === "")
{
return pobjgs_PaperParagraphVerEN;
}
try
{
pobjgs_PaperParagraphVerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_PaperParagraphVerEN;
}
return pobjgs_PaperParagraphVerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_PaperParagraphVer_GetCombineCondition(objgs_PaperParagraphVerCond: clsgs_PaperParagraphVerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_ParagraphVId) == true)
{
const strComparisonOpParagraphVId:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_ParagraphVId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_PaperParagraphVerEN.con_ParagraphVId, objgs_PaperParagraphVerCond.paragraphVId, strComparisonOpParagraphVId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_ParagraphId) == true)
{
const strComparisonOpParagraphId:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_ParagraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_ParagraphId, objgs_PaperParagraphVerCond.paragraphId, strComparisonOpParagraphId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_SectionId, objgs_PaperParagraphVerCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_ParagraphTypeId) == true)
{
const strComparisonOpParagraphTypeId:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_ParagraphTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_ParagraphTypeId, objgs_PaperParagraphVerCond.paragraphTypeId, strComparisonOpParagraphTypeId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_UpdDate, objgs_PaperParagraphVerCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_UpdUser, objgs_PaperParagraphVerCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_Memo, objgs_PaperParagraphVerCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objgs_PaperParagraphVerCond.dicFldComparisonOp, clsgs_PaperParagraphVerEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objgs_PaperParagraphVerCond.dicFldComparisonOp[clsgs_PaperParagraphVerEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_PaperParagraphVerEN.con_PaperId, objgs_PaperParagraphVerCond.paperId, strComparisonOpPaperId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_PaperParagraphVer(论文段落版本),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngParagraphVId: 段落版本Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_PaperParagraphVer_GetUniCondStr(objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ParagraphVId = '{0}'", objgs_PaperParagraphVerEN.paragraphVId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_PaperParagraphVer(论文段落版本),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngParagraphVId: 段落版本Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_PaperParagraphVer_GetUniCondStr4Update(objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ParagraphVId <> '{0}'", objgs_PaperParagraphVerEN.paragraphVId);
 strWhereCond +=  Format(" and ParagraphVId = '{0}'", objgs_PaperParagraphVerEN.paragraphVId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_PaperParagraphVerENS:源对象
 * @param objgs_PaperParagraphVerENT:目标对象
*/
export  function gs_PaperParagraphVer_CopyObjTo(objgs_PaperParagraphVerENS: clsgs_PaperParagraphVerEN , objgs_PaperParagraphVerENT: clsgs_PaperParagraphVerEN ): void 
{
objgs_PaperParagraphVerENT.paragraphVId = objgs_PaperParagraphVerENS.paragraphVId; //段落版本Id
objgs_PaperParagraphVerENT.paragraphId = objgs_PaperParagraphVerENS.paragraphId; //段落Id
objgs_PaperParagraphVerENT.sectionId = objgs_PaperParagraphVerENS.sectionId; //节Id
objgs_PaperParagraphVerENT.paragraphTypeId = objgs_PaperParagraphVerENS.paragraphTypeId; //段落类型Id
objgs_PaperParagraphVerENT.paragraphContent = objgs_PaperParagraphVerENS.paragraphContent; //段落内容
objgs_PaperParagraphVerENT.updDate = objgs_PaperParagraphVerENS.updDate; //修改日期
objgs_PaperParagraphVerENT.updUser = objgs_PaperParagraphVerENS.updUser; //修改人
objgs_PaperParagraphVerENT.memo = objgs_PaperParagraphVerENS.memo; //备注
objgs_PaperParagraphVerENT.paperId = objgs_PaperParagraphVerENS.paperId; //论文Id
objgs_PaperParagraphVerENT.sfUpdFldSetStr = objgs_PaperParagraphVerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_PaperParagraphVerENS:源对象
 * @param objgs_PaperParagraphVerENT:目标对象
*/
export  function gs_PaperParagraphVer_GetObjFromJsonObj(objgs_PaperParagraphVerENS: clsgs_PaperParagraphVerEN): clsgs_PaperParagraphVerEN 
{
 const objgs_PaperParagraphVerENT: clsgs_PaperParagraphVerEN = new clsgs_PaperParagraphVerEN();
ObjectAssign(objgs_PaperParagraphVerENT, objgs_PaperParagraphVerENS);
 return objgs_PaperParagraphVerENT;
}