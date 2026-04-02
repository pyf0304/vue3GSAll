/**
 * 类名:clsvRTResearchResultWApi
 * 表名:vRTResearchResult(01120621)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:32
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
 * 主题研究结果关系(vRTResearchResult)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvRTResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsvRTResearchResultEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vRTResearchResult_Controller = 'vRTResearchResultApi';
export const vRTResearchResult_ConstructorName = 'vRTResearchResult';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vRTResearchResult_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvRTResearchResultEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTResearchResultWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objvRTResearchResult = vRTResearchResult_GetObjFromJsonObj(returnObj);
      return objvRTResearchResult;
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTResearchResult_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvRTResearchResultWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
  try {
    const arrvRTResearchResultSel = arrvRTResearchResultObjLstCache.filter((x) => x.mId == lngmId);
    let objvRTResearchResult: clsvRTResearchResultEN;
    if (arrvRTResearchResultSel.length > 0) {
      objvRTResearchResult = arrvRTResearchResultSel[0];
      return objvRTResearchResult;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvRTResearchResultConst = await vRTResearchResult_GetObjBymIdAsync(lngmId);
        if (objvRTResearchResultConst != null) {
          vRTResearchResult_ReFreshThisCache();
          return objvRTResearchResultConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTResearchResult_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvRTResearchResultWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvRTResearchResultEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvRTResearchResultCache: clsvRTResearchResultEN = JSON.parse(strTempObj);
    return objvRTResearchResultCache;
  }
  try {
    const objvRTResearchResult = await vRTResearchResult_GetObjBymIdAsync(lngmId);
    if (objvRTResearchResult != null) {
      localStorage.setItem(strKey, JSON.stringify(objvRTResearchResult));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvRTResearchResult;
    }
    return objvRTResearchResult;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvRTResearchResultEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvRTResearchResultEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvRTResearchResultEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvRTResearchResult = await vRTResearchResult_GetObjBymIdCache(lngmId);
  if (objvRTResearchResult == null) return '';
  if (objvRTResearchResult.GetFldValue(strOutFldName) == null) return '';
  return objvRTResearchResult.GetFldValue(strOutFldName).toString();
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
export function vRTResearchResult_SortFunDefa(
  a: clsvRTResearchResultEN,
  b: clsvRTResearchResultEN,
): number {
  return a.mId - b.mId;
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
export function vRTResearchResult_SortFunDefa2Fld(
  a: clsvRTResearchResultEN,
  b: clsvRTResearchResultEN,
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
export function vRTResearchResult_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvRTResearchResultEN.con_TopicId:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvRTResearchResultEN.con_PaperId:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.paperId == null) return -1;
          if (b.paperId == null) return 1;
          return a.paperId.localeCompare(b.paperId);
        };
      case clsvRTResearchResultEN.con_UpdDate:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvRTResearchResultEN.con_UpdUser:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvRTResearchResultEN.con_Memo:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvRTResearchResultEN.con_mId:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          return a.mId - b.mId;
        };
      case clsvRTResearchResultEN.con_UserName:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvRTResearchResultEN.con_PaperTitle:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.paperTitle == null) return -1;
          if (b.paperTitle == null) return 1;
          return a.paperTitle.localeCompare(b.paperTitle);
        };
      case clsvRTResearchResultEN.con_PaperContent:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.paperContent == null) return -1;
          if (b.paperContent == null) return 1;
          return a.paperContent.localeCompare(b.paperContent);
        };
      case clsvRTResearchResultEN.con_TopicName:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvRTResearchResultEN.con_TopicContent:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.topicContent == null) return -1;
          if (b.topicContent == null) return 1;
          return a.topicContent.localeCompare(b.topicContent);
        };
      case clsvRTResearchResultEN.con_TopicProposePeople:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.topicProposePeople == null) return -1;
          if (b.topicProposePeople == null) return 1;
          return a.topicProposePeople.localeCompare(b.topicProposePeople);
        };
      case clsvRTResearchResultEN.con_Periodical:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.periodical == null) return -1;
          if (b.periodical == null) return 1;
          return a.periodical.localeCompare(b.periodical);
        };
      case clsvRTResearchResultEN.con_Author:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (a.author == null) return -1;
          if (b.author == null) return 1;
          return a.author.localeCompare(b.author);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTResearchResult]中不存在!(in ${vRTResearchResult_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvRTResearchResultEN.con_TopicId:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvRTResearchResultEN.con_PaperId:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.paperId == null) return -1;
          if (a.paperId == null) return 1;
          return b.paperId.localeCompare(a.paperId);
        };
      case clsvRTResearchResultEN.con_UpdDate:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvRTResearchResultEN.con_UpdUser:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvRTResearchResultEN.con_Memo:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvRTResearchResultEN.con_mId:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          return b.mId - a.mId;
        };
      case clsvRTResearchResultEN.con_UserName:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvRTResearchResultEN.con_PaperTitle:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.paperTitle == null) return -1;
          if (a.paperTitle == null) return 1;
          return b.paperTitle.localeCompare(a.paperTitle);
        };
      case clsvRTResearchResultEN.con_PaperContent:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.paperContent == null) return -1;
          if (a.paperContent == null) return 1;
          return b.paperContent.localeCompare(a.paperContent);
        };
      case clsvRTResearchResultEN.con_TopicName:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvRTResearchResultEN.con_TopicContent:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.topicContent == null) return -1;
          if (a.topicContent == null) return 1;
          return b.topicContent.localeCompare(a.topicContent);
        };
      case clsvRTResearchResultEN.con_TopicProposePeople:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.topicProposePeople == null) return -1;
          if (a.topicProposePeople == null) return 1;
          return b.topicProposePeople.localeCompare(a.topicProposePeople);
        };
      case clsvRTResearchResultEN.con_Periodical:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.periodical == null) return -1;
          if (a.periodical == null) return 1;
          return b.periodical.localeCompare(a.periodical);
        };
      case clsvRTResearchResultEN.con_Author:
        return (a: clsvRTResearchResultEN, b: clsvRTResearchResultEN) => {
          if (b.author == null) return -1;
          if (a.author == null) return 1;
          return b.author.localeCompare(a.author);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vRTResearchResult]中不存在!(in ${vRTResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function vRTResearchResult_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvRTResearchResultEN.con_TopicId:
      return (obj: clsvRTResearchResultEN) => {
        return obj.topicId === value;
      };
    case clsvRTResearchResultEN.con_PaperId:
      return (obj: clsvRTResearchResultEN) => {
        return obj.paperId === value;
      };
    case clsvRTResearchResultEN.con_UpdDate:
      return (obj: clsvRTResearchResultEN) => {
        return obj.updDate === value;
      };
    case clsvRTResearchResultEN.con_UpdUser:
      return (obj: clsvRTResearchResultEN) => {
        return obj.updUser === value;
      };
    case clsvRTResearchResultEN.con_Memo:
      return (obj: clsvRTResearchResultEN) => {
        return obj.memo === value;
      };
    case clsvRTResearchResultEN.con_mId:
      return (obj: clsvRTResearchResultEN) => {
        return obj.mId === value;
      };
    case clsvRTResearchResultEN.con_UserName:
      return (obj: clsvRTResearchResultEN) => {
        return obj.userName === value;
      };
    case clsvRTResearchResultEN.con_PaperTitle:
      return (obj: clsvRTResearchResultEN) => {
        return obj.paperTitle === value;
      };
    case clsvRTResearchResultEN.con_PaperContent:
      return (obj: clsvRTResearchResultEN) => {
        return obj.paperContent === value;
      };
    case clsvRTResearchResultEN.con_TopicName:
      return (obj: clsvRTResearchResultEN) => {
        return obj.topicName === value;
      };
    case clsvRTResearchResultEN.con_TopicContent:
      return (obj: clsvRTResearchResultEN) => {
        return obj.topicContent === value;
      };
    case clsvRTResearchResultEN.con_TopicProposePeople:
      return (obj: clsvRTResearchResultEN) => {
        return obj.topicProposePeople === value;
      };
    case clsvRTResearchResultEN.con_Periodical:
      return (obj: clsvRTResearchResultEN) => {
        return obj.periodical === value;
      };
    case clsvRTResearchResultEN.con_Author:
      return (obj: clsvRTResearchResultEN) => {
        return obj.author === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vRTResearchResult]中不存在!(in ${vRTResearchResult_ConstructorName}.${strThisFuncName})`;
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
export async function vRTResearchResult_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvRTResearchResultEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvRTResearchResult = await vRTResearchResult_GetObjLstCache();
  if (arrvRTResearchResult == null) return [];
  let arrvRTResearchResultSel = arrvRTResearchResult;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvRTResearchResultSel.length == 0) return [];
  return arrvRTResearchResultSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vRTResearchResult_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvRTResearchResultEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
      const objvRTResearchResult = vRTResearchResult_GetObjFromJsonObj(returnObj);
      return objvRTResearchResult;
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvRTResearchResultExObjLstCache: Array<clsvRTResearchResultEN> =
      CacheHelper.Get(strKey);
    const arrvRTResearchResultObjLstT = vRTResearchResult_GetObjLstByJSONObjLst(
      arrvRTResearchResultExObjLstCache,
    );
    return arrvRTResearchResultObjLstT;
  }
  try {
    const arrvRTResearchResultExObjLst = await vRTResearchResult_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvRTResearchResultExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTResearchResultExObjLstCache: Array<clsvRTResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrvRTResearchResultObjLstT = vRTResearchResult_GetObjLstByJSONObjLst(
      arrvRTResearchResultExObjLstCache,
    );
    return arrvRTResearchResultObjLstT;
  }
  try {
    const arrvRTResearchResultExObjLst = await vRTResearchResult_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvRTResearchResultExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvRTResearchResultObjLstCache: Array<clsvRTResearchResultEN> =
      JSON.parse(strTempObjLst);
    return arrvRTResearchResultObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vRTResearchResult_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
          vRTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvRTResearchResultEN._CurrTabName;
  if (IsNullOrEmpty(clsvRTResearchResultEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvRTResearchResultEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTResearchResultExObjLstCache: Array<clsvRTResearchResultEN> =
      JSON.parse(strTempObjLst);
    const arrvRTResearchResultObjLstT = vRTResearchResult_GetObjLstByJSONObjLst(
      arrvRTResearchResultExObjLstCache,
    );
    return arrvRTResearchResultObjLstT;
  }
  try {
    const arrvRTResearchResultExObjLst = await vRTResearchResult_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvRTResearchResultExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvRTResearchResultExObjLst.length,
    );
    console.log(strInfo);
    return arrvRTResearchResultExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvRTResearchResultEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvRTResearchResultObjLstCache: Array<clsvRTResearchResultEN> =
      JSON.parse(strTempObjLst);
    return arrvRTResearchResultObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTResearchResult_GetObjLstCache(): Promise<Array<clsvRTResearchResultEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvRTResearchResultObjLstCache;
  switch (clsvRTResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstClientCache();
      break;
    default:
      arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstClientCache();
      break;
  }
  return arrvRTResearchResultObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vRTResearchResult_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvRTResearchResultObjLstCache;
  switch (clsvRTResearchResultEN.CacheModeId) {
    case '04': //sessionStorage
      arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvRTResearchResultObjLstCache = null;
      break;
    default:
      arrvRTResearchResultObjLstCache = null;
      break;
  }
  return arrvRTResearchResultObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTResearchResult_GetSubObjLstCache(
  objvRTResearchResultCond: clsvRTResearchResultEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
  let arrvRTResearchResultSel = arrvRTResearchResultObjLstCache;
  if (
    objvRTResearchResultCond.sfFldComparisonOp == null ||
    objvRTResearchResultCond.sfFldComparisonOp == ''
  )
    return arrvRTResearchResultSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsvRTResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTResearchResultCond),
      vRTResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTResearchResultEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vRTResearchResult_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vRTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function vRTResearchResult_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
    const arrvRTResearchResultSel = arrvRTResearchResultObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvRTResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvRTResearchResultEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
          vRTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
          vRTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTResearchResultEN>();
  const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
  if (arrvRTResearchResultObjLstCache.length == 0) return arrvRTResearchResultObjLstCache;
  let arrvRTResearchResultSel = arrvRTResearchResultObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvRTResearchResultCond = new clsvRTResearchResultEN();
  ObjectAssign(objvRTResearchResultCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvRTResearchResultWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTResearchResultSel.length == 0) return arrvRTResearchResultSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvRTResearchResultSel = arrvRTResearchResultSel.sort(
        vRTResearchResult_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvRTResearchResultSel = arrvRTResearchResultSel.sort(objPagerPara.sortFun);
    }
    arrvRTResearchResultSel = arrvRTResearchResultSel.slice(intStart, intEnd);
    return arrvRTResearchResultSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vRTResearchResult_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvRTResearchResultEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vRTResearchResult_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvRTResearchResultEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvRTResearchResultEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
          vRTResearchResult_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vRTResearchResult_GetObjLstByJSONObjLst(returnObjLst);
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vRTResearchResult_IsExistRecordCache(
  objvRTResearchResultCond: clsvRTResearchResultEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
  if (arrvRTResearchResultObjLstCache == null) return false;
  let arrvRTResearchResultSel = arrvRTResearchResultObjLstCache;
  if (
    objvRTResearchResultCond.sfFldComparisonOp == null ||
    objvRTResearchResultCond.sfFldComparisonOp == ''
  )
    return arrvRTResearchResultSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsvRTResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvRTResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvRTResearchResultCond),
      vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vRTResearchResult_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
  if (arrvRTResearchResultObjLstCache == null) return false;
  try {
    const arrvRTResearchResultSel = arrvRTResearchResultObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvRTResearchResultSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vRTResearchResult_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vRTResearchResult_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
export async function vRTResearchResult_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vRTResearchResult_Controller, strAction);

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
        vRTResearchResult_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vRTResearchResult_ConstructorName,
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
 * @param objvRTResearchResultCond:条件对象
 * @returns 对象列表记录数
 */
export async function vRTResearchResult_GetRecCountByCondCache(
  objvRTResearchResultCond: clsvRTResearchResultEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvRTResearchResultObjLstCache = await vRTResearchResult_GetObjLstCache();
  if (arrvRTResearchResultObjLstCache == null) return 0;
  let arrvRTResearchResultSel = arrvRTResearchResultObjLstCache;
  if (
    objvRTResearchResultCond.sfFldComparisonOp == null ||
    objvRTResearchResultCond.sfFldComparisonOp == ''
  )
    return arrvRTResearchResultSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvRTResearchResultCond.sfFldComparisonOp,
  );
  //console.log("clsvRTResearchResultWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvRTResearchResultCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvRTResearchResultCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvRTResearchResultSel = arrvRTResearchResultSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvRTResearchResultSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvRTResearchResultCond),
      vRTResearchResult_ConstructorName,
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
export function vRTResearchResult_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vRTResearchResult_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvRTResearchResultEN._CurrTabName;
    switch (clsvRTResearchResultEN.CacheModeId) {
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
export function vRTResearchResult_GetJSONStrByObj(
  pobjvRTResearchResultEN: clsvRTResearchResultEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvRTResearchResultEN);
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
export function vRTResearchResult_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvRTResearchResultEN> {
  let arrvRTResearchResultObjLst = new Array<clsvRTResearchResultEN>();
  if (strJSON === '') {
    return arrvRTResearchResultObjLst;
  }
  try {
    arrvRTResearchResultObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvRTResearchResultObjLst;
  }
  return arrvRTResearchResultObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvRTResearchResultObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vRTResearchResult_GetObjLstByJSONObjLst(
  arrvRTResearchResultObjLstS: Array<clsvRTResearchResultEN>,
): Array<clsvRTResearchResultEN> {
  const arrvRTResearchResultObjLst = new Array<clsvRTResearchResultEN>();
  for (const objInFor of arrvRTResearchResultObjLstS) {
    const obj1 = vRTResearchResult_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvRTResearchResultObjLst.push(obj1);
  }
  return arrvRTResearchResultObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vRTResearchResult_GetObjByJSONStr(strJSON: string): clsvRTResearchResultEN {
  let pobjvRTResearchResultEN = new clsvRTResearchResultEN();
  if (strJSON === '') {
    return pobjvRTResearchResultEN;
  }
  try {
    pobjvRTResearchResultEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvRTResearchResultEN;
  }
  return pobjvRTResearchResultEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vRTResearchResult_GetCombineCondition(
  objvRTResearchResultCond: clsvRTResearchResultEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_TopicId,
      objvRTResearchResultCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_PaperId,
    ) == true
  ) {
    const strComparisonOpPaperId: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_PaperId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_PaperId,
      objvRTResearchResultCond.paperId,
      strComparisonOpPaperId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_UpdDate,
      objvRTResearchResultCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_UpdUser,
      objvRTResearchResultCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_Memo,
      objvRTResearchResultCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvRTResearchResultEN.con_mId,
      objvRTResearchResultCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_UserName,
      objvRTResearchResultCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_PaperTitle,
    ) == true
  ) {
    const strComparisonOpPaperTitle: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_PaperTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_PaperTitle,
      objvRTResearchResultCond.paperTitle,
      strComparisonOpPaperTitle,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_TopicName,
      objvRTResearchResultCond.topicName,
      strComparisonOpTopicName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_TopicProposePeople,
    ) == true
  ) {
    const strComparisonOpTopicProposePeople: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_TopicProposePeople];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_TopicProposePeople,
      objvRTResearchResultCond.topicProposePeople,
      strComparisonOpTopicProposePeople,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_Periodical,
    ) == true
  ) {
    const strComparisonOpPeriodical: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_Periodical];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_Periodical,
      objvRTResearchResultCond.periodical,
      strComparisonOpPeriodical,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvRTResearchResultCond.dicFldComparisonOp,
      clsvRTResearchResultEN.con_Author,
    ) == true
  ) {
    const strComparisonOpAuthor: string =
      objvRTResearchResultCond.dicFldComparisonOp[clsvRTResearchResultEN.con_Author];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvRTResearchResultEN.con_Author,
      objvRTResearchResultCond.author,
      strComparisonOpAuthor,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvRTResearchResultENS:源对象
 * @param objvRTResearchResultENT:目标对象
 */
export function vRTResearchResult_CopyObjTo(
  objvRTResearchResultENS: clsvRTResearchResultEN,
  objvRTResearchResultENT: clsvRTResearchResultEN,
): void {
  objvRTResearchResultENT.topicId = objvRTResearchResultENS.topicId; //主题Id
  objvRTResearchResultENT.paperId = objvRTResearchResultENS.paperId; //论文Id
  objvRTResearchResultENT.updDate = objvRTResearchResultENS.updDate; //修改日期
  objvRTResearchResultENT.updUser = objvRTResearchResultENS.updUser; //修改人
  objvRTResearchResultENT.memo = objvRTResearchResultENS.memo; //备注
  objvRTResearchResultENT.mId = objvRTResearchResultENS.mId; //mId
  objvRTResearchResultENT.userName = objvRTResearchResultENS.userName; //用户名
  objvRTResearchResultENT.paperTitle = objvRTResearchResultENS.paperTitle; //论文标题
  objvRTResearchResultENT.paperContent = objvRTResearchResultENS.paperContent; //主题内容
  objvRTResearchResultENT.topicName = objvRTResearchResultENS.topicName; //栏目主题
  objvRTResearchResultENT.topicContent = objvRTResearchResultENS.topicContent; //主题内容
  objvRTResearchResultENT.topicProposePeople = objvRTResearchResultENS.topicProposePeople; //主题提出人
  objvRTResearchResultENT.periodical = objvRTResearchResultENS.periodical; //期刊
  objvRTResearchResultENT.author = objvRTResearchResultENS.author; //作者
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvRTResearchResultENS:源对象
 * @param objvRTResearchResultENT:目标对象
 */
export function vRTResearchResult_GetObjFromJsonObj(
  objvRTResearchResultENS: clsvRTResearchResultEN,
): clsvRTResearchResultEN {
  const objvRTResearchResultENT: clsvRTResearchResultEN = new clsvRTResearchResultEN();
  ObjectAssign(objvRTResearchResultENT, objvRTResearchResultENS);
  return objvRTResearchResultENT;
}
