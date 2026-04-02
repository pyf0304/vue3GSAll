/**
 * 类名:clsvgs_UserConfigWApi
 * 表名:vgs_UserConfig(01120691)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:考试管理(ExamMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户配置视图(vgs_UserConfig)
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
import { clsvgs_UserConfigEN } from '@/ts/L0Entity/ExamMan/clsvgs_UserConfigEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const vgs_UserConfig_Controller = 'vgs_UserConfigApi';
export const vgs_UserConfig_ConstructorName = 'vgs_UserConfig';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngConfigId:关键字
 * @returns 对象
 **/
export async function vgs_UserConfig_GetObjByConfigIdAsync(
  lngConfigId: number,
): Promise<clsvgs_UserConfigEN | null> {
  const strThisFuncName = 'GetObjByConfigIdAsync';

  if (lngConfigId == 0) {
    const strMsg = Format(
      '参数:[lngConfigId]不能为空!(In clsvgs_UserConfigWApi.GetObjByConfigIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByConfigId';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngConfigId,
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
      const objvgs_UserConfig = vgs_UserConfig_GetObjFromJsonObj(returnObj);
      return objvgs_UserConfig;
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
 * @param lngConfigId:所给的关键字
 * @returns 对象
 */
export async function vgs_UserConfig_GetObjByConfigIdCache(
  lngConfigId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByConfigIdCache';

  if (lngConfigId == 0) {
    const strMsg = Format(
      '参数:[lngConfigId]不能为空!(In clsvgs_UserConfigWApi.GetObjByConfigIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
  try {
    const arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache.filter(
      (x) => x.configId == lngConfigId,
    );
    let objvgs_UserConfig: clsvgs_UserConfigEN;
    if (arrvgs_UserConfigSel.length > 0) {
      objvgs_UserConfig = arrvgs_UserConfigSel[0];
      return objvgs_UserConfig;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvgs_UserConfigConst = await vgs_UserConfig_GetObjByConfigIdAsync(lngConfigId);
        if (objvgs_UserConfigConst != null) {
          vgs_UserConfig_ReFreshThisCache();
          return objvgs_UserConfigConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngConfigId,
      vgs_UserConfig_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngConfigId:所给的关键字
 * @returns 对象
 */
export async function vgs_UserConfig_GetObjByConfigIdlocalStorage(lngConfigId: number) {
  const strThisFuncName = 'GetObjByConfigIdlocalStorage';

  if (lngConfigId == 0) {
    const strMsg = Format(
      '参数:[lngConfigId]不能为空!(In clsvgs_UserConfigWApi.GetObjByConfigIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvgs_UserConfigEN._CurrTabName, lngConfigId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvgs_UserConfigCache: clsvgs_UserConfigEN = JSON.parse(strTempObj);
    return objvgs_UserConfigCache;
  }
  try {
    const objvgs_UserConfig = await vgs_UserConfig_GetObjByConfigIdAsync(lngConfigId);
    if (objvgs_UserConfig != null) {
      localStorage.setItem(strKey, JSON.stringify(objvgs_UserConfig));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvgs_UserConfig;
    }
    return objvgs_UserConfig;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngConfigId,
      vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvgs_UserConfigEN.con_ConfigId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvgs_UserConfigEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvgs_UserConfigEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngConfigId = Number(strInValue);
  if (lngConfigId == 0) {
    return '';
  }
  const objvgs_UserConfig = await vgs_UserConfig_GetObjByConfigIdCache(lngConfigId);
  if (objvgs_UserConfig == null) return '';
  if (objvgs_UserConfig.GetFldValue(strOutFldName) == null) return '';
  return objvgs_UserConfig.GetFldValue(strOutFldName).toString();
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
export function vgs_UserConfig_SortFunDefa(a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN): number {
  return a.configId - b.configId;
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
export function vgs_UserConfig_SortFunDefa2Fld(
  a: clsvgs_UserConfigEN,
  b: clsvgs_UserConfigEN,
): number {
  if (a.configTypeId == b.configTypeId) return a.configTypeName.localeCompare(b.configTypeName);
  else return a.configTypeId.localeCompare(b.configTypeId);
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
export function vgs_UserConfig_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvgs_UserConfigEN.con_ConfigId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          return a.configId - b.configId;
        };
      case clsvgs_UserConfigEN.con_ConfigTypeId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          return a.configTypeId.localeCompare(b.configTypeId);
        };
      case clsvgs_UserConfigEN.con_ConfigTypeName:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.configTypeName == null) return -1;
          if (b.configTypeName == null) return 1;
          return a.configTypeName.localeCompare(b.configTypeName);
        };
      case clsvgs_UserConfigEN.con_ShareId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          return a.shareId.localeCompare(b.shareId);
        };
      case clsvgs_UserConfigEN.con_DataTable:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.dataTable == null) return -1;
          if (b.dataTable == null) return 1;
          return a.dataTable.localeCompare(b.dataTable);
        };
      case clsvgs_UserConfigEN.con_UpdUser:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvgs_UserConfigEN.con_DataTableId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.dataTableId == null) return -1;
          if (b.dataTableId == null) return 1;
          return a.dataTableId.localeCompare(b.dataTableId);
        };
      case clsvgs_UserConfigEN.con_UpdDate:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvgs_UserConfigEN.con_ShareName:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.shareName == null) return -1;
          if (b.shareName == null) return 1;
          return a.shareName.localeCompare(b.shareName);
        };
      case clsvgs_UserConfigEN.con_Memo:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_UserConfig]中不存在!(in ${vgs_UserConfig_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvgs_UserConfigEN.con_ConfigId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          return b.configId - a.configId;
        };
      case clsvgs_UserConfigEN.con_ConfigTypeId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          return b.configTypeId.localeCompare(a.configTypeId);
        };
      case clsvgs_UserConfigEN.con_ConfigTypeName:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.configTypeName == null) return -1;
          if (a.configTypeName == null) return 1;
          return b.configTypeName.localeCompare(a.configTypeName);
        };
      case clsvgs_UserConfigEN.con_ShareId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          return b.shareId.localeCompare(a.shareId);
        };
      case clsvgs_UserConfigEN.con_DataTable:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.dataTable == null) return -1;
          if (a.dataTable == null) return 1;
          return b.dataTable.localeCompare(a.dataTable);
        };
      case clsvgs_UserConfigEN.con_UpdUser:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvgs_UserConfigEN.con_DataTableId:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.dataTableId == null) return -1;
          if (a.dataTableId == null) return 1;
          return b.dataTableId.localeCompare(a.dataTableId);
        };
      case clsvgs_UserConfigEN.con_UpdDate:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvgs_UserConfigEN.con_ShareName:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.shareName == null) return -1;
          if (a.shareName == null) return 1;
          return b.shareName.localeCompare(a.shareName);
        };
      case clsvgs_UserConfigEN.con_Memo:
        return (a: clsvgs_UserConfigEN, b: clsvgs_UserConfigEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_UserConfig]中不存在!(in ${vgs_UserConfig_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_UserConfig_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvgs_UserConfigEN.con_ConfigId:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.configId === value;
      };
    case clsvgs_UserConfigEN.con_ConfigTypeId:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.configTypeId === value;
      };
    case clsvgs_UserConfigEN.con_ConfigTypeName:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.configTypeName === value;
      };
    case clsvgs_UserConfigEN.con_ShareId:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.shareId === value;
      };
    case clsvgs_UserConfigEN.con_DataTable:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.dataTable === value;
      };
    case clsvgs_UserConfigEN.con_UpdUser:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.updUser === value;
      };
    case clsvgs_UserConfigEN.con_DataTableId:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.dataTableId === value;
      };
    case clsvgs_UserConfigEN.con_UpdDate:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.updDate === value;
      };
    case clsvgs_UserConfigEN.con_ShareName:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.shareName === value;
      };
    case clsvgs_UserConfigEN.con_Memo:
      return (obj: clsvgs_UserConfigEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vgs_UserConfig]中不存在!(in ${vgs_UserConfig_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_UserConfig_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvgs_UserConfigEN.con_ConfigId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvgs_UserConfig = await vgs_UserConfig_GetObjLstCache();
  if (arrvgs_UserConfig == null) return [];
  let arrvgs_UserConfigSel = arrvgs_UserConfig;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvgs_UserConfigSel.length == 0) return [];
  return arrvgs_UserConfigSel.map((x) => x.configId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vgs_UserConfig_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvgs_UserConfigEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
      const objvgs_UserConfig = vgs_UserConfig_GetObjFromJsonObj(returnObj);
      return objvgs_UserConfig;
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_UserConfigEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_UserConfigEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_UserConfigEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvgs_UserConfigExObjLstCache: Array<clsvgs_UserConfigEN> = CacheHelper.Get(strKey);
    const arrvgs_UserConfigObjLstT = vgs_UserConfig_GetObjLstByJSONObjLst(
      arrvgs_UserConfigExObjLstCache,
    );
    return arrvgs_UserConfigObjLstT;
  }
  try {
    const arrvgs_UserConfigExObjLst = await vgs_UserConfig_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvgs_UserConfigExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_UserConfigExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_UserConfigExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_UserConfigEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_UserConfigEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_UserConfigEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_UserConfigExObjLstCache: Array<clsvgs_UserConfigEN> = JSON.parse(strTempObjLst);
    const arrvgs_UserConfigObjLstT = vgs_UserConfig_GetObjLstByJSONObjLst(
      arrvgs_UserConfigExObjLstCache,
    );
    return arrvgs_UserConfigObjLstT;
  }
  try {
    const arrvgs_UserConfigExObjLst = await vgs_UserConfig_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvgs_UserConfigExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_UserConfigExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_UserConfigExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_UserConfigEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_UserConfigObjLstCache: Array<clsvgs_UserConfigEN> = JSON.parse(strTempObjLst);
    return arrvgs_UserConfigObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vgs_UserConfig_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_UserConfigEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
          vgs_UserConfig_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_UserConfig_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvgs_UserConfigEN._CurrTabName;
  if (IsNullOrEmpty(clsvgs_UserConfigEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_UserConfigEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_UserConfigExObjLstCache: Array<clsvgs_UserConfigEN> = JSON.parse(strTempObjLst);
    const arrvgs_UserConfigObjLstT = vgs_UserConfig_GetObjLstByJSONObjLst(
      arrvgs_UserConfigExObjLstCache,
    );
    return arrvgs_UserConfigObjLstT;
  }
  try {
    const arrvgs_UserConfigExObjLst = await vgs_UserConfig_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvgs_UserConfigExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_UserConfigExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_UserConfigExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvgs_UserConfigEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_UserConfigObjLstCache: Array<clsvgs_UserConfigEN> = JSON.parse(strTempObjLst);
    return arrvgs_UserConfigObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_UserConfig_GetObjLstCache(): Promise<Array<clsvgs_UserConfigEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvgs_UserConfigObjLstCache;
  switch (clsvgs_UserConfigEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstClientCache();
      break;
    default:
      arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstClientCache();
      break;
  }
  return arrvgs_UserConfigObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_UserConfig_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvgs_UserConfigObjLstCache;
  switch (clsvgs_UserConfigEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvgs_UserConfigObjLstCache = null;
      break;
    default:
      arrvgs_UserConfigObjLstCache = null;
      break;
  }
  return arrvgs_UserConfigObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngConfigIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_UserConfig_GetSubObjLstCache(objvgs_UserConfigCond: clsvgs_UserConfigEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
  let arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache;
  if (
    objvgs_UserConfigCond.sfFldComparisonOp == null ||
    objvgs_UserConfigCond.sfFldComparisonOp == ''
  )
    return arrvgs_UserConfigSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_UserConfigCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_UserConfigWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_UserConfigCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_UserConfigCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_UserConfigSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_UserConfigCond),
      vgs_UserConfig_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_UserConfigEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrConfigId:关键字列表
 * @returns 对象列表
 **/
export async function vgs_UserConfig_GetObjLstByConfigIdLstAsync(
  arrConfigId: Array<string>,
): Promise<Array<clsvgs_UserConfigEN>> {
  const strThisFuncName = 'GetObjLstByConfigIdLstAsync';
  const strAction = 'GetObjLstByConfigIdLst';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConfigId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_UserConfig_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_UserConfig_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
 * @param arrlngConfigIdLst:关键字列表
 * @returns 对象列表
 */
export async function vgs_UserConfig_GetObjLstByConfigIdLstCache(arrConfigIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstByConfigIdLstCache';
  try {
    const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
    const arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache.filter(
      (x) => arrConfigIdLst.indexOf(x.configId) > -1,
    );
    return arrvgs_UserConfigSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrConfigIdLst.join(','),
      vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvgs_UserConfigEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
          vgs_UserConfig_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_UserConfig_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvgs_UserConfigEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
          vgs_UserConfig_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_UserConfig_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_UserConfigEN>();
  const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
  if (arrvgs_UserConfigObjLstCache.length == 0) return arrvgs_UserConfigObjLstCache;
  let arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvgs_UserConfigCond = new clsvgs_UserConfigEN();
  ObjectAssign(objvgs_UserConfigCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvgs_UserConfigWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_UserConfigCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_UserConfigSel.length == 0) return arrvgs_UserConfigSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_UserConfigSel = arrvgs_UserConfigSel.sort(
        vgs_UserConfig_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_UserConfigSel = arrvgs_UserConfigSel.sort(objPagerPara.sortFun);
    }
    arrvgs_UserConfigSel = arrvgs_UserConfigSel.slice(intStart, intEnd);
    return arrvgs_UserConfigSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_UserConfig_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_UserConfigEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vgs_UserConfig_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_UserConfigEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_UserConfigEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
          vgs_UserConfig_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_UserConfig_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
 * @param objlngConfigIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_UserConfig_IsExistRecordCache(
  objvgs_UserConfigCond: clsvgs_UserConfigEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
  if (arrvgs_UserConfigObjLstCache == null) return false;
  let arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache;
  if (
    objvgs_UserConfigCond.sfFldComparisonOp == null ||
    objvgs_UserConfigCond.sfFldComparisonOp == ''
  )
    return arrvgs_UserConfigSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_UserConfigCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_UserConfigWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_UserConfigCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_UserConfigCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_UserConfigSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvgs_UserConfigCond),
      vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
 * @param lngConfigId:所给的关键字
 * @returns 对象
 */
export async function vgs_UserConfig_IsExistCache(lngConfigId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
  if (arrvgs_UserConfigObjLstCache == null) return false;
  try {
    const arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache.filter(
      (x) => x.configId == lngConfigId,
    );
    if (arrvgs_UserConfigSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngConfigId,
      vgs_UserConfig_ConstructorName,
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
 * @param lngConfigId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vgs_UserConfig_IsExistAsync(lngConfigId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngConfigId,
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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
export async function vgs_UserConfig_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vgs_UserConfig_Controller, strAction);

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
        vgs_UserConfig_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_UserConfig_ConstructorName,
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
 * @param objvgs_UserConfigCond:条件对象
 * @returns 对象列表记录数
 */
export async function vgs_UserConfig_GetRecCountByCondCache(
  objvgs_UserConfigCond: clsvgs_UserConfigEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvgs_UserConfigObjLstCache = await vgs_UserConfig_GetObjLstCache();
  if (arrvgs_UserConfigObjLstCache == null) return 0;
  let arrvgs_UserConfigSel = arrvgs_UserConfigObjLstCache;
  if (
    objvgs_UserConfigCond.sfFldComparisonOp == null ||
    objvgs_UserConfigCond.sfFldComparisonOp == ''
  )
    return arrvgs_UserConfigSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_UserConfigCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_UserConfigWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_UserConfigCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_UserConfigCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_UserConfigSel = arrvgs_UserConfigSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_UserConfigSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_UserConfigCond),
      vgs_UserConfig_ConstructorName,
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
export function vgs_UserConfig_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vgs_UserConfig_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvgs_UserConfigEN._CurrTabName;
    switch (clsvgs_UserConfigEN.CacheModeId) {
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
export function vgs_UserConfig_GetJSONStrByObj(pobjvgs_UserConfigEN: clsvgs_UserConfigEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvgs_UserConfigEN);
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
export function vgs_UserConfig_GetObjLstByJSONStr(strJSON: string): Array<clsvgs_UserConfigEN> {
  let arrvgs_UserConfigObjLst = new Array<clsvgs_UserConfigEN>();
  if (strJSON === '') {
    return arrvgs_UserConfigObjLst;
  }
  try {
    arrvgs_UserConfigObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvgs_UserConfigObjLst;
  }
  return arrvgs_UserConfigObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_UserConfigObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vgs_UserConfig_GetObjLstByJSONObjLst(
  arrvgs_UserConfigObjLstS: Array<clsvgs_UserConfigEN>,
): Array<clsvgs_UserConfigEN> {
  const arrvgs_UserConfigObjLst = new Array<clsvgs_UserConfigEN>();
  for (const objInFor of arrvgs_UserConfigObjLstS) {
    const obj1 = vgs_UserConfig_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvgs_UserConfigObjLst.push(obj1);
  }
  return arrvgs_UserConfigObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_UserConfig_GetObjByJSONStr(strJSON: string): clsvgs_UserConfigEN {
  let pobjvgs_UserConfigEN = new clsvgs_UserConfigEN();
  if (strJSON === '') {
    return pobjvgs_UserConfigEN;
  }
  try {
    pobjvgs_UserConfigEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvgs_UserConfigEN;
  }
  return pobjvgs_UserConfigEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vgs_UserConfig_GetCombineCondition(
  objvgs_UserConfigCond: clsvgs_UserConfigEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_ConfigId,
    ) == true
  ) {
    const strComparisonOpConfigId: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_ConfigId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_UserConfigEN.con_ConfigId,
      objvgs_UserConfigCond.configId,
      strComparisonOpConfigId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_ConfigTypeId,
    ) == true
  ) {
    const strComparisonOpConfigTypeId: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_ConfigTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_ConfigTypeId,
      objvgs_UserConfigCond.configTypeId,
      strComparisonOpConfigTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_ConfigTypeName,
    ) == true
  ) {
    const strComparisonOpConfigTypeName: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_ConfigTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_ConfigTypeName,
      objvgs_UserConfigCond.configTypeName,
      strComparisonOpConfigTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_ShareId,
    ) == true
  ) {
    const strComparisonOpShareId: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_ShareId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_ShareId,
      objvgs_UserConfigCond.shareId,
      strComparisonOpShareId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_DataTable,
    ) == true
  ) {
    const strComparisonOpDataTable: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_DataTable];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_DataTable,
      objvgs_UserConfigCond.dataTable,
      strComparisonOpDataTable,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_UpdUser,
      objvgs_UserConfigCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_DataTableId,
    ) == true
  ) {
    const strComparisonOpDataTableId: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_DataTableId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_DataTableId,
      objvgs_UserConfigCond.dataTableId,
      strComparisonOpDataTableId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_UpdDate,
      objvgs_UserConfigCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_ShareName,
    ) == true
  ) {
    const strComparisonOpShareName: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_ShareName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_ShareName,
      objvgs_UserConfigCond.shareName,
      strComparisonOpShareName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_UserConfigCond.dicFldComparisonOp,
      clsvgs_UserConfigEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvgs_UserConfigCond.dicFldComparisonOp[clsvgs_UserConfigEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_UserConfigEN.con_Memo,
      objvgs_UserConfigCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_UserConfigENS:源对象
 * @param objvgs_UserConfigENT:目标对象
 */
export function vgs_UserConfig_CopyObjTo(
  objvgs_UserConfigENS: clsvgs_UserConfigEN,
  objvgs_UserConfigENT: clsvgs_UserConfigEN,
): void {
  objvgs_UserConfigENT.configId = objvgs_UserConfigENS.configId; //配置Id
  objvgs_UserConfigENT.configTypeId = objvgs_UserConfigENS.configTypeId; //配置类型Id
  objvgs_UserConfigENT.configTypeName = objvgs_UserConfigENS.configTypeName; //配置类型名称
  objvgs_UserConfigENT.shareId = objvgs_UserConfigENS.shareId; //分享Id
  objvgs_UserConfigENT.dataTable = objvgs_UserConfigENS.dataTable; //数据表
  objvgs_UserConfigENT.updUser = objvgs_UserConfigENS.updUser; //修改人
  objvgs_UserConfigENT.dataTableId = objvgs_UserConfigENS.dataTableId; //数据表Id
  objvgs_UserConfigENT.updDate = objvgs_UserConfigENS.updDate; //修改日期
  objvgs_UserConfigENT.shareName = objvgs_UserConfigENS.shareName; //分享名称
  objvgs_UserConfigENT.memo = objvgs_UserConfigENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_UserConfigENS:源对象
 * @param objvgs_UserConfigENT:目标对象
 */
export function vgs_UserConfig_GetObjFromJsonObj(
  objvgs_UserConfigENS: clsvgs_UserConfigEN,
): clsvgs_UserConfigEN {
  const objvgs_UserConfigENT: clsvgs_UserConfigEN = new clsvgs_UserConfigEN();
  ObjectAssign(objvgs_UserConfigENT, objvgs_UserConfigENS);
  return objvgs_UserConfigENT;
}
