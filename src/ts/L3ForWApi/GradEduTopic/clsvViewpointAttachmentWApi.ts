
 /**
 * 类名:clsvViewpointAttachmentWApi
 * 表名:vViewpointAttachment(01120593)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:31
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
 * v观点附件(vViewpointAttachment)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvViewpointAttachmentEN } from "@/ts/L0Entity/GradEduTopic/clsvViewpointAttachmentEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vViewpointAttachment_Controller = "vViewpointAttachmentApi";
 export const vViewpointAttachment_ConstructorName = "vViewpointAttachment";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngViewpointAttachmentId:关键字
 * @returns 对象
 **/
export  async function vViewpointAttachment_GetObjByViewpointAttachmentIdAsync(lngViewpointAttachmentId: number): Promise<clsvViewpointAttachmentEN|null>  
{
const strThisFuncName = "GetObjByViewpointAttachmentIdAsync";

if (lngViewpointAttachmentId == 0)
{
  const strMsg = Format("参数:[lngViewpointAttachmentId]不能为空!(In clsvViewpointAttachmentWApi.GetObjByViewpointAttachmentIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByViewpointAttachmentId";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngViewpointAttachmentId,
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
const objvViewpointAttachment = vViewpointAttachment_GetObjFromJsonObj(returnObj);
return objvViewpointAttachment;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByViewpointAttachmentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByViewpointAttachmentIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByViewpointAttachmentIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vViewpointAttachment_SortFunDefa(a:clsvViewpointAttachmentEN , b:clsvViewpointAttachmentEN): number 
{
return a.viewpointAttachmentId-b.viewpointAttachmentId;
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
export  function vViewpointAttachment_SortFunDefa2Fld(a:clsvViewpointAttachmentEN , b:clsvViewpointAttachmentEN): number 
{
if (a.reason == b.reason) return a.viewpointAttachmentName.localeCompare(b.viewpointAttachmentName);
else return a.reason.localeCompare(b.reason);
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
export  function vViewpointAttachment_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvViewpointAttachmentEN.con_ViewpointAttachmentId:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
return a.viewpointAttachmentId-b.viewpointAttachmentId;
}
case clsvViewpointAttachmentEN.con_Reason:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.reason == null) return -1;
if (b.reason == null) return 1;
return a.reason.localeCompare(b.reason);
}
case clsvViewpointAttachmentEN.con_ViewpointAttachmentName:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.viewpointAttachmentName == null) return -1;
if (b.viewpointAttachmentName == null) return 1;
return a.viewpointAttachmentName.localeCompare(b.viewpointAttachmentName);
}
case clsvViewpointAttachmentEN.con_Source:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.source == null) return -1;
if (b.source == null) return 1;
return a.source.localeCompare(b.source);
}
case clsvViewpointAttachmentEN.con_ViewpointId:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.viewpointId == null) return -1;
if (b.viewpointId == null) return 1;
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsvViewpointAttachmentEN.con_FilePath:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
return a.filePath.localeCompare(b.filePath);
}
case clsvViewpointAttachmentEN.con_UpdUser:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvViewpointAttachmentEN.con_UpdDate:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvViewpointAttachmentEN.con_ViewpointContent:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.viewpointContent == null) return -1;
if (b.viewpointContent == null) return 1;
return a.viewpointContent.localeCompare(b.viewpointContent);
}
case clsvViewpointAttachmentEN.con_ViewpointName:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.viewpointName == null) return -1;
if (b.viewpointName == null) return 1;
return a.viewpointName.localeCompare(b.viewpointName);
}
case clsvViewpointAttachmentEN.con_ViewpointTypeId:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.viewpointTypeId == null) return -1;
if (b.viewpointTypeId == null) return 1;
return a.viewpointTypeId.localeCompare(b.viewpointTypeId);
}
case clsvViewpointAttachmentEN.con_ViewpointTypeName:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.viewpointTypeName == null) return -1;
if (b.viewpointTypeName == null) return 1;
return a.viewpointTypeName.localeCompare(b.viewpointTypeName);
}
case clsvViewpointAttachmentEN.con_VPProposePeople:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.vPProposePeople == null) return -1;
if (b.vPProposePeople == null) return 1;
return a.vPProposePeople.localeCompare(b.vPProposePeople);
}
case clsvViewpointAttachmentEN.con_IdCurrEduCls:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vViewpointAttachment]中不存在!(in ${ vViewpointAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvViewpointAttachmentEN.con_ViewpointAttachmentId:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
return b.viewpointAttachmentId-a.viewpointAttachmentId;
}
case clsvViewpointAttachmentEN.con_Reason:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.reason == null) return -1;
if (a.reason == null) return 1;
return b.reason.localeCompare(a.reason);
}
case clsvViewpointAttachmentEN.con_ViewpointAttachmentName:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.viewpointAttachmentName == null) return -1;
if (a.viewpointAttachmentName == null) return 1;
return b.viewpointAttachmentName.localeCompare(a.viewpointAttachmentName);
}
case clsvViewpointAttachmentEN.con_Source:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.source == null) return -1;
if (a.source == null) return 1;
return b.source.localeCompare(a.source);
}
case clsvViewpointAttachmentEN.con_ViewpointId:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.viewpointId == null) return -1;
if (a.viewpointId == null) return 1;
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsvViewpointAttachmentEN.con_FilePath:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
return b.filePath.localeCompare(a.filePath);
}
case clsvViewpointAttachmentEN.con_UpdUser:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvViewpointAttachmentEN.con_UpdDate:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvViewpointAttachmentEN.con_ViewpointContent:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.viewpointContent == null) return -1;
if (a.viewpointContent == null) return 1;
return b.viewpointContent.localeCompare(a.viewpointContent);
}
case clsvViewpointAttachmentEN.con_ViewpointName:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.viewpointName == null) return -1;
if (a.viewpointName == null) return 1;
return b.viewpointName.localeCompare(a.viewpointName);
}
case clsvViewpointAttachmentEN.con_ViewpointTypeId:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.viewpointTypeId == null) return -1;
if (a.viewpointTypeId == null) return 1;
return b.viewpointTypeId.localeCompare(a.viewpointTypeId);
}
case clsvViewpointAttachmentEN.con_ViewpointTypeName:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.viewpointTypeName == null) return -1;
if (a.viewpointTypeName == null) return 1;
return b.viewpointTypeName.localeCompare(a.viewpointTypeName);
}
case clsvViewpointAttachmentEN.con_VPProposePeople:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.vPProposePeople == null) return -1;
if (a.vPProposePeople == null) return 1;
return b.vPProposePeople.localeCompare(a.vPProposePeople);
}
case clsvViewpointAttachmentEN.con_IdCurrEduCls:
return (a: clsvViewpointAttachmentEN, b: clsvViewpointAttachmentEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vViewpointAttachment]中不存在!(in ${ vViewpointAttachment_ConstructorName}.${ strThisFuncName})`;
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
export  async function vViewpointAttachment_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvViewpointAttachmentEN.con_ViewpointAttachmentId:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointAttachmentId === value;
}
case clsvViewpointAttachmentEN.con_Reason:
return (obj: clsvViewpointAttachmentEN) => {
return obj.reason === value;
}
case clsvViewpointAttachmentEN.con_ViewpointAttachmentName:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointAttachmentName === value;
}
case clsvViewpointAttachmentEN.con_Source:
return (obj: clsvViewpointAttachmentEN) => {
return obj.source === value;
}
case clsvViewpointAttachmentEN.con_ViewpointId:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointId === value;
}
case clsvViewpointAttachmentEN.con_FilePath:
return (obj: clsvViewpointAttachmentEN) => {
return obj.filePath === value;
}
case clsvViewpointAttachmentEN.con_UpdUser:
return (obj: clsvViewpointAttachmentEN) => {
return obj.updUser === value;
}
case clsvViewpointAttachmentEN.con_UpdDate:
return (obj: clsvViewpointAttachmentEN) => {
return obj.updDate === value;
}
case clsvViewpointAttachmentEN.con_ViewpointContent:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointContent === value;
}
case clsvViewpointAttachmentEN.con_ViewpointName:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointName === value;
}
case clsvViewpointAttachmentEN.con_ViewpointTypeId:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointTypeId === value;
}
case clsvViewpointAttachmentEN.con_ViewpointTypeName:
return (obj: clsvViewpointAttachmentEN) => {
return obj.viewpointTypeName === value;
}
case clsvViewpointAttachmentEN.con_VPProposePeople:
return (obj: clsvViewpointAttachmentEN) => {
return obj.vPProposePeople === value;
}
case clsvViewpointAttachmentEN.con_IdCurrEduCls:
return (obj: clsvViewpointAttachmentEN) => {
return obj.idCurrEduCls === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vViewpointAttachment]中不存在!(in ${ vViewpointAttachment_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vViewpointAttachment__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vViewpointAttachment_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_GetFirstObjAsync(strWhereCond: string): Promise<clsvViewpointAttachmentEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const objvViewpointAttachment = vViewpointAttachment_GetObjFromJsonObj(returnObj);
return objvViewpointAttachment;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvViewpointAttachmentEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vViewpointAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
 * @param arrViewpointAttachmentId:关键字列表
 * @returns 对象列表
 **/
export  async function vViewpointAttachment_GetObjLstByViewpointAttachmentIdLstAsync(arrViewpointAttachmentId: Array<string>): Promise<Array<clsvViewpointAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByViewpointAttachmentIdLstAsync";
const strAction = "GetObjLstByViewpointAttachmentIdLst";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewpointAttachmentId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vViewpointAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByViewpointAttachmentIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vViewpointAttachment_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvViewpointAttachmentEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vViewpointAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvViewpointAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vViewpointAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvViewpointAttachmentEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvViewpointAttachmentEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vViewpointAttachment_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
 * @param lngViewpointAttachmentId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vViewpointAttachment_IsExistAsync(lngViewpointAttachmentId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngViewpointAttachmentId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  async function vViewpointAttachment_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vViewpointAttachment_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vViewpointAttachment_ConstructorName, strThisFuncName);
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
export  function vViewpointAttachment_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vViewpointAttachment_GetJSONStrByObj (pobjvViewpointAttachmentEN: clsvViewpointAttachmentEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvViewpointAttachmentEN);
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
export  function vViewpointAttachment_GetObjLstByJSONStr (strJSON: string): Array<clsvViewpointAttachmentEN>
{
let arrvViewpointAttachmentObjLst = new Array<clsvViewpointAttachmentEN>();
if (strJSON === "")
{
return arrvViewpointAttachmentObjLst;
}
try
{
arrvViewpointAttachmentObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvViewpointAttachmentObjLst;
}
return arrvViewpointAttachmentObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvViewpointAttachmentObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vViewpointAttachment_GetObjLstByJSONObjLst (arrvViewpointAttachmentObjLstS: Array<clsvViewpointAttachmentEN>): Array<clsvViewpointAttachmentEN>
{
const arrvViewpointAttachmentObjLst = new Array<clsvViewpointAttachmentEN>();
for (const objInFor of arrvViewpointAttachmentObjLstS) {
const obj1 = vViewpointAttachment_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvViewpointAttachmentObjLst.push(obj1);
}
return arrvViewpointAttachmentObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vViewpointAttachment_GetObjByJSONStr (strJSON: string): clsvViewpointAttachmentEN
{
let pobjvViewpointAttachmentEN = new clsvViewpointAttachmentEN();
if (strJSON === "")
{
return pobjvViewpointAttachmentEN;
}
try
{
pobjvViewpointAttachmentEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvViewpointAttachmentEN;
}
return pobjvViewpointAttachmentEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vViewpointAttachment_GetCombineCondition(objvViewpointAttachmentCond: clsvViewpointAttachmentEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_ViewpointAttachmentId) == true)
{
const strComparisonOpViewpointAttachmentId:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_ViewpointAttachmentId];
strWhereCond += Format(" And {0} {2} {1}", clsvViewpointAttachmentEN.con_ViewpointAttachmentId, objvViewpointAttachmentCond.viewpointAttachmentId, strComparisonOpViewpointAttachmentId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_ViewpointAttachmentName) == true)
{
const strComparisonOpViewpointAttachmentName:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_ViewpointAttachmentName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_ViewpointAttachmentName, objvViewpointAttachmentCond.viewpointAttachmentName, strComparisonOpViewpointAttachmentName);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_Source) == true)
{
const strComparisonOpSource:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_Source];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_Source, objvViewpointAttachmentCond.source, strComparisonOpSource);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_ViewpointId, objvViewpointAttachmentCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_FilePath) == true)
{
const strComparisonOpFilePath:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_FilePath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_FilePath, objvViewpointAttachmentCond.filePath, strComparisonOpFilePath);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_UpdUser, objvViewpointAttachmentCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_UpdDate, objvViewpointAttachmentCond.updDate, strComparisonOpUpdDate);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_ViewpointName) == true)
{
const strComparisonOpViewpointName:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_ViewpointName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_ViewpointName, objvViewpointAttachmentCond.viewpointName, strComparisonOpViewpointName);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_ViewpointTypeId) == true)
{
const strComparisonOpViewpointTypeId:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_ViewpointTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_ViewpointTypeId, objvViewpointAttachmentCond.viewpointTypeId, strComparisonOpViewpointTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_ViewpointTypeName) == true)
{
const strComparisonOpViewpointTypeName:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_ViewpointTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_ViewpointTypeName, objvViewpointAttachmentCond.viewpointTypeName, strComparisonOpViewpointTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_VPProposePeople) == true)
{
const strComparisonOpVPProposePeople:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_VPProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_VPProposePeople, objvViewpointAttachmentCond.vPProposePeople, strComparisonOpVPProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvViewpointAttachmentCond.dicFldComparisonOp, clsvViewpointAttachmentEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvViewpointAttachmentCond.dicFldComparisonOp[clsvViewpointAttachmentEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvViewpointAttachmentEN.con_IdCurrEduCls, objvViewpointAttachmentCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvViewpointAttachmentENS:源对象
 * @param objvViewpointAttachmentENT:目标对象
*/
export  function vViewpointAttachment_CopyObjTo(objvViewpointAttachmentENS: clsvViewpointAttachmentEN , objvViewpointAttachmentENT: clsvViewpointAttachmentEN ): void 
{
objvViewpointAttachmentENT.viewpointAttachmentId = objvViewpointAttachmentENS.viewpointAttachmentId; //主键Id
objvViewpointAttachmentENT.reason = objvViewpointAttachmentENS.reason; //理由
objvViewpointAttachmentENT.viewpointAttachmentName = objvViewpointAttachmentENS.viewpointAttachmentName; //附件名称
objvViewpointAttachmentENT.source = objvViewpointAttachmentENS.source; //来源
objvViewpointAttachmentENT.viewpointId = objvViewpointAttachmentENS.viewpointId; //观点Id
objvViewpointAttachmentENT.filePath = objvViewpointAttachmentENS.filePath; //文件路径
objvViewpointAttachmentENT.updUser = objvViewpointAttachmentENS.updUser; //修改人
objvViewpointAttachmentENT.updDate = objvViewpointAttachmentENS.updDate; //修改日期
objvViewpointAttachmentENT.viewpointContent = objvViewpointAttachmentENS.viewpointContent; //观点内容
objvViewpointAttachmentENT.viewpointName = objvViewpointAttachmentENS.viewpointName; //观点名称
objvViewpointAttachmentENT.viewpointTypeId = objvViewpointAttachmentENS.viewpointTypeId; //观点类型Id
objvViewpointAttachmentENT.viewpointTypeName = objvViewpointAttachmentENS.viewpointTypeName; //观点类型名
objvViewpointAttachmentENT.vPProposePeople = objvViewpointAttachmentENS.vPProposePeople; //观点提出人
objvViewpointAttachmentENT.idCurrEduCls = objvViewpointAttachmentENS.idCurrEduCls; //教学班流水号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvViewpointAttachmentENS:源对象
 * @param objvViewpointAttachmentENT:目标对象
*/
export  function vViewpointAttachment_GetObjFromJsonObj(objvViewpointAttachmentENS: clsvViewpointAttachmentEN): clsvViewpointAttachmentEN 
{
 const objvViewpointAttachmentENT: clsvViewpointAttachmentEN = new clsvViewpointAttachmentEN();
ObjectAssign(objvViewpointAttachmentENT, objvViewpointAttachmentENS);
 return objvViewpointAttachmentENT;
}