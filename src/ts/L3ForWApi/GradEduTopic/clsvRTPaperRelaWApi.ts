
 /**
 * 类名:clsvRTPaperRelaWApi
 * 表名:vRTPaperRela(01120583)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:40
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
 * vRTPaperRela(vRTPaperRela)
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
import { clsvRTPaperRelaEN } from "@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vRTPaperRela_Controller = "vRTPaperRelaApi";
 export const vRTPaperRela_ConstructorName = "vRTPaperRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vRTPaperRela_GetObjBymIdAsync(lngmId: number): Promise<clsvRTPaperRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvRTPaperRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const objvRTPaperRela = vRTPaperRela_GetObjFromJsonObj(returnObj);
return objvRTPaperRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvRTPaperRelaWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
try
{
const arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache.filter(x => 
 x.mId == lngmId );
let objvRTPaperRela: clsvRTPaperRelaEN;
if (arrvRTPaperRelaSel.length > 0)
{
objvRTPaperRela = arrvRTPaperRelaSel[0];
return objvRTPaperRela;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvRTPaperRelaConst = await vRTPaperRela_GetObjBymIdAsync(lngmId);
if (objvRTPaperRelaConst != null)
{
vRTPaperRela_ReFreshThisCache();
return objvRTPaperRelaConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvRTPaperRelaWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvRTPaperRelaEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvRTPaperRelaCache: clsvRTPaperRelaEN = JSON.parse(strTempObj);
return objvRTPaperRelaCache;
}
try
{
const objvRTPaperRela = await vRTPaperRela_GetObjBymIdAsync(lngmId);
if (objvRTPaperRela != null)
{
localStorage.setItem(strKey, JSON.stringify(objvRTPaperRela));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvRTPaperRela;
}
return objvRTPaperRela;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsvRTPaperRelaEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvRTPaperRelaEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvRTPaperRelaEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objvRTPaperRela = await vRTPaperRela_GetObjBymIdCache(lngmId );
if (objvRTPaperRela == null) return "";
if (objvRTPaperRela.GetFldValue(strOutFldName) == null) return "";
return objvRTPaperRela.GetFldValue(strOutFldName).toString();
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
export  function vRTPaperRela_SortFunDefa(a:clsvRTPaperRelaEN , b:clsvRTPaperRelaEN): number 
{
return a.mId-b.mId;
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
export  function vRTPaperRela_SortFunDefa2Fld(a:clsvRTPaperRelaEN , b:clsvRTPaperRelaEN): number 
{
if (a.topicId == b.topicId) return a.paperId.localeCompare(b.paperId);
else return a.topicId.localeCompare(b.topicId);
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
export  function vRTPaperRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvRTPaperRelaEN.con_mId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
return a.mId-b.mId;
}
case clsvRTPaperRelaEN.con_TopicId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.topicId == null) return -1;
if (b.topicId == null) return 1;
return a.topicId.localeCompare(b.topicId);
}
case clsvRTPaperRelaEN.con_PaperId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvRTPaperRelaEN.con_TopicName:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.topicName == null) return -1;
if (b.topicName == null) return 1;
return a.topicName.localeCompare(b.topicName);
}
case clsvRTPaperRelaEN.con_TopicContent:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.topicContent == null) return -1;
if (b.topicContent == null) return 1;
return a.topicContent.localeCompare(b.topicContent);
}
case clsvRTPaperRelaEN.con_TopicProposePeople:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.topicProposePeople == null) return -1;
if (b.topicProposePeople == null) return 1;
return a.topicProposePeople.localeCompare(b.topicProposePeople);
}
case clsvRTPaperRelaEN.con_PaperTitle:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvRTPaperRelaEN.con_PaperContent:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperContent == null) return -1;
if (b.paperContent == null) return 1;
return a.paperContent.localeCompare(b.paperContent);
}
case clsvRTPaperRelaEN.con_Author:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.author == null) return -1;
if (b.author == null) return 1;
return a.author.localeCompare(b.author);
}
case clsvRTPaperRelaEN.con_Periodical:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.periodical == null) return -1;
if (b.periodical == null) return 1;
return a.periodical.localeCompare(b.periodical);
}
case clsvRTPaperRelaEN.con_IsSubmit:
return (a: clsvRTPaperRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvRTPaperRelaEN.con_IdCurrEduCls:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvRTPaperRelaEN.con_PaperDate:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperDate == null) return -1;
if (b.paperDate == null) return 1;
return a.paperDate.localeCompare(b.paperDate);
}
case clsvRTPaperRelaEN.con_PaperStatusId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperStatusId == null) return -1;
if (b.paperStatusId == null) return 1;
return a.paperStatusId.localeCompare(b.paperStatusId);
}
case clsvRTPaperRelaEN.con_PaperTypeId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperTypeId == null) return -1;
if (b.paperTypeId == null) return 1;
return a.paperTypeId.localeCompare(b.paperTypeId);
}
case clsvRTPaperRelaEN.con_PaperUserId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperUserId == null) return -1;
if (b.paperUserId == null) return 1;
return a.paperUserId.localeCompare(b.paperUserId);
}
case clsvRTPaperRelaEN.con_VersionCount:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
return a.versionCount-b.versionCount;
}
case clsvRTPaperRelaEN.con_PaperTypeName:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.paperTypeName == null) return -1;
if (b.paperTypeName == null) return 1;
return a.paperTypeName.localeCompare(b.paperTypeName);
}
case clsvRTPaperRelaEN.con_UpdDate:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvRTPaperRelaEN.con_UpdUser:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvRTPaperRelaEN.con_Memo:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTPaperRela]中不存在!(in ${ vRTPaperRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvRTPaperRelaEN.con_mId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
return b.mId-a.mId;
}
case clsvRTPaperRelaEN.con_TopicId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.topicId == null) return -1;
if (a.topicId == null) return 1;
return b.topicId.localeCompare(a.topicId);
}
case clsvRTPaperRelaEN.con_PaperId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvRTPaperRelaEN.con_TopicName:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.topicName == null) return -1;
if (a.topicName == null) return 1;
return b.topicName.localeCompare(a.topicName);
}
case clsvRTPaperRelaEN.con_TopicContent:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.topicContent == null) return -1;
if (a.topicContent == null) return 1;
return b.topicContent.localeCompare(a.topicContent);
}
case clsvRTPaperRelaEN.con_TopicProposePeople:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.topicProposePeople == null) return -1;
if (a.topicProposePeople == null) return 1;
return b.topicProposePeople.localeCompare(a.topicProposePeople);
}
case clsvRTPaperRelaEN.con_PaperTitle:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvRTPaperRelaEN.con_PaperContent:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperContent == null) return -1;
if (a.paperContent == null) return 1;
return b.paperContent.localeCompare(a.paperContent);
}
case clsvRTPaperRelaEN.con_Author:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.author == null) return -1;
if (a.author == null) return 1;
return b.author.localeCompare(a.author);
}
case clsvRTPaperRelaEN.con_Periodical:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.periodical == null) return -1;
if (a.periodical == null) return 1;
return b.periodical.localeCompare(a.periodical);
}
case clsvRTPaperRelaEN.con_IsSubmit:
return (b: clsvRTPaperRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvRTPaperRelaEN.con_IdCurrEduCls:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvRTPaperRelaEN.con_PaperDate:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperDate == null) return -1;
if (a.paperDate == null) return 1;
return b.paperDate.localeCompare(a.paperDate);
}
case clsvRTPaperRelaEN.con_PaperStatusId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperStatusId == null) return -1;
if (a.paperStatusId == null) return 1;
return b.paperStatusId.localeCompare(a.paperStatusId);
}
case clsvRTPaperRelaEN.con_PaperTypeId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperTypeId == null) return -1;
if (a.paperTypeId == null) return 1;
return b.paperTypeId.localeCompare(a.paperTypeId);
}
case clsvRTPaperRelaEN.con_PaperUserId:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperUserId == null) return -1;
if (a.paperUserId == null) return 1;
return b.paperUserId.localeCompare(a.paperUserId);
}
case clsvRTPaperRelaEN.con_VersionCount:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
return b.versionCount-a.versionCount;
}
case clsvRTPaperRelaEN.con_PaperTypeName:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.paperTypeName == null) return -1;
if (a.paperTypeName == null) return 1;
return b.paperTypeName.localeCompare(a.paperTypeName);
}
case clsvRTPaperRelaEN.con_UpdDate:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvRTPaperRelaEN.con_UpdUser:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvRTPaperRelaEN.con_Memo:
return (a: clsvRTPaperRelaEN, b: clsvRTPaperRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTPaperRela]中不存在!(in ${ vRTPaperRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vRTPaperRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvRTPaperRelaEN.con_mId:
return (obj: clsvRTPaperRelaEN) => {
return obj.mId === value;
}
case clsvRTPaperRelaEN.con_TopicId:
return (obj: clsvRTPaperRelaEN) => {
return obj.topicId === value;
}
case clsvRTPaperRelaEN.con_PaperId:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperId === value;
}
case clsvRTPaperRelaEN.con_TopicName:
return (obj: clsvRTPaperRelaEN) => {
return obj.topicName === value;
}
case clsvRTPaperRelaEN.con_TopicContent:
return (obj: clsvRTPaperRelaEN) => {
return obj.topicContent === value;
}
case clsvRTPaperRelaEN.con_TopicProposePeople:
return (obj: clsvRTPaperRelaEN) => {
return obj.topicProposePeople === value;
}
case clsvRTPaperRelaEN.con_PaperTitle:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperTitle === value;
}
case clsvRTPaperRelaEN.con_PaperContent:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperContent === value;
}
case clsvRTPaperRelaEN.con_Author:
return (obj: clsvRTPaperRelaEN) => {
return obj.author === value;
}
case clsvRTPaperRelaEN.con_Periodical:
return (obj: clsvRTPaperRelaEN) => {
return obj.periodical === value;
}
case clsvRTPaperRelaEN.con_IsSubmit:
return (obj: clsvRTPaperRelaEN) => {
return obj.isSubmit === value;
}
case clsvRTPaperRelaEN.con_IdCurrEduCls:
return (obj: clsvRTPaperRelaEN) => {
return obj.idCurrEduCls === value;
}
case clsvRTPaperRelaEN.con_PaperDate:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperDate === value;
}
case clsvRTPaperRelaEN.con_PaperStatusId:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperStatusId === value;
}
case clsvRTPaperRelaEN.con_PaperTypeId:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperTypeId === value;
}
case clsvRTPaperRelaEN.con_PaperUserId:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperUserId === value;
}
case clsvRTPaperRelaEN.con_VersionCount:
return (obj: clsvRTPaperRelaEN) => {
return obj.versionCount === value;
}
case clsvRTPaperRelaEN.con_PaperTypeName:
return (obj: clsvRTPaperRelaEN) => {
return obj.paperTypeName === value;
}
case clsvRTPaperRelaEN.con_UpdDate:
return (obj: clsvRTPaperRelaEN) => {
return obj.updDate === value;
}
case clsvRTPaperRelaEN.con_UpdUser:
return (obj: clsvRTPaperRelaEN) => {
return obj.updUser === value;
}
case clsvRTPaperRelaEN.con_Memo:
return (obj: clsvRTPaperRelaEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTPaperRela]中不存在!(in ${ vRTPaperRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vRTPaperRela_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsvRTPaperRelaEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvRTPaperRela = await vRTPaperRela_GetObjLstCache();
if (arrvRTPaperRela == null) return [];
let arrvRTPaperRelaSel = arrvRTPaperRela;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvRTPaperRelaSel.length == 0) return [];
return arrvRTPaperRelaSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vRTPaperRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvRTPaperRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const objvRTPaperRela = vRTPaperRela_GetObjFromJsonObj(returnObj);
return objvRTPaperRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvRTPaperRelaEN._CurrTabName;
if (IsNullOrEmpty(clsvRTPaperRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvRTPaperRelaEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvRTPaperRelaExObjLstCache: Array<clsvRTPaperRelaEN> = CacheHelper.Get(strKey);
const arrvRTPaperRelaObjLstT = vRTPaperRela_GetObjLstByJSONObjLst(arrvRTPaperRelaExObjLstCache);
return arrvRTPaperRelaObjLstT;
}
try
{
const arrvRTPaperRelaExObjLst = await vRTPaperRela_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvRTPaperRelaExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvRTPaperRelaExObjLst.length);
console.log(strInfo);
return arrvRTPaperRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTPaperRela_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvRTPaperRelaEN._CurrTabName;
if (IsNullOrEmpty(clsvRTPaperRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvRTPaperRelaEN.CacheAddiCondition);
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
const arrvRTPaperRelaExObjLstCache: Array<clsvRTPaperRelaEN> = JSON.parse(strTempObjLst);
const arrvRTPaperRelaObjLstT = vRTPaperRela_GetObjLstByJSONObjLst(arrvRTPaperRelaExObjLstCache);
return arrvRTPaperRelaObjLstT;
}
try
{
const arrvRTPaperRelaExObjLst = await vRTPaperRela_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvRTPaperRelaExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvRTPaperRelaExObjLst.length);
console.log(strInfo);
return arrvRTPaperRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTPaperRela_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvRTPaperRelaEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvRTPaperRelaObjLstCache: Array<clsvRTPaperRelaEN> = JSON.parse(strTempObjLst);
return arrvRTPaperRelaObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vRTPaperRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvRTPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvRTPaperRelaEN._CurrTabName;
if (IsNullOrEmpty(clsvRTPaperRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvRTPaperRelaEN.CacheAddiCondition);
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
const arrvRTPaperRelaExObjLstCache: Array<clsvRTPaperRelaEN> = JSON.parse(strTempObjLst);
const arrvRTPaperRelaObjLstT = vRTPaperRela_GetObjLstByJSONObjLst(arrvRTPaperRelaExObjLstCache);
return arrvRTPaperRelaObjLstT;
}
try
{
const arrvRTPaperRelaExObjLst = await vRTPaperRela_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvRTPaperRelaExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvRTPaperRelaExObjLst.length);
console.log(strInfo);
return arrvRTPaperRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTPaperRela_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvRTPaperRelaEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvRTPaperRelaObjLstCache: Array<clsvRTPaperRelaEN> = JSON.parse(strTempObjLst);
return arrvRTPaperRelaObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTPaperRela_GetObjLstCache(): Promise<Array<clsvRTPaperRelaEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrvRTPaperRelaObjLstCache;
switch (clsvRTPaperRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstClientCache();
break;
default:
arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstClientCache();
break;
}
return arrvRTPaperRelaObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTPaperRela_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvRTPaperRelaObjLstCache;
switch (clsvRTPaperRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrvRTPaperRelaObjLstCache = null;
break;
default:
arrvRTPaperRelaObjLstCache = null;
break;
}
return arrvRTPaperRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vRTPaperRela_GetSubObjLstCache(objvRTPaperRelaCond: clsvRTPaperRelaEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
let arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache;
if (objvRTPaperRelaCond.sfFldComparisonOp == null || objvRTPaperRelaCond.sfFldComparisonOp == "") return arrvRTPaperRelaSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvRTPaperRelaCond.sfFldComparisonOp);
//console.log("clsvRTPaperRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvRTPaperRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTPaperRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvRTPaperRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvRTPaperRelaCond), vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvRTPaperRelaEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function vRTPaperRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvRTPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
const arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrvRTPaperRelaSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvRTPaperRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvRTPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvRTPaperRelaEN>();
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
if (arrvRTPaperRelaObjLstCache.length == 0) return arrvRTPaperRelaObjLstCache;
let arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvRTPaperRelaCond = new clsvRTPaperRelaEN();
ObjectAssign(objvRTPaperRelaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvRTPaperRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTPaperRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvRTPaperRelaSel.length == 0) return arrvRTPaperRelaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvRTPaperRelaSel = arrvRTPaperRelaSel.sort(vRTPaperRela_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvRTPaperRelaSel = arrvRTPaperRelaSel.sort(objPagerPara.sortFun);
}
arrvRTPaperRelaSel = arrvRTPaperRelaSel.slice(intStart, intEnd);     
return arrvRTPaperRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvRTPaperRelaEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vRTPaperRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvRTPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvRTPaperRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_IsExistRecordCache(objvRTPaperRelaCond: clsvRTPaperRelaEN) {
const strThisFuncName = "IsExistRecordCache";
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
if (arrvRTPaperRelaObjLstCache == null) return false;
let arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache;
if (objvRTPaperRelaCond.sfFldComparisonOp == null || objvRTPaperRelaCond.sfFldComparisonOp == "") return arrvRTPaperRelaSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvRTPaperRelaCond.sfFldComparisonOp);
//console.log("clsvRTPaperRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvRTPaperRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTPaperRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvRTPaperRelaSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvRTPaperRelaCond), vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_IsExistCache(lngmId:number) {
const strThisFuncName = "IsExistCache";
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
if (arrvRTPaperRelaObjLstCache == null) return false;
try
{
const arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache.filter(x => x.mId == lngmId);
if (arrvRTPaperRelaSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
export  async function vRTPaperRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vRTPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTPaperRela_ConstructorName, strThisFuncName);
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
 * @param objvRTPaperRelaCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vRTPaperRela_GetRecCountByCondCache(objvRTPaperRelaCond: clsvRTPaperRelaEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvRTPaperRelaObjLstCache = await vRTPaperRela_GetObjLstCache();
if (arrvRTPaperRelaObjLstCache == null) return 0;
let arrvRTPaperRelaSel = arrvRTPaperRelaObjLstCache;
if (objvRTPaperRelaCond.sfFldComparisonOp == null || objvRTPaperRelaCond.sfFldComparisonOp == "") return arrvRTPaperRelaSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvRTPaperRelaCond.sfFldComparisonOp);
//console.log("clsvRTPaperRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvRTPaperRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTPaperRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTPaperRelaSel = arrvRTPaperRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvRTPaperRelaSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvRTPaperRelaCond), vRTPaperRela_ConstructorName, strThisFuncName);
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
export  function vRTPaperRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vRTPaperRela_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsvRTPaperRelaEN._CurrTabName;
switch (clsvRTPaperRelaEN.CacheModeId)
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
export  function vRTPaperRela_GetJSONStrByObj (pobjvRTPaperRelaEN: clsvRTPaperRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvRTPaperRelaEN);
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
export  function vRTPaperRela_GetObjLstByJSONStr (strJSON: string): Array<clsvRTPaperRelaEN>
{
let arrvRTPaperRelaObjLst = new Array<clsvRTPaperRelaEN>();
if (strJSON === "")
{
return arrvRTPaperRelaObjLst;
}
try
{
arrvRTPaperRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvRTPaperRelaObjLst;
}
return arrvRTPaperRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTPaperRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vRTPaperRela_GetObjLstByJSONObjLst (arrvRTPaperRelaObjLstS: Array<clsvRTPaperRelaEN>): Array<clsvRTPaperRelaEN>
{
const arrvRTPaperRelaObjLst = new Array<clsvRTPaperRelaEN>();
for (const objInFor of arrvRTPaperRelaObjLstS) {
const obj1 = vRTPaperRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvRTPaperRelaObjLst.push(obj1);
}
return arrvRTPaperRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTPaperRela_GetObjByJSONStr (strJSON: string): clsvRTPaperRelaEN
{
let pobjvRTPaperRelaEN = new clsvRTPaperRelaEN();
if (strJSON === "")
{
return pobjvRTPaperRelaEN;
}
try
{
pobjvRTPaperRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvRTPaperRelaEN;
}
return pobjvRTPaperRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vRTPaperRela_GetCombineCondition(objvRTPaperRelaCond: clsvRTPaperRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvRTPaperRelaEN.con_mId, objvRTPaperRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_TopicId, objvRTPaperRelaCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperId, objvRTPaperRelaCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_TopicName) == true)
{
const strComparisonOpTopicName:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_TopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_TopicName, objvRTPaperRelaCond.topicName, strComparisonOpTopicName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_TopicProposePeople) == true)
{
const strComparisonOpTopicProposePeople:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_TopicProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_TopicProposePeople, objvRTPaperRelaCond.topicProposePeople, strComparisonOpTopicProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperTitle, objvRTPaperRelaCond.paperTitle, strComparisonOpPaperTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_Author) == true)
{
const strComparisonOpAuthor:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_Author];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_Author, objvRTPaperRelaCond.author, strComparisonOpAuthor);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_Periodical) == true)
{
const strComparisonOpPeriodical:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_Periodical];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_Periodical, objvRTPaperRelaCond.periodical, strComparisonOpPeriodical);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_IsSubmit) == true)
{
if (objvRTPaperRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTPaperRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTPaperRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_IdCurrEduCls, objvRTPaperRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperDate) == true)
{
const strComparisonOpPaperDate:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperDate, objvRTPaperRelaCond.paperDate, strComparisonOpPaperDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperStatusId) == true)
{
const strComparisonOpPaperStatusId:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperStatusId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperStatusId, objvRTPaperRelaCond.paperStatusId, strComparisonOpPaperStatusId);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperTypeId) == true)
{
const strComparisonOpPaperTypeId:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperTypeId, objvRTPaperRelaCond.paperTypeId, strComparisonOpPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperUserId) == true)
{
const strComparisonOpPaperUserId:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperUserId, objvRTPaperRelaCond.paperUserId, strComparisonOpPaperUserId);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTPaperRelaEN.con_VersionCount, objvRTPaperRelaCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_PaperTypeName) == true)
{
const strComparisonOpPaperTypeName:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_PaperTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_PaperTypeName, objvRTPaperRelaCond.paperTypeName, strComparisonOpPaperTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_UpdDate, objvRTPaperRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_UpdUser, objvRTPaperRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvRTPaperRelaCond.dicFldComparisonOp, clsvRTPaperRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvRTPaperRelaCond.dicFldComparisonOp[clsvRTPaperRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTPaperRelaEN.con_Memo, objvRTPaperRelaCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTPaperRelaENS:源对象
 * @param objvRTPaperRelaENT:目标对象
*/
export  function vRTPaperRela_CopyObjTo(objvRTPaperRelaENS: clsvRTPaperRelaEN , objvRTPaperRelaENT: clsvRTPaperRelaEN ): void 
{
objvRTPaperRelaENT.mId = objvRTPaperRelaENS.mId; //mId
objvRTPaperRelaENT.topicId = objvRTPaperRelaENS.topicId; //主题Id
objvRTPaperRelaENT.paperId = objvRTPaperRelaENS.paperId; //论文Id
objvRTPaperRelaENT.topicName = objvRTPaperRelaENS.topicName; //栏目主题
objvRTPaperRelaENT.topicContent = objvRTPaperRelaENS.topicContent; //主题内容
objvRTPaperRelaENT.topicProposePeople = objvRTPaperRelaENS.topicProposePeople; //主题提出人
objvRTPaperRelaENT.paperTitle = objvRTPaperRelaENS.paperTitle; //论文标题
objvRTPaperRelaENT.paperContent = objvRTPaperRelaENS.paperContent; //主题内容
objvRTPaperRelaENT.author = objvRTPaperRelaENS.author; //作者
objvRTPaperRelaENT.periodical = objvRTPaperRelaENS.periodical; //期刊
objvRTPaperRelaENT.isSubmit = objvRTPaperRelaENS.isSubmit; //是否提交
objvRTPaperRelaENT.idCurrEduCls = objvRTPaperRelaENS.idCurrEduCls; //教学班流水号
objvRTPaperRelaENT.paperDate = objvRTPaperRelaENS.paperDate; //PaperDate
objvRTPaperRelaENT.paperStatusId = objvRTPaperRelaENS.paperStatusId; //论文状态Id
objvRTPaperRelaENT.paperTypeId = objvRTPaperRelaENS.paperTypeId; //论文类型Id
objvRTPaperRelaENT.paperUserId = objvRTPaperRelaENS.paperUserId; //PaperUserId
objvRTPaperRelaENT.versionCount = objvRTPaperRelaENS.versionCount; //版本统计
objvRTPaperRelaENT.paperTypeName = objvRTPaperRelaENS.paperTypeName; //论文类型名
objvRTPaperRelaENT.updDate = objvRTPaperRelaENS.updDate; //修改日期
objvRTPaperRelaENT.updUser = objvRTPaperRelaENS.updUser; //修改人
objvRTPaperRelaENT.memo = objvRTPaperRelaENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTPaperRelaENS:源对象
 * @param objvRTPaperRelaENT:目标对象
*/
export  function vRTPaperRela_GetObjFromJsonObj(objvRTPaperRelaENS: clsvRTPaperRelaEN): clsvRTPaperRelaEN 
{
 const objvRTPaperRelaENT: clsvRTPaperRelaEN = new clsvRTPaperRelaEN();
ObjectAssign(objvRTPaperRelaENT, objvRTPaperRelaENS);
 return objvRTPaperRelaENT;
}