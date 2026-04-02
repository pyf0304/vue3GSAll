
 /**
 * 类名:clsPaperSubResExWApi
 * 表名:PaperSubRes(01120963)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/22 00:35:09
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
 * 论文子资源(PaperSubRes)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2024年03月22日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign,GetSortExpressInfo } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPaperSubResENEx } from "@/ts/L0Entity/GradEduPaper/clsPaperSubResENEx";
import { PaperSubRes_GetObjLstAsync,PaperSubRes_SortFunByKey } from "@/ts/L3ForWApi/GradEduPaper/clsPaperSubResWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsPaperSubResEN } from "@/ts/L0Entity/GradEduPaper/clsPaperSubResEN";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const paperSubResExController = "PaperSubResExApi";
export const paperSubResEx_ConstructorName = "paperSubResEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function PaperSubResEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objPaperSubResENS:源对象
 * @returns 目标对象=>clsPaperSubResEN:objPaperSubResENT
 **/
export  function PaperSubResEx_CopyToEx(objPaperSubResENS:clsPaperSubResEN ): clsPaperSubResENEx
{
const strThisFuncName  = PaperSubResEx_CopyToEx.name;
 const objPaperSubResENT = new clsPaperSubResENEx();
try
{
ObjectAssign(objPaperSubResENT, objPaperSubResENS);
 return objPaperSubResENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, paperSubResEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objPaperSubResENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function PaperSubResEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsPaperSubResENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrPaperSubResObjLst = await PaperSubRes_GetObjLstAsync(objPagerPara.whereCond);
const arrPaperSubResExObjLst = arrPaperSubResObjLst.map(PaperSubResEx_CopyToEx);
 const objSortInfo = GetSortExpressInfo(objPagerPara);
 if (IsNullOrEmpty(objSortInfo.SortFld) == false && clsPaperSubResEN.AttributeName.indexOf(objSortInfo.SortFld) == -1)
 {
 for (const objInFor of arrPaperSubResExObjLst) {
await PaperSubResEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
 }
 }
if (arrPaperSubResExObjLst.length == 0) return arrPaperSubResExObjLst;
let arrPaperSubResSel: Array < clsPaperSubResENEx > = arrPaperSubResExObjLst;
try {
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrPaperSubResSel = arrPaperSubResSel.sort(PaperSubResEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrPaperSubResSel = arrPaperSubResSel.sort(objPagerPara.sortFun);
}
arrPaperSubResSel = arrPaperSubResSel.slice(intStart, intEnd);     
return arrPaperSubResSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, paperSubResEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsPaperSubResENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-03-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function PaperSubResEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return PaperSubRes_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return PaperSubRes_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-03-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function PaperSubResEx_FuncMapByFldName(strFldName: string, objPaperSubResEx: clsPaperSubResENEx)
{
const strThisFuncName = PaperSubResEx_FuncMapByFldName.name;
console.log(objPaperSubResEx);
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsPaperSubResEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}
