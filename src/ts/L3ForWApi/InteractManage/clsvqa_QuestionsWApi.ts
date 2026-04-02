/**
 * 类名:clsvqa_QuestionsWApi
 * 表名:vqa_Questions(01120636)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:06
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
 * v答疑提问(vqa_Questions)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vqa_Questions_Controller = 'vqa_QuestionsApi';
export const vqa_Questions_ConstructorName = 'vqa_Questions';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strQuestionsId:关键字
 * @returns 对象
 **/
export async function vqa_Questions_GetObjByQuestionsIdAsync(
  strQuestionsId: string,
): Promise<clsvqa_QuestionsEN | null> {
  const strThisFuncName = 'GetObjByQuestionsIdAsync';

  if (IsNullOrEmpty(strQuestionsId) == true) {
    const strMsg = Format(
      '参数:[strQuestionsId]不能为空!(In clsvqa_QuestionsWApi.GetObjByQuestionsIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQuestionsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQuestionsId]的长度:[{0}]不正确!(clsvqa_QuestionsWApi.GetObjByQuestionsIdAsync)',
      strQuestionsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByQuestionsId';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
      const objvqa_Questions = vqa_Questions_GetObjFromJsonObj(returnObj);
      return objvqa_Questions;
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjByQuestionsIdCache(
  strQuestionsId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByQuestionsIdCache';

  if (IsNullOrEmpty(strQuestionsId) == true) {
    const strMsg = Format(
      '参数:[strQuestionsId]不能为空!(In clsvqa_QuestionsWApi.GetObjByQuestionsIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQuestionsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQuestionsId]的长度:[{0}]不正确!(clsvqa_QuestionsWApi.GetObjByQuestionsIdCache)',
      strQuestionsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
  try {
    const arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache.filter(
      (x) => x.questionsId == strQuestionsId,
    );
    let objvqa_Questions: clsvqa_QuestionsEN;
    if (arrvqa_QuestionsSel.length > 0) {
      objvqa_Questions = arrvqa_QuestionsSel[0];
      return objvqa_Questions;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvqa_QuestionsConst = await vqa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
        if (objvqa_QuestionsConst != null) {
          vqa_Questions_ReFreshThisCache();
          return objvqa_QuestionsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQuestionsId,
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjByQuestionsIdlocalStorage(strQuestionsId: string) {
  const strThisFuncName = 'GetObjByQuestionsIdlocalStorage';

  if (IsNullOrEmpty(strQuestionsId) == true) {
    const strMsg = Format(
      '参数:[strQuestionsId]不能为空!(In clsvqa_QuestionsWApi.GetObjByQuestionsIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strQuestionsId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strQuestionsId]的长度:[{0}]不正确!(clsvqa_QuestionsWApi.GetObjByQuestionsIdlocalStorage)',
      strQuestionsId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvqa_QuestionsEN._CurrTabName, strQuestionsId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvqa_QuestionsCache: clsvqa_QuestionsEN = JSON.parse(strTempObj);
    return objvqa_QuestionsCache;
  }
  try {
    const objvqa_Questions = await vqa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
    if (objvqa_Questions != null) {
      localStorage.setItem(strKey, JSON.stringify(objvqa_Questions));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvqa_Questions;
    }
    return objvqa_Questions;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strQuestionsId,
      vqa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
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
export async function vqa_Questions_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvqa_QuestionsEN.con_QuestionsId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvqa_QuestionsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvqa_QuestionsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strQuestionsId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvqa_Questions = await vqa_Questions_GetObjByQuestionsIdCache(strQuestionsId);
  if (objvqa_Questions == null) return '';
  if (objvqa_Questions.GetFldValue(strOutFldName) == null) return '';
  return objvqa_Questions.GetFldValue(strOutFldName).toString();
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
export function vqa_Questions_SortFunDefa(a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN): number {
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
export function vqa_Questions_SortFunDefa2Fld(
  a: clsvqa_QuestionsEN,
  b: clsvqa_QuestionsEN,
): number {
  if (a.paperId == b.paperId) return a.qaPaperId.localeCompare(b.qaPaperId);
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
export function vqa_Questions_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvqa_QuestionsEN.con_QuestionsId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.questionsId.localeCompare(b.questionsId);
        };
      case clsvqa_QuestionsEN.con_PaperId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvqa_QuestionsEN.con_IsSubmit:
        return (a: clsvqa_QuestionsEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_QaPaperId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.qaPaperId.localeCompare(b.qaPaperId);
        };
      case clsvqa_QuestionsEN.con_QuestionsContent:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.questionsContent == null) return -1;
          if (b.questionsContent == null) return 1;
          return a.questionsContent.localeCompare(b.questionsContent);
        };
      case clsvqa_QuestionsEN.con_PdfContent:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.pdfContent == null) return -1;
          if (b.pdfContent == null) return 1;
          return a.pdfContent.localeCompare(b.pdfContent);
        };
      case clsvqa_QuestionsEN.con_PdfPageNum:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.pdfPageNum - b.pdfPageNum;
        };
      case clsvqa_QuestionsEN.con_IsDelete:
        return (a: clsvqa_QuestionsEN) => {
          if (a.isDelete == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_IsPublic:
        return (a: clsvqa_QuestionsEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_IsEnd:
        return (a: clsvqa_QuestionsEN) => {
          if (a.isEnd == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_VoteCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.voteCount - b.voteCount;
        };
      case clsvqa_QuestionsEN.con_AnswerCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.answerCount - b.answerCount;
        };
      case clsvqa_QuestionsEN.con_OrderNum:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvqa_QuestionsEN.con_UpdUser:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvqa_QuestionsEN.con_UpdDate:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvqa_QuestionsEN.con_Memo:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvqa_QuestionsEN.con_UserName:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvqa_QuestionsEN.con_IdCurrEduCls:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvqa_QuestionsEN.con_PaperTitle:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvqa_QuestionsEN.con_PdfDivLet:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.pdfDivLet == null) return -1;
          if (b.pdfDivLet == null) return 1;
          return a.pdfDivLet.localeCompare(b.pdfDivLet);
        };
      case clsvqa_QuestionsEN.con_PdfDivTop:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.pdfDivTop == null) return -1;
          if (b.pdfDivTop == null) return 1;
          return a.pdfDivTop.localeCompare(b.pdfDivTop);
        };
      case clsvqa_QuestionsEN.con_PdfPageNumIn:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.pdfPageNumIn == null) return -1;
          if (b.pdfPageNumIn == null) return 1;
          return a.pdfPageNumIn.localeCompare(b.pdfPageNumIn);
        };
      case clsvqa_QuestionsEN.con_PdfPageTop:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.pdfPageTop - b.pdfPageTop;
        };
      case clsvqa_QuestionsEN.con_PdfZoom:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.pdfZoom == null) return -1;
          if (b.pdfZoom == null) return 1;
          return a.pdfZoom.localeCompare(b.pdfZoom);
        };
      case clsvqa_QuestionsEN.con_UserId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvqa_QuestionsEN.con_QuestionsTypeId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.questionsTypeId == null) return -1;
          if (b.questionsTypeId == null) return 1;
          return a.questionsTypeId.localeCompare(b.questionsTypeId);
        };
      case clsvqa_QuestionsEN.con_QuestionsTypeName:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (a.questionsTypeName == null) return -1;
          if (b.questionsTypeName == null) return 1;
          return a.questionsTypeName.localeCompare(b.questionsTypeName);
        };
      case clsvqa_QuestionsEN.con_DiscussCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.discussCount - b.discussCount;
        };
      case clsvqa_QuestionsEN.con_GroupDiscussCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.groupDiscussCount - b.groupDiscussCount;
        };
      case clsvqa_QuestionsEN.con_RecommendAnswerCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return a.recommendAnswerCount - b.recommendAnswerCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vqa_Questions]中不存在!(in ${vqa_Questions_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvqa_QuestionsEN.con_QuestionsId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.questionsId.localeCompare(a.questionsId);
        };
      case clsvqa_QuestionsEN.con_PaperId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvqa_QuestionsEN.con_IsSubmit:
        return (b: clsvqa_QuestionsEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_QaPaperId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.qaPaperId.localeCompare(a.qaPaperId);
        };
      case clsvqa_QuestionsEN.con_QuestionsContent:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.questionsContent == null) return -1;
          if (a.questionsContent == null) return 1;
          return b.questionsContent.localeCompare(a.questionsContent);
        };
      case clsvqa_QuestionsEN.con_PdfContent:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.pdfContent == null) return -1;
          if (a.pdfContent == null) return 1;
          return b.pdfContent.localeCompare(a.pdfContent);
        };
      case clsvqa_QuestionsEN.con_PdfPageNum:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.pdfPageNum - a.pdfPageNum;
        };
      case clsvqa_QuestionsEN.con_IsDelete:
        return (b: clsvqa_QuestionsEN) => {
          if (b.isDelete == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_IsPublic:
        return (b: clsvqa_QuestionsEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_IsEnd:
        return (b: clsvqa_QuestionsEN) => {
          if (b.isEnd == true) return 1;
          else return -1;
        };
      case clsvqa_QuestionsEN.con_VoteCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.voteCount - a.voteCount;
        };
      case clsvqa_QuestionsEN.con_AnswerCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.answerCount - a.answerCount;
        };
      case clsvqa_QuestionsEN.con_OrderNum:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvqa_QuestionsEN.con_UpdUser:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvqa_QuestionsEN.con_UpdDate:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvqa_QuestionsEN.con_Memo:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvqa_QuestionsEN.con_UserName:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvqa_QuestionsEN.con_IdCurrEduCls:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvqa_QuestionsEN.con_PaperTitle:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvqa_QuestionsEN.con_PdfDivLet:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.pdfDivLet == null) return -1;
          if (a.pdfDivLet == null) return 1;
          return b.pdfDivLet.localeCompare(a.pdfDivLet);
        };
      case clsvqa_QuestionsEN.con_PdfDivTop:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.pdfDivTop == null) return -1;
          if (a.pdfDivTop == null) return 1;
          return b.pdfDivTop.localeCompare(a.pdfDivTop);
        };
      case clsvqa_QuestionsEN.con_PdfPageNumIn:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.pdfPageNumIn == null) return -1;
          if (a.pdfPageNumIn == null) return 1;
          return b.pdfPageNumIn.localeCompare(a.pdfPageNumIn);
        };
      case clsvqa_QuestionsEN.con_PdfPageTop:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.pdfPageTop - a.pdfPageTop;
        };
      case clsvqa_QuestionsEN.con_PdfZoom:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.pdfZoom == null) return -1;
          if (a.pdfZoom == null) return 1;
          return b.pdfZoom.localeCompare(a.pdfZoom);
        };
      case clsvqa_QuestionsEN.con_UserId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvqa_QuestionsEN.con_QuestionsTypeId:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.questionsTypeId == null) return -1;
          if (a.questionsTypeId == null) return 1;
          return b.questionsTypeId.localeCompare(a.questionsTypeId);
        };
      case clsvqa_QuestionsEN.con_QuestionsTypeName:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          if (b.questionsTypeName == null) return -1;
          if (a.questionsTypeName == null) return 1;
          return b.questionsTypeName.localeCompare(a.questionsTypeName);
        };
      case clsvqa_QuestionsEN.con_DiscussCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.discussCount - a.discussCount;
        };
      case clsvqa_QuestionsEN.con_GroupDiscussCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.groupDiscussCount - a.groupDiscussCount;
        };
      case clsvqa_QuestionsEN.con_RecommendAnswerCount:
        return (a: clsvqa_QuestionsEN, b: clsvqa_QuestionsEN) => {
          return b.recommendAnswerCount - a.recommendAnswerCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vqa_Questions]中不存在!(in ${vqa_Questions_ConstructorName}.${strThisFuncName})`;
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
export async function vqa_Questions_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvqa_QuestionsEN.con_QuestionsId:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.questionsId === value;
      };
    case clsvqa_QuestionsEN.con_PaperId:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.paperId === value;
      };
    case clsvqa_QuestionsEN.con_IsSubmit:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.isSubmit === value;
      };
    case clsvqa_QuestionsEN.con_QaPaperId:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.qaPaperId === value;
      };
    case clsvqa_QuestionsEN.con_QuestionsContent:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.questionsContent === value;
      };
    case clsvqa_QuestionsEN.con_PdfContent:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfContent === value;
      };
    case clsvqa_QuestionsEN.con_PdfPageNum:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfPageNum === value;
      };
    case clsvqa_QuestionsEN.con_IsDelete:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.isDelete === value;
      };
    case clsvqa_QuestionsEN.con_IsPublic:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.isPublic === value;
      };
    case clsvqa_QuestionsEN.con_IsEnd:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.isEnd === value;
      };
    case clsvqa_QuestionsEN.con_VoteCount:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.voteCount === value;
      };
    case clsvqa_QuestionsEN.con_AnswerCount:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.answerCount === value;
      };
    case clsvqa_QuestionsEN.con_OrderNum:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.orderNum === value;
      };
    case clsvqa_QuestionsEN.con_UpdUser:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.updUser === value;
      };
    case clsvqa_QuestionsEN.con_UpdDate:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.updDate === value;
      };
    case clsvqa_QuestionsEN.con_Memo:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.memo === value;
      };
    case clsvqa_QuestionsEN.con_UserName:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.userName === value;
      };
    case clsvqa_QuestionsEN.con_IdCurrEduCls:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvqa_QuestionsEN.con_PaperTitle:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.paperTitle === value;
      };
    case clsvqa_QuestionsEN.con_PdfDivLet:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfDivLet === value;
      };
    case clsvqa_QuestionsEN.con_PdfDivTop:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfDivTop === value;
      };
    case clsvqa_QuestionsEN.con_PdfPageNumIn:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfPageNumIn === value;
      };
    case clsvqa_QuestionsEN.con_PdfPageTop:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfPageTop === value;
      };
    case clsvqa_QuestionsEN.con_PdfZoom:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.pdfZoom === value;
      };
    case clsvqa_QuestionsEN.con_UserId:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.userId === value;
      };
    case clsvqa_QuestionsEN.con_QuestionsTypeId:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.questionsTypeId === value;
      };
    case clsvqa_QuestionsEN.con_QuestionsTypeName:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.questionsTypeName === value;
      };
    case clsvqa_QuestionsEN.con_DiscussCount:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.discussCount === value;
      };
    case clsvqa_QuestionsEN.con_GroupDiscussCount:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.groupDiscussCount === value;
      };
    case clsvqa_QuestionsEN.con_RecommendAnswerCount:
      return (obj: clsvqa_QuestionsEN) => {
        return obj.recommendAnswerCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vqa_Questions]中不存在!(in ${vqa_Questions_ConstructorName}.${strThisFuncName})`;
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
export async function vqa_Questions_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvqa_QuestionsEN.con_QuestionsId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvqa_Questions = await vqa_Questions_GetObjLstCache();
  if (arrvqa_Questions == null) return [];
  let arrvqa_QuestionsSel = arrvqa_Questions;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvqa_QuestionsSel.length == 0) return [];
  return arrvqa_QuestionsSel.map((x) => x.questionsId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vqa_Questions_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvqa_QuestionsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
      const objvqa_Questions = vqa_Questions_GetObjFromJsonObj(returnObj);
      return objvqa_Questions;
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvqa_QuestionsEN._CurrTabName;
  if (IsNullOrEmpty(clsvqa_QuestionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvqa_QuestionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvqa_QuestionsExObjLstCache: Array<clsvqa_QuestionsEN> = CacheHelper.Get(strKey);
    const arrvqa_QuestionsObjLstT = vqa_Questions_GetObjLstByJSONObjLst(
      arrvqa_QuestionsExObjLstCache,
    );
    return arrvqa_QuestionsObjLstT;
  }
  try {
    const arrvqa_QuestionsExObjLst = await vqa_Questions_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvqa_QuestionsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvqa_QuestionsExObjLst.length,
    );
    console.log(strInfo);
    return arrvqa_QuestionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvqa_QuestionsEN._CurrTabName;
  if (IsNullOrEmpty(clsvqa_QuestionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvqa_QuestionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvqa_QuestionsExObjLstCache: Array<clsvqa_QuestionsEN> = JSON.parse(strTempObjLst);
    const arrvqa_QuestionsObjLstT = vqa_Questions_GetObjLstByJSONObjLst(
      arrvqa_QuestionsExObjLstCache,
    );
    return arrvqa_QuestionsObjLstT;
  }
  try {
    const arrvqa_QuestionsExObjLst = await vqa_Questions_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvqa_QuestionsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvqa_QuestionsExObjLst.length,
    );
    console.log(strInfo);
    return arrvqa_QuestionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvqa_QuestionsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvqa_QuestionsObjLstCache: Array<clsvqa_QuestionsEN> = JSON.parse(strTempObjLst);
    return arrvqa_QuestionsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vqa_Questions_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
          vqa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Questions_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvqa_QuestionsEN._CurrTabName;
  if (IsNullOrEmpty(clsvqa_QuestionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvqa_QuestionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvqa_QuestionsExObjLstCache: Array<clsvqa_QuestionsEN> = JSON.parse(strTempObjLst);
    const arrvqa_QuestionsObjLstT = vqa_Questions_GetObjLstByJSONObjLst(
      arrvqa_QuestionsExObjLstCache,
    );
    return arrvqa_QuestionsObjLstT;
  }
  try {
    const arrvqa_QuestionsExObjLst = await vqa_Questions_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvqa_QuestionsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvqa_QuestionsExObjLst.length,
    );
    console.log(strInfo);
    return arrvqa_QuestionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvqa_QuestionsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvqa_QuestionsObjLstCache: Array<clsvqa_QuestionsEN> = JSON.parse(strTempObjLst);
    return arrvqa_QuestionsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vqa_Questions_GetObjLstCache(): Promise<Array<clsvqa_QuestionsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvqa_QuestionsObjLstCache;
  switch (clsvqa_QuestionsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstClientCache();
      break;
    default:
      arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstClientCache();
      break;
  }
  return arrvqa_QuestionsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vqa_Questions_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvqa_QuestionsObjLstCache;
  switch (clsvqa_QuestionsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvqa_QuestionsObjLstCache = null;
      break;
    default:
      arrvqa_QuestionsObjLstCache = null;
      break;
  }
  return arrvqa_QuestionsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrQuestionsIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vqa_Questions_GetSubObjLstCache(objvqa_QuestionsCond: clsvqa_QuestionsEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
  let arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache;
  if (
    objvqa_QuestionsCond.sfFldComparisonOp == null ||
    objvqa_QuestionsCond.sfFldComparisonOp == ''
  )
    return arrvqa_QuestionsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvqa_QuestionsCond.sfFldComparisonOp,
  );
  //console.log("clsvqa_QuestionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvqa_QuestionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvqa_QuestionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvqa_QuestionsCond),
      vqa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvqa_QuestionsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrQuestionsId:关键字列表
 * @returns 对象列表
 **/
export async function vqa_Questions_GetObjLstByQuestionsIdLstAsync(
  arrQuestionsId: Array<string>,
): Promise<Array<clsvqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstByQuestionsIdLstAsync';
  const strAction = 'GetObjLstByQuestionsIdLst';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
          vqa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Questions_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstByQuestionsIdLstCache(
  arrQuestionsIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByQuestionsIdLstCache';
  try {
    const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
    const arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache.filter(
      (x) => arrQuestionsIdLst.indexOf(x.questionsId) > -1,
    );
    return arrvqa_QuestionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrQuestionsIdLst.join(','),
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvqa_QuestionsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
          vqa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Questions_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
          vqa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Questions_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvqa_QuestionsEN>();
  const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
  if (arrvqa_QuestionsObjLstCache.length == 0) return arrvqa_QuestionsObjLstCache;
  let arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvqa_QuestionsCond = new clsvqa_QuestionsEN();
  ObjectAssign(objvqa_QuestionsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvqa_QuestionsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvqa_QuestionsSel.length == 0) return arrvqa_QuestionsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvqa_QuestionsSel = arrvqa_QuestionsSel.sort(
        vqa_Questions_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvqa_QuestionsSel = arrvqa_QuestionsSel.sort(objPagerPara.sortFun);
    }
    arrvqa_QuestionsSel = arrvqa_QuestionsSel.slice(intStart, intEnd);
    return arrvqa_QuestionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vqa_Questions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvqa_QuestionsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vqa_Questions_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvqa_QuestionsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvqa_QuestionsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
          vqa_Questions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Questions_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_IsExistRecordCache(objvqa_QuestionsCond: clsvqa_QuestionsEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
  if (arrvqa_QuestionsObjLstCache == null) return false;
  let arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache;
  if (
    objvqa_QuestionsCond.sfFldComparisonOp == null ||
    objvqa_QuestionsCond.sfFldComparisonOp == ''
  )
    return arrvqa_QuestionsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvqa_QuestionsCond.sfFldComparisonOp,
  );
  //console.log("clsvqa_QuestionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvqa_QuestionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvqa_QuestionsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvqa_QuestionsCond),
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_IsExistCache(strQuestionsId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
  if (arrvqa_QuestionsObjLstCache == null) return false;
  try {
    const arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache.filter(
      (x) => x.questionsId == strQuestionsId,
    );
    if (arrvqa_QuestionsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strQuestionsId,
      vqa_Questions_ConstructorName,
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
export async function vqa_Questions_IsExistAsync(strQuestionsId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
export async function vqa_Questions_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vqa_Questions_Controller, strAction);

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
        vqa_Questions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vqa_Questions_ConstructorName,
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
 * @param objvqa_QuestionsCond:条件对象
 * @returns 对象列表记录数
 */
export async function vqa_Questions_GetRecCountByCondCache(
  objvqa_QuestionsCond: clsvqa_QuestionsEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvqa_QuestionsObjLstCache = await vqa_Questions_GetObjLstCache();
  if (arrvqa_QuestionsObjLstCache == null) return 0;
  let arrvqa_QuestionsSel = arrvqa_QuestionsObjLstCache;
  if (
    objvqa_QuestionsCond.sfFldComparisonOp == null ||
    objvqa_QuestionsCond.sfFldComparisonOp == ''
  )
    return arrvqa_QuestionsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvqa_QuestionsCond.sfFldComparisonOp,
  );
  //console.log("clsvqa_QuestionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvqa_QuestionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_QuestionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvqa_QuestionsSel = arrvqa_QuestionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvqa_QuestionsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvqa_QuestionsCond),
      vqa_Questions_ConstructorName,
      strThisFuncName,
    );
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
export function vqa_Questions_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vqa_Questions_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvqa_QuestionsEN._CurrTabName;
    switch (clsvqa_QuestionsEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vqa_Questions_GetJSONStrByObj(pobjvqa_QuestionsEN: clsvqa_QuestionsEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvqa_QuestionsEN);
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
export function vqa_Questions_GetObjLstByJSONStr(strJSON: string): Array<clsvqa_QuestionsEN> {
  let arrvqa_QuestionsObjLst = new Array<clsvqa_QuestionsEN>();
  if (strJSON === '') {
    return arrvqa_QuestionsObjLst;
  }
  try {
    arrvqa_QuestionsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvqa_QuestionsObjLst;
  }
  return arrvqa_QuestionsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvqa_QuestionsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vqa_Questions_GetObjLstByJSONObjLst(
  arrvqa_QuestionsObjLstS: Array<clsvqa_QuestionsEN>,
): Array<clsvqa_QuestionsEN> {
  const arrvqa_QuestionsObjLst = new Array<clsvqa_QuestionsEN>();
  for (const objInFor of arrvqa_QuestionsObjLstS) {
    const obj1 = vqa_Questions_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvqa_QuestionsObjLst.push(obj1);
  }
  return arrvqa_QuestionsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vqa_Questions_GetObjByJSONStr(strJSON: string): clsvqa_QuestionsEN {
  let pobjvqa_QuestionsEN = new clsvqa_QuestionsEN();
  if (strJSON === '') {
    return pobjvqa_QuestionsEN;
  }
  try {
    pobjvqa_QuestionsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvqa_QuestionsEN;
  }
  return pobjvqa_QuestionsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vqa_Questions_GetCombineCondition(
  objvqa_QuestionsCond: clsvqa_QuestionsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_QuestionsId,
    ) == true
  ) {
    const strComparisonOpQuestionsId: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_QuestionsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_QuestionsId,
      objvqa_QuestionsCond.questionsId,
      strComparisonOpQuestionsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PaperId,
      objvqa_QuestionsCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_IsSubmit,
    ) == true
  ) {
    if (objvqa_QuestionsCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_QuestionsEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_QuestionsEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_QaPaperId,
    ) == true
  ) {
    const strComparisonOpQaPaperId: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_QaPaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_QaPaperId,
      objvqa_QuestionsCond.qaPaperId,
      strComparisonOpQaPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_QuestionsContent,
    ) == true
  ) {
    const strComparisonOpQuestionsContent: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_QuestionsContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_QuestionsContent,
      objvqa_QuestionsCond.questionsContent,
      strComparisonOpQuestionsContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfContent,
    ) == true
  ) {
    const strComparisonOpPdfContent: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PdfContent,
      objvqa_QuestionsCond.pdfContent,
      strComparisonOpPdfContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfPageNum,
    ) == true
  ) {
    const strComparisonOpPdfPageNum: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfPageNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_PdfPageNum,
      objvqa_QuestionsCond.pdfPageNum,
      strComparisonOpPdfPageNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_IsDelete,
    ) == true
  ) {
    if (objvqa_QuestionsCond.isDelete == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_QuestionsEN.con_IsDelete);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_QuestionsEN.con_IsDelete);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_IsPublic,
    ) == true
  ) {
    if (objvqa_QuestionsCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_QuestionsEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_QuestionsEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_IsEnd,
    ) == true
  ) {
    if (objvqa_QuestionsCond.isEnd == true) {
      strWhereCond += Format(" And {0} = '1'", clsvqa_QuestionsEN.con_IsEnd);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvqa_QuestionsEN.con_IsEnd);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_VoteCount,
    ) == true
  ) {
    const strComparisonOpVoteCount: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_VoteCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_VoteCount,
      objvqa_QuestionsCond.voteCount,
      strComparisonOpVoteCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_AnswerCount,
    ) == true
  ) {
    const strComparisonOpAnswerCount: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_AnswerCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_AnswerCount,
      objvqa_QuestionsCond.answerCount,
      strComparisonOpAnswerCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_OrderNum,
      objvqa_QuestionsCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_UpdUser,
      objvqa_QuestionsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_UpdDate,
      objvqa_QuestionsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_Memo,
      objvqa_QuestionsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_UserName,
      objvqa_QuestionsCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_IdCurrEduCls,
      objvqa_QuestionsCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PaperTitle,
      objvqa_QuestionsCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfDivLet,
    ) == true
  ) {
    const strComparisonOpPdfDivLet: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfDivLet];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PdfDivLet,
      objvqa_QuestionsCond.pdfDivLet,
      strComparisonOpPdfDivLet,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfDivTop,
    ) == true
  ) {
    const strComparisonOpPdfDivTop: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfDivTop];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PdfDivTop,
      objvqa_QuestionsCond.pdfDivTop,
      strComparisonOpPdfDivTop,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfPageNumIn,
    ) == true
  ) {
    const strComparisonOpPdfPageNumIn: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfPageNumIn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PdfPageNumIn,
      objvqa_QuestionsCond.pdfPageNumIn,
      strComparisonOpPdfPageNumIn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfPageTop,
    ) == true
  ) {
    const strComparisonOpPdfPageTop: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfPageTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_PdfPageTop,
      objvqa_QuestionsCond.pdfPageTop,
      strComparisonOpPdfPageTop,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_PdfZoom,
    ) == true
  ) {
    const strComparisonOpPdfZoom: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_PdfZoom];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_PdfZoom,
      objvqa_QuestionsCond.pdfZoom,
      strComparisonOpPdfZoom,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_UserId,
      objvqa_QuestionsCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_QuestionsTypeId,
    ) == true
  ) {
    const strComparisonOpQuestionsTypeId: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_QuestionsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_QuestionsTypeId,
      objvqa_QuestionsCond.questionsTypeId,
      strComparisonOpQuestionsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_QuestionsTypeName,
    ) == true
  ) {
    const strComparisonOpQuestionsTypeName: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_QuestionsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvqa_QuestionsEN.con_QuestionsTypeName,
      objvqa_QuestionsCond.questionsTypeName,
      strComparisonOpQuestionsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_DiscussCount,
    ) == true
  ) {
    const strComparisonOpDiscussCount: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_DiscussCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_DiscussCount,
      objvqa_QuestionsCond.discussCount,
      strComparisonOpDiscussCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_GroupDiscussCount,
    ) == true
  ) {
    const strComparisonOpGroupDiscussCount: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_GroupDiscussCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_GroupDiscussCount,
      objvqa_QuestionsCond.groupDiscussCount,
      strComparisonOpGroupDiscussCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvqa_QuestionsCond.dicFldComparisonOp,
      clsvqa_QuestionsEN.con_RecommendAnswerCount,
    ) == true
  ) {
    const strComparisonOpRecommendAnswerCount: string =
      objvqa_QuestionsCond.dicFldComparisonOp[clsvqa_QuestionsEN.con_RecommendAnswerCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvqa_QuestionsEN.con_RecommendAnswerCount,
      objvqa_QuestionsCond.recommendAnswerCount,
      strComparisonOpRecommendAnswerCount,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vqa_Questions(v答疑提问),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strQuestionsId: 提问Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vqa_Questions_GetUniCondStr(objvqa_QuestionsEN: clsvqa_QuestionsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and QuestionsId = '{0}'", objvqa_QuestionsEN.questionsId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vqa_Questions(v答疑提问),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strQuestionsId: 提问Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vqa_Questions_GetUniCondStr4Update(objvqa_QuestionsEN: clsvqa_QuestionsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and QuestionsId <> '{0}'", objvqa_QuestionsEN.questionsId);
  strWhereCond += Format(" and QuestionsId = '{0}'", objvqa_QuestionsEN.questionsId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvqa_QuestionsENS:源对象
 * @param objvqa_QuestionsENT:目标对象
 */
export function vqa_Questions_CopyObjTo(
  objvqa_QuestionsENS: clsvqa_QuestionsEN,
  objvqa_QuestionsENT: clsvqa_QuestionsEN,
): void {
  objvqa_QuestionsENT.questionsId = objvqa_QuestionsENS.questionsId; //提问Id
  objvqa_QuestionsENT.paperId = objvqa_QuestionsENS.paperId; //论文Id
  objvqa_QuestionsENT.isSubmit = objvqa_QuestionsENS.isSubmit; //是否提交
  objvqa_QuestionsENT.qaPaperId = objvqa_QuestionsENS.qaPaperId; //论文答疑Id
  objvqa_QuestionsENT.questionsContent = objvqa_QuestionsENS.questionsContent; //提问内容
  objvqa_QuestionsENT.pdfContent = objvqa_QuestionsENS.pdfContent; //Pdf内容
  objvqa_QuestionsENT.pdfPageNum = objvqa_QuestionsENS.pdfPageNum; //Pdf页码
  objvqa_QuestionsENT.isDelete = objvqa_QuestionsENS.isDelete; //是否删除
  objvqa_QuestionsENT.isPublic = objvqa_QuestionsENS.isPublic; //是否公开
  objvqa_QuestionsENT.isEnd = objvqa_QuestionsENS.isEnd; //是否结束
  objvqa_QuestionsENT.voteCount = objvqa_QuestionsENS.voteCount; //点赞计数
  objvqa_QuestionsENT.answerCount = objvqa_QuestionsENS.answerCount; //回答计数
  objvqa_QuestionsENT.orderNum = objvqa_QuestionsENS.orderNum; //序号
  objvqa_QuestionsENT.updUser = objvqa_QuestionsENS.updUser; //修改人
  objvqa_QuestionsENT.updDate = objvqa_QuestionsENS.updDate; //修改日期
  objvqa_QuestionsENT.memo = objvqa_QuestionsENS.memo; //备注
  objvqa_QuestionsENT.userName = objvqa_QuestionsENS.userName; //用户名
  objvqa_QuestionsENT.idCurrEduCls = objvqa_QuestionsENS.idCurrEduCls; //教学班流水号
  objvqa_QuestionsENT.paperTitle = objvqa_QuestionsENS.paperTitle; //论文标题
  objvqa_QuestionsENT.pdfDivLet = objvqa_QuestionsENS.pdfDivLet; //PdfDivLet
  objvqa_QuestionsENT.pdfDivTop = objvqa_QuestionsENS.pdfDivTop; //PdfDivTop
  objvqa_QuestionsENT.pdfPageNumIn = objvqa_QuestionsENS.pdfPageNumIn; //PdfPageNumIn
  objvqa_QuestionsENT.pdfPageTop = objvqa_QuestionsENS.pdfPageTop; //pdf页面顶部位置
  objvqa_QuestionsENT.pdfZoom = objvqa_QuestionsENS.pdfZoom; //PdfZoom
  objvqa_QuestionsENT.userId = objvqa_QuestionsENS.userId; //用户ID
  objvqa_QuestionsENT.questionsTypeId = objvqa_QuestionsENS.questionsTypeId; //问题类型Id
  objvqa_QuestionsENT.questionsTypeName = objvqa_QuestionsENS.questionsTypeName; //问题类型名称
  objvqa_QuestionsENT.discussCount = objvqa_QuestionsENS.discussCount; //DiscussCount
  objvqa_QuestionsENT.groupDiscussCount = objvqa_QuestionsENS.groupDiscussCount; //GroupDiscussCount
  objvqa_QuestionsENT.recommendAnswerCount = objvqa_QuestionsENS.recommendAnswerCount; //RecommendAnswerCount
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvqa_QuestionsENS:源对象
 * @param objvqa_QuestionsENT:目标对象
 */
export function vqa_Questions_GetObjFromJsonObj(
  objvqa_QuestionsENS: clsvqa_QuestionsEN,
): clsvqa_QuestionsEN {
  const objvqa_QuestionsENT: clsvqa_QuestionsEN = new clsvqa_QuestionsEN();
  ObjectAssign(objvqa_QuestionsENT, objvqa_QuestionsENS);
  return objvqa_QuestionsENT;
}
