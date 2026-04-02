/**
 * 类名:clsSysScoreTypeWApi
 * 表名:SysScoreType(01120631)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:50
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
 * 评分类型表(SysScoreType)
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
import { clsSysScoreTypeEN } from '@/ts/L0Entity/RT_Params/clsSysScoreTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sysScoreType_Controller = 'SysScoreTypeApi';
export const sysScoreType_ConstructorName = 'sysScoreType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strScoreTypeId:关键字
 * @returns 对象
 **/
export async function SysScoreType_GetObjByScoreTypeIdAsync(
  strScoreTypeId: string,
): Promise<clsSysScoreTypeEN | null> {
  const strThisFuncName = 'GetObjByScoreTypeIdAsync';

  if (IsNullOrEmpty(strScoreTypeId) == true) {
    const strMsg = Format(
      '参数:[strScoreTypeId]不能为空!(In clsSysScoreTypeWApi.GetObjByScoreTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strScoreTypeId]的长度:[{0}]不正确!(clsSysScoreTypeWApi.GetObjByScoreTypeIdAsync)',
      strScoreTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByScoreTypeId';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strScoreTypeId,
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
      const objSysScoreType = SysScoreType_GetObjFromJsonObj(returnObj);
      return objSysScoreType;
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param strScoreTypeId:所给的关键字
 * @returns 对象
 */
export async function SysScoreType_GetObjByScoreTypeIdCache(
  strScoreTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByScoreTypeIdCache';

  if (IsNullOrEmpty(strScoreTypeId) == true) {
    const strMsg = Format(
      '参数:[strScoreTypeId]不能为空!(In clsSysScoreTypeWApi.GetObjByScoreTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strScoreTypeId]的长度:[{0}]不正确!(clsSysScoreTypeWApi.GetObjByScoreTypeIdCache)',
      strScoreTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  try {
    const arrSysScoreTypeSel = arrSysScoreTypeObjLstCache.filter(
      (x) => x.scoreTypeId == strScoreTypeId,
    );
    let objSysScoreType: clsSysScoreTypeEN;
    if (arrSysScoreTypeSel.length > 0) {
      objSysScoreType = arrSysScoreTypeSel[0];
      return objSysScoreType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSysScoreTypeConst = await SysScoreType_GetObjByScoreTypeIdAsync(strScoreTypeId);
        if (objSysScoreTypeConst != null) {
          SysScoreType_ReFreshThisCache();
          return objSysScoreTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strScoreTypeId,
      sysScoreType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strScoreTypeId:所给的关键字
 * @returns 对象
 */
export async function SysScoreType_GetObjByScoreTypeIdlocalStorage(strScoreTypeId: string) {
  const strThisFuncName = 'GetObjByScoreTypeIdlocalStorage';

  if (IsNullOrEmpty(strScoreTypeId) == true) {
    const strMsg = Format(
      '参数:[strScoreTypeId]不能为空!(In clsSysScoreTypeWApi.GetObjByScoreTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strScoreTypeId]的长度:[{0}]不正确!(clsSysScoreTypeWApi.GetObjByScoreTypeIdlocalStorage)',
      strScoreTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSysScoreTypeEN._CurrTabName, strScoreTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSysScoreTypeCache: clsSysScoreTypeEN = JSON.parse(strTempObj);
    return objSysScoreTypeCache;
  }
  try {
    const objSysScoreType = await SysScoreType_GetObjByScoreTypeIdAsync(strScoreTypeId);
    if (objSysScoreType != null) {
      localStorage.setItem(strKey, JSON.stringify(objSysScoreType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSysScoreType;
    }
    return objSysScoreType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strScoreTypeId,
      sysScoreType_ConstructorName,
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
 * @param objSysScoreType:所给的对象
 * @returns 对象
 */
export async function SysScoreType_UpdateObjInLstCache(objSysScoreType: clsSysScoreTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
    const obj = arrSysScoreTypeObjLstCache.find(
      (x) => x.scoreTypeId == objSysScoreType.scoreTypeId,
    );
    if (obj != null) {
      objSysScoreType.scoreTypeId = obj.scoreTypeId;
      ObjectAssign(obj, objSysScoreType);
    } else {
      arrSysScoreTypeObjLstCache.push(objSysScoreType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sysScoreType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strScoreTypeId:所给的关键字
 * @returns 对象
 */
export async function SysScoreType_GetNameByScoreTypeIdCache(strScoreTypeId: string) {
  if (IsNullOrEmpty(strScoreTypeId) == true) {
    const strMsg = Format(
      '参数:[strScoreTypeId]不能为空!(In clsSysScoreTypeWApi.GetNameByScoreTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strScoreTypeId]的长度:[{0}]不正确!(clsSysScoreTypeWApi.GetNameByScoreTypeIdCache)',
      strScoreTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  if (arrSysScoreTypeObjLstCache == null) return '';
  try {
    const arrSysScoreTypeSel = arrSysScoreTypeObjLstCache.filter(
      (x) => x.scoreTypeId == strScoreTypeId,
    );
    let objSysScoreType: clsSysScoreTypeEN;
    if (arrSysScoreTypeSel.length > 0) {
      objSysScoreType = arrSysScoreTypeSel[0];
      return objSysScoreType.scoreTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strScoreTypeId,
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
export async function SysScoreType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSysScoreTypeEN.con_ScoreTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSysScoreTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSysScoreTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strScoreTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSysScoreType = await SysScoreType_GetObjByScoreTypeIdCache(strScoreTypeId);
  if (objSysScoreType == null) return '';
  if (objSysScoreType.GetFldValue(strOutFldName) == null) return '';
  return objSysScoreType.GetFldValue(strOutFldName).toString();
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
export function SysScoreType_SortFunDefa(a: clsSysScoreTypeEN, b: clsSysScoreTypeEN): number {
  return a.scoreTypeId.localeCompare(b.scoreTypeId);
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
export function SysScoreType_SortFunDefa2Fld(a: clsSysScoreTypeEN, b: clsSysScoreTypeEN): number {
  if (a.scoreTypeName == b.scoreTypeName) return a.onlyId.localeCompare(b.onlyId);
  else return a.scoreTypeName.localeCompare(b.scoreTypeName);
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
export function SysScoreType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSysScoreTypeEN.con_ScoreTypeId:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          return a.scoreTypeId.localeCompare(b.scoreTypeId);
        };
      case clsSysScoreTypeEN.con_ScoreTypeName:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (a.scoreTypeName == null) return -1;
          if (b.scoreTypeName == null) return 1;
          return a.scoreTypeName.localeCompare(b.scoreTypeName);
        };
      case clsSysScoreTypeEN.con_OnlyId:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (a.onlyId == null) return -1;
          if (b.onlyId == null) return 1;
          return a.onlyId.localeCompare(b.onlyId);
        };
      case clsSysScoreTypeEN.con_UpdUser:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsSysScoreTypeEN.con_UpdDate:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSysScoreTypeEN.con_Memo:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysScoreType]中不存在!(in ${sysScoreType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSysScoreTypeEN.con_ScoreTypeId:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          return b.scoreTypeId.localeCompare(a.scoreTypeId);
        };
      case clsSysScoreTypeEN.con_ScoreTypeName:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (b.scoreTypeName == null) return -1;
          if (a.scoreTypeName == null) return 1;
          return b.scoreTypeName.localeCompare(a.scoreTypeName);
        };
      case clsSysScoreTypeEN.con_OnlyId:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (b.onlyId == null) return -1;
          if (a.onlyId == null) return 1;
          return b.onlyId.localeCompare(a.onlyId);
        };
      case clsSysScoreTypeEN.con_UpdUser:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsSysScoreTypeEN.con_UpdDate:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSysScoreTypeEN.con_Memo:
        return (a: clsSysScoreTypeEN, b: clsSysScoreTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysScoreType]中不存在!(in ${sysScoreType_ConstructorName}.${strThisFuncName})`;
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
export async function SysScoreType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSysScoreTypeEN.con_ScoreTypeId:
      return (obj: clsSysScoreTypeEN) => {
        return obj.scoreTypeId === value;
      };
    case clsSysScoreTypeEN.con_ScoreTypeName:
      return (obj: clsSysScoreTypeEN) => {
        return obj.scoreTypeName === value;
      };
    case clsSysScoreTypeEN.con_OnlyId:
      return (obj: clsSysScoreTypeEN) => {
        return obj.onlyId === value;
      };
    case clsSysScoreTypeEN.con_UpdUser:
      return (obj: clsSysScoreTypeEN) => {
        return obj.updUser === value;
      };
    case clsSysScoreTypeEN.con_UpdDate:
      return (obj: clsSysScoreTypeEN) => {
        return obj.updDate === value;
      };
    case clsSysScoreTypeEN.con_Memo:
      return (obj: clsSysScoreTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SysScoreType]中不存在!(in ${sysScoreType_ConstructorName}.${strThisFuncName})`;
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
export async function SysScoreType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSysScoreTypeEN.con_ScoreTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSysScoreType = await SysScoreType_GetObjLstCache();
  if (arrSysScoreType == null) return [];
  let arrSysScoreTypeSel = arrSysScoreType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSysScoreTypeSel.length == 0) return [];
  return arrSysScoreTypeSel.map((x) => x.scoreTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysScoreType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSysScoreTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
      const objSysScoreType = SysScoreType_GetObjFromJsonObj(returnObj);
      return objSysScoreType;
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysScoreTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSysScoreTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSysScoreTypeExObjLstCache: Array<clsSysScoreTypeEN> = CacheHelper.Get(strKey);
    const arrSysScoreTypeObjLstT = SysScoreType_GetObjLstByJSONObjLst(arrSysScoreTypeExObjLstCache);
    return arrSysScoreTypeObjLstT;
  }
  try {
    const arrSysScoreTypeExObjLst = await SysScoreType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSysScoreTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysScoreTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSysScoreTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysScoreTypeExObjLstCache: Array<clsSysScoreTypeEN> = JSON.parse(strTempObjLst);
    const arrSysScoreTypeObjLstT = SysScoreType_GetObjLstByJSONObjLst(arrSysScoreTypeExObjLstCache);
    return arrSysScoreTypeObjLstT;
  }
  try {
    const arrSysScoreTypeExObjLst = await SysScoreType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSysScoreTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysScoreTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysScoreTypeObjLstCache: Array<clsSysScoreTypeEN> = JSON.parse(strTempObjLst);
    return arrSysScoreTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SysScoreType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSysScoreTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
          sysScoreType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysScoreTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSysScoreTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysScoreTypeExObjLstCache: Array<clsSysScoreTypeEN> = JSON.parse(strTempObjLst);
    const arrSysScoreTypeObjLstT = SysScoreType_GetObjLstByJSONObjLst(arrSysScoreTypeExObjLstCache);
    return arrSysScoreTypeObjLstT;
  }
  try {
    const arrSysScoreTypeExObjLst = await SysScoreType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSysScoreTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysScoreTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysScoreTypeObjLstCache: Array<clsSysScoreTypeEN> = JSON.parse(strTempObjLst);
    return arrSysScoreTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysScoreType_GetObjLstCache(): Promise<Array<clsSysScoreTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSysScoreTypeObjLstCache;
  switch (clsSysScoreTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstClientCache();
      break;
    default:
      arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstClientCache();
      break;
  }
  return arrSysScoreTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysScoreType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSysScoreTypeObjLstCache;
  switch (clsSysScoreTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSysScoreTypeObjLstCache = null;
      break;
    default:
      arrSysScoreTypeObjLstCache = null;
      break;
  }
  return arrSysScoreTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrScoreTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysScoreType_GetSubObjLstCache(objSysScoreTypeCond: clsSysScoreTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  let arrSysScoreTypeSel = arrSysScoreTypeObjLstCache;
  if (objSysScoreTypeCond.sfFldComparisonOp == null || objSysScoreTypeCond.sfFldComparisonOp == '')
    return arrSysScoreTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysScoreTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysScoreTypeCond),
      sysScoreType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysScoreTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrScoreTypeId:关键字列表
 * @returns 对象列表
 **/
export async function SysScoreType_GetObjLstByScoreTypeIdLstAsync(
  arrScoreTypeId: Array<string>,
): Promise<Array<clsSysScoreTypeEN>> {
  const strThisFuncName = 'GetObjLstByScoreTypeIdLstAsync';
  const strAction = 'GetObjLstByScoreTypeIdLst';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrScoreTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sysScoreType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param arrstrScoreTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function SysScoreType_GetObjLstByScoreTypeIdLstCache(
  arrScoreTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByScoreTypeIdLstCache';
  try {
    const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
    const arrSysScoreTypeSel = arrSysScoreTypeObjLstCache.filter(
      (x) => arrScoreTypeIdLst.indexOf(x.scoreTypeId) > -1,
    );
    return arrSysScoreTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrScoreTypeIdLst.join(','),
      sysScoreType_ConstructorName,
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
export async function SysScoreType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSysScoreTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
          sysScoreType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSysScoreTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
          sysScoreType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysScoreTypeEN>();
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  if (arrSysScoreTypeObjLstCache.length == 0) return arrSysScoreTypeObjLstCache;
  let arrSysScoreTypeSel = arrSysScoreTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSysScoreTypeCond = new clsSysScoreTypeEN();
  ObjectAssign(objSysScoreTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSysScoreTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysScoreTypeSel.length == 0) return arrSysScoreTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysScoreTypeSel = arrSysScoreTypeSel.sort(
        SysScoreType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSysScoreTypeSel = arrSysScoreTypeSel.sort(objPagerPara.sortFun);
    }
    arrSysScoreTypeSel = arrSysScoreTypeSel.slice(intStart, intEnd);
    return arrSysScoreTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysScoreType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysScoreTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SysScoreType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysScoreTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysScoreTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
          sysScoreType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param strScoreTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function SysScoreType_DelRecordAsync(strScoreTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strScoreTypeId);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param arrScoreTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SysScoreType_DelSysScoreTypesAsync(
  arrScoreTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSysScoreTypesAsync';
  const strAction = 'DelSysScoreTypes';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrScoreTypeId, config);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_DelSysScoreTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSysScoreTypesByCondAsync';
  const strAction = 'DelSysScoreTypesByCond';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objSysScoreTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysScoreType_AddNewRecordAsync(
  objSysScoreTypeEN: clsSysScoreTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSysScoreTypeEN.scoreTypeId === null || objSysScoreTypeEN.scoreTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSysScoreTypeEN);
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreTypeEN, config);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objSysScoreTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysScoreType_AddNewRecordWithMaxIdAsync(
  objSysScoreTypeEN: clsSysScoreTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreTypeEN, config);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objSysScoreTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SysScoreType_AddNewRecordWithReturnKeyAsync(
  objSysScoreTypeEN: clsSysScoreTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreTypeEN, config);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objSysScoreTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SysScoreType_UpdateRecordAsync(
  objSysScoreTypeEN: clsSysScoreTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSysScoreTypeEN.sfUpdFldSetStr === undefined ||
    objSysScoreTypeEN.sfUpdFldSetStr === null ||
    objSysScoreTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysScoreTypeEN.scoreTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreTypeEN, config);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objSysScoreTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysScoreType_UpdateWithConditionAsync(
  objSysScoreTypeEN: clsSysScoreTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSysScoreTypeEN.sfUpdFldSetStr === undefined ||
    objSysScoreTypeEN.sfUpdFldSetStr === null ||
    objSysScoreTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysScoreTypeEN.scoreTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);
  objSysScoreTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreTypeEN, config);
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objstrScoreTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysScoreType_IsExistRecordCache(objSysScoreTypeCond: clsSysScoreTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  if (arrSysScoreTypeObjLstCache == null) return false;
  let arrSysScoreTypeSel = arrSysScoreTypeObjLstCache;
  if (objSysScoreTypeCond.sfFldComparisonOp == null || objSysScoreTypeCond.sfFldComparisonOp == '')
    return arrSysScoreTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysScoreTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSysScoreTypeCond),
      sysScoreType_ConstructorName,
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
export async function SysScoreType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param strScoreTypeId:所给的关键字
 * @returns 对象
 */
export async function SysScoreType_IsExistCache(strScoreTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  if (arrSysScoreTypeObjLstCache == null) return false;
  try {
    const arrSysScoreTypeSel = arrSysScoreTypeObjLstCache.filter(
      (x) => x.scoreTypeId == strScoreTypeId,
    );
    if (arrSysScoreTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strScoreTypeId,
      sysScoreType_ConstructorName,
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
 * @param strScoreTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SysScoreType_IsExistAsync(strScoreTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strScoreTypeId,
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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export async function SysScoreType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
 * @param objSysScoreTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function SysScoreType_GetRecCountByCondCache(objSysScoreTypeCond: clsSysScoreTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSysScoreTypeObjLstCache = await SysScoreType_GetObjLstCache();
  if (arrSysScoreTypeObjLstCache == null) return 0;
  let arrSysScoreTypeSel = arrSysScoreTypeObjLstCache;
  if (objSysScoreTypeCond.sfFldComparisonOp == null || objSysScoreTypeCond.sfFldComparisonOp == '')
    return arrSysScoreTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysScoreTypeSel = arrSysScoreTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysScoreTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysScoreTypeCond),
      sysScoreType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function SysScoreType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sysScoreType_Controller, strAction);

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
        sysScoreType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreType_ConstructorName,
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
export function SysScoreType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SysScoreType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSysScoreTypeEN._CurrTabName;
  switch (clsSysScoreTypeEN.CacheModeId) {
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
export function SysScoreType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSysScoreTypeEN._CurrTabName;
    switch (clsSysScoreTypeEN.CacheModeId) {
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
export async function SysScoreType_BindDdl_ScoreTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ScoreTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ScoreTypeIdInDivCache");
  const arrObjLstSel = await SysScoreType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSysScoreTypeEN.con_ScoreTypeId,
    clsSysScoreTypeEN.con_ScoreTypeName,
    '评分类型表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysScoreType_CheckPropertyNew(pobjSysScoreTypeEN: clsSysScoreTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeId) == false &&
    GetStrLen(pobjSysScoreTypeEN.scoreTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分数类型Id(scoreTypeId)]的长度不能超过4(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.scoreTypeId)(clsSysScoreTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeName) == false &&
    GetStrLen(pobjSysScoreTypeEN.scoreTypeName) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分数类型名称(scoreTypeName)]的长度不能超过10(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.scoreTypeName)(clsSysScoreTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.onlyId) == false &&
    GetStrLen(pobjSysScoreTypeEN.onlyId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[OnlyId(onlyId)]的长度不能超过20(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.onlyId)(clsSysScoreTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updUser) == false &&
    GetStrLen(pobjSysScoreTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.updUser)(clsSysScoreTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updDate) == false &&
    GetStrLen(pobjSysScoreTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.updDate)(clsSysScoreTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.memo) == false &&
    GetStrLen(pobjSysScoreTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.memo)(clsSysScoreTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeId) == false &&
    undefined !== pobjSysScoreTypeEN.scoreTypeId &&
    tzDataType.isString(pobjSysScoreTypeEN.scoreTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分数类型Id(scoreTypeId)]的值:[$(pobjSysScoreTypeEN.scoreTypeId)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeName) == false &&
    undefined !== pobjSysScoreTypeEN.scoreTypeName &&
    tzDataType.isString(pobjSysScoreTypeEN.scoreTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分数类型名称(scoreTypeName)]的值:[$(pobjSysScoreTypeEN.scoreTypeName)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.onlyId) == false &&
    undefined !== pobjSysScoreTypeEN.onlyId &&
    tzDataType.isString(pobjSysScoreTypeEN.onlyId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[OnlyId(onlyId)]的值:[$(pobjSysScoreTypeEN.onlyId)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updUser) == false &&
    undefined !== pobjSysScoreTypeEN.updUser &&
    tzDataType.isString(pobjSysScoreTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysScoreTypeEN.updUser)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updDate) == false &&
    undefined !== pobjSysScoreTypeEN.updDate &&
    tzDataType.isString(pobjSysScoreTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysScoreTypeEN.updDate)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.memo) == false &&
    undefined !== pobjSysScoreTypeEN.memo &&
    tzDataType.isString(pobjSysScoreTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysScoreTypeEN.memo)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysScoreType_CheckProperty4Update(pobjSysScoreTypeEN: clsSysScoreTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeId) == false &&
    GetStrLen(pobjSysScoreTypeEN.scoreTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分数类型Id(scoreTypeId)]的长度不能超过4(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.scoreTypeId)(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeName) == false &&
    GetStrLen(pobjSysScoreTypeEN.scoreTypeName) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分数类型名称(scoreTypeName)]的长度不能超过10(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.scoreTypeName)(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.onlyId) == false &&
    GetStrLen(pobjSysScoreTypeEN.onlyId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[OnlyId(onlyId)]的长度不能超过20(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.onlyId)(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updUser) == false &&
    GetStrLen(pobjSysScoreTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.updUser)(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updDate) == false &&
    GetStrLen(pobjSysScoreTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.updDate)(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.memo) == false &&
    GetStrLen(pobjSysScoreTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 评分类型表(SysScoreType))!值:$(pobjSysScoreTypeEN.memo)(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeId) == false &&
    undefined !== pobjSysScoreTypeEN.scoreTypeId &&
    tzDataType.isString(pobjSysScoreTypeEN.scoreTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分数类型Id(scoreTypeId)]的值:[$(pobjSysScoreTypeEN.scoreTypeId)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeName) == false &&
    undefined !== pobjSysScoreTypeEN.scoreTypeName &&
    tzDataType.isString(pobjSysScoreTypeEN.scoreTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分数类型名称(scoreTypeName)]的值:[$(pobjSysScoreTypeEN.scoreTypeName)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.onlyId) == false &&
    undefined !== pobjSysScoreTypeEN.onlyId &&
    tzDataType.isString(pobjSysScoreTypeEN.onlyId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[OnlyId(onlyId)]的值:[$(pobjSysScoreTypeEN.onlyId)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updUser) == false &&
    undefined !== pobjSysScoreTypeEN.updUser &&
    tzDataType.isString(pobjSysScoreTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysScoreTypeEN.updUser)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.updDate) == false &&
    undefined !== pobjSysScoreTypeEN.updDate &&
    tzDataType.isString(pobjSysScoreTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysScoreTypeEN.updDate)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.memo) == false &&
    undefined !== pobjSysScoreTypeEN.memo &&
    tzDataType.isString(pobjSysScoreTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysScoreTypeEN.memo)], 非法,应该为字符型(In 评分类型表(SysScoreType))!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjSysScoreTypeEN.scoreTypeId) === true ||
    pobjSysScoreTypeEN.scoreTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[分数类型Id]不能为空(In 评分类型表)!(clsSysScoreTypeBL:CheckProperty4Update)',
    );
  }
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
export function SysScoreType_GetJSONStrByObj(pobjSysScoreTypeEN: clsSysScoreTypeEN): string {
  pobjSysScoreTypeEN.sfUpdFldSetStr = pobjSysScoreTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSysScoreTypeEN);
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
export function SysScoreType_GetObjLstByJSONStr(strJSON: string): Array<clsSysScoreTypeEN> {
  let arrSysScoreTypeObjLst = new Array<clsSysScoreTypeEN>();
  if (strJSON === '') {
    return arrSysScoreTypeObjLst;
  }
  try {
    arrSysScoreTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSysScoreTypeObjLst;
  }
  return arrSysScoreTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysScoreTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SysScoreType_GetObjLstByJSONObjLst(
  arrSysScoreTypeObjLstS: Array<clsSysScoreTypeEN>,
): Array<clsSysScoreTypeEN> {
  const arrSysScoreTypeObjLst = new Array<clsSysScoreTypeEN>();
  for (const objInFor of arrSysScoreTypeObjLstS) {
    const obj1 = SysScoreType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSysScoreTypeObjLst.push(obj1);
  }
  return arrSysScoreTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysScoreType_GetObjByJSONStr(strJSON: string): clsSysScoreTypeEN {
  let pobjSysScoreTypeEN = new clsSysScoreTypeEN();
  if (strJSON === '') {
    return pobjSysScoreTypeEN;
  }
  try {
    pobjSysScoreTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSysScoreTypeEN;
  }
  return pobjSysScoreTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SysScoreType_GetCombineCondition(objSysScoreTypeCond: clsSysScoreTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreTypeCond.dicFldComparisonOp,
      clsSysScoreTypeEN.con_ScoreTypeId,
    ) == true
  ) {
    const strComparisonOpScoreTypeId: string =
      objSysScoreTypeCond.dicFldComparisonOp[clsSysScoreTypeEN.con_ScoreTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreTypeEN.con_ScoreTypeId,
      objSysScoreTypeCond.scoreTypeId,
      strComparisonOpScoreTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreTypeCond.dicFldComparisonOp,
      clsSysScoreTypeEN.con_ScoreTypeName,
    ) == true
  ) {
    const strComparisonOpScoreTypeName: string =
      objSysScoreTypeCond.dicFldComparisonOp[clsSysScoreTypeEN.con_ScoreTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreTypeEN.con_ScoreTypeName,
      objSysScoreTypeCond.scoreTypeName,
      strComparisonOpScoreTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreTypeCond.dicFldComparisonOp,
      clsSysScoreTypeEN.con_OnlyId,
    ) == true
  ) {
    const strComparisonOpOnlyId: string =
      objSysScoreTypeCond.dicFldComparisonOp[clsSysScoreTypeEN.con_OnlyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreTypeEN.con_OnlyId,
      objSysScoreTypeCond.onlyId,
      strComparisonOpOnlyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreTypeCond.dicFldComparisonOp,
      clsSysScoreTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objSysScoreTypeCond.dicFldComparisonOp[clsSysScoreTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreTypeEN.con_UpdUser,
      objSysScoreTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreTypeCond.dicFldComparisonOp,
      clsSysScoreTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSysScoreTypeCond.dicFldComparisonOp[clsSysScoreTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreTypeEN.con_UpdDate,
      objSysScoreTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreTypeCond.dicFldComparisonOp,
      clsSysScoreTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSysScoreTypeCond.dicFldComparisonOp[clsSysScoreTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreTypeEN.con_Memo,
      objSysScoreTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysScoreTypeENS:源对象
 * @param objSysScoreTypeENT:目标对象
 */
export function SysScoreType_CopyObjTo(
  objSysScoreTypeENS: clsSysScoreTypeEN,
  objSysScoreTypeENT: clsSysScoreTypeEN,
): void {
  objSysScoreTypeENT.scoreTypeId = objSysScoreTypeENS.scoreTypeId; //分数类型Id
  objSysScoreTypeENT.scoreTypeName = objSysScoreTypeENS.scoreTypeName; //分数类型名称
  objSysScoreTypeENT.onlyId = objSysScoreTypeENS.onlyId; //OnlyId
  objSysScoreTypeENT.updUser = objSysScoreTypeENS.updUser; //修改人
  objSysScoreTypeENT.updDate = objSysScoreTypeENS.updDate; //修改日期
  objSysScoreTypeENT.memo = objSysScoreTypeENS.memo; //备注
  objSysScoreTypeENT.sfUpdFldSetStr = objSysScoreTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysScoreTypeENS:源对象
 * @param objSysScoreTypeENT:目标对象
 */
export function SysScoreType_GetObjFromJsonObj(
  objSysScoreTypeENS: clsSysScoreTypeEN,
): clsSysScoreTypeEN {
  const objSysScoreTypeENT: clsSysScoreTypeEN = new clsSysScoreTypeEN();
  ObjectAssign(objSysScoreTypeENT, objSysScoreTypeENS);
  return objSysScoreTypeENT;
}
