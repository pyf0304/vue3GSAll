
 /**
 * 类名:clsXzClgExWApi
 * 表名:XzClg(01120064)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 02:43:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 学院(XzClg)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年03月18日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo,GetObjKeys } from "@/ts/PubFun/clsCommFunc4Web";
import { XzClg_GetObjLstCache,XzClg_GetObjLstAsync,XzClg_SortFunByKey } from "@/ts/L3ForWApi/UserManage/clsXzClgWApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsXzClgEN } from "@/ts/L0Entity/UserManage/clsXzClgEN";
import { clsXzClgENEx } from "@/ts/L0Entity/UserManage/clsXzClgENEx";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";

export const xzClgExController = "XzClgExApi";
export const xzClgEx_ConstructorName = "xzClgEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function XzClgEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objXzClgENS:源对象
 * @returns 目标对象=>clsXzClgEN:objXzClgENT
 **/
export  function XzClgEx_CopyToEx(objXzClgENS:clsXzClgEN ): clsXzClgENEx
{
const strThisFuncName  = XzClgEx_CopyToEx.name;
 const objXzClgENT = new clsXzClgENEx();
try
{
ObjectAssign(objXzClgENT, objXzClgENS);
 return objXzClgENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, xzClgEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objXzClgENT;
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function XzClgEx_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsXzClgENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
const arrXzClgObjLst = await XzClg_GetObjLstCache();
const arrXzClgExObjLst = arrXzClgObjLst.map(XzClgEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsXzClgEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrXzClgExObjLst) {
await XzClgEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrXzClgExObjLst.length == 0) return arrXzClgExObjLst;
let arrXzClgSel: Array < clsXzClgENEx > = arrXzClgExObjLst;
const objCond = JSON.parse(objPagerPara.whereCond);
const objXzClgCond = new clsXzClgENEx();
ObjectAssign(objXzClgCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsXzClgWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objXzClgCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrXzClgSel = arrXzClgSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzClgSel = arrXzClgSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrXzClgSel.length == 0) return arrXzClgSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrXzClgSel = arrXzClgSel.sort(XzClgEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrXzClgSel = arrXzClgSel.sort(objPagerPara.sortFun);
}
arrXzClgSel = arrXzClgSel.slice(intStart, intEnd);     
return arrXzClgSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, xzClgEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsXzClgENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function XzClgEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsXzClgENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrXzClgObjLst = await XzClg_GetObjLstAsync(objPagerPara.whereCond);
const arrXzClgExObjLst = arrXzClgObjLst.map(XzClgEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsXzClgEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrXzClgExObjLst) {
await XzClgEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrXzClgExObjLst.length == 0) return arrXzClgExObjLst;
let arrXzClgSel: Array < clsXzClgENEx > = arrXzClgExObjLst;
try {
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrXzClgSel = arrXzClgSel.sort(XzClgEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrXzClgSel = arrXzClgSel.sort(objPagerPara.sortFun);
}
arrXzClgSel = arrXzClgSel.slice(intStart, intEnd);     
return arrXzClgSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, xzClgEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsXzClgENEx>();
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
export  function XzClgEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return XzClg_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return XzClg_SortFunByKey(strKey, AscOrDesc);
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
export  function XzClgEx_FuncMapByFldName(strFldName: string, objXzClgEx: clsXzClgENEx)
{
const strThisFuncName = XzClgEx_FuncMapByFldName.name;
console.log(objXzClgEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsXzClgEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

 /// <summary>
 /// 获取扩展对象
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "strCondition">条件</param>
 /// <returns>获取的相应对象列表</returns>
public static GetObjExLstAsync(strCondition: string): Promise<Array<clsXzClgENEx>>  
{
var strAction = "GetObjExLst";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("strCondition", strCondition);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 相加
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "b">b</param>
 /// <param name = "a">a</param>
 /// <returns>获取的相应对象列表</returns>
public static PlusAsync(b: number,a: number): Promise<number>  
{
var strAction = "Plus";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("b", b);
mapParam.add("a", a);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 获取当前关键字的记录对象,用对象的形式表示
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "strid_XzCollege">strid_XzCollege</param>
 /// <returns>获取的相应对象列表</returns>
public static GetObjByid_XzCollegeAsync(strid_XzCollege: string): Promise<clsXzClgEN>  
{
var strAction = "GetObjByid_XzCollege";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("strid_XzCollege", strid_XzCollege);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 获取当前关键字的记录对象,用对象的形式表示
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "strid_XzCollege">strid_XzCollege</param>
 /// <returns>获取的相应对象列表</returns>
public static GetObjExByid_XzCollegeAsync(strid_XzCollege: string): Promise<clsXzClgENEx>  
{
var strAction = "GetObjExByid_XzCollege";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("strid_XzCollege", strid_XzCollege);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 获取项部对象列表
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "objTopPara">顶部对象列表的参数对象</param>
 /// <returns>获取的相应对象列表</returns>
public static GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsXzClgEN>>  
{
var strAction = "GetTopObjLst";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("objTopPara", objTopPara);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Post",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 根据条件判断是否存在记录
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "strWhereCond">条件串</param>
 /// <returns>获取的相应对象列表</returns>
public static IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
var strAction = "IsExistRecord";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("strWhereCond", strWhereCond);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 根据前缀获取当前表关键字值的最大值,再加1
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "strPrefix">strPrefix</param>
 /// <returns>获取的相应对象列表</returns>
public static GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string>  
{
var strAction = "GetMaxStrIdByPrefix";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("strPrefix", strPrefix);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 修改记录
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "objXzClgEN">objXzClgEN</param>
 /// <returns>获取的相应对象列表</returns>
public static UpdateRecordAsync(objXzClgEN: clsXzClgEN): Promise<boolean>  
{
var strAction = "UpdateRecord";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("objXzClgEN", objXzClgEN);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Post",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 获取当前表关键字值的最大值,再加1
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <returns>获取的相应对象列表</returns>
public static GetMaxStrIdAsync(): Promise<string>  
{
var strAction = "GetMaxStrId";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Get",
dataType: "json",
data: strData,
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};
 /// <summary>
 /// 扩展删除记录，即同时删除多个表的记录，需要基于原子性的事务处理
 /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
 /// </summary>
 /// <param name = "id">strid_XzCollege</param>
 /// <returns>获取的相应对象列表</returns>
public static DelRecordExAsync(id: string): Promise<boolean>  
{
var strAction = "DelRecordEx";
let strUrl = this.GetWebApiUrl(this.mstrController, strAction);
var mapParam: Dictionary = new Dictionary();
mapParam.add("id", id);
let strData = mapParam.getParamText();// "例如: strIdentityID =01";
return new Promise(function(resolve, reject) {
$.ajax({
url: strUrl,
method: "Delete",
dataType: "json",
data: { "": id },
success: function(data) {
resolve(data);
},
error: (e) => {
console.error(e);
var strErrMsg = decodeURIComponent(e.responseText)
reject(e);
}
});
});
};