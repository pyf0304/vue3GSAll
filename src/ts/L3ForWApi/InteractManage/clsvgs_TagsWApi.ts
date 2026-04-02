
 /**
 * 类名:clsvgs_TagsWApi
 * 表名:vgs_Tags(01120757)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:02
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
 * 论文标注视图(vgs_Tags)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvgs_TagsEN } from "@/ts/L0Entity/InteractManage/clsvgs_TagsEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vgs_Tags_Controller = "vgs_TagsApi";
 export const vgs_Tags_ConstructorName = "vgs_Tags";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTagsId:关键字
 * @returns 对象
 **/
export  async function vgs_Tags_GetObjByTagsIdAsync(strTagsId: string): Promise<clsvgs_TagsEN|null>  
{
const strThisFuncName = "GetObjByTagsIdAsync";

if (IsNullOrEmpty(strTagsId) == true)
{
  const strMsg = Format("参数:[strTagsId]不能为空!(In clsvgs_TagsWApi.GetObjByTagsIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strTagsId.length != 10)
{
const strMsg = Format("缓存分类变量:[strTagsId]的长度:[{0}]不正确!(clsvgs_TagsWApi.GetObjByTagsIdAsync)", strTagsId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByTagsId";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const objvgs_Tags = vgs_Tags_GetObjFromJsonObj(returnObj);
return objvgs_Tags;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetNameByTagsIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vgs_Tags_SortFunDefa(a:clsvgs_TagsEN , b:clsvgs_TagsEN): number 
{
return a.tagsId.localeCompare(b.tagsId);
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
export  function vgs_Tags_SortFunDefa2Fld(a:clsvgs_TagsEN , b:clsvgs_TagsEN): number 
{
if (a.tagsContent == b.tagsContent) return a.pdfContent.localeCompare(b.pdfContent);
else return a.tagsContent.localeCompare(b.tagsContent);
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
export  function vgs_Tags_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvgs_TagsEN.con_TagsId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return a.tagsId.localeCompare(b.tagsId);
}
case clsvgs_TagsEN.con_TagsContent:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.tagsContent == null) return -1;
if (b.tagsContent == null) return 1;
return a.tagsContent.localeCompare(b.tagsContent);
}
case clsvgs_TagsEN.con_PdfContent:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvgs_TagsEN.con_PdfPageNum:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsvgs_TagsEN.con_VoteCount:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return a.voteCount-b.voteCount;
}
case clsvgs_TagsEN.con_OrderNum:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return a.orderNum-b.orderNum;
}
case clsvgs_TagsEN.con_UpdUser:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvgs_TagsEN.con_UpdDate:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvgs_TagsEN.con_PdfLineNum:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return a.pdfLineNum-b.pdfLineNum;
}
case clsvgs_TagsEN.con_PdfX:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfX == null) return -1;
if (b.pdfX == null) return 1;
return a.pdfX.localeCompare(b.pdfX);
}
case clsvgs_TagsEN.con_PdfY:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfY == null) return -1;
if (b.pdfY == null) return 1;
return a.pdfY.localeCompare(b.pdfY);
}
case clsvgs_TagsEN.con_Memo:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvgs_TagsEN.con_IdCurrEduCls:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvgs_TagsEN.con_PaperTitle:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvgs_TagsEN.con_PaperId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvgs_TagsEN.con_ShareId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
case clsvgs_TagsEN.con_PdfPageNumIn:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfPageNumIn == null) return -1;
if (b.pdfPageNumIn == null) return 1;
return a.pdfPageNumIn.localeCompare(b.pdfPageNumIn);
}
case clsvgs_TagsEN.con_PdfPageTop:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return a.pdfPageTop-b.pdfPageTop;
}
case clsvgs_TagsEN.con_PdfDivLet:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfDivLet == null) return -1;
if (b.pdfDivLet == null) return 1;
return a.pdfDivLet.localeCompare(b.pdfDivLet);
}
case clsvgs_TagsEN.con_PdfDivTop:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfDivTop == null) return -1;
if (b.pdfDivTop == null) return 1;
return a.pdfDivTop.localeCompare(b.pdfDivTop);
}
case clsvgs_TagsEN.con_PdfZoom:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.pdfZoom == null) return -1;
if (b.pdfZoom == null) return 1;
return a.pdfZoom.localeCompare(b.pdfZoom);
}
case clsvgs_TagsEN.con_TagsTypeId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (a.tagsTypeId == null) return -1;
if (b.tagsTypeId == null) return 1;
return a.tagsTypeId.localeCompare(b.tagsTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_Tags]中不存在!(in ${ vgs_Tags_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvgs_TagsEN.con_TagsId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return b.tagsId.localeCompare(a.tagsId);
}
case clsvgs_TagsEN.con_TagsContent:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.tagsContent == null) return -1;
if (a.tagsContent == null) return 1;
return b.tagsContent.localeCompare(a.tagsContent);
}
case clsvgs_TagsEN.con_PdfContent:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvgs_TagsEN.con_PdfPageNum:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsvgs_TagsEN.con_VoteCount:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return b.voteCount-a.voteCount;
}
case clsvgs_TagsEN.con_OrderNum:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return b.orderNum-a.orderNum;
}
case clsvgs_TagsEN.con_UpdUser:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvgs_TagsEN.con_UpdDate:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvgs_TagsEN.con_PdfLineNum:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return b.pdfLineNum-a.pdfLineNum;
}
case clsvgs_TagsEN.con_PdfX:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfX == null) return -1;
if (a.pdfX == null) return 1;
return b.pdfX.localeCompare(a.pdfX);
}
case clsvgs_TagsEN.con_PdfY:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfY == null) return -1;
if (a.pdfY == null) return 1;
return b.pdfY.localeCompare(a.pdfY);
}
case clsvgs_TagsEN.con_Memo:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvgs_TagsEN.con_IdCurrEduCls:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvgs_TagsEN.con_PaperTitle:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvgs_TagsEN.con_PaperId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvgs_TagsEN.con_ShareId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
case clsvgs_TagsEN.con_PdfPageNumIn:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfPageNumIn == null) return -1;
if (a.pdfPageNumIn == null) return 1;
return b.pdfPageNumIn.localeCompare(a.pdfPageNumIn);
}
case clsvgs_TagsEN.con_PdfPageTop:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
return b.pdfPageTop-a.pdfPageTop;
}
case clsvgs_TagsEN.con_PdfDivLet:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfDivLet == null) return -1;
if (a.pdfDivLet == null) return 1;
return b.pdfDivLet.localeCompare(a.pdfDivLet);
}
case clsvgs_TagsEN.con_PdfDivTop:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfDivTop == null) return -1;
if (a.pdfDivTop == null) return 1;
return b.pdfDivTop.localeCompare(a.pdfDivTop);
}
case clsvgs_TagsEN.con_PdfZoom:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.pdfZoom == null) return -1;
if (a.pdfZoom == null) return 1;
return b.pdfZoom.localeCompare(a.pdfZoom);
}
case clsvgs_TagsEN.con_TagsTypeId:
return (a: clsvgs_TagsEN, b: clsvgs_TagsEN) => {
if (b.tagsTypeId == null) return -1;
if (a.tagsTypeId == null) return 1;
return b.tagsTypeId.localeCompare(a.tagsTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_Tags]中不存在!(in ${ vgs_Tags_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_Tags_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvgs_TagsEN.con_TagsId:
return (obj: clsvgs_TagsEN) => {
return obj.tagsId === value;
}
case clsvgs_TagsEN.con_TagsContent:
return (obj: clsvgs_TagsEN) => {
return obj.tagsContent === value;
}
case clsvgs_TagsEN.con_PdfContent:
return (obj: clsvgs_TagsEN) => {
return obj.pdfContent === value;
}
case clsvgs_TagsEN.con_PdfPageNum:
return (obj: clsvgs_TagsEN) => {
return obj.pdfPageNum === value;
}
case clsvgs_TagsEN.con_VoteCount:
return (obj: clsvgs_TagsEN) => {
return obj.voteCount === value;
}
case clsvgs_TagsEN.con_OrderNum:
return (obj: clsvgs_TagsEN) => {
return obj.orderNum === value;
}
case clsvgs_TagsEN.con_UpdUser:
return (obj: clsvgs_TagsEN) => {
return obj.updUser === value;
}
case clsvgs_TagsEN.con_UpdDate:
return (obj: clsvgs_TagsEN) => {
return obj.updDate === value;
}
case clsvgs_TagsEN.con_PdfLineNum:
return (obj: clsvgs_TagsEN) => {
return obj.pdfLineNum === value;
}
case clsvgs_TagsEN.con_PdfX:
return (obj: clsvgs_TagsEN) => {
return obj.pdfX === value;
}
case clsvgs_TagsEN.con_PdfY:
return (obj: clsvgs_TagsEN) => {
return obj.pdfY === value;
}
case clsvgs_TagsEN.con_Memo:
return (obj: clsvgs_TagsEN) => {
return obj.memo === value;
}
case clsvgs_TagsEN.con_IdCurrEduCls:
return (obj: clsvgs_TagsEN) => {
return obj.idCurrEduCls === value;
}
case clsvgs_TagsEN.con_PaperTitle:
return (obj: clsvgs_TagsEN) => {
return obj.paperTitle === value;
}
case clsvgs_TagsEN.con_PaperId:
return (obj: clsvgs_TagsEN) => {
return obj.paperId === value;
}
case clsvgs_TagsEN.con_ShareId:
return (obj: clsvgs_TagsEN) => {
return obj.shareId === value;
}
case clsvgs_TagsEN.con_PdfPageNumIn:
return (obj: clsvgs_TagsEN) => {
return obj.pdfPageNumIn === value;
}
case clsvgs_TagsEN.con_PdfPageTop:
return (obj: clsvgs_TagsEN) => {
return obj.pdfPageTop === value;
}
case clsvgs_TagsEN.con_PdfDivLet:
return (obj: clsvgs_TagsEN) => {
return obj.pdfDivLet === value;
}
case clsvgs_TagsEN.con_PdfDivTop:
return (obj: clsvgs_TagsEN) => {
return obj.pdfDivTop === value;
}
case clsvgs_TagsEN.con_PdfZoom:
return (obj: clsvgs_TagsEN) => {
return obj.pdfZoom === value;
}
case clsvgs_TagsEN.con_TagsTypeId:
return (obj: clsvgs_TagsEN) => {
return obj.tagsTypeId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_Tags]中不存在!(in ${ vgs_Tags_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vgs_Tags__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vgs_Tags_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetFirstObjAsync(strWhereCond: string): Promise<clsvgs_TagsEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const objvgs_Tags = vgs_Tags_GetObjFromJsonObj(returnObj);
return objvgs_Tags;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetObjLstByTagsIdLstAsync(arrTagsId: Array<string>): Promise<Array<clsvgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstByTagsIdLstAsync";
const strAction = "GetObjLstByTagsIdLst";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvgs_TagsEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvgs_TagsEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvgs_TagsEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_Tags_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_Tags_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_IsExistAsync(strTagsId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  async function vgs_Tags_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vgs_Tags_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_Tags_ConstructorName, strThisFuncName);
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
export  function vgs_Tags_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vgs_Tags_GetJSONStrByObj (pobjvgs_TagsEN: clsvgs_TagsEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvgs_TagsEN);
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
export  function vgs_Tags_GetObjLstByJSONStr (strJSON: string): Array<clsvgs_TagsEN>
{
let arrvgs_TagsObjLst = new Array<clsvgs_TagsEN>();
if (strJSON === "")
{
return arrvgs_TagsObjLst;
}
try
{
arrvgs_TagsObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvgs_TagsObjLst;
}
return arrvgs_TagsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_TagsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vgs_Tags_GetObjLstByJSONObjLst (arrvgs_TagsObjLstS: Array<clsvgs_TagsEN>): Array<clsvgs_TagsEN>
{
const arrvgs_TagsObjLst = new Array<clsvgs_TagsEN>();
for (const objInFor of arrvgs_TagsObjLstS) {
const obj1 = vgs_Tags_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvgs_TagsObjLst.push(obj1);
}
return arrvgs_TagsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_Tags_GetObjByJSONStr (strJSON: string): clsvgs_TagsEN
{
let pobjvgs_TagsEN = new clsvgs_TagsEN();
if (strJSON === "")
{
return pobjvgs_TagsEN;
}
try
{
pobjvgs_TagsEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvgs_TagsEN;
}
return pobjvgs_TagsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vgs_Tags_GetCombineCondition(objvgs_TagsCond: clsvgs_TagsEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_TagsId) == true)
{
const strComparisonOpTagsId:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_TagsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_TagsId, objvgs_TagsCond.tagsId, strComparisonOpTagsId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfContent, objvgs_TagsCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_TagsEN.con_PdfPageNum, objvgs_TagsCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_VoteCount) == true)
{
const strComparisonOpVoteCount:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_VoteCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_TagsEN.con_VoteCount, objvgs_TagsCond.voteCount, strComparisonOpVoteCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_TagsEN.con_OrderNum, objvgs_TagsCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_UpdUser, objvgs_TagsCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_UpdDate, objvgs_TagsCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfLineNum) == true)
{
const strComparisonOpPdfLineNum:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfLineNum];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_TagsEN.con_PdfLineNum, objvgs_TagsCond.pdfLineNum, strComparisonOpPdfLineNum);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfX) == true)
{
const strComparisonOpPdfX:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfX];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfX, objvgs_TagsCond.pdfX, strComparisonOpPdfX);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfY) == true)
{
const strComparisonOpPdfY:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfY];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfY, objvgs_TagsCond.pdfY, strComparisonOpPdfY);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_Memo, objvgs_TagsCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_IdCurrEduCls, objvgs_TagsCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PaperTitle, objvgs_TagsCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PaperId, objvgs_TagsCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_ShareId, objvgs_TagsCond.shareId, strComparisonOpShareId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfPageNumIn) == true)
{
const strComparisonOpPdfPageNumIn:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfPageNumIn];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfPageNumIn, objvgs_TagsCond.pdfPageNumIn, strComparisonOpPdfPageNumIn);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfPageTop) == true)
{
const strComparisonOpPdfPageTop:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfPageTop];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_TagsEN.con_PdfPageTop, objvgs_TagsCond.pdfPageTop, strComparisonOpPdfPageTop);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfDivLet) == true)
{
const strComparisonOpPdfDivLet:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfDivLet];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfDivLet, objvgs_TagsCond.pdfDivLet, strComparisonOpPdfDivLet);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfDivTop) == true)
{
const strComparisonOpPdfDivTop:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfDivTop];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfDivTop, objvgs_TagsCond.pdfDivTop, strComparisonOpPdfDivTop);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_PdfZoom) == true)
{
const strComparisonOpPdfZoom:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_PdfZoom];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_PdfZoom, objvgs_TagsCond.pdfZoom, strComparisonOpPdfZoom);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TagsCond.dicFldComparisonOp, clsvgs_TagsEN.con_TagsTypeId) == true)
{
const strComparisonOpTagsTypeId:string = objvgs_TagsCond.dicFldComparisonOp[clsvgs_TagsEN.con_TagsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TagsEN.con_TagsTypeId, objvgs_TagsCond.tagsTypeId, strComparisonOpTagsTypeId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_TagsENS:源对象
 * @param objvgs_TagsENT:目标对象
*/
export  function vgs_Tags_CopyObjTo(objvgs_TagsENS: clsvgs_TagsEN , objvgs_TagsENT: clsvgs_TagsEN ): void 
{
objvgs_TagsENT.tagsId = objvgs_TagsENS.tagsId; //标注Id
objvgs_TagsENT.tagsContent = objvgs_TagsENS.tagsContent; //标注内容
objvgs_TagsENT.pdfContent = objvgs_TagsENS.pdfContent; //Pdf内容
objvgs_TagsENT.pdfPageNum = objvgs_TagsENS.pdfPageNum; //Pdf页码
objvgs_TagsENT.voteCount = objvgs_TagsENS.voteCount; //点赞计数
objvgs_TagsENT.orderNum = objvgs_TagsENS.orderNum; //序号
objvgs_TagsENT.updUser = objvgs_TagsENS.updUser; //修改人
objvgs_TagsENT.updDate = objvgs_TagsENS.updDate; //修改日期
objvgs_TagsENT.pdfLineNum = objvgs_TagsENS.pdfLineNum; //pdf行号
objvgs_TagsENT.pdfX = objvgs_TagsENS.pdfX; //PdfX
objvgs_TagsENT.pdfY = objvgs_TagsENS.pdfY; //PdfY
objvgs_TagsENT.memo = objvgs_TagsENS.memo; //备注
objvgs_TagsENT.idCurrEduCls = objvgs_TagsENS.idCurrEduCls; //教学班流水号
objvgs_TagsENT.paperTitle = objvgs_TagsENS.paperTitle; //论文标题
objvgs_TagsENT.paperId = objvgs_TagsENS.paperId; //论文Id
objvgs_TagsENT.shareId = objvgs_TagsENS.shareId; //分享Id
objvgs_TagsENT.pdfPageNumIn = objvgs_TagsENS.pdfPageNumIn; //PdfPageNumIn
objvgs_TagsENT.pdfPageTop = objvgs_TagsENS.pdfPageTop; //pdf页面顶部位置
objvgs_TagsENT.pdfDivLet = objvgs_TagsENS.pdfDivLet; //PdfDivLet
objvgs_TagsENT.pdfDivTop = objvgs_TagsENS.pdfDivTop; //PdfDivTop
objvgs_TagsENT.pdfZoom = objvgs_TagsENS.pdfZoom; //PdfZoom
objvgs_TagsENT.tagsTypeId = objvgs_TagsENS.tagsTypeId; //标注类型ID
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_TagsENS:源对象
 * @param objvgs_TagsENT:目标对象
*/
export  function vgs_Tags_GetObjFromJsonObj(objvgs_TagsENS: clsvgs_TagsEN): clsvgs_TagsEN 
{
 const objvgs_TagsENT: clsvgs_TagsEN = new clsvgs_TagsEN();
ObjectAssign(objvgs_TagsENT, objvgs_TagsENS);
 return objvgs_TagsENT;
}