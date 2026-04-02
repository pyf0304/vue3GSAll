
 /**
 * 类名:clsvgs_PSkillRelaWApi
 * 表名:vgs_PSkillRela(01120666)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:58
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
 * 论文技能关系视图(vgs_PSkillRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,GetObjKeys,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvgs_PSkillRelaEN } from "@/ts/L0Entity/GradEduPaper/clsvgs_PSkillRelaEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vgs_PSkillRela_Controller = "vgs_PSkillRelaApi";
 export const vgs_PSkillRela_ConstructorName = "vgs_PSkillRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vgs_PSkillRela_GetObjBymIdAsync(lngmId: number): Promise<clsvgs_PSkillRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvgs_PSkillRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const objvgs_PSkillRela = vgs_PSkillRela_GetObjFromJsonObj(returnObj);
return objvgs_PSkillRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  function vgs_PSkillRela_SortFunDefa(a:clsvgs_PSkillRelaEN , b:clsvgs_PSkillRelaEN): number 
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
export  function vgs_PSkillRela_SortFunDefa2Fld(a:clsvgs_PSkillRelaEN , b:clsvgs_PSkillRelaEN): number 
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
export  function vgs_PSkillRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvgs_PSkillRelaEN.con_mId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.mId-b.mId;
}
case clsvgs_PSkillRelaEN.con_PaperId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.paperId.localeCompare(b.paperId);
}
case clsvgs_PSkillRelaEN.con_PaperTitle:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvgs_PSkillRelaEN.con_PaperTypeId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.paperTypeId == null) return -1;
if (b.paperTypeId == null) return 1;
return a.paperTypeId.localeCompare(b.paperTypeId);
}
case clsvgs_PSkillRelaEN.con_SectionId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.sectionId == null) return -1;
if (b.sectionId == null) return 1;
return a.sectionId.localeCompare(b.sectionId);
}
case clsvgs_PSkillRelaEN.con_SectionName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.sectionName == null) return -1;
if (b.sectionName == null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clsvgs_PSkillRelaEN.con_SkillId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.skillId.localeCompare(b.skillId);
}
case clsvgs_PSkillRelaEN.con_UpdDate:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvgs_PSkillRelaEN.con_UpdUser:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvgs_PSkillRelaEN.con_Memo:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvgs_PSkillRelaEN.con_SkillName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.skillName == null) return -1;
if (b.skillName == null) return 1;
return a.skillName.localeCompare(b.skillName);
}
case clsvgs_PSkillRelaEN.con_OperationTypeId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.operationTypeId == null) return -1;
if (b.operationTypeId == null) return 1;
return a.operationTypeId.localeCompare(b.operationTypeId);
}
case clsvgs_PSkillRelaEN.con_OperationTypeName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.operationTypeName == null) return -1;
if (b.operationTypeName == null) return 1;
return a.operationTypeName.localeCompare(b.operationTypeName);
}
case clsvgs_PSkillRelaEN.con_LevelName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.levelName == null) return -1;
if (b.levelName == null) return 1;
return a.levelName.localeCompare(b.levelName);
}
case clsvgs_PSkillRelaEN.con_LevelId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.levelId == null) return -1;
if (b.levelId == null) return 1;
return a.levelId.localeCompare(b.levelId);
}
case clsvgs_PSkillRelaEN.con_Process:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.process == null) return -1;
if (b.process == null) return 1;
return a.process.localeCompare(b.process);
}
case clsvgs_PSkillRelaEN.con_IsSubmit:
return (a: clsvgs_PSkillRelaEN) => {
if (a.isSubmit == true) return 1;
else return -1
}
case clsvgs_PSkillRelaEN.con_OkCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.okCount-b.okCount;
}
case clsvgs_PSkillRelaEN.con_Score:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.score-b.score;
}
case clsvgs_PSkillRelaEN.con_AppraiseCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvgs_PSkillRelaEN.con_StuScore:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.stuScore-b.stuScore;
}
case clsvgs_PSkillRelaEN.con_TeaScore:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.teaScore-b.teaScore;
}
case clsvgs_PSkillRelaEN.con_CitationCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.citationCount-b.citationCount;
}
case clsvgs_PSkillRelaEN.con_VersionCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return a.versionCount-b.versionCount;
}
case clsvgs_PSkillRelaEN.con_SkillUserId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.skillUserId == null) return -1;
if (b.skillUserId == null) return 1;
return a.skillUserId.localeCompare(b.skillUserId);
}
case clsvgs_PSkillRelaEN.con_SkillDate:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.skillDate == null) return -1;
if (b.skillDate == null) return 1;
return a.skillDate.localeCompare(b.skillDate);
}
case clsvgs_PSkillRelaEN.con_CreateDate:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.createDate == null) return -1;
if (b.createDate == null) return 1;
return a.createDate.localeCompare(b.createDate);
}
case clsvgs_PSkillRelaEN.con_ShareId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (a.shareId == null) return -1;
if (b.shareId == null) return 1;
return a.shareId.localeCompare(b.shareId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PSkillRela]中不存在!(in ${ vgs_PSkillRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvgs_PSkillRelaEN.con_mId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.mId-a.mId;
}
case clsvgs_PSkillRelaEN.con_PaperId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.paperId.localeCompare(a.paperId);
}
case clsvgs_PSkillRelaEN.con_PaperTitle:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvgs_PSkillRelaEN.con_PaperTypeId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.paperTypeId == null) return -1;
if (a.paperTypeId == null) return 1;
return b.paperTypeId.localeCompare(a.paperTypeId);
}
case clsvgs_PSkillRelaEN.con_SectionId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.sectionId == null) return -1;
if (a.sectionId == null) return 1;
return b.sectionId.localeCompare(a.sectionId);
}
case clsvgs_PSkillRelaEN.con_SectionName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.sectionName == null) return -1;
if (a.sectionName == null) return 1;
return b.sectionName.localeCompare(a.sectionName);
}
case clsvgs_PSkillRelaEN.con_SkillId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.skillId.localeCompare(a.skillId);
}
case clsvgs_PSkillRelaEN.con_UpdDate:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvgs_PSkillRelaEN.con_UpdUser:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvgs_PSkillRelaEN.con_Memo:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvgs_PSkillRelaEN.con_SkillName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.skillName == null) return -1;
if (a.skillName == null) return 1;
return b.skillName.localeCompare(a.skillName);
}
case clsvgs_PSkillRelaEN.con_OperationTypeId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.operationTypeId == null) return -1;
if (a.operationTypeId == null) return 1;
return b.operationTypeId.localeCompare(a.operationTypeId);
}
case clsvgs_PSkillRelaEN.con_OperationTypeName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.operationTypeName == null) return -1;
if (a.operationTypeName == null) return 1;
return b.operationTypeName.localeCompare(a.operationTypeName);
}
case clsvgs_PSkillRelaEN.con_LevelName:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.levelName == null) return -1;
if (a.levelName == null) return 1;
return b.levelName.localeCompare(a.levelName);
}
case clsvgs_PSkillRelaEN.con_LevelId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.levelId == null) return -1;
if (a.levelId == null) return 1;
return b.levelId.localeCompare(a.levelId);
}
case clsvgs_PSkillRelaEN.con_Process:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.process == null) return -1;
if (a.process == null) return 1;
return b.process.localeCompare(a.process);
}
case clsvgs_PSkillRelaEN.con_IsSubmit:
return (b: clsvgs_PSkillRelaEN) => {
if (b.isSubmit == true) return 1;
else return -1
}
case clsvgs_PSkillRelaEN.con_OkCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.okCount-a.okCount;
}
case clsvgs_PSkillRelaEN.con_Score:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.score-a.score;
}
case clsvgs_PSkillRelaEN.con_AppraiseCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvgs_PSkillRelaEN.con_StuScore:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.stuScore-a.stuScore;
}
case clsvgs_PSkillRelaEN.con_TeaScore:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.teaScore-a.teaScore;
}
case clsvgs_PSkillRelaEN.con_CitationCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.citationCount-a.citationCount;
}
case clsvgs_PSkillRelaEN.con_VersionCount:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
return b.versionCount-a.versionCount;
}
case clsvgs_PSkillRelaEN.con_SkillUserId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.skillUserId == null) return -1;
if (a.skillUserId == null) return 1;
return b.skillUserId.localeCompare(a.skillUserId);
}
case clsvgs_PSkillRelaEN.con_SkillDate:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.skillDate == null) return -1;
if (a.skillDate == null) return 1;
return b.skillDate.localeCompare(a.skillDate);
}
case clsvgs_PSkillRelaEN.con_CreateDate:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.createDate == null) return -1;
if (a.createDate == null) return 1;
return b.createDate.localeCompare(a.createDate);
}
case clsvgs_PSkillRelaEN.con_ShareId:
return (a: clsvgs_PSkillRelaEN, b: clsvgs_PSkillRelaEN) => {
if (b.shareId == null) return -1;
if (a.shareId == null) return 1;
return b.shareId.localeCompare(a.shareId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PSkillRela]中不存在!(in ${ vgs_PSkillRela_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_PSkillRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvgs_PSkillRelaEN.con_mId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.mId === value;
}
case clsvgs_PSkillRelaEN.con_PaperId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.paperId === value;
}
case clsvgs_PSkillRelaEN.con_PaperTitle:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.paperTitle === value;
}
case clsvgs_PSkillRelaEN.con_PaperTypeId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.paperTypeId === value;
}
case clsvgs_PSkillRelaEN.con_SectionId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.sectionId === value;
}
case clsvgs_PSkillRelaEN.con_SectionName:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.sectionName === value;
}
case clsvgs_PSkillRelaEN.con_SkillId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.skillId === value;
}
case clsvgs_PSkillRelaEN.con_UpdDate:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.updDate === value;
}
case clsvgs_PSkillRelaEN.con_UpdUser:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.updUser === value;
}
case clsvgs_PSkillRelaEN.con_Memo:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.memo === value;
}
case clsvgs_PSkillRelaEN.con_SkillName:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.skillName === value;
}
case clsvgs_PSkillRelaEN.con_OperationTypeId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.operationTypeId === value;
}
case clsvgs_PSkillRelaEN.con_OperationTypeName:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.operationTypeName === value;
}
case clsvgs_PSkillRelaEN.con_LevelName:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.levelName === value;
}
case clsvgs_PSkillRelaEN.con_LevelId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.levelId === value;
}
case clsvgs_PSkillRelaEN.con_Process:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.process === value;
}
case clsvgs_PSkillRelaEN.con_IsSubmit:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.isSubmit === value;
}
case clsvgs_PSkillRelaEN.con_OkCount:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.okCount === value;
}
case clsvgs_PSkillRelaEN.con_Score:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.score === value;
}
case clsvgs_PSkillRelaEN.con_AppraiseCount:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.appraiseCount === value;
}
case clsvgs_PSkillRelaEN.con_StuScore:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.stuScore === value;
}
case clsvgs_PSkillRelaEN.con_TeaScore:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.teaScore === value;
}
case clsvgs_PSkillRelaEN.con_CitationCount:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.citationCount === value;
}
case clsvgs_PSkillRelaEN.con_VersionCount:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.versionCount === value;
}
case clsvgs_PSkillRelaEN.con_SkillUserId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.skillUserId === value;
}
case clsvgs_PSkillRelaEN.con_SkillDate:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.skillDate === value;
}
case clsvgs_PSkillRelaEN.con_CreateDate:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.createDate === value;
}
case clsvgs_PSkillRelaEN.con_ShareId:
return (obj: clsvgs_PSkillRelaEN) => {
return obj.shareId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_PSkillRela]中不存在!(in ${ vgs_PSkillRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vgs_PSkillRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vgs_PSkillRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvgs_PSkillRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const objvgs_PSkillRela = vgs_PSkillRela_GetObjFromJsonObj(returnObj);
return objvgs_PSkillRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvgs_PSkillRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvgs_PSkillRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvgs_PSkillRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvgs_PSkillRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvgs_PSkillRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvgs_PSkillRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_PSkillRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  async function vgs_PSkillRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vgs_PSkillRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_PSkillRela_ConstructorName, strThisFuncName);
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
export  function vgs_PSkillRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export  async function vgs_PSkillRela_(objDiv: HTMLDivElement, strDdlName: string )
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
const arrObjLstSel = await vgs_PSkillRela_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvgs_PSkillRelaEN.con_mId, clsvgs_PSkillRelaEN.con_OperationTypeId, "论文技能关系视图");
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_PSkillRela_GetJSONStrByObj (pobjvgs_PSkillRelaEN: clsvgs_PSkillRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvgs_PSkillRelaEN);
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
export  function vgs_PSkillRela_GetObjLstByJSONStr (strJSON: string): Array<clsvgs_PSkillRelaEN>
{
let arrvgs_PSkillRelaObjLst = new Array<clsvgs_PSkillRelaEN>();
if (strJSON === "")
{
return arrvgs_PSkillRelaObjLst;
}
try
{
arrvgs_PSkillRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvgs_PSkillRelaObjLst;
}
return arrvgs_PSkillRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_PSkillRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vgs_PSkillRela_GetObjLstByJSONObjLst (arrvgs_PSkillRelaObjLstS: Array<clsvgs_PSkillRelaEN>): Array<clsvgs_PSkillRelaEN>
{
const arrvgs_PSkillRelaObjLst = new Array<clsvgs_PSkillRelaEN>();
for (const objInFor of arrvgs_PSkillRelaObjLstS) {
const obj1 = vgs_PSkillRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvgs_PSkillRelaObjLst.push(obj1);
}
return arrvgs_PSkillRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_PSkillRela_GetObjByJSONStr (strJSON: string): clsvgs_PSkillRelaEN
{
let pobjvgs_PSkillRelaEN = new clsvgs_PSkillRelaEN();
if (strJSON === "")
{
return pobjvgs_PSkillRelaEN;
}
try
{
pobjvgs_PSkillRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvgs_PSkillRelaEN;
}
return pobjvgs_PSkillRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vgs_PSkillRela_GetCombineCondition(objvgs_PSkillRelaCond: clsvgs_PSkillRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_mId, objvgs_PSkillRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_PaperId, objvgs_PSkillRelaCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_PaperTitle, objvgs_PSkillRelaCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_PaperTypeId) == true)
{
const strComparisonOpPaperTypeId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_PaperTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_PaperTypeId, objvgs_PSkillRelaCond.paperTypeId, strComparisonOpPaperTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_SectionId) == true)
{
const strComparisonOpSectionId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_SectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_SectionId, objvgs_PSkillRelaCond.sectionId, strComparisonOpSectionId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_SectionName) == true)
{
const strComparisonOpSectionName:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_SectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_SectionName, objvgs_PSkillRelaCond.sectionName, strComparisonOpSectionName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_SkillId) == true)
{
const strComparisonOpSkillId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_SkillId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_SkillId, objvgs_PSkillRelaCond.skillId, strComparisonOpSkillId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_UpdDate, objvgs_PSkillRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_UpdUser, objvgs_PSkillRelaCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_Memo, objvgs_PSkillRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_SkillName) == true)
{
const strComparisonOpSkillName:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_SkillName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_SkillName, objvgs_PSkillRelaCond.skillName, strComparisonOpSkillName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_OperationTypeId) == true)
{
const strComparisonOpOperationTypeId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_OperationTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_OperationTypeId, objvgs_PSkillRelaCond.operationTypeId, strComparisonOpOperationTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_OperationTypeName) == true)
{
const strComparisonOpOperationTypeName:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_OperationTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_OperationTypeName, objvgs_PSkillRelaCond.operationTypeName, strComparisonOpOperationTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_LevelName) == true)
{
const strComparisonOpLevelName:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_LevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_LevelName, objvgs_PSkillRelaCond.levelName, strComparisonOpLevelName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_LevelId) == true)
{
const strComparisonOpLevelId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_LevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_LevelId, objvgs_PSkillRelaCond.levelId, strComparisonOpLevelId);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_IsSubmit) == true)
{
if (objvgs_PSkillRelaCond.isSubmit == true)
{
strWhereCond += Format(" And {0} = '1'", clsvgs_PSkillRelaEN.con_IsSubmit);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvgs_PSkillRelaEN.con_IsSubmit);
}
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_OkCount, objvgs_PSkillRelaCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_Score) == true)
{
const strComparisonOpScore:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_Score, objvgs_PSkillRelaCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_AppraiseCount, objvgs_PSkillRelaCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_StuScore, objvgs_PSkillRelaCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_TeaScore, objvgs_PSkillRelaCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_CitationCount) == true)
{
const strComparisonOpCitationCount:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_CitationCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_CitationCount, objvgs_PSkillRelaCond.citationCount, strComparisonOpCitationCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_VersionCount) == true)
{
const strComparisonOpVersionCount:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_VersionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_PSkillRelaEN.con_VersionCount, objvgs_PSkillRelaCond.versionCount, strComparisonOpVersionCount);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_SkillUserId) == true)
{
const strComparisonOpSkillUserId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_SkillUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_SkillUserId, objvgs_PSkillRelaCond.skillUserId, strComparisonOpSkillUserId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_SkillDate) == true)
{
const strComparisonOpSkillDate:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_SkillDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_SkillDate, objvgs_PSkillRelaCond.skillDate, strComparisonOpSkillDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_CreateDate) == true)
{
const strComparisonOpCreateDate:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_CreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_CreateDate, objvgs_PSkillRelaCond.createDate, strComparisonOpCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_PSkillRelaCond.dicFldComparisonOp, clsvgs_PSkillRelaEN.con_ShareId) == true)
{
const strComparisonOpShareId:string = objvgs_PSkillRelaCond.dicFldComparisonOp[clsvgs_PSkillRelaEN.con_ShareId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_PSkillRelaEN.con_ShareId, objvgs_PSkillRelaCond.shareId, strComparisonOpShareId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_PSkillRelaENS:源对象
 * @param objvgs_PSkillRelaENT:目标对象
*/
export  function vgs_PSkillRela_CopyObjTo(objvgs_PSkillRelaENS: clsvgs_PSkillRelaEN , objvgs_PSkillRelaENT: clsvgs_PSkillRelaEN ): void 
{
objvgs_PSkillRelaENT.mId = objvgs_PSkillRelaENS.mId; //mId
objvgs_PSkillRelaENT.paperId = objvgs_PSkillRelaENS.paperId; //论文Id
objvgs_PSkillRelaENT.paperTitle = objvgs_PSkillRelaENS.paperTitle; //论文标题
objvgs_PSkillRelaENT.paperTypeId = objvgs_PSkillRelaENS.paperTypeId; //论文类型Id
objvgs_PSkillRelaENT.sectionId = objvgs_PSkillRelaENS.sectionId; //节Id
objvgs_PSkillRelaENT.sectionName = objvgs_PSkillRelaENS.sectionName; //节名
objvgs_PSkillRelaENT.skillId = objvgs_PSkillRelaENS.skillId; //技能Id
objvgs_PSkillRelaENT.updDate = objvgs_PSkillRelaENS.updDate; //修改日期
objvgs_PSkillRelaENT.updUser = objvgs_PSkillRelaENS.updUser; //修改人
objvgs_PSkillRelaENT.memo = objvgs_PSkillRelaENS.memo; //备注
objvgs_PSkillRelaENT.skillName = objvgs_PSkillRelaENS.skillName; //技能名称
objvgs_PSkillRelaENT.operationTypeId = objvgs_PSkillRelaENS.operationTypeId; //操作类型ID
objvgs_PSkillRelaENT.operationTypeName = objvgs_PSkillRelaENS.operationTypeName; //操作类型名
objvgs_PSkillRelaENT.levelName = objvgs_PSkillRelaENS.levelName; //级别名称
objvgs_PSkillRelaENT.levelId = objvgs_PSkillRelaENS.levelId; //级别Id
objvgs_PSkillRelaENT.process = objvgs_PSkillRelaENS.process; //实施过程
objvgs_PSkillRelaENT.isSubmit = objvgs_PSkillRelaENS.isSubmit; //是否提交
objvgs_PSkillRelaENT.okCount = objvgs_PSkillRelaENS.okCount; //点赞统计
objvgs_PSkillRelaENT.score = objvgs_PSkillRelaENS.score; //评分
objvgs_PSkillRelaENT.appraiseCount = objvgs_PSkillRelaENS.appraiseCount; //评论数
objvgs_PSkillRelaENT.stuScore = objvgs_PSkillRelaENS.stuScore; //学生平均分
objvgs_PSkillRelaENT.teaScore = objvgs_PSkillRelaENS.teaScore; //教师评分
objvgs_PSkillRelaENT.citationCount = objvgs_PSkillRelaENS.citationCount; //引用统计
objvgs_PSkillRelaENT.versionCount = objvgs_PSkillRelaENS.versionCount; //版本统计
objvgs_PSkillRelaENT.skillUserId = objvgs_PSkillRelaENS.skillUserId; //SkillUserId
objvgs_PSkillRelaENT.skillDate = objvgs_PSkillRelaENS.skillDate; //SkillDate
objvgs_PSkillRelaENT.createDate = objvgs_PSkillRelaENS.createDate; //建立日期
objvgs_PSkillRelaENT.shareId = objvgs_PSkillRelaENS.shareId; //分享Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_PSkillRelaENS:源对象
 * @param objvgs_PSkillRelaENT:目标对象
*/
export  function vgs_PSkillRela_GetObjFromJsonObj(objvgs_PSkillRelaENS: clsvgs_PSkillRelaEN): clsvgs_PSkillRelaEN 
{
 const objvgs_PSkillRelaENT: clsvgs_PSkillRelaEN = new clsvgs_PSkillRelaEN();
ObjectAssign(objvgs_PSkillRelaENT, objvgs_PSkillRelaENS);
 return objvgs_PSkillRelaENT;
}