/**
 * 类名:clsgs_EduClsTypeWApi
 * 表名:gs_EduClsType(01120723)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:46
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
 * 教学班类型(gs_EduClsType)
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
import { clsgs_EduClsTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_EduClsTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_EduClsType_Controller = 'gs_EduClsTypeApi';
export const gs_EduClsType_ConstructorName = 'gs_EduClsType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strEduClsTypeId:关键字
 * @returns 对象
 **/
export async function gs_EduClsType_GetObjByEduClsTypeIdAsync(
  strEduClsTypeId: string,
): Promise<clsgs_EduClsTypeEN | null> {
  const strThisFuncName = 'GetObjByEduClsTypeIdAsync';

  if (IsNullOrEmpty(strEduClsTypeId) == true) {
    const strMsg = Format(
      '参数:[strEduClsTypeId]不能为空!(In clsgs_EduClsTypeWApi.GetObjByEduClsTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strEduClsTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strEduClsTypeId]的长度:[{0}]不正确!(clsgs_EduClsTypeWApi.GetObjByEduClsTypeIdAsync)',
      strEduClsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByEduClsTypeId';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strEduClsTypeId,
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
      const objgs_EduClsType = gs_EduClsType_GetObjFromJsonObj(returnObj);
      return objgs_EduClsType;
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param strEduClsTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_EduClsType_GetObjByEduClsTypeIdCache(
  strEduClsTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByEduClsTypeIdCache';

  if (IsNullOrEmpty(strEduClsTypeId) == true) {
    const strMsg = Format(
      '参数:[strEduClsTypeId]不能为空!(In clsgs_EduClsTypeWApi.GetObjByEduClsTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strEduClsTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strEduClsTypeId]的长度:[{0}]不正确!(clsgs_EduClsTypeWApi.GetObjByEduClsTypeIdCache)',
      strEduClsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  try {
    const arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache.filter(
      (x) => x.eduClsTypeId == strEduClsTypeId,
    );
    let objgs_EduClsType: clsgs_EduClsTypeEN;
    if (arrgs_EduClsTypeSel.length > 0) {
      objgs_EduClsType = arrgs_EduClsTypeSel[0];
      return objgs_EduClsType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_EduClsTypeConst = await gs_EduClsType_GetObjByEduClsTypeIdAsync(
          strEduClsTypeId,
        );
        if (objgs_EduClsTypeConst != null) {
          gs_EduClsType_ReFreshThisCache();
          return objgs_EduClsTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strEduClsTypeId,
      gs_EduClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strEduClsTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_EduClsType_GetObjByEduClsTypeIdlocalStorage(strEduClsTypeId: string) {
  const strThisFuncName = 'GetObjByEduClsTypeIdlocalStorage';

  if (IsNullOrEmpty(strEduClsTypeId) == true) {
    const strMsg = Format(
      '参数:[strEduClsTypeId]不能为空!(In clsgs_EduClsTypeWApi.GetObjByEduClsTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strEduClsTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strEduClsTypeId]的长度:[{0}]不正确!(clsgs_EduClsTypeWApi.GetObjByEduClsTypeIdlocalStorage)',
      strEduClsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_EduClsTypeEN._CurrTabName, strEduClsTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_EduClsTypeCache: clsgs_EduClsTypeEN = JSON.parse(strTempObj);
    return objgs_EduClsTypeCache;
  }
  try {
    const objgs_EduClsType = await gs_EduClsType_GetObjByEduClsTypeIdAsync(strEduClsTypeId);
    if (objgs_EduClsType != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_EduClsType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_EduClsType;
    }
    return objgs_EduClsType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strEduClsTypeId,
      gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsType:所给的对象
 * @returns 对象
 */
export async function gs_EduClsType_UpdateObjInLstCache(objgs_EduClsType: clsgs_EduClsTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
    const obj = arrgs_EduClsTypeObjLstCache.find(
      (x) => x.eduClsTypeName == objgs_EduClsType.eduClsTypeName,
    );
    if (obj != null) {
      objgs_EduClsType.eduClsTypeId = obj.eduClsTypeId;
      ObjectAssign(obj, objgs_EduClsType);
    } else {
      arrgs_EduClsTypeObjLstCache.push(objgs_EduClsType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_EduClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strEduClsTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_EduClsType_GetNameByEduClsTypeIdCache(strEduClsTypeId: string) {
  if (IsNullOrEmpty(strEduClsTypeId) == true) {
    const strMsg = Format(
      '参数:[strEduClsTypeId]不能为空!(In clsgs_EduClsTypeWApi.GetNameByEduClsTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strEduClsTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strEduClsTypeId]的长度:[{0}]不正确!(clsgs_EduClsTypeWApi.GetNameByEduClsTypeIdCache)',
      strEduClsTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  if (arrgs_EduClsTypeObjLstCache == null) return '';
  try {
    const arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache.filter(
      (x) => x.eduClsTypeId == strEduClsTypeId,
    );
    let objgs_EduClsType: clsgs_EduClsTypeEN;
    if (arrgs_EduClsTypeSel.length > 0) {
      objgs_EduClsType = arrgs_EduClsTypeSel[0];
      return objgs_EduClsType.eduClsTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strEduClsTypeId,
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
export async function gs_EduClsType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_EduClsTypeEN.con_EduClsTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_EduClsTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_EduClsTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strEduClsTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_EduClsType = await gs_EduClsType_GetObjByEduClsTypeIdCache(strEduClsTypeId);
  if (objgs_EduClsType == null) return '';
  if (objgs_EduClsType.GetFldValue(strOutFldName) == null) return '';
  return objgs_EduClsType.GetFldValue(strOutFldName).toString();
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
export function gs_EduClsType_SortFunDefa(a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN): number {
  return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
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
export function gs_EduClsType_SortFunDefa2Fld(
  a: clsgs_EduClsTypeEN,
  b: clsgs_EduClsTypeEN,
): number {
  if (a.eduClsTypeName == b.eduClsTypeName) return a.memo.localeCompare(b.memo);
  else return a.eduClsTypeName.localeCompare(b.eduClsTypeName);
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
export function gs_EduClsType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_EduClsTypeEN.con_EduClsTypeId:
        return (a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN) => {
          return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
        };
      case clsgs_EduClsTypeEN.con_EduClsTypeName:
        return (a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN) => {
          if (a.eduClsTypeName == null) return -1;
          if (b.eduClsTypeName == null) return 1;
          return a.eduClsTypeName.localeCompare(b.eduClsTypeName);
        };
      case clsgs_EduClsTypeEN.con_Memo:
        return (a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_EduClsType]中不存在!(in ${gs_EduClsType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_EduClsTypeEN.con_EduClsTypeId:
        return (a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN) => {
          return b.eduClsTypeId.localeCompare(a.eduClsTypeId);
        };
      case clsgs_EduClsTypeEN.con_EduClsTypeName:
        return (a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN) => {
          if (b.eduClsTypeName == null) return -1;
          if (a.eduClsTypeName == null) return 1;
          return b.eduClsTypeName.localeCompare(a.eduClsTypeName);
        };
      case clsgs_EduClsTypeEN.con_Memo:
        return (a: clsgs_EduClsTypeEN, b: clsgs_EduClsTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_EduClsType]中不存在!(in ${gs_EduClsType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_EduClsType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_EduClsTypeEN.con_EduClsTypeId:
      return (obj: clsgs_EduClsTypeEN) => {
        return obj.eduClsTypeId === value;
      };
    case clsgs_EduClsTypeEN.con_EduClsTypeName:
      return (obj: clsgs_EduClsTypeEN) => {
        return obj.eduClsTypeName === value;
      };
    case clsgs_EduClsTypeEN.con_Memo:
      return (obj: clsgs_EduClsTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_EduClsType]中不存在!(in ${gs_EduClsType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_EduClsType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_EduClsTypeEN.con_EduClsTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_EduClsType = await gs_EduClsType_GetObjLstCache();
  if (arrgs_EduClsType == null) return [];
  let arrgs_EduClsTypeSel = arrgs_EduClsType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_EduClsTypeSel.length == 0) return [];
  return arrgs_EduClsTypeSel.map((x) => x.eduClsTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_EduClsType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_EduClsTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
      const objgs_EduClsType = gs_EduClsType_GetObjFromJsonObj(returnObj);
      return objgs_EduClsType;
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_EduClsTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_EduClsTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_EduClsTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_EduClsTypeExObjLstCache: Array<clsgs_EduClsTypeEN> = CacheHelper.Get(strKey);
    const arrgs_EduClsTypeObjLstT = gs_EduClsType_GetObjLstByJSONObjLst(
      arrgs_EduClsTypeExObjLstCache,
    );
    return arrgs_EduClsTypeObjLstT;
  }
  try {
    const arrgs_EduClsTypeExObjLst = await gs_EduClsType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_EduClsTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_EduClsTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_EduClsTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_EduClsTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_EduClsTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_EduClsTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_EduClsTypeExObjLstCache: Array<clsgs_EduClsTypeEN> = JSON.parse(strTempObjLst);
    const arrgs_EduClsTypeObjLstT = gs_EduClsType_GetObjLstByJSONObjLst(
      arrgs_EduClsTypeExObjLstCache,
    );
    return arrgs_EduClsTypeObjLstT;
  }
  try {
    const arrgs_EduClsTypeExObjLst = await gs_EduClsType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_EduClsTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_EduClsTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_EduClsTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_EduClsTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_EduClsTypeObjLstCache: Array<clsgs_EduClsTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_EduClsTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_EduClsType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_EduClsTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
          gs_EduClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_EduClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_EduClsTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_EduClsTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_EduClsTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_EduClsTypeExObjLstCache: Array<clsgs_EduClsTypeEN> = JSON.parse(strTempObjLst);
    const arrgs_EduClsTypeObjLstT = gs_EduClsType_GetObjLstByJSONObjLst(
      arrgs_EduClsTypeExObjLstCache,
    );
    return arrgs_EduClsTypeObjLstT;
  }
  try {
    const arrgs_EduClsTypeExObjLst = await gs_EduClsType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_EduClsTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_EduClsTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_EduClsTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_EduClsTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_EduClsTypeObjLstCache: Array<clsgs_EduClsTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_EduClsTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_EduClsType_GetObjLstCache(): Promise<Array<clsgs_EduClsTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_EduClsTypeObjLstCache;
  switch (clsgs_EduClsTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstClientCache();
      break;
    default:
      arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstClientCache();
      break;
  }
  return arrgs_EduClsTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_EduClsType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_EduClsTypeObjLstCache;
  switch (clsgs_EduClsTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_EduClsTypeObjLstCache = null;
      break;
    default:
      arrgs_EduClsTypeObjLstCache = null;
      break;
  }
  return arrgs_EduClsTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrEduClsTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_EduClsType_GetSubObjLstCache(objgs_EduClsTypeCond: clsgs_EduClsTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  let arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache;
  if (
    objgs_EduClsTypeCond.sfFldComparisonOp == null ||
    objgs_EduClsTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_EduClsTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_EduClsTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_EduClsTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_EduClsTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_EduClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_EduClsTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_EduClsTypeCond),
      gs_EduClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_EduClsTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrEduClsTypeId:关键字列表
 * @returns 对象列表
 **/
export async function gs_EduClsType_GetObjLstByEduClsTypeIdLstAsync(
  arrEduClsTypeId: Array<string>,
): Promise<Array<clsgs_EduClsTypeEN>> {
  const strThisFuncName = 'GetObjLstByEduClsTypeIdLstAsync';
  const strAction = 'GetObjLstByEduClsTypeIdLst';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrEduClsTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_EduClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_EduClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param arrstrEduClsTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_EduClsType_GetObjLstByEduClsTypeIdLstCache(
  arrEduClsTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByEduClsTypeIdLstCache';
  try {
    const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
    const arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache.filter(
      (x) => arrEduClsTypeIdLst.indexOf(x.eduClsTypeId) > -1,
    );
    return arrgs_EduClsTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrEduClsTypeIdLst.join(','),
      gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_EduClsTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
          gs_EduClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_EduClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_EduClsTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
          gs_EduClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_EduClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_EduClsTypeEN>();
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  if (arrgs_EduClsTypeObjLstCache.length == 0) return arrgs_EduClsTypeObjLstCache;
  let arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_EduClsTypeCond = new clsgs_EduClsTypeEN();
  ObjectAssign(objgs_EduClsTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_EduClsTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_EduClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_EduClsTypeSel.length == 0) return arrgs_EduClsTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.sort(
        gs_EduClsType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.sort(objPagerPara.sortFun);
    }
    arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.slice(intStart, intEnd);
    return arrgs_EduClsTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_EduClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_EduClsTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_EduClsType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_EduClsTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_EduClsTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
          gs_EduClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_EduClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param strEduClsTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_EduClsType_DelRecordAsync(strEduClsTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strEduClsTypeId);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param arrEduClsTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_EduClsType_Delgs_EduClsTypesAsync(
  arrEduClsTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_EduClsTypesAsync';
  const strAction = 'Delgs_EduClsTypes';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrEduClsTypeId, config);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_Delgs_EduClsTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_EduClsTypesByCondAsync';
  const strAction = 'Delgs_EduClsTypesByCond';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_EduClsType_AddNewRecordAsync(
  objgs_EduClsTypeEN: clsgs_EduClsTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_EduClsTypeEN);
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_EduClsTypeEN, config);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_EduClsType_AddNewRecordWithMaxIdAsync(
  objgs_EduClsTypeEN: clsgs_EduClsTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_EduClsTypeEN, config);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_EduClsType_AddNewRecordWithReturnKeyAsync(
  objgs_EduClsTypeEN: clsgs_EduClsTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_EduClsTypeEN, config);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_EduClsType_UpdateRecordAsync(
  objgs_EduClsTypeEN: clsgs_EduClsTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_EduClsTypeEN.sfUpdFldSetStr === undefined ||
    objgs_EduClsTypeEN.sfUpdFldSetStr === null ||
    objgs_EduClsTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_EduClsTypeEN.eduClsTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_EduClsTypeEN, config);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_EduClsType_UpdateWithConditionAsync(
  objgs_EduClsTypeEN: clsgs_EduClsTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_EduClsTypeEN.sfUpdFldSetStr === undefined ||
    objgs_EduClsTypeEN.sfUpdFldSetStr === null ||
    objgs_EduClsTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_EduClsTypeEN.eduClsTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);
  objgs_EduClsTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_EduClsTypeEN, config);
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objstrEduClsTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_EduClsType_IsExistRecordCache(objgs_EduClsTypeCond: clsgs_EduClsTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  if (arrgs_EduClsTypeObjLstCache == null) return false;
  let arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache;
  if (
    objgs_EduClsTypeCond.sfFldComparisonOp == null ||
    objgs_EduClsTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_EduClsTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_EduClsTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_EduClsTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_EduClsTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_EduClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_EduClsTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_EduClsTypeCond),
      gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param strEduClsTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_EduClsType_IsExistCache(strEduClsTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  if (arrgs_EduClsTypeObjLstCache == null) return false;
  try {
    const arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache.filter(
      (x) => x.eduClsTypeId == strEduClsTypeId,
    );
    if (arrgs_EduClsTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strEduClsTypeId,
      gs_EduClsType_ConstructorName,
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
 * @param strEduClsTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_EduClsType_IsExistAsync(strEduClsTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strEduClsTypeId,
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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
 * @param objgs_EduClsTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_EduClsType_GetRecCountByCondCache(
  objgs_EduClsTypeCond: clsgs_EduClsTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_EduClsTypeObjLstCache = await gs_EduClsType_GetObjLstCache();
  if (arrgs_EduClsTypeObjLstCache == null) return 0;
  let arrgs_EduClsTypeSel = arrgs_EduClsTypeObjLstCache;
  if (
    objgs_EduClsTypeCond.sfFldComparisonOp == null ||
    objgs_EduClsTypeCond.sfFldComparisonOp == ''
  )
    return arrgs_EduClsTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_EduClsTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_EduClsTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_EduClsTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_EduClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_EduClsTypeSel = arrgs_EduClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_EduClsTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_EduClsTypeCond),
      gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export async function gs_EduClsType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_EduClsType_Controller, strAction);

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
        gs_EduClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_EduClsType_ConstructorName,
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
export function gs_EduClsType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_EduClsType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_EduClsTypeEN._CurrTabName;
  switch (clsgs_EduClsTypeEN.CacheModeId) {
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
export function gs_EduClsType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_EduClsTypeEN._CurrTabName;
    switch (clsgs_EduClsTypeEN.CacheModeId) {
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
export async function gs_EduClsType_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await gs_EduClsType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_EduClsTypeEN.con_EduClsTypeId,
    clsgs_EduClsTypeEN.con_EduClsTypeName,
    '教学班类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_EduClsType_CheckPropertyNew(pobjgs_EduClsTypeEN: clsgs_EduClsTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeId) == false &&
    GetStrLen(pobjgs_EduClsTypeEN.eduClsTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班类型Id(eduClsTypeId)]的长度不能超过4(In 教学班类型(gs_EduClsType))!值:$(pobjgs_EduClsTypeEN.eduClsTypeId)(clsgs_EduClsTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeName) == false &&
    GetStrLen(pobjgs_EduClsTypeEN.eduClsTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班类型名称(eduClsTypeName)]的长度不能超过100(In 教学班类型(gs_EduClsType))!值:$(pobjgs_EduClsTypeEN.eduClsTypeName)(clsgs_EduClsTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.memo) == false &&
    GetStrLen(pobjgs_EduClsTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学班类型(gs_EduClsType))!值:$(pobjgs_EduClsTypeEN.memo)(clsgs_EduClsTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeId) == false &&
    undefined !== pobjgs_EduClsTypeEN.eduClsTypeId &&
    tzDataType.isString(pobjgs_EduClsTypeEN.eduClsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班类型Id(eduClsTypeId)]的值:[$(pobjgs_EduClsTypeEN.eduClsTypeId)], 非法,应该为字符型(In 教学班类型(gs_EduClsType))!(clsgs_EduClsTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeName) == false &&
    undefined !== pobjgs_EduClsTypeEN.eduClsTypeName &&
    tzDataType.isString(pobjgs_EduClsTypeEN.eduClsTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班类型名称(eduClsTypeName)]的值:[$(pobjgs_EduClsTypeEN.eduClsTypeName)], 非法,应该为字符型(In 教学班类型(gs_EduClsType))!(clsgs_EduClsTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.memo) == false &&
    undefined !== pobjgs_EduClsTypeEN.memo &&
    tzDataType.isString(pobjgs_EduClsTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_EduClsTypeEN.memo)], 非法,应该为字符型(In 教学班类型(gs_EduClsType))!(clsgs_EduClsTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_EduClsType_CheckProperty4Update(pobjgs_EduClsTypeEN: clsgs_EduClsTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeId) == false &&
    GetStrLen(pobjgs_EduClsTypeEN.eduClsTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班类型Id(eduClsTypeId)]的长度不能超过4(In 教学班类型(gs_EduClsType))!值:$(pobjgs_EduClsTypeEN.eduClsTypeId)(clsgs_EduClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeName) == false &&
    GetStrLen(pobjgs_EduClsTypeEN.eduClsTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班类型名称(eduClsTypeName)]的长度不能超过100(In 教学班类型(gs_EduClsType))!值:$(pobjgs_EduClsTypeEN.eduClsTypeName)(clsgs_EduClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.memo) == false &&
    GetStrLen(pobjgs_EduClsTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学班类型(gs_EduClsType))!值:$(pobjgs_EduClsTypeEN.memo)(clsgs_EduClsTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeId) == false &&
    undefined !== pobjgs_EduClsTypeEN.eduClsTypeId &&
    tzDataType.isString(pobjgs_EduClsTypeEN.eduClsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班类型Id(eduClsTypeId)]的值:[$(pobjgs_EduClsTypeEN.eduClsTypeId)], 非法,应该为字符型(In 教学班类型(gs_EduClsType))!(clsgs_EduClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.eduClsTypeName) == false &&
    undefined !== pobjgs_EduClsTypeEN.eduClsTypeName &&
    tzDataType.isString(pobjgs_EduClsTypeEN.eduClsTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班类型名称(eduClsTypeName)]的值:[$(pobjgs_EduClsTypeEN.eduClsTypeName)], 非法,应该为字符型(In 教学班类型(gs_EduClsType))!(clsgs_EduClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_EduClsTypeEN.memo) == false &&
    undefined !== pobjgs_EduClsTypeEN.memo &&
    tzDataType.isString(pobjgs_EduClsTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_EduClsTypeEN.memo)], 非法,应该为字符型(In 教学班类型(gs_EduClsType))!(clsgs_EduClsTypeBL:CheckProperty4Update)',
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
export function gs_EduClsType_GetJSONStrByObj(pobjgs_EduClsTypeEN: clsgs_EduClsTypeEN): string {
  pobjgs_EduClsTypeEN.sfUpdFldSetStr = pobjgs_EduClsTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_EduClsTypeEN);
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
export function gs_EduClsType_GetObjLstByJSONStr(strJSON: string): Array<clsgs_EduClsTypeEN> {
  let arrgs_EduClsTypeObjLst = new Array<clsgs_EduClsTypeEN>();
  if (strJSON === '') {
    return arrgs_EduClsTypeObjLst;
  }
  try {
    arrgs_EduClsTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_EduClsTypeObjLst;
  }
  return arrgs_EduClsTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_EduClsTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_EduClsType_GetObjLstByJSONObjLst(
  arrgs_EduClsTypeObjLstS: Array<clsgs_EduClsTypeEN>,
): Array<clsgs_EduClsTypeEN> {
  const arrgs_EduClsTypeObjLst = new Array<clsgs_EduClsTypeEN>();
  for (const objInFor of arrgs_EduClsTypeObjLstS) {
    const obj1 = gs_EduClsType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_EduClsTypeObjLst.push(obj1);
  }
  return arrgs_EduClsTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_EduClsType_GetObjByJSONStr(strJSON: string): clsgs_EduClsTypeEN {
  let pobjgs_EduClsTypeEN = new clsgs_EduClsTypeEN();
  if (strJSON === '') {
    return pobjgs_EduClsTypeEN;
  }
  try {
    pobjgs_EduClsTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_EduClsTypeEN;
  }
  return pobjgs_EduClsTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_EduClsType_GetCombineCondition(
  objgs_EduClsTypeCond: clsgs_EduClsTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_EduClsTypeCond.dicFldComparisonOp,
      clsgs_EduClsTypeEN.con_EduClsTypeId,
    ) == true
  ) {
    const strComparisonOpEduClsTypeId: string =
      objgs_EduClsTypeCond.dicFldComparisonOp[clsgs_EduClsTypeEN.con_EduClsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_EduClsTypeEN.con_EduClsTypeId,
      objgs_EduClsTypeCond.eduClsTypeId,
      strComparisonOpEduClsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_EduClsTypeCond.dicFldComparisonOp,
      clsgs_EduClsTypeEN.con_EduClsTypeName,
    ) == true
  ) {
    const strComparisonOpEduClsTypeName: string =
      objgs_EduClsTypeCond.dicFldComparisonOp[clsgs_EduClsTypeEN.con_EduClsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_EduClsTypeEN.con_EduClsTypeName,
      objgs_EduClsTypeCond.eduClsTypeName,
      strComparisonOpEduClsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_EduClsTypeCond.dicFldComparisonOp,
      clsgs_EduClsTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_EduClsTypeCond.dicFldComparisonOp[clsgs_EduClsTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_EduClsTypeEN.con_Memo,
      objgs_EduClsTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_EduClsType(教学班类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strEduClsTypeName: 教学班类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_EduClsType_GetUniCondStr(objgs_EduClsTypeEN: clsgs_EduClsTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and EduClsTypeName = '{0}'", objgs_EduClsTypeEN.eduClsTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_EduClsType(教学班类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strEduClsTypeName: 教学班类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_EduClsType_GetUniCondStr4Update(objgs_EduClsTypeEN: clsgs_EduClsTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and EduClsTypeId <> '{0}'", objgs_EduClsTypeEN.eduClsTypeId);
  strWhereCond += Format(" and EduClsTypeName = '{0}'", objgs_EduClsTypeEN.eduClsTypeName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_EduClsTypeENS:源对象
 * @param objgs_EduClsTypeENT:目标对象
 */
export function gs_EduClsType_CopyObjTo(
  objgs_EduClsTypeENS: clsgs_EduClsTypeEN,
  objgs_EduClsTypeENT: clsgs_EduClsTypeEN,
): void {
  objgs_EduClsTypeENT.eduClsTypeId = objgs_EduClsTypeENS.eduClsTypeId; //教学班类型Id
  objgs_EduClsTypeENT.eduClsTypeName = objgs_EduClsTypeENS.eduClsTypeName; //教学班类型名称
  objgs_EduClsTypeENT.memo = objgs_EduClsTypeENS.memo; //备注
  objgs_EduClsTypeENT.sfUpdFldSetStr = objgs_EduClsTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_EduClsTypeENS:源对象
 * @param objgs_EduClsTypeENT:目标对象
 */
export function gs_EduClsType_GetObjFromJsonObj(
  objgs_EduClsTypeENS: clsgs_EduClsTypeEN,
): clsgs_EduClsTypeEN {
  const objgs_EduClsTypeENT: clsgs_EduClsTypeEN = new clsgs_EduClsTypeEN();
  ObjectAssign(objgs_EduClsTypeENT, objgs_EduClsTypeENS);
  return objgs_EduClsTypeENT;
}
