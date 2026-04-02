/**
 * 类名:clsQxPageDispModeWApi
 * 表名:QxPageDispMode(00140044)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/01 21:38:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 页面显示模式(QxPageDispMode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月01日.
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
import { clsQxPageDispModeEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPageDispModeEN';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxPageDispMode_Controller = 'QxPageDispModeApi';
export const qxPageDispMode_ConstructorName = 'qxPageDispMode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPageDispModeId:关键字
 * @returns 对象
 **/
export async function QxPageDispMode_GetObjByPageDispModeIdAsync(
  strPageDispModeId: string,
): Promise<clsQxPageDispModeEN | null> {
  const strThisFuncName = 'GetObjByPageDispModeIdAsync';

  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsQxPageDispModeWApi.GetObjByPageDispModeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsQxPageDispModeWApi.GetObjByPageDispModeIdAsync)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPageDispModeId';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPageDispModeId,
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
      const objQxPageDispMode = QxPageDispMode_GetObjFromJsonObj(returnObj);
      return objQxPageDispMode;
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function QxPageDispMode_GetObjByPageDispModeIdCache(
  strPageDispModeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPageDispModeIdCache';

  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsQxPageDispModeWApi.GetObjByPageDispModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsQxPageDispModeWApi.GetObjByPageDispModeIdCache)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  try {
    const arrQxPageDispModeSel = arrQxPageDispModeObjLstCache.filter(
      (x) => x.pageDispModeId == strPageDispModeId,
    );
    let objQxPageDispMode: clsQxPageDispModeEN;
    if (arrQxPageDispModeSel.length > 0) {
      objQxPageDispMode = arrQxPageDispModeSel[0];
      return objQxPageDispMode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQxPageDispModeConst = await QxPageDispMode_GetObjByPageDispModeIdAsync(
          strPageDispModeId,
        );
        if (objQxPageDispModeConst != null) {
          QxPageDispMode_ReFreshThisCache();
          return objQxPageDispModeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPageDispModeId,
      qxPageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function QxPageDispMode_GetObjByPageDispModeIdlocalStorage(strPageDispModeId: string) {
  const strThisFuncName = 'GetObjByPageDispModeIdlocalStorage';

  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsQxPageDispModeWApi.GetObjByPageDispModeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsQxPageDispModeWApi.GetObjByPageDispModeIdlocalStorage)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQxPageDispModeEN._CurrTabName, strPageDispModeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQxPageDispModeCache: clsQxPageDispModeEN = JSON.parse(strTempObj);
    return objQxPageDispModeCache;
  }
  try {
    const objQxPageDispMode = await QxPageDispMode_GetObjByPageDispModeIdAsync(strPageDispModeId);
    if (objQxPageDispMode != null) {
      localStorage.setItem(strKey, JSON.stringify(objQxPageDispMode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQxPageDispMode;
    }
    return objQxPageDispMode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPageDispModeId,
      qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispMode:所给的对象
 * @returns 对象
 */
export async function QxPageDispMode_UpdateObjInLstCache(objQxPageDispMode: clsQxPageDispModeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
    const obj = arrQxPageDispModeObjLstCache.find(
      (x) => x.pageDispModeName == objQxPageDispMode.pageDispModeName,
    );
    if (obj != null) {
      objQxPageDispMode.pageDispModeId = obj.pageDispModeId;
      ObjectAssign(obj, objQxPageDispMode);
    } else {
      arrQxPageDispModeObjLstCache.push(objQxPageDispMode);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qxPageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function QxPageDispMode_GetNameByPageDispModeIdCache(strPageDispModeId: string) {
  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsQxPageDispModeWApi.GetNameByPageDispModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsQxPageDispModeWApi.GetNameByPageDispModeIdCache)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  if (arrQxPageDispModeObjLstCache == null) return '';
  try {
    const arrQxPageDispModeSel = arrQxPageDispModeObjLstCache.filter(
      (x) => x.pageDispModeId == strPageDispModeId,
    );
    let objQxPageDispMode: clsQxPageDispModeEN;
    if (arrQxPageDispModeSel.length > 0) {
      objQxPageDispMode = arrQxPageDispModeSel[0];
      return objQxPageDispMode.pageDispModeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPageDispModeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function QxPageDispMode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsQxPageDispModeEN.con_PageDispModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQxPageDispModeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsQxPageDispModeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPageDispModeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objQxPageDispMode = await QxPageDispMode_GetObjByPageDispModeIdCache(strPageDispModeId);
  if (objQxPageDispMode == null) return '';
  if (objQxPageDispMode.GetFldValue(strOutFldName) == null) return '';
  return objQxPageDispMode.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPageDispMode_SortFunDefa(a: clsQxPageDispModeEN, b: clsQxPageDispModeEN): number {
  return a.pageDispModeId.localeCompare(b.pageDispModeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPageDispMode_SortFunDefa2Fld(
  a: clsQxPageDispModeEN,
  b: clsQxPageDispModeEN,
): number {
  if (a.pageDispModeName == b.pageDispModeName) return a.memo.localeCompare(b.memo);
  else return a.pageDispModeName.localeCompare(b.pageDispModeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPageDispMode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxPageDispModeEN.con_PageDispModeId:
        return (a: clsQxPageDispModeEN, b: clsQxPageDispModeEN) => {
          return a.pageDispModeId.localeCompare(b.pageDispModeId);
        };
      case clsQxPageDispModeEN.con_PageDispModeName:
        return (a: clsQxPageDispModeEN, b: clsQxPageDispModeEN) => {
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };
      case clsQxPageDispModeEN.con_Memo:
        return (a: clsQxPageDispModeEN, b: clsQxPageDispModeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxPageDispMode]中不存在!(in ${qxPageDispMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxPageDispModeEN.con_PageDispModeId:
        return (a: clsQxPageDispModeEN, b: clsQxPageDispModeEN) => {
          return b.pageDispModeId.localeCompare(a.pageDispModeId);
        };
      case clsQxPageDispModeEN.con_PageDispModeName:
        return (a: clsQxPageDispModeEN, b: clsQxPageDispModeEN) => {
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };
      case clsQxPageDispModeEN.con_Memo:
        return (a: clsQxPageDispModeEN, b: clsQxPageDispModeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxPageDispMode]中不存在!(in ${qxPageDispMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxPageDispMode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxPageDispModeEN.con_PageDispModeId:
      return (obj: clsQxPageDispModeEN) => {
        return obj.pageDispModeId === value;
      };
    case clsQxPageDispModeEN.con_PageDispModeName:
      return (obj: clsQxPageDispModeEN) => {
        return obj.pageDispModeName === value;
      };
    case clsQxPageDispModeEN.con_Memo:
      return (obj: clsQxPageDispModeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxPageDispMode]中不存在!(in ${qxPageDispMode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function QxPageDispMode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsQxPageDispModeEN.con_PageDispModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrQxPageDispMode = await QxPageDispMode_GetObjLstCache();
  if (arrQxPageDispMode == null) return [];
  let arrQxPageDispModeSel = arrQxPageDispMode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQxPageDispModeSel.length == 0) return [];
  return arrQxPageDispModeSel.map((x) => x.pageDispModeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxPageDispMode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxPageDispModeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
      const objQxPageDispMode = QxPageDispMode_GetObjFromJsonObj(returnObj);
      return objQxPageDispMode;
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxPageDispModeEN._CurrTabName;
  if (IsNullOrEmpty(clsQxPageDispModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxPageDispModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrQxPageDispModeExObjLstCache: Array<clsQxPageDispModeEN> = CacheHelper.Get(strKey);
    const arrQxPageDispModeObjLstT = QxPageDispMode_GetObjLstByJSONObjLst(
      arrQxPageDispModeExObjLstCache,
    );
    return arrQxPageDispModeObjLstT;
  }
  try {
    const arrQxPageDispModeExObjLst = await QxPageDispMode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQxPageDispModeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxPageDispModeExObjLst.length,
    );
    console.log(strInfo);
    return arrQxPageDispModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxPageDispModeEN._CurrTabName;
  if (IsNullOrEmpty(clsQxPageDispModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxPageDispModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxPageDispModeExObjLstCache: Array<clsQxPageDispModeEN> = JSON.parse(strTempObjLst);
    const arrQxPageDispModeObjLstT = QxPageDispMode_GetObjLstByJSONObjLst(
      arrQxPageDispModeExObjLstCache,
    );
    return arrQxPageDispModeObjLstT;
  }
  try {
    const arrQxPageDispModeExObjLst = await QxPageDispMode_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQxPageDispModeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxPageDispModeExObjLst.length,
    );
    console.log(strInfo);
    return arrQxPageDispModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxPageDispModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxPageDispModeObjLstCache: Array<clsQxPageDispModeEN> = JSON.parse(strTempObjLst);
    return arrQxPageDispModeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QxPageDispMode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
          qxPageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxPageDispModeEN._CurrTabName;
  if (IsNullOrEmpty(clsQxPageDispModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxPageDispModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxPageDispModeExObjLstCache: Array<clsQxPageDispModeEN> = JSON.parse(strTempObjLst);
    const arrQxPageDispModeObjLstT = QxPageDispMode_GetObjLstByJSONObjLst(
      arrQxPageDispModeExObjLstCache,
    );
    return arrQxPageDispModeObjLstT;
  }
  try {
    const arrQxPageDispModeExObjLst = await QxPageDispMode_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQxPageDispModeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrQxPageDispModeExObjLst.length,
    );
    console.log(strInfo);
    return arrQxPageDispModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxPageDispModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxPageDispModeObjLstCache: Array<clsQxPageDispModeEN> = JSON.parse(strTempObjLst);
    return arrQxPageDispModeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPageDispMode_GetObjLstCache(): Promise<Array<clsQxPageDispModeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrQxPageDispModeObjLstCache;
  switch (clsQxPageDispModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstClientCache();
      break;
    default:
      arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstClientCache();
      break;
  }
  return arrQxPageDispModeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxPageDispMode_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQxPageDispModeObjLstCache;
  switch (clsQxPageDispModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrQxPageDispModeObjLstCache = null;
      break;
    default:
      arrQxPageDispModeObjLstCache = null;
      break;
  }
  return arrQxPageDispModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPageDispModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxPageDispMode_GetSubObjLstCache(objQxPageDispModeCond: clsQxPageDispModeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  let arrQxPageDispModeSel = arrQxPageDispModeObjLstCache;
  if (
    objQxPageDispModeCond.sfFldComparisonOp == null ||
    objQxPageDispModeCond.sfFldComparisonOp == ''
  )
    return arrQxPageDispModeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxPageDispModeCond.sfFldComparisonOp,
  );
  //console.log("clsQxPageDispModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxPageDispModeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPageDispModeSel = arrQxPageDispModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPageDispModeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQxPageDispModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxPageDispModeCond),
      qxPageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPageDispModeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPageDispModeId:关键字列表
 * @returns 对象列表
 **/
export async function QxPageDispMode_GetObjLstByPageDispModeIdLstAsync(
  arrPageDispModeId: Array<string>,
): Promise<Array<clsQxPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstByPageDispModeIdLstAsync';
  const strAction = 'GetObjLstByPageDispModeIdLst';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPageDispModeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxPageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param arrstrPageDispModeIdLst:关键字列表
 * @returns 对象列表
 */
export async function QxPageDispMode_GetObjLstByPageDispModeIdLstCache(
  arrPageDispModeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPageDispModeIdLstCache';
  try {
    const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
    const arrQxPageDispModeSel = arrQxPageDispModeObjLstCache.filter(
      (x) => arrPageDispModeIdLst.indexOf(x.pageDispModeId) > -1,
    );
    return arrQxPageDispModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPageDispModeIdLst.join(','),
      qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxPageDispModeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
          qxPageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
          qxPageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxPageDispModeEN>();
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  if (arrQxPageDispModeObjLstCache.length == 0) return arrQxPageDispModeObjLstCache;
  let arrQxPageDispModeSel = arrQxPageDispModeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxPageDispModeCond = new clsQxPageDispModeEN();
  ObjectAssign(objQxPageDispModeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxPageDispModeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPageDispModeSel = arrQxPageDispModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPageDispModeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxPageDispModeSel.length == 0) return arrQxPageDispModeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPageDispModeSel = arrQxPageDispModeSel.sort(
        QxPageDispMode_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPageDispModeSel = arrQxPageDispModeSel.sort(objPagerPara.sortFun);
    }
    arrQxPageDispModeSel = arrQxPageDispModeSel.slice(intStart, intEnd);
    return arrQxPageDispModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPageDispModeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxPageDispMode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxPageDispModeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
          qxPageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxPageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param strPageDispModeId:关键字
 * @returns 获取删除的结果
 **/
export async function QxPageDispMode_DelRecordAsync(strPageDispModeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPageDispModeId);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param arrPageDispModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QxPageDispMode_DelQxPageDispModesAsync(
  arrPageDispModeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelQxPageDispModesAsync';
  const strAction = 'DelQxPageDispModes';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPageDispModeId, config);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_DelQxPageDispModesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelQxPageDispModesByCondAsync';
  const strAction = 'DelQxPageDispModesByCond';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxPageDispMode_AddNewRecordAsync(
  objQxPageDispModeEN: clsQxPageDispModeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objQxPageDispModeEN);
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPageDispModeEN, config);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxPageDispMode_AddNewRecordWithMaxIdAsync(
  objQxPageDispModeEN: clsQxPageDispModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPageDispModeEN, config);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxPageDispMode_AddNewRecordWithReturnKeyAsync(
  objQxPageDispModeEN: clsQxPageDispModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPageDispModeEN, config);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxPageDispMode_UpdateRecordAsync(
  objQxPageDispModeEN: clsQxPageDispModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxPageDispModeEN.sfUpdFldSetStr === undefined ||
    objQxPageDispModeEN.sfUpdFldSetStr === null ||
    objQxPageDispModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQxPageDispModeEN.pageDispModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPageDispModeEN, config);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxPageDispMode_UpdateWithConditionAsync(
  objQxPageDispModeEN: clsQxPageDispModeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxPageDispModeEN.sfUpdFldSetStr === undefined ||
    objQxPageDispModeEN.sfUpdFldSetStr === null ||
    objQxPageDispModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objQxPageDispModeEN.pageDispModeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);
  objQxPageDispModeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxPageDispModeEN, config);
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objstrPageDispModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxPageDispMode_IsExistRecordCache(
  objQxPageDispModeCond: clsQxPageDispModeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  if (arrQxPageDispModeObjLstCache == null) return false;
  let arrQxPageDispModeSel = arrQxPageDispModeObjLstCache;
  if (
    objQxPageDispModeCond.sfFldComparisonOp == null ||
    objQxPageDispModeCond.sfFldComparisonOp == ''
  )
    return arrQxPageDispModeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxPageDispModeCond.sfFldComparisonOp,
  );
  //console.log("clsQxPageDispModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxPageDispModeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPageDispModeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxPageDispModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQxPageDispModeCond),
      qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function QxPageDispMode_IsExistCache(strPageDispModeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  if (arrQxPageDispModeObjLstCache == null) return false;
  try {
    const arrQxPageDispModeSel = arrQxPageDispModeObjLstCache.filter(
      (x) => x.pageDispModeId == strPageDispModeId,
    );
    if (arrQxPageDispModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPageDispModeId,
      qxPageDispMode_ConstructorName,
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
 * @param strPageDispModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QxPageDispMode_IsExistAsync(strPageDispModeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPageDispModeId,
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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
 * @param objQxPageDispModeCond:条件对象
 * @returns 对象列表记录数
 */
export async function QxPageDispMode_GetRecCountByCondCache(
  objQxPageDispModeCond: clsQxPageDispModeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQxPageDispModeObjLstCache = await QxPageDispMode_GetObjLstCache();
  if (arrQxPageDispModeObjLstCache == null) return 0;
  let arrQxPageDispModeSel = arrQxPageDispModeObjLstCache;
  if (
    objQxPageDispModeCond.sfFldComparisonOp == null ||
    objQxPageDispModeCond.sfFldComparisonOp == ''
  )
    return arrQxPageDispModeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxPageDispModeCond.sfFldComparisonOp,
  );
  //console.log("clsQxPageDispModeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxPageDispModeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxPageDispModeSel = arrQxPageDispModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxPageDispModeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxPageDispModeSel = arrQxPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQxPageDispModeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxPageDispModeCond),
      qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export async function QxPageDispMode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl_GP(qxPageDispMode_Controller, strAction);

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
        qxPageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxPageDispMode_ConstructorName,
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
export function QxPageDispMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxPageDispMode_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsQxPageDispModeEN._CurrTabName;
  switch (clsQxPageDispModeEN.CacheModeId) {
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
export function QxPageDispMode_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsQxPageDispModeEN._CurrTabName;
    switch (clsQxPageDispModeEN.CacheModeId) {
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
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function QxPageDispMode_BindDdl_PageDispModeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PageDispModeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PageDispModeIdInDivCache");
  const arrObjLstSel = await QxPageDispMode_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsQxPageDispModeEN.con_PageDispModeId,
    clsQxPageDispModeEN.con_PageDispModeName,
    '页面显示模式',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxPageDispMode_CheckPropertyNew(pobjQxPageDispModeEN: clsQxPageDispModeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[页面显示模式名称]不能为空(In 页面显示模式)!(clsQxPageDispModeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeId) == false &&
    GetStrLen(pobjQxPageDispModeEN.pageDispModeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 页面显示模式(QxPageDispMode))!值:$(pobjQxPageDispModeEN.pageDispModeId)(clsQxPageDispModeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeName) == false &&
    GetStrLen(pobjQxPageDispModeEN.pageDispModeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[页面显示模式名称(pageDispModeName)]的长度不能超过50(In 页面显示模式(QxPageDispMode))!值:$(pobjQxPageDispModeEN.pageDispModeName)(clsQxPageDispModeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.memo) == false &&
    GetStrLen(pobjQxPageDispModeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 页面显示模式(QxPageDispMode))!值:$(pobjQxPageDispModeEN.memo)(clsQxPageDispModeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeId) == false &&
    undefined !== pobjQxPageDispModeEN.pageDispModeId &&
    tzDataType.isString(pobjQxPageDispModeEN.pageDispModeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页面显示模式Id(pageDispModeId)]的值:[$(pobjQxPageDispModeEN.pageDispModeId)], 非法,应该为字符型(In 页面显示模式(QxPageDispMode))!(clsQxPageDispModeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeName) == false &&
    undefined !== pobjQxPageDispModeEN.pageDispModeName &&
    tzDataType.isString(pobjQxPageDispModeEN.pageDispModeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页面显示模式名称(pageDispModeName)]的值:[$(pobjQxPageDispModeEN.pageDispModeName)], 非法,应该为字符型(In 页面显示模式(QxPageDispMode))!(clsQxPageDispModeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.memo) == false &&
    undefined !== pobjQxPageDispModeEN.memo &&
    tzDataType.isString(pobjQxPageDispModeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjQxPageDispModeEN.memo)], 非法,应该为字符型(In 页面显示模式(QxPageDispMode))!(clsQxPageDispModeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxPageDispMode_CheckProperty4Update(pobjQxPageDispModeEN: clsQxPageDispModeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeId) == false &&
    GetStrLen(pobjQxPageDispModeEN.pageDispModeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 页面显示模式(QxPageDispMode))!值:$(pobjQxPageDispModeEN.pageDispModeId)(clsQxPageDispModeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeName) == false &&
    GetStrLen(pobjQxPageDispModeEN.pageDispModeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[页面显示模式名称(pageDispModeName)]的长度不能超过50(In 页面显示模式(QxPageDispMode))!值:$(pobjQxPageDispModeEN.pageDispModeName)(clsQxPageDispModeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.memo) == false &&
    GetStrLen(pobjQxPageDispModeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 页面显示模式(QxPageDispMode))!值:$(pobjQxPageDispModeEN.memo)(clsQxPageDispModeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeId) == false &&
    undefined !== pobjQxPageDispModeEN.pageDispModeId &&
    tzDataType.isString(pobjQxPageDispModeEN.pageDispModeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页面显示模式Id(pageDispModeId)]的值:[$(pobjQxPageDispModeEN.pageDispModeId)], 非法,应该为字符型(In 页面显示模式(QxPageDispMode))!(clsQxPageDispModeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.pageDispModeName) == false &&
    undefined !== pobjQxPageDispModeEN.pageDispModeName &&
    tzDataType.isString(pobjQxPageDispModeEN.pageDispModeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页面显示模式名称(pageDispModeName)]的值:[$(pobjQxPageDispModeEN.pageDispModeName)], 非法,应该为字符型(In 页面显示模式(QxPageDispMode))!(clsQxPageDispModeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxPageDispModeEN.memo) == false &&
    undefined !== pobjQxPageDispModeEN.memo &&
    tzDataType.isString(pobjQxPageDispModeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjQxPageDispModeEN.memo)], 非法,应该为字符型(In 页面显示模式(QxPageDispMode))!(clsQxPageDispModeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxPageDispMode_GetJSONStrByObj(pobjQxPageDispModeEN: clsQxPageDispModeEN): string {
  pobjQxPageDispModeEN.sfUpdFldSetStr = pobjQxPageDispModeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxPageDispModeEN);
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
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxPageDispMode_GetObjLstByJSONStr(strJSON: string): Array<clsQxPageDispModeEN> {
  let arrQxPageDispModeObjLst = new Array<clsQxPageDispModeEN>();
  if (strJSON === '') {
    return arrQxPageDispModeObjLst;
  }
  try {
    arrQxPageDispModeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxPageDispModeObjLst;
  }
  return arrQxPageDispModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxPageDispModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxPageDispMode_GetObjLstByJSONObjLst(
  arrQxPageDispModeObjLstS: Array<clsQxPageDispModeEN>,
): Array<clsQxPageDispModeEN> {
  const arrQxPageDispModeObjLst = new Array<clsQxPageDispModeEN>();
  for (const objInFor of arrQxPageDispModeObjLstS) {
    const obj1 = QxPageDispMode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxPageDispModeObjLst.push(obj1);
  }
  return arrQxPageDispModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxPageDispMode_GetObjByJSONStr(strJSON: string): clsQxPageDispModeEN {
  let pobjQxPageDispModeEN = new clsQxPageDispModeEN();
  if (strJSON === '') {
    return pobjQxPageDispModeEN;
  }
  try {
    pobjQxPageDispModeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxPageDispModeEN;
  }
  return pobjQxPageDispModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxPageDispMode_GetCombineCondition(
  objQxPageDispModeCond: clsQxPageDispModeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPageDispModeCond.dicFldComparisonOp,
      clsQxPageDispModeEN.con_PageDispModeId,
    ) == true
  ) {
    const strComparisonOpPageDispModeId: string =
      objQxPageDispModeCond.dicFldComparisonOp[clsQxPageDispModeEN.con_PageDispModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPageDispModeEN.con_PageDispModeId,
      objQxPageDispModeCond.pageDispModeId,
      strComparisonOpPageDispModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPageDispModeCond.dicFldComparisonOp,
      clsQxPageDispModeEN.con_PageDispModeName,
    ) == true
  ) {
    const strComparisonOpPageDispModeName: string =
      objQxPageDispModeCond.dicFldComparisonOp[clsQxPageDispModeEN.con_PageDispModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPageDispModeEN.con_PageDispModeName,
      objQxPageDispModeCond.pageDispModeName,
      strComparisonOpPageDispModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxPageDispModeCond.dicFldComparisonOp,
      clsQxPageDispModeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQxPageDispModeCond.dicFldComparisonOp[clsQxPageDispModeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxPageDispModeEN.con_Memo,
      objQxPageDispModeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxPageDispMode(页面显示模式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPageDispModeName: 页面显示模式名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxPageDispMode_GetUniCondStr(objQxPageDispModeEN: clsQxPageDispModeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PageDispModeName = '{0}'", objQxPageDispModeEN.pageDispModeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxPageDispMode(页面显示模式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPageDispModeName: 页面显示模式名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxPageDispMode_GetUniCondStr4Update(
  objQxPageDispModeEN: clsQxPageDispModeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PageDispModeId <> '{0}'", objQxPageDispModeEN.pageDispModeId);
  strWhereCond += Format(" and PageDispModeName = '{0}'", objQxPageDispModeEN.pageDispModeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxPageDispModeENS:源对象
 * @param objQxPageDispModeENT:目标对象
 */
export function QxPageDispMode_GetObjFromJsonObj(
  objQxPageDispModeENS: clsQxPageDispModeEN,
): clsQxPageDispModeEN {
  const objQxPageDispModeENT: clsQxPageDispModeEN = new clsQxPageDispModeEN();
  ObjectAssign(objQxPageDispModeENT, objQxPageDispModeENS);
  return objQxPageDispModeENT;
}
