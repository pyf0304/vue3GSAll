/**
 * 类名:clsqa_AnswerWApi
 * 表名:qa_Answer(01120641)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:53
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
 * 答疑回答(qa_Answer)
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
import { clsqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerEN';
import { vqa_Answer_ReFreshThisCache } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qa_Answer_Controller = 'qa_AnswerApi';
export const qa_Answer_ConstructorName = 'qa_Answer';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strAnswerId:关键字
 * @returns 对象
 **/
export async function qa_Answer_GetObjByAnswerIdAsync(
  strAnswerId: string,
): Promise<clsqa_AnswerEN | null> {
  const strThisFuncName = 'GetObjByAnswerIdAsync';

  if (IsNullOrEmpty(strAnswerId) == true) {
    const strMsg = Format('参数:[strAnswerId]不能为空!(In clsqa_AnswerWApi.GetObjByAnswerIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strAnswerId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strAnswerId]的长度:[{0}]不正确!(clsqa_AnswerWApi.GetObjByAnswerIdAsync)',
      strAnswerId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByAnswerId';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strAnswerId,
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
      const objqa_Answer = qa_Answer_GetObjFromJsonObj(returnObj);
      return objqa_Answer;
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param strAnswerId:所给的关键字
 * @returns 对象
 */
export async function qa_Answer_GetObjByAnswerIdCache(
  strAnswerId: string,
  strTopicId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByAnswerIdCache';

  if (IsNullOrEmpty(strAnswerId) == true) {
    const strMsg = Format('参数:[strAnswerId]不能为空!(In clsqa_AnswerWApi.GetObjByAnswerIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strAnswerId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strAnswerId]的长度:[{0}]不正确!(clsqa_AnswerWApi.GetObjByAnswerIdCache)',
      strAnswerId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
  try {
    const arrqa_AnswerSel = arrqa_AnswerObjLstCache.filter((x) => x.answerId == strAnswerId);
    let objqa_Answer: clsqa_AnswerEN;
    if (arrqa_AnswerSel.length > 0) {
      objqa_Answer = arrqa_AnswerSel[0];
      return objqa_Answer;
    } else {
      if (bolTryAsyncOnce == true) {
        const objqa_AnswerConst = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
        if (objqa_AnswerConst != null) {
          qa_Answer_ReFreshThisCache(strTopicId);
          return objqa_AnswerConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strAnswerId,
      qa_Answer_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strAnswerId:所给的关键字
 * @returns 对象
 */
export async function qa_Answer_GetObjByAnswerIdlocalStorage(strAnswerId: string) {
  const strThisFuncName = 'GetObjByAnswerIdlocalStorage';

  if (IsNullOrEmpty(strAnswerId) == true) {
    const strMsg = Format(
      '参数:[strAnswerId]不能为空!(In clsqa_AnswerWApi.GetObjByAnswerIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAnswerId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strAnswerId]的长度:[{0}]不正确!(clsqa_AnswerWApi.GetObjByAnswerIdlocalStorage)',
      strAnswerId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strAnswerId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objqa_AnswerCache: clsqa_AnswerEN = JSON.parse(strTempObj);
    return objqa_AnswerCache;
  }
  try {
    const objqa_Answer = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
    if (objqa_Answer != null) {
      localStorage.setItem(strKey, JSON.stringify(objqa_Answer));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objqa_Answer;
    }
    return objqa_Answer;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strAnswerId,
      qa_Answer_ConstructorName,
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
 * @param objqa_Answer:所给的对象
 * @returns 对象
 */
export async function qa_Answer_UpdateObjInLstCache(
  objqa_Answer: clsqa_AnswerEN,
  strTopicId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
    const obj = arrqa_AnswerObjLstCache.find(
      (x) =>
        x.answerContent == objqa_Answer.answerContent &&
        x.questionsId == objqa_Answer.questionsId &&
        x.updUser == objqa_Answer.updUser,
    );
    if (obj != null) {
      objqa_Answer.answerId = obj.answerId;
      ObjectAssign(obj, objqa_Answer);
    } else {
      arrqa_AnswerObjLstCache.push(objqa_Answer);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qa_Answer_ConstructorName,
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
 @param strTopicId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function qa_Answer_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strTopicIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strTopicIdClassfy) == true) {
    const strMsg = Format('参数:[strTopicIdClassfy]不能为空!(In clsqa_AnswerWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicIdClassfy]的长度:[{0}]不正确!(clsqa_AnswerWApi.func)',
      strTopicIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsqa_AnswerEN.con_AnswerId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsqa_AnswerEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsqa_AnswerEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAnswerId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objqa_Answer = await qa_Answer_GetObjByAnswerIdCache(strAnswerId, strTopicIdClassfy);
  if (objqa_Answer == null) return '';
  if (objqa_Answer.GetFldValue(strOutFldName) == null) return '';
  return objqa_Answer.GetFldValue(strOutFldName).toString();
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
export function qa_Answer_SortFunDefa(a: clsqa_AnswerEN, b: clsqa_AnswerEN): number {
  return a.answerId.localeCompare(b.answerId);
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
export function qa_Answer_SortFunDefa2Fld(a: clsqa_AnswerEN, b: clsqa_AnswerEN): number {
  if (a.questionsId == b.questionsId) return a.answerContent.localeCompare(b.answerContent);
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
export function qa_Answer_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsqa_AnswerEN.con_AnswerId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.answerId.localeCompare(b.answerId);
        };
      case clsqa_AnswerEN.con_QuestionsId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.questionsId.localeCompare(b.questionsId);
        };
      case clsqa_AnswerEN.con_AnswerContent:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.answerContent == null) return -1;
          if (b.answerContent == null) return 1;
          return a.answerContent.localeCompare(b.answerContent);
        };
      case clsqa_AnswerEN.con_Score:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.score - b.score;
        };
      case clsqa_AnswerEN.con_ScoreType:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.scoreType == null) return -1;
          if (b.scoreType == null) return 1;
          return a.scoreType.localeCompare(b.scoreType);
        };
      case clsqa_AnswerEN.con_IsRight:
        return (a: clsqa_AnswerEN) => {
          if (a.isRight == true) return 1;
          else return -1;
        };
      case clsqa_AnswerEN.con_ParentId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.parentId == null) return -1;
          if (b.parentId == null) return 1;
          return a.parentId.localeCompare(b.parentId);
        };
      case clsqa_AnswerEN.con_VoteCount:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.voteCount - b.voteCount;
        };
      case clsqa_AnswerEN.con_IsRecommend:
        return (a: clsqa_AnswerEN) => {
          if (a.isRecommend == true) return 1;
          else return -1;
        };
      case clsqa_AnswerEN.con_TopicId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsqa_AnswerEN.con_AnswerTypeId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.answerTypeId == null) return -1;
          if (b.answerTypeId == null) return 1;
          return a.answerTypeId.localeCompare(b.answerTypeId);
        };
      case clsqa_AnswerEN.con_IsSubmit:
        return (a: clsqa_AnswerEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsqa_AnswerEN.con_AppraiseCount:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsqa_AnswerEN.con_StuScore:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsqa_AnswerEN.con_TeaScore:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsqa_AnswerEN.con_CreateDate:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.createDate == null) return -1;
          if (b.createDate == null) return 1;
          return a.createDate.localeCompare(b.createDate);
        };
      case clsqa_AnswerEN.con_IdCurrEduCls:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsqa_AnswerEN.con_UpdUser:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsqa_AnswerEN.con_UpdDate:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsqa_AnswerEN.con_Memo:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[qa_Answer]中不存在!(in ${qa_Answer_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsqa_AnswerEN.con_AnswerId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.answerId.localeCompare(a.answerId);
        };
      case clsqa_AnswerEN.con_QuestionsId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.questionsId.localeCompare(a.questionsId);
        };
      case clsqa_AnswerEN.con_AnswerContent:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.answerContent == null) return -1;
          if (a.answerContent == null) return 1;
          return b.answerContent.localeCompare(a.answerContent);
        };
      case clsqa_AnswerEN.con_Score:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.score - a.score;
        };
      case clsqa_AnswerEN.con_ScoreType:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.scoreType == null) return -1;
          if (a.scoreType == null) return 1;
          return b.scoreType.localeCompare(a.scoreType);
        };
      case clsqa_AnswerEN.con_IsRight:
        return (b: clsqa_AnswerEN) => {
          if (b.isRight == true) return 1;
          else return -1;
        };
      case clsqa_AnswerEN.con_ParentId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.parentId == null) return -1;
          if (a.parentId == null) return 1;
          return b.parentId.localeCompare(a.parentId);
        };
      case clsqa_AnswerEN.con_VoteCount:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.voteCount - a.voteCount;
        };
      case clsqa_AnswerEN.con_IsRecommend:
        return (b: clsqa_AnswerEN) => {
          if (b.isRecommend == true) return 1;
          else return -1;
        };
      case clsqa_AnswerEN.con_TopicId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsqa_AnswerEN.con_AnswerTypeId:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.answerTypeId == null) return -1;
          if (a.answerTypeId == null) return 1;
          return b.answerTypeId.localeCompare(a.answerTypeId);
        };
      case clsqa_AnswerEN.con_IsSubmit:
        return (b: clsqa_AnswerEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsqa_AnswerEN.con_AppraiseCount:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsqa_AnswerEN.con_StuScore:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsqa_AnswerEN.con_TeaScore:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsqa_AnswerEN.con_CreateDate:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.createDate == null) return -1;
          if (a.createDate == null) return 1;
          return b.createDate.localeCompare(a.createDate);
        };
      case clsqa_AnswerEN.con_IdCurrEduCls:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsqa_AnswerEN.con_UpdUser:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsqa_AnswerEN.con_UpdDate:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsqa_AnswerEN.con_Memo:
        return (a: clsqa_AnswerEN, b: clsqa_AnswerEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[qa_Answer]中不存在!(in ${qa_Answer_ConstructorName}.${strThisFuncName})`;
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
export async function qa_Answer_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsqa_AnswerEN.con_AnswerId:
      return (obj: clsqa_AnswerEN) => {
        return obj.answerId === value;
      };
    case clsqa_AnswerEN.con_QuestionsId:
      return (obj: clsqa_AnswerEN) => {
        return obj.questionsId === value;
      };
    case clsqa_AnswerEN.con_AnswerContent:
      return (obj: clsqa_AnswerEN) => {
        return obj.answerContent === value;
      };
    case clsqa_AnswerEN.con_Score:
      return (obj: clsqa_AnswerEN) => {
        return obj.score === value;
      };
    case clsqa_AnswerEN.con_ScoreType:
      return (obj: clsqa_AnswerEN) => {
        return obj.scoreType === value;
      };
    case clsqa_AnswerEN.con_IsRight:
      return (obj: clsqa_AnswerEN) => {
        return obj.isRight === value;
      };
    case clsqa_AnswerEN.con_ParentId:
      return (obj: clsqa_AnswerEN) => {
        return obj.parentId === value;
      };
    case clsqa_AnswerEN.con_VoteCount:
      return (obj: clsqa_AnswerEN) => {
        return obj.voteCount === value;
      };
    case clsqa_AnswerEN.con_IsRecommend:
      return (obj: clsqa_AnswerEN) => {
        return obj.isRecommend === value;
      };
    case clsqa_AnswerEN.con_TopicId:
      return (obj: clsqa_AnswerEN) => {
        return obj.topicId === value;
      };
    case clsqa_AnswerEN.con_AnswerTypeId:
      return (obj: clsqa_AnswerEN) => {
        return obj.answerTypeId === value;
      };
    case clsqa_AnswerEN.con_IsSubmit:
      return (obj: clsqa_AnswerEN) => {
        return obj.isSubmit === value;
      };
    case clsqa_AnswerEN.con_AppraiseCount:
      return (obj: clsqa_AnswerEN) => {
        return obj.appraiseCount === value;
      };
    case clsqa_AnswerEN.con_StuScore:
      return (obj: clsqa_AnswerEN) => {
        return obj.stuScore === value;
      };
    case clsqa_AnswerEN.con_TeaScore:
      return (obj: clsqa_AnswerEN) => {
        return obj.teaScore === value;
      };
    case clsqa_AnswerEN.con_CreateDate:
      return (obj: clsqa_AnswerEN) => {
        return obj.createDate === value;
      };
    case clsqa_AnswerEN.con_IdCurrEduCls:
      return (obj: clsqa_AnswerEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsqa_AnswerEN.con_UpdUser:
      return (obj: clsqa_AnswerEN) => {
        return obj.updUser === value;
      };
    case clsqa_AnswerEN.con_UpdDate:
      return (obj: clsqa_AnswerEN) => {
        return obj.updDate === value;
      };
    case clsqa_AnswerEN.con_Memo:
      return (obj: clsqa_AnswerEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[qa_Answer]中不存在!(in ${qa_Answer_ConstructorName}.${strThisFuncName})`;
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
 @param strTopicId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function qa_Answer_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strTopicIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strTopicIdClassfy) == true) {
    const strMsg = Format('参数:[strTopicIdClassfy]不能为空!(In clsqa_AnswerWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicIdClassfy]的长度:[{0}]不正确!(clsqa_AnswerWApi.funcKey)',
      strTopicIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsqa_AnswerEN.con_AnswerId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrqa_Answer = await qa_Answer_GetObjLstCache(strTopicIdClassfy);
  if (arrqa_Answer == null) return [];
  let arrqa_AnswerSel = arrqa_Answer;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrqa_AnswerSel = arrqa_AnswerSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrqa_AnswerSel.length == 0) return [];
  return arrqa_AnswerSel.map((x) => x.answerId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function qa_Answer_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsqa_AnswerEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
      const objqa_Answer = qa_Answer_GetObjFromJsonObj(returnObj);
      return objqa_Answer;
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstClientCache(strTopicId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsqa_AnswerEN.WhereFormat) == false) {
    strWhereCond = Format(clsqa_AnswerEN.WhereFormat, strTopicId);
  } else {
    strWhereCond = Format("TopicId='{0}'", strTopicId);
  }
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
  if (IsNullOrEmpty(clsqa_AnswerEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsqa_AnswerEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrqa_AnswerExObjLstCache: Array<clsqa_AnswerEN> = CacheHelper.Get(strKey);
    const arrqa_AnswerObjLstT = qa_Answer_GetObjLstByJSONObjLst(arrqa_AnswerExObjLstCache);
    return arrqa_AnswerObjLstT;
  }
  try {
    const arrqa_AnswerExObjLst = await qa_Answer_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrqa_AnswerExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrqa_AnswerExObjLst.length,
    );
    console.log(strInfo);
    return arrqa_AnswerExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstlocalStorage(strTopicId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsqa_AnswerEN.WhereFormat) == false) {
    strWhereCond = Format(clsqa_AnswerEN.WhereFormat, strTopicId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsqa_AnswerEN.con_TopicId, strTopicId);
  }
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
  if (IsNullOrEmpty(clsqa_AnswerEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsqa_AnswerEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrqa_AnswerExObjLstCache: Array<clsqa_AnswerEN> = JSON.parse(strTempObjLst);
    const arrqa_AnswerObjLstT = qa_Answer_GetObjLstByJSONObjLst(arrqa_AnswerExObjLstCache);
    return arrqa_AnswerObjLstT;
  }
  try {
    const arrqa_AnswerExObjLst = await qa_Answer_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrqa_AnswerExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrqa_AnswerExObjLst.length,
    );
    console.log(strInfo);
    return arrqa_AnswerExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstlocalStoragePureCache(strTopicId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrqa_AnswerObjLstCache: Array<clsqa_AnswerEN> = JSON.parse(strTempObjLst);
    return arrqa_AnswerObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function qa_Answer_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsqa_AnswerEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
          qa_Answer_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstsessionStorage(strTopicId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsqa_AnswerEN.WhereFormat) == false) {
    strWhereCond = Format(clsqa_AnswerEN.WhereFormat, strTopicId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsqa_AnswerEN.con_TopicId, strTopicId);
  }
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
  if (IsNullOrEmpty(clsqa_AnswerEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsqa_AnswerEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrqa_AnswerExObjLstCache: Array<clsqa_AnswerEN> = JSON.parse(strTempObjLst);
    const arrqa_AnswerObjLstT = qa_Answer_GetObjLstByJSONObjLst(arrqa_AnswerExObjLstCache);
    return arrqa_AnswerObjLstT;
  }
  try {
    const arrqa_AnswerExObjLst = await qa_Answer_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrqa_AnswerExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrqa_AnswerExObjLst.length,
    );
    console.log(strInfo);
    return arrqa_AnswerExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstsessionStoragePureCache(strTopicId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrqa_AnswerObjLstCache: Array<clsqa_AnswerEN> = JSON.parse(strTempObjLst);
    return arrqa_AnswerObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Answer_GetObjLstCache(strTopicId: string): Promise<Array<clsqa_AnswerEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strTopicId) == true) {
    const strMsg = Format(
      '参数:[strTopicId]不能为空！(In clsqa_AnswerWApi.qa_Answer_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicId]的长度:[{0}]不正确！(clsqa_AnswerWApi.qa_Answer_GetObjLstCache)',
      strTopicId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrqa_AnswerObjLstCache;
  switch (clsqa_AnswerEN.CacheModeId) {
    case '04': //sessionStorage
      arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstsessionStorage(strTopicId);
      break;
    case '03': //localStorage
      arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstlocalStorage(strTopicId);
      break;
    case '02': //ClientCache
      arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstClientCache(strTopicId);
      break;
    default:
      arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstClientCache(strTopicId);
      break;
  }
  return arrqa_AnswerObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function qa_Answer_GetObjLstPureCache(strTopicId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrqa_AnswerObjLstCache;
  switch (clsqa_AnswerEN.CacheModeId) {
    case '04': //sessionStorage
      arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstsessionStoragePureCache(strTopicId);
      break;
    case '03': //localStorage
      arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstlocalStoragePureCache(strTopicId);
      break;
    case '02': //ClientCache
      arrqa_AnswerObjLstCache = null;
      break;
    default:
      arrqa_AnswerObjLstCache = null;
      break;
  }
  return arrqa_AnswerObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrAnswerIdCond:条件对象
 * @returns 对象列表子集
 */
export async function qa_Answer_GetSubObjLstCache(
  objqa_AnswerCond: clsqa_AnswerEN,
  strTopicId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
  let arrqa_AnswerSel = arrqa_AnswerObjLstCache;
  if (objqa_AnswerCond.sfFldComparisonOp == null || objqa_AnswerCond.sfFldComparisonOp == '')
    return arrqa_AnswerSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objqa_AnswerCond.sfFldComparisonOp,
  );
  //console.log("clsqa_AnswerWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objqa_AnswerCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_AnswerCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrqa_AnswerSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objqa_AnswerCond),
      qa_Answer_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsqa_AnswerEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrAnswerId:关键字列表
 * @returns 对象列表
 **/
export async function qa_Answer_GetObjLstByAnswerIdLstAsync(
  arrAnswerId: Array<string>,
): Promise<Array<clsqa_AnswerEN>> {
  const strThisFuncName = 'GetObjLstByAnswerIdLstAsync';
  const strAction = 'GetObjLstByAnswerIdLst';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrAnswerId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qa_Answer_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param arrstrAnswerIdLst:关键字列表
 * @returns 对象列表
 */
export async function qa_Answer_GetObjLstByAnswerIdLstCache(
  arrAnswerIdLst: Array<string>,
  strTopicId: string,
) {
  const strThisFuncName = 'GetObjLstByAnswerIdLstCache';
  try {
    const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
    const arrqa_AnswerSel = arrqa_AnswerObjLstCache.filter(
      (x) => arrAnswerIdLst.indexOf(x.answerId) > -1,
    );
    return arrqa_AnswerSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrAnswerIdLst.join(','),
      qa_Answer_ConstructorName,
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
export async function qa_Answer_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsqa_AnswerEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
          qa_Answer_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsqa_AnswerEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
          qa_Answer_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTopicId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsqa_AnswerEN>();
  const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
  if (arrqa_AnswerObjLstCache.length == 0) return arrqa_AnswerObjLstCache;
  let arrqa_AnswerSel = arrqa_AnswerObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objqa_AnswerCond = new clsqa_AnswerEN();
  ObjectAssign(objqa_AnswerCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsqa_AnswerWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_AnswerCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrqa_AnswerSel.length == 0) return arrqa_AnswerSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrqa_AnswerSel = arrqa_AnswerSel.sort(qa_Answer_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrqa_AnswerSel = arrqa_AnswerSel.sort(objPagerPara.sortFun);
    }
    arrqa_AnswerSel = arrqa_AnswerSel.slice(intStart, intEnd);
    return arrqa_AnswerSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qa_Answer_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsqa_AnswerEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function qa_Answer_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsqa_AnswerEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsqa_AnswerEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
          qa_Answer_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = qa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param strAnswerId:关键字
 * @returns 获取删除的结果
 **/
export async function qa_Answer_DelRecordAsync(strAnswerId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strAnswerId);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param arrAnswerId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function qa_Answer_Delqa_AnswersAsync(arrAnswerId: Array<string>): Promise<number> {
  const strThisFuncName = 'Delqa_AnswersAsync';
  const strAction = 'Delqa_Answers';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrAnswerId, config);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_Delqa_AnswersByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'Delqa_AnswersByCondAsync';
  const strAction = 'Delqa_AnswersByCond';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objqa_AnswerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Answer_AddNewRecordAsync(
  objqa_AnswerEN: clsqa_AnswerEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objqa_AnswerEN);
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_AnswerEN, config);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objqa_AnswerEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function qa_Answer_AddNewRecordWithMaxIdAsync(
  objqa_AnswerEN: clsqa_AnswerEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_AnswerEN, config);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objqa_AnswerEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function qa_Answer_AddNewRecordWithReturnKeyAsync(
  objqa_AnswerEN: clsqa_AnswerEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_AnswerEN, config);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objqa_AnswerEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function qa_Answer_UpdateRecordAsync(
  objqa_AnswerEN: clsqa_AnswerEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objqa_AnswerEN.sfUpdFldSetStr === undefined ||
    objqa_AnswerEN.sfUpdFldSetStr === null ||
    objqa_AnswerEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objqa_AnswerEN.answerId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_AnswerEN, config);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objqa_AnswerEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function qa_Answer_UpdateWithConditionAsync(
  objqa_AnswerEN: clsqa_AnswerEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objqa_AnswerEN.sfUpdFldSetStr === undefined ||
    objqa_AnswerEN.sfUpdFldSetStr === null ||
    objqa_AnswerEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objqa_AnswerEN.answerId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);
  objqa_AnswerEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objqa_AnswerEN, config);
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objstrAnswerIdCond:条件对象
 * @returns 对象列表子集
 */
export async function qa_Answer_IsExistRecordCache(
  objqa_AnswerCond: clsqa_AnswerEN,
  strTopicId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
  if (arrqa_AnswerObjLstCache == null) return false;
  let arrqa_AnswerSel = arrqa_AnswerObjLstCache;
  if (objqa_AnswerCond.sfFldComparisonOp == null || objqa_AnswerCond.sfFldComparisonOp == '')
    return arrqa_AnswerSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objqa_AnswerCond.sfFldComparisonOp,
  );
  //console.log("clsqa_AnswerWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objqa_AnswerCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_AnswerCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrqa_AnswerSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objqa_AnswerCond),
      qa_Answer_ConstructorName,
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
export async function qa_Answer_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param strAnswerId:所给的关键字
 * @returns 对象
 */
export async function qa_Answer_IsExistCache(strAnswerId: string, strTopicId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
  if (arrqa_AnswerObjLstCache == null) return false;
  try {
    const arrqa_AnswerSel = arrqa_AnswerObjLstCache.filter((x) => x.answerId == strAnswerId);
    if (arrqa_AnswerSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strAnswerId,
      qa_Answer_ConstructorName,
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
 * @param strAnswerId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function qa_Answer_IsExistAsync(strAnswerId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strAnswerId,
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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
 * @param objqa_AnswerCond:条件对象
 * @returns 对象列表记录数
 */
export async function qa_Answer_GetRecCountByCondCache(
  objqa_AnswerCond: clsqa_AnswerEN,
  strTopicId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrqa_AnswerObjLstCache = await qa_Answer_GetObjLstCache(strTopicId);
  if (arrqa_AnswerObjLstCache == null) return 0;
  let arrqa_AnswerSel = arrqa_AnswerObjLstCache;
  if (objqa_AnswerCond.sfFldComparisonOp == null || objqa_AnswerCond.sfFldComparisonOp == '')
    return arrqa_AnswerSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objqa_AnswerCond.sfFldComparisonOp,
  );
  //console.log("clsqa_AnswerWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objqa_AnswerCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objqa_AnswerCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrqa_AnswerSel = arrqa_AnswerSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrqa_AnswerSel = arrqa_AnswerSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrqa_AnswerSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objqa_AnswerCond),
      qa_Answer_ConstructorName,
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
export async function qa_Answer_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export async function qa_Answer_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qa_Answer_Controller, strAction);

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
        qa_Answer_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qa_Answer_ConstructorName,
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
export function qa_Answer_GetWebApiUrl(strController: string, strAction: string): string {
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
export function qa_Answer_ReFreshCache(strTopicId: string): void {
  if (IsNullOrEmpty(strTopicId) == true) {
    const strMsg = Format(
      '参数:[strTopicId]不能为空!(In clsqa_AnswerWApi.clsqa_AnswerWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTopicId]的长度:[{0}]不正确!(clsqa_AnswerWApi.clsqa_AnswerWApi.ReFreshCache)',
      strTopicId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
  switch (clsqa_AnswerEN.CacheModeId) {
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
  vqa_Answer_ReFreshThisCache(strTopicId);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function qa_Answer_ReFreshThisCache(strTopicId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsqa_AnswerEN._CurrTabName, strTopicId);
    switch (clsqa_AnswerEN.CacheModeId) {
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
export function qa_Answer_CheckPropertyNew(pobjqa_AnswerEN: clsqa_AnswerEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjqa_AnswerEN.questionsId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[提问Id]不能为空(In 答疑回答)!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerId) == false &&
    GetStrLen(pobjqa_AnswerEN.answerId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[回答Id(answerId)]的长度不能超过10(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.answerId)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.questionsId) == false &&
    GetStrLen(pobjqa_AnswerEN.questionsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[提问Id(questionsId)]的长度不能超过8(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.questionsId)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.scoreType) == false &&
    GetStrLen(pobjqa_AnswerEN.scoreType) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[评分类型(scoreType)]的长度不能超过1(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.scoreType)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.parentId) == false &&
    GetStrLen(pobjqa_AnswerEN.parentId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[父节点Id(parentId)]的长度不能超过10(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.parentId)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.topicId) == false && GetStrLen(pobjqa_AnswerEN.topicId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.topicId)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerTypeId) == false &&
    GetStrLen(pobjqa_AnswerEN.answerTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[答案类型ID(answerTypeId)]的长度不能超过2(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.answerTypeId)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.createDate) == false &&
    GetStrLen(pobjqa_AnswerEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立日期(createDate)]的长度不能超过20(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.createDate)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.idCurrEduCls) == false &&
    GetStrLen(pobjqa_AnswerEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.idCurrEduCls)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.updUser) == false && GetStrLen(pobjqa_AnswerEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.updUser)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.updDate) == false && GetStrLen(pobjqa_AnswerEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.updDate)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.memo) == false && GetStrLen(pobjqa_AnswerEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.memo)(clsqa_AnswerBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerId) == false &&
    undefined !== pobjqa_AnswerEN.answerId &&
    tzDataType.isString(pobjqa_AnswerEN.answerId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[回答Id(answerId)]的值:[$(pobjqa_AnswerEN.answerId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.questionsId) == false &&
    undefined !== pobjqa_AnswerEN.questionsId &&
    tzDataType.isString(pobjqa_AnswerEN.questionsId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[提问Id(questionsId)]的值:[$(pobjqa_AnswerEN.questionsId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerContent) == false &&
    undefined !== pobjqa_AnswerEN.answerContent &&
    tzDataType.isString(pobjqa_AnswerEN.answerContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[答案内容(answerContent)]的值:[$(pobjqa_AnswerEN.answerContent)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.score &&
    undefined !== pobjqa_AnswerEN.score &&
    tzDataType.isNumber(pobjqa_AnswerEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjqa_AnswerEN.score)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.scoreType) == false &&
    undefined !== pobjqa_AnswerEN.scoreType &&
    tzDataType.isString(pobjqa_AnswerEN.scoreType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分类型(scoreType)]的值:[$(pobjqa_AnswerEN.scoreType)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.isRight &&
    undefined !== pobjqa_AnswerEN.isRight &&
    tzDataType.isBoolean(pobjqa_AnswerEN.isRight) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否正确(isRight)]的值:[$(pobjqa_AnswerEN.isRight)], 非法,应该为布尔型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.parentId) == false &&
    undefined !== pobjqa_AnswerEN.parentId &&
    tzDataType.isString(pobjqa_AnswerEN.parentId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[父节点Id(parentId)]的值:[$(pobjqa_AnswerEN.parentId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.voteCount &&
    undefined !== pobjqa_AnswerEN.voteCount &&
    tzDataType.isNumber(pobjqa_AnswerEN.voteCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞计数(voteCount)]的值:[$(pobjqa_AnswerEN.voteCount)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.isRecommend &&
    undefined !== pobjqa_AnswerEN.isRecommend &&
    tzDataType.isBoolean(pobjqa_AnswerEN.isRecommend) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否推荐(isRecommend)]的值:[$(pobjqa_AnswerEN.isRecommend)], 非法,应该为布尔型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.topicId) == false &&
    undefined !== pobjqa_AnswerEN.topicId &&
    tzDataType.isString(pobjqa_AnswerEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjqa_AnswerEN.topicId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerTypeId) == false &&
    undefined !== pobjqa_AnswerEN.answerTypeId &&
    tzDataType.isString(pobjqa_AnswerEN.answerTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[答案类型ID(answerTypeId)]的值:[$(pobjqa_AnswerEN.answerTypeId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.isSubmit &&
    undefined !== pobjqa_AnswerEN.isSubmit &&
    tzDataType.isBoolean(pobjqa_AnswerEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjqa_AnswerEN.isSubmit)], 非法,应该为布尔型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.appraiseCount &&
    undefined !== pobjqa_AnswerEN.appraiseCount &&
    tzDataType.isNumber(pobjqa_AnswerEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjqa_AnswerEN.appraiseCount)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.stuScore &&
    undefined !== pobjqa_AnswerEN.stuScore &&
    tzDataType.isNumber(pobjqa_AnswerEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjqa_AnswerEN.stuScore)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjqa_AnswerEN.teaScore &&
    undefined !== pobjqa_AnswerEN.teaScore &&
    tzDataType.isNumber(pobjqa_AnswerEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjqa_AnswerEN.teaScore)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.createDate) == false &&
    undefined !== pobjqa_AnswerEN.createDate &&
    tzDataType.isString(pobjqa_AnswerEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立日期(createDate)]的值:[$(pobjqa_AnswerEN.createDate)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.idCurrEduCls) == false &&
    undefined !== pobjqa_AnswerEN.idCurrEduCls &&
    tzDataType.isString(pobjqa_AnswerEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjqa_AnswerEN.idCurrEduCls)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.updUser) == false &&
    undefined !== pobjqa_AnswerEN.updUser &&
    tzDataType.isString(pobjqa_AnswerEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjqa_AnswerEN.updUser)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.updDate) == false &&
    undefined !== pobjqa_AnswerEN.updDate &&
    tzDataType.isString(pobjqa_AnswerEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjqa_AnswerEN.updDate)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.memo) == false &&
    undefined !== pobjqa_AnswerEN.memo &&
    tzDataType.isString(pobjqa_AnswerEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjqa_AnswerEN.memo)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function qa_Answer_CheckProperty4Update(pobjqa_AnswerEN: clsqa_AnswerEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerId) == false &&
    GetStrLen(pobjqa_AnswerEN.answerId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[回答Id(answerId)]的长度不能超过10(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.answerId)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.questionsId) == false &&
    GetStrLen(pobjqa_AnswerEN.questionsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[提问Id(questionsId)]的长度不能超过8(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.questionsId)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.scoreType) == false &&
    GetStrLen(pobjqa_AnswerEN.scoreType) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[评分类型(scoreType)]的长度不能超过1(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.scoreType)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.parentId) == false &&
    GetStrLen(pobjqa_AnswerEN.parentId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[父节点Id(parentId)]的长度不能超过10(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.parentId)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.topicId) == false && GetStrLen(pobjqa_AnswerEN.topicId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.topicId)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerTypeId) == false &&
    GetStrLen(pobjqa_AnswerEN.answerTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[答案类型ID(answerTypeId)]的长度不能超过2(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.answerTypeId)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.createDate) == false &&
    GetStrLen(pobjqa_AnswerEN.createDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立日期(createDate)]的长度不能超过20(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.createDate)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.idCurrEduCls) == false &&
    GetStrLen(pobjqa_AnswerEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.idCurrEduCls)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.updUser) == false && GetStrLen(pobjqa_AnswerEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.updUser)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.updDate) == false && GetStrLen(pobjqa_AnswerEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.updDate)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjqa_AnswerEN.memo) == false && GetStrLen(pobjqa_AnswerEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 答疑回答(qa_Answer))!值:$(pobjqa_AnswerEN.memo)(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerId) == false &&
    undefined !== pobjqa_AnswerEN.answerId &&
    tzDataType.isString(pobjqa_AnswerEN.answerId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[回答Id(answerId)]的值:[$(pobjqa_AnswerEN.answerId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.questionsId) == false &&
    undefined !== pobjqa_AnswerEN.questionsId &&
    tzDataType.isString(pobjqa_AnswerEN.questionsId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[提问Id(questionsId)]的值:[$(pobjqa_AnswerEN.questionsId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerContent) == false &&
    undefined !== pobjqa_AnswerEN.answerContent &&
    tzDataType.isString(pobjqa_AnswerEN.answerContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[答案内容(answerContent)]的值:[$(pobjqa_AnswerEN.answerContent)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.score &&
    undefined !== pobjqa_AnswerEN.score &&
    tzDataType.isNumber(pobjqa_AnswerEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjqa_AnswerEN.score)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.scoreType) == false &&
    undefined !== pobjqa_AnswerEN.scoreType &&
    tzDataType.isString(pobjqa_AnswerEN.scoreType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分类型(scoreType)]的值:[$(pobjqa_AnswerEN.scoreType)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.isRight &&
    undefined !== pobjqa_AnswerEN.isRight &&
    tzDataType.isBoolean(pobjqa_AnswerEN.isRight) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否正确(isRight)]的值:[$(pobjqa_AnswerEN.isRight)], 非法,应该为布尔型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.parentId) == false &&
    undefined !== pobjqa_AnswerEN.parentId &&
    tzDataType.isString(pobjqa_AnswerEN.parentId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[父节点Id(parentId)]的值:[$(pobjqa_AnswerEN.parentId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.voteCount &&
    undefined !== pobjqa_AnswerEN.voteCount &&
    tzDataType.isNumber(pobjqa_AnswerEN.voteCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞计数(voteCount)]的值:[$(pobjqa_AnswerEN.voteCount)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.isRecommend &&
    undefined !== pobjqa_AnswerEN.isRecommend &&
    tzDataType.isBoolean(pobjqa_AnswerEN.isRecommend) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否推荐(isRecommend)]的值:[$(pobjqa_AnswerEN.isRecommend)], 非法,应该为布尔型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.topicId) == false &&
    undefined !== pobjqa_AnswerEN.topicId &&
    tzDataType.isString(pobjqa_AnswerEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjqa_AnswerEN.topicId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.answerTypeId) == false &&
    undefined !== pobjqa_AnswerEN.answerTypeId &&
    tzDataType.isString(pobjqa_AnswerEN.answerTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[答案类型ID(answerTypeId)]的值:[$(pobjqa_AnswerEN.answerTypeId)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.isSubmit &&
    undefined !== pobjqa_AnswerEN.isSubmit &&
    tzDataType.isBoolean(pobjqa_AnswerEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjqa_AnswerEN.isSubmit)], 非法,应该为布尔型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.appraiseCount &&
    undefined !== pobjqa_AnswerEN.appraiseCount &&
    tzDataType.isNumber(pobjqa_AnswerEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjqa_AnswerEN.appraiseCount)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.stuScore &&
    undefined !== pobjqa_AnswerEN.stuScore &&
    tzDataType.isNumber(pobjqa_AnswerEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjqa_AnswerEN.stuScore)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjqa_AnswerEN.teaScore &&
    undefined !== pobjqa_AnswerEN.teaScore &&
    tzDataType.isNumber(pobjqa_AnswerEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjqa_AnswerEN.teaScore)], 非法,应该为数值型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.createDate) == false &&
    undefined !== pobjqa_AnswerEN.createDate &&
    tzDataType.isString(pobjqa_AnswerEN.createDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立日期(createDate)]的值:[$(pobjqa_AnswerEN.createDate)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.idCurrEduCls) == false &&
    undefined !== pobjqa_AnswerEN.idCurrEduCls &&
    tzDataType.isString(pobjqa_AnswerEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjqa_AnswerEN.idCurrEduCls)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.updUser) == false &&
    undefined !== pobjqa_AnswerEN.updUser &&
    tzDataType.isString(pobjqa_AnswerEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjqa_AnswerEN.updUser)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.updDate) == false &&
    undefined !== pobjqa_AnswerEN.updDate &&
    tzDataType.isString(pobjqa_AnswerEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjqa_AnswerEN.updDate)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjqa_AnswerEN.memo) == false &&
    undefined !== pobjqa_AnswerEN.memo &&
    tzDataType.isString(pobjqa_AnswerEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjqa_AnswerEN.memo)], 非法,应该为字符型(In 答疑回答(qa_Answer))!(clsqa_AnswerBL:CheckProperty4Update)',
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
export function qa_Answer_GetJSONStrByObj(pobjqa_AnswerEN: clsqa_AnswerEN): string {
  pobjqa_AnswerEN.sfUpdFldSetStr = pobjqa_AnswerEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjqa_AnswerEN);
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
export function qa_Answer_GetObjLstByJSONStr(strJSON: string): Array<clsqa_AnswerEN> {
  let arrqa_AnswerObjLst = new Array<clsqa_AnswerEN>();
  if (strJSON === '') {
    return arrqa_AnswerObjLst;
  }
  try {
    arrqa_AnswerObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrqa_AnswerObjLst;
  }
  return arrqa_AnswerObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrqa_AnswerObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function qa_Answer_GetObjLstByJSONObjLst(
  arrqa_AnswerObjLstS: Array<clsqa_AnswerEN>,
): Array<clsqa_AnswerEN> {
  const arrqa_AnswerObjLst = new Array<clsqa_AnswerEN>();
  for (const objInFor of arrqa_AnswerObjLstS) {
    const obj1 = qa_Answer_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrqa_AnswerObjLst.push(obj1);
  }
  return arrqa_AnswerObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function qa_Answer_GetObjByJSONStr(strJSON: string): clsqa_AnswerEN {
  let pobjqa_AnswerEN = new clsqa_AnswerEN();
  if (strJSON === '') {
    return pobjqa_AnswerEN;
  }
  try {
    pobjqa_AnswerEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjqa_AnswerEN;
  }
  return pobjqa_AnswerEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function qa_Answer_GetCombineCondition(objqa_AnswerCond: clsqa_AnswerEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_AnswerId,
    ) == true
  ) {
    const strComparisonOpAnswerId: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_AnswerId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_AnswerId,
      objqa_AnswerCond.answerId,
      strComparisonOpAnswerId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_QuestionsId,
    ) == true
  ) {
    const strComparisonOpQuestionsId: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_QuestionsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_QuestionsId,
      objqa_AnswerCond.questionsId,
      strComparisonOpQuestionsId,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_AnswerEN.con_Score,
      objqa_AnswerCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_ScoreType,
    ) == true
  ) {
    const strComparisonOpScoreType: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_ScoreType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_ScoreType,
      objqa_AnswerCond.scoreType,
      strComparisonOpScoreType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_IsRight,
    ) == true
  ) {
    if (objqa_AnswerCond.isRight == true) {
      strWhereCond += Format(" And {0} = '1'", clsqa_AnswerEN.con_IsRight);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsqa_AnswerEN.con_IsRight);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_ParentId,
    ) == true
  ) {
    const strComparisonOpParentId: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_ParentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_ParentId,
      objqa_AnswerCond.parentId,
      strComparisonOpParentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_VoteCount,
    ) == true
  ) {
    const strComparisonOpVoteCount: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_VoteCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_AnswerEN.con_VoteCount,
      objqa_AnswerCond.voteCount,
      strComparisonOpVoteCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_IsRecommend,
    ) == true
  ) {
    if (objqa_AnswerCond.isRecommend == true) {
      strWhereCond += Format(" And {0} = '1'", clsqa_AnswerEN.con_IsRecommend);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsqa_AnswerEN.con_IsRecommend);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_TopicId,
      objqa_AnswerCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_AnswerTypeId,
    ) == true
  ) {
    const strComparisonOpAnswerTypeId: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_AnswerTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_AnswerTypeId,
      objqa_AnswerCond.answerTypeId,
      strComparisonOpAnswerTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_IsSubmit,
    ) == true
  ) {
    if (objqa_AnswerCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsqa_AnswerEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsqa_AnswerEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_AnswerEN.con_AppraiseCount,
      objqa_AnswerCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_AnswerEN.con_StuScore,
      objqa_AnswerCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsqa_AnswerEN.con_TeaScore,
      objqa_AnswerCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_CreateDate,
    ) == true
  ) {
    const strComparisonOpCreateDate: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_CreateDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_CreateDate,
      objqa_AnswerCond.createDate,
      strComparisonOpCreateDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_IdCurrEduCls,
      objqa_AnswerCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_UpdUser,
      objqa_AnswerCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_UpdDate,
      objqa_AnswerCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objqa_AnswerCond.dicFldComparisonOp,
      clsqa_AnswerEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objqa_AnswerCond.dicFldComparisonOp[clsqa_AnswerEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsqa_AnswerEN.con_Memo,
      objqa_AnswerCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--qa_Answer(答疑回答),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strAnswerContent: 答案内容(要求唯一的字段)
 * @param strQuestionsId: 提问Id(要求唯一的字段)
 * @param strUpdUser: 修改人(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function qa_Answer_GetUniCondStr(objqa_AnswerEN: clsqa_AnswerEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and AnswerContent = '{0}'", objqa_AnswerEN.answerContent);
  strWhereCond += Format(" and QuestionsId = '{0}'", objqa_AnswerEN.questionsId);
  strWhereCond += Format(" and UpdUser = '{0}'", objqa_AnswerEN.updUser);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--qa_Answer(答疑回答),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strAnswerContent: 答案内容(要求唯一的字段)
 * @param strQuestionsId: 提问Id(要求唯一的字段)
 * @param strUpdUser: 修改人(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function qa_Answer_GetUniCondStr4Update(objqa_AnswerEN: clsqa_AnswerEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and AnswerId <> '{0}'", objqa_AnswerEN.answerId);
  strWhereCond += Format(" and AnswerContent = '{0}'", objqa_AnswerEN.answerContent);
  strWhereCond += Format(" and QuestionsId = '{0}'", objqa_AnswerEN.questionsId);
  strWhereCond += Format(" and UpdUser = '{0}'", objqa_AnswerEN.updUser);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objqa_AnswerENS:源对象
 * @param objqa_AnswerENT:目标对象
 */
export function qa_Answer_CopyObjTo(
  objqa_AnswerENS: clsqa_AnswerEN,
  objqa_AnswerENT: clsqa_AnswerEN,
): void {
  objqa_AnswerENT.answerId = objqa_AnswerENS.answerId; //回答Id
  objqa_AnswerENT.questionsId = objqa_AnswerENS.questionsId; //提问Id
  objqa_AnswerENT.answerContent = objqa_AnswerENS.answerContent; //答案内容
  objqa_AnswerENT.score = objqa_AnswerENS.score; //评分
  objqa_AnswerENT.scoreType = objqa_AnswerENS.scoreType; //评分类型
  objqa_AnswerENT.isRight = objqa_AnswerENS.isRight; //是否正确
  objqa_AnswerENT.parentId = objqa_AnswerENS.parentId; //父节点Id
  objqa_AnswerENT.voteCount = objqa_AnswerENS.voteCount; //点赞计数
  objqa_AnswerENT.isRecommend = objqa_AnswerENS.isRecommend; //是否推荐
  objqa_AnswerENT.topicId = objqa_AnswerENS.topicId; //主题Id
  objqa_AnswerENT.answerTypeId = objqa_AnswerENS.answerTypeId; //答案类型ID
  objqa_AnswerENT.isSubmit = objqa_AnswerENS.isSubmit; //是否提交
  objqa_AnswerENT.appraiseCount = objqa_AnswerENS.appraiseCount; //评论数
  objqa_AnswerENT.stuScore = objqa_AnswerENS.stuScore; //学生平均分
  objqa_AnswerENT.teaScore = objqa_AnswerENS.teaScore; //教师评分
  objqa_AnswerENT.createDate = objqa_AnswerENS.createDate; //建立日期
  objqa_AnswerENT.idCurrEduCls = objqa_AnswerENS.idCurrEduCls; //教学班流水号
  objqa_AnswerENT.updUser = objqa_AnswerENS.updUser; //修改人
  objqa_AnswerENT.updDate = objqa_AnswerENS.updDate; //修改日期
  objqa_AnswerENT.memo = objqa_AnswerENS.memo; //备注
  objqa_AnswerENT.sfUpdFldSetStr = objqa_AnswerENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objqa_AnswerENS:源对象
 * @param objqa_AnswerENT:目标对象
 */
export function qa_Answer_GetObjFromJsonObj(objqa_AnswerENS: clsqa_AnswerEN): clsqa_AnswerEN {
  const objqa_AnswerENT: clsqa_AnswerEN = new clsqa_AnswerEN();
  ObjectAssign(objqa_AnswerENT, objqa_AnswerENS);
  return objqa_AnswerENT;
}
