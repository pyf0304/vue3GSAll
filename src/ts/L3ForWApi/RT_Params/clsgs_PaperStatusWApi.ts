/**
 * 类名:clsgs_PaperStatusWApi
 * 表名:gs_PaperStatus(01120676)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 论文状态表(gs_PaperStatus)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_PaperStatusEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperStatusEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_PaperStatus_Controller = 'gs_PaperStatusApi';
export const gs_PaperStatus_ConstructorName = 'gs_PaperStatus';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPaperStatusId:关键字
 * @returns 对象
 **/
export async function gs_PaperStatus_GetObjByPaperStatusIdAsync(
  strPaperStatusId: string,
): Promise<clsgs_PaperStatusEN | null> {
  const strThisFuncName = 'GetObjByPaperStatusIdAsync';

  if (IsNullOrEmpty(strPaperStatusId) == true) {
    const strMsg = Format(
      '参数:[strPaperStatusId]不能为空!(In clsgs_PaperStatusWApi.GetObjByPaperStatusIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperStatusId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPaperStatusId]的长度:[{0}]不正确!(clsgs_PaperStatusWApi.GetObjByPaperStatusIdAsync)',
      strPaperStatusId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPaperStatusId';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperStatusId,
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
      const objgs_PaperStatus = gs_PaperStatus_GetObjFromJsonObj(returnObj);
      return objgs_PaperStatus;
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param strPaperStatusId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperStatus_GetObjByPaperStatusIdCache(
  strPaperStatusId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPaperStatusIdCache';

  if (IsNullOrEmpty(strPaperStatusId) == true) {
    const strMsg = Format(
      '参数:[strPaperStatusId]不能为空!(In clsgs_PaperStatusWApi.GetObjByPaperStatusIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperStatusId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPaperStatusId]的长度:[{0}]不正确!(clsgs_PaperStatusWApi.GetObjByPaperStatusIdCache)',
      strPaperStatusId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  try {
    const arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache.filter(
      (x) => x.paperStatusId == strPaperStatusId,
    );
    let objgs_PaperStatus: clsgs_PaperStatusEN;
    if (arrgs_PaperStatusSel.length > 0) {
      objgs_PaperStatus = arrgs_PaperStatusSel[0];
      return objgs_PaperStatus;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_PaperStatusConst = await gs_PaperStatus_GetObjByPaperStatusIdAsync(
          strPaperStatusId,
        );
        if (objgs_PaperStatusConst != null) {
          gs_PaperStatus_ReFreshThisCache();
          return objgs_PaperStatusConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPaperStatusId,
      gs_PaperStatus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPaperStatusId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperStatus_GetObjByPaperStatusIdlocalStorage(strPaperStatusId: string) {
  const strThisFuncName = 'GetObjByPaperStatusIdlocalStorage';

  if (IsNullOrEmpty(strPaperStatusId) == true) {
    const strMsg = Format(
      '参数:[strPaperStatusId]不能为空!(In clsgs_PaperStatusWApi.GetObjByPaperStatusIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperStatusId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPaperStatusId]的长度:[{0}]不正确!(clsgs_PaperStatusWApi.GetObjByPaperStatusIdlocalStorage)',
      strPaperStatusId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_PaperStatusEN._CurrTabName, strPaperStatusId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_PaperStatusCache: clsgs_PaperStatusEN = JSON.parse(strTempObj);
    return objgs_PaperStatusCache;
  }
  try {
    const objgs_PaperStatus = await gs_PaperStatus_GetObjByPaperStatusIdAsync(strPaperStatusId);
    if (objgs_PaperStatus != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_PaperStatus));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_PaperStatus;
    }
    return objgs_PaperStatus;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPaperStatusId,
      gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatus:所给的对象
 * @returns 对象
 */
export async function gs_PaperStatus_UpdateObjInLstCache(objgs_PaperStatus: clsgs_PaperStatusEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
    const obj = arrgs_PaperStatusObjLstCache.find(
      (x) => x.paperStatusId == objgs_PaperStatus.paperStatusId,
    );
    if (obj != null) {
      objgs_PaperStatus.paperStatusId = obj.paperStatusId;
      ObjectAssign(obj, objgs_PaperStatus);
    } else {
      arrgs_PaperStatusObjLstCache.push(objgs_PaperStatus);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_PaperStatus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPaperStatusId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperStatus_GetNameByPaperStatusIdCache(strPaperStatusId: string) {
  if (IsNullOrEmpty(strPaperStatusId) == true) {
    const strMsg = Format(
      '参数:[strPaperStatusId]不能为空!(In clsgs_PaperStatusWApi.GetNameByPaperStatusIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPaperStatusId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPaperStatusId]的长度:[{0}]不正确!(clsgs_PaperStatusWApi.GetNameByPaperStatusIdCache)',
      strPaperStatusId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  if (arrgs_PaperStatusObjLstCache == null) return '';
  try {
    const arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache.filter(
      (x) => x.paperStatusId == strPaperStatusId,
    );
    let objgs_PaperStatus: clsgs_PaperStatusEN;
    if (arrgs_PaperStatusSel.length > 0) {
      objgs_PaperStatus = arrgs_PaperStatusSel[0];
      return objgs_PaperStatus.paperStatusName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPaperStatusId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function gs_PaperStatus_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_PaperStatusEN.con_PaperStatusId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_PaperStatusEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_PaperStatusEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPaperStatusId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_PaperStatus = await gs_PaperStatus_GetObjByPaperStatusIdCache(strPaperStatusId);
  if (objgs_PaperStatus == null) return '';
  if (objgs_PaperStatus.GetFldValue(strOutFldName) == null) return '';
  return objgs_PaperStatus.GetFldValue(strOutFldName).toString();
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
export function gs_PaperStatus_SortFunDefa(a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN): number {
  return a.paperStatusId.localeCompare(b.paperStatusId);
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
export function gs_PaperStatus_SortFunDefa2Fld(
  a: clsgs_PaperStatusEN,
  b: clsgs_PaperStatusEN,
): number {
  if (a.paperStatusName == b.paperStatusName) return a.updUser.localeCompare(b.updUser);
  else return a.paperStatusName.localeCompare(b.paperStatusName);
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
export function gs_PaperStatus_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_PaperStatusEN.con_PaperStatusId:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          return a.paperStatusId.localeCompare(b.paperStatusId);
        };
      case clsgs_PaperStatusEN.con_PaperStatusName:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (a.paperStatusName == null) return -1;
          if (b.paperStatusName == null) return 1;
          return a.paperStatusName.localeCompare(b.paperStatusName);
        };
      case clsgs_PaperStatusEN.con_UpdUser:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_PaperStatusEN.con_UpdDate:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_PaperStatusEN.con_Memo:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperStatus]中不存在!(in ${gs_PaperStatus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_PaperStatusEN.con_PaperStatusId:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          return b.paperStatusId.localeCompare(a.paperStatusId);
        };
      case clsgs_PaperStatusEN.con_PaperStatusName:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (b.paperStatusName == null) return -1;
          if (a.paperStatusName == null) return 1;
          return b.paperStatusName.localeCompare(a.paperStatusName);
        };
      case clsgs_PaperStatusEN.con_UpdUser:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_PaperStatusEN.con_UpdDate:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_PaperStatusEN.con_Memo:
        return (a: clsgs_PaperStatusEN, b: clsgs_PaperStatusEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_PaperStatus]中不存在!(in ${gs_PaperStatus_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperStatus_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_PaperStatusEN.con_PaperStatusId:
      return (obj: clsgs_PaperStatusEN) => {
        return obj.paperStatusId === value;
      };
    case clsgs_PaperStatusEN.con_PaperStatusName:
      return (obj: clsgs_PaperStatusEN) => {
        return obj.paperStatusName === value;
      };
    case clsgs_PaperStatusEN.con_UpdUser:
      return (obj: clsgs_PaperStatusEN) => {
        return obj.updUser === value;
      };
    case clsgs_PaperStatusEN.con_UpdDate:
      return (obj: clsgs_PaperStatusEN) => {
        return obj.updDate === value;
      };
    case clsgs_PaperStatusEN.con_Memo:
      return (obj: clsgs_PaperStatusEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_PaperStatus]中不存在!(in ${gs_PaperStatus_ConstructorName}.${strThisFuncName})`;
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
export async function gs_PaperStatus_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_PaperStatusEN.con_PaperStatusId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_PaperStatus = await gs_PaperStatus_GetObjLstCache();
  if (arrgs_PaperStatus == null) return [];
  let arrgs_PaperStatusSel = arrgs_PaperStatus;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_PaperStatusSel.length == 0) return [];
  return arrgs_PaperStatusSel.map((x) => x.paperStatusId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperStatus_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_PaperStatusEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
      const objgs_PaperStatus = gs_PaperStatus_GetObjFromJsonObj(returnObj);
      return objgs_PaperStatus;
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperStatusEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperStatusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperStatusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_PaperStatusExObjLstCache: Array<clsgs_PaperStatusEN> = CacheHelper.Get(strKey);
    const arrgs_PaperStatusObjLstT = gs_PaperStatus_GetObjLstByJSONObjLst(
      arrgs_PaperStatusExObjLstCache,
    );
    return arrgs_PaperStatusObjLstT;
  }
  try {
    const arrgs_PaperStatusExObjLst = await gs_PaperStatus_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_PaperStatusExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperStatusExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperStatusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperStatusEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperStatusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperStatusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperStatusExObjLstCache: Array<clsgs_PaperStatusEN> = JSON.parse(strTempObjLst);
    const arrgs_PaperStatusObjLstT = gs_PaperStatus_GetObjLstByJSONObjLst(
      arrgs_PaperStatusExObjLstCache,
    );
    return arrgs_PaperStatusObjLstT;
  }
  try {
    const arrgs_PaperStatusExObjLst = await gs_PaperStatus_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_PaperStatusExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperStatusExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperStatusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_PaperStatusEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_PaperStatusObjLstCache: Array<clsgs_PaperStatusEN> = JSON.parse(strTempObjLst);
    return arrgs_PaperStatusObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_PaperStatus_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_PaperStatusEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
          gs_PaperStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_PaperStatusEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_PaperStatusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_PaperStatusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperStatusExObjLstCache: Array<clsgs_PaperStatusEN> = JSON.parse(strTempObjLst);
    const arrgs_PaperStatusObjLstT = gs_PaperStatus_GetObjLstByJSONObjLst(
      arrgs_PaperStatusExObjLstCache,
    );
    return arrgs_PaperStatusObjLstT;
  }
  try {
    const arrgs_PaperStatusExObjLst = await gs_PaperStatus_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_PaperStatusExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_PaperStatusExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_PaperStatusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_PaperStatusEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_PaperStatusObjLstCache: Array<clsgs_PaperStatusEN> = JSON.parse(strTempObjLst);
    return arrgs_PaperStatusObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperStatus_GetObjLstCache(): Promise<Array<clsgs_PaperStatusEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_PaperStatusObjLstCache;
  switch (clsgs_PaperStatusEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstClientCache();
      break;
    default:
      arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstClientCache();
      break;
  }
  return arrgs_PaperStatusObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_PaperStatus_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_PaperStatusObjLstCache;
  switch (clsgs_PaperStatusEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_PaperStatusObjLstCache = null;
      break;
    default:
      arrgs_PaperStatusObjLstCache = null;
      break;
  }
  return arrgs_PaperStatusObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPaperStatusIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperStatus_GetSubObjLstCache(objgs_PaperStatusCond: clsgs_PaperStatusEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  let arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache;
  if (
    objgs_PaperStatusCond.sfFldComparisonOp == null ||
    objgs_PaperStatusCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperStatusSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperStatusCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperStatusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperStatusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperStatusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperStatusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperStatusCond),
      gs_PaperStatus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperStatusEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPaperStatusId:关键字列表
 * @returns 对象列表
 **/
export async function gs_PaperStatus_GetObjLstByPaperStatusIdLstAsync(
  arrPaperStatusId: Array<string>,
): Promise<Array<clsgs_PaperStatusEN>> {
  const strThisFuncName = 'GetObjLstByPaperStatusIdLstAsync';
  const strAction = 'GetObjLstByPaperStatusIdLst';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperStatusId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_PaperStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param arrstrPaperStatusIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_PaperStatus_GetObjLstByPaperStatusIdLstCache(
  arrPaperStatusIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPaperStatusIdLstCache';
  try {
    const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
    const arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache.filter(
      (x) => arrPaperStatusIdLst.indexOf(x.paperStatusId) > -1,
    );
    return arrgs_PaperStatusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPaperStatusIdLst.join(','),
      gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_PaperStatusEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
          gs_PaperStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_PaperStatusEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
          gs_PaperStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperStatusEN>();
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  if (arrgs_PaperStatusObjLstCache.length == 0) return arrgs_PaperStatusObjLstCache;
  let arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_PaperStatusCond = new clsgs_PaperStatusEN();
  ObjectAssign(objgs_PaperStatusCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_PaperStatusWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperStatusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperStatusSel.length == 0) return arrgs_PaperStatusSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_PaperStatusSel = arrgs_PaperStatusSel.sort(
        gs_PaperStatus_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_PaperStatusSel = arrgs_PaperStatusSel.sort(objPagerPara.sortFun);
    }
    arrgs_PaperStatusSel = arrgs_PaperStatusSel.slice(intStart, intEnd);
    return arrgs_PaperStatusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_PaperStatus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_PaperStatusEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_PaperStatus_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_PaperStatusEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_PaperStatusEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
          gs_PaperStatus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_PaperStatus_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param strPaperStatusId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_PaperStatus_DelRecordAsync(strPaperStatusId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPaperStatusId);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param arrPaperStatusId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_PaperStatus_Delgs_PaperStatussAsync(
  arrPaperStatusId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperStatussAsync';
  const strAction = 'Delgs_PaperStatuss';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPaperStatusId, config);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_Delgs_PaperStatussByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_PaperStatussByCondAsync';
  const strAction = 'Delgs_PaperStatussByCond';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatusEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperStatus_AddNewRecordAsync(
  objgs_PaperStatusEN: clsgs_PaperStatusEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_PaperStatusEN);
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperStatusEN, config);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatusEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_PaperStatus_AddNewRecordWithMaxIdAsync(
  objgs_PaperStatusEN: clsgs_PaperStatusEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperStatusEN, config);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatusEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_PaperStatus_AddNewRecordWithReturnKeyAsync(
  objgs_PaperStatusEN: clsgs_PaperStatusEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperStatusEN, config);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatusEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_PaperStatus_UpdateRecordAsync(
  objgs_PaperStatusEN: clsgs_PaperStatusEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_PaperStatusEN.sfUpdFldSetStr === undefined ||
    objgs_PaperStatusEN.sfUpdFldSetStr === null ||
    objgs_PaperStatusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperStatusEN.paperStatusId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperStatusEN, config);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatusEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_PaperStatus_UpdateWithConditionAsync(
  objgs_PaperStatusEN: clsgs_PaperStatusEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_PaperStatusEN.sfUpdFldSetStr === undefined ||
    objgs_PaperStatusEN.sfUpdFldSetStr === null ||
    objgs_PaperStatusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_PaperStatusEN.paperStatusId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);
  objgs_PaperStatusEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_PaperStatusEN, config);
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objstrPaperStatusIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_PaperStatus_IsExistRecordCache(
  objgs_PaperStatusCond: clsgs_PaperStatusEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  if (arrgs_PaperStatusObjLstCache == null) return false;
  let arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache;
  if (
    objgs_PaperStatusCond.sfFldComparisonOp == null ||
    objgs_PaperStatusCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperStatusSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperStatusCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperStatusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperStatusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperStatusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_PaperStatusSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_PaperStatusCond),
      gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param strPaperStatusId:所给的关键字
 * @returns 对象
 */
export async function gs_PaperStatus_IsExistCache(strPaperStatusId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  if (arrgs_PaperStatusObjLstCache == null) return false;
  try {
    const arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache.filter(
      (x) => x.paperStatusId == strPaperStatusId,
    );
    if (arrgs_PaperStatusSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPaperStatusId,
      gs_PaperStatus_ConstructorName,
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
 * @param strPaperStatusId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_PaperStatus_IsExistAsync(strPaperStatusId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPaperStatusId,
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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
 * @param objgs_PaperStatusCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_PaperStatus_GetRecCountByCondCache(
  objgs_PaperStatusCond: clsgs_PaperStatusEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_PaperStatusObjLstCache = await gs_PaperStatus_GetObjLstCache();
  if (arrgs_PaperStatusObjLstCache == null) return 0;
  let arrgs_PaperStatusSel = arrgs_PaperStatusObjLstCache;
  if (
    objgs_PaperStatusCond.sfFldComparisonOp == null ||
    objgs_PaperStatusCond.sfFldComparisonOp == ''
  )
    return arrgs_PaperStatusSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_PaperStatusCond.sfFldComparisonOp,
  );
  //console.log("clsgs_PaperStatusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_PaperStatusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_PaperStatusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_PaperStatusSel = arrgs_PaperStatusSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_PaperStatusSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_PaperStatusCond),
      gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export async function gs_PaperStatus_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_PaperStatus_Controller, strAction);

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
        gs_PaperStatus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_PaperStatus_ConstructorName,
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
export function gs_PaperStatus_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_PaperStatus_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_PaperStatusEN._CurrTabName;
  switch (clsgs_PaperStatusEN.CacheModeId) {
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
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function gs_PaperStatus_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_PaperStatusEN._CurrTabName;
    switch (clsgs_PaperStatusEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function gs_PaperStatus_BindDdl_PaperStatusIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PaperStatusIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PaperStatusIdInDivCache");
  const arrObjLstSel = await gs_PaperStatus_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_PaperStatusEN.con_PaperStatusId,
    clsgs_PaperStatusEN.con_PaperStatusName,
    '论文状态表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_PaperStatus_CheckPropertyNew(pobjgs_PaperStatusEN: clsgs_PaperStatusEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusId) == false &&
    GetStrLen(pobjgs_PaperStatusEN.paperStatusId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文状态Id(paperStatusId)]的长度不能超过2(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.paperStatusId)(clsgs_PaperStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusName) == false &&
    GetStrLen(pobjgs_PaperStatusEN.paperStatusName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[论文状态名(paperStatusName)]的长度不能超过50(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.paperStatusName)(clsgs_PaperStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updUser) == false &&
    GetStrLen(pobjgs_PaperStatusEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.updUser)(clsgs_PaperStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updDate) == false &&
    GetStrLen(pobjgs_PaperStatusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.updDate)(clsgs_PaperStatusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.memo) == false &&
    GetStrLen(pobjgs_PaperStatusEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.memo)(clsgs_PaperStatusBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusId) == false &&
    undefined !== pobjgs_PaperStatusEN.paperStatusId &&
    tzDataType.isString(pobjgs_PaperStatusEN.paperStatusId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文状态Id(paperStatusId)]的值:[$(pobjgs_PaperStatusEN.paperStatusId)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusName) == false &&
    undefined !== pobjgs_PaperStatusEN.paperStatusName &&
    tzDataType.isString(pobjgs_PaperStatusEN.paperStatusName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[论文状态名(paperStatusName)]的值:[$(pobjgs_PaperStatusEN.paperStatusName)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updUser) == false &&
    undefined !== pobjgs_PaperStatusEN.updUser &&
    tzDataType.isString(pobjgs_PaperStatusEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_PaperStatusEN.updUser)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updDate) == false &&
    undefined !== pobjgs_PaperStatusEN.updDate &&
    tzDataType.isString(pobjgs_PaperStatusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_PaperStatusEN.updDate)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.memo) == false &&
    undefined !== pobjgs_PaperStatusEN.memo &&
    tzDataType.isString(pobjgs_PaperStatusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_PaperStatusEN.memo)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_PaperStatus_CheckProperty4Update(pobjgs_PaperStatusEN: clsgs_PaperStatusEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusId) == false &&
    GetStrLen(pobjgs_PaperStatusEN.paperStatusId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文状态Id(paperStatusId)]的长度不能超过2(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.paperStatusId)(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusName) == false &&
    GetStrLen(pobjgs_PaperStatusEN.paperStatusName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[论文状态名(paperStatusName)]的长度不能超过50(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.paperStatusName)(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updUser) == false &&
    GetStrLen(pobjgs_PaperStatusEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.updUser)(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updDate) == false &&
    GetStrLen(pobjgs_PaperStatusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.updDate)(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.memo) == false &&
    GetStrLen(pobjgs_PaperStatusEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 论文状态表(gs_PaperStatus))!值:$(pobjgs_PaperStatusEN.memo)(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusId) == false &&
    undefined !== pobjgs_PaperStatusEN.paperStatusId &&
    tzDataType.isString(pobjgs_PaperStatusEN.paperStatusId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文状态Id(paperStatusId)]的值:[$(pobjgs_PaperStatusEN.paperStatusId)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.paperStatusName) == false &&
    undefined !== pobjgs_PaperStatusEN.paperStatusName &&
    tzDataType.isString(pobjgs_PaperStatusEN.paperStatusName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[论文状态名(paperStatusName)]的值:[$(pobjgs_PaperStatusEN.paperStatusName)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updUser) == false &&
    undefined !== pobjgs_PaperStatusEN.updUser &&
    tzDataType.isString(pobjgs_PaperStatusEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_PaperStatusEN.updUser)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.updDate) == false &&
    undefined !== pobjgs_PaperStatusEN.updDate &&
    tzDataType.isString(pobjgs_PaperStatusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_PaperStatusEN.updDate)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_PaperStatusEN.memo) == false &&
    undefined !== pobjgs_PaperStatusEN.memo &&
    tzDataType.isString(pobjgs_PaperStatusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_PaperStatusEN.memo)], 非法,应该为字符型(In 论文状态表(gs_PaperStatus))!(clsgs_PaperStatusBL:CheckProperty4Update)',
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
export function gs_PaperStatus_GetJSONStrByObj(pobjgs_PaperStatusEN: clsgs_PaperStatusEN): string {
  pobjgs_PaperStatusEN.sfUpdFldSetStr = pobjgs_PaperStatusEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_PaperStatusEN);
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
export function gs_PaperStatus_GetObjLstByJSONStr(strJSON: string): Array<clsgs_PaperStatusEN> {
  let arrgs_PaperStatusObjLst = new Array<clsgs_PaperStatusEN>();
  if (strJSON === '') {
    return arrgs_PaperStatusObjLst;
  }
  try {
    arrgs_PaperStatusObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_PaperStatusObjLst;
  }
  return arrgs_PaperStatusObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_PaperStatusObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_PaperStatus_GetObjLstByJSONObjLst(
  arrgs_PaperStatusObjLstS: Array<clsgs_PaperStatusEN>,
): Array<clsgs_PaperStatusEN> {
  const arrgs_PaperStatusObjLst = new Array<clsgs_PaperStatusEN>();
  for (const objInFor of arrgs_PaperStatusObjLstS) {
    const obj1 = gs_PaperStatus_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_PaperStatusObjLst.push(obj1);
  }
  return arrgs_PaperStatusObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_PaperStatus_GetObjByJSONStr(strJSON: string): clsgs_PaperStatusEN {
  let pobjgs_PaperStatusEN = new clsgs_PaperStatusEN();
  if (strJSON === '') {
    return pobjgs_PaperStatusEN;
  }
  try {
    pobjgs_PaperStatusEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_PaperStatusEN;
  }
  return pobjgs_PaperStatusEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_PaperStatus_GetCombineCondition(
  objgs_PaperStatusCond: clsgs_PaperStatusEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperStatusCond.dicFldComparisonOp,
      clsgs_PaperStatusEN.con_PaperStatusId,
    ) == true
  ) {
    const strComparisonOpPaperStatusId: string =
      objgs_PaperStatusCond.dicFldComparisonOp[clsgs_PaperStatusEN.con_PaperStatusId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperStatusEN.con_PaperStatusId,
      objgs_PaperStatusCond.paperStatusId,
      strComparisonOpPaperStatusId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperStatusCond.dicFldComparisonOp,
      clsgs_PaperStatusEN.con_PaperStatusName,
    ) == true
  ) {
    const strComparisonOpPaperStatusName: string =
      objgs_PaperStatusCond.dicFldComparisonOp[clsgs_PaperStatusEN.con_PaperStatusName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperStatusEN.con_PaperStatusName,
      objgs_PaperStatusCond.paperStatusName,
      strComparisonOpPaperStatusName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperStatusCond.dicFldComparisonOp,
      clsgs_PaperStatusEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_PaperStatusCond.dicFldComparisonOp[clsgs_PaperStatusEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperStatusEN.con_UpdUser,
      objgs_PaperStatusCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperStatusCond.dicFldComparisonOp,
      clsgs_PaperStatusEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_PaperStatusCond.dicFldComparisonOp[clsgs_PaperStatusEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperStatusEN.con_UpdDate,
      objgs_PaperStatusCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_PaperStatusCond.dicFldComparisonOp,
      clsgs_PaperStatusEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_PaperStatusCond.dicFldComparisonOp[clsgs_PaperStatusEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_PaperStatusEN.con_Memo,
      objgs_PaperStatusCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperStatus(论文状态表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPaperStatusId: 论文状态Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperStatus_GetUniCondStr(objgs_PaperStatusEN: clsgs_PaperStatusEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperStatusId = '{0}'", objgs_PaperStatusEN.paperStatusId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_PaperStatus(论文状态表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPaperStatusId: 论文状态Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_PaperStatus_GetUniCondStr4Update(
  objgs_PaperStatusEN: clsgs_PaperStatusEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PaperStatusId <> '{0}'", objgs_PaperStatusEN.paperStatusId);
  strWhereCond += Format(" and PaperStatusId = '{0}'", objgs_PaperStatusEN.paperStatusId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_PaperStatusENS:源对象
 * @param objgs_PaperStatusENT:目标对象
 */
export function gs_PaperStatus_CopyObjTo(
  objgs_PaperStatusENS: clsgs_PaperStatusEN,
  objgs_PaperStatusENT: clsgs_PaperStatusEN,
): void {
  objgs_PaperStatusENT.paperStatusId = objgs_PaperStatusENS.paperStatusId; //论文状态Id
  objgs_PaperStatusENT.paperStatusName = objgs_PaperStatusENS.paperStatusName; //论文状态名
  objgs_PaperStatusENT.updUser = objgs_PaperStatusENS.updUser; //修改人
  objgs_PaperStatusENT.updDate = objgs_PaperStatusENS.updDate; //修改日期
  objgs_PaperStatusENT.memo = objgs_PaperStatusENS.memo; //备注
  objgs_PaperStatusENT.sfUpdFldSetStr = objgs_PaperStatusENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_PaperStatusENS:源对象
 * @param objgs_PaperStatusENT:目标对象
 */
export function gs_PaperStatus_GetObjFromJsonObj(
  objgs_PaperStatusENS: clsgs_PaperStatusEN,
): clsgs_PaperStatusEN {
  const objgs_PaperStatusENT: clsgs_PaperStatusEN = new clsgs_PaperStatusEN();
  ObjectAssign(objgs_PaperStatusENT, objgs_PaperStatusENS);
  return objgs_PaperStatusENT;
}
