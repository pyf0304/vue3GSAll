/**
 * 类名:clsSysVoteTypeWApi
 * 表名:SysVoteType(01120638)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:48
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
 * 系统点赞类型(SysVoteType)
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
import { clsSysVoteTypeEN } from '@/ts/L0Entity/RT_Params/clsSysVoteTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sysVoteType_Controller = 'SysVoteTypeApi';
export const sysVoteType_ConstructorName = 'sysVoteType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVoteTypeId:关键字
 * @returns 对象
 **/
export async function SysVoteType_GetObjByVoteTypeIdAsync(
  strVoteTypeId: string,
): Promise<clsSysVoteTypeEN | null> {
  const strThisFuncName = 'GetObjByVoteTypeIdAsync';

  if (IsNullOrEmpty(strVoteTypeId) == true) {
    const strMsg = Format(
      '参数:[strVoteTypeId]不能为空!(In clsSysVoteTypeWApi.GetObjByVoteTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVoteTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVoteTypeId]的长度:[{0}]不正确!(clsSysVoteTypeWApi.GetObjByVoteTypeIdAsync)',
      strVoteTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByVoteTypeId';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVoteTypeId,
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
      const objSysVoteType = SysVoteType_GetObjFromJsonObj(returnObj);
      return objSysVoteType;
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param strVoteTypeId:所给的关键字
 * @returns 对象
 */
export async function SysVoteType_GetObjByVoteTypeIdCache(
  strVoteTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByVoteTypeIdCache';

  if (IsNullOrEmpty(strVoteTypeId) == true) {
    const strMsg = Format(
      '参数:[strVoteTypeId]不能为空!(In clsSysVoteTypeWApi.GetObjByVoteTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVoteTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVoteTypeId]的长度:[{0}]不正确!(clsSysVoteTypeWApi.GetObjByVoteTypeIdCache)',
      strVoteTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  try {
    const arrSysVoteTypeSel = arrSysVoteTypeObjLstCache.filter(
      (x) => x.voteTypeId == strVoteTypeId,
    );
    let objSysVoteType: clsSysVoteTypeEN;
    if (arrSysVoteTypeSel.length > 0) {
      objSysVoteType = arrSysVoteTypeSel[0];
      return objSysVoteType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSysVoteTypeConst = await SysVoteType_GetObjByVoteTypeIdAsync(strVoteTypeId);
        if (objSysVoteTypeConst != null) {
          SysVoteType_ReFreshThisCache();
          return objSysVoteTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVoteTypeId,
      sysVoteType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strVoteTypeId:所给的关键字
 * @returns 对象
 */
export async function SysVoteType_GetObjByVoteTypeIdlocalStorage(strVoteTypeId: string) {
  const strThisFuncName = 'GetObjByVoteTypeIdlocalStorage';

  if (IsNullOrEmpty(strVoteTypeId) == true) {
    const strMsg = Format(
      '参数:[strVoteTypeId]不能为空!(In clsSysVoteTypeWApi.GetObjByVoteTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVoteTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVoteTypeId]的长度:[{0}]不正确!(clsSysVoteTypeWApi.GetObjByVoteTypeIdlocalStorage)',
      strVoteTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSysVoteTypeEN._CurrTabName, strVoteTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSysVoteTypeCache: clsSysVoteTypeEN = JSON.parse(strTempObj);
    return objSysVoteTypeCache;
  }
  try {
    const objSysVoteType = await SysVoteType_GetObjByVoteTypeIdAsync(strVoteTypeId);
    if (objSysVoteType != null) {
      localStorage.setItem(strKey, JSON.stringify(objSysVoteType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSysVoteType;
    }
    return objSysVoteType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVoteTypeId,
      sysVoteType_ConstructorName,
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
 * @param objSysVoteType:所给的对象
 * @returns 对象
 */
export async function SysVoteType_UpdateObjInLstCache(objSysVoteType: clsSysVoteTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
    const obj = arrSysVoteTypeObjLstCache.find((x) => x.voteTypeId == objSysVoteType.voteTypeId);
    if (obj != null) {
      objSysVoteType.voteTypeId = obj.voteTypeId;
      ObjectAssign(obj, objSysVoteType);
    } else {
      arrSysVoteTypeObjLstCache.push(objSysVoteType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sysVoteType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strVoteTypeId:所给的关键字
 * @returns 对象
 */
export async function SysVoteType_GetNameByVoteTypeIdCache(strVoteTypeId: string) {
  if (IsNullOrEmpty(strVoteTypeId) == true) {
    const strMsg = Format(
      '参数:[strVoteTypeId]不能为空!(In clsSysVoteTypeWApi.GetNameByVoteTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVoteTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVoteTypeId]的长度:[{0}]不正确!(clsSysVoteTypeWApi.GetNameByVoteTypeIdCache)',
      strVoteTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  if (arrSysVoteTypeObjLstCache == null) return '';
  try {
    const arrSysVoteTypeSel = arrSysVoteTypeObjLstCache.filter(
      (x) => x.voteTypeId == strVoteTypeId,
    );
    let objSysVoteType: clsSysVoteTypeEN;
    if (arrSysVoteTypeSel.length > 0) {
      objSysVoteType = arrSysVoteTypeSel[0];
      return objSysVoteType.voteTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strVoteTypeId,
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
export async function SysVoteType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSysVoteTypeEN.con_VoteTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSysVoteTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSysVoteTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strVoteTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSysVoteType = await SysVoteType_GetObjByVoteTypeIdCache(strVoteTypeId);
  if (objSysVoteType == null) return '';
  if (objSysVoteType.GetFldValue(strOutFldName) == null) return '';
  return objSysVoteType.GetFldValue(strOutFldName).toString();
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
export function SysVoteType_SortFunDefa(a: clsSysVoteTypeEN, b: clsSysVoteTypeEN): number {
  return a.voteTypeId.localeCompare(b.voteTypeId);
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
export function SysVoteType_SortFunDefa2Fld(a: clsSysVoteTypeEN, b: clsSysVoteTypeEN): number {
  if (a.voteTypeName == b.voteTypeName) return a.voteTable.localeCompare(b.voteTable);
  else return a.voteTypeName.localeCompare(b.voteTypeName);
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
export function SysVoteType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSysVoteTypeEN.con_VoteTypeId:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          return a.voteTypeId.localeCompare(b.voteTypeId);
        };
      case clsSysVoteTypeEN.con_VoteTypeName:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (a.voteTypeName == null) return -1;
          if (b.voteTypeName == null) return 1;
          return a.voteTypeName.localeCompare(b.voteTypeName);
        };
      case clsSysVoteTypeEN.con_VoteTable:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (a.voteTable == null) return -1;
          if (b.voteTable == null) return 1;
          return a.voteTable.localeCompare(b.voteTable);
        };
      case clsSysVoteTypeEN.con_VoteTableId:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (a.voteTableId == null) return -1;
          if (b.voteTableId == null) return 1;
          return a.voteTableId.localeCompare(b.voteTableId);
        };
      case clsSysVoteTypeEN.con_Memo:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysVoteType]中不存在!(in ${sysVoteType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSysVoteTypeEN.con_VoteTypeId:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          return b.voteTypeId.localeCompare(a.voteTypeId);
        };
      case clsSysVoteTypeEN.con_VoteTypeName:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (b.voteTypeName == null) return -1;
          if (a.voteTypeName == null) return 1;
          return b.voteTypeName.localeCompare(a.voteTypeName);
        };
      case clsSysVoteTypeEN.con_VoteTable:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (b.voteTable == null) return -1;
          if (a.voteTable == null) return 1;
          return b.voteTable.localeCompare(a.voteTable);
        };
      case clsSysVoteTypeEN.con_VoteTableId:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (b.voteTableId == null) return -1;
          if (a.voteTableId == null) return 1;
          return b.voteTableId.localeCompare(a.voteTableId);
        };
      case clsSysVoteTypeEN.con_Memo:
        return (a: clsSysVoteTypeEN, b: clsSysVoteTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysVoteType]中不存在!(in ${sysVoteType_ConstructorName}.${strThisFuncName})`;
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
export async function SysVoteType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSysVoteTypeEN.con_VoteTypeId:
      return (obj: clsSysVoteTypeEN) => {
        return obj.voteTypeId === value;
      };
    case clsSysVoteTypeEN.con_VoteTypeName:
      return (obj: clsSysVoteTypeEN) => {
        return obj.voteTypeName === value;
      };
    case clsSysVoteTypeEN.con_VoteTable:
      return (obj: clsSysVoteTypeEN) => {
        return obj.voteTable === value;
      };
    case clsSysVoteTypeEN.con_VoteTableId:
      return (obj: clsSysVoteTypeEN) => {
        return obj.voteTableId === value;
      };
    case clsSysVoteTypeEN.con_Memo:
      return (obj: clsSysVoteTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SysVoteType]中不存在!(in ${sysVoteType_ConstructorName}.${strThisFuncName})`;
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
export async function SysVoteType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSysVoteTypeEN.con_VoteTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSysVoteType = await SysVoteType_GetObjLstCache();
  if (arrSysVoteType == null) return [];
  let arrSysVoteTypeSel = arrSysVoteType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSysVoteTypeSel.length == 0) return [];
  return arrSysVoteTypeSel.map((x) => x.voteTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysVoteType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSysVoteTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
      const objSysVoteType = SysVoteType_GetObjFromJsonObj(returnObj);
      return objSysVoteType;
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysVoteTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSysVoteTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysVoteTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSysVoteTypeExObjLstCache: Array<clsSysVoteTypeEN> = CacheHelper.Get(strKey);
    const arrSysVoteTypeObjLstT = SysVoteType_GetObjLstByJSONObjLst(arrSysVoteTypeExObjLstCache);
    return arrSysVoteTypeObjLstT;
  }
  try {
    const arrSysVoteTypeExObjLst = await SysVoteType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSysVoteTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysVoteTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSysVoteTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysVoteTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSysVoteTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysVoteTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysVoteTypeExObjLstCache: Array<clsSysVoteTypeEN> = JSON.parse(strTempObjLst);
    const arrSysVoteTypeObjLstT = SysVoteType_GetObjLstByJSONObjLst(arrSysVoteTypeExObjLstCache);
    return arrSysVoteTypeObjLstT;
  }
  try {
    const arrSysVoteTypeExObjLst = await SysVoteType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSysVoteTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysVoteTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSysVoteTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysVoteTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysVoteTypeObjLstCache: Array<clsSysVoteTypeEN> = JSON.parse(strTempObjLst);
    return arrSysVoteTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SysVoteType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSysVoteTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
          sysVoteType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysVoteType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysVoteTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSysVoteTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysVoteTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysVoteTypeExObjLstCache: Array<clsSysVoteTypeEN> = JSON.parse(strTempObjLst);
    const arrSysVoteTypeObjLstT = SysVoteType_GetObjLstByJSONObjLst(arrSysVoteTypeExObjLstCache);
    return arrSysVoteTypeObjLstT;
  }
  try {
    const arrSysVoteTypeExObjLst = await SysVoteType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSysVoteTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysVoteTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSysVoteTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysVoteTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysVoteTypeObjLstCache: Array<clsSysVoteTypeEN> = JSON.parse(strTempObjLst);
    return arrSysVoteTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysVoteType_GetObjLstCache(): Promise<Array<clsSysVoteTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSysVoteTypeObjLstCache;
  switch (clsSysVoteTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstClientCache();
      break;
    default:
      arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstClientCache();
      break;
  }
  return arrSysVoteTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysVoteType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSysVoteTypeObjLstCache;
  switch (clsSysVoteTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSysVoteTypeObjLstCache = null;
      break;
    default:
      arrSysVoteTypeObjLstCache = null;
      break;
  }
  return arrSysVoteTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrVoteTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysVoteType_GetSubObjLstCache(objSysVoteTypeCond: clsSysVoteTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  let arrSysVoteTypeSel = arrSysVoteTypeObjLstCache;
  if (objSysVoteTypeCond.sfFldComparisonOp == null || objSysVoteTypeCond.sfFldComparisonOp == '')
    return arrSysVoteTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysVoteTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSysVoteTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysVoteTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysVoteTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSysVoteTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysVoteTypeCond),
      sysVoteType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysVoteTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrVoteTypeId:关键字列表
 * @returns 对象列表
 **/
export async function SysVoteType_GetObjLstByVoteTypeIdLstAsync(
  arrVoteTypeId: Array<string>,
): Promise<Array<clsSysVoteTypeEN>> {
  const strThisFuncName = 'GetObjLstByVoteTypeIdLstAsync';
  const strAction = 'GetObjLstByVoteTypeIdLst';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVoteTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sysVoteType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysVoteType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param arrstrVoteTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function SysVoteType_GetObjLstByVoteTypeIdLstCache(arrVoteTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByVoteTypeIdLstCache';
  try {
    const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
    const arrSysVoteTypeSel = arrSysVoteTypeObjLstCache.filter(
      (x) => arrVoteTypeIdLst.indexOf(x.voteTypeId) > -1,
    );
    return arrSysVoteTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrVoteTypeIdLst.join(','),
      sysVoteType_ConstructorName,
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
export async function SysVoteType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSysVoteTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
          sysVoteType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysVoteType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSysVoteTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
          sysVoteType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysVoteType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysVoteTypeEN>();
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  if (arrSysVoteTypeObjLstCache.length == 0) return arrSysVoteTypeObjLstCache;
  let arrSysVoteTypeSel = arrSysVoteTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSysVoteTypeCond = new clsSysVoteTypeEN();
  ObjectAssign(objSysVoteTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSysVoteTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysVoteTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSysVoteTypeSel.length == 0) return arrSysVoteTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysVoteTypeSel = arrSysVoteTypeSel.sort(SysVoteType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSysVoteTypeSel = arrSysVoteTypeSel.sort(objPagerPara.sortFun);
    }
    arrSysVoteTypeSel = arrSysVoteTypeSel.slice(intStart, intEnd);
    return arrSysVoteTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysVoteType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysVoteTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SysVoteType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysVoteTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysVoteTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
          sysVoteType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysVoteType_GetObjLstByJSONObjLst(returnObjLst);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param strVoteTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function SysVoteType_DelRecordAsync(strVoteTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strVoteTypeId);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param arrVoteTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SysVoteType_DelSysVoteTypesAsync(
  arrVoteTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSysVoteTypesAsync';
  const strAction = 'DelSysVoteTypes';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVoteTypeId, config);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_DelSysVoteTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSysVoteTypesByCondAsync';
  const strAction = 'DelSysVoteTypesByCond';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objSysVoteTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysVoteType_AddNewRecordAsync(
  objSysVoteTypeEN: clsSysVoteTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSysVoteTypeEN.voteTypeId === null || objSysVoteTypeEN.voteTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSysVoteTypeEN);
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysVoteTypeEN, config);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objSysVoteTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysVoteType_AddNewRecordWithMaxIdAsync(
  objSysVoteTypeEN: clsSysVoteTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysVoteTypeEN, config);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objSysVoteTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SysVoteType_AddNewRecordWithReturnKeyAsync(
  objSysVoteTypeEN: clsSysVoteTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysVoteTypeEN, config);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objSysVoteTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SysVoteType_UpdateRecordAsync(
  objSysVoteTypeEN: clsSysVoteTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSysVoteTypeEN.sfUpdFldSetStr === undefined ||
    objSysVoteTypeEN.sfUpdFldSetStr === null ||
    objSysVoteTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysVoteTypeEN.voteTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysVoteTypeEN, config);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objSysVoteTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysVoteType_UpdateWithConditionAsync(
  objSysVoteTypeEN: clsSysVoteTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSysVoteTypeEN.sfUpdFldSetStr === undefined ||
    objSysVoteTypeEN.sfUpdFldSetStr === null ||
    objSysVoteTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysVoteTypeEN.voteTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);
  objSysVoteTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysVoteTypeEN, config);
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objstrVoteTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysVoteType_IsExistRecordCache(objSysVoteTypeCond: clsSysVoteTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  if (arrSysVoteTypeObjLstCache == null) return false;
  let arrSysVoteTypeSel = arrSysVoteTypeObjLstCache;
  if (objSysVoteTypeCond.sfFldComparisonOp == null || objSysVoteTypeCond.sfFldComparisonOp == '')
    return arrSysVoteTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysVoteTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSysVoteTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysVoteTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysVoteTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSysVoteTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSysVoteTypeCond),
      sysVoteType_ConstructorName,
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
export async function SysVoteType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param strVoteTypeId:所给的关键字
 * @returns 对象
 */
export async function SysVoteType_IsExistCache(strVoteTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  if (arrSysVoteTypeObjLstCache == null) return false;
  try {
    const arrSysVoteTypeSel = arrSysVoteTypeObjLstCache.filter(
      (x) => x.voteTypeId == strVoteTypeId,
    );
    if (arrSysVoteTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strVoteTypeId,
      sysVoteType_ConstructorName,
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
 * @param strVoteTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SysVoteType_IsExistAsync(strVoteTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVoteTypeId,
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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export async function SysVoteType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
 * @param objSysVoteTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function SysVoteType_GetRecCountByCondCache(objSysVoteTypeCond: clsSysVoteTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSysVoteTypeObjLstCache = await SysVoteType_GetObjLstCache();
  if (arrSysVoteTypeObjLstCache == null) return 0;
  let arrSysVoteTypeSel = arrSysVoteTypeObjLstCache;
  if (objSysVoteTypeCond.sfFldComparisonOp == null || objSysVoteTypeCond.sfFldComparisonOp == '')
    return arrSysVoteTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysVoteTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSysVoteTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysVoteTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysVoteTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysVoteTypeSel = arrSysVoteTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSysVoteTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysVoteTypeCond),
      sysVoteType_ConstructorName,
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
export async function SysVoteType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sysVoteType_Controller, strAction);

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
        sysVoteType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysVoteType_ConstructorName,
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
export function SysVoteType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SysVoteType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSysVoteTypeEN._CurrTabName;
  switch (clsSysVoteTypeEN.CacheModeId) {
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
export function SysVoteType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSysVoteTypeEN._CurrTabName;
    switch (clsSysVoteTypeEN.CacheModeId) {
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

 * @param strVoteTable:
*/
export async function SysVoteType_BindDdl_VoteTypeIdByVoteTableInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strVoteTable: string,
) {
  if (IsNullOrEmpty(strVoteTable) == true) {
    const strMsg = Format(
      '参数:[strVoteTable]不能为空！(In clsSysVoteTypeWApi.BindDdl_VoteTypeIdByVoteTableInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_VoteTypeIdByVoteTableInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VoteTypeIdByVoteTableInDivCache");
  let arrObjLstSel = await SysVoteType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.voteTable == strVoteTable);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSysVoteTypeEN.con_VoteTypeId,
    clsSysVoteTypeEN.con_VoteTypeName,
    '系统点赞类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysVoteType_CheckPropertyNew(pobjSysVoteTypeEN: clsSysVoteTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeId) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[点赞类型Id(voteTypeId)]的长度不能超过2(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTypeId)(clsSysVoteTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeName) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[点赞类型名称(voteTypeName)]的长度不能超过100(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTypeName)(clsSysVoteTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTable) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTable) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[点赞表(voteTable)]的长度不能超过100(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTable)(clsSysVoteTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTableId) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTableId) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[点赞表Id(voteTableId)]的长度不能超过50(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTableId)(clsSysVoteTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSysVoteTypeEN.memo) == false && GetStrLen(pobjSysVoteTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.memo)(clsSysVoteTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeId) == false &&
    undefined !== pobjSysVoteTypeEN.voteTypeId &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞类型Id(voteTypeId)]的值:[$(pobjSysVoteTypeEN.voteTypeId)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeName) == false &&
    undefined !== pobjSysVoteTypeEN.voteTypeName &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞类型名称(voteTypeName)]的值:[$(pobjSysVoteTypeEN.voteTypeName)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTable) == false &&
    undefined !== pobjSysVoteTypeEN.voteTable &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTable) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞表(voteTable)]的值:[$(pobjSysVoteTypeEN.voteTable)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTableId) == false &&
    undefined !== pobjSysVoteTypeEN.voteTableId &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTableId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[点赞表Id(voteTableId)]的值:[$(pobjSysVoteTypeEN.voteTableId)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.memo) == false &&
    undefined !== pobjSysVoteTypeEN.memo &&
    tzDataType.isString(pobjSysVoteTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysVoteTypeEN.memo)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysVoteType_CheckProperty4Update(pobjSysVoteTypeEN: clsSysVoteTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeId) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[点赞类型Id(voteTypeId)]的长度不能超过2(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTypeId)(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeName) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[点赞类型名称(voteTypeName)]的长度不能超过100(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTypeName)(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTable) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTable) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[点赞表(voteTable)]的长度不能超过100(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTable)(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTableId) == false &&
    GetStrLen(pobjSysVoteTypeEN.voteTableId) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[点赞表Id(voteTableId)]的长度不能超过50(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.voteTableId)(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSysVoteTypeEN.memo) == false && GetStrLen(pobjSysVoteTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 系统点赞类型(SysVoteType))!值:$(pobjSysVoteTypeEN.memo)(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeId) == false &&
    undefined !== pobjSysVoteTypeEN.voteTypeId &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞类型Id(voteTypeId)]的值:[$(pobjSysVoteTypeEN.voteTypeId)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeName) == false &&
    undefined !== pobjSysVoteTypeEN.voteTypeName &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞类型名称(voteTypeName)]的值:[$(pobjSysVoteTypeEN.voteTypeName)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTable) == false &&
    undefined !== pobjSysVoteTypeEN.voteTable &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTable) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞表(voteTable)]的值:[$(pobjSysVoteTypeEN.voteTable)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTableId) == false &&
    undefined !== pobjSysVoteTypeEN.voteTableId &&
    tzDataType.isString(pobjSysVoteTypeEN.voteTableId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[点赞表Id(voteTableId)]的值:[$(pobjSysVoteTypeEN.voteTableId)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.memo) == false &&
    undefined !== pobjSysVoteTypeEN.memo &&
    tzDataType.isString(pobjSysVoteTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysVoteTypeEN.memo)], 非法,应该为字符型(In 系统点赞类型(SysVoteType))!(clsSysVoteTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjSysVoteTypeEN.voteTypeId) === true ||
    pobjSysVoteTypeEN.voteTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[点赞类型Id]不能为空(In 系统点赞类型)!(clsSysVoteTypeBL:CheckProperty4Update)',
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
export function SysVoteType_GetJSONStrByObj(pobjSysVoteTypeEN: clsSysVoteTypeEN): string {
  pobjSysVoteTypeEN.sfUpdFldSetStr = pobjSysVoteTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSysVoteTypeEN);
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
export function SysVoteType_GetObjLstByJSONStr(strJSON: string): Array<clsSysVoteTypeEN> {
  let arrSysVoteTypeObjLst = new Array<clsSysVoteTypeEN>();
  if (strJSON === '') {
    return arrSysVoteTypeObjLst;
  }
  try {
    arrSysVoteTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSysVoteTypeObjLst;
  }
  return arrSysVoteTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysVoteTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SysVoteType_GetObjLstByJSONObjLst(
  arrSysVoteTypeObjLstS: Array<clsSysVoteTypeEN>,
): Array<clsSysVoteTypeEN> {
  const arrSysVoteTypeObjLst = new Array<clsSysVoteTypeEN>();
  for (const objInFor of arrSysVoteTypeObjLstS) {
    const obj1 = SysVoteType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSysVoteTypeObjLst.push(obj1);
  }
  return arrSysVoteTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysVoteType_GetObjByJSONStr(strJSON: string): clsSysVoteTypeEN {
  let pobjSysVoteTypeEN = new clsSysVoteTypeEN();
  if (strJSON === '') {
    return pobjSysVoteTypeEN;
  }
  try {
    pobjSysVoteTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSysVoteTypeEN;
  }
  return pobjSysVoteTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SysVoteType_GetCombineCondition(objSysVoteTypeCond: clsSysVoteTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSysVoteTypeCond.dicFldComparisonOp,
      clsSysVoteTypeEN.con_VoteTypeId,
    ) == true
  ) {
    const strComparisonOpVoteTypeId: string =
      objSysVoteTypeCond.dicFldComparisonOp[clsSysVoteTypeEN.con_VoteTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysVoteTypeEN.con_VoteTypeId,
      objSysVoteTypeCond.voteTypeId,
      strComparisonOpVoteTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysVoteTypeCond.dicFldComparisonOp,
      clsSysVoteTypeEN.con_VoteTypeName,
    ) == true
  ) {
    const strComparisonOpVoteTypeName: string =
      objSysVoteTypeCond.dicFldComparisonOp[clsSysVoteTypeEN.con_VoteTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysVoteTypeEN.con_VoteTypeName,
      objSysVoteTypeCond.voteTypeName,
      strComparisonOpVoteTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysVoteTypeCond.dicFldComparisonOp,
      clsSysVoteTypeEN.con_VoteTable,
    ) == true
  ) {
    const strComparisonOpVoteTable: string =
      objSysVoteTypeCond.dicFldComparisonOp[clsSysVoteTypeEN.con_VoteTable];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysVoteTypeEN.con_VoteTable,
      objSysVoteTypeCond.voteTable,
      strComparisonOpVoteTable,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysVoteTypeCond.dicFldComparisonOp,
      clsSysVoteTypeEN.con_VoteTableId,
    ) == true
  ) {
    const strComparisonOpVoteTableId: string =
      objSysVoteTypeCond.dicFldComparisonOp[clsSysVoteTypeEN.con_VoteTableId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysVoteTypeEN.con_VoteTableId,
      objSysVoteTypeCond.voteTableId,
      strComparisonOpVoteTableId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysVoteTypeCond.dicFldComparisonOp,
      clsSysVoteTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSysVoteTypeCond.dicFldComparisonOp[clsSysVoteTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysVoteTypeEN.con_Memo,
      objSysVoteTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysVoteTypeENS:源对象
 * @param objSysVoteTypeENT:目标对象
 */
export function SysVoteType_CopyObjTo(
  objSysVoteTypeENS: clsSysVoteTypeEN,
  objSysVoteTypeENT: clsSysVoteTypeEN,
): void {
  objSysVoteTypeENT.voteTypeId = objSysVoteTypeENS.voteTypeId; //点赞类型Id
  objSysVoteTypeENT.voteTypeName = objSysVoteTypeENS.voteTypeName; //点赞类型名称
  objSysVoteTypeENT.voteTable = objSysVoteTypeENS.voteTable; //点赞表
  objSysVoteTypeENT.voteTableId = objSysVoteTypeENS.voteTableId; //点赞表Id
  objSysVoteTypeENT.memo = objSysVoteTypeENS.memo; //备注
  objSysVoteTypeENT.sfUpdFldSetStr = objSysVoteTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysVoteTypeENS:源对象
 * @param objSysVoteTypeENT:目标对象
 */
export function SysVoteType_GetObjFromJsonObj(
  objSysVoteTypeENS: clsSysVoteTypeEN,
): clsSysVoteTypeEN {
  const objSysVoteTypeENT: clsSysVoteTypeEN = new clsSysVoteTypeEN();
  ObjectAssign(objSysVoteTypeENT, objSysVoteTypeENS);
  return objSysVoteTypeENT;
}
