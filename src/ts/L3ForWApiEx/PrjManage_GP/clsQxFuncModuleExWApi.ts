
 /**
 * 类名:clsQxFuncModuleExWApi
 * 表名:QxFuncModule(00140086)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 11:45:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 功能模块(QxFuncModule)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年03月20日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { QxFuncModule_GetObjLstCache,QxFuncModule_GetObjLstAsync,QxFuncModule_SortFunByKey } from "@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsQxFuncModuleEN } from "@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleEN";
import { clsQxFuncModuleENEx } from "@/ts/L0Entity/PrjManage_GP/clsQxFuncModuleENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const qxFuncModuleExController = "QxFuncModuleExApi";
export const qxFuncModuleEx_ConstructorName = "qxFuncModuleEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function QxFuncModuleEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxFuncModuleENS:源对象
 * @returns 目标对象=>clsQxFuncModuleEN:objQxFuncModuleENT
 **/
export  function QxFuncModuleEx_CopyToEx(objQxFuncModuleENS:clsQxFuncModuleEN ): clsQxFuncModuleENEx
{
const strThisFuncName  = QxFuncModuleEx_CopyToEx.name;
 const objQxFuncModuleENT = new clsQxFuncModuleENEx();
try
{
ObjectAssign(objQxFuncModuleENT, objQxFuncModuleENS);
 return objQxFuncModuleENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, qxFuncModuleEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objQxFuncModuleENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxFuncModuleEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsQxFuncModuleENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrQxFuncModuleObjLst = await QxFuncModule_GetObjLstCache();
const arrQxFuncModuleExObjLst = arrQxFuncModuleObjLst.map(QxFuncModuleEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsQxFuncModuleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrQxFuncModuleExObjLst) {
await QxFuncModuleEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrQxFuncModuleExObjLst.length == 0) return arrQxFuncModuleExObjLst;
let arrQxFuncModuleSel: Array < clsQxFuncModuleENEx > = arrQxFuncModuleExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objQxFuncModuleCond = new clsQxFuncModuleENEx();
ObjectAssign(objQxFuncModuleCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsQxFuncModuleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objQxFuncModuleCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrQxFuncModuleSel = arrQxFuncModuleSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrQxFuncModuleSel.length == 0) return arrQxFuncModuleSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxFuncModuleSel = arrQxFuncModuleSel.sort(QxFuncModuleEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxFuncModuleSel = arrQxFuncModuleSel.sort(objPagerPara.sortFun);
}
arrQxFuncModuleSel = arrQxFuncModuleSel.slice(intStart, intEnd);     
return arrQxFuncModuleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxFuncModuleEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxFuncModuleENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function QxFuncModuleEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsQxFuncModuleENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrQxFuncModuleObjLst = await QxFuncModule_GetObjLstAsync(objPagerPara.whereCond);
const arrQxFuncModuleExObjLst = arrQxFuncModuleObjLst.map(QxFuncModuleEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsQxFuncModuleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrQxFuncModuleExObjLst) {
await QxFuncModuleEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrQxFuncModuleExObjLst.length == 0) return arrQxFuncModuleExObjLst;
let arrQxFuncModuleSel: Array < clsQxFuncModuleENEx > = arrQxFuncModuleExObjLst;
try {
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrQxFuncModuleSel = arrQxFuncModuleSel.sort(QxFuncModuleEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrQxFuncModuleSel = arrQxFuncModuleSel.sort(objPagerPara.sortFun);
}
arrQxFuncModuleSel = arrQxFuncModuleSel.slice(intStart, intEnd);     
return arrQxFuncModuleSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, qxFuncModuleEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsQxFuncModuleENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxFuncModuleEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return QxFuncModule_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return QxFuncModule_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-03-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function QxFuncModuleEx_FuncMapByFldName(strFldName: string, objQxFuncModuleEx: clsQxFuncModuleENEx)
{
const strThisFuncName = QxFuncModuleEx_FuncMapByFldName.name;
console.log(objQxFuncModuleEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsQxFuncModuleEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
