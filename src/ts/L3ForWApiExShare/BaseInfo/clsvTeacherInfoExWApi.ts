
 /**
 * 类名:clsvTeacherInfoExWApi
 * 表名:vTeacherInfo(01120094)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 12:05:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * v教师(vTeacherInfo)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年01月14日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { vTeacherInfo_GetObjLstCache,vTeacherInfo_GetObjLstAsync,vTeacherInfo_SortFunByKey } from "@/ts/L3ForWApi/BaseInfo/clsvTeacherInfoWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvTeacherInfoEN } from "@/ts/L0Entity/BaseInfo/clsvTeacherInfoEN";
import { clsvTeacherInfoENEx } from "@/ts/L0Entity/BaseInfo/clsvTeacherInfoENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const vTeacherInfoExController = "vTeacherInfoExApi";
export const vTeacherInfoEx_ConstructorName = "vTeacherInfoEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function vTeacherInfoEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvTeacherInfoENS:源对象
 * @returns 目标对象=>clsvTeacherInfoEN:objvTeacherInfoENT
 **/
export  function vTeacherInfoEx_CopyToEx(objvTeacherInfoENS:clsvTeacherInfoEN ): clsvTeacherInfoENEx
{
const strThisFuncName  = vTeacherInfoEx_CopyToEx.name;
 const objvTeacherInfoENT = new clsvTeacherInfoENEx();
try
{
ObjectAssign(objvTeacherInfoENT, objvTeacherInfoENS);
 return objvTeacherInfoENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, vTeacherInfoEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objvTeacherInfoENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function vTeacherInfoEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsvTeacherInfoENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrvTeacherInfoObjLst = await vTeacherInfo_GetObjLstCache();
const arrvTeacherInfoExObjLst = arrvTeacherInfoObjLst.map(vTeacherInfoEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsvTeacherInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrvTeacherInfoExObjLst) {
await vTeacherInfoEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrvTeacherInfoExObjLst.length == 0) return arrvTeacherInfoExObjLst;
let arrvTeacherInfoSel: Array < clsvTeacherInfoENEx > = arrvTeacherInfoExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvTeacherInfoCond = new clsvTeacherInfoENEx();
ObjectAssign(objvTeacherInfoCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsvTeacherInfoWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objvTeacherInfoCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvTeacherInfoSel.length == 0) return arrvTeacherInfoSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvTeacherInfoSel = arrvTeacherInfoSel.sort(vTeacherInfoEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvTeacherInfoSel = arrvTeacherInfoSel.sort(objPagerPara.sortFun);
}
arrvTeacherInfoSel = arrvTeacherInfoSel.slice(intStart, intEnd);     
return arrvTeacherInfoSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vTeacherInfoEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTeacherInfoENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function vTeacherInfoEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsvTeacherInfoENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrvTeacherInfoObjLst = await vTeacherInfo_GetObjLstAsync(objPagerPara.whereCond);
const arrvTeacherInfoExObjLst = arrvTeacherInfoObjLst.map(vTeacherInfoEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsvTeacherInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrvTeacherInfoExObjLst) {
await vTeacherInfoEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrvTeacherInfoExObjLst.length == 0) return arrvTeacherInfoExObjLst;
let arrvTeacherInfoSel: Array < clsvTeacherInfoENEx > = arrvTeacherInfoExObjLst;
try {
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvTeacherInfoSel = arrvTeacherInfoSel.sort(vTeacherInfoEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvTeacherInfoSel = arrvTeacherInfoSel.sort(objPagerPara.sortFun);
}
arrvTeacherInfoSel = arrvTeacherInfoSel.slice(intStart, intEnd);     
return arrvTeacherInfoSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vTeacherInfoEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTeacherInfoENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTeacherInfoEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return vTeacherInfo_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return vTeacherInfo_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function vTeacherInfoEx_FuncMapByFldName(strFldName: string, objvTeacherInfoEx: clsvTeacherInfoENEx)
{
const strThisFuncName = vTeacherInfoEx_FuncMapByFldName.name;
console.log(objvTeacherInfoEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsvTeacherInfoEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
