
 /**
 * 类名:clsvqa_PushWApi
 * 表名:vqa_Push(01120634)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v答疑推送(vqa_Push)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2023年11月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvqa_PushEN } from "@/ts/L0Entity/InteractManage/clsvqa_PushEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vqa_Push_Controller = "vqa_PushApi";
 export const vqa_Push_ConstructorName = "vqa_Push";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngPushId:关键字
 * @returns 对象
 **/
export  async function vqa_Push_GetObjByPushIdAsync(lngPushId: number): Promise<clsvqa_PushEN|null>  
{
const strThisFuncName = "GetObjByPushIdAsync";

if (lngPushId == 0)
{
  const strMsg = Format("参数:[lngPushId]不能为空!(In clsvqa_PushWApi.GetObjByPushIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByPushId";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPushId,
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
const objvqa_Push = vqa_Push_GetObjFromJsonObj(returnObj);
return objvqa_Push;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByPushIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByPushIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByPushIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export  function vqa_Push_SortFunDefa(a:clsvqa_PushEN , b:clsvqa_PushEN): number 
{
return a.pushId-b.pushId;
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
export  function vqa_Push_SortFunDefa2Fld(a:clsvqa_PushEN , b:clsvqa_PushEN): number 
{
if (a.questionsId == b.questionsId) return a.questionsContent.localeCompare(b.questionsContent);
else return a.questionsId.localeCompare(b.questionsId);
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
export  function vqa_Push_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvqa_PushEN.con_PushId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return a.pushId-b.pushId;
}
case clsvqa_PushEN.con_QuestionsId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return a.questionsId.localeCompare(b.questionsId);
}
case clsvqa_PushEN.con_QuestionsContent:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.questionsContent == null) return -1;
if (b.questionsContent == null) return 1;
return a.questionsContent.localeCompare(b.questionsContent);
}
case clsvqa_PushEN.con_ReceiveUser:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.receiveUser == null) return -1;
if (b.receiveUser == null) return 1;
return a.receiveUser.localeCompare(b.receiveUser);
}
case clsvqa_PushEN.con_ReceiveDate:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.receiveDate == null) return -1;
if (b.receiveDate == null) return 1;
return a.receiveDate.localeCompare(b.receiveDate);
}
case clsvqa_PushEN.con_UserName:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.userName == null) return -1;
if (b.userName == null) return 1;
return a.userName.localeCompare(b.userName);
}
case clsvqa_PushEN.con_IsReceive:
return (a: clsvqa_PushEN) => {
if (a.isReceive == true) return 1;
else return -1
}
case clsvqa_PushEN.con_UpdDate:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvqa_PushEN.con_AnswerCount:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return a.answerCount-b.answerCount;
}
case clsvqa_PushEN.con_IsEnd:
return (a: clsvqa_PushEN) => {
if (a.isEnd == true) return 1;
else return -1
}
case clsvqa_PushEN.con_VoteCount:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return a.voteCount-b.voteCount;
}
case clsvqa_PushEN.con_Memo:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvqa_PushEN.con_IdCurrEduCls:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvqa_PushEN.con_PdfContent:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.pdfContent == null) return -1;
if (b.pdfContent == null) return 1;
return a.pdfContent.localeCompare(b.pdfContent);
}
case clsvqa_PushEN.con_QaPaperId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.qaPaperId == null) return -1;
if (b.qaPaperId == null) return 1;
return a.qaPaperId.localeCompare(b.qaPaperId);
}
case clsvqa_PushEN.con_IsPublic:
return (a: clsvqa_PushEN) => {
if (a.isPublic == true) return 1;
else return -1
}
case clsvqa_PushEN.con_PaperId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.paperId == null) return -1;
if (b.paperId == null) return 1;
return a.paperId.localeCompare(b.paperId);
}
case clsvqa_PushEN.con_PaperTitle:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.paperTitle == null) return -1;
if (b.paperTitle == null) return 1;
return a.paperTitle.localeCompare(b.paperTitle);
}
case clsvqa_PushEN.con_PdfPageNum:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return a.pdfPageNum-b.pdfPageNum;
}
case clsvqa_PushEN.con_IsReply:
return (a: clsvqa_PushEN) => {
if (a.isReply == true) return 1;
else return -1
}
case clsvqa_PushEN.con_IsRequestReply:
return (a: clsvqa_PushEN) => {
if (a.isRequestReply == true) return 1;
else return -1
}
case clsvqa_PushEN.con_ReplyDate:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.replyDate == null) return -1;
if (b.replyDate == null) return 1;
return a.replyDate.localeCompare(b.replyDate);
}
case clsvqa_PushEN.con_QuestionsTypeId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.questionsTypeId == null) return -1;
if (b.questionsTypeId == null) return 1;
return a.questionsTypeId.localeCompare(b.questionsTypeId);
}
case clsvqa_PushEN.con_QuestionsTypeName:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (a.questionsTypeName == null) return -1;
if (b.questionsTypeName == null) return 1;
return a.questionsTypeName.localeCompare(b.questionsTypeName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vqa_Push]中不存在!(in ${ vqa_Push_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvqa_PushEN.con_PushId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return b.pushId-a.pushId;
}
case clsvqa_PushEN.con_QuestionsId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return b.questionsId.localeCompare(a.questionsId);
}
case clsvqa_PushEN.con_QuestionsContent:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.questionsContent == null) return -1;
if (a.questionsContent == null) return 1;
return b.questionsContent.localeCompare(a.questionsContent);
}
case clsvqa_PushEN.con_ReceiveUser:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.receiveUser == null) return -1;
if (a.receiveUser == null) return 1;
return b.receiveUser.localeCompare(a.receiveUser);
}
case clsvqa_PushEN.con_ReceiveDate:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.receiveDate == null) return -1;
if (a.receiveDate == null) return 1;
return b.receiveDate.localeCompare(a.receiveDate);
}
case clsvqa_PushEN.con_UserName:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.userName == null) return -1;
if (a.userName == null) return 1;
return b.userName.localeCompare(a.userName);
}
case clsvqa_PushEN.con_IsReceive:
return (b: clsvqa_PushEN) => {
if (b.isReceive == true) return 1;
else return -1
}
case clsvqa_PushEN.con_UpdDate:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvqa_PushEN.con_AnswerCount:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return b.answerCount-a.answerCount;
}
case clsvqa_PushEN.con_IsEnd:
return (b: clsvqa_PushEN) => {
if (b.isEnd == true) return 1;
else return -1
}
case clsvqa_PushEN.con_VoteCount:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return b.voteCount-a.voteCount;
}
case clsvqa_PushEN.con_Memo:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvqa_PushEN.con_IdCurrEduCls:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvqa_PushEN.con_PdfContent:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.pdfContent == null) return -1;
if (a.pdfContent == null) return 1;
return b.pdfContent.localeCompare(a.pdfContent);
}
case clsvqa_PushEN.con_QaPaperId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.qaPaperId == null) return -1;
if (a.qaPaperId == null) return 1;
return b.qaPaperId.localeCompare(a.qaPaperId);
}
case clsvqa_PushEN.con_IsPublic:
return (b: clsvqa_PushEN) => {
if (b.isPublic == true) return 1;
else return -1
}
case clsvqa_PushEN.con_PaperId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.paperId == null) return -1;
if (a.paperId == null) return 1;
return b.paperId.localeCompare(a.paperId);
}
case clsvqa_PushEN.con_PaperTitle:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.paperTitle == null) return -1;
if (a.paperTitle == null) return 1;
return b.paperTitle.localeCompare(a.paperTitle);
}
case clsvqa_PushEN.con_PdfPageNum:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
return b.pdfPageNum-a.pdfPageNum;
}
case clsvqa_PushEN.con_IsReply:
return (b: clsvqa_PushEN) => {
if (b.isReply == true) return 1;
else return -1
}
case clsvqa_PushEN.con_IsRequestReply:
return (b: clsvqa_PushEN) => {
if (b.isRequestReply == true) return 1;
else return -1
}
case clsvqa_PushEN.con_ReplyDate:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.replyDate == null) return -1;
if (a.replyDate == null) return 1;
return b.replyDate.localeCompare(a.replyDate);
}
case clsvqa_PushEN.con_QuestionsTypeId:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.questionsTypeId == null) return -1;
if (a.questionsTypeId == null) return 1;
return b.questionsTypeId.localeCompare(a.questionsTypeId);
}
case clsvqa_PushEN.con_QuestionsTypeName:
return (a: clsvqa_PushEN, b: clsvqa_PushEN) => {
if (b.questionsTypeName == null) return -1;
if (a.questionsTypeName == null) return 1;
return b.questionsTypeName.localeCompare(a.questionsTypeName);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vqa_Push]中不存在!(in ${ vqa_Push_ConstructorName}.${ strThisFuncName})`;
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
export  async function vqa_Push_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvqa_PushEN.con_PushId:
return (obj: clsvqa_PushEN) => {
return obj.pushId === value;
}
case clsvqa_PushEN.con_QuestionsId:
return (obj: clsvqa_PushEN) => {
return obj.questionsId === value;
}
case clsvqa_PushEN.con_QuestionsContent:
return (obj: clsvqa_PushEN) => {
return obj.questionsContent === value;
}
case clsvqa_PushEN.con_ReceiveUser:
return (obj: clsvqa_PushEN) => {
return obj.receiveUser === value;
}
case clsvqa_PushEN.con_ReceiveDate:
return (obj: clsvqa_PushEN) => {
return obj.receiveDate === value;
}
case clsvqa_PushEN.con_UserName:
return (obj: clsvqa_PushEN) => {
return obj.userName === value;
}
case clsvqa_PushEN.con_IsReceive:
return (obj: clsvqa_PushEN) => {
return obj.isReceive === value;
}
case clsvqa_PushEN.con_UpdDate:
return (obj: clsvqa_PushEN) => {
return obj.updDate === value;
}
case clsvqa_PushEN.con_AnswerCount:
return (obj: clsvqa_PushEN) => {
return obj.answerCount === value;
}
case clsvqa_PushEN.con_IsEnd:
return (obj: clsvqa_PushEN) => {
return obj.isEnd === value;
}
case clsvqa_PushEN.con_VoteCount:
return (obj: clsvqa_PushEN) => {
return obj.voteCount === value;
}
case clsvqa_PushEN.con_Memo:
return (obj: clsvqa_PushEN) => {
return obj.memo === value;
}
case clsvqa_PushEN.con_IdCurrEduCls:
return (obj: clsvqa_PushEN) => {
return obj.idCurrEduCls === value;
}
case clsvqa_PushEN.con_PdfContent:
return (obj: clsvqa_PushEN) => {
return obj.pdfContent === value;
}
case clsvqa_PushEN.con_QaPaperId:
return (obj: clsvqa_PushEN) => {
return obj.qaPaperId === value;
}
case clsvqa_PushEN.con_IsPublic:
return (obj: clsvqa_PushEN) => {
return obj.isPublic === value;
}
case clsvqa_PushEN.con_PaperId:
return (obj: clsvqa_PushEN) => {
return obj.paperId === value;
}
case clsvqa_PushEN.con_PaperTitle:
return (obj: clsvqa_PushEN) => {
return obj.paperTitle === value;
}
case clsvqa_PushEN.con_PdfPageNum:
return (obj: clsvqa_PushEN) => {
return obj.pdfPageNum === value;
}
case clsvqa_PushEN.con_IsReply:
return (obj: clsvqa_PushEN) => {
return obj.isReply === value;
}
case clsvqa_PushEN.con_IsRequestReply:
return (obj: clsvqa_PushEN) => {
return obj.isRequestReply === value;
}
case clsvqa_PushEN.con_ReplyDate:
return (obj: clsvqa_PushEN) => {
return obj.replyDate === value;
}
case clsvqa_PushEN.con_QuestionsTypeId:
return (obj: clsvqa_PushEN) => {
return obj.questionsTypeId === value;
}
case clsvqa_PushEN.con_QuestionsTypeName:
return (obj: clsvqa_PushEN) => {
return obj.questionsTypeName === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vqa_Push]中不存在!(in ${ vqa_Push_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[vqa_Push__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vqa_Push_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_GetFirstObjAsync(strWhereCond: string): Promise<clsvqa_PushEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const objvqa_Push = vqa_Push_GetObjFromJsonObj(returnObj);
return objvqa_Push;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvqa_PushEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vqa_Push_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vqa_Push_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
 * @param arrPushId:关键字列表
 * @returns 对象列表
 **/
export  async function vqa_Push_GetObjLstByPushIdLstAsync(arrPushId: Array<string>): Promise<Array<clsvqa_PushEN>>  
{
const strThisFuncName = "GetObjLstByPushIdLstAsync";
const strAction = "GetObjLstByPushIdLst";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrPushId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vqa_Push_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vqa_Push_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPushIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vqa_Push_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvqa_PushEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vqa_Push_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vqa_Push_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvqa_PushEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vqa_Push_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vqa_Push_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvqa_PushEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvqa_PushEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vqa_Push_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vqa_Push_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
 * @param lngPushId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vqa_Push_IsExistAsync(lngPushId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngPushId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  async function vqa_Push_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vqa_Push_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vqa_Push_ConstructorName, strThisFuncName);
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
export  function vqa_Push_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vqa_Push_GetJSONStrByObj (pobjvqa_PushEN: clsvqa_PushEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvqa_PushEN);
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
export  function vqa_Push_GetObjLstByJSONStr (strJSON: string): Array<clsvqa_PushEN>
{
let arrvqa_PushObjLst = new Array<clsvqa_PushEN>();
if (strJSON === "")
{
return arrvqa_PushObjLst;
}
try
{
arrvqa_PushObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvqa_PushObjLst;
}
return arrvqa_PushObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvqa_PushObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vqa_Push_GetObjLstByJSONObjLst (arrvqa_PushObjLstS: Array<clsvqa_PushEN>): Array<clsvqa_PushEN>
{
const arrvqa_PushObjLst = new Array<clsvqa_PushEN>();
for (const objInFor of arrvqa_PushObjLstS) {
const obj1 = vqa_Push_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvqa_PushObjLst.push(obj1);
}
return arrvqa_PushObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vqa_Push_GetObjByJSONStr (strJSON: string): clsvqa_PushEN
{
let pobjvqa_PushEN = new clsvqa_PushEN();
if (strJSON === "")
{
return pobjvqa_PushEN;
}
try
{
pobjvqa_PushEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvqa_PushEN;
}
return pobjvqa_PushEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vqa_Push_GetCombineCondition(objvqa_PushCond: clsvqa_PushEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_PushId) == true)
{
const strComparisonOpPushId:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_PushId];
strWhereCond += Format(" And {0} {2} {1}", clsvqa_PushEN.con_PushId, objvqa_PushCond.pushId, strComparisonOpPushId);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_QuestionsId) == true)
{
const strComparisonOpQuestionsId:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_QuestionsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_QuestionsId, objvqa_PushCond.questionsId, strComparisonOpQuestionsId);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_QuestionsContent) == true)
{
const strComparisonOpQuestionsContent:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_QuestionsContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_QuestionsContent, objvqa_PushCond.questionsContent, strComparisonOpQuestionsContent);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_ReceiveUser) == true)
{
const strComparisonOpReceiveUser:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_ReceiveUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_ReceiveUser, objvqa_PushCond.receiveUser, strComparisonOpReceiveUser);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_ReceiveDate) == true)
{
const strComparisonOpReceiveDate:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_ReceiveDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_ReceiveDate, objvqa_PushCond.receiveDate, strComparisonOpReceiveDate);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_UserName) == true)
{
const strComparisonOpUserName:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_UserName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_UserName, objvqa_PushCond.userName, strComparisonOpUserName);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_IsReceive) == true)
{
if (objvqa_PushCond.isReceive == true)
{
strWhereCond += Format(" And {0} = '1'", clsvqa_PushEN.con_IsReceive);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvqa_PushEN.con_IsReceive);
}
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_UpdDate, objvqa_PushCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_AnswerCount) == true)
{
const strComparisonOpAnswerCount:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_AnswerCount];
strWhereCond += Format(" And {0} {2} {1}", clsvqa_PushEN.con_AnswerCount, objvqa_PushCond.answerCount, strComparisonOpAnswerCount);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_IsEnd) == true)
{
if (objvqa_PushCond.isEnd == true)
{
strWhereCond += Format(" And {0} = '1'", clsvqa_PushEN.con_IsEnd);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvqa_PushEN.con_IsEnd);
}
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_VoteCount) == true)
{
const strComparisonOpVoteCount:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_VoteCount];
strWhereCond += Format(" And {0} {2} {1}", clsvqa_PushEN.con_VoteCount, objvqa_PushCond.voteCount, strComparisonOpVoteCount);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_Memo, objvqa_PushCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_IdCurrEduCls, objvqa_PushCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_PdfContent) == true)
{
const strComparisonOpPdfContent:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_PdfContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_PdfContent, objvqa_PushCond.pdfContent, strComparisonOpPdfContent);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_QaPaperId) == true)
{
const strComparisonOpQaPaperId:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_QaPaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_QaPaperId, objvqa_PushCond.qaPaperId, strComparisonOpQaPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_IsPublic) == true)
{
if (objvqa_PushCond.isPublic == true)
{
strWhereCond += Format(" And {0} = '1'", clsvqa_PushEN.con_IsPublic);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvqa_PushEN.con_IsPublic);
}
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_PaperId) == true)
{
const strComparisonOpPaperId:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_PaperId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_PaperId, objvqa_PushCond.paperId, strComparisonOpPaperId);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_PaperTitle) == true)
{
const strComparisonOpPaperTitle:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_PaperTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_PaperTitle, objvqa_PushCond.paperTitle, strComparisonOpPaperTitle);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_PdfPageNum) == true)
{
const strComparisonOpPdfPageNum:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_PdfPageNum];
strWhereCond += Format(" And {0} {2} {1}", clsvqa_PushEN.con_PdfPageNum, objvqa_PushCond.pdfPageNum, strComparisonOpPdfPageNum);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_IsReply) == true)
{
if (objvqa_PushCond.isReply == true)
{
strWhereCond += Format(" And {0} = '1'", clsvqa_PushEN.con_IsReply);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvqa_PushEN.con_IsReply);
}
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_IsRequestReply) == true)
{
if (objvqa_PushCond.isRequestReply == true)
{
strWhereCond += Format(" And {0} = '1'", clsvqa_PushEN.con_IsRequestReply);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvqa_PushEN.con_IsRequestReply);
}
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_ReplyDate) == true)
{
const strComparisonOpReplyDate:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_ReplyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_ReplyDate, objvqa_PushCond.replyDate, strComparisonOpReplyDate);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_QuestionsTypeId) == true)
{
const strComparisonOpQuestionsTypeId:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_QuestionsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_QuestionsTypeId, objvqa_PushCond.questionsTypeId, strComparisonOpQuestionsTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvqa_PushCond.dicFldComparisonOp, clsvqa_PushEN.con_QuestionsTypeName) == true)
{
const strComparisonOpQuestionsTypeName:string = objvqa_PushCond.dicFldComparisonOp[clsvqa_PushEN.con_QuestionsTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvqa_PushEN.con_QuestionsTypeName, objvqa_PushCond.questionsTypeName, strComparisonOpQuestionsTypeName);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvqa_PushENS:源对象
 * @param objvqa_PushENT:目标对象
*/
export  function vqa_Push_CopyObjTo(objvqa_PushENS: clsvqa_PushEN , objvqa_PushENT: clsvqa_PushEN ): void 
{
objvqa_PushENT.pushId = objvqa_PushENS.pushId; //推送d
objvqa_PushENT.questionsId = objvqa_PushENS.questionsId; //提问Id
objvqa_PushENT.questionsContent = objvqa_PushENS.questionsContent; //提问内容
objvqa_PushENT.receiveUser = objvqa_PushENS.receiveUser; //接收用户
objvqa_PushENT.receiveDate = objvqa_PushENS.receiveDate; //接收日期
objvqa_PushENT.userName = objvqa_PushENS.userName; //用户名
objvqa_PushENT.isReceive = objvqa_PushENS.isReceive; //是否接收
objvqa_PushENT.updDate = objvqa_PushENS.updDate; //修改日期
objvqa_PushENT.answerCount = objvqa_PushENS.answerCount; //回答计数
objvqa_PushENT.isEnd = objvqa_PushENS.isEnd; //是否结束
objvqa_PushENT.voteCount = objvqa_PushENS.voteCount; //点赞计数
objvqa_PushENT.memo = objvqa_PushENS.memo; //备注
objvqa_PushENT.idCurrEduCls = objvqa_PushENS.idCurrEduCls; //教学班流水号
objvqa_PushENT.pdfContent = objvqa_PushENS.pdfContent; //Pdf内容
objvqa_PushENT.qaPaperId = objvqa_PushENS.qaPaperId; //论文答疑Id
objvqa_PushENT.isPublic = objvqa_PushENS.isPublic; //是否公开
objvqa_PushENT.paperId = objvqa_PushENS.paperId; //论文Id
objvqa_PushENT.paperTitle = objvqa_PushENS.paperTitle; //论文标题
objvqa_PushENT.pdfPageNum = objvqa_PushENS.pdfPageNum; //Pdf页码
objvqa_PushENT.isReply = objvqa_PushENS.isReply; //是否回复
objvqa_PushENT.isRequestReply = objvqa_PushENS.isRequestReply; //是否要求回复
objvqa_PushENT.replyDate = objvqa_PushENS.replyDate; //回复日期
objvqa_PushENT.questionsTypeId = objvqa_PushENS.questionsTypeId; //问题类型Id
objvqa_PushENT.questionsTypeName = objvqa_PushENS.questionsTypeName; //问题类型名称
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvqa_PushENS:源对象
 * @param objvqa_PushENT:目标对象
*/
export  function vqa_Push_GetObjFromJsonObj(objvqa_PushENS: clsvqa_PushEN): clsvqa_PushEN 
{
 const objvqa_PushENT: clsvqa_PushEN = new clsvqa_PushEN();
ObjectAssign(objvqa_PushENT, objvqa_PushENS);
 return objvqa_PushENT;
}