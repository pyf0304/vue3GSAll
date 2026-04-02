
 /**
 * 类名:clsSysSocialRelationsWApi
 * 表名:SysSocialRelations(01120644)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:41
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
 * 社会关系表(SysSocialRelations)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月29日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysSocialRelationsEN } from "@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN";
import { vSysSocialRelations_ReFreshThisCache } from "@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const sysSocialRelations_Controller = "SysSocialRelationsApi";
 export const sysSocialRelations_ConstructorName = "sysSocialRelations";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSocialId:关键字
 * @returns 对象
 **/
export  async function SysSocialRelations_GetObjBySocialIdAsync(strSocialId: string): Promise<clsSysSocialRelationsEN|null>  
{
const strThisFuncName = "GetObjBySocialIdAsync";

if (IsNullOrEmpty(strSocialId) == true)
{
  const strMsg = Format("参数:[strSocialId]不能为空!(In clsSysSocialRelationsWApi.GetObjBySocialIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strSocialId.length != 10)
{
const strMsg = Format("缓存分类变量:[strSocialId]的长度:[{0}]不正确!(clsSysSocialRelationsWApi.GetObjBySocialIdAsync)", strSocialId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjBySocialId";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSocialId,
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
const objSysSocialRelations = SysSocialRelations_GetObjFromJsonObj(returnObj);
return objSysSocialRelations;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param strSocialId:所给的关键字
 * @returns 对象
*/
export  async function SysSocialRelations_GetObjBySocialIdCache(strSocialId:string,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBySocialIdCache";

if (IsNullOrEmpty(strSocialId) == true)
{
  const strMsg = Format("参数:[strSocialId]不能为空!(In clsSysSocialRelationsWApi.GetObjBySocialIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSocialId.length != 10)
{
const strMsg = Format("缓存分类变量:[strSocialId]的长度:[{0}]不正确!(clsSysSocialRelationsWApi.GetObjBySocialIdCache)", strSocialId.length);
console.error(strMsg);
throw (strMsg);
}
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
try
{
const arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache.filter(x => 
 x.socialId == strSocialId );
let objSysSocialRelations: clsSysSocialRelationsEN;
if (arrSysSocialRelationsSel.length > 0)
{
objSysSocialRelations = arrSysSocialRelationsSel[0];
return objSysSocialRelations;
}
else
{
if (bolTryAsyncOnce == true)
{
const objSysSocialRelationsConst = await SysSocialRelations_GetObjBySocialIdAsync(strSocialId);
if (objSysSocialRelationsConst != null)
{
SysSocialRelations_ReFreshThisCache(strIdCurrEduCls);
return objSysSocialRelationsConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSocialId, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSocialId:所给的关键字
 * @returns 对象
*/
export  async function SysSocialRelations_GetObjBySocialIdlocalStorage(strSocialId: string) {
const strThisFuncName = "GetObjBySocialIdlocalStorage";

if (IsNullOrEmpty(strSocialId) == true)
{
  const strMsg = Format("参数:[strSocialId]不能为空!(In clsSysSocialRelationsWApi.GetObjBySocialIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strSocialId.length != 10)
{
const strMsg = Format("缓存分类变量:[strSocialId]的长度:[{0}]不正确!(clsSysSocialRelationsWApi.GetObjBySocialIdlocalStorage)", strSocialId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strSocialId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objSysSocialRelationsCache: clsSysSocialRelationsEN = JSON.parse(strTempObj);
return objSysSocialRelationsCache;
}
try
{
const objSysSocialRelations = await SysSocialRelations_GetObjBySocialIdAsync(strSocialId);
if (objSysSocialRelations != null)
{
localStorage.setItem(strKey, JSON.stringify(objSysSocialRelations));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objSysSocialRelations;
}
return objSysSocialRelations;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSocialId, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSysSocialRelations:所给的对象
 * @returns 对象
*/
export  async function SysSocialRelations_UpdateObjInLstCache(objSysSocialRelations: clsSysSocialRelationsEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
const obj = arrSysSocialRelationsObjLstCache.find(x => x.socialId == objSysSocialRelations.socialId);
if (obj != null)
{
objSysSocialRelations.socialId = obj.socialId;
ObjectAssign( obj, objSysSocialRelations);
}
else
{
arrSysSocialRelationsObjLstCache.push(objSysSocialRelations);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function SysSocialRelations_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsSysSocialRelationsWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsSysSocialRelationsWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsSysSocialRelationsEN.con_SocialId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsSysSocialRelationsEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsSysSocialRelationsEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strSocialId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objSysSocialRelations = await SysSocialRelations_GetObjBySocialIdCache(strSocialId , strIdCurrEduClsClassfy);
if (objSysSocialRelations == null) return "";
if (objSysSocialRelations.GetFldValue(strOutFldName) == null) return "";
return objSysSocialRelations.GetFldValue(strOutFldName).toString();
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
export  function SysSocialRelations_SortFunDefa(a:clsSysSocialRelationsEN , b:clsSysSocialRelationsEN): number 
{
return a.socialId.localeCompare(b.socialId);
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
export  function SysSocialRelations_SortFunDefa2Fld(a:clsSysSocialRelationsEN , b:clsSysSocialRelationsEN): number 
{
if (a.fullName == b.fullName) return a.nationality.localeCompare(b.nationality);
else return a.fullName.localeCompare(b.fullName);
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
export  function SysSocialRelations_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSysSocialRelationsEN.con_SocialId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.socialId.localeCompare(b.socialId);
}
case clsSysSocialRelationsEN.con_FullName:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.fullName == null) return -1;
if (b.fullName == null) return 1;
return a.fullName.localeCompare(b.fullName);
}
case clsSysSocialRelationsEN.con_Nationality:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.nationality == null) return -1;
if (b.nationality == null) return 1;
return a.nationality.localeCompare(b.nationality);
}
case clsSysSocialRelationsEN.con_WorkUnit:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.workUnit == null) return -1;
if (b.workUnit == null) return 1;
return a.workUnit.localeCompare(b.workUnit);
}
case clsSysSocialRelationsEN.con_Major:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.major == null) return -1;
if (b.major == null) return 1;
return a.major.localeCompare(b.major);
}
case clsSysSocialRelationsEN.con_Achievement:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.achievement == null) return -1;
if (b.achievement == null) return 1;
return a.achievement.localeCompare(b.achievement);
}
case clsSysSocialRelationsEN.con_DetailedDescription:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.detailedDescription == null) return -1;
if (b.detailedDescription == null) return 1;
return a.detailedDescription.localeCompare(b.detailedDescription);
}
case clsSysSocialRelationsEN.con_LevelId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsSysSocialRelationsEN.con_UpdUser:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsSysSocialRelationsEN.con_UpdDate:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsSysSocialRelationsEN.con_IsSubmit:
return (a: clsSysSocialRelationsEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsSysSocialRelationsEN.con_OkCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.okCount-b.okCount;
}
case clsSysSocialRelationsEN.con_CitationCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.citationCount-b.citationCount;
}
case clsSysSocialRelationsEN.con_VersionCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.versionCount-b.versionCount;
}
case clsSysSocialRelationsEN.con_IdCurrEduCls:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsSysSocialRelationsEN.con_Memo:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsSysSocialRelationsEN.con_AppraiseCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsSysSocialRelationsEN.con_Score:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.score-b.score;
}
case clsSysSocialRelationsEN.con_StuScore:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.stuScore-b.stuScore;
}
case clsSysSocialRelationsEN.con_TeaScore:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.teaScore-b.teaScore;
}
case clsSysSocialRelationsEN.con_CitationId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.citationId == null) return -1;
if (b.citationId == null) return 1;
return a.citationId.localeCompare(b.citationId);
}
case clsSysSocialRelationsEN.con_CreateDate:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsSysSocialRelationsEN.con_ShareId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsSysSocialRelationsEN.con_PdfContent:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsSysSocialRelationsEN.con_PdfPageNum:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSocialRelations]中不存在!(in ${ sysSocialRelations_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSysSocialRelationsEN.con_SocialId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.socialId.localeCompare(a.socialId);
}
case clsSysSocialRelationsEN.con_FullName:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.fullName == null) return -1;
if (a.fullName == null) return 1;
return b.fullName.localeCompare(a.fullName);
}
case clsSysSocialRelationsEN.con_Nationality:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.nationality == null) return -1;
if (a.nationality == null) return 1;
return b.nationality.localeCompare(a.nationality);
}
case clsSysSocialRelationsEN.con_WorkUnit:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.workUnit == null) return -1;
if (a.workUnit == null) return 1;
return b.workUnit.localeCompare(a.workUnit);
}
case clsSysSocialRelationsEN.con_Major:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.major == null) return -1;
if (a.major == null) return 1;
return b.major.localeCompare(a.major);
}
case clsSysSocialRelationsEN.con_Achievement:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.achievement == null) return -1;
if (a.achievement == null) return 1;
return b.achievement.localeCompare(a.achievement);
}
case clsSysSocialRelationsEN.con_DetailedDescription:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.detailedDescription == null) return -1;
if (a.detailedDescription == null) return 1;
return b.detailedDescription.localeCompare(a.detailedDescription);
}
case clsSysSocialRelationsEN.con_LevelId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsSysSocialRelationsEN.con_UpdUser:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsSysSocialRelationsEN.con_UpdDate:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsSysSocialRelationsEN.con_IsSubmit:
return (b: clsSysSocialRelationsEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsSysSocialRelationsEN.con_OkCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.okCount-a.okCount;
}
case clsSysSocialRelationsEN.con_CitationCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.citationCount-a.citationCount;
}
case clsSysSocialRelationsEN.con_VersionCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.versionCount-a.versionCount;
}
case clsSysSocialRelationsEN.con_IdCurrEduCls:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsSysSocialRelationsEN.con_Memo:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsSysSocialRelationsEN.con_AppraiseCount:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsSysSocialRelationsEN.con_Score:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.score-a.score;
}
case clsSysSocialRelationsEN.con_StuScore:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.stuScore-a.stuScore;
}
case clsSysSocialRelationsEN.con_TeaScore:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.teaScore-a.teaScore;
}
case clsSysSocialRelationsEN.con_CitationId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.citationId == null) return -1;
if (a.citationId == null) return 1;
return b.citationId.localeCompare(a.citationId);
}
case clsSysSocialRelationsEN.con_CreateDate:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsSysSocialRelationsEN.con_ShareId:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsSysSocialRelationsEN.con_PdfContent:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsSysSocialRelationsEN.con_PdfPageNum:
return (a: clsSysSocialRelationsEN, b: clsSysSocialRelationsEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSocialRelations]中不存在!(in ${ sysSocialRelations_ConstructorName}.${ strThisFuncName})`;
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
export  async function SysSocialRelations_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSysSocialRelationsEN.con_SocialId:
return (obj: clsSysSocialRelationsEN) => {
return obj.socialId === value;
}
case clsSysSocialRelationsEN.con_FullName:
return (obj: clsSysSocialRelationsEN) => {
return obj.fullName === value;
}
case clsSysSocialRelationsEN.con_Nationality:
return (obj: clsSysSocialRelationsEN) => {
return obj.nationality === value;
}
case clsSysSocialRelationsEN.con_WorkUnit:
return (obj: clsSysSocialRelationsEN) => {
return obj.workUnit === value;
}
case clsSysSocialRelationsEN.con_Major:
return (obj: clsSysSocialRelationsEN) => {
return obj.major === value;
}
case clsSysSocialRelationsEN.con_Achievement:
return (obj: clsSysSocialRelationsEN) => {
return obj.achievement === value;
}
case clsSysSocialRelationsEN.con_DetailedDescription:
return (obj: clsSysSocialRelationsEN) => {
return obj.detailedDescription === value;
}
case clsSysSocialRelationsEN.con_LevelId:
return (obj: clsSysSocialRelationsEN) => {
return obj.levelId === value;
}
case clsSysSocialRelationsEN.con_UpdUser:
return (obj: clsSysSocialRelationsEN) => {
return obj.updUser === value;
}
case clsSysSocialRelationsEN.con_UpdDate:
return (obj: clsSysSocialRelationsEN) => {
return obj.updDate === value;
}
case clsSysSocialRelationsEN.con_IsSubmit:
return (obj: clsSysSocialRelationsEN) => {
return obj.isSubmit === value;
}
case clsSysSocialRelationsEN.con_OkCount:
return (obj: clsSysSocialRelationsEN) => {
return obj.okCount === value;
}
case clsSysSocialRelationsEN.con_CitationCount:
return (obj: clsSysSocialRelationsEN) => {
return obj.citationCount === value;
}
case clsSysSocialRelationsEN.con_VersionCount:
return (obj: clsSysSocialRelationsEN) => {
return obj.versionCount === value;
}
case clsSysSocialRelationsEN.con_IdCurrEduCls:
return (obj: clsSysSocialRelationsEN) => {
return obj.idCurrEduCls === value;
}
case clsSysSocialRelationsEN.con_Memo:
return (obj: clsSysSocialRelationsEN) => {
return obj.memo === value;
}
case clsSysSocialRelationsEN.con_AppraiseCount:
return (obj: clsSysSocialRelationsEN) => {
return obj.appraiseCount === value;
}
case clsSysSocialRelationsEN.con_Score:
return (obj: clsSysSocialRelationsEN) => {
return obj.score === value;
}
case clsSysSocialRelationsEN.con_StuScore:
return (obj: clsSysSocialRelationsEN) => {
return obj.stuScore === value;
}
case clsSysSocialRelationsEN.con_TeaScore:
return (obj: clsSysSocialRelationsEN) => {
return obj.teaScore === value;
}
case clsSysSocialRelationsEN.con_CitationId:
return (obj: clsSysSocialRelationsEN) => {
return obj.citationId === value;
}
case clsSysSocialRelationsEN.con_CreateDate:
return (obj: clsSysSocialRelationsEN) => {
return obj.createDate === value;
}
case clsSysSocialRelationsEN.con_ShareId:
return (obj: clsSysSocialRelationsEN) => {
return obj.shareId === value;
}
case clsSysSocialRelationsEN.con_PdfContent:
return (obj: clsSysSocialRelationsEN) => {
return obj.pdfContent === value;
}
case clsSysSocialRelationsEN.con_PdfPageNum:
return (obj: clsSysSocialRelationsEN) => {
return obj.pdfPageNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SysSocialRelations]中不存在!(in ${ sysSocialRelations_ConstructorName}.${ strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function SysSocialRelations_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsSysSocialRelationsWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsSysSocialRelationsWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsSysSocialRelationsEN.con_SocialId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrSysSocialRelations = await SysSocialRelations_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrSysSocialRelations == null) return [];
let arrSysSocialRelationsSel = arrSysSocialRelations;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrSysSocialRelationsSel.length == 0) return [];
return arrSysSocialRelationsSel.map(x=>x.socialId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysSocialRelations_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetFirstObjAsync(strWhereCond: string): Promise<clsSysSocialRelationsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const objSysSocialRelations = SysSocialRelations_GetObjFromJsonObj(returnObj);
return objSysSocialRelations;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsSysSocialRelationsEN.WhereFormat) == false)
{
strWhereCond = Format(clsSysSocialRelationsEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsSysSocialRelationsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSysSocialRelationsEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrSysSocialRelationsExObjLstCache: Array<clsSysSocialRelationsEN> = CacheHelper.Get(strKey);
const arrSysSocialRelationsObjLstT = SysSocialRelations_GetObjLstByJSONObjLst(arrSysSocialRelationsExObjLstCache);
return arrSysSocialRelationsObjLstT;
}
try
{
const arrSysSocialRelationsExObjLst = await SysSocialRelations_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrSysSocialRelationsExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSysSocialRelationsExObjLst.length);
console.log(strInfo);
return arrSysSocialRelationsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SysSocialRelations_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsSysSocialRelationsEN.WhereFormat) == false)
{
strWhereCond = Format(clsSysSocialRelationsEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsSysSocialRelationsEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsSysSocialRelationsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSysSocialRelationsEN.CacheAddiCondition);
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
const arrSysSocialRelationsExObjLstCache: Array<clsSysSocialRelationsEN> = JSON.parse(strTempObjLst);
const arrSysSocialRelationsObjLstT = SysSocialRelations_GetObjLstByJSONObjLst(arrSysSocialRelationsExObjLstCache);
return arrSysSocialRelationsObjLstT;
}
try
{
const arrSysSocialRelationsExObjLst = await SysSocialRelations_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrSysSocialRelationsExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSysSocialRelationsExObjLst.length);
console.log(strInfo);
return arrSysSocialRelationsExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SysSocialRelations_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrSysSocialRelationsObjLstCache: Array<clsSysSocialRelationsEN> = JSON.parse(strTempObjLst);
return arrSysSocialRelationsObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function SysSocialRelations_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSysSocialRelationsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelations_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsSysSocialRelationsEN.WhereFormat) == false)
{
strWhereCond = Format(clsSysSocialRelationsEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsSysSocialRelationsEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsSysSocialRelationsEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSysSocialRelationsEN.CacheAddiCondition);
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
const arrSysSocialRelationsExObjLstCache: Array<clsSysSocialRelationsEN> = JSON.parse(strTempObjLst);
const arrSysSocialRelationsObjLstT = SysSocialRelations_GetObjLstByJSONObjLst(arrSysSocialRelationsExObjLstCache);
return arrSysSocialRelationsObjLstT;
}
try
{
const arrSysSocialRelationsExObjLst = await SysSocialRelations_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrSysSocialRelationsExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSysSocialRelationsExObjLst.length);
console.log(strInfo);
return arrSysSocialRelationsExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SysSocialRelations_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrSysSocialRelationsObjLstCache: Array<clsSysSocialRelationsEN> = JSON.parse(strTempObjLst);
return arrSysSocialRelationsObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SysSocialRelations_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsSysSocialRelationsEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsSysSocialRelationsWApi.SysSocialRelations_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsSysSocialRelationsWApi.SysSocialRelations_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrSysSocialRelationsObjLstCache;
switch (clsSysSocialRelationsEN.CacheModeId)
{
case "04"://sessionStorage
arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrSysSocialRelationsObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SysSocialRelations_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrSysSocialRelationsObjLstCache;
switch (clsSysSocialRelationsEN.CacheModeId)
{
case "04"://sessionStorage
arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrSysSocialRelationsObjLstCache = null;
break;
default:
arrSysSocialRelationsObjLstCache = null;
break;
}
return arrSysSocialRelationsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSocialIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function SysSocialRelations_GetSubObjLstCache(objSysSocialRelationsCond: clsSysSocialRelationsEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
let arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache;
if (objSysSocialRelationsCond.sfFldComparisonOp == null || objSysSocialRelationsCond.sfFldComparisonOp == "") return arrSysSocialRelationsSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSysSocialRelationsCond.sfFldComparisonOp);
//console.log("clsSysSocialRelationsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objSysSocialRelationsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSysSocialRelationsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSysSocialRelationsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objSysSocialRelationsCond), sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSysSocialRelationsEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSocialId:关键字列表
 * @returns 对象列表
 **/
export  async function SysSocialRelations_GetObjLstBySocialIdLstAsync(arrSocialId: Array<string>): Promise<Array<clsSysSocialRelationsEN>>  
{
const strThisFuncName = "GetObjLstBySocialIdLstAsync";
const strAction = "GetObjLstBySocialIdLst";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSocialId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelations_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param arrstrSocialIdLst:关键字列表
 * @returns 对象列表
*/
export  async function SysSocialRelations_GetObjLstBySocialIdLstCache(arrSocialIdLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstBySocialIdLstCache";
try
{
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
const arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache.filter(x => arrSocialIdLst.indexOf(x.socialId)>-1);
return arrSysSocialRelationsSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSocialIdLst.join(","), sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSysSocialRelationsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelations_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSysSocialRelationsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelations_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsSysSocialRelationsEN>();
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
if (arrSysSocialRelationsObjLstCache.length == 0) return arrSysSocialRelationsObjLstCache;
let arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objSysSocialRelationsCond = new clsSysSocialRelationsEN();
ObjectAssign(objSysSocialRelationsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsSysSocialRelationsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSysSocialRelationsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSysSocialRelationsSel.length == 0) return arrSysSocialRelationsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrSysSocialRelationsSel = arrSysSocialRelationsSel.sort(SysSocialRelations_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrSysSocialRelationsSel = arrSysSocialRelationsSel.sort(objPagerPara.sortFun);
}
arrSysSocialRelationsSel = arrSysSocialRelationsSel.slice(intStart, intEnd);     
return arrSysSocialRelationsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSysSocialRelationsEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function SysSocialRelations_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSysSocialRelationsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSysSocialRelationsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SysSocialRelations_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param strSocialId:关键字
 * @returns 获取删除的结果
 **/
export  async function SysSocialRelations_DelRecordAsync(strSocialId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strSocialId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param arrSocialId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SysSocialRelations_DelSysSocialRelationssAsync(arrSocialId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSysSocialRelationssAsync";
const strAction = "DelSysSocialRelationss";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSocialId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_DelSysSocialRelationssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSysSocialRelationssByCondAsync";
const strAction = "DelSysSocialRelationssByCond";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysSocialRelations_AddNewRecordAsync(objSysSocialRelationsEN: clsSysSocialRelationsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSysSocialRelationsEN);
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SysSocialRelations_AddNewRecordWithMaxIdAsync(objSysSocialRelationsEN: clsSysSocialRelationsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SysSocialRelations_AddNewRecordWithReturnKeyAsync(objSysSocialRelationsEN: clsSysSocialRelationsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN: clsSysSocialRelationsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSysSocialRelationsEN.sfUpdFldSetStr === undefined || objSysSocialRelationsEN.sfUpdFldSetStr === null || objSysSocialRelationsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysSocialRelationsEN.socialId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SysSocialRelations_UpdateWithConditionAsync(objSysSocialRelationsEN: clsSysSocialRelationsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSysSocialRelationsEN.sfUpdFldSetStr === undefined || objSysSocialRelationsEN.sfUpdFldSetStr === null || objSysSocialRelationsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSysSocialRelationsEN.socialId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);
objSysSocialRelationsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSysSocialRelationsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objstrSocialIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function SysSocialRelations_IsExistRecordCache(objSysSocialRelationsCond: clsSysSocialRelationsEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
if (arrSysSocialRelationsObjLstCache == null) return false;
let arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache;
if (objSysSocialRelationsCond.sfFldComparisonOp == null || objSysSocialRelationsCond.sfFldComparisonOp == "") return arrSysSocialRelationsSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSysSocialRelationsCond.sfFldComparisonOp);
//console.log("clsSysSocialRelationsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objSysSocialRelationsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSysSocialRelationsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSysSocialRelationsSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objSysSocialRelationsCond), sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param strSocialId:所给的关键字
 * @returns 对象
*/
export  async function SysSocialRelations_IsExistCache(strSocialId:string,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
if (arrSysSocialRelationsObjLstCache == null) return false;
try
{
const arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache.filter(x => x.socialId == strSocialId);
if (arrSysSocialRelationsSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strSocialId, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strSocialId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SysSocialRelations_IsExistAsync(strSocialId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSocialId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  async function SysSocialRelations_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
 * @param objSysSocialRelationsCond:条件对象
 * @returns 对象列表记录数
*/
export  async function SysSocialRelations_GetRecCountByCondCache(objSysSocialRelationsCond: clsSysSocialRelationsEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrSysSocialRelationsObjLstCache = await SysSocialRelations_GetObjLstCache(strIdCurrEduCls);
if (arrSysSocialRelationsObjLstCache == null) return 0;
let arrSysSocialRelationsSel = arrSysSocialRelationsObjLstCache;
if (objSysSocialRelationsCond.sfFldComparisonOp == null || objSysSocialRelationsCond.sfFldComparisonOp == "") return arrSysSocialRelationsSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSysSocialRelationsCond.sfFldComparisonOp);
//console.log("clsSysSocialRelationsWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objSysSocialRelationsCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objSysSocialRelationsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSysSocialRelationsSel = arrSysSocialRelationsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSysSocialRelationsSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objSysSocialRelationsCond), sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function SysSocialRelations_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function SysSocialRelations_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(sysSocialRelations_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, sysSocialRelations_ConstructorName, strThisFuncName);
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
export  function SysSocialRelations_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SysSocialRelations_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsSysSocialRelationsWApi.clsSysSocialRelationsWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsSysSocialRelationsWApi.clsSysSocialRelationsWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
switch (clsSysSocialRelationsEN.CacheModeId)
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
vSysSocialRelations_ReFreshThisCache(strIdCurrEduCls);
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function SysSocialRelations_ReFreshThisCache(strIdCurrEduCls: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsSysSocialRelationsEN._CurrTabName, strIdCurrEduCls);
switch (clsSysSocialRelationsEN.CacheModeId)
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
export  function SysSocialRelations_CheckPropertyNew(pobjSysSocialRelationsEN: clsSysSocialRelationsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysSocialRelationsEN.socialId) == false && GetStrLen(pobjSysSocialRelationsEN.socialId) > 10)
{
 throw new Error("(errid:Watl000413)字段[社会Id(socialId)]的长度不能超过10(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.socialId)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.fullName) == false && GetStrLen(pobjSysSocialRelationsEN.fullName) > 50)
{
 throw new Error("(errid:Watl000413)字段[姓名(fullName)]的长度不能超过50(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.fullName)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.nationality) == false && GetStrLen(pobjSysSocialRelationsEN.nationality) > 50)
{
 throw new Error("(errid:Watl000413)字段[国籍(nationality)]的长度不能超过50(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.nationality)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.workUnit) == false && GetStrLen(pobjSysSocialRelationsEN.workUnit) > 100)
{
 throw new Error("(errid:Watl000413)字段[工作单位(workUnit)]的长度不能超过100(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.workUnit)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.major) == false && GetStrLen(pobjSysSocialRelationsEN.major) > 50)
{
 throw new Error("(errid:Watl000413)字段[专业(major)]的长度不能超过50(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.major)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.achievement) == false && GetStrLen(pobjSysSocialRelationsEN.achievement) > 5000)
{
 throw new Error("(errid:Watl000413)字段[成就(achievement)]的长度不能超过5000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.achievement)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.detailedDescription) == false && GetStrLen(pobjSysSocialRelationsEN.detailedDescription) > 5000)
{
 throw new Error("(errid:Watl000413)字段[详细说明(detailedDescription)]的长度不能超过5000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.detailedDescription)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.levelId) == false && GetStrLen(pobjSysSocialRelationsEN.levelId) > 2)
{
 throw new Error("(errid:Watl000413)字段[级别Id(levelId)]的长度不能超过2(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.levelId)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updUser) == false && GetStrLen(pobjSysSocialRelationsEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.updUser)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updDate) == false && GetStrLen(pobjSysSocialRelationsEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.updDate)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.idCurrEduCls) == false && GetStrLen(pobjSysSocialRelationsEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.idCurrEduCls)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.memo) == false && GetStrLen(pobjSysSocialRelationsEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.memo)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.citationId) == false && GetStrLen(pobjSysSocialRelationsEN.citationId) > 8)
{
 throw new Error("(errid:Watl000413)字段[引用Id(citationId)]的长度不能超过8(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.citationId)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.createDate) == false && GetStrLen(pobjSysSocialRelationsEN.createDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.createDate)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.shareId) == false && GetStrLen(pobjSysSocialRelationsEN.shareId) > 2)
{
 throw new Error("(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.shareId)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.pdfContent) == false && GetStrLen(pobjSysSocialRelationsEN.pdfContent) > 2000)
{
 throw new Error("(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.pdfContent)(clsSysSocialRelationsBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSysSocialRelationsEN.socialId) == false && undefined !== pobjSysSocialRelationsEN.socialId && tzDataType.isString(pobjSysSocialRelationsEN.socialId) === false)
{
 throw new Error("(errid:Watl000414)字段[社会Id(socialId)]的值:[$(pobjSysSocialRelationsEN.socialId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.fullName) == false && undefined !== pobjSysSocialRelationsEN.fullName && tzDataType.isString(pobjSysSocialRelationsEN.fullName) === false)
{
 throw new Error("(errid:Watl000414)字段[姓名(fullName)]的值:[$(pobjSysSocialRelationsEN.fullName)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.nationality) == false && undefined !== pobjSysSocialRelationsEN.nationality && tzDataType.isString(pobjSysSocialRelationsEN.nationality) === false)
{
 throw new Error("(errid:Watl000414)字段[国籍(nationality)]的值:[$(pobjSysSocialRelationsEN.nationality)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.workUnit) == false && undefined !== pobjSysSocialRelationsEN.workUnit && tzDataType.isString(pobjSysSocialRelationsEN.workUnit) === false)
{
 throw new Error("(errid:Watl000414)字段[工作单位(workUnit)]的值:[$(pobjSysSocialRelationsEN.workUnit)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.major) == false && undefined !== pobjSysSocialRelationsEN.major && tzDataType.isString(pobjSysSocialRelationsEN.major) === false)
{
 throw new Error("(errid:Watl000414)字段[专业(major)]的值:[$(pobjSysSocialRelationsEN.major)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.achievement) == false && undefined !== pobjSysSocialRelationsEN.achievement && tzDataType.isString(pobjSysSocialRelationsEN.achievement) === false)
{
 throw new Error("(errid:Watl000414)字段[成就(achievement)]的值:[$(pobjSysSocialRelationsEN.achievement)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.detailedDescription) == false && undefined !== pobjSysSocialRelationsEN.detailedDescription && tzDataType.isString(pobjSysSocialRelationsEN.detailedDescription) === false)
{
 throw new Error("(errid:Watl000414)字段[详细说明(detailedDescription)]的值:[$(pobjSysSocialRelationsEN.detailedDescription)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.levelId) == false && undefined !== pobjSysSocialRelationsEN.levelId && tzDataType.isString(pobjSysSocialRelationsEN.levelId) === false)
{
 throw new Error("(errid:Watl000414)字段[级别Id(levelId)]的值:[$(pobjSysSocialRelationsEN.levelId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updUser) == false && undefined !== pobjSysSocialRelationsEN.updUser && tzDataType.isString(pobjSysSocialRelationsEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysSocialRelationsEN.updUser)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updDate) == false && undefined !== pobjSysSocialRelationsEN.updDate && tzDataType.isString(pobjSysSocialRelationsEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysSocialRelationsEN.updDate)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.isSubmit && undefined !== pobjSysSocialRelationsEN.isSubmit && tzDataType.isBoolean(pobjSysSocialRelationsEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjSysSocialRelationsEN.isSubmit)], 非法,应该为布尔型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.okCount && undefined !== pobjSysSocialRelationsEN.okCount && tzDataType.isNumber(pobjSysSocialRelationsEN.okCount) === false)
{
 throw new Error("(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjSysSocialRelationsEN.okCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.citationCount && undefined !== pobjSysSocialRelationsEN.citationCount && tzDataType.isNumber(pobjSysSocialRelationsEN.citationCount) === false)
{
 throw new Error("(errid:Watl000414)字段[引用统计(citationCount)]的值:[$(pobjSysSocialRelationsEN.citationCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.versionCount && undefined !== pobjSysSocialRelationsEN.versionCount && tzDataType.isNumber(pobjSysSocialRelationsEN.versionCount) === false)
{
 throw new Error("(errid:Watl000414)字段[版本统计(versionCount)]的值:[$(pobjSysSocialRelationsEN.versionCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.idCurrEduCls) == false && undefined !== pobjSysSocialRelationsEN.idCurrEduCls && tzDataType.isString(pobjSysSocialRelationsEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysSocialRelationsEN.idCurrEduCls)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.memo) == false && undefined !== pobjSysSocialRelationsEN.memo && tzDataType.isString(pobjSysSocialRelationsEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysSocialRelationsEN.memo)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.appraiseCount && undefined !== pobjSysSocialRelationsEN.appraiseCount && tzDataType.isNumber(pobjSysSocialRelationsEN.appraiseCount) === false)
{
 throw new Error("(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjSysSocialRelationsEN.appraiseCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.score && undefined !== pobjSysSocialRelationsEN.score && tzDataType.isNumber(pobjSysSocialRelationsEN.score) === false)
{
 throw new Error("(errid:Watl000414)字段[评分(score)]的值:[$(pobjSysSocialRelationsEN.score)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.stuScore && undefined !== pobjSysSocialRelationsEN.stuScore && tzDataType.isNumber(pobjSysSocialRelationsEN.stuScore) === false)
{
 throw new Error("(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjSysSocialRelationsEN.stuScore)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.teaScore && undefined !== pobjSysSocialRelationsEN.teaScore && tzDataType.isNumber(pobjSysSocialRelationsEN.teaScore) === false)
{
 throw new Error("(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjSysSocialRelationsEN.teaScore)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.citationId) == false && undefined !== pobjSysSocialRelationsEN.citationId && tzDataType.isString(pobjSysSocialRelationsEN.citationId) === false)
{
 throw new Error("(errid:Watl000414)字段[引用Id(citationId)]的值:[$(pobjSysSocialRelationsEN.citationId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.createDate) == false && undefined !== pobjSysSocialRelationsEN.createDate && tzDataType.isString(pobjSysSocialRelationsEN.createDate) === false)
{
 throw new Error("(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjSysSocialRelationsEN.createDate)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.shareId) == false && undefined !== pobjSysSocialRelationsEN.shareId && tzDataType.isString(pobjSysSocialRelationsEN.shareId) === false)
{
 throw new Error("(errid:Watl000414)字段[分享Id(shareId)]的值:[$(pobjSysSocialRelationsEN.shareId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.pdfContent) == false && undefined !== pobjSysSocialRelationsEN.pdfContent && tzDataType.isString(pobjSysSocialRelationsEN.pdfContent) === false)
{
 throw new Error("(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[$(pobjSysSocialRelationsEN.pdfContent)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
if (null != pobjSysSocialRelationsEN.pdfPageNum && undefined !== pobjSysSocialRelationsEN.pdfPageNum && tzDataType.isNumber(pobjSysSocialRelationsEN.pdfPageNum) === false)
{
 throw new Error("(errid:Watl000414)字段[Pdf页码(pdfPageNum)]的值:[$(pobjSysSocialRelationsEN.pdfPageNum)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SysSocialRelations_CheckProperty4Update(pobjSysSocialRelationsEN: clsSysSocialRelationsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSysSocialRelationsEN.socialId) == false && GetStrLen(pobjSysSocialRelationsEN.socialId) > 10)
{
 throw new Error("(errid:Watl000416)字段[社会Id(socialId)]的长度不能超过10(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.socialId)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.fullName) == false && GetStrLen(pobjSysSocialRelationsEN.fullName) > 50)
{
 throw new Error("(errid:Watl000416)字段[姓名(fullName)]的长度不能超过50(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.fullName)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.nationality) == false && GetStrLen(pobjSysSocialRelationsEN.nationality) > 50)
{
 throw new Error("(errid:Watl000416)字段[国籍(nationality)]的长度不能超过50(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.nationality)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.workUnit) == false && GetStrLen(pobjSysSocialRelationsEN.workUnit) > 100)
{
 throw new Error("(errid:Watl000416)字段[工作单位(workUnit)]的长度不能超过100(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.workUnit)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.major) == false && GetStrLen(pobjSysSocialRelationsEN.major) > 50)
{
 throw new Error("(errid:Watl000416)字段[专业(major)]的长度不能超过50(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.major)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.achievement) == false && GetStrLen(pobjSysSocialRelationsEN.achievement) > 5000)
{
 throw new Error("(errid:Watl000416)字段[成就(achievement)]的长度不能超过5000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.achievement)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.detailedDescription) == false && GetStrLen(pobjSysSocialRelationsEN.detailedDescription) > 5000)
{
 throw new Error("(errid:Watl000416)字段[详细说明(detailedDescription)]的长度不能超过5000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.detailedDescription)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.levelId) == false && GetStrLen(pobjSysSocialRelationsEN.levelId) > 2)
{
 throw new Error("(errid:Watl000416)字段[级别Id(levelId)]的长度不能超过2(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.levelId)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updUser) == false && GetStrLen(pobjSysSocialRelationsEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.updUser)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updDate) == false && GetStrLen(pobjSysSocialRelationsEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.updDate)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.idCurrEduCls) == false && GetStrLen(pobjSysSocialRelationsEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.idCurrEduCls)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.memo) == false && GetStrLen(pobjSysSocialRelationsEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.memo)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.citationId) == false && GetStrLen(pobjSysSocialRelationsEN.citationId) > 8)
{
 throw new Error("(errid:Watl000416)字段[引用Id(citationId)]的长度不能超过8(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.citationId)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.createDate) == false && GetStrLen(pobjSysSocialRelationsEN.createDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.createDate)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.shareId) == false && GetStrLen(pobjSysSocialRelationsEN.shareId) > 2)
{
 throw new Error("(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.shareId)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.pdfContent) == false && GetStrLen(pobjSysSocialRelationsEN.pdfContent) > 2000)
{
 throw new Error("(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 社会关系表(SysSocialRelations))!值:$(pobjSysSocialRelationsEN.pdfContent)(clsSysSocialRelationsBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSysSocialRelationsEN.socialId) == false && undefined !== pobjSysSocialRelationsEN.socialId && tzDataType.isString(pobjSysSocialRelationsEN.socialId) === false)
{
 throw new Error("(errid:Watl000417)字段[社会Id(socialId)]的值:[$(pobjSysSocialRelationsEN.socialId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.fullName) == false && undefined !== pobjSysSocialRelationsEN.fullName && tzDataType.isString(pobjSysSocialRelationsEN.fullName) === false)
{
 throw new Error("(errid:Watl000417)字段[姓名(fullName)]的值:[$(pobjSysSocialRelationsEN.fullName)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.nationality) == false && undefined !== pobjSysSocialRelationsEN.nationality && tzDataType.isString(pobjSysSocialRelationsEN.nationality) === false)
{
 throw new Error("(errid:Watl000417)字段[国籍(nationality)]的值:[$(pobjSysSocialRelationsEN.nationality)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.workUnit) == false && undefined !== pobjSysSocialRelationsEN.workUnit && tzDataType.isString(pobjSysSocialRelationsEN.workUnit) === false)
{
 throw new Error("(errid:Watl000417)字段[工作单位(workUnit)]的值:[$(pobjSysSocialRelationsEN.workUnit)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.major) == false && undefined !== pobjSysSocialRelationsEN.major && tzDataType.isString(pobjSysSocialRelationsEN.major) === false)
{
 throw new Error("(errid:Watl000417)字段[专业(major)]的值:[$(pobjSysSocialRelationsEN.major)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.achievement) == false && undefined !== pobjSysSocialRelationsEN.achievement && tzDataType.isString(pobjSysSocialRelationsEN.achievement) === false)
{
 throw new Error("(errid:Watl000417)字段[成就(achievement)]的值:[$(pobjSysSocialRelationsEN.achievement)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.detailedDescription) == false && undefined !== pobjSysSocialRelationsEN.detailedDescription && tzDataType.isString(pobjSysSocialRelationsEN.detailedDescription) === false)
{
 throw new Error("(errid:Watl000417)字段[详细说明(detailedDescription)]的值:[$(pobjSysSocialRelationsEN.detailedDescription)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.levelId) == false && undefined !== pobjSysSocialRelationsEN.levelId && tzDataType.isString(pobjSysSocialRelationsEN.levelId) === false)
{
 throw new Error("(errid:Watl000417)字段[级别Id(levelId)]的值:[$(pobjSysSocialRelationsEN.levelId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updUser) == false && undefined !== pobjSysSocialRelationsEN.updUser && tzDataType.isString(pobjSysSocialRelationsEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysSocialRelationsEN.updUser)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.updDate) == false && undefined !== pobjSysSocialRelationsEN.updDate && tzDataType.isString(pobjSysSocialRelationsEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysSocialRelationsEN.updDate)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.isSubmit && undefined !== pobjSysSocialRelationsEN.isSubmit && tzDataType.isBoolean(pobjSysSocialRelationsEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjSysSocialRelationsEN.isSubmit)], 非法,应该为布尔型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.okCount && undefined !== pobjSysSocialRelationsEN.okCount && tzDataType.isNumber(pobjSysSocialRelationsEN.okCount) === false)
{
 throw new Error("(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjSysSocialRelationsEN.okCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.citationCount && undefined !== pobjSysSocialRelationsEN.citationCount && tzDataType.isNumber(pobjSysSocialRelationsEN.citationCount) === false)
{
 throw new Error("(errid:Watl000417)字段[引用统计(citationCount)]的值:[$(pobjSysSocialRelationsEN.citationCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.versionCount && undefined !== pobjSysSocialRelationsEN.versionCount && tzDataType.isNumber(pobjSysSocialRelationsEN.versionCount) === false)
{
 throw new Error("(errid:Watl000417)字段[版本统计(versionCount)]的值:[$(pobjSysSocialRelationsEN.versionCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.idCurrEduCls) == false && undefined !== pobjSysSocialRelationsEN.idCurrEduCls && tzDataType.isString(pobjSysSocialRelationsEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysSocialRelationsEN.idCurrEduCls)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.memo) == false && undefined !== pobjSysSocialRelationsEN.memo && tzDataType.isString(pobjSysSocialRelationsEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysSocialRelationsEN.memo)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.appraiseCount && undefined !== pobjSysSocialRelationsEN.appraiseCount && tzDataType.isNumber(pobjSysSocialRelationsEN.appraiseCount) === false)
{
 throw new Error("(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjSysSocialRelationsEN.appraiseCount)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.score && undefined !== pobjSysSocialRelationsEN.score && tzDataType.isNumber(pobjSysSocialRelationsEN.score) === false)
{
 throw new Error("(errid:Watl000417)字段[评分(score)]的值:[$(pobjSysSocialRelationsEN.score)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.stuScore && undefined !== pobjSysSocialRelationsEN.stuScore && tzDataType.isNumber(pobjSysSocialRelationsEN.stuScore) === false)
{
 throw new Error("(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjSysSocialRelationsEN.stuScore)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.teaScore && undefined !== pobjSysSocialRelationsEN.teaScore && tzDataType.isNumber(pobjSysSocialRelationsEN.teaScore) === false)
{
 throw new Error("(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjSysSocialRelationsEN.teaScore)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.citationId) == false && undefined !== pobjSysSocialRelationsEN.citationId && tzDataType.isString(pobjSysSocialRelationsEN.citationId) === false)
{
 throw new Error("(errid:Watl000417)字段[引用Id(citationId)]的值:[$(pobjSysSocialRelationsEN.citationId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.createDate) == false && undefined !== pobjSysSocialRelationsEN.createDate && tzDataType.isString(pobjSysSocialRelationsEN.createDate) === false)
{
 throw new Error("(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjSysSocialRelationsEN.createDate)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.shareId) == false && undefined !== pobjSysSocialRelationsEN.shareId && tzDataType.isString(pobjSysSocialRelationsEN.shareId) === false)
{
 throw new Error("(errid:Watl000417)字段[分享Id(shareId)]的值:[$(pobjSysSocialRelationsEN.shareId)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjSysSocialRelationsEN.pdfContent) == false && undefined !== pobjSysSocialRelationsEN.pdfContent && tzDataType.isString(pobjSysSocialRelationsEN.pdfContent) === false)
{
 throw new Error("(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[$(pobjSysSocialRelationsEN.pdfContent)], 非法,应该为字符型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
if (null != pobjSysSocialRelationsEN.pdfPageNum && undefined !== pobjSysSocialRelationsEN.pdfPageNum && tzDataType.isNumber(pobjSysSocialRelationsEN.pdfPageNum) === false)
{
 throw new Error("(errid:Watl000417)字段[Pdf页码(pdfPageNum)]的值:[$(pobjSysSocialRelationsEN.pdfPageNum)], 非法,应该为数值型(In 社会关系表(SysSocialRelations))!(clsSysSocialRelationsBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysSocialRelations_GetJSONStrByObj (pobjSysSocialRelationsEN: clsSysSocialRelationsEN): string
{
pobjSysSocialRelationsEN.sfUpdFldSetStr = pobjSysSocialRelationsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSysSocialRelationsEN);
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
export  function SysSocialRelations_GetObjLstByJSONStr (strJSON: string): Array<clsSysSocialRelationsEN>
{
let arrSysSocialRelationsObjLst = new Array<clsSysSocialRelationsEN>();
if (strJSON === "")
{
return arrSysSocialRelationsObjLst;
}
try
{
arrSysSocialRelationsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSysSocialRelationsObjLst;
}
return arrSysSocialRelationsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysSocialRelationsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SysSocialRelations_GetObjLstByJSONObjLst (arrSysSocialRelationsObjLstS: Array<clsSysSocialRelationsEN>): Array<clsSysSocialRelationsEN>
{
const arrSysSocialRelationsObjLst = new Array<clsSysSocialRelationsEN>();
for (const objInFor of arrSysSocialRelationsObjLstS) {
const obj1 = SysSocialRelations_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSysSocialRelationsObjLst.push(obj1);
}
return arrSysSocialRelationsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SysSocialRelations_GetObjByJSONStr (strJSON: string): clsSysSocialRelationsEN
{
let pobjSysSocialRelationsEN = new clsSysSocialRelationsEN();
if (strJSON === "")
{
return pobjSysSocialRelationsEN;
}
try
{
pobjSysSocialRelationsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSysSocialRelationsEN;
}
return pobjSysSocialRelationsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SysSocialRelations_GetCombineCondition(objSysSocialRelationsCond: clsSysSocialRelationsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_SocialId) == true)
{
const strComparisonOpSocialId:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_SocialId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_SocialId, objSysSocialRelationsCond.socialId, strComparisonOpSocialId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_FullName) == true)
{
const strComparisonOpFullName:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_FullName];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_FullName, objSysSocialRelationsCond.fullName, strComparisonOpFullName);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_Nationality) == true)
{
const strComparisonOpNationality:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_Nationality];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_Nationality, objSysSocialRelationsCond.nationality, strComparisonOpNationality);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_WorkUnit) == true)
{
const strComparisonOpWorkUnit:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_WorkUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_WorkUnit, objSysSocialRelationsCond.workUnit, strComparisonOpWorkUnit);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_Major) == true)
{
const strComparisonOpMajor:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_Major];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_Major, objSysSocialRelationsCond.major, strComparisonOpMajor);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_Achievement) == true)
{
const strComparisonOpAchievement:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_Achievement];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_Achievement, objSysSocialRelationsCond.achievement, strComparisonOpAchievement);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_DetailedDescription) == true)
{
const strComparisonOpDetailedDescription:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_DetailedDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_DetailedDescription, objSysSocialRelationsCond.detailedDescription, strComparisonOpDetailedDescription);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_LevelId, objSysSocialRelationsCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_UpdUser, objSysSocialRelationsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_UpdDate, objSysSocialRelationsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_IsSubmit) == true)
{
if (objSysSocialRelationsCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsSysSocialRelationsEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsSysSocialRelationsEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_OkCount, objSysSocialRelationsCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_CitationCount, objSysSocialRelationsCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_VersionCount, objSysSocialRelationsCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_IdCurrEduCls, objSysSocialRelationsCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_Memo, objSysSocialRelationsCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_AppraiseCount, objSysSocialRelationsCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_Score) == true)
{
const strComparisonOpScore:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_Score, objSysSocialRelationsCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_StuScore, objSysSocialRelationsCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_TeaScore, objSysSocialRelationsCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_CitationId) == true)
{
const strComparisonOpCitationId:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_CitationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_CitationId, objSysSocialRelationsCond.citationId, strComparisonOpCitationId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_CreateDate, objSysSocialRelationsCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_ShareId, objSysSocialRelationsCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsSysSocialRelationsEN.con_PdfContent, objSysSocialRelationsCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objSysSocialRelationsCond.dicFldComparisonOp, clsSysSocialRelationsEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objSysSocialRelationsCond.dicFldComparisonOp[clsSysSocialRelationsEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsSysSocialRelationsEN.con_PdfPageNum, objSysSocialRelationsCond.pdfPageNum, strComparisonOpPdfPageNum);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysSocialRelations(社会关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSocialId: 社会Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysSocialRelations_GetUniCondStr(objSysSocialRelationsEN: clsSysSocialRelationsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and SocialId = '{0}'", objSysSocialRelationsEN.socialId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--SysSocialRelations(社会关系表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSocialId: 社会Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function SysSocialRelations_GetUniCondStr4Update(objSysSocialRelationsEN: clsSysSocialRelationsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and SocialId <> '{0}'", objSysSocialRelationsEN.socialId);
 strWhereCond +=  Format(" and SocialId = '{0}'", objSysSocialRelationsEN.socialId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysSocialRelationsENS:源对象
 * @param objSysSocialRelationsENT:目标对象
*/
export  function SysSocialRelations_CopyObjTo(objSysSocialRelationsENS: clsSysSocialRelationsEN , objSysSocialRelationsENT: clsSysSocialRelationsEN ): void 
{
objSysSocialRelationsENT.socialId = objSysSocialRelationsENS.socialId; //社会Id
objSysSocialRelationsENT.fullName = objSysSocialRelationsENS.fullName; //姓名
objSysSocialRelationsENT.nationality = objSysSocialRelationsENS.nationality; //国籍
objSysSocialRelationsENT.workUnit = objSysSocialRelationsENS.workUnit; //工作单位
objSysSocialRelationsENT.major = objSysSocialRelationsENS.major; //专业
objSysSocialRelationsENT.achievement = objSysSocialRelationsENS.achievement; //成就
objSysSocialRelationsENT.detailedDescription = objSysSocialRelationsENS.detailedDescription; //详细说明
objSysSocialRelationsENT.levelId = objSysSocialRelationsENS.levelId; //级别Id
objSysSocialRelationsENT.updUser = objSysSocialRelationsENS.updUser; //修改人
objSysSocialRelationsENT.updDate = objSysSocialRelationsENS.updDate; //修改日期
objSysSocialRelationsENT.isSubmit = objSysSocialRelationsENS.isSubmit; //是否提交
objSysSocialRelationsENT.okCount = objSysSocialRelationsENS.okCount; //点赞统计
objSysSocialRelationsENT.citationCount = objSysSocialRelationsENS.citationCount; //引用统计
objSysSocialRelationsENT.versionCount = objSysSocialRelationsENS.versionCount; //版本统计
objSysSocialRelationsENT.idCurrEduCls = objSysSocialRelationsENS.idCurrEduCls; //教学班流水号
objSysSocialRelationsENT.memo = objSysSocialRelationsENS.memo; //备注
objSysSocialRelationsENT.appraiseCount = objSysSocialRelationsENS.appraiseCount; //评论数
objSysSocialRelationsENT.score = objSysSocialRelationsENS.score; //评分
objSysSocialRelationsENT.stuScore = objSysSocialRelationsENS.stuScore; //学生平均分
objSysSocialRelationsENT.teaScore = objSysSocialRelationsENS.teaScore; //教师评分
objSysSocialRelationsENT.citationId = objSysSocialRelationsENS.citationId; //引用Id
objSysSocialRelationsENT.createDate = objSysSocialRelationsENS.createDate; //建立日期
objSysSocialRelationsENT.shareId = objSysSocialRelationsENS.shareId; //分享Id
objSysSocialRelationsENT.pdfContent = objSysSocialRelationsENS.pdfContent; //Pdf内容
objSysSocialRelationsENT.pdfPageNum = objSysSocialRelationsENS.pdfPageNum; //Pdf页码
objSysSocialRelationsENT.sfUpdFldSetStr = objSysSocialRelationsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysSocialRelationsENS:源对象
 * @param objSysSocialRelationsENT:目标对象
*/
export  function SysSocialRelations_GetObjFromJsonObj(objSysSocialRelationsENS: clsSysSocialRelationsEN): clsSysSocialRelationsEN 
{
 const objSysSocialRelationsENT: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
ObjectAssign(objSysSocialRelationsENT, objSysSocialRelationsENS);
 return objSysSocialRelationsENT;
}