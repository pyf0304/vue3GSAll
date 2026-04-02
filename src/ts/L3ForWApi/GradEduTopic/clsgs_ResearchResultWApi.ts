/**
 * 类名:clsgs_ResearchResultWApi
 * 表名:gs_ResearchResult(01120780)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 研究成果(gs_ResearchResult)
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
import { clsgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultEN';
import { vgs_ResearchResult_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchResultWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_ResearchResult_Controller = 'gs_ResearchResultApi';
export const gs_ResearchResult_ConstructorName = 'gs_ResearchResult';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strResultId:关键字
 * @returns 对象
 **/
export async function gs_ResearchResult_GetObjByResultIdAsync(
  strResultId: string,
): Promise<clsgs_ResearchResultEN | null> {
  const strThisFuncName = 'GetObjByResultIdAsync';

  if (IsNullOrEmpty(strResultId) == true) {
    const strMsg = Format(
      '参数:[strResultId]不能为空!(In clsgs_ResearchResultWApi.GetObjByResultIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strResultId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strResultId]的长度:[{0}]不正确!(clsgs_ResearchResultWApi.GetObjByResultIdAsync)',
      strResultId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByResultId';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strResultId,
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
      const objgs_ResearchResult = gs_ResearchResult_GetObjFromJsonObj(returnObj);
      return objgs_ResearchResult;
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param strResultId:所给的关键字
 * @returns 对象
 */
export async function gs_ResearchResult_GetObjByResultIdCache(
  strResultId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByResultIdCache';

  if (IsNullOrEmpty(strResultId) == true) {
    const strMsg = Format(
      '参数:[strResultId]不能为空!(In clsgs_ResearchResultWApi.GetObjByResultIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strResultId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strResultId]的长度:[{0}]不正确!(clsgs_ResearchResultWApi.GetObjByResultIdCache)',
      strResultId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
  try {
    const arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache.filter(
      (x) => x.resultId == strResultId,
    );
    let objgs_ResearchResult: clsgs_ResearchResultEN;
    if (arrgs_ResearchResultSel.length > 0) {
      objgs_ResearchResult = arrgs_ResearchResultSel[0];
      return objgs_ResearchResult;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_ResearchResultConst = await gs_ResearchResult_GetObjByResultIdAsync(
          strResultId,
        );
        if (objgs_ResearchResultConst != null) {
          gs_ResearchResult_ReFreshThisCache();
          return objgs_ResearchResultConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strResultId,
      gs_ResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strResultId:所给的关键字
 * @returns 对象
 */
export async function gs_ResearchResult_GetObjByResultIdlocalStorage(strResultId: string) {
  const strThisFuncName = 'GetObjByResultIdlocalStorage';

  if (IsNullOrEmpty(strResultId) == true) {
    const strMsg = Format(
      '参数:[strResultId]不能为空!(In clsgs_ResearchResultWApi.GetObjByResultIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strResultId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strResultId]的长度:[{0}]不正确!(clsgs_ResearchResultWApi.GetObjByResultIdlocalStorage)',
      strResultId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_ResearchResultEN._CurrTabName, strResultId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_ResearchResultCache: clsgs_ResearchResultEN = JSON.parse(strTempObj);
    return objgs_ResearchResultCache;
  }
  try {
    const objgs_ResearchResult = await gs_ResearchResult_GetObjByResultIdAsync(strResultId);
    if (objgs_ResearchResult != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_ResearchResult));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_ResearchResult;
    }
    return objgs_ResearchResult;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strResultId,
      gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResult:所给的对象
 * @returns 对象
 */
export async function gs_ResearchResult_UpdateObjInLstCache(
  objgs_ResearchResult: clsgs_ResearchResultEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
    const obj = arrgs_ResearchResultObjLstCache.find(
      (x) =>
        x.topicId == objgs_ResearchResult.topicId &&
        x.resultTypeId == objgs_ResearchResult.resultTypeId &&
        x.resultName == objgs_ResearchResult.resultName,
    );
    if (obj != null) {
      objgs_ResearchResult.resultId = obj.resultId;
      ObjectAssign(obj, objgs_ResearchResult);
    } else {
      arrgs_ResearchResultObjLstCache.push(objgs_ResearchResult);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_ResearchResultEN.con_ResultId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_ResearchResultEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_ResearchResultEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strResultId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_ResearchResult = await gs_ResearchResult_GetObjByResultIdCache(strResultId);
  if (objgs_ResearchResult == null) return '';
  if (objgs_ResearchResult.GetFldValue(strOutFldName) == null) return '';
  return objgs_ResearchResult.GetFldValue(strOutFldName).toString();
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
export function gs_ResearchResult_SortFunDefa(
  a: clsgs_ResearchResultEN,
  b: clsgs_ResearchResultEN,
): number {
  return a.resultId.localeCompare(b.resultId);
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
export function gs_ResearchResult_SortFunDefa2Fld(
  a: clsgs_ResearchResultEN,
  b: clsgs_ResearchResultEN,
): number {
  if (a.topicId == b.topicId) return a.paperId.localeCompare(b.paperId);
  else return a.topicId.localeCompare(b.topicId);
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
export function gs_ResearchResult_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_ResearchResultEN.con_ResultId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.resultId.localeCompare(b.resultId);
        };
      case clsgs_ResearchResultEN.con_TopicId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsgs_ResearchResultEN.con_PaperId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsgs_ResearchResultEN.con_ResultTypeId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.resultTypeId == null) return -1;
          if (b.resultTypeId == null) return 1;
          return a.resultTypeId.localeCompare(b.resultTypeId);
        };
      case clsgs_ResearchResultEN.con_ResultName:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.resultName == null) return -1;
          if (b.resultName == null) return 1;
          return a.resultName.localeCompare(b.resultName);
        };
      case clsgs_ResearchResultEN.con_ResultContent:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.resultContent == null) return -1;
          if (b.resultContent == null) return 1;
          return a.resultContent.localeCompare(b.resultContent);
        };
      case clsgs_ResearchResultEN.con_Author:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsgs_ResearchResultEN.con_Division:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.division == null) return -1;
          if (b.division == null) return 1;
          return a.division.localeCompare(b.division);
        };
      case clsgs_ResearchResultEN.con_VersionCount:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsgs_ResearchResultEN.con_OkCount:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.okCount - b.okCount;
        };
      case clsgs_ResearchResultEN.con_AppraiseCount:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsgs_ResearchResultEN.con_Score:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.score - b.score;
        };
      case clsgs_ResearchResultEN.con_StuScore:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsgs_ResearchResultEN.con_TeaScore:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsgs_ResearchResultEN.con_IdCurrEduCls:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsgs_ResearchResultEN.con_UpdDate:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_ResearchResultEN.con_UpdUser:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_ResearchResultEN.con_Memo:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_ResearchResult]中不存在!(in ${gs_ResearchResult_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_ResearchResultEN.con_ResultId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.resultId.localeCompare(a.resultId);
        };
      case clsgs_ResearchResultEN.con_TopicId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsgs_ResearchResultEN.con_PaperId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsgs_ResearchResultEN.con_ResultTypeId:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.resultTypeId == null) return -1;
          if (a.resultTypeId == null) return 1;
          return b.resultTypeId.localeCompare(a.resultTypeId);
        };
      case clsgs_ResearchResultEN.con_ResultName:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.resultName == null) return -1;
          if (a.resultName == null) return 1;
          return b.resultName.localeCompare(a.resultName);
        };
      case clsgs_ResearchResultEN.con_ResultContent:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.resultContent == null) return -1;
          if (a.resultContent == null) return 1;
          return b.resultContent.localeCompare(a.resultContent);
        };
      case clsgs_ResearchResultEN.con_Author:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsgs_ResearchResultEN.con_Division:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.division == null) return -1;
          if (a.division == null) return 1;
          return b.division.localeCompare(a.division);
        };
      case clsgs_ResearchResultEN.con_VersionCount:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsgs_ResearchResultEN.con_OkCount:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.okCount - a.okCount;
        };
      case clsgs_ResearchResultEN.con_AppraiseCount:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsgs_ResearchResultEN.con_Score:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.score - a.score;
        };
      case clsgs_ResearchResultEN.con_StuScore:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsgs_ResearchResultEN.con_TeaScore:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsgs_ResearchResultEN.con_IdCurrEduCls:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsgs_ResearchResultEN.con_UpdDate:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_ResearchResultEN.con_UpdUser:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_ResearchResultEN.con_Memo:
        return (a: clsgs_ResearchResultEN, b: clsgs_ResearchResultEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_ResearchResult]中不存在!(in ${gs_ResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function gs_ResearchResult_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_ResearchResultEN.con_ResultId:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.resultId === value;
      };
    case clsgs_ResearchResultEN.con_TopicId:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.topicId === value;
      };
    case clsgs_ResearchResultEN.con_PaperId:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.paperId === value;
      };
    case clsgs_ResearchResultEN.con_ResultTypeId:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.resultTypeId === value;
      };
    case clsgs_ResearchResultEN.con_ResultName:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.resultName === value;
      };
    case clsgs_ResearchResultEN.con_ResultContent:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.resultContent === value;
      };
    case clsgs_ResearchResultEN.con_Author:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.author === value;
      };
    case clsgs_ResearchResultEN.con_Division:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.division === value;
      };
    case clsgs_ResearchResultEN.con_VersionCount:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.versionCount === value;
      };
    case clsgs_ResearchResultEN.con_OkCount:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.okCount === value;
      };
    case clsgs_ResearchResultEN.con_AppraiseCount:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.appraiseCount === value;
      };
    case clsgs_ResearchResultEN.con_Score:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.score === value;
      };
    case clsgs_ResearchResultEN.con_StuScore:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.stuScore === value;
      };
    case clsgs_ResearchResultEN.con_TeaScore:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.teaScore === value;
      };
    case clsgs_ResearchResultEN.con_IdCurrEduCls:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsgs_ResearchResultEN.con_UpdDate:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.updDate === value;
      };
    case clsgs_ResearchResultEN.con_UpdUser:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.updUser === value;
      };
    case clsgs_ResearchResultEN.con_Memo:
      return (obj: clsgs_ResearchResultEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_ResearchResult]中不存在!(in ${gs_ResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function gs_ResearchResult_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_ResearchResultEN.con_ResultId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_ResearchResult = await gs_ResearchResult_GetObjLstCache();
  if (arrgs_ResearchResult == null) return [];
  let arrgs_ResearchResultSel = arrgs_ResearchResult;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_ResearchResultSel.length == 0) return [];
  return arrgs_ResearchResultSel.map((x) => x.resultId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_ResearchResult_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_ResearchResultEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
      const objgs_ResearchResult = gs_ResearchResult_GetObjFromJsonObj(returnObj);
      return objgs_ResearchResult;
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_ResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_ResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_ResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_ResearchResultExObjLstCache: Array<clsgs_ResearchResultEN> =
      CacheHelper.Get(strKey);
    const arrgs_ResearchResultObjLstT = gs_ResearchResult_GetObjLstByJSONObjLst(
      arrgs_ResearchResultExObjLstCache,
    );
    return arrgs_ResearchResultObjLstT;
  }
  try {
    const arrgs_ResearchResultExObjLst = await gs_ResearchResult_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_ResearchResultExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_ResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_ResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_ResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_ResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_ResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_ResearchResultExObjLstCache: Array<clsgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrgs_ResearchResultObjLstT = gs_ResearchResult_GetObjLstByJSONObjLst(
      arrgs_ResearchResultExObjLstCache,
    );
    return arrgs_ResearchResultObjLstT;
  }
  try {
    const arrgs_ResearchResultExObjLst = await gs_ResearchResult_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_ResearchResultExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_ResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_ResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_ResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_ResearchResultObjLstCache: Array<clsgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    return arrgs_ResearchResultObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_ResearchResult_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
          gs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_ResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_ResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_ResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_ResearchResultExObjLstCache: Array<clsgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrgs_ResearchResultObjLstT = gs_ResearchResult_GetObjLstByJSONObjLst(
      arrgs_ResearchResultExObjLstCache,
    );
    return arrgs_ResearchResultObjLstT;
  }
  try {
    const arrgs_ResearchResultExObjLst = await gs_ResearchResult_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_ResearchResultExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_ResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_ResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_ResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_ResearchResultObjLstCache: Array<clsgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    return arrgs_ResearchResultObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_ResearchResult_GetObjLstCache(): Promise<Array<clsgs_ResearchResultEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_ResearchResultObjLstCache;
  switch (clsgs_ResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstClientCache();
      break;
    default:
      arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstClientCache();
      break;
  }
  return arrgs_ResearchResultObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_ResearchResult_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_ResearchResultObjLstCache;
  switch (clsgs_ResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_ResearchResultObjLstCache = null;
      break;
    default:
      arrgs_ResearchResultObjLstCache = null;
      break;
  }
  return arrgs_ResearchResultObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrResultIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_ResearchResult_GetSubObjLstCache(
  objgs_ResearchResultCond: clsgs_ResearchResultEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
  let arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache;
  if (
    objgs_ResearchResultCond.sfFldComparisonOp == null ||
    objgs_ResearchResultCond.sfFldComparisonOp == ''
  )
    return arrgs_ResearchResultSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_ResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsgs_ResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_ResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_ResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_ResearchResultCond),
      gs_ResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_ResearchResultEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrResultId:关键字列表
 * @returns 对象列表
 **/
export async function gs_ResearchResult_GetObjLstByResultIdLstAsync(
  arrResultId: Array<string>,
): Promise<Array<clsgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByResultIdLstAsync';
  const strAction = 'GetObjLstByResultIdLst';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrResultId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param arrstrResultIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_ResearchResult_GetObjLstByResultIdLstCache(arrResultIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByResultIdLstCache';
  try {
    const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
    const arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache.filter(
      (x) => arrResultIdLst.indexOf(x.resultId) > -1,
    );
    return arrgs_ResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrResultIdLst.join(','),
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_ResearchResultEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
          gs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
          gs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_ResearchResultEN>();
  const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
  if (arrgs_ResearchResultObjLstCache.length == 0) return arrgs_ResearchResultObjLstCache;
  let arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_ResearchResultCond = new clsgs_ResearchResultEN();
  ObjectAssign(objgs_ResearchResultCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_ResearchResultWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_ResearchResultSel.length == 0) return arrgs_ResearchResultSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_ResearchResultSel = arrgs_ResearchResultSel.sort(
        gs_ResearchResult_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_ResearchResultSel = arrgs_ResearchResultSel.sort(objPagerPara.sortFun);
    }
    arrgs_ResearchResultSel = arrgs_ResearchResultSel.slice(intStart, intEnd);
    return arrgs_ResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_ResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_ResearchResultEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_ResearchResult_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_ResearchResultEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
          gs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param strResultId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_ResearchResult_DelRecordAsync(strResultId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strResultId);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param arrResultId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_ResearchResult_Delgs_ResearchResultsAsync(
  arrResultId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_ResearchResultsAsync';
  const strAction = 'Delgs_ResearchResults';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrResultId, config);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_Delgs_ResearchResultsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_ResearchResultsByCondAsync';
  const strAction = 'Delgs_ResearchResultsByCond';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResultEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_ResearchResult_AddNewRecordAsync(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_ResearchResultEN);
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ResearchResultEN, config);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResultEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_ResearchResult_AddNewRecordWithMaxIdAsync(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ResearchResultEN, config);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResultEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_ResearchResult_AddNewRecordWithReturnKeyAsync(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ResearchResultEN, config);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResultEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_ResearchResult_UpdateRecordAsync(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_ResearchResultEN.sfUpdFldSetStr === undefined ||
    objgs_ResearchResultEN.sfUpdFldSetStr === null ||
    objgs_ResearchResultEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_ResearchResultEN.resultId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ResearchResultEN, config);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResultEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_ResearchResult_UpdateWithConditionAsync(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_ResearchResultEN.sfUpdFldSetStr === undefined ||
    objgs_ResearchResultEN.sfUpdFldSetStr === null ||
    objgs_ResearchResultEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_ResearchResultEN.resultId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);
  objgs_ResearchResultEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_ResearchResultEN, config);
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objstrResultIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_ResearchResult_IsExistRecordCache(
  objgs_ResearchResultCond: clsgs_ResearchResultEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
  if (arrgs_ResearchResultObjLstCache == null) return false;
  let arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache;
  if (
    objgs_ResearchResultCond.sfFldComparisonOp == null ||
    objgs_ResearchResultCond.sfFldComparisonOp == ''
  )
    return arrgs_ResearchResultSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_ResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsgs_ResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_ResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_ResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_ResearchResultCond),
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param strResultId:所给的关键字
 * @returns 对象
 */
export async function gs_ResearchResult_IsExistCache(strResultId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
  if (arrgs_ResearchResultObjLstCache == null) return false;
  try {
    const arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache.filter(
      (x) => x.resultId == strResultId,
    );
    if (arrgs_ResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strResultId,
      gs_ResearchResult_ConstructorName,
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
 * @param strResultId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_ResearchResult_IsExistAsync(strResultId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strResultId,
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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
 * @param objgs_ResearchResultCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_ResearchResult_GetRecCountByCondCache(
  objgs_ResearchResultCond: clsgs_ResearchResultEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_ResearchResultObjLstCache = await gs_ResearchResult_GetObjLstCache();
  if (arrgs_ResearchResultObjLstCache == null) return 0;
  let arrgs_ResearchResultSel = arrgs_ResearchResultObjLstCache;
  if (
    objgs_ResearchResultCond.sfFldComparisonOp == null ||
    objgs_ResearchResultCond.sfFldComparisonOp == ''
  )
    return arrgs_ResearchResultSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_ResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsgs_ResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_ResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_ResearchResultSel = arrgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_ResearchResultSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_ResearchResultCond),
      gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export async function gs_ResearchResult_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_ResearchResult_Controller, strAction);

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
        gs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_ResearchResult_ConstructorName,
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
export function gs_ResearchResult_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_ResearchResult_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_ResearchResultEN._CurrTabName;
  switch (clsgs_ResearchResultEN.CacheModeId) {
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
  vgs_ResearchResult_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_ResearchResult_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_ResearchResultEN._CurrTabName;
    switch (clsgs_ResearchResultEN.CacheModeId) {
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
export function gs_ResearchResult_CheckPropertyNew(
  pobjgs_ResearchResultEN: clsgs_ResearchResultEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.resultId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[成果Id(resultId)]的长度不能超过10(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.resultId)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.topicId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.topicId)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.paperId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文Id(paperId)]的长度不能超过8(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.paperId)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultTypeId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.resultTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[成果类型Id(resultTypeId)]的长度不能超过2(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.resultTypeId)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultName) == false &&
    GetStrLen(pobjgs_ResearchResultEN.resultName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[成果名称(resultName)]的长度不能超过500(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.resultName)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.author) == false &&
    GetStrLen(pobjgs_ResearchResultEN.author) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[作者(author)]的长度不能超过200(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.author)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.division) == false &&
    GetStrLen(pobjgs_ResearchResultEN.division) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分工(division)]的长度不能超过500(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.division)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_ResearchResultEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.idCurrEduCls)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updDate) == false &&
    GetStrLen(pobjgs_ResearchResultEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.updDate)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updUser) == false &&
    GetStrLen(pobjgs_ResearchResultEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.updUser)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.memo) == false &&
    GetStrLen(pobjgs_ResearchResultEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.memo)(clsgs_ResearchResultBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultId) == false &&
    undefined !== pobjgs_ResearchResultEN.resultId &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[成果Id(resultId)]的值:[$(pobjgs_ResearchResultEN.resultId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.topicId) == false &&
    undefined !== pobjgs_ResearchResultEN.topicId &&
    tzDataType.isString(pobjgs_ResearchResultEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_ResearchResultEN.topicId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.paperId) == false &&
    undefined !== pobjgs_ResearchResultEN.paperId &&
    tzDataType.isString(pobjgs_ResearchResultEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文Id(paperId)]的值:[$(pobjgs_ResearchResultEN.paperId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultTypeId) == false &&
    undefined !== pobjgs_ResearchResultEN.resultTypeId &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[成果类型Id(resultTypeId)]的值:[$(pobjgs_ResearchResultEN.resultTypeId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultName) == false &&
    undefined !== pobjgs_ResearchResultEN.resultName &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[成果名称(resultName)]的值:[$(pobjgs_ResearchResultEN.resultName)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultContent) == false &&
    undefined !== pobjgs_ResearchResultEN.resultContent &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[成果内容(resultContent)]的值:[$(pobjgs_ResearchResultEN.resultContent)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.author) == false &&
    undefined !== pobjgs_ResearchResultEN.author &&
    tzDataType.isString(pobjgs_ResearchResultEN.author) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[作者(author)]的值:[$(pobjgs_ResearchResultEN.author)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.division) == false &&
    undefined !== pobjgs_ResearchResultEN.division &&
    tzDataType.isString(pobjgs_ResearchResultEN.division) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分工(division)]的值:[$(pobjgs_ResearchResultEN.division)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.versionCount &&
    undefined !== pobjgs_ResearchResultEN.versionCount &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本统计(versionCount)]的值:[$(pobjgs_ResearchResultEN.versionCount)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.okCount &&
    undefined !== pobjgs_ResearchResultEN.okCount &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞统计(okCount)]的值:[$(pobjgs_ResearchResultEN.okCount)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.appraiseCount &&
    undefined !== pobjgs_ResearchResultEN.appraiseCount &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评论数(appraiseCount)]的值:[$(pobjgs_ResearchResultEN.appraiseCount)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.score &&
    undefined !== pobjgs_ResearchResultEN.score &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjgs_ResearchResultEN.score)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.stuScore &&
    undefined !== pobjgs_ResearchResultEN.stuScore &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生平均分(stuScore)]的值:[$(pobjgs_ResearchResultEN.stuScore)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.teaScore &&
    undefined !== pobjgs_ResearchResultEN.teaScore &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教师评分(teaScore)]的值:[$(pobjgs_ResearchResultEN.teaScore)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.idCurrEduCls) == false &&
    undefined !== pobjgs_ResearchResultEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_ResearchResultEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_ResearchResultEN.idCurrEduCls)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updDate) == false &&
    undefined !== pobjgs_ResearchResultEN.updDate &&
    tzDataType.isString(pobjgs_ResearchResultEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_ResearchResultEN.updDate)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updUser) == false &&
    undefined !== pobjgs_ResearchResultEN.updUser &&
    tzDataType.isString(pobjgs_ResearchResultEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_ResearchResultEN.updUser)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.memo) == false &&
    undefined !== pobjgs_ResearchResultEN.memo &&
    tzDataType.isString(pobjgs_ResearchResultEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_ResearchResultEN.memo)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_ResearchResult_CheckProperty4Update(
  pobjgs_ResearchResultEN: clsgs_ResearchResultEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.resultId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[成果Id(resultId)]的长度不能超过10(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.resultId)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.topicId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.topicId)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.paperId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.paperId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文Id(paperId)]的长度不能超过8(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.paperId)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultTypeId) == false &&
    GetStrLen(pobjgs_ResearchResultEN.resultTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[成果类型Id(resultTypeId)]的长度不能超过2(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.resultTypeId)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultName) == false &&
    GetStrLen(pobjgs_ResearchResultEN.resultName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[成果名称(resultName)]的长度不能超过500(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.resultName)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.author) == false &&
    GetStrLen(pobjgs_ResearchResultEN.author) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[作者(author)]的长度不能超过200(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.author)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.division) == false &&
    GetStrLen(pobjgs_ResearchResultEN.division) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分工(division)]的长度不能超过500(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.division)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_ResearchResultEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.idCurrEduCls)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updDate) == false &&
    GetStrLen(pobjgs_ResearchResultEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.updDate)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updUser) == false &&
    GetStrLen(pobjgs_ResearchResultEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.updUser)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.memo) == false &&
    GetStrLen(pobjgs_ResearchResultEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 研究成果(gs_ResearchResult))!值:$(pobjgs_ResearchResultEN.memo)(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultId) == false &&
    undefined !== pobjgs_ResearchResultEN.resultId &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[成果Id(resultId)]的值:[$(pobjgs_ResearchResultEN.resultId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.topicId) == false &&
    undefined !== pobjgs_ResearchResultEN.topicId &&
    tzDataType.isString(pobjgs_ResearchResultEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_ResearchResultEN.topicId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.paperId) == false &&
    undefined !== pobjgs_ResearchResultEN.paperId &&
    tzDataType.isString(pobjgs_ResearchResultEN.paperId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文Id(paperId)]的值:[$(pobjgs_ResearchResultEN.paperId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultTypeId) == false &&
    undefined !== pobjgs_ResearchResultEN.resultTypeId &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[成果类型Id(resultTypeId)]的值:[$(pobjgs_ResearchResultEN.resultTypeId)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultName) == false &&
    undefined !== pobjgs_ResearchResultEN.resultName &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[成果名称(resultName)]的值:[$(pobjgs_ResearchResultEN.resultName)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.resultContent) == false &&
    undefined !== pobjgs_ResearchResultEN.resultContent &&
    tzDataType.isString(pobjgs_ResearchResultEN.resultContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[成果内容(resultContent)]的值:[$(pobjgs_ResearchResultEN.resultContent)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.author) == false &&
    undefined !== pobjgs_ResearchResultEN.author &&
    tzDataType.isString(pobjgs_ResearchResultEN.author) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[作者(author)]的值:[$(pobjgs_ResearchResultEN.author)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.division) == false &&
    undefined !== pobjgs_ResearchResultEN.division &&
    tzDataType.isString(pobjgs_ResearchResultEN.division) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分工(division)]的值:[$(pobjgs_ResearchResultEN.division)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.versionCount &&
    undefined !== pobjgs_ResearchResultEN.versionCount &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本统计(versionCount)]的值:[$(pobjgs_ResearchResultEN.versionCount)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.okCount &&
    undefined !== pobjgs_ResearchResultEN.okCount &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.okCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞统计(okCount)]的值:[$(pobjgs_ResearchResultEN.okCount)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.appraiseCount &&
    undefined !== pobjgs_ResearchResultEN.appraiseCount &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.appraiseCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评论数(appraiseCount)]的值:[$(pobjgs_ResearchResultEN.appraiseCount)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.score &&
    undefined !== pobjgs_ResearchResultEN.score &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjgs_ResearchResultEN.score)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.stuScore &&
    undefined !== pobjgs_ResearchResultEN.stuScore &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.stuScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生平均分(stuScore)]的值:[$(pobjgs_ResearchResultEN.stuScore)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_ResearchResultEN.teaScore &&
    undefined !== pobjgs_ResearchResultEN.teaScore &&
    tzDataType.isNumber(pobjgs_ResearchResultEN.teaScore) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教师评分(teaScore)]的值:[$(pobjgs_ResearchResultEN.teaScore)], 非法,应该为数值型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.idCurrEduCls) == false &&
    undefined !== pobjgs_ResearchResultEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_ResearchResultEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_ResearchResultEN.idCurrEduCls)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updDate) == false &&
    undefined !== pobjgs_ResearchResultEN.updDate &&
    tzDataType.isString(pobjgs_ResearchResultEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_ResearchResultEN.updDate)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.updUser) == false &&
    undefined !== pobjgs_ResearchResultEN.updUser &&
    tzDataType.isString(pobjgs_ResearchResultEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_ResearchResultEN.updUser)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_ResearchResultEN.memo) == false &&
    undefined !== pobjgs_ResearchResultEN.memo &&
    tzDataType.isString(pobjgs_ResearchResultEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_ResearchResultEN.memo)], 非法,应该为字符型(In 研究成果(gs_ResearchResult))!(clsgs_ResearchResultBL:CheckProperty4Update)',
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
export function gs_ResearchResult_GetJSONStrByObj(
  pobjgs_ResearchResultEN: clsgs_ResearchResultEN,
): string {
  pobjgs_ResearchResultEN.sfUpdFldSetStr = pobjgs_ResearchResultEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_ResearchResultEN);
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
export function gs_ResearchResult_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsgs_ResearchResultEN> {
  let arrgs_ResearchResultObjLst = new Array<clsgs_ResearchResultEN>();
  if (strJSON === '') {
    return arrgs_ResearchResultObjLst;
  }
  try {
    arrgs_ResearchResultObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_ResearchResultObjLst;
  }
  return arrgs_ResearchResultObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_ResearchResultObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_ResearchResult_GetObjLstByJSONObjLst(
  arrgs_ResearchResultObjLstS: Array<clsgs_ResearchResultEN>,
): Array<clsgs_ResearchResultEN> {
  const arrgs_ResearchResultObjLst = new Array<clsgs_ResearchResultEN>();
  for (const objInFor of arrgs_ResearchResultObjLstS) {
    const obj1 = gs_ResearchResult_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_ResearchResultObjLst.push(obj1);
  }
  return arrgs_ResearchResultObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_ResearchResult_GetObjByJSONStr(strJSON: string): clsgs_ResearchResultEN {
  let pobjgs_ResearchResultEN = new clsgs_ResearchResultEN();
  if (strJSON === '') {
    return pobjgs_ResearchResultEN;
  }
  try {
    pobjgs_ResearchResultEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_ResearchResultEN;
  }
  return pobjgs_ResearchResultEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_ResearchResult_GetCombineCondition(
  objgs_ResearchResultCond: clsgs_ResearchResultEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_ResultId,
    ) == true
  ) {
    const strComparisonOpResultId: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_ResultId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_ResultId,
      objgs_ResearchResultCond.resultId,
      strComparisonOpResultId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_TopicId,
      objgs_ResearchResultCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_PaperId,
      objgs_ResearchResultCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_ResultTypeId,
    ) == true
  ) {
    const strComparisonOpResultTypeId: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_ResultTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_ResultTypeId,
      objgs_ResearchResultCond.resultTypeId,
      strComparisonOpResultTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_ResultName,
    ) == true
  ) {
    const strComparisonOpResultName: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_ResultName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_ResultName,
      objgs_ResearchResultCond.resultName,
      strComparisonOpResultName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_Author,
      objgs_ResearchResultCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_Division,
    ) == true
  ) {
    const strComparisonOpDivision: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_Division];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_Division,
      objgs_ResearchResultCond.division,
      strComparisonOpDivision,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_ResearchResultEN.con_VersionCount,
      objgs_ResearchResultCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_ResearchResultEN.con_OkCount,
      objgs_ResearchResultCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_ResearchResultEN.con_AppraiseCount,
      objgs_ResearchResultCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_ResearchResultEN.con_Score,
      objgs_ResearchResultCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_ResearchResultEN.con_StuScore,
      objgs_ResearchResultCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_ResearchResultEN.con_TeaScore,
      objgs_ResearchResultCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_IdCurrEduCls,
      objgs_ResearchResultCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_UpdDate,
      objgs_ResearchResultCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_UpdUser,
      objgs_ResearchResultCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_ResearchResultCond.dicFldComparisonOp,
      clsgs_ResearchResultEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_ResearchResultCond.dicFldComparisonOp[clsgs_ResearchResultEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_ResearchResultEN.con_Memo,
      objgs_ResearchResultCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_ResearchResult(研究成果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strResultTypeId: 成果类型Id(要求唯一的字段)
 * @param strResultName: 成果名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_ResearchResult_GetUniCondStr(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicId = '{0}'", objgs_ResearchResultEN.topicId);
  strWhereCond += Format(" and ResultTypeId = '{0}'", objgs_ResearchResultEN.resultTypeId);
  strWhereCond += Format(" and ResultName = '{0}'", objgs_ResearchResultEN.resultName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_ResearchResult(研究成果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicId: 主题Id(要求唯一的字段)
 * @param strResultTypeId: 成果类型Id(要求唯一的字段)
 * @param strResultName: 成果名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_ResearchResult_GetUniCondStr4Update(
  objgs_ResearchResultEN: clsgs_ResearchResultEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ResultId <> '{0}'", objgs_ResearchResultEN.resultId);
  strWhereCond += Format(" and TopicId = '{0}'", objgs_ResearchResultEN.topicId);
  strWhereCond += Format(" and ResultTypeId = '{0}'", objgs_ResearchResultEN.resultTypeId);
  strWhereCond += Format(" and ResultName = '{0}'", objgs_ResearchResultEN.resultName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_ResearchResultENS:源对象
 * @param objgs_ResearchResultENT:目标对象
 */
export function gs_ResearchResult_CopyObjTo(
  objgs_ResearchResultENS: clsgs_ResearchResultEN,
  objgs_ResearchResultENT: clsgs_ResearchResultEN,
): void {
  objgs_ResearchResultENT.resultId = objgs_ResearchResultENS.resultId; //成果Id
  objgs_ResearchResultENT.topicId = objgs_ResearchResultENS.topicId; //主题Id
  objgs_ResearchResultENT.paperId = objgs_ResearchResultENS.paperId; //论文Id
  objgs_ResearchResultENT.resultTypeId = objgs_ResearchResultENS.resultTypeId; //成果类型Id
  objgs_ResearchResultENT.resultName = objgs_ResearchResultENS.resultName; //成果名称
  objgs_ResearchResultENT.resultContent = objgs_ResearchResultENS.resultContent; //成果内容
  objgs_ResearchResultENT.author = objgs_ResearchResultENS.author; //作者
  objgs_ResearchResultENT.division = objgs_ResearchResultENS.division; //分工
  objgs_ResearchResultENT.versionCount = objgs_ResearchResultENS.versionCount; //版本统计
  objgs_ResearchResultENT.okCount = objgs_ResearchResultENS.okCount; //点赞统计
  objgs_ResearchResultENT.appraiseCount = objgs_ResearchResultENS.appraiseCount; //评论数
  objgs_ResearchResultENT.score = objgs_ResearchResultENS.score; //评分
  objgs_ResearchResultENT.stuScore = objgs_ResearchResultENS.stuScore; //学生平均分
  objgs_ResearchResultENT.teaScore = objgs_ResearchResultENS.teaScore; //教师评分
  objgs_ResearchResultENT.idCurrEduCls = objgs_ResearchResultENS.idCurrEduCls; //教学班流水号
  objgs_ResearchResultENT.updDate = objgs_ResearchResultENS.updDate; //修改日期
  objgs_ResearchResultENT.updUser = objgs_ResearchResultENS.updUser; //修改人
  objgs_ResearchResultENT.memo = objgs_ResearchResultENS.memo; //备注
  objgs_ResearchResultENT.sfUpdFldSetStr = objgs_ResearchResultENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_ResearchResultENS:源对象
 * @param objgs_ResearchResultENT:目标对象
 */
export function gs_ResearchResult_GetObjFromJsonObj(
  objgs_ResearchResultENS: clsgs_ResearchResultEN,
): clsgs_ResearchResultEN {
  const objgs_ResearchResultENT: clsgs_ResearchResultEN = new clsgs_ResearchResultEN();
  ObjectAssign(objgs_ResearchResultENT, objgs_ResearchResultENS);
  return objgs_ResearchResultENT;
}
