/**
 * 类名:clsSysSecurityLevelWApi
 * 表名:SysSecurityLevel(01120651)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:51
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
 * 保密级别表(SysSecurityLevel)
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
import { clsSysSecurityLevelEN } from '@/ts/L0Entity/RT_Params/clsSysSecurityLevelEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sysSecurityLevel_Controller = 'SysSecurityLevelApi';
export const sysSecurityLevel_ConstructorName = 'sysSecurityLevel';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strLevelId:关键字
 * @returns 对象
 **/
export async function SysSecurityLevel_GetObjByLevelIdAsync(
  strLevelId: string,
): Promise<clsSysSecurityLevelEN | null> {
  const strThisFuncName = 'GetObjByLevelIdAsync';

  if (IsNullOrEmpty(strLevelId) == true) {
    const strMsg = Format(
      '参数:[strLevelId]不能为空!(In clsSysSecurityLevelWApi.GetObjByLevelIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strLevelId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strLevelId]的长度:[{0}]不正确!(clsSysSecurityLevelWApi.GetObjByLevelIdAsync)',
      strLevelId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByLevelId';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strLevelId,
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
      const objSysSecurityLevel = SysSecurityLevel_GetObjFromJsonObj(returnObj);
      return objSysSecurityLevel;
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param strLevelId:所给的关键字
 * @returns 对象
 */
export async function SysSecurityLevel_GetObjByLevelIdCache(
  strLevelId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByLevelIdCache';

  if (IsNullOrEmpty(strLevelId) == true) {
    const strMsg = Format(
      '参数:[strLevelId]不能为空!(In clsSysSecurityLevelWApi.GetObjByLevelIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strLevelId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strLevelId]的长度:[{0}]不正确!(clsSysSecurityLevelWApi.GetObjByLevelIdCache)',
      strLevelId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  try {
    const arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache.filter(
      (x) => x.levelId == strLevelId,
    );
    let objSysSecurityLevel: clsSysSecurityLevelEN;
    if (arrSysSecurityLevelSel.length > 0) {
      objSysSecurityLevel = arrSysSecurityLevelSel[0];
      return objSysSecurityLevel;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSysSecurityLevelConst = await SysSecurityLevel_GetObjByLevelIdAsync(strLevelId);
        if (objSysSecurityLevelConst != null) {
          SysSecurityLevel_ReFreshThisCache();
          return objSysSecurityLevelConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strLevelId,
      sysSecurityLevel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strLevelId:所给的关键字
 * @returns 对象
 */
export async function SysSecurityLevel_GetObjByLevelIdlocalStorage(strLevelId: string) {
  const strThisFuncName = 'GetObjByLevelIdlocalStorage';

  if (IsNullOrEmpty(strLevelId) == true) {
    const strMsg = Format(
      '参数:[strLevelId]不能为空!(In clsSysSecurityLevelWApi.GetObjByLevelIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strLevelId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strLevelId]的长度:[{0}]不正确!(clsSysSecurityLevelWApi.GetObjByLevelIdlocalStorage)',
      strLevelId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSysSecurityLevelEN._CurrTabName, strLevelId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSysSecurityLevelCache: clsSysSecurityLevelEN = JSON.parse(strTempObj);
    return objSysSecurityLevelCache;
  }
  try {
    const objSysSecurityLevel = await SysSecurityLevel_GetObjByLevelIdAsync(strLevelId);
    if (objSysSecurityLevel != null) {
      localStorage.setItem(strKey, JSON.stringify(objSysSecurityLevel));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSysSecurityLevel;
    }
    return objSysSecurityLevel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strLevelId,
      sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevel:所给的对象
 * @returns 对象
 */
export async function SysSecurityLevel_UpdateObjInLstCache(
  objSysSecurityLevel: clsSysSecurityLevelEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
    const obj = arrSysSecurityLevelObjLstCache.find(
      (x) => x.levelId == objSysSecurityLevel.levelId,
    );
    if (obj != null) {
      objSysSecurityLevel.levelId = obj.levelId;
      ObjectAssign(obj, objSysSecurityLevel);
    } else {
      arrSysSecurityLevelObjLstCache.push(objSysSecurityLevel);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sysSecurityLevel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strLevelId:所给的关键字
 * @returns 对象
 */
export async function SysSecurityLevel_GetNameByLevelIdCache(strLevelId: string) {
  if (IsNullOrEmpty(strLevelId) == true) {
    const strMsg = Format(
      '参数:[strLevelId]不能为空!(In clsSysSecurityLevelWApi.GetNameByLevelIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strLevelId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strLevelId]的长度:[{0}]不正确!(clsSysSecurityLevelWApi.GetNameByLevelIdCache)',
      strLevelId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  if (arrSysSecurityLevelObjLstCache == null) return '';
  try {
    const arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache.filter(
      (x) => x.levelId == strLevelId,
    );
    let objSysSecurityLevel: clsSysSecurityLevelEN;
    if (arrSysSecurityLevelSel.length > 0) {
      objSysSecurityLevel = arrSysSecurityLevelSel[0];
      return objSysSecurityLevel.levelName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strLevelId,
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
export async function SysSecurityLevel_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSysSecurityLevelEN.con_LevelId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSysSecurityLevelEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSysSecurityLevelEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strLevelId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSysSecurityLevel = await SysSecurityLevel_GetObjByLevelIdCache(strLevelId);
  if (objSysSecurityLevel == null) return '';
  if (objSysSecurityLevel.GetFldValue(strOutFldName) == null) return '';
  return objSysSecurityLevel.GetFldValue(strOutFldName).toString();
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
export function SysSecurityLevel_SortFunDefa(
  a: clsSysSecurityLevelEN,
  b: clsSysSecurityLevelEN,
): number {
  return a.levelId.localeCompare(b.levelId);
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
export function SysSecurityLevel_SortFunDefa2Fld(
  a: clsSysSecurityLevelEN,
  b: clsSysSecurityLevelEN,
): number {
  if (a.levelName == b.levelName) return a.memo.localeCompare(b.memo);
  else return a.levelName.localeCompare(b.levelName);
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
export function SysSecurityLevel_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSysSecurityLevelEN.con_LevelId:
        return (a: clsSysSecurityLevelEN, b: clsSysSecurityLevelEN) => {
          return a.levelId.localeCompare(b.levelId);
        };
      case clsSysSecurityLevelEN.con_LevelName:
        return (a: clsSysSecurityLevelEN, b: clsSysSecurityLevelEN) => {
          if (a.levelName == null) return -1;
          if (b.levelName == null) return 1;
          return a.levelName.localeCompare(b.levelName);
        };
      case clsSysSecurityLevelEN.con_Memo:
        return (a: clsSysSecurityLevelEN, b: clsSysSecurityLevelEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysSecurityLevel]中不存在!(in ${sysSecurityLevel_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSysSecurityLevelEN.con_LevelId:
        return (a: clsSysSecurityLevelEN, b: clsSysSecurityLevelEN) => {
          return b.levelId.localeCompare(a.levelId);
        };
      case clsSysSecurityLevelEN.con_LevelName:
        return (a: clsSysSecurityLevelEN, b: clsSysSecurityLevelEN) => {
          if (b.levelName == null) return -1;
          if (a.levelName == null) return 1;
          return b.levelName.localeCompare(a.levelName);
        };
      case clsSysSecurityLevelEN.con_Memo:
        return (a: clsSysSecurityLevelEN, b: clsSysSecurityLevelEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysSecurityLevel]中不存在!(in ${sysSecurityLevel_ConstructorName}.${strThisFuncName})`;
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
export async function SysSecurityLevel_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSysSecurityLevelEN.con_LevelId:
      return (obj: clsSysSecurityLevelEN) => {
        return obj.levelId === value;
      };
    case clsSysSecurityLevelEN.con_LevelName:
      return (obj: clsSysSecurityLevelEN) => {
        return obj.levelName === value;
      };
    case clsSysSecurityLevelEN.con_Memo:
      return (obj: clsSysSecurityLevelEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SysSecurityLevel]中不存在!(in ${sysSecurityLevel_ConstructorName}.${strThisFuncName})`;
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
export async function SysSecurityLevel_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSysSecurityLevelEN.con_LevelId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSysSecurityLevel = await SysSecurityLevel_GetObjLstCache();
  if (arrSysSecurityLevel == null) return [];
  let arrSysSecurityLevelSel = arrSysSecurityLevel;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSysSecurityLevelSel.length == 0) return [];
  return arrSysSecurityLevelSel.map((x) => x.levelId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysSecurityLevel_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSysSecurityLevelEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
      const objSysSecurityLevel = SysSecurityLevel_GetObjFromJsonObj(returnObj);
      return objSysSecurityLevel;
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysSecurityLevelEN._CurrTabName;
  if (IsNullOrEmpty(clsSysSecurityLevelEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysSecurityLevelEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSysSecurityLevelExObjLstCache: Array<clsSysSecurityLevelEN> = CacheHelper.Get(strKey);
    const arrSysSecurityLevelObjLstT = SysSecurityLevel_GetObjLstByJSONObjLst(
      arrSysSecurityLevelExObjLstCache,
    );
    return arrSysSecurityLevelObjLstT;
  }
  try {
    const arrSysSecurityLevelExObjLst = await SysSecurityLevel_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSysSecurityLevelExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysSecurityLevelExObjLst.length,
    );
    console.log(strInfo);
    return arrSysSecurityLevelExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysSecurityLevelEN._CurrTabName;
  if (IsNullOrEmpty(clsSysSecurityLevelEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysSecurityLevelEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysSecurityLevelExObjLstCache: Array<clsSysSecurityLevelEN> =
      JSON.parse(strTempObjLst);
    const arrSysSecurityLevelObjLstT = SysSecurityLevel_GetObjLstByJSONObjLst(
      arrSysSecurityLevelExObjLstCache,
    );
    return arrSysSecurityLevelObjLstT;
  }
  try {
    const arrSysSecurityLevelExObjLst = await SysSecurityLevel_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSysSecurityLevelExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysSecurityLevelExObjLst.length,
    );
    console.log(strInfo);
    return arrSysSecurityLevelExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysSecurityLevelEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysSecurityLevelObjLstCache: Array<clsSysSecurityLevelEN> = JSON.parse(strTempObjLst);
    return arrSysSecurityLevelObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SysSecurityLevel_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSysSecurityLevelEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
          sysSecurityLevel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysSecurityLevel_GetObjLstByJSONObjLst(returnObjLst);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysSecurityLevelEN._CurrTabName;
  if (IsNullOrEmpty(clsSysSecurityLevelEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysSecurityLevelEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysSecurityLevelExObjLstCache: Array<clsSysSecurityLevelEN> =
      JSON.parse(strTempObjLst);
    const arrSysSecurityLevelObjLstT = SysSecurityLevel_GetObjLstByJSONObjLst(
      arrSysSecurityLevelExObjLstCache,
    );
    return arrSysSecurityLevelObjLstT;
  }
  try {
    const arrSysSecurityLevelExObjLst = await SysSecurityLevel_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSysSecurityLevelExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysSecurityLevelExObjLst.length,
    );
    console.log(strInfo);
    return arrSysSecurityLevelExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysSecurityLevelEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysSecurityLevelObjLstCache: Array<clsSysSecurityLevelEN> = JSON.parse(strTempObjLst);
    return arrSysSecurityLevelObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysSecurityLevel_GetObjLstCache(): Promise<Array<clsSysSecurityLevelEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSysSecurityLevelObjLstCache;
  switch (clsSysSecurityLevelEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstClientCache();
      break;
    default:
      arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstClientCache();
      break;
  }
  return arrSysSecurityLevelObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysSecurityLevel_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSysSecurityLevelObjLstCache;
  switch (clsSysSecurityLevelEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSysSecurityLevelObjLstCache = null;
      break;
    default:
      arrSysSecurityLevelObjLstCache = null;
      break;
  }
  return arrSysSecurityLevelObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrLevelIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysSecurityLevel_GetSubObjLstCache(
  objSysSecurityLevelCond: clsSysSecurityLevelEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  let arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache;
  if (
    objSysSecurityLevelCond.sfFldComparisonOp == null ||
    objSysSecurityLevelCond.sfFldComparisonOp == ''
  )
    return arrSysSecurityLevelSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysSecurityLevelCond.sfFldComparisonOp,
  );
  //console.log("clsSysSecurityLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysSecurityLevelCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysSecurityLevelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysSecurityLevelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysSecurityLevelCond),
      sysSecurityLevel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysSecurityLevelEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrLevelId:关键字列表
 * @returns 对象列表
 **/
export async function SysSecurityLevel_GetObjLstByLevelIdLstAsync(
  arrLevelId: Array<string>,
): Promise<Array<clsSysSecurityLevelEN>> {
  const strThisFuncName = 'GetObjLstByLevelIdLstAsync';
  const strAction = 'GetObjLstByLevelIdLst';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrLevelId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sysSecurityLevel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysSecurityLevel_GetObjLstByJSONObjLst(returnObjLst);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param arrstrLevelIdLst:关键字列表
 * @returns 对象列表
 */
export async function SysSecurityLevel_GetObjLstByLevelIdLstCache(arrLevelIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByLevelIdLstCache';
  try {
    const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
    const arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache.filter(
      (x) => arrLevelIdLst.indexOf(x.levelId) > -1,
    );
    return arrSysSecurityLevelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrLevelIdLst.join(','),
      sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSysSecurityLevelEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
          sysSecurityLevel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysSecurityLevel_GetObjLstByJSONObjLst(returnObjLst);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSysSecurityLevelEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
          sysSecurityLevel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysSecurityLevel_GetObjLstByJSONObjLst(returnObjLst);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysSecurityLevelEN>();
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  if (arrSysSecurityLevelObjLstCache.length == 0) return arrSysSecurityLevelObjLstCache;
  let arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSysSecurityLevelCond = new clsSysSecurityLevelEN();
  ObjectAssign(objSysSecurityLevelCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSysSecurityLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysSecurityLevelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysSecurityLevelSel.length == 0) return arrSysSecurityLevelSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysSecurityLevelSel = arrSysSecurityLevelSel.sort(
        SysSecurityLevel_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSysSecurityLevelSel = arrSysSecurityLevelSel.sort(objPagerPara.sortFun);
    }
    arrSysSecurityLevelSel = arrSysSecurityLevelSel.slice(intStart, intEnd);
    return arrSysSecurityLevelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysSecurityLevel_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysSecurityLevelEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SysSecurityLevel_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysSecurityLevelEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysSecurityLevelEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
          sysSecurityLevel_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysSecurityLevel_GetObjLstByJSONObjLst(returnObjLst);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param strLevelId:关键字
 * @returns 获取删除的结果
 **/
export async function SysSecurityLevel_DelRecordAsync(strLevelId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strLevelId);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param arrLevelId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SysSecurityLevel_DelSysSecurityLevelsAsync(
  arrLevelId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSysSecurityLevelsAsync';
  const strAction = 'DelSysSecurityLevels';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrLevelId, config);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_DelSysSecurityLevelsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSysSecurityLevelsByCondAsync';
  const strAction = 'DelSysSecurityLevelsByCond';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysSecurityLevel_AddNewRecordAsync(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSysSecurityLevelEN);
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysSecurityLevelEN, config);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysSecurityLevel_AddNewRecordWithMaxIdAsync(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysSecurityLevelEN, config);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevelEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SysSecurityLevel_AddNewRecordWithReturnKeyAsync(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysSecurityLevelEN, config);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SysSecurityLevel_UpdateRecordAsync(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSysSecurityLevelEN.sfUpdFldSetStr === undefined ||
    objSysSecurityLevelEN.sfUpdFldSetStr === null ||
    objSysSecurityLevelEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysSecurityLevelEN.levelId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysSecurityLevelEN, config);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevelEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysSecurityLevel_UpdateWithConditionAsync(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSysSecurityLevelEN.sfUpdFldSetStr === undefined ||
    objSysSecurityLevelEN.sfUpdFldSetStr === null ||
    objSysSecurityLevelEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysSecurityLevelEN.levelId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);
  objSysSecurityLevelEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysSecurityLevelEN, config);
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objstrLevelIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysSecurityLevel_IsExistRecordCache(
  objSysSecurityLevelCond: clsSysSecurityLevelEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  if (arrSysSecurityLevelObjLstCache == null) return false;
  let arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache;
  if (
    objSysSecurityLevelCond.sfFldComparisonOp == null ||
    objSysSecurityLevelCond.sfFldComparisonOp == ''
  )
    return arrSysSecurityLevelSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysSecurityLevelCond.sfFldComparisonOp,
  );
  //console.log("clsSysSecurityLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysSecurityLevelCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysSecurityLevelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysSecurityLevelSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSysSecurityLevelCond),
      sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param strLevelId:所给的关键字
 * @returns 对象
 */
export async function SysSecurityLevel_IsExistCache(strLevelId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  if (arrSysSecurityLevelObjLstCache == null) return false;
  try {
    const arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache.filter(
      (x) => x.levelId == strLevelId,
    );
    if (arrSysSecurityLevelSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strLevelId,
      sysSecurityLevel_ConstructorName,
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
 * @param strLevelId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SysSecurityLevel_IsExistAsync(strLevelId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strLevelId,
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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
 * @param objSysSecurityLevelCond:条件对象
 * @returns 对象列表记录数
 */
export async function SysSecurityLevel_GetRecCountByCondCache(
  objSysSecurityLevelCond: clsSysSecurityLevelEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSysSecurityLevelObjLstCache = await SysSecurityLevel_GetObjLstCache();
  if (arrSysSecurityLevelObjLstCache == null) return 0;
  let arrSysSecurityLevelSel = arrSysSecurityLevelObjLstCache;
  if (
    objSysSecurityLevelCond.sfFldComparisonOp == null ||
    objSysSecurityLevelCond.sfFldComparisonOp == ''
  )
    return arrSysSecurityLevelSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysSecurityLevelCond.sfFldComparisonOp,
  );
  //console.log("clsSysSecurityLevelWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysSecurityLevelCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysSecurityLevelCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysSecurityLevelSel = arrSysSecurityLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysSecurityLevelSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysSecurityLevelCond),
      sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export async function SysSecurityLevel_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sysSecurityLevel_Controller, strAction);

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
        sysSecurityLevel_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysSecurityLevel_ConstructorName,
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
export function SysSecurityLevel_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SysSecurityLevel_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSysSecurityLevelEN._CurrTabName;
  switch (clsSysSecurityLevelEN.CacheModeId) {
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
export function SysSecurityLevel_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSysSecurityLevelEN._CurrTabName;
    switch (clsSysSecurityLevelEN.CacheModeId) {
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
export async function SysSecurityLevel_BindDdl_LevelIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_LevelIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_LevelIdInDivCache");
  const arrObjLstSel = await SysSecurityLevel_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSysSecurityLevelEN.con_LevelId,
    clsSysSecurityLevelEN.con_LevelName,
    '保密级别表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysSecurityLevel_CheckPropertyNew(pobjSysSecurityLevelEN: clsSysSecurityLevelEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelId) == false &&
    GetStrLen(pobjSysSecurityLevelEN.levelId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[级别Id(levelId)]的长度不能超过2(In 保密级别表(SysSecurityLevel))!值:$(pobjSysSecurityLevelEN.levelId)(clsSysSecurityLevelBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelName) == false &&
    GetStrLen(pobjSysSecurityLevelEN.levelName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[级别名称(levelName)]的长度不能超过50(In 保密级别表(SysSecurityLevel))!值:$(pobjSysSecurityLevelEN.levelName)(clsSysSecurityLevelBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.memo) == false &&
    GetStrLen(pobjSysSecurityLevelEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 保密级别表(SysSecurityLevel))!值:$(pobjSysSecurityLevelEN.memo)(clsSysSecurityLevelBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelId) == false &&
    undefined !== pobjSysSecurityLevelEN.levelId &&
    tzDataType.isString(pobjSysSecurityLevelEN.levelId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[级别Id(levelId)]的值:[$(pobjSysSecurityLevelEN.levelId)], 非法,应该为字符型(In 保密级别表(SysSecurityLevel))!(clsSysSecurityLevelBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelName) == false &&
    undefined !== pobjSysSecurityLevelEN.levelName &&
    tzDataType.isString(pobjSysSecurityLevelEN.levelName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[级别名称(levelName)]的值:[$(pobjSysSecurityLevelEN.levelName)], 非法,应该为字符型(In 保密级别表(SysSecurityLevel))!(clsSysSecurityLevelBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.memo) == false &&
    undefined !== pobjSysSecurityLevelEN.memo &&
    tzDataType.isString(pobjSysSecurityLevelEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysSecurityLevelEN.memo)], 非法,应该为字符型(In 保密级别表(SysSecurityLevel))!(clsSysSecurityLevelBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysSecurityLevel_CheckProperty4Update(
  pobjSysSecurityLevelEN: clsSysSecurityLevelEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelId) == false &&
    GetStrLen(pobjSysSecurityLevelEN.levelId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[级别Id(levelId)]的长度不能超过2(In 保密级别表(SysSecurityLevel))!值:$(pobjSysSecurityLevelEN.levelId)(clsSysSecurityLevelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelName) == false &&
    GetStrLen(pobjSysSecurityLevelEN.levelName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[级别名称(levelName)]的长度不能超过50(In 保密级别表(SysSecurityLevel))!值:$(pobjSysSecurityLevelEN.levelName)(clsSysSecurityLevelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.memo) == false &&
    GetStrLen(pobjSysSecurityLevelEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 保密级别表(SysSecurityLevel))!值:$(pobjSysSecurityLevelEN.memo)(clsSysSecurityLevelBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelId) == false &&
    undefined !== pobjSysSecurityLevelEN.levelId &&
    tzDataType.isString(pobjSysSecurityLevelEN.levelId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[级别Id(levelId)]的值:[$(pobjSysSecurityLevelEN.levelId)], 非法,应该为字符型(In 保密级别表(SysSecurityLevel))!(clsSysSecurityLevelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.levelName) == false &&
    undefined !== pobjSysSecurityLevelEN.levelName &&
    tzDataType.isString(pobjSysSecurityLevelEN.levelName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[级别名称(levelName)]的值:[$(pobjSysSecurityLevelEN.levelName)], 非法,应该为字符型(In 保密级别表(SysSecurityLevel))!(clsSysSecurityLevelBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysSecurityLevelEN.memo) == false &&
    undefined !== pobjSysSecurityLevelEN.memo &&
    tzDataType.isString(pobjSysSecurityLevelEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysSecurityLevelEN.memo)], 非法,应该为字符型(In 保密级别表(SysSecurityLevel))!(clsSysSecurityLevelBL:CheckProperty4Update)',
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
export function SysSecurityLevel_GetJSONStrByObj(
  pobjSysSecurityLevelEN: clsSysSecurityLevelEN,
): string {
  pobjSysSecurityLevelEN.sfUpdFldSetStr = pobjSysSecurityLevelEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSysSecurityLevelEN);
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
export function SysSecurityLevel_GetObjLstByJSONStr(strJSON: string): Array<clsSysSecurityLevelEN> {
  let arrSysSecurityLevelObjLst = new Array<clsSysSecurityLevelEN>();
  if (strJSON === '') {
    return arrSysSecurityLevelObjLst;
  }
  try {
    arrSysSecurityLevelObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSysSecurityLevelObjLst;
  }
  return arrSysSecurityLevelObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysSecurityLevelObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SysSecurityLevel_GetObjLstByJSONObjLst(
  arrSysSecurityLevelObjLstS: Array<clsSysSecurityLevelEN>,
): Array<clsSysSecurityLevelEN> {
  const arrSysSecurityLevelObjLst = new Array<clsSysSecurityLevelEN>();
  for (const objInFor of arrSysSecurityLevelObjLstS) {
    const obj1 = SysSecurityLevel_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSysSecurityLevelObjLst.push(obj1);
  }
  return arrSysSecurityLevelObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysSecurityLevel_GetObjByJSONStr(strJSON: string): clsSysSecurityLevelEN {
  let pobjSysSecurityLevelEN = new clsSysSecurityLevelEN();
  if (strJSON === '') {
    return pobjSysSecurityLevelEN;
  }
  try {
    pobjSysSecurityLevelEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSysSecurityLevelEN;
  }
  return pobjSysSecurityLevelEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SysSecurityLevel_GetCombineCondition(
  objSysSecurityLevelCond: clsSysSecurityLevelEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSysSecurityLevelCond.dicFldComparisonOp,
      clsSysSecurityLevelEN.con_LevelId,
    ) == true
  ) {
    const strComparisonOpLevelId: string =
      objSysSecurityLevelCond.dicFldComparisonOp[clsSysSecurityLevelEN.con_LevelId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysSecurityLevelEN.con_LevelId,
      objSysSecurityLevelCond.levelId,
      strComparisonOpLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysSecurityLevelCond.dicFldComparisonOp,
      clsSysSecurityLevelEN.con_LevelName,
    ) == true
  ) {
    const strComparisonOpLevelName: string =
      objSysSecurityLevelCond.dicFldComparisonOp[clsSysSecurityLevelEN.con_LevelName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysSecurityLevelEN.con_LevelName,
      objSysSecurityLevelCond.levelName,
      strComparisonOpLevelName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysSecurityLevelCond.dicFldComparisonOp,
      clsSysSecurityLevelEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSysSecurityLevelCond.dicFldComparisonOp[clsSysSecurityLevelEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysSecurityLevelEN.con_Memo,
      objSysSecurityLevelCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SysSecurityLevel(保密级别表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strLevelId: 级别Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SysSecurityLevel_GetUniCondStr(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and LevelId = '{0}'", objSysSecurityLevelEN.levelId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SysSecurityLevel(保密级别表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strLevelId: 级别Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SysSecurityLevel_GetUniCondStr4Update(
  objSysSecurityLevelEN: clsSysSecurityLevelEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and LevelId <> '{0}'", objSysSecurityLevelEN.levelId);
  strWhereCond += Format(" and LevelId = '{0}'", objSysSecurityLevelEN.levelId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysSecurityLevelENS:源对象
 * @param objSysSecurityLevelENT:目标对象
 */
export function SysSecurityLevel_CopyObjTo(
  objSysSecurityLevelENS: clsSysSecurityLevelEN,
  objSysSecurityLevelENT: clsSysSecurityLevelEN,
): void {
  objSysSecurityLevelENT.levelId = objSysSecurityLevelENS.levelId; //级别Id
  objSysSecurityLevelENT.levelName = objSysSecurityLevelENS.levelName; //级别名称
  objSysSecurityLevelENT.memo = objSysSecurityLevelENS.memo; //备注
  objSysSecurityLevelENT.sfUpdFldSetStr = objSysSecurityLevelENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysSecurityLevelENS:源对象
 * @param objSysSecurityLevelENT:目标对象
 */
export function SysSecurityLevel_GetObjFromJsonObj(
  objSysSecurityLevelENS: clsSysSecurityLevelEN,
): clsSysSecurityLevelEN {
  const objSysSecurityLevelENT: clsSysSecurityLevelEN = new clsSysSecurityLevelEN();
  ObjectAssign(objSysSecurityLevelENT, objSysSecurityLevelENS);
  return objSysSecurityLevelENT;
}
