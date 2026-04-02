
 /**
 * 类名:clsgs_ReflectLogWApi
 * 表名:gs_ReflectLog(01120702)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:02
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
 * 反思日志(gs_ReflectLog)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsgs_ReflectLogEN } from "@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_ReflectLog_Controller = "gs_ReflectLogApi";
 export const gs_ReflectLog_ConstructorName = "gs_ReflectLog";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function gs_ReflectLog_GetObjBymIdAsync(lngmId: number): Promise<clsgs_ReflectLogEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_ReflectLogWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objgs_ReflectLog = gs_ReflectLog_GetObjFromJsonObj(returnObj);
return objgs_ReflectLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function gs_ReflectLog_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_ReflectLogWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
try
{
const arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache.filter(x => 
 x.mId == lngmId );
let objgs_ReflectLog: clsgs_ReflectLogEN;
if (arrgs_ReflectLogSel.length > 0)
{
objgs_ReflectLog = arrgs_ReflectLogSel[0];
return objgs_ReflectLog;
}
else
{
if (bolTryAsyncOnce == true)
{
const objgs_ReflectLogConst = await gs_ReflectLog_GetObjBymIdAsync(lngmId);
if (objgs_ReflectLogConst != null)
{
gs_ReflectLog_ReFreshThisCache();
return objgs_ReflectLogConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function gs_ReflectLog_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_ReflectLogWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsgs_ReflectLogEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objgs_ReflectLogCache: clsgs_ReflectLogEN = JSON.parse(strTempObj);
return objgs_ReflectLogCache;
}
try
{
const objgs_ReflectLog = await gs_ReflectLog_GetObjBymIdAsync(lngmId);
if (objgs_ReflectLog != null)
{
localStorage.setItem(strKey, JSON.stringify(objgs_ReflectLog));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objgs_ReflectLog;
}
return objgs_ReflectLog;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objgs_ReflectLog:所给的对象
 * @returns 对象
*/
export  async function gs_ReflectLog_UpdateObjInLstCache(objgs_ReflectLog: clsgs_ReflectLogEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
const obj = arrgs_ReflectLogObjLstCache.find(x => x.mId == objgs_ReflectLog.mId);
if (obj != null)
{
objgs_ReflectLog.mId = obj.mId;
ObjectAssign( obj, objgs_ReflectLog);
}
else
{
arrgs_ReflectLogObjLstCache.push(objgs_ReflectLog);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
/*该表没有名称字段,不能生成此函数!*/

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
export  async function gs_ReflectLog_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsgs_ReflectLogEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsgs_ReflectLogEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsgs_ReflectLogEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objgs_ReflectLog = await gs_ReflectLog_GetObjBymIdCache(lngmId );
if (objgs_ReflectLog == null) return "";
if (objgs_ReflectLog.GetFldValue(strOutFldName) == null) return "";
return objgs_ReflectLog.GetFldValue(strOutFldName).toString();
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
export  function gs_ReflectLog_SortFunDefa(a:clsgs_ReflectLogEN , b:clsgs_ReflectLogEN): number 
{
return a.mId-b.mId;
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
export  function gs_ReflectLog_SortFunDefa2Fld(a:clsgs_ReflectLogEN , b:clsgs_ReflectLogEN): number 
{
if (a.userId == b.userId) return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
else return a.userId.localeCompare(b.userId);
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
export  function gs_ReflectLog_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_ReflectLogEN.con_mId:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
return a.mId-b.mId;
}
case clsgs_ReflectLogEN.con_UserId:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
return a.userId.localeCompare(b.userId);
}
case clsgs_ReflectLogEN.con_IdCurrEduCls:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsgs_ReflectLogEN.con_TopicId:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsgs_ReflectLogEN.con_ReflectLogName:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.reflectLogName == null) return -1;
if (b.reflectLogName == null) return 1;
return a.reflectLogName.localeCompare(b.reflectLogName);
}
case clsgs_ReflectLogEN.con_ReflectLogContent:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.reflectLogContent == null) return -1;
if (b.reflectLogContent == null) return 1;
return a.reflectLogContent.localeCompare(b.reflectLogContent);
}
case clsgs_ReflectLogEN.con_UpdUser:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_ReflectLogEN.con_CreateDate:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsgs_ReflectLogEN.con_UpdDate:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_ReflectLogEN.con_Memo:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_ReflectLog]中不存在!(in ${ gs_ReflectLog_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_ReflectLogEN.con_mId:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
return b.mId-a.mId;
}
case clsgs_ReflectLogEN.con_UserId:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
return b.userId.localeCompare(a.userId);
}
case clsgs_ReflectLogEN.con_IdCurrEduCls:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsgs_ReflectLogEN.con_TopicId:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsgs_ReflectLogEN.con_ReflectLogName:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.reflectLogName == null) return -1;
if (a.reflectLogName == null) return 1;
return b.reflectLogName.localeCompare(a.reflectLogName);
}
case clsgs_ReflectLogEN.con_ReflectLogContent:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.reflectLogContent == null) return -1;
if (a.reflectLogContent == null) return 1;
return b.reflectLogContent.localeCompare(a.reflectLogContent);
}
case clsgs_ReflectLogEN.con_UpdUser:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_ReflectLogEN.con_CreateDate:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsgs_ReflectLogEN.con_UpdDate:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_ReflectLogEN.con_Memo:
return (a: clsgs_ReflectLogEN, b: clsgs_ReflectLogEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_ReflectLog]中不存在!(in ${ gs_ReflectLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_ReflectLog_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_ReflectLogEN.con_mId:
return (obj: clsgs_ReflectLogEN) => {
return obj.mId === value;
}
case clsgs_ReflectLogEN.con_UserId:
return (obj: clsgs_ReflectLogEN) => {
return obj.userId === value;
}
case clsgs_ReflectLogEN.con_IdCurrEduCls:
return (obj: clsgs_ReflectLogEN) => {
return obj.idCurrEduCls === value;
}
case clsgs_ReflectLogEN.con_TopicId:
return (obj: clsgs_ReflectLogEN) => {
return obj.topicId === value;
}
case clsgs_ReflectLogEN.con_ReflectLogName:
return (obj: clsgs_ReflectLogEN) => {
return obj.reflectLogName === value;
}
case clsgs_ReflectLogEN.con_ReflectLogContent:
return (obj: clsgs_ReflectLogEN) => {
return obj.reflectLogContent === value;
}
case clsgs_ReflectLogEN.con_UpdUser:
return (obj: clsgs_ReflectLogEN) => {
return obj.updUser === value;
}
case clsgs_ReflectLogEN.con_CreateDate:
return (obj: clsgs_ReflectLogEN) => {
return obj.createDate === value;
}
case clsgs_ReflectLogEN.con_UpdDate:
return (obj: clsgs_ReflectLogEN) => {
return obj.updDate === value;
}
case clsgs_ReflectLogEN.con_Memo:
return (obj: clsgs_ReflectLogEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_ReflectLog]中不存在!(in ${ gs_ReflectLog_ConstructorName}.${ strThisFuncName})`;
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
export  async function gs_ReflectLog_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsgs_ReflectLogEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrgs_ReflectLog = await gs_ReflectLog_GetObjLstCache();
if (arrgs_ReflectLog == null) return [];
let arrgs_ReflectLogSel = arrgs_ReflectLog;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrgs_ReflectLogSel.length == 0) return [];
return arrgs_ReflectLogSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_ReflectLog_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_ReflectLogEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const objgs_ReflectLog = gs_ReflectLog_GetObjFromJsonObj(returnObj);
return objgs_ReflectLog;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_ReflectLogEN._CurrTabName;
if (IsNullOrEmpty(clsgs_ReflectLogEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_ReflectLogEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrgs_ReflectLogExObjLstCache: Array<clsgs_ReflectLogEN> = CacheHelper.Get(strKey);
const arrgs_ReflectLogObjLstT = gs_ReflectLog_GetObjLstByJSONObjLst(arrgs_ReflectLogExObjLstCache);
return arrgs_ReflectLogObjLstT;
}
try
{
const arrgs_ReflectLogExObjLst = await gs_ReflectLog_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrgs_ReflectLogExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_ReflectLogExObjLst.length);
console.log(strInfo);
return arrgs_ReflectLogExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_ReflectLog_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_ReflectLogEN._CurrTabName;
if (IsNullOrEmpty(clsgs_ReflectLogEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_ReflectLogEN.CacheAddiCondition);
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
const arrgs_ReflectLogExObjLstCache: Array<clsgs_ReflectLogEN> = JSON.parse(strTempObjLst);
const arrgs_ReflectLogObjLstT = gs_ReflectLog_GetObjLstByJSONObjLst(arrgs_ReflectLogExObjLstCache);
return arrgs_ReflectLogObjLstT;
}
try
{
const arrgs_ReflectLogExObjLst = await gs_ReflectLog_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrgs_ReflectLogExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_ReflectLogExObjLst.length);
console.log(strInfo);
return arrgs_ReflectLogExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_ReflectLog_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsgs_ReflectLogEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrgs_ReflectLogObjLstCache: Array<clsgs_ReflectLogEN> = JSON.parse(strTempObjLst);
return arrgs_ReflectLogObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function gs_ReflectLog_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_ReflectLogEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_ReflectLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_ReflectLogEN._CurrTabName;
if (IsNullOrEmpty(clsgs_ReflectLogEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_ReflectLogEN.CacheAddiCondition);
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
const arrgs_ReflectLogExObjLstCache: Array<clsgs_ReflectLogEN> = JSON.parse(strTempObjLst);
const arrgs_ReflectLogObjLstT = gs_ReflectLog_GetObjLstByJSONObjLst(arrgs_ReflectLogExObjLstCache);
return arrgs_ReflectLogObjLstT;
}
try
{
const arrgs_ReflectLogExObjLst = await gs_ReflectLog_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrgs_ReflectLogExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_ReflectLogExObjLst.length);
console.log(strInfo);
return arrgs_ReflectLogExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_ReflectLog_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsgs_ReflectLogEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrgs_ReflectLogObjLstCache: Array<clsgs_ReflectLogEN> = JSON.parse(strTempObjLst);
return arrgs_ReflectLogObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_ReflectLog_GetObjLstCache(): Promise<Array<clsgs_ReflectLogEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrgs_ReflectLogObjLstCache;
switch (clsgs_ReflectLogEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstClientCache();
break;
default:
arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstClientCache();
break;
}
return arrgs_ReflectLogObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_ReflectLog_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrgs_ReflectLogObjLstCache;
switch (clsgs_ReflectLogEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrgs_ReflectLogObjLstCache = null;
break;
default:
arrgs_ReflectLogObjLstCache = null;
break;
}
return arrgs_ReflectLogObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_ReflectLog_GetSubObjLstCache(objgs_ReflectLogCond: clsgs_ReflectLogEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
let arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache;
if (objgs_ReflectLogCond.sfFldComparisonOp == null || objgs_ReflectLogCond.sfFldComparisonOp == "") return arrgs_ReflectLogSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_ReflectLogCond.sfFldComparisonOp);
//console.log("clsgs_ReflectLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_ReflectLogCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_ReflectLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_ReflectLogSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objgs_ReflectLogCond), gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_ReflectLogEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_ReflectLog_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsgs_ReflectLogEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_ReflectLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
*/
export  async function gs_ReflectLog_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
const arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrgs_ReflectLogSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_ReflectLogEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_ReflectLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_ReflectLogEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_ReflectLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_ReflectLogEN>();
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
if (arrgs_ReflectLogObjLstCache.length == 0) return arrgs_ReflectLogObjLstCache;
let arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objgs_ReflectLogCond = new clsgs_ReflectLogEN();
ObjectAssign(objgs_ReflectLogCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsgs_ReflectLogWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_ReflectLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_ReflectLogSel.length == 0) return arrgs_ReflectLogSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrgs_ReflectLogSel = arrgs_ReflectLogSel.sort(gs_ReflectLog_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrgs_ReflectLogSel = arrgs_ReflectLogSel.sort(objPagerPara.sortFun);
}
arrgs_ReflectLogSel = arrgs_ReflectLogSel.slice(intStart, intEnd);     
return arrgs_ReflectLogSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_ReflectLogEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function gs_ReflectLog_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_ReflectLogEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_ReflectLogEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_ReflectLog_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_ReflectLog_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_ReflectLog_Delgs_ReflectLogsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_ReflectLogsAsync";
const strAction = "Delgs_ReflectLogs";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_Delgs_ReflectLogsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_ReflectLogsByCondAsync";
const strAction = "Delgs_ReflectLogsByCond";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param objgs_ReflectLogEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_ReflectLog_AddNewRecordAsync(objgs_ReflectLogEN: clsgs_ReflectLogEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_ReflectLogEN);
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_ReflectLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param objgs_ReflectLogEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_ReflectLog_AddNewRecordWithReturnKeyAsync(objgs_ReflectLogEN: clsgs_ReflectLogEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_ReflectLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param objgs_ReflectLogEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_ReflectLog_UpdateRecordAsync(objgs_ReflectLogEN: clsgs_ReflectLogEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_ReflectLogEN.sfUpdFldSetStr === undefined || objgs_ReflectLogEN.sfUpdFldSetStr === null || objgs_ReflectLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_ReflectLogEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_ReflectLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param objgs_ReflectLogEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_ReflectLog_UpdateWithConditionAsync(objgs_ReflectLogEN: clsgs_ReflectLogEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_ReflectLogEN.sfUpdFldSetStr === undefined || objgs_ReflectLogEN.sfUpdFldSetStr === null || objgs_ReflectLogEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_ReflectLogEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);
objgs_ReflectLogEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_ReflectLogEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_ReflectLog_IsExistRecordCache(objgs_ReflectLogCond: clsgs_ReflectLogEN) {
const strThisFuncName = "IsExistRecordCache";
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
if (arrgs_ReflectLogObjLstCache == null) return false;
let arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache;
if (objgs_ReflectLogCond.sfFldComparisonOp == null || objgs_ReflectLogCond.sfFldComparisonOp == "") return arrgs_ReflectLogSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_ReflectLogCond.sfFldComparisonOp);
//console.log("clsgs_ReflectLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_ReflectLogCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_ReflectLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_ReflectLogSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objgs_ReflectLogCond), gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function gs_ReflectLog_IsExistCache(lngmId:number) {
const strThisFuncName = "IsExistCache";
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
if (arrgs_ReflectLogObjLstCache == null) return false;
try
{
const arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache.filter(x => x.mId == lngmId);
if (arrgs_ReflectLogSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_ReflectLog_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
 * @param objgs_ReflectLogCond:条件对象
 * @returns 对象列表记录数
*/
export  async function gs_ReflectLog_GetRecCountByCondCache(objgs_ReflectLogCond: clsgs_ReflectLogEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrgs_ReflectLogObjLstCache = await gs_ReflectLog_GetObjLstCache();
if (arrgs_ReflectLogObjLstCache == null) return 0;
let arrgs_ReflectLogSel = arrgs_ReflectLogObjLstCache;
if (objgs_ReflectLogCond.sfFldComparisonOp == null || objgs_ReflectLogCond.sfFldComparisonOp == "") return arrgs_ReflectLogSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_ReflectLogCond.sfFldComparisonOp);
//console.log("clsgs_ReflectLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_ReflectLogCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_ReflectLogCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_ReflectLogSel = arrgs_ReflectLogSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_ReflectLogSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objgs_ReflectLogCond), gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  async function gs_ReflectLog_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_ReflectLog_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_ReflectLog_ConstructorName, strThisFuncName);
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
export  function gs_ReflectLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_ReflectLog_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsgs_ReflectLogEN._CurrTabName;
switch (clsgs_ReflectLogEN.CacheModeId)
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
export  function gs_ReflectLog_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsgs_ReflectLogEN._CurrTabName;
switch (clsgs_ReflectLogEN.CacheModeId)
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_ReflectLog_CheckPropertyNew(pobjgs_ReflectLogEN: clsgs_ReflectLogEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_ReflectLogEN.userId) === true )
{
 throw new Error("(errid:Watl000411)字段[用户ID]不能为空(In 反思日志)!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.idCurrEduCls) === true 
 || pobjgs_ReflectLogEN.idCurrEduCls.toString()  ===  "0" )
{
 throw new Error("(errid:Watl000411)字段[教学班流水号]不能为空(In 反思日志)!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_ReflectLogEN.userId) == false && GetStrLen(pobjgs_ReflectLogEN.userId) > 18)
{
 throw new Error("(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.userId)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.idCurrEduCls) == false && GetStrLen(pobjgs_ReflectLogEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.idCurrEduCls)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.topicId) == false && GetStrLen(pobjgs_ReflectLogEN.topicId) > 8)
{
 throw new Error("(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.topicId)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogName) == false && GetStrLen(pobjgs_ReflectLogEN.reflectLogName) > 1000)
{
 throw new Error("(errid:Watl000413)字段[标题(reflectLogName)]的长度不能超过1000(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.reflectLogName)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogContent) == false && GetStrLen(pobjgs_ReflectLogEN.reflectLogContent) > 5000)
{
 throw new Error("(errid:Watl000413)字段[内容(reflectLogContent)]的长度不能超过5000(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.reflectLogContent)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updUser) == false && GetStrLen(pobjgs_ReflectLogEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.updUser)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.createDate) == false && GetStrLen(pobjgs_ReflectLogEN.createDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.createDate)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updDate) == false && GetStrLen(pobjgs_ReflectLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.updDate)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.memo) == false && GetStrLen(pobjgs_ReflectLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.memo)(clsgs_ReflectLogBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_ReflectLogEN.mId && undefined !== pobjgs_ReflectLogEN.mId && tzDataType.isNumber(pobjgs_ReflectLogEN.mId) === false)
{
 throw new Error("(errid:Watl000414)字段[mId(mId)]的值:[$(pobjgs_ReflectLogEN.mId)], 非法,应该为数值型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.userId) == false && undefined !== pobjgs_ReflectLogEN.userId && tzDataType.isString(pobjgs_ReflectLogEN.userId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjgs_ReflectLogEN.userId)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.idCurrEduCls) == false && undefined !== pobjgs_ReflectLogEN.idCurrEduCls && tzDataType.isString(pobjgs_ReflectLogEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_ReflectLogEN.idCurrEduCls)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.topicId) == false && undefined !== pobjgs_ReflectLogEN.topicId && tzDataType.isString(pobjgs_ReflectLogEN.topicId) === false)
{
 throw new Error("(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_ReflectLogEN.topicId)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogName) == false && undefined !== pobjgs_ReflectLogEN.reflectLogName && tzDataType.isString(pobjgs_ReflectLogEN.reflectLogName) === false)
{
 throw new Error("(errid:Watl000414)字段[标题(reflectLogName)]的值:[$(pobjgs_ReflectLogEN.reflectLogName)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogContent) == false && undefined !== pobjgs_ReflectLogEN.reflectLogContent && tzDataType.isString(pobjgs_ReflectLogEN.reflectLogContent) === false)
{
 throw new Error("(errid:Watl000414)字段[内容(reflectLogContent)]的值:[$(pobjgs_ReflectLogEN.reflectLogContent)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updUser) == false && undefined !== pobjgs_ReflectLogEN.updUser && tzDataType.isString(pobjgs_ReflectLogEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_ReflectLogEN.updUser)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.createDate) == false && undefined !== pobjgs_ReflectLogEN.createDate && tzDataType.isString(pobjgs_ReflectLogEN.createDate) === false)
{
 throw new Error("(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjgs_ReflectLogEN.createDate)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updDate) == false && undefined !== pobjgs_ReflectLogEN.updDate && tzDataType.isString(pobjgs_ReflectLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_ReflectLogEN.updDate)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.memo) == false && undefined !== pobjgs_ReflectLogEN.memo && tzDataType.isString(pobjgs_ReflectLogEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_ReflectLogEN.memo)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_ReflectLog_CheckProperty4Update(pobjgs_ReflectLogEN: clsgs_ReflectLogEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_ReflectLogEN.userId) == false && GetStrLen(pobjgs_ReflectLogEN.userId) > 18)
{
 throw new Error("(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.userId)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.idCurrEduCls) == false && GetStrLen(pobjgs_ReflectLogEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.idCurrEduCls)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.topicId) == false && GetStrLen(pobjgs_ReflectLogEN.topicId) > 8)
{
 throw new Error("(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.topicId)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogName) == false && GetStrLen(pobjgs_ReflectLogEN.reflectLogName) > 1000)
{
 throw new Error("(errid:Watl000416)字段[标题(reflectLogName)]的长度不能超过1000(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.reflectLogName)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogContent) == false && GetStrLen(pobjgs_ReflectLogEN.reflectLogContent) > 5000)
{
 throw new Error("(errid:Watl000416)字段[内容(reflectLogContent)]的长度不能超过5000(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.reflectLogContent)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updUser) == false && GetStrLen(pobjgs_ReflectLogEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.updUser)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.createDate) == false && GetStrLen(pobjgs_ReflectLogEN.createDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.createDate)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updDate) == false && GetStrLen(pobjgs_ReflectLogEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.updDate)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.memo) == false && GetStrLen(pobjgs_ReflectLogEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 反思日志(gs_ReflectLog))!值:$(pobjgs_ReflectLogEN.memo)(clsgs_ReflectLogBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjgs_ReflectLogEN.mId && undefined !== pobjgs_ReflectLogEN.mId && tzDataType.isNumber(pobjgs_ReflectLogEN.mId) === false)
{
 throw new Error("(errid:Watl000417)字段[mId(mId)]的值:[$(pobjgs_ReflectLogEN.mId)], 非法,应该为数值型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.userId) == false && undefined !== pobjgs_ReflectLogEN.userId && tzDataType.isString(pobjgs_ReflectLogEN.userId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjgs_ReflectLogEN.userId)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.idCurrEduCls) == false && undefined !== pobjgs_ReflectLogEN.idCurrEduCls && tzDataType.isString(pobjgs_ReflectLogEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_ReflectLogEN.idCurrEduCls)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.topicId) == false && undefined !== pobjgs_ReflectLogEN.topicId && tzDataType.isString(pobjgs_ReflectLogEN.topicId) === false)
{
 throw new Error("(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_ReflectLogEN.topicId)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogName) == false && undefined !== pobjgs_ReflectLogEN.reflectLogName && tzDataType.isString(pobjgs_ReflectLogEN.reflectLogName) === false)
{
 throw new Error("(errid:Watl000417)字段[标题(reflectLogName)]的值:[$(pobjgs_ReflectLogEN.reflectLogName)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.reflectLogContent) == false && undefined !== pobjgs_ReflectLogEN.reflectLogContent && tzDataType.isString(pobjgs_ReflectLogEN.reflectLogContent) === false)
{
 throw new Error("(errid:Watl000417)字段[内容(reflectLogContent)]的值:[$(pobjgs_ReflectLogEN.reflectLogContent)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updUser) == false && undefined !== pobjgs_ReflectLogEN.updUser && tzDataType.isString(pobjgs_ReflectLogEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_ReflectLogEN.updUser)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.createDate) == false && undefined !== pobjgs_ReflectLogEN.createDate && tzDataType.isString(pobjgs_ReflectLogEN.createDate) === false)
{
 throw new Error("(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjgs_ReflectLogEN.createDate)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.updDate) == false && undefined !== pobjgs_ReflectLogEN.updDate && tzDataType.isString(pobjgs_ReflectLogEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_ReflectLogEN.updDate)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjgs_ReflectLogEN.memo) == false && undefined !== pobjgs_ReflectLogEN.memo && tzDataType.isString(pobjgs_ReflectLogEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_ReflectLogEN.memo)], 非法,应该为字符型(In 反思日志(gs_ReflectLog))!(clsgs_ReflectLogBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjgs_ReflectLogEN.mId 
 || pobjgs_ReflectLogEN.mId != null && pobjgs_ReflectLogEN.mId.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[mId]不能为空(In 反思日志)!(clsgs_ReflectLogBL:CheckProperty4Update)");
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
export  function gs_ReflectLog_GetJSONStrByObj (pobjgs_ReflectLogEN: clsgs_ReflectLogEN): string
{
pobjgs_ReflectLogEN.sfUpdFldSetStr = pobjgs_ReflectLogEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_ReflectLogEN);
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
export  function gs_ReflectLog_GetObjLstByJSONStr (strJSON: string): Array<clsgs_ReflectLogEN>
{
let arrgs_ReflectLogObjLst = new Array<clsgs_ReflectLogEN>();
if (strJSON === "")
{
return arrgs_ReflectLogObjLst;
}
try
{
arrgs_ReflectLogObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_ReflectLogObjLst;
}
return arrgs_ReflectLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_ReflectLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_ReflectLog_GetObjLstByJSONObjLst (arrgs_ReflectLogObjLstS: Array<clsgs_ReflectLogEN>): Array<clsgs_ReflectLogEN>
{
const arrgs_ReflectLogObjLst = new Array<clsgs_ReflectLogEN>();
for (const objInFor of arrgs_ReflectLogObjLstS) {
const obj1 = gs_ReflectLog_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_ReflectLogObjLst.push(obj1);
}
return arrgs_ReflectLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_ReflectLog_GetObjByJSONStr (strJSON: string): clsgs_ReflectLogEN
{
let pobjgs_ReflectLogEN = new clsgs_ReflectLogEN();
if (strJSON === "")
{
return pobjgs_ReflectLogEN;
}
try
{
pobjgs_ReflectLogEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_ReflectLogEN;
}
return pobjgs_ReflectLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_ReflectLog_GetCombineCondition(objgs_ReflectLogCond: clsgs_ReflectLogEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_mId) == true)
{
const strComparisonOpmId:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_ReflectLogEN.con_mId, objgs_ReflectLogCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_UserId, objgs_ReflectLogCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_IdCurrEduCls, objgs_ReflectLogCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_TopicId, objgs_ReflectLogCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_ReflectLogName) == true)
{
const strComparisonOpReflectLogName:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_ReflectLogName];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_ReflectLogName, objgs_ReflectLogCond.reflectLogName, strComparisonOpReflectLogName);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_ReflectLogContent) == true)
{
const strComparisonOpReflectLogContent:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_ReflectLogContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_ReflectLogContent, objgs_ReflectLogCond.reflectLogContent, strComparisonOpReflectLogContent);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_UpdUser, objgs_ReflectLogCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_CreateDate, objgs_ReflectLogCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_UpdDate, objgs_ReflectLogCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_ReflectLogCond.dicFldComparisonOp, clsgs_ReflectLogEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_ReflectLogCond.dicFldComparisonOp[clsgs_ReflectLogEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_ReflectLogEN.con_Memo, objgs_ReflectLogCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_ReflectLog(反思日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_ReflectLog_GetUniCondStr(objgs_ReflectLogEN: clsgs_ReflectLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objgs_ReflectLogEN.mId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_ReflectLog(反思日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_ReflectLog_GetUniCondStr4Update(objgs_ReflectLogEN: clsgs_ReflectLogEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objgs_ReflectLogEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objgs_ReflectLogEN.mId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_ReflectLogENS:源对象
 * @param objgs_ReflectLogENT:目标对象
*/
export  function gs_ReflectLog_CopyObjTo(objgs_ReflectLogENS: clsgs_ReflectLogEN , objgs_ReflectLogENT: clsgs_ReflectLogEN ): void 
{
objgs_ReflectLogENT.mId = objgs_ReflectLogENS.mId; //mId
objgs_ReflectLogENT.userId = objgs_ReflectLogENS.userId; //用户ID
objgs_ReflectLogENT.idCurrEduCls = objgs_ReflectLogENS.idCurrEduCls; //教学班流水号
objgs_ReflectLogENT.topicId = objgs_ReflectLogENS.topicId; //主题Id
objgs_ReflectLogENT.reflectLogName = objgs_ReflectLogENS.reflectLogName; //标题
objgs_ReflectLogENT.reflectLogContent = objgs_ReflectLogENS.reflectLogContent; //内容
objgs_ReflectLogENT.updUser = objgs_ReflectLogENS.updUser; //修改人
objgs_ReflectLogENT.createDate = objgs_ReflectLogENS.createDate; //建立日期
objgs_ReflectLogENT.updDate = objgs_ReflectLogENS.updDate; //修改日期
objgs_ReflectLogENT.memo = objgs_ReflectLogENS.memo; //备注
objgs_ReflectLogENT.sfUpdFldSetStr = objgs_ReflectLogENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_ReflectLogENS:源对象
 * @param objgs_ReflectLogENT:目标对象
*/
export  function gs_ReflectLog_GetObjFromJsonObj(objgs_ReflectLogENS: clsgs_ReflectLogEN): clsgs_ReflectLogEN 
{
 const objgs_ReflectLogENT: clsgs_ReflectLogEN = new clsgs_ReflectLogEN();
ObjectAssign(objgs_ReflectLogENT, objgs_ReflectLogENS);
 return objgs_ReflectLogENT;
}