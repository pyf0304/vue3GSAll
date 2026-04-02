/**
 * 类名:clsvViewpointLikeLogWApi
 * 表名:vViewpointLikeLog(01120608)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:39
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
 * vViewpointLikeLog(vViewpointLikeLog)
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
import { clsvViewpointLikeLogEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointLikeLogEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vViewpointLikeLog_Controller = 'vViewpointLikeLogApi';
export const vViewpointLikeLog_ConstructorName = 'vViewpointLikeLog';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngViewpointLikeLogId:关键字
 * @returns 对象
 **/
export async function vViewpointLikeLog_GetObjByViewpointLikeLogIdAsync(
  lngViewpointLikeLogId: number,
): Promise<clsvViewpointLikeLogEN | null> {
  const strThisFuncName = 'GetObjByViewpointLikeLogIdAsync';

  if (lngViewpointLikeLogId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointLikeLogId]不能为空!(In clsvViewpointLikeLogWApi.GetObjByViewpointLikeLogIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewpointLikeLogId';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointLikeLogId,
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
      const objvViewpointLikeLog = vViewpointLikeLog_GetObjFromJsonObj(returnObj);
      return objvViewpointLikeLog;
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
 * @param lngViewpointLikeLogId:所给的关键字
 * @returns 对象
 */
export async function vViewpointLikeLog_GetObjByViewpointLikeLogIdCache(
  lngViewpointLikeLogId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewpointLikeLogIdCache';

  if (lngViewpointLikeLogId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointLikeLogId]不能为空!(In clsvViewpointLikeLogWApi.GetObjByViewpointLikeLogIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
  try {
    const arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache.filter(
      (x) => x.viewpointLikeLogId == lngViewpointLikeLogId,
    );
    let objvViewpointLikeLog: clsvViewpointLikeLogEN;
    if (arrvViewpointLikeLogSel.length > 0) {
      objvViewpointLikeLog = arrvViewpointLikeLogSel[0];
      return objvViewpointLikeLog;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvViewpointLikeLogConst = await vViewpointLikeLog_GetObjByViewpointLikeLogIdAsync(
          lngViewpointLikeLogId,
        );
        if (objvViewpointLikeLogConst != null) {
          vViewpointLikeLog_ReFreshThisCache();
          return objvViewpointLikeLogConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointLikeLogId,
      vViewpointLikeLog_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngViewpointLikeLogId:所给的关键字
 * @returns 对象
 */
export async function vViewpointLikeLog_GetObjByViewpointLikeLogIdlocalStorage(
  lngViewpointLikeLogId: number,
) {
  const strThisFuncName = 'GetObjByViewpointLikeLogIdlocalStorage';

  if (lngViewpointLikeLogId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointLikeLogId]不能为空!(In clsvViewpointLikeLogWApi.GetObjByViewpointLikeLogIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvViewpointLikeLogEN._CurrTabName, lngViewpointLikeLogId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvViewpointLikeLogCache: clsvViewpointLikeLogEN = JSON.parse(strTempObj);
    return objvViewpointLikeLogCache;
  }
  try {
    const objvViewpointLikeLog = await vViewpointLikeLog_GetObjByViewpointLikeLogIdAsync(
      lngViewpointLikeLogId,
    );
    if (objvViewpointLikeLog != null) {
      localStorage.setItem(strKey, JSON.stringify(objvViewpointLikeLog));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvViewpointLikeLog;
    }
    return objvViewpointLikeLog;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointLikeLogId,
      vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvViewpointLikeLogEN.con_ViewpointLikeLogId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvViewpointLikeLogEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvViewpointLikeLogEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngViewpointLikeLogId = Number(strInValue);
  if (lngViewpointLikeLogId == 0) {
    return '';
  }
  const objvViewpointLikeLog = await vViewpointLikeLog_GetObjByViewpointLikeLogIdCache(
    lngViewpointLikeLogId,
  );
  if (objvViewpointLikeLog == null) return '';
  if (objvViewpointLikeLog.GetFldValue(strOutFldName) == null) return '';
  return objvViewpointLikeLog.GetFldValue(strOutFldName).toString();
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
export function vViewpointLikeLog_SortFunDefa(
  a: clsvViewpointLikeLogEN,
  b: clsvViewpointLikeLogEN,
): number {
  return a.viewpointLikeLogId - b.viewpointLikeLogId;
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
export function vViewpointLikeLog_SortFunDefa2Fld(
  a: clsvViewpointLikeLogEN,
  b: clsvViewpointLikeLogEN,
): number {
  if (a.memo == b.memo) return a.updUserId.localeCompare(b.updUserId);
  else return a.memo.localeCompare(b.memo);
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
export function vViewpointLikeLog_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvViewpointLikeLogEN.con_Memo:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvViewpointLikeLogEN.con_UpdUserId:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsvViewpointLikeLogEN.con_UpdDate:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvViewpointLikeLogEN.con_ViewpointId:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.viewpointId == null) return -1;
          if (b.viewpointId == null) return 1;
          return a.viewpointId.localeCompare(b.viewpointId);
        };
      case clsvViewpointLikeLogEN.con_ViewpointLikeLogId:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          return a.viewpointLikeLogId - b.viewpointLikeLogId;
        };
      case clsvViewpointLikeLogEN.con_ViewpointName:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.viewpointName == null) return -1;
          if (b.viewpointName == null) return 1;
          return a.viewpointName.localeCompare(b.viewpointName);
        };
      case clsvViewpointLikeLogEN.con_ViewpointContent:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.viewpointContent == null) return -1;
          if (b.viewpointContent == null) return 1;
          return a.viewpointContent.localeCompare(b.viewpointContent);
        };
      case clsvViewpointLikeLogEN.con_Reason:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.reason == null) return -1;
          if (b.reason == null) return 1;
          return a.reason.localeCompare(b.reason);
        };
      case clsvViewpointLikeLogEN.con_UserName:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vViewpointLikeLog]中不存在!(in ${vViewpointLikeLog_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvViewpointLikeLogEN.con_Memo:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvViewpointLikeLogEN.con_UpdUserId:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsvViewpointLikeLogEN.con_UpdDate:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvViewpointLikeLogEN.con_ViewpointId:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.viewpointId == null) return -1;
          if (a.viewpointId == null) return 1;
          return b.viewpointId.localeCompare(a.viewpointId);
        };
      case clsvViewpointLikeLogEN.con_ViewpointLikeLogId:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          return b.viewpointLikeLogId - a.viewpointLikeLogId;
        };
      case clsvViewpointLikeLogEN.con_ViewpointName:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.viewpointName == null) return -1;
          if (a.viewpointName == null) return 1;
          return b.viewpointName.localeCompare(a.viewpointName);
        };
      case clsvViewpointLikeLogEN.con_ViewpointContent:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.viewpointContent == null) return -1;
          if (a.viewpointContent == null) return 1;
          return b.viewpointContent.localeCompare(a.viewpointContent);
        };
      case clsvViewpointLikeLogEN.con_Reason:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.reason == null) return -1;
          if (a.reason == null) return 1;
          return b.reason.localeCompare(a.reason);
        };
      case clsvViewpointLikeLogEN.con_UserName:
        return (a: clsvViewpointLikeLogEN, b: clsvViewpointLikeLogEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vViewpointLikeLog]中不存在!(in ${vViewpointLikeLog_ConstructorName}.${strThisFuncName})`;
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
export async function vViewpointLikeLog_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvViewpointLikeLogEN.con_Memo:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.memo === value;
      };
    case clsvViewpointLikeLogEN.con_UpdUserId:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.updUserId === value;
      };
    case clsvViewpointLikeLogEN.con_UpdDate:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.updDate === value;
      };
    case clsvViewpointLikeLogEN.con_ViewpointId:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.viewpointId === value;
      };
    case clsvViewpointLikeLogEN.con_ViewpointLikeLogId:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.viewpointLikeLogId === value;
      };
    case clsvViewpointLikeLogEN.con_ViewpointName:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.viewpointName === value;
      };
    case clsvViewpointLikeLogEN.con_ViewpointContent:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.viewpointContent === value;
      };
    case clsvViewpointLikeLogEN.con_Reason:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.reason === value;
      };
    case clsvViewpointLikeLogEN.con_UserName:
      return (obj: clsvViewpointLikeLogEN) => {
        return obj.userName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vViewpointLikeLog]中不存在!(in ${vViewpointLikeLog_ConstructorName}.${strThisFuncName})`;
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
export async function vViewpointLikeLog_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvViewpointLikeLogEN.con_ViewpointLikeLogId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvViewpointLikeLog = await vViewpointLikeLog_GetObjLstCache();
  if (arrvViewpointLikeLog == null) return [];
  let arrvViewpointLikeLogSel = arrvViewpointLikeLog;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvViewpointLikeLogSel.length == 0) return [];
  return arrvViewpointLikeLogSel.map((x) => x.viewpointLikeLogId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vViewpointLikeLog_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvViewpointLikeLogEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
      const objvViewpointLikeLog = vViewpointLikeLog_GetObjFromJsonObj(returnObj);
      return objvViewpointLikeLog;
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvViewpointLikeLogEN._CurrTabName;
  if (IsNullOrEmpty(clsvViewpointLikeLogEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewpointLikeLogEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvViewpointLikeLogExObjLstCache: Array<clsvViewpointLikeLogEN> =
      CacheHelper.Get(strKey);
    const arrvViewpointLikeLogObjLstT = vViewpointLikeLog_GetObjLstByJSONObjLst(
      arrvViewpointLikeLogExObjLstCache,
    );
    return arrvViewpointLikeLogObjLstT;
  }
  try {
    const arrvViewpointLikeLogExObjLst = await vViewpointLikeLog_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvViewpointLikeLogExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewpointLikeLogExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewpointLikeLogExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvViewpointLikeLogEN._CurrTabName;
  if (IsNullOrEmpty(clsvViewpointLikeLogEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewpointLikeLogEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvViewpointLikeLogExObjLstCache: Array<clsvViewpointLikeLogEN> =
      JSON.parse(strTempObjLst);
    const arrvViewpointLikeLogObjLstT = vViewpointLikeLog_GetObjLstByJSONObjLst(
      arrvViewpointLikeLogExObjLstCache,
    );
    return arrvViewpointLikeLogObjLstT;
  }
  try {
    const arrvViewpointLikeLogExObjLst = await vViewpointLikeLog_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvViewpointLikeLogExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewpointLikeLogExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewpointLikeLogExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvViewpointLikeLogEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvViewpointLikeLogObjLstCache: Array<clsvViewpointLikeLogEN> =
      JSON.parse(strTempObjLst);
    return arrvViewpointLikeLogObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vViewpointLikeLog_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvViewpointLikeLogEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
          vViewpointLikeLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvViewpointLikeLogEN._CurrTabName;
  if (IsNullOrEmpty(clsvViewpointLikeLogEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewpointLikeLogEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvViewpointLikeLogExObjLstCache: Array<clsvViewpointLikeLogEN> =
      JSON.parse(strTempObjLst);
    const arrvViewpointLikeLogObjLstT = vViewpointLikeLog_GetObjLstByJSONObjLst(
      arrvViewpointLikeLogExObjLstCache,
    );
    return arrvViewpointLikeLogObjLstT;
  }
  try {
    const arrvViewpointLikeLogExObjLst = await vViewpointLikeLog_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvViewpointLikeLogExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewpointLikeLogExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewpointLikeLogExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvViewpointLikeLogEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvViewpointLikeLogObjLstCache: Array<clsvViewpointLikeLogEN> =
      JSON.parse(strTempObjLst);
    return arrvViewpointLikeLogObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vViewpointLikeLog_GetObjLstCache(): Promise<Array<clsvViewpointLikeLogEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvViewpointLikeLogObjLstCache;
  switch (clsvViewpointLikeLogEN.CacheModeId) {
    case '04': //sessionStorage
      arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstClientCache();
      break;
    default:
      arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstClientCache();
      break;
  }
  return arrvViewpointLikeLogObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vViewpointLikeLog_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvViewpointLikeLogObjLstCache;
  switch (clsvViewpointLikeLogEN.CacheModeId) {
    case '04': //sessionStorage
      arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvViewpointLikeLogObjLstCache = null;
      break;
    default:
      arrvViewpointLikeLogObjLstCache = null;
      break;
  }
  return arrvViewpointLikeLogObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngViewpointLikeLogIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vViewpointLikeLog_GetSubObjLstCache(
  objvViewpointLikeLogCond: clsvViewpointLikeLogEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
  let arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache;
  if (
    objvViewpointLikeLogCond.sfFldComparisonOp == null ||
    objvViewpointLikeLogCond.sfFldComparisonOp == ''
  )
    return arrvViewpointLikeLogSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvViewpointLikeLogCond.sfFldComparisonOp,
  );
  //console.log("clsvViewpointLikeLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvViewpointLikeLogCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointLikeLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvViewpointLikeLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvViewpointLikeLogCond),
      vViewpointLikeLog_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewpointLikeLogEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewpointLikeLogId:关键字列表
 * @returns 对象列表
 **/
export async function vViewpointLikeLog_GetObjLstByViewpointLikeLogIdLstAsync(
  arrViewpointLikeLogId: Array<string>,
): Promise<Array<clsvViewpointLikeLogEN>> {
  const strThisFuncName = 'GetObjLstByViewpointLikeLogIdLstAsync';
  const strAction = 'GetObjLstByViewpointLikeLogIdLst';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewpointLikeLogId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vViewpointLikeLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
 * @param arrlngViewpointLikeLogIdLst:关键字列表
 * @returns 对象列表
 */
export async function vViewpointLikeLog_GetObjLstByViewpointLikeLogIdLstCache(
  arrViewpointLikeLogIdLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByViewpointLikeLogIdLstCache';
  try {
    const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
    const arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache.filter(
      (x) => arrViewpointLikeLogIdLst.indexOf(x.viewpointLikeLogId) > -1,
    );
    return arrvViewpointLikeLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewpointLikeLogIdLst.join(','),
      vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvViewpointLikeLogEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
          vViewpointLikeLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvViewpointLikeLogEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
          vViewpointLikeLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvViewpointLikeLogEN>();
  const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
  if (arrvViewpointLikeLogObjLstCache.length == 0) return arrvViewpointLikeLogObjLstCache;
  let arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvViewpointLikeLogCond = new clsvViewpointLikeLogEN();
  ObjectAssign(objvViewpointLikeLogCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvViewpointLikeLogWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointLikeLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvViewpointLikeLogSel.length == 0) return arrvViewpointLikeLogSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.sort(
        vViewpointLikeLog_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.sort(objPagerPara.sortFun);
    }
    arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.slice(intStart, intEnd);
    return arrvViewpointLikeLogSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vViewpointLikeLog_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewpointLikeLogEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vViewpointLikeLog_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvViewpointLikeLogEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvViewpointLikeLogEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
          vViewpointLikeLog_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointLikeLog_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
 * @param objlngViewpointLikeLogIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vViewpointLikeLog_IsExistRecordCache(
  objvViewpointLikeLogCond: clsvViewpointLikeLogEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
  if (arrvViewpointLikeLogObjLstCache == null) return false;
  let arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache;
  if (
    objvViewpointLikeLogCond.sfFldComparisonOp == null ||
    objvViewpointLikeLogCond.sfFldComparisonOp == ''
  )
    return arrvViewpointLikeLogSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvViewpointLikeLogCond.sfFldComparisonOp,
  );
  //console.log("clsvViewpointLikeLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvViewpointLikeLogCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointLikeLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvViewpointLikeLogSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvViewpointLikeLogCond),
      vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
 * @param lngViewpointLikeLogId:所给的关键字
 * @returns 对象
 */
export async function vViewpointLikeLog_IsExistCache(lngViewpointLikeLogId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
  if (arrvViewpointLikeLogObjLstCache == null) return false;
  try {
    const arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache.filter(
      (x) => x.viewpointLikeLogId == lngViewpointLikeLogId,
    );
    if (arrvViewpointLikeLogSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngViewpointLikeLogId,
      vViewpointLikeLog_ConstructorName,
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
 * @param lngViewpointLikeLogId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vViewpointLikeLog_IsExistAsync(
  lngViewpointLikeLogId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointLikeLogId,
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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
export async function vViewpointLikeLog_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vViewpointLikeLog_Controller, strAction);

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
        vViewpointLikeLog_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointLikeLog_ConstructorName,
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
 * @param objvViewpointLikeLogCond:条件对象
 * @returns 对象列表记录数
 */
export async function vViewpointLikeLog_GetRecCountByCondCache(
  objvViewpointLikeLogCond: clsvViewpointLikeLogEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvViewpointLikeLogObjLstCache = await vViewpointLikeLog_GetObjLstCache();
  if (arrvViewpointLikeLogObjLstCache == null) return 0;
  let arrvViewpointLikeLogSel = arrvViewpointLikeLogObjLstCache;
  if (
    objvViewpointLikeLogCond.sfFldComparisonOp == null ||
    objvViewpointLikeLogCond.sfFldComparisonOp == ''
  )
    return arrvViewpointLikeLogSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvViewpointLikeLogCond.sfFldComparisonOp,
  );
  //console.log("clsvViewpointLikeLogWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvViewpointLikeLogCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointLikeLogCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointLikeLogSel = arrvViewpointLikeLogSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvViewpointLikeLogSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvViewpointLikeLogCond),
      vViewpointLikeLog_ConstructorName,
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
export function vViewpointLikeLog_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vViewpointLikeLog_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvViewpointLikeLogEN._CurrTabName;
    switch (clsvViewpointLikeLogEN.CacheModeId) {
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
export function vViewpointLikeLog_GetJSONStrByObj(
  pobjvViewpointLikeLogEN: clsvViewpointLikeLogEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvViewpointLikeLogEN);
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
export function vViewpointLikeLog_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvViewpointLikeLogEN> {
  let arrvViewpointLikeLogObjLst = new Array<clsvViewpointLikeLogEN>();
  if (strJSON === '') {
    return arrvViewpointLikeLogObjLst;
  }
  try {
    arrvViewpointLikeLogObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvViewpointLikeLogObjLst;
  }
  return arrvViewpointLikeLogObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvViewpointLikeLogObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vViewpointLikeLog_GetObjLstByJSONObjLst(
  arrvViewpointLikeLogObjLstS: Array<clsvViewpointLikeLogEN>,
): Array<clsvViewpointLikeLogEN> {
  const arrvViewpointLikeLogObjLst = new Array<clsvViewpointLikeLogEN>();
  for (const objInFor of arrvViewpointLikeLogObjLstS) {
    const obj1 = vViewpointLikeLog_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvViewpointLikeLogObjLst.push(obj1);
  }
  return arrvViewpointLikeLogObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vViewpointLikeLog_GetObjByJSONStr(strJSON: string): clsvViewpointLikeLogEN {
  let pobjvViewpointLikeLogEN = new clsvViewpointLikeLogEN();
  if (strJSON === '') {
    return pobjvViewpointLikeLogEN;
  }
  try {
    pobjvViewpointLikeLogEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvViewpointLikeLogEN;
  }
  return pobjvViewpointLikeLogEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vViewpointLikeLog_GetCombineCondition(
  objvViewpointLikeLogCond: clsvViewpointLikeLogEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointLikeLogEN.con_Memo,
      objvViewpointLikeLogCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointLikeLogEN.con_UpdUserId,
      objvViewpointLikeLogCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointLikeLogEN.con_UpdDate,
      objvViewpointLikeLogCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_ViewpointId,
    ) == true
  ) {
    const strComparisonOpViewpointId: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_ViewpointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointLikeLogEN.con_ViewpointId,
      objvViewpointLikeLogCond.viewpointId,
      strComparisonOpViewpointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_ViewpointLikeLogId,
    ) == true
  ) {
    const strComparisonOpViewpointLikeLogId: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_ViewpointLikeLogId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvViewpointLikeLogEN.con_ViewpointLikeLogId,
      objvViewpointLikeLogCond.viewpointLikeLogId,
      strComparisonOpViewpointLikeLogId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_ViewpointName,
    ) == true
  ) {
    const strComparisonOpViewpointName: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_ViewpointName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointLikeLogEN.con_ViewpointName,
      objvViewpointLikeLogCond.viewpointName,
      strComparisonOpViewpointName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointLikeLogCond.dicFldComparisonOp,
      clsvViewpointLikeLogEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvViewpointLikeLogCond.dicFldComparisonOp[clsvViewpointLikeLogEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointLikeLogEN.con_UserName,
      objvViewpointLikeLogCond.userName,
      strComparisonOpUserName,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vViewpointLikeLog(vViewpointLikeLog),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngViewpointLikeLogId: 观点点赞Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vViewpointLikeLog_GetUniCondStr(
  objvViewpointLikeLogEN: clsvViewpointLikeLogEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ViewpointLikeLogId = '{0}'",
    objvViewpointLikeLogEN.viewpointLikeLogId,
  );
  strWhereCond += Format(" and ViewpointId = '{0}'", objvViewpointLikeLogEN.viewpointId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vViewpointLikeLog(vViewpointLikeLog),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngViewpointLikeLogId: 观点点赞Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vViewpointLikeLog_GetUniCondStr4Update(
  objvViewpointLikeLogEN: clsvViewpointLikeLogEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ViewpointLikeLogId <> '{0}'",
    objvViewpointLikeLogEN.viewpointLikeLogId,
  );
  strWhereCond += Format(
    " and ViewpointLikeLogId = '{0}'",
    objvViewpointLikeLogEN.viewpointLikeLogId,
  );
  strWhereCond += Format(" and ViewpointId = '{0}'", objvViewpointLikeLogEN.viewpointId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvViewpointLikeLogENS:源对象
 * @param objvViewpointLikeLogENT:目标对象
 */
export function vViewpointLikeLog_CopyObjTo(
  objvViewpointLikeLogENS: clsvViewpointLikeLogEN,
  objvViewpointLikeLogENT: clsvViewpointLikeLogEN,
): void {
  objvViewpointLikeLogENT.memo = objvViewpointLikeLogENS.memo; //备注
  objvViewpointLikeLogENT.updUserId = objvViewpointLikeLogENS.updUserId; //修改用户Id
  objvViewpointLikeLogENT.updDate = objvViewpointLikeLogENS.updDate; //修改日期
  objvViewpointLikeLogENT.viewpointId = objvViewpointLikeLogENS.viewpointId; //观点Id
  objvViewpointLikeLogENT.viewpointLikeLogId = objvViewpointLikeLogENS.viewpointLikeLogId; //观点点赞Id
  objvViewpointLikeLogENT.viewpointName = objvViewpointLikeLogENS.viewpointName; //观点名称
  objvViewpointLikeLogENT.viewpointContent = objvViewpointLikeLogENS.viewpointContent; //观点内容
  objvViewpointLikeLogENT.reason = objvViewpointLikeLogENS.reason; //理由
  objvViewpointLikeLogENT.userName = objvViewpointLikeLogENS.userName; //用户名
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvViewpointLikeLogENS:源对象
 * @param objvViewpointLikeLogENT:目标对象
 */
export function vViewpointLikeLog_GetObjFromJsonObj(
  objvViewpointLikeLogENS: clsvViewpointLikeLogEN,
): clsvViewpointLikeLogEN {
  const objvViewpointLikeLogENT: clsvViewpointLikeLogEN = new clsvViewpointLikeLogEN();
  ObjectAssign(objvViewpointLikeLogENT, objvViewpointLikeLogENS);
  return objvViewpointLikeLogENT;
}
