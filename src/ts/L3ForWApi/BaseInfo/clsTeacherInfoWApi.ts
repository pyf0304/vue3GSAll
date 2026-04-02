
 /**
 * 类名:clsTeacherInfoWApi
 * 表名:TeacherInfo(01120093)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 11:59:15
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
 * 教师(TeacherInfo)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2024年01月14日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsTeacherInfoEN } from "@/ts/L0Entity/BaseInfo/clsTeacherInfoEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const teacherInfo_Controller = "TeacherInfoApi";
 export const teacherInfo_ConstructorName = "teacherInfo";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeacher:关键字
 * @returns 对象
 **/
export  async function TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher: string): Promise<clsTeacherInfoEN|null>  
{
const strThisFuncName = "GetObjByIdTeacherAsync";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsTeacherInfoWApi.GetObjByIdTeacherAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsTeacherInfoWApi.GetObjByIdTeacherAsync)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeacher";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const objTeacherInfo = TeacherInfo_GetObjFromJsonObj(returnObj);
return objTeacherInfo;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdTeacherCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdTeacherlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByIdTeacherCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function TeacherInfo_SortFunDefa(a:clsTeacherInfoEN , b:clsTeacherInfoEN): number 
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
export  function TeacherInfo_SortFunDefa2Fld(a:clsTeacherInfoEN , b:clsTeacherInfoEN): number 
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
export  function TeacherInfo_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsTeacherInfoEN.con_IdTeacher:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return a.idTeacher.localeCompare(b.idTeacher);
}
case clsTeacherInfoEN.con_TeacherId:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return a.teacherId.localeCompare(b.teacherId);
}
case clsTeacherInfoEN.con_TeacherName:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return a.teacherName.localeCompare(b.teacherName);
}
case clsTeacherInfoEN.con_IdSex:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return a.idSex.localeCompare(b.idSex);
}
case clsTeacherInfoEN.con_IdSchoolPs:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idSchoolPs == null) return -1;
if (b.idSchoolPs == null) return 1;
return a.idSchoolPs.localeCompare(b.idSchoolPs);
}
case clsTeacherInfoEN.con_IdDisciplinePs:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idDisciplinePs == null) return -1;
if (b.idDisciplinePs == null) return 1;
return a.idDisciplinePs.localeCompare(b.idDisciplinePs);
}
case clsTeacherInfoEN.con_IdUniZone:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idUniZone == null) return -1;
if (b.idUniZone == null) return 1;
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsTeacherInfoEN.con_IdEthnic:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idEthnic == null) return -1;
if (b.idEthnic == null) return 1;
return a.idEthnic.localeCompare(b.idEthnic);
}
case clsTeacherInfoEN.con_IdPolitics:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idPolitics == null) return -1;
if (b.idPolitics == null) return 1;
return a.idPolitics.localeCompare(b.idPolitics);
}
case clsTeacherInfoEN.con_IdAdminGrade:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idAdminGrade == null) return -1;
if (b.idAdminGrade == null) return 1;
return a.idAdminGrade.localeCompare(b.idAdminGrade);
}
case clsTeacherInfoEN.con_IdProfGrade:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idProfGrade == null) return -1;
if (b.idProfGrade == null) return 1;
return a.idProfGrade.localeCompare(b.idProfGrade);
}
case clsTeacherInfoEN.con_IdQualif:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idQualif == null) return -1;
if (b.idQualif == null) return 1;
return a.idQualif.localeCompare(b.idQualif);
}
case clsTeacherInfoEN.con_IdDegree:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idDegree == null) return -1;
if (b.idDegree == null) return 1;
return a.idDegree.localeCompare(b.idDegree);
}
case clsTeacherInfoEN.con_IdStaffType:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idStaffType == null) return -1;
if (b.idStaffType == null) return 1;
return a.idStaffType.localeCompare(b.idStaffType);
}
case clsTeacherInfoEN.con_IdProvince:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idProvince == null) return -1;
if (b.idProvince == null) return 1;
return a.idProvince.localeCompare(b.idProvince);
}
case clsTeacherInfoEN.con_CitizenId:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.citizenId == null) return -1;
if (b.citizenId == null) return 1;
return a.citizenId.localeCompare(b.citizenId);
}
case clsTeacherInfoEN.con_CardNo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.cardNo == null) return -1;
if (b.cardNo == null) return 1;
return a.cardNo.localeCompare(b.cardNo);
}
case clsTeacherInfoEN.con_Birthday:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.birthday == null) return -1;
if (b.birthday == null) return 1;
return a.birthday.localeCompare(b.birthday);
}
case clsTeacherInfoEN.con_GraduationMajor:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.graduationMajor == null) return -1;
if (b.graduationMajor == null) return 1;
return a.graduationMajor.localeCompare(b.graduationMajor);
}
case clsTeacherInfoEN.con_TelNo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.telNo == null) return -1;
if (b.telNo == null) return 1;
return a.telNo.localeCompare(b.telNo);
}
case clsTeacherInfoEN.con_Email:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.email == null) return -1;
if (b.email == null) return 1;
return a.email.localeCompare(b.email);
}
case clsTeacherInfoEN.con_WebSite:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.webSite == null) return -1;
if (b.webSite == null) return 1;
return a.webSite.localeCompare(b.webSite);
}
case clsTeacherInfoEN.con_PersonBlog:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.personBlog == null) return -1;
if (b.personBlog == null) return 1;
return a.personBlog.localeCompare(b.personBlog);
}
case clsTeacherInfoEN.con_EntryDate:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.entryDate == null) return -1;
if (b.entryDate == null) return 1;
return a.entryDate.localeCompare(b.entryDate);
}
case clsTeacherInfoEN.con_Offed:
return (a: clsTeacherInfoEN) => {
if (a.offed == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_IsAvconUser:
return (a: clsTeacherInfoEN) => {
if (a.isAvconUser == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_IsGpUser:
return (a: clsTeacherInfoEN) => {
if (a.isGpUser == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_IsLocalUser:
return (a: clsTeacherInfoEN) => {
if (a.isLocalUser == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_FromUnit:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.fromUnit == null) return -1;
if (b.fromUnit == null) return 1;
return a.fromUnit.localeCompare(b.fromUnit);
}
case clsTeacherInfoEN.con_Memo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsTeacherInfoEN.con_IdXzCollege:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsTeacherInfoEN.con_IdXzMajor:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idXzMajor == null) return -1;
if (b.idXzMajor == null) return 1;
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsTeacherInfoEN.con_EntryDay:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.entryDay == null) return -1;
if (b.entryDay == null) return 1;
return a.entryDay.localeCompare(b.entryDay);
}
case clsTeacherInfoEN.con_IdPhoto:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idPhoto == null) return -1;
if (b.idPhoto == null) return 1;
return a.idPhoto.localeCompare(b.idPhoto);
}
case clsTeacherInfoEN.con_IdReligion:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idReligion == null) return -1;
if (b.idReligion == null) return 1;
return a.idReligion.localeCompare(b.idReligion);
}
case clsTeacherInfoEN.con_IsMessage:
return (a: clsTeacherInfoEN) => {
if (a.isMessage == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_Microblog:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.microblog == null) return -1;
if (b.microblog == null) return 1;
return a.microblog.localeCompare(b.microblog);
}
case clsTeacherInfoEN.con_ModifyUserId:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsTeacherInfoEN.con_OffedBak:
return (a: clsTeacherInfoEN) => {
if (a.offedBak == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_PhoneNumber:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.phoneNumber == null) return -1;
if (b.phoneNumber == null) return 1;
return a.phoneNumber.localeCompare(b.phoneNumber);
}
case clsTeacherInfoEN.con_QQ:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.qQ == null) return -1;
if (b.qQ == null) return 1;
return a.qQ.localeCompare(b.qQ);
}
case clsTeacherInfoEN.con_TeachIdCollege:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.teachIdCollege == null) return -1;
if (b.teachIdCollege == null) return 1;
return a.teachIdCollege.localeCompare(b.teachIdCollege);
}
case clsTeacherInfoEN.con_TeachIdMajor:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.teachIdMajor == null) return -1;
if (b.teachIdMajor == null) return 1;
return a.teachIdMajor.localeCompare(b.teachIdMajor);
}
case clsTeacherInfoEN.con_Tel:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.tel == null) return -1;
if (b.tel == null) return 1;
return a.tel.localeCompare(b.tel);
}
case clsTeacherInfoEN.con_Headphoto:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.headphoto == null) return -1;
if (b.headphoto == null) return 1;
return a.headphoto.localeCompare(b.headphoto);
}
case clsTeacherInfoEN.con_ModifyDate:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsTeacherInfoEN.con_RegisterPassword:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.registerPassword == null) return -1;
if (b.registerPassword == null) return 1;
return a.registerPassword.localeCompare(b.registerPassword);
}
case clsTeacherInfoEN.con_TeacherPhoto:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.teacherPhoto == null) return -1;
if (b.teacherPhoto == null) return 1;
return a.teacherPhoto.localeCompare(b.teacherPhoto);
}
case clsTeacherInfoEN.con_IdCardNo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (a.idCardNo == null) return -1;
if (b.idCardNo == null) return 1;
return a.idCardNo.localeCompare(b.idCardNo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeacherInfo]中不存在!(in ${ teacherInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsTeacherInfoEN.con_IdTeacher:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return b.idTeacher.localeCompare(a.idTeacher);
}
case clsTeacherInfoEN.con_TeacherId:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return b.teacherId.localeCompare(a.teacherId);
}
case clsTeacherInfoEN.con_TeacherName:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return b.teacherName.localeCompare(a.teacherName);
}
case clsTeacherInfoEN.con_IdSex:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
return b.idSex.localeCompare(a.idSex);
}
case clsTeacherInfoEN.con_IdSchoolPs:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idSchoolPs == null) return -1;
if (a.idSchoolPs == null) return 1;
return b.idSchoolPs.localeCompare(a.idSchoolPs);
}
case clsTeacherInfoEN.con_IdDisciplinePs:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idDisciplinePs == null) return -1;
if (a.idDisciplinePs == null) return 1;
return b.idDisciplinePs.localeCompare(a.idDisciplinePs);
}
case clsTeacherInfoEN.con_IdUniZone:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idUniZone == null) return -1;
if (a.idUniZone == null) return 1;
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsTeacherInfoEN.con_IdEthnic:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idEthnic == null) return -1;
if (a.idEthnic == null) return 1;
return b.idEthnic.localeCompare(a.idEthnic);
}
case clsTeacherInfoEN.con_IdPolitics:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idPolitics == null) return -1;
if (a.idPolitics == null) return 1;
return b.idPolitics.localeCompare(a.idPolitics);
}
case clsTeacherInfoEN.con_IdAdminGrade:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idAdminGrade == null) return -1;
if (a.idAdminGrade == null) return 1;
return b.idAdminGrade.localeCompare(a.idAdminGrade);
}
case clsTeacherInfoEN.con_IdProfGrade:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idProfGrade == null) return -1;
if (a.idProfGrade == null) return 1;
return b.idProfGrade.localeCompare(a.idProfGrade);
}
case clsTeacherInfoEN.con_IdQualif:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idQualif == null) return -1;
if (a.idQualif == null) return 1;
return b.idQualif.localeCompare(a.idQualif);
}
case clsTeacherInfoEN.con_IdDegree:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idDegree == null) return -1;
if (a.idDegree == null) return 1;
return b.idDegree.localeCompare(a.idDegree);
}
case clsTeacherInfoEN.con_IdStaffType:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idStaffType == null) return -1;
if (a.idStaffType == null) return 1;
return b.idStaffType.localeCompare(a.idStaffType);
}
case clsTeacherInfoEN.con_IdProvince:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idProvince == null) return -1;
if (a.idProvince == null) return 1;
return b.idProvince.localeCompare(a.idProvince);
}
case clsTeacherInfoEN.con_CitizenId:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.citizenId == null) return -1;
if (a.citizenId == null) return 1;
return b.citizenId.localeCompare(a.citizenId);
}
case clsTeacherInfoEN.con_CardNo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.cardNo == null) return -1;
if (a.cardNo == null) return 1;
return b.cardNo.localeCompare(a.cardNo);
}
case clsTeacherInfoEN.con_Birthday:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.birthday == null) return -1;
if (a.birthday == null) return 1;
return b.birthday.localeCompare(a.birthday);
}
case clsTeacherInfoEN.con_GraduationMajor:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.graduationMajor == null) return -1;
if (a.graduationMajor == null) return 1;
return b.graduationMajor.localeCompare(a.graduationMajor);
}
case clsTeacherInfoEN.con_TelNo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.telNo == null) return -1;
if (a.telNo == null) return 1;
return b.telNo.localeCompare(a.telNo);
}
case clsTeacherInfoEN.con_Email:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.email == null) return -1;
if (a.email == null) return 1;
return b.email.localeCompare(a.email);
}
case clsTeacherInfoEN.con_WebSite:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.webSite == null) return -1;
if (a.webSite == null) return 1;
return b.webSite.localeCompare(a.webSite);
}
case clsTeacherInfoEN.con_PersonBlog:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.personBlog == null) return -1;
if (a.personBlog == null) return 1;
return b.personBlog.localeCompare(a.personBlog);
}
case clsTeacherInfoEN.con_EntryDate:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.entryDate == null) return -1;
if (a.entryDate == null) return 1;
return b.entryDate.localeCompare(a.entryDate);
}
case clsTeacherInfoEN.con_Offed:
return (b: clsTeacherInfoEN) => {
if (b.offed == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_IsAvconUser:
return (b: clsTeacherInfoEN) => {
if (b.isAvconUser == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_IsGpUser:
return (b: clsTeacherInfoEN) => {
if (b.isGpUser == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_IsLocalUser:
return (b: clsTeacherInfoEN) => {
if (b.isLocalUser == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_FromUnit:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.fromUnit == null) return -1;
if (a.fromUnit == null) return 1;
return b.fromUnit.localeCompare(a.fromUnit);
}
case clsTeacherInfoEN.con_Memo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsTeacherInfoEN.con_IdXzCollege:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsTeacherInfoEN.con_IdXzMajor:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idXzMajor == null) return -1;
if (a.idXzMajor == null) return 1;
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsTeacherInfoEN.con_EntryDay:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.entryDay == null) return -1;
if (a.entryDay == null) return 1;
return b.entryDay.localeCompare(a.entryDay);
}
case clsTeacherInfoEN.con_IdPhoto:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idPhoto == null) return -1;
if (a.idPhoto == null) return 1;
return b.idPhoto.localeCompare(a.idPhoto);
}
case clsTeacherInfoEN.con_IdReligion:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idReligion == null) return -1;
if (a.idReligion == null) return 1;
return b.idReligion.localeCompare(a.idReligion);
}
case clsTeacherInfoEN.con_IsMessage:
return (b: clsTeacherInfoEN) => {
if (b.isMessage == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_Microblog:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.microblog == null) return -1;
if (a.microblog == null) return 1;
return b.microblog.localeCompare(a.microblog);
}
case clsTeacherInfoEN.con_ModifyUserId:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsTeacherInfoEN.con_OffedBak:
return (b: clsTeacherInfoEN) => {
if (b.offedBak == true) return 1;
else return -1
}
case clsTeacherInfoEN.con_PhoneNumber:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.phoneNumber == null) return -1;
if (a.phoneNumber == null) return 1;
return b.phoneNumber.localeCompare(a.phoneNumber);
}
case clsTeacherInfoEN.con_QQ:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.qQ == null) return -1;
if (a.qQ == null) return 1;
return b.qQ.localeCompare(a.qQ);
}
case clsTeacherInfoEN.con_TeachIdCollege:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.teachIdCollege == null) return -1;
if (a.teachIdCollege == null) return 1;
return b.teachIdCollege.localeCompare(a.teachIdCollege);
}
case clsTeacherInfoEN.con_TeachIdMajor:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.teachIdMajor == null) return -1;
if (a.teachIdMajor == null) return 1;
return b.teachIdMajor.localeCompare(a.teachIdMajor);
}
case clsTeacherInfoEN.con_Tel:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.tel == null) return -1;
if (a.tel == null) return 1;
return b.tel.localeCompare(a.tel);
}
case clsTeacherInfoEN.con_Headphoto:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.headphoto == null) return -1;
if (a.headphoto == null) return 1;
return b.headphoto.localeCompare(a.headphoto);
}
case clsTeacherInfoEN.con_ModifyDate:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsTeacherInfoEN.con_RegisterPassword:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.registerPassword == null) return -1;
if (a.registerPassword == null) return 1;
return b.registerPassword.localeCompare(a.registerPassword);
}
case clsTeacherInfoEN.con_TeacherPhoto:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.teacherPhoto == null) return -1;
if (a.teacherPhoto == null) return 1;
return b.teacherPhoto.localeCompare(a.teacherPhoto);
}
case clsTeacherInfoEN.con_IdCardNo:
return (a: clsTeacherInfoEN, b: clsTeacherInfoEN) => {
if (b.idCardNo == null) return -1;
if (a.idCardNo == null) return 1;
return b.idCardNo.localeCompare(a.idCardNo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeacherInfo]中不存在!(in ${ teacherInfo_ConstructorName}.${ strThisFuncName})`;
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
export  async function TeacherInfo_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsTeacherInfoEN.con_IdTeacher:
return (obj: clsTeacherInfoEN) => {
return obj.idTeacher === value;
}
case clsTeacherInfoEN.con_TeacherId:
return (obj: clsTeacherInfoEN) => {
return obj.teacherId === value;
}
case clsTeacherInfoEN.con_TeacherName:
return (obj: clsTeacherInfoEN) => {
return obj.teacherName === value;
}
case clsTeacherInfoEN.con_IdSex:
return (obj: clsTeacherInfoEN) => {
return obj.idSex === value;
}
case clsTeacherInfoEN.con_IdSchoolPs:
return (obj: clsTeacherInfoEN) => {
return obj.idSchoolPs === value;
}
case clsTeacherInfoEN.con_IdDisciplinePs:
return (obj: clsTeacherInfoEN) => {
return obj.idDisciplinePs === value;
}
case clsTeacherInfoEN.con_IdUniZone:
return (obj: clsTeacherInfoEN) => {
return obj.idUniZone === value;
}
case clsTeacherInfoEN.con_IdEthnic:
return (obj: clsTeacherInfoEN) => {
return obj.idEthnic === value;
}
case clsTeacherInfoEN.con_IdPolitics:
return (obj: clsTeacherInfoEN) => {
return obj.idPolitics === value;
}
case clsTeacherInfoEN.con_IdAdminGrade:
return (obj: clsTeacherInfoEN) => {
return obj.idAdminGrade === value;
}
case clsTeacherInfoEN.con_IdProfGrade:
return (obj: clsTeacherInfoEN) => {
return obj.idProfGrade === value;
}
case clsTeacherInfoEN.con_IdQualif:
return (obj: clsTeacherInfoEN) => {
return obj.idQualif === value;
}
case clsTeacherInfoEN.con_IdDegree:
return (obj: clsTeacherInfoEN) => {
return obj.idDegree === value;
}
case clsTeacherInfoEN.con_IdStaffType:
return (obj: clsTeacherInfoEN) => {
return obj.idStaffType === value;
}
case clsTeacherInfoEN.con_IdProvince:
return (obj: clsTeacherInfoEN) => {
return obj.idProvince === value;
}
case clsTeacherInfoEN.con_CitizenId:
return (obj: clsTeacherInfoEN) => {
return obj.citizenId === value;
}
case clsTeacherInfoEN.con_CardNo:
return (obj: clsTeacherInfoEN) => {
return obj.cardNo === value;
}
case clsTeacherInfoEN.con_Birthday:
return (obj: clsTeacherInfoEN) => {
return obj.birthday === value;
}
case clsTeacherInfoEN.con_GraduationMajor:
return (obj: clsTeacherInfoEN) => {
return obj.graduationMajor === value;
}
case clsTeacherInfoEN.con_TelNo:
return (obj: clsTeacherInfoEN) => {
return obj.telNo === value;
}
case clsTeacherInfoEN.con_Email:
return (obj: clsTeacherInfoEN) => {
return obj.email === value;
}
case clsTeacherInfoEN.con_WebSite:
return (obj: clsTeacherInfoEN) => {
return obj.webSite === value;
}
case clsTeacherInfoEN.con_PersonBlog:
return (obj: clsTeacherInfoEN) => {
return obj.personBlog === value;
}
case clsTeacherInfoEN.con_EntryDate:
return (obj: clsTeacherInfoEN) => {
return obj.entryDate === value;
}
case clsTeacherInfoEN.con_Offed:
return (obj: clsTeacherInfoEN) => {
return obj.offed === value;
}
case clsTeacherInfoEN.con_IsAvconUser:
return (obj: clsTeacherInfoEN) => {
return obj.isAvconUser === value;
}
case clsTeacherInfoEN.con_IsGpUser:
return (obj: clsTeacherInfoEN) => {
return obj.isGpUser === value;
}
case clsTeacherInfoEN.con_IsLocalUser:
return (obj: clsTeacherInfoEN) => {
return obj.isLocalUser === value;
}
case clsTeacherInfoEN.con_FromUnit:
return (obj: clsTeacherInfoEN) => {
return obj.fromUnit === value;
}
case clsTeacherInfoEN.con_Memo:
return (obj: clsTeacherInfoEN) => {
return obj.memo === value;
}
case clsTeacherInfoEN.con_IdXzCollege:
return (obj: clsTeacherInfoEN) => {
return obj.idXzCollege === value;
}
case clsTeacherInfoEN.con_IdXzMajor:
return (obj: clsTeacherInfoEN) => {
return obj.idXzMajor === value;
}
case clsTeacherInfoEN.con_EntryDay:
return (obj: clsTeacherInfoEN) => {
return obj.entryDay === value;
}
case clsTeacherInfoEN.con_IdPhoto:
return (obj: clsTeacherInfoEN) => {
return obj.idPhoto === value;
}
case clsTeacherInfoEN.con_IdReligion:
return (obj: clsTeacherInfoEN) => {
return obj.idReligion === value;
}
case clsTeacherInfoEN.con_IsMessage:
return (obj: clsTeacherInfoEN) => {
return obj.isMessage === value;
}
case clsTeacherInfoEN.con_Microblog:
return (obj: clsTeacherInfoEN) => {
return obj.microblog === value;
}
case clsTeacherInfoEN.con_ModifyUserId:
return (obj: clsTeacherInfoEN) => {
return obj.modifyUserId === value;
}
case clsTeacherInfoEN.con_OffedBak:
return (obj: clsTeacherInfoEN) => {
return obj.offedBak === value;
}
case clsTeacherInfoEN.con_PhoneNumber:
return (obj: clsTeacherInfoEN) => {
return obj.phoneNumber === value;
}
case clsTeacherInfoEN.con_QQ:
return (obj: clsTeacherInfoEN) => {
return obj.qQ === value;
}
case clsTeacherInfoEN.con_TeachIdCollege:
return (obj: clsTeacherInfoEN) => {
return obj.teachIdCollege === value;
}
case clsTeacherInfoEN.con_TeachIdMajor:
return (obj: clsTeacherInfoEN) => {
return obj.teachIdMajor === value;
}
case clsTeacherInfoEN.con_Tel:
return (obj: clsTeacherInfoEN) => {
return obj.tel === value;
}
case clsTeacherInfoEN.con_Headphoto:
return (obj: clsTeacherInfoEN) => {
return obj.headphoto === value;
}
case clsTeacherInfoEN.con_ModifyDate:
return (obj: clsTeacherInfoEN) => {
return obj.modifyDate === value;
}
case clsTeacherInfoEN.con_RegisterPassword:
return (obj: clsTeacherInfoEN) => {
return obj.registerPassword === value;
}
case clsTeacherInfoEN.con_TeacherPhoto:
return (obj: clsTeacherInfoEN) => {
return obj.teacherPhoto === value;
}
case clsTeacherInfoEN.con_IdCardNo:
return (obj: clsTeacherInfoEN) => {
return obj.idCardNo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[TeacherInfo]中不存在!(in ${ teacherInfo_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeacherInfo_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_GetFirstObjAsync(strWhereCond: string): Promise<clsTeacherInfoEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const objTeacherInfo = TeacherInfo_GetObjFromJsonObj(returnObj);
return objTeacherInfo;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_GetObjLstAsync(strWhereCond: string): Promise<Array<clsTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * @param arrIdTeacher:关键字列表
 * @returns 对象列表
 **/
export  async function TeacherInfo_GetObjLstByIdTeacherLstAsync(arrIdTeacher: Array<string>): Promise<Array<clsTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstByIdTeacherLstAsync";
const strAction = "GetObjLstByIdTeacherLst";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdTeacherLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function TeacherInfo_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsTeacherInfoEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsTeacherInfoEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsTeacherInfoEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", teacherInfo_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = TeacherInfo_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strIdTeacher:关键字
 * @returns 获取删除的结果
 **/
export  async function TeacherInfo_DelRecordAsync(strIdTeacher: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdTeacher);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrIdTeacher:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function TeacherInfo_DelTeacherInfosAsync(arrIdTeacher: Array<string>): Promise<number> 
{
const strThisFuncName = "DelTeacherInfosAsync";
const strAction = "DelTeacherInfos";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function TeacherInfo_DelTeacherInfosByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelTeacherInfosByCondAsync";
const strAction = "DelTeacherInfosByCond";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objTeacherInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeacherInfo_AddNewRecordAsync(objTeacherInfoEN: clsTeacherInfoEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objTeacherInfoEN);
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeacherInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objTeacherInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function TeacherInfo_AddNewRecordWithMaxIdAsync(objTeacherInfoEN: clsTeacherInfoEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeacherInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTeacherInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function TeacherInfo_AddNewRecordWithReturnKeyAsync(objTeacherInfoEN: clsTeacherInfoEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeacherInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objTeacherInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function TeacherInfo_UpdateRecordAsync(objTeacherInfoEN: clsTeacherInfoEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objTeacherInfoEN.sfUpdFldSetStr === undefined || objTeacherInfoEN.sfUpdFldSetStr === null || objTeacherInfoEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeacherInfoEN.idTeacher);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeacherInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objTeacherInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function TeacherInfo_UpdateWithConditionAsync(objTeacherInfoEN: clsTeacherInfoEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objTeacherInfoEN.sfUpdFldSetStr === undefined || objTeacherInfoEN.sfUpdFldSetStr === null || objTeacherInfoEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objTeacherInfoEN.idTeacher);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);
objTeacherInfoEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTeacherInfoEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * @param strIdTeacher:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function TeacherInfo_IsExistAsync(strIdTeacher: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
export  async function TeacherInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function TeacherInfo_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function TeacherInfo_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(teacherInfo_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, teacherInfo_ConstructorName, strThisFuncName);
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function TeacherInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function TeacherInfo_BindDdl_id_TeacherInDiv(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_TeacherInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_TeacherInDivCache");
const strCondition = `1=1`;
const arrObjLstSel = await TeacherInfo_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsTeacherInfoEN.con_IdTeacher, clsTeacherInfoEN.con_TeacherName, "教师");
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeacherInfo_CheckPropertyNew(pobjTeacherInfoEN: clsTeacherInfoEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherId) === true )
{
 throw new Error("(errid:Watl000411)字段[教师工号]不能为空(In 教师)!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherName) === true )
{
 throw new Error("(errid:Watl000411)字段[教师姓名]不能为空(In 教师)!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSex) === true )
{
 throw new Error("(errid:Watl000411)字段[性别流水号]不能为空(In 教师)!(clsTeacherInfoBL:CheckPropertyNew0)");
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeacherInfoEN.idTeacher) == false && GetStrLen(pobjTeacherInfoEN.idTeacher) > 8)
{
 throw new Error("(errid:Watl000413)字段[教师流水号(idTeacher)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idTeacher)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherId) == false && GetStrLen(pobjTeacherInfoEN.teacherId) > 12)
{
 throw new Error("(errid:Watl000413)字段[教师工号(teacherId)]的长度不能超过12(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teacherId)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherName) == false && GetStrLen(pobjTeacherInfoEN.teacherName) > 50)
{
 throw new Error("(errid:Watl000413)字段[教师姓名(teacherName)]的长度不能超过50(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teacherName)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSex) == false && GetStrLen(pobjTeacherInfoEN.idSex) > 4)
{
 throw new Error("(errid:Watl000413)字段[性别流水号(idSex)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idSex)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSchoolPs) == false && GetStrLen(pobjTeacherInfoEN.idSchoolPs) > 4)
{
 throw new Error("(errid:Watl000413)字段[学校流水号(idSchoolPs)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idSchoolPs)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDisciplinePs) == false && GetStrLen(pobjTeacherInfoEN.idDisciplinePs) > 4)
{
 throw new Error("(errid:Watl000413)字段[学科流水号(idDisciplinePs)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idDisciplinePs)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idUniZone) == false && GetStrLen(pobjTeacherInfoEN.idUniZone) > 4)
{
 throw new Error("(errid:Watl000413)字段[校区流水号(idUniZone)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idUniZone)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idEthnic) == false && GetStrLen(pobjTeacherInfoEN.idEthnic) > 4)
{
 throw new Error("(errid:Watl000413)字段[民族流水号(idEthnic)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idEthnic)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPolitics) == false && GetStrLen(pobjTeacherInfoEN.idPolitics) > 4)
{
 throw new Error("(errid:Watl000413)字段[政治面貌流水号(idPolitics)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idPolitics)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idAdminGrade) == false && GetStrLen(pobjTeacherInfoEN.idAdminGrade) > 4)
{
 throw new Error("(errid:Watl000413)字段[行政职务流水号(idAdminGrade)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idAdminGrade)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProfGrade) == false && GetStrLen(pobjTeacherInfoEN.idProfGrade) > 4)
{
 throw new Error("(errid:Watl000413)字段[专业职称流水号(idProfGrade)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idProfGrade)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idQualif) == false && GetStrLen(pobjTeacherInfoEN.idQualif) > 4)
{
 throw new Error("(errid:Watl000413)字段[学历流水号(idQualif)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idQualif)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDegree) == false && GetStrLen(pobjTeacherInfoEN.idDegree) > 4)
{
 throw new Error("(errid:Watl000413)字段[学位流水号(idDegree)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idDegree)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idStaffType) == false && GetStrLen(pobjTeacherInfoEN.idStaffType) > 4)
{
 throw new Error("(errid:Watl000413)字段[职工类型流水号(idStaffType)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idStaffType)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProvince) == false && GetStrLen(pobjTeacherInfoEN.idProvince) > 4)
{
 throw new Error("(errid:Watl000413)字段[省份流水号(idProvince)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idProvince)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.citizenId) == false && GetStrLen(pobjTeacherInfoEN.citizenId) > 25)
{
 throw new Error("(errid:Watl000413)字段[身份证号(citizenId)]的长度不能超过25(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.citizenId)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.cardNo) == false && GetStrLen(pobjTeacherInfoEN.cardNo) > 18)
{
 throw new Error("(errid:Watl000413)字段[卡号(cardNo)]的长度不能超过18(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.cardNo)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.birthday) == false && GetStrLen(pobjTeacherInfoEN.birthday) > 8)
{
 throw new Error("(errid:Watl000413)字段[出生日期(birthday)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.birthday)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.graduationMajor) == false && GetStrLen(pobjTeacherInfoEN.graduationMajor) > 40)
{
 throw new Error("(errid:Watl000413)字段[毕业专业(graduationMajor)]的长度不能超过40(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.graduationMajor)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.telNo) == false && GetStrLen(pobjTeacherInfoEN.telNo) > 50)
{
 throw new Error("(errid:Watl000413)字段[电话(telNo)]的长度不能超过50(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.telNo)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.email) == false && GetStrLen(pobjTeacherInfoEN.email) > 100)
{
 throw new Error("(errid:Watl000413)字段[电子邮箱(email)]的长度不能超过100(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.email)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.webSite) == false && GetStrLen(pobjTeacherInfoEN.webSite) > 60)
{
 throw new Error("(errid:Watl000413)字段[个人主页(webSite)]的长度不能超过60(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.webSite)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.personBlog) == false && GetStrLen(pobjTeacherInfoEN.personBlog) > 60)
{
 throw new Error("(errid:Watl000413)字段[个人博客(personBlog)]的长度不能超过60(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.personBlog)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDate) == false && GetStrLen(pobjTeacherInfoEN.entryDate) > 8)
{
 throw new Error("(errid:Watl000413)字段[进校日期(entryDate)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.entryDate)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.fromUnit) == false && GetStrLen(pobjTeacherInfoEN.fromUnit) > 100)
{
 throw new Error("(errid:Watl000413)字段[来自单位(fromUnit)]的长度不能超过100(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.fromUnit)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.memo) == false && GetStrLen(pobjTeacherInfoEN.memo) > 1000)
{
 throw new Error("(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.memo)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzCollege) == false && GetStrLen(pobjTeacherInfoEN.idXzCollege) > 4)
{
 throw new Error("(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idXzCollege)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzMajor) == false && GetStrLen(pobjTeacherInfoEN.idXzMajor) > 8)
{
 throw new Error("(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idXzMajor)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDay) == false && GetStrLen(pobjTeacherInfoEN.entryDay) > 8)
{
 throw new Error("(errid:Watl000413)字段[EntryDay(entryDay)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.entryDay)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPhoto) == false && GetStrLen(pobjTeacherInfoEN.idPhoto) > 8)
{
 throw new Error("(errid:Watl000413)字段[id_Photo(idPhoto)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idPhoto)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idReligion) == false && GetStrLen(pobjTeacherInfoEN.idReligion) > 4)
{
 throw new Error("(errid:Watl000413)字段[id_Religion(idReligion)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idReligion)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.microblog) == false && GetStrLen(pobjTeacherInfoEN.microblog) > 200)
{
 throw new Error("(errid:Watl000413)字段[Microblog(microblog)]的长度不能超过200(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.microblog)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyUserId) == false && GetStrLen(pobjTeacherInfoEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.modifyUserId)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.phoneNumber) == false && GetStrLen(pobjTeacherInfoEN.phoneNumber) > 15)
{
 throw new Error("(errid:Watl000413)字段[电话(phoneNumber)]的长度不能超过15(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.phoneNumber)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.qQ) == false && GetStrLen(pobjTeacherInfoEN.qQ) > 100)
{
 throw new Error("(errid:Watl000413)字段[QQ(qQ)]的长度不能超过100(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.qQ)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdCollege) == false && GetStrLen(pobjTeacherInfoEN.teachIdCollege) > 6)
{
 throw new Error("(errid:Watl000413)字段[Teach_id_College(teachIdCollege)]的长度不能超过6(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teachIdCollege)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdMajor) == false && GetStrLen(pobjTeacherInfoEN.teachIdMajor) > 8)
{
 throw new Error("(errid:Watl000413)字段[Teach_id_Major(teachIdMajor)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teachIdMajor)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.tel) == false && GetStrLen(pobjTeacherInfoEN.tel) > 50)
{
 throw new Error("(errid:Watl000413)字段[Tel(tel)]的长度不能超过50(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.tel)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.headphoto) == false && GetStrLen(pobjTeacherInfoEN.headphoto) > 500)
{
 throw new Error("(errid:Watl000413)字段[Headphoto(headphoto)]的长度不能超过500(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.headphoto)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyDate) == false && GetStrLen(pobjTeacherInfoEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.modifyDate)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.registerPassword) == false && GetStrLen(pobjTeacherInfoEN.registerPassword) > 30)
{
 throw new Error("(errid:Watl000413)字段[RegisterPassword(registerPassword)]的长度不能超过30(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.registerPassword)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherPhoto) == false && GetStrLen(pobjTeacherInfoEN.teacherPhoto) > 500)
{
 throw new Error("(errid:Watl000413)字段[TeacherPhoto(teacherPhoto)]的长度不能超过500(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teacherPhoto)(clsTeacherInfoBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idCardNo) == false && GetStrLen(pobjTeacherInfoEN.idCardNo) > 20)
{
 throw new Error("(errid:Watl000413)字段[身份证号(idCardNo)]的长度不能超过20(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idCardNo)(clsTeacherInfoBL:CheckPropertyNew)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeacherInfoEN.idTeacher) == false && undefined !== pobjTeacherInfoEN.idTeacher && tzDataType.isString(pobjTeacherInfoEN.idTeacher) === false)
{
 throw new Error("(errid:Watl000414)字段[教师流水号(idTeacher)]的值:[$(pobjTeacherInfoEN.idTeacher)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherId) == false && undefined !== pobjTeacherInfoEN.teacherId && tzDataType.isString(pobjTeacherInfoEN.teacherId) === false)
{
 throw new Error("(errid:Watl000414)字段[教师工号(teacherId)]的值:[$(pobjTeacherInfoEN.teacherId)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherName) == false && undefined !== pobjTeacherInfoEN.teacherName && tzDataType.isString(pobjTeacherInfoEN.teacherName) === false)
{
 throw new Error("(errid:Watl000414)字段[教师姓名(teacherName)]的值:[$(pobjTeacherInfoEN.teacherName)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSex) == false && undefined !== pobjTeacherInfoEN.idSex && tzDataType.isString(pobjTeacherInfoEN.idSex) === false)
{
 throw new Error("(errid:Watl000414)字段[性别流水号(idSex)]的值:[$(pobjTeacherInfoEN.idSex)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSchoolPs) == false && undefined !== pobjTeacherInfoEN.idSchoolPs && tzDataType.isString(pobjTeacherInfoEN.idSchoolPs) === false)
{
 throw new Error("(errid:Watl000414)字段[学校流水号(idSchoolPs)]的值:[$(pobjTeacherInfoEN.idSchoolPs)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDisciplinePs) == false && undefined !== pobjTeacherInfoEN.idDisciplinePs && tzDataType.isString(pobjTeacherInfoEN.idDisciplinePs) === false)
{
 throw new Error("(errid:Watl000414)字段[学科流水号(idDisciplinePs)]的值:[$(pobjTeacherInfoEN.idDisciplinePs)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idUniZone) == false && undefined !== pobjTeacherInfoEN.idUniZone && tzDataType.isString(pobjTeacherInfoEN.idUniZone) === false)
{
 throw new Error("(errid:Watl000414)字段[校区流水号(idUniZone)]的值:[$(pobjTeacherInfoEN.idUniZone)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idEthnic) == false && undefined !== pobjTeacherInfoEN.idEthnic && tzDataType.isString(pobjTeacherInfoEN.idEthnic) === false)
{
 throw new Error("(errid:Watl000414)字段[民族流水号(idEthnic)]的值:[$(pobjTeacherInfoEN.idEthnic)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPolitics) == false && undefined !== pobjTeacherInfoEN.idPolitics && tzDataType.isString(pobjTeacherInfoEN.idPolitics) === false)
{
 throw new Error("(errid:Watl000414)字段[政治面貌流水号(idPolitics)]的值:[$(pobjTeacherInfoEN.idPolitics)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idAdminGrade) == false && undefined !== pobjTeacherInfoEN.idAdminGrade && tzDataType.isString(pobjTeacherInfoEN.idAdminGrade) === false)
{
 throw new Error("(errid:Watl000414)字段[行政职务流水号(idAdminGrade)]的值:[$(pobjTeacherInfoEN.idAdminGrade)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProfGrade) == false && undefined !== pobjTeacherInfoEN.idProfGrade && tzDataType.isString(pobjTeacherInfoEN.idProfGrade) === false)
{
 throw new Error("(errid:Watl000414)字段[专业职称流水号(idProfGrade)]的值:[$(pobjTeacherInfoEN.idProfGrade)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idQualif) == false && undefined !== pobjTeacherInfoEN.idQualif && tzDataType.isString(pobjTeacherInfoEN.idQualif) === false)
{
 throw new Error("(errid:Watl000414)字段[学历流水号(idQualif)]的值:[$(pobjTeacherInfoEN.idQualif)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDegree) == false && undefined !== pobjTeacherInfoEN.idDegree && tzDataType.isString(pobjTeacherInfoEN.idDegree) === false)
{
 throw new Error("(errid:Watl000414)字段[学位流水号(idDegree)]的值:[$(pobjTeacherInfoEN.idDegree)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idStaffType) == false && undefined !== pobjTeacherInfoEN.idStaffType && tzDataType.isString(pobjTeacherInfoEN.idStaffType) === false)
{
 throw new Error("(errid:Watl000414)字段[职工类型流水号(idStaffType)]的值:[$(pobjTeacherInfoEN.idStaffType)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProvince) == false && undefined !== pobjTeacherInfoEN.idProvince && tzDataType.isString(pobjTeacherInfoEN.idProvince) === false)
{
 throw new Error("(errid:Watl000414)字段[省份流水号(idProvince)]的值:[$(pobjTeacherInfoEN.idProvince)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.citizenId) == false && undefined !== pobjTeacherInfoEN.citizenId && tzDataType.isString(pobjTeacherInfoEN.citizenId) === false)
{
 throw new Error("(errid:Watl000414)字段[身份证号(citizenId)]的值:[$(pobjTeacherInfoEN.citizenId)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.cardNo) == false && undefined !== pobjTeacherInfoEN.cardNo && tzDataType.isString(pobjTeacherInfoEN.cardNo) === false)
{
 throw new Error("(errid:Watl000414)字段[卡号(cardNo)]的值:[$(pobjTeacherInfoEN.cardNo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.birthday) == false && undefined !== pobjTeacherInfoEN.birthday && tzDataType.isString(pobjTeacherInfoEN.birthday) === false)
{
 throw new Error("(errid:Watl000414)字段[出生日期(birthday)]的值:[$(pobjTeacherInfoEN.birthday)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.graduationMajor) == false && undefined !== pobjTeacherInfoEN.graduationMajor && tzDataType.isString(pobjTeacherInfoEN.graduationMajor) === false)
{
 throw new Error("(errid:Watl000414)字段[毕业专业(graduationMajor)]的值:[$(pobjTeacherInfoEN.graduationMajor)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.telNo) == false && undefined !== pobjTeacherInfoEN.telNo && tzDataType.isString(pobjTeacherInfoEN.telNo) === false)
{
 throw new Error("(errid:Watl000414)字段[电话(telNo)]的值:[$(pobjTeacherInfoEN.telNo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.email) == false && undefined !== pobjTeacherInfoEN.email && tzDataType.isString(pobjTeacherInfoEN.email) === false)
{
 throw new Error("(errid:Watl000414)字段[电子邮箱(email)]的值:[$(pobjTeacherInfoEN.email)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.webSite) == false && undefined !== pobjTeacherInfoEN.webSite && tzDataType.isString(pobjTeacherInfoEN.webSite) === false)
{
 throw new Error("(errid:Watl000414)字段[个人主页(webSite)]的值:[$(pobjTeacherInfoEN.webSite)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.personBlog) == false && undefined !== pobjTeacherInfoEN.personBlog && tzDataType.isString(pobjTeacherInfoEN.personBlog) === false)
{
 throw new Error("(errid:Watl000414)字段[个人博客(personBlog)]的值:[$(pobjTeacherInfoEN.personBlog)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDate) == false && undefined !== pobjTeacherInfoEN.entryDate && tzDataType.isString(pobjTeacherInfoEN.entryDate) === false)
{
 throw new Error("(errid:Watl000414)字段[进校日期(entryDate)]的值:[$(pobjTeacherInfoEN.entryDate)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (null != pobjTeacherInfoEN.offed && undefined !== pobjTeacherInfoEN.offed && tzDataType.isBoolean(pobjTeacherInfoEN.offed) === false)
{
 throw new Error("(errid:Watl000414)字段[是否离校(offed)]的值:[$(pobjTeacherInfoEN.offed)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (null != pobjTeacherInfoEN.isAvconUser && undefined !== pobjTeacherInfoEN.isAvconUser && tzDataType.isBoolean(pobjTeacherInfoEN.isAvconUser) === false)
{
 throw new Error("(errid:Watl000414)字段[IsAvconUser(isAvconUser)]的值:[$(pobjTeacherInfoEN.isAvconUser)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (null != pobjTeacherInfoEN.isGpUser && undefined !== pobjTeacherInfoEN.isGpUser && tzDataType.isBoolean(pobjTeacherInfoEN.isGpUser) === false)
{
 throw new Error("(errid:Watl000414)字段[是否Gp用户(isGpUser)]的值:[$(pobjTeacherInfoEN.isGpUser)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (null != pobjTeacherInfoEN.isLocalUser && undefined !== pobjTeacherInfoEN.isLocalUser && tzDataType.isBoolean(pobjTeacherInfoEN.isLocalUser) === false)
{
 throw new Error("(errid:Watl000414)字段[是否本地用户(isLocalUser)]的值:[$(pobjTeacherInfoEN.isLocalUser)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.fromUnit) == false && undefined !== pobjTeacherInfoEN.fromUnit && tzDataType.isString(pobjTeacherInfoEN.fromUnit) === false)
{
 throw new Error("(errid:Watl000414)字段[来自单位(fromUnit)]的值:[$(pobjTeacherInfoEN.fromUnit)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.memo) == false && undefined !== pobjTeacherInfoEN.memo && tzDataType.isString(pobjTeacherInfoEN.memo) === false)
{
 throw new Error("(errid:Watl000414)字段[备注(memo)]的值:[$(pobjTeacherInfoEN.memo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzCollege) == false && undefined !== pobjTeacherInfoEN.idXzCollege && tzDataType.isString(pobjTeacherInfoEN.idXzCollege) === false)
{
 throw new Error("(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[$(pobjTeacherInfoEN.idXzCollege)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzMajor) == false && undefined !== pobjTeacherInfoEN.idXzMajor && tzDataType.isString(pobjTeacherInfoEN.idXzMajor) === false)
{
 throw new Error("(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjTeacherInfoEN.idXzMajor)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDay) == false && undefined !== pobjTeacherInfoEN.entryDay && tzDataType.isString(pobjTeacherInfoEN.entryDay) === false)
{
 throw new Error("(errid:Watl000414)字段[EntryDay(entryDay)]的值:[$(pobjTeacherInfoEN.entryDay)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPhoto) == false && undefined !== pobjTeacherInfoEN.idPhoto && tzDataType.isString(pobjTeacherInfoEN.idPhoto) === false)
{
 throw new Error("(errid:Watl000414)字段[id_Photo(idPhoto)]的值:[$(pobjTeacherInfoEN.idPhoto)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idReligion) == false && undefined !== pobjTeacherInfoEN.idReligion && tzDataType.isString(pobjTeacherInfoEN.idReligion) === false)
{
 throw new Error("(errid:Watl000414)字段[id_Religion(idReligion)]的值:[$(pobjTeacherInfoEN.idReligion)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (null != pobjTeacherInfoEN.isMessage && undefined !== pobjTeacherInfoEN.isMessage && tzDataType.isBoolean(pobjTeacherInfoEN.isMessage) === false)
{
 throw new Error("(errid:Watl000414)字段[IsMessage(isMessage)]的值:[$(pobjTeacherInfoEN.isMessage)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.microblog) == false && undefined !== pobjTeacherInfoEN.microblog && tzDataType.isString(pobjTeacherInfoEN.microblog) === false)
{
 throw new Error("(errid:Watl000414)字段[Microblog(microblog)]的值:[$(pobjTeacherInfoEN.microblog)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyUserId) == false && undefined !== pobjTeacherInfoEN.modifyUserId && tzDataType.isString(pobjTeacherInfoEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjTeacherInfoEN.modifyUserId)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (null != pobjTeacherInfoEN.offedBak && undefined !== pobjTeacherInfoEN.offedBak && tzDataType.isBoolean(pobjTeacherInfoEN.offedBak) === false)
{
 throw new Error("(errid:Watl000414)字段[OffedBak(offedBak)]的值:[$(pobjTeacherInfoEN.offedBak)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.phoneNumber) == false && undefined !== pobjTeacherInfoEN.phoneNumber && tzDataType.isString(pobjTeacherInfoEN.phoneNumber) === false)
{
 throw new Error("(errid:Watl000414)字段[电话(phoneNumber)]的值:[$(pobjTeacherInfoEN.phoneNumber)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.qQ) == false && undefined !== pobjTeacherInfoEN.qQ && tzDataType.isString(pobjTeacherInfoEN.qQ) === false)
{
 throw new Error("(errid:Watl000414)字段[QQ(qQ)]的值:[$(pobjTeacherInfoEN.qQ)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdCollege) == false && undefined !== pobjTeacherInfoEN.teachIdCollege && tzDataType.isString(pobjTeacherInfoEN.teachIdCollege) === false)
{
 throw new Error("(errid:Watl000414)字段[Teach_id_College(teachIdCollege)]的值:[$(pobjTeacherInfoEN.teachIdCollege)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdMajor) == false && undefined !== pobjTeacherInfoEN.teachIdMajor && tzDataType.isString(pobjTeacherInfoEN.teachIdMajor) === false)
{
 throw new Error("(errid:Watl000414)字段[Teach_id_Major(teachIdMajor)]的值:[$(pobjTeacherInfoEN.teachIdMajor)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.tel) == false && undefined !== pobjTeacherInfoEN.tel && tzDataType.isString(pobjTeacherInfoEN.tel) === false)
{
 throw new Error("(errid:Watl000414)字段[Tel(tel)]的值:[$(pobjTeacherInfoEN.tel)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.headphoto) == false && undefined !== pobjTeacherInfoEN.headphoto && tzDataType.isString(pobjTeacherInfoEN.headphoto) === false)
{
 throw new Error("(errid:Watl000414)字段[Headphoto(headphoto)]的值:[$(pobjTeacherInfoEN.headphoto)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyDate) == false && undefined !== pobjTeacherInfoEN.modifyDate && tzDataType.isString(pobjTeacherInfoEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjTeacherInfoEN.modifyDate)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.registerPassword) == false && undefined !== pobjTeacherInfoEN.registerPassword && tzDataType.isString(pobjTeacherInfoEN.registerPassword) === false)
{
 throw new Error("(errid:Watl000414)字段[RegisterPassword(registerPassword)]的值:[$(pobjTeacherInfoEN.registerPassword)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherPhoto) == false && undefined !== pobjTeacherInfoEN.teacherPhoto && tzDataType.isString(pobjTeacherInfoEN.teacherPhoto) === false)
{
 throw new Error("(errid:Watl000414)字段[TeacherPhoto(teacherPhoto)]的值:[$(pobjTeacherInfoEN.teacherPhoto)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idCardNo) == false && undefined !== pobjTeacherInfoEN.idCardNo && tzDataType.isString(pobjTeacherInfoEN.idCardNo) === false)
{
 throw new Error("(errid:Watl000414)字段[身份证号(idCardNo)]的值:[$(pobjTeacherInfoEN.idCardNo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckPropertyNew0)");
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjTeacherInfoEN.idStaffType) == false && pobjTeacherInfoEN.idStaffType != '[nuull]' && GetStrLen(pobjTeacherInfoEN.idStaffType) !=  4)
{
 throw ("(errid:Watl000415)字段[职工类型流水号]作为外键字段,长度应该为4(In 教师)!(clsTeacherInfoBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function TeacherInfo_CheckProperty4Update(pobjTeacherInfoEN: clsTeacherInfoEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjTeacherInfoEN.idTeacher) == false && GetStrLen(pobjTeacherInfoEN.idTeacher) > 8)
{
 throw new Error("(errid:Watl000416)字段[教师流水号(idTeacher)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idTeacher)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherId) == false && GetStrLen(pobjTeacherInfoEN.teacherId) > 12)
{
 throw new Error("(errid:Watl000416)字段[教师工号(teacherId)]的长度不能超过12(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teacherId)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherName) == false && GetStrLen(pobjTeacherInfoEN.teacherName) > 50)
{
 throw new Error("(errid:Watl000416)字段[教师姓名(teacherName)]的长度不能超过50(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teacherName)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSex) == false && GetStrLen(pobjTeacherInfoEN.idSex) > 4)
{
 throw new Error("(errid:Watl000416)字段[性别流水号(idSex)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idSex)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSchoolPs) == false && GetStrLen(pobjTeacherInfoEN.idSchoolPs) > 4)
{
 throw new Error("(errid:Watl000416)字段[学校流水号(idSchoolPs)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idSchoolPs)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDisciplinePs) == false && GetStrLen(pobjTeacherInfoEN.idDisciplinePs) > 4)
{
 throw new Error("(errid:Watl000416)字段[学科流水号(idDisciplinePs)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idDisciplinePs)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idUniZone) == false && GetStrLen(pobjTeacherInfoEN.idUniZone) > 4)
{
 throw new Error("(errid:Watl000416)字段[校区流水号(idUniZone)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idUniZone)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idEthnic) == false && GetStrLen(pobjTeacherInfoEN.idEthnic) > 4)
{
 throw new Error("(errid:Watl000416)字段[民族流水号(idEthnic)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idEthnic)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPolitics) == false && GetStrLen(pobjTeacherInfoEN.idPolitics) > 4)
{
 throw new Error("(errid:Watl000416)字段[政治面貌流水号(idPolitics)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idPolitics)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idAdminGrade) == false && GetStrLen(pobjTeacherInfoEN.idAdminGrade) > 4)
{
 throw new Error("(errid:Watl000416)字段[行政职务流水号(idAdminGrade)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idAdminGrade)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProfGrade) == false && GetStrLen(pobjTeacherInfoEN.idProfGrade) > 4)
{
 throw new Error("(errid:Watl000416)字段[专业职称流水号(idProfGrade)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idProfGrade)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idQualif) == false && GetStrLen(pobjTeacherInfoEN.idQualif) > 4)
{
 throw new Error("(errid:Watl000416)字段[学历流水号(idQualif)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idQualif)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDegree) == false && GetStrLen(pobjTeacherInfoEN.idDegree) > 4)
{
 throw new Error("(errid:Watl000416)字段[学位流水号(idDegree)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idDegree)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idStaffType) == false && GetStrLen(pobjTeacherInfoEN.idStaffType) > 4)
{
 throw new Error("(errid:Watl000416)字段[职工类型流水号(idStaffType)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idStaffType)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProvince) == false && GetStrLen(pobjTeacherInfoEN.idProvince) > 4)
{
 throw new Error("(errid:Watl000416)字段[省份流水号(idProvince)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idProvince)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.citizenId) == false && GetStrLen(pobjTeacherInfoEN.citizenId) > 25)
{
 throw new Error("(errid:Watl000416)字段[身份证号(citizenId)]的长度不能超过25(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.citizenId)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.cardNo) == false && GetStrLen(pobjTeacherInfoEN.cardNo) > 18)
{
 throw new Error("(errid:Watl000416)字段[卡号(cardNo)]的长度不能超过18(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.cardNo)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.birthday) == false && GetStrLen(pobjTeacherInfoEN.birthday) > 8)
{
 throw new Error("(errid:Watl000416)字段[出生日期(birthday)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.birthday)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.graduationMajor) == false && GetStrLen(pobjTeacherInfoEN.graduationMajor) > 40)
{
 throw new Error("(errid:Watl000416)字段[毕业专业(graduationMajor)]的长度不能超过40(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.graduationMajor)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.telNo) == false && GetStrLen(pobjTeacherInfoEN.telNo) > 50)
{
 throw new Error("(errid:Watl000416)字段[电话(telNo)]的长度不能超过50(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.telNo)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.email) == false && GetStrLen(pobjTeacherInfoEN.email) > 100)
{
 throw new Error("(errid:Watl000416)字段[电子邮箱(email)]的长度不能超过100(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.email)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.webSite) == false && GetStrLen(pobjTeacherInfoEN.webSite) > 60)
{
 throw new Error("(errid:Watl000416)字段[个人主页(webSite)]的长度不能超过60(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.webSite)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.personBlog) == false && GetStrLen(pobjTeacherInfoEN.personBlog) > 60)
{
 throw new Error("(errid:Watl000416)字段[个人博客(personBlog)]的长度不能超过60(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.personBlog)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDate) == false && GetStrLen(pobjTeacherInfoEN.entryDate) > 8)
{
 throw new Error("(errid:Watl000416)字段[进校日期(entryDate)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.entryDate)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.fromUnit) == false && GetStrLen(pobjTeacherInfoEN.fromUnit) > 100)
{
 throw new Error("(errid:Watl000416)字段[来自单位(fromUnit)]的长度不能超过100(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.fromUnit)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.memo) == false && GetStrLen(pobjTeacherInfoEN.memo) > 1000)
{
 throw new Error("(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.memo)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzCollege) == false && GetStrLen(pobjTeacherInfoEN.idXzCollege) > 4)
{
 throw new Error("(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idXzCollege)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzMajor) == false && GetStrLen(pobjTeacherInfoEN.idXzMajor) > 8)
{
 throw new Error("(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idXzMajor)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDay) == false && GetStrLen(pobjTeacherInfoEN.entryDay) > 8)
{
 throw new Error("(errid:Watl000416)字段[EntryDay(entryDay)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.entryDay)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPhoto) == false && GetStrLen(pobjTeacherInfoEN.idPhoto) > 8)
{
 throw new Error("(errid:Watl000416)字段[id_Photo(idPhoto)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idPhoto)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idReligion) == false && GetStrLen(pobjTeacherInfoEN.idReligion) > 4)
{
 throw new Error("(errid:Watl000416)字段[id_Religion(idReligion)]的长度不能超过4(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idReligion)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.microblog) == false && GetStrLen(pobjTeacherInfoEN.microblog) > 200)
{
 throw new Error("(errid:Watl000416)字段[Microblog(microblog)]的长度不能超过200(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.microblog)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyUserId) == false && GetStrLen(pobjTeacherInfoEN.modifyUserId) > 18)
{
 throw new Error("(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.modifyUserId)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.phoneNumber) == false && GetStrLen(pobjTeacherInfoEN.phoneNumber) > 15)
{
 throw new Error("(errid:Watl000416)字段[电话(phoneNumber)]的长度不能超过15(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.phoneNumber)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.qQ) == false && GetStrLen(pobjTeacherInfoEN.qQ) > 100)
{
 throw new Error("(errid:Watl000416)字段[QQ(qQ)]的长度不能超过100(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.qQ)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdCollege) == false && GetStrLen(pobjTeacherInfoEN.teachIdCollege) > 6)
{
 throw new Error("(errid:Watl000416)字段[Teach_id_College(teachIdCollege)]的长度不能超过6(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teachIdCollege)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdMajor) == false && GetStrLen(pobjTeacherInfoEN.teachIdMajor) > 8)
{
 throw new Error("(errid:Watl000416)字段[Teach_id_Major(teachIdMajor)]的长度不能超过8(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teachIdMajor)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.tel) == false && GetStrLen(pobjTeacherInfoEN.tel) > 50)
{
 throw new Error("(errid:Watl000416)字段[Tel(tel)]的长度不能超过50(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.tel)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.headphoto) == false && GetStrLen(pobjTeacherInfoEN.headphoto) > 500)
{
 throw new Error("(errid:Watl000416)字段[Headphoto(headphoto)]的长度不能超过500(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.headphoto)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyDate) == false && GetStrLen(pobjTeacherInfoEN.modifyDate) > 20)
{
 throw new Error("(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.modifyDate)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.registerPassword) == false && GetStrLen(pobjTeacherInfoEN.registerPassword) > 30)
{
 throw new Error("(errid:Watl000416)字段[RegisterPassword(registerPassword)]的长度不能超过30(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.registerPassword)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherPhoto) == false && GetStrLen(pobjTeacherInfoEN.teacherPhoto) > 500)
{
 throw new Error("(errid:Watl000416)字段[TeacherPhoto(teacherPhoto)]的长度不能超过500(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.teacherPhoto)(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idCardNo) == false && GetStrLen(pobjTeacherInfoEN.idCardNo) > 20)
{
 throw new Error("(errid:Watl000416)字段[身份证号(idCardNo)]的长度不能超过20(In 教师(TeacherInfo))!值:$(pobjTeacherInfoEN.idCardNo)(clsTeacherInfoBL:CheckProperty4Update)");
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjTeacherInfoEN.idTeacher) == false && undefined !== pobjTeacherInfoEN.idTeacher && tzDataType.isString(pobjTeacherInfoEN.idTeacher) === false)
{
 throw new Error("(errid:Watl000417)字段[教师流水号(idTeacher)]的值:[$(pobjTeacherInfoEN.idTeacher)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherId) == false && undefined !== pobjTeacherInfoEN.teacherId && tzDataType.isString(pobjTeacherInfoEN.teacherId) === false)
{
 throw new Error("(errid:Watl000417)字段[教师工号(teacherId)]的值:[$(pobjTeacherInfoEN.teacherId)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherName) == false && undefined !== pobjTeacherInfoEN.teacherName && tzDataType.isString(pobjTeacherInfoEN.teacherName) === false)
{
 throw new Error("(errid:Watl000417)字段[教师姓名(teacherName)]的值:[$(pobjTeacherInfoEN.teacherName)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSex) == false && undefined !== pobjTeacherInfoEN.idSex && tzDataType.isString(pobjTeacherInfoEN.idSex) === false)
{
 throw new Error("(errid:Watl000417)字段[性别流水号(idSex)]的值:[$(pobjTeacherInfoEN.idSex)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idSchoolPs) == false && undefined !== pobjTeacherInfoEN.idSchoolPs && tzDataType.isString(pobjTeacherInfoEN.idSchoolPs) === false)
{
 throw new Error("(errid:Watl000417)字段[学校流水号(idSchoolPs)]的值:[$(pobjTeacherInfoEN.idSchoolPs)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDisciplinePs) == false && undefined !== pobjTeacherInfoEN.idDisciplinePs && tzDataType.isString(pobjTeacherInfoEN.idDisciplinePs) === false)
{
 throw new Error("(errid:Watl000417)字段[学科流水号(idDisciplinePs)]的值:[$(pobjTeacherInfoEN.idDisciplinePs)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idUniZone) == false && undefined !== pobjTeacherInfoEN.idUniZone && tzDataType.isString(pobjTeacherInfoEN.idUniZone) === false)
{
 throw new Error("(errid:Watl000417)字段[校区流水号(idUniZone)]的值:[$(pobjTeacherInfoEN.idUniZone)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idEthnic) == false && undefined !== pobjTeacherInfoEN.idEthnic && tzDataType.isString(pobjTeacherInfoEN.idEthnic) === false)
{
 throw new Error("(errid:Watl000417)字段[民族流水号(idEthnic)]的值:[$(pobjTeacherInfoEN.idEthnic)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPolitics) == false && undefined !== pobjTeacherInfoEN.idPolitics && tzDataType.isString(pobjTeacherInfoEN.idPolitics) === false)
{
 throw new Error("(errid:Watl000417)字段[政治面貌流水号(idPolitics)]的值:[$(pobjTeacherInfoEN.idPolitics)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idAdminGrade) == false && undefined !== pobjTeacherInfoEN.idAdminGrade && tzDataType.isString(pobjTeacherInfoEN.idAdminGrade) === false)
{
 throw new Error("(errid:Watl000417)字段[行政职务流水号(idAdminGrade)]的值:[$(pobjTeacherInfoEN.idAdminGrade)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProfGrade) == false && undefined !== pobjTeacherInfoEN.idProfGrade && tzDataType.isString(pobjTeacherInfoEN.idProfGrade) === false)
{
 throw new Error("(errid:Watl000417)字段[专业职称流水号(idProfGrade)]的值:[$(pobjTeacherInfoEN.idProfGrade)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idQualif) == false && undefined !== pobjTeacherInfoEN.idQualif && tzDataType.isString(pobjTeacherInfoEN.idQualif) === false)
{
 throw new Error("(errid:Watl000417)字段[学历流水号(idQualif)]的值:[$(pobjTeacherInfoEN.idQualif)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idDegree) == false && undefined !== pobjTeacherInfoEN.idDegree && tzDataType.isString(pobjTeacherInfoEN.idDegree) === false)
{
 throw new Error("(errid:Watl000417)字段[学位流水号(idDegree)]的值:[$(pobjTeacherInfoEN.idDegree)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idStaffType) == false && undefined !== pobjTeacherInfoEN.idStaffType && tzDataType.isString(pobjTeacherInfoEN.idStaffType) === false)
{
 throw new Error("(errid:Watl000417)字段[职工类型流水号(idStaffType)]的值:[$(pobjTeacherInfoEN.idStaffType)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idProvince) == false && undefined !== pobjTeacherInfoEN.idProvince && tzDataType.isString(pobjTeacherInfoEN.idProvince) === false)
{
 throw new Error("(errid:Watl000417)字段[省份流水号(idProvince)]的值:[$(pobjTeacherInfoEN.idProvince)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.citizenId) == false && undefined !== pobjTeacherInfoEN.citizenId && tzDataType.isString(pobjTeacherInfoEN.citizenId) === false)
{
 throw new Error("(errid:Watl000417)字段[身份证号(citizenId)]的值:[$(pobjTeacherInfoEN.citizenId)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.cardNo) == false && undefined !== pobjTeacherInfoEN.cardNo && tzDataType.isString(pobjTeacherInfoEN.cardNo) === false)
{
 throw new Error("(errid:Watl000417)字段[卡号(cardNo)]的值:[$(pobjTeacherInfoEN.cardNo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.birthday) == false && undefined !== pobjTeacherInfoEN.birthday && tzDataType.isString(pobjTeacherInfoEN.birthday) === false)
{
 throw new Error("(errid:Watl000417)字段[出生日期(birthday)]的值:[$(pobjTeacherInfoEN.birthday)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.graduationMajor) == false && undefined !== pobjTeacherInfoEN.graduationMajor && tzDataType.isString(pobjTeacherInfoEN.graduationMajor) === false)
{
 throw new Error("(errid:Watl000417)字段[毕业专业(graduationMajor)]的值:[$(pobjTeacherInfoEN.graduationMajor)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.telNo) == false && undefined !== pobjTeacherInfoEN.telNo && tzDataType.isString(pobjTeacherInfoEN.telNo) === false)
{
 throw new Error("(errid:Watl000417)字段[电话(telNo)]的值:[$(pobjTeacherInfoEN.telNo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.email) == false && undefined !== pobjTeacherInfoEN.email && tzDataType.isString(pobjTeacherInfoEN.email) === false)
{
 throw new Error("(errid:Watl000417)字段[电子邮箱(email)]的值:[$(pobjTeacherInfoEN.email)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.webSite) == false && undefined !== pobjTeacherInfoEN.webSite && tzDataType.isString(pobjTeacherInfoEN.webSite) === false)
{
 throw new Error("(errid:Watl000417)字段[个人主页(webSite)]的值:[$(pobjTeacherInfoEN.webSite)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.personBlog) == false && undefined !== pobjTeacherInfoEN.personBlog && tzDataType.isString(pobjTeacherInfoEN.personBlog) === false)
{
 throw new Error("(errid:Watl000417)字段[个人博客(personBlog)]的值:[$(pobjTeacherInfoEN.personBlog)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDate) == false && undefined !== pobjTeacherInfoEN.entryDate && tzDataType.isString(pobjTeacherInfoEN.entryDate) === false)
{
 throw new Error("(errid:Watl000417)字段[进校日期(entryDate)]的值:[$(pobjTeacherInfoEN.entryDate)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (null != pobjTeacherInfoEN.offed && undefined !== pobjTeacherInfoEN.offed && tzDataType.isBoolean(pobjTeacherInfoEN.offed) === false)
{
 throw new Error("(errid:Watl000417)字段[是否离校(offed)]的值:[$(pobjTeacherInfoEN.offed)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (null != pobjTeacherInfoEN.isAvconUser && undefined !== pobjTeacherInfoEN.isAvconUser && tzDataType.isBoolean(pobjTeacherInfoEN.isAvconUser) === false)
{
 throw new Error("(errid:Watl000417)字段[IsAvconUser(isAvconUser)]的值:[$(pobjTeacherInfoEN.isAvconUser)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (null != pobjTeacherInfoEN.isGpUser && undefined !== pobjTeacherInfoEN.isGpUser && tzDataType.isBoolean(pobjTeacherInfoEN.isGpUser) === false)
{
 throw new Error("(errid:Watl000417)字段[是否Gp用户(isGpUser)]的值:[$(pobjTeacherInfoEN.isGpUser)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (null != pobjTeacherInfoEN.isLocalUser && undefined !== pobjTeacherInfoEN.isLocalUser && tzDataType.isBoolean(pobjTeacherInfoEN.isLocalUser) === false)
{
 throw new Error("(errid:Watl000417)字段[是否本地用户(isLocalUser)]的值:[$(pobjTeacherInfoEN.isLocalUser)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.fromUnit) == false && undefined !== pobjTeacherInfoEN.fromUnit && tzDataType.isString(pobjTeacherInfoEN.fromUnit) === false)
{
 throw new Error("(errid:Watl000417)字段[来自单位(fromUnit)]的值:[$(pobjTeacherInfoEN.fromUnit)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.memo) == false && undefined !== pobjTeacherInfoEN.memo && tzDataType.isString(pobjTeacherInfoEN.memo) === false)
{
 throw new Error("(errid:Watl000417)字段[备注(memo)]的值:[$(pobjTeacherInfoEN.memo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzCollege) == false && undefined !== pobjTeacherInfoEN.idXzCollege && tzDataType.isString(pobjTeacherInfoEN.idXzCollege) === false)
{
 throw new Error("(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[$(pobjTeacherInfoEN.idXzCollege)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idXzMajor) == false && undefined !== pobjTeacherInfoEN.idXzMajor && tzDataType.isString(pobjTeacherInfoEN.idXzMajor) === false)
{
 throw new Error("(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjTeacherInfoEN.idXzMajor)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.entryDay) == false && undefined !== pobjTeacherInfoEN.entryDay && tzDataType.isString(pobjTeacherInfoEN.entryDay) === false)
{
 throw new Error("(errid:Watl000417)字段[EntryDay(entryDay)]的值:[$(pobjTeacherInfoEN.entryDay)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idPhoto) == false && undefined !== pobjTeacherInfoEN.idPhoto && tzDataType.isString(pobjTeacherInfoEN.idPhoto) === false)
{
 throw new Error("(errid:Watl000417)字段[id_Photo(idPhoto)]的值:[$(pobjTeacherInfoEN.idPhoto)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idReligion) == false && undefined !== pobjTeacherInfoEN.idReligion && tzDataType.isString(pobjTeacherInfoEN.idReligion) === false)
{
 throw new Error("(errid:Watl000417)字段[id_Religion(idReligion)]的值:[$(pobjTeacherInfoEN.idReligion)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (null != pobjTeacherInfoEN.isMessage && undefined !== pobjTeacherInfoEN.isMessage && tzDataType.isBoolean(pobjTeacherInfoEN.isMessage) === false)
{
 throw new Error("(errid:Watl000417)字段[IsMessage(isMessage)]的值:[$(pobjTeacherInfoEN.isMessage)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.microblog) == false && undefined !== pobjTeacherInfoEN.microblog && tzDataType.isString(pobjTeacherInfoEN.microblog) === false)
{
 throw new Error("(errid:Watl000417)字段[Microblog(microblog)]的值:[$(pobjTeacherInfoEN.microblog)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyUserId) == false && undefined !== pobjTeacherInfoEN.modifyUserId && tzDataType.isString(pobjTeacherInfoEN.modifyUserId) === false)
{
 throw new Error("(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjTeacherInfoEN.modifyUserId)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (null != pobjTeacherInfoEN.offedBak && undefined !== pobjTeacherInfoEN.offedBak && tzDataType.isBoolean(pobjTeacherInfoEN.offedBak) === false)
{
 throw new Error("(errid:Watl000417)字段[OffedBak(offedBak)]的值:[$(pobjTeacherInfoEN.offedBak)], 非法,应该为布尔型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.phoneNumber) == false && undefined !== pobjTeacherInfoEN.phoneNumber && tzDataType.isString(pobjTeacherInfoEN.phoneNumber) === false)
{
 throw new Error("(errid:Watl000417)字段[电话(phoneNumber)]的值:[$(pobjTeacherInfoEN.phoneNumber)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.qQ) == false && undefined !== pobjTeacherInfoEN.qQ && tzDataType.isString(pobjTeacherInfoEN.qQ) === false)
{
 throw new Error("(errid:Watl000417)字段[QQ(qQ)]的值:[$(pobjTeacherInfoEN.qQ)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdCollege) == false && undefined !== pobjTeacherInfoEN.teachIdCollege && tzDataType.isString(pobjTeacherInfoEN.teachIdCollege) === false)
{
 throw new Error("(errid:Watl000417)字段[Teach_id_College(teachIdCollege)]的值:[$(pobjTeacherInfoEN.teachIdCollege)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teachIdMajor) == false && undefined !== pobjTeacherInfoEN.teachIdMajor && tzDataType.isString(pobjTeacherInfoEN.teachIdMajor) === false)
{
 throw new Error("(errid:Watl000417)字段[Teach_id_Major(teachIdMajor)]的值:[$(pobjTeacherInfoEN.teachIdMajor)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.tel) == false && undefined !== pobjTeacherInfoEN.tel && tzDataType.isString(pobjTeacherInfoEN.tel) === false)
{
 throw new Error("(errid:Watl000417)字段[Tel(tel)]的值:[$(pobjTeacherInfoEN.tel)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.headphoto) == false && undefined !== pobjTeacherInfoEN.headphoto && tzDataType.isString(pobjTeacherInfoEN.headphoto) === false)
{
 throw new Error("(errid:Watl000417)字段[Headphoto(headphoto)]的值:[$(pobjTeacherInfoEN.headphoto)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.modifyDate) == false && undefined !== pobjTeacherInfoEN.modifyDate && tzDataType.isString(pobjTeacherInfoEN.modifyDate) === false)
{
 throw new Error("(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjTeacherInfoEN.modifyDate)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.registerPassword) == false && undefined !== pobjTeacherInfoEN.registerPassword && tzDataType.isString(pobjTeacherInfoEN.registerPassword) === false)
{
 throw new Error("(errid:Watl000417)字段[RegisterPassword(registerPassword)]的值:[$(pobjTeacherInfoEN.registerPassword)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.teacherPhoto) == false && undefined !== pobjTeacherInfoEN.teacherPhoto && tzDataType.isString(pobjTeacherInfoEN.teacherPhoto) === false)
{
 throw new Error("(errid:Watl000417)字段[TeacherPhoto(teacherPhoto)]的值:[$(pobjTeacherInfoEN.teacherPhoto)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
if (IsNullOrEmpty(pobjTeacherInfoEN.idCardNo) == false && undefined !== pobjTeacherInfoEN.idCardNo && tzDataType.isString(pobjTeacherInfoEN.idCardNo) === false)
{
 throw new Error("(errid:Watl000417)字段[身份证号(idCardNo)]的值:[$(pobjTeacherInfoEN.idCardNo)], 非法,应该为字符型(In 教师(TeacherInfo))!(clsTeacherInfoBL:CheckProperty4Update)");
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjTeacherInfoEN.idStaffType) == false && pobjTeacherInfoEN.idStaffType != '[nuull]' && GetStrLen(pobjTeacherInfoEN.idStaffType) !=  4)
{
 throw ("(errid:Watl000418)字段[职工类型流水号]作为外键字段,长度应该为4(In 教师)!(clsTeacherInfoBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function TeacherInfo_GetJSONStrByObj (pobjTeacherInfoEN: clsTeacherInfoEN): string
{
pobjTeacherInfoEN.sfUpdFldSetStr = pobjTeacherInfoEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjTeacherInfoEN);
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
export  function TeacherInfo_GetObjLstByJSONStr (strJSON: string): Array<clsTeacherInfoEN>
{
let arrTeacherInfoObjLst = new Array<clsTeacherInfoEN>();
if (strJSON === "")
{
return arrTeacherInfoObjLst;
}
try
{
arrTeacherInfoObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrTeacherInfoObjLst;
}
return arrTeacherInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTeacherInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function TeacherInfo_GetObjLstByJSONObjLst (arrTeacherInfoObjLstS: Array<clsTeacherInfoEN>): Array<clsTeacherInfoEN>
{
const arrTeacherInfoObjLst = new Array<clsTeacherInfoEN>();
for (const objInFor of arrTeacherInfoObjLstS) {
const obj1 = TeacherInfo_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrTeacherInfoObjLst.push(obj1);
}
return arrTeacherInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function TeacherInfo_GetObjByJSONStr (strJSON: string): clsTeacherInfoEN
{
let pobjTeacherInfoEN = new clsTeacherInfoEN();
if (strJSON === "")
{
return pobjTeacherInfoEN;
}
try
{
pobjTeacherInfoEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjTeacherInfoEN;
}
return pobjTeacherInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function TeacherInfo_GetCombineCondition(objTeacherInfoCond: clsTeacherInfoEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdTeacher, objTeacherInfoCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_TeacherId) == true)
{
const strComparisonOpTeacherId:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_TeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_TeacherId, objTeacherInfoCond.teacherId, strComparisonOpTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_TeacherName) == true)
{
const strComparisonOpTeacherName:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_TeacherName];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_TeacherName, objTeacherInfoCond.teacherName, strComparisonOpTeacherName);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdSex) == true)
{
const strComparisonOpIdSex:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdSex];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdSex, objTeacherInfoCond.idSex, strComparisonOpIdSex);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdSchoolPs) == true)
{
const strComparisonOpIdSchoolPs:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdSchoolPs];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdSchoolPs, objTeacherInfoCond.idSchoolPs, strComparisonOpIdSchoolPs);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdDisciplinePs) == true)
{
const strComparisonOpIdDisciplinePs:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdDisciplinePs];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdDisciplinePs, objTeacherInfoCond.idDisciplinePs, strComparisonOpIdDisciplinePs);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdUniZone, objTeacherInfoCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdEthnic) == true)
{
const strComparisonOpIdEthnic:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdEthnic];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdEthnic, objTeacherInfoCond.idEthnic, strComparisonOpIdEthnic);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdPolitics) == true)
{
const strComparisonOpIdPolitics:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdPolitics];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdPolitics, objTeacherInfoCond.idPolitics, strComparisonOpIdPolitics);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdAdminGrade) == true)
{
const strComparisonOpIdAdminGrade:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdAdminGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdAdminGrade, objTeacherInfoCond.idAdminGrade, strComparisonOpIdAdminGrade);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdProfGrade) == true)
{
const strComparisonOpIdProfGrade:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdProfGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdProfGrade, objTeacherInfoCond.idProfGrade, strComparisonOpIdProfGrade);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdQualif) == true)
{
const strComparisonOpIdQualif:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdQualif];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdQualif, objTeacherInfoCond.idQualif, strComparisonOpIdQualif);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdDegree) == true)
{
const strComparisonOpIdDegree:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdDegree];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdDegree, objTeacherInfoCond.idDegree, strComparisonOpIdDegree);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdStaffType) == true)
{
const strComparisonOpIdStaffType:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdStaffType];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdStaffType, objTeacherInfoCond.idStaffType, strComparisonOpIdStaffType);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdProvince) == true)
{
const strComparisonOpIdProvince:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdProvince];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdProvince, objTeacherInfoCond.idProvince, strComparisonOpIdProvince);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_CitizenId) == true)
{
const strComparisonOpCitizenId:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_CitizenId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_CitizenId, objTeacherInfoCond.citizenId, strComparisonOpCitizenId);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_CardNo) == true)
{
const strComparisonOpCardNo:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_CardNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_CardNo, objTeacherInfoCond.cardNo, strComparisonOpCardNo);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Birthday) == true)
{
const strComparisonOpBirthday:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_Birthday];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_Birthday, objTeacherInfoCond.birthday, strComparisonOpBirthday);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_GraduationMajor) == true)
{
const strComparisonOpGraduationMajor:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_GraduationMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_GraduationMajor, objTeacherInfoCond.graduationMajor, strComparisonOpGraduationMajor);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_TelNo) == true)
{
const strComparisonOpTelNo:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_TelNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_TelNo, objTeacherInfoCond.telNo, strComparisonOpTelNo);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Email) == true)
{
const strComparisonOpEmail:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_Email];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_Email, objTeacherInfoCond.email, strComparisonOpEmail);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_WebSite) == true)
{
const strComparisonOpWebSite:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_WebSite];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_WebSite, objTeacherInfoCond.webSite, strComparisonOpWebSite);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_PersonBlog) == true)
{
const strComparisonOpPersonBlog:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_PersonBlog];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_PersonBlog, objTeacherInfoCond.personBlog, strComparisonOpPersonBlog);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_EntryDate) == true)
{
const strComparisonOpEntryDate:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_EntryDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_EntryDate, objTeacherInfoCond.entryDate, strComparisonOpEntryDate);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Offed) == true)
{
if (objTeacherInfoCond.offed == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeacherInfoEN.con_Offed);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeacherInfoEN.con_Offed);
}
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IsAvconUser) == true)
{
if (objTeacherInfoCond.isAvconUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeacherInfoEN.con_IsAvconUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeacherInfoEN.con_IsAvconUser);
}
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IsGpUser) == true)
{
if (objTeacherInfoCond.isGpUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeacherInfoEN.con_IsGpUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeacherInfoEN.con_IsGpUser);
}
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IsLocalUser) == true)
{
if (objTeacherInfoCond.isLocalUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeacherInfoEN.con_IsLocalUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeacherInfoEN.con_IsLocalUser);
}
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_FromUnit) == true)
{
const strComparisonOpFromUnit:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_FromUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_FromUnit, objTeacherInfoCond.fromUnit, strComparisonOpFromUnit);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_Memo, objTeacherInfoCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdXzCollege, objTeacherInfoCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdXzMajor, objTeacherInfoCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_EntryDay) == true)
{
const strComparisonOpEntryDay:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_EntryDay];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_EntryDay, objTeacherInfoCond.entryDay, strComparisonOpEntryDay);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdPhoto) == true)
{
const strComparisonOpIdPhoto:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdPhoto];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdPhoto, objTeacherInfoCond.idPhoto, strComparisonOpIdPhoto);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdReligion) == true)
{
const strComparisonOpIdReligion:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdReligion];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdReligion, objTeacherInfoCond.idReligion, strComparisonOpIdReligion);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IsMessage) == true)
{
if (objTeacherInfoCond.isMessage == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeacherInfoEN.con_IsMessage);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeacherInfoEN.con_IsMessage);
}
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Microblog) == true)
{
const strComparisonOpMicroblog:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_Microblog];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_Microblog, objTeacherInfoCond.microblog, strComparisonOpMicroblog);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_ModifyUserId, objTeacherInfoCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_OffedBak) == true)
{
if (objTeacherInfoCond.offedBak == true)
{
strWhereCond += Format(" And {0} = '1'", clsTeacherInfoEN.con_OffedBak);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsTeacherInfoEN.con_OffedBak);
}
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_PhoneNumber) == true)
{
const strComparisonOpPhoneNumber:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_PhoneNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_PhoneNumber, objTeacherInfoCond.phoneNumber, strComparisonOpPhoneNumber);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_QQ) == true)
{
const strComparisonOpQQ:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_QQ];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_QQ, objTeacherInfoCond.qQ, strComparisonOpQQ);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_TeachIdCollege) == true)
{
const strComparisonOpTeachIdCollege:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_TeachIdCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_TeachIdCollege, objTeacherInfoCond.teachIdCollege, strComparisonOpTeachIdCollege);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_TeachIdMajor) == true)
{
const strComparisonOpTeachIdMajor:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_TeachIdMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_TeachIdMajor, objTeacherInfoCond.teachIdMajor, strComparisonOpTeachIdMajor);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Tel) == true)
{
const strComparisonOpTel:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_Tel];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_Tel, objTeacherInfoCond.tel, strComparisonOpTel);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_Headphoto) == true)
{
const strComparisonOpHeadphoto:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_Headphoto];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_Headphoto, objTeacherInfoCond.headphoto, strComparisonOpHeadphoto);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_ModifyDate, objTeacherInfoCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_RegisterPassword) == true)
{
const strComparisonOpRegisterPassword:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_RegisterPassword];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_RegisterPassword, objTeacherInfoCond.registerPassword, strComparisonOpRegisterPassword);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_TeacherPhoto) == true)
{
const strComparisonOpTeacherPhoto:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_TeacherPhoto];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_TeacherPhoto, objTeacherInfoCond.teacherPhoto, strComparisonOpTeacherPhoto);
}
if (Object.prototype.hasOwnProperty.call(objTeacherInfoCond.dicFldComparisonOp, clsTeacherInfoEN.con_IdCardNo) == true)
{
const strComparisonOpIdCardNo:string = objTeacherInfoCond.dicFldComparisonOp[clsTeacherInfoEN.con_IdCardNo];
strWhereCond += Format(" And {0} {2} '{1}'", clsTeacherInfoEN.con_IdCardNo, objTeacherInfoCond.idCardNo, strComparisonOpIdCardNo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--TeacherInfo(教师),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTeacherId: 教师工号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function TeacherInfo_GetUniCondStr(objTeacherInfoEN: clsTeacherInfoEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and TeacherId = '{0}'", objTeacherInfoEN.teacherId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--TeacherInfo(教师),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTeacherId: 教师工号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function TeacherInfo_GetUniCondStr4Update(objTeacherInfoEN: clsTeacherInfoEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdTeacher <> '{0}'", objTeacherInfoEN.idTeacher);
 strWhereCond +=  Format(" and TeacherId = '{0}'", objTeacherInfoEN.teacherId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objTeacherInfoENS:源对象
 * @param objTeacherInfoENT:目标对象
*/
export  function TeacherInfo_CopyObjTo(objTeacherInfoENS: clsTeacherInfoEN , objTeacherInfoENT: clsTeacherInfoEN ): void 
{
objTeacherInfoENT.idTeacher = objTeacherInfoENS.idTeacher; //教师流水号
objTeacherInfoENT.teacherId = objTeacherInfoENS.teacherId; //教师工号
objTeacherInfoENT.teacherName = objTeacherInfoENS.teacherName; //教师姓名
objTeacherInfoENT.idSex = objTeacherInfoENS.idSex; //性别流水号
objTeacherInfoENT.idSchoolPs = objTeacherInfoENS.idSchoolPs; //学校流水号
objTeacherInfoENT.idDisciplinePs = objTeacherInfoENS.idDisciplinePs; //学科流水号
objTeacherInfoENT.idUniZone = objTeacherInfoENS.idUniZone; //校区流水号
objTeacherInfoENT.idEthnic = objTeacherInfoENS.idEthnic; //民族流水号
objTeacherInfoENT.idPolitics = objTeacherInfoENS.idPolitics; //政治面貌流水号
objTeacherInfoENT.idAdminGrade = objTeacherInfoENS.idAdminGrade; //行政职务流水号
objTeacherInfoENT.idProfGrade = objTeacherInfoENS.idProfGrade; //专业职称流水号
objTeacherInfoENT.idQualif = objTeacherInfoENS.idQualif; //学历流水号
objTeacherInfoENT.idDegree = objTeacherInfoENS.idDegree; //学位流水号
objTeacherInfoENT.idStaffType = objTeacherInfoENS.idStaffType; //职工类型流水号
objTeacherInfoENT.idProvince = objTeacherInfoENS.idProvince; //省份流水号
objTeacherInfoENT.citizenId = objTeacherInfoENS.citizenId; //身份证号
objTeacherInfoENT.cardNo = objTeacherInfoENS.cardNo; //卡号
objTeacherInfoENT.birthday = objTeacherInfoENS.birthday; //出生日期
objTeacherInfoENT.graduationMajor = objTeacherInfoENS.graduationMajor; //毕业专业
objTeacherInfoENT.telNo = objTeacherInfoENS.telNo; //电话
objTeacherInfoENT.email = objTeacherInfoENS.email; //电子邮箱
objTeacherInfoENT.webSite = objTeacherInfoENS.webSite; //个人主页
objTeacherInfoENT.personBlog = objTeacherInfoENS.personBlog; //个人博客
objTeacherInfoENT.entryDate = objTeacherInfoENS.entryDate; //进校日期
objTeacherInfoENT.offed = objTeacherInfoENS.offed; //是否离校
objTeacherInfoENT.isAvconUser = objTeacherInfoENS.isAvconUser; //IsAvconUser
objTeacherInfoENT.isGpUser = objTeacherInfoENS.isGpUser; //是否Gp用户
objTeacherInfoENT.isLocalUser = objTeacherInfoENS.isLocalUser; //是否本地用户
objTeacherInfoENT.fromUnit = objTeacherInfoENS.fromUnit; //来自单位
objTeacherInfoENT.memo = objTeacherInfoENS.memo; //备注
objTeacherInfoENT.idXzCollege = objTeacherInfoENS.idXzCollege; //学院流水号
objTeacherInfoENT.idXzMajor = objTeacherInfoENS.idXzMajor; //专业流水号
objTeacherInfoENT.entryDay = objTeacherInfoENS.entryDay; //EntryDay
objTeacherInfoENT.idPhoto = objTeacherInfoENS.idPhoto; //id_Photo
objTeacherInfoENT.idReligion = objTeacherInfoENS.idReligion; //id_Religion
objTeacherInfoENT.isMessage = objTeacherInfoENS.isMessage; //IsMessage
objTeacherInfoENT.microblog = objTeacherInfoENS.microblog; //Microblog
objTeacherInfoENT.modifyUserId = objTeacherInfoENS.modifyUserId; //修改人
objTeacherInfoENT.offedBak = objTeacherInfoENS.offedBak; //OffedBak
objTeacherInfoENT.phoneNumber = objTeacherInfoENS.phoneNumber; //电话
objTeacherInfoENT.qQ = objTeacherInfoENS.qQ; //QQ
objTeacherInfoENT.teachIdCollege = objTeacherInfoENS.teachIdCollege; //Teach_id_College
objTeacherInfoENT.teachIdMajor = objTeacherInfoENS.teachIdMajor; //Teach_id_Major
objTeacherInfoENT.tel = objTeacherInfoENS.tel; //Tel
objTeacherInfoENT.headphoto = objTeacherInfoENS.headphoto; //Headphoto
objTeacherInfoENT.modifyDate = objTeacherInfoENS.modifyDate; //修改日期
objTeacherInfoENT.registerPassword = objTeacherInfoENS.registerPassword; //RegisterPassword
objTeacherInfoENT.teacherPhoto = objTeacherInfoENS.teacherPhoto; //TeacherPhoto
objTeacherInfoENT.idCardNo = objTeacherInfoENS.idCardNo; //身份证号
objTeacherInfoENT.sfUpdFldSetStr = objTeacherInfoENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTeacherInfoENS:源对象
 * @param objTeacherInfoENT:目标对象
*/
export  function TeacherInfo_GetObjFromJsonObj(objTeacherInfoENS: clsTeacherInfoEN): clsTeacherInfoEN 
{
 const objTeacherInfoENT: clsTeacherInfoEN = new clsTeacherInfoEN();
ObjectAssign(objTeacherInfoENT, objTeacherInfoENS);
 return objTeacherInfoENT;
}