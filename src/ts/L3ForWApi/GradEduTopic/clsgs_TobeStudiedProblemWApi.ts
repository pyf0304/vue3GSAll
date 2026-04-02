/**
 * 类名:clsgs_TobeStudiedProblemWApi
 * 表名:gs_TobeStudiedProblem(01120776)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:19
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
 * 待研究问题(gs_TobeStudiedProblem)
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
import { clsgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemEN';
import { vgs_TobeStudiedProblem_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_TobeStudiedProblemWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_TobeStudiedProblem_Controller = 'gs_TobeStudiedProblemApi';
export const gs_TobeStudiedProblem_ConstructorName = 'gs_TobeStudiedProblem';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strProblemId:关键字
 * @returns 对象
 **/
export async function gs_TobeStudiedProblem_GetObjByProblemIdAsync(
  strProblemId: string,
): Promise<clsgs_TobeStudiedProblemEN | null> {
  const strThisFuncName = 'GetObjByProblemIdAsync';

  if (IsNullOrEmpty(strProblemId) == true) {
    const strMsg = Format(
      '参数:[strProblemId]不能为空!(In clsgs_TobeStudiedProblemWApi.GetObjByProblemIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProblemId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strProblemId]的长度:[{0}]不正确!(clsgs_TobeStudiedProblemWApi.GetObjByProblemIdAsync)',
      strProblemId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByProblemId';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
      const objgs_TobeStudiedProblem = gs_TobeStudiedProblem_GetObjFromJsonObj(returnObj);
      return objgs_TobeStudiedProblem;
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjByProblemIdCache(
  strProblemId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByProblemIdCache';

  if (IsNullOrEmpty(strProblemId) == true) {
    const strMsg = Format(
      '参数:[strProblemId]不能为空!(In clsgs_TobeStudiedProblemWApi.GetObjByProblemIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProblemId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strProblemId]的长度:[{0}]不正确!(clsgs_TobeStudiedProblemWApi.GetObjByProblemIdCache)',
      strProblemId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
  try {
    const arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache.filter(
      (x) => x.problemId == strProblemId,
    );
    let objgs_TobeStudiedProblem: clsgs_TobeStudiedProblemEN;
    if (arrgs_TobeStudiedProblemSel.length > 0) {
      objgs_TobeStudiedProblem = arrgs_TobeStudiedProblemSel[0];
      return objgs_TobeStudiedProblem;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_TobeStudiedProblemConst = await gs_TobeStudiedProblem_GetObjByProblemIdAsync(
          strProblemId,
        );
        if (objgs_TobeStudiedProblemConst != null) {
          gs_TobeStudiedProblem_ReFreshThisCache();
          return objgs_TobeStudiedProblemConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strProblemId,
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjByProblemIdlocalStorage(strProblemId: string) {
  const strThisFuncName = 'GetObjByProblemIdlocalStorage';

  if (IsNullOrEmpty(strProblemId) == true) {
    const strMsg = Format(
      '参数:[strProblemId]不能为空!(In clsgs_TobeStudiedProblemWApi.GetObjByProblemIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProblemId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strProblemId]的长度:[{0}]不正确!(clsgs_TobeStudiedProblemWApi.GetObjByProblemIdlocalStorage)',
      strProblemId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_TobeStudiedProblemEN._CurrTabName, strProblemId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_TobeStudiedProblemCache: clsgs_TobeStudiedProblemEN = JSON.parse(strTempObj);
    return objgs_TobeStudiedProblemCache;
  }
  try {
    const objgs_TobeStudiedProblem = await gs_TobeStudiedProblem_GetObjByProblemIdAsync(
      strProblemId,
    );
    if (objgs_TobeStudiedProblem != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_TobeStudiedProblem));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_TobeStudiedProblem;
    }
    return objgs_TobeStudiedProblem;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strProblemId,
      gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblem:所给的对象
 * @returns 对象
 */
export async function gs_TobeStudiedProblem_UpdateObjInLstCache(
  objgs_TobeStudiedProblem: clsgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
    const obj = arrgs_TobeStudiedProblemObjLstCache.find(
      (x) => x.problemId == objgs_TobeStudiedProblem.problemId,
    );
    if (obj != null) {
      objgs_TobeStudiedProblem.problemId = obj.problemId;
      ObjectAssign(obj, objgs_TobeStudiedProblem);
    } else {
      arrgs_TobeStudiedProblemObjLstCache.push(objgs_TobeStudiedProblem);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_TobeStudiedProblemEN.con_ProblemId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_TobeStudiedProblemEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_TobeStudiedProblemEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strProblemId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_TobeStudiedProblem = await gs_TobeStudiedProblem_GetObjByProblemIdCache(strProblemId);
  if (objgs_TobeStudiedProblem == null) return '';
  if (objgs_TobeStudiedProblem.GetFldValue(strOutFldName) == null) return '';
  return objgs_TobeStudiedProblem.GetFldValue(strOutFldName).toString();
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
export function gs_TobeStudiedProblem_SortFunDefa(
  a: clsgs_TobeStudiedProblemEN,
  b: clsgs_TobeStudiedProblemEN,
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
export function gs_TobeStudiedProblem_SortFunDefa2Fld(
  a: clsgs_TobeStudiedProblemEN,
  b: clsgs_TobeStudiedProblemEN,
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
export function gs_TobeStudiedProblem_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_TobeStudiedProblemEN.con_ProblemId:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          return a.problemId.localeCompare(b.problemId);
        };
      case clsgs_TobeStudiedProblemEN.con_ProblemTitle:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.problemTitle == null) return -1;
          if (b.problemTitle == null) return 1;
          return a.problemTitle.localeCompare(b.problemTitle);
        };
      case clsgs_TobeStudiedProblemEN.con_ProblemContent:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.problemContent == null) return -1;
          if (b.problemContent == null) return 1;
          return a.problemContent.localeCompare(b.problemContent);
        };
      case clsgs_TobeStudiedProblemEN.con_TopicId:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsgs_TobeStudiedProblemEN.con_IsSubmit:
        return (a: clsgs_TobeStudiedProblemEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      case clsgs_TobeStudiedProblemEN.con_ProblemDate:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.problemDate == null) return -1;
          if (b.problemDate == null) return 1;
          return a.problemDate.localeCompare(b.problemDate);
        };
      case clsgs_TobeStudiedProblemEN.con_UpdDate:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_TobeStudiedProblemEN.con_UpdUser:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_TobeStudiedProblemEN.con_Year:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.year == null) return -1;
          if (b.year == null) return 1;
          return a.year.localeCompare(b.year);
        };
      case clsgs_TobeStudiedProblemEN.con_Month:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.month == null) return -1;
          if (b.month == null) return 1;
          return a.month.localeCompare(b.month);
        };
      case clsgs_TobeStudiedProblemEN.con_VersionCount:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          return a.versionCount - b.versionCount;
        };
      case clsgs_TobeStudiedProblemEN.con_Participant:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.participant == null) return -1;
          if (b.participant == null) return 1;
          return a.participant.localeCompare(b.participant);
        };
      case clsgs_TobeStudiedProblemEN.con_Memo:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsgs_TobeStudiedProblemEN.con_IdCurrEduCls:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_TobeStudiedProblem]中不存在!(in ${gs_TobeStudiedProblem_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_TobeStudiedProblemEN.con_ProblemId:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          return b.problemId.localeCompare(a.problemId);
        };
      case clsgs_TobeStudiedProblemEN.con_ProblemTitle:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.problemTitle == null) return -1;
          if (a.problemTitle == null) return 1;
          return b.problemTitle.localeCompare(a.problemTitle);
        };
      case clsgs_TobeStudiedProblemEN.con_ProblemContent:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.problemContent == null) return -1;
          if (a.problemContent == null) return 1;
          return b.problemContent.localeCompare(a.problemContent);
        };
      case clsgs_TobeStudiedProblemEN.con_TopicId:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsgs_TobeStudiedProblemEN.con_IsSubmit:
        return (b: clsgs_TobeStudiedProblemEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      case clsgs_TobeStudiedProblemEN.con_ProblemDate:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.problemDate == null) return -1;
          if (a.problemDate == null) return 1;
          return b.problemDate.localeCompare(a.problemDate);
        };
      case clsgs_TobeStudiedProblemEN.con_UpdDate:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_TobeStudiedProblemEN.con_UpdUser:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_TobeStudiedProblemEN.con_Year:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.year == null) return -1;
          if (a.year == null) return 1;
          return b.year.localeCompare(a.year);
        };
      case clsgs_TobeStudiedProblemEN.con_Month:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.month == null) return -1;
          if (a.month == null) return 1;
          return b.month.localeCompare(a.month);
        };
      case clsgs_TobeStudiedProblemEN.con_VersionCount:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          return b.versionCount - a.versionCount;
        };
      case clsgs_TobeStudiedProblemEN.con_Participant:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.participant == null) return -1;
          if (a.participant == null) return 1;
          return b.participant.localeCompare(a.participant);
        };
      case clsgs_TobeStudiedProblemEN.con_Memo:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsgs_TobeStudiedProblemEN.con_IdCurrEduCls:
        return (a: clsgs_TobeStudiedProblemEN, b: clsgs_TobeStudiedProblemEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_TobeStudiedProblem]中不存在!(in ${gs_TobeStudiedProblem_ConstructorName}.${strThisFuncName})`;
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
export async function gs_TobeStudiedProblem_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_TobeStudiedProblemEN.con_ProblemId:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.problemId === value;
      };
    case clsgs_TobeStudiedProblemEN.con_ProblemTitle:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.problemTitle === value;
      };
    case clsgs_TobeStudiedProblemEN.con_ProblemContent:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.problemContent === value;
      };
    case clsgs_TobeStudiedProblemEN.con_TopicId:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.topicId === value;
      };
    case clsgs_TobeStudiedProblemEN.con_IsSubmit:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.isSubmit === value;
      };
    case clsgs_TobeStudiedProblemEN.con_ProblemDate:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.problemDate === value;
      };
    case clsgs_TobeStudiedProblemEN.con_UpdDate:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.updDate === value;
      };
    case clsgs_TobeStudiedProblemEN.con_UpdUser:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.updUser === value;
      };
    case clsgs_TobeStudiedProblemEN.con_Year:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.year === value;
      };
    case clsgs_TobeStudiedProblemEN.con_Month:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.month === value;
      };
    case clsgs_TobeStudiedProblemEN.con_VersionCount:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.versionCount === value;
      };
    case clsgs_TobeStudiedProblemEN.con_Participant:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.participant === value;
      };
    case clsgs_TobeStudiedProblemEN.con_Memo:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.memo === value;
      };
    case clsgs_TobeStudiedProblemEN.con_IdCurrEduCls:
      return (obj: clsgs_TobeStudiedProblemEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_TobeStudiedProblem]中不存在!(in ${gs_TobeStudiedProblem_ConstructorName}.${strThisFuncName})`;
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
export async function gs_TobeStudiedProblem_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_TobeStudiedProblemEN.con_ProblemId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_TobeStudiedProblem = await gs_TobeStudiedProblem_GetObjLstCache();
  if (arrgs_TobeStudiedProblem == null) return [];
  let arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblem;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_TobeStudiedProblemSel.length == 0) return [];
  return arrgs_TobeStudiedProblemSel.map((x) => x.problemId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_TobeStudiedProblem_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_TobeStudiedProblemEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
      const objgs_TobeStudiedProblem = gs_TobeStudiedProblem_GetObjFromJsonObj(returnObj);
      return objgs_TobeStudiedProblem;
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TobeStudiedProblemEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TobeStudiedProblemEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_TobeStudiedProblemExObjLstCache: Array<clsgs_TobeStudiedProblemEN> =
      CacheHelper.Get(strKey);
    const arrgs_TobeStudiedProblemObjLstT = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(
      arrgs_TobeStudiedProblemExObjLstCache,
    );
    return arrgs_TobeStudiedProblemObjLstT;
  }
  try {
    const arrgs_TobeStudiedProblemExObjLst = await gs_TobeStudiedProblem_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrgs_TobeStudiedProblemExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TobeStudiedProblemExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TobeStudiedProblemExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TobeStudiedProblemEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TobeStudiedProblemEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_TobeStudiedProblemExObjLstCache: Array<clsgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    const arrgs_TobeStudiedProblemObjLstT = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(
      arrgs_TobeStudiedProblemExObjLstCache,
    );
    return arrgs_TobeStudiedProblemObjLstT;
  }
  try {
    const arrgs_TobeStudiedProblemExObjLst = await gs_TobeStudiedProblem_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrgs_TobeStudiedProblemExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TobeStudiedProblemExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TobeStudiedProblemExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_TobeStudiedProblemObjLstCache: Array<clsgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    return arrgs_TobeStudiedProblemObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_TobeStudiedProblem_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
          gs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TobeStudiedProblemEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TobeStudiedProblemEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_TobeStudiedProblemExObjLstCache: Array<clsgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    const arrgs_TobeStudiedProblemObjLstT = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(
      arrgs_TobeStudiedProblemExObjLstCache,
    );
    return arrgs_TobeStudiedProblemObjLstT;
  }
  try {
    const arrgs_TobeStudiedProblemExObjLst = await gs_TobeStudiedProblem_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_TobeStudiedProblemExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TobeStudiedProblemExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TobeStudiedProblemExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_TobeStudiedProblemObjLstCache: Array<clsgs_TobeStudiedProblemEN> =
      JSON.parse(strTempObjLst);
    return arrgs_TobeStudiedProblemObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_TobeStudiedProblem_GetObjLstCache(): Promise<
  Array<clsgs_TobeStudiedProblemEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_TobeStudiedProblemObjLstCache;
  switch (clsgs_TobeStudiedProblemEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstClientCache();
      break;
    default:
      arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstClientCache();
      break;
  }
  return arrgs_TobeStudiedProblemObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_TobeStudiedProblem_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_TobeStudiedProblemObjLstCache;
  switch (clsgs_TobeStudiedProblemEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_TobeStudiedProblemObjLstCache =
        await gs_TobeStudiedProblem_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_TobeStudiedProblemObjLstCache =
        await gs_TobeStudiedProblem_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_TobeStudiedProblemObjLstCache = null;
      break;
    default:
      arrgs_TobeStudiedProblemObjLstCache = null;
      break;
  }
  return arrgs_TobeStudiedProblemObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrProblemIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_TobeStudiedProblem_GetSubObjLstCache(
  objgs_TobeStudiedProblemCond: clsgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
  let arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache;
  if (
    objgs_TobeStudiedProblemCond.sfFldComparisonOp == null ||
    objgs_TobeStudiedProblemCond.sfFldComparisonOp == ''
  )
    return arrgs_TobeStudiedProblemSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TobeStudiedProblemCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TobeStudiedProblemWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TobeStudiedProblemCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_TobeStudiedProblemSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_TobeStudiedProblemCond),
      gs_TobeStudiedProblem_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TobeStudiedProblemEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrProblemId:关键字列表
 * @returns 对象列表
 **/
export async function gs_TobeStudiedProblem_GetObjLstByProblemIdLstAsync(
  arrProblemId: Array<string>,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstByProblemIdLstAsync';
  const strAction = 'GetObjLstByProblemIdLst';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
          gs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstByProblemIdLstCache(
  arrProblemIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByProblemIdLstCache';
  try {
    const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
    const arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache.filter(
      (x) => arrProblemIdLst.indexOf(x.problemId) > -1,
    );
    return arrgs_TobeStudiedProblemSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrProblemIdLst.join(','),
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
          gs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
          gs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_TobeStudiedProblemEN>();
  const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
  if (arrgs_TobeStudiedProblemObjLstCache.length == 0) return arrgs_TobeStudiedProblemObjLstCache;
  let arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_TobeStudiedProblemCond = new clsgs_TobeStudiedProblemEN();
  ObjectAssign(objgs_TobeStudiedProblemCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_TobeStudiedProblemWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TobeStudiedProblemSel.length == 0) return arrgs_TobeStudiedProblemSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.sort(
        gs_TobeStudiedProblem_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.sort(objPagerPara.sortFun);
    }
    arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.slice(intStart, intEnd);
    return arrgs_TobeStudiedProblemSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TobeStudiedProblem_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TobeStudiedProblemEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_TobeStudiedProblem_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_TobeStudiedProblemEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
          gs_TobeStudiedProblem_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param strProblemId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_TobeStudiedProblem_DelRecordAsync(strProblemId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strProblemId);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param arrProblemId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_TobeStudiedProblem_Delgs_TobeStudiedProblemsAsync(
  arrProblemId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_TobeStudiedProblemsAsync';
  const strAction = 'Delgs_TobeStudiedProblems';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_Delgs_TobeStudiedProblemsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_TobeStudiedProblemsByCondAsync';
  const strAction = 'Delgs_TobeStudiedProblemsByCond';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblemEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_TobeStudiedProblem_AddNewRecordAsync(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_TobeStudiedProblemEN);
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TobeStudiedProblemEN, config);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblemEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_TobeStudiedProblem_AddNewRecordWithMaxIdAsync(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TobeStudiedProblemEN, config);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblemEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_TobeStudiedProblem_AddNewRecordWithReturnKeyAsync(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TobeStudiedProblemEN, config);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblemEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_TobeStudiedProblem_UpdateRecordAsync(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr === undefined ||
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr === null ||
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_TobeStudiedProblemEN.problemId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TobeStudiedProblemEN, config);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblemEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_TobeStudiedProblem_UpdateWithConditionAsync(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr === undefined ||
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr === null ||
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_TobeStudiedProblemEN.problemId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);
  objgs_TobeStudiedProblemEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TobeStudiedProblemEN, config);
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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_IsExistRecordCache(
  objgs_TobeStudiedProblemCond: clsgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
  if (arrgs_TobeStudiedProblemObjLstCache == null) return false;
  let arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache;
  if (
    objgs_TobeStudiedProblemCond.sfFldComparisonOp == null ||
    objgs_TobeStudiedProblemCond.sfFldComparisonOp == ''
  )
    return arrgs_TobeStudiedProblemSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TobeStudiedProblemCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TobeStudiedProblemWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TobeStudiedProblemCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TobeStudiedProblemSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_TobeStudiedProblemCond),
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_IsExistCache(strProblemId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
  if (arrgs_TobeStudiedProblemObjLstCache == null) return false;
  try {
    const arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache.filter(
      (x) => x.problemId == strProblemId,
    );
    if (arrgs_TobeStudiedProblemSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strProblemId,
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_IsExistAsync(strProblemId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
 * @param objgs_TobeStudiedProblemCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_TobeStudiedProblem_GetRecCountByCondCache(
  objgs_TobeStudiedProblemCond: clsgs_TobeStudiedProblemEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_TobeStudiedProblemObjLstCache = await gs_TobeStudiedProblem_GetObjLstCache();
  if (arrgs_TobeStudiedProblemObjLstCache == null) return 0;
  let arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemObjLstCache;
  if (
    objgs_TobeStudiedProblemCond.sfFldComparisonOp == null ||
    objgs_TobeStudiedProblemCond.sfFldComparisonOp == ''
  )
    return arrgs_TobeStudiedProblemSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TobeStudiedProblemCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TobeStudiedProblemWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TobeStudiedProblemCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TobeStudiedProblemCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TobeStudiedProblemSel = arrgs_TobeStudiedProblemSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_TobeStudiedProblemSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_TobeStudiedProblemCond),
      gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export async function gs_TobeStudiedProblem_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_TobeStudiedProblem_Controller, strAction);

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
        gs_TobeStudiedProblem_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblem_ConstructorName,
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
export function gs_TobeStudiedProblem_GetWebApiUrl(
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function gs_TobeStudiedProblem_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
  switch (clsgs_TobeStudiedProblemEN.CacheModeId) {
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
  vgs_TobeStudiedProblem_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_TobeStudiedProblem_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_TobeStudiedProblemEN._CurrTabName;
    switch (clsgs_TobeStudiedProblemEN.CacheModeId) {
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
export function gs_TobeStudiedProblem_CheckPropertyNew(
  pobjgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemId) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.problemId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[问题Id(problemId)]的长度不能超过10(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.problemId)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemTitle) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.problemTitle) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[问题标题(problemTitle)]的长度不能超过1000(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.problemTitle)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.topicId) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.topicId)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemDate) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.problemDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[问题日期(problemDate)]的长度不能超过20(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.problemDate)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updDate) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.updDate)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updUser) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.updUser)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.year) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.year) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年(year)]的长度不能超过4(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.year)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.month) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.month) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[月(month)]的长度不能超过2(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.month)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.participant) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.participant) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[参与者(participant)]的长度不能超过500(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.participant)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.memo) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.memo)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.idCurrEduCls)(clsgs_TobeStudiedProblemBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemId) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemId &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[问题Id(problemId)]的值:[$(pobjgs_TobeStudiedProblemEN.problemId)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemTitle) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemTitle &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[问题标题(problemTitle)]的值:[$(pobjgs_TobeStudiedProblemEN.problemTitle)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemContent) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemContent &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[问题内容(problemContent)]的值:[$(pobjgs_TobeStudiedProblemEN.problemContent)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.topicId) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.topicId &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_TobeStudiedProblemEN.topicId)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_TobeStudiedProblemEN.isSubmit &&
    undefined !== pobjgs_TobeStudiedProblemEN.isSubmit &&
    tzDataType.isBoolean(pobjgs_TobeStudiedProblemEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjgs_TobeStudiedProblemEN.isSubmit)], 非法,应该为布尔型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemDate) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemDate &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[问题日期(problemDate)]的值:[$(pobjgs_TobeStudiedProblemEN.problemDate)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updDate) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.updDate &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_TobeStudiedProblemEN.updDate)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updUser) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.updUser &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_TobeStudiedProblemEN.updUser)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.year) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.year &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.year) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年(year)]的值:[$(pobjgs_TobeStudiedProblemEN.year)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.month) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.month &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.month) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[月(month)]的值:[$(pobjgs_TobeStudiedProblemEN.month)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_TobeStudiedProblemEN.versionCount &&
    undefined !== pobjgs_TobeStudiedProblemEN.versionCount &&
    tzDataType.isNumber(pobjgs_TobeStudiedProblemEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本统计(versionCount)]的值:[$(pobjgs_TobeStudiedProblemEN.versionCount)], 非法,应该为数值型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.participant) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.participant &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.participant) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[参与者(participant)]的值:[$(pobjgs_TobeStudiedProblemEN.participant)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.memo) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.memo &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_TobeStudiedProblemEN.memo)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.idCurrEduCls) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_TobeStudiedProblemEN.idCurrEduCls)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_TobeStudiedProblem_CheckProperty4Update(
  pobjgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemId) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.problemId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[问题Id(problemId)]的长度不能超过10(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.problemId)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemTitle) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.problemTitle) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[问题标题(problemTitle)]的长度不能超过1000(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.problemTitle)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.topicId) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.topicId)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemDate) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.problemDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[问题日期(problemDate)]的长度不能超过20(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.problemDate)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updDate) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.updDate)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updUser) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.updUser)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.year) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.year) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年(year)]的长度不能超过4(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.year)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.month) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.month) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[月(month)]的长度不能超过2(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.month)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.participant) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.participant) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[参与者(participant)]的长度不能超过500(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.participant)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.memo) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.memo)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.idCurrEduCls) == false &&
    GetStrLen(pobjgs_TobeStudiedProblemEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 待研究问题(gs_TobeStudiedProblem))!值:$(pobjgs_TobeStudiedProblemEN.idCurrEduCls)(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemId) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemId &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[问题Id(problemId)]的值:[$(pobjgs_TobeStudiedProblemEN.problemId)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemTitle) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemTitle &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[问题标题(problemTitle)]的值:[$(pobjgs_TobeStudiedProblemEN.problemTitle)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemContent) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemContent &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[问题内容(problemContent)]的值:[$(pobjgs_TobeStudiedProblemEN.problemContent)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.topicId) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.topicId &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_TobeStudiedProblemEN.topicId)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_TobeStudiedProblemEN.isSubmit &&
    undefined !== pobjgs_TobeStudiedProblemEN.isSubmit &&
    tzDataType.isBoolean(pobjgs_TobeStudiedProblemEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjgs_TobeStudiedProblemEN.isSubmit)], 非法,应该为布尔型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.problemDate) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.problemDate &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.problemDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[问题日期(problemDate)]的值:[$(pobjgs_TobeStudiedProblemEN.problemDate)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updDate) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.updDate &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_TobeStudiedProblemEN.updDate)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.updUser) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.updUser &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_TobeStudiedProblemEN.updUser)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.year) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.year &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.year) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年(year)]的值:[$(pobjgs_TobeStudiedProblemEN.year)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.month) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.month &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.month) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[月(month)]的值:[$(pobjgs_TobeStudiedProblemEN.month)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_TobeStudiedProblemEN.versionCount &&
    undefined !== pobjgs_TobeStudiedProblemEN.versionCount &&
    tzDataType.isNumber(pobjgs_TobeStudiedProblemEN.versionCount) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本统计(versionCount)]的值:[$(pobjgs_TobeStudiedProblemEN.versionCount)], 非法,应该为数值型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.participant) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.participant &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.participant) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[参与者(participant)]的值:[$(pobjgs_TobeStudiedProblemEN.participant)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.memo) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.memo &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_TobeStudiedProblemEN.memo)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TobeStudiedProblemEN.idCurrEduCls) == false &&
    undefined !== pobjgs_TobeStudiedProblemEN.idCurrEduCls &&
    tzDataType.isString(pobjgs_TobeStudiedProblemEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjgs_TobeStudiedProblemEN.idCurrEduCls)], 非法,应该为字符型(In 待研究问题(gs_TobeStudiedProblem))!(clsgs_TobeStudiedProblemBL:CheckProperty4Update)',
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
export function gs_TobeStudiedProblem_GetJSONStrByObj(
  pobjgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): string {
  pobjgs_TobeStudiedProblemEN.sfUpdFldSetStr = pobjgs_TobeStudiedProblemEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_TobeStudiedProblemEN);
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
export function gs_TobeStudiedProblem_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsgs_TobeStudiedProblemEN> {
  let arrgs_TobeStudiedProblemObjLst = new Array<clsgs_TobeStudiedProblemEN>();
  if (strJSON === '') {
    return arrgs_TobeStudiedProblemObjLst;
  }
  try {
    arrgs_TobeStudiedProblemObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_TobeStudiedProblemObjLst;
  }
  return arrgs_TobeStudiedProblemObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_TobeStudiedProblemObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_TobeStudiedProblem_GetObjLstByJSONObjLst(
  arrgs_TobeStudiedProblemObjLstS: Array<clsgs_TobeStudiedProblemEN>,
): Array<clsgs_TobeStudiedProblemEN> {
  const arrgs_TobeStudiedProblemObjLst = new Array<clsgs_TobeStudiedProblemEN>();
  for (const objInFor of arrgs_TobeStudiedProblemObjLstS) {
    const obj1 = gs_TobeStudiedProblem_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_TobeStudiedProblemObjLst.push(obj1);
  }
  return arrgs_TobeStudiedProblemObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_TobeStudiedProblem_GetObjByJSONStr(strJSON: string): clsgs_TobeStudiedProblemEN {
  let pobjgs_TobeStudiedProblemEN = new clsgs_TobeStudiedProblemEN();
  if (strJSON === '') {
    return pobjgs_TobeStudiedProblemEN;
  }
  try {
    pobjgs_TobeStudiedProblemEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_TobeStudiedProblemEN;
  }
  return pobjgs_TobeStudiedProblemEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_TobeStudiedProblem_GetCombineCondition(
  objgs_TobeStudiedProblemCond: clsgs_TobeStudiedProblemEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_ProblemId,
    ) == true
  ) {
    const strComparisonOpProblemId: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_ProblemId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_ProblemId,
      objgs_TobeStudiedProblemCond.problemId,
      strComparisonOpProblemId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_ProblemTitle,
    ) == true
  ) {
    const strComparisonOpProblemTitle: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_ProblemTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_ProblemTitle,
      objgs_TobeStudiedProblemCond.problemTitle,
      strComparisonOpProblemTitle,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_TopicId,
      objgs_TobeStudiedProblemCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_IsSubmit,
    ) == true
  ) {
    if (objgs_TobeStudiedProblemCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_TobeStudiedProblemEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_TobeStudiedProblemEN.con_IsSubmit);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_ProblemDate,
    ) == true
  ) {
    const strComparisonOpProblemDate: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_ProblemDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_ProblemDate,
      objgs_TobeStudiedProblemCond.problemDate,
      strComparisonOpProblemDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_UpdDate,
      objgs_TobeStudiedProblemCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_UpdUser,
      objgs_TobeStudiedProblemCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_Year,
    ) == true
  ) {
    const strComparisonOpYear: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_Year];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_Year,
      objgs_TobeStudiedProblemCond.year,
      strComparisonOpYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_Month,
    ) == true
  ) {
    const strComparisonOpMonth: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_Month];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_Month,
      objgs_TobeStudiedProblemCond.month,
      strComparisonOpMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_VersionCount,
    ) == true
  ) {
    const strComparisonOpVersionCount: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_VersionCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsgs_TobeStudiedProblemEN.con_VersionCount,
      objgs_TobeStudiedProblemCond.versionCount,
      strComparisonOpVersionCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_Participant,
    ) == true
  ) {
    const strComparisonOpParticipant: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_Participant];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_Participant,
      objgs_TobeStudiedProblemCond.participant,
      strComparisonOpParticipant,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_Memo,
      objgs_TobeStudiedProblemCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TobeStudiedProblemCond.dicFldComparisonOp,
      clsgs_TobeStudiedProblemEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objgs_TobeStudiedProblemCond.dicFldComparisonOp[clsgs_TobeStudiedProblemEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TobeStudiedProblemEN.con_IdCurrEduCls,
      objgs_TobeStudiedProblemCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_TobeStudiedProblem(待研究问题),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strProblemId: 问题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_TobeStudiedProblem_GetUniCondStr(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ProblemId = '{0}'", objgs_TobeStudiedProblemEN.problemId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_TobeStudiedProblem(待研究问题),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strProblemId: 问题Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_TobeStudiedProblem_GetUniCondStr4Update(
  objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ProblemId <> '{0}'", objgs_TobeStudiedProblemEN.problemId);
  strWhereCond += Format(" and ProblemId = '{0}'", objgs_TobeStudiedProblemEN.problemId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_TobeStudiedProblemENS:源对象
 * @param objgs_TobeStudiedProblemENT:目标对象
 */
export function gs_TobeStudiedProblem_CopyObjTo(
  objgs_TobeStudiedProblemENS: clsgs_TobeStudiedProblemEN,
  objgs_TobeStudiedProblemENT: clsgs_TobeStudiedProblemEN,
): void {
  objgs_TobeStudiedProblemENT.problemId = objgs_TobeStudiedProblemENS.problemId; //问题Id
  objgs_TobeStudiedProblemENT.problemTitle = objgs_TobeStudiedProblemENS.problemTitle; //问题标题
  objgs_TobeStudiedProblemENT.problemContent = objgs_TobeStudiedProblemENS.problemContent; //问题内容
  objgs_TobeStudiedProblemENT.topicId = objgs_TobeStudiedProblemENS.topicId; //主题Id
  objgs_TobeStudiedProblemENT.isSubmit = objgs_TobeStudiedProblemENS.isSubmit; //是否提交
  objgs_TobeStudiedProblemENT.problemDate = objgs_TobeStudiedProblemENS.problemDate; //问题日期
  objgs_TobeStudiedProblemENT.updDate = objgs_TobeStudiedProblemENS.updDate; //修改日期
  objgs_TobeStudiedProblemENT.updUser = objgs_TobeStudiedProblemENS.updUser; //修改人
  objgs_TobeStudiedProblemENT.year = objgs_TobeStudiedProblemENS.year; //年
  objgs_TobeStudiedProblemENT.month = objgs_TobeStudiedProblemENS.month; //月
  objgs_TobeStudiedProblemENT.versionCount = objgs_TobeStudiedProblemENS.versionCount; //版本统计
  objgs_TobeStudiedProblemENT.participant = objgs_TobeStudiedProblemENS.participant; //参与者
  objgs_TobeStudiedProblemENT.memo = objgs_TobeStudiedProblemENS.memo; //备注
  objgs_TobeStudiedProblemENT.idCurrEduCls = objgs_TobeStudiedProblemENS.idCurrEduCls; //教学班流水号
  objgs_TobeStudiedProblemENT.sfUpdFldSetStr = objgs_TobeStudiedProblemENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_TobeStudiedProblemENS:源对象
 * @param objgs_TobeStudiedProblemENT:目标对象
 */
export function gs_TobeStudiedProblem_GetObjFromJsonObj(
  objgs_TobeStudiedProblemENS: clsgs_TobeStudiedProblemEN,
): clsgs_TobeStudiedProblemEN {
  const objgs_TobeStudiedProblemENT: clsgs_TobeStudiedProblemEN = new clsgs_TobeStudiedProblemEN();
  ObjectAssign(objgs_TobeStudiedProblemENT, objgs_TobeStudiedProblemENS);
  return objgs_TobeStudiedProblemENT;
}
