
 /**
 * 类名:clsAcademicJournalsExWApi
 * 表名:AcademicJournals(01120929)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:44:05
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 学术期刊(AcademicJournals)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { AcademicJournals_GetObjLstCache,AcademicJournals_GetObjLstAsync,AcademicJournals_SortFunByKey,AcademicJournals_FilterFunByKey } from "@/ts/L3ForWApi/GradEduPaper/clsAcademicJournalsWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsAcademicJournalsEN } from "@/ts/L0Entity/GradEduPaper/clsAcademicJournalsEN";
import { clsAcademicJournalsENEx } from "@/ts/L0Entity/GradEduPaper/clsAcademicJournalsENEx";
import { JournalSubjectCategory_func,JournalSubjectCategory_funcKey } from "@/ts/L3ForWApi/GradEduPaper/clsJournalSubjectCategoryWApi";
import { clsJournalSubjectCategoryEN } from "@/ts/L0Entity/GradEduPaper/clsJournalSubjectCategoryEN";
import { JournalSubject_func,JournalSubject_funcKey } from "@/ts/L3ForWApi/GradEduPaper/clsJournalSubjectWApi";
import { clsJournalSubjectEN } from "@/ts/L0Entity/GradEduPaper/clsJournalSubjectEN";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const academicJournalsExController = "AcademicJournalsExApi";
export const academicJournalsEx_ConstructorName = "academicJournalsEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function AcademicJournalsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objAcademicJournalsENS:源对象
 * @returns 目标对象=>clsAcademicJournalsEN:objAcademicJournalsENT
 **/
export  function AcademicJournalsEx_CopyToEx(objAcademicJournalsENS:clsAcademicJournalsEN ): clsAcademicJournalsENEx
{
const strThisFuncName  = AcademicJournalsEx_CopyToEx.name;
 const objAcademicJournalsENT = new clsAcademicJournalsENEx();
try
{
ObjectAssign(objAcademicJournalsENT, objAcademicJournalsENS);
 return objAcademicJournalsENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objAcademicJournalsENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function AcademicJournalsEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsAcademicJournalsENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrAcademicJournalsObjLst = await AcademicJournals_GetObjLstCache();
const arrAcademicJournalsExObjLst = arrAcademicJournalsObjLst.map(AcademicJournalsEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsAcademicJournalsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrAcademicJournalsExObjLst) {
await AcademicJournalsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrAcademicJournalsExObjLst.length == 0) return arrAcademicJournalsExObjLst;
let arrAcademicJournalsSel: Array < clsAcademicJournalsENEx > = arrAcademicJournalsExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objAcademicJournalsCond = new clsAcademicJournalsENEx();
ObjectAssign(objAcademicJournalsCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsAcademicJournalsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objAcademicJournalsCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrAcademicJournalsSel = arrAcademicJournalsSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrAcademicJournalsSel.length == 0) return arrAcademicJournalsSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrAcademicJournalsSel = arrAcademicJournalsSel.sort(AcademicJournalsEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrAcademicJournalsSel = arrAcademicJournalsSel.sort(objPagerPara.sortFun);
}
arrAcademicJournalsSel = arrAcademicJournalsSel.slice(intStart, intEnd);     
return arrAcademicJournalsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAcademicJournalsENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function AcademicJournalsEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsAcademicJournalsENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrAcademicJournalsObjLst = await AcademicJournals_GetObjLstAsync(objPagerPara.whereCond);
const arrAcademicJournalsExObjLst = arrAcademicJournalsObjLst.map(AcademicJournalsEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsAcademicJournalsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrAcademicJournalsExObjLst) {
await AcademicJournalsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrAcademicJournalsExObjLst.length == 0) return arrAcademicJournalsExObjLst;
let arrAcademicJournalsSel: Array < clsAcademicJournalsENEx > = arrAcademicJournalsExObjLst;
try {
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrAcademicJournalsSel = arrAcademicJournalsSel.sort(AcademicJournalsEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrAcademicJournalsSel = arrAcademicJournalsSel.sort(objPagerPara.sortFun);
}
arrAcademicJournalsSel = arrAcademicJournalsSel.slice(intStart, intEnd);     
return arrAcademicJournalsSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsAcademicJournalsENEx>();
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAcademicJournalsS:源对象
 **/
export  async function AcademicJournalsEx_FuncMapJournalSubjectCategoryName(objAcademicJournals:clsAcademicJournalsENEx )
{
const strThisFuncName = AcademicJournalsEx_FuncMapJournalSubjectCategoryName.name;
try
{
if (IsNullOrEmpty(objAcademicJournals.journalSubjectCategoryName) == true){
 const JournalSubjectCategoryJournalSubjectCategoryId = objAcademicJournals.journalSubjectCategoryId;
 const JournalSubjectCategoryJournalSubjectCategoryName = await JournalSubjectCategory_func(clsJournalSubjectCategoryEN.con_JournalSubjectCategoryId, clsJournalSubjectCategoryEN.con_JournalSubjectCategoryName, JournalSubjectCategoryJournalSubjectCategoryId );
 objAcademicJournals.journalSubjectCategoryName = JournalSubjectCategoryJournalSubjectCategoryName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000446)函数映射表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAcademicJournalsS:源对象
 **/
export  async function AcademicJournalsEx_FuncMapJournalSubjectName(objAcademicJournals:clsAcademicJournalsENEx )
{
const strThisFuncName = AcademicJournalsEx_FuncMapJournalSubjectName.name;
try
{
if (IsNullOrEmpty(objAcademicJournals.journalSubjectName) == true){
 const JournalSubjectJournalSubjectId = objAcademicJournals.journalSubjectId;
 const JournalSubjectJournalSubjectName = await JournalSubject_func(clsJournalSubjectEN.con_JournalSubjectId, clsJournalSubjectEN.con_JournalSubjectName, JournalSubjectJournalSubjectId );
 objAcademicJournals.journalSubjectName = JournalSubjectJournalSubjectName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000447)函数映射表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAcademicJournalsS:源对象
 **/
export  async function AcademicJournalsEx_FuncMapJournalSubjectCode(objAcademicJournals:clsAcademicJournalsENEx )
{
const strThisFuncName = AcademicJournalsEx_FuncMapJournalSubjectCode.name;
try
{
if (IsNullOrEmpty(objAcademicJournals.journalSubjectCode) == true){
 const JournalSubjectJournalSubjectId = objAcademicJournals.journalSubjectId;
 const JournalSubjectJournalSubjectCode = await JournalSubject_func(clsJournalSubjectEN.con_JournalSubjectId, clsJournalSubjectEN.con_JournalSubjectCode, JournalSubjectJournalSubjectId );
 objAcademicJournals.journalSubjectCode = JournalSubjectJournalSubjectCode;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000448)函数映射表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
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
export  function AcademicJournalsEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsAcademicJournalsENEx.con_JournalSubjectCategoryName:
return (a: clsAcademicJournalsENEx, b: clsAcademicJournalsENEx) => {
return a.journalSubjectCategoryName.localeCompare(b.journalSubjectCategoryName);
}
case clsAcademicJournalsENEx.con_JournalSubjectName:
return (a: clsAcademicJournalsENEx, b: clsAcademicJournalsENEx) => {
return a.journalSubjectName.localeCompare(b.journalSubjectName);
}
case clsAcademicJournalsENEx.con_JournalSubjectCode:
return (a: clsAcademicJournalsENEx, b: clsAcademicJournalsENEx) => {
return a.journalSubjectCode.localeCompare(b.journalSubjectCode);
}
        default:
return AcademicJournals_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsAcademicJournalsENEx.con_JournalSubjectCategoryName:
return (a: clsAcademicJournalsENEx, b: clsAcademicJournalsENEx) => {
return b.journalSubjectCategoryName.localeCompare(a.journalSubjectCategoryName);
}
case clsAcademicJournalsENEx.con_JournalSubjectName:
return (a: clsAcademicJournalsENEx, b: clsAcademicJournalsENEx) => {
return b.journalSubjectName.localeCompare(a.journalSubjectName);
}
case clsAcademicJournalsENEx.con_JournalSubjectCode:
return (a: clsAcademicJournalsENEx, b: clsAcademicJournalsENEx) => {
return b.journalSubjectCode.localeCompare(a.journalSubjectCode);
}
        default:
return AcademicJournals_SortFunByKey(strKey, AscOrDesc);
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
export  function AcademicJournalsEx_FuncMapByFldName(strFldName: string, objAcademicJournalsEx: clsAcademicJournalsENEx)
{
const strThisFuncName = AcademicJournalsEx_FuncMapByFldName.name;
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsAcademicJournalsEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsAcademicJournalsENEx.con_JournalSubjectCategoryName:
return AcademicJournalsEx_FuncMapJournalSubjectCategoryName(objAcademicJournalsEx);
case clsAcademicJournalsENEx.con_JournalSubjectName:
return AcademicJournalsEx_FuncMapJournalSubjectName(objAcademicJournalsEx);
case clsAcademicJournalsENEx.con_JournalSubjectCode:
return AcademicJournalsEx_FuncMapJournalSubjectCode(objAcademicJournalsEx);
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
export  async function AcademicJournalsEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsAcademicJournalsENEx.con_JournalSubjectCategoryName:
return (obj: clsAcademicJournalsENEx) => {
return obj.journalSubjectCategoryName === value;
}
case clsAcademicJournalsENEx.con_JournalSubjectName:
return (obj: clsAcademicJournalsENEx) => {
return obj.journalSubjectName === value;
}
case clsAcademicJournalsENEx.con_JournalSubjectCode:
return (obj: clsAcademicJournalsENEx) => {
return obj.journalSubjectCode === value;
}
        default:
return AcademicJournals_FilterFunByKey(strKey, value);
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objAcademicJournalsS:源对象
 **/
export  async function AcademicJournalsEx_FuncMapKeyJournalSubjectCategoryName(objAcademicJournals:clsAcademicJournalsENEx ): Promise<Array<string>>
{
const strThisFuncName = AcademicJournalsEx_FuncMapKeyJournalSubjectCategoryName.name;
try
{
if (IsNullOrEmpty(objAcademicJournals.journalSubjectCategoryName) == true) return [];
 const JournalSubjectCategoryJournalSubjectCategoryName = objAcademicJournals.journalSubjectCategoryName;
 const arrJournalSubjectCategoryId = await JournalSubjectCategory_funcKey(clsJournalSubjectCategoryEN.con_JournalSubjectCategoryName, JournalSubjectCategoryJournalSubjectCategoryName , enumComparisonOp.Like_03);
 return arrJournalSubjectCategoryId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000446)函数映射表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objAcademicJournalsS:源对象
 **/
export  async function AcademicJournalsEx_FuncMapKeyJournalSubjectName(objAcademicJournals:clsAcademicJournalsENEx ): Promise<Array<string>>
{
const strThisFuncName = AcademicJournalsEx_FuncMapKeyJournalSubjectName.name;
try
{
if (IsNullOrEmpty(objAcademicJournals.journalSubjectName) == true) return [];
 const JournalSubjectJournalSubjectName = objAcademicJournals.journalSubjectName;
 const arrJournalSubjectId = await JournalSubject_funcKey(clsJournalSubjectEN.con_JournalSubjectName, JournalSubjectJournalSubjectName , enumComparisonOp.Like_03);
 return arrJournalSubjectId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000447)函数映射表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objAcademicJournalsS:源对象
 **/
export  async function AcademicJournalsEx_FuncMapKeyJournalSubjectCode(objAcademicJournals:clsAcademicJournalsENEx ): Promise<Array<string>>
{
const strThisFuncName = AcademicJournalsEx_FuncMapKeyJournalSubjectCode.name;
try
{
if (IsNullOrEmpty(objAcademicJournals.journalSubjectCode) == true) return [];
 const JournalSubjectJournalSubjectCode = objAcademicJournals.journalSubjectCode;
 const arrJournalSubjectId = await JournalSubject_funcKey(clsJournalSubjectEN.con_JournalSubjectCode, JournalSubjectJournalSubjectCode , enumComparisonOp.Like_03);
 return arrJournalSubjectId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000448)函数映射表对象数据出错,{0}.(in {1}.{2})", e, academicJournalsEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}
