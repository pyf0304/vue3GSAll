
 /**
 * 类名:clsvPaperSubViewpointAppraiseWApi
 * 表名:vPaperSubViewpointAppraise(01120562)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:23
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
 * v子观点评论表(vPaperSubViewpointAppraise)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月29日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvPaperSubViewpointAppraiseEN } from "@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointAppraiseEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vPaperSubViewpointAppraise_Controller = "vPaperSubViewpointAppraiseApi";
 export const vPaperSubViewpointAppraise_ConstructorName = "vPaperSubViewpointAppraise";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperSubViewpointAppraiseId:关键字
 * @returns 对象
 **/
export  async function vPaperSubViewpointAppraise_GetObjByPaperSubViewpointAppraiseIdAsync(lngPaperSubViewpointAppraiseId: number): Promise<clsvPaperSubViewpointAppraiseEN|null>  
{
const strThisFuncName = "GetObjByPaperSubViewpointAppraiseIdAsync";

if (lngPaperSubViewpointAppraiseId == 0)
{
  const strMsg = Format("参数:[lngPaperSubViewpointAppraiseId]不能为空!(In clsvPaperSubViewpointAppraiseWApi.GetObjByPaperSubViewpointAppraiseIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByPaperSubViewpointAppraiseId";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperSubViewpointAppraiseId,
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
const objvPaperSubViewpointAppraise = vPaperSubViewpointAppraise_GetObjFromJsonObj(returnObj);
return objvPaperSubViewpointAppraise;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
 * @param lngPaperSubViewpointAppraiseId:所给的关键字
 * @returns 对象
*/
export  async function vPaperSubViewpointAppraise_GetObjByPaperSubViewpointAppraiseIdCache(lngPaperSubViewpointAppraiseId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByPaperSubViewpointAppraiseIdCache";

if (lngPaperSubViewpointAppraiseId == 0)
{
  const strMsg = Format("参数:[lngPaperSubViewpointAppraiseId]不能为空!(In clsvPaperSubViewpointAppraiseWApi.GetObjByPaperSubViewpointAppraiseIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
try
{
const arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache.filter(x => 
 x.paperSubViewpointAppraiseId == lngPaperSubViewpointAppraiseId );
let objvPaperSubViewpointAppraise: clsvPaperSubViewpointAppraiseEN;
if (arrvPaperSubViewpointAppraiseSel.length > 0)
{
objvPaperSubViewpointAppraise = arrvPaperSubViewpointAppraiseSel[0];
return objvPaperSubViewpointAppraise;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvPaperSubViewpointAppraiseConst = await vPaperSubViewpointAppraise_GetObjByPaperSubViewpointAppraiseIdAsync(lngPaperSubViewpointAppraiseId);
if (objvPaperSubViewpointAppraiseConst != null)
{
vPaperSubViewpointAppraise_ReFreshThisCache();
return objvPaperSubViewpointAppraiseConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngPaperSubViewpointAppraiseId, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngPaperSubViewpointAppraiseId:所给的关键字
 * @returns 对象
*/
export  async function vPaperSubViewpointAppraise_GetObjByPaperSubViewpointAppraiseIdlocalStorage(lngPaperSubViewpointAppraiseId: number) {
const strThisFuncName = "GetObjByPaperSubViewpointAppraiseIdlocalStorage";

if (lngPaperSubViewpointAppraiseId == 0)
{
  const strMsg = Format("参数:[lngPaperSubViewpointAppraiseId]不能为空!(In clsvPaperSubViewpointAppraiseWApi.GetObjByPaperSubViewpointAppraiseIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvPaperSubViewpointAppraiseEN._CurrTabName, lngPaperSubViewpointAppraiseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvPaperSubViewpointAppraiseCache: clsvPaperSubViewpointAppraiseEN = JSON.parse(strTempObj);
return objvPaperSubViewpointAppraiseCache;
}
try
{
const objvPaperSubViewpointAppraise = await vPaperSubViewpointAppraise_GetObjByPaperSubViewpointAppraiseIdAsync(lngPaperSubViewpointAppraiseId);
if (objvPaperSubViewpointAppraise != null)
{
localStorage.setItem(strKey, JSON.stringify(objvPaperSubViewpointAppraise));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvPaperSubViewpointAppraise;
}
return objvPaperSubViewpointAppraise;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngPaperSubViewpointAppraiseId, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function vPaperSubViewpointAppraise_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvPaperSubViewpointAppraiseEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvPaperSubViewpointAppraiseEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngPaperSubViewpointAppraiseId = Number(strInValue);
if (lngPaperSubViewpointAppraiseId == 0)
{
return "";
}
const objvPaperSubViewpointAppraise = await vPaperSubViewpointAppraise_GetObjByPaperSubViewpointAppraiseIdCache(lngPaperSubViewpointAppraiseId );
if (objvPaperSubViewpointAppraise == null) return "";
if (objvPaperSubViewpointAppraise.GetFldValue(strOutFldName) == null) return "";
return objvPaperSubViewpointAppraise.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vPaperSubViewpointAppraise_SortFunDefa(a:clsvPaperSubViewpointAppraiseEN , b:clsvPaperSubViewpointAppraiseEN): number 
{
return a.paperSubViewpointAppraiseId-b.paperSubViewpointAppraiseId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vPaperSubViewpointAppraise_SortFunDefa2Fld(a:clsvPaperSubViewpointAppraiseEN , b:clsvPaperSubViewpointAppraiseEN): number 
{
if (a.subViewpointId == b.subViewpointId) return a.appraiseScore - b.appraiseScore;
else return a.subViewpointId - b.subViewpointId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vPaperSubViewpointAppraise_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
return a.paperSubViewpointAppraiseId-b.paperSubViewpointAppraiseId;
}
case clsvPaperSubViewpointAppraiseEN.con_SubViewpointId:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
return a.subViewpointId-b.subViewpointId;
}
case clsvPaperSubViewpointAppraiseEN.con_AppraiseScore:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
return a.appraiseScore-b.appraiseScore;
}
case clsvPaperSubViewpointAppraiseEN.con_AppraiseContent:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.appraiseContent == null) return -1;
if (b.appraiseContent == null) return 1;
return a.appraiseContent.localeCompare(b.appraiseContent);
}
case clsvPaperSubViewpointAppraiseEN.con_UpdDate:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvPaperSubViewpointAppraiseEN.con_Meno:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.meno == null) return -1;
if (b.meno == null) return 1;
return a.meno.localeCompare(b.meno);
}
case clsvPaperSubViewpointAppraiseEN.con_RWTitle:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.rWTitle == null) return -1;
if (b.rWTitle == null) return 1;
return a.rWTitle.localeCompare(b.rWTitle);
}
case clsvPaperSubViewpointAppraiseEN.con_SubViewpointContent:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.subViewpointContent == null) return -1;
if (b.subViewpointContent == null) return 1;
return a.subViewpointContent.localeCompare(b.subViewpointContent);
}
case clsvPaperSubViewpointAppraiseEN.con_ExplainContent:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.explainContent == null) return -1;
if (b.explainContent == null) return 1;
return a.explainContent.localeCompare(b.explainContent);
}
case clsvPaperSubViewpointAppraiseEN.con_PaperRWId:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.paperRWId == null) return -1;
if (b.paperRWId == null) return 1;
return a.paperRWId.localeCompare(b.paperRWId);
}
case clsvPaperSubViewpointAppraiseEN.con_UpdUser:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperSubViewpointAppraise]中不存在!(in ${ vPaperSubViewpointAppraise_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
return b.paperSubViewpointAppraiseId-a.paperSubViewpointAppraiseId;
}
case clsvPaperSubViewpointAppraiseEN.con_SubViewpointId:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
return b.subViewpointId-a.subViewpointId;
}
case clsvPaperSubViewpointAppraiseEN.con_AppraiseScore:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
return b.appraiseScore-a.appraiseScore;
}
case clsvPaperSubViewpointAppraiseEN.con_AppraiseContent:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.appraiseContent == null) return -1;
if (a.appraiseContent == null) return 1;
return b.appraiseContent.localeCompare(a.appraiseContent);
}
case clsvPaperSubViewpointAppraiseEN.con_UpdDate:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvPaperSubViewpointAppraiseEN.con_Meno:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.meno == null) return -1;
if (a.meno == null) return 1;
return b.meno.localeCompare(a.meno);
}
case clsvPaperSubViewpointAppraiseEN.con_RWTitle:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.rWTitle == null) return -1;
if (a.rWTitle == null) return 1;
return b.rWTitle.localeCompare(a.rWTitle);
}
case clsvPaperSubViewpointAppraiseEN.con_SubViewpointContent:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.subViewpointContent == null) return -1;
if (a.subViewpointContent == null) return 1;
return b.subViewpointContent.localeCompare(a.subViewpointContent);
}
case clsvPaperSubViewpointAppraiseEN.con_ExplainContent:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.explainContent == null) return -1;
if (a.explainContent == null) return 1;
return b.explainContent.localeCompare(a.explainContent);
}
case clsvPaperSubViewpointAppraiseEN.con_PaperRWId:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.paperRWId == null) return -1;
if (a.paperRWId == null) return 1;
return b.paperRWId.localeCompare(a.paperRWId);
}
case clsvPaperSubViewpointAppraiseEN.con_UpdUser:
return (a: clsvPaperSubViewpointAppraiseEN, b: clsvPaperSubViewpointAppraiseEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperSubViewpointAppraise]中不存在!(in ${ vPaperSubViewpointAppraise_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vPaperSubViewpointAppraise_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.paperSubViewpointAppraiseId === value;
}
case clsvPaperSubViewpointAppraiseEN.con_SubViewpointId:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.subViewpointId === value;
}
case clsvPaperSubViewpointAppraiseEN.con_AppraiseScore:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.appraiseScore === value;
}
case clsvPaperSubViewpointAppraiseEN.con_AppraiseContent:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.appraiseContent === value;
}
case clsvPaperSubViewpointAppraiseEN.con_UpdDate:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.updDate === value;
}
case clsvPaperSubViewpointAppraiseEN.con_Meno:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.meno === value;
}
case clsvPaperSubViewpointAppraiseEN.con_RWTitle:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.rWTitle === value;
}
case clsvPaperSubViewpointAppraiseEN.con_SubViewpointContent:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.subViewpointContent === value;
}
case clsvPaperSubViewpointAppraiseEN.con_ExplainContent:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.explainContent === value;
}
case clsvPaperSubViewpointAppraiseEN.con_PaperRWId:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.paperRWId === value;
}
case clsvPaperSubViewpointAppraiseEN.con_UpdUser:
return (obj: clsvPaperSubViewpointAppraiseEN) => {
return obj.updUser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperSubViewpointAppraise]中不存在!(in ${ vPaperSubViewpointAppraise_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function vPaperSubViewpointAppraise_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvPaperSubViewpointAppraise = await vPaperSubViewpointAppraise_GetObjLstCache();
if (arrvPaperSubViewpointAppraise == null) return [];
let arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraise;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvPaperSubViewpointAppraiseSel.length == 0) return [];
return arrvPaperSubViewpointAppraiseSel.map(x=>x.paperSubViewpointAppraiseId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vPaperSubViewpointAppraise_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetFirstObjAsync(strWhereCond: string): Promise<clsvPaperSubViewpointAppraiseEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const objvPaperSubViewpointAppraise = vPaperSubViewpointAppraise_GetObjFromJsonObj(returnObj);
return objvPaperSubViewpointAppraise;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvPaperSubViewpointAppraiseEN._CurrTabName;
if (IsNullOrEmpty(clsvPaperSubViewpointAppraiseEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvPaperSubViewpointAppraiseEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvPaperSubViewpointAppraiseExObjLstCache: Array<clsvPaperSubViewpointAppraiseEN> = CacheHelper.Get(strKey);
const arrvPaperSubViewpointAppraiseObjLstT = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(arrvPaperSubViewpointAppraiseExObjLstCache);
return arrvPaperSubViewpointAppraiseObjLstT;
}
try
{
const arrvPaperSubViewpointAppraiseExObjLst = await vPaperSubViewpointAppraise_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvPaperSubViewpointAppraiseExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvPaperSubViewpointAppraiseExObjLst.length);
console.log(strInfo);
return arrvPaperSubViewpointAppraiseExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvPaperSubViewpointAppraiseEN._CurrTabName;
if (IsNullOrEmpty(clsvPaperSubViewpointAppraiseEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvPaperSubViewpointAppraiseEN.CacheAddiCondition);
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
const arrvPaperSubViewpointAppraiseExObjLstCache: Array<clsvPaperSubViewpointAppraiseEN> = JSON.parse(strTempObjLst);
const arrvPaperSubViewpointAppraiseObjLstT = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(arrvPaperSubViewpointAppraiseExObjLstCache);
return arrvPaperSubViewpointAppraiseObjLstT;
}
try
{
const arrvPaperSubViewpointAppraiseExObjLst = await vPaperSubViewpointAppraise_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvPaperSubViewpointAppraiseExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvPaperSubViewpointAppraiseExObjLst.length);
console.log(strInfo);
return arrvPaperSubViewpointAppraiseExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvPaperSubViewpointAppraiseEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvPaperSubViewpointAppraiseObjLstCache: Array<clsvPaperSubViewpointAppraiseEN> = JSON.parse(strTempObjLst);
return arrvPaperSubViewpointAppraiseObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvPaperSubViewpointAppraiseEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvPaperSubViewpointAppraiseEN._CurrTabName;
if (IsNullOrEmpty(clsvPaperSubViewpointAppraiseEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvPaperSubViewpointAppraiseEN.CacheAddiCondition);
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
const arrvPaperSubViewpointAppraiseExObjLstCache: Array<clsvPaperSubViewpointAppraiseEN> = JSON.parse(strTempObjLst);
const arrvPaperSubViewpointAppraiseObjLstT = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(arrvPaperSubViewpointAppraiseExObjLstCache);
return arrvPaperSubViewpointAppraiseObjLstT;
}
try
{
const arrvPaperSubViewpointAppraiseExObjLst = await vPaperSubViewpointAppraise_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvPaperSubViewpointAppraiseExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvPaperSubViewpointAppraiseExObjLst.length);
console.log(strInfo);
return arrvPaperSubViewpointAppraiseExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvPaperSubViewpointAppraiseEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvPaperSubViewpointAppraiseObjLstCache: Array<clsvPaperSubViewpointAppraiseEN> = JSON.parse(strTempObjLst);
return arrvPaperSubViewpointAppraiseObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstCache(): Promise<Array<clsvPaperSubViewpointAppraiseEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrvPaperSubViewpointAppraiseObjLstCache;
switch (clsvPaperSubViewpointAppraiseEN.CacheModeId)
{
case "04"://sessionStorage
arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstClientCache();
break;
default:
arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstClientCache();
break;
}
return arrvPaperSubViewpointAppraiseObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvPaperSubViewpointAppraiseObjLstCache;
switch (clsvPaperSubViewpointAppraiseEN.CacheModeId)
{
case "04"://sessionStorage
arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrvPaperSubViewpointAppraiseObjLstCache = null;
break;
default:
arrvPaperSubViewpointAppraiseObjLstCache = null;
break;
}
return arrvPaperSubViewpointAppraiseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngPaperSubViewpointAppraiseIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vPaperSubViewpointAppraise_GetSubObjLstCache(objvPaperSubViewpointAppraiseCond: clsvPaperSubViewpointAppraiseEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
let arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache;
if (objvPaperSubViewpointAppraiseCond.sfFldComparisonOp == null || objvPaperSubViewpointAppraiseCond.sfFldComparisonOp == "") return arrvPaperSubViewpointAppraiseSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvPaperSubViewpointAppraiseCond.sfFldComparisonOp);
//console.log("clsvPaperSubViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvPaperSubViewpointAppraiseCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointAppraiseCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvPaperSubViewpointAppraiseSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvPaperSubViewpointAppraiseCond), vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvPaperSubViewpointAppraiseEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperSubViewpointAppraiseId:关键字列表
 * @returns 对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstByPaperSubViewpointAppraiseIdLstAsync(arrPaperSubViewpointAppraiseId: Array<string>): Promise<Array<clsvPaperSubViewpointAppraiseEN>>  
{
const strThisFuncName = "GetObjLstByPaperSubViewpointAppraiseIdLstAsync";
const strAction = "GetObjLstByPaperSubViewpointAppraiseIdLst";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperSubViewpointAppraiseId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
 * @param arrlngPaperSubViewpointAppraiseIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vPaperSubViewpointAppraise_GetObjLstByPaperSubViewpointAppraiseIdLstCache(arrPaperSubViewpointAppraiseIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstByPaperSubViewpointAppraiseIdLstCache";
try
{
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
const arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache.filter(x => arrPaperSubViewpointAppraiseIdLst.indexOf(x.paperSubViewpointAppraiseId)>-1);
return arrvPaperSubViewpointAppraiseSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrPaperSubViewpointAppraiseIdLst.join(","), vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvPaperSubViewpointAppraiseEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvPaperSubViewpointAppraiseEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvPaperSubViewpointAppraiseEN>();
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
if (arrvPaperSubViewpointAppraiseObjLstCache.length == 0) return arrvPaperSubViewpointAppraiseObjLstCache;
let arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvPaperSubViewpointAppraiseCond = new clsvPaperSubViewpointAppraiseEN();
ObjectAssign(objvPaperSubViewpointAppraiseCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvPaperSubViewpointAppraiseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointAppraiseCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvPaperSubViewpointAppraiseSel.length == 0) return arrvPaperSubViewpointAppraiseSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.sort(vPaperSubViewpointAppraise_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.sort(objPagerPara.sortFun);
}
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.slice(intStart, intEnd);     
return arrvPaperSubViewpointAppraiseSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvPaperSubViewpointAppraiseEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vPaperSubViewpointAppraise_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvPaperSubViewpointAppraiseEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvPaperSubViewpointAppraiseEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperSubViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
 * @param objlngPaperSubViewpointAppraiseIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vPaperSubViewpointAppraise_IsExistRecordCache(objvPaperSubViewpointAppraiseCond: clsvPaperSubViewpointAppraiseEN) {
const strThisFuncName = "IsExistRecordCache";
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
if (arrvPaperSubViewpointAppraiseObjLstCache == null) return false;
let arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache;
if (objvPaperSubViewpointAppraiseCond.sfFldComparisonOp == null || objvPaperSubViewpointAppraiseCond.sfFldComparisonOp == "") return arrvPaperSubViewpointAppraiseSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvPaperSubViewpointAppraiseCond.sfFldComparisonOp);
//console.log("clsvPaperSubViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvPaperSubViewpointAppraiseCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointAppraiseCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvPaperSubViewpointAppraiseSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvPaperSubViewpointAppraiseCond), vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
 * @param lngPaperSubViewpointAppraiseId:所给的关键字
 * @returns 对象
*/
export  async function vPaperSubViewpointAppraise_IsExistCache(lngPaperSubViewpointAppraiseId:number) {
const strThisFuncName = "IsExistCache";
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
if (arrvPaperSubViewpointAppraiseObjLstCache == null) return false;
try
{
const arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache.filter(x => x.paperSubViewpointAppraiseId == lngPaperSubViewpointAppraiseId);
if (arrvPaperSubViewpointAppraiseSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngPaperSubViewpointAppraiseId, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngPaperSubViewpointAppraiseId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vPaperSubViewpointAppraise_IsExistAsync(lngPaperSubViewpointAppraiseId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperSubViewpointAppraiseId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
export  async function vPaperSubViewpointAppraise_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vPaperSubViewpointAppraise_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
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
 * @param objvPaperSubViewpointAppraiseCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vPaperSubViewpointAppraise_GetRecCountByCondCache(objvPaperSubViewpointAppraiseCond: clsvPaperSubViewpointAppraiseEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvPaperSubViewpointAppraiseObjLstCache = await vPaperSubViewpointAppraise_GetObjLstCache();
if (arrvPaperSubViewpointAppraiseObjLstCache == null) return 0;
let arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseObjLstCache;
if (objvPaperSubViewpointAppraiseCond.sfFldComparisonOp == null || objvPaperSubViewpointAppraiseCond.sfFldComparisonOp == "") return arrvPaperSubViewpointAppraiseSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvPaperSubViewpointAppraiseCond.sfFldComparisonOp);
//console.log("clsvPaperSubViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvPaperSubViewpointAppraiseCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvPaperSubViewpointAppraiseCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvPaperSubViewpointAppraiseSel = arrvPaperSubViewpointAppraiseSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvPaperSubViewpointAppraiseSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvPaperSubViewpointAppraiseCond), vPaperSubViewpointAppraise_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vPaperSubViewpointAppraise_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vPaperSubViewpointAppraise_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsvPaperSubViewpointAppraiseEN._CurrTabName;
switch (clsvPaperSubViewpointAppraiseEN.CacheModeId)
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperSubViewpointAppraise_GetJSONStrByObj (pobjvPaperSubViewpointAppraiseEN: clsvPaperSubViewpointAppraiseEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvPaperSubViewpointAppraiseEN);
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
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vPaperSubViewpointAppraise_GetObjLstByJSONStr (strJSON: string): Array<clsvPaperSubViewpointAppraiseEN>
{
let arrvPaperSubViewpointAppraiseObjLst = new Array<clsvPaperSubViewpointAppraiseEN>();
if (strJSON === "")
{
return arrvPaperSubViewpointAppraiseObjLst;
}
try
{
arrvPaperSubViewpointAppraiseObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvPaperSubViewpointAppraiseObjLst;
}
return arrvPaperSubViewpointAppraiseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPaperSubViewpointAppraiseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vPaperSubViewpointAppraise_GetObjLstByJSONObjLst (arrvPaperSubViewpointAppraiseObjLstS: Array<clsvPaperSubViewpointAppraiseEN>): Array<clsvPaperSubViewpointAppraiseEN>
{
const arrvPaperSubViewpointAppraiseObjLst = new Array<clsvPaperSubViewpointAppraiseEN>();
for (const objInFor of arrvPaperSubViewpointAppraiseObjLstS) {
const obj1 = vPaperSubViewpointAppraise_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvPaperSubViewpointAppraiseObjLst.push(obj1);
}
return arrvPaperSubViewpointAppraiseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperSubViewpointAppraise_GetObjByJSONStr (strJSON: string): clsvPaperSubViewpointAppraiseEN
{
let pobjvPaperSubViewpointAppraiseEN = new clsvPaperSubViewpointAppraiseEN();
if (strJSON === "")
{
return pobjvPaperSubViewpointAppraiseEN;
}
try
{
pobjvPaperSubViewpointAppraiseEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvPaperSubViewpointAppraiseEN;
}
return pobjvPaperSubViewpointAppraiseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vPaperSubViewpointAppraise_GetCombineCondition(objvPaperSubViewpointAppraiseCond: clsvPaperSubViewpointAppraiseEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId) == true)
{
const strComparisonOpPaperSubViewpointAppraiseId:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointAppraiseEN.con_PaperSubViewpointAppraiseId, objvPaperSubViewpointAppraiseCond.paperSubViewpointAppraiseId, strComparisonOpPaperSubViewpointAppraiseId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_SubViewpointId) == true)
{
const strComparisonOpSubViewpointId:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_SubViewpointId];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointAppraiseEN.con_SubViewpointId, objvPaperSubViewpointAppraiseCond.subViewpointId, strComparisonOpSubViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_AppraiseScore) == true)
{
const strComparisonOpAppraiseScore:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_AppraiseScore];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperSubViewpointAppraiseEN.con_AppraiseScore, objvPaperSubViewpointAppraiseCond.appraiseScore, strComparisonOpAppraiseScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_AppraiseContent) == true)
{
const strComparisonOpAppraiseContent:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_AppraiseContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_AppraiseContent, objvPaperSubViewpointAppraiseCond.appraiseContent, strComparisonOpAppraiseContent);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_UpdDate, objvPaperSubViewpointAppraiseCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_Meno) == true)
{
const strComparisonOpMeno:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_Meno];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_Meno, objvPaperSubViewpointAppraiseCond.meno, strComparisonOpMeno);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_RWTitle) == true)
{
const strComparisonOpRWTitle:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_RWTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_RWTitle, objvPaperSubViewpointAppraiseCond.rWTitle, strComparisonOpRWTitle);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_SubViewpointContent) == true)
{
const strComparisonOpSubViewpointContent:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_SubViewpointContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_SubViewpointContent, objvPaperSubViewpointAppraiseCond.subViewpointContent, strComparisonOpSubViewpointContent);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_ExplainContent) == true)
{
const strComparisonOpExplainContent:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_ExplainContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_ExplainContent, objvPaperSubViewpointAppraiseCond.explainContent, strComparisonOpExplainContent);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_PaperRWId) == true)
{
const strComparisonOpPaperRWId:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_PaperRWId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_PaperRWId, objvPaperSubViewpointAppraiseCond.paperRWId, strComparisonOpPaperRWId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperSubViewpointAppraiseCond.dicFldComparisonOp, clsvPaperSubViewpointAppraiseEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvPaperSubViewpointAppraiseCond.dicFldComparisonOp[clsvPaperSubViewpointAppraiseEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperSubViewpointAppraiseEN.con_UpdUser, objvPaperSubViewpointAppraiseCond.updUser, strComparisonOpUpdUser);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvPaperSubViewpointAppraiseENS:源对象
 * @param objvPaperSubViewpointAppraiseENT:目标对象
*/
export  function vPaperSubViewpointAppraise_CopyObjTo(objvPaperSubViewpointAppraiseENS: clsvPaperSubViewpointAppraiseEN , objvPaperSubViewpointAppraiseENT: clsvPaperSubViewpointAppraiseEN ): void 
{
objvPaperSubViewpointAppraiseENT.paperSubViewpointAppraiseId = objvPaperSubViewpointAppraiseENS.paperSubViewpointAppraiseId; //子观点评价Id
objvPaperSubViewpointAppraiseENT.subViewpointId = objvPaperSubViewpointAppraiseENS.subViewpointId; //子观点Id
objvPaperSubViewpointAppraiseENT.appraiseScore = objvPaperSubViewpointAppraiseENS.appraiseScore; //打分
objvPaperSubViewpointAppraiseENT.appraiseContent = objvPaperSubViewpointAppraiseENS.appraiseContent; //评议内容
objvPaperSubViewpointAppraiseENT.updDate = objvPaperSubViewpointAppraiseENS.updDate; //修改日期
objvPaperSubViewpointAppraiseENT.meno = objvPaperSubViewpointAppraiseENS.meno; //备注
objvPaperSubViewpointAppraiseENT.rWTitle = objvPaperSubViewpointAppraiseENS.rWTitle; //读写标题
objvPaperSubViewpointAppraiseENT.subViewpointContent = objvPaperSubViewpointAppraiseENS.subViewpointContent; //详情内容
objvPaperSubViewpointAppraiseENT.explainContent = objvPaperSubViewpointAppraiseENS.explainContent; //说明内容
objvPaperSubViewpointAppraiseENT.paperRWId = objvPaperSubViewpointAppraiseENS.paperRWId; //课文阅读
objvPaperSubViewpointAppraiseENT.updUser = objvPaperSubViewpointAppraiseENS.updUser; //修改人
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPaperSubViewpointAppraiseENS:源对象
 * @param objvPaperSubViewpointAppraiseENT:目标对象
*/
export  function vPaperSubViewpointAppraise_GetObjFromJsonObj(objvPaperSubViewpointAppraiseENS: clsvPaperSubViewpointAppraiseEN): clsvPaperSubViewpointAppraiseEN 
{
 const objvPaperSubViewpointAppraiseENT: clsvPaperSubViewpointAppraiseEN = new clsvPaperSubViewpointAppraiseEN();
ObjectAssign(objvPaperSubViewpointAppraiseENT, objvPaperSubViewpointAppraiseENS);
 return objvPaperSubViewpointAppraiseENT;
}