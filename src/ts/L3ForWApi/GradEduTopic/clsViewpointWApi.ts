
 /**
 * 类名:clsViewpointWApi
 * 表名:Viewpoint(01120542)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:36
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
 * 观点表(Viewpoint)
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
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsViewpointEN } from "@/ts/L0Entity/GradEduTopic/clsViewpointEN";
import { vViewpoint_ReFreshThisCache } from "@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const viewpoint_Controller = "ViewpointApi";
 export const viewpoint_ConstructorName = "viewpoint";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewpointId:关键字
 * @returns 对象
 **/
export  async function Viewpoint_GetObjByViewpointIdAsync(strViewpointId: string): Promise<clsViewpointEN|null>  
{
const strThisFuncName = "GetObjByViewpointIdAsync";

if (IsNullOrEmpty(strViewpointId) == true)
{
  const strMsg = Format("参数:[strViewpointId]不能为空!(In clsViewpointWApi.GetObjByViewpointIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strViewpointId.length != 8)
{
const strMsg = Format("缓存分类变量:[strViewpointId]的长度:[{0}]不正确!(clsViewpointWApi.GetObjByViewpointIdAsync)", strViewpointId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByViewpointId";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strViewpointId,
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
const objViewpoint = Viewpoint_GetObjFromJsonObj(returnObj);
return objViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param strViewpointId:所给的关键字
 * @returns 对象
*/
export  async function Viewpoint_GetObjByViewpointIdCache(strViewpointId:string,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByViewpointIdCache";

if (IsNullOrEmpty(strViewpointId) == true)
{
  const strMsg = Format("参数:[strViewpointId]不能为空!(In clsViewpointWApi.GetObjByViewpointIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strViewpointId.length != 8)
{
const strMsg = Format("缓存分类变量:[strViewpointId]的长度:[{0}]不正确!(clsViewpointWApi.GetObjByViewpointIdCache)", strViewpointId.length);
console.error(strMsg);
throw (strMsg);
}
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
try
{
const arrViewpointSel = arrViewpointObjLstCache.filter(x => 
 x.viewpointId == strViewpointId );
let objViewpoint: clsViewpointEN;
if (arrViewpointSel.length > 0)
{
objViewpoint = arrViewpointSel[0];
return objViewpoint;
}
else
{
if (bolTryAsyncOnce == true)
{
const objViewpointConst = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
if (objViewpointConst != null)
{
Viewpoint_ReFreshThisCache(strIdCurrEduCls);
return objViewpointConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strViewpointId, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewpointId:所给的关键字
 * @returns 对象
*/
export  async function Viewpoint_GetObjByViewpointIdlocalStorage(strViewpointId: string) {
const strThisFuncName = "GetObjByViewpointIdlocalStorage";

if (IsNullOrEmpty(strViewpointId) == true)
{
  const strMsg = Format("参数:[strViewpointId]不能为空!(In clsViewpointWApi.GetObjByViewpointIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strViewpointId.length != 8)
{
const strMsg = Format("缓存分类变量:[strViewpointId]的长度:[{0}]不正确!(clsViewpointWApi.GetObjByViewpointIdlocalStorage)", strViewpointId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strViewpointId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objViewpointCache: clsViewpointEN = JSON.parse(strTempObj);
return objViewpointCache;
}
try
{
const objViewpoint = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
if (objViewpoint != null)
{
localStorage.setItem(strKey, JSON.stringify(objViewpoint));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objViewpoint;
}
return objViewpoint;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strViewpointId, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewpoint:所给的对象
 * @returns 对象
*/
export  async function Viewpoint_UpdateObjInLstCache(objViewpoint: clsViewpointEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
const obj = arrViewpointObjLstCache.find(x => x.viewpointId == objViewpoint.viewpointId);
if (obj != null)
{
objViewpoint.viewpointId = obj.viewpointId;
ObjectAssign( obj, objViewpoint);
}
else
{
arrViewpointObjLstCache.push(objViewpoint);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewpointId:所给的关键字
 * @returns 对象
*/
export  async function Viewpoint_GetNameByViewpointIdCache(strViewpointId: string,strIdCurrEduCls: string) {

if (IsNullOrEmpty(strViewpointId) == true)
{
  const strMsg = Format("参数:[strViewpointId]不能为空!(In clsViewpointWApi.GetNameByViewpointIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strViewpointId.length != 8)
{
const strMsg = Format("缓存分类变量:[strViewpointId]的长度:[{0}]不正确!(clsViewpointWApi.GetNameByViewpointIdCache)", strViewpointId.length);
console.error(strMsg);
throw (strMsg);
}
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrViewpointObjLstCache == null) return "";
try
{
const arrViewpointSel = arrViewpointObjLstCache.filter(x => 
 x.viewpointId == strViewpointId );
let objViewpoint: clsViewpointEN;
if (arrViewpointSel.length > 0)
{
objViewpoint = arrViewpointSel[0];
return objViewpoint.viewpointName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strViewpointId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

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
export  async function Viewpoint_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsViewpointWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsViewpointWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsViewpointEN.con_ViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsViewpointEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsViewpointEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strViewpointId = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objViewpoint = await Viewpoint_GetObjByViewpointIdCache(strViewpointId , strIdCurrEduClsClassfy);
if (objViewpoint == null) return "";
if (objViewpoint.GetFldValue(strOutFldName) == null) return "";
return objViewpoint.GetFldValue(strOutFldName).toString();
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
export  function Viewpoint_SortFunDefa(a:clsViewpointEN , b:clsViewpointEN): number 
{
return a.viewpointId.localeCompare(b.viewpointId);
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
export  function Viewpoint_SortFunDefa2Fld(a:clsViewpointEN , b:clsViewpointEN): number 
{
if (a.viewpointName == b.viewpointName) return a.viewpointContent.localeCompare(b.viewpointContent);
else return a.viewpointName.localeCompare(b.viewpointName);
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
export  function Viewpoint_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsViewpointEN.con_ViewpointId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.viewpointId.localeCompare(b.viewpointId);
}
case clsViewpointEN.con_ViewpointName:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.viewpointName == null) return -1;
if (b.viewpointName == null) return 1;
return a.viewpointName.localeCompare(b.viewpointName);
}
case clsViewpointEN.con_ViewpointContent:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.viewpointContent == null) return -1;
if (b.viewpointContent == null) return 1;
return a.viewpointContent.localeCompare(b.viewpointContent);
}
case clsViewpointEN.con_ViewpointTypeId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.viewpointTypeId == null) return -1;
if (b.viewpointTypeId == null) return 1;
return a.viewpointTypeId.localeCompare(b.viewpointTypeId);
}
case clsViewpointEN.con_Reason:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.reason == null) return -1;
if (b.reason == null) return 1;
return a.reason.localeCompare(b.reason);
}
case clsViewpointEN.con_Source:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.source == null) return -1;
if (b.source == null) return 1;
return a.source.localeCompare(b.source);
}
case clsViewpointEN.con_VPProposePeople:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.vPProposePeople == null) return -1;
if (b.vPProposePeople == null) return 1;
return a.vPProposePeople.localeCompare(b.vPProposePeople);
}
case clsViewpointEN.con_IsSubmit:
return (a: clsViewpointEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsViewpointEN.con_UserTypeId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.userTypeId == null) return -1;
if (b.userTypeId == null) return 1;
return a.userTypeId.localeCompare(b.userTypeId);
}
case clsViewpointEN.con_CitationId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.citationId == null) return -1;
if (b.citationId == null) return 1;
return a.citationId.localeCompare(b.citationId);
}
case clsViewpointEN.con_AppraiseCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsViewpointEN.con_OkCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.okCount-b.okCount;
}
case clsViewpointEN.con_Score:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.score-b.score;
}
case clsViewpointEN.con_StuScore:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.stuScore-b.stuScore;
}
case clsViewpointEN.con_TeaScore:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.teaScore-b.teaScore;
}
case clsViewpointEN.con_PdfContent:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsViewpointEN.con_PdfPageNum:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsViewpointEN.con_CitationCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.citationCount-b.citationCount;
}
case clsViewpointEN.con_VersionCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return a.versionCount-b.versionCount;
}
case clsViewpointEN.con_CreateDate:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsViewpointEN.con_ShareId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsViewpointEN.con_IsRecommend:
return (a: clsViewpointEN) => {
if (a.isRecommend == true) return 1;
else return -1
}
case clsViewpointEN.con_IdCurrEduCls:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsViewpointEN.con_CourseId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsViewpointEN.con_UpdUser:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsViewpointEN.con_UpdDate:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsViewpointEN.con_Memo:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Viewpoint]中不存在!(in ${ viewpoint_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsViewpointEN.con_ViewpointId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.viewpointId.localeCompare(a.viewpointId);
}
case clsViewpointEN.con_ViewpointName:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.viewpointName == null) return -1;
if (a.viewpointName == null) return 1;
return b.viewpointName.localeCompare(a.viewpointName);
}
case clsViewpointEN.con_ViewpointContent:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.viewpointContent == null) return -1;
if (a.viewpointContent == null) return 1;
return b.viewpointContent.localeCompare(a.viewpointContent);
}
case clsViewpointEN.con_ViewpointTypeId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.viewpointTypeId == null) return -1;
if (a.viewpointTypeId == null) return 1;
return b.viewpointTypeId.localeCompare(a.viewpointTypeId);
}
case clsViewpointEN.con_Reason:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.reason == null) return -1;
if (a.reason == null) return 1;
return b.reason.localeCompare(a.reason);
}
case clsViewpointEN.con_Source:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.source == null) return -1;
if (a.source == null) return 1;
return b.source.localeCompare(a.source);
}
case clsViewpointEN.con_VPProposePeople:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.vPProposePeople == null) return -1;
if (a.vPProposePeople == null) return 1;
return b.vPProposePeople.localeCompare(a.vPProposePeople);
}
case clsViewpointEN.con_IsSubmit:
return (b: clsViewpointEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsViewpointEN.con_UserTypeId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.userTypeId == null) return -1;
if (a.userTypeId == null) return 1;
return b.userTypeId.localeCompare(a.userTypeId);
}
case clsViewpointEN.con_CitationId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.citationId == null) return -1;
if (a.citationId == null) return 1;
return b.citationId.localeCompare(a.citationId);
}
case clsViewpointEN.con_AppraiseCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsViewpointEN.con_OkCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.okCount-a.okCount;
}
case clsViewpointEN.con_Score:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.score-a.score;
}
case clsViewpointEN.con_StuScore:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.stuScore-a.stuScore;
}
case clsViewpointEN.con_TeaScore:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.teaScore-a.teaScore;
}
case clsViewpointEN.con_PdfContent:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsViewpointEN.con_PdfPageNum:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsViewpointEN.con_CitationCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.citationCount-a.citationCount;
}
case clsViewpointEN.con_VersionCount:
return (a: clsViewpointEN, b: clsViewpointEN) => {
return b.versionCount-a.versionCount;
}
case clsViewpointEN.con_CreateDate:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsViewpointEN.con_ShareId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsViewpointEN.con_IsRecommend:
return (b: clsViewpointEN) => {
if (b.isRecommend == true) return 1;
else return -1
}
case clsViewpointEN.con_IdCurrEduCls:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsViewpointEN.con_CourseId:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsViewpointEN.con_UpdUser:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsViewpointEN.con_UpdDate:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsViewpointEN.con_Memo:
return (a: clsViewpointEN, b: clsViewpointEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Viewpoint]中不存在!(in ${ viewpoint_ConstructorName}.${ strThisFuncName})`;
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
export  async function Viewpoint_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsViewpointEN.con_ViewpointId:
return (obj: clsViewpointEN) => {
return obj.viewpointId === value;
}
case clsViewpointEN.con_ViewpointName:
return (obj: clsViewpointEN) => {
return obj.viewpointName === value;
}
case clsViewpointEN.con_ViewpointContent:
return (obj: clsViewpointEN) => {
return obj.viewpointContent === value;
}
case clsViewpointEN.con_ViewpointTypeId:
return (obj: clsViewpointEN) => {
return obj.viewpointTypeId === value;
}
case clsViewpointEN.con_Reason:
return (obj: clsViewpointEN) => {
return obj.reason === value;
}
case clsViewpointEN.con_Source:
return (obj: clsViewpointEN) => {
return obj.source === value;
}
case clsViewpointEN.con_VPProposePeople:
return (obj: clsViewpointEN) => {
return obj.vPProposePeople === value;
}
case clsViewpointEN.con_IsSubmit:
return (obj: clsViewpointEN) => {
return obj.isSubmit === value;
}
case clsViewpointEN.con_UserTypeId:
return (obj: clsViewpointEN) => {
return obj.userTypeId === value;
}
case clsViewpointEN.con_CitationId:
return (obj: clsViewpointEN) => {
return obj.citationId === value;
}
case clsViewpointEN.con_AppraiseCount:
return (obj: clsViewpointEN) => {
return obj.appraiseCount === value;
}
case clsViewpointEN.con_OkCount:
return (obj: clsViewpointEN) => {
return obj.okCount === value;
}
case clsViewpointEN.con_Score:
return (obj: clsViewpointEN) => {
return obj.score === value;
}
case clsViewpointEN.con_StuScore:
return (obj: clsViewpointEN) => {
return obj.stuScore === value;
}
case clsViewpointEN.con_TeaScore:
return (obj: clsViewpointEN) => {
return obj.teaScore === value;
}
case clsViewpointEN.con_PdfContent:
return (obj: clsViewpointEN) => {
return obj.pdfContent === value;
}
case clsViewpointEN.con_PdfPageNum:
return (obj: clsViewpointEN) => {
return obj.pdfPageNum === value;
}
case clsViewpointEN.con_CitationCount:
return (obj: clsViewpointEN) => {
return obj.citationCount === value;
}
case clsViewpointEN.con_VersionCount:
return (obj: clsViewpointEN) => {
return obj.versionCount === value;
}
case clsViewpointEN.con_CreateDate:
return (obj: clsViewpointEN) => {
return obj.createDate === value;
}
case clsViewpointEN.con_ShareId:
return (obj: clsViewpointEN) => {
return obj.shareId === value;
}
case clsViewpointEN.con_IsRecommend:
return (obj: clsViewpointEN) => {
return obj.isRecommend === value;
}
case clsViewpointEN.con_IdCurrEduCls:
return (obj: clsViewpointEN) => {
return obj.idCurrEduCls === value;
}
case clsViewpointEN.con_CourseId:
return (obj: clsViewpointEN) => {
return obj.courseId === value;
}
case clsViewpointEN.con_UpdUser:
return (obj: clsViewpointEN) => {
return obj.updUser === value;
}
case clsViewpointEN.con_UpdDate:
return (obj: clsViewpointEN) => {
return obj.updDate === value;
}
case clsViewpointEN.con_Memo:
return (obj: clsViewpointEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Viewpoint]中不存在!(in ${ viewpoint_ConstructorName}.${ strThisFuncName})`;
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
export  async function Viewpoint_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsViewpointWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsViewpointWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsViewpointEN.con_ViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrViewpoint = await Viewpoint_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrViewpoint == null) return [];
let arrViewpointSel = arrViewpoint;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrViewpointSel = arrViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrViewpointSel.length == 0) return [];
return arrViewpointSel.map(x=>x.viewpointId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Viewpoint_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetFirstObjAsync(strWhereCond: string): Promise<clsViewpointEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const objViewpoint = Viewpoint_GetObjFromJsonObj(returnObj);
return objViewpoint;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsViewpointEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsViewpointEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrViewpointExObjLstCache: Array<clsViewpointEN> = CacheHelper.Get(strKey);
const arrViewpointObjLstT = Viewpoint_GetObjLstByJSONObjLst(arrViewpointExObjLstCache);
return arrViewpointObjLstT;
}
try
{
const arrViewpointExObjLst = await Viewpoint_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrViewpointExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrViewpointExObjLst.length);
console.log(strInfo);
return arrViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Viewpoint_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsViewpointEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsViewpointEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsViewpointEN.CacheAddiCondition);
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
const arrViewpointExObjLstCache: Array<clsViewpointEN> = JSON.parse(strTempObjLst);
const arrViewpointObjLstT = Viewpoint_GetObjLstByJSONObjLst(arrViewpointExObjLstCache);
return arrViewpointObjLstT;
}
try
{
const arrViewpointExObjLst = await Viewpoint_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrViewpointExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrViewpointExObjLst.length);
console.log(strInfo);
return arrViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Viewpoint_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrViewpointObjLstCache: Array<clsViewpointEN> = JSON.parse(strTempObjLst);
return arrViewpointObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function Viewpoint_GetObjLstAsync(strWhereCond: string): Promise<Array<clsViewpointEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Viewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsViewpointEN.WhereFormat) == false)
{
strWhereCond = Format(clsViewpointEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsViewpointEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsViewpointEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsViewpointEN.CacheAddiCondition);
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
const arrViewpointExObjLstCache: Array<clsViewpointEN> = JSON.parse(strTempObjLst);
const arrViewpointObjLstT = Viewpoint_GetObjLstByJSONObjLst(arrViewpointExObjLstCache);
return arrViewpointObjLstT;
}
try
{
const arrViewpointExObjLst = await Viewpoint_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrViewpointExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrViewpointExObjLst.length);
console.log(strInfo);
return arrViewpointExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Viewpoint_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrViewpointObjLstCache: Array<clsViewpointEN> = JSON.parse(strTempObjLst);
return arrViewpointObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Viewpoint_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsViewpointEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsViewpointWApi.Viewpoint_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsViewpointWApi.Viewpoint_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrViewpointObjLstCache;
switch (clsViewpointEN.CacheModeId)
{
case "04"://sessionStorage
arrViewpointObjLstCache = await Viewpoint_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrViewpointObjLstCache = await Viewpoint_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrViewpointObjLstCache = await Viewpoint_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrViewpointObjLstCache = await Viewpoint_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrViewpointObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function Viewpoint_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrViewpointObjLstCache;
switch (clsViewpointEN.CacheModeId)
{
case "04"://sessionStorage
arrViewpointObjLstCache = await Viewpoint_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrViewpointObjLstCache = await Viewpoint_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrViewpointObjLstCache = null;
break;
default:
arrViewpointObjLstCache = null;
break;
}
return arrViewpointObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewpointIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function Viewpoint_GetSubObjLstCache(objViewpointCond: clsViewpointEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
let arrViewpointSel = arrViewpointObjLstCache;
if (objViewpointCond.sfFldComparisonOp == null || objViewpointCond.sfFldComparisonOp == "") return arrViewpointSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objViewpointCond.sfFldComparisonOp);
//console.log("clsViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrViewpointSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objViewpointCond), viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsViewpointEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewpointId:关键字列表
 * @returns 对象列表
 **/
export  async function Viewpoint_GetObjLstByViewpointIdLstAsync(arrViewpointId: Array<string>): Promise<Array<clsViewpointEN>>  
{
const strThisFuncName = "GetObjLstByViewpointIdLstAsync";
const strAction = "GetObjLstByViewpointIdLst";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewpointId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Viewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param arrstrViewpointIdLst:关键字列表
 * @returns 对象列表
*/
export  async function Viewpoint_GetObjLstByViewpointIdLstCache(arrViewpointIdLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByViewpointIdLstCache";
try
{
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
const arrViewpointSel = arrViewpointObjLstCache.filter(x => arrViewpointIdLst.indexOf(x.viewpointId)>-1);
return arrViewpointSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrViewpointIdLst.join(","), viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsViewpointEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Viewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsViewpointEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Viewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsViewpointEN>();
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrViewpointObjLstCache.length == 0) return arrViewpointObjLstCache;
let arrViewpointSel = arrViewpointObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objViewpointCond = new clsViewpointEN();
ObjectAssign(objViewpointCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrViewpointSel = arrViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrViewpointSel.length == 0) return arrViewpointSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrViewpointSel = arrViewpointSel.sort(Viewpoint_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrViewpointSel = arrViewpointSel.sort(objPagerPara.sortFun);
}
arrViewpointSel = arrViewpointSel.slice(intStart, intEnd);     
return arrViewpointSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsViewpointEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function Viewpoint_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsViewpointEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsViewpointEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", viewpoint_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Viewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param strViewpointId:关键字
 * @returns 获取删除的结果
 **/
export  async function Viewpoint_DelRecordAsync(strViewpointId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(viewpoint_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strViewpointId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param arrViewpointId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Viewpoint_DelViewpointsAsync(arrViewpointId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelViewpointsAsync";
const strAction = "DelViewpoints";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrViewpointId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_DelViewpointsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelViewpointsByCondAsync";
const strAction = "DelViewpointsByCond";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Viewpoint_AddNewRecordAsync(objViewpointEN: clsViewpointEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objViewpointEN);
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objViewpointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Viewpoint_AddNewRecordWithMaxIdAsync(objViewpointEN: clsViewpointEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objViewpointEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Viewpoint_AddNewRecordWithReturnKeyAsync(objViewpointEN: clsViewpointEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objViewpointEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Viewpoint_UpdateRecordAsync(objViewpointEN: clsViewpointEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objViewpointEN.sfUpdFldSetStr === undefined || objViewpointEN.sfUpdFldSetStr === null || objViewpointEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objViewpointEN.viewpointId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objViewpointEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Viewpoint_UpdateWithConditionAsync(objViewpointEN: clsViewpointEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objViewpointEN.sfUpdFldSetStr === undefined || objViewpointEN.sfUpdFldSetStr === null || objViewpointEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objViewpointEN.viewpointId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);
objViewpointEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objViewpointEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objstrViewpointIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function Viewpoint_IsExistRecordCache(objViewpointCond: clsViewpointEN,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrViewpointObjLstCache == null) return false;
let arrViewpointSel = arrViewpointObjLstCache;
if (objViewpointCond.sfFldComparisonOp == null || objViewpointCond.sfFldComparisonOp == "") return arrViewpointSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objViewpointCond.sfFldComparisonOp);
//console.log("clsViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrViewpointSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objViewpointCond), viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param strViewpointId:所给的关键字
 * @returns 对象
*/
export  async function Viewpoint_IsExistCache(strViewpointId:string,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrViewpointObjLstCache == null) return false;
try
{
const arrViewpointSel = arrViewpointObjLstCache.filter(x => x.viewpointId == strViewpointId);
if (arrViewpointSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strViewpointId, viewpoint_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strViewpointId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Viewpoint_IsExistAsync(strViewpointId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strViewpointId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
 * @param objViewpointCond:条件对象
 * @returns 对象列表记录数
*/
export  async function Viewpoint_GetRecCountByCondCache(objViewpointCond: clsViewpointEN ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrViewpointObjLstCache = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrViewpointObjLstCache == null) return 0;
let arrViewpointSel = arrViewpointObjLstCache;
if (objViewpointCond.sfFldComparisonOp == null || objViewpointCond.sfFldComparisonOp == "") return arrViewpointSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objViewpointCond.sfFldComparisonOp);
//console.log("clsViewpointWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objViewpointCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objViewpointCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrViewpointSel = arrViewpointSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrViewpointSel = arrViewpointSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrViewpointSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objViewpointCond), viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  async function Viewpoint_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(viewpoint_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, viewpoint_ConstructorName, strThisFuncName);
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
export  function Viewpoint_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function Viewpoint_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsViewpointWApi.clsViewpointWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsViewpointWApi.clsViewpointWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
switch (clsViewpointEN.CacheModeId)
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
vViewpoint_ReFreshThisCache(strIdCurrEduCls);
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function Viewpoint_ReFreshThisCache(strIdCurrEduCls: string):void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsViewpointEN._CurrTabName, strIdCurrEduCls);
switch (clsViewpointEN.CacheModeId)
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

 * @param strCourseId:
 * @param strIdCurrEduCls:
*/
export  async function Viewpoint_BindDdl_ViewpointIdByCourseIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsViewpointWApi.BindDdl_ViewpointIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsViewpointWApi.BindDdl_ViewpointIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsViewpointWApi.BindDdl_ViewpointIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsViewpointWApi.BindDdl_ViewpointIdByCourseIdInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_ViewpointIdByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ViewpointIdByCourseIdInDivCache");
let arrObjLstSel = await Viewpoint_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsViewpointEN.con_ViewpointId, clsViewpointEN.con_ViewpointName, "观点表");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Viewpoint_CheckPropertyNew(pobjViewpointEN: clsViewpointEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjViewpointEN.viewpointId) == false && GetStrLen(pobjViewpointEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000413)字段[观点Id(viewpointId)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.viewpointId)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointName) == false && GetStrLen(pobjViewpointEN.viewpointName) > 500)
{
 throw new Error("(errid:Watl000413)字段[观点名称(viewpointName)]的长度不能超过500(In 观点表(Viewpoint))!值:$(pobjViewpointEN.viewpointName)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointTypeId) == false && GetStrLen(pobjViewpointEN.viewpointTypeId) > 4)
{
 throw new Error("(errid:Watl000413)字段[观点类型Id(viewpointTypeId)]的长度不能超过4(In 观点表(Viewpoint))!值:$(pobjViewpointEN.viewpointTypeId)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.source) == false && GetStrLen(pobjViewpointEN.source) > 500)
{
 throw new Error("(errid:Watl000413)字段[来源(source)]的长度不能超过500(In 观点表(Viewpoint))!值:$(pobjViewpointEN.source)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.vPProposePeople) == false && GetStrLen(pobjViewpointEN.vPProposePeople) > 50)
{
 throw new Error("(errid:Watl000413)字段[观点提出人(vPProposePeople)]的长度不能超过50(In 观点表(Viewpoint))!值:$(pobjViewpointEN.vPProposePeople)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.userTypeId) == false && GetStrLen(pobjViewpointEN.userTypeId) > 2)
{
 throw new Error("(errid:Watl000413)字段[用户类型Id(userTypeId)]的长度不能超过2(In 观点表(Viewpoint))!值:$(pobjViewpointEN.userTypeId)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.citationId) == false && GetStrLen(pobjViewpointEN.citationId) > 8)
{
 throw new Error("(errid:Watl000413)字段[引用Id(citationId)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.citationId)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.pdfContent) == false && GetStrLen(pobjViewpointEN.pdfContent) > 2000)
{
 throw new Error("(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 观点表(Viewpoint))!值:$(pobjViewpointEN.pdfContent)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.createDate) == false && GetStrLen(pobjViewpointEN.createDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 观点表(Viewpoint))!值:$(pobjViewpointEN.createDate)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.shareId) == false && GetStrLen(pobjViewpointEN.shareId) > 2)
{
 throw new Error("(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 观点表(Viewpoint))!值:$(pobjViewpointEN.shareId)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.idCurrEduCls) == false && GetStrLen(pobjViewpointEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.idCurrEduCls)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.courseId) == false && GetStrLen(pobjViewpointEN.courseId) > 8)
{
 throw new Error("(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.courseId)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.updUser) == false && GetStrLen(pobjViewpointEN.updUser) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 观点表(Viewpoint))!值:$(pobjViewpointEN.updUser)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.updDate) == false && GetStrLen(pobjViewpointEN.updDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 观点表(Viewpoint))!值:$(pobjViewpointEN.updDate)(clsViewpointBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjViewpointEN.memo) == false && GetStrLen(pobjViewpointEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 观点表(Viewpoint))!值:$(pobjViewpointEN.memo)(clsViewpointBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjViewpointEN.viewpointId) == false && undefined !== pobjViewpointEN.viewpointId && tzDataType.isString(pobjViewpointEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点Id(viewpointId)]的值:[$(pobjViewpointEN.viewpointId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointName) == false && undefined !== pobjViewpointEN.viewpointName && tzDataType.isString(pobjViewpointEN.viewpointName) === false)
{
 throw new Error("(errid:Watl000414)字段[观点名称(viewpointName)]的值:[$(pobjViewpointEN.viewpointName)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointContent) == false && undefined !== pobjViewpointEN.viewpointContent && tzDataType.isString(pobjViewpointEN.viewpointContent) === false)
{
 throw new Error("(errid:Watl000414)字段[观点内容(viewpointContent)]的值:[$(pobjViewpointEN.viewpointContent)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointTypeId) == false && undefined !== pobjViewpointEN.viewpointTypeId && tzDataType.isString(pobjViewpointEN.viewpointTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[观点类型Id(viewpointTypeId)]的值:[$(pobjViewpointEN.viewpointTypeId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.reason) == false && undefined !== pobjViewpointEN.reason && tzDataType.isString(pobjViewpointEN.reason) === false)
{
 throw new Error("(errid:Watl000414)字段[理由(reason)]的值:[$(pobjViewpointEN.reason)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.source) == false && undefined !== pobjViewpointEN.source && tzDataType.isString(pobjViewpointEN.source) === false)
{
 throw new Error("(errid:Watl000414)字段[来源(source)]的值:[$(pobjViewpointEN.source)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.vPProposePeople) == false && undefined !== pobjViewpointEN.vPProposePeople && tzDataType.isString(pobjViewpointEN.vPProposePeople) === false)
{
 throw new Error("(errid:Watl000414)字段[观点提出人(vPProposePeople)]的值:[$(pobjViewpointEN.vPProposePeople)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.isSubmit && undefined !== pobjViewpointEN.isSubmit && tzDataType.isBoolean(pobjViewpointEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjViewpointEN.isSubmit)], 非法,应该为布尔型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.userTypeId) == false && undefined !== pobjViewpointEN.userTypeId && tzDataType.isString(pobjViewpointEN.userTypeId) === false)
{
 throw new Error("(errid:Watl000414)字段[用户类型Id(userTypeId)]的值:[$(pobjViewpointEN.userTypeId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.citationId) == false && undefined !== pobjViewpointEN.citationId && tzDataType.isString(pobjViewpointEN.citationId) === false)
{
 throw new Error("(errid:Watl000414)字段[引用Id(citationId)]的值:[$(pobjViewpointEN.citationId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.appraiseCount && undefined !== pobjViewpointEN.appraiseCount && tzDataType.isNumber(pobjViewpointEN.appraiseCount) === false)
{
 throw new Error("(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjViewpointEN.appraiseCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.okCount && undefined !== pobjViewpointEN.okCount && tzDataType.isNumber(pobjViewpointEN.okCount) === false)
{
 throw new Error("(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjViewpointEN.okCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.score && undefined !== pobjViewpointEN.score && tzDataType.isNumber(pobjViewpointEN.score) === false)
{
 throw new Error("(errid:Watl000414)字段[评分(score)]的值:[$(pobjViewpointEN.score)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.stuScore && undefined !== pobjViewpointEN.stuScore && tzDataType.isNumber(pobjViewpointEN.stuScore) === false)
{
 throw new Error("(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjViewpointEN.stuScore)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.teaScore && undefined !== pobjViewpointEN.teaScore && tzDataType.isNumber(pobjViewpointEN.teaScore) === false)
{
 throw new Error("(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjViewpointEN.teaScore)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.pdfContent) == false && undefined !== pobjViewpointEN.pdfContent && tzDataType.isString(pobjViewpointEN.pdfContent) === false)
{
 throw new Error("(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[$(pobjViewpointEN.pdfContent)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.pdfPageNum && undefined !== pobjViewpointEN.pdfPageNum && tzDataType.isNumber(pobjViewpointEN.pdfPageNum) === false)
{
 throw new Error("(errid:Watl000414)字段[Pdf页码(pdfPageNum)]的值:[$(pobjViewpointEN.pdfPageNum)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.citationCount && undefined !== pobjViewpointEN.citationCount && tzDataType.isNumber(pobjViewpointEN.citationCount) === false)
{
 throw new Error("(errid:Watl000414)字段[引用统计(citationCount)]的值:[$(pobjViewpointEN.citationCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.versionCount && undefined !== pobjViewpointEN.versionCount && tzDataType.isNumber(pobjViewpointEN.versionCount) === false)
{
 throw new Error("(errid:Watl000414)字段[版本统计(versionCount)]的值:[$(pobjViewpointEN.versionCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.createDate) == false && undefined !== pobjViewpointEN.createDate && tzDataType.isString(pobjViewpointEN.createDate) === false)
{
 throw new Error("(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjViewpointEN.createDate)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.shareId) == false && undefined !== pobjViewpointEN.shareId && tzDataType.isString(pobjViewpointEN.shareId) === false)
{
 throw new Error("(errid:Watl000414)字段[分享Id(shareId)]的值:[$(pobjViewpointEN.shareId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (null != pobjViewpointEN.isRecommend && undefined !== pobjViewpointEN.isRecommend && tzDataType.isBoolean(pobjViewpointEN.isRecommend) === false)
{
 throw new Error("(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[$(pobjViewpointEN.isRecommend)], 非法,应该为布尔型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.idCurrEduCls) == false && undefined !== pobjViewpointEN.idCurrEduCls && tzDataType.isString(pobjViewpointEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjViewpointEN.idCurrEduCls)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.courseId) == false && undefined !== pobjViewpointEN.courseId && tzDataType.isString(pobjViewpointEN.courseId) === false)
{
 throw new Error("(errid:Watl000414)字段[课程Id(courseId)]的值:[$(pobjViewpointEN.courseId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.updUser) == false && undefined !== pobjViewpointEN.updUser && tzDataType.isString(pobjViewpointEN.updUser) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjViewpointEN.updUser)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.updDate) == false && undefined !== pobjViewpointEN.updDate && tzDataType.isString(pobjViewpointEN.updDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewpointEN.updDate)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjViewpointEN.memo) == false && undefined !== pobjViewpointEN.memo && tzDataType.isString(pobjViewpointEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjViewpointEN.memo)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Viewpoint_CheckProperty4Update(pobjViewpointEN: clsViewpointEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjViewpointEN.viewpointId) == false && GetStrLen(pobjViewpointEN.viewpointId) > 8)
{
 throw new Error("(errid:Watl000416)字段[观点Id(viewpointId)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.viewpointId)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointName) == false && GetStrLen(pobjViewpointEN.viewpointName) > 500)
{
 throw new Error("(errid:Watl000416)字段[观点名称(viewpointName)]的长度不能超过500(In 观点表(Viewpoint))!值:$(pobjViewpointEN.viewpointName)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointTypeId) == false && GetStrLen(pobjViewpointEN.viewpointTypeId) > 4)
{
 throw new Error("(errid:Watl000416)字段[观点类型Id(viewpointTypeId)]的长度不能超过4(In 观点表(Viewpoint))!值:$(pobjViewpointEN.viewpointTypeId)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.source) == false && GetStrLen(pobjViewpointEN.source) > 500)
{
 throw new Error("(errid:Watl000416)字段[来源(source)]的长度不能超过500(In 观点表(Viewpoint))!值:$(pobjViewpointEN.source)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.vPProposePeople) == false && GetStrLen(pobjViewpointEN.vPProposePeople) > 50)
{
 throw new Error("(errid:Watl000416)字段[观点提出人(vPProposePeople)]的长度不能超过50(In 观点表(Viewpoint))!值:$(pobjViewpointEN.vPProposePeople)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.userTypeId) == false && GetStrLen(pobjViewpointEN.userTypeId) > 2)
{
 throw new Error("(errid:Watl000416)字段[用户类型Id(userTypeId)]的长度不能超过2(In 观点表(Viewpoint))!值:$(pobjViewpointEN.userTypeId)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.citationId) == false && GetStrLen(pobjViewpointEN.citationId) > 8)
{
 throw new Error("(errid:Watl000416)字段[引用Id(citationId)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.citationId)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.pdfContent) == false && GetStrLen(pobjViewpointEN.pdfContent) > 2000)
{
 throw new Error("(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 观点表(Viewpoint))!值:$(pobjViewpointEN.pdfContent)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.createDate) == false && GetStrLen(pobjViewpointEN.createDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 观点表(Viewpoint))!值:$(pobjViewpointEN.createDate)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.shareId) == false && GetStrLen(pobjViewpointEN.shareId) > 2)
{
 throw new Error("(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 观点表(Viewpoint))!值:$(pobjViewpointEN.shareId)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.idCurrEduCls) == false && GetStrLen(pobjViewpointEN.idCurrEduCls) > 8)
{
 throw new Error("(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.idCurrEduCls)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.courseId) == false && GetStrLen(pobjViewpointEN.courseId) > 8)
{
 throw new Error("(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 观点表(Viewpoint))!值:$(pobjViewpointEN.courseId)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.updUser) == false && GetStrLen(pobjViewpointEN.updUser) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 观点表(Viewpoint))!值:$(pobjViewpointEN.updUser)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.updDate) == false && GetStrLen(pobjViewpointEN.updDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 观点表(Viewpoint))!值:$(pobjViewpointEN.updDate)(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.memo) == false && GetStrLen(pobjViewpointEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 观点表(Viewpoint))!值:$(pobjViewpointEN.memo)(clsViewpointBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjViewpointEN.viewpointId) == false && undefined !== pobjViewpointEN.viewpointId && tzDataType.isString(pobjViewpointEN.viewpointId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点Id(viewpointId)]的值:[$(pobjViewpointEN.viewpointId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointName) == false && undefined !== pobjViewpointEN.viewpointName && tzDataType.isString(pobjViewpointEN.viewpointName) === false)
{
 throw new Error("(errid:Watl000417)字段[观点名称(viewpointName)]的值:[$(pobjViewpointEN.viewpointName)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointContent) == false && undefined !== pobjViewpointEN.viewpointContent && tzDataType.isString(pobjViewpointEN.viewpointContent) === false)
{
 throw new Error("(errid:Watl000417)字段[观点内容(viewpointContent)]的值:[$(pobjViewpointEN.viewpointContent)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.viewpointTypeId) == false && undefined !== pobjViewpointEN.viewpointTypeId && tzDataType.isString(pobjViewpointEN.viewpointTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[观点类型Id(viewpointTypeId)]的值:[$(pobjViewpointEN.viewpointTypeId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.reason) == false && undefined !== pobjViewpointEN.reason && tzDataType.isString(pobjViewpointEN.reason) === false)
{
 throw new Error("(errid:Watl000417)字段[理由(reason)]的值:[$(pobjViewpointEN.reason)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.source) == false && undefined !== pobjViewpointEN.source && tzDataType.isString(pobjViewpointEN.source) === false)
{
 throw new Error("(errid:Watl000417)字段[来源(source)]的值:[$(pobjViewpointEN.source)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.vPProposePeople) == false && undefined !== pobjViewpointEN.vPProposePeople && tzDataType.isString(pobjViewpointEN.vPProposePeople) === false)
{
 throw new Error("(errid:Watl000417)字段[观点提出人(vPProposePeople)]的值:[$(pobjViewpointEN.vPProposePeople)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.isSubmit && undefined !== pobjViewpointEN.isSubmit && tzDataType.isBoolean(pobjViewpointEN.isSubmit) === false)
{
 throw new Error("(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjViewpointEN.isSubmit)], 非法,应该为布尔型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.userTypeId) == false && undefined !== pobjViewpointEN.userTypeId && tzDataType.isString(pobjViewpointEN.userTypeId) === false)
{
 throw new Error("(errid:Watl000417)字段[用户类型Id(userTypeId)]的值:[$(pobjViewpointEN.userTypeId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.citationId) == false && undefined !== pobjViewpointEN.citationId && tzDataType.isString(pobjViewpointEN.citationId) === false)
{
 throw new Error("(errid:Watl000417)字段[引用Id(citationId)]的值:[$(pobjViewpointEN.citationId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.appraiseCount && undefined !== pobjViewpointEN.appraiseCount && tzDataType.isNumber(pobjViewpointEN.appraiseCount) === false)
{
 throw new Error("(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjViewpointEN.appraiseCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.okCount && undefined !== pobjViewpointEN.okCount && tzDataType.isNumber(pobjViewpointEN.okCount) === false)
{
 throw new Error("(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjViewpointEN.okCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.score && undefined !== pobjViewpointEN.score && tzDataType.isNumber(pobjViewpointEN.score) === false)
{
 throw new Error("(errid:Watl000417)字段[评分(score)]的值:[$(pobjViewpointEN.score)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.stuScore && undefined !== pobjViewpointEN.stuScore && tzDataType.isNumber(pobjViewpointEN.stuScore) === false)
{
 throw new Error("(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjViewpointEN.stuScore)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.teaScore && undefined !== pobjViewpointEN.teaScore && tzDataType.isNumber(pobjViewpointEN.teaScore) === false)
{
 throw new Error("(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjViewpointEN.teaScore)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.pdfContent) == false && undefined !== pobjViewpointEN.pdfContent && tzDataType.isString(pobjViewpointEN.pdfContent) === false)
{
 throw new Error("(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[$(pobjViewpointEN.pdfContent)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.pdfPageNum && undefined !== pobjViewpointEN.pdfPageNum && tzDataType.isNumber(pobjViewpointEN.pdfPageNum) === false)
{
 throw new Error("(errid:Watl000417)字段[Pdf页码(pdfPageNum)]的值:[$(pobjViewpointEN.pdfPageNum)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.citationCount && undefined !== pobjViewpointEN.citationCount && tzDataType.isNumber(pobjViewpointEN.citationCount) === false)
{
 throw new Error("(errid:Watl000417)字段[引用统计(citationCount)]的值:[$(pobjViewpointEN.citationCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.versionCount && undefined !== pobjViewpointEN.versionCount && tzDataType.isNumber(pobjViewpointEN.versionCount) === false)
{
 throw new Error("(errid:Watl000417)字段[版本统计(versionCount)]的值:[$(pobjViewpointEN.versionCount)], 非法,应该为数值型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.createDate) == false && undefined !== pobjViewpointEN.createDate && tzDataType.isString(pobjViewpointEN.createDate) === false)
{
 throw new Error("(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjViewpointEN.createDate)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.shareId) == false && undefined !== pobjViewpointEN.shareId && tzDataType.isString(pobjViewpointEN.shareId) === false)
{
 throw new Error("(errid:Watl000417)字段[分享Id(shareId)]的值:[$(pobjViewpointEN.shareId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (null != pobjViewpointEN.isRecommend && undefined !== pobjViewpointEN.isRecommend && tzDataType.isBoolean(pobjViewpointEN.isRecommend) === false)
{
 throw new Error("(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[$(pobjViewpointEN.isRecommend)], 非法,应该为布尔型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.idCurrEduCls) == false && undefined !== pobjViewpointEN.idCurrEduCls && tzDataType.isString(pobjViewpointEN.idCurrEduCls) === false)
{
 throw new Error("(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjViewpointEN.idCurrEduCls)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.courseId) == false && undefined !== pobjViewpointEN.courseId && tzDataType.isString(pobjViewpointEN.courseId) === false)
{
 throw new Error("(errid:Watl000417)字段[课程Id(courseId)]的值:[$(pobjViewpointEN.courseId)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.updUser) == false && undefined !== pobjViewpointEN.updUser && tzDataType.isString(pobjViewpointEN.updUser) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjViewpointEN.updUser)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.updDate) == false && undefined !== pobjViewpointEN.updDate && tzDataType.isString(pobjViewpointEN.updDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewpointEN.updDate)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjViewpointEN.memo) == false && undefined !== pobjViewpointEN.memo && tzDataType.isString(pobjViewpointEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjViewpointEN.memo)], 非法,应该为字符型(In 观点表(Viewpoint))!(clsViewpointBL:CheckProperty4Update)");
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
export  function Viewpoint_GetJSONStrByObj (pobjViewpointEN: clsViewpointEN): string
{
pobjViewpointEN.sfUpdFldSetStr = pobjViewpointEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjViewpointEN);
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
export  function Viewpoint_GetObjLstByJSONStr (strJSON: string): Array<clsViewpointEN>
{
let arrViewpointObjLst = new Array<clsViewpointEN>();
if (strJSON === "")
{
return arrViewpointObjLst;
}
try
{
arrViewpointObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrViewpointObjLst;
}
return arrViewpointObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewpointObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Viewpoint_GetObjLstByJSONObjLst (arrViewpointObjLstS: Array<clsViewpointEN>): Array<clsViewpointEN>
{
const arrViewpointObjLst = new Array<clsViewpointEN>();
for (const objInFor of arrViewpointObjLstS) {
const obj1 = Viewpoint_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrViewpointObjLst.push(obj1);
}
return arrViewpointObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Viewpoint_GetObjByJSONStr (strJSON: string): clsViewpointEN
{
let pobjViewpointEN = new clsViewpointEN();
if (strJSON === "")
{
return pobjViewpointEN;
}
try
{
pobjViewpointEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjViewpointEN;
}
return pobjViewpointEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Viewpoint_GetCombineCondition(objViewpointCond: clsViewpointEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_ViewpointId) == true)
{
const strComparisonOpViewpointId:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_ViewpointId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_ViewpointId, objViewpointCond.viewpointId, strComparisonOpViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_ViewpointName) == true)
{
const strComparisonOpViewpointName:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_ViewpointName];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_ViewpointName, objViewpointCond.viewpointName, strComparisonOpViewpointName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_ViewpointTypeId) == true)
{
const strComparisonOpViewpointTypeId:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_ViewpointTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_ViewpointTypeId, objViewpointCond.viewpointTypeId, strComparisonOpViewpointTypeId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_Source) == true)
{
const strComparisonOpSource:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_Source];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_Source, objViewpointCond.source, strComparisonOpSource);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_VPProposePeople) == true)
{
const strComparisonOpVPProposePeople:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_VPProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_VPProposePeople, objViewpointCond.vPProposePeople, strComparisonOpVPProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_IsSubmit) == true)
{
if (objViewpointCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsViewpointEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsViewpointEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_UserTypeId, objViewpointCond.userTypeId, strComparisonOpUserTypeId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_CitationId) == true)
{
const strComparisonOpCitationId:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_CitationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_CitationId, objViewpointCond.citationId, strComparisonOpCitationId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_AppraiseCount, objViewpointCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_OkCount, objViewpointCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_Score) == true)
{
const strComparisonOpScore:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_Score, objViewpointCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_StuScore, objViewpointCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_TeaScore, objViewpointCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_PdfContent, objViewpointCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_PdfPageNum, objViewpointCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_CitationCount, objViewpointCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsViewpointEN.con_VersionCount, objViewpointCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_CreateDate, objViewpointCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_ShareId, objViewpointCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_IsRecommend) == true)
{
if (objViewpointCond.isRecommend == true)
{
strWhereCond += Format(" And {0} = '1'", clsViewpointEN.con_IsRecommend);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsViewpointEN.con_IsRecommend);
}
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_IdCurrEduCls, objViewpointCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_CourseId, objViewpointCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_UpdUser, objViewpointCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_UpdDate, objViewpointCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objViewpointCond.dicFldComparisonOp, clsViewpointEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objViewpointCond.dicFldComparisonOp[clsViewpointEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsViewpointEN.con_Memo, objViewpointCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Viewpoint(观点表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Viewpoint_GetUniCondStr(objViewpointEN: clsViewpointEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objViewpointEN.viewpointId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--Viewpoint(观点表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function Viewpoint_GetUniCondStr4Update(objViewpointEN: clsViewpointEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and ViewpointId <> '{0}'", objViewpointEN.viewpointId);
 strWhereCond +=  Format(" and ViewpointId = '{0}'", objViewpointEN.viewpointId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objViewpointENS:源对象
 * @param objViewpointENT:目标对象
*/
export  function Viewpoint_CopyObjTo(objViewpointENS: clsViewpointEN , objViewpointENT: clsViewpointEN ): void 
{
objViewpointENT.viewpointId = objViewpointENS.viewpointId; //观点Id
objViewpointENT.viewpointName = objViewpointENS.viewpointName; //观点名称
objViewpointENT.viewpointContent = objViewpointENS.viewpointContent; //观点内容
objViewpointENT.viewpointTypeId = objViewpointENS.viewpointTypeId; //观点类型Id
objViewpointENT.reason = objViewpointENS.reason; //理由
objViewpointENT.source = objViewpointENS.source; //来源
objViewpointENT.vPProposePeople = objViewpointENS.vPProposePeople; //观点提出人
objViewpointENT.isSubmit = objViewpointENS.isSubmit; //是否提交
objViewpointENT.userTypeId = objViewpointENS.userTypeId; //用户类型Id
objViewpointENT.citationId = objViewpointENS.citationId; //引用Id
objViewpointENT.appraiseCount = objViewpointENS.appraiseCount; //评论数
objViewpointENT.okCount = objViewpointENS.okCount; //点赞统计
objViewpointENT.score = objViewpointENS.score; //评分
objViewpointENT.stuScore = objViewpointENS.stuScore; //学生平均分
objViewpointENT.teaScore = objViewpointENS.teaScore; //教师评分
objViewpointENT.pdfContent = objViewpointENS.pdfContent; //Pdf内容
objViewpointENT.pdfPageNum = objViewpointENS.pdfPageNum; //Pdf页码
objViewpointENT.citationCount = objViewpointENS.citationCount; //引用统计
objViewpointENT.versionCount = objViewpointENS.versionCount; //版本统计
objViewpointENT.createDate = objViewpointENS.createDate; //建立日期
objViewpointENT.shareId = objViewpointENS.shareId; //分享Id
objViewpointENT.isRecommend = objViewpointENS.isRecommend; //是否推荐
objViewpointENT.idCurrEduCls = objViewpointENS.idCurrEduCls; //教学班流水号
objViewpointENT.courseId = objViewpointENS.courseId; //课程Id
objViewpointENT.updUser = objViewpointENS.updUser; //修改人
objViewpointENT.updDate = objViewpointENS.updDate; //修改日期
objViewpointENT.memo = objViewpointENS.memo; //备注
objViewpointENT.sfUpdFldSetStr = objViewpointENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewpointENS:源对象
 * @param objViewpointENT:目标对象
*/
export  function Viewpoint_GetObjFromJsonObj(objViewpointENS: clsViewpointEN): clsViewpointEN 
{
 const objViewpointENT: clsViewpointEN = new clsViewpointEN();
ObjectAssign(objViewpointENT, objViewpointENS);
 return objViewpointENT;
}