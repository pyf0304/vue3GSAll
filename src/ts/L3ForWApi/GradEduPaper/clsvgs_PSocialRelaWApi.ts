
 /**
 * 类名:clsvgs_PSocialRelaWApi
 * 表名:vgs_PSocialRela(01120665)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:56
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
 * 论文社会关系视图(vgs_PSocialRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvgs_PSocialRelaEN } from "@/ts/L0Entity/GradEduPaper/clsvgs_PSocialRelaEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vgs_PSocialRela_Controller = "vgs_PSocialRelaApi";
 export const vgs_PSocialRela_ConstructorName = "vgs_PSocialRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vgs_PSocialRela_GetObjBymIdAsync(lngmId: number): Promise<clsvgs_PSocialRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvgs_PSocialRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const objvgs_PSocialRela = vgs_PSocialRela_GetObjFromJsonObj(returnObj);
return objvgs_PSocialRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  function vgs_PSocialRela_SortFunDefa(a:clsvgs_PSocialRelaEN , b:clsvgs_PSocialRelaEN): number 
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
export  function vgs_PSocialRela_SortFunDefa2Fld(a:clsvgs_PSocialRelaEN , b:clsvgs_PSocialRelaEN): number 
{
if (a.paperId == b.paperId) return a.paperTitle.localeCompare(b.paperTitle);
else return a.paperId.localeCompare(b.paperId);
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
export  function vgs_PSocialRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvgs_PSocialRelaEN.con_mId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.mId-b.mId;
}
case clsvgs_PSocialRelaEN.con_PaperId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.paperId.localeCompare(b.paperId);
}
case clsvgs_PSocialRelaEN.con_PaperTitle:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvgs_PSocialRelaEN.con_PaperTypeId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.paperTypeId == null) return -1;
if (b.paperTypeId == null) return 1;
return a.paperTypeId.localeCompare(b.paperTypeId);
}
case clsvgs_PSocialRelaEN.con_SectionId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvgs_PSocialRelaEN.con_SectionName:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvgs_PSocialRelaEN.con_SocialId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.socialId.localeCompare(b.socialId);
}
case clsvgs_PSocialRelaEN.con_UpdDate:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvgs_PSocialRelaEN.con_UpdUser:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvgs_PSocialRelaEN.con_Memo:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvgs_PSocialRelaEN.con_FullName:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.fullName == null) return -1;
if (b.fullName == null) return 1;
return a.fullName.localeCompare(b.fullName);
}
case clsvgs_PSocialRelaEN.con_Nationality:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.nationality == null) return -1;
if (b.nationality == null) return 1;
return a.nationality.localeCompare(b.nationality);
}
case clsvgs_PSocialRelaEN.con_WorkUnit:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.workUnit == null) return -1;
if (b.workUnit == null) return 1;
return a.workUnit.localeCompare(b.workUnit);
}
case clsvgs_PSocialRelaEN.con_Major:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.major == null) return -1;
if (b.major == null) return 1;
return a.major.localeCompare(b.major);
}
case clsvgs_PSocialRelaEN.con_Achievement:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.achievement == null) return -1;
if (b.achievement == null) return 1;
return a.achievement.localeCompare(b.achievement);
}
case clsvgs_PSocialRelaEN.con_DetailedDescription:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.detailedDescription == null) return -1;
if (b.detailedDescription == null) return 1;
return a.detailedDescription.localeCompare(b.detailedDescription);
}
case clsvgs_PSocialRelaEN.con_LevelId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsvgs_PSocialRelaEN.con_LevelName:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.levelName == null) return -1;
if (b.levelName == null) return 1;
return a.levelName.localeCompare(b.levelName);
}
case clsvgs_PSocialRelaEN.con_IsSubmit:
return (a: clsvgs_PSocialRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvgs_PSocialRelaEN.con_OkCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.okCount-b.okCount;
}
case clsvgs_PSocialRelaEN.con_CitationCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.citationCount-b.citationCount;
}
case clsvgs_PSocialRelaEN.con_VersionCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.versionCount-b.versionCount;
}
case clsvgs_PSocialRelaEN.con_AppraiseCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvgs_PSocialRelaEN.con_Score:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.score-b.score;
}
case clsvgs_PSocialRelaEN.con_StuScore:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.stuScore-b.stuScore;
}
case clsvgs_PSocialRelaEN.con_TeaScore:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return a.teaScore-b.teaScore;
}
case clsvgs_PSocialRelaEN.con_SocialUserId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.socialUserId == null) return -1;
if (b.socialUserId == null) return 1;
return a.socialUserId.localeCompare(b.socialUserId);
}
case clsvgs_PSocialRelaEN.con_SocialDate:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.socialDate == null) return -1;
if (b.socialDate == null) return 1;
return a.socialDate.localeCompare(b.socialDate);
}
case clsvgs_PSocialRelaEN.con_CreateDate:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvgs_PSocialRelaEN.con_ShareId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PSocialRela]中不存在!(in ${ vgs_PSocialRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvgs_PSocialRelaEN.con_mId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.mId-a.mId;
}
case clsvgs_PSocialRelaEN.con_PaperId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.paperId.localeCompare(a.paperId);
}
case clsvgs_PSocialRelaEN.con_PaperTitle:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvgs_PSocialRelaEN.con_PaperTypeId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.paperTypeId == null) return -1;
if (a.paperTypeId == null) return 1;
return b.paperTypeId.localeCompare(a.paperTypeId);
}
case clsvgs_PSocialRelaEN.con_SectionId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvgs_PSocialRelaEN.con_SectionName:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvgs_PSocialRelaEN.con_SocialId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.socialId.localeCompare(a.socialId);
}
case clsvgs_PSocialRelaEN.con_UpdDate:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvgs_PSocialRelaEN.con_UpdUser:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvgs_PSocialRelaEN.con_Memo:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvgs_PSocialRelaEN.con_FullName:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.fullName == null) return -1;
if (a.fullName == null) return 1;
return b.fullName.localeCompare(a.fullName);
}
case clsvgs_PSocialRelaEN.con_Nationality:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.nationality == null) return -1;
if (a.nationality == null) return 1;
return b.nationality.localeCompare(a.nationality);
}
case clsvgs_PSocialRelaEN.con_WorkUnit:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.workUnit == null) return -1;
if (a.workUnit == null) return 1;
return b.workUnit.localeCompare(a.workUnit);
}
case clsvgs_PSocialRelaEN.con_Major:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.major == null) return -1;
if (a.major == null) return 1;
return b.major.localeCompare(a.major);
}
case clsvgs_PSocialRelaEN.con_Achievement:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.achievement == null) return -1;
if (a.achievement == null) return 1;
return b.achievement.localeCompare(a.achievement);
}
case clsvgs_PSocialRelaEN.con_DetailedDescription:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.detailedDescription == null) return -1;
if (a.detailedDescription == null) return 1;
return b.detailedDescription.localeCompare(a.detailedDescription);
}
case clsvgs_PSocialRelaEN.con_LevelId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsvgs_PSocialRelaEN.con_LevelName:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.levelName == null) return -1;
if (a.levelName == null) return 1;
return b.levelName.localeCompare(a.levelName);
}
case clsvgs_PSocialRelaEN.con_IsSubmit:
return (b: clsvgs_PSocialRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvgs_PSocialRelaEN.con_OkCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.okCount-a.okCount;
}
case clsvgs_PSocialRelaEN.con_CitationCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.citationCount-a.citationCount;
}
case clsvgs_PSocialRelaEN.con_VersionCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.versionCount-a.versionCount;
}
case clsvgs_PSocialRelaEN.con_AppraiseCount:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvgs_PSocialRelaEN.con_Score:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.score-a.score;
}
case clsvgs_PSocialRelaEN.con_StuScore:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.stuScore-a.stuScore;
}
case clsvgs_PSocialRelaEN.con_TeaScore:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
return b.teaScore-a.teaScore;
}
case clsvgs_PSocialRelaEN.con_SocialUserId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.socialUserId == null) return -1;
if (a.socialUserId == null) return 1;
return b.socialUserId.localeCompare(a.socialUserId);
}
case clsvgs_PSocialRelaEN.con_SocialDate:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.socialDate == null) return -1;
if (a.socialDate == null) return 1;
return b.socialDate.localeCompare(a.socialDate);
}
case clsvgs_PSocialRelaEN.con_CreateDate:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvgs_PSocialRelaEN.con_ShareId:
return (a: clsvgs_PSocialRelaEN, b: clsvgs_PSocialRelaEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PSocialRela]中不存在!(in ${ vgs_PSocialRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_PSocialRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvgs_PSocialRelaEN.con_mId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.mId === value;
}
case clsvgs_PSocialRelaEN.con_PaperId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.paperId === value;
}
case clsvgs_PSocialRelaEN.con_PaperTitle:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.paperTitle === value;
}
case clsvgs_PSocialRelaEN.con_PaperTypeId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.paperTypeId === value;
}
case clsvgs_PSocialRelaEN.con_SectionId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.sectionId === value;
}
case clsvgs_PSocialRelaEN.con_SectionName:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.sectionName === value;
}
case clsvgs_PSocialRelaEN.con_SocialId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.socialId === value;
}
case clsvgs_PSocialRelaEN.con_UpdDate:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.updDate === value;
}
case clsvgs_PSocialRelaEN.con_UpdUser:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.updUser === value;
}
case clsvgs_PSocialRelaEN.con_Memo:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.memo === value;
}
case clsvgs_PSocialRelaEN.con_FullName:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.fullName === value;
}
case clsvgs_PSocialRelaEN.con_Nationality:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.nationality === value;
}
case clsvgs_PSocialRelaEN.con_WorkUnit:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.workUnit === value;
}
case clsvgs_PSocialRelaEN.con_Major:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.major === value;
}
case clsvgs_PSocialRelaEN.con_Achievement:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.achievement === value;
}
case clsvgs_PSocialRelaEN.con_DetailedDescription:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.detailedDescription === value;
}
case clsvgs_PSocialRelaEN.con_LevelId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.levelId === value;
}
case clsvgs_PSocialRelaEN.con_LevelName:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.levelName === value;
}
case clsvgs_PSocialRelaEN.con_IsSubmit:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.isSubmit === value;
}
case clsvgs_PSocialRelaEN.con_OkCount:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.okCount === value;
}
case clsvgs_PSocialRelaEN.con_CitationCount:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.citationCount === value;
}
case clsvgs_PSocialRelaEN.con_VersionCount:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.versionCount === value;
}
case clsvgs_PSocialRelaEN.con_AppraiseCount:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.appraiseCount === value;
}
case clsvgs_PSocialRelaEN.con_Score:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.score === value;
}
case clsvgs_PSocialRelaEN.con_StuScore:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.stuScore === value;
}
case clsvgs_PSocialRelaEN.con_TeaScore:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.teaScore === value;
}
case clsvgs_PSocialRelaEN.con_SocialUserId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.socialUserId === value;
}
case clsvgs_PSocialRelaEN.con_SocialDate:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.socialDate === value;
}
case clsvgs_PSocialRelaEN.con_CreateDate:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.createDate === value;
}
case clsvgs_PSocialRelaEN.con_ShareId:
return (obj: clsvgs_PSocialRelaEN) => {
return obj.shareId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PSocialRela]中不存在!(in ${ vgs_PSocialRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vgs_PSocialRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vgs_PSocialRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvgs_PSocialRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const objvgs_PSocialRela = vgs_PSocialRela_GetObjFromJsonObj(returnObj);
return objvgs_PSocialRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvgs_PSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvgs_PSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvgs_PSocialRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvgs_PSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvgs_PSocialRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PSocialRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSocialRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSocialRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vgs_PSocialRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSocialRela_ConstructorName, strThisFuncName);
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
export  function vgs_PSocialRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vgs_PSocialRela_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vgs_PSocialRela_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvgs_PSocialRelaEN.con_mId, clsvgs_PSocialRelaEN.con_LevelId, "论文社会关系视图");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_PSocialRela_GetJSONStrByObj (pobjvgs_PSocialRelaEN: clsvgs_PSocialRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvgs_PSocialRelaEN);
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
export  function vgs_PSocialRela_GetObjLstByJSONStr (strJSON: string): Array<clsvgs_PSocialRelaEN>
{
let arrvgs_PSocialRelaObjLst = new Array<clsvgs_PSocialRelaEN>();
if (strJSON === "")
{
return arrvgs_PSocialRelaObjLst;
}
try
{
arrvgs_PSocialRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvgs_PSocialRelaObjLst;
}
return arrvgs_PSocialRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_PSocialRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vgs_PSocialRela_GetObjLstByJSONObjLst (arrvgs_PSocialRelaObjLstS: Array<clsvgs_PSocialRelaEN>): Array<clsvgs_PSocialRelaEN>
{
const arrvgs_PSocialRelaObjLst = new Array<clsvgs_PSocialRelaEN>();
for (const objInFor of arrvgs_PSocialRelaObjLstS) {
const obj1 = vgs_PSocialRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvgs_PSocialRelaObjLst.push(obj1);
}
return arrvgs_PSocialRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_PSocialRela_GetObjByJSONStr (strJSON: string): clsvgs_PSocialRelaEN
{
let pobjvgs_PSocialRelaEN = new clsvgs_PSocialRelaEN();
if (strJSON === "")
{
return pobjvgs_PSocialRelaEN;
}
try
{
pobjvgs_PSocialRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvgs_PSocialRelaEN;
}
return pobjvgs_PSocialRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vgs_PSocialRela_GetCombineCondition(objvgs_PSocialRelaCond: clsvgs_PSocialRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_mId, objvgs_PSocialRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_PaperId, objvgs_PSocialRelaCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_PaperTitle, objvgs_PSocialRelaCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_PaperTypeId) == true)
{
const strComparisonOpPaperTypeId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_PaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_PaperTypeId, objvgs_PSocialRelaCond.paperTypeId, strComparisonOpPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_SectionId, objvgs_PSocialRelaCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_SectionName, objvgs_PSocialRelaCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_SocialId) == true)
{
const strComparisonOpSocialId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_SocialId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_SocialId, objvgs_PSocialRelaCond.socialId, strComparisonOpSocialId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_UpdDate, objvgs_PSocialRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_UpdUser, objvgs_PSocialRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_Memo, objvgs_PSocialRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_FullName) == true)
{
const strComparisonOpFullName:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_FullName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_FullName, objvgs_PSocialRelaCond.fullName, strComparisonOpFullName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_Nationality) == true)
{
const strComparisonOpNationality:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_Nationality];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_Nationality, objvgs_PSocialRelaCond.nationality, strComparisonOpNationality);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_WorkUnit) == true)
{
const strComparisonOpWorkUnit:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_WorkUnit];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_WorkUnit, objvgs_PSocialRelaCond.workUnit, strComparisonOpWorkUnit);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_Major) == true)
{
const strComparisonOpMajor:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_Major];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_Major, objvgs_PSocialRelaCond.major, strComparisonOpMajor);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_Achievement) == true)
{
const strComparisonOpAchievement:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_Achievement];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_Achievement, objvgs_PSocialRelaCond.achievement, strComparisonOpAchievement);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_LevelId, objvgs_PSocialRelaCond.levelId, strComparisonOpLevelId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_LevelName) == true)
{
const strComparisonOpLevelName:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_LevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_LevelName, objvgs_PSocialRelaCond.levelName, strComparisonOpLevelName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_IsSubmit) == true)
{
if (objvgs_PSocialRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvgs_PSocialRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvgs_PSocialRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_OkCount, objvgs_PSocialRelaCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_CitationCount, objvgs_PSocialRelaCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_VersionCount, objvgs_PSocialRelaCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_AppraiseCount, objvgs_PSocialRelaCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_Score) == true)
{
const strComparisonOpScore:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_Score, objvgs_PSocialRelaCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_StuScore, objvgs_PSocialRelaCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSocialRelaEN.con_TeaScore, objvgs_PSocialRelaCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_SocialUserId) == true)
{
const strComparisonOpSocialUserId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_SocialUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_SocialUserId, objvgs_PSocialRelaCond.socialUserId, strComparisonOpSocialUserId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_SocialDate) == true)
{
const strComparisonOpSocialDate:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_SocialDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_SocialDate, objvgs_PSocialRelaCond.socialDate, strComparisonOpSocialDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_CreateDate, objvgs_PSocialRelaCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSocialRelaCond.dicFldComparisonOp, clsvgs_PSocialRelaEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvgs_PSocialRelaCond.dicFldComparisonOp[clsvgs_PSocialRelaEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSocialRelaEN.con_ShareId, objvgs_PSocialRelaCond.shareId, strComparisonOpShareId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_PSocialRelaENS:源对象
 * @param objvgs_PSocialRelaENT:目标对象
*/
export  function vgs_PSocialRela_CopyObjTo(objvgs_PSocialRelaENS: clsvgs_PSocialRelaEN , objvgs_PSocialRelaENT: clsvgs_PSocialRelaEN ): void 
{
objvgs_PSocialRelaENT.mId = objvgs_PSocialRelaENS.mId; //mId
objvgs_PSocialRelaENT.paperId = objvgs_PSocialRelaENS.paperId; //论文Id
objvgs_PSocialRelaENT.paperTitle = objvgs_PSocialRelaENS.paperTitle; //论文标题
objvgs_PSocialRelaENT.paperTypeId = objvgs_PSocialRelaENS.paperTypeId; //论文类型Id
objvgs_PSocialRelaENT.sectionId = objvgs_PSocialRelaENS.sectionId; //节Id
objvgs_PSocialRelaENT.sectionName = objvgs_PSocialRelaENS.sectionName; //节名
objvgs_PSocialRelaENT.socialId = objvgs_PSocialRelaENS.socialId; //社会Id
objvgs_PSocialRelaENT.updDate = objvgs_PSocialRelaENS.updDate; //修改日期
objvgs_PSocialRelaENT.updUser = objvgs_PSocialRelaENS.updUser; //修改人
objvgs_PSocialRelaENT.memo = objvgs_PSocialRelaENS.memo; //备注
objvgs_PSocialRelaENT.fullName = objvgs_PSocialRelaENS.fullName; //姓名
objvgs_PSocialRelaENT.nationality = objvgs_PSocialRelaENS.nationality; //国籍
objvgs_PSocialRelaENT.workUnit = objvgs_PSocialRelaENS.workUnit; //工作单位
objvgs_PSocialRelaENT.major = objvgs_PSocialRelaENS.major; //专业
objvgs_PSocialRelaENT.achievement = objvgs_PSocialRelaENS.achievement; //成就
objvgs_PSocialRelaENT.detailedDescription = objvgs_PSocialRelaENS.detailedDescription; //详细说明
objvgs_PSocialRelaENT.levelId = objvgs_PSocialRelaENS.levelId; //级别Id
objvgs_PSocialRelaENT.levelName = objvgs_PSocialRelaENS.levelName; //级别名称
objvgs_PSocialRelaENT.isSubmit = objvgs_PSocialRelaENS.isSubmit; //是否提交
objvgs_PSocialRelaENT.okCount = objvgs_PSocialRelaENS.okCount; //点赞统计
objvgs_PSocialRelaENT.citationCount = objvgs_PSocialRelaENS.citationCount; //引用统计
objvgs_PSocialRelaENT.versionCount = objvgs_PSocialRelaENS.versionCount; //版本统计
objvgs_PSocialRelaENT.appraiseCount = objvgs_PSocialRelaENS.appraiseCount; //评论数
objvgs_PSocialRelaENT.score = objvgs_PSocialRelaENS.score; //评分
objvgs_PSocialRelaENT.stuScore = objvgs_PSocialRelaENS.stuScore; //学生平均分
objvgs_PSocialRelaENT.teaScore = objvgs_PSocialRelaENS.teaScore; //教师评分
objvgs_PSocialRelaENT.socialUserId = objvgs_PSocialRelaENS.socialUserId; //SocialUserId
objvgs_PSocialRelaENT.socialDate = objvgs_PSocialRelaENS.socialDate; //SocialDate
objvgs_PSocialRelaENT.createDate = objvgs_PSocialRelaENS.createDate; //建立日期
objvgs_PSocialRelaENT.shareId = objvgs_PSocialRelaENS.shareId; //分享Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_PSocialRelaENS:源对象
 * @param objvgs_PSocialRelaENT:目标对象
*/
export  function vgs_PSocialRela_GetObjFromJsonObj(objvgs_PSocialRelaENS: clsvgs_PSocialRelaEN): clsvgs_PSocialRelaEN 
{
 const objvgs_PSocialRelaENT: clsvgs_PSocialRelaEN = new clsvgs_PSocialRelaEN();
ObjectAssign(objvgs_PSocialRelaENT, objvgs_PSocialRelaENS);
 return objvgs_PSocialRelaENT;
}