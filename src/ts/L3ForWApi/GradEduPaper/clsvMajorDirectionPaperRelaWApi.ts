
 /**
 * 类名:clsvMajorDirectionPaperRelaWApi
 * 表名:vMajorDirectionPaperRela(01120555)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:54
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
 * v专业方向论文关系(vMajorDirectionPaperRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvMajorDirectionPaperRelaEN } from "@/ts/L0Entity/GradEduPaper/clsvMajorDirectionPaperRelaEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vMajorDirectionPaperRela_Controller = "vMajorDirectionPaperRelaApi";
 export const vMajorDirectionPaperRela_ConstructorName = "vMajorDirectionPaperRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vMajorDirectionPaperRela_GetObjBymIdAsync(lngmId: number): Promise<clsvMajorDirectionPaperRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvMajorDirectionPaperRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const objvMajorDirectionPaperRela = vMajorDirectionPaperRela_GetObjFromJsonObj(returnObj);
return objvMajorDirectionPaperRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vMajorDirectionPaperRela_SortFunDefa(a:clsvMajorDirectionPaperRelaEN , b:clsvMajorDirectionPaperRelaEN): number 
{
return a.mId-b.mId;
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
export  function vMajorDirectionPaperRela_SortFunDefa2Fld(a:clsvMajorDirectionPaperRelaEN , b:clsvMajorDirectionPaperRelaEN): number 
{
if (a.majorDirectionId == b.majorDirectionId) return a.paperId.localeCompare(b.paperId);
else return a.majorDirectionId.localeCompare(b.majorDirectionId);
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
export  function vMajorDirectionPaperRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvMajorDirectionPaperRelaEN.con_mId:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
return a.mId-b.mId;
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionId:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.majorDirectionId == null) return -1;
if (b.majorDirectionId == null) return 1;
return a.majorDirectionId.localeCompare(b.majorDirectionId);
}
case clsvMajorDirectionPaperRelaEN.con_PaperId:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvMajorDirectionPaperRelaEN.con_UpdDate:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvMajorDirectionPaperRelaEN.con_UpdUser:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsvMajorDirectionPaperRelaEN.con_Memo:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvMajorDirectionPaperRelaEN.con_IdXzMajor:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.majorDirectionENName == null) return -1;
if (b.majorDirectionENName == null) return 1;
return a.majorDirectionENName.localeCompare(b.majorDirectionENName);
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.majorDirectionName == null) return -1;
if (b.majorDirectionName == null) return 1;
return a.majorDirectionName.localeCompare(b.majorDirectionName);
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.majorDirectionExplain == null) return -1;
if (b.majorDirectionExplain == null) return 1;
return a.majorDirectionExplain.localeCompare(b.majorDirectionExplain);
}
case clsvMajorDirectionPaperRelaEN.con_IsVisible:
return (a: clsvMajorDirectionPaperRelaEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsvMajorDirectionPaperRelaEN.con_PaperTitle:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvMajorDirectionPaperRelaEN.con_PaperContent:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.paperContent == null) return -1;
if (b.paperContent == null) return 1;
return a.paperContent.localeCompare(b.paperContent);
}
case clsvMajorDirectionPaperRelaEN.con_Periodical:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.periodical == null) return -1;
if (b.periodical == null) return 1;
return a.periodical.localeCompare(b.periodical);
}
case clsvMajorDirectionPaperRelaEN.con_Author:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.author == null) return -1;
if (b.author == null) return 1;
return a.author.localeCompare(b.author);
}
case clsvMajorDirectionPaperRelaEN.con_ResearchQuestion:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.researchQuestion == null) return -1;
if (b.researchQuestion == null) return 1;
return a.researchQuestion.localeCompare(b.researchQuestion);
}
case clsvMajorDirectionPaperRelaEN.con_Keyword:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.keyword == null) return -1;
if (b.keyword == null) return 1;
return a.keyword.localeCompare(b.keyword);
}
case clsvMajorDirectionPaperRelaEN.con_LiteratureSources:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.literatureSources == null) return -1;
if (b.literatureSources == null) return 1;
return a.literatureSources.localeCompare(b.literatureSources);
}
case clsvMajorDirectionPaperRelaEN.con_LiteratureLink:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.literatureLink == null) return -1;
if (b.literatureLink == null) return 1;
return a.literatureLink.localeCompare(b.literatureLink);
}
case clsvMajorDirectionPaperRelaEN.con_UploadfileUrl:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.uploadfileUrl == null) return -1;
if (b.uploadfileUrl == null) return 1;
return a.uploadfileUrl.localeCompare(b.uploadfileUrl);
}
case clsvMajorDirectionPaperRelaEN.con_IsQuotethesis:
return (a: clsvMajorDirectionPaperRelaEN) => {
if (a.isQuotethesis == true) return 1;
else return -1
}
case clsvMajorDirectionPaperRelaEN.con_Checker:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.checker == null) return -1;
if (b.checker == null) return 1;
return a.checker.localeCompare(b.checker);
}
case clsvMajorDirectionPaperRelaEN.con_IsChecked:
return (a: clsvMajorDirectionPaperRelaEN) => {
if (a.isChecked == true) return 1;
else return -1
}
case clsvMajorDirectionPaperRelaEN.con_MajorID:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.majorID == null) return -1;
if (b.majorID == null) return 1;
return a.majorID.localeCompare(b.majorID);
}
case clsvMajorDirectionPaperRelaEN.con_MajorName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.majorName == null) return -1;
if (b.majorName == null) return 1;
return a.majorName.localeCompare(b.majorName);
}
case clsvMajorDirectionPaperRelaEN.con_UserName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (a.userName == null) return -1;
if (b.userName == null) return 1;
return a.userName.localeCompare(b.userName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vMajorDirectionPaperRela]中不存在!(in ${ vMajorDirectionPaperRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvMajorDirectionPaperRelaEN.con_mId:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
return b.mId-a.mId;
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionId:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.majorDirectionId == null) return -1;
if (a.majorDirectionId == null) return 1;
return b.majorDirectionId.localeCompare(a.majorDirectionId);
}
case clsvMajorDirectionPaperRelaEN.con_PaperId:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvMajorDirectionPaperRelaEN.con_UpdDate:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvMajorDirectionPaperRelaEN.con_UpdUser:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsvMajorDirectionPaperRelaEN.con_Memo:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvMajorDirectionPaperRelaEN.con_IdXzMajor:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.majorDirectionENName == null) return -1;
if (a.majorDirectionENName == null) return 1;
return b.majorDirectionENName.localeCompare(a.majorDirectionENName);
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.majorDirectionName == null) return -1;
if (a.majorDirectionName == null) return 1;
return b.majorDirectionName.localeCompare(a.majorDirectionName);
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.majorDirectionExplain == null) return -1;
if (a.majorDirectionExplain == null) return 1;
return b.majorDirectionExplain.localeCompare(a.majorDirectionExplain);
}
case clsvMajorDirectionPaperRelaEN.con_IsVisible:
return (b: clsvMajorDirectionPaperRelaEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsvMajorDirectionPaperRelaEN.con_PaperTitle:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvMajorDirectionPaperRelaEN.con_PaperContent:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.paperContent == null) return -1;
if (a.paperContent == null) return 1;
return b.paperContent.localeCompare(a.paperContent);
}
case clsvMajorDirectionPaperRelaEN.con_Periodical:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.periodical == null) return -1;
if (a.periodical == null) return 1;
return b.periodical.localeCompare(a.periodical);
}
case clsvMajorDirectionPaperRelaEN.con_Author:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.author == null) return -1;
if (a.author == null) return 1;
return b.author.localeCompare(a.author);
}
case clsvMajorDirectionPaperRelaEN.con_ResearchQuestion:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.researchQuestion == null) return -1;
if (a.researchQuestion == null) return 1;
return b.researchQuestion.localeCompare(a.researchQuestion);
}
case clsvMajorDirectionPaperRelaEN.con_Keyword:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.keyword == null) return -1;
if (a.keyword == null) return 1;
return b.keyword.localeCompare(a.keyword);
}
case clsvMajorDirectionPaperRelaEN.con_LiteratureSources:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.literatureSources == null) return -1;
if (a.literatureSources == null) return 1;
return b.literatureSources.localeCompare(a.literatureSources);
}
case clsvMajorDirectionPaperRelaEN.con_LiteratureLink:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.literatureLink == null) return -1;
if (a.literatureLink == null) return 1;
return b.literatureLink.localeCompare(a.literatureLink);
}
case clsvMajorDirectionPaperRelaEN.con_UploadfileUrl:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.uploadfileUrl == null) return -1;
if (a.uploadfileUrl == null) return 1;
return b.uploadfileUrl.localeCompare(a.uploadfileUrl);
}
case clsvMajorDirectionPaperRelaEN.con_IsQuotethesis:
return (b: clsvMajorDirectionPaperRelaEN) => {
if (b.isQuotethesis == true) return 1;
else return -1
}
case clsvMajorDirectionPaperRelaEN.con_Checker:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.checker == null) return -1;
if (a.checker == null) return 1;
return b.checker.localeCompare(a.checker);
}
case clsvMajorDirectionPaperRelaEN.con_IsChecked:
return (b: clsvMajorDirectionPaperRelaEN) => {
if (b.isChecked == true) return 1;
else return -1
}
case clsvMajorDirectionPaperRelaEN.con_MajorID:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.majorID == null) return -1;
if (a.majorID == null) return 1;
return b.majorID.localeCompare(a.majorID);
}
case clsvMajorDirectionPaperRelaEN.con_MajorName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.majorName == null) return -1;
if (a.majorName == null) return 1;
return b.majorName.localeCompare(a.majorName);
}
case clsvMajorDirectionPaperRelaEN.con_UserName:
return (a: clsvMajorDirectionPaperRelaEN, b: clsvMajorDirectionPaperRelaEN) => {
if (b.userName == null) return -1;
if (a.userName == null) return 1;
return b.userName.localeCompare(a.userName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vMajorDirectionPaperRela]中不存在!(in ${ vMajorDirectionPaperRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vMajorDirectionPaperRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvMajorDirectionPaperRelaEN.con_mId:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.mId === value;
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionId:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.majorDirectionId === value;
}
case clsvMajorDirectionPaperRelaEN.con_PaperId:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.paperId === value;
}
case clsvMajorDirectionPaperRelaEN.con_UpdDate:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.updDate === value;
}
case clsvMajorDirectionPaperRelaEN.con_UpdUser:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.updUser === value;
}
case clsvMajorDirectionPaperRelaEN.con_Memo:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.memo === value;
}
case clsvMajorDirectionPaperRelaEN.con_IdXzMajor:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.idXzMajor === value;
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.majorDirectionENName === value;
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionName:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.majorDirectionName === value;
}
case clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.majorDirectionExplain === value;
}
case clsvMajorDirectionPaperRelaEN.con_IsVisible:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.isVisible === value;
}
case clsvMajorDirectionPaperRelaEN.con_PaperTitle:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.paperTitle === value;
}
case clsvMajorDirectionPaperRelaEN.con_PaperContent:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.paperContent === value;
}
case clsvMajorDirectionPaperRelaEN.con_Periodical:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.periodical === value;
}
case clsvMajorDirectionPaperRelaEN.con_Author:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.author === value;
}
case clsvMajorDirectionPaperRelaEN.con_ResearchQuestion:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.researchQuestion === value;
}
case clsvMajorDirectionPaperRelaEN.con_Keyword:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.keyword === value;
}
case clsvMajorDirectionPaperRelaEN.con_LiteratureSources:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.literatureSources === value;
}
case clsvMajorDirectionPaperRelaEN.con_LiteratureLink:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.literatureLink === value;
}
case clsvMajorDirectionPaperRelaEN.con_UploadfileUrl:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.uploadfileUrl === value;
}
case clsvMajorDirectionPaperRelaEN.con_IsQuotethesis:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.isQuotethesis === value;
}
case clsvMajorDirectionPaperRelaEN.con_Checker:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.checker === value;
}
case clsvMajorDirectionPaperRelaEN.con_IsChecked:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.isChecked === value;
}
case clsvMajorDirectionPaperRelaEN.con_MajorID:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.majorID === value;
}
case clsvMajorDirectionPaperRelaEN.con_MajorName:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.majorName === value;
}
case clsvMajorDirectionPaperRelaEN.con_UserName:
return (obj: clsvMajorDirectionPaperRelaEN) => {
return obj.userName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vMajorDirectionPaperRela]中不存在!(in ${ vMajorDirectionPaperRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vMajorDirectionPaperRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vMajorDirectionPaperRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvMajorDirectionPaperRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const objvMajorDirectionPaperRela = vMajorDirectionPaperRela_GetObjFromJsonObj(returnObj);
return objvMajorDirectionPaperRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvMajorDirectionPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMajorDirectionPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function vMajorDirectionPaperRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvMajorDirectionPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMajorDirectionPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vMajorDirectionPaperRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvMajorDirectionPaperRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMajorDirectionPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvMajorDirectionPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMajorDirectionPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvMajorDirectionPaperRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvMajorDirectionPaperRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vMajorDirectionPaperRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vMajorDirectionPaperRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  async function vMajorDirectionPaperRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vMajorDirectionPaperRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vMajorDirectionPaperRela_ConstructorName, strThisFuncName);
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
export  function vMajorDirectionPaperRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vMajorDirectionPaperRela_GetJSONStrByObj (pobjvMajorDirectionPaperRelaEN: clsvMajorDirectionPaperRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvMajorDirectionPaperRelaEN);
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
export  function vMajorDirectionPaperRela_GetObjLstByJSONStr (strJSON: string): Array<clsvMajorDirectionPaperRelaEN>
{
let arrvMajorDirectionPaperRelaObjLst = new Array<clsvMajorDirectionPaperRelaEN>();
if (strJSON === "")
{
return arrvMajorDirectionPaperRelaObjLst;
}
try
{
arrvMajorDirectionPaperRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvMajorDirectionPaperRelaObjLst;
}
return arrvMajorDirectionPaperRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvMajorDirectionPaperRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vMajorDirectionPaperRela_GetObjLstByJSONObjLst (arrvMajorDirectionPaperRelaObjLstS: Array<clsvMajorDirectionPaperRelaEN>): Array<clsvMajorDirectionPaperRelaEN>
{
const arrvMajorDirectionPaperRelaObjLst = new Array<clsvMajorDirectionPaperRelaEN>();
for (const objInFor of arrvMajorDirectionPaperRelaObjLstS) {
const obj1 = vMajorDirectionPaperRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvMajorDirectionPaperRelaObjLst.push(obj1);
}
return arrvMajorDirectionPaperRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vMajorDirectionPaperRela_GetObjByJSONStr (strJSON: string): clsvMajorDirectionPaperRelaEN
{
let pobjvMajorDirectionPaperRelaEN = new clsvMajorDirectionPaperRelaEN();
if (strJSON === "")
{
return pobjvMajorDirectionPaperRelaEN;
}
try
{
pobjvMajorDirectionPaperRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvMajorDirectionPaperRelaEN;
}
return pobjvMajorDirectionPaperRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vMajorDirectionPaperRela_GetCombineCondition(objvMajorDirectionPaperRelaCond: clsvMajorDirectionPaperRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvMajorDirectionPaperRelaEN.con_mId, objvMajorDirectionPaperRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_MajorDirectionId) == true)
{
const strComparisonOpMajorDirectionId:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_MajorDirectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_MajorDirectionId, objvMajorDirectionPaperRelaCond.majorDirectionId, strComparisonOpMajorDirectionId);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_PaperId, objvMajorDirectionPaperRelaCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_UpdDate, objvMajorDirectionPaperRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_UpdUser, objvMajorDirectionPaperRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_Memo, objvMajorDirectionPaperRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_IdXzMajor, objvMajorDirectionPaperRelaCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName) == true)
{
const strComparisonOpMajorDirectionENName:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName, objvMajorDirectionPaperRelaCond.majorDirectionENName, strComparisonOpMajorDirectionENName);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_MajorDirectionName) == true)
{
const strComparisonOpMajorDirectionName:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_MajorDirectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_MajorDirectionName, objvMajorDirectionPaperRelaCond.majorDirectionName, strComparisonOpMajorDirectionName);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain) == true)
{
const strComparisonOpMajorDirectionExplain:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_MajorDirectionExplain, objvMajorDirectionPaperRelaCond.majorDirectionExplain, strComparisonOpMajorDirectionExplain);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_IsVisible) == true)
{
if (objvMajorDirectionPaperRelaCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsvMajorDirectionPaperRelaEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvMajorDirectionPaperRelaEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_PaperTitle, objvMajorDirectionPaperRelaCond.paperTitle, strComparisonOpPaperTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_Periodical) == true)
{
const strComparisonOpPeriodical:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_Periodical];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_Periodical, objvMajorDirectionPaperRelaCond.periodical, strComparisonOpPeriodical);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_Author) == true)
{
const strComparisonOpAuthor:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_Author];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_Author, objvMajorDirectionPaperRelaCond.author, strComparisonOpAuthor);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_ResearchQuestion) == true)
{
const strComparisonOpResearchQuestion:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_ResearchQuestion];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_ResearchQuestion, objvMajorDirectionPaperRelaCond.researchQuestion, strComparisonOpResearchQuestion);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_Keyword) == true)
{
const strComparisonOpKeyword:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_Keyword];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_Keyword, objvMajorDirectionPaperRelaCond.keyword, strComparisonOpKeyword);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_LiteratureSources) == true)
{
const strComparisonOpLiteratureSources:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_LiteratureSources];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_LiteratureSources, objvMajorDirectionPaperRelaCond.literatureSources, strComparisonOpLiteratureSources);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_LiteratureLink) == true)
{
const strComparisonOpLiteratureLink:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_LiteratureLink];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_LiteratureLink, objvMajorDirectionPaperRelaCond.literatureLink, strComparisonOpLiteratureLink);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_UploadfileUrl) == true)
{
const strComparisonOpUploadfileUrl:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_UploadfileUrl];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_UploadfileUrl, objvMajorDirectionPaperRelaCond.uploadfileUrl, strComparisonOpUploadfileUrl);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_IsQuotethesis) == true)
{
if (objvMajorDirectionPaperRelaCond.isQuotethesis == true)
{
strWhereCond += Format(" And {0} = '1'", clsvMajorDirectionPaperRelaEN.con_IsQuotethesis);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvMajorDirectionPaperRelaEN.con_IsQuotethesis);
}
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_Checker) == true)
{
const strComparisonOpChecker:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_Checker];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_Checker, objvMajorDirectionPaperRelaCond.checker, strComparisonOpChecker);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_IsChecked) == true)
{
if (objvMajorDirectionPaperRelaCond.isChecked == true)
{
strWhereCond += Format(" And {0} = '1'", clsvMajorDirectionPaperRelaEN.con_IsChecked);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvMajorDirectionPaperRelaEN.con_IsChecked);
}
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_MajorID) == true)
{
const strComparisonOpMajorID:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_MajorID];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_MajorID, objvMajorDirectionPaperRelaCond.majorID, strComparisonOpMajorID);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_MajorName) == true)
{
const strComparisonOpMajorName:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_MajorName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_MajorName, objvMajorDirectionPaperRelaCond.majorName, strComparisonOpMajorName);
}
if (Object.prototype.hasOwnProperty.call(objvMajorDirectionPaperRelaCond.dicFldComparisonOp, clsvMajorDirectionPaperRelaEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvMajorDirectionPaperRelaCond.dicFldComparisonOp[clsvMajorDirectionPaperRelaEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvMajorDirectionPaperRelaEN.con_UserName, objvMajorDirectionPaperRelaCond.userName, strComparisonOpUserName);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvMajorDirectionPaperRelaENS:源对象
 * @param objvMajorDirectionPaperRelaENT:目标对象
*/
export  function vMajorDirectionPaperRela_CopyObjTo(objvMajorDirectionPaperRelaENS: clsvMajorDirectionPaperRelaEN , objvMajorDirectionPaperRelaENT: clsvMajorDirectionPaperRelaEN ): void 
{
objvMajorDirectionPaperRelaENT.mId = objvMajorDirectionPaperRelaENS.mId; //mId
objvMajorDirectionPaperRelaENT.majorDirectionId = objvMajorDirectionPaperRelaENS.majorDirectionId; //研究方向Id
objvMajorDirectionPaperRelaENT.paperId = objvMajorDirectionPaperRelaENS.paperId; //论文Id
objvMajorDirectionPaperRelaENT.updDate = objvMajorDirectionPaperRelaENS.updDate; //修改日期
objvMajorDirectionPaperRelaENT.updUser = objvMajorDirectionPaperRelaENS.updUser; //修改人
objvMajorDirectionPaperRelaENT.memo = objvMajorDirectionPaperRelaENS.memo; //备注
objvMajorDirectionPaperRelaENT.idXzMajor = objvMajorDirectionPaperRelaENS.idXzMajor; //专业流水号
objvMajorDirectionPaperRelaENT.majorDirectionENName = objvMajorDirectionPaperRelaENS.majorDirectionENName; //研究方向英文名
objvMajorDirectionPaperRelaENT.majorDirectionName = objvMajorDirectionPaperRelaENS.majorDirectionName; //研究方向名
objvMajorDirectionPaperRelaENT.majorDirectionExplain = objvMajorDirectionPaperRelaENS.majorDirectionExplain; //专业方向说明
objvMajorDirectionPaperRelaENT.isVisible = objvMajorDirectionPaperRelaENS.isVisible; //是否显示
objvMajorDirectionPaperRelaENT.paperTitle = objvMajorDirectionPaperRelaENS.paperTitle; //论文标题
objvMajorDirectionPaperRelaENT.paperContent = objvMajorDirectionPaperRelaENS.paperContent; //主题内容
objvMajorDirectionPaperRelaENT.periodical = objvMajorDirectionPaperRelaENS.periodical; //期刊
objvMajorDirectionPaperRelaENT.author = objvMajorDirectionPaperRelaENS.author; //作者
objvMajorDirectionPaperRelaENT.researchQuestion = objvMajorDirectionPaperRelaENS.researchQuestion; //研究问题
objvMajorDirectionPaperRelaENT.keyword = objvMajorDirectionPaperRelaENS.keyword; //关键字
objvMajorDirectionPaperRelaENT.literatureSources = objvMajorDirectionPaperRelaENS.literatureSources; //文献来源
objvMajorDirectionPaperRelaENT.literatureLink = objvMajorDirectionPaperRelaENS.literatureLink; //文献链接
objvMajorDirectionPaperRelaENT.uploadfileUrl = objvMajorDirectionPaperRelaENS.uploadfileUrl; //文件地址
objvMajorDirectionPaperRelaENT.isQuotethesis = objvMajorDirectionPaperRelaENS.isQuotethesis; //是否引用论文
objvMajorDirectionPaperRelaENT.checker = objvMajorDirectionPaperRelaENS.checker; //审核人
objvMajorDirectionPaperRelaENT.isChecked = objvMajorDirectionPaperRelaENS.isChecked; //是否检查
objvMajorDirectionPaperRelaENT.majorID = objvMajorDirectionPaperRelaENS.majorID; //专业ID
objvMajorDirectionPaperRelaENT.majorName = objvMajorDirectionPaperRelaENS.majorName; //专业名称
objvMajorDirectionPaperRelaENT.userName = objvMajorDirectionPaperRelaENS.userName; //用户名
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvMajorDirectionPaperRelaENS:源对象
 * @param objvMajorDirectionPaperRelaENT:目标对象
*/
export  function vMajorDirectionPaperRela_GetObjFromJsonObj(objvMajorDirectionPaperRelaENS: clsvMajorDirectionPaperRelaEN): clsvMajorDirectionPaperRelaEN 
{
 const objvMajorDirectionPaperRelaENT: clsvMajorDirectionPaperRelaEN = new clsvMajorDirectionPaperRelaEN();
ObjectAssign(objvMajorDirectionPaperRelaENT, objvMajorDirectionPaperRelaENS);
 return objvMajorDirectionPaperRelaENT;
}