/**
 * 类名:clsvViewpointAppraiseWApi
 * 表名:vViewpointAppraise(01120610)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vViewpointAppraise(vViewpointAppraise)
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
import { clsvViewpointAppraiseEN } from '@/ts/L0Entity/GradEduPaper/clsvViewpointAppraiseEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vViewpointAppraise_Controller = 'vViewpointAppraiseApi';
export const vViewpointAppraise_ConstructorName = 'vViewpointAppraise';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngViewpointAppraiseId:关键字
 * @returns 对象
 **/
export async function vViewpointAppraise_GetObjByViewpointAppraiseIdAsync(
  lngViewpointAppraiseId: number,
): Promise<clsvViewpointAppraiseEN | null> {
  const strThisFuncName = 'GetObjByViewpointAppraiseIdAsync';

  if (lngViewpointAppraiseId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointAppraiseId]不能为空!(In clsvViewpointAppraiseWApi.GetObjByViewpointAppraiseIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewpointAppraiseId';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointAppraiseId,
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
      const objvViewpointAppraise = vViewpointAppraise_GetObjFromJsonObj(returnObj);
      return objvViewpointAppraise;
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:所给的关键字
 * @returns 对象
 */
export async function vViewpointAppraise_GetObjByViewpointAppraiseIdCache(
  lngViewpointAppraiseId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewpointAppraiseIdCache';

  if (lngViewpointAppraiseId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointAppraiseId]不能为空!(In clsvViewpointAppraiseWApi.GetObjByViewpointAppraiseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
  try {
    const arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache.filter(
      (x) => x.viewpointAppraiseId == lngViewpointAppraiseId,
    );
    let objvViewpointAppraise: clsvViewpointAppraiseEN;
    if (arrvViewpointAppraiseSel.length > 0) {
      objvViewpointAppraise = arrvViewpointAppraiseSel[0];
      return objvViewpointAppraise;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvViewpointAppraiseConst =
          await vViewpointAppraise_GetObjByViewpointAppraiseIdAsync(lngViewpointAppraiseId);
        if (objvViewpointAppraiseConst != null) {
          vViewpointAppraise_ReFreshThisCache();
          return objvViewpointAppraiseConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointAppraiseId,
      vViewpointAppraise_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngViewpointAppraiseId:所给的关键字
 * @returns 对象
 */
export async function vViewpointAppraise_GetObjByViewpointAppraiseIdlocalStorage(
  lngViewpointAppraiseId: number,
) {
  const strThisFuncName = 'GetObjByViewpointAppraiseIdlocalStorage';

  if (lngViewpointAppraiseId == 0) {
    const strMsg = Format(
      '参数:[lngViewpointAppraiseId]不能为空!(In clsvViewpointAppraiseWApi.GetObjByViewpointAppraiseIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvViewpointAppraiseEN._CurrTabName, lngViewpointAppraiseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvViewpointAppraiseCache: clsvViewpointAppraiseEN = JSON.parse(strTempObj);
    return objvViewpointAppraiseCache;
  }
  try {
    const objvViewpointAppraise = await vViewpointAppraise_GetObjByViewpointAppraiseIdAsync(
      lngViewpointAppraiseId,
    );
    if (objvViewpointAppraise != null) {
      localStorage.setItem(strKey, JSON.stringify(objvViewpointAppraise));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvViewpointAppraise;
    }
    return objvViewpointAppraise;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngViewpointAppraiseId,
      vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvViewpointAppraiseEN.con_ViewpointAppraiseId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvViewpointAppraiseEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvViewpointAppraiseEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngViewpointAppraiseId = Number(strInValue);
  if (lngViewpointAppraiseId == 0) {
    return '';
  }
  const objvViewpointAppraise = await vViewpointAppraise_GetObjByViewpointAppraiseIdCache(
    lngViewpointAppraiseId,
  );
  if (objvViewpointAppraise == null) return '';
  if (objvViewpointAppraise.GetFldValue(strOutFldName) == null) return '';
  return objvViewpointAppraise.GetFldValue(strOutFldName).toString();
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
export function vViewpointAppraise_SortFunDefa(
  a: clsvViewpointAppraiseEN,
  b: clsvViewpointAppraiseEN,
): number {
  return a.viewpointAppraiseId - b.viewpointAppraiseId;
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
export function vViewpointAppraise_SortFunDefa2Fld(
  a: clsvViewpointAppraiseEN,
  b: clsvViewpointAppraiseEN,
): number {
  if (a.userName == b.userName) return a.viewpointId.localeCompare(b.viewpointId);
  else return a.userName.localeCompare(b.userName);
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
export function vViewpointAppraise_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvViewpointAppraiseEN.con_UserName:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvViewpointAppraiseEN.con_ViewpointAppraiseId:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          return a.viewpointAppraiseId - b.viewpointAppraiseId;
        };
      case clsvViewpointAppraiseEN.con_ViewpointId:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.viewpointId == null) return -1;
          if (b.viewpointId == null) return 1;
          return a.viewpointId.localeCompare(b.viewpointId);
        };
      case clsvViewpointAppraiseEN.con_AppraiseContent:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.appraiseContent == null) return -1;
          if (b.appraiseContent == null) return 1;
          return a.appraiseContent.localeCompare(b.appraiseContent);
        };
      case clsvViewpointAppraiseEN.con_UpdDate:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvViewpointAppraiseEN.con_Memo:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvViewpointAppraiseEN.con_ViewpointName:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.viewpointName == null) return -1;
          if (b.viewpointName == null) return 1;
          return a.viewpointName.localeCompare(b.viewpointName);
        };
      case clsvViewpointAppraiseEN.con_ViewpointContent:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.viewpointContent == null) return -1;
          if (b.viewpointContent == null) return 1;
          return a.viewpointContent.localeCompare(b.viewpointContent);
        };
      case clsvViewpointAppraiseEN.con_Reason:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.reason == null) return -1;
          if (b.reason == null) return 1;
          return a.reason.localeCompare(b.reason);
        };
      case clsvViewpointAppraiseEN.con_UpdUser:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vViewpointAppraise]中不存在!(in ${vViewpointAppraise_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvViewpointAppraiseEN.con_UserName:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvViewpointAppraiseEN.con_ViewpointAppraiseId:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          return b.viewpointAppraiseId - a.viewpointAppraiseId;
        };
      case clsvViewpointAppraiseEN.con_ViewpointId:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.viewpointId == null) return -1;
          if (a.viewpointId == null) return 1;
          return b.viewpointId.localeCompare(a.viewpointId);
        };
      case clsvViewpointAppraiseEN.con_AppraiseContent:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.appraiseContent == null) return -1;
          if (a.appraiseContent == null) return 1;
          return b.appraiseContent.localeCompare(a.appraiseContent);
        };
      case clsvViewpointAppraiseEN.con_UpdDate:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvViewpointAppraiseEN.con_Memo:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvViewpointAppraiseEN.con_ViewpointName:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.viewpointName == null) return -1;
          if (a.viewpointName == null) return 1;
          return b.viewpointName.localeCompare(a.viewpointName);
        };
      case clsvViewpointAppraiseEN.con_ViewpointContent:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.viewpointContent == null) return -1;
          if (a.viewpointContent == null) return 1;
          return b.viewpointContent.localeCompare(a.viewpointContent);
        };
      case clsvViewpointAppraiseEN.con_Reason:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.reason == null) return -1;
          if (a.reason == null) return 1;
          return b.reason.localeCompare(a.reason);
        };
      case clsvViewpointAppraiseEN.con_UpdUser:
        return (a: clsvViewpointAppraiseEN, b: clsvViewpointAppraiseEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vViewpointAppraise]中不存在!(in ${vViewpointAppraise_ConstructorName}.${strThisFuncName})`;
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
export async function vViewpointAppraise_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvViewpointAppraiseEN.con_UserName:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.userName === value;
      };
    case clsvViewpointAppraiseEN.con_ViewpointAppraiseId:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.viewpointAppraiseId === value;
      };
    case clsvViewpointAppraiseEN.con_ViewpointId:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.viewpointId === value;
      };
    case clsvViewpointAppraiseEN.con_AppraiseContent:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.appraiseContent === value;
      };
    case clsvViewpointAppraiseEN.con_UpdDate:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.updDate === value;
      };
    case clsvViewpointAppraiseEN.con_Memo:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.memo === value;
      };
    case clsvViewpointAppraiseEN.con_ViewpointName:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.viewpointName === value;
      };
    case clsvViewpointAppraiseEN.con_ViewpointContent:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.viewpointContent === value;
      };
    case clsvViewpointAppraiseEN.con_Reason:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.reason === value;
      };
    case clsvViewpointAppraiseEN.con_UpdUser:
      return (obj: clsvViewpointAppraiseEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vViewpointAppraise]中不存在!(in ${vViewpointAppraise_ConstructorName}.${strThisFuncName})`;
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
export async function vViewpointAppraise_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvViewpointAppraiseEN.con_ViewpointAppraiseId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvViewpointAppraise = await vViewpointAppraise_GetObjLstCache();
  if (arrvViewpointAppraise == null) return [];
  let arrvViewpointAppraiseSel = arrvViewpointAppraise;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvViewpointAppraiseSel.length == 0) return [];
  return arrvViewpointAppraiseSel.map((x) => x.viewpointAppraiseId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vViewpointAppraise_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvViewpointAppraiseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
      const objvViewpointAppraise = vViewpointAppraise_GetObjFromJsonObj(returnObj);
      return objvViewpointAppraise;
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvViewpointAppraiseEN._CurrTabName;
  if (IsNullOrEmpty(clsvViewpointAppraiseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewpointAppraiseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvViewpointAppraiseExObjLstCache: Array<clsvViewpointAppraiseEN> =
      CacheHelper.Get(strKey);
    const arrvViewpointAppraiseObjLstT = vViewpointAppraise_GetObjLstByJSONObjLst(
      arrvViewpointAppraiseExObjLstCache,
    );
    return arrvViewpointAppraiseObjLstT;
  }
  try {
    const arrvViewpointAppraiseExObjLst = await vViewpointAppraise_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvViewpointAppraiseExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewpointAppraiseExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewpointAppraiseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvViewpointAppraiseEN._CurrTabName;
  if (IsNullOrEmpty(clsvViewpointAppraiseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewpointAppraiseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvViewpointAppraiseExObjLstCache: Array<clsvViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    const arrvViewpointAppraiseObjLstT = vViewpointAppraise_GetObjLstByJSONObjLst(
      arrvViewpointAppraiseExObjLstCache,
    );
    return arrvViewpointAppraiseObjLstT;
  }
  try {
    const arrvViewpointAppraiseExObjLst = await vViewpointAppraise_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvViewpointAppraiseExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewpointAppraiseExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewpointAppraiseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvViewpointAppraiseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvViewpointAppraiseObjLstCache: Array<clsvViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    return arrvViewpointAppraiseObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vViewpointAppraise_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
          vViewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvViewpointAppraiseEN._CurrTabName;
  if (IsNullOrEmpty(clsvViewpointAppraiseEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewpointAppraiseEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvViewpointAppraiseExObjLstCache: Array<clsvViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    const arrvViewpointAppraiseObjLstT = vViewpointAppraise_GetObjLstByJSONObjLst(
      arrvViewpointAppraiseExObjLstCache,
    );
    return arrvViewpointAppraiseObjLstT;
  }
  try {
    const arrvViewpointAppraiseExObjLst = await vViewpointAppraise_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvViewpointAppraiseExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewpointAppraiseExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewpointAppraiseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvViewpointAppraiseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvViewpointAppraiseObjLstCache: Array<clsvViewpointAppraiseEN> =
      JSON.parse(strTempObjLst);
    return arrvViewpointAppraiseObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vViewpointAppraise_GetObjLstCache(): Promise<Array<clsvViewpointAppraiseEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvViewpointAppraiseObjLstCache;
  switch (clsvViewpointAppraiseEN.CacheModeId) {
    case '04': //sessionStorage
      arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstClientCache();
      break;
    default:
      arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstClientCache();
      break;
  }
  return arrvViewpointAppraiseObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vViewpointAppraise_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvViewpointAppraiseObjLstCache;
  switch (clsvViewpointAppraiseEN.CacheModeId) {
    case '04': //sessionStorage
      arrvViewpointAppraiseObjLstCache =
        await vViewpointAppraise_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvViewpointAppraiseObjLstCache = null;
      break;
    default:
      arrvViewpointAppraiseObjLstCache = null;
      break;
  }
  return arrvViewpointAppraiseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngViewpointAppraiseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vViewpointAppraise_GetSubObjLstCache(
  objvViewpointAppraiseCond: clsvViewpointAppraiseEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
  let arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache;
  if (
    objvViewpointAppraiseCond.sfFldComparisonOp == null ||
    objvViewpointAppraiseCond.sfFldComparisonOp == ''
  )
    return arrvViewpointAppraiseSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvViewpointAppraiseCond.sfFldComparisonOp,
  );
  //console.log("clsvViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvViewpointAppraiseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvViewpointAppraiseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvViewpointAppraiseCond),
      vViewpointAppraise_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewpointAppraiseEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewpointAppraiseId:关键字列表
 * @returns 对象列表
 **/
export async function vViewpointAppraise_GetObjLstByViewpointAppraiseIdLstAsync(
  arrViewpointAppraiseId: Array<string>,
): Promise<Array<clsvViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstByViewpointAppraiseIdLstAsync';
  const strAction = 'GetObjLstByViewpointAppraiseIdLst';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewpointAppraiseId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vViewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
 * @param arrlngViewpointAppraiseIdLst:关键字列表
 * @returns 对象列表
 */
export async function vViewpointAppraise_GetObjLstByViewpointAppraiseIdLstCache(
  arrViewpointAppraiseIdLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByViewpointAppraiseIdLstCache';
  try {
    const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
    const arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache.filter(
      (x) => arrViewpointAppraiseIdLst.indexOf(x.viewpointAppraiseId) > -1,
    );
    return arrvViewpointAppraiseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewpointAppraiseIdLst.join(','),
      vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvViewpointAppraiseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
          vViewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
          vViewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvViewpointAppraiseEN>();
  const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
  if (arrvViewpointAppraiseObjLstCache.length == 0) return arrvViewpointAppraiseObjLstCache;
  let arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvViewpointAppraiseCond = new clsvViewpointAppraiseEN();
  ObjectAssign(objvViewpointAppraiseCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvViewpointAppraiseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvViewpointAppraiseSel.length == 0) return arrvViewpointAppraiseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.sort(
        vViewpointAppraise_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.sort(objPagerPara.sortFun);
    }
    arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.slice(intStart, intEnd);
    return arrvViewpointAppraiseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vViewpointAppraise_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewpointAppraiseEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vViewpointAppraise_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvViewpointAppraiseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvViewpointAppraiseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
          vViewpointAppraise_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpointAppraise_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
 * @param objlngViewpointAppraiseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vViewpointAppraise_IsExistRecordCache(
  objvViewpointAppraiseCond: clsvViewpointAppraiseEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
  if (arrvViewpointAppraiseObjLstCache == null) return false;
  let arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache;
  if (
    objvViewpointAppraiseCond.sfFldComparisonOp == null ||
    objvViewpointAppraiseCond.sfFldComparisonOp == ''
  )
    return arrvViewpointAppraiseSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvViewpointAppraiseCond.sfFldComparisonOp,
  );
  //console.log("clsvViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvViewpointAppraiseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvViewpointAppraiseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvViewpointAppraiseCond),
      vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:所给的关键字
 * @returns 对象
 */
export async function vViewpointAppraise_IsExistCache(lngViewpointAppraiseId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
  if (arrvViewpointAppraiseObjLstCache == null) return false;
  try {
    const arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache.filter(
      (x) => x.viewpointAppraiseId == lngViewpointAppraiseId,
    );
    if (arrvViewpointAppraiseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngViewpointAppraiseId,
      vViewpointAppraise_ConstructorName,
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
 * @param lngViewpointAppraiseId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vViewpointAppraise_IsExistAsync(
  lngViewpointAppraiseId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngViewpointAppraiseId,
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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
export async function vViewpointAppraise_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vViewpointAppraise_Controller, strAction);

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
        vViewpointAppraise_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewpointAppraise_ConstructorName,
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
 * @param objvViewpointAppraiseCond:条件对象
 * @returns 对象列表记录数
 */
export async function vViewpointAppraise_GetRecCountByCondCache(
  objvViewpointAppraiseCond: clsvViewpointAppraiseEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvViewpointAppraiseObjLstCache = await vViewpointAppraise_GetObjLstCache();
  if (arrvViewpointAppraiseObjLstCache == null) return 0;
  let arrvViewpointAppraiseSel = arrvViewpointAppraiseObjLstCache;
  if (
    objvViewpointAppraiseCond.sfFldComparisonOp == null ||
    objvViewpointAppraiseCond.sfFldComparisonOp == ''
  )
    return arrvViewpointAppraiseSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvViewpointAppraiseCond.sfFldComparisonOp,
  );
  //console.log("clsvViewpointAppraiseWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvViewpointAppraiseCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpointAppraiseCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewpointAppraiseSel = arrvViewpointAppraiseSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvViewpointAppraiseSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvViewpointAppraiseCond),
      vViewpointAppraise_ConstructorName,
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
export function vViewpointAppraise_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vViewpointAppraise_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvViewpointAppraiseEN._CurrTabName;
    switch (clsvViewpointAppraiseEN.CacheModeId) {
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
export function vViewpointAppraise_GetJSONStrByObj(
  pobjvViewpointAppraiseEN: clsvViewpointAppraiseEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvViewpointAppraiseEN);
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
export function vViewpointAppraise_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvViewpointAppraiseEN> {
  let arrvViewpointAppraiseObjLst = new Array<clsvViewpointAppraiseEN>();
  if (strJSON === '') {
    return arrvViewpointAppraiseObjLst;
  }
  try {
    arrvViewpointAppraiseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvViewpointAppraiseObjLst;
  }
  return arrvViewpointAppraiseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvViewpointAppraiseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vViewpointAppraise_GetObjLstByJSONObjLst(
  arrvViewpointAppraiseObjLstS: Array<clsvViewpointAppraiseEN>,
): Array<clsvViewpointAppraiseEN> {
  const arrvViewpointAppraiseObjLst = new Array<clsvViewpointAppraiseEN>();
  for (const objInFor of arrvViewpointAppraiseObjLstS) {
    const obj1 = vViewpointAppraise_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvViewpointAppraiseObjLst.push(obj1);
  }
  return arrvViewpointAppraiseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vViewpointAppraise_GetObjByJSONStr(strJSON: string): clsvViewpointAppraiseEN {
  let pobjvViewpointAppraiseEN = new clsvViewpointAppraiseEN();
  if (strJSON === '') {
    return pobjvViewpointAppraiseEN;
  }
  try {
    pobjvViewpointAppraiseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvViewpointAppraiseEN;
  }
  return pobjvViewpointAppraiseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vViewpointAppraise_GetCombineCondition(
  objvViewpointAppraiseCond: clsvViewpointAppraiseEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_UserName,
      objvViewpointAppraiseCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_ViewpointAppraiseId,
    ) == true
  ) {
    const strComparisonOpViewpointAppraiseId: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_ViewpointAppraiseId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvViewpointAppraiseEN.con_ViewpointAppraiseId,
      objvViewpointAppraiseCond.viewpointAppraiseId,
      strComparisonOpViewpointAppraiseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_ViewpointId,
    ) == true
  ) {
    const strComparisonOpViewpointId: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_ViewpointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_ViewpointId,
      objvViewpointAppraiseCond.viewpointId,
      strComparisonOpViewpointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_AppraiseContent,
    ) == true
  ) {
    const strComparisonOpAppraiseContent: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_AppraiseContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_AppraiseContent,
      objvViewpointAppraiseCond.appraiseContent,
      strComparisonOpAppraiseContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_UpdDate,
      objvViewpointAppraiseCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_Memo,
      objvViewpointAppraiseCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_ViewpointName,
    ) == true
  ) {
    const strComparisonOpViewpointName: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_ViewpointName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_ViewpointName,
      objvViewpointAppraiseCond.viewpointName,
      strComparisonOpViewpointName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewpointAppraiseCond.dicFldComparisonOp,
      clsvViewpointAppraiseEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvViewpointAppraiseCond.dicFldComparisonOp[clsvViewpointAppraiseEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewpointAppraiseEN.con_UpdUser,
      objvViewpointAppraiseCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vViewpointAppraise(vViewpointAppraise),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngViewpointAppraiseId: 观点评论Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vViewpointAppraise_GetUniCondStr(
  objvViewpointAppraiseEN: clsvViewpointAppraiseEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ViewpointAppraiseId = '{0}'",
    objvViewpointAppraiseEN.viewpointAppraiseId,
  );
  strWhereCond += Format(" and ViewpointId = '{0}'", objvViewpointAppraiseEN.viewpointId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vViewpointAppraise(vViewpointAppraise),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngViewpointAppraiseId: 观点评论Id(要求唯一的字段)
 * @param strViewpointId: 观点Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vViewpointAppraise_GetUniCondStr4Update(
  objvViewpointAppraiseEN: clsvViewpointAppraiseEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ViewpointAppraiseId <> '{0}'",
    objvViewpointAppraiseEN.viewpointAppraiseId,
  );
  strWhereCond += Format(
    " and ViewpointAppraiseId = '{0}'",
    objvViewpointAppraiseEN.viewpointAppraiseId,
  );
  strWhereCond += Format(" and ViewpointId = '{0}'", objvViewpointAppraiseEN.viewpointId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvViewpointAppraiseENS:源对象
 * @param objvViewpointAppraiseENT:目标对象
 */
export function vViewpointAppraise_CopyObjTo(
  objvViewpointAppraiseENS: clsvViewpointAppraiseEN,
  objvViewpointAppraiseENT: clsvViewpointAppraiseEN,
): void {
  objvViewpointAppraiseENT.userName = objvViewpointAppraiseENS.userName; //用户名
  objvViewpointAppraiseENT.viewpointAppraiseId = objvViewpointAppraiseENS.viewpointAppraiseId; //观点评论Id
  objvViewpointAppraiseENT.viewpointId = objvViewpointAppraiseENS.viewpointId; //观点Id
  objvViewpointAppraiseENT.appraiseContent = objvViewpointAppraiseENS.appraiseContent; //评议内容
  objvViewpointAppraiseENT.updDate = objvViewpointAppraiseENS.updDate; //修改日期
  objvViewpointAppraiseENT.memo = objvViewpointAppraiseENS.memo; //备注
  objvViewpointAppraiseENT.viewpointName = objvViewpointAppraiseENS.viewpointName; //观点名称
  objvViewpointAppraiseENT.viewpointContent = objvViewpointAppraiseENS.viewpointContent; //观点内容
  objvViewpointAppraiseENT.reason = objvViewpointAppraiseENS.reason; //理由
  objvViewpointAppraiseENT.updUser = objvViewpointAppraiseENS.updUser; //修改人
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvViewpointAppraiseENS:源对象
 * @param objvViewpointAppraiseENT:目标对象
 */
export function vViewpointAppraise_GetObjFromJsonObj(
  objvViewpointAppraiseENS: clsvViewpointAppraiseEN,
): clsvViewpointAppraiseEN {
  const objvViewpointAppraiseENT: clsvViewpointAppraiseEN = new clsvViewpointAppraiseEN();
  ObjectAssign(objvViewpointAppraiseENT, objvViewpointAppraiseENS);
  return objvViewpointAppraiseENT;
}
