/**
 * 类名:clsOperationTypeWApi
 * 表名:OperationType(01120538)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:01
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 操作类型(OperationType)
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
import { clsOperationTypeEN } from '@/ts/L0Entity/SysPara/clsOperationTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const operationType_Controller = 'OperationTypeApi';
export const operationType_ConstructorName = 'operationType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strOperationTypeId:关键字
 * @returns 对象
 **/
export async function OperationType_GetObjByOperationTypeIdAsync(
  strOperationTypeId: string,
): Promise<clsOperationTypeEN | null> {
  const strThisFuncName = 'GetObjByOperationTypeIdAsync';

  if (IsNullOrEmpty(strOperationTypeId) == true) {
    const strMsg = Format(
      '参数:[strOperationTypeId]不能为空!(In clsOperationTypeWApi.GetObjByOperationTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strOperationTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsOperationTypeWApi.GetObjByOperationTypeIdAsync)',
      strOperationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByOperationTypeId';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strOperationTypeId,
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
      const objOperationType = OperationType_GetObjFromJsonObj(returnObj);
      return objOperationType;
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
 */
export async function OperationType_GetObjByOperationTypeIdCache(
  strOperationTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByOperationTypeIdCache';

  if (IsNullOrEmpty(strOperationTypeId) == true) {
    const strMsg = Format(
      '参数:[strOperationTypeId]不能为空!(In clsOperationTypeWApi.GetObjByOperationTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strOperationTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsOperationTypeWApi.GetObjByOperationTypeIdCache)',
      strOperationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  try {
    const arrOperationTypeSel = arrOperationTypeObjLstCache.filter(
      (x) => x.operationTypeId == strOperationTypeId,
    );
    let objOperationType: clsOperationTypeEN;
    if (arrOperationTypeSel.length > 0) {
      objOperationType = arrOperationTypeSel[0];
      return objOperationType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objOperationTypeConst = await OperationType_GetObjByOperationTypeIdAsync(
          strOperationTypeId,
        );
        if (objOperationTypeConst != null) {
          OperationType_ReFreshThisCache();
          return objOperationTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strOperationTypeId,
      operationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
 */
export async function OperationType_GetObjByOperationTypeIdlocalStorage(
  strOperationTypeId: string,
) {
  const strThisFuncName = 'GetObjByOperationTypeIdlocalStorage';

  if (IsNullOrEmpty(strOperationTypeId) == true) {
    const strMsg = Format(
      '参数:[strOperationTypeId]不能为空!(In clsOperationTypeWApi.GetObjByOperationTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strOperationTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsOperationTypeWApi.GetObjByOperationTypeIdlocalStorage)',
      strOperationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsOperationTypeEN._CurrTabName, strOperationTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objOperationTypeCache: clsOperationTypeEN = JSON.parse(strTempObj);
    return objOperationTypeCache;
  }
  try {
    const objOperationType = await OperationType_GetObjByOperationTypeIdAsync(strOperationTypeId);
    if (objOperationType != null) {
      localStorage.setItem(strKey, JSON.stringify(objOperationType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objOperationType;
    }
    return objOperationType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strOperationTypeId,
      operationType_ConstructorName,
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
 * @param objOperationType:所给的对象
 * @returns 对象
 */
export async function OperationType_UpdateObjInLstCache(objOperationType: clsOperationTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
    const obj = arrOperationTypeObjLstCache.find(
      (x) => x.operationTypeId == objOperationType.operationTypeId,
    );
    if (obj != null) {
      objOperationType.operationTypeId = obj.operationTypeId;
      ObjectAssign(obj, objOperationType);
    } else {
      arrOperationTypeObjLstCache.push(objOperationType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      operationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
 */
export async function OperationType_GetNameByOperationTypeIdCache(strOperationTypeId: string) {
  if (IsNullOrEmpty(strOperationTypeId) == true) {
    const strMsg = Format(
      '参数:[strOperationTypeId]不能为空!(In clsOperationTypeWApi.GetNameByOperationTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strOperationTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strOperationTypeId]的长度:[{0}]不正确!(clsOperationTypeWApi.GetNameByOperationTypeIdCache)',
      strOperationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  if (arrOperationTypeObjLstCache == null) return '';
  try {
    const arrOperationTypeSel = arrOperationTypeObjLstCache.filter(
      (x) => x.operationTypeId == strOperationTypeId,
    );
    let objOperationType: clsOperationTypeEN;
    if (arrOperationTypeSel.length > 0) {
      objOperationType = arrOperationTypeSel[0];
      return objOperationType.operationTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strOperationTypeId,
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
export async function OperationType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsOperationTypeEN.con_OperationTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsOperationTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsOperationTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strOperationTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objOperationType = await OperationType_GetObjByOperationTypeIdCache(strOperationTypeId);
  if (objOperationType == null) return '';
  if (objOperationType.GetFldValue(strOutFldName) == null) return '';
  return objOperationType.GetFldValue(strOutFldName).toString();
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
export function OperationType_SortFunDefa(a: clsOperationTypeEN, b: clsOperationTypeEN): number {
  return a.operationTypeId.localeCompare(b.operationTypeId);
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
export function OperationType_SortFunDefa2Fld(
  a: clsOperationTypeEN,
  b: clsOperationTypeEN,
): number {
  if (a.operationTypeName == b.operationTypeName) return a.updDate.localeCompare(b.updDate);
  else return a.operationTypeName.localeCompare(b.operationTypeName);
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
export function OperationType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsOperationTypeEN.con_OperationTypeId:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          return a.operationTypeId.localeCompare(b.operationTypeId);
        };
      case clsOperationTypeEN.con_OperationTypeName:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          return a.operationTypeName.localeCompare(b.operationTypeName);
        };
      case clsOperationTypeEN.con_UpdDate:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsOperationTypeEN.con_UpdUserId:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsOperationTypeEN.con_Memo:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[OperationType]中不存在!(in ${operationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsOperationTypeEN.con_OperationTypeId:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          return b.operationTypeId.localeCompare(a.operationTypeId);
        };
      case clsOperationTypeEN.con_OperationTypeName:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          return b.operationTypeName.localeCompare(a.operationTypeName);
        };
      case clsOperationTypeEN.con_UpdDate:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsOperationTypeEN.con_UpdUserId:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsOperationTypeEN.con_Memo:
        return (a: clsOperationTypeEN, b: clsOperationTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[OperationType]中不存在!(in ${operationType_ConstructorName}.${strThisFuncName})`;
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
export async function OperationType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsOperationTypeEN.con_OperationTypeId:
      return (obj: clsOperationTypeEN) => {
        return obj.operationTypeId === value;
      };
    case clsOperationTypeEN.con_OperationTypeName:
      return (obj: clsOperationTypeEN) => {
        return obj.operationTypeName === value;
      };
    case clsOperationTypeEN.con_UpdDate:
      return (obj: clsOperationTypeEN) => {
        return obj.updDate === value;
      };
    case clsOperationTypeEN.con_UpdUserId:
      return (obj: clsOperationTypeEN) => {
        return obj.updUserId === value;
      };
    case clsOperationTypeEN.con_Memo:
      return (obj: clsOperationTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[OperationType]中不存在!(in ${operationType_ConstructorName}.${strThisFuncName})`;
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
export async function OperationType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsOperationTypeEN.con_OperationTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrOperationType = await OperationType_GetObjLstCache();
  if (arrOperationType == null) return [];
  let arrOperationTypeSel = arrOperationType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrOperationTypeSel = arrOperationTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrOperationTypeSel = arrOperationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrOperationTypeSel.length == 0) return [];
  return arrOperationTypeSel.map((x) => x.operationTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function OperationType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsOperationTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
      const objOperationType = OperationType_GetObjFromJsonObj(returnObj);
      return objOperationType;
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsOperationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsOperationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsOperationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrOperationTypeExObjLstCache: Array<clsOperationTypeEN> = CacheHelper.Get(strKey);
    const arrOperationTypeObjLstT = OperationType_GetObjLstByJSONObjLst(
      arrOperationTypeExObjLstCache,
    );
    return arrOperationTypeObjLstT;
  }
  try {
    const arrOperationTypeExObjLst = await OperationType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrOperationTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrOperationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrOperationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      operationType_ConstructorName,
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
export async function OperationType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsOperationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsOperationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsOperationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrOperationTypeExObjLstCache: Array<clsOperationTypeEN> = JSON.parse(strTempObjLst);
    const arrOperationTypeObjLstT = OperationType_GetObjLstByJSONObjLst(
      arrOperationTypeExObjLstCache,
    );
    return arrOperationTypeObjLstT;
  }
  try {
    const arrOperationTypeExObjLst = await OperationType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrOperationTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrOperationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrOperationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      operationType_ConstructorName,
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
export async function OperationType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsOperationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrOperationTypeObjLstCache: Array<clsOperationTypeEN> = JSON.parse(strTempObjLst);
    return arrOperationTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function OperationType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
          operationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsOperationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsOperationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsOperationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrOperationTypeExObjLstCache: Array<clsOperationTypeEN> = JSON.parse(strTempObjLst);
    const arrOperationTypeObjLstT = OperationType_GetObjLstByJSONObjLst(
      arrOperationTypeExObjLstCache,
    );
    return arrOperationTypeObjLstT;
  }
  try {
    const arrOperationTypeExObjLst = await OperationType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrOperationTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrOperationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrOperationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      operationType_ConstructorName,
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
export async function OperationType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsOperationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrOperationTypeObjLstCache: Array<clsOperationTypeEN> = JSON.parse(strTempObjLst);
    return arrOperationTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function OperationType_GetObjLstCache(): Promise<Array<clsOperationTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrOperationTypeObjLstCache;
  switch (clsOperationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrOperationTypeObjLstCache = await OperationType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrOperationTypeObjLstCache = await OperationType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrOperationTypeObjLstCache = await OperationType_GetObjLstClientCache();
      break;
    default:
      arrOperationTypeObjLstCache = await OperationType_GetObjLstClientCache();
      break;
  }
  return arrOperationTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function OperationType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrOperationTypeObjLstCache;
  switch (clsOperationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrOperationTypeObjLstCache = await OperationType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrOperationTypeObjLstCache = await OperationType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrOperationTypeObjLstCache = null;
      break;
    default:
      arrOperationTypeObjLstCache = null;
      break;
  }
  return arrOperationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrOperationTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function OperationType_GetSubObjLstCache(objOperationTypeCond: clsOperationTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  let arrOperationTypeSel = arrOperationTypeObjLstCache;
  if (
    objOperationTypeCond.sfFldComparisonOp == null ||
    objOperationTypeCond.sfFldComparisonOp == ''
  )
    return arrOperationTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objOperationTypeCond.sfFldComparisonOp,
  );
  //console.log("clsOperationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objOperationTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrOperationTypeSel = arrOperationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objOperationTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrOperationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objOperationTypeCond),
      operationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsOperationTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrOperationTypeId:关键字列表
 * @returns 对象列表
 **/
export async function OperationType_GetObjLstByOperationTypeIdLstAsync(
  arrOperationTypeId: Array<string>,
): Promise<Array<clsOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstByOperationTypeIdLstAsync';
  const strAction = 'GetObjLstByOperationTypeIdLst';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrOperationTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          operationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param arrstrOperationTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function OperationType_GetObjLstByOperationTypeIdLstCache(
  arrOperationTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByOperationTypeIdLstCache';
  try {
    const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
    const arrOperationTypeSel = arrOperationTypeObjLstCache.filter(
      (x) => arrOperationTypeIdLst.indexOf(x.operationTypeId) > -1,
    );
    return arrOperationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrOperationTypeIdLst.join(','),
      operationType_ConstructorName,
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
export async function OperationType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsOperationTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
          operationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
          operationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsOperationTypeEN>();
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  if (arrOperationTypeObjLstCache.length == 0) return arrOperationTypeObjLstCache;
  let arrOperationTypeSel = arrOperationTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objOperationTypeCond = new clsOperationTypeEN();
  ObjectAssign(objOperationTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsOperationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrOperationTypeSel = arrOperationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objOperationTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrOperationTypeSel.length == 0) return arrOperationTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrOperationTypeSel = arrOperationTypeSel.sort(
        OperationType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrOperationTypeSel = arrOperationTypeSel.sort(objPagerPara.sortFun);
    }
    arrOperationTypeSel = arrOperationTypeSel.slice(intStart, intEnd);
    return arrOperationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      operationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsOperationTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function OperationType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsOperationTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsOperationTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
          operationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = OperationType_GetObjLstByJSONObjLst(returnObjLst);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param strOperationTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function OperationType_DelRecordAsync(strOperationTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(operationType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strOperationTypeId);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param arrOperationTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function OperationType_DelOperationTypesAsync(
  arrOperationTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelOperationTypesAsync';
  const strAction = 'DelOperationTypes';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrOperationTypeId, config);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_DelOperationTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelOperationTypesByCondAsync';
  const strAction = 'DelOperationTypesByCond';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objOperationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function OperationType_AddNewRecordAsync(
  objOperationTypeEN: clsOperationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objOperationTypeEN);
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOperationTypeEN, config);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objOperationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function OperationType_AddNewRecordWithMaxIdAsync(
  objOperationTypeEN: clsOperationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOperationTypeEN, config);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objOperationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function OperationType_AddNewRecordWithReturnKeyAsync(
  objOperationTypeEN: clsOperationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOperationTypeEN, config);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objOperationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function OperationType_UpdateRecordAsync(
  objOperationTypeEN: clsOperationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objOperationTypeEN.sfUpdFldSetStr === undefined ||
    objOperationTypeEN.sfUpdFldSetStr === null ||
    objOperationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objOperationTypeEN.operationTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOperationTypeEN, config);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objOperationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function OperationType_UpdateWithConditionAsync(
  objOperationTypeEN: clsOperationTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objOperationTypeEN.sfUpdFldSetStr === undefined ||
    objOperationTypeEN.sfUpdFldSetStr === null ||
    objOperationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objOperationTypeEN.operationTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);
  objOperationTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOperationTypeEN, config);
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objstrOperationTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function OperationType_IsExistRecordCache(objOperationTypeCond: clsOperationTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  if (arrOperationTypeObjLstCache == null) return false;
  let arrOperationTypeSel = arrOperationTypeObjLstCache;
  if (
    objOperationTypeCond.sfFldComparisonOp == null ||
    objOperationTypeCond.sfFldComparisonOp == ''
  )
    return arrOperationTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objOperationTypeCond.sfFldComparisonOp,
  );
  //console.log("clsOperationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objOperationTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objOperationTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrOperationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objOperationTypeCond),
      operationType_ConstructorName,
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
export async function OperationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param strOperationTypeId:所给的关键字
 * @returns 对象
 */
export async function OperationType_IsExistCache(strOperationTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  if (arrOperationTypeObjLstCache == null) return false;
  try {
    const arrOperationTypeSel = arrOperationTypeObjLstCache.filter(
      (x) => x.operationTypeId == strOperationTypeId,
    );
    if (arrOperationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strOperationTypeId,
      operationType_ConstructorName,
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
 * @param strOperationTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function OperationType_IsExistAsync(strOperationTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strOperationTypeId,
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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
 * @param objOperationTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function OperationType_GetRecCountByCondCache(
  objOperationTypeCond: clsOperationTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrOperationTypeObjLstCache = await OperationType_GetObjLstCache();
  if (arrOperationTypeObjLstCache == null) return 0;
  let arrOperationTypeSel = arrOperationTypeObjLstCache;
  if (
    objOperationTypeCond.sfFldComparisonOp == null ||
    objOperationTypeCond.sfFldComparisonOp == ''
  )
    return arrOperationTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objOperationTypeCond.sfFldComparisonOp,
  );
  //console.log("clsOperationTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objOperationTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrOperationTypeSel = arrOperationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objOperationTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrOperationTypeSel = arrOperationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrOperationTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objOperationTypeCond),
      operationType_ConstructorName,
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
export async function OperationType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export async function OperationType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(operationType_Controller, strAction);

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
        operationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        operationType_ConstructorName,
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
export function OperationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function OperationType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsOperationTypeEN._CurrTabName;
  switch (clsOperationTypeEN.CacheModeId) {
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
export function OperationType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsOperationTypeEN._CurrTabName;
    switch (clsOperationTypeEN.CacheModeId) {
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
export async function OperationType_BindDdl_OperationTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_OperationTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_OperationTypeIdInDivCache");
  const arrObjLstSel = await OperationType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsOperationTypeEN.con_OperationTypeId,
    clsOperationTypeEN.con_OperationTypeName,
    '操作类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function OperationType_CheckPropertyNew(pobjOperationTypeEN: clsOperationTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjOperationTypeEN.operationTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[操作类型名]不能为空(In 操作类型)!(clsOperationTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeId) == false &&
    GetStrLen(pobjOperationTypeEN.operationTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.operationTypeId)(clsOperationTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeName) == false &&
    GetStrLen(pobjOperationTypeEN.operationTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[操作类型名(operationTypeName)]的长度不能超过50(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.operationTypeName)(clsOperationTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updDate) == false &&
    GetStrLen(pobjOperationTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.updDate)(clsOperationTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updUserId) == false &&
    GetStrLen(pobjOperationTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.updUserId)(clsOperationTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.memo) == false &&
    GetStrLen(pobjOperationTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.memo)(clsOperationTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeId) == false &&
    undefined !== pobjOperationTypeEN.operationTypeId &&
    tzDataType.isString(pobjOperationTypeEN.operationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作类型ID(operationTypeId)]的值:[$(pobjOperationTypeEN.operationTypeId)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeName) == false &&
    undefined !== pobjOperationTypeEN.operationTypeName &&
    tzDataType.isString(pobjOperationTypeEN.operationTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作类型名(operationTypeName)]的值:[$(pobjOperationTypeEN.operationTypeName)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updDate) == false &&
    undefined !== pobjOperationTypeEN.updDate &&
    tzDataType.isString(pobjOperationTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjOperationTypeEN.updDate)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updUserId) == false &&
    undefined !== pobjOperationTypeEN.updUserId &&
    tzDataType.isString(pobjOperationTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjOperationTypeEN.updUserId)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.memo) == false &&
    undefined !== pobjOperationTypeEN.memo &&
    tzDataType.isString(pobjOperationTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjOperationTypeEN.memo)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function OperationType_CheckProperty4Update(pobjOperationTypeEN: clsOperationTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeId) == false &&
    GetStrLen(pobjOperationTypeEN.operationTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[操作类型ID(operationTypeId)]的长度不能超过4(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.operationTypeId)(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeName) == false &&
    GetStrLen(pobjOperationTypeEN.operationTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[操作类型名(operationTypeName)]的长度不能超过50(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.operationTypeName)(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updDate) == false &&
    GetStrLen(pobjOperationTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.updDate)(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updUserId) == false &&
    GetStrLen(pobjOperationTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.updUserId)(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.memo) == false &&
    GetStrLen(pobjOperationTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 操作类型(OperationType))!值:$(pobjOperationTypeEN.memo)(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeId) == false &&
    undefined !== pobjOperationTypeEN.operationTypeId &&
    tzDataType.isString(pobjOperationTypeEN.operationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作类型ID(operationTypeId)]的值:[$(pobjOperationTypeEN.operationTypeId)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.operationTypeName) == false &&
    undefined !== pobjOperationTypeEN.operationTypeName &&
    tzDataType.isString(pobjOperationTypeEN.operationTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作类型名(operationTypeName)]的值:[$(pobjOperationTypeEN.operationTypeName)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updDate) == false &&
    undefined !== pobjOperationTypeEN.updDate &&
    tzDataType.isString(pobjOperationTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjOperationTypeEN.updDate)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.updUserId) == false &&
    undefined !== pobjOperationTypeEN.updUserId &&
    tzDataType.isString(pobjOperationTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjOperationTypeEN.updUserId)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjOperationTypeEN.memo) == false &&
    undefined !== pobjOperationTypeEN.memo &&
    tzDataType.isString(pobjOperationTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjOperationTypeEN.memo)], 非法,应该为字符型(In 操作类型(OperationType))!(clsOperationTypeBL:CheckProperty4Update)',
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
export function OperationType_GetJSONStrByObj(pobjOperationTypeEN: clsOperationTypeEN): string {
  pobjOperationTypeEN.sfUpdFldSetStr = pobjOperationTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjOperationTypeEN);
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
export function OperationType_GetObjLstByJSONStr(strJSON: string): Array<clsOperationTypeEN> {
  let arrOperationTypeObjLst = new Array<clsOperationTypeEN>();
  if (strJSON === '') {
    return arrOperationTypeObjLst;
  }
  try {
    arrOperationTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrOperationTypeObjLst;
  }
  return arrOperationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrOperationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function OperationType_GetObjLstByJSONObjLst(
  arrOperationTypeObjLstS: Array<clsOperationTypeEN>,
): Array<clsOperationTypeEN> {
  const arrOperationTypeObjLst = new Array<clsOperationTypeEN>();
  for (const objInFor of arrOperationTypeObjLstS) {
    const obj1 = OperationType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrOperationTypeObjLst.push(obj1);
  }
  return arrOperationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function OperationType_GetObjByJSONStr(strJSON: string): clsOperationTypeEN {
  let pobjOperationTypeEN = new clsOperationTypeEN();
  if (strJSON === '') {
    return pobjOperationTypeEN;
  }
  try {
    pobjOperationTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjOperationTypeEN;
  }
  return pobjOperationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function OperationType_GetCombineCondition(
  objOperationTypeCond: clsOperationTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objOperationTypeCond.dicFldComparisonOp,
      clsOperationTypeEN.con_OperationTypeId,
    ) == true
  ) {
    const strComparisonOpOperationTypeId: string =
      objOperationTypeCond.dicFldComparisonOp[clsOperationTypeEN.con_OperationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsOperationTypeEN.con_OperationTypeId,
      objOperationTypeCond.operationTypeId,
      strComparisonOpOperationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objOperationTypeCond.dicFldComparisonOp,
      clsOperationTypeEN.con_OperationTypeName,
    ) == true
  ) {
    const strComparisonOpOperationTypeName: string =
      objOperationTypeCond.dicFldComparisonOp[clsOperationTypeEN.con_OperationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsOperationTypeEN.con_OperationTypeName,
      objOperationTypeCond.operationTypeName,
      strComparisonOpOperationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objOperationTypeCond.dicFldComparisonOp,
      clsOperationTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objOperationTypeCond.dicFldComparisonOp[clsOperationTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsOperationTypeEN.con_UpdDate,
      objOperationTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objOperationTypeCond.dicFldComparisonOp,
      clsOperationTypeEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objOperationTypeCond.dicFldComparisonOp[clsOperationTypeEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsOperationTypeEN.con_UpdUserId,
      objOperationTypeCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objOperationTypeCond.dicFldComparisonOp,
      clsOperationTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objOperationTypeCond.dicFldComparisonOp[clsOperationTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsOperationTypeEN.con_Memo,
      objOperationTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--OperationType(操作类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strOperationTypeId: 操作类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function OperationType_GetUniCondStr(objOperationTypeEN: clsOperationTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and OperationTypeId = '{0}'", objOperationTypeEN.operationTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--OperationType(操作类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strOperationTypeId: 操作类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function OperationType_GetUniCondStr4Update(objOperationTypeEN: clsOperationTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and OperationTypeId <> '{0}'", objOperationTypeEN.operationTypeId);
  strWhereCond += Format(" and OperationTypeId = '{0}'", objOperationTypeEN.operationTypeId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objOperationTypeENS:源对象
 * @param objOperationTypeENT:目标对象
 */
export function OperationType_CopyObjTo(
  objOperationTypeENS: clsOperationTypeEN,
  objOperationTypeENT: clsOperationTypeEN,
): void {
  objOperationTypeENT.operationTypeId = objOperationTypeENS.operationTypeId; //操作类型ID
  objOperationTypeENT.operationTypeName = objOperationTypeENS.operationTypeName; //操作类型名
  objOperationTypeENT.updDate = objOperationTypeENS.updDate; //修改日期
  objOperationTypeENT.updUserId = objOperationTypeENS.updUserId; //修改用户Id
  objOperationTypeENT.memo = objOperationTypeENS.memo; //备注
  objOperationTypeENT.sfUpdFldSetStr = objOperationTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objOperationTypeENS:源对象
 * @param objOperationTypeENT:目标对象
 */
export function OperationType_GetObjFromJsonObj(
  objOperationTypeENS: clsOperationTypeEN,
): clsOperationTypeEN {
  const objOperationTypeENT: clsOperationTypeEN = new clsOperationTypeEN();
  ObjectAssign(objOperationTypeENT, objOperationTypeENS);
  return objOperationTypeENT;
}
