
 /**
 * 类名:clsgs_TagsWApi
 * 表名:gs_Tags(01120714)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:26:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 标注(gs_Tags)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年03月23日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { clsgs_TagsEN } from "@/ts/L0Entity/InteractManage/clsgs_TagsEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const gs_Tags_Controller = "gs_TagsApi";
 export const gs_Tags_ConstructorName = "gs_Tags";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTagsId:关键字
 * @returns 对象
 **/
export  async function gs_Tags_GetObjByTagsIdAsync(strTagsId: string): Promise<clsgs_TagsEN|null>  
{
const strThisFuncName = "GetObjByTagsIdAsync";

if (IsNullOrEmpty(strTagsId) == true)
{
  const strMsg = Format("参数:[strTagsId]不能为空!(In clsgs_TagsWApi.GetObjByTagsIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTagsId.length != 10)
{
const strMsg = Format("缓存分类变量:[strTagsId]的长度:[{0}]不正确!(clsgs_TagsWApi.GetObjByTagsIdAsync)", strTagsId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTagsId";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTagsId,
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
const objgs_Tags = gs_Tags_GetObjFromJsonObj(returnObj);
return objgs_Tags;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByTagsIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByTagsIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByTagsIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_Tags_SortFunDefa(a:clsgs_TagsEN , b:clsgs_TagsEN): number 
{
return a.tagsId.localeCompare(b.tagsId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_Tags_SortFunDefa2Fld(a:clsgs_TagsEN , b:clsgs_TagsEN): number 
{
if (a.tagsContent == b.tagsContent) return a.pdfContent.localeCompare(b.pdfContent);
else return a.tagsContent.localeCompare(b.tagsContent);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_Tags_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_TagsEN.con_TagsId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return a.tagsId.localeCompare(b.tagsId);
}
case clsgs_TagsEN.con_TagsContent:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.tagsContent == null) return -1;
if (b.tagsContent == null) return 1;
return a.tagsContent.localeCompare(b.tagsContent);
}
case clsgs_TagsEN.con_PdfContent:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsgs_TagsEN.con_PdfPageNum:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsgs_TagsEN.con_VoteCount:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return a.voteCount-b.voteCount;
}
case clsgs_TagsEN.con_UserId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
case clsgs_TagsEN.con_OrderNum:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return a.orderNum-b.orderNum;
}
case clsgs_TagsEN.con_UpdUser:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_TagsEN.con_UpdDate:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_TagsEN.con_PdfLineNum:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return a.pdfLineNum-b.pdfLineNum;
}
case clsgs_TagsEN.con_PdfX:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfX == null) return -1;
if (b.pdfX == null) return 1;
return a.pdfX.localeCompare(b.pdfX);
}
case clsgs_TagsEN.con_PdfY:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfY == null) return -1;
if (b.pdfY == null) return 1;
return a.pdfY.localeCompare(b.pdfY);
}
case clsgs_TagsEN.con_Memo:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsgs_TagsEN.con_IdCurrEduCls:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsgs_TagsEN.con_PaperId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsgs_TagsEN.con_ShareId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsgs_TagsEN.con_PdfPageNumIn:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfPageNumIn == null) return -1;
if (b.pdfPageNumIn == null) return 1;
return a.pdfPageNumIn.localeCompare(b.pdfPageNumIn);
}
case clsgs_TagsEN.con_PdfPageTop:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return a.pdfPageTop-b.pdfPageTop;
}
case clsgs_TagsEN.con_selectSpanRange:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.selectSpanRange == null) return -1;
if (b.selectSpanRange == null) return 1;
return a.selectSpanRange.localeCompare(b.selectSpanRange);
}
case clsgs_TagsEN.con_PdfDivLet:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfDivLet == null) return -1;
if (b.pdfDivLet == null) return 1;
return a.pdfDivLet.localeCompare(b.pdfDivLet);
}
case clsgs_TagsEN.con_PdfDivTop:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfDivTop == null) return -1;
if (b.pdfDivTop == null) return 1;
return a.pdfDivTop.localeCompare(b.pdfDivTop);
}
case clsgs_TagsEN.con_PdfZoom:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.pdfZoom == null) return -1;
if (b.pdfZoom == null) return 1;
return a.pdfZoom.localeCompare(b.pdfZoom);
}
case clsgs_TagsEN.con_TagsTypeId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (a.tagsTypeId == null) return -1;
if (b.tagsTypeId == null) return 1;
return a.tagsTypeId.localeCompare(b.tagsTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_Tags]中不存在!(in ${ gs_Tags_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_TagsEN.con_TagsId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return b.tagsId.localeCompare(a.tagsId);
}
case clsgs_TagsEN.con_TagsContent:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.tagsContent == null) return -1;
if (a.tagsContent == null) return 1;
return b.tagsContent.localeCompare(a.tagsContent);
}
case clsgs_TagsEN.con_PdfContent:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsgs_TagsEN.con_PdfPageNum:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsgs_TagsEN.con_VoteCount:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return b.voteCount-a.voteCount;
}
case clsgs_TagsEN.con_UserId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
case clsgs_TagsEN.con_OrderNum:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return b.orderNum-a.orderNum;
}
case clsgs_TagsEN.con_UpdUser:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_TagsEN.con_UpdDate:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_TagsEN.con_PdfLineNum:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return b.pdfLineNum-a.pdfLineNum;
}
case clsgs_TagsEN.con_PdfX:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfX == null) return -1;
if (a.pdfX == null) return 1;
return b.pdfX.localeCompare(a.pdfX);
}
case clsgs_TagsEN.con_PdfY:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfY == null) return -1;
if (a.pdfY == null) return 1;
return b.pdfY.localeCompare(a.pdfY);
}
case clsgs_TagsEN.con_Memo:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsgs_TagsEN.con_IdCurrEduCls:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsgs_TagsEN.con_PaperId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsgs_TagsEN.con_ShareId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsgs_TagsEN.con_PdfPageNumIn:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfPageNumIn == null) return -1;
if (a.pdfPageNumIn == null) return 1;
return b.pdfPageNumIn.localeCompare(a.pdfPageNumIn);
}
case clsgs_TagsEN.con_PdfPageTop:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
return b.pdfPageTop-a.pdfPageTop;
}
case clsgs_TagsEN.con_selectSpanRange:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.selectSpanRange == null) return -1;
if (a.selectSpanRange == null) return 1;
return b.selectSpanRange.localeCompare(a.selectSpanRange);
}
case clsgs_TagsEN.con_PdfDivLet:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfDivLet == null) return -1;
if (a.pdfDivLet == null) return 1;
return b.pdfDivLet.localeCompare(a.pdfDivLet);
}
case clsgs_TagsEN.con_PdfDivTop:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfDivTop == null) return -1;
if (a.pdfDivTop == null) return 1;
return b.pdfDivTop.localeCompare(a.pdfDivTop);
}
case clsgs_TagsEN.con_PdfZoom:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.pdfZoom == null) return -1;
if (a.pdfZoom == null) return 1;
return b.pdfZoom.localeCompare(a.pdfZoom);
}
case clsgs_TagsEN.con_TagsTypeId:
return (a: clsgs_TagsEN, b: clsgs_TagsEN) => {
if (b.tagsTypeId == null) return -1;
if (a.tagsTypeId == null) return 1;
return b.tagsTypeId.localeCompare(a.tagsTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_Tags]中不存在!(in ${ gs_Tags_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function gs_Tags_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_TagsEN.con_TagsId:
return (obj: clsgs_TagsEN) => {
return obj.tagsId === value;
}
case clsgs_TagsEN.con_TagsContent:
return (obj: clsgs_TagsEN) => {
return obj.tagsContent === value;
}
case clsgs_TagsEN.con_PdfContent:
return (obj: clsgs_TagsEN) => {
return obj.pdfContent === value;
}
case clsgs_TagsEN.con_PdfPageNum:
return (obj: clsgs_TagsEN) => {
return obj.pdfPageNum === value;
}
case clsgs_TagsEN.con_VoteCount:
return (obj: clsgs_TagsEN) => {
return obj.voteCount === value;
}
case clsgs_TagsEN.con_UserId:
return (obj: clsgs_TagsEN) => {
return obj.userId === value;
}
case clsgs_TagsEN.con_OrderNum:
return (obj: clsgs_TagsEN) => {
return obj.orderNum === value;
}
case clsgs_TagsEN.con_UpdUser:
return (obj: clsgs_TagsEN) => {
return obj.updUser === value;
}
case clsgs_TagsEN.con_UpdDate:
return (obj: clsgs_TagsEN) => {
return obj.updDate === value;
}
case clsgs_TagsEN.con_PdfLineNum:
return (obj: clsgs_TagsEN) => {
return obj.pdfLineNum === value;
}
case clsgs_TagsEN.con_PdfX:
return (obj: clsgs_TagsEN) => {
return obj.pdfX === value;
}
case clsgs_TagsEN.con_PdfY:
return (obj: clsgs_TagsEN) => {
return obj.pdfY === value;
}
case clsgs_TagsEN.con_Memo:
return (obj: clsgs_TagsEN) => {
return obj.memo === value;
}
case clsgs_TagsEN.con_IdCurrEduCls:
return (obj: clsgs_TagsEN) => {
return obj.idCurrEduCls === value;
}
case clsgs_TagsEN.con_PaperId:
return (obj: clsgs_TagsEN) => {
return obj.paperId === value;
}
case clsgs_TagsEN.con_ShareId:
return (obj: clsgs_TagsEN) => {
return obj.shareId === value;
}
case clsgs_TagsEN.con_PdfPageNumIn:
return (obj: clsgs_TagsEN) => {
return obj.pdfPageNumIn === value;
}
case clsgs_TagsEN.con_PdfPageTop:
return (obj: clsgs_TagsEN) => {
return obj.pdfPageTop === value;
}
case clsgs_TagsEN.con_selectSpanRange:
return (obj: clsgs_TagsEN) => {
return obj.selectSpanRange === value;
}
case clsgs_TagsEN.con_PdfDivLet:
return (obj: clsgs_TagsEN) => {
return obj.pdfDivLet === value;
}
case clsgs_TagsEN.con_PdfDivTop:
return (obj: clsgs_TagsEN) => {
return obj.pdfDivTop === value;
}
case clsgs_TagsEN.con_PdfZoom:
return (obj: clsgs_TagsEN) => {
return obj.pdfZoom === value;
}
case clsgs_TagsEN.con_TagsTypeId:
return (obj: clsgs_TagsEN) => {
return obj.tagsTypeId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_Tags]中不存在!(in ${ gs_Tags_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[gs_Tags__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_Tags_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_TagsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const objgs_Tags = gs_Tags_GetObjFromJsonObj(returnObj);
return objgs_Tags;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param arrTagsId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_Tags_GetObjLstByTagsIdLstAsync(arrTagsId: Array<string>): Promise<Array<clsgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstByTagsIdLstAsync";
const strAction = "GetObjLstByTagsIdLst";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTagsId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByTagsIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function gs_Tags_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_TagsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_TagsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param strTagsId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_Tags_DelRecordAsync(strTagsId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strTagsId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param arrTagsId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_Tags_Delgs_TagssAsync(arrTagsId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_TagssAsync";
const strAction = "Delgs_Tagss";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrTagsId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_Delgs_TagssByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_TagssByCondAsync";
const strAction = "Delgs_TagssByCond";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_AddNewRecordAsync(objgs_TagsEN: clsgs_TagsEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_TagsEN);
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TagsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_AddNewRecordWithMaxIdAsync(objgs_TagsEN: clsgs_TagsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TagsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_TagsEN);
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_TagsEN);
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objgs_TagsEN);
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_Tags_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objgs_TagsEN);
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param objgs_TagsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_Tags_AddNewRecordWithReturnKeyAsync(objgs_TagsEN: clsgs_TagsEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TagsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param objgs_TagsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_Tags_UpdateRecordAsync(objgs_TagsEN: clsgs_TagsEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_TagsEN.sfUpdFldSetStr === undefined || objgs_TagsEN.sfUpdFldSetStr === null || objgs_TagsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TagsEN.tagsId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TagsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param objgs_TagsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_Tags_UpdateWithConditionAsync(objgs_TagsEN: clsgs_TagsEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_TagsEN.sfUpdFldSetStr === undefined || objgs_TagsEN.sfUpdFldSetStr === null || objgs_TagsEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TagsEN.tagsId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);
objgs_TagsEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TagsEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * @param strTagsId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_Tags_IsExistAsync(strTagsId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strTagsId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function gs_Tags_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  async function gs_Tags_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_Tags_ConstructorName, strThisFuncName);
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
export  function gs_Tags_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_Tags_CheckPropertyNew(pobjgs_TagsEN: clsgs_TagsEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_TagsEN.tagsId) == false && GetStrLen(pobjgs_TagsEN.tagsId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[标注Id(tagsId)]的长度不能超过10(In 标注(gs_Tags))!值:${pobjgs_TagsEN.tagsId}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfContent) == false && GetStrLen(pobjgs_TagsEN.pdfContent) > 2000)
{
 throw new Error(`(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfContent}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.userId) == false && GetStrLen(pobjgs_TagsEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 标注(gs_Tags))!值:${pobjgs_TagsEN.userId}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updUser) == false && GetStrLen(pobjgs_TagsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 标注(gs_Tags))!值:${pobjgs_TagsEN.updUser}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updDate) == false && GetStrLen(pobjgs_TagsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 标注(gs_Tags))!值:${pobjgs_TagsEN.updDate}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfX) == false && GetStrLen(pobjgs_TagsEN.pdfX) > 50)
{
 throw new Error(`(errid:Watl000413)字段[PdfX(pdfX)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfX}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfY) == false && GetStrLen(pobjgs_TagsEN.pdfY) > 50)
{
 throw new Error(`(errid:Watl000413)字段[PdfY(pdfY)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfY}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.memo) == false && GetStrLen(pobjgs_TagsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 标注(gs_Tags))!值:${pobjgs_TagsEN.memo}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.idCurrEduCls) == false && GetStrLen(pobjgs_TagsEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 标注(gs_Tags))!值:${pobjgs_TagsEN.idCurrEduCls}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.paperId) == false && GetStrLen(pobjgs_TagsEN.paperId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 标注(gs_Tags))!值:${pobjgs_TagsEN.paperId}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.shareId) == false && GetStrLen(pobjgs_TagsEN.shareId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[分享Id(shareId)]的长度不能超过2(In 标注(gs_Tags))!值:${pobjgs_TagsEN.shareId}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfPageNumIn) == false && GetStrLen(pobjgs_TagsEN.pdfPageNumIn) > 50)
{
 throw new Error(`(errid:Watl000413)字段[PdfPageNumIn(pdfPageNumIn)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfPageNumIn}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.selectSpanRange) == false && GetStrLen(pobjgs_TagsEN.selectSpanRange) > 50)
{
 throw new Error(`(errid:Watl000413)字段[选择Span范围(selectSpanRange)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.selectSpanRange}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivLet) == false && GetStrLen(pobjgs_TagsEN.pdfDivLet) > 50)
{
 throw new Error(`(errid:Watl000413)字段[PdfDivLet(pdfDivLet)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfDivLet}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivTop) == false && GetStrLen(pobjgs_TagsEN.pdfDivTop) > 50)
{
 throw new Error(`(errid:Watl000413)字段[PdfDivTop(pdfDivTop)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfDivTop}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfZoom) == false && GetStrLen(pobjgs_TagsEN.pdfZoom) > 50)
{
 throw new Error(`(errid:Watl000413)字段[PdfZoom(pdfZoom)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfZoom}(clsgs_TagsBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.tagsTypeId) == false && GetStrLen(pobjgs_TagsEN.tagsTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[标注类型ID(tagsTypeId)]的长度不能超过2(In 标注(gs_Tags))!值:${pobjgs_TagsEN.tagsTypeId}(clsgs_TagsBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjgs_TagsEN.tagsId) == false && undefined !== pobjgs_TagsEN.tagsId && tzDataType.isString(pobjgs_TagsEN.tagsId) === false)
{
 throw new Error(`(errid:Watl000414)字段[标注Id(tagsId)]的值:[${pobjgs_TagsEN.tagsId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.tagsContent) == false && undefined !== pobjgs_TagsEN.tagsContent && tzDataType.isString(pobjgs_TagsEN.tagsContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[标注内容(tagsContent)]的值:[${pobjgs_TagsEN.tagsContent}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfContent) == false && undefined !== pobjgs_TagsEN.pdfContent && tzDataType.isString(pobjgs_TagsEN.pdfContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[${pobjgs_TagsEN.pdfContent}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (null != pobjgs_TagsEN.pdfPageNum && undefined !== pobjgs_TagsEN.pdfPageNum && tzDataType.isNumber(pobjgs_TagsEN.pdfPageNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[Pdf页码(pdfPageNum)]的值:[${pobjgs_TagsEN.pdfPageNum}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (null != pobjgs_TagsEN.voteCount && undefined !== pobjgs_TagsEN.voteCount && tzDataType.isNumber(pobjgs_TagsEN.voteCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[点赞计数(voteCount)]的值:[${pobjgs_TagsEN.voteCount}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.userId) == false && undefined !== pobjgs_TagsEN.userId && tzDataType.isString(pobjgs_TagsEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjgs_TagsEN.userId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (null != pobjgs_TagsEN.orderNum && undefined !== pobjgs_TagsEN.orderNum && tzDataType.isNumber(pobjgs_TagsEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjgs_TagsEN.orderNum}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updUser) == false && undefined !== pobjgs_TagsEN.updUser && tzDataType.isString(pobjgs_TagsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjgs_TagsEN.updUser}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updDate) == false && undefined !== pobjgs_TagsEN.updDate && tzDataType.isString(pobjgs_TagsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjgs_TagsEN.updDate}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (null != pobjgs_TagsEN.pdfLineNum && undefined !== pobjgs_TagsEN.pdfLineNum && tzDataType.isNumber(pobjgs_TagsEN.pdfLineNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[pdf行号(pdfLineNum)]的值:[${pobjgs_TagsEN.pdfLineNum}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfX) == false && undefined !== pobjgs_TagsEN.pdfX && tzDataType.isString(pobjgs_TagsEN.pdfX) === false)
{
 throw new Error(`(errid:Watl000414)字段[PdfX(pdfX)]的值:[${pobjgs_TagsEN.pdfX}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfY) == false && undefined !== pobjgs_TagsEN.pdfY && tzDataType.isString(pobjgs_TagsEN.pdfY) === false)
{
 throw new Error(`(errid:Watl000414)字段[PdfY(pdfY)]的值:[${pobjgs_TagsEN.pdfY}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.memo) == false && undefined !== pobjgs_TagsEN.memo && tzDataType.isString(pobjgs_TagsEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjgs_TagsEN.memo}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.idCurrEduCls) == false && undefined !== pobjgs_TagsEN.idCurrEduCls && tzDataType.isString(pobjgs_TagsEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjgs_TagsEN.idCurrEduCls}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.paperId) == false && undefined !== pobjgs_TagsEN.paperId && tzDataType.isString(pobjgs_TagsEN.paperId) === false)
{
 throw new Error(`(errid:Watl000414)字段[论文Id(paperId)]的值:[${pobjgs_TagsEN.paperId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.shareId) == false && undefined !== pobjgs_TagsEN.shareId && tzDataType.isString(pobjgs_TagsEN.shareId) === false)
{
 throw new Error(`(errid:Watl000414)字段[分享Id(shareId)]的值:[${pobjgs_TagsEN.shareId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfPageNumIn) == false && undefined !== pobjgs_TagsEN.pdfPageNumIn && tzDataType.isString(pobjgs_TagsEN.pdfPageNumIn) === false)
{
 throw new Error(`(errid:Watl000414)字段[PdfPageNumIn(pdfPageNumIn)]的值:[${pobjgs_TagsEN.pdfPageNumIn}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (null != pobjgs_TagsEN.pdfPageTop && undefined !== pobjgs_TagsEN.pdfPageTop && tzDataType.isNumber(pobjgs_TagsEN.pdfPageTop) === false)
{
 throw new Error(`(errid:Watl000414)字段[pdf页面顶部位置(pdfPageTop)]的值:[${pobjgs_TagsEN.pdfPageTop}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.selectSpanRange) == false && undefined !== pobjgs_TagsEN.selectSpanRange && tzDataType.isString(pobjgs_TagsEN.selectSpanRange) === false)
{
 throw new Error(`(errid:Watl000414)字段[选择Span范围(selectSpanRange)]的值:[${pobjgs_TagsEN.selectSpanRange}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivLet) == false && undefined !== pobjgs_TagsEN.pdfDivLet && tzDataType.isString(pobjgs_TagsEN.pdfDivLet) === false)
{
 throw new Error(`(errid:Watl000414)字段[PdfDivLet(pdfDivLet)]的值:[${pobjgs_TagsEN.pdfDivLet}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivTop) == false && undefined !== pobjgs_TagsEN.pdfDivTop && tzDataType.isString(pobjgs_TagsEN.pdfDivTop) === false)
{
 throw new Error(`(errid:Watl000414)字段[PdfDivTop(pdfDivTop)]的值:[${pobjgs_TagsEN.pdfDivTop}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfZoom) == false && undefined !== pobjgs_TagsEN.pdfZoom && tzDataType.isString(pobjgs_TagsEN.pdfZoom) === false)
{
 throw new Error(`(errid:Watl000414)字段[PdfZoom(pdfZoom)]的值:[${pobjgs_TagsEN.pdfZoom}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.tagsTypeId) == false && undefined !== pobjgs_TagsEN.tagsTypeId && tzDataType.isString(pobjgs_TagsEN.tagsTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[标注类型ID(tagsTypeId)]的值:[${pobjgs_TagsEN.tagsTypeId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_Tags_CheckProperty4Update(pobjgs_TagsEN: clsgs_TagsEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_TagsEN.tagsId) == false && GetStrLen(pobjgs_TagsEN.tagsId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[标注Id(tagsId)]的长度不能超过10(In 标注(gs_Tags))!值:${pobjgs_TagsEN.tagsId}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfContent) == false && GetStrLen(pobjgs_TagsEN.pdfContent) > 2000)
{
 throw new Error(`(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfContent}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.userId) == false && GetStrLen(pobjgs_TagsEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 标注(gs_Tags))!值:${pobjgs_TagsEN.userId}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updUser) == false && GetStrLen(pobjgs_TagsEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 标注(gs_Tags))!值:${pobjgs_TagsEN.updUser}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updDate) == false && GetStrLen(pobjgs_TagsEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 标注(gs_Tags))!值:${pobjgs_TagsEN.updDate}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfX) == false && GetStrLen(pobjgs_TagsEN.pdfX) > 50)
{
 throw new Error(`(errid:Watl000416)字段[PdfX(pdfX)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfX}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfY) == false && GetStrLen(pobjgs_TagsEN.pdfY) > 50)
{
 throw new Error(`(errid:Watl000416)字段[PdfY(pdfY)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfY}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.memo) == false && GetStrLen(pobjgs_TagsEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 标注(gs_Tags))!值:${pobjgs_TagsEN.memo}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.idCurrEduCls) == false && GetStrLen(pobjgs_TagsEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 标注(gs_Tags))!值:${pobjgs_TagsEN.idCurrEduCls}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.paperId) == false && GetStrLen(pobjgs_TagsEN.paperId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 标注(gs_Tags))!值:${pobjgs_TagsEN.paperId}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.shareId) == false && GetStrLen(pobjgs_TagsEN.shareId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[分享Id(shareId)]的长度不能超过2(In 标注(gs_Tags))!值:${pobjgs_TagsEN.shareId}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfPageNumIn) == false && GetStrLen(pobjgs_TagsEN.pdfPageNumIn) > 50)
{
 throw new Error(`(errid:Watl000416)字段[PdfPageNumIn(pdfPageNumIn)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfPageNumIn}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.selectSpanRange) == false && GetStrLen(pobjgs_TagsEN.selectSpanRange) > 50)
{
 throw new Error(`(errid:Watl000416)字段[选择Span范围(selectSpanRange)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.selectSpanRange}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivLet) == false && GetStrLen(pobjgs_TagsEN.pdfDivLet) > 50)
{
 throw new Error(`(errid:Watl000416)字段[PdfDivLet(pdfDivLet)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfDivLet}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivTop) == false && GetStrLen(pobjgs_TagsEN.pdfDivTop) > 50)
{
 throw new Error(`(errid:Watl000416)字段[PdfDivTop(pdfDivTop)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfDivTop}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfZoom) == false && GetStrLen(pobjgs_TagsEN.pdfZoom) > 50)
{
 throw new Error(`(errid:Watl000416)字段[PdfZoom(pdfZoom)]的长度不能超过50(In 标注(gs_Tags))!值:${pobjgs_TagsEN.pdfZoom}(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.tagsTypeId) == false && GetStrLen(pobjgs_TagsEN.tagsTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[标注类型ID(tagsTypeId)]的长度不能超过2(In 标注(gs_Tags))!值:${pobjgs_TagsEN.tagsTypeId}(clsgs_TagsBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjgs_TagsEN.tagsId) == false && undefined !== pobjgs_TagsEN.tagsId && tzDataType.isString(pobjgs_TagsEN.tagsId) === false)
{
 throw new Error(`(errid:Watl000417)字段[标注Id(tagsId)]的值:[${pobjgs_TagsEN.tagsId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.tagsContent) == false && undefined !== pobjgs_TagsEN.tagsContent && tzDataType.isString(pobjgs_TagsEN.tagsContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[标注内容(tagsContent)]的值:[${pobjgs_TagsEN.tagsContent}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfContent) == false && undefined !== pobjgs_TagsEN.pdfContent && tzDataType.isString(pobjgs_TagsEN.pdfContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[${pobjgs_TagsEN.pdfContent}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (null != pobjgs_TagsEN.pdfPageNum && undefined !== pobjgs_TagsEN.pdfPageNum && tzDataType.isNumber(pobjgs_TagsEN.pdfPageNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[Pdf页码(pdfPageNum)]的值:[${pobjgs_TagsEN.pdfPageNum}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (null != pobjgs_TagsEN.voteCount && undefined !== pobjgs_TagsEN.voteCount && tzDataType.isNumber(pobjgs_TagsEN.voteCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[点赞计数(voteCount)]的值:[${pobjgs_TagsEN.voteCount}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.userId) == false && undefined !== pobjgs_TagsEN.userId && tzDataType.isString(pobjgs_TagsEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjgs_TagsEN.userId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (null != pobjgs_TagsEN.orderNum && undefined !== pobjgs_TagsEN.orderNum && tzDataType.isNumber(pobjgs_TagsEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjgs_TagsEN.orderNum}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updUser) == false && undefined !== pobjgs_TagsEN.updUser && tzDataType.isString(pobjgs_TagsEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjgs_TagsEN.updUser}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.updDate) == false && undefined !== pobjgs_TagsEN.updDate && tzDataType.isString(pobjgs_TagsEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjgs_TagsEN.updDate}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (null != pobjgs_TagsEN.pdfLineNum && undefined !== pobjgs_TagsEN.pdfLineNum && tzDataType.isNumber(pobjgs_TagsEN.pdfLineNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[pdf行号(pdfLineNum)]的值:[${pobjgs_TagsEN.pdfLineNum}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfX) == false && undefined !== pobjgs_TagsEN.pdfX && tzDataType.isString(pobjgs_TagsEN.pdfX) === false)
{
 throw new Error(`(errid:Watl000417)字段[PdfX(pdfX)]的值:[${pobjgs_TagsEN.pdfX}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfY) == false && undefined !== pobjgs_TagsEN.pdfY && tzDataType.isString(pobjgs_TagsEN.pdfY) === false)
{
 throw new Error(`(errid:Watl000417)字段[PdfY(pdfY)]的值:[${pobjgs_TagsEN.pdfY}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.memo) == false && undefined !== pobjgs_TagsEN.memo && tzDataType.isString(pobjgs_TagsEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjgs_TagsEN.memo}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.idCurrEduCls) == false && undefined !== pobjgs_TagsEN.idCurrEduCls && tzDataType.isString(pobjgs_TagsEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjgs_TagsEN.idCurrEduCls}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.paperId) == false && undefined !== pobjgs_TagsEN.paperId && tzDataType.isString(pobjgs_TagsEN.paperId) === false)
{
 throw new Error(`(errid:Watl000417)字段[论文Id(paperId)]的值:[${pobjgs_TagsEN.paperId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.shareId) == false && undefined !== pobjgs_TagsEN.shareId && tzDataType.isString(pobjgs_TagsEN.shareId) === false)
{
 throw new Error(`(errid:Watl000417)字段[分享Id(shareId)]的值:[${pobjgs_TagsEN.shareId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfPageNumIn) == false && undefined !== pobjgs_TagsEN.pdfPageNumIn && tzDataType.isString(pobjgs_TagsEN.pdfPageNumIn) === false)
{
 throw new Error(`(errid:Watl000417)字段[PdfPageNumIn(pdfPageNumIn)]的值:[${pobjgs_TagsEN.pdfPageNumIn}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (null != pobjgs_TagsEN.pdfPageTop && undefined !== pobjgs_TagsEN.pdfPageTop && tzDataType.isNumber(pobjgs_TagsEN.pdfPageTop) === false)
{
 throw new Error(`(errid:Watl000417)字段[pdf页面顶部位置(pdfPageTop)]的值:[${pobjgs_TagsEN.pdfPageTop}], 非法,应该为数值型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.selectSpanRange) == false && undefined !== pobjgs_TagsEN.selectSpanRange && tzDataType.isString(pobjgs_TagsEN.selectSpanRange) === false)
{
 throw new Error(`(errid:Watl000417)字段[选择Span范围(selectSpanRange)]的值:[${pobjgs_TagsEN.selectSpanRange}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivLet) == false && undefined !== pobjgs_TagsEN.pdfDivLet && tzDataType.isString(pobjgs_TagsEN.pdfDivLet) === false)
{
 throw new Error(`(errid:Watl000417)字段[PdfDivLet(pdfDivLet)]的值:[${pobjgs_TagsEN.pdfDivLet}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfDivTop) == false && undefined !== pobjgs_TagsEN.pdfDivTop && tzDataType.isString(pobjgs_TagsEN.pdfDivTop) === false)
{
 throw new Error(`(errid:Watl000417)字段[PdfDivTop(pdfDivTop)]的值:[${pobjgs_TagsEN.pdfDivTop}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.pdfZoom) == false && undefined !== pobjgs_TagsEN.pdfZoom && tzDataType.isString(pobjgs_TagsEN.pdfZoom) === false)
{
 throw new Error(`(errid:Watl000417)字段[PdfZoom(pdfZoom)]的值:[${pobjgs_TagsEN.pdfZoom}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TagsEN.tagsTypeId) == false && undefined !== pobjgs_TagsEN.tagsTypeId && tzDataType.isString(pobjgs_TagsEN.tagsTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[标注类型ID(tagsTypeId)]的值:[${pobjgs_TagsEN.tagsTypeId}], 非法,应该为字符型(In 标注(gs_Tags))!(clsgs_TagsBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_Tags_GetJSONStrByObj (pobjgs_TagsEN: clsgs_TagsEN): string
{
pobjgs_TagsEN.sfUpdFldSetStr = pobjgs_TagsEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_TagsEN);
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
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function gs_Tags_GetObjLstByJSONStr (strJSON: string): Array<clsgs_TagsEN>
{
let arrgs_TagsObjLst = new Array<clsgs_TagsEN>();
if (strJSON === "")
{
return arrgs_TagsObjLst;
}
try
{
arrgs_TagsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_TagsObjLst;
}
return arrgs_TagsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_TagsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_Tags_GetObjLstByJSONObjLst (arrgs_TagsObjLstS: Array<clsgs_TagsEN>): Array<clsgs_TagsEN>
{
const arrgs_TagsObjLst = new Array<clsgs_TagsEN>();
for (const objInFor of arrgs_TagsObjLstS) {
const obj1 = gs_Tags_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_TagsObjLst.push(obj1);
}
return arrgs_TagsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-03-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_Tags_GetObjByJSONStr (strJSON: string): clsgs_TagsEN
{
let pobjgs_TagsEN = new clsgs_TagsEN();
if (strJSON === "")
{
return pobjgs_TagsEN;
}
try
{
pobjgs_TagsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_TagsEN;
}
return pobjgs_TagsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_Tags_GetCombineCondition(objgs_TagsCond: clsgs_TagsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_TagsId) == true)
{
const strComparisonOpTagsId:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_TagsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_TagsId, objgs_TagsCond.tagsId, strComparisonOpTagsId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfContent, objgs_TagsCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TagsEN.con_PdfPageNum, objgs_TagsCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_VoteCount) == true)
{
const strComparisonOpVoteCount:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_VoteCount];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TagsEN.con_VoteCount, objgs_TagsCond.voteCount, strComparisonOpVoteCount);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_UserId, objgs_TagsCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TagsEN.con_OrderNum, objgs_TagsCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_UpdUser, objgs_TagsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_UpdDate, objgs_TagsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfLineNum) == true)
{
const strComparisonOpPdfLineNum:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfLineNum];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TagsEN.con_PdfLineNum, objgs_TagsCond.pdfLineNum, strComparisonOpPdfLineNum);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfX) == true)
{
const strComparisonOpPdfX:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfX];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfX, objgs_TagsCond.pdfX, strComparisonOpPdfX);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfY) == true)
{
const strComparisonOpPdfY:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfY];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfY, objgs_TagsCond.pdfY, strComparisonOpPdfY);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_Memo, objgs_TagsCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_IdCurrEduCls, objgs_TagsCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PaperId, objgs_TagsCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_ShareId, objgs_TagsCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfPageNumIn) == true)
{
const strComparisonOpPdfPageNumIn:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfPageNumIn];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfPageNumIn, objgs_TagsCond.pdfPageNumIn, strComparisonOpPdfPageNumIn);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfPageTop) == true)
{
const strComparisonOpPdfPageTop:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfPageTop];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TagsEN.con_PdfPageTop, objgs_TagsCond.pdfPageTop, strComparisonOpPdfPageTop);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_selectSpanRange) == true)
{
const strComparisonOpselectSpanRange:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_selectSpanRange];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_selectSpanRange, objgs_TagsCond.selectSpanRange, strComparisonOpselectSpanRange);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfDivLet) == true)
{
const strComparisonOpPdfDivLet:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfDivLet];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfDivLet, objgs_TagsCond.pdfDivLet, strComparisonOpPdfDivLet);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfDivTop) == true)
{
const strComparisonOpPdfDivTop:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfDivTop];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfDivTop, objgs_TagsCond.pdfDivTop, strComparisonOpPdfDivTop);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_PdfZoom) == true)
{
const strComparisonOpPdfZoom:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_PdfZoom];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_PdfZoom, objgs_TagsCond.pdfZoom, strComparisonOpPdfZoom);
}
if (Object.prototype.hasOwnProperty.call(objgs_TagsCond.dicFldComparisonOp, clsgs_TagsEN.con_TagsTypeId) == true)
{
const strComparisonOpTagsTypeId:string = objgs_TagsCond.dicFldComparisonOp[clsgs_TagsEN.con_TagsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TagsEN.con_TagsTypeId, objgs_TagsCond.tagsTypeId, strComparisonOpTagsTypeId);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_Tags(标注),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strTagsId: 标注Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_Tags_GetUniCondStr(objgs_TagsEN: clsgs_TagsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and PaperId = '{0}'", objgs_TagsEN.paperId);
 strWhereCond +=  Format(" and TagsId = '{0}'", objgs_TagsEN.tagsId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_Tags(标注),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperId: 论文Id(要求唯一的字段)
 * @param strTagsId: 标注Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_Tags_GetUniCondStr4Update(objgs_TagsEN: clsgs_TagsEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and TagsId <> '{0}'", objgs_TagsEN.tagsId);
 strWhereCond +=  Format(" and PaperId = '{0}'", objgs_TagsEN.paperId);
 strWhereCond +=  Format(" and TagsId = '{0}'", objgs_TagsEN.tagsId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_TagsENS:源对象
 * @param objgs_TagsENT:目标对象
*/
export  function gs_Tags_CopyObjTo(objgs_TagsENS: clsgs_TagsEN , objgs_TagsENT: clsgs_TagsEN ): void 
{
objgs_TagsENT.tagsId = objgs_TagsENS.tagsId; //标注Id
objgs_TagsENT.tagsContent = objgs_TagsENS.tagsContent; //标注内容
objgs_TagsENT.pdfContent = objgs_TagsENS.pdfContent; //Pdf内容
objgs_TagsENT.pdfPageNum = objgs_TagsENS.pdfPageNum; //Pdf页码
objgs_TagsENT.voteCount = objgs_TagsENS.voteCount; //点赞计数
objgs_TagsENT.userId = objgs_TagsENS.userId; //用户ID
objgs_TagsENT.orderNum = objgs_TagsENS.orderNum; //序号
objgs_TagsENT.updUser = objgs_TagsENS.updUser; //修改人
objgs_TagsENT.updDate = objgs_TagsENS.updDate; //修改日期
objgs_TagsENT.pdfLineNum = objgs_TagsENS.pdfLineNum; //pdf行号
objgs_TagsENT.pdfX = objgs_TagsENS.pdfX; //PdfX
objgs_TagsENT.pdfY = objgs_TagsENS.pdfY; //PdfY
objgs_TagsENT.memo = objgs_TagsENS.memo; //备注
objgs_TagsENT.idCurrEduCls = objgs_TagsENS.idCurrEduCls; //教学班流水号
objgs_TagsENT.paperId = objgs_TagsENS.paperId; //论文Id
objgs_TagsENT.shareId = objgs_TagsENS.shareId; //分享Id
objgs_TagsENT.pdfPageNumIn = objgs_TagsENS.pdfPageNumIn; //PdfPageNumIn
objgs_TagsENT.pdfPageTop = objgs_TagsENS.pdfPageTop; //pdf页面顶部位置
objgs_TagsENT.selectSpanRange = objgs_TagsENS.selectSpanRange; //选择Span范围
objgs_TagsENT.pdfDivLet = objgs_TagsENS.pdfDivLet; //PdfDivLet
objgs_TagsENT.pdfDivTop = objgs_TagsENS.pdfDivTop; //PdfDivTop
objgs_TagsENT.pdfZoom = objgs_TagsENS.pdfZoom; //PdfZoom
objgs_TagsENT.tagsTypeId = objgs_TagsENS.tagsTypeId; //标注类型ID
objgs_TagsENT.sfUpdFldSetStr = objgs_TagsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_TagsENS:源对象
 * @param objgs_TagsENT:目标对象
*/
export  function gs_Tags_GetObjFromJsonObj(objgs_TagsENS: clsgs_TagsEN): clsgs_TagsEN 
{
 const objgs_TagsENT: clsgs_TagsEN = new clsgs_TagsEN();
ObjectAssign(objgs_TagsENT, objgs_TagsENS);
 return objgs_TagsENT;
}