
 /**
 * 类名:clsvgs_PaperVerWApi
 * 表名:vgs_PaperVer(01120677)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:54
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
 * 论文历史版本视图(vgs_PaperVer)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvgs_PaperVerEN } from "@/ts/L0Entity/GradEduPaper/clsvgs_PaperVerEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vgs_PaperVer_Controller = "vgs_PaperVerApi";
 export const vgs_PaperVer_ConstructorName = "vgs_PaperVer";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPaperVId:关键字
 * @returns 对象
 **/
export  async function vgs_PaperVer_GetObjByPaperVIdAsync(lngPaperVId: number): Promise<clsvgs_PaperVerEN|null>  
{
const strThisFuncName = "GetObjByPaperVIdAsync";

if (lngPaperVId == 0)
{
  const strMsg = Format("参数:[lngPaperVId]不能为空!(In clsvgs_PaperVerWApi.GetObjByPaperVIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByPaperVId";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperVId,
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
const objvgs_PaperVer = vgs_PaperVer_GetObjFromJsonObj(returnObj);
return objvgs_PaperVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPaperVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPaperVIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByPaperVIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vgs_PaperVer_SortFunDefa(a:clsvgs_PaperVerEN , b:clsvgs_PaperVerEN): number 
{
return a.paperVId-b.paperVId;
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
export  function vgs_PaperVer_SortFunDefa2Fld(a:clsvgs_PaperVerEN , b:clsvgs_PaperVerEN): number 
{
if (a.paperId == b.paperId) return a.paperTitle.localeCompare(b.paperTitle);
else return a.paperId.localeCompare(b.paperId);
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
export  function vgs_PaperVer_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvgs_PaperVerEN.con_PaperVId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return a.paperVId-b.paperVId;
}
case clsvgs_PaperVerEN.con_PaperId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return a.paperId.localeCompare(b.paperId);
}
case clsvgs_PaperVerEN.con_PaperTitle:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvgs_PaperVerEN.con_PaperContent:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.paperContent == null) return -1;
if (b.paperContent == null) return 1;
return a.paperContent.localeCompare(b.paperContent);
}
case clsvgs_PaperVerEN.con_Periodical:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.periodical == null) return -1;
if (b.periodical == null) return 1;
return a.periodical.localeCompare(b.periodical);
}
case clsvgs_PaperVerEN.con_Author:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.author == null) return -1;
if (b.author == null) return 1;
return a.author.localeCompare(b.author);
}
case clsvgs_PaperVerEN.con_ResearchQuestion:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.researchQuestion == null) return -1;
if (b.researchQuestion == null) return 1;
return a.researchQuestion.localeCompare(b.researchQuestion);
}
case clsvgs_PaperVerEN.con_Keyword:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsvgs_PaperVerEN.con_LiteratureSources:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.literatureSources == null) return -1;
if (b.literatureSources == null) return 1;
return a.literatureSources.localeCompare(b.literatureSources);
}
case clsvgs_PaperVerEN.con_LiteratureLink:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.literatureLink == null) return -1;
if (b.literatureLink == null) return 1;
return a.literatureLink.localeCompare(b.literatureLink);
}
case clsvgs_PaperVerEN.con_UploadfileUrl:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.uploadfileUrl == null) return -1;
if (b.uploadfileUrl == null) return 1;
return a.uploadfileUrl.localeCompare(b.uploadfileUrl);
}
case clsvgs_PaperVerEN.con_IsQuotethesis:
return (a: clsvgs_PaperVerEN) => {
if (a.isQuotethesis == true) return 1;
else return -1
}
case clsvgs_PaperVerEN.con_IsSubmit:
return (a: clsvgs_PaperVerEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvgs_PaperVerEN.con_IsChecked:
return (a: clsvgs_PaperVerEN) => {
if (a.isChecked == true) return 1;
else return -1
}
case clsvgs_PaperVerEN.con_QuoteId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.quoteId == null) return -1;
if (b.quoteId == null) return 1;
return a.quoteId.localeCompare(b.quoteId);
}
case clsvgs_PaperVerEN.con_Checker:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.checker == null) return -1;
if (b.checker == null) return 1;
return a.checker.localeCompare(b.checker);
}
case clsvgs_PaperVerEN.con_LiteratureTypeId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return a.literatureTypeId.localeCompare(b.literatureTypeId);
}
case clsvgs_PaperVerEN.con_LiteratureTypeName:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.literatureTypeName == null) return -1;
if (b.literatureTypeName == null) return 1;
return a.literatureTypeName.localeCompare(b.literatureTypeName);
}
case clsvgs_PaperVerEN.con_UpdUser:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvgs_PaperVerEN.con_UpdDate:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvgs_PaperVerEN.con_IdCurrEduCls:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvgs_PaperVerEN.con_PaperTypeId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.paperTypeId == null) return -1;
if (b.paperTypeId == null) return 1;
return a.paperTypeId.localeCompare(b.paperTypeId);
}
case clsvgs_PaperVerEN.con_PaperTypeName:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.paperTypeName == null) return -1;
if (b.paperTypeName == null) return 1;
return a.paperTypeName.localeCompare(b.paperTypeName);
}
case clsvgs_PaperVerEN.con_PaperStatusId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.paperStatusId == null) return -1;
if (b.paperStatusId == null) return 1;
return a.paperStatusId.localeCompare(b.paperStatusId);
}
case clsvgs_PaperVerEN.con_PaperStatusName:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.paperStatusName == null) return -1;
if (b.paperStatusName == null) return 1;
return a.paperStatusName.localeCompare(b.paperStatusName);
}
case clsvgs_PaperVerEN.con_Memo:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperVer]中不存在!(in ${ vgs_PaperVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvgs_PaperVerEN.con_PaperVId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return b.paperVId-a.paperVId;
}
case clsvgs_PaperVerEN.con_PaperId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return b.paperId.localeCompare(a.paperId);
}
case clsvgs_PaperVerEN.con_PaperTitle:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvgs_PaperVerEN.con_PaperContent:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.paperContent == null) return -1;
if (a.paperContent == null) return 1;
return b.paperContent.localeCompare(a.paperContent);
}
case clsvgs_PaperVerEN.con_Periodical:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.periodical == null) return -1;
if (a.periodical == null) return 1;
return b.periodical.localeCompare(a.periodical);
}
case clsvgs_PaperVerEN.con_Author:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.author == null) return -1;
if (a.author == null) return 1;
return b.author.localeCompare(a.author);
}
case clsvgs_PaperVerEN.con_ResearchQuestion:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.researchQuestion == null) return -1;
if (a.researchQuestion == null) return 1;
return b.researchQuestion.localeCompare(a.researchQuestion);
}
case clsvgs_PaperVerEN.con_Keyword:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsvgs_PaperVerEN.con_LiteratureSources:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.literatureSources == null) return -1;
if (a.literatureSources == null) return 1;
return b.literatureSources.localeCompare(a.literatureSources);
}
case clsvgs_PaperVerEN.con_LiteratureLink:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.literatureLink == null) return -1;
if (a.literatureLink == null) return 1;
return b.literatureLink.localeCompare(a.literatureLink);
}
case clsvgs_PaperVerEN.con_UploadfileUrl:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.uploadfileUrl == null) return -1;
if (a.uploadfileUrl == null) return 1;
return b.uploadfileUrl.localeCompare(a.uploadfileUrl);
}
case clsvgs_PaperVerEN.con_IsQuotethesis:
return (b: clsvgs_PaperVerEN) => {
if (b.isQuotethesis == true) return 1;
else return -1
}
case clsvgs_PaperVerEN.con_IsSubmit:
return (b: clsvgs_PaperVerEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvgs_PaperVerEN.con_IsChecked:
return (b: clsvgs_PaperVerEN) => {
if (b.isChecked == true) return 1;
else return -1
}
case clsvgs_PaperVerEN.con_QuoteId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.quoteId == null) return -1;
if (a.quoteId == null) return 1;
return b.quoteId.localeCompare(a.quoteId);
}
case clsvgs_PaperVerEN.con_Checker:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.checker == null) return -1;
if (a.checker == null) return 1;
return b.checker.localeCompare(a.checker);
}
case clsvgs_PaperVerEN.con_LiteratureTypeId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
return b.literatureTypeId.localeCompare(a.literatureTypeId);
}
case clsvgs_PaperVerEN.con_LiteratureTypeName:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.literatureTypeName == null) return -1;
if (a.literatureTypeName == null) return 1;
return b.literatureTypeName.localeCompare(a.literatureTypeName);
}
case clsvgs_PaperVerEN.con_UpdUser:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvgs_PaperVerEN.con_UpdDate:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvgs_PaperVerEN.con_IdCurrEduCls:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvgs_PaperVerEN.con_PaperTypeId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.paperTypeId == null) return -1;
if (a.paperTypeId == null) return 1;
return b.paperTypeId.localeCompare(a.paperTypeId);
}
case clsvgs_PaperVerEN.con_PaperTypeName:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.paperTypeName == null) return -1;
if (a.paperTypeName == null) return 1;
return b.paperTypeName.localeCompare(a.paperTypeName);
}
case clsvgs_PaperVerEN.con_PaperStatusId:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.paperStatusId == null) return -1;
if (a.paperStatusId == null) return 1;
return b.paperStatusId.localeCompare(a.paperStatusId);
}
case clsvgs_PaperVerEN.con_PaperStatusName:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.paperStatusName == null) return -1;
if (a.paperStatusName == null) return 1;
return b.paperStatusName.localeCompare(a.paperStatusName);
}
case clsvgs_PaperVerEN.con_Memo:
return (a: clsvgs_PaperVerEN, b: clsvgs_PaperVerEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperVer]中不存在!(in ${ vgs_PaperVer_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_PaperVer_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvgs_PaperVerEN.con_PaperVId:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperVId === value;
}
case clsvgs_PaperVerEN.con_PaperId:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperId === value;
}
case clsvgs_PaperVerEN.con_PaperTitle:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperTitle === value;
}
case clsvgs_PaperVerEN.con_PaperContent:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperContent === value;
}
case clsvgs_PaperVerEN.con_Periodical:
return (obj: clsvgs_PaperVerEN) => {
return obj.periodical === value;
}
case clsvgs_PaperVerEN.con_Author:
return (obj: clsvgs_PaperVerEN) => {
return obj.author === value;
}
case clsvgs_PaperVerEN.con_ResearchQuestion:
return (obj: clsvgs_PaperVerEN) => {
return obj.researchQuestion === value;
}
case clsvgs_PaperVerEN.con_Keyword:
return (obj: clsvgs_PaperVerEN) => {
return obj.keyword === value;
}
case clsvgs_PaperVerEN.con_LiteratureSources:
return (obj: clsvgs_PaperVerEN) => {
return obj.literatureSources === value;
}
case clsvgs_PaperVerEN.con_LiteratureLink:
return (obj: clsvgs_PaperVerEN) => {
return obj.literatureLink === value;
}
case clsvgs_PaperVerEN.con_UploadfileUrl:
return (obj: clsvgs_PaperVerEN) => {
return obj.uploadfileUrl === value;
}
case clsvgs_PaperVerEN.con_IsQuotethesis:
return (obj: clsvgs_PaperVerEN) => {
return obj.isQuotethesis === value;
}
case clsvgs_PaperVerEN.con_IsSubmit:
return (obj: clsvgs_PaperVerEN) => {
return obj.isSubmit === value;
}
case clsvgs_PaperVerEN.con_IsChecked:
return (obj: clsvgs_PaperVerEN) => {
return obj.isChecked === value;
}
case clsvgs_PaperVerEN.con_QuoteId:
return (obj: clsvgs_PaperVerEN) => {
return obj.quoteId === value;
}
case clsvgs_PaperVerEN.con_Checker:
return (obj: clsvgs_PaperVerEN) => {
return obj.checker === value;
}
case clsvgs_PaperVerEN.con_LiteratureTypeId:
return (obj: clsvgs_PaperVerEN) => {
return obj.literatureTypeId === value;
}
case clsvgs_PaperVerEN.con_LiteratureTypeName:
return (obj: clsvgs_PaperVerEN) => {
return obj.literatureTypeName === value;
}
case clsvgs_PaperVerEN.con_UpdUser:
return (obj: clsvgs_PaperVerEN) => {
return obj.updUser === value;
}
case clsvgs_PaperVerEN.con_UpdDate:
return (obj: clsvgs_PaperVerEN) => {
return obj.updDate === value;
}
case clsvgs_PaperVerEN.con_IdCurrEduCls:
return (obj: clsvgs_PaperVerEN) => {
return obj.idCurrEduCls === value;
}
case clsvgs_PaperVerEN.con_PaperTypeId:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperTypeId === value;
}
case clsvgs_PaperVerEN.con_PaperTypeName:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperTypeName === value;
}
case clsvgs_PaperVerEN.con_PaperStatusId:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperStatusId === value;
}
case clsvgs_PaperVerEN.con_PaperStatusName:
return (obj: clsvgs_PaperVerEN) => {
return obj.paperStatusName === value;
}
case clsvgs_PaperVerEN.con_Memo:
return (obj: clsvgs_PaperVerEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PaperVer]中不存在!(in ${ vgs_PaperVer_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vgs_PaperVer__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vgs_PaperVer_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_GetFirstObjAsync(strWhereCond: string): Promise<clsvgs_PaperVerEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const objvgs_PaperVer = vgs_PaperVer_GetObjFromJsonObj(returnObj);
return objvgs_PaperVer;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvgs_PaperVerEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PaperVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
 * @param arrPaperVId:关键字列表
 * @returns 对象列表
 **/
export  async function vgs_PaperVer_GetObjLstByPaperVIdLstAsync(arrPaperVId: Array<string>): Promise<Array<clsvgs_PaperVerEN>>  
{
const strThisFuncName = "GetObjLstByPaperVIdLstAsync";
const strAction = "GetObjLstByPaperVIdLst";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperVId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PaperVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPaperVIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vgs_PaperVer_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvgs_PaperVerEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PaperVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvgs_PaperVerEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PaperVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvgs_PaperVerEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PaperVerEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PaperVer_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
 * @param lngPaperVId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vgs_PaperVer_IsExistAsync(lngPaperVId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPaperVId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  async function vgs_PaperVer_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vgs_PaperVer_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PaperVer_ConstructorName, strThisFuncName);
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
export  function vgs_PaperVer_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vgs_PaperVer_GetJSONStrByObj (pobjvgs_PaperVerEN: clsvgs_PaperVerEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvgs_PaperVerEN);
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
export  function vgs_PaperVer_GetObjLstByJSONStr (strJSON: string): Array<clsvgs_PaperVerEN>
{
let arrvgs_PaperVerObjLst = new Array<clsvgs_PaperVerEN>();
if (strJSON === "")
{
return arrvgs_PaperVerObjLst;
}
try
{
arrvgs_PaperVerObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvgs_PaperVerObjLst;
}
return arrvgs_PaperVerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_PaperVerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vgs_PaperVer_GetObjLstByJSONObjLst (arrvgs_PaperVerObjLstS: Array<clsvgs_PaperVerEN>): Array<clsvgs_PaperVerEN>
{
const arrvgs_PaperVerObjLst = new Array<clsvgs_PaperVerEN>();
for (const objInFor of arrvgs_PaperVerObjLstS) {
const obj1 = vgs_PaperVer_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvgs_PaperVerObjLst.push(obj1);
}
return arrvgs_PaperVerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_PaperVer_GetObjByJSONStr (strJSON: string): clsvgs_PaperVerEN
{
let pobjvgs_PaperVerEN = new clsvgs_PaperVerEN();
if (strJSON === "")
{
return pobjvgs_PaperVerEN;
}
try
{
pobjvgs_PaperVerEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvgs_PaperVerEN;
}
return pobjvgs_PaperVerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vgs_PaperVer_GetCombineCondition(objvgs_PaperVerCond: clsvgs_PaperVerEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperVId) == true)
{
const strComparisonOpPaperVId:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperVId];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PaperVerEN.con_PaperVId, objvgs_PaperVerCond.paperVId, strComparisonOpPaperVId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_PaperId, objvgs_PaperVerCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_PaperTitle, objvgs_PaperVerCond.paperTitle, strComparisonOpPaperTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_Periodical) == true)
{
const strComparisonOpPeriodical:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_Periodical];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_Periodical, objvgs_PaperVerCond.periodical, strComparisonOpPeriodical);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_Author) == true)
{
const strComparisonOpAuthor:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_Author];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_Author, objvgs_PaperVerCond.author, strComparisonOpAuthor);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_ResearchQuestion) == true)
{
const strComparisonOpResearchQuestion:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_ResearchQuestion];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_ResearchQuestion, objvgs_PaperVerCond.researchQuestion, strComparisonOpResearchQuestion);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_Keyword, objvgs_PaperVerCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_LiteratureSources) == true)
{
const strComparisonOpLiteratureSources:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_LiteratureSources];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_LiteratureSources, objvgs_PaperVerCond.literatureSources, strComparisonOpLiteratureSources);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_LiteratureLink) == true)
{
const strComparisonOpLiteratureLink:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_LiteratureLink];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_LiteratureLink, objvgs_PaperVerCond.literatureLink, strComparisonOpLiteratureLink);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_UploadfileUrl) == true)
{
const strComparisonOpUploadfileUrl:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_UploadfileUrl];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_UploadfileUrl, objvgs_PaperVerCond.uploadfileUrl, strComparisonOpUploadfileUrl);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_IsQuotethesis) == true)
{
if (objvgs_PaperVerCond.isQuotethesis == true)
{
strWhereCond += Format(" And {0} = '1'", clsvgs_PaperVerEN.con_IsQuotethesis);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvgs_PaperVerEN.con_IsQuotethesis);
}
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_IsSubmit) == true)
{
if (objvgs_PaperVerCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvgs_PaperVerEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvgs_PaperVerEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_IsChecked) == true)
{
if (objvgs_PaperVerCond.isChecked == true)
{
strWhereCond += Format(" And {0} = '1'", clsvgs_PaperVerEN.con_IsChecked);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvgs_PaperVerEN.con_IsChecked);
}
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_QuoteId) == true)
{
const strComparisonOpQuoteId:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_QuoteId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_QuoteId, objvgs_PaperVerCond.quoteId, strComparisonOpQuoteId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_Checker) == true)
{
const strComparisonOpChecker:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_Checker];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_Checker, objvgs_PaperVerCond.checker, strComparisonOpChecker);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_LiteratureTypeId) == true)
{
const strComparisonOpLiteratureTypeId:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_LiteratureTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_LiteratureTypeId, objvgs_PaperVerCond.literatureTypeId, strComparisonOpLiteratureTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_LiteratureTypeName) == true)
{
const strComparisonOpLiteratureTypeName:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_LiteratureTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_LiteratureTypeName, objvgs_PaperVerCond.literatureTypeName, strComparisonOpLiteratureTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_UpdUser, objvgs_PaperVerCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_UpdDate, objvgs_PaperVerCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_IdCurrEduCls, objvgs_PaperVerCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperTypeId) == true)
{
const strComparisonOpPaperTypeId:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_PaperTypeId, objvgs_PaperVerCond.paperTypeId, strComparisonOpPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperTypeName) == true)
{
const strComparisonOpPaperTypeName:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_PaperTypeName, objvgs_PaperVerCond.paperTypeName, strComparisonOpPaperTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperStatusId) == true)
{
const strComparisonOpPaperStatusId:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperStatusId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_PaperStatusId, objvgs_PaperVerCond.paperStatusId, strComparisonOpPaperStatusId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_PaperStatusName) == true)
{
const strComparisonOpPaperStatusName:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_PaperStatusName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_PaperStatusName, objvgs_PaperVerCond.paperStatusName, strComparisonOpPaperStatusName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PaperVerCond.dicFldComparisonOp, clsvgs_PaperVerEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvgs_PaperVerCond.dicFldComparisonOp[clsvgs_PaperVerEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PaperVerEN.con_Memo, objvgs_PaperVerCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_PaperVerENS:源对象
 * @param objvgs_PaperVerENT:目标对象
*/
export  function vgs_PaperVer_CopyObjTo(objvgs_PaperVerENS: clsvgs_PaperVerEN , objvgs_PaperVerENT: clsvgs_PaperVerEN ): void 
{
objvgs_PaperVerENT.paperVId = objvgs_PaperVerENS.paperVId; //PaperVId
objvgs_PaperVerENT.paperId = objvgs_PaperVerENS.paperId; //论文Id
objvgs_PaperVerENT.paperTitle = objvgs_PaperVerENS.paperTitle; //论文标题
objvgs_PaperVerENT.paperContent = objvgs_PaperVerENS.paperContent; //主题内容
objvgs_PaperVerENT.periodical = objvgs_PaperVerENS.periodical; //期刊
objvgs_PaperVerENT.author = objvgs_PaperVerENS.author; //作者
objvgs_PaperVerENT.researchQuestion = objvgs_PaperVerENS.researchQuestion; //研究问题
objvgs_PaperVerENT.keyword = objvgs_PaperVerENS.keyword; //关键字
objvgs_PaperVerENT.literatureSources = objvgs_PaperVerENS.literatureSources; //文献来源
objvgs_PaperVerENT.literatureLink = objvgs_PaperVerENS.literatureLink; //文献链接
objvgs_PaperVerENT.uploadfileUrl = objvgs_PaperVerENS.uploadfileUrl; //文件地址
objvgs_PaperVerENT.isQuotethesis = objvgs_PaperVerENS.isQuotethesis; //是否引用论文
objvgs_PaperVerENT.isSubmit = objvgs_PaperVerENS.isSubmit; //是否提交
objvgs_PaperVerENT.isChecked = objvgs_PaperVerENS.isChecked; //是否检查
objvgs_PaperVerENT.quoteId = objvgs_PaperVerENS.quoteId; //引用Id
objvgs_PaperVerENT.checker = objvgs_PaperVerENS.checker; //审核人
objvgs_PaperVerENT.literatureTypeId = objvgs_PaperVerENS.literatureTypeId; //文献类型Id
objvgs_PaperVerENT.literatureTypeName = objvgs_PaperVerENS.literatureTypeName; //作文类型名
objvgs_PaperVerENT.updUser = objvgs_PaperVerENS.updUser; //修改人
objvgs_PaperVerENT.updDate = objvgs_PaperVerENS.updDate; //修改日期
objvgs_PaperVerENT.idCurrEduCls = objvgs_PaperVerENS.idCurrEduCls; //教学班流水号
objvgs_PaperVerENT.paperTypeId = objvgs_PaperVerENS.paperTypeId; //论文类型Id
objvgs_PaperVerENT.paperTypeName = objvgs_PaperVerENS.paperTypeName; //论文类型名
objvgs_PaperVerENT.paperStatusId = objvgs_PaperVerENS.paperStatusId; //论文状态Id
objvgs_PaperVerENT.paperStatusName = objvgs_PaperVerENS.paperStatusName; //论文状态名
objvgs_PaperVerENT.memo = objvgs_PaperVerENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_PaperVerENS:源对象
 * @param objvgs_PaperVerENT:目标对象
*/
export  function vgs_PaperVer_GetObjFromJsonObj(objvgs_PaperVerENS: clsvgs_PaperVerEN): clsvgs_PaperVerEN 
{
 const objvgs_PaperVerENT: clsvgs_PaperVerEN = new clsvgs_PaperVerEN();
ObjectAssign(objvgs_PaperVerENT, objvgs_PaperVerENS);
 return objvgs_PaperVerENT;
}