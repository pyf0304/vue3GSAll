
 /**
 * 类名:clsvRTSysSocialRelaWApi
 * 表名:vRTSysSocialRela(01120655)
 * 版本:2023.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/29 23:51:26
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
 * vRTSysSocialRela(vRTSysSocialRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月29日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj_V,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvRTSysSocialRelaEN } from "@/ts/L0Entity/GradEduTopic/clsvRTSysSocialRelaEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vRTSysSocialRela_Controller = "vRTSysSocialRelaApi";
 export const vRTSysSocialRela_ConstructorName = "vRTSysSocialRela";

 /**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export  function vRTSysSocialRela_SplitKeyLst(strKeyLst: string)  
{
const arrKey = strKeyLst.split('|');
if (arrKey.length != 2)
{
const strMsg = "请选择需要修改的记录!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
const objKeyLst = {
subViewpointId: arrKey[0],
topicId: arrKey[1],
};
if (IsNullOrEmpty(objKeyLst.subViewpointId)== true)
{
const strMsg = "关键字段(subViewpointId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
if (IsNullOrEmpty(objKeyLst.topicId)== true)
{
const strMsg = "关键字段(topicId)值不能为空!";
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
return objKeyLst;
}
 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngSubViewpointId:关键字
 * @returns 对象
 **/
export  async function vRTSysSocialRela_GetObjByKeyLstAsync(lngSubViewpointId: number,strTopicId: string): Promise<clsvRTSysSocialRelaEN|null>  
{
const strThisFuncName = "GetObjByKeyLstAsync";

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvRTSysSocialRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsvRTSysSocialRelaWApi.GetObjByKeyLstAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvRTSysSocialRelaWApi.GetObjByKeyLstAsync)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKeyLst";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSubViewpointId,
strTopicId,
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
const objvRTSysSocialRela = vRTSysSocialRela_GetObjFromJsonObj(returnObj);
return objvRTSysSocialRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
*/
export  async function vRTSysSocialRela_GetObjByKeyLstCache(lngSubViewpointId: number,strTopicId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByKeyLstCache";

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvRTSysSocialRelaWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsvRTSysSocialRelaWApi.GetObjByKeyLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvRTSysSocialRelaWApi.GetObjByKeyLstCache)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
try
{
const arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache.filter(x => 
 x.subViewpointId == lngSubViewpointId 
 && x.topicId == strTopicId );
let objvRTSysSocialRela: clsvRTSysSocialRelaEN;
if (arrvRTSysSocialRelaSel.length > 0)
{
objvRTSysSocialRela = arrvRTSysSocialRelaSel[0];
return objvRTSysSocialRela;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvRTSysSocialRelaConst = await vRTSysSocialRela_GetObjByKeyLstAsync(lngSubViewpointId,strTopicId);
if (objvRTSysSocialRelaConst != null)
{
vRTSysSocialRela_ReFreshThisCache();
return objvRTSysSocialRelaConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngSubViewpointId, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
*/
export  async function vRTSysSocialRela_GetObjByKeyLstlocalStorage(lngSubViewpointId: number,strTopicId: string) {
const strThisFuncName = "GetObjByKeyLstlocalStorage";

if (lngSubViewpointId == 0)
{
  const strMsg = Format("参数:[lngSubViewpointId]不能为空!(In clsvRTSysSocialRelaWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}

if (IsNullOrEmpty(strTopicId) == true)
{
  const strMsg = Format("参数:[strTopicId]不能为空!(In clsvRTSysSocialRelaWApi.GetObjByKeyLstlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strTopicId.length != 8)
{
const strMsg = Format("缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsvRTSysSocialRelaWApi.GetObjByKeyLstlocalStorage)", strTopicId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvRTSysSocialRelaEN._CurrTabName, lngSubViewpointId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvRTSysSocialRelaCache: clsvRTSysSocialRelaEN = JSON.parse(strTempObj);
return objvRTSysSocialRelaCache;
}
try
{
const objvRTSysSocialRela = await vRTSysSocialRela_GetObjByKeyLstAsync(lngSubViewpointId,strTopicId);
if (objvRTSysSocialRela != null)
{
localStorage.setItem(strKey, JSON.stringify(objvRTSysSocialRela));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvRTSysSocialRela;
}
return objvRTSysSocialRela;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngSubViewpointId, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_func( strInFldName1:string , strInFldName2:string  , strOutFldName:string ,  strInValue1:number , strInValue2:string  )
{
//const strThisFuncName = "func";

if (strInFldName1 != clsvRTSysSocialRelaEN.con_SubViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName1);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName2 != clsvRTSysSocialRelaEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName2);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvRTSysSocialRelaEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvRTSysSocialRelaEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngSubViewpointId = Number(strInValue1);
if (lngSubViewpointId == 0)
{
return "";
}
const strTopicId = Number(strInValue2);
if (lngSubViewpointId == 0)
{
return "";
}
const objvRTSysSocialRela = await vRTSysSocialRela_GetObjByKeyLstCache(lngSubViewpointId,strTopicId );
if (objvRTSysSocialRela == null) return "";
if (objvRTSysSocialRela.GetFldValue(strOutFldName) == null) return "";
return objvRTSysSocialRela.GetFldValue(strOutFldName).toString();
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
export  function vRTSysSocialRela_SortFunDefa(a:clsvRTSysSocialRelaEN , b:clsvRTSysSocialRelaEN): number 
{
return a.subViewpointId-b.subViewpointId;
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
export  function vRTSysSocialRela_SortFunDefa2Fld(a:clsvRTSysSocialRelaEN , b:clsvRTSysSocialRelaEN): number 
{
if (a.topicName == b.topicName) return a.topicContent.localeCompare(b.topicContent);
else return a.topicName.localeCompare(b.topicName);
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
export  function vRTSysSocialRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvRTSysSocialRelaEN.con_SubViewpointId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.subViewpointId-b.subViewpointId;
}
case clsvRTSysSocialRelaEN.con_TopicId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.topicId.localeCompare(b.topicId);
}
case clsvRTSysSocialRelaEN.con_TopicName:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.topicName == null) return -1;
if (b.topicName == null) return 1;
return a.topicName.localeCompare(b.topicName);
}
case clsvRTSysSocialRelaEN.con_TopicContent:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.topicContent == null) return -1;
if (b.topicContent == null) return 1;
return a.topicContent.localeCompare(b.topicContent);
}
case clsvRTSysSocialRelaEN.con_TopicProposePeople:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.topicProposePeople == null) return -1;
if (b.topicProposePeople == null) return 1;
return a.topicProposePeople.localeCompare(b.topicProposePeople);
}
case clsvRTSysSocialRelaEN.con_OrderNum:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.orderNum-b.orderNum;
}
case clsvRTSysSocialRelaEN.con_IdCurrEduCls:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvRTSysSocialRelaEN.con_FullName:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.fullName == null) return -1;
if (b.fullName == null) return 1;
return a.fullName.localeCompare(b.fullName);
}
case clsvRTSysSocialRelaEN.con_Nationality:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.nationality == null) return -1;
if (b.nationality == null) return 1;
return a.nationality.localeCompare(b.nationality);
}
case clsvRTSysSocialRelaEN.con_WorkUnit:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.workUnit == null) return -1;
if (b.workUnit == null) return 1;
return a.workUnit.localeCompare(b.workUnit);
}
case clsvRTSysSocialRelaEN.con_Major:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.major == null) return -1;
if (b.major == null) return 1;
return a.major.localeCompare(b.major);
}
case clsvRTSysSocialRelaEN.con_Achievement:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.achievement == null) return -1;
if (b.achievement == null) return 1;
return a.achievement.localeCompare(b.achievement);
}
case clsvRTSysSocialRelaEN.con_DetailedDescription:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.detailedDescription == null) return -1;
if (b.detailedDescription == null) return 1;
return a.detailedDescription.localeCompare(b.detailedDescription);
}
case clsvRTSysSocialRelaEN.con_LevelId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsvRTSysSocialRelaEN.con_LevelName:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.levelName == null) return -1;
if (b.levelName == null) return 1;
return a.levelName.localeCompare(b.levelName);
}
case clsvRTSysSocialRelaEN.con_SocialUpdUser:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.socialUpdUser == null) return -1;
if (b.socialUpdUser == null) return 1;
return a.socialUpdUser.localeCompare(b.socialUpdUser);
}
case clsvRTSysSocialRelaEN.con_SocialUpdDate:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.socialUpdDate == null) return -1;
if (b.socialUpdDate == null) return 1;
return a.socialUpdDate.localeCompare(b.socialUpdDate);
}
case clsvRTSysSocialRelaEN.con_IsSubmit:
return (a: clsvRTSysSocialRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvRTSysSocialRelaEN.con_OkCount:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.okCount-b.okCount;
}
case clsvRTSysSocialRelaEN.con_UpdDate:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvRTSysSocialRelaEN.con_UpdUser:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvRTSysSocialRelaEN.con_Memo:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvRTSysSocialRelaEN.con_AppraiseCount:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvRTSysSocialRelaEN.con_Score:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.score-b.score;
}
case clsvRTSysSocialRelaEN.con_StuScore:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.stuScore-b.stuScore;
}
case clsvRTSysSocialRelaEN.con_TeaScore:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return a.teaScore-b.teaScore;
}
case clsvRTSysSocialRelaEN.con_CreateDate:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvRTSysSocialRelaEN.con_ShareId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsvRTSysSocialRelaEN.con_PdfContent:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvRTSysSocialRelaEN.con_ClassificationId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.classificationId == null) return -1;
if (b.classificationId == null) return 1;
return a.classificationId.localeCompare(b.classificationId);
}
case clsvRTSysSocialRelaEN.con_PaperId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTSysSocialRela]中不存在!(in ${ vRTSysSocialRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvRTSysSocialRelaEN.con_SubViewpointId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.subViewpointId-a.subViewpointId;
}
case clsvRTSysSocialRelaEN.con_TopicId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.topicId.localeCompare(a.topicId);
}
case clsvRTSysSocialRelaEN.con_TopicName:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.topicName == null) return -1;
if (a.topicName == null) return 1;
return b.topicName.localeCompare(a.topicName);
}
case clsvRTSysSocialRelaEN.con_TopicContent:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.topicContent == null) return -1;
if (a.topicContent == null) return 1;
return b.topicContent.localeCompare(a.topicContent);
}
case clsvRTSysSocialRelaEN.con_TopicProposePeople:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.topicProposePeople == null) return -1;
if (a.topicProposePeople == null) return 1;
return b.topicProposePeople.localeCompare(a.topicProposePeople);
}
case clsvRTSysSocialRelaEN.con_OrderNum:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.orderNum-a.orderNum;
}
case clsvRTSysSocialRelaEN.con_IdCurrEduCls:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvRTSysSocialRelaEN.con_FullName:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.fullName == null) return -1;
if (a.fullName == null) return 1;
return b.fullName.localeCompare(a.fullName);
}
case clsvRTSysSocialRelaEN.con_Nationality:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.nationality == null) return -1;
if (a.nationality == null) return 1;
return b.nationality.localeCompare(a.nationality);
}
case clsvRTSysSocialRelaEN.con_WorkUnit:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.workUnit == null) return -1;
if (a.workUnit == null) return 1;
return b.workUnit.localeCompare(a.workUnit);
}
case clsvRTSysSocialRelaEN.con_Major:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.major == null) return -1;
if (a.major == null) return 1;
return b.major.localeCompare(a.major);
}
case clsvRTSysSocialRelaEN.con_Achievement:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.achievement == null) return -1;
if (a.achievement == null) return 1;
return b.achievement.localeCompare(a.achievement);
}
case clsvRTSysSocialRelaEN.con_DetailedDescription:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.detailedDescription == null) return -1;
if (a.detailedDescription == null) return 1;
return b.detailedDescription.localeCompare(a.detailedDescription);
}
case clsvRTSysSocialRelaEN.con_LevelId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsvRTSysSocialRelaEN.con_LevelName:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.levelName == null) return -1;
if (a.levelName == null) return 1;
return b.levelName.localeCompare(a.levelName);
}
case clsvRTSysSocialRelaEN.con_SocialUpdUser:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.socialUpdUser == null) return -1;
if (a.socialUpdUser == null) return 1;
return b.socialUpdUser.localeCompare(a.socialUpdUser);
}
case clsvRTSysSocialRelaEN.con_SocialUpdDate:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.socialUpdDate == null) return -1;
if (a.socialUpdDate == null) return 1;
return b.socialUpdDate.localeCompare(a.socialUpdDate);
}
case clsvRTSysSocialRelaEN.con_IsSubmit:
return (b: clsvRTSysSocialRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvRTSysSocialRelaEN.con_OkCount:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.okCount-a.okCount;
}
case clsvRTSysSocialRelaEN.con_UpdDate:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvRTSysSocialRelaEN.con_UpdUser:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvRTSysSocialRelaEN.con_Memo:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvRTSysSocialRelaEN.con_AppraiseCount:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvRTSysSocialRelaEN.con_Score:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.score-a.score;
}
case clsvRTSysSocialRelaEN.con_StuScore:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.stuScore-a.stuScore;
}
case clsvRTSysSocialRelaEN.con_TeaScore:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
return b.teaScore-a.teaScore;
}
case clsvRTSysSocialRelaEN.con_CreateDate:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvRTSysSocialRelaEN.con_ShareId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsvRTSysSocialRelaEN.con_PdfContent:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvRTSysSocialRelaEN.con_ClassificationId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.classificationId == null) return -1;
if (a.classificationId == null) return 1;
return b.classificationId.localeCompare(a.classificationId);
}
case clsvRTSysSocialRelaEN.con_PaperId:
return (a: clsvRTSysSocialRelaEN, b: clsvRTSysSocialRelaEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTSysSocialRela]中不存在!(in ${ vRTSysSocialRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vRTSysSocialRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvRTSysSocialRelaEN.con_SubViewpointId:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.subViewpointId === value;
}
case clsvRTSysSocialRelaEN.con_TopicId:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.topicId === value;
}
case clsvRTSysSocialRelaEN.con_TopicName:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.topicName === value;
}
case clsvRTSysSocialRelaEN.con_TopicContent:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.topicContent === value;
}
case clsvRTSysSocialRelaEN.con_TopicProposePeople:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.topicProposePeople === value;
}
case clsvRTSysSocialRelaEN.con_OrderNum:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.orderNum === value;
}
case clsvRTSysSocialRelaEN.con_IdCurrEduCls:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.idCurrEduCls === value;
}
case clsvRTSysSocialRelaEN.con_FullName:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.fullName === value;
}
case clsvRTSysSocialRelaEN.con_Nationality:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.nationality === value;
}
case clsvRTSysSocialRelaEN.con_WorkUnit:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.workUnit === value;
}
case clsvRTSysSocialRelaEN.con_Major:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.major === value;
}
case clsvRTSysSocialRelaEN.con_Achievement:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.achievement === value;
}
case clsvRTSysSocialRelaEN.con_DetailedDescription:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.detailedDescription === value;
}
case clsvRTSysSocialRelaEN.con_LevelId:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.levelId === value;
}
case clsvRTSysSocialRelaEN.con_LevelName:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.levelName === value;
}
case clsvRTSysSocialRelaEN.con_SocialUpdUser:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.socialUpdUser === value;
}
case clsvRTSysSocialRelaEN.con_SocialUpdDate:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.socialUpdDate === value;
}
case clsvRTSysSocialRelaEN.con_IsSubmit:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.isSubmit === value;
}
case clsvRTSysSocialRelaEN.con_OkCount:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.okCount === value;
}
case clsvRTSysSocialRelaEN.con_UpdDate:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.updDate === value;
}
case clsvRTSysSocialRelaEN.con_UpdUser:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.updUser === value;
}
case clsvRTSysSocialRelaEN.con_Memo:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.memo === value;
}
case clsvRTSysSocialRelaEN.con_AppraiseCount:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.appraiseCount === value;
}
case clsvRTSysSocialRelaEN.con_Score:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.score === value;
}
case clsvRTSysSocialRelaEN.con_StuScore:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.stuScore === value;
}
case clsvRTSysSocialRelaEN.con_TeaScore:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.teaScore === value;
}
case clsvRTSysSocialRelaEN.con_CreateDate:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.createDate === value;
}
case clsvRTSysSocialRelaEN.con_ShareId:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.shareId === value;
}
case clsvRTSysSocialRelaEN.con_PdfContent:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.pdfContent === value;
}
case clsvRTSysSocialRelaEN.con_ClassificationId:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.classificationId === value;
}
case clsvRTSysSocialRelaEN.con_PaperId:
return (obj: clsvRTSysSocialRelaEN) => {
return obj.paperId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vRTSysSocialRela]中不存在!(in ${ vRTSysSocialRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vRTSysSocialRela_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<number>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsvRTSysSocialRelaEN.con_SubViewpointId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (strInFldName == clsvRTSysSocialRelaEN.con_TopicId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvRTSysSocialRela = await vRTSysSocialRela_GetObjLstCache();
if (arrvRTSysSocialRela == null) return [];
let arrvRTSysSocialRelaSel = arrvRTSysSocialRela;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvRTSysSocialRelaSel.length == 0) return [];
return arrvRTSysSocialRela.map(x=>`${x.subViewpointId}|${x.topicId}`);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vRTSysSocialRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvRTSysSocialRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const objvRTSysSocialRela = vRTSysSocialRela_GetObjFromJsonObj(returnObj);
return objvRTSysSocialRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvRTSysSocialRelaEN._CurrTabName;
if (IsNullOrEmpty(clsvRTSysSocialRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvRTSysSocialRelaEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvRTSysSocialRelaExObjLstCache: Array<clsvRTSysSocialRelaEN> = CacheHelper.Get(strKey);
const arrvRTSysSocialRelaObjLstT = vRTSysSocialRela_GetObjLstByJSONObjLst(arrvRTSysSocialRelaExObjLstCache);
return arrvRTSysSocialRelaObjLstT;
}
try
{
const arrvRTSysSocialRelaExObjLst = await vRTSysSocialRela_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvRTSysSocialRelaExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvRTSysSocialRelaExObjLst.length);
console.log(strInfo);
return arrvRTSysSocialRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvRTSysSocialRelaEN._CurrTabName;
if (IsNullOrEmpty(clsvRTSysSocialRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvRTSysSocialRelaEN.CacheAddiCondition);
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
const arrvRTSysSocialRelaExObjLstCache: Array<clsvRTSysSocialRelaEN> = JSON.parse(strTempObjLst);
const arrvRTSysSocialRelaObjLstT = vRTSysSocialRela_GetObjLstByJSONObjLst(arrvRTSysSocialRelaExObjLstCache);
return arrvRTSysSocialRelaObjLstT;
}
try
{
const arrvRTSysSocialRelaExObjLst = await vRTSysSocialRela_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvRTSysSocialRelaExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvRTSysSocialRelaExObjLst.length);
console.log(strInfo);
return arrvRTSysSocialRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvRTSysSocialRelaEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvRTSysSocialRelaObjLstCache: Array<clsvRTSysSocialRelaEN> = JSON.parse(strTempObjLst);
return arrvRTSysSocialRelaObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvRTSysSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTSysSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvRTSysSocialRelaEN._CurrTabName;
if (IsNullOrEmpty(clsvRTSysSocialRelaEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvRTSysSocialRelaEN.CacheAddiCondition);
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
const arrvRTSysSocialRelaExObjLstCache: Array<clsvRTSysSocialRelaEN> = JSON.parse(strTempObjLst);
const arrvRTSysSocialRelaObjLstT = vRTSysSocialRela_GetObjLstByJSONObjLst(arrvRTSysSocialRelaExObjLstCache);
return arrvRTSysSocialRelaObjLstT;
}
try
{
const arrvRTSysSocialRelaExObjLst = await vRTSysSocialRela_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvRTSysSocialRelaExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvRTSysSocialRelaExObjLst.length);
console.log(strInfo);
return arrvRTSysSocialRelaExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvRTSysSocialRelaEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvRTSysSocialRelaObjLstCache: Array<clsvRTSysSocialRelaEN> = JSON.parse(strTempObjLst);
return arrvRTSysSocialRelaObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstCache(): Promise<Array<clsvRTSysSocialRelaEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrvRTSysSocialRelaObjLstCache;
switch (clsvRTSysSocialRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstClientCache();
break;
default:
arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstClientCache();
break;
}
return arrvRTSysSocialRelaObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvRTSysSocialRelaObjLstCache;
switch (clsvRTSysSocialRelaEN.CacheModeId)
{
case "04"://sessionStorage
arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrvRTSysSocialRelaObjLstCache = null;
break;
default:
arrvRTSysSocialRelaObjLstCache = null;
break;
}
return arrvRTSysSocialRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngSubViewpointIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vRTSysSocialRela_GetSubObjLstCache(objvRTSysSocialRelaCond: clsvRTSysSocialRelaEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
let arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache;
if (objvRTSysSocialRelaCond.sfFldComparisonOp == null || objvRTSysSocialRelaCond.sfFldComparisonOp == "") return arrvRTSysSocialRelaSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvRTSysSocialRelaCond.sfFldComparisonOp);
//console.log("clsvRTSysSocialRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvRTSysSocialRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTSysSocialRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvRTSysSocialRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvRTSysSocialRelaCond), vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvRTSysSocialRelaEN>();
}


 /// <summary>
 /// 把多个关键字段的值连接起来,用|连接(Join)--vRTSysSocialRela(vRTSysSocialRela)
 /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
 /// </summary>
 /// <param name = "objvRTSysSocialRelaEN">需要连接的对象</param>
 /// <returns></returns>
export  function vRTSysSocialRela_JoinByKeyLst(objvRTSysSocialRelaEN: clsvRTSysSocialRelaEN):string
{
//检测记录是否存在
const strResult = `${objvRTSysSocialRelaEN.subViewpointId};
|${objvRTSysSocialRelaEN.topicId}`;
return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrlngSubViewpointIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vRTSysSocialRela_GetObjLstByKeyLstsCache(arrSubViewpointIdLst: Array<number> ) {
const strThisFuncName = "GetObjLstByKeyLstsCache";
try
{
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
const arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache.filter(x => arrSubViewpointIdLst.indexOf(vRTSysSocialRela_JoinByKeyLst(x))>-1);
return arrvRTSysSocialRelaSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSubViewpointIdLst.join(","), vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvRTSysSocialRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTSysSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvRTSysSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTSysSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvRTSysSocialRelaEN>();
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
if (arrvRTSysSocialRelaObjLstCache.length == 0) return arrvRTSysSocialRelaObjLstCache;
let arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvRTSysSocialRelaCond = new clsvRTSysSocialRelaEN();
ObjectAssign(objvRTSysSocialRelaCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvRTSysSocialRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTSysSocialRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvRTSysSocialRelaSel.length == 0) return arrvRTSysSocialRelaSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.sort(vRTSysSocialRela_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.sort(objPagerPara.sortFun);
}
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.slice(intStart, intEnd);     
return arrvRTSysSocialRelaSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvRTSysSocialRelaEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vRTSysSocialRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvRTSysSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvRTSysSocialRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vRTSysSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
 * @param objlngSubViewpointIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vRTSysSocialRela_IsExistRecordCache(objvRTSysSocialRelaCond: clsvRTSysSocialRelaEN) {
const strThisFuncName = "IsExistRecordCache";
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
if (arrvRTSysSocialRelaObjLstCache == null) return false;
let arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache;
if (objvRTSysSocialRelaCond.sfFldComparisonOp == null || objvRTSysSocialRelaCond.sfFldComparisonOp == "") return arrvRTSysSocialRelaSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvRTSysSocialRelaCond.sfFldComparisonOp);
//console.log("clsvRTSysSocialRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvRTSysSocialRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTSysSocialRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvRTSysSocialRelaSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvRTSysSocialRelaCond), vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
 * @param lngSubViewpointId:所给的关键字
 * @returns 对象
*/
export  async function vRTSysSocialRela_IsExistCache(lngSubViewpointId:number,strTopicId:string) {
const strThisFuncName = "IsExistCache";
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
if (arrvRTSysSocialRelaObjLstCache == null) return false;
try
{
const arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache.filter(x => x.subViewpointId == lngSubViewpointId && x.topicId == strTopicId);
if (arrvRTSysSocialRelaSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngSubViewpointId, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngSubViewpointId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vRTSysSocialRela_IsExistAsync(lngSubViewpointId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngSubViewpointId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  async function vRTSysSocialRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vRTSysSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vRTSysSocialRela_ConstructorName, strThisFuncName);
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
 * @param objvRTSysSocialRelaCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vRTSysSocialRela_GetRecCountByCondCache(objvRTSysSocialRelaCond: clsvRTSysSocialRelaEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvRTSysSocialRelaObjLstCache = await vRTSysSocialRela_GetObjLstCache();
if (arrvRTSysSocialRelaObjLstCache == null) return 0;
let arrvRTSysSocialRelaSel = arrvRTSysSocialRelaObjLstCache;
if (objvRTSysSocialRelaCond.sfFldComparisonOp == null || objvRTSysSocialRelaCond.sfFldComparisonOp == "") return arrvRTSysSocialRelaSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvRTSysSocialRelaCond.sfFldComparisonOp);
//console.log("clsvRTSysSocialRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvRTSysSocialRelaCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvRTSysSocialRelaCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvRTSysSocialRelaSel = arrvRTSysSocialRelaSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvRTSysSocialRelaSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvRTSysSocialRelaCond), vRTSysSocialRela_ConstructorName, strThisFuncName);
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
export  function vRTSysSocialRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vRTSysSocialRela_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsvRTSysSocialRelaEN._CurrTabName;
switch (clsvRTSysSocialRelaEN.CacheModeId)
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

*/
export  async function vRTSysSocialRela_Cache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrObjLstSel = await vRTSysSocialRela_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvRTSysSocialRelaEN.con_TopicId, clsvRTSysSocialRelaEN.con_LevelId, "vRTSysSocialRela");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTSysSocialRela_GetJSONStrByObj (pobjvRTSysSocialRelaEN: clsvRTSysSocialRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvRTSysSocialRelaEN);
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
export  function vRTSysSocialRela_GetObjLstByJSONStr (strJSON: string): Array<clsvRTSysSocialRelaEN>
{
let arrvRTSysSocialRelaObjLst = new Array<clsvRTSysSocialRelaEN>();
if (strJSON === "")
{
return arrvRTSysSocialRelaObjLst;
}
try
{
arrvRTSysSocialRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvRTSysSocialRelaObjLst;
}
return arrvRTSysSocialRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTSysSocialRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vRTSysSocialRela_GetObjLstByJSONObjLst (arrvRTSysSocialRelaObjLstS: Array<clsvRTSysSocialRelaEN>): Array<clsvRTSysSocialRelaEN>
{
const arrvRTSysSocialRelaObjLst = new Array<clsvRTSysSocialRelaEN>();
for (const objInFor of arrvRTSysSocialRelaObjLstS) {
const obj1 = vRTSysSocialRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvRTSysSocialRelaObjLst.push(obj1);
}
return arrvRTSysSocialRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vRTSysSocialRela_GetObjByJSONStr (strJSON: string): clsvRTSysSocialRelaEN
{
let pobjvRTSysSocialRelaEN = new clsvRTSysSocialRelaEN();
if (strJSON === "")
{
return pobjvRTSysSocialRelaEN;
}
try
{
pobjvRTSysSocialRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvRTSysSocialRelaEN;
}
return pobjvRTSysSocialRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vRTSysSocialRela_GetCombineCondition(objvRTSysSocialRelaCond: clsvRTSysSocialRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_SubViewpointId) == true)
{
const strComparisonOpSubViewpointId:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_SubViewpointId];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_SubViewpointId, objvRTSysSocialRelaCond.subViewpointId, strComparisonOpSubViewpointId);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_TopicId) == true)
{
const strComparisonOpTopicId:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_TopicId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_TopicId, objvRTSysSocialRelaCond.topicId, strComparisonOpTopicId);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_TopicName) == true)
{
const strComparisonOpTopicName:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_TopicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_TopicName, objvRTSysSocialRelaCond.topicName, strComparisonOpTopicName);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_TopicProposePeople) == true)
{
const strComparisonOpTopicProposePeople:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_TopicProposePeople];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_TopicProposePeople, objvRTSysSocialRelaCond.topicProposePeople, strComparisonOpTopicProposePeople);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_OrderNum, objvRTSysSocialRelaCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_IdCurrEduCls, objvRTSysSocialRelaCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_FullName) == true)
{
const strComparisonOpFullName:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_FullName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_FullName, objvRTSysSocialRelaCond.fullName, strComparisonOpFullName);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_Nationality) == true)
{
const strComparisonOpNationality:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_Nationality];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_Nationality, objvRTSysSocialRelaCond.nationality, strComparisonOpNationality);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_WorkUnit) == true)
{
const strComparisonOpWorkUnit:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_WorkUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_WorkUnit, objvRTSysSocialRelaCond.workUnit, strComparisonOpWorkUnit);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_Major) == true)
{
const strComparisonOpMajor:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_Major];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_Major, objvRTSysSocialRelaCond.major, strComparisonOpMajor);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_Achievement) == true)
{
const strComparisonOpAchievement:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_Achievement];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_Achievement, objvRTSysSocialRelaCond.achievement, strComparisonOpAchievement);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_DetailedDescription) == true)
{
const strComparisonOpDetailedDescription:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_DetailedDescription];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_DetailedDescription, objvRTSysSocialRelaCond.detailedDescription, strComparisonOpDetailedDescription);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_LevelId, objvRTSysSocialRelaCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_LevelName) == true)
{
const strComparisonOpLevelName:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_LevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_LevelName, objvRTSysSocialRelaCond.levelName, strComparisonOpLevelName);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_SocialUpdUser) == true)
{
const strComparisonOpSocialUpdUser:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_SocialUpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_SocialUpdUser, objvRTSysSocialRelaCond.socialUpdUser, strComparisonOpSocialUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_SocialUpdDate) == true)
{
const strComparisonOpSocialUpdDate:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_SocialUpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_SocialUpdDate, objvRTSysSocialRelaCond.socialUpdDate, strComparisonOpSocialUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_IsSubmit) == true)
{
if (objvRTSysSocialRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvRTSysSocialRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvRTSysSocialRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_OkCount, objvRTSysSocialRelaCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_UpdDate, objvRTSysSocialRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_UpdUser, objvRTSysSocialRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_Memo, objvRTSysSocialRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_AppraiseCount, objvRTSysSocialRelaCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_Score) == true)
{
const strComparisonOpScore:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_Score, objvRTSysSocialRelaCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_StuScore, objvRTSysSocialRelaCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvRTSysSocialRelaEN.con_TeaScore, objvRTSysSocialRelaCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_CreateDate, objvRTSysSocialRelaCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_ShareId, objvRTSysSocialRelaCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_PdfContent, objvRTSysSocialRelaCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_ClassificationId) == true)
{
const strComparisonOpClassificationId:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_ClassificationId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_ClassificationId, objvRTSysSocialRelaCond.classificationId, strComparisonOpClassificationId);
}
if (Object.prototype.hasOwnProperty.call(objvRTSysSocialRelaCond.dicFldComparisonOp, clsvRTSysSocialRelaEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvRTSysSocialRelaCond.dicFldComparisonOp[clsvRTSysSocialRelaEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvRTSysSocialRelaEN.con_PaperId, objvRTSysSocialRelaCond.paperId, strComparisonOpPaperId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTSysSocialRelaENS:源对象
 * @param objvRTSysSocialRelaENT:目标对象
*/
export  function vRTSysSocialRela_CopyObjTo(objvRTSysSocialRelaENS: clsvRTSysSocialRelaEN , objvRTSysSocialRelaENT: clsvRTSysSocialRelaEN ): void 
{
objvRTSysSocialRelaENT.subViewpointId = objvRTSysSocialRelaENS.subViewpointId; //子观点Id
objvRTSysSocialRelaENT.topicId = objvRTSysSocialRelaENS.topicId; //主题Id
objvRTSysSocialRelaENT.topicName = objvRTSysSocialRelaENS.topicName; //栏目主题
objvRTSysSocialRelaENT.topicContent = objvRTSysSocialRelaENS.topicContent; //主题内容
objvRTSysSocialRelaENT.topicProposePeople = objvRTSysSocialRelaENS.topicProposePeople; //主题提出人
objvRTSysSocialRelaENT.orderNum = objvRTSysSocialRelaENS.orderNum; //序号
objvRTSysSocialRelaENT.idCurrEduCls = objvRTSysSocialRelaENS.idCurrEduCls; //教学班流水号
objvRTSysSocialRelaENT.fullName = objvRTSysSocialRelaENS.fullName; //姓名
objvRTSysSocialRelaENT.nationality = objvRTSysSocialRelaENS.nationality; //国籍
objvRTSysSocialRelaENT.workUnit = objvRTSysSocialRelaENS.workUnit; //工作单位
objvRTSysSocialRelaENT.major = objvRTSysSocialRelaENS.major; //专业
objvRTSysSocialRelaENT.achievement = objvRTSysSocialRelaENS.achievement; //成就
objvRTSysSocialRelaENT.detailedDescription = objvRTSysSocialRelaENS.detailedDescription; //详细说明
objvRTSysSocialRelaENT.levelId = objvRTSysSocialRelaENS.levelId; //级别Id
objvRTSysSocialRelaENT.levelName = objvRTSysSocialRelaENS.levelName; //级别名称
objvRTSysSocialRelaENT.socialUpdUser = objvRTSysSocialRelaENS.socialUpdUser; //SocialUpdUser
objvRTSysSocialRelaENT.socialUpdDate = objvRTSysSocialRelaENS.socialUpdDate; //SocialUpdDate
objvRTSysSocialRelaENT.isSubmit = objvRTSysSocialRelaENS.isSubmit; //是否提交
objvRTSysSocialRelaENT.okCount = objvRTSysSocialRelaENS.okCount; //点赞统计
objvRTSysSocialRelaENT.updDate = objvRTSysSocialRelaENS.updDate; //修改日期
objvRTSysSocialRelaENT.updUser = objvRTSysSocialRelaENS.updUser; //修改人
objvRTSysSocialRelaENT.memo = objvRTSysSocialRelaENS.memo; //备注
objvRTSysSocialRelaENT.appraiseCount = objvRTSysSocialRelaENS.appraiseCount; //评论数
objvRTSysSocialRelaENT.score = objvRTSysSocialRelaENS.score; //评分
objvRTSysSocialRelaENT.stuScore = objvRTSysSocialRelaENS.stuScore; //学生平均分
objvRTSysSocialRelaENT.teaScore = objvRTSysSocialRelaENS.teaScore; //教师评分
objvRTSysSocialRelaENT.createDate = objvRTSysSocialRelaENS.createDate; //建立日期
objvRTSysSocialRelaENT.shareId = objvRTSysSocialRelaENS.shareId; //分享Id
objvRTSysSocialRelaENT.pdfContent = objvRTSysSocialRelaENS.pdfContent; //Pdf内容
objvRTSysSocialRelaENT.classificationId = objvRTSysSocialRelaENS.classificationId; //分类Id
objvRTSysSocialRelaENT.paperId = objvRTSysSocialRelaENS.paperId; //论文Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTSysSocialRelaENS:源对象
 * @param objvRTSysSocialRelaENT:目标对象
*/
export  function vRTSysSocialRela_GetObjFromJsonObj(objvRTSysSocialRelaENS: clsvRTSysSocialRelaEN): clsvRTSysSocialRelaEN 
{
 const objvRTSysSocialRelaENT: clsvRTSysSocialRelaEN = new clsvRTSysSocialRelaEN();
ObjectAssign(objvRTSysSocialRelaENT, objvRTSysSocialRelaENS);
 return objvRTSysSocialRelaENT;
}