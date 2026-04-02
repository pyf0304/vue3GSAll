/**
 * 类名:clsvgs_TobeStudiedProblemWApi
 * 表名:vgs_TobeStudiedProblem(01120774)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:30
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
 * 待研究问题视图(vgs_TobeStudiedProblem)
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
import { clsvgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_TobeStudiedProblemEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vgs_TobeStudiedProblem_Controller = 'vgs_TobeStudiedProblemApi';
export const vgs_TobeStudiedProblem_ConstructorName = 'vgs_TobeStudiedProblem';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strProblemId:关键字
 * @returns 对象
 **/
export async function vgs_TobeStudiedProblem_GetObjByProblemIdAsync(
  strProblemId: string,
): Promise<clsvgs_TobeStudiedProblemEN | null> {
  const strThisFuncName = 'GetObjByProblemIdAsync';

  if (IsNullOrEmpty(strProblemId) == true) {
    const strMsg = Format(
      '参数:[strProblemId]不能为空!(In clsvgs_TobeStudiedProblemWApi.GetObjByProblemIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProblemId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strProblemId]的长度:[{0}]不正确!(clsvgs_TobeStudiedProblemWApi.GetObjByProblemIdAsync)',
      strProblemId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByProblemId';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strProblemId,
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
      const objvgs_TobeStudiedProblem = vgs_TobeStudiedProblem_GetObjFromJsonObj(returnObj);
      return objvgs_TobeStudiedProblem;
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
 * @param strProblemId:所给的关键字
 * @returns 对象
 */
export async function vgs_TobeStudiedProblem_GetObjByProblemIdCache(
  strProblemId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByProblemIdCache';

  if (IsNullOrEmpty(strProblemId) == true) {
    const strMsg = Format(
      '参数:[strProblemId]不能为空!(In clsvgs_TobeStudiedProblemWApi.GetObjByProblemIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProblemId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strProblemId]的长度:[{0}]不正确!(clsvgs_TobeStudiedProblemWApi.GetObjByProblemIdCache)',
      strProblemId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
  try {
    const arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache.filter(
      (x) => x.problemId == strProblemId,
    );
    let objvgs_TobeStudiedProblem: clsvgs_TobeStudiedProblemEN;
    if (arrvgs_TobeStudiedProblemSel.length > 0) {
      objvgs_TobeStudiedProblem = arrvgs_TobeStudiedProblemSel[0];
      return objvgs_TobeStudiedProblem;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvgs_TobeStudiedProblemConst = await vgs_TobeStudiedProblem_GetObjByProblemIdAsync(
          strProblemId,
        );
        if (objvgs_TobeStudiedProblemConst != null) {
          vgs_TobeStudiedProblem_ReFreshThisCache();
          return objvgs_TobeStudiedProblemConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strProblemId,
      vgs_TobeStudiedProblem_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strProblemId:所给的关键字
 * @returns 对象
 */
export async function vgs_TobeStudiedProblem_GetObjByProblemIdlocalStorage(strProblemId: string) {
  const strThisFuncName = 'GetObjByProblemIdlocalStorage';

  if (IsNullOrEmpty(strProblemId) == true) {
    const strMsg = Format(
      '参数:[strProblemId]不能为空!(In clsvgs_TobeStudiedProblemWApi.GetObjByProblemIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProblemId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strProblemId]的长度:[{0}]不正确!(clsvgs_TobeStudiedProblemWApi.GetObjByProblemIdlocalStorage)',
      strProblemId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvgs_TobeStudiedProblemEN._CurrTabName, strProblemId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvgs_TobeStudiedProblemCache: clsvgs_TobeStudiedProblemEN = JSON.parse(strTempObj);
    return objvgs_TobeStudiedProblemCache;
  }
  try {
    const objvgs_TobeStudiedProblem = await vgs_TobeStudiedProblem_GetObjByProblemIdAsync(
      strProblemId,
    );
    if (objvgs_TobeStudiedProblem != null) {
      localStorage.setItem(strKey, JSON.stringify(objvgs_TobeStudiedProblem));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvgs_TobeStudiedProblem;
    }
    return objvgs_TobeStudiedProblem;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strProblemId,
      vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvgs_TobeStudiedProblemEN.con_ProblemId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvgs_TobeStudiedProblemEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvgs_TobeStudiedProblemEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strProblemId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvgs_TobeStudiedProblem = await vgs_TobeStudiedProblem_GetObjByProblemIdCache(
    strProblemId,
  );
  if (objvgs_TobeStudiedProblem == null) return '';
  if (objvgs_TobeStudiedProblem.GetFldValue(strOutFldName) == null) return '';
  return objvgs_TobeStudiedProblem.GetFldValue(strOutFldName).toString();
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
export function vgs_TobeStudiedProblem_SortFunDefa(
  a: clsvgs_TobeStudiedProblemEN,
  b: clsvgs_TobeStudiedProblemEN,
): number {
  return a.problemId.localeCompare(b.problemId);
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
export function vgs_TobeStudiedProblem_SortFunDefa2Fld(
  a: clsvgs_TobeStudiedProblemEN,
  b: clsvgs_TobeStudiedProblemEN,
): number {
  if (a.problemTitle == b.problemTitle) return a.problemContent.localeCompare(b.problemContent);
  else return a.problemTitle.localeCompare(b.problemTitle);
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
export function vgs_TobeStudiedProblem_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvgs_TobeStudiedProblemEN.con_ProblemId:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          return a.problemId.localeCompare(b.problemId);
        };
      case clsvgs_TobeStudiedProblemEN.con_ProblemTitle:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.problemTitle == null) return -1;
          if (b.problemTitle == null) return 1;
          return a.problemTitle.localeCompare(b.problemTitle);
        };
      case clsvgs_TobeStudiedProblemEN.con_ProblemContent:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.problemContent == null) return -1;
          if (b.problemContent == null) return 1;
          return a.problemContent.localeCompare(b.problemContent);
        };
      case clsvgs_TobeStudiedProblemEN.con_TopicId:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsvgs_TobeStudiedProblemEN.con_TopicName:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.topicName == null) return -1;
          if (b.topicName == null) return 1;
          return a.topicName.localeCompare(b.topicName);
        };
      case clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvgs_TobeStudiedProblemEN.con_IsSubmit:
        return (a: clsvgs_TobeStudiedProblemEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsvgs_TobeStudiedProblemEN.con_ProblemDate:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.problemDate == null) return -1;
          if (b.problemDate == null) return 1;
          return a.problemDate.localeCompare(b.problemDate);
        };
      case clsvgs_TobeStudiedProblemEN.con_UpdDate:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvgs_TobeStudiedProblemEN.con_UpdUser:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvgs_TobeStudiedProblemEN.con_Year:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.year == null) return -1;
          if (b.year == null) return 1;
          return a.year.localeCompare(b.year);
        };
      case clsvgs_TobeStudiedProblemEN.con_Month:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.month == null) return -1;
          if (b.month == null) return 1;
          return a.month.localeCompare(b.month);
        };
      case clsvgs_TobeStudiedProblemEN.con_VersionCount:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsvgs_TobeStudiedProblemEN.con_Participant:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.participant == null) return -1;
          if (b.participant == null) return 1;
          return a.participant.localeCompare(b.participant);
        };
      case clsvgs_TobeStudiedProblemEN.con_Memo:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_TobeStudiedProblem]中不存在!(in ${vgs_TobeStudiedProblem_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvgs_TobeStudiedProblemEN.con_ProblemId:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          return b.problemId.localeCompare(a.problemId);
        };
      case clsvgs_TobeStudiedProblemEN.con_ProblemTitle:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.problemTitle == null) return -1;
          if (a.problemTitle == null) return 1;
          return b.problemTitle.localeCompare(a.problemTitle);
        };
      case clsvgs_TobeStudiedProblemEN.con_ProblemContent:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.problemContent == null) return -1;
          if (a.problemContent == null) return 1;
          return b.problemContent.localeCompare(a.problemContent);
        };
      case clsvgs_TobeStudiedProblemEN.con_TopicId:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsvgs_TobeStudiedProblemEN.con_TopicName:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.topicName == null) return -1;
          if (a.topicName == null) return 1;
          return b.topicName.localeCompare(a.topicName);
        };
      case clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvgs_TobeStudiedProblemEN.con_IsSubmit:
        return (b: clsvgs_TobeStudiedProblemEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsvgs_TobeStudiedProblemEN.con_ProblemDate:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.problemDate == null) return -1;
          if (a.problemDate == null) return 1;
          return b.problemDate.localeCompare(a.problemDate);
        };
      case clsvgs_TobeStudiedProblemEN.con_UpdDate:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvgs_TobeStudiedProblemEN.con_UpdUser:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvgs_TobeStudiedProblemEN.con_Year:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.year == null) return -1;
          if (a.year == null) return 1;
          return b.year.localeCompare(a.year);
        };
      case clsvgs_TobeStudiedProblemEN.con_Month:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.month == null) return -1;
          if (a.month == null) return 1;
          return b.month.localeCompare(a.month);
        };
      case clsvgs_TobeStudiedProblemEN.con_VersionCount:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsvgs_TobeStudiedProblemEN.con_Participant:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.participant == null) return -1;
          if (a.participant == null) return 1;
          return b.participant.localeCompare(a.participant);
        };
      case clsvgs_TobeStudiedProblemEN.con_Memo:
        return (a: clsvgs_TobeStudiedProblemEN, b: clsvgs_TobeStudiedProblemEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_TobeStudiedProblem]中不存在!(in ${vgs_TobeStudiedProblem_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_TobeStudiedProblem_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvgs_TobeStudiedProblemEN.con_ProblemId:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.problemId === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_ProblemTitle:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.problemTitle === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_ProblemContent:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.problemContent === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_TopicId:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.topicId === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_TopicName:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.topicName === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_IsSubmit:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.isSubmit === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_ProblemDate:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.problemDate === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_UpdDate:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.updDate === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_UpdUser:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.updUser === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_Year:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.year === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_Month:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.month === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_VersionCount:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.versionCount === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_Participant:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.participant === value;
      };
    case clsvgs_TobeStudiedProblemEN.con_Memo:
      return (obj: clsvgs_TobeStudiedProblemEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vgs_TobeStudiedProblem]中不存在!(in ${vgs_TobeStudiedProblem_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_TobeStudiedProblem_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvgs_TobeStudiedProblemEN.con_ProblemId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvgs_TobeStudiedProblem = await vgs_TobeStudiedProblem_GetObjLstCache();
  if (arrvgs_TobeStudiedProblem == null) return [];
  let arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblem;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvgs_TobeStudiedProblemSel.length == 0) return [];
  return arrvgs_TobeStudiedProblemSel.map((x) => x.problemId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vgs_TobeStudiedProblem_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvgs_TobeStudiedProblemEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
      const objvgs_TobeStudiedProblem = vgs_TobeStudiedProblem_GetObjFromJsonObj(returnObj);
      return objvgs_TobeStudiedProblem;
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_TobeStudiedProblemEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_TobeStudiedProblemEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_TobeStudiedProblemEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvgs_TobeStudiedProblemExObjLstCache: Array<clsvgs_TobeStudiedProblemEN> =
      CacheHelper.Get(strKey);
    const arrvgs_TobeStudiedProblemObjLstT = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(
      arrvgs_TobeStudiedProblemExObjLstCache,
    );
    return arrvgs_TobeStudiedProblemObjLstT;
  }
  try {
    const arrvgs_TobeStudiedProblemExObjLst = await vgs_TobeStudiedProblem_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvgs_TobeStudiedProblemExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_TobeStudiedProblemExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_TobeStudiedProblemExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_TobeStudiedProblemEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_TobeStudiedProblemEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_TobeStudiedProblemEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_TobeStudiedProblemExObjLstCache: Array<clsvgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_TobeStudiedProblemObjLstT = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(
      arrvgs_TobeStudiedProblemExObjLstCache,
    );
    return arrvgs_TobeStudiedProblemObjLstT;
  }
  try {
    const arrvgs_TobeStudiedProblemExObjLst = await vgs_TobeStudiedProblem_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvgs_TobeStudiedProblemExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_TobeStudiedProblemExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_TobeStudiedProblemExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_TobeStudiedProblemEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_TobeStudiedProblemObjLstCache: Array<clsvgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_TobeStudiedProblemObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vgs_TobeStudiedProblem_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
          vgs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_TobeStudiedProblemEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_TobeStudiedProblemEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_TobeStudiedProblemEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_TobeStudiedProblemExObjLstCache: Array<clsvgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_TobeStudiedProblemObjLstT = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(
      arrvgs_TobeStudiedProblemExObjLstCache,
    );
    return arrvgs_TobeStudiedProblemObjLstT;
  }
  try {
    const arrvgs_TobeStudiedProblemExObjLst = await vgs_TobeStudiedProblem_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvgs_TobeStudiedProblemExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_TobeStudiedProblemExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_TobeStudiedProblemExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_TobeStudiedProblemEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_TobeStudiedProblemObjLstCache: Array<clsvgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_TobeStudiedProblemObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_TobeStudiedProblem_GetObjLstCache(): Promise<
  Array<clsvgs_TobeStudiedProblemEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvgs_TobeStudiedProblemObjLstCache;
  switch (clsvgs_TobeStudiedProblemEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstClientCache();
      break;
    default:
      arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstClientCache();
      break;
  }
  return arrvgs_TobeStudiedProblemObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_TobeStudiedProblem_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvgs_TobeStudiedProblemObjLstCache;
  switch (clsvgs_TobeStudiedProblemEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_TobeStudiedProblemObjLstCache =
        await vgs_TobeStudiedProblem_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvgs_TobeStudiedProblemObjLstCache =
        await vgs_TobeStudiedProblem_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvgs_TobeStudiedProblemObjLstCache = null;
      break;
    default:
      arrvgs_TobeStudiedProblemObjLstCache = null;
      break;
  }
  return arrvgs_TobeStudiedProblemObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrProblemIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_TobeStudiedProblem_GetSubObjLstCache(
  objvgs_TobeStudiedProblemCond: clsvgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
  let arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache;
  if (
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp == null ||
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp == ''
  )
    return arrvgs_TobeStudiedProblemSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TobeStudiedProblemWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TobeStudiedProblemCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TobeStudiedProblemSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_TobeStudiedProblemCond),
      vgs_TobeStudiedProblem_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TobeStudiedProblemEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrProblemId:关键字列表
 * @returns 对象列表
 **/
export async function vgs_TobeStudiedProblem_GetObjLstByProblemIdLstAsync(
  arrProblemId: Array<string>,
): Promise<Array<clsvgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstByProblemIdLstAsync';
  const strAction = 'GetObjLstByProblemIdLst';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrProblemId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
 * @param arrstrProblemIdLst:关键字列表
 * @returns 对象列表
 */
export async function vgs_TobeStudiedProblem_GetObjLstByProblemIdLstCache(
  arrProblemIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByProblemIdLstCache';
  try {
    const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
    const arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache.filter(
      (x) => arrProblemIdLst.indexOf(x.problemId) > -1,
    );
    return arrvgs_TobeStudiedProblemSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrProblemIdLst.join(','),
      vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
          vgs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
          vgs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_TobeStudiedProblemEN>();
  const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
  if (arrvgs_TobeStudiedProblemObjLstCache.length == 0) return arrvgs_TobeStudiedProblemObjLstCache;
  let arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvgs_TobeStudiedProblemCond = new clsvgs_TobeStudiedProblemEN();
  ObjectAssign(objvgs_TobeStudiedProblemCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvgs_TobeStudiedProblemWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_TobeStudiedProblemSel.length == 0) return arrvgs_TobeStudiedProblemSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.sort(
        vgs_TobeStudiedProblem_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.sort(objPagerPara.sortFun);
    }
    arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.slice(intStart, intEnd);
    return arrvgs_TobeStudiedProblemSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_TobeStudiedProblem_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TobeStudiedProblemEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vgs_TobeStudiedProblem_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_TobeStudiedProblemEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
          vgs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
 * @param objstrProblemIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_TobeStudiedProblem_IsExistRecordCache(
  objvgs_TobeStudiedProblemCond: clsvgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
  if (arrvgs_TobeStudiedProblemObjLstCache == null) return false;
  let arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache;
  if (
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp == null ||
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp == ''
  )
    return arrvgs_TobeStudiedProblemSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TobeStudiedProblemWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TobeStudiedProblemCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_TobeStudiedProblemSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvgs_TobeStudiedProblemCond),
      vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
 * @param strProblemId:所给的关键字
 * @returns 对象
 */
export async function vgs_TobeStudiedProblem_IsExistCache(strProblemId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
  if (arrvgs_TobeStudiedProblemObjLstCache == null) return false;
  try {
    const arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache.filter(
      (x) => x.problemId == strProblemId,
    );
    if (arrvgs_TobeStudiedProblemSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strProblemId,
      vgs_TobeStudiedProblem_ConstructorName,
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
 * @param strProblemId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vgs_TobeStudiedProblem_IsExistAsync(strProblemId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strProblemId,
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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
export async function vgs_TobeStudiedProblem_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vgs_TobeStudiedProblem_Controller, strAction);

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
        vgs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TobeStudiedProblem_ConstructorName,
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
 * @param objvgs_TobeStudiedProblemCond:条件对象
 * @returns 对象列表记录数
 */
export async function vgs_TobeStudiedProblem_GetRecCountByCondCache(
  objvgs_TobeStudiedProblemCond: clsvgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvgs_TobeStudiedProblemObjLstCache = await vgs_TobeStudiedProblem_GetObjLstCache();
  if (arrvgs_TobeStudiedProblemObjLstCache == null) return 0;
  let arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemObjLstCache;
  if (
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp == null ||
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp == ''
  )
    return arrvgs_TobeStudiedProblemSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TobeStudiedProblemCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TobeStudiedProblemWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TobeStudiedProblemCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TobeStudiedProblemSel = arrvgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TobeStudiedProblemSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_TobeStudiedProblemCond),
      vgs_TobeStudiedProblem_ConstructorName,
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
export function vgs_TobeStudiedProblem_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function vgs_TobeStudiedProblem_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvgs_TobeStudiedProblemEN._CurrTabName;
    switch (clsvgs_TobeStudiedProblemEN.CacheModeId) {
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
export function vgs_TobeStudiedProblem_GetJSONStrByObj(
  pobjvgs_TobeStudiedProblemEN: clsvgs_TobeStudiedProblemEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvgs_TobeStudiedProblemEN);
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
export function vgs_TobeStudiedProblem_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvgs_TobeStudiedProblemEN> {
  let arrvgs_TobeStudiedProblemObjLst = new Array<clsvgs_TobeStudiedProblemEN>();
  if (strJSON === '') {
    return arrvgs_TobeStudiedProblemObjLst;
  }
  try {
    arrvgs_TobeStudiedProblemObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvgs_TobeStudiedProblemObjLst;
  }
  return arrvgs_TobeStudiedProblemObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_TobeStudiedProblemObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vgs_TobeStudiedProblem_GetObjLstByJSONObjLst(
  arrvgs_TobeStudiedProblemObjLstS: Array<clsvgs_TobeStudiedProblemEN>,
): Array<clsvgs_TobeStudiedProblemEN> {
  const arrvgs_TobeStudiedProblemObjLst = new Array<clsvgs_TobeStudiedProblemEN>();
  for (const objInFor of arrvgs_TobeStudiedProblemObjLstS) {
    const obj1 = vgs_TobeStudiedProblem_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvgs_TobeStudiedProblemObjLst.push(obj1);
  }
  return arrvgs_TobeStudiedProblemObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_TobeStudiedProblem_GetObjByJSONStr(
  strJSON: string,
): clsvgs_TobeStudiedProblemEN {
  let pobjvgs_TobeStudiedProblemEN = new clsvgs_TobeStudiedProblemEN();
  if (strJSON === '') {
    return pobjvgs_TobeStudiedProblemEN;
  }
  try {
    pobjvgs_TobeStudiedProblemEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvgs_TobeStudiedProblemEN;
  }
  return pobjvgs_TobeStudiedProblemEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vgs_TobeStudiedProblem_GetCombineCondition(
  objvgs_TobeStudiedProblemCond: clsvgs_TobeStudiedProblemEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_ProblemId,
    ) == true
  ) {
    const strComparisonOpProblemId: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_ProblemId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_ProblemId,
      objvgs_TobeStudiedProblemCond.problemId,
      strComparisonOpProblemId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_ProblemTitle,
    ) == true
  ) {
    const strComparisonOpProblemTitle: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[
        clsvgs_TobeStudiedProblemEN.con_ProblemTitle
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_ProblemTitle,
      objvgs_TobeStudiedProblemCond.problemTitle,
      strComparisonOpProblemTitle,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_TopicId,
      objvgs_TobeStudiedProblemCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_TopicName,
    ) == true
  ) {
    const strComparisonOpTopicName: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_TopicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_TopicName,
      objvgs_TobeStudiedProblemCond.topicName,
      strComparisonOpTopicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[
        clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_IdCurrEduCls,
      objvgs_TobeStudiedProblemCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_IsSubmit,
    ) == true
  ) {
    if (objvgs_TobeStudiedProblemCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsvgs_TobeStudiedProblemEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvgs_TobeStudiedProblemEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_ProblemDate,
    ) == true
  ) {
    const strComparisonOpProblemDate: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_ProblemDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_ProblemDate,
      objvgs_TobeStudiedProblemCond.problemDate,
      strComparisonOpProblemDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_UpdDate,
      objvgs_TobeStudiedProblemCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_UpdUser,
      objvgs_TobeStudiedProblemCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_Year,
    ) == true
  ) {
    const strComparisonOpYear: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_Year];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_Year,
      objvgs_TobeStudiedProblemCond.year,
      strComparisonOpYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_Month,
    ) == true
  ) {
    const strComparisonOpMonth: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_Month];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_Month,
      objvgs_TobeStudiedProblemCond.month,
      strComparisonOpMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[
        clsvgs_TobeStudiedProblemEN.con_VersionCount
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_TobeStudiedProblemEN.con_VersionCount,
      objvgs_TobeStudiedProblemCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_Participant,
    ) == true
  ) {
    const strComparisonOpParticipant: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_Participant];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_Participant,
      objvgs_TobeStudiedProblemCond.participant,
      strComparisonOpParticipant,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsvgs_TobeStudiedProblemEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvgs_TobeStudiedProblemCond.dicFldComparisonOp[clsvgs_TobeStudiedProblemEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TobeStudiedProblemEN.con_Memo,
      objvgs_TobeStudiedProblemCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vgs_TobeStudiedProblem(待研究问题视图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strProblemId: 问题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vgs_TobeStudiedProblem_GetUniCondStr(
  objvgs_TobeStudiedProblemEN: clsvgs_TobeStudiedProblemEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ProblemId = '{0}'", objvgs_TobeStudiedProblemEN.problemId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vgs_TobeStudiedProblem(待研究问题视图),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strProblemId: 问题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vgs_TobeStudiedProblem_GetUniCondStr4Update(
  objvgs_TobeStudiedProblemEN: clsvgs_TobeStudiedProblemEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ProblemId <> '{0}'", objvgs_TobeStudiedProblemEN.problemId);
  strWhereCond += Format(" and ProblemId = '{0}'", objvgs_TobeStudiedProblemEN.problemId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_TobeStudiedProblemENS:源对象
 * @param objvgs_TobeStudiedProblemENT:目标对象
 */
export function vgs_TobeStudiedProblem_CopyObjTo(
  objvgs_TobeStudiedProblemENS: clsvgs_TobeStudiedProblemEN,
  objvgs_TobeStudiedProblemENT: clsvgs_TobeStudiedProblemEN,
): void {
  objvgs_TobeStudiedProblemENT.problemId = objvgs_TobeStudiedProblemENS.problemId; //问题Id
  objvgs_TobeStudiedProblemENT.problemTitle = objvgs_TobeStudiedProblemENS.problemTitle; //问题标题
  objvgs_TobeStudiedProblemENT.problemContent = objvgs_TobeStudiedProblemENS.problemContent; //问题内容
  objvgs_TobeStudiedProblemENT.topicId = objvgs_TobeStudiedProblemENS.topicId; //主题Id
  objvgs_TobeStudiedProblemENT.topicName = objvgs_TobeStudiedProblemENS.topicName; //栏目主题
  objvgs_TobeStudiedProblemENT.idCurrEduCls = objvgs_TobeStudiedProblemENS.idCurrEduCls; //教学班流水号
  objvgs_TobeStudiedProblemENT.isSubmit = objvgs_TobeStudiedProblemENS.isSubmit; //是否提交
  objvgs_TobeStudiedProblemENT.problemDate = objvgs_TobeStudiedProblemENS.problemDate; //问题日期
  objvgs_TobeStudiedProblemENT.updDate = objvgs_TobeStudiedProblemENS.updDate; //修改日期
  objvgs_TobeStudiedProblemENT.updUser = objvgs_TobeStudiedProblemENS.updUser; //修改人
  objvgs_TobeStudiedProblemENT.year = objvgs_TobeStudiedProblemENS.year; //年
  objvgs_TobeStudiedProblemENT.month = objvgs_TobeStudiedProblemENS.month; //月
  objvgs_TobeStudiedProblemENT.versionCount = objvgs_TobeStudiedProblemENS.versionCount; //版本统计
  objvgs_TobeStudiedProblemENT.participant = objvgs_TobeStudiedProblemENS.participant; //参与者
  objvgs_TobeStudiedProblemENT.memo = objvgs_TobeStudiedProblemENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_TobeStudiedProblemENS:源对象
 * @param objvgs_TobeStudiedProblemENT:目标对象
 */
export function vgs_TobeStudiedProblem_GetObjFromJsonObj(
  objvgs_TobeStudiedProblemENS: clsvgs_TobeStudiedProblemEN,
): clsvgs_TobeStudiedProblemEN {
  const objvgs_TobeStudiedProblemENT: clsvgs_TobeStudiedProblemEN =
    new clsvgs_TobeStudiedProblemEN();
  ObjectAssign(objvgs_TobeStudiedProblemENT, objvgs_TobeStudiedProblemENS);
  return objvgs_TobeStudiedProblemENT;
}
