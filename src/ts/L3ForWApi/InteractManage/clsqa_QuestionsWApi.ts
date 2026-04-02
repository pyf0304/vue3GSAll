/**
 * 类名:clsqa_QuestionsWApi
 * 表名:qa_Questions(01120642)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:28
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
 * 答疑提问表(qa_Questions)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { vqa_Questions_ReFreshThisCache } from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qa_Questions_Controller = 'qa_QuestionsApi';
export const qa_Questions_ConstructorName = 'qa_Questions';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionsId:关键字
 * @returns 对象
 **/
export async function qa_Questions_GetObjByQuestionsIdAsync(
  strQuestionsId: string,
): Promise<clsqa_QuestionsEN | null> {
  const strThisFuncName = 'GetObjByQuestionsIdAsync';

  if (IsNullOrEmpty(strQuestionsId) == true) {
    const strMsg = Format(
      '参数:[strQuestionsId]不能为空!(In clsqa_QuestionsWApi.GetObjByQuestionsIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQuestionsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQuestionsId]的长度:[{0}]不正确!(clsqa_QuestionsWApi.GetObjByQuestionsIdAsync)',
      strQuestionsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByQuestionsId';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQuestionsId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objqa_Questions = qa_Questions_GetObjFromJsonObj(returnObj);
      return objqa_Questions;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strQuestionsId:所给的关键字
 * @returns 对象
 */
export async function qa_Questions_GetObjByQuestionsIdCache(
  strQuestionsId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByQuestionsIdCache';

  if (IsNullOrEmpty(strQuestionsId) == true) {
    const strMsg = Format(
      '参数:[strQuestionsId]不能为空!(In clsqa_QuestionsWApi.GetObjByQuestionsIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQuestionsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQuestionsId]的长度:[{0}]不正确!(clsqa_QuestionsWApi.GetObjByQuestionsIdCache)',
      strQuestionsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
  try {
    const arrqa_QuestionsSel = arrqa_QuestionsObjLstCache.filter(
      (x) => x.questionsId == strQuestionsId,
    );
    let objqa_Questions: clsqa_QuestionsEN;
    if (arrqa_QuestionsSel.length > 0) {
      objqa_Questions = arrqa_QuestionsSel[0];
      return objqa_Questions;
    } else {
      if (bolTryAsyncOnce == true) {
        const objqa_QuestionsConst = await qa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
        if (objqa_QuestionsConst != null) {
          qa_Questions_ReFreshThisCache();
          return objqa_QuestionsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQuestionsId,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strQuestionsId:所给的关键字
 * @returns 对象
 */
export async function qa_Questions_GetObjByQuestionsIdlocalStorage(strQuestionsId: string) {
  const strThisFuncName = 'GetObjByQuestionsIdlocalStorage';

  if (IsNullOrEmpty(strQuestionsId) == true) {
    const strMsg = Format(
      '参数:[strQuestionsId]不能为空!(In clsqa_QuestionsWApi.GetObjByQuestionsIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQuestionsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQuestionsId]的长度:[{0}]不正确!(clsqa_QuestionsWApi.GetObjByQuestionsIdlocalStorage)',
      strQuestionsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsqa_QuestionsEN._CurrTabName, strQuestionsId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objqa_QuestionsCache: clsqa_QuestionsEN = JSON.parse(strTempObj);
    return objqa_QuestionsCache;
  }
  try {
    const objqa_Questions = await qa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
    if (objqa_Questions != null) {
      localStorage.setItem(strKey, JSON.stringify(objqa_Questions));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objqa_Questions;
    }
    return objqa_Questions;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQuestionsId,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objqa_Questions:所给的对象
 * @returns 对象
 */
export async function qa_Questions_UpdateObjInLstCache(objqa_Questions: clsqa_QuestionsEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
    const obj = arrqa_QuestionsObjLstCache.find(
      (x) => x.questionsId == objqa_Questions.questionsId,
    );
    if (obj != null) {
      objqa_Questions.questionsId = obj.questionsId;
      ObjectAssign(obj, objqa_Questions);
    } else {
      arrqa_QuestionsObjLstCache.push(objqa_Questions);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function qa_Questions_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsqa_QuestionsEN.con_QuestionsId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsqa_QuestionsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsqa_QuestionsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strQuestionsId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objqa_Questions = await qa_Questions_GetObjByQuestionsIdCache(strQuestionsId);
  if (objqa_Questions == null) return '';
  if (objqa_Questions.GetFldValue(strOutFldName) == null) return '';
  return objqa_Questions.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function qa_Questions_SortFunDefa(a: clsqa_QuestionsEN, b: clsqa_QuestionsEN): number {
  return a.questionsId.localeCompare(b.questionsId);
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
export function qa_Questions_SortFunDefa2Fld(a: clsqa_QuestionsEN, b: clsqa_QuestionsEN): number {
  if (a.qaPaperId == b.qaPaperId) return a.questionsContent.localeCompare(b.questionsContent);
  else return a.qaPaperId.localeCompare(b.qaPaperId);
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
export function qa_Questions_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsqa_QuestionsEN.con_QuestionsId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.questionsId.localeCompare(b.questionsId);
        };
      case clsqa_QuestionsEN.con_QaPaperId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.qaPaperId == null) return -1;
          if (b.qaPaperId == null) return 1;
          return a.qaPaperId.localeCompare(b.qaPaperId);
        };
      case clsqa_QuestionsEN.con_QuestionsContent:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.questionsContent == null) return -1;
          if (b.questionsContent == null) return 1;
          return a.questionsContent.localeCompare(b.questionsContent);
        };
      case clsqa_QuestionsEN.con_PdfContent:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsqa_QuestionsEN.con_PdfPageNum:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsqa_QuestionsEN.con_IsDelete:
        return (a: clsqa_QuestionsEN) => {
          if (a.isDelete == true) return 1;
          else return -1;
        };
      case clsqa_QuestionsEN.con_IsPublic:
        return (a: clsqa_QuestionsEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsqa_QuestionsEN.con_IsEnd:
        return (a: clsqa_QuestionsEN) => {
          if (a.isEnd == true) return 1;
          else return -1;
        };
      case clsqa_QuestionsEN.con_VoteCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.voteCount - b.voteCount;
        };
      case clsqa_QuestionsEN.con_AnswerCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.answerCount - b.answerCount;
        };
      case clsqa_QuestionsEN.con_OrderNum:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsqa_QuestionsEN.con_UpdUser:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsqa_QuestionsEN.con_UpdDate:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsqa_QuestionsEN.con_Memo:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsqa_QuestionsEN.con_PdfDivLet:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.pdfDivLet == null) return -1;
          if (b.pdfDivLet == null) return 1;
          return a.pdfDivLet.localeCompare(b.pdfDivLet);
        };
      case clsqa_QuestionsEN.con_PdfDivTop:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.pdfDivTop == null) return -1;
          if (b.pdfDivTop == null) return 1;
          return a.pdfDivTop.localeCompare(b.pdfDivTop);
        };
      case clsqa_QuestionsEN.con_PdfPageNumIn:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.pdfPageNumIn == null) return -1;
          if (b.pdfPageNumIn == null) return 1;
          return a.pdfPageNumIn.localeCompare(b.pdfPageNumIn);
        };
      case clsqa_QuestionsEN.con_PdfPageTop:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.pdfPageTop - b.pdfPageTop;
        };
      case clsqa_QuestionsEN.con_PdfZoom:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.pdfZoom == null) return -1;
          if (b.pdfZoom == null) return 1;
          return a.pdfZoom.localeCompare(b.pdfZoom);
        };
      case clsqa_QuestionsEN.con_PaperId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsqa_QuestionsEN.con_UserId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsqa_QuestionsEN.con_QuestionsTypeId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.questionsTypeId == null) return -1;
          if (b.questionsTypeId == null) return 1;
          return a.questionsTypeId.localeCompare(b.questionsTypeId);
        };
      case clsqa_QuestionsEN.con_DiscussCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.discussCount - b.discussCount;
        };
      case clsqa_QuestionsEN.con_GroupDiscussCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.groupDiscussCount - b.groupDiscussCount;
        };
      case clsqa_QuestionsEN.con_RecommendAnswerCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return a.recommendAnswerCount - b.recommendAnswerCount;
        };
      case clsqa_QuestionsEN.con_CreateDate:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsqa_QuestionsEN.con_IdCurrEduCls:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[qa_Questions]中不存在!(in ${qa_Questions_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsqa_QuestionsEN.con_QuestionsId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.questionsId.localeCompare(a.questionsId);
        };
      case clsqa_QuestionsEN.con_QaPaperId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.qaPaperId == null) return -1;
          if (a.qaPaperId == null) return 1;
          return b.qaPaperId.localeCompare(a.qaPaperId);
        };
      case clsqa_QuestionsEN.con_QuestionsContent:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.questionsContent == null) return -1;
          if (a.questionsContent == null) return 1;
          return b.questionsContent.localeCompare(a.questionsContent);
        };
      case clsqa_QuestionsEN.con_PdfContent:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsqa_QuestionsEN.con_PdfPageNum:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsqa_QuestionsEN.con_IsDelete:
        return (b: clsqa_QuestionsEN) => {
          if (b.isDelete == true) return 1;
          else return -1;
        };
      case clsqa_QuestionsEN.con_IsPublic:
        return (b: clsqa_QuestionsEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsqa_QuestionsEN.con_IsEnd:
        return (b: clsqa_QuestionsEN) => {
          if (b.isEnd == true) return 1;
          else return -1;
        };
      case clsqa_QuestionsEN.con_VoteCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.voteCount - a.voteCount;
        };
      case clsqa_QuestionsEN.con_AnswerCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.answerCount - a.answerCount;
        };
      case clsqa_QuestionsEN.con_OrderNum:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsqa_QuestionsEN.con_UpdUser:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsqa_QuestionsEN.con_UpdDate:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsqa_QuestionsEN.con_Memo:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsqa_QuestionsEN.con_PdfDivLet:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.pdfDivLet == null) return -1;
          if (a.pdfDivLet == null) return 1;
          return b.pdfDivLet.localeCompare(a.pdfDivLet);
        };
      case clsqa_QuestionsEN.con_PdfDivTop:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.pdfDivTop == null) return -1;
          if (a.pdfDivTop == null) return 1;
          return b.pdfDivTop.localeCompare(a.pdfDivTop);
        };
      case clsqa_QuestionsEN.con_PdfPageNumIn:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.pdfPageNumIn == null) return -1;
          if (a.pdfPageNumIn == null) return 1;
          return b.pdfPageNumIn.localeCompare(a.pdfPageNumIn);
        };
      case clsqa_QuestionsEN.con_PdfPageTop:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.pdfPageTop - a.pdfPageTop;
        };
      case clsqa_QuestionsEN.con_PdfZoom:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.pdfZoom == null) return -1;
          if (a.pdfZoom == null) return 1;
          return b.pdfZoom.localeCompare(a.pdfZoom);
        };
      case clsqa_QuestionsEN.con_PaperId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsqa_QuestionsEN.con_UserId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsqa_QuestionsEN.con_QuestionsTypeId:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.questionsTypeId == null) return -1;
          if (a.questionsTypeId == null) return 1;
          return b.questionsTypeId.localeCompare(a.questionsTypeId);
        };
      case clsqa_QuestionsEN.con_DiscussCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.discussCount - a.discussCount;
        };
      case clsqa_QuestionsEN.con_GroupDiscussCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.groupDiscussCount - a.groupDiscussCount;
        };
      case clsqa_QuestionsEN.con_RecommendAnswerCount:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          return b.recommendAnswerCount - a.recommendAnswerCount;
        };
      case clsqa_QuestionsEN.con_CreateDate:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsqa_QuestionsEN.con_IdCurrEduCls:
        return (a: clsqa_QuestionsEN, b: clsqa_QuestionsEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[qa_Questions]中不存在!(in ${qa_Questions_ConstructorName}.${strThisFuncName})`;
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
export async function qa_Questions_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsqa_QuestionsEN.con_QuestionsId:
      return (obj: clsqa_QuestionsEN) => {
        return obj.questionsId === value;
      };
    case clsqa_QuestionsEN.con_QaPaperId:
      return (obj: clsqa_QuestionsEN) => {
        return obj.qaPaperId === value;
      };
    case clsqa_QuestionsEN.con_QuestionsContent:
      return (obj: clsqa_QuestionsEN) => {
        return obj.questionsContent === value;
      };
    case clsqa_QuestionsEN.con_PdfContent:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfContent === value;
      };
    case clsqa_QuestionsEN.con_PdfPageNum:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfPageNum === value;
      };
    case clsqa_QuestionsEN.con_IsDelete:
      return (obj: clsqa_QuestionsEN) => {
        return obj.isDelete === value;
      };
    case clsqa_QuestionsEN.con_IsPublic:
      return (obj: clsqa_QuestionsEN) => {
        return obj.isPublic === value;
      };
    case clsqa_QuestionsEN.con_IsEnd:
      return (obj: clsqa_QuestionsEN) => {
        return obj.isEnd === value;
      };
    case clsqa_QuestionsEN.con_VoteCount:
      return (obj: clsqa_QuestionsEN) => {
        return obj.voteCount === value;
      };
    case clsqa_QuestionsEN.con_AnswerCount:
      return (obj: clsqa_QuestionsEN) => {
        return obj.answerCount === value;
      };
    case clsqa_QuestionsEN.con_OrderNum:
      return (obj: clsqa_QuestionsEN) => {
        return obj.orderNum === value;
      };
    case clsqa_QuestionsEN.con_UpdUser:
      return (obj: clsqa_QuestionsEN) => {
        return obj.updUser === value;
      };
    case clsqa_QuestionsEN.con_UpdDate:
      return (obj: clsqa_QuestionsEN) => {
        return obj.updDate === value;
      };
    case clsqa_QuestionsEN.con_Memo:
      return (obj: clsqa_QuestionsEN) => {
        return obj.memo === value;
      };
    case clsqa_QuestionsEN.con_PdfDivLet:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfDivLet === value;
      };
    case clsqa_QuestionsEN.con_PdfDivTop:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfDivTop === value;
      };
    case clsqa_QuestionsEN.con_PdfPageNumIn:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfPageNumIn === value;
      };
    case clsqa_QuestionsEN.con_PdfPageTop:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfPageTop === value;
      };
    case clsqa_QuestionsEN.con_PdfZoom:
      return (obj: clsqa_QuestionsEN) => {
        return obj.pdfZoom === value;
      };
    case clsqa_QuestionsEN.con_PaperId:
      return (obj: clsqa_QuestionsEN) => {
        return obj.paperId === value;
      };
    case clsqa_QuestionsEN.con_UserId:
      return (obj: clsqa_QuestionsEN) => {
        return obj.userId === value;
      };
    case clsqa_QuestionsEN.con_QuestionsTypeId:
      return (obj: clsqa_QuestionsEN) => {
        return obj.questionsTypeId === value;
      };
    case clsqa_QuestionsEN.con_DiscussCount:
      return (obj: clsqa_QuestionsEN) => {
        return obj.discussCount === value;
      };
    case clsqa_QuestionsEN.con_GroupDiscussCount:
      return (obj: clsqa_QuestionsEN) => {
        return obj.groupDiscussCount === value;
      };
    case clsqa_QuestionsEN.con_RecommendAnswerCount:
      return (obj: clsqa_QuestionsEN) => {
        return obj.recommendAnswerCount === value;
      };
    case clsqa_QuestionsEN.con_CreateDate:
      return (obj: clsqa_QuestionsEN) => {
        return obj.createDate === value;
      };
    case clsqa_QuestionsEN.con_IdCurrEduCls:
      return (obj: clsqa_QuestionsEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[qa_Questions]中不存在!(in ${qa_Questions_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function qa_Questions_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsqa_QuestionsEN.con_QuestionsId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrqa_Questions = await qa_Questions_GetObjLstCache();
  if (arrqa_Questions == null) return [];
  let arrqa_QuestionsSel = arrqa_Questions;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrqa_QuestionsSel.length == 0) return [];
  return arrqa_QuestionsSel.map((x) => x.questionsId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function qa_Questions_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function qa_Questions_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function qa_Questions_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsqa_QuestionsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objqa_Questions = qa_Questions_GetObjFromJsonObj(returnObj);
      return objqa_Questions;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsqa_QuestionsEN._CurrTabName;
  if (IsNullOrEmpty(clsqa_QuestionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsqa_QuestionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrqa_QuestionsExObjLstCache: Array<clsqa_QuestionsEN> = CacheHelper.Get(strKey);
    const arrqa_QuestionsObjLstT = qa_Questions_GetObjLstByJSONObjLst(arrqa_QuestionsExObjLstCache);
    return arrqa_QuestionsObjLstT;
  }
  try {
    const arrqa_QuestionsExObjLst = await qa_Questions_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrqa_QuestionsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrqa_QuestionsExObjLst.length,
    );
    console.log(strInfo);
    return arrqa_QuestionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsqa_QuestionsEN._CurrTabName;
  if (IsNullOrEmpty(clsqa_QuestionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsqa_QuestionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrqa_QuestionsExObjLstCache: Array<clsqa_QuestionsEN> = JSON.parse(strTempObjLst);
    const arrqa_QuestionsObjLstT = qa_Questions_GetObjLstByJSONObjLst(arrqa_QuestionsExObjLstCache);
    return arrqa_QuestionsObjLstT;
  }
  try {
    const arrqa_QuestionsExObjLst = await qa_Questions_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrqa_QuestionsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrqa_QuestionsExObjLst.length,
    );
    console.log(strInfo);
    return arrqa_QuestionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsqa_QuestionsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrqa_QuestionsObjLstCache: Array<clsqa_QuestionsEN> = JSON.parse(strTempObjLst);
    return arrqa_QuestionsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function qa_Questions_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Questions_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsqa_QuestionsEN._CurrTabName;
  if (IsNullOrEmpty(clsqa_QuestionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsqa_QuestionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrqa_QuestionsExObjLstCache: Array<clsqa_QuestionsEN> = JSON.parse(strTempObjLst);
    const arrqa_QuestionsObjLstT = qa_Questions_GetObjLstByJSONObjLst(arrqa_QuestionsExObjLstCache);
    return arrqa_QuestionsObjLstT;
  }
  try {
    const arrqa_QuestionsExObjLst = await qa_Questions_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrqa_QuestionsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrqa_QuestionsExObjLst.length,
    );
    console.log(strInfo);
    return arrqa_QuestionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsqa_QuestionsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrqa_QuestionsObjLstCache: Array<clsqa_QuestionsEN> = JSON.parse(strTempObjLst);
    return arrqa_QuestionsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstCache(): Promise<Array<clsqa_QuestionsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrqa_QuestionsObjLstCache;
  switch (clsqa_QuestionsEN.CacheModeId) {
    case '04': //sessionStorage
      arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstClientCache();
      break;
    default:
      arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstClientCache();
      break;
  }
  return arrqa_QuestionsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Questions_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrqa_QuestionsObjLstCache;
  switch (clsqa_QuestionsEN.CacheModeId) {
    case '04': //sessionStorage
      arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrqa_QuestionsObjLstCache = null;
      break;
    default:
      arrqa_QuestionsObjLstCache = null;
      break;
  }
  return arrqa_QuestionsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQuestionsIdCond:条件对象
 * @returns 对象列表子集
 */
export async function qa_Questions_GetSubObjLstCache(objqa_QuestionsCond: clsqa_QuestionsEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
  let arrqa_QuestionsSel = arrqa_QuestionsObjLstCache;
  if (objqa_QuestionsCond.sfFldComparisonOp == null || objqa_QuestionsCond.sfFldComparisonOp == '')
    return arrqa_QuestionsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objqa_QuestionsCond.sfFldComparisonOp,
  );
  //console.log("clsqa_QuestionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objqa_QuestionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrqa_QuestionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objqa_QuestionsCond),
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsqa_QuestionsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionsId:关键字列表
 * @returns 对象列表
 **/
export async function qa_Questions_GetObjLstByQuestionsIdLstAsync(
  arrQuestionsId: Array<string>,
): Promise<Array<clsqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstByQuestionsIdLstAsync';
  const strAction = 'GetObjLstByQuestionsIdLst';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrQuestionsId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Questions_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrQuestionsIdLst:关键字列表
 * @returns 对象列表
 */
export async function qa_Questions_GetObjLstByQuestionsIdLstCache(
  arrQuestionsIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByQuestionsIdLstCache';
  try {
    const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
    const arrqa_QuestionsSel = arrqa_QuestionsObjLstCache.filter(
      (x) => arrQuestionsIdLst.indexOf(x.questionsId) > -1,
    );
    return arrqa_QuestionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrQuestionsIdLst.join(','),
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
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
export async function qa_Questions_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsqa_QuestionsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Questions_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function qa_Questions_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Questions_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function qa_Questions_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsqa_QuestionsEN>();
  const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
  if (arrqa_QuestionsObjLstCache.length == 0) return arrqa_QuestionsObjLstCache;
  let arrqa_QuestionsSel = arrqa_QuestionsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objqa_QuestionsCond = new clsqa_QuestionsEN();
  ObjectAssign(objqa_QuestionsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsqa_QuestionsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrqa_QuestionsSel.length == 0) return arrqa_QuestionsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrqa_QuestionsSel = arrqa_QuestionsSel.sort(
        qa_Questions_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrqa_QuestionsSel = arrqa_QuestionsSel.sort(objPagerPara.sortFun);
    }
    arrqa_QuestionsSel = arrqa_QuestionsSel.slice(intStart, intEnd);
    return arrqa_QuestionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsqa_QuestionsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function qa_Questions_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsqa_QuestionsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Questions_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strQuestionsId:关键字
 * @returns 获取删除的结果
 **/
export async function qa_Questions_DelRecordAsync(strQuestionsId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strQuestionsId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrQuestionsId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function qa_Questions_Delqa_QuestionssAsync(
  arrQuestionsId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delqa_QuestionssAsync';
  const strAction = 'Delqa_Questionss';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrQuestionsId, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function qa_Questions_Delqa_QuestionssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delqa_QuestionssByCondAsync';
  const strAction = 'Delqa_QuestionssByCond';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_AddNewRecordAsync(
  objqa_QuestionsEN: clsqa_QuestionsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objqa_QuestionsEN);
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_QuestionsEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_AddNewRecordWithMaxIdAsync(
  objqa_QuestionsEN: clsqa_QuestionsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_QuestionsEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objqa_QuestionsEN);
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objqa_QuestionsEN);
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objqa_QuestionsEN);
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Questions_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objqa_QuestionsEN);
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objqa_QuestionsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function qa_Questions_AddNewRecordWithReturnKeyAsync(
  objqa_QuestionsEN: clsqa_QuestionsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_QuestionsEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objqa_QuestionsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function qa_Questions_UpdateRecordAsync(
  objqa_QuestionsEN: clsqa_QuestionsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objqa_QuestionsEN.sfUpdFldSetStr === undefined ||
    objqa_QuestionsEN.sfUpdFldSetStr === null ||
    objqa_QuestionsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objqa_QuestionsEN.questionsId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_QuestionsEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objqa_QuestionsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function qa_Questions_UpdateWithConditionAsync(
  objqa_QuestionsEN: clsqa_QuestionsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objqa_QuestionsEN.sfUpdFldSetStr === undefined ||
    objqa_QuestionsEN.sfUpdFldSetStr === null ||
    objqa_QuestionsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objqa_QuestionsEN.questionsId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);
  objqa_QuestionsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_QuestionsEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrQuestionsIdCond:条件对象
 * @returns 对象列表子集
 */
export async function qa_Questions_IsExistRecordCache(objqa_QuestionsCond: clsqa_QuestionsEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
  if (arrqa_QuestionsObjLstCache == null) return false;
  let arrqa_QuestionsSel = arrqa_QuestionsObjLstCache;
  if (objqa_QuestionsCond.sfFldComparisonOp == null || objqa_QuestionsCond.sfFldComparisonOp == '')
    return arrqa_QuestionsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objqa_QuestionsCond.sfFldComparisonOp,
  );
  //console.log("clsqa_QuestionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objqa_QuestionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrqa_QuestionsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objqa_QuestionsCond),
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
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
export async function qa_Questions_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strQuestionsId:所给的关键字
 * @returns 对象
 */
export async function qa_Questions_IsExistCache(strQuestionsId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
  if (arrqa_QuestionsObjLstCache == null) return false;
  try {
    const arrqa_QuestionsSel = arrqa_QuestionsObjLstCache.filter(
      (x) => x.questionsId == strQuestionsId,
    );
    if (arrqa_QuestionsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strQuestionsId,
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strQuestionsId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function qa_Questions_IsExistAsync(strQuestionsId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strQuestionsId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function qa_Questions_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objqa_QuestionsCond:条件对象
 * @returns 对象列表记录数
 */
export async function qa_Questions_GetRecCountByCondCache(objqa_QuestionsCond: clsqa_QuestionsEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrqa_QuestionsObjLstCache = await qa_Questions_GetObjLstCache();
  if (arrqa_QuestionsObjLstCache == null) return 0;
  let arrqa_QuestionsSel = arrqa_QuestionsObjLstCache;
  if (objqa_QuestionsCond.sfFldComparisonOp == null || objqa_QuestionsCond.sfFldComparisonOp == '')
    return arrqa_QuestionsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objqa_QuestionsCond.sfFldComparisonOp,
  );
  //console.log("clsqa_QuestionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objqa_QuestionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_QuestionsSel = arrqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrqa_QuestionsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objqa_QuestionsCond),
      qa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function qa_Questions_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
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
export async function qa_Questions_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qa_Questions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function qa_Questions_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function qa_Questions_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsqa_QuestionsEN._CurrTabName;
  switch (clsqa_QuestionsEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
  vqa_Questions_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function qa_Questions_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsqa_QuestionsEN._CurrTabName;
    switch (clsqa_QuestionsEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
  }
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function qa_Questions_CheckPropertyNew(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsId) == false &&
    GetStrLen(pobjqa_QuestionsEN.questionsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[提问Id(questionsId)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.questionsId)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.qaPaperId) == false &&
    GetStrLen(pobjqa_QuestionsEN.qaPaperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文答疑Id(qaPaperId)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.qaPaperId)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsContent) == false &&
    GetStrLen(pobjqa_QuestionsEN.questionsContent) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[提问内容(questionsContent)]的长度不能超过1000(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.questionsContent)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfContent) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfContent)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updUser) == false &&
    GetStrLen(pobjqa_QuestionsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.updUser)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updDate) == false &&
    GetStrLen(pobjqa_QuestionsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.updDate)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.memo) == false &&
    GetStrLen(pobjqa_QuestionsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.memo)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivLet) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfDivLet) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[PdfDivLet(pdfDivLet)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfDivLet)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivTop) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfDivTop) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[PdfDivTop(pdfDivTop)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfDivTop)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfPageNumIn) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfPageNumIn) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[PdfPageNumIn(pdfPageNumIn)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfPageNumIn)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfZoom) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfZoom) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[PdfZoom(pdfZoom)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfZoom)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.paperId) == false &&
    GetStrLen(pobjqa_QuestionsEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.paperId)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.userId) == false &&
    GetStrLen(pobjqa_QuestionsEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.userId)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsTypeId) == false &&
    GetStrLen(pobjqa_QuestionsEN.questionsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[问题类型Id(questionsTypeId)]的长度不能超过2(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.questionsTypeId)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.createDate) == false &&
    GetStrLen(pobjqa_QuestionsEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.createDate)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.idCurrEduCls) == false &&
    GetStrLen(pobjqa_QuestionsEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.idCurrEduCls)(clsqa_QuestionsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsId) == false &&
    undefined !== pobjqa_QuestionsEN.questionsId &&
    tzDataType.isString(pobjqa_QuestionsEN.questionsId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[提问Id(questionsId)]的值:[$(pobjqa_QuestionsEN.questionsId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.qaPaperId) == false &&
    undefined !== pobjqa_QuestionsEN.qaPaperId &&
    tzDataType.isString(pobjqa_QuestionsEN.qaPaperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文答疑Id(qaPaperId)]的值:[$(pobjqa_QuestionsEN.qaPaperId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsContent) == false &&
    undefined !== pobjqa_QuestionsEN.questionsContent &&
    tzDataType.isString(pobjqa_QuestionsEN.questionsContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[提问内容(questionsContent)]的值:[$(pobjqa_QuestionsEN.questionsContent)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfContent) == false &&
    undefined !== pobjqa_QuestionsEN.pdfContent &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Pdf内容(pdfContent)]的值:[$(pobjqa_QuestionsEN.pdfContent)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.pdfPageNum &&
    undefined !== pobjqa_QuestionsEN.pdfPageNum &&
    tzDataType.isNumber(pobjqa_QuestionsEN.pdfPageNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Pdf页码(pdfPageNum)]的值:[$(pobjqa_QuestionsEN.pdfPageNum)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.isDelete &&
    undefined !== pobjqa_QuestionsEN.isDelete &&
    tzDataType.isBoolean(pobjqa_QuestionsEN.isDelete) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否删除(isDelete)]的值:[$(pobjqa_QuestionsEN.isDelete)], 非法,应该为布尔型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.isPublic &&
    undefined !== pobjqa_QuestionsEN.isPublic &&
    tzDataType.isBoolean(pobjqa_QuestionsEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否公开(isPublic)]的值:[$(pobjqa_QuestionsEN.isPublic)], 非法,应该为布尔型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.isEnd &&
    undefined !== pobjqa_QuestionsEN.isEnd &&
    tzDataType.isBoolean(pobjqa_QuestionsEN.isEnd) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否结束(isEnd)]的值:[$(pobjqa_QuestionsEN.isEnd)], 非法,应该为布尔型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.voteCount &&
    undefined !== pobjqa_QuestionsEN.voteCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.voteCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞计数(voteCount)]的值:[$(pobjqa_QuestionsEN.voteCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.answerCount &&
    undefined !== pobjqa_QuestionsEN.answerCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.answerCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[回答计数(answerCount)]的值:[$(pobjqa_QuestionsEN.answerCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.orderNum &&
    undefined !== pobjqa_QuestionsEN.orderNum &&
    tzDataType.isNumber(pobjqa_QuestionsEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjqa_QuestionsEN.orderNum)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updUser) == false &&
    undefined !== pobjqa_QuestionsEN.updUser &&
    tzDataType.isString(pobjqa_QuestionsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjqa_QuestionsEN.updUser)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updDate) == false &&
    undefined !== pobjqa_QuestionsEN.updDate &&
    tzDataType.isString(pobjqa_QuestionsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjqa_QuestionsEN.updDate)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.memo) == false &&
    undefined !== pobjqa_QuestionsEN.memo &&
    tzDataType.isString(pobjqa_QuestionsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjqa_QuestionsEN.memo)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivLet) == false &&
    undefined !== pobjqa_QuestionsEN.pdfDivLet &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfDivLet) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[PdfDivLet(pdfDivLet)]的值:[$(pobjqa_QuestionsEN.pdfDivLet)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivTop) == false &&
    undefined !== pobjqa_QuestionsEN.pdfDivTop &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfDivTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[PdfDivTop(pdfDivTop)]的值:[$(pobjqa_QuestionsEN.pdfDivTop)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfPageNumIn) == false &&
    undefined !== pobjqa_QuestionsEN.pdfPageNumIn &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfPageNumIn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[PdfPageNumIn(pdfPageNumIn)]的值:[$(pobjqa_QuestionsEN.pdfPageNumIn)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.pdfPageTop &&
    undefined !== pobjqa_QuestionsEN.pdfPageTop &&
    tzDataType.isNumber(pobjqa_QuestionsEN.pdfPageTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[pdf页面顶部位置(pdfPageTop)]的值:[$(pobjqa_QuestionsEN.pdfPageTop)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfZoom) == false &&
    undefined !== pobjqa_QuestionsEN.pdfZoom &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfZoom) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[PdfZoom(pdfZoom)]的值:[$(pobjqa_QuestionsEN.pdfZoom)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.paperId) == false &&
    undefined !== pobjqa_QuestionsEN.paperId &&
    tzDataType.isString(pobjqa_QuestionsEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjqa_QuestionsEN.paperId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.userId) == false &&
    undefined !== pobjqa_QuestionsEN.userId &&
    tzDataType.isString(pobjqa_QuestionsEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjqa_QuestionsEN.userId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsTypeId) == false &&
    undefined !== pobjqa_QuestionsEN.questionsTypeId &&
    tzDataType.isString(pobjqa_QuestionsEN.questionsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[问题类型Id(questionsTypeId)]的值:[$(pobjqa_QuestionsEN.questionsTypeId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.discussCount &&
    undefined !== pobjqa_QuestionsEN.discussCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.discussCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DiscussCount(discussCount)]的值:[$(pobjqa_QuestionsEN.discussCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.groupDiscussCount &&
    undefined !== pobjqa_QuestionsEN.groupDiscussCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.groupDiscussCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GroupDiscussCount(groupDiscussCount)]的值:[$(pobjqa_QuestionsEN.groupDiscussCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.recommendAnswerCount &&
    undefined !== pobjqa_QuestionsEN.recommendAnswerCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.recommendAnswerCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[RecommendAnswerCount(recommendAnswerCount)]的值:[$(pobjqa_QuestionsEN.recommendAnswerCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.createDate) == false &&
    undefined !== pobjqa_QuestionsEN.createDate &&
    tzDataType.isString(pobjqa_QuestionsEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjqa_QuestionsEN.createDate)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.idCurrEduCls) == false &&
    undefined !== pobjqa_QuestionsEN.idCurrEduCls &&
    tzDataType.isString(pobjqa_QuestionsEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjqa_QuestionsEN.idCurrEduCls)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function qa_Questions_CheckProperty4Update(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsId) == false &&
    GetStrLen(pobjqa_QuestionsEN.questionsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[提问Id(questionsId)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.questionsId)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.qaPaperId) == false &&
    GetStrLen(pobjqa_QuestionsEN.qaPaperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文答疑Id(qaPaperId)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.qaPaperId)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsContent) == false &&
    GetStrLen(pobjqa_QuestionsEN.questionsContent) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[提问内容(questionsContent)]的长度不能超过1000(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.questionsContent)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfContent) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfContent) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Pdf内容(pdfContent)]的长度不能超过2000(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfContent)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updUser) == false &&
    GetStrLen(pobjqa_QuestionsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.updUser)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updDate) == false &&
    GetStrLen(pobjqa_QuestionsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.updDate)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.memo) == false &&
    GetStrLen(pobjqa_QuestionsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.memo)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivLet) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfDivLet) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[PdfDivLet(pdfDivLet)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfDivLet)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivTop) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfDivTop) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[PdfDivTop(pdfDivTop)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfDivTop)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfPageNumIn) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfPageNumIn) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[PdfPageNumIn(pdfPageNumIn)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfPageNumIn)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfZoom) == false &&
    GetStrLen(pobjqa_QuestionsEN.pdfZoom) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[PdfZoom(pdfZoom)]的长度不能超过50(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.pdfZoom)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.paperId) == false &&
    GetStrLen(pobjqa_QuestionsEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.paperId)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.userId) == false &&
    GetStrLen(pobjqa_QuestionsEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.userId)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsTypeId) == false &&
    GetStrLen(pobjqa_QuestionsEN.questionsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[问题类型Id(questionsTypeId)]的长度不能超过2(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.questionsTypeId)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.createDate) == false &&
    GetStrLen(pobjqa_QuestionsEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.createDate)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.idCurrEduCls) == false &&
    GetStrLen(pobjqa_QuestionsEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 答疑提问表(qa_Questions))!值:$(pobjqa_QuestionsEN.idCurrEduCls)(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsId) == false &&
    undefined !== pobjqa_QuestionsEN.questionsId &&
    tzDataType.isString(pobjqa_QuestionsEN.questionsId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[提问Id(questionsId)]的值:[$(pobjqa_QuestionsEN.questionsId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.qaPaperId) == false &&
    undefined !== pobjqa_QuestionsEN.qaPaperId &&
    tzDataType.isString(pobjqa_QuestionsEN.qaPaperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文答疑Id(qaPaperId)]的值:[$(pobjqa_QuestionsEN.qaPaperId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsContent) == false &&
    undefined !== pobjqa_QuestionsEN.questionsContent &&
    tzDataType.isString(pobjqa_QuestionsEN.questionsContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[提问内容(questionsContent)]的值:[$(pobjqa_QuestionsEN.questionsContent)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfContent) == false &&
    undefined !== pobjqa_QuestionsEN.pdfContent &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Pdf内容(pdfContent)]的值:[$(pobjqa_QuestionsEN.pdfContent)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.pdfPageNum &&
    undefined !== pobjqa_QuestionsEN.pdfPageNum &&
    tzDataType.isNumber(pobjqa_QuestionsEN.pdfPageNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Pdf页码(pdfPageNum)]的值:[$(pobjqa_QuestionsEN.pdfPageNum)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.isDelete &&
    undefined !== pobjqa_QuestionsEN.isDelete &&
    tzDataType.isBoolean(pobjqa_QuestionsEN.isDelete) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否删除(isDelete)]的值:[$(pobjqa_QuestionsEN.isDelete)], 非法,应该为布尔型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.isPublic &&
    undefined !== pobjqa_QuestionsEN.isPublic &&
    tzDataType.isBoolean(pobjqa_QuestionsEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否公开(isPublic)]的值:[$(pobjqa_QuestionsEN.isPublic)], 非法,应该为布尔型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.isEnd &&
    undefined !== pobjqa_QuestionsEN.isEnd &&
    tzDataType.isBoolean(pobjqa_QuestionsEN.isEnd) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否结束(isEnd)]的值:[$(pobjqa_QuestionsEN.isEnd)], 非法,应该为布尔型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.voteCount &&
    undefined !== pobjqa_QuestionsEN.voteCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.voteCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞计数(voteCount)]的值:[$(pobjqa_QuestionsEN.voteCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.answerCount &&
    undefined !== pobjqa_QuestionsEN.answerCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.answerCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[回答计数(answerCount)]的值:[$(pobjqa_QuestionsEN.answerCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.orderNum &&
    undefined !== pobjqa_QuestionsEN.orderNum &&
    tzDataType.isNumber(pobjqa_QuestionsEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjqa_QuestionsEN.orderNum)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updUser) == false &&
    undefined !== pobjqa_QuestionsEN.updUser &&
    tzDataType.isString(pobjqa_QuestionsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjqa_QuestionsEN.updUser)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.updDate) == false &&
    undefined !== pobjqa_QuestionsEN.updDate &&
    tzDataType.isString(pobjqa_QuestionsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjqa_QuestionsEN.updDate)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.memo) == false &&
    undefined !== pobjqa_QuestionsEN.memo &&
    tzDataType.isString(pobjqa_QuestionsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjqa_QuestionsEN.memo)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivLet) == false &&
    undefined !== pobjqa_QuestionsEN.pdfDivLet &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfDivLet) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[PdfDivLet(pdfDivLet)]的值:[$(pobjqa_QuestionsEN.pdfDivLet)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfDivTop) == false &&
    undefined !== pobjqa_QuestionsEN.pdfDivTop &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfDivTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[PdfDivTop(pdfDivTop)]的值:[$(pobjqa_QuestionsEN.pdfDivTop)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfPageNumIn) == false &&
    undefined !== pobjqa_QuestionsEN.pdfPageNumIn &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfPageNumIn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[PdfPageNumIn(pdfPageNumIn)]的值:[$(pobjqa_QuestionsEN.pdfPageNumIn)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.pdfPageTop &&
    undefined !== pobjqa_QuestionsEN.pdfPageTop &&
    tzDataType.isNumber(pobjqa_QuestionsEN.pdfPageTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[pdf页面顶部位置(pdfPageTop)]的值:[$(pobjqa_QuestionsEN.pdfPageTop)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.pdfZoom) == false &&
    undefined !== pobjqa_QuestionsEN.pdfZoom &&
    tzDataType.isString(pobjqa_QuestionsEN.pdfZoom) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[PdfZoom(pdfZoom)]的值:[$(pobjqa_QuestionsEN.pdfZoom)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.paperId) == false &&
    undefined !== pobjqa_QuestionsEN.paperId &&
    tzDataType.isString(pobjqa_QuestionsEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjqa_QuestionsEN.paperId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.userId) == false &&
    undefined !== pobjqa_QuestionsEN.userId &&
    tzDataType.isString(pobjqa_QuestionsEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjqa_QuestionsEN.userId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.questionsTypeId) == false &&
    undefined !== pobjqa_QuestionsEN.questionsTypeId &&
    tzDataType.isString(pobjqa_QuestionsEN.questionsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[问题类型Id(questionsTypeId)]的值:[$(pobjqa_QuestionsEN.questionsTypeId)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.discussCount &&
    undefined !== pobjqa_QuestionsEN.discussCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.discussCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DiscussCount(discussCount)]的值:[$(pobjqa_QuestionsEN.discussCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.groupDiscussCount &&
    undefined !== pobjqa_QuestionsEN.groupDiscussCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.groupDiscussCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GroupDiscussCount(groupDiscussCount)]的值:[$(pobjqa_QuestionsEN.groupDiscussCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_QuestionsEN.recommendAnswerCount &&
    undefined !== pobjqa_QuestionsEN.recommendAnswerCount &&
    tzDataType.isNumber(pobjqa_QuestionsEN.recommendAnswerCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[RecommendAnswerCount(recommendAnswerCount)]的值:[$(pobjqa_QuestionsEN.recommendAnswerCount)], 非法,应该为数值型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.createDate) == false &&
    undefined !== pobjqa_QuestionsEN.createDate &&
    tzDataType.isString(pobjqa_QuestionsEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjqa_QuestionsEN.createDate)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_QuestionsEN.idCurrEduCls) == false &&
    undefined !== pobjqa_QuestionsEN.idCurrEduCls &&
    tzDataType.isString(pobjqa_QuestionsEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjqa_QuestionsEN.idCurrEduCls)], 非法,应该为字符型(In 答疑提问表(qa_Questions))!(clsqa_QuestionsBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function qa_Questions_GetJSONStrByObj(pobjqa_QuestionsEN: clsqa_QuestionsEN): string {
  pobjqa_QuestionsEN.sfUpdFldSetStr = pobjqa_QuestionsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjqa_QuestionsEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
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
export function qa_Questions_GetObjLstByJSONStr(strJSON: string): Array<clsqa_QuestionsEN> {
  let arrqa_QuestionsObjLst = new Array<clsqa_QuestionsEN>();
  if (strJSON === '') {
    return arrqa_QuestionsObjLst;
  }
  try {
    arrqa_QuestionsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrqa_QuestionsObjLst;
  }
  return arrqa_QuestionsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrqa_QuestionsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function qa_Questions_GetObjLstByJSONObjLst(
  arrqa_QuestionsObjLstS: Array<clsqa_QuestionsEN>,
): Array<clsqa_QuestionsEN> {
  const arrqa_QuestionsObjLst = new Array<clsqa_QuestionsEN>();
  for (const objInFor of arrqa_QuestionsObjLstS) {
    const obj1 = qa_Questions_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrqa_QuestionsObjLst.push(obj1);
  }
  return arrqa_QuestionsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function qa_Questions_GetObjByJSONStr(strJSON: string): clsqa_QuestionsEN {
  let pobjqa_QuestionsEN = new clsqa_QuestionsEN();
  if (strJSON === '') {
    return pobjqa_QuestionsEN;
  }
  try {
    pobjqa_QuestionsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjqa_QuestionsEN;
  }
  return pobjqa_QuestionsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function qa_Questions_GetCombineCondition(objqa_QuestionsCond: clsqa_QuestionsEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_QuestionsId,
    ) == true
  ) {
    const strComparisonOpQuestionsId: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_QuestionsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_QuestionsId,
      objqa_QuestionsCond.questionsId,
      strComparisonOpQuestionsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_QaPaperId,
    ) == true
  ) {
    const strComparisonOpQaPaperId: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_QaPaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_QaPaperId,
      objqa_QuestionsCond.qaPaperId,
      strComparisonOpQaPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_QuestionsContent,
    ) == true
  ) {
    const strComparisonOpQuestionsContent: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_QuestionsContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_QuestionsContent,
      objqa_QuestionsCond.questionsContent,
      strComparisonOpQuestionsContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_PdfContent,
      objqa_QuestionsCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_PdfPageNum,
      objqa_QuestionsCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_IsDelete,
    ) == true
  ) {
    if (objqa_QuestionsCond.isDelete == true) {
      strWhereCond += Format(" And {0} = '1'", clsqa_QuestionsEN.con_IsDelete);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsqa_QuestionsEN.con_IsDelete);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_IsPublic,
    ) == true
  ) {
    if (objqa_QuestionsCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsqa_QuestionsEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsqa_QuestionsEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_IsEnd,
    ) == true
  ) {
    if (objqa_QuestionsCond.isEnd == true) {
      strWhereCond += Format(" And {0} = '1'", clsqa_QuestionsEN.con_IsEnd);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsqa_QuestionsEN.con_IsEnd);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_VoteCount,
    ) == true
  ) {
    const strComparisonOpVoteCount: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_VoteCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_VoteCount,
      objqa_QuestionsCond.voteCount,
      strComparisonOpVoteCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_AnswerCount,
    ) == true
  ) {
    const strComparisonOpAnswerCount: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_AnswerCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_AnswerCount,
      objqa_QuestionsCond.answerCount,
      strComparisonOpAnswerCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_OrderNum,
      objqa_QuestionsCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_UpdUser,
      objqa_QuestionsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_UpdDate,
      objqa_QuestionsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_Memo,
      objqa_QuestionsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfDivLet,
    ) == true
  ) {
    const strComparisonOpPdfDivLet: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfDivLet];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_PdfDivLet,
      objqa_QuestionsCond.pdfDivLet,
      strComparisonOpPdfDivLet,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfDivTop,
    ) == true
  ) {
    const strComparisonOpPdfDivTop: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfDivTop];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_PdfDivTop,
      objqa_QuestionsCond.pdfDivTop,
      strComparisonOpPdfDivTop,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfPageNumIn,
    ) == true
  ) {
    const strComparisonOpPdfPageNumIn: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfPageNumIn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_PdfPageNumIn,
      objqa_QuestionsCond.pdfPageNumIn,
      strComparisonOpPdfPageNumIn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfPageTop,
    ) == true
  ) {
    const strComparisonOpPdfPageTop: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfPageTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_PdfPageTop,
      objqa_QuestionsCond.pdfPageTop,
      strComparisonOpPdfPageTop,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PdfZoom,
    ) == true
  ) {
    const strComparisonOpPdfZoom: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PdfZoom];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_PdfZoom,
      objqa_QuestionsCond.pdfZoom,
      strComparisonOpPdfZoom,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_PaperId,
      objqa_QuestionsCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_UserId,
      objqa_QuestionsCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_QuestionsTypeId,
    ) == true
  ) {
    const strComparisonOpQuestionsTypeId: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_QuestionsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_QuestionsTypeId,
      objqa_QuestionsCond.questionsTypeId,
      strComparisonOpQuestionsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_DiscussCount,
    ) == true
  ) {
    const strComparisonOpDiscussCount: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_DiscussCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_DiscussCount,
      objqa_QuestionsCond.discussCount,
      strComparisonOpDiscussCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_GroupDiscussCount,
    ) == true
  ) {
    const strComparisonOpGroupDiscussCount: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_GroupDiscussCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_GroupDiscussCount,
      objqa_QuestionsCond.groupDiscussCount,
      strComparisonOpGroupDiscussCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_RecommendAnswerCount,
    ) == true
  ) {
    const strComparisonOpRecommendAnswerCount: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_RecommendAnswerCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_QuestionsEN.con_RecommendAnswerCount,
      objqa_QuestionsCond.recommendAnswerCount,
      strComparisonOpRecommendAnswerCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_CreateDate,
      objqa_QuestionsCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_QuestionsCond.dicFldComparisonOp,
      clsqa_QuestionsEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objqa_QuestionsCond.dicFldComparisonOp[clsqa_QuestionsEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_QuestionsEN.con_IdCurrEduCls,
      objqa_QuestionsCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--qa_Questions(答疑提问表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQuestionsId: 提问Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function qa_Questions_GetUniCondStr(objqa_QuestionsEN: clsqa_QuestionsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and QuestionsId = '{0}'", objqa_QuestionsEN.questionsId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--qa_Questions(答疑提问表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQuestionsId: 提问Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function qa_Questions_GetUniCondStr4Update(objqa_QuestionsEN: clsqa_QuestionsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and QuestionsId <> '{0}'", objqa_QuestionsEN.questionsId);
  strWhereCond += Format(" and QuestionsId = '{0}'", objqa_QuestionsEN.questionsId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objqa_QuestionsENS:源对象
 * @param objqa_QuestionsENT:目标对象
 */
export function qa_Questions_CopyObjTo(
  objqa_QuestionsENS: clsqa_QuestionsEN,
  objqa_QuestionsENT: clsqa_QuestionsEN,
): void {
  objqa_QuestionsENT.questionsId = objqa_QuestionsENS.questionsId; //提问Id
  objqa_QuestionsENT.qaPaperId = objqa_QuestionsENS.qaPaperId; //论文答疑Id
  objqa_QuestionsENT.questionsContent = objqa_QuestionsENS.questionsContent; //提问内容
  objqa_QuestionsENT.pdfContent = objqa_QuestionsENS.pdfContent; //Pdf内容
  objqa_QuestionsENT.pdfPageNum = objqa_QuestionsENS.pdfPageNum; //Pdf页码
  objqa_QuestionsENT.isDelete = objqa_QuestionsENS.isDelete; //是否删除
  objqa_QuestionsENT.isPublic = objqa_QuestionsENS.isPublic; //是否公开
  objqa_QuestionsENT.isEnd = objqa_QuestionsENS.isEnd; //是否结束
  objqa_QuestionsENT.voteCount = objqa_QuestionsENS.voteCount; //点赞计数
  objqa_QuestionsENT.answerCount = objqa_QuestionsENS.answerCount; //回答计数
  objqa_QuestionsENT.orderNum = objqa_QuestionsENS.orderNum; //序号
  objqa_QuestionsENT.updUser = objqa_QuestionsENS.updUser; //修改人
  objqa_QuestionsENT.updDate = objqa_QuestionsENS.updDate; //修改日期
  objqa_QuestionsENT.memo = objqa_QuestionsENS.memo; //备注
  objqa_QuestionsENT.pdfDivLet = objqa_QuestionsENS.pdfDivLet; //PdfDivLet
  objqa_QuestionsENT.pdfDivTop = objqa_QuestionsENS.pdfDivTop; //PdfDivTop
  objqa_QuestionsENT.pdfPageNumIn = objqa_QuestionsENS.pdfPageNumIn; //PdfPageNumIn
  objqa_QuestionsENT.pdfPageTop = objqa_QuestionsENS.pdfPageTop; //pdf页面顶部位置
  objqa_QuestionsENT.pdfZoom = objqa_QuestionsENS.pdfZoom; //PdfZoom
  objqa_QuestionsENT.paperId = objqa_QuestionsENS.paperId; //论文Id
  objqa_QuestionsENT.userId = objqa_QuestionsENS.userId; //用户ID
  objqa_QuestionsENT.questionsTypeId = objqa_QuestionsENS.questionsTypeId; //问题类型Id
  objqa_QuestionsENT.discussCount = objqa_QuestionsENS.discussCount; //DiscussCount
  objqa_QuestionsENT.groupDiscussCount = objqa_QuestionsENS.groupDiscussCount; //GroupDiscussCount
  objqa_QuestionsENT.recommendAnswerCount = objqa_QuestionsENS.recommendAnswerCount; //RecommendAnswerCount
  objqa_QuestionsENT.createDate = objqa_QuestionsENS.createDate; //建立日期
  objqa_QuestionsENT.idCurrEduCls = objqa_QuestionsENS.idCurrEduCls; //教学班流水号
  objqa_QuestionsENT.sfUpdFldSetStr = objqa_QuestionsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objqa_QuestionsENS:源对象
 * @param objqa_QuestionsENT:目标对象
 */
export function qa_Questions_GetObjFromJsonObj(
  objqa_QuestionsENS: clsqa_QuestionsEN,
): clsqa_QuestionsEN {
  const objqa_QuestionsENT: clsqa_QuestionsEN = new clsqa_QuestionsEN();
  ObjectAssign(objqa_QuestionsENT, objqa_QuestionsENS);
  return objqa_QuestionsENT;
}
