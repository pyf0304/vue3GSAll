
 /**
 * 类名:clsCurrEduClsStuWApi
 * 表名:CurrEduClsStu(01120125)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班与学生关系(CurrEduClsStu)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsCurrEduClsStuEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN";
import { vCurrEduClsStu_ReFreshThisCache } from "@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const currEduClsStu_Controller = "CurrEduClsStuApi";
 export const currEduClsStu_ConstructorName = "currEduClsStu";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdEduClsStu:关键字
 * @returns 对象
 **/
export  async function CurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu: number): Promise<clsCurrEduClsStuEN|null>  
{
const strThisFuncName = "GetObjByIdEduClsStuAsync";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsCurrEduClsStuWApi.GetObjByIdEduClsStuAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdEduClsStu";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsStu,
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
const objCurrEduClsStu = CurrEduClsStu_GetObjFromJsonObj(returnObj);
return objCurrEduClsStu;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function CurrEduClsStu_GetObjByIdEduClsStuCache(lngIdEduClsStu:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdEduClsStuCache";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsCurrEduClsStuWApi.GetObjByIdEduClsStuCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
try
{
const arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache.filter(x => 
 x.idEduClsStu == lngIdEduClsStu );
let objCurrEduClsStu: clsCurrEduClsStuEN;
if (arrCurrEduClsStuSel.length > 0)
{
objCurrEduClsStu = arrCurrEduClsStuSel[0];
return objCurrEduClsStu;
}
else
{
if (bolTryAsyncOnce == true)
{
const objCurrEduClsStuConst = await CurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
if (objCurrEduClsStuConst != null)
{
CurrEduClsStu_ReFreshThisCache(strIdCurrEduCls);
return objCurrEduClsStuConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsStu, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function CurrEduClsStu_GetObjByIdEduClsStulocalStorage(lngIdEduClsStu: number) {
const strThisFuncName = "GetObjByIdEduClsStulocalStorage";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsCurrEduClsStuWApi.GetObjByIdEduClsStulocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, lngIdEduClsStu);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objCurrEduClsStuCache: clsCurrEduClsStuEN = JSON.parse(strTempObj);
return objCurrEduClsStuCache;
}
try
{
const objCurrEduClsStu = await CurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
if (objCurrEduClsStu != null)
{
localStorage.setItem(strKey, JSON.stringify(objCurrEduClsStu));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objCurrEduClsStu;
}
return objCurrEduClsStu;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsStu, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCurrEduClsStu:所给的对象
 * @returns 对象
*/
export  async function CurrEduClsStu_UpdateObjInLstCache(objCurrEduClsStu: clsCurrEduClsStuEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
const obj = arrCurrEduClsStuObjLstCache.find(x => x.idCurrEduCls == objCurrEduClsStu.idCurrEduCls && x.idStu == objCurrEduClsStu.idStu);
if (obj != null)
{
objCurrEduClsStu.idEduClsStu = obj.idEduClsStu;
ObjectAssign( obj, objCurrEduClsStu);
}
else
{
arrCurrEduClsStuObjLstCache.push(objCurrEduClsStu);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, currEduClsStu_ConstructorName, strThisFuncName);
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function CurrEduClsStu_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsCurrEduClsStuWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsCurrEduClsStuWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsCurrEduClsStuEN.con_IdEduClsStu)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsCurrEduClsStuEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsCurrEduClsStuEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngIdEduClsStu = Number(strInValue);
if (lngIdEduClsStu == 0)
{
return "";
}
const objCurrEduClsStu = await CurrEduClsStu_GetObjByIdEduClsStuCache(lngIdEduClsStu , strIdCurrEduClsClassfy);
if (objCurrEduClsStu == null) return "";
if (objCurrEduClsStu.GetFldValue(strOutFldName) == null) return "";
return objCurrEduClsStu.GetFldValue(strOutFldName).toString();
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
export  function CurrEduClsStu_SortFunDefa(a:clsCurrEduClsStuEN , b:clsCurrEduClsStuEN): number 
{
return a.idEduClsStu-b.idEduClsStu;
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
export  function CurrEduClsStu_SortFunDefa2Fld(a:clsCurrEduClsStuEN , b:clsCurrEduClsStuEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.idStu.localeCompare(b.idStu);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function CurrEduClsStu_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCurrEduClsStuEN.con_IdEduClsStu:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.idEduClsStu-b.idEduClsStu;
}
case clsCurrEduClsStuEN.con_IdCurrEduCls:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsCurrEduClsStuEN.con_IdStu:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.idStu == null) return -1;
if (b.idStu == null) return 1;
return a.idStu.localeCompare(b.idStu);
}
case clsCurrEduClsStuEN.con_EduClsStuStateId:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.eduClsStuStateId == null) return -1;
if (b.eduClsStuStateId == null) return 1;
return a.eduClsStuStateId.localeCompare(b.eduClsStuStateId);
}
case clsCurrEduClsStuEN.con_GetScoreTimes:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.getScoreTimes-b.getScoreTimes;
}
case clsCurrEduClsStuEN.con_Score:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.score-b.score;
}
case clsCurrEduClsStuEN.con_TotalScores:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.totalScores-b.totalScores;
}
case clsCurrEduClsStuEN.con_Ranking:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.ranking-b.ranking;
}
case clsCurrEduClsStuEN.con_Percentile:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.percentile-b.percentile;
}
case clsCurrEduClsStuEN.con_Ranking2:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.ranking2-b.ranking2;
}
case clsCurrEduClsStuEN.con_Percentile2:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.percentile2-b.percentile2;
}
case clsCurrEduClsStuEN.con_Ranking3:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.ranking3-b.ranking3;
}
case clsCurrEduClsStuEN.con_Percentile3:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return a.percentile3-b.percentile3;
}
case clsCurrEduClsStuEN.con_Confirmed:
return (a: clsCurrEduClsStuEN) => {
if (a.confirmed == true) return 1;
else return -1
}
case clsCurrEduClsStuEN.con_SchoolTerm:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsCurrEduClsStuEN.con_SchoolYear:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsCurrEduClsStuEN.con_ExportDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.exportDate == null) return -1;
if (b.exportDate == null) return 1;
return a.exportDate.localeCompare(b.exportDate);
}
case clsCurrEduClsStuEN.con_SignInDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.signInDate == null) return -1;
if (b.signInDate == null) return 1;
return a.signInDate.localeCompare(b.signInDate);
}
case clsCurrEduClsStuEN.con_SignInStateID:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.signInStateID == null) return -1;
if (b.signInStateID == null) return 1;
return a.signInStateID.localeCompare(b.signInStateID);
}
case clsCurrEduClsStuEN.con_SignInUser:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.signInUser == null) return -1;
if (b.signInUser == null) return 1;
return a.signInUser.localeCompare(b.signInUser);
}
case clsCurrEduClsStuEN.con_IsOpByTeacher:
return (a: clsCurrEduClsStuEN) => {
if (a.isOpByTeacher == true) return 1;
else return -1
}
case clsCurrEduClsStuEN.con_IsSynScore:
return (a: clsCurrEduClsStuEN) => {
if (a.isSynScore == true) return 1;
else return -1
}
case clsCurrEduClsStuEN.con_LastVisitedDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.lastVisitedDate == null) return -1;
if (b.lastVisitedDate == null) return 1;
return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
}
case clsCurrEduClsStuEN.con_ModifyDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsCurrEduClsStuEN.con_ModifyUserId:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsCurrEduClsStuEN.con_Memo:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CurrEduClsStu]中不存在!(in ${ currEduClsStu_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsCurrEduClsStuEN.con_IdEduClsStu:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.idEduClsStu-a.idEduClsStu;
}
case clsCurrEduClsStuEN.con_IdCurrEduCls:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsCurrEduClsStuEN.con_IdStu:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.idStu == null) return -1;
if (a.idStu == null) return 1;
return b.idStu.localeCompare(a.idStu);
}
case clsCurrEduClsStuEN.con_EduClsStuStateId:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.eduClsStuStateId == null) return -1;
if (a.eduClsStuStateId == null) return 1;
return b.eduClsStuStateId.localeCompare(a.eduClsStuStateId);
}
case clsCurrEduClsStuEN.con_GetScoreTimes:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.getScoreTimes-a.getScoreTimes;
}
case clsCurrEduClsStuEN.con_Score:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.score-a.score;
}
case clsCurrEduClsStuEN.con_TotalScores:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.totalScores-a.totalScores;
}
case clsCurrEduClsStuEN.con_Ranking:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.ranking-a.ranking;
}
case clsCurrEduClsStuEN.con_Percentile:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.percentile-a.percentile;
}
case clsCurrEduClsStuEN.con_Ranking2:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.ranking2-a.ranking2;
}
case clsCurrEduClsStuEN.con_Percentile2:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.percentile2-a.percentile2;
}
case clsCurrEduClsStuEN.con_Ranking3:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.ranking3-a.ranking3;
}
case clsCurrEduClsStuEN.con_Percentile3:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
return b.percentile3-a.percentile3;
}
case clsCurrEduClsStuEN.con_Confirmed:
return (b: clsCurrEduClsStuEN) => {
if (b.confirmed == true) return 1;
else return -1
}
case clsCurrEduClsStuEN.con_SchoolTerm:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsCurrEduClsStuEN.con_SchoolYear:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsCurrEduClsStuEN.con_ExportDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.exportDate == null) return -1;
if (a.exportDate == null) return 1;
return b.exportDate.localeCompare(a.exportDate);
}
case clsCurrEduClsStuEN.con_SignInDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.signInDate == null) return -1;
if (a.signInDate == null) return 1;
return b.signInDate.localeCompare(a.signInDate);
}
case clsCurrEduClsStuEN.con_SignInStateID:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.signInStateID == null) return -1;
if (a.signInStateID == null) return 1;
return b.signInStateID.localeCompare(a.signInStateID);
}
case clsCurrEduClsStuEN.con_SignInUser:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.signInUser == null) return -1;
if (a.signInUser == null) return 1;
return b.signInUser.localeCompare(a.signInUser);
}
case clsCurrEduClsStuEN.con_IsOpByTeacher:
return (b: clsCurrEduClsStuEN) => {
if (b.isOpByTeacher == true) return 1;
else return -1
}
case clsCurrEduClsStuEN.con_IsSynScore:
return (b: clsCurrEduClsStuEN) => {
if (b.isSynScore == true) return 1;
else return -1
}
case clsCurrEduClsStuEN.con_LastVisitedDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.lastVisitedDate == null) return -1;
if (a.lastVisitedDate == null) return 1;
return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
}
case clsCurrEduClsStuEN.con_ModifyDate:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsCurrEduClsStuEN.con_ModifyUserId:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsCurrEduClsStuEN.con_Memo:
return (a: clsCurrEduClsStuEN, b: clsCurrEduClsStuEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CurrEduClsStu]中不存在!(in ${ currEduClsStu_ConstructorName}.${ strThisFuncName})`;
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
export  async function CurrEduClsStu_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsCurrEduClsStuEN.con_IdEduClsStu:
return (obj: clsCurrEduClsStuEN) => {
return obj.idEduClsStu === value;
}
case clsCurrEduClsStuEN.con_IdCurrEduCls:
return (obj: clsCurrEduClsStuEN) => {
return obj.idCurrEduCls === value;
}
case clsCurrEduClsStuEN.con_IdStu:
return (obj: clsCurrEduClsStuEN) => {
return obj.idStu === value;
}
case clsCurrEduClsStuEN.con_EduClsStuStateId:
return (obj: clsCurrEduClsStuEN) => {
return obj.eduClsStuStateId === value;
}
case clsCurrEduClsStuEN.con_GetScoreTimes:
return (obj: clsCurrEduClsStuEN) => {
return obj.getScoreTimes === value;
}
case clsCurrEduClsStuEN.con_Score:
return (obj: clsCurrEduClsStuEN) => {
return obj.score === value;
}
case clsCurrEduClsStuEN.con_TotalScores:
return (obj: clsCurrEduClsStuEN) => {
return obj.totalScores === value;
}
case clsCurrEduClsStuEN.con_Ranking:
return (obj: clsCurrEduClsStuEN) => {
return obj.ranking === value;
}
case clsCurrEduClsStuEN.con_Percentile:
return (obj: clsCurrEduClsStuEN) => {
return obj.percentile === value;
}
case clsCurrEduClsStuEN.con_Ranking2:
return (obj: clsCurrEduClsStuEN) => {
return obj.ranking2 === value;
}
case clsCurrEduClsStuEN.con_Percentile2:
return (obj: clsCurrEduClsStuEN) => {
return obj.percentile2 === value;
}
case clsCurrEduClsStuEN.con_Ranking3:
return (obj: clsCurrEduClsStuEN) => {
return obj.ranking3 === value;
}
case clsCurrEduClsStuEN.con_Percentile3:
return (obj: clsCurrEduClsStuEN) => {
return obj.percentile3 === value;
}
case clsCurrEduClsStuEN.con_Confirmed:
return (obj: clsCurrEduClsStuEN) => {
return obj.confirmed === value;
}
case clsCurrEduClsStuEN.con_SchoolTerm:
return (obj: clsCurrEduClsStuEN) => {
return obj.schoolTerm === value;
}
case clsCurrEduClsStuEN.con_SchoolYear:
return (obj: clsCurrEduClsStuEN) => {
return obj.schoolYear === value;
}
case clsCurrEduClsStuEN.con_ExportDate:
return (obj: clsCurrEduClsStuEN) => {
return obj.exportDate === value;
}
case clsCurrEduClsStuEN.con_SignInDate:
return (obj: clsCurrEduClsStuEN) => {
return obj.signInDate === value;
}
case clsCurrEduClsStuEN.con_SignInStateID:
return (obj: clsCurrEduClsStuEN) => {
return obj.signInStateID === value;
}
case clsCurrEduClsStuEN.con_SignInUser:
return (obj: clsCurrEduClsStuEN) => {
return obj.signInUser === value;
}
case clsCurrEduClsStuEN.con_IsOpByTeacher:
return (obj: clsCurrEduClsStuEN) => {
return obj.isOpByTeacher === value;
}
case clsCurrEduClsStuEN.con_IsSynScore:
return (obj: clsCurrEduClsStuEN) => {
return obj.isSynScore === value;
}
case clsCurrEduClsStuEN.con_LastVisitedDate:
return (obj: clsCurrEduClsStuEN) => {
return obj.lastVisitedDate === value;
}
case clsCurrEduClsStuEN.con_ModifyDate:
return (obj: clsCurrEduClsStuEN) => {
return obj.modifyDate === value;
}
case clsCurrEduClsStuEN.con_ModifyUserId:
return (obj: clsCurrEduClsStuEN) => {
return obj.modifyUserId === value;
}
case clsCurrEduClsStuEN.con_Memo:
return (obj: clsCurrEduClsStuEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[CurrEduClsStu]中不存在!(in ${ currEduClsStu_ConstructorName}.${ strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function CurrEduClsStu_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsCurrEduClsStuWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsCurrEduClsStuWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsCurrEduClsStuEN.con_IdEduClsStu)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrCurrEduClsStu = await CurrEduClsStu_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrCurrEduClsStu == null) return [];
let arrCurrEduClsStuSel = arrCurrEduClsStu;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrCurrEduClsStuSel.length == 0) return [];
return arrCurrEduClsStuSel.map(x=>x.idEduClsStu);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CurrEduClsStu_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetFirstObjAsync(strWhereCond: string): Promise<clsCurrEduClsStuEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const objCurrEduClsStu = CurrEduClsStu_GetObjFromJsonObj(returnObj);
return objCurrEduClsStu;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsCurrEduClsStuEN.WhereFormat) == false)
{
strWhereCond = Format(clsCurrEduClsStuEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsCurrEduClsStuEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCurrEduClsStuEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrCurrEduClsStuExObjLstCache: Array<clsCurrEduClsStuEN> = CacheHelper.Get(strKey);
const arrCurrEduClsStuObjLstT = CurrEduClsStu_GetObjLstByJSONObjLst(arrCurrEduClsStuExObjLstCache);
return arrCurrEduClsStuObjLstT;
}
try
{
const arrCurrEduClsStuExObjLst = await CurrEduClsStu_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrCurrEduClsStuExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCurrEduClsStuExObjLst.length);
console.log(strInfo);
return arrCurrEduClsStuExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduClsStu_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsCurrEduClsStuEN.WhereFormat) == false)
{
strWhereCond = Format(clsCurrEduClsStuEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsCurrEduClsStuEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsCurrEduClsStuEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCurrEduClsStuEN.CacheAddiCondition);
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
const arrCurrEduClsStuExObjLstCache: Array<clsCurrEduClsStuEN> = JSON.parse(strTempObjLst);
const arrCurrEduClsStuObjLstT = CurrEduClsStu_GetObjLstByJSONObjLst(arrCurrEduClsStuExObjLstCache);
return arrCurrEduClsStuObjLstT;
}
try
{
const arrCurrEduClsStuExObjLst = await CurrEduClsStu_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrCurrEduClsStuExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCurrEduClsStuExObjLst.length);
console.log(strInfo);
return arrCurrEduClsStuExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduClsStu_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrCurrEduClsStuObjLstCache: Array<clsCurrEduClsStuEN> = JSON.parse(strTempObjLst);
return arrCurrEduClsStuObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function CurrEduClsStu_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsCurrEduClsStuEN.WhereFormat) == false)
{
strWhereCond = Format(clsCurrEduClsStuEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsCurrEduClsStuEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsCurrEduClsStuEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsCurrEduClsStuEN.CacheAddiCondition);
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
const arrCurrEduClsStuExObjLstCache: Array<clsCurrEduClsStuEN> = JSON.parse(strTempObjLst);
const arrCurrEduClsStuObjLstT = CurrEduClsStu_GetObjLstByJSONObjLst(arrCurrEduClsStuExObjLstCache);
return arrCurrEduClsStuObjLstT;
}
try
{
const arrCurrEduClsStuExObjLst = await CurrEduClsStu_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrCurrEduClsStuExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrCurrEduClsStuExObjLst.length);
console.log(strInfo);
return arrCurrEduClsStuExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduClsStu_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrCurrEduClsStuObjLstCache: Array<clsCurrEduClsStuEN> = JSON.parse(strTempObjLst);
return arrCurrEduClsStuObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduClsStu_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsCurrEduClsStuEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsCurrEduClsStuWApi.CurrEduClsStu_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsCurrEduClsStuWApi.CurrEduClsStu_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrCurrEduClsStuObjLstCache;
switch (clsCurrEduClsStuEN.CacheModeId)
{
case "04"://sessionStorage
arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrCurrEduClsStuObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function CurrEduClsStu_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrCurrEduClsStuObjLstCache;
switch (clsCurrEduClsStuEN.CacheModeId)
{
case "04"://sessionStorage
arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrCurrEduClsStuObjLstCache = null;
break;
default:
arrCurrEduClsStuObjLstCache = null;
break;
}
return arrCurrEduClsStuObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngIdEduClsStuCond:条件对象
 * @returns 对象列表子集
*/
export  async function CurrEduClsStu_GetSubObjLstCache(objCurrEduClsStuCond: clsCurrEduClsStuEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
let arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache;
if (objCurrEduClsStuCond.sfFldComparisonOp == null || objCurrEduClsStuCond.sfFldComparisonOp == "") return arrCurrEduClsStuSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCurrEduClsStuCond.sfFldComparisonOp);
//console.log("clsCurrEduClsStuWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCurrEduClsStuCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCurrEduClsStuSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objCurrEduClsStuCond), currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCurrEduClsStuEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduClsStu:关键字列表
 * @returns 对象列表
 **/
export  async function CurrEduClsStu_GetObjLstByIdEduClsStuLstAsync(arrIdEduClsStu: Array<string>): Promise<Array<clsCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstByIdEduClsStuLstAsync";
const strAction = "GetObjLstByIdEduClsStuLst";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsStu, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param arrlngIdEduClsStuLst:关键字列表
 * @returns 对象列表
*/
export  async function CurrEduClsStu_GetObjLstByIdEduClsStuLstCache(arrIdEduClsStuLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByIdEduClsStuLstCache";
try
{
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
const arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache.filter(x => arrIdEduClsStuLst.indexOf(x.idEduClsStu)>-1);
return arrCurrEduClsStuSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdEduClsStuLst.join(","), currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsCurrEduClsStuEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsCurrEduClsStuEN>();
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrCurrEduClsStuObjLstCache.length == 0) return arrCurrEduClsStuObjLstCache;
let arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objCurrEduClsStuCond = new clsCurrEduClsStuEN();
ObjectAssign(objCurrEduClsStuCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsCurrEduClsStuWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCurrEduClsStuSel.length == 0) return arrCurrEduClsStuSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(CurrEduClsStu_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(objPagerPara.sortFun);
}
arrCurrEduClsStuSel = arrCurrEduClsStuSel.slice(intStart, intEnd);     
return arrCurrEduClsStuSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCurrEduClsStuEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function CurrEduClsStu_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsCurrEduClsStuEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsCurrEduClsStuEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", currEduClsStu_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = CurrEduClsStu_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:关键字
 * @returns 获取删除的结果
 **/
export  async function CurrEduClsStu_DelRecordAsync(lngIdEduClsStu: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngIdEduClsStu);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param arrIdEduClsStu:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function CurrEduClsStu_DelCurrEduClsStusAsync(arrIdEduClsStu: Array<string>): Promise<number> 
{
const strThisFuncName = "DelCurrEduClsStusAsync";
const strAction = "DelCurrEduClsStus";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsStu, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_DelCurrEduClsStusByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelCurrEduClsStusByCondAsync";
const strAction = "DelCurrEduClsStusByCond";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsStuEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function CurrEduClsStu_AddNewRecordAsync(objCurrEduClsStuEN: clsCurrEduClsStuEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objCurrEduClsStuEN);
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsStuEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsStuEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function CurrEduClsStu_AddNewRecordWithReturnKeyAsync(objCurrEduClsStuEN: clsCurrEduClsStuEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsStuEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsStuEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function CurrEduClsStu_UpdateRecordAsync(objCurrEduClsStuEN: clsCurrEduClsStuEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objCurrEduClsStuEN.sfUpdFldSetStr === undefined || objCurrEduClsStuEN.sfUpdFldSetStr === null || objCurrEduClsStuEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCurrEduClsStuEN.idEduClsStu);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsStuEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsStuEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function CurrEduClsStu_UpdateWithConditionAsync(objCurrEduClsStuEN: clsCurrEduClsStuEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objCurrEduClsStuEN.sfUpdFldSetStr === undefined || objCurrEduClsStuEN.sfUpdFldSetStr === null || objCurrEduClsStuEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objCurrEduClsStuEN.idEduClsStu);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);
objCurrEduClsStuEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objCurrEduClsStuEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objlngIdEduClsStuCond:条件对象
 * @returns 对象列表子集
*/
export  async function CurrEduClsStu_IsExistRecordCache(objCurrEduClsStuCond: clsCurrEduClsStuEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrCurrEduClsStuObjLstCache == null) return false;
let arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache;
if (objCurrEduClsStuCond.sfFldComparisonOp == null || objCurrEduClsStuCond.sfFldComparisonOp == "") return arrCurrEduClsStuSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCurrEduClsStuCond.sfFldComparisonOp);
//console.log("clsCurrEduClsStuWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCurrEduClsStuCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCurrEduClsStuSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objCurrEduClsStuCond), currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function CurrEduClsStu_IsExistCache(lngIdEduClsStu:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrCurrEduClsStuObjLstCache == null) return false;
try
{
const arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache.filter(x => x.idEduClsStu == lngIdEduClsStu);
if (arrCurrEduClsStuSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngIdEduClsStu, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngIdEduClsStu:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function CurrEduClsStu_IsExistAsync(lngIdEduClsStu: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsStu
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
 * @param objCurrEduClsStuCond:条件对象
 * @returns 对象列表记录数
*/
export  async function CurrEduClsStu_GetRecCountByCondCache(objCurrEduClsStuCond: clsCurrEduClsStuEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrCurrEduClsStuObjLstCache = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrCurrEduClsStuObjLstCache == null) return 0;
let arrCurrEduClsStuSel = arrCurrEduClsStuObjLstCache;
if (objCurrEduClsStuCond.sfFldComparisonOp == null || objCurrEduClsStuCond.sfFldComparisonOp == "") return arrCurrEduClsStuSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objCurrEduClsStuCond.sfFldComparisonOp);
//console.log("clsCurrEduClsStuWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCurrEduClsStuCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrCurrEduClsStuSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objCurrEduClsStuCond), currEduClsStu_ConstructorName, strThisFuncName);
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
export  async function CurrEduClsStu_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(currEduClsStu_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, currEduClsStu_ConstructorName, strThisFuncName);
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
export  function CurrEduClsStu_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function CurrEduClsStu_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsStuWApi.clsCurrEduClsStuWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsStuWApi.clsCurrEduClsStuWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
switch (clsCurrEduClsStuEN.CacheModeId)
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
vCurrEduClsStu_ReFreshThisCache(strIdCurrEduCls);
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function CurrEduClsStu_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsCurrEduClsStuWApi.CurrEduClsStu_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsCurrEduClsStuWApi.CurrEduClsStu_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsCurrEduClsStuEN._CurrTabName, strIdCurrEduCls);
switch (clsCurrEduClsStuEN.CacheModeId)
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function CurrEduClsStu_BindDdl_id_StuByid_CurrEduClsInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsCurrEduClsStuWApi.BindDdl_id_StuByid_CurrEduClsInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsCurrEduClsStuWApi.BindDdl_id_StuByid_CurrEduClsInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_StuByid_CurrEduClsInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_StuByid_CurrEduClsInDivCache");
let arrObjLstSel = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsCurrEduClsStuEN.con_IdStu, clsCurrEduClsStuEN.con_StuName, "教学班与学生关系");
}
//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CurrEduClsStu_CheckPropertyNew(pobjCurrEduClsStuEN: clsCurrEduClsStuEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idCurrEduCls) == false && GetStrLen(pobjCurrEduClsStuEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.idCurrEduCls)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idStu) == false && GetStrLen(pobjCurrEduClsStuEN.idStu) > 8)
{
 throw new Error("(errid:Watl000413)字段[学生流水号(idStu)]的长度不能超过8(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.idStu)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.eduClsStuStateId) == false && GetStrLen(pobjCurrEduClsStuEN.eduClsStuStateId) > 2)
{
 throw new Error("(errid:Watl000413)字段[教学班学生状态编号(eduClsStuStateId)]的长度不能超过2(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.eduClsStuStateId)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolTerm) == false && GetStrLen(pobjCurrEduClsStuEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.schoolTerm)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolYear) == false && GetStrLen(pobjCurrEduClsStuEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.schoolYear)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.exportDate) == false && GetStrLen(pobjCurrEduClsStuEN.exportDate) > 8)
{
 throw new Error("(errid:Watl000413)字段[导出日期(exportDate)]的长度不能超过8(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.exportDate)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInDate) == false && GetStrLen(pobjCurrEduClsStuEN.signInDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[签入时间(signInDate)]的长度不能超过20(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.signInDate)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInStateID) == false && GetStrLen(pobjCurrEduClsStuEN.signInStateID) > 2)
{
 throw new Error("(errid:Watl000413)字段[签入状态表流水号(signInStateID)]的长度不能超过2(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.signInStateID)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInUser) == false && GetStrLen(pobjCurrEduClsStuEN.signInUser) > 18)
{
 throw new Error("(errid:Watl000413)字段[签入人(signInUser)]的长度不能超过18(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.signInUser)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.lastVisitedDate) == false && GetStrLen(pobjCurrEduClsStuEN.lastVisitedDate) > 14)
{
 throw new Error("(errid:Watl000413)字段[最后访问时间(lastVisitedDate)]的长度不能超过14(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.lastVisitedDate)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyDate) == false && GetStrLen(pobjCurrEduClsStuEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.modifyDate)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyUserId) == false && GetStrLen(pobjCurrEduClsStuEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.modifyUserId)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.memo) == false && GetStrLen(pobjCurrEduClsStuEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.memo)(clsCurrEduClsStuBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (null != pobjCurrEduClsStuEN.idEduClsStu && undefined !== pobjCurrEduClsStuEN.idEduClsStu && tzDataType.isNumber(pobjCurrEduClsStuEN.idEduClsStu) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班学生流水号(idEduClsStu)]的值:[$(pobjCurrEduClsStuEN.idEduClsStu)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idCurrEduCls) == false && undefined !== pobjCurrEduClsStuEN.idCurrEduCls && tzDataType.isString(pobjCurrEduClsStuEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjCurrEduClsStuEN.idCurrEduCls)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idStu) == false && undefined !== pobjCurrEduClsStuEN.idStu && tzDataType.isString(pobjCurrEduClsStuEN.idStu) === false)
{
 throw new Error("(errid:Watl000414)字段[学生流水号(idStu)]的值:[$(pobjCurrEduClsStuEN.idStu)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.eduClsStuStateId) == false && undefined !== pobjCurrEduClsStuEN.eduClsStuStateId && tzDataType.isString(pobjCurrEduClsStuEN.eduClsStuStateId) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班学生状态编号(eduClsStuStateId)]的值:[$(pobjCurrEduClsStuEN.eduClsStuStateId)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.getScoreTimes && undefined !== pobjCurrEduClsStuEN.getScoreTimes && tzDataType.isNumber(pobjCurrEduClsStuEN.getScoreTimes) === false)
{
 throw new Error("(errid:Watl000414)字段[获得成绩次数(getScoreTimes)]的值:[$(pobjCurrEduClsStuEN.getScoreTimes)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.score && undefined !== pobjCurrEduClsStuEN.score && tzDataType.isNumber(pobjCurrEduClsStuEN.score) === false)
{
 throw new Error("(errid:Watl000414)字段[得分(score)]的值:[$(pobjCurrEduClsStuEN.score)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.totalScores && undefined !== pobjCurrEduClsStuEN.totalScores && tzDataType.isNumber(pobjCurrEduClsStuEN.totalScores) === false)
{
 throw new Error("(errid:Watl000414)字段[总分值(totalScores)]的值:[$(pobjCurrEduClsStuEN.totalScores)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.ranking && undefined !== pobjCurrEduClsStuEN.ranking && tzDataType.isNumber(pobjCurrEduClsStuEN.ranking) === false)
{
 throw new Error("(errid:Watl000414)字段[名次(ranking)]的值:[$(pobjCurrEduClsStuEN.ranking)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.percentile && undefined !== pobjCurrEduClsStuEN.percentile && tzDataType.isNumber(pobjCurrEduClsStuEN.percentile) === false)
{
 throw new Error("(errid:Watl000414)字段[百分位(percentile)]的值:[$(pobjCurrEduClsStuEN.percentile)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.ranking2 && undefined !== pobjCurrEduClsStuEN.ranking2 && tzDataType.isNumber(pobjCurrEduClsStuEN.ranking2) === false)
{
 throw new Error("(errid:Watl000414)字段[Ranking2(ranking2)]的值:[$(pobjCurrEduClsStuEN.ranking2)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.percentile2 && undefined !== pobjCurrEduClsStuEN.percentile2 && tzDataType.isNumber(pobjCurrEduClsStuEN.percentile2) === false)
{
 throw new Error("(errid:Watl000414)字段[Percentile2(percentile2)]的值:[$(pobjCurrEduClsStuEN.percentile2)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.ranking3 && undefined !== pobjCurrEduClsStuEN.ranking3 && tzDataType.isNumber(pobjCurrEduClsStuEN.ranking3) === false)
{
 throw new Error("(errid:Watl000414)字段[Ranking3(ranking3)]的值:[$(pobjCurrEduClsStuEN.ranking3)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.percentile3 && undefined !== pobjCurrEduClsStuEN.percentile3 && tzDataType.isNumber(pobjCurrEduClsStuEN.percentile3) === false)
{
 throw new Error("(errid:Watl000414)字段[Percentile3(percentile3)]的值:[$(pobjCurrEduClsStuEN.percentile3)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.confirmed && undefined !== pobjCurrEduClsStuEN.confirmed && tzDataType.isBoolean(pobjCurrEduClsStuEN.confirmed) === false)
{
 throw new Error("(errid:Watl000414)字段[是否确认(confirmed)]的值:[$(pobjCurrEduClsStuEN.confirmed)], 非法,应该为布尔型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolTerm) == false && undefined !== pobjCurrEduClsStuEN.schoolTerm && tzDataType.isString(pobjCurrEduClsStuEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000414)字段[学期(schoolTerm)]的值:[$(pobjCurrEduClsStuEN.schoolTerm)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolYear) == false && undefined !== pobjCurrEduClsStuEN.schoolYear && tzDataType.isString(pobjCurrEduClsStuEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjCurrEduClsStuEN.schoolYear)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.exportDate) == false && undefined !== pobjCurrEduClsStuEN.exportDate && tzDataType.isString(pobjCurrEduClsStuEN.exportDate) === false)
{
 throw new Error("(errid:Watl000414)字段[导出日期(exportDate)]的值:[$(pobjCurrEduClsStuEN.exportDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInDate) == false && undefined !== pobjCurrEduClsStuEN.signInDate && tzDataType.isString(pobjCurrEduClsStuEN.signInDate) === false)
{
 throw new Error("(errid:Watl000414)字段[签入时间(signInDate)]的值:[$(pobjCurrEduClsStuEN.signInDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInStateID) == false && undefined !== pobjCurrEduClsStuEN.signInStateID && tzDataType.isString(pobjCurrEduClsStuEN.signInStateID) === false)
{
 throw new Error("(errid:Watl000414)字段[签入状态表流水号(signInStateID)]的值:[$(pobjCurrEduClsStuEN.signInStateID)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInUser) == false && undefined !== pobjCurrEduClsStuEN.signInUser && tzDataType.isString(pobjCurrEduClsStuEN.signInUser) === false)
{
 throw new Error("(errid:Watl000414)字段[签入人(signInUser)]的值:[$(pobjCurrEduClsStuEN.signInUser)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.isOpByTeacher && undefined !== pobjCurrEduClsStuEN.isOpByTeacher && tzDataType.isBoolean(pobjCurrEduClsStuEN.isOpByTeacher) === false)
{
 throw new Error("(errid:Watl000414)字段[是否教师操作(isOpByTeacher)]的值:[$(pobjCurrEduClsStuEN.isOpByTeacher)], 非法,应该为布尔型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (null != pobjCurrEduClsStuEN.isSynScore && undefined !== pobjCurrEduClsStuEN.isSynScore && tzDataType.isBoolean(pobjCurrEduClsStuEN.isSynScore) === false)
{
 throw new Error("(errid:Watl000414)字段[是否同步成绩(isSynScore)]的值:[$(pobjCurrEduClsStuEN.isSynScore)], 非法,应该为布尔型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.lastVisitedDate) == false && undefined !== pobjCurrEduClsStuEN.lastVisitedDate && tzDataType.isString(pobjCurrEduClsStuEN.lastVisitedDate) === false)
{
 throw new Error("(errid:Watl000414)字段[最后访问时间(lastVisitedDate)]的值:[$(pobjCurrEduClsStuEN.lastVisitedDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyDate) == false && undefined !== pobjCurrEduClsStuEN.modifyDate && tzDataType.isString(pobjCurrEduClsStuEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjCurrEduClsStuEN.modifyDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyUserId) == false && undefined !== pobjCurrEduClsStuEN.modifyUserId && tzDataType.isString(pobjCurrEduClsStuEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjCurrEduClsStuEN.modifyUserId)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.memo) == false && undefined !== pobjCurrEduClsStuEN.memo && tzDataType.isString(pobjCurrEduClsStuEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjCurrEduClsStuEN.memo)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idCurrEduCls) == false && pobjCurrEduClsStuEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjCurrEduClsStuEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000415)字段[教学班流水号]作为外键字段,长度应该为8(In 教学班与学生关系)!(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idStu) == false && pobjCurrEduClsStuEN.idStu != '[nuull]' && GetStrLen(pobjCurrEduClsStuEN.idStu) !=  8)
{
 throw ("(errid:Watl000415)字段[学生流水号]作为外键字段,长度应该为8(In 教学班与学生关系)!(clsCurrEduClsStuBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function CurrEduClsStu_CheckProperty4Update(pobjCurrEduClsStuEN: clsCurrEduClsStuEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idCurrEduCls) == false && GetStrLen(pobjCurrEduClsStuEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.idCurrEduCls)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idStu) == false && GetStrLen(pobjCurrEduClsStuEN.idStu) > 8)
{
 throw new Error("(errid:Watl000416)字段[学生流水号(idStu)]的长度不能超过8(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.idStu)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.eduClsStuStateId) == false && GetStrLen(pobjCurrEduClsStuEN.eduClsStuStateId) > 2)
{
 throw new Error("(errid:Watl000416)字段[教学班学生状态编号(eduClsStuStateId)]的长度不能超过2(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.eduClsStuStateId)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolTerm) == false && GetStrLen(pobjCurrEduClsStuEN.schoolTerm) > 1)
{
 throw new Error("(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.schoolTerm)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolYear) == false && GetStrLen(pobjCurrEduClsStuEN.schoolYear) > 10)
{
 throw new Error("(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.schoolYear)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.exportDate) == false && GetStrLen(pobjCurrEduClsStuEN.exportDate) > 8)
{
 throw new Error("(errid:Watl000416)字段[导出日期(exportDate)]的长度不能超过8(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.exportDate)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInDate) == false && GetStrLen(pobjCurrEduClsStuEN.signInDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[签入时间(signInDate)]的长度不能超过20(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.signInDate)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInStateID) == false && GetStrLen(pobjCurrEduClsStuEN.signInStateID) > 2)
{
 throw new Error("(errid:Watl000416)字段[签入状态表流水号(signInStateID)]的长度不能超过2(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.signInStateID)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInUser) == false && GetStrLen(pobjCurrEduClsStuEN.signInUser) > 18)
{
 throw new Error("(errid:Watl000416)字段[签入人(signInUser)]的长度不能超过18(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.signInUser)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.lastVisitedDate) == false && GetStrLen(pobjCurrEduClsStuEN.lastVisitedDate) > 14)
{
 throw new Error("(errid:Watl000416)字段[最后访问时间(lastVisitedDate)]的长度不能超过14(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.lastVisitedDate)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyDate) == false && GetStrLen(pobjCurrEduClsStuEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.modifyDate)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyUserId) == false && GetStrLen(pobjCurrEduClsStuEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.modifyUserId)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.memo) == false && GetStrLen(pobjCurrEduClsStuEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学班与学生关系(CurrEduClsStu))!值:$(pobjCurrEduClsStuEN.memo)(clsCurrEduClsStuBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (null != pobjCurrEduClsStuEN.idEduClsStu && undefined !== pobjCurrEduClsStuEN.idEduClsStu && tzDataType.isNumber(pobjCurrEduClsStuEN.idEduClsStu) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班学生流水号(idEduClsStu)]的值:[$(pobjCurrEduClsStuEN.idEduClsStu)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idCurrEduCls) == false && undefined !== pobjCurrEduClsStuEN.idCurrEduCls && tzDataType.isString(pobjCurrEduClsStuEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjCurrEduClsStuEN.idCurrEduCls)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idStu) == false && undefined !== pobjCurrEduClsStuEN.idStu && tzDataType.isString(pobjCurrEduClsStuEN.idStu) === false)
{
 throw new Error("(errid:Watl000417)字段[学生流水号(idStu)]的值:[$(pobjCurrEduClsStuEN.idStu)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.eduClsStuStateId) == false && undefined !== pobjCurrEduClsStuEN.eduClsStuStateId && tzDataType.isString(pobjCurrEduClsStuEN.eduClsStuStateId) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班学生状态编号(eduClsStuStateId)]的值:[$(pobjCurrEduClsStuEN.eduClsStuStateId)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.getScoreTimes && undefined !== pobjCurrEduClsStuEN.getScoreTimes && tzDataType.isNumber(pobjCurrEduClsStuEN.getScoreTimes) === false)
{
 throw new Error("(errid:Watl000417)字段[获得成绩次数(getScoreTimes)]的值:[$(pobjCurrEduClsStuEN.getScoreTimes)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.score && undefined !== pobjCurrEduClsStuEN.score && tzDataType.isNumber(pobjCurrEduClsStuEN.score) === false)
{
 throw new Error("(errid:Watl000417)字段[得分(score)]的值:[$(pobjCurrEduClsStuEN.score)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.totalScores && undefined !== pobjCurrEduClsStuEN.totalScores && tzDataType.isNumber(pobjCurrEduClsStuEN.totalScores) === false)
{
 throw new Error("(errid:Watl000417)字段[总分值(totalScores)]的值:[$(pobjCurrEduClsStuEN.totalScores)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.ranking && undefined !== pobjCurrEduClsStuEN.ranking && tzDataType.isNumber(pobjCurrEduClsStuEN.ranking) === false)
{
 throw new Error("(errid:Watl000417)字段[名次(ranking)]的值:[$(pobjCurrEduClsStuEN.ranking)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.percentile && undefined !== pobjCurrEduClsStuEN.percentile && tzDataType.isNumber(pobjCurrEduClsStuEN.percentile) === false)
{
 throw new Error("(errid:Watl000417)字段[百分位(percentile)]的值:[$(pobjCurrEduClsStuEN.percentile)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.ranking2 && undefined !== pobjCurrEduClsStuEN.ranking2 && tzDataType.isNumber(pobjCurrEduClsStuEN.ranking2) === false)
{
 throw new Error("(errid:Watl000417)字段[Ranking2(ranking2)]的值:[$(pobjCurrEduClsStuEN.ranking2)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.percentile2 && undefined !== pobjCurrEduClsStuEN.percentile2 && tzDataType.isNumber(pobjCurrEduClsStuEN.percentile2) === false)
{
 throw new Error("(errid:Watl000417)字段[Percentile2(percentile2)]的值:[$(pobjCurrEduClsStuEN.percentile2)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.ranking3 && undefined !== pobjCurrEduClsStuEN.ranking3 && tzDataType.isNumber(pobjCurrEduClsStuEN.ranking3) === false)
{
 throw new Error("(errid:Watl000417)字段[Ranking3(ranking3)]的值:[$(pobjCurrEduClsStuEN.ranking3)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.percentile3 && undefined !== pobjCurrEduClsStuEN.percentile3 && tzDataType.isNumber(pobjCurrEduClsStuEN.percentile3) === false)
{
 throw new Error("(errid:Watl000417)字段[Percentile3(percentile3)]的值:[$(pobjCurrEduClsStuEN.percentile3)], 非法,应该为数值型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.confirmed && undefined !== pobjCurrEduClsStuEN.confirmed && tzDataType.isBoolean(pobjCurrEduClsStuEN.confirmed) === false)
{
 throw new Error("(errid:Watl000417)字段[是否确认(confirmed)]的值:[$(pobjCurrEduClsStuEN.confirmed)], 非法,应该为布尔型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolTerm) == false && undefined !== pobjCurrEduClsStuEN.schoolTerm && tzDataType.isString(pobjCurrEduClsStuEN.schoolTerm) === false)
{
 throw new Error("(errid:Watl000417)字段[学期(schoolTerm)]的值:[$(pobjCurrEduClsStuEN.schoolTerm)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.schoolYear) == false && undefined !== pobjCurrEduClsStuEN.schoolYear && tzDataType.isString(pobjCurrEduClsStuEN.schoolYear) === false)
{
 throw new Error("(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjCurrEduClsStuEN.schoolYear)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.exportDate) == false && undefined !== pobjCurrEduClsStuEN.exportDate && tzDataType.isString(pobjCurrEduClsStuEN.exportDate) === false)
{
 throw new Error("(errid:Watl000417)字段[导出日期(exportDate)]的值:[$(pobjCurrEduClsStuEN.exportDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInDate) == false && undefined !== pobjCurrEduClsStuEN.signInDate && tzDataType.isString(pobjCurrEduClsStuEN.signInDate) === false)
{
 throw new Error("(errid:Watl000417)字段[签入时间(signInDate)]的值:[$(pobjCurrEduClsStuEN.signInDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInStateID) == false && undefined !== pobjCurrEduClsStuEN.signInStateID && tzDataType.isString(pobjCurrEduClsStuEN.signInStateID) === false)
{
 throw new Error("(errid:Watl000417)字段[签入状态表流水号(signInStateID)]的值:[$(pobjCurrEduClsStuEN.signInStateID)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.signInUser) == false && undefined !== pobjCurrEduClsStuEN.signInUser && tzDataType.isString(pobjCurrEduClsStuEN.signInUser) === false)
{
 throw new Error("(errid:Watl000417)字段[签入人(signInUser)]的值:[$(pobjCurrEduClsStuEN.signInUser)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.isOpByTeacher && undefined !== pobjCurrEduClsStuEN.isOpByTeacher && tzDataType.isBoolean(pobjCurrEduClsStuEN.isOpByTeacher) === false)
{
 throw new Error("(errid:Watl000417)字段[是否教师操作(isOpByTeacher)]的值:[$(pobjCurrEduClsStuEN.isOpByTeacher)], 非法,应该为布尔型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (null != pobjCurrEduClsStuEN.isSynScore && undefined !== pobjCurrEduClsStuEN.isSynScore && tzDataType.isBoolean(pobjCurrEduClsStuEN.isSynScore) === false)
{
 throw new Error("(errid:Watl000417)字段[是否同步成绩(isSynScore)]的值:[$(pobjCurrEduClsStuEN.isSynScore)], 非法,应该为布尔型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.lastVisitedDate) == false && undefined !== pobjCurrEduClsStuEN.lastVisitedDate && tzDataType.isString(pobjCurrEduClsStuEN.lastVisitedDate) === false)
{
 throw new Error("(errid:Watl000417)字段[最后访问时间(lastVisitedDate)]的值:[$(pobjCurrEduClsStuEN.lastVisitedDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyDate) == false && undefined !== pobjCurrEduClsStuEN.modifyDate && tzDataType.isString(pobjCurrEduClsStuEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjCurrEduClsStuEN.modifyDate)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.modifyUserId) == false && undefined !== pobjCurrEduClsStuEN.modifyUserId && tzDataType.isString(pobjCurrEduClsStuEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjCurrEduClsStuEN.modifyUserId)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.memo) == false && undefined !== pobjCurrEduClsStuEN.memo && tzDataType.isString(pobjCurrEduClsStuEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjCurrEduClsStuEN.memo)], 非法,应该为字符型(In 教学班与学生关系(CurrEduClsStu))!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
if (null === pobjCurrEduClsStuEN.idEduClsStu 
 || pobjCurrEduClsStuEN.idEduClsStu != null && pobjCurrEduClsStuEN.idEduClsStu.toString()  ===  "")
{
 throw new Error("(errid:Watl000064)字段[教学班学生流水号]不能为空(In 教学班与学生关系)!(clsCurrEduClsStuBL:CheckProperty4Update)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idCurrEduCls) == false && pobjCurrEduClsStuEN.idCurrEduCls != '[nuull]' && GetStrLen(pobjCurrEduClsStuEN.idCurrEduCls) !=  8)
{
 throw ("(errid:Watl000418)字段[教学班流水号]作为外键字段,长度应该为8(In 教学班与学生关系)!(clsCurrEduClsStuBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjCurrEduClsStuEN.idStu) == false && pobjCurrEduClsStuEN.idStu != '[nuull]' && GetStrLen(pobjCurrEduClsStuEN.idStu) !=  8)
{
 throw ("(errid:Watl000418)字段[学生流水号]作为外键字段,长度应该为8(In 教学班与学生关系)!(clsCurrEduClsStuBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CurrEduClsStu_GetJSONStrByObj (pobjCurrEduClsStuEN: clsCurrEduClsStuEN): string
{
pobjCurrEduClsStuEN.sfUpdFldSetStr = pobjCurrEduClsStuEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjCurrEduClsStuEN);
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
export  function CurrEduClsStu_GetObjLstByJSONStr (strJSON: string): Array<clsCurrEduClsStuEN>
{
let arrCurrEduClsStuObjLst = new Array<clsCurrEduClsStuEN>();
if (strJSON === "")
{
return arrCurrEduClsStuObjLst;
}
try
{
arrCurrEduClsStuObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrCurrEduClsStuObjLst;
}
return arrCurrEduClsStuObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCurrEduClsStuObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function CurrEduClsStu_GetObjLstByJSONObjLst (arrCurrEduClsStuObjLstS: Array<clsCurrEduClsStuEN>): Array<clsCurrEduClsStuEN>
{
const arrCurrEduClsStuObjLst = new Array<clsCurrEduClsStuEN>();
for (const objInFor of arrCurrEduClsStuObjLstS) {
const obj1 = CurrEduClsStu_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrCurrEduClsStuObjLst.push(obj1);
}
return arrCurrEduClsStuObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function CurrEduClsStu_GetObjByJSONStr (strJSON: string): clsCurrEduClsStuEN
{
let pobjCurrEduClsStuEN = new clsCurrEduClsStuEN();
if (strJSON === "")
{
return pobjCurrEduClsStuEN;
}
try
{
pobjCurrEduClsStuEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjCurrEduClsStuEN;
}
return pobjCurrEduClsStuEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function CurrEduClsStu_GetCombineCondition(objCurrEduClsStuCond: clsCurrEduClsStuEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_IdEduClsStu) == true)
{
const strComparisonOpIdEduClsStu:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_IdEduClsStu];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_IdEduClsStu, objCurrEduClsStuCond.idEduClsStu, strComparisonOpIdEduClsStu);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_IdCurrEduCls, objCurrEduClsStuCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_IdStu) == true)
{
const strComparisonOpIdStu:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_IdStu];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_IdStu, objCurrEduClsStuCond.idStu, strComparisonOpIdStu);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_EduClsStuStateId) == true)
{
const strComparisonOpEduClsStuStateId:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_EduClsStuStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_EduClsStuStateId, objCurrEduClsStuCond.eduClsStuStateId, strComparisonOpEduClsStuStateId);
}
//数据类型number(tinyint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Score) == true)
{
const strComparisonOpScore:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Score, objCurrEduClsStuCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_TotalScores) == true)
{
const strComparisonOpTotalScores:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_TotalScores];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_TotalScores, objCurrEduClsStuCond.totalScores, strComparisonOpTotalScores);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Ranking) == true)
{
const strComparisonOpRanking:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Ranking];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Ranking, objCurrEduClsStuCond.ranking, strComparisonOpRanking);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Percentile) == true)
{
const strComparisonOpPercentile:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Percentile];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Percentile, objCurrEduClsStuCond.percentile, strComparisonOpPercentile);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Ranking2) == true)
{
const strComparisonOpRanking2:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Ranking2];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Ranking2, objCurrEduClsStuCond.ranking2, strComparisonOpRanking2);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Percentile2) == true)
{
const strComparisonOpPercentile2:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Percentile2];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Percentile2, objCurrEduClsStuCond.percentile2, strComparisonOpPercentile2);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Ranking3) == true)
{
const strComparisonOpRanking3:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Ranking3];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Ranking3, objCurrEduClsStuCond.ranking3, strComparisonOpRanking3);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Percentile3) == true)
{
const strComparisonOpPercentile3:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Percentile3];
strWhereCond += Format(" And {0} {2} {1}", clsCurrEduClsStuEN.con_Percentile3, objCurrEduClsStuCond.percentile3, strComparisonOpPercentile3);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Confirmed) == true)
{
if (objCurrEduClsStuCond.confirmed == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsStuEN.con_Confirmed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsStuEN.con_Confirmed);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_SchoolTerm, objCurrEduClsStuCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_SchoolYear, objCurrEduClsStuCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_ExportDate) == true)
{
const strComparisonOpExportDate:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_ExportDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_ExportDate, objCurrEduClsStuCond.exportDate, strComparisonOpExportDate);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_SignInDate) == true)
{
const strComparisonOpSignInDate:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_SignInDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_SignInDate, objCurrEduClsStuCond.signInDate, strComparisonOpSignInDate);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_SignInStateID) == true)
{
const strComparisonOpSignInStateID:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_SignInStateID];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_SignInStateID, objCurrEduClsStuCond.signInStateID, strComparisonOpSignInStateID);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_SignInUser) == true)
{
const strComparisonOpSignInUser:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_SignInUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_SignInUser, objCurrEduClsStuCond.signInUser, strComparisonOpSignInUser);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_IsOpByTeacher) == true)
{
if (objCurrEduClsStuCond.isOpByTeacher == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsStuEN.con_IsOpByTeacher);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsStuEN.con_IsOpByTeacher);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_IsSynScore) == true)
{
if (objCurrEduClsStuCond.isSynScore == true)
{
strWhereCond += Format(" And {0} = '1'", clsCurrEduClsStuEN.con_IsSynScore);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsCurrEduClsStuEN.con_IsSynScore);
}
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_LastVisitedDate) == true)
{
const strComparisonOpLastVisitedDate:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_LastVisitedDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_LastVisitedDate, objCurrEduClsStuCond.lastVisitedDate, strComparisonOpLastVisitedDate);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_ModifyDate, objCurrEduClsStuCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_ModifyUserId, objCurrEduClsStuCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objCurrEduClsStuCond.dicFldComparisonOp, clsCurrEduClsStuEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objCurrEduClsStuCond.dicFldComparisonOp[clsCurrEduClsStuEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsCurrEduClsStuEN.con_Memo, objCurrEduClsStuCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--CurrEduClsStu(教学班与学生关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strIdStu: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function CurrEduClsStu_GetUniCondStr(objCurrEduClsStuEN: clsCurrEduClsStuEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objCurrEduClsStuEN.idCurrEduCls);
 strWhereCond +=  Format(" and IdStu = '{0}'", objCurrEduClsStuEN.idStu);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--CurrEduClsStu(教学班与学生关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdCurrEduCls: 教学班流水号(要求唯一的字段)
 * @param strIdStu: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function CurrEduClsStu_GetUniCondStr4Update(objCurrEduClsStuEN: clsCurrEduClsStuEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdEduClsStu <> '{0}'", objCurrEduClsStuEN.idEduClsStu);
 strWhereCond +=  Format(" and IdCurrEduCls = '{0}'", objCurrEduClsStuEN.idCurrEduCls);
 strWhereCond +=  Format(" and IdStu = '{0}'", objCurrEduClsStuEN.idStu);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objCurrEduClsStuENS:源对象
 * @param objCurrEduClsStuENT:目标对象
*/
export  function CurrEduClsStu_CopyObjTo(objCurrEduClsStuENS: clsCurrEduClsStuEN , objCurrEduClsStuENT: clsCurrEduClsStuEN ): void 
{
objCurrEduClsStuENT.idEduClsStu = objCurrEduClsStuENS.idEduClsStu; //教学班学生流水号
objCurrEduClsStuENT.idCurrEduCls = objCurrEduClsStuENS.idCurrEduCls; //教学班流水号
objCurrEduClsStuENT.idStu = objCurrEduClsStuENS.idStu; //学生流水号
objCurrEduClsStuENT.eduClsStuStateId = objCurrEduClsStuENS.eduClsStuStateId; //教学班学生状态编号
objCurrEduClsStuENT.getScoreTimes = objCurrEduClsStuENS.getScoreTimes; //获得成绩次数
objCurrEduClsStuENT.score = objCurrEduClsStuENS.score; //得分
objCurrEduClsStuENT.totalScores = objCurrEduClsStuENS.totalScores; //总分值
objCurrEduClsStuENT.ranking = objCurrEduClsStuENS.ranking; //名次
objCurrEduClsStuENT.percentile = objCurrEduClsStuENS.percentile; //百分位
objCurrEduClsStuENT.ranking2 = objCurrEduClsStuENS.ranking2; //Ranking2
objCurrEduClsStuENT.percentile2 = objCurrEduClsStuENS.percentile2; //Percentile2
objCurrEduClsStuENT.ranking3 = objCurrEduClsStuENS.ranking3; //Ranking3
objCurrEduClsStuENT.percentile3 = objCurrEduClsStuENS.percentile3; //Percentile3
objCurrEduClsStuENT.confirmed = objCurrEduClsStuENS.confirmed; //是否确认
objCurrEduClsStuENT.schoolTerm = objCurrEduClsStuENS.schoolTerm; //学期
objCurrEduClsStuENT.schoolYear = objCurrEduClsStuENS.schoolYear; //学年
objCurrEduClsStuENT.exportDate = objCurrEduClsStuENS.exportDate; //导出日期
objCurrEduClsStuENT.signInDate = objCurrEduClsStuENS.signInDate; //签入时间
objCurrEduClsStuENT.signInStateID = objCurrEduClsStuENS.signInStateID; //签入状态表流水号
objCurrEduClsStuENT.signInUser = objCurrEduClsStuENS.signInUser; //签入人
objCurrEduClsStuENT.isOpByTeacher = objCurrEduClsStuENS.isOpByTeacher; //是否教师操作
objCurrEduClsStuENT.isSynScore = objCurrEduClsStuENS.isSynScore; //是否同步成绩
objCurrEduClsStuENT.lastVisitedDate = objCurrEduClsStuENS.lastVisitedDate; //最后访问时间
objCurrEduClsStuENT.modifyDate = objCurrEduClsStuENS.modifyDate; //修改日期
objCurrEduClsStuENT.modifyUserId = objCurrEduClsStuENS.modifyUserId; //修改人
objCurrEduClsStuENT.memo = objCurrEduClsStuENS.memo; //备注
objCurrEduClsStuENT.sfUpdFldSetStr = objCurrEduClsStuENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCurrEduClsStuENS:源对象
 * @param objCurrEduClsStuENT:目标对象
*/
export  function CurrEduClsStu_GetObjFromJsonObj(objCurrEduClsStuENS: clsCurrEduClsStuEN): clsCurrEduClsStuEN 
{
 const objCurrEduClsStuENT: clsCurrEduClsStuEN = new clsCurrEduClsStuEN();
ObjectAssign(objCurrEduClsStuENT, objCurrEduClsStuENS);
 return objCurrEduClsStuENT;
}