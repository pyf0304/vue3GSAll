
 /**
 * 类名:clsCurrEduClsStuExWApi
 * 表名:CurrEduClsStu(01120125)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 教学班与学生关系(CurrEduClsStu)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { CurrEduClsStu_GetObjLstCache,CurrEduClsStu_GetObjLstAsync,CurrEduClsStu_SortFunByKey,CurrEduClsStu_FilterFunByKey } from "@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsCurrEduClsStuEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN";
import { clsCurrEduClsStuENEx } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const currEduClsStuExController = "CurrEduClsStuExApi";
export const currEduClsStuEx_ConstructorName = "currEduClsStuEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function CurrEduClsStuEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCurrEduClsStuENS:源对象
 * @returns 目标对象=>clsCurrEduClsStuEN:objCurrEduClsStuENT
 **/
export  function CurrEduClsStuEx_CopyToEx(objCurrEduClsStuENS:clsCurrEduClsStuEN ): clsCurrEduClsStuENEx
{
const strThisFuncName  = CurrEduClsStuEx_CopyToEx.name;
 const objCurrEduClsStuENT = new clsCurrEduClsStuENEx();
try
{
ObjectAssign(objCurrEduClsStuENT, objCurrEduClsStuENS);
 return objCurrEduClsStuENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, currEduClsStuEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objCurrEduClsStuENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function CurrEduClsStuEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strIdCurrEduCls:string):Promise<Array<clsCurrEduClsStuENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrCurrEduClsStuObjLst = await CurrEduClsStu_GetObjLstCache(strIdCurrEduCls);
const arrCurrEduClsStuExObjLst = arrCurrEduClsStuObjLst.map(CurrEduClsStuEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsCurrEduClsStuEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrCurrEduClsStuExObjLst) {
await CurrEduClsStuEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrCurrEduClsStuExObjLst.length == 0) return arrCurrEduClsStuExObjLst;
let arrCurrEduClsStuSel: Array < clsCurrEduClsStuENEx > = arrCurrEduClsStuExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objCurrEduClsStuCond = new clsCurrEduClsStuENEx();
ObjectAssign(objCurrEduClsStuCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsCurrEduClsStuWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objCurrEduClsStuCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrCurrEduClsStuSel = arrCurrEduClsStuSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrCurrEduClsStuSel.length == 0) return arrCurrEduClsStuSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(CurrEduClsStuEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(objPagerPara.sortFun);
}
arrCurrEduClsStuSel = arrCurrEduClsStuSel.slice(intStart, intEnd);     
return arrCurrEduClsStuSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, currEduClsStuEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCurrEduClsStuENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function CurrEduClsStuEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsCurrEduClsStuENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrCurrEduClsStuObjLst = await CurrEduClsStu_GetObjLstAsync(objPagerPara.whereCond);
const arrCurrEduClsStuExObjLst = arrCurrEduClsStuObjLst.map(CurrEduClsStuEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsCurrEduClsStuEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrCurrEduClsStuExObjLst) {
await CurrEduClsStuEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrCurrEduClsStuExObjLst.length == 0) return arrCurrEduClsStuExObjLst;
let arrCurrEduClsStuSel: Array < clsCurrEduClsStuENEx > = arrCurrEduClsStuExObjLst;
try {
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(CurrEduClsStuEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(objPagerPara.sortFun);
}
arrCurrEduClsStuSel = arrCurrEduClsStuSel.slice(intStart, intEnd);     
return arrCurrEduClsStuSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, currEduClsStuEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsCurrEduClsStuENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function CurrEduClsStuEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsCurrEduClsStuENEx.con_StuName:
return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
return a.stuName.localeCompare(b.stuName);
}
        default:
return CurrEduClsStu_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsCurrEduClsStuENEx.con_StuName:
return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
return b.stuName.localeCompare(a.stuName);
}
        default:
return CurrEduClsStu_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function CurrEduClsStuEx_FuncMapByFldName(strFldName: string, objCurrEduClsStuEx: clsCurrEduClsStuENEx)
{
const strThisFuncName = CurrEduClsStuEx_FuncMapByFldName.name;
console.log(objCurrEduClsStuEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsCurrEduClsStuEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-03-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function CurrEduClsStuEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsCurrEduClsStuENEx.con_StuName:
return (obj: clsCurrEduClsStuENEx) => {
return obj.stuName === value;
}
        default:
return CurrEduClsStu_FilterFunByKey(strKey, value);
 }
}
