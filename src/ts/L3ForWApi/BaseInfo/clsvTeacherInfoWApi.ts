
 /**
 * 类名:clsvTeacherInfoWApi
 * 表名:vTeacherInfo(01120094)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 12:05:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v教师(vTeacherInfo)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年01月14日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj_V,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvTeacherInfoEN } from "@/ts/L0Entity/BaseInfo/clsvTeacherInfoEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vTeacherInfo_Controller = "vTeacherInfoApi";
 export const vTeacherInfo_ConstructorName = "vTeacherInfo";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeacher:关键字
 * @returns 对象
 **/
export  async function vTeacherInfo_GetObjByIdTeacherAsync(strIdTeacher: string): Promise<clsvTeacherInfoEN|null>  
{
const strThisFuncName = "GetObjByIdTeacherAsync";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfoWApi.GetObjByIdTeacherAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfoWApi.GetObjByIdTeacherAsync)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeacher";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeacher,
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
const objvTeacherInfo = vTeacherInfo_GetObjFromJsonObj(returnObj);
return objvTeacherInfo;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_GetObjByIdTeacherCache(strIdTeacher: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdTeacherCache";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfoWApi.GetObjByIdTeacherCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfoWApi.GetObjByIdTeacherCache)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
try
{
const arrvTeacherInfoSel = arrvTeacherInfoObjLstCache.filter(x => 
 x.idTeacher == strIdTeacher );
let objvTeacherInfo: clsvTeacherInfoEN;
if (arrvTeacherInfoSel.length > 0)
{
objvTeacherInfo = arrvTeacherInfoSel[0];
return objvTeacherInfo;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvTeacherInfoConst = await vTeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
if (objvTeacherInfoConst != null)
{
vTeacherInfo_ReFreshThisCache();
return objvTeacherInfoConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeacher, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_GetObjByIdTeacherlocalStorage(strIdTeacher: string) {
const strThisFuncName = "GetObjByIdTeacherlocalStorage";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfoWApi.GetObjByIdTeacherlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfoWApi.GetObjByIdTeacherlocalStorage)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvTeacherInfoEN._CurrTabName, strIdTeacher);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvTeacherInfoCache: clsvTeacherInfoEN = JSON.parse(strTempObj);
return objvTeacherInfoCache;
}
try
{
const objvTeacherInfo = await vTeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
if (objvTeacherInfo != null)
{
localStorage.setItem(strKey, JSON.stringify(objvTeacherInfo));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvTeacherInfo;
}
return objvTeacherInfo;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeacher, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_GetNameByIdTeacherCache(strIdTeacher: string) {

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfoWApi.GetNameByIdTeacherCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfoWApi.GetNameByIdTeacherCache)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
if (arrvTeacherInfoObjLstCache == null) return "";
try
{
const arrvTeacherInfoSel = arrvTeacherInfoObjLstCache.filter(x => 
 x.idTeacher == strIdTeacher );
let objvTeacherInfo: clsvTeacherInfoEN;
if (arrvTeacherInfoSel.length > 0)
{
objvTeacherInfo = arrvTeacherInfoSel[0];
return objvTeacherInfo.teacherName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdTeacher);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function vTeacherInfo_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsvTeacherInfoEN.con_IdTeacher)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvTeacherInfoEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvTeacherInfoEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdTeacher = strInValue;
if (IsNullOrEmpty(strInValue) == true)
{
return "";
}
const objvTeacherInfo = await vTeacherInfo_GetObjByIdTeacherCache(strIdTeacher );
if (objvTeacherInfo == null) return "";
if (objvTeacherInfo.GetFldValue(strOutFldName) == null) return "";
return objvTeacherInfo.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTeacherInfo_SortFunDefa(a:clsvTeacherInfoEN , b:clsvTeacherInfoEN): number 
{
return a.idTeacher.localeCompare(b.idTeacher);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTeacherInfo_SortFunDefa2Fld(a:clsvTeacherInfoEN , b:clsvTeacherInfoEN): number 
{
if (a.teacherId == b.teacherId) return a.teacherName.localeCompare(b.teacherName);
else return a.teacherId.localeCompare(b.teacherId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vTeacherInfo_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvTeacherInfoEN.con_IdTeacher:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idTeacher.localeCompare(b.idTeacher);
}
case clsvTeacherInfoEN.con_TeacherId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.teacherId.localeCompare(b.teacherId);
}
case clsvTeacherInfoEN.con_TeacherName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.teacherName.localeCompare(b.teacherName);
}
case clsvTeacherInfoEN.con_IdSex:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idSex.localeCompare(b.idSex);
}
case clsvTeacherInfoEN.con_SexDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.sexDesc == null) return -1;
if (b.sexDesc == null) return 1;
return a.sexDesc.localeCompare(b.sexDesc);
}
case clsvTeacherInfoEN.con_IdSchoolPs:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idSchoolPs == null) return -1;
if (b.idSchoolPs == null) return 1;
return a.idSchoolPs.localeCompare(b.idSchoolPs);
}
case clsvTeacherInfoEN.con_IdDisciplinePs:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idDisciplinePs == null) return -1;
if (b.idDisciplinePs == null) return 1;
return a.idDisciplinePs.localeCompare(b.idDisciplinePs);
}
case clsvTeacherInfoEN.con_IdUniZone:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsvTeacherInfoEN.con_UniZoneDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.uniZoneDesc == null) return -1;
if (b.uniZoneDesc == null) return 1;
return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
}
case clsvTeacherInfoEN.con_IdEthnic:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idEthnic.localeCompare(b.idEthnic);
}
case clsvTeacherInfoEN.con_EthnicName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.ethnicName == null) return -1;
if (b.ethnicName == null) return 1;
return a.ethnicName.localeCompare(b.ethnicName);
}
case clsvTeacherInfoEN.con_IdPolitics:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idPolitics.localeCompare(b.idPolitics);
}
case clsvTeacherInfoEN.con_PoliticsName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.politicsName.localeCompare(b.politicsName);
}
case clsvTeacherInfoEN.con_IdAdminGrade:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idAdminGrade.localeCompare(b.idAdminGrade);
}
case clsvTeacherInfoEN.con_AdminGradeDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.adminGradeDesc.localeCompare(b.adminGradeDesc);
}
case clsvTeacherInfoEN.con_IdProfGrade:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idProfGrade.localeCompare(b.idProfGrade);
}
case clsvTeacherInfoEN.con_ProfenssionalGradeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.profenssionalGradeName.localeCompare(b.profenssionalGradeName);
}
case clsvTeacherInfoEN.con_IdQualif:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idQualif.localeCompare(b.idQualif);
}
case clsvTeacherInfoEN.con_QualifDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.qualifDesc == null) return -1;
if (b.qualifDesc == null) return 1;
return a.qualifDesc.localeCompare(b.qualifDesc);
}
case clsvTeacherInfoEN.con_IdDegree:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idDegree.localeCompare(b.idDegree);
}
case clsvTeacherInfoEN.con_DegreeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.degreeName.localeCompare(b.degreeName);
}
case clsvTeacherInfoEN.con_IdStaffType:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idStaffType.localeCompare(b.idStaffType);
}
case clsvTeacherInfoEN.con_StaffTypeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.staffTypeName == null) return -1;
if (b.staffTypeName == null) return 1;
return a.staffTypeName.localeCompare(b.staffTypeName);
}
case clsvTeacherInfoEN.con_IdProvince:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.idProvince.localeCompare(b.idProvince);
}
case clsvTeacherInfoEN.con_ProvinceName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.provinceName == null) return -1;
if (b.provinceName == null) return 1;
return a.provinceName.localeCompare(b.provinceName);
}
case clsvTeacherInfoEN.con_CitizenId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.citizenId == null) return -1;
if (b.citizenId == null) return 1;
return a.citizenId.localeCompare(b.citizenId);
}
case clsvTeacherInfoEN.con_CardNo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.cardNo == null) return -1;
if (b.cardNo == null) return 1;
return a.cardNo.localeCompare(b.cardNo);
}
case clsvTeacherInfoEN.con_Birthday:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.birthday == null) return -1;
if (b.birthday == null) return 1;
return a.birthday.localeCompare(b.birthday);
}
case clsvTeacherInfoEN.con_GraduationMajor:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.graduationMajor == null) return -1;
if (b.graduationMajor == null) return 1;
return a.graduationMajor.localeCompare(b.graduationMajor);
}
case clsvTeacherInfoEN.con_TelNo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.telNo == null) return -1;
if (b.telNo == null) return 1;
return a.telNo.localeCompare(b.telNo);
}
case clsvTeacherInfoEN.con_Email:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsvTeacherInfoEN.con_WebSite:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.webSite == null) return -1;
if (b.webSite == null) return 1;
return a.webSite.localeCompare(b.webSite);
}
case clsvTeacherInfoEN.con_PersonBlog:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.personBlog == null) return -1;
if (b.personBlog == null) return 1;
return a.personBlog.localeCompare(b.personBlog);
}
case clsvTeacherInfoEN.con_EntryDate:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.entryDate == null) return -1;
if (b.entryDate == null) return 1;
return a.entryDate.localeCompare(b.entryDate);
}
case clsvTeacherInfoEN.con_Offed:
return (a: clsvTeacherInfoEN) => {
if (a.offed == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_IsAvconUser:
return (a: clsvTeacherInfoEN) => {
if (a.isAvconUser == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_IsGpUser:
return (a: clsvTeacherInfoEN) => {
if (a.isGpUser == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_IsLocalUser:
return (a: clsvTeacherInfoEN) => {
if (a.isLocalUser == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_FromUnit:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.fromUnit == null) return -1;
if (b.fromUnit == null) return 1;
return a.fromUnit.localeCompare(b.fromUnit);
}
case clsvTeacherInfoEN.con_Memo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvTeacherInfoEN.con_IdXzCollege:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvTeacherInfoEN.con_CollegeId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.collegeId == null) return -1;
if (b.collegeId == null) return 1;
return a.collegeId.localeCompare(b.collegeId);
}
case clsvTeacherInfoEN.con_CollegeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return a.collegeName.localeCompare(b.collegeName);
}
case clsvTeacherInfoEN.con_CollegeNameA:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.collegeNameA == null) return -1;
if (b.collegeNameA == null) return 1;
return a.collegeNameA.localeCompare(b.collegeNameA);
}
case clsvTeacherInfoEN.con_IdXzMajor:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvTeacherInfoEN.con_EntryDay:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.entryDay == null) return -1;
if (b.entryDay == null) return 1;
return a.entryDay.localeCompare(b.entryDay);
}
case clsvTeacherInfoEN.con_IdPhoto:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idPhoto == null) return -1;
if (b.idPhoto == null) return 1;
return a.idPhoto.localeCompare(b.idPhoto);
}
case clsvTeacherInfoEN.con_IdReligion:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idReligion == null) return -1;
if (b.idReligion == null) return 1;
return a.idReligion.localeCompare(b.idReligion);
}
case clsvTeacherInfoEN.con_ReligionName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.religionName == null) return -1;
if (b.religionName == null) return 1;
return a.religionName.localeCompare(b.religionName);
}
case clsvTeacherInfoEN.con_IsMessage:
return (a: clsvTeacherInfoEN) => {
if (a.isMessage == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_Microblog:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.microblog == null) return -1;
if (b.microblog == null) return 1;
return a.microblog.localeCompare(b.microblog);
}
case clsvTeacherInfoEN.con_ModifyUserId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsvTeacherInfoEN.con_OffedBak:
return (a: clsvTeacherInfoEN) => {
if (a.offedBak == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_PhoneNumber:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsvTeacherInfoEN.con_QQ:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.qQ == null) return -1;
if (b.qQ == null) return 1;
return a.qQ.localeCompare(b.qQ);
}
case clsvTeacherInfoEN.con_TeachIdCollege:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.teachIdCollege == null) return -1;
if (b.teachIdCollege == null) return 1;
return a.teachIdCollege.localeCompare(b.teachIdCollege);
}
case clsvTeacherInfoEN.con_TeachIdMajor:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.teachIdMajor == null) return -1;
if (b.teachIdMajor == null) return 1;
return a.teachIdMajor.localeCompare(b.teachIdMajor);
}
case clsvTeacherInfoEN.con_Tel:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.tel == null) return -1;
if (b.tel == null) return 1;
return a.tel.localeCompare(b.tel);
}
case clsvTeacherInfoEN.con_ModifyDate:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsvTeacherInfoEN.con_RegisterPassword:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.registerPassword == null) return -1;
if (b.registerPassword == null) return 1;
return a.registerPassword.localeCompare(b.registerPassword);
}
case clsvTeacherInfoEN.con_EntryYear:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.entryYear == null) return -1;
if (b.entryYear == null) return 1;
return a.entryYear.localeCompare(b.entryYear);
}
case clsvTeacherInfoEN.con_IdCardNo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (a.idCardNo == null) return -1;
if (b.idCardNo == null) return 1;
return a.idCardNo.localeCompare(b.idCardNo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeacherInfo]中不存在!(in ${ vTeacherInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvTeacherInfoEN.con_IdTeacher:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idTeacher.localeCompare(a.idTeacher);
}
case clsvTeacherInfoEN.con_TeacherId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.teacherId.localeCompare(a.teacherId);
}
case clsvTeacherInfoEN.con_TeacherName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.teacherName.localeCompare(a.teacherName);
}
case clsvTeacherInfoEN.con_IdSex:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idSex.localeCompare(a.idSex);
}
case clsvTeacherInfoEN.con_SexDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.sexDesc == null) return -1;
if (a.sexDesc == null) return 1;
return b.sexDesc.localeCompare(a.sexDesc);
}
case clsvTeacherInfoEN.con_IdSchoolPs:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idSchoolPs == null) return -1;
if (a.idSchoolPs == null) return 1;
return b.idSchoolPs.localeCompare(a.idSchoolPs);
}
case clsvTeacherInfoEN.con_IdDisciplinePs:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idDisciplinePs == null) return -1;
if (a.idDisciplinePs == null) return 1;
return b.idDisciplinePs.localeCompare(a.idDisciplinePs);
}
case clsvTeacherInfoEN.con_IdUniZone:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsvTeacherInfoEN.con_UniZoneDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.uniZoneDesc == null) return -1;
if (a.uniZoneDesc == null) return 1;
return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
}
case clsvTeacherInfoEN.con_IdEthnic:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idEthnic.localeCompare(a.idEthnic);
}
case clsvTeacherInfoEN.con_EthnicName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.ethnicName == null) return -1;
if (a.ethnicName == null) return 1;
return b.ethnicName.localeCompare(a.ethnicName);
}
case clsvTeacherInfoEN.con_IdPolitics:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idPolitics.localeCompare(a.idPolitics);
}
case clsvTeacherInfoEN.con_PoliticsName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.politicsName.localeCompare(a.politicsName);
}
case clsvTeacherInfoEN.con_IdAdminGrade:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idAdminGrade.localeCompare(a.idAdminGrade);
}
case clsvTeacherInfoEN.con_AdminGradeDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.adminGradeDesc.localeCompare(a.adminGradeDesc);
}
case clsvTeacherInfoEN.con_IdProfGrade:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idProfGrade.localeCompare(a.idProfGrade);
}
case clsvTeacherInfoEN.con_ProfenssionalGradeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.profenssionalGradeName.localeCompare(a.profenssionalGradeName);
}
case clsvTeacherInfoEN.con_IdQualif:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idQualif.localeCompare(a.idQualif);
}
case clsvTeacherInfoEN.con_QualifDesc:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.qualifDesc == null) return -1;
if (a.qualifDesc == null) return 1;
return b.qualifDesc.localeCompare(a.qualifDesc);
}
case clsvTeacherInfoEN.con_IdDegree:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idDegree.localeCompare(a.idDegree);
}
case clsvTeacherInfoEN.con_DegreeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.degreeName.localeCompare(a.degreeName);
}
case clsvTeacherInfoEN.con_IdStaffType:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idStaffType.localeCompare(a.idStaffType);
}
case clsvTeacherInfoEN.con_StaffTypeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.staffTypeName == null) return -1;
if (a.staffTypeName == null) return 1;
return b.staffTypeName.localeCompare(a.staffTypeName);
}
case clsvTeacherInfoEN.con_IdProvince:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.idProvince.localeCompare(a.idProvince);
}
case clsvTeacherInfoEN.con_ProvinceName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.provinceName == null) return -1;
if (a.provinceName == null) return 1;
return b.provinceName.localeCompare(a.provinceName);
}
case clsvTeacherInfoEN.con_CitizenId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.citizenId == null) return -1;
if (a.citizenId == null) return 1;
return b.citizenId.localeCompare(a.citizenId);
}
case clsvTeacherInfoEN.con_CardNo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.cardNo == null) return -1;
if (a.cardNo == null) return 1;
return b.cardNo.localeCompare(a.cardNo);
}
case clsvTeacherInfoEN.con_Birthday:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.birthday == null) return -1;
if (a.birthday == null) return 1;
return b.birthday.localeCompare(a.birthday);
}
case clsvTeacherInfoEN.con_GraduationMajor:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.graduationMajor == null) return -1;
if (a.graduationMajor == null) return 1;
return b.graduationMajor.localeCompare(a.graduationMajor);
}
case clsvTeacherInfoEN.con_TelNo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.telNo == null) return -1;
if (a.telNo == null) return 1;
return b.telNo.localeCompare(a.telNo);
}
case clsvTeacherInfoEN.con_Email:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsvTeacherInfoEN.con_WebSite:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.webSite == null) return -1;
if (a.webSite == null) return 1;
return b.webSite.localeCompare(a.webSite);
}
case clsvTeacherInfoEN.con_PersonBlog:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.personBlog == null) return -1;
if (a.personBlog == null) return 1;
return b.personBlog.localeCompare(a.personBlog);
}
case clsvTeacherInfoEN.con_EntryDate:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.entryDate == null) return -1;
if (a.entryDate == null) return 1;
return b.entryDate.localeCompare(a.entryDate);
}
case clsvTeacherInfoEN.con_Offed:
return (b: clsvTeacherInfoEN) => {
if (b.offed == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_IsAvconUser:
return (b: clsvTeacherInfoEN) => {
if (b.isAvconUser == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_IsGpUser:
return (b: clsvTeacherInfoEN) => {
if (b.isGpUser == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_IsLocalUser:
return (b: clsvTeacherInfoEN) => {
if (b.isLocalUser == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_FromUnit:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.fromUnit == null) return -1;
if (a.fromUnit == null) return 1;
return b.fromUnit.localeCompare(a.fromUnit);
}
case clsvTeacherInfoEN.con_Memo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvTeacherInfoEN.con_IdXzCollege:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvTeacherInfoEN.con_CollegeId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.collegeId == null) return -1;
if (a.collegeId == null) return 1;
return b.collegeId.localeCompare(a.collegeId);
}
case clsvTeacherInfoEN.con_CollegeName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
return b.collegeName.localeCompare(a.collegeName);
}
case clsvTeacherInfoEN.con_CollegeNameA:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.collegeNameA == null) return -1;
if (a.collegeNameA == null) return 1;
return b.collegeNameA.localeCompare(a.collegeNameA);
}
case clsvTeacherInfoEN.con_IdXzMajor:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvTeacherInfoEN.con_EntryDay:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.entryDay == null) return -1;
if (a.entryDay == null) return 1;
return b.entryDay.localeCompare(a.entryDay);
}
case clsvTeacherInfoEN.con_IdPhoto:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idPhoto == null) return -1;
if (a.idPhoto == null) return 1;
return b.idPhoto.localeCompare(a.idPhoto);
}
case clsvTeacherInfoEN.con_IdReligion:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idReligion == null) return -1;
if (a.idReligion == null) return 1;
return b.idReligion.localeCompare(a.idReligion);
}
case clsvTeacherInfoEN.con_ReligionName:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.religionName == null) return -1;
if (a.religionName == null) return 1;
return b.religionName.localeCompare(a.religionName);
}
case clsvTeacherInfoEN.con_IsMessage:
return (b: clsvTeacherInfoEN) => {
if (b.isMessage == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_Microblog:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.microblog == null) return -1;
if (a.microblog == null) return 1;
return b.microblog.localeCompare(a.microblog);
}
case clsvTeacherInfoEN.con_ModifyUserId:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsvTeacherInfoEN.con_OffedBak:
return (b: clsvTeacherInfoEN) => {
if (b.offedBak == true) return 1;
else return -1
}
case clsvTeacherInfoEN.con_PhoneNumber:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsvTeacherInfoEN.con_QQ:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.qQ == null) return -1;
if (a.qQ == null) return 1;
return b.qQ.localeCompare(a.qQ);
}
case clsvTeacherInfoEN.con_TeachIdCollege:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.teachIdCollege == null) return -1;
if (a.teachIdCollege == null) return 1;
return b.teachIdCollege.localeCompare(a.teachIdCollege);
}
case clsvTeacherInfoEN.con_TeachIdMajor:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.teachIdMajor == null) return -1;
if (a.teachIdMajor == null) return 1;
return b.teachIdMajor.localeCompare(a.teachIdMajor);
}
case clsvTeacherInfoEN.con_Tel:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.tel == null) return -1;
if (a.tel == null) return 1;
return b.tel.localeCompare(a.tel);
}
case clsvTeacherInfoEN.con_ModifyDate:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsvTeacherInfoEN.con_RegisterPassword:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.registerPassword == null) return -1;
if (a.registerPassword == null) return 1;
return b.registerPassword.localeCompare(a.registerPassword);
}
case clsvTeacherInfoEN.con_EntryYear:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.entryYear == null) return -1;
if (a.entryYear == null) return 1;
return b.entryYear.localeCompare(a.entryYear);
}
case clsvTeacherInfoEN.con_IdCardNo:
return (a: clsvTeacherInfoEN, b: clsvTeacherInfoEN) => {
if (b.idCardNo == null) return -1;
if (a.idCardNo == null) return 1;
return b.idCardNo.localeCompare(a.idCardNo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeacherInfo]中不存在!(in ${ vTeacherInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vTeacherInfo_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvTeacherInfoEN.con_IdTeacher:
return (obj: clsvTeacherInfoEN) => {
return obj.idTeacher === value;
}
case clsvTeacherInfoEN.con_TeacherId:
return (obj: clsvTeacherInfoEN) => {
return obj.teacherId === value;
}
case clsvTeacherInfoEN.con_TeacherName:
return (obj: clsvTeacherInfoEN) => {
return obj.teacherName === value;
}
case clsvTeacherInfoEN.con_IdSex:
return (obj: clsvTeacherInfoEN) => {
return obj.idSex === value;
}
case clsvTeacherInfoEN.con_SexDesc:
return (obj: clsvTeacherInfoEN) => {
return obj.sexDesc === value;
}
case clsvTeacherInfoEN.con_IdSchoolPs:
return (obj: clsvTeacherInfoEN) => {
return obj.idSchoolPs === value;
}
case clsvTeacherInfoEN.con_IdDisciplinePs:
return (obj: clsvTeacherInfoEN) => {
return obj.idDisciplinePs === value;
}
case clsvTeacherInfoEN.con_IdUniZone:
return (obj: clsvTeacherInfoEN) => {
return obj.idUniZone === value;
}
case clsvTeacherInfoEN.con_UniZoneDesc:
return (obj: clsvTeacherInfoEN) => {
return obj.uniZoneDesc === value;
}
case clsvTeacherInfoEN.con_IdEthnic:
return (obj: clsvTeacherInfoEN) => {
return obj.idEthnic === value;
}
case clsvTeacherInfoEN.con_EthnicName:
return (obj: clsvTeacherInfoEN) => {
return obj.ethnicName === value;
}
case clsvTeacherInfoEN.con_IdPolitics:
return (obj: clsvTeacherInfoEN) => {
return obj.idPolitics === value;
}
case clsvTeacherInfoEN.con_PoliticsName:
return (obj: clsvTeacherInfoEN) => {
return obj.politicsName === value;
}
case clsvTeacherInfoEN.con_IdAdminGrade:
return (obj: clsvTeacherInfoEN) => {
return obj.idAdminGrade === value;
}
case clsvTeacherInfoEN.con_AdminGradeDesc:
return (obj: clsvTeacherInfoEN) => {
return obj.adminGradeDesc === value;
}
case clsvTeacherInfoEN.con_IdProfGrade:
return (obj: clsvTeacherInfoEN) => {
return obj.idProfGrade === value;
}
case clsvTeacherInfoEN.con_ProfenssionalGradeName:
return (obj: clsvTeacherInfoEN) => {
return obj.profenssionalGradeName === value;
}
case clsvTeacherInfoEN.con_IdQualif:
return (obj: clsvTeacherInfoEN) => {
return obj.idQualif === value;
}
case clsvTeacherInfoEN.con_QualifDesc:
return (obj: clsvTeacherInfoEN) => {
return obj.qualifDesc === value;
}
case clsvTeacherInfoEN.con_IdDegree:
return (obj: clsvTeacherInfoEN) => {
return obj.idDegree === value;
}
case clsvTeacherInfoEN.con_DegreeName:
return (obj: clsvTeacherInfoEN) => {
return obj.degreeName === value;
}
case clsvTeacherInfoEN.con_IdStaffType:
return (obj: clsvTeacherInfoEN) => {
return obj.idStaffType === value;
}
case clsvTeacherInfoEN.con_StaffTypeName:
return (obj: clsvTeacherInfoEN) => {
return obj.staffTypeName === value;
}
case clsvTeacherInfoEN.con_IdProvince:
return (obj: clsvTeacherInfoEN) => {
return obj.idProvince === value;
}
case clsvTeacherInfoEN.con_ProvinceName:
return (obj: clsvTeacherInfoEN) => {
return obj.provinceName === value;
}
case clsvTeacherInfoEN.con_CitizenId:
return (obj: clsvTeacherInfoEN) => {
return obj.citizenId === value;
}
case clsvTeacherInfoEN.con_CardNo:
return (obj: clsvTeacherInfoEN) => {
return obj.cardNo === value;
}
case clsvTeacherInfoEN.con_Birthday:
return (obj: clsvTeacherInfoEN) => {
return obj.birthday === value;
}
case clsvTeacherInfoEN.con_GraduationMajor:
return (obj: clsvTeacherInfoEN) => {
return obj.graduationMajor === value;
}
case clsvTeacherInfoEN.con_TelNo:
return (obj: clsvTeacherInfoEN) => {
return obj.telNo === value;
}
case clsvTeacherInfoEN.con_Email:
return (obj: clsvTeacherInfoEN) => {
return obj.email === value;
}
case clsvTeacherInfoEN.con_WebSite:
return (obj: clsvTeacherInfoEN) => {
return obj.webSite === value;
}
case clsvTeacherInfoEN.con_PersonBlog:
return (obj: clsvTeacherInfoEN) => {
return obj.personBlog === value;
}
case clsvTeacherInfoEN.con_EntryDate:
return (obj: clsvTeacherInfoEN) => {
return obj.entryDate === value;
}
case clsvTeacherInfoEN.con_Offed:
return (obj: clsvTeacherInfoEN) => {
return obj.offed === value;
}
case clsvTeacherInfoEN.con_IsAvconUser:
return (obj: clsvTeacherInfoEN) => {
return obj.isAvconUser === value;
}
case clsvTeacherInfoEN.con_IsGpUser:
return (obj: clsvTeacherInfoEN) => {
return obj.isGpUser === value;
}
case clsvTeacherInfoEN.con_IsLocalUser:
return (obj: clsvTeacherInfoEN) => {
return obj.isLocalUser === value;
}
case clsvTeacherInfoEN.con_FromUnit:
return (obj: clsvTeacherInfoEN) => {
return obj.fromUnit === value;
}
case clsvTeacherInfoEN.con_Memo:
return (obj: clsvTeacherInfoEN) => {
return obj.memo === value;
}
case clsvTeacherInfoEN.con_IdXzCollege:
return (obj: clsvTeacherInfoEN) => {
return obj.idXzCollege === value;
}
case clsvTeacherInfoEN.con_CollegeId:
return (obj: clsvTeacherInfoEN) => {
return obj.collegeId === value;
}
case clsvTeacherInfoEN.con_CollegeName:
return (obj: clsvTeacherInfoEN) => {
return obj.collegeName === value;
}
case clsvTeacherInfoEN.con_CollegeNameA:
return (obj: clsvTeacherInfoEN) => {
return obj.collegeNameA === value;
}
case clsvTeacherInfoEN.con_IdXzMajor:
return (obj: clsvTeacherInfoEN) => {
return obj.idXzMajor === value;
}
case clsvTeacherInfoEN.con_EntryDay:
return (obj: clsvTeacherInfoEN) => {
return obj.entryDay === value;
}
case clsvTeacherInfoEN.con_IdPhoto:
return (obj: clsvTeacherInfoEN) => {
return obj.idPhoto === value;
}
case clsvTeacherInfoEN.con_IdReligion:
return (obj: clsvTeacherInfoEN) => {
return obj.idReligion === value;
}
case clsvTeacherInfoEN.con_ReligionName:
return (obj: clsvTeacherInfoEN) => {
return obj.religionName === value;
}
case clsvTeacherInfoEN.con_IsMessage:
return (obj: clsvTeacherInfoEN) => {
return obj.isMessage === value;
}
case clsvTeacherInfoEN.con_Microblog:
return (obj: clsvTeacherInfoEN) => {
return obj.microblog === value;
}
case clsvTeacherInfoEN.con_ModifyUserId:
return (obj: clsvTeacherInfoEN) => {
return obj.modifyUserId === value;
}
case clsvTeacherInfoEN.con_OffedBak:
return (obj: clsvTeacherInfoEN) => {
return obj.offedBak === value;
}
case clsvTeacherInfoEN.con_PhoneNumber:
return (obj: clsvTeacherInfoEN) => {
return obj.phoneNumber === value;
}
case clsvTeacherInfoEN.con_QQ:
return (obj: clsvTeacherInfoEN) => {
return obj.qQ === value;
}
case clsvTeacherInfoEN.con_TeachIdCollege:
return (obj: clsvTeacherInfoEN) => {
return obj.teachIdCollege === value;
}
case clsvTeacherInfoEN.con_TeachIdMajor:
return (obj: clsvTeacherInfoEN) => {
return obj.teachIdMajor === value;
}
case clsvTeacherInfoEN.con_Tel:
return (obj: clsvTeacherInfoEN) => {
return obj.tel === value;
}
case clsvTeacherInfoEN.con_ModifyDate:
return (obj: clsvTeacherInfoEN) => {
return obj.modifyDate === value;
}
case clsvTeacherInfoEN.con_RegisterPassword:
return (obj: clsvTeacherInfoEN) => {
return obj.registerPassword === value;
}
case clsvTeacherInfoEN.con_EntryYear:
return (obj: clsvTeacherInfoEN) => {
return obj.entryYear === value;
}
case clsvTeacherInfoEN.con_IdCardNo:
return (obj: clsvTeacherInfoEN) => {
return obj.idCardNo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeacherInfo]中不存在!(in ${ vTeacherInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function vTeacherInfo_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsvTeacherInfoEN.con_IdTeacher)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvTeacherInfo = await vTeacherInfo_GetObjLstCache();
if (arrvTeacherInfo == null) return [];
let arrvTeacherInfoSel = arrvTeacherInfo;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvTeacherInfoSel = arrvTeacherInfoSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvTeacherInfoSel.length == 0) return [];
return arrvTeacherInfoSel.map(x=>x.idTeacher);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vTeacherInfo_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_GetFirstObjAsync(strWhereCond: string): Promise<clsvTeacherInfoEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const objvTeacherInfo = vTeacherInfo_GetObjFromJsonObj(returnObj);
return objvTeacherInfo;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvTeacherInfoEN._CurrTabName;
if (IsNullOrEmpty(clsvTeacherInfoEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTeacherInfoEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvTeacherInfoExObjLstCache: Array<clsvTeacherInfoEN> = CacheHelper.Get(strKey);
const arrvTeacherInfoObjLstT = vTeacherInfo_GetObjLstByJSONObjLst(arrvTeacherInfoExObjLstCache);
return arrvTeacherInfoObjLstT;
}
try
{
const arrvTeacherInfoExObjLst = await vTeacherInfo_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvTeacherInfoExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTeacherInfoExObjLst.length);
console.log(strInfo);
return arrvTeacherInfoExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvTeacherInfoEN._CurrTabName;
if (IsNullOrEmpty(clsvTeacherInfoEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTeacherInfoEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvTeacherInfoExObjLstCache: Array<clsvTeacherInfoEN> = JSON.parse(strTempObjLst);
const arrvTeacherInfoObjLstT = vTeacherInfo_GetObjLstByJSONObjLst(arrvTeacherInfoExObjLstCache);
return arrvTeacherInfoObjLstT;
}
try
{
const arrvTeacherInfoExObjLst = await vTeacherInfo_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvTeacherInfoExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTeacherInfoExObjLst.length);
console.log(strInfo);
return arrvTeacherInfoExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvTeacherInfoEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvTeacherInfoObjLstCache: Array<clsvTeacherInfoEN> = JSON.parse(strTempObjLst);
return arrvTeacherInfoObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vTeacherInfo_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsvTeacherInfoEN._CurrTabName;
if (IsNullOrEmpty(clsvTeacherInfoEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTeacherInfoEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvTeacherInfoExObjLstCache: Array<clsvTeacherInfoEN> = JSON.parse(strTempObjLst);
const arrvTeacherInfoObjLstT = vTeacherInfo_GetObjLstByJSONObjLst(arrvTeacherInfoExObjLstCache);
return arrvTeacherInfoObjLstT;
}
try
{
const arrvTeacherInfoExObjLst = await vTeacherInfo_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvTeacherInfoExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTeacherInfoExObjLst.length);
console.log(strInfo);
return arrvTeacherInfoExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsvTeacherInfoEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvTeacherInfoObjLstCache: Array<clsvTeacherInfoEN> = JSON.parse(strTempObjLst);
return arrvTeacherInfoObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstCache(): Promise<Array<clsvTeacherInfoEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrvTeacherInfoObjLstCache;
switch (clsvTeacherInfoEN.CacheModeId)
{
case "04"://sessionStorage
arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstClientCache();
break;
default:
arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstClientCache();
break;
}
return arrvTeacherInfoObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvTeacherInfoObjLstCache;
switch (clsvTeacherInfoEN.CacheModeId)
{
case "04"://sessionStorage
arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrvTeacherInfoObjLstCache = null;
break;
default:
arrvTeacherInfoObjLstCache = null;
break;
}
return arrvTeacherInfoObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdTeacherCond:条件对象
 * @returns 对象列表子集
*/
export  async function vTeacherInfo_GetSubObjLstCache(objvTeacherInfoCond: clsvTeacherInfoEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
let arrvTeacherInfoSel = arrvTeacherInfoObjLstCache;
if (objvTeacherInfoCond.sfFldComparisonOp == null || objvTeacherInfoCond.sfFldComparisonOp == "") return arrvTeacherInfoSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvTeacherInfoCond.sfFldComparisonOp);
//console.log("clsvTeacherInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvTeacherInfoCond);
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
return arrvTeacherInfoSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvTeacherInfoCond), vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTeacherInfoEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdTeacher:关键字列表
 * @returns 对象列表
 **/
export  async function vTeacherInfo_GetObjLstByIdTeacherLstAsync(arrIdTeacher: Array<string>): Promise<Array<clsvTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstByIdTeacherLstAsync";
const strAction = "GetObjLstByIdTeacherLst";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeacher, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrIdTeacherLst:关键字列表
 * @returns 对象列表
*/
export  async function vTeacherInfo_GetObjLstByIdTeacherLstCache(arrIdTeacherLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdTeacherLstCache";
try
{
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
const arrvTeacherInfoSel = arrvTeacherInfoObjLstCache.filter(x => arrIdTeacherLst.indexOf(x.idTeacher)>-1);
return arrvTeacherInfoSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdTeacherLst.join(","), vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vTeacherInfo_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvTeacherInfoEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function vTeacherInfo_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvTeacherInfoEN>();
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
if (arrvTeacherInfoObjLstCache.length == 0) return arrvTeacherInfoObjLstCache;
let arrvTeacherInfoSel = arrvTeacherInfoObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objvTeacherInfoCond = new clsvTeacherInfoEN();
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
const arrValues = strValue.toString().split(',');
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
arrvTeacherInfoSel = arrvTeacherInfoSel.sort(vTeacherInfo_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvTeacherInfoSel = arrvTeacherInfoSel.sort(objPagerPara.sortFun);
}
arrvTeacherInfoSel = arrvTeacherInfoSel.slice(intStart, intEnd);     
return arrvTeacherInfoSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTeacherInfoEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vTeacherInfo_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvTeacherInfoEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrIdTeacherCond:条件对象
 * @returns 对象列表子集
*/
export  async function vTeacherInfo_IsExistRecordCache(objvTeacherInfoCond: clsvTeacherInfoEN) {
const strThisFuncName = "IsExistRecordCache";
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
if (arrvTeacherInfoObjLstCache == null) return false;
let arrvTeacherInfoSel = arrvTeacherInfoObjLstCache;
if (objvTeacherInfoCond.sfFldComparisonOp == null || objvTeacherInfoCond.sfFldComparisonOp == "") return arrvTeacherInfoSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvTeacherInfoCond.sfFldComparisonOp);
//console.log("clsvTeacherInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvTeacherInfoCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
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
if (arrvTeacherInfoSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvTeacherInfoCond), vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function vTeacherInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_IsExistCache(strIdTeacher:string) {
const strThisFuncName = "IsExistCache";
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
if (arrvTeacherInfoObjLstCache == null) return false;
try
{
const arrvTeacherInfoSel = arrvTeacherInfoObjLstCache.filter(x => x.idTeacher == strIdTeacher);
if (arrvTeacherInfoSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdTeacher, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdTeacher:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vTeacherInfo_IsExistAsync(strIdTeacher: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeacher
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vTeacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objvTeacherInfoCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vTeacherInfo_GetRecCountByCondCache(objvTeacherInfoCond: clsvTeacherInfoEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvTeacherInfoObjLstCache = await vTeacherInfo_GetObjLstCache();
if (arrvTeacherInfoObjLstCache == null) return 0;
let arrvTeacherInfoSel = arrvTeacherInfoObjLstCache;
if (objvTeacherInfoCond.sfFldComparisonOp == null || objvTeacherInfoCond.sfFldComparisonOp == "") return arrvTeacherInfoSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objvTeacherInfoCond.sfFldComparisonOp);
//console.log("clsvTeacherInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objvTeacherInfoCond);
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
const arrValues = strValue.toString().split(',');
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
return arrvTeacherInfoSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvTeacherInfoCond), vTeacherInfo_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vTeacherInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vTeacherInfo_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsvTeacherInfoEN._CurrTabName;
switch (clsvTeacherInfoEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function vTeacherInfo_Cache(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vTeacherInfo_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvTeacherInfoEN.con_IdTeacher, clsvTeacherInfoEN.con_TeacherName, "v教师");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTeacherInfo_GetJSONStrByObj (pobjvTeacherInfoEN: clsvTeacherInfoEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvTeacherInfoEN);
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
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vTeacherInfo_GetObjLstByJSONStr (strJSON: string): Array<clsvTeacherInfoEN>
{
let arrvTeacherInfoObjLst = new Array<clsvTeacherInfoEN>();
if (strJSON === "")
{
return arrvTeacherInfoObjLst;
}
try
{
arrvTeacherInfoObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvTeacherInfoObjLst;
}
return arrvTeacherInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTeacherInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vTeacherInfo_GetObjLstByJSONObjLst (arrvTeacherInfoObjLstS: Array<clsvTeacherInfoEN>): Array<clsvTeacherInfoEN>
{
const arrvTeacherInfoObjLst = new Array<clsvTeacherInfoEN>();
for (const objInFor of arrvTeacherInfoObjLstS) {
const obj1 = vTeacherInfo_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvTeacherInfoObjLst.push(obj1);
}
return arrvTeacherInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTeacherInfo_GetObjByJSONStr (strJSON: string): clsvTeacherInfoEN
{
let pobjvTeacherInfoEN = new clsvTeacherInfoEN();
if (strJSON === "")
{
return pobjvTeacherInfoEN;
}
try
{
pobjvTeacherInfoEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvTeacherInfoEN;
}
return pobjvTeacherInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vTeacherInfo_GetCombineCondition(objvTeacherInfoCond: clsvTeacherInfoEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdTeacher, objvTeacherInfoCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_TeacherId) == true)
{
const strComparisonOpTeacherId:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_TeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_TeacherId, objvTeacherInfoCond.teacherId, strComparisonOpTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_TeacherName) == true)
{
const strComparisonOpTeacherName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_TeacherName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_TeacherName, objvTeacherInfoCond.teacherName, strComparisonOpTeacherName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdSex) == true)
{
const strComparisonOpIdSex:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdSex];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdSex, objvTeacherInfoCond.idSex, strComparisonOpIdSex);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_SexDesc) == true)
{
const strComparisonOpSexDesc:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_SexDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_SexDesc, objvTeacherInfoCond.sexDesc, strComparisonOpSexDesc);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdSchoolPs) == true)
{
const strComparisonOpIdSchoolPs:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdSchoolPs];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdSchoolPs, objvTeacherInfoCond.idSchoolPs, strComparisonOpIdSchoolPs);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdDisciplinePs) == true)
{
const strComparisonOpIdDisciplinePs:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdDisciplinePs];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdDisciplinePs, objvTeacherInfoCond.idDisciplinePs, strComparisonOpIdDisciplinePs);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdUniZone, objvTeacherInfoCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_UniZoneDesc) == true)
{
const strComparisonOpUniZoneDesc:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_UniZoneDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_UniZoneDesc, objvTeacherInfoCond.uniZoneDesc, strComparisonOpUniZoneDesc);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdEthnic) == true)
{
const strComparisonOpIdEthnic:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdEthnic];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdEthnic, objvTeacherInfoCond.idEthnic, strComparisonOpIdEthnic);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_EthnicName) == true)
{
const strComparisonOpEthnicName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_EthnicName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_EthnicName, objvTeacherInfoCond.ethnicName, strComparisonOpEthnicName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdPolitics) == true)
{
const strComparisonOpIdPolitics:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdPolitics];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdPolitics, objvTeacherInfoCond.idPolitics, strComparisonOpIdPolitics);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_PoliticsName) == true)
{
const strComparisonOpPoliticsName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_PoliticsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_PoliticsName, objvTeacherInfoCond.politicsName, strComparisonOpPoliticsName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdAdminGrade) == true)
{
const strComparisonOpIdAdminGrade:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdAdminGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdAdminGrade, objvTeacherInfoCond.idAdminGrade, strComparisonOpIdAdminGrade);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_AdminGradeDesc) == true)
{
const strComparisonOpAdminGradeDesc:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_AdminGradeDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_AdminGradeDesc, objvTeacherInfoCond.adminGradeDesc, strComparisonOpAdminGradeDesc);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdProfGrade) == true)
{
const strComparisonOpIdProfGrade:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdProfGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdProfGrade, objvTeacherInfoCond.idProfGrade, strComparisonOpIdProfGrade);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_ProfenssionalGradeName) == true)
{
const strComparisonOpProfenssionalGradeName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_ProfenssionalGradeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_ProfenssionalGradeName, objvTeacherInfoCond.profenssionalGradeName, strComparisonOpProfenssionalGradeName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdQualif) == true)
{
const strComparisonOpIdQualif:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdQualif];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdQualif, objvTeacherInfoCond.idQualif, strComparisonOpIdQualif);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_QualifDesc) == true)
{
const strComparisonOpQualifDesc:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_QualifDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_QualifDesc, objvTeacherInfoCond.qualifDesc, strComparisonOpQualifDesc);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdDegree) == true)
{
const strComparisonOpIdDegree:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdDegree];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdDegree, objvTeacherInfoCond.idDegree, strComparisonOpIdDegree);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_DegreeName) == true)
{
const strComparisonOpDegreeName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_DegreeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_DegreeName, objvTeacherInfoCond.degreeName, strComparisonOpDegreeName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdStaffType) == true)
{
const strComparisonOpIdStaffType:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdStaffType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdStaffType, objvTeacherInfoCond.idStaffType, strComparisonOpIdStaffType);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_StaffTypeName) == true)
{
const strComparisonOpStaffTypeName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_StaffTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_StaffTypeName, objvTeacherInfoCond.staffTypeName, strComparisonOpStaffTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdProvince) == true)
{
const strComparisonOpIdProvince:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdProvince];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdProvince, objvTeacherInfoCond.idProvince, strComparisonOpIdProvince);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_ProvinceName) == true)
{
const strComparisonOpProvinceName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_ProvinceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_ProvinceName, objvTeacherInfoCond.provinceName, strComparisonOpProvinceName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_CitizenId) == true)
{
const strComparisonOpCitizenId:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_CitizenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_CitizenId, objvTeacherInfoCond.citizenId, strComparisonOpCitizenId);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_CardNo) == true)
{
const strComparisonOpCardNo:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_CardNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_CardNo, objvTeacherInfoCond.cardNo, strComparisonOpCardNo);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_Birthday) == true)
{
const strComparisonOpBirthday:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_Birthday];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_Birthday, objvTeacherInfoCond.birthday, strComparisonOpBirthday);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_GraduationMajor) == true)
{
const strComparisonOpGraduationMajor:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_GraduationMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_GraduationMajor, objvTeacherInfoCond.graduationMajor, strComparisonOpGraduationMajor);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_TelNo) == true)
{
const strComparisonOpTelNo:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_TelNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_TelNo, objvTeacherInfoCond.telNo, strComparisonOpTelNo);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_Email) == true)
{
const strComparisonOpEmail:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_Email, objvTeacherInfoCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_WebSite) == true)
{
const strComparisonOpWebSite:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_WebSite];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_WebSite, objvTeacherInfoCond.webSite, strComparisonOpWebSite);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_PersonBlog) == true)
{
const strComparisonOpPersonBlog:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_PersonBlog];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_PersonBlog, objvTeacherInfoCond.personBlog, strComparisonOpPersonBlog);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_EntryDate) == true)
{
const strComparisonOpEntryDate:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_EntryDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_EntryDate, objvTeacherInfoCond.entryDate, strComparisonOpEntryDate);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_Offed) == true)
{
if (objvTeacherInfoCond.offed == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTeacherInfoEN.con_Offed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTeacherInfoEN.con_Offed);
}
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IsAvconUser) == true)
{
if (objvTeacherInfoCond.isAvconUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTeacherInfoEN.con_IsAvconUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTeacherInfoEN.con_IsAvconUser);
}
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IsGpUser) == true)
{
if (objvTeacherInfoCond.isGpUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTeacherInfoEN.con_IsGpUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTeacherInfoEN.con_IsGpUser);
}
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IsLocalUser) == true)
{
if (objvTeacherInfoCond.isLocalUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTeacherInfoEN.con_IsLocalUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTeacherInfoEN.con_IsLocalUser);
}
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_FromUnit) == true)
{
const strComparisonOpFromUnit:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_FromUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_FromUnit, objvTeacherInfoCond.fromUnit, strComparisonOpFromUnit);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_Memo, objvTeacherInfoCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdXzCollege, objvTeacherInfoCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_CollegeId, objvTeacherInfoCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_CollegeName, objvTeacherInfoCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_CollegeNameA) == true)
{
const strComparisonOpCollegeNameA:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_CollegeNameA];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_CollegeNameA, objvTeacherInfoCond.collegeNameA, strComparisonOpCollegeNameA);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdXzMajor, objvTeacherInfoCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_EntryDay) == true)
{
const strComparisonOpEntryDay:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_EntryDay];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_EntryDay, objvTeacherInfoCond.entryDay, strComparisonOpEntryDay);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdPhoto) == true)
{
const strComparisonOpIdPhoto:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdPhoto];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdPhoto, objvTeacherInfoCond.idPhoto, strComparisonOpIdPhoto);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdReligion) == true)
{
const strComparisonOpIdReligion:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdReligion];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdReligion, objvTeacherInfoCond.idReligion, strComparisonOpIdReligion);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_ReligionName) == true)
{
const strComparisonOpReligionName:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_ReligionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_ReligionName, objvTeacherInfoCond.religionName, strComparisonOpReligionName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IsMessage) == true)
{
if (objvTeacherInfoCond.isMessage == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTeacherInfoEN.con_IsMessage);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTeacherInfoEN.con_IsMessage);
}
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_Microblog) == true)
{
const strComparisonOpMicroblog:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_Microblog];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_Microblog, objvTeacherInfoCond.microblog, strComparisonOpMicroblog);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_ModifyUserId, objvTeacherInfoCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_OffedBak) == true)
{
if (objvTeacherInfoCond.offedBak == true)
{
strWhereCond += Format(" And {0} = '1'", clsvTeacherInfoEN.con_OffedBak);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvTeacherInfoEN.con_OffedBak);
}
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_PhoneNumber, objvTeacherInfoCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_QQ) == true)
{
const strComparisonOpQQ:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_QQ];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_QQ, objvTeacherInfoCond.qQ, strComparisonOpQQ);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_TeachIdCollege) == true)
{
const strComparisonOpTeachIdCollege:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_TeachIdCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_TeachIdCollege, objvTeacherInfoCond.teachIdCollege, strComparisonOpTeachIdCollege);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_TeachIdMajor) == true)
{
const strComparisonOpTeachIdMajor:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_TeachIdMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_TeachIdMajor, objvTeacherInfoCond.teachIdMajor, strComparisonOpTeachIdMajor);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_Tel) == true)
{
const strComparisonOpTel:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_Tel];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_Tel, objvTeacherInfoCond.tel, strComparisonOpTel);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_ModifyDate, objvTeacherInfoCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_RegisterPassword) == true)
{
const strComparisonOpRegisterPassword:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_RegisterPassword];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_RegisterPassword, objvTeacherInfoCond.registerPassword, strComparisonOpRegisterPassword);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_EntryYear) == true)
{
const strComparisonOpEntryYear:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_EntryYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_EntryYear, objvTeacherInfoCond.entryYear, strComparisonOpEntryYear);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfoCond.dicFldComparisonOp, clsvTeacherInfoEN.con_IdCardNo) == true)
{
const strComparisonOpIdCardNo:string = objvTeacherInfoCond.dicFldComparisonOp[clsvTeacherInfoEN.con_IdCardNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfoEN.con_IdCardNo, objvTeacherInfoCond.idCardNo, strComparisonOpIdCardNo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvTeacherInfoENS:源对象
 * @param objvTeacherInfoENT:目标对象
*/
export  function vTeacherInfo_CopyObjTo(objvTeacherInfoENS: clsvTeacherInfoEN , objvTeacherInfoENT: clsvTeacherInfoEN ): void 
{
objvTeacherInfoENT.idTeacher = objvTeacherInfoENS.idTeacher; //教师流水号
objvTeacherInfoENT.teacherId = objvTeacherInfoENS.teacherId; //教师工号
objvTeacherInfoENT.teacherName = objvTeacherInfoENS.teacherName; //教师姓名
objvTeacherInfoENT.idSex = objvTeacherInfoENS.idSex; //性别流水号
objvTeacherInfoENT.sexDesc = objvTeacherInfoENS.sexDesc; //性别名称
objvTeacherInfoENT.idSchoolPs = objvTeacherInfoENS.idSchoolPs; //学校流水号
objvTeacherInfoENT.idDisciplinePs = objvTeacherInfoENS.idDisciplinePs; //学科流水号
objvTeacherInfoENT.idUniZone = objvTeacherInfoENS.idUniZone; //校区流水号
objvTeacherInfoENT.uniZoneDesc = objvTeacherInfoENS.uniZoneDesc; //校区名称
objvTeacherInfoENT.idEthnic = objvTeacherInfoENS.idEthnic; //民族流水号
objvTeacherInfoENT.ethnicName = objvTeacherInfoENS.ethnicName; //民族名称
objvTeacherInfoENT.idPolitics = objvTeacherInfoENS.idPolitics; //政治面貌流水号
objvTeacherInfoENT.politicsName = objvTeacherInfoENS.politicsName; //政治面貌
objvTeacherInfoENT.idAdminGrade = objvTeacherInfoENS.idAdminGrade; //行政职务流水号
objvTeacherInfoENT.adminGradeDesc = objvTeacherInfoENS.adminGradeDesc; //行政职务描述
objvTeacherInfoENT.idProfGrade = objvTeacherInfoENS.idProfGrade; //专业职称流水号
objvTeacherInfoENT.profenssionalGradeName = objvTeacherInfoENS.profenssionalGradeName; //专业职称
objvTeacherInfoENT.idQualif = objvTeacherInfoENS.idQualif; //学历流水号
objvTeacherInfoENT.qualifDesc = objvTeacherInfoENS.qualifDesc; //QualifDesc
objvTeacherInfoENT.idDegree = objvTeacherInfoENS.idDegree; //学位流水号
objvTeacherInfoENT.degreeName = objvTeacherInfoENS.degreeName; //学位名称
objvTeacherInfoENT.idStaffType = objvTeacherInfoENS.idStaffType; //职工类型流水号
objvTeacherInfoENT.staffTypeName = objvTeacherInfoENS.staffTypeName; //职工类型名称
objvTeacherInfoENT.idProvince = objvTeacherInfoENS.idProvince; //省份流水号
objvTeacherInfoENT.provinceName = objvTeacherInfoENS.provinceName; //ProvinceName
objvTeacherInfoENT.citizenId = objvTeacherInfoENS.citizenId; //身份证号
objvTeacherInfoENT.cardNo = objvTeacherInfoENS.cardNo; //卡号
objvTeacherInfoENT.birthday = objvTeacherInfoENS.birthday; //出生日期
objvTeacherInfoENT.graduationMajor = objvTeacherInfoENS.graduationMajor; //毕业专业
objvTeacherInfoENT.telNo = objvTeacherInfoENS.telNo; //电话
objvTeacherInfoENT.email = objvTeacherInfoENS.email; //电子邮箱
objvTeacherInfoENT.webSite = objvTeacherInfoENS.webSite; //个人主页
objvTeacherInfoENT.personBlog = objvTeacherInfoENS.personBlog; //个人博客
objvTeacherInfoENT.entryDate = objvTeacherInfoENS.entryDate; //进校日期
objvTeacherInfoENT.offed = objvTeacherInfoENS.offed; //是否离校
objvTeacherInfoENT.isAvconUser = objvTeacherInfoENS.isAvconUser; //IsAvconUser
objvTeacherInfoENT.isGpUser = objvTeacherInfoENS.isGpUser; //是否Gp用户
objvTeacherInfoENT.isLocalUser = objvTeacherInfoENS.isLocalUser; //是否本地用户
objvTeacherInfoENT.fromUnit = objvTeacherInfoENS.fromUnit; //来自单位
objvTeacherInfoENT.memo = objvTeacherInfoENS.memo; //备注
objvTeacherInfoENT.idXzCollege = objvTeacherInfoENS.idXzCollege; //学院流水号
objvTeacherInfoENT.collegeId = objvTeacherInfoENS.collegeId; //学院ID
objvTeacherInfoENT.collegeName = objvTeacherInfoENS.collegeName; //学院名称
objvTeacherInfoENT.collegeNameA = objvTeacherInfoENS.collegeNameA; //学院名称简写
objvTeacherInfoENT.idXzMajor = objvTeacherInfoENS.idXzMajor; //专业流水号
objvTeacherInfoENT.entryDay = objvTeacherInfoENS.entryDay; //EntryDay
objvTeacherInfoENT.idPhoto = objvTeacherInfoENS.idPhoto; //id_Photo
objvTeacherInfoENT.idReligion = objvTeacherInfoENS.idReligion; //id_Religion
objvTeacherInfoENT.religionName = objvTeacherInfoENS.religionName; //ReligionName
objvTeacherInfoENT.isMessage = objvTeacherInfoENS.isMessage; //IsMessage
objvTeacherInfoENT.microblog = objvTeacherInfoENS.microblog; //Microblog
objvTeacherInfoENT.modifyUserId = objvTeacherInfoENS.modifyUserId; //修改人
objvTeacherInfoENT.offedBak = objvTeacherInfoENS.offedBak; //OffedBak
objvTeacherInfoENT.phoneNumber = objvTeacherInfoENS.phoneNumber; //电话
objvTeacherInfoENT.qQ = objvTeacherInfoENS.qQ; //QQ
objvTeacherInfoENT.teachIdCollege = objvTeacherInfoENS.teachIdCollege; //Teach_id_College
objvTeacherInfoENT.teachIdMajor = objvTeacherInfoENS.teachIdMajor; //Teach_id_Major
objvTeacherInfoENT.tel = objvTeacherInfoENS.tel; //Tel
objvTeacherInfoENT.modifyDate = objvTeacherInfoENS.modifyDate; //修改日期
objvTeacherInfoENT.registerPassword = objvTeacherInfoENS.registerPassword; //RegisterPassword
objvTeacherInfoENT.entryYear = objvTeacherInfoENS.entryYear; //EntryYear
objvTeacherInfoENT.idCardNo = objvTeacherInfoENS.idCardNo; //身份证号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTeacherInfoENS:源对象
 * @param objvTeacherInfoENT:目标对象
*/
export  function vTeacherInfo_GetObjFromJsonObj(objvTeacherInfoENS: clsvTeacherInfoEN): clsvTeacherInfoEN 
{
 const objvTeacherInfoENT: clsvTeacherInfoEN = new clsvTeacherInfoEN();
ObjectAssign(objvTeacherInfoENT, objvTeacherInfoENS);
 return objvTeacherInfoENT;
}