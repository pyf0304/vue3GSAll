/**
 * 类名:clsgs_TotalDataTypeWApi
 * 表名:gs_TotalDataType(01120685)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 总数据类型表(gs_TotalDataType)
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
import { clsgs_TotalDataTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_TotalDataType_Controller = 'gs_TotalDataTypeApi';
export const gs_TotalDataType_ConstructorName = 'gs_TotalDataType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTotalDataTypeId:关键字
 * @returns 对象
 **/
export async function gs_TotalDataType_GetObjByTotalDataTypeIdAsync(
  strTotalDataTypeId: string,
): Promise<clsgs_TotalDataTypeEN | null> {
  const strThisFuncName = 'GetObjByTotalDataTypeIdAsync';

  if (IsNullOrEmpty(strTotalDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataTypeId]不能为空!(In clsgs_TotalDataTypeWApi.GetObjByTotalDataTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataTypeId]的长度:[{0}]不正确!(clsgs_TotalDataTypeWApi.GetObjByTotalDataTypeIdAsync)',
      strTotalDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTotalDataTypeId';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTotalDataTypeId,
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
      const objgs_TotalDataType = gs_TotalDataType_GetObjFromJsonObj(returnObj);
      return objgs_TotalDataType;
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param strTotalDataTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_TotalDataType_GetObjByTotalDataTypeIdCache(
  strTotalDataTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTotalDataTypeIdCache';

  if (IsNullOrEmpty(strTotalDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataTypeId]不能为空!(In clsgs_TotalDataTypeWApi.GetObjByTotalDataTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataTypeId]的长度:[{0}]不正确!(clsgs_TotalDataTypeWApi.GetObjByTotalDataTypeIdCache)',
      strTotalDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  try {
    const arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache.filter(
      (x) => x.totalDataTypeId == strTotalDataTypeId,
    );
    let objgs_TotalDataType: clsgs_TotalDataTypeEN;
    if (arrgs_TotalDataTypeSel.length > 0) {
      objgs_TotalDataType = arrgs_TotalDataTypeSel[0];
      return objgs_TotalDataType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_TotalDataTypeConst = await gs_TotalDataType_GetObjByTotalDataTypeIdAsync(
          strTotalDataTypeId,
        );
        if (objgs_TotalDataTypeConst != null) {
          gs_TotalDataType_ReFreshThisCache();
          return objgs_TotalDataTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTotalDataTypeId,
      gs_TotalDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTotalDataTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_TotalDataType_GetObjByTotalDataTypeIdlocalStorage(
  strTotalDataTypeId: string,
) {
  const strThisFuncName = 'GetObjByTotalDataTypeIdlocalStorage';

  if (IsNullOrEmpty(strTotalDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataTypeId]不能为空!(In clsgs_TotalDataTypeWApi.GetObjByTotalDataTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataTypeId]的长度:[{0}]不正确!(clsgs_TotalDataTypeWApi.GetObjByTotalDataTypeIdlocalStorage)',
      strTotalDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_TotalDataTypeEN._CurrTabName, strTotalDataTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_TotalDataTypeCache: clsgs_TotalDataTypeEN = JSON.parse(strTempObj);
    return objgs_TotalDataTypeCache;
  }
  try {
    const objgs_TotalDataType = await gs_TotalDataType_GetObjByTotalDataTypeIdAsync(
      strTotalDataTypeId,
    );
    if (objgs_TotalDataType != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_TotalDataType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_TotalDataType;
    }
    return objgs_TotalDataType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTotalDataTypeId,
      gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataType:所给的对象
 * @returns 对象
 */
export async function gs_TotalDataType_UpdateObjInLstCache(
  objgs_TotalDataType: clsgs_TotalDataTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
    const obj = arrgs_TotalDataTypeObjLstCache.find(
      (x) => x.totalDataTypeId == objgs_TotalDataType.totalDataTypeId,
    );
    if (obj != null) {
      objgs_TotalDataType.totalDataTypeId = obj.totalDataTypeId;
      ObjectAssign(obj, objgs_TotalDataType);
    } else {
      arrgs_TotalDataTypeObjLstCache.push(objgs_TotalDataType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_TotalDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTotalDataTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_TotalDataType_GetNameByTotalDataTypeIdCache(strTotalDataTypeId: string) {
  if (IsNullOrEmpty(strTotalDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataTypeId]不能为空!(In clsgs_TotalDataTypeWApi.GetNameByTotalDataTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataTypeId]的长度:[{0}]不正确!(clsgs_TotalDataTypeWApi.GetNameByTotalDataTypeIdCache)',
      strTotalDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  if (arrgs_TotalDataTypeObjLstCache == null) return '';
  try {
    const arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache.filter(
      (x) => x.totalDataTypeId == strTotalDataTypeId,
    );
    let objgs_TotalDataType: clsgs_TotalDataTypeEN;
    if (arrgs_TotalDataTypeSel.length > 0) {
      objgs_TotalDataType = arrgs_TotalDataTypeSel[0];
      return objgs_TotalDataType.totalDataTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strTotalDataTypeId,
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
export async function gs_TotalDataType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_TotalDataTypeEN.con_TotalDataTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_TotalDataTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_TotalDataTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTotalDataTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_TotalDataType = await gs_TotalDataType_GetObjByTotalDataTypeIdCache(
    strTotalDataTypeId,
  );
  if (objgs_TotalDataType == null) return '';
  if (objgs_TotalDataType.GetFldValue(strOutFldName) == null) return '';
  return objgs_TotalDataType.GetFldValue(strOutFldName).toString();
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
export function gs_TotalDataType_SortFunDefa(
  a: clsgs_TotalDataTypeEN,
  b: clsgs_TotalDataTypeEN,
): number {
  return a.totalDataTypeId.localeCompare(b.totalDataTypeId);
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
export function gs_TotalDataType_SortFunDefa2Fld(
  a: clsgs_TotalDataTypeEN,
  b: clsgs_TotalDataTypeEN,
): number {
  if (a.totalDataTypeName == b.totalDataTypeName) return a.dataTable.localeCompare(b.dataTable);
  else return a.totalDataTypeName.localeCompare(b.totalDataTypeName);
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
export function gs_TotalDataType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_TotalDataTypeEN.con_TotalDataTypeId:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          return a.totalDataTypeId.localeCompare(b.totalDataTypeId);
        };
      case clsgs_TotalDataTypeEN.con_TotalDataTypeName:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (a.totalDataTypeName == null) return -1;
          if (b.totalDataTypeName == null) return 1;
          return a.totalDataTypeName.localeCompare(b.totalDataTypeName);
        };
      case clsgs_TotalDataTypeEN.con_DataTable:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (a.dataTable == null) return -1;
          if (b.dataTable == null) return 1;
          return a.dataTable.localeCompare(b.dataTable);
        };
      case clsgs_TotalDataTypeEN.con_DataTableId:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (a.dataTableId == null) return -1;
          if (b.dataTableId == null) return 1;
          return a.dataTableId.localeCompare(b.dataTableId);
        };
      case clsgs_TotalDataTypeEN.con_Memo:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsgs_TotalDataTypeEN.con_OnlyId:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (a.onlyId == null) return -1;
          if (b.onlyId == null) return 1;
          return a.onlyId.localeCompare(b.onlyId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_TotalDataType]中不存在!(in ${gs_TotalDataType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_TotalDataTypeEN.con_TotalDataTypeId:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          return b.totalDataTypeId.localeCompare(a.totalDataTypeId);
        };
      case clsgs_TotalDataTypeEN.con_TotalDataTypeName:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (b.totalDataTypeName == null) return -1;
          if (a.totalDataTypeName == null) return 1;
          return b.totalDataTypeName.localeCompare(a.totalDataTypeName);
        };
      case clsgs_TotalDataTypeEN.con_DataTable:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (b.dataTable == null) return -1;
          if (a.dataTable == null) return 1;
          return b.dataTable.localeCompare(a.dataTable);
        };
      case clsgs_TotalDataTypeEN.con_DataTableId:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (b.dataTableId == null) return -1;
          if (a.dataTableId == null) return 1;
          return b.dataTableId.localeCompare(a.dataTableId);
        };
      case clsgs_TotalDataTypeEN.con_Memo:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsgs_TotalDataTypeEN.con_OnlyId:
        return (a: clsgs_TotalDataTypeEN, b: clsgs_TotalDataTypeEN) => {
          if (b.onlyId == null) return -1;
          if (a.onlyId == null) return 1;
          return b.onlyId.localeCompare(a.onlyId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_TotalDataType]中不存在!(in ${gs_TotalDataType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_TotalDataType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_TotalDataTypeEN.con_TotalDataTypeId:
      return (obj: clsgs_TotalDataTypeEN) => {
        return obj.totalDataTypeId === value;
      };
    case clsgs_TotalDataTypeEN.con_TotalDataTypeName:
      return (obj: clsgs_TotalDataTypeEN) => {
        return obj.totalDataTypeName === value;
      };
    case clsgs_TotalDataTypeEN.con_DataTable:
      return (obj: clsgs_TotalDataTypeEN) => {
        return obj.dataTable === value;
      };
    case clsgs_TotalDataTypeEN.con_DataTableId:
      return (obj: clsgs_TotalDataTypeEN) => {
        return obj.dataTableId === value;
      };
    case clsgs_TotalDataTypeEN.con_Memo:
      return (obj: clsgs_TotalDataTypeEN) => {
        return obj.memo === value;
      };
    case clsgs_TotalDataTypeEN.con_OnlyId:
      return (obj: clsgs_TotalDataTypeEN) => {
        return obj.onlyId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_TotalDataType]中不存在!(in ${gs_TotalDataType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_TotalDataType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_TotalDataTypeEN.con_TotalDataTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_TotalDataType = await gs_TotalDataType_GetObjLstCache();
  if (arrgs_TotalDataType == null) return [];
  let arrgs_TotalDataTypeSel = arrgs_TotalDataType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_TotalDataTypeSel.length == 0) return [];
  return arrgs_TotalDataTypeSel.map((x) => x.totalDataTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_TotalDataType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_TotalDataTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
      const objgs_TotalDataType = gs_TotalDataType_GetObjFromJsonObj(returnObj);
      return objgs_TotalDataType;
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TotalDataTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TotalDataTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TotalDataTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_TotalDataTypeExObjLstCache: Array<clsgs_TotalDataTypeEN> = CacheHelper.Get(strKey);
    const arrgs_TotalDataTypeObjLstT = gs_TotalDataType_GetObjLstByJSONObjLst(
      arrgs_TotalDataTypeExObjLstCache,
    );
    return arrgs_TotalDataTypeObjLstT;
  }
  try {
    const arrgs_TotalDataTypeExObjLst = await gs_TotalDataType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_TotalDataTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TotalDataTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TotalDataTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TotalDataTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TotalDataTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TotalDataTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_TotalDataTypeExObjLstCache: Array<clsgs_TotalDataTypeEN> =
      JSON.parse(strTempObjLst);
    const arrgs_TotalDataTypeObjLstT = gs_TotalDataType_GetObjLstByJSONObjLst(
      arrgs_TotalDataTypeExObjLstCache,
    );
    return arrgs_TotalDataTypeObjLstT;
  }
  try {
    const arrgs_TotalDataTypeExObjLst = await gs_TotalDataType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_TotalDataTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TotalDataTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TotalDataTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_TotalDataTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_TotalDataTypeObjLstCache: Array<clsgs_TotalDataTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_TotalDataTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_TotalDataType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_TotalDataTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
          gs_TotalDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TotalDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TotalDataTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TotalDataTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TotalDataTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_TotalDataTypeExObjLstCache: Array<clsgs_TotalDataTypeEN> =
      JSON.parse(strTempObjLst);
    const arrgs_TotalDataTypeObjLstT = gs_TotalDataType_GetObjLstByJSONObjLst(
      arrgs_TotalDataTypeExObjLstCache,
    );
    return arrgs_TotalDataTypeObjLstT;
  }
  try {
    const arrgs_TotalDataTypeExObjLst = await gs_TotalDataType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_TotalDataTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TotalDataTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TotalDataTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_TotalDataTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_TotalDataTypeObjLstCache: Array<clsgs_TotalDataTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_TotalDataTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_TotalDataType_GetObjLstCache(): Promise<Array<clsgs_TotalDataTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_TotalDataTypeObjLstCache;
  switch (clsgs_TotalDataTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstClientCache();
      break;
    default:
      arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstClientCache();
      break;
  }
  return arrgs_TotalDataTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_TotalDataType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_TotalDataTypeObjLstCache;
  switch (clsgs_TotalDataTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_TotalDataTypeObjLstCache = null;
      break;
    default:
      arrgs_TotalDataTypeObjLstCache = null;
      break;
  }
  return arrgs_TotalDataTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTotalDataTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_TotalDataType_GetSubObjLstCache(
  objgs_TotalDataTypeCond: clsgs_TotalDataTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  let arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache;
  if (
    objgs_TotalDataTypeCond.sfFldComparisonOp == null ||
    objgs_TotalDataTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_TotalDataTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TotalDataTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TotalDataTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TotalDataTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TotalDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_TotalDataTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_TotalDataTypeCond),
      gs_TotalDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TotalDataTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTotalDataTypeId:关键字列表
 * @returns 对象列表
 **/
export async function gs_TotalDataType_GetObjLstByTotalDataTypeIdLstAsync(
  arrTotalDataTypeId: Array<string>,
): Promise<Array<clsgs_TotalDataTypeEN>> {
  const strThisFuncName = 'GetObjLstByTotalDataTypeIdLstAsync';
  const strAction = 'GetObjLstByTotalDataTypeIdLst';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTotalDataTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_TotalDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TotalDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param arrstrTotalDataTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_TotalDataType_GetObjLstByTotalDataTypeIdLstCache(
  arrTotalDataTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByTotalDataTypeIdLstCache';
  try {
    const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
    const arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache.filter(
      (x) => arrTotalDataTypeIdLst.indexOf(x.totalDataTypeId) > -1,
    );
    return arrgs_TotalDataTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTotalDataTypeIdLst.join(','),
      gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_TotalDataTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
          gs_TotalDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TotalDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_TotalDataTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
          gs_TotalDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TotalDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_TotalDataTypeEN>();
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  if (arrgs_TotalDataTypeObjLstCache.length == 0) return arrgs_TotalDataTypeObjLstCache;
  let arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_TotalDataTypeCond = new clsgs_TotalDataTypeEN();
  ObjectAssign(objgs_TotalDataTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_TotalDataTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TotalDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TotalDataTypeSel.length == 0) return arrgs_TotalDataTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.sort(
        gs_TotalDataType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.sort(objPagerPara.sortFun);
    }
    arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.slice(intStart, intEnd);
    return arrgs_TotalDataTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TotalDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TotalDataTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_TotalDataType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TotalDataTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_TotalDataTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
          gs_TotalDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TotalDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param strTotalDataTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_TotalDataType_DelRecordAsync(strTotalDataTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTotalDataTypeId);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param arrTotalDataTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_TotalDataType_Delgs_TotalDataTypesAsync(
  arrTotalDataTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_TotalDataTypesAsync';
  const strAction = 'Delgs_TotalDataTypes';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTotalDataTypeId, config);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_Delgs_TotalDataTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_TotalDataTypesByCondAsync';
  const strAction = 'Delgs_TotalDataTypesByCond';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_TotalDataType_AddNewRecordAsync(
  objgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objgs_TotalDataTypeEN.totalDataTypeId === null ||
    objgs_TotalDataTypeEN.totalDataTypeId === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objgs_TotalDataTypeEN);
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TotalDataTypeEN, config);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_TotalDataType_AddNewRecordWithMaxIdAsync(
  objgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TotalDataTypeEN, config);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_TotalDataType_AddNewRecordWithReturnKeyAsync(
  objgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TotalDataTypeEN, config);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_TotalDataType_UpdateRecordAsync(
  objgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_TotalDataTypeEN.sfUpdFldSetStr === undefined ||
    objgs_TotalDataTypeEN.sfUpdFldSetStr === null ||
    objgs_TotalDataTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_TotalDataTypeEN.totalDataTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TotalDataTypeEN, config);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_TotalDataType_UpdateWithConditionAsync(
  objgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_TotalDataTypeEN.sfUpdFldSetStr === undefined ||
    objgs_TotalDataTypeEN.sfUpdFldSetStr === null ||
    objgs_TotalDataTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_TotalDataTypeEN.totalDataTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);
  objgs_TotalDataTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TotalDataTypeEN, config);
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objstrTotalDataTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_TotalDataType_IsExistRecordCache(
  objgs_TotalDataTypeCond: clsgs_TotalDataTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  if (arrgs_TotalDataTypeObjLstCache == null) return false;
  let arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache;
  if (
    objgs_TotalDataTypeCond.sfFldComparisonOp == null ||
    objgs_TotalDataTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_TotalDataTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TotalDataTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TotalDataTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TotalDataTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TotalDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TotalDataTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_TotalDataTypeCond),
      gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param strTotalDataTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_TotalDataType_IsExistCache(strTotalDataTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  if (arrgs_TotalDataTypeObjLstCache == null) return false;
  try {
    const arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache.filter(
      (x) => x.totalDataTypeId == strTotalDataTypeId,
    );
    if (arrgs_TotalDataTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTotalDataTypeId,
      gs_TotalDataType_ConstructorName,
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
 * @param strTotalDataTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_TotalDataType_IsExistAsync(strTotalDataTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTotalDataTypeId,
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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
 * @param objgs_TotalDataTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_TotalDataType_GetRecCountByCondCache(
  objgs_TotalDataTypeCond: clsgs_TotalDataTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_TotalDataTypeObjLstCache = await gs_TotalDataType_GetObjLstCache();
  if (arrgs_TotalDataTypeObjLstCache == null) return 0;
  let arrgs_TotalDataTypeSel = arrgs_TotalDataTypeObjLstCache;
  if (
    objgs_TotalDataTypeCond.sfFldComparisonOp == null ||
    objgs_TotalDataTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_TotalDataTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TotalDataTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TotalDataTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TotalDataTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TotalDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TotalDataTypeSel = arrgs_TotalDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_TotalDataTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_TotalDataTypeCond),
      gs_TotalDataType_ConstructorName,
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
export async function gs_TotalDataType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_TotalDataType_Controller, strAction);

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
        gs_TotalDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TotalDataType_ConstructorName,
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
export function gs_TotalDataType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_TotalDataType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_TotalDataTypeEN._CurrTabName;
  switch (clsgs_TotalDataTypeEN.CacheModeId) {
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
export function gs_TotalDataType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_TotalDataTypeEN._CurrTabName;
    switch (clsgs_TotalDataTypeEN.CacheModeId) {
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
export async function gs_TotalDataType_BindDdl_TotalDataTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_TotalDataTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TotalDataTypeIdInDivCache");
  const arrObjLstSel = await gs_TotalDataType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_TotalDataTypeEN.con_TotalDataTypeId,
    clsgs_TotalDataTypeEN.con_TotalDataTypeName,
    '总数据类型表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_TotalDataType_CheckPropertyNew(pobjgs_TotalDataTypeEN: clsgs_TotalDataTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeId) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.totalDataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[总数据类型Id(totalDataTypeId)]的长度不能超过2(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.totalDataTypeId)(clsgs_TotalDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeName) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.totalDataTypeName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[总数据类型名称(totalDataTypeName)]的长度不能超过500(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.totalDataTypeName)(clsgs_TotalDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTable) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.dataTable) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据表(dataTable)]的长度不能超过100(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.dataTable)(clsgs_TotalDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTableId) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.dataTableId) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据表Id(dataTableId)]的长度不能超过50(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.dataTableId)(clsgs_TotalDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.memo) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.memo)(clsgs_TotalDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.onlyId) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.onlyId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[OnlyId(onlyId)]的长度不能超过20(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.onlyId)(clsgs_TotalDataTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeId) == false &&
    undefined !== pobjgs_TotalDataTypeEN.totalDataTypeId &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.totalDataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[总数据类型Id(totalDataTypeId)]的值:[$(pobjgs_TotalDataTypeEN.totalDataTypeId)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeName) == false &&
    undefined !== pobjgs_TotalDataTypeEN.totalDataTypeName &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.totalDataTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[总数据类型名称(totalDataTypeName)]的值:[$(pobjgs_TotalDataTypeEN.totalDataTypeName)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTable) == false &&
    undefined !== pobjgs_TotalDataTypeEN.dataTable &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.dataTable) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据表(dataTable)]的值:[$(pobjgs_TotalDataTypeEN.dataTable)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTableId) == false &&
    undefined !== pobjgs_TotalDataTypeEN.dataTableId &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.dataTableId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据表Id(dataTableId)]的值:[$(pobjgs_TotalDataTypeEN.dataTableId)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.memo) == false &&
    undefined !== pobjgs_TotalDataTypeEN.memo &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_TotalDataTypeEN.memo)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.onlyId) == false &&
    undefined !== pobjgs_TotalDataTypeEN.onlyId &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.onlyId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[OnlyId(onlyId)]的值:[$(pobjgs_TotalDataTypeEN.onlyId)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_TotalDataType_CheckProperty4Update(
  pobjgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeId) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.totalDataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[总数据类型Id(totalDataTypeId)]的长度不能超过2(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.totalDataTypeId)(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeName) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.totalDataTypeName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[总数据类型名称(totalDataTypeName)]的长度不能超过500(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.totalDataTypeName)(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTable) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.dataTable) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据表(dataTable)]的长度不能超过100(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.dataTable)(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTableId) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.dataTableId) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据表Id(dataTableId)]的长度不能超过50(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.dataTableId)(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.memo) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.memo)(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.onlyId) == false &&
    GetStrLen(pobjgs_TotalDataTypeEN.onlyId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[OnlyId(onlyId)]的长度不能超过20(In 总数据类型表(gs_TotalDataType))!值:$(pobjgs_TotalDataTypeEN.onlyId)(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeId) == false &&
    undefined !== pobjgs_TotalDataTypeEN.totalDataTypeId &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.totalDataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[总数据类型Id(totalDataTypeId)]的值:[$(pobjgs_TotalDataTypeEN.totalDataTypeId)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeName) == false &&
    undefined !== pobjgs_TotalDataTypeEN.totalDataTypeName &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.totalDataTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[总数据类型名称(totalDataTypeName)]的值:[$(pobjgs_TotalDataTypeEN.totalDataTypeName)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTable) == false &&
    undefined !== pobjgs_TotalDataTypeEN.dataTable &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.dataTable) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据表(dataTable)]的值:[$(pobjgs_TotalDataTypeEN.dataTable)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.dataTableId) == false &&
    undefined !== pobjgs_TotalDataTypeEN.dataTableId &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.dataTableId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据表Id(dataTableId)]的值:[$(pobjgs_TotalDataTypeEN.dataTableId)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.memo) == false &&
    undefined !== pobjgs_TotalDataTypeEN.memo &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_TotalDataTypeEN.memo)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TotalDataTypeEN.onlyId) == false &&
    undefined !== pobjgs_TotalDataTypeEN.onlyId &&
    tzDataType.isString(pobjgs_TotalDataTypeEN.onlyId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[OnlyId(onlyId)]的值:[$(pobjgs_TotalDataTypeEN.onlyId)], 非法,应该为字符型(In 总数据类型表(gs_TotalDataType))!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjgs_TotalDataTypeEN.totalDataTypeId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[总数据类型Id]不能为空(In 总数据类型表)!(clsgs_TotalDataTypeBL:CheckProperty4Update)',
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
export function gs_TotalDataType_GetJSONStrByObj(
  pobjgs_TotalDataTypeEN: clsgs_TotalDataTypeEN,
): string {
  pobjgs_TotalDataTypeEN.sfUpdFldSetStr = pobjgs_TotalDataTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_TotalDataTypeEN);
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
export function gs_TotalDataType_GetObjLstByJSONStr(strJSON: string): Array<clsgs_TotalDataTypeEN> {
  let arrgs_TotalDataTypeObjLst = new Array<clsgs_TotalDataTypeEN>();
  if (strJSON === '') {
    return arrgs_TotalDataTypeObjLst;
  }
  try {
    arrgs_TotalDataTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_TotalDataTypeObjLst;
  }
  return arrgs_TotalDataTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_TotalDataTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_TotalDataType_GetObjLstByJSONObjLst(
  arrgs_TotalDataTypeObjLstS: Array<clsgs_TotalDataTypeEN>,
): Array<clsgs_TotalDataTypeEN> {
  const arrgs_TotalDataTypeObjLst = new Array<clsgs_TotalDataTypeEN>();
  for (const objInFor of arrgs_TotalDataTypeObjLstS) {
    const obj1 = gs_TotalDataType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_TotalDataTypeObjLst.push(obj1);
  }
  return arrgs_TotalDataTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_TotalDataType_GetObjByJSONStr(strJSON: string): clsgs_TotalDataTypeEN {
  let pobjgs_TotalDataTypeEN = new clsgs_TotalDataTypeEN();
  if (strJSON === '') {
    return pobjgs_TotalDataTypeEN;
  }
  try {
    pobjgs_TotalDataTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_TotalDataTypeEN;
  }
  return pobjgs_TotalDataTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_TotalDataType_GetCombineCondition(
  objgs_TotalDataTypeCond: clsgs_TotalDataTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TotalDataTypeCond.dicFldComparisonOp,
      clsgs_TotalDataTypeEN.con_TotalDataTypeId,
    ) == true
  ) {
    const strComparisonOpTotalDataTypeId: string =
      objgs_TotalDataTypeCond.dicFldComparisonOp[clsgs_TotalDataTypeEN.con_TotalDataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TotalDataTypeEN.con_TotalDataTypeId,
      objgs_TotalDataTypeCond.totalDataTypeId,
      strComparisonOpTotalDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TotalDataTypeCond.dicFldComparisonOp,
      clsgs_TotalDataTypeEN.con_TotalDataTypeName,
    ) == true
  ) {
    const strComparisonOpTotalDataTypeName: string =
      objgs_TotalDataTypeCond.dicFldComparisonOp[clsgs_TotalDataTypeEN.con_TotalDataTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TotalDataTypeEN.con_TotalDataTypeName,
      objgs_TotalDataTypeCond.totalDataTypeName,
      strComparisonOpTotalDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TotalDataTypeCond.dicFldComparisonOp,
      clsgs_TotalDataTypeEN.con_DataTable,
    ) == true
  ) {
    const strComparisonOpDataTable: string =
      objgs_TotalDataTypeCond.dicFldComparisonOp[clsgs_TotalDataTypeEN.con_DataTable];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TotalDataTypeEN.con_DataTable,
      objgs_TotalDataTypeCond.dataTable,
      strComparisonOpDataTable,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TotalDataTypeCond.dicFldComparisonOp,
      clsgs_TotalDataTypeEN.con_DataTableId,
    ) == true
  ) {
    const strComparisonOpDataTableId: string =
      objgs_TotalDataTypeCond.dicFldComparisonOp[clsgs_TotalDataTypeEN.con_DataTableId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TotalDataTypeEN.con_DataTableId,
      objgs_TotalDataTypeCond.dataTableId,
      strComparisonOpDataTableId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TotalDataTypeCond.dicFldComparisonOp,
      clsgs_TotalDataTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_TotalDataTypeCond.dicFldComparisonOp[clsgs_TotalDataTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TotalDataTypeEN.con_Memo,
      objgs_TotalDataTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TotalDataTypeCond.dicFldComparisonOp,
      clsgs_TotalDataTypeEN.con_OnlyId,
    ) == true
  ) {
    const strComparisonOpOnlyId: string =
      objgs_TotalDataTypeCond.dicFldComparisonOp[clsgs_TotalDataTypeEN.con_OnlyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TotalDataTypeEN.con_OnlyId,
      objgs_TotalDataTypeCond.onlyId,
      strComparisonOpOnlyId,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_TotalDataTypeENS:源对象
 * @param objgs_TotalDataTypeENT:目标对象
 */
export function gs_TotalDataType_CopyObjTo(
  objgs_TotalDataTypeENS: clsgs_TotalDataTypeEN,
  objgs_TotalDataTypeENT: clsgs_TotalDataTypeEN,
): void {
  objgs_TotalDataTypeENT.totalDataTypeId = objgs_TotalDataTypeENS.totalDataTypeId; //总数据类型Id
  objgs_TotalDataTypeENT.totalDataTypeName = objgs_TotalDataTypeENS.totalDataTypeName; //总数据类型名称
  objgs_TotalDataTypeENT.dataTable = objgs_TotalDataTypeENS.dataTable; //数据表
  objgs_TotalDataTypeENT.dataTableId = objgs_TotalDataTypeENS.dataTableId; //数据表Id
  objgs_TotalDataTypeENT.memo = objgs_TotalDataTypeENS.memo; //备注
  objgs_TotalDataTypeENT.onlyId = objgs_TotalDataTypeENS.onlyId; //OnlyId
  objgs_TotalDataTypeENT.sfUpdFldSetStr = objgs_TotalDataTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_TotalDataTypeENS:源对象
 * @param objgs_TotalDataTypeENT:目标对象
 */
export function gs_TotalDataType_GetObjFromJsonObj(
  objgs_TotalDataTypeENS: clsgs_TotalDataTypeEN,
): clsgs_TotalDataTypeEN {
  const objgs_TotalDataTypeENT: clsgs_TotalDataTypeEN = new clsgs_TotalDataTypeEN();
  ObjectAssign(objgs_TotalDataTypeENT, objgs_TotalDataTypeENS);
  return objgs_TotalDataTypeENT;
}
