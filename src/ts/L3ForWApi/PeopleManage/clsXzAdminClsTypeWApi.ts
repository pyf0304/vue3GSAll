/**
 * 类名:clsXzAdminClsTypeWApi
 * 表名:XzAdminClsType(01120195)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:人员管理(PeopleManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 行政班类型(XzAdminClsType)
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
import { clsXzAdminClsTypeEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzAdminClsType_Controller = 'XzAdminClsTypeApi';
export const xzAdminClsType_ConstructorName = 'xzAdminClsType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdAdminClsType:关键字
 * @returns 对象
 **/
export async function XzAdminClsType_GetObjByIdAdminClsTypeAsync(
  strIdAdminClsType: string,
): Promise<clsXzAdminClsTypeEN | null> {
  const strThisFuncName = 'GetObjByIdAdminClsTypeAsync';

  if (IsNullOrEmpty(strIdAdminClsType) == true) {
    const strMsg = Format(
      '参数:[strIdAdminClsType]不能为空!(In clsXzAdminClsTypeWApi.GetObjByIdAdminClsTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminClsType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminClsType]的长度:[{0}]不正确!(clsXzAdminClsTypeWApi.GetObjByIdAdminClsTypeAsync)',
      strIdAdminClsType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdAdminClsType';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdAdminClsType,
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
      const objXzAdminClsType = XzAdminClsType_GetObjFromJsonObj(returnObj);
      return objXzAdminClsType;
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param strIdAdminClsType:所给的关键字
 * @returns 对象
 */
export async function XzAdminClsType_GetObjByIdAdminClsTypeCache(
  strIdAdminClsType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdAdminClsTypeCache';

  if (IsNullOrEmpty(strIdAdminClsType) == true) {
    const strMsg = Format(
      '参数:[strIdAdminClsType]不能为空!(In clsXzAdminClsTypeWApi.GetObjByIdAdminClsTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminClsType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminClsType]的长度:[{0}]不正确!(clsXzAdminClsTypeWApi.GetObjByIdAdminClsTypeCache)',
      strIdAdminClsType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  try {
    const arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache.filter(
      (x) => x.idAdminClsType == strIdAdminClsType,
    );
    let objXzAdminClsType: clsXzAdminClsTypeEN;
    if (arrXzAdminClsTypeSel.length > 0) {
      objXzAdminClsType = arrXzAdminClsTypeSel[0];
      return objXzAdminClsType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzAdminClsTypeConst = await XzAdminClsType_GetObjByIdAdminClsTypeAsync(
          strIdAdminClsType,
        );
        if (objXzAdminClsTypeConst != null) {
          XzAdminClsType_ReFreshThisCache();
          return objXzAdminClsTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdAdminClsType,
      xzAdminClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdAdminClsType:所给的关键字
 * @returns 对象
 */
export async function XzAdminClsType_GetObjByIdAdminClsTypelocalStorage(strIdAdminClsType: string) {
  const strThisFuncName = 'GetObjByIdAdminClsTypelocalStorage';

  if (IsNullOrEmpty(strIdAdminClsType) == true) {
    const strMsg = Format(
      '参数:[strIdAdminClsType]不能为空!(In clsXzAdminClsTypeWApi.GetObjByIdAdminClsTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminClsType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminClsType]的长度:[{0}]不正确!(clsXzAdminClsTypeWApi.GetObjByIdAdminClsTypelocalStorage)',
      strIdAdminClsType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzAdminClsTypeEN._CurrTabName, strIdAdminClsType);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzAdminClsTypeCache: clsXzAdminClsTypeEN = JSON.parse(strTempObj);
    return objXzAdminClsTypeCache;
  }
  try {
    const objXzAdminClsType = await XzAdminClsType_GetObjByIdAdminClsTypeAsync(strIdAdminClsType);
    if (objXzAdminClsType != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzAdminClsType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzAdminClsType;
    }
    return objXzAdminClsType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdAdminClsType,
      xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsType:所给的对象
 * @returns 对象
 */
export async function XzAdminClsType_UpdateObjInLstCache(objXzAdminClsType: clsXzAdminClsTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
    const obj = arrXzAdminClsTypeObjLstCache.find(
      (x) => x.idAdminClsType == objXzAdminClsType.idAdminClsType,
    );
    if (obj != null) {
      objXzAdminClsType.idAdminClsType = obj.idAdminClsType;
      ObjectAssign(obj, objXzAdminClsType);
    } else {
      arrXzAdminClsTypeObjLstCache.push(objXzAdminClsType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzAdminClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdAdminClsType:所给的关键字
 * @returns 对象
 */
export async function XzAdminClsType_GetNameByIdAdminClsTypeCache(strIdAdminClsType: string) {
  if (IsNullOrEmpty(strIdAdminClsType) == true) {
    const strMsg = Format(
      '参数:[strIdAdminClsType]不能为空!(In clsXzAdminClsTypeWApi.GetNameByIdAdminClsTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminClsType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminClsType]的长度:[{0}]不正确!(clsXzAdminClsTypeWApi.GetNameByIdAdminClsTypeCache)',
      strIdAdminClsType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  if (arrXzAdminClsTypeObjLstCache == null) return '';
  try {
    const arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache.filter(
      (x) => x.idAdminClsType == strIdAdminClsType,
    );
    let objXzAdminClsType: clsXzAdminClsTypeEN;
    if (arrXzAdminClsTypeSel.length > 0) {
      objXzAdminClsType = arrXzAdminClsTypeSel[0];
      return objXzAdminClsType.adminClsTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdAdminClsType,
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
export async function XzAdminClsType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzAdminClsTypeEN.con_IdAdminClsType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzAdminClsTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzAdminClsTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdAdminClsType = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzAdminClsType = await XzAdminClsType_GetObjByIdAdminClsTypeCache(strIdAdminClsType);
  if (objXzAdminClsType == null) return '';
  if (objXzAdminClsType.GetFldValue(strOutFldName) == null) return '';
  return objXzAdminClsType.GetFldValue(strOutFldName).toString();
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
export function XzAdminClsType_SortFunDefa(a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN): number {
  return a.idAdminClsType.localeCompare(b.idAdminClsType);
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
export function XzAdminClsType_SortFunDefa2Fld(
  a: clsXzAdminClsTypeEN,
  b: clsXzAdminClsTypeEN,
): number {
  if (a.adminClsTypeId == b.adminClsTypeId)
    return a.adminClsTypeName.localeCompare(b.adminClsTypeName);
  else return a.adminClsTypeId.localeCompare(b.adminClsTypeId);
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
export function XzAdminClsType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzAdminClsTypeEN.con_IdAdminClsType:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          return a.idAdminClsType.localeCompare(b.idAdminClsType);
        };
      case clsXzAdminClsTypeEN.con_AdminClsTypeId:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          return a.adminClsTypeId.localeCompare(b.adminClsTypeId);
        };
      case clsXzAdminClsTypeEN.con_AdminClsTypeName:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          return a.adminClsTypeName.localeCompare(b.adminClsTypeName);
        };
      case clsXzAdminClsTypeEN.con_Memo:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzAdminClsType]中不存在!(in ${xzAdminClsType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzAdminClsTypeEN.con_IdAdminClsType:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          return b.idAdminClsType.localeCompare(a.idAdminClsType);
        };
      case clsXzAdminClsTypeEN.con_AdminClsTypeId:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          return b.adminClsTypeId.localeCompare(a.adminClsTypeId);
        };
      case clsXzAdminClsTypeEN.con_AdminClsTypeName:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          return b.adminClsTypeName.localeCompare(a.adminClsTypeName);
        };
      case clsXzAdminClsTypeEN.con_Memo:
        return (a: clsXzAdminClsTypeEN, b: clsXzAdminClsTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzAdminClsType]中不存在!(in ${xzAdminClsType_ConstructorName}.${strThisFuncName})`;
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
export async function XzAdminClsType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzAdminClsTypeEN.con_IdAdminClsType:
      return (obj: clsXzAdminClsTypeEN) => {
        return obj.idAdminClsType === value;
      };
    case clsXzAdminClsTypeEN.con_AdminClsTypeId:
      return (obj: clsXzAdminClsTypeEN) => {
        return obj.adminClsTypeId === value;
      };
    case clsXzAdminClsTypeEN.con_AdminClsTypeName:
      return (obj: clsXzAdminClsTypeEN) => {
        return obj.adminClsTypeName === value;
      };
    case clsXzAdminClsTypeEN.con_Memo:
      return (obj: clsXzAdminClsTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzAdminClsType]中不存在!(in ${xzAdminClsType_ConstructorName}.${strThisFuncName})`;
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
export async function XzAdminClsType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzAdminClsTypeEN.con_IdAdminClsType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzAdminClsType = await XzAdminClsType_GetObjLstCache();
  if (arrXzAdminClsType == null) return [];
  let arrXzAdminClsTypeSel = arrXzAdminClsType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzAdminClsTypeSel.length == 0) return [];
  return arrXzAdminClsTypeSel.map((x) => x.idAdminClsType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzAdminClsType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzAdminClsTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
      const objXzAdminClsType = XzAdminClsType_GetObjFromJsonObj(returnObj);
      return objXzAdminClsType;
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzAdminClsTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzAdminClsTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzAdminClsTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzAdminClsTypeExObjLstCache: Array<clsXzAdminClsTypeEN> = CacheHelper.Get(strKey);
    const arrXzAdminClsTypeObjLstT = XzAdminClsType_GetObjLstByJSONObjLst(
      arrXzAdminClsTypeExObjLstCache,
    );
    return arrXzAdminClsTypeObjLstT;
  }
  try {
    const arrXzAdminClsTypeExObjLst = await XzAdminClsType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzAdminClsTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzAdminClsTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzAdminClsTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzAdminClsTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzAdminClsTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzAdminClsTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzAdminClsTypeExObjLstCache: Array<clsXzAdminClsTypeEN> = JSON.parse(strTempObjLst);
    const arrXzAdminClsTypeObjLstT = XzAdminClsType_GetObjLstByJSONObjLst(
      arrXzAdminClsTypeExObjLstCache,
    );
    return arrXzAdminClsTypeObjLstT;
  }
  try {
    const arrXzAdminClsTypeExObjLst = await XzAdminClsType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzAdminClsTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzAdminClsTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzAdminClsTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzAdminClsTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzAdminClsTypeObjLstCache: Array<clsXzAdminClsTypeEN> = JSON.parse(strTempObjLst);
    return arrXzAdminClsTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzAdminClsType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzAdminClsTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
          xzAdminClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzAdminClsTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzAdminClsTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzAdminClsTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzAdminClsTypeExObjLstCache: Array<clsXzAdminClsTypeEN> = JSON.parse(strTempObjLst);
    const arrXzAdminClsTypeObjLstT = XzAdminClsType_GetObjLstByJSONObjLst(
      arrXzAdminClsTypeExObjLstCache,
    );
    return arrXzAdminClsTypeObjLstT;
  }
  try {
    const arrXzAdminClsTypeExObjLst = await XzAdminClsType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzAdminClsTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzAdminClsTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzAdminClsTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzAdminClsTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzAdminClsTypeObjLstCache: Array<clsXzAdminClsTypeEN> = JSON.parse(strTempObjLst);
    return arrXzAdminClsTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzAdminClsType_GetObjLstCache(): Promise<Array<clsXzAdminClsTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzAdminClsTypeObjLstCache;
  switch (clsXzAdminClsTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstClientCache();
      break;
    default:
      arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstClientCache();
      break;
  }
  return arrXzAdminClsTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzAdminClsType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzAdminClsTypeObjLstCache;
  switch (clsXzAdminClsTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzAdminClsTypeObjLstCache = null;
      break;
    default:
      arrXzAdminClsTypeObjLstCache = null;
      break;
  }
  return arrXzAdminClsTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdAdminClsTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzAdminClsType_GetSubObjLstCache(objXzAdminClsTypeCond: clsXzAdminClsTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  let arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache;
  if (
    objXzAdminClsTypeCond.sfFldComparisonOp == null ||
    objXzAdminClsTypeCond.sfFldComparisonOp == ''
  )
    return arrXzAdminClsTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzAdminClsTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzAdminClsTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzAdminClsTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzAdminClsTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzAdminClsTypeCond),
      xzAdminClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzAdminClsTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdAdminClsType:关键字列表
 * @returns 对象列表
 **/
export async function XzAdminClsType_GetObjLstByIdAdminClsTypeLstAsync(
  arrIdAdminClsType: Array<string>,
): Promise<Array<clsXzAdminClsTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdAdminClsTypeLstAsync';
  const strAction = 'GetObjLstByIdAdminClsTypeLst';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdAdminClsType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzAdminClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param arrstrIdAdminClsTypeLst:关键字列表
 * @returns 对象列表
 */
export async function XzAdminClsType_GetObjLstByIdAdminClsTypeLstCache(
  arrIdAdminClsTypeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdAdminClsTypeLstCache';
  try {
    const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
    const arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache.filter(
      (x) => arrIdAdminClsTypeLst.indexOf(x.idAdminClsType) > -1,
    );
    return arrXzAdminClsTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdAdminClsTypeLst.join(','),
      xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzAdminClsTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
          xzAdminClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzAdminClsTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
          xzAdminClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzAdminClsTypeEN>();
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  if (arrXzAdminClsTypeObjLstCache.length == 0) return arrXzAdminClsTypeObjLstCache;
  let arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzAdminClsTypeCond = new clsXzAdminClsTypeEN();
  ObjectAssign(objXzAdminClsTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzAdminClsTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzAdminClsTypeSel.length == 0) return arrXzAdminClsTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.sort(
        XzAdminClsType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.sort(objPagerPara.sortFun);
    }
    arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.slice(intStart, intEnd);
    return arrXzAdminClsTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzAdminClsType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzAdminClsTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzAdminClsType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzAdminClsTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzAdminClsTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
          xzAdminClsType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminClsType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param strIdAdminClsType:关键字
 * @returns 获取删除的结果
 **/
export async function XzAdminClsType_DelRecordAsync(strIdAdminClsType: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdAdminClsType);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param arrIdAdminClsType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzAdminClsType_DelXzAdminClsTypesAsync(
  arrIdAdminClsType: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelXzAdminClsTypesAsync';
  const strAction = 'DelXzAdminClsTypes';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdAdminClsType, config);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_DelXzAdminClsTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelXzAdminClsTypesByCondAsync';
  const strAction = 'DelXzAdminClsTypesByCond';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzAdminClsType_AddNewRecordAsync(
  objXzAdminClsTypeEN: clsXzAdminClsTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objXzAdminClsTypeEN.idAdminClsType === null || objXzAdminClsTypeEN.idAdminClsType === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objXzAdminClsTypeEN);
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsTypeEN, config);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzAdminClsType_AddNewRecordWithMaxIdAsync(
  objXzAdminClsTypeEN: clsXzAdminClsTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsTypeEN, config);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzAdminClsType_AddNewRecordWithReturnKeyAsync(
  objXzAdminClsTypeEN: clsXzAdminClsTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsTypeEN, config);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzAdminClsType_UpdateRecordAsync(
  objXzAdminClsTypeEN: clsXzAdminClsTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzAdminClsTypeEN.sfUpdFldSetStr === undefined ||
    objXzAdminClsTypeEN.sfUpdFldSetStr === null ||
    objXzAdminClsTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzAdminClsTypeEN.idAdminClsType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsTypeEN, config);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzAdminClsType_UpdateWithConditionAsync(
  objXzAdminClsTypeEN: clsXzAdminClsTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzAdminClsTypeEN.sfUpdFldSetStr === undefined ||
    objXzAdminClsTypeEN.sfUpdFldSetStr === null ||
    objXzAdminClsTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzAdminClsTypeEN.idAdminClsType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);
  objXzAdminClsTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsTypeEN, config);
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objstrIdAdminClsTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzAdminClsType_IsExistRecordCache(
  objXzAdminClsTypeCond: clsXzAdminClsTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  if (arrXzAdminClsTypeObjLstCache == null) return false;
  let arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache;
  if (
    objXzAdminClsTypeCond.sfFldComparisonOp == null ||
    objXzAdminClsTypeCond.sfFldComparisonOp == ''
  )
    return arrXzAdminClsTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzAdminClsTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzAdminClsTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzAdminClsTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzAdminClsTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzAdminClsTypeCond),
      xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param strIdAdminClsType:所给的关键字
 * @returns 对象
 */
export async function XzAdminClsType_IsExistCache(strIdAdminClsType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  if (arrXzAdminClsTypeObjLstCache == null) return false;
  try {
    const arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache.filter(
      (x) => x.idAdminClsType == strIdAdminClsType,
    );
    if (arrXzAdminClsTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdAdminClsType,
      xzAdminClsType_ConstructorName,
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
 * @param strIdAdminClsType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzAdminClsType_IsExistAsync(strIdAdminClsType: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdAdminClsType,
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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
 * @param objXzAdminClsTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzAdminClsType_GetRecCountByCondCache(
  objXzAdminClsTypeCond: clsXzAdminClsTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzAdminClsTypeObjLstCache = await XzAdminClsType_GetObjLstCache();
  if (arrXzAdminClsTypeObjLstCache == null) return 0;
  let arrXzAdminClsTypeSel = arrXzAdminClsTypeObjLstCache;
  if (
    objXzAdminClsTypeCond.sfFldComparisonOp == null ||
    objXzAdminClsTypeCond.sfFldComparisonOp == ''
  )
    return arrXzAdminClsTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzAdminClsTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzAdminClsTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzAdminClsTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzAdminClsTypeSel = arrXzAdminClsTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzAdminClsTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzAdminClsTypeCond),
      xzAdminClsType_ConstructorName,
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
export async function XzAdminClsType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzAdminClsType_Controller, strAction);

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
        xzAdminClsType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminClsType_ConstructorName,
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
export function XzAdminClsType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzAdminClsType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzAdminClsTypeEN._CurrTabName;
  switch (clsXzAdminClsTypeEN.CacheModeId) {
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
export function XzAdminClsType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzAdminClsTypeEN._CurrTabName;
    switch (clsXzAdminClsTypeEN.CacheModeId) {
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
export async function XzAdminClsType_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await XzAdminClsType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzAdminClsTypeEN.con_IdAdminClsType,
    clsXzAdminClsTypeEN.con_AdminClsTypeName,
    '行政班类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzAdminClsType_CheckPropertyNew(pobjXzAdminClsTypeEN: clsXzAdminClsTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[行政班级类型ID]不能为空(In 行政班类型)!(clsXzAdminClsTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[行政班级类型名称]不能为空(In 行政班类型)!(clsXzAdminClsTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.idAdminClsType) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.idAdminClsType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班级类型流水号(idAdminClsType)]的长度不能超过4(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.idAdminClsType)(clsXzAdminClsTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeId) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.adminClsTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班级类型ID(adminClsTypeId)]的长度不能超过4(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.adminClsTypeId)(clsXzAdminClsTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeName) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.adminClsTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班级类型名称(adminClsTypeName)]的长度不能超过30(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.adminClsTypeName)(clsXzAdminClsTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.memo) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.memo)(clsXzAdminClsTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.idAdminClsType) == false &&
    undefined !== pobjXzAdminClsTypeEN.idAdminClsType &&
    tzDataType.isString(pobjXzAdminClsTypeEN.idAdminClsType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班级类型流水号(idAdminClsType)]的值:[$(pobjXzAdminClsTypeEN.idAdminClsType)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeId) == false &&
    undefined !== pobjXzAdminClsTypeEN.adminClsTypeId &&
    tzDataType.isString(pobjXzAdminClsTypeEN.adminClsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班级类型ID(adminClsTypeId)]的值:[$(pobjXzAdminClsTypeEN.adminClsTypeId)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeName) == false &&
    undefined !== pobjXzAdminClsTypeEN.adminClsTypeName &&
    tzDataType.isString(pobjXzAdminClsTypeEN.adminClsTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班级类型名称(adminClsTypeName)]的值:[$(pobjXzAdminClsTypeEN.adminClsTypeName)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.memo) == false &&
    undefined !== pobjXzAdminClsTypeEN.memo &&
    tzDataType.isString(pobjXzAdminClsTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzAdminClsTypeEN.memo)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzAdminClsType_CheckProperty4Update(pobjXzAdminClsTypeEN: clsXzAdminClsTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.idAdminClsType) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.idAdminClsType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班级类型流水号(idAdminClsType)]的长度不能超过4(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.idAdminClsType)(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeId) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.adminClsTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班级类型ID(adminClsTypeId)]的长度不能超过4(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.adminClsTypeId)(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeName) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.adminClsTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班级类型名称(adminClsTypeName)]的长度不能超过30(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.adminClsTypeName)(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.memo) == false &&
    GetStrLen(pobjXzAdminClsTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 行政班类型(XzAdminClsType))!值:$(pobjXzAdminClsTypeEN.memo)(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.idAdminClsType) == false &&
    undefined !== pobjXzAdminClsTypeEN.idAdminClsType &&
    tzDataType.isString(pobjXzAdminClsTypeEN.idAdminClsType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班级类型流水号(idAdminClsType)]的值:[$(pobjXzAdminClsTypeEN.idAdminClsType)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeId) == false &&
    undefined !== pobjXzAdminClsTypeEN.adminClsTypeId &&
    tzDataType.isString(pobjXzAdminClsTypeEN.adminClsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班级类型ID(adminClsTypeId)]的值:[$(pobjXzAdminClsTypeEN.adminClsTypeId)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.adminClsTypeName) == false &&
    undefined !== pobjXzAdminClsTypeEN.adminClsTypeName &&
    tzDataType.isString(pobjXzAdminClsTypeEN.adminClsTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班级类型名称(adminClsTypeName)]的值:[$(pobjXzAdminClsTypeEN.adminClsTypeName)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.memo) == false &&
    undefined !== pobjXzAdminClsTypeEN.memo &&
    tzDataType.isString(pobjXzAdminClsTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzAdminClsTypeEN.memo)], 非法,应该为字符型(In 行政班类型(XzAdminClsType))!(clsXzAdminClsTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjXzAdminClsTypeEN.idAdminClsType) === true ||
    pobjXzAdminClsTypeEN.idAdminClsType.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[行政班级类型流水号]不能为空(In 行政班类型)!(clsXzAdminClsTypeBL:CheckProperty4Update)',
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
export function XzAdminClsType_GetJSONStrByObj(pobjXzAdminClsTypeEN: clsXzAdminClsTypeEN): string {
  pobjXzAdminClsTypeEN.sfUpdFldSetStr = pobjXzAdminClsTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzAdminClsTypeEN);
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
export function XzAdminClsType_GetObjLstByJSONStr(strJSON: string): Array<clsXzAdminClsTypeEN> {
  let arrXzAdminClsTypeObjLst = new Array<clsXzAdminClsTypeEN>();
  if (strJSON === '') {
    return arrXzAdminClsTypeObjLst;
  }
  try {
    arrXzAdminClsTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzAdminClsTypeObjLst;
  }
  return arrXzAdminClsTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzAdminClsTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzAdminClsType_GetObjLstByJSONObjLst(
  arrXzAdminClsTypeObjLstS: Array<clsXzAdminClsTypeEN>,
): Array<clsXzAdminClsTypeEN> {
  const arrXzAdminClsTypeObjLst = new Array<clsXzAdminClsTypeEN>();
  for (const objInFor of arrXzAdminClsTypeObjLstS) {
    const obj1 = XzAdminClsType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzAdminClsTypeObjLst.push(obj1);
  }
  return arrXzAdminClsTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzAdminClsType_GetObjByJSONStr(strJSON: string): clsXzAdminClsTypeEN {
  let pobjXzAdminClsTypeEN = new clsXzAdminClsTypeEN();
  if (strJSON === '') {
    return pobjXzAdminClsTypeEN;
  }
  try {
    pobjXzAdminClsTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzAdminClsTypeEN;
  }
  return pobjXzAdminClsTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzAdminClsType_GetCombineCondition(
  objXzAdminClsTypeCond: clsXzAdminClsTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsTypeCond.dicFldComparisonOp,
      clsXzAdminClsTypeEN.con_IdAdminClsType,
    ) == true
  ) {
    const strComparisonOpIdAdminClsType: string =
      objXzAdminClsTypeCond.dicFldComparisonOp[clsXzAdminClsTypeEN.con_IdAdminClsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsTypeEN.con_IdAdminClsType,
      objXzAdminClsTypeCond.idAdminClsType,
      strComparisonOpIdAdminClsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsTypeCond.dicFldComparisonOp,
      clsXzAdminClsTypeEN.con_AdminClsTypeId,
    ) == true
  ) {
    const strComparisonOpAdminClsTypeId: string =
      objXzAdminClsTypeCond.dicFldComparisonOp[clsXzAdminClsTypeEN.con_AdminClsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsTypeEN.con_AdminClsTypeId,
      objXzAdminClsTypeCond.adminClsTypeId,
      strComparisonOpAdminClsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsTypeCond.dicFldComparisonOp,
      clsXzAdminClsTypeEN.con_AdminClsTypeName,
    ) == true
  ) {
    const strComparisonOpAdminClsTypeName: string =
      objXzAdminClsTypeCond.dicFldComparisonOp[clsXzAdminClsTypeEN.con_AdminClsTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsTypeEN.con_AdminClsTypeName,
      objXzAdminClsTypeCond.adminClsTypeName,
      strComparisonOpAdminClsTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsTypeCond.dicFldComparisonOp,
      clsXzAdminClsTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzAdminClsTypeCond.dicFldComparisonOp[clsXzAdminClsTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsTypeEN.con_Memo,
      objXzAdminClsTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzAdminClsTypeENS:源对象
 * @param objXzAdminClsTypeENT:目标对象
 */
export function XzAdminClsType_CopyObjTo(
  objXzAdminClsTypeENS: clsXzAdminClsTypeEN,
  objXzAdminClsTypeENT: clsXzAdminClsTypeEN,
): void {
  objXzAdminClsTypeENT.idAdminClsType = objXzAdminClsTypeENS.idAdminClsType; //行政班级类型流水号
  objXzAdminClsTypeENT.adminClsTypeId = objXzAdminClsTypeENS.adminClsTypeId; //行政班级类型ID
  objXzAdminClsTypeENT.adminClsTypeName = objXzAdminClsTypeENS.adminClsTypeName; //行政班级类型名称
  objXzAdminClsTypeENT.memo = objXzAdminClsTypeENS.memo; //备注
  objXzAdminClsTypeENT.sfUpdFldSetStr = objXzAdminClsTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzAdminClsTypeENS:源对象
 * @param objXzAdminClsTypeENT:目标对象
 */
export function XzAdminClsType_GetObjFromJsonObj(
  objXzAdminClsTypeENS: clsXzAdminClsTypeEN,
): clsXzAdminClsTypeEN {
  const objXzAdminClsTypeENT: clsXzAdminClsTypeEN = new clsXzAdminClsTypeEN();
  ObjectAssign(objXzAdminClsTypeENT, objXzAdminClsTypeENS);
  return objXzAdminClsTypeENT;
}
