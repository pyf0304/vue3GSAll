
 /**
 * 类名:clsvXzGradeBaseWApi
 * 表名:vXzGradeBase(01120130)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v年级(vXzGradeBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvXzGradeBaseEN } from "@/ts/L0Entity/SysPara/clsvXzGradeBaseEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vXzGradeBase_Controller = "vXzGradeBaseApi";
 export const vXzGradeBase_ConstructorName = "vXzGradeBase";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdGradeBase:关键字
 * @returns 对象
 **/
export  async function vXzGradeBase_GetObjByIdGradeBaseAsync(strIdGradeBase: string): Promise<clsvXzGradeBaseEN|null>  
{
const strThisFuncName = "GetObjByIdGradeBaseAsync";

if (IsNullOrEmpty(strIdGradeBase) == true)
{
  const strMsg = Format("参数:[strIdGradeBase]不能为空!(In clsvXzGradeBaseWApi.GetObjByIdGradeBaseAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGradeBase.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdGradeBase]的长度:[{0}]不正确!(clsvXzGradeBaseWApi.GetObjByIdGradeBaseAsync)", strIdGradeBase.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdGradeBase";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdGradeBase,
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
const objvXzGradeBase = vXzGradeBase_GetObjFromJsonObj(returnObj);
return objvXzGradeBase;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdGradeBaseCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdGradeBaselocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByIdGradeBaseCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vXzGradeBase_SortFunDefa(a:clsvXzGradeBaseEN , b:clsvXzGradeBaseEN): number 
{
return a.idGradeBase.localeCompare(b.idGradeBase);
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
export  function vXzGradeBase_SortFunDefa2Fld(a:clsvXzGradeBaseEN , b:clsvXzGradeBaseEN): number 
{
if (a.gradeBaseId == b.gradeBaseId) return a.gradeBaseName.localeCompare(b.gradeBaseName);
else return a.gradeBaseId.localeCompare(b.gradeBaseId);
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
export  function vXzGradeBase_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvXzGradeBaseEN.con_IdGradeBase:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsvXzGradeBaseEN.con_GradeBaseId:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.gradeBaseId == null) return -1;
if (b.gradeBaseId == null) return 1;
return a.gradeBaseId.localeCompare(b.gradeBaseId);
}
case clsvXzGradeBaseEN.con_GradeBaseName:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.gradeBaseName.localeCompare(b.gradeBaseName);
}
case clsvXzGradeBaseEN.con_GradeBaseNameA:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.gradeBaseNameA.localeCompare(b.gradeBaseNameA);
}
case clsvXzGradeBaseEN.con_SchoolYear:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsvXzGradeBaseEN.con_SchoolTerm:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsvXzGradeBaseEN.con_EnterSchoolDate:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.enterSchoolDate == null) return -1;
if (b.enterSchoolDate == null) return 1;
return a.enterSchoolDate.localeCompare(b.enterSchoolDate);
}
case clsvXzGradeBaseEN.con_CurrentTermSeq:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.currentTermSeq-b.currentTermSeq;
}
case clsvXzGradeBaseEN.con_ExecPlanTermIndex:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.execPlanTermIndex-b.execPlanTermIndex;
}
case clsvXzGradeBaseEN.con_SetEPTermIndexDate:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.setEPTermIndexDate == null) return -1;
if (b.setEPTermIndexDate == null) return 1;
return a.setEPTermIndexDate.localeCompare(b.setEPTermIndexDate);
}
case clsvXzGradeBaseEN.con_IsOffed:
return (a: clsvXzGradeBaseEN) => {
if (a.isOffed == true) return 1;
else return -1
}
case clsvXzGradeBaseEN.con_GradeIndex:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.gradeIndex-b.gradeIndex;
}
case clsvXzGradeBaseEN.con_BeginYearMonth:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.beginYearMonth == null) return -1;
if (b.beginYearMonth == null) return 1;
return a.beginYearMonth.localeCompare(b.beginYearMonth);
}
case clsvXzGradeBaseEN.con_EndYearMonth:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.endYearMonth == null) return -1;
if (b.endYearMonth == null) return 1;
return a.endYearMonth.localeCompare(b.endYearMonth);
}
case clsvXzGradeBaseEN.con_AllowUpBaseInfo:
return (a: clsvXzGradeBaseEN) => {
if (a.allowUpBaseInfo == true) return 1;
else return -1
}
case clsvXzGradeBaseEN.con_Prefix:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.prefix == null) return -1;
if (b.prefix == null) return 1;
return a.prefix.localeCompare(b.prefix);
}
case clsvXzGradeBaseEN.con_PointCalcVersionId:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return a.pointCalcVersionId.localeCompare(b.pointCalcVersionId);
}
case clsvXzGradeBaseEN.con_ModifyUserId:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsvXzGradeBaseEN.con_ModifyDate:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsvXzGradeBaseEN.con_IdStudyLevel:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.idStudyLevel == null) return -1;
if (b.idStudyLevel == null) return 1;
return a.idStudyLevel.localeCompare(b.idStudyLevel);
}
case clsvXzGradeBaseEN.con_StudyLevelName:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.studyLevelName == null) return -1;
if (b.studyLevelName == null) return 1;
return a.studyLevelName.localeCompare(b.studyLevelName);
}
case clsvXzGradeBaseEN.con_IsVisible:
return (a: clsvXzGradeBaseEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsvXzGradeBaseEN.con_Memo:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vXzGradeBase]中不存在!(in ${ vXzGradeBase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvXzGradeBaseEN.con_IdGradeBase:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsvXzGradeBaseEN.con_GradeBaseId:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.gradeBaseId == null) return -1;
if (a.gradeBaseId == null) return 1;
return b.gradeBaseId.localeCompare(a.gradeBaseId);
}
case clsvXzGradeBaseEN.con_GradeBaseName:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.gradeBaseName.localeCompare(a.gradeBaseName);
}
case clsvXzGradeBaseEN.con_GradeBaseNameA:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.gradeBaseNameA.localeCompare(a.gradeBaseNameA);
}
case clsvXzGradeBaseEN.con_SchoolYear:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsvXzGradeBaseEN.con_SchoolTerm:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsvXzGradeBaseEN.con_EnterSchoolDate:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.enterSchoolDate == null) return -1;
if (a.enterSchoolDate == null) return 1;
return b.enterSchoolDate.localeCompare(a.enterSchoolDate);
}
case clsvXzGradeBaseEN.con_CurrentTermSeq:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.currentTermSeq-a.currentTermSeq;
}
case clsvXzGradeBaseEN.con_ExecPlanTermIndex:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.execPlanTermIndex-a.execPlanTermIndex;
}
case clsvXzGradeBaseEN.con_SetEPTermIndexDate:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.setEPTermIndexDate == null) return -1;
if (a.setEPTermIndexDate == null) return 1;
return b.setEPTermIndexDate.localeCompare(a.setEPTermIndexDate);
}
case clsvXzGradeBaseEN.con_IsOffed:
return (b: clsvXzGradeBaseEN) => {
if (b.isOffed == true) return 1;
else return -1
}
case clsvXzGradeBaseEN.con_GradeIndex:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.gradeIndex-a.gradeIndex;
}
case clsvXzGradeBaseEN.con_BeginYearMonth:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.beginYearMonth == null) return -1;
if (a.beginYearMonth == null) return 1;
return b.beginYearMonth.localeCompare(a.beginYearMonth);
}
case clsvXzGradeBaseEN.con_EndYearMonth:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.endYearMonth == null) return -1;
if (a.endYearMonth == null) return 1;
return b.endYearMonth.localeCompare(a.endYearMonth);
}
case clsvXzGradeBaseEN.con_AllowUpBaseInfo:
return (b: clsvXzGradeBaseEN) => {
if (b.allowUpBaseInfo == true) return 1;
else return -1
}
case clsvXzGradeBaseEN.con_Prefix:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.prefix == null) return -1;
if (a.prefix == null) return 1;
return b.prefix.localeCompare(a.prefix);
}
case clsvXzGradeBaseEN.con_PointCalcVersionId:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
return b.pointCalcVersionId.localeCompare(a.pointCalcVersionId);
}
case clsvXzGradeBaseEN.con_ModifyUserId:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsvXzGradeBaseEN.con_ModifyDate:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsvXzGradeBaseEN.con_IdStudyLevel:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.idStudyLevel == null) return -1;
if (a.idStudyLevel == null) return 1;
return b.idStudyLevel.localeCompare(a.idStudyLevel);
}
case clsvXzGradeBaseEN.con_StudyLevelName:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.studyLevelName == null) return -1;
if (a.studyLevelName == null) return 1;
return b.studyLevelName.localeCompare(a.studyLevelName);
}
case clsvXzGradeBaseEN.con_IsVisible:
return (b: clsvXzGradeBaseEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsvXzGradeBaseEN.con_Memo:
return (a: clsvXzGradeBaseEN, b: clsvXzGradeBaseEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vXzGradeBase]中不存在!(in ${ vXzGradeBase_ConstructorName}.${ strThisFuncName})`;
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
export  async function vXzGradeBase_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvXzGradeBaseEN.con_IdGradeBase:
return (obj: clsvXzGradeBaseEN) => {
return obj.idGradeBase === value;
}
case clsvXzGradeBaseEN.con_GradeBaseId:
return (obj: clsvXzGradeBaseEN) => {
return obj.gradeBaseId === value;
}
case clsvXzGradeBaseEN.con_GradeBaseName:
return (obj: clsvXzGradeBaseEN) => {
return obj.gradeBaseName === value;
}
case clsvXzGradeBaseEN.con_GradeBaseNameA:
return (obj: clsvXzGradeBaseEN) => {
return obj.gradeBaseNameA === value;
}
case clsvXzGradeBaseEN.con_SchoolYear:
return (obj: clsvXzGradeBaseEN) => {
return obj.schoolYear === value;
}
case clsvXzGradeBaseEN.con_SchoolTerm:
return (obj: clsvXzGradeBaseEN) => {
return obj.schoolTerm === value;
}
case clsvXzGradeBaseEN.con_EnterSchoolDate:
return (obj: clsvXzGradeBaseEN) => {
return obj.enterSchoolDate === value;
}
case clsvXzGradeBaseEN.con_CurrentTermSeq:
return (obj: clsvXzGradeBaseEN) => {
return obj.currentTermSeq === value;
}
case clsvXzGradeBaseEN.con_ExecPlanTermIndex:
return (obj: clsvXzGradeBaseEN) => {
return obj.execPlanTermIndex === value;
}
case clsvXzGradeBaseEN.con_SetEPTermIndexDate:
return (obj: clsvXzGradeBaseEN) => {
return obj.setEPTermIndexDate === value;
}
case clsvXzGradeBaseEN.con_IsOffed:
return (obj: clsvXzGradeBaseEN) => {
return obj.isOffed === value;
}
case clsvXzGradeBaseEN.con_GradeIndex:
return (obj: clsvXzGradeBaseEN) => {
return obj.gradeIndex === value;
}
case clsvXzGradeBaseEN.con_BeginYearMonth:
return (obj: clsvXzGradeBaseEN) => {
return obj.beginYearMonth === value;
}
case clsvXzGradeBaseEN.con_EndYearMonth:
return (obj: clsvXzGradeBaseEN) => {
return obj.endYearMonth === value;
}
case clsvXzGradeBaseEN.con_AllowUpBaseInfo:
return (obj: clsvXzGradeBaseEN) => {
return obj.allowUpBaseInfo === value;
}
case clsvXzGradeBaseEN.con_Prefix:
return (obj: clsvXzGradeBaseEN) => {
return obj.prefix === value;
}
case clsvXzGradeBaseEN.con_PointCalcVersionId:
return (obj: clsvXzGradeBaseEN) => {
return obj.pointCalcVersionId === value;
}
case clsvXzGradeBaseEN.con_ModifyUserId:
return (obj: clsvXzGradeBaseEN) => {
return obj.modifyUserId === value;
}
case clsvXzGradeBaseEN.con_ModifyDate:
return (obj: clsvXzGradeBaseEN) => {
return obj.modifyDate === value;
}
case clsvXzGradeBaseEN.con_IdStudyLevel:
return (obj: clsvXzGradeBaseEN) => {
return obj.idStudyLevel === value;
}
case clsvXzGradeBaseEN.con_StudyLevelName:
return (obj: clsvXzGradeBaseEN) => {
return obj.studyLevelName === value;
}
case clsvXzGradeBaseEN.con_IsVisible:
return (obj: clsvXzGradeBaseEN) => {
return obj.isVisible === value;
}
case clsvXzGradeBaseEN.con_Memo:
return (obj: clsvXzGradeBaseEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vXzGradeBase]中不存在!(in ${ vXzGradeBase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vXzGradeBase__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vXzGradeBase_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_GetFirstObjAsync(strWhereCond: string): Promise<clsvXzGradeBaseEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const objvXzGradeBase = vXzGradeBase_GetObjFromJsonObj(returnObj);
return objvXzGradeBase;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvXzGradeBaseEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
 * @param arrIdGradeBase:关键字列表
 * @returns 对象列表
 **/
export  async function vXzGradeBase_GetObjLstByIdGradeBaseLstAsync(arrIdGradeBase: Array<string>): Promise<Array<clsvXzGradeBaseEN>>  
{
const strThisFuncName = "GetObjLstByIdGradeBaseLstAsync";
const strAction = "GetObjLstByIdGradeBaseLst";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdGradeBase, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdGradeBaseLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vXzGradeBase_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvXzGradeBaseEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvXzGradeBaseEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvXzGradeBaseEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvXzGradeBaseEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vXzGradeBase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
 * @param strIdGradeBase:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vXzGradeBase_IsExistAsync(strIdGradeBase: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdGradeBase
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  async function vXzGradeBase_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vXzGradeBase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vXzGradeBase_ConstructorName, strThisFuncName);
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
export  function vXzGradeBase_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vXzGradeBase_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await vXzGradeBase_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvXzGradeBaseEN.con_IdGradeBase, clsvXzGradeBaseEN.con_GradeBaseName, "v年级");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vXzGradeBase_GetJSONStrByObj (pobjvXzGradeBaseEN: clsvXzGradeBaseEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvXzGradeBaseEN);
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
export  function vXzGradeBase_GetObjLstByJSONStr (strJSON: string): Array<clsvXzGradeBaseEN>
{
let arrvXzGradeBaseObjLst = new Array<clsvXzGradeBaseEN>();
if (strJSON === "")
{
return arrvXzGradeBaseObjLst;
}
try
{
arrvXzGradeBaseObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvXzGradeBaseObjLst;
}
return arrvXzGradeBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvXzGradeBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vXzGradeBase_GetObjLstByJSONObjLst (arrvXzGradeBaseObjLstS: Array<clsvXzGradeBaseEN>): Array<clsvXzGradeBaseEN>
{
const arrvXzGradeBaseObjLst = new Array<clsvXzGradeBaseEN>();
for (const objInFor of arrvXzGradeBaseObjLstS) {
const obj1 = vXzGradeBase_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvXzGradeBaseObjLst.push(obj1);
}
return arrvXzGradeBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vXzGradeBase_GetObjByJSONStr (strJSON: string): clsvXzGradeBaseEN
{
let pobjvXzGradeBaseEN = new clsvXzGradeBaseEN();
if (strJSON === "")
{
return pobjvXzGradeBaseEN;
}
try
{
pobjvXzGradeBaseEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvXzGradeBaseEN;
}
return pobjvXzGradeBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vXzGradeBase_GetCombineCondition(objvXzGradeBaseCond: clsvXzGradeBaseEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_IdGradeBase, objvXzGradeBaseCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_GradeBaseId) == true)
{
const strComparisonOpGradeBaseId:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_GradeBaseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_GradeBaseId, objvXzGradeBaseCond.gradeBaseId, strComparisonOpGradeBaseId);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_GradeBaseName) == true)
{
const strComparisonOpGradeBaseName:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_GradeBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_GradeBaseName, objvXzGradeBaseCond.gradeBaseName, strComparisonOpGradeBaseName);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_GradeBaseNameA) == true)
{
const strComparisonOpGradeBaseNameA:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_GradeBaseNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_GradeBaseNameA, objvXzGradeBaseCond.gradeBaseNameA, strComparisonOpGradeBaseNameA);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_SchoolYear, objvXzGradeBaseCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_SchoolTerm, objvXzGradeBaseCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_EnterSchoolDate) == true)
{
const strComparisonOpEnterSchoolDate:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_EnterSchoolDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_EnterSchoolDate, objvXzGradeBaseCond.enterSchoolDate, strComparisonOpEnterSchoolDate);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_CurrentTermSeq) == true)
{
const strComparisonOpCurrentTermSeq:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_CurrentTermSeq];
strWhereCond += Format(" And {0} {2} {1}", clsvXzGradeBaseEN.con_CurrentTermSeq, objvXzGradeBaseCond.currentTermSeq, strComparisonOpCurrentTermSeq);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_SetEPTermIndexDate) == true)
{
const strComparisonOpSetEPTermIndexDate:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_SetEPTermIndexDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_SetEPTermIndexDate, objvXzGradeBaseCond.setEPTermIndexDate, strComparisonOpSetEPTermIndexDate);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_IsOffed) == true)
{
if (objvXzGradeBaseCond.isOffed == true)
{
strWhereCond += Format(" And {0} = '1'", clsvXzGradeBaseEN.con_IsOffed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvXzGradeBaseEN.con_IsOffed);
}
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_GradeIndex) == true)
{
const strComparisonOpGradeIndex:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_GradeIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvXzGradeBaseEN.con_GradeIndex, objvXzGradeBaseCond.gradeIndex, strComparisonOpGradeIndex);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_BeginYearMonth) == true)
{
const strComparisonOpBeginYearMonth:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_BeginYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_BeginYearMonth, objvXzGradeBaseCond.beginYearMonth, strComparisonOpBeginYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_EndYearMonth) == true)
{
const strComparisonOpEndYearMonth:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_EndYearMonth];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_EndYearMonth, objvXzGradeBaseCond.endYearMonth, strComparisonOpEndYearMonth);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_AllowUpBaseInfo) == true)
{
if (objvXzGradeBaseCond.allowUpBaseInfo == true)
{
strWhereCond += Format(" And {0} = '1'", clsvXzGradeBaseEN.con_AllowUpBaseInfo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvXzGradeBaseEN.con_AllowUpBaseInfo);
}
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_Prefix) == true)
{
const strComparisonOpPrefix:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_Prefix];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_Prefix, objvXzGradeBaseCond.prefix, strComparisonOpPrefix);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_PointCalcVersionId) == true)
{
const strComparisonOpPointCalcVersionId:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_PointCalcVersionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_PointCalcVersionId, objvXzGradeBaseCond.pointCalcVersionId, strComparisonOpPointCalcVersionId);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_ModifyUserId, objvXzGradeBaseCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_ModifyDate, objvXzGradeBaseCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_IdStudyLevel) == true)
{
const strComparisonOpIdStudyLevel:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_IdStudyLevel];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_IdStudyLevel, objvXzGradeBaseCond.idStudyLevel, strComparisonOpIdStudyLevel);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_StudyLevelName) == true)
{
const strComparisonOpStudyLevelName:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_StudyLevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_StudyLevelName, objvXzGradeBaseCond.studyLevelName, strComparisonOpStudyLevelName);
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_IsVisible) == true)
{
if (objvXzGradeBaseCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsvXzGradeBaseEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvXzGradeBaseEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objvXzGradeBaseCond.dicFldComparisonOp, clsvXzGradeBaseEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvXzGradeBaseCond.dicFldComparisonOp[clsvXzGradeBaseEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvXzGradeBaseEN.con_Memo, objvXzGradeBaseCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvXzGradeBaseENS:源对象
 * @param objvXzGradeBaseENT:目标对象
*/
export  function vXzGradeBase_CopyObjTo(objvXzGradeBaseENS: clsvXzGradeBaseEN , objvXzGradeBaseENT: clsvXzGradeBaseEN ): void 
{
objvXzGradeBaseENT.idGradeBase = objvXzGradeBaseENS.idGradeBase; //年级流水号
objvXzGradeBaseENT.gradeBaseId = objvXzGradeBaseENS.gradeBaseId; //年级代号
objvXzGradeBaseENT.gradeBaseName = objvXzGradeBaseENS.gradeBaseName; //年级名称
objvXzGradeBaseENT.gradeBaseNameA = objvXzGradeBaseENS.gradeBaseNameA; //年级名称缩写
objvXzGradeBaseENT.schoolYear = objvXzGradeBaseENS.schoolYear; //学年
objvXzGradeBaseENT.schoolTerm = objvXzGradeBaseENS.schoolTerm; //学期
objvXzGradeBaseENT.enterSchoolDate = objvXzGradeBaseENS.enterSchoolDate; //进校日期
objvXzGradeBaseENT.currentTermSeq = objvXzGradeBaseENS.currentTermSeq; //当前学期
objvXzGradeBaseENT.execPlanTermIndex = objvXzGradeBaseENS.execPlanTermIndex; //生成执行计划学期
objvXzGradeBaseENT.setEPTermIndexDate = objvXzGradeBaseENS.setEPTermIndexDate; //设定执行计划学期日期
objvXzGradeBaseENT.isOffed = objvXzGradeBaseENS.isOffed; //是否毕业
objvXzGradeBaseENT.gradeIndex = objvXzGradeBaseENS.gradeIndex; //年级序号
objvXzGradeBaseENT.beginYearMonth = objvXzGradeBaseENS.beginYearMonth; //开始年月
objvXzGradeBaseENT.endYearMonth = objvXzGradeBaseENS.endYearMonth; //结束年月
objvXzGradeBaseENT.allowUpBaseInfo = objvXzGradeBaseENS.allowUpBaseInfo; //允许修改基本信息
objvXzGradeBaseENT.prefix = objvXzGradeBaseENS.prefix; //前缀
objvXzGradeBaseENT.pointCalcVersionId = objvXzGradeBaseENS.pointCalcVersionId; //绩点计算版本Id
objvXzGradeBaseENT.modifyUserId = objvXzGradeBaseENS.modifyUserId; //修改人
objvXzGradeBaseENT.modifyDate = objvXzGradeBaseENS.modifyDate; //修改日期
objvXzGradeBaseENT.idStudyLevel = objvXzGradeBaseENS.idStudyLevel; //id_StudyLevel
objvXzGradeBaseENT.studyLevelName = objvXzGradeBaseENS.studyLevelName; //学段名称
objvXzGradeBaseENT.isVisible = objvXzGradeBaseENS.isVisible; //是否显示
objvXzGradeBaseENT.memo = objvXzGradeBaseENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvXzGradeBaseENS:源对象
 * @param objvXzGradeBaseENT:目标对象
*/
export  function vXzGradeBase_GetObjFromJsonObj(objvXzGradeBaseENS: clsvXzGradeBaseEN): clsvXzGradeBaseEN 
{
 const objvXzGradeBaseENT: clsvXzGradeBaseEN = new clsvXzGradeBaseEN();
ObjectAssign(objvXzGradeBaseENT, objvXzGradeBaseENS);
 return objvXzGradeBaseENT;
}