/**
 * 类名:clsvgs_ResearchResultWApi
 * 表名:vgs_ResearchResult(01120778)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:20
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
 * 研究成果视图(vgs_ResearchResult)
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
import { clsvgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_ResearchResultEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vgs_ResearchResult_Controller = 'vgs_ResearchResultApi';
export const vgs_ResearchResult_ConstructorName = 'vgs_ResearchResult';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strResultId:关键字
 * @returns 对象
 **/
export async function vgs_ResearchResult_GetObjByResultIdAsync(
  strResultId: string,
): Promise<clsvgs_ResearchResultEN | null> {
  const strThisFuncName = 'GetObjByResultIdAsync';

  if (IsNullOrEmpty(strResultId) == true) {
    const strMsg = Format(
      '参数:[strResultId]不能为空!(In clsvgs_ResearchResultWApi.GetObjByResultIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strResultId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strResultId]的长度:[{0}]不正确!(clsvgs_ResearchResultWApi.GetObjByResultIdAsync)',
      strResultId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByResultId';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
      const objvgs_ResearchResult = vgs_ResearchResult_GetObjFromJsonObj(returnObj);
      return objvgs_ResearchResult;
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjByResultIdCache(
  strResultId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByResultIdCache';

  if (IsNullOrEmpty(strResultId) == true) {
    const strMsg = Format(
      '参数:[strResultId]不能为空!(In clsvgs_ResearchResultWApi.GetObjByResultIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strResultId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strResultId]的长度:[{0}]不正确!(clsvgs_ResearchResultWApi.GetObjByResultIdCache)',
      strResultId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
  try {
    const arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache.filter(
      (x) => x.resultId == strResultId,
    );
    let objvgs_ResearchResult: clsvgs_ResearchResultEN;
    if (arrvgs_ResearchResultSel.length > 0) {
      objvgs_ResearchResult = arrvgs_ResearchResultSel[0];
      return objvgs_ResearchResult;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvgs_ResearchResultConst = await vgs_ResearchResult_GetObjByResultIdAsync(
          strResultId,
        );
        if (objvgs_ResearchResultConst != null) {
          vgs_ResearchResult_ReFreshThisCache();
          return objvgs_ResearchResultConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strResultId,
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjByResultIdlocalStorage(strResultId: string) {
  const strThisFuncName = 'GetObjByResultIdlocalStorage';

  if (IsNullOrEmpty(strResultId) == true) {
    const strMsg = Format(
      '参数:[strResultId]不能为空!(In clsvgs_ResearchResultWApi.GetObjByResultIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strResultId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strResultId]的长度:[{0}]不正确!(clsvgs_ResearchResultWApi.GetObjByResultIdlocalStorage)',
      strResultId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvgs_ResearchResultEN._CurrTabName, strResultId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvgs_ResearchResultCache: clsvgs_ResearchResultEN = JSON.parse(strTempObj);
    return objvgs_ResearchResultCache;
  }
  try {
    const objvgs_ResearchResult = await vgs_ResearchResult_GetObjByResultIdAsync(strResultId);
    if (objvgs_ResearchResult != null) {
      localStorage.setItem(strKey, JSON.stringify(objvgs_ResearchResult));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvgs_ResearchResult;
    }
    return objvgs_ResearchResult;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strResultId,
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvgs_ResearchResultEN.con_ResultId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvgs_ResearchResultEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvgs_ResearchResultEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strResultId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvgs_ResearchResult = await vgs_ResearchResult_GetObjByResultIdCache(strResultId);
  if (objvgs_ResearchResult == null) return '';
  if (objvgs_ResearchResult.GetFldValue(strOutFldName) == null) return '';
  return objvgs_ResearchResult.GetFldValue(strOutFldName).toString();
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
export function vgs_ResearchResult_SortFunDefa(
  a: clsvgs_ResearchResultEN,
  b: clsvgs_ResearchResultEN,
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
export function vgs_ResearchResult_SortFunDefa2Fld(
  a: clsvgs_ResearchResultEN,
  b: clsvgs_ResearchResultEN,
): number {
  if (a.topicId == b.topicId) return a.topicName.localeCompare(b.topicName);
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
export function vgs_ResearchResult_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvgs_ResearchResultEN.con_ResultId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.resultId.localeCompare(b.resultId);
        };
      case clsvgs_ResearchResultEN.con_TopicId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvgs_ResearchResultEN.con_TopicName:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvgs_ResearchResultEN.con_PaperId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvgs_ResearchResultEN.con_IdCurrEduCls:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvgs_ResearchResultEN.con_ResultTypeId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.resultTypeId == null) return -1;
          if (b.resultTypeId == null) return 1;
          return a.resultTypeId.localeCompare(b.resultTypeId);
        };
      case clsvgs_ResearchResultEN.con_ResultName:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.resultName == null) return -1;
          if (b.resultName == null) return 1;
          return a.resultName.localeCompare(b.resultName);
        };
      case clsvgs_ResearchResultEN.con_ResultContent:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.resultContent == null) return -1;
          if (b.resultContent == null) return 1;
          return a.resultContent.localeCompare(b.resultContent);
        };
      case clsvgs_ResearchResultEN.con_Author:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      case clsvgs_ResearchResultEN.con_Division:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.division == null) return -1;
          if (b.division == null) return 1;
          return a.division.localeCompare(b.division);
        };
      case clsvgs_ResearchResultEN.con_VersionCount:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvgs_ResearchResultEN.con_OkCount:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.okCount - b.okCount;
        };
      case clsvgs_ResearchResultEN.con_AppraiseCount:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.appraiseCount - b.appraiseCount;
        };
      case clsvgs_ResearchResultEN.con_Score:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.score - b.score;
        };
      case clsvgs_ResearchResultEN.con_StuScore:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.stuScore - b.stuScore;
        };
      case clsvgs_ResearchResultEN.con_TeaScore:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvgs_ResearchResultEN.con_UpdDate:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvgs_ResearchResultEN.con_UpdUser:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvgs_ResearchResultEN.con_Memo:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_ResearchResult]中不存在!(in ${vgs_ResearchResult_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvgs_ResearchResultEN.con_ResultId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.resultId.localeCompare(a.resultId);
        };
      case clsvgs_ResearchResultEN.con_TopicId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvgs_ResearchResultEN.con_TopicName:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvgs_ResearchResultEN.con_PaperId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvgs_ResearchResultEN.con_IdCurrEduCls:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvgs_ResearchResultEN.con_ResultTypeId:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.resultTypeId == null) return -1;
          if (a.resultTypeId == null) return 1;
          return b.resultTypeId.localeCompare(a.resultTypeId);
        };
      case clsvgs_ResearchResultEN.con_ResultName:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.resultName == null) return -1;
          if (a.resultName == null) return 1;
          return b.resultName.localeCompare(a.resultName);
        };
      case clsvgs_ResearchResultEN.con_ResultContent:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.resultContent == null) return -1;
          if (a.resultContent == null) return 1;
          return b.resultContent.localeCompare(a.resultContent);
        };
      case clsvgs_ResearchResultEN.con_Author:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      case clsvgs_ResearchResultEN.con_Division:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.division == null) return -1;
          if (a.division == null) return 1;
          return b.division.localeCompare(a.division);
        };
      case clsvgs_ResearchResultEN.con_VersionCount:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvgs_ResearchResultEN.con_OkCount:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.okCount - a.okCount;
        };
      case clsvgs_ResearchResultEN.con_AppraiseCount:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.appraiseCount - a.appraiseCount;
        };
      case clsvgs_ResearchResultEN.con_Score:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.score - a.score;
        };
      case clsvgs_ResearchResultEN.con_StuScore:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.stuScore - a.stuScore;
        };
      case clsvgs_ResearchResultEN.con_TeaScore:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvgs_ResearchResultEN.con_UpdDate:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvgs_ResearchResultEN.con_UpdUser:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvgs_ResearchResultEN.con_Memo:
        return (a: clsvgs_ResearchResultEN, b: clsvgs_ResearchResultEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_ResearchResult]中不存在!(in ${vgs_ResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_ResearchResult_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvgs_ResearchResultEN.con_ResultId:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.resultId === value;
      };
    case clsvgs_ResearchResultEN.con_TopicId:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.topicId === value;
      };
    case clsvgs_ResearchResultEN.con_TopicName:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.topicName === value;
      };
    case clsvgs_ResearchResultEN.con_PaperId:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.paperId === value;
      };
    case clsvgs_ResearchResultEN.con_IdCurrEduCls:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvgs_ResearchResultEN.con_ResultTypeId:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.resultTypeId === value;
      };
    case clsvgs_ResearchResultEN.con_ResultName:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.resultName === value;
      };
    case clsvgs_ResearchResultEN.con_ResultContent:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.resultContent === value;
      };
    case clsvgs_ResearchResultEN.con_Author:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.author === value;
      };
    case clsvgs_ResearchResultEN.con_Division:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.division === value;
      };
    case clsvgs_ResearchResultEN.con_VersionCount:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.versionCount === value;
      };
    case clsvgs_ResearchResultEN.con_OkCount:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.okCount === value;
      };
    case clsvgs_ResearchResultEN.con_AppraiseCount:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.appraiseCount === value;
      };
    case clsvgs_ResearchResultEN.con_Score:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.score === value;
      };
    case clsvgs_ResearchResultEN.con_StuScore:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.stuScore === value;
      };
    case clsvgs_ResearchResultEN.con_TeaScore:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.teaScore === value;
      };
    case clsvgs_ResearchResultEN.con_UpdDate:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.updDate === value;
      };
    case clsvgs_ResearchResultEN.con_UpdUser:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.updUser === value;
      };
    case clsvgs_ResearchResultEN.con_Memo:
      return (obj: clsvgs_ResearchResultEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vgs_ResearchResult]中不存在!(in ${vgs_ResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_ResearchResult_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvgs_ResearchResultEN.con_ResultId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvgs_ResearchResult = await vgs_ResearchResult_GetObjLstCache();
  if (arrvgs_ResearchResult == null) return [];
  let arrvgs_ResearchResultSel = arrvgs_ResearchResult;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvgs_ResearchResultSel.length == 0) return [];
  return arrvgs_ResearchResultSel.map((x) => x.resultId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vgs_ResearchResult_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvgs_ResearchResultEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
      const objvgs_ResearchResult = vgs_ResearchResult_GetObjFromJsonObj(returnObj);
      return objvgs_ResearchResult;
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_ResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_ResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_ResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvgs_ResearchResultExObjLstCache: Array<clsvgs_ResearchResultEN> =
      CacheHelper.Get(strKey);
    const arrvgs_ResearchResultObjLstT = vgs_ResearchResult_GetObjLstByJSONObjLst(
      arrvgs_ResearchResultExObjLstCache,
    );
    return arrvgs_ResearchResultObjLstT;
  }
  try {
    const arrvgs_ResearchResultExObjLst = await vgs_ResearchResult_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvgs_ResearchResultExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_ResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_ResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_ResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_ResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_ResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_ResearchResultExObjLstCache: Array<clsvgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_ResearchResultObjLstT = vgs_ResearchResult_GetObjLstByJSONObjLst(
      arrvgs_ResearchResultExObjLstCache,
    );
    return arrvgs_ResearchResultObjLstT;
  }
  try {
    const arrvgs_ResearchResultExObjLst = await vgs_ResearchResult_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvgs_ResearchResultExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_ResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_ResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_ResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_ResearchResultObjLstCache: Array<clsvgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_ResearchResultObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vgs_ResearchResult_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
          vgs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_ResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_ResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_ResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_ResearchResultExObjLstCache: Array<clsvgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_ResearchResultObjLstT = vgs_ResearchResult_GetObjLstByJSONObjLst(
      arrvgs_ResearchResultExObjLstCache,
    );
    return arrvgs_ResearchResultObjLstT;
  }
  try {
    const arrvgs_ResearchResultExObjLst = await vgs_ResearchResult_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvgs_ResearchResultExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_ResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_ResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_ResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_ResearchResultObjLstCache: Array<clsvgs_ResearchResultEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_ResearchResultObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_ResearchResult_GetObjLstCache(): Promise<Array<clsvgs_ResearchResultEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvgs_ResearchResultObjLstCache;
  switch (clsvgs_ResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstClientCache();
      break;
    default:
      arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstClientCache();
      break;
  }
  return arrvgs_ResearchResultObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_ResearchResult_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvgs_ResearchResultObjLstCache;
  switch (clsvgs_ResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_ResearchResultObjLstCache =
        await vgs_ResearchResult_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvgs_ResearchResultObjLstCache = null;
      break;
    default:
      arrvgs_ResearchResultObjLstCache = null;
      break;
  }
  return arrvgs_ResearchResultObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrResultIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_ResearchResult_GetSubObjLstCache(
  objvgs_ResearchResultCond: clsvgs_ResearchResultEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
  let arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache;
  if (
    objvgs_ResearchResultCond.sfFldComparisonOp == null ||
    objvgs_ResearchResultCond.sfFldComparisonOp == ''
  )
    return arrvgs_ResearchResultSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_ResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_ResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_ResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_ResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_ResearchResultCond),
      vgs_ResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_ResearchResultEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrResultId:关键字列表
 * @returns 对象列表
 **/
export async function vgs_ResearchResult_GetObjLstByResultIdLstAsync(
  arrResultId: Array<string>,
): Promise<Array<clsvgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByResultIdLstAsync';
  const strAction = 'GetObjLstByResultIdLst';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
          vgs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstByResultIdLstCache(
  arrResultIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByResultIdLstCache';
  try {
    const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
    const arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache.filter(
      (x) => arrResultIdLst.indexOf(x.resultId) > -1,
    );
    return arrvgs_ResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrResultIdLst.join(','),
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvgs_ResearchResultEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
          vgs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
          vgs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_ResearchResultEN>();
  const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
  if (arrvgs_ResearchResultObjLstCache.length == 0) return arrvgs_ResearchResultObjLstCache;
  let arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvgs_ResearchResultCond = new clsvgs_ResearchResultEN();
  ObjectAssign(objvgs_ResearchResultCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvgs_ResearchResultWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_ResearchResultSel.length == 0) return arrvgs_ResearchResultSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.sort(
        vgs_ResearchResult_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.sort(objPagerPara.sortFun);
    }
    arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.slice(intStart, intEnd);
    return arrvgs_ResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_ResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_ResearchResultEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vgs_ResearchResult_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_ResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_ResearchResultEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
          vgs_ResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_IsExistRecordCache(
  objvgs_ResearchResultCond: clsvgs_ResearchResultEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
  if (arrvgs_ResearchResultObjLstCache == null) return false;
  let arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache;
  if (
    objvgs_ResearchResultCond.sfFldComparisonOp == null ||
    objvgs_ResearchResultCond.sfFldComparisonOp == ''
  )
    return arrvgs_ResearchResultSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_ResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_ResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_ResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_ResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvgs_ResearchResultCond),
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_IsExistCache(strResultId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
  if (arrvgs_ResearchResultObjLstCache == null) return false;
  try {
    const arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache.filter(
      (x) => x.resultId == strResultId,
    );
    if (arrvgs_ResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strResultId,
      vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_IsExistAsync(strResultId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
export async function vgs_ResearchResult_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vgs_ResearchResult_Controller, strAction);

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
        vgs_ResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_ResearchResult_ConstructorName,
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
 * @param objvgs_ResearchResultCond:条件对象
 * @returns 对象列表记录数
 */
export async function vgs_ResearchResult_GetRecCountByCondCache(
  objvgs_ResearchResultCond: clsvgs_ResearchResultEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvgs_ResearchResultObjLstCache = await vgs_ResearchResult_GetObjLstCache();
  if (arrvgs_ResearchResultObjLstCache == null) return 0;
  let arrvgs_ResearchResultSel = arrvgs_ResearchResultObjLstCache;
  if (
    objvgs_ResearchResultCond.sfFldComparisonOp == null ||
    objvgs_ResearchResultCond.sfFldComparisonOp == ''
  )
    return arrvgs_ResearchResultSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_ResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_ResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_ResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_ResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_ResearchResultSel = arrvgs_ResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_ResearchResultSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_ResearchResultCond),
      vgs_ResearchResult_ConstructorName,
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
export function vgs_ResearchResult_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vgs_ResearchResult_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvgs_ResearchResultEN._CurrTabName;
    switch (clsvgs_ResearchResultEN.CacheModeId) {
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
export function vgs_ResearchResult_GetJSONStrByObj(
  pobjvgs_ResearchResultEN: clsvgs_ResearchResultEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvgs_ResearchResultEN);
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
export function vgs_ResearchResult_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvgs_ResearchResultEN> {
  let arrvgs_ResearchResultObjLst = new Array<clsvgs_ResearchResultEN>();
  if (strJSON === '') {
    return arrvgs_ResearchResultObjLst;
  }
  try {
    arrvgs_ResearchResultObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvgs_ResearchResultObjLst;
  }
  return arrvgs_ResearchResultObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_ResearchResultObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vgs_ResearchResult_GetObjLstByJSONObjLst(
  arrvgs_ResearchResultObjLstS: Array<clsvgs_ResearchResultEN>,
): Array<clsvgs_ResearchResultEN> {
  const arrvgs_ResearchResultObjLst = new Array<clsvgs_ResearchResultEN>();
  for (const objInFor of arrvgs_ResearchResultObjLstS) {
    const obj1 = vgs_ResearchResult_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvgs_ResearchResultObjLst.push(obj1);
  }
  return arrvgs_ResearchResultObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_ResearchResult_GetObjByJSONStr(strJSON: string): clsvgs_ResearchResultEN {
  let pobjvgs_ResearchResultEN = new clsvgs_ResearchResultEN();
  if (strJSON === '') {
    return pobjvgs_ResearchResultEN;
  }
  try {
    pobjvgs_ResearchResultEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvgs_ResearchResultEN;
  }
  return pobjvgs_ResearchResultEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vgs_ResearchResult_GetCombineCondition(
  objvgs_ResearchResultCond: clsvgs_ResearchResultEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_ResultId,
    ) == true
  ) {
    const strComparisonOpResultId: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_ResultId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_ResultId,
      objvgs_ResearchResultCond.resultId,
      strComparisonOpResultId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_TopicId,
      objvgs_ResearchResultCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_TopicName,
      objvgs_ResearchResultCond.topicName,
      strComparisonOpTopicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_PaperId,
      objvgs_ResearchResultCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_IdCurrEduCls,
      objvgs_ResearchResultCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_ResultTypeId,
    ) == true
  ) {
    const strComparisonOpResultTypeId: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_ResultTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_ResultTypeId,
      objvgs_ResearchResultCond.resultTypeId,
      strComparisonOpResultTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_ResultName,
    ) == true
  ) {
    const strComparisonOpResultName: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_ResultName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_ResultName,
      objvgs_ResearchResultCond.resultName,
      strComparisonOpResultName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_Author,
      objvgs_ResearchResultCond.author,
      strComparisonOpAuthor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_Division,
    ) == true
  ) {
    const strComparisonOpDivision: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_Division];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_Division,
      objvgs_ResearchResultCond.division,
      strComparisonOpDivision,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_ResearchResultEN.con_VersionCount,
      objvgs_ResearchResultCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_OkCount,
    ) == true
  ) {
    const strComparisonOpOkCount: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_OkCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_ResearchResultEN.con_OkCount,
      objvgs_ResearchResultCond.okCount,
      strComparisonOpOkCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_AppraiseCount,
    ) == true
  ) {
    const strComparisonOpAppraiseCount: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_AppraiseCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_ResearchResultEN.con_AppraiseCount,
      objvgs_ResearchResultCond.appraiseCount,
      strComparisonOpAppraiseCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_ResearchResultEN.con_Score,
      objvgs_ResearchResultCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_ResearchResultEN.con_StuScore,
      objvgs_ResearchResultCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_ResearchResultEN.con_TeaScore,
      objvgs_ResearchResultCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_UpdDate,
      objvgs_ResearchResultCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_UpdUser,
      objvgs_ResearchResultCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_ResearchResultCond.dicFldComparisonOp,
      clsvgs_ResearchResultEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvgs_ResearchResultCond.dicFldComparisonOp[clsvgs_ResearchResultEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_ResearchResultEN.con_Memo,
      objvgs_ResearchResultCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_ResearchResultENS:源对象
 * @param objvgs_ResearchResultENT:目标对象
 */
export function vgs_ResearchResult_CopyObjTo(
  objvgs_ResearchResultENS: clsvgs_ResearchResultEN,
  objvgs_ResearchResultENT: clsvgs_ResearchResultEN,
): void {
  objvgs_ResearchResultENT.resultId = objvgs_ResearchResultENS.resultId; //成果Id
  objvgs_ResearchResultENT.topicId = objvgs_ResearchResultENS.topicId; //主题Id
  objvgs_ResearchResultENT.topicName = objvgs_ResearchResultENS.topicName; //栏目主题
  objvgs_ResearchResultENT.paperId = objvgs_ResearchResultENS.paperId; //论文Id
  objvgs_ResearchResultENT.idCurrEduCls = objvgs_ResearchResultENS.idCurrEduCls; //教学班流水号
  objvgs_ResearchResultENT.resultTypeId = objvgs_ResearchResultENS.resultTypeId; //成果类型Id
  objvgs_ResearchResultENT.resultName = objvgs_ResearchResultENS.resultName; //成果名称
  objvgs_ResearchResultENT.resultContent = objvgs_ResearchResultENS.resultContent; //成果内容
  objvgs_ResearchResultENT.author = objvgs_ResearchResultENS.author; //作者
  objvgs_ResearchResultENT.division = objvgs_ResearchResultENS.division; //分工
  objvgs_ResearchResultENT.versionCount = objvgs_ResearchResultENS.versionCount; //版本统计
  objvgs_ResearchResultENT.okCount = objvgs_ResearchResultENS.okCount; //点赞统计
  objvgs_ResearchResultENT.appraiseCount = objvgs_ResearchResultENS.appraiseCount; //评论数
  objvgs_ResearchResultENT.score = objvgs_ResearchResultENS.score; //评分
  objvgs_ResearchResultENT.stuScore = objvgs_ResearchResultENS.stuScore; //学生平均分
  objvgs_ResearchResultENT.teaScore = objvgs_ResearchResultENS.teaScore; //教师评分
  objvgs_ResearchResultENT.updDate = objvgs_ResearchResultENS.updDate; //修改日期
  objvgs_ResearchResultENT.updUser = objvgs_ResearchResultENS.updUser; //修改人
  objvgs_ResearchResultENT.memo = objvgs_ResearchResultENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_ResearchResultENS:源对象
 * @param objvgs_ResearchResultENT:目标对象
 */
export function vgs_ResearchResult_GetObjFromJsonObj(
  objvgs_ResearchResultENS: clsvgs_ResearchResultEN,
): clsvgs_ResearchResultEN {
  const objvgs_ResearchResultENT: clsvgs_ResearchResultEN = new clsvgs_ResearchResultEN();
  ObjectAssign(objvgs_ResearchResultENT, objvgs_ResearchResultENS);
  return objvgs_ResearchResultENT;
}
