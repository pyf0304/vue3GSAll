
 /**
 * 类名:clsvPaperCountWApi
 * 表名:vPaperCount(01120595)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:40
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
 * vPaperCount(vPaperCount)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsvPaperCountEN } from "@/ts/L0Entity/GradEduPaper/clsvPaperCountEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const vPaperCount_Controller = "vPaperCountApi";
 export const vPaperCount_ConstructorName = "vPaperCount";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperId:关键字
 * @returns 对象
 **/
export  async function vPaperCount_GetObjByPaperIdAsync(strPaperId: string): Promise<clsvPaperCountEN|null>  
{
const strThisFuncName = "GetObjByPaperIdAsync";

if (IsNullOrEmpty(strPaperId) == true)
{
  const strMsg = Format("参数:[strPaperId]不能为空!(In clsvPaperCountWApi.GetObjByPaperIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strPaperId.length != 8)
{
const strMsg = Format("缓存分类变量:[strPaperId]的长度:[{0}]不正确!(clsvPaperCountWApi.GetObjByPaperIdAsync)", strPaperId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByPaperId";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPaperId,
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
const objvPaperCount = vPaperCount_GetObjFromJsonObj(returnObj);
return objvPaperCount;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPaperIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByPaperIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vPaperCount_SortFunDefa(a:clsvPaperCountEN , b:clsvPaperCountEN): number 
{
return a.paperId.localeCompare(b.paperId);
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
export  function vPaperCount_SortFunDefa2Fld(a:clsvPaperCountEN , b:clsvPaperCountEN): number 
{
if (a.appraiseCount == b.appraiseCount) return a.attachmentCount - b.attachmentCount;
else return a.appraiseCount - b.appraiseCount;
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
export  function vPaperCount_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvPaperCountEN.con_PaperId:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.paperId.localeCompare(b.paperId);
}
case clsvPaperCountEN.con_AppraiseCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.appraiseCount-b.appraiseCount;
}
case clsvPaperCountEN.con_AttachmentCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.attachmentCount-b.attachmentCount;
}
case clsvPaperCountEN.con_CollectionCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.collectionCount-b.collectionCount;
}
case clsvPaperCountEN.con_DownloadCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.downloadCount-b.downloadCount;
}
case clsvPaperCountEN.con_OkCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.okCount-b.okCount;
}
case clsvPaperCountEN.con_Pcount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.pcount-b.pcount;
}
case clsvPaperCountEN.con_Score:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.score-b.score;
}
case clsvPaperCountEN.con_StuScore:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.stuScore-b.stuScore;
}
case clsvPaperCountEN.con_TeaScore:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.teaScore-b.teaScore;
}
case clsvPaperCountEN.con_BrowseNumber:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.browseNumber-b.browseNumber;
}
case clsvPaperCountEN.con_UpdDate:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvPaperCountEN.con_PaperTitle:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvPaperCountEN.con_UpdUser:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvPaperCountEN.con_PaperQCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.paperQCount-b.paperQCount;
}
case clsvPaperCountEN.con_SubVCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.subVCount-b.subVCount;
}
case clsvPaperCountEN.con_TagsCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.tagsCount-b.tagsCount;
}
case clsvPaperCountEN.con_TeaQCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return a.teaQCount-b.teaQCount;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperCount]中不存在!(in ${ vPaperCount_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvPaperCountEN.con_PaperId:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.paperId.localeCompare(a.paperId);
}
case clsvPaperCountEN.con_AppraiseCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.appraiseCount-a.appraiseCount;
}
case clsvPaperCountEN.con_AttachmentCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.attachmentCount-a.attachmentCount;
}
case clsvPaperCountEN.con_CollectionCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.collectionCount-a.collectionCount;
}
case clsvPaperCountEN.con_DownloadCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.downloadCount-a.downloadCount;
}
case clsvPaperCountEN.con_OkCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.okCount-a.okCount;
}
case clsvPaperCountEN.con_Pcount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.pcount-a.pcount;
}
case clsvPaperCountEN.con_Score:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.score-a.score;
}
case clsvPaperCountEN.con_StuScore:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.stuScore-a.stuScore;
}
case clsvPaperCountEN.con_TeaScore:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.teaScore-a.teaScore;
}
case clsvPaperCountEN.con_BrowseNumber:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.browseNumber-a.browseNumber;
}
case clsvPaperCountEN.con_UpdDate:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvPaperCountEN.con_PaperTitle:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvPaperCountEN.con_UpdUser:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvPaperCountEN.con_PaperQCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.paperQCount-a.paperQCount;
}
case clsvPaperCountEN.con_SubVCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.subVCount-a.subVCount;
}
case clsvPaperCountEN.con_TagsCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.tagsCount-a.tagsCount;
}
case clsvPaperCountEN.con_TeaQCount:
return (a: clsvPaperCountEN, b: clsvPaperCountEN) => {
return b.teaQCount-a.teaQCount;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperCount]中不存在!(in ${ vPaperCount_ConstructorName}.${ strThisFuncName})`;
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
export  async function vPaperCount_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvPaperCountEN.con_PaperId:
return (obj: clsvPaperCountEN) => {
return obj.paperId === value;
}
case clsvPaperCountEN.con_AppraiseCount:
return (obj: clsvPaperCountEN) => {
return obj.appraiseCount === value;
}
case clsvPaperCountEN.con_AttachmentCount:
return (obj: clsvPaperCountEN) => {
return obj.attachmentCount === value;
}
case clsvPaperCountEN.con_CollectionCount:
return (obj: clsvPaperCountEN) => {
return obj.collectionCount === value;
}
case clsvPaperCountEN.con_DownloadCount:
return (obj: clsvPaperCountEN) => {
return obj.downloadCount === value;
}
case clsvPaperCountEN.con_OkCount:
return (obj: clsvPaperCountEN) => {
return obj.okCount === value;
}
case clsvPaperCountEN.con_Pcount:
return (obj: clsvPaperCountEN) => {
return obj.pcount === value;
}
case clsvPaperCountEN.con_Score:
return (obj: clsvPaperCountEN) => {
return obj.score === value;
}
case clsvPaperCountEN.con_StuScore:
return (obj: clsvPaperCountEN) => {
return obj.stuScore === value;
}
case clsvPaperCountEN.con_TeaScore:
return (obj: clsvPaperCountEN) => {
return obj.teaScore === value;
}
case clsvPaperCountEN.con_BrowseNumber:
return (obj: clsvPaperCountEN) => {
return obj.browseNumber === value;
}
case clsvPaperCountEN.con_UpdDate:
return (obj: clsvPaperCountEN) => {
return obj.updDate === value;
}
case clsvPaperCountEN.con_PaperTitle:
return (obj: clsvPaperCountEN) => {
return obj.paperTitle === value;
}
case clsvPaperCountEN.con_UpdUser:
return (obj: clsvPaperCountEN) => {
return obj.updUser === value;
}
case clsvPaperCountEN.con_PaperQCount:
return (obj: clsvPaperCountEN) => {
return obj.paperQCount === value;
}
case clsvPaperCountEN.con_SubVCount:
return (obj: clsvPaperCountEN) => {
return obj.subVCount === value;
}
case clsvPaperCountEN.con_TagsCount:
return (obj: clsvPaperCountEN) => {
return obj.tagsCount === value;
}
case clsvPaperCountEN.con_TeaQCount:
return (obj: clsvPaperCountEN) => {
return obj.teaQCount === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vPaperCount]中不存在!(in ${ vPaperCount_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vPaperCount__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vPaperCount_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_GetFirstObjAsync(strWhereCond: string): Promise<clsvPaperCountEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const objvPaperCount = vPaperCount_GetObjFromJsonObj(returnObj);
return objvPaperCount;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvPaperCountEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
 * @param arrPaperId:关键字列表
 * @returns 对象列表
 **/
export  async function vPaperCount_GetObjLstByPaperIdLstAsync(arrPaperId: Array<string>): Promise<Array<clsvPaperCountEN>>  
{
const strThisFuncName = "GetObjLstByPaperIdLstAsync";
const strAction = "GetObjLstByPaperIdLst";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPaperId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPaperIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vPaperCount_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvPaperCountEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvPaperCountEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvPaperCountEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvPaperCountEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vPaperCount_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vPaperCount_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
 * @param strPaperId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vPaperCount_IsExistAsync(strPaperId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPaperId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  async function vPaperCount_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vPaperCount_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vPaperCount_ConstructorName, strThisFuncName);
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
export  function vPaperCount_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperCount_GetJSONStrByObj (pobjvPaperCountEN: clsvPaperCountEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvPaperCountEN);
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
export  function vPaperCount_GetObjLstByJSONStr (strJSON: string): Array<clsvPaperCountEN>
{
let arrvPaperCountObjLst = new Array<clsvPaperCountEN>();
if (strJSON === "")
{
return arrvPaperCountObjLst;
}
try
{
arrvPaperCountObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvPaperCountObjLst;
}
return arrvPaperCountObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPaperCountObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vPaperCount_GetObjLstByJSONObjLst (arrvPaperCountObjLstS: Array<clsvPaperCountEN>): Array<clsvPaperCountEN>
{
const arrvPaperCountObjLst = new Array<clsvPaperCountEN>();
for (const objInFor of arrvPaperCountObjLstS) {
const obj1 = vPaperCount_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvPaperCountObjLst.push(obj1);
}
return arrvPaperCountObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vPaperCount_GetObjByJSONStr (strJSON: string): clsvPaperCountEN
{
let pobjvPaperCountEN = new clsvPaperCountEN();
if (strJSON === "")
{
return pobjvPaperCountEN;
}
try
{
pobjvPaperCountEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvPaperCountEN;
}
return pobjvPaperCountEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vPaperCount_GetCombineCondition(objvPaperCountCond: clsvPaperCountEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCountEN.con_PaperId, objvPaperCountCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_AppraiseCount) == true)
{
const strComparisonOpAppraiseCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_AppraiseCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_AppraiseCount, objvPaperCountCond.appraiseCount, strComparisonOpAppraiseCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_AttachmentCount) == true)
{
const strComparisonOpAttachmentCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_AttachmentCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_AttachmentCount, objvPaperCountCond.attachmentCount, strComparisonOpAttachmentCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_CollectionCount) == true)
{
const strComparisonOpCollectionCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_CollectionCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_CollectionCount, objvPaperCountCond.collectionCount, strComparisonOpCollectionCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_DownloadCount) == true)
{
const strComparisonOpDownloadCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_DownloadCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_DownloadCount, objvPaperCountCond.downloadCount, strComparisonOpDownloadCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_OkCount) == true)
{
const strComparisonOpOkCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_OkCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_OkCount, objvPaperCountCond.okCount, strComparisonOpOkCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_Pcount) == true)
{
const strComparisonOpPcount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_Pcount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_Pcount, objvPaperCountCond.pcount, strComparisonOpPcount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_Score) == true)
{
const strComparisonOpScore:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_Score];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_Score, objvPaperCountCond.score, strComparisonOpScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_StuScore) == true)
{
const strComparisonOpStuScore:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_StuScore];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_StuScore, objvPaperCountCond.stuScore, strComparisonOpStuScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_TeaScore) == true)
{
const strComparisonOpTeaScore:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_TeaScore];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_TeaScore, objvPaperCountCond.teaScore, strComparisonOpTeaScore);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_BrowseNumber) == true)
{
const strComparisonOpBrowseNumber:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_BrowseNumber];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_BrowseNumber, objvPaperCountCond.browseNumber, strComparisonOpBrowseNumber);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCountEN.con_UpdDate, objvPaperCountCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCountEN.con_PaperTitle, objvPaperCountCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvPaperCountEN.con_UpdUser, objvPaperCountCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_PaperQCount) == true)
{
const strComparisonOpPaperQCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_PaperQCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_PaperQCount, objvPaperCountCond.paperQCount, strComparisonOpPaperQCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_SubVCount) == true)
{
const strComparisonOpSubVCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_SubVCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_SubVCount, objvPaperCountCond.subVCount, strComparisonOpSubVCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_TagsCount) == true)
{
const strComparisonOpTagsCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_TagsCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_TagsCount, objvPaperCountCond.tagsCount, strComparisonOpTagsCount);
}
if (Object.prototype.hasOwnProperty.call(objvPaperCountCond.dicFldComparisonOp, clsvPaperCountEN.con_TeaQCount) == true)
{
const strComparisonOpTeaQCount:string = objvPaperCountCond.dicFldComparisonOp[clsvPaperCountEN.con_TeaQCount];
strWhereCond += Format(" And {0} {2} {1}", clsvPaperCountEN.con_TeaQCount, objvPaperCountCond.teaQCount, strComparisonOpTeaQCount);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvPaperCountENS:源对象
 * @param objvPaperCountENT:目标对象
*/
export  function vPaperCount_CopyObjTo(objvPaperCountENS: clsvPaperCountEN , objvPaperCountENT: clsvPaperCountEN ): void 
{
objvPaperCountENT.paperId = objvPaperCountENS.paperId; //论文Id
objvPaperCountENT.appraiseCount = objvPaperCountENS.appraiseCount; //评论数
objvPaperCountENT.attachmentCount = objvPaperCountENS.attachmentCount; //附件计数
objvPaperCountENT.collectionCount = objvPaperCountENS.collectionCount; //收藏数量
objvPaperCountENT.downloadCount = objvPaperCountENS.downloadCount; //下载数
objvPaperCountENT.okCount = objvPaperCountENS.okCount; //点赞统计
objvPaperCountENT.pcount = objvPaperCountENS.pcount; //读写数
objvPaperCountENT.score = objvPaperCountENS.score; //评分
objvPaperCountENT.stuScore = objvPaperCountENS.stuScore; //学生平均分
objvPaperCountENT.teaScore = objvPaperCountENS.teaScore; //教师评分
objvPaperCountENT.browseNumber = objvPaperCountENS.browseNumber; //浏览量
objvPaperCountENT.updDate = objvPaperCountENS.updDate; //修改日期
objvPaperCountENT.paperTitle = objvPaperCountENS.paperTitle; //论文标题
objvPaperCountENT.updUser = objvPaperCountENS.updUser; //修改人
objvPaperCountENT.paperQCount = objvPaperCountENS.paperQCount; //论文答疑数
objvPaperCountENT.subVCount = objvPaperCountENS.subVCount; //论文子观点数
objvPaperCountENT.tagsCount = objvPaperCountENS.tagsCount; //论文标注数
objvPaperCountENT.teaQCount = objvPaperCountENS.teaQCount; //教师提问数
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPaperCountENS:源对象
 * @param objvPaperCountENT:目标对象
*/
export  function vPaperCount_GetObjFromJsonObj(objvPaperCountENS: clsvPaperCountEN): clsvPaperCountEN 
{
 const objvPaperCountENT: clsvPaperCountEN = new clsvPaperCountEN();
ObjectAssign(objvPaperCountENT, objvPaperCountENS);
 return objvPaperCountENT;
}