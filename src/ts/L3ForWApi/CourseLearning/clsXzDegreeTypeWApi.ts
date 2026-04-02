/**
 * 类名:clsXzDegreeTypeWApi
 * 表名:XzDegreeType(01120067)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:20
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 行政学位类型(XzDegreeType)
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
import { clsXzDegreeTypeEN } from '@/ts/L0Entity/CourseLearning/clsXzDegreeTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzDegreeType_Controller = 'XzDegreeTypeApi';
export const xzDegreeType_ConstructorName = 'xzDegreeType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdDegreeType:关键字
 * @returns 对象
 **/
export async function XzDegreeType_GetObjByIdDegreeTypeAsync(
  strIdDegreeType: string,
): Promise<clsXzDegreeTypeEN | null> {
  const strThisFuncName = 'GetObjByIdDegreeTypeAsync';

  if (IsNullOrEmpty(strIdDegreeType) == true) {
    const strMsg = Format(
      '参数:[strIdDegreeType]不能为空!(In clsXzDegreeTypeWApi.GetObjByIdDegreeTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdDegreeType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdDegreeType]的长度:[{0}]不正确!(clsXzDegreeTypeWApi.GetObjByIdDegreeTypeAsync)',
      strIdDegreeType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdDegreeType';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdDegreeType,
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
      const objXzDegreeType = XzDegreeType_GetObjFromJsonObj(returnObj);
      return objXzDegreeType;
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param strIdDegreeType:所给的关键字
 * @returns 对象
 */
export async function XzDegreeType_GetObjByIdDegreeTypeCache(
  strIdDegreeType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdDegreeTypeCache';

  if (IsNullOrEmpty(strIdDegreeType) == true) {
    const strMsg = Format(
      '参数:[strIdDegreeType]不能为空!(In clsXzDegreeTypeWApi.GetObjByIdDegreeTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdDegreeType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdDegreeType]的长度:[{0}]不正确!(clsXzDegreeTypeWApi.GetObjByIdDegreeTypeCache)',
      strIdDegreeType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  try {
    const arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache.filter(
      (x) => x.idDegreeType == strIdDegreeType,
    );
    let objXzDegreeType: clsXzDegreeTypeEN;
    if (arrXzDegreeTypeSel.length > 0) {
      objXzDegreeType = arrXzDegreeTypeSel[0];
      return objXzDegreeType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzDegreeTypeConst = await XzDegreeType_GetObjByIdDegreeTypeAsync(strIdDegreeType);
        if (objXzDegreeTypeConst != null) {
          XzDegreeType_ReFreshThisCache();
          return objXzDegreeTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdDegreeType,
      xzDegreeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdDegreeType:所给的关键字
 * @returns 对象
 */
export async function XzDegreeType_GetObjByIdDegreeTypelocalStorage(strIdDegreeType: string) {
  const strThisFuncName = 'GetObjByIdDegreeTypelocalStorage';

  if (IsNullOrEmpty(strIdDegreeType) == true) {
    const strMsg = Format(
      '参数:[strIdDegreeType]不能为空!(In clsXzDegreeTypeWApi.GetObjByIdDegreeTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdDegreeType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdDegreeType]的长度:[{0}]不正确!(clsXzDegreeTypeWApi.GetObjByIdDegreeTypelocalStorage)',
      strIdDegreeType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzDegreeTypeEN._CurrTabName, strIdDegreeType);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzDegreeTypeCache: clsXzDegreeTypeEN = JSON.parse(strTempObj);
    return objXzDegreeTypeCache;
  }
  try {
    const objXzDegreeType = await XzDegreeType_GetObjByIdDegreeTypeAsync(strIdDegreeType);
    if (objXzDegreeType != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzDegreeType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzDegreeType;
    }
    return objXzDegreeType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdDegreeType,
      xzDegreeType_ConstructorName,
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
 * @param objXzDegreeType:所给的对象
 * @returns 对象
 */
export async function XzDegreeType_UpdateObjInLstCache(objXzDegreeType: clsXzDegreeTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
    const obj = arrXzDegreeTypeObjLstCache.find(
      (x) => x.idDegreeType == objXzDegreeType.idDegreeType,
    );
    if (obj != null) {
      objXzDegreeType.idDegreeType = obj.idDegreeType;
      ObjectAssign(obj, objXzDegreeType);
    } else {
      arrXzDegreeTypeObjLstCache.push(objXzDegreeType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzDegreeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdDegreeType:所给的关键字
 * @returns 对象
 */
export async function XzDegreeType_GetNameByIdDegreeTypeCache(strIdDegreeType: string) {
  if (IsNullOrEmpty(strIdDegreeType) == true) {
    const strMsg = Format(
      '参数:[strIdDegreeType]不能为空!(In clsXzDegreeTypeWApi.GetNameByIdDegreeTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdDegreeType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdDegreeType]的长度:[{0}]不正确!(clsXzDegreeTypeWApi.GetNameByIdDegreeTypeCache)',
      strIdDegreeType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  if (arrXzDegreeTypeObjLstCache == null) return '';
  try {
    const arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache.filter(
      (x) => x.idDegreeType == strIdDegreeType,
    );
    let objXzDegreeType: clsXzDegreeTypeEN;
    if (arrXzDegreeTypeSel.length > 0) {
      objXzDegreeType = arrXzDegreeTypeSel[0];
      return objXzDegreeType.xwTypeDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdDegreeType,
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
export async function XzDegreeType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzDegreeTypeEN.con_IdDegreeType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzDegreeTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzDegreeTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdDegreeType = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzDegreeType = await XzDegreeType_GetObjByIdDegreeTypeCache(strIdDegreeType);
  if (objXzDegreeType == null) return '';
  if (objXzDegreeType.GetFldValue(strOutFldName) == null) return '';
  return objXzDegreeType.GetFldValue(strOutFldName).toString();
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
export function XzDegreeType_SortFunDefa(a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN): number {
  return a.idDegreeType.localeCompare(b.idDegreeType);
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
export function XzDegreeType_SortFunDefa2Fld(a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN): number {
  if (a.xwTypeID == b.xwTypeID) return a.xwTypeDesc.localeCompare(b.xwTypeDesc);
  else return a.xwTypeID.localeCompare(b.xwTypeID);
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
export function XzDegreeType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzDegreeTypeEN.con_IdDegreeType:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          return a.idDegreeType.localeCompare(b.idDegreeType);
        };
      case clsXzDegreeTypeEN.con_XwTypeID:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          return a.xwTypeID.localeCompare(b.xwTypeID);
        };
      case clsXzDegreeTypeEN.con_XwTypeDesc:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          return a.xwTypeDesc.localeCompare(b.xwTypeDesc);
        };
      case clsXzDegreeTypeEN.con_XwTypeDescEN:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          if (a.xwTypeDescEN == null) return -1;
          if (b.xwTypeDescEN == null) return 1;
          return a.xwTypeDescEN.localeCompare(b.xwTypeDescEN);
        };
      case clsXzDegreeTypeEN.con_Memo:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzDegreeType]中不存在!(in ${xzDegreeType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzDegreeTypeEN.con_IdDegreeType:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          return b.idDegreeType.localeCompare(a.idDegreeType);
        };
      case clsXzDegreeTypeEN.con_XwTypeID:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          return b.xwTypeID.localeCompare(a.xwTypeID);
        };
      case clsXzDegreeTypeEN.con_XwTypeDesc:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          return b.xwTypeDesc.localeCompare(a.xwTypeDesc);
        };
      case clsXzDegreeTypeEN.con_XwTypeDescEN:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          if (b.xwTypeDescEN == null) return -1;
          if (a.xwTypeDescEN == null) return 1;
          return b.xwTypeDescEN.localeCompare(a.xwTypeDescEN);
        };
      case clsXzDegreeTypeEN.con_Memo:
        return (a: clsXzDegreeTypeEN, b: clsXzDegreeTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzDegreeType]中不存在!(in ${xzDegreeType_ConstructorName}.${strThisFuncName})`;
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
export async function XzDegreeType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzDegreeTypeEN.con_IdDegreeType:
      return (obj: clsXzDegreeTypeEN) => {
        return obj.idDegreeType === value;
      };
    case clsXzDegreeTypeEN.con_XwTypeID:
      return (obj: clsXzDegreeTypeEN) => {
        return obj.xwTypeID === value;
      };
    case clsXzDegreeTypeEN.con_XwTypeDesc:
      return (obj: clsXzDegreeTypeEN) => {
        return obj.xwTypeDesc === value;
      };
    case clsXzDegreeTypeEN.con_XwTypeDescEN:
      return (obj: clsXzDegreeTypeEN) => {
        return obj.xwTypeDescEN === value;
      };
    case clsXzDegreeTypeEN.con_Memo:
      return (obj: clsXzDegreeTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzDegreeType]中不存在!(in ${xzDegreeType_ConstructorName}.${strThisFuncName})`;
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
export async function XzDegreeType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzDegreeTypeEN.con_IdDegreeType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzDegreeType = await XzDegreeType_GetObjLstCache();
  if (arrXzDegreeType == null) return [];
  let arrXzDegreeTypeSel = arrXzDegreeType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzDegreeTypeSel.length == 0) return [];
  return arrXzDegreeTypeSel.map((x) => x.idDegreeType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzDegreeType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzDegreeTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
      const objXzDegreeType = XzDegreeType_GetObjFromJsonObj(returnObj);
      return objXzDegreeType;
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzDegreeTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzDegreeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzDegreeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzDegreeTypeExObjLstCache: Array<clsXzDegreeTypeEN> = CacheHelper.Get(strKey);
    const arrXzDegreeTypeObjLstT = XzDegreeType_GetObjLstByJSONObjLst(arrXzDegreeTypeExObjLstCache);
    return arrXzDegreeTypeObjLstT;
  }
  try {
    const arrXzDegreeTypeExObjLst = await XzDegreeType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzDegreeTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzDegreeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzDegreeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzDegreeTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzDegreeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzDegreeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzDegreeTypeExObjLstCache: Array<clsXzDegreeTypeEN> = JSON.parse(strTempObjLst);
    const arrXzDegreeTypeObjLstT = XzDegreeType_GetObjLstByJSONObjLst(arrXzDegreeTypeExObjLstCache);
    return arrXzDegreeTypeObjLstT;
  }
  try {
    const arrXzDegreeTypeExObjLst = await XzDegreeType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzDegreeTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzDegreeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzDegreeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzDegreeTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzDegreeTypeObjLstCache: Array<clsXzDegreeTypeEN> = JSON.parse(strTempObjLst);
    return arrXzDegreeTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzDegreeType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzDegreeTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
          xzDegreeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzDegreeType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzDegreeTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzDegreeTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzDegreeTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzDegreeTypeExObjLstCache: Array<clsXzDegreeTypeEN> = JSON.parse(strTempObjLst);
    const arrXzDegreeTypeObjLstT = XzDegreeType_GetObjLstByJSONObjLst(arrXzDegreeTypeExObjLstCache);
    return arrXzDegreeTypeObjLstT;
  }
  try {
    const arrXzDegreeTypeExObjLst = await XzDegreeType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzDegreeTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzDegreeTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzDegreeTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzDegreeTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzDegreeTypeObjLstCache: Array<clsXzDegreeTypeEN> = JSON.parse(strTempObjLst);
    return arrXzDegreeTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzDegreeType_GetObjLstCache(): Promise<Array<clsXzDegreeTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzDegreeTypeObjLstCache;
  switch (clsXzDegreeTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstClientCache();
      break;
    default:
      arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstClientCache();
      break;
  }
  return arrXzDegreeTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzDegreeType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzDegreeTypeObjLstCache;
  switch (clsXzDegreeTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzDegreeTypeObjLstCache = null;
      break;
    default:
      arrXzDegreeTypeObjLstCache = null;
      break;
  }
  return arrXzDegreeTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdDegreeTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzDegreeType_GetSubObjLstCache(objXzDegreeTypeCond: clsXzDegreeTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  let arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache;
  if (objXzDegreeTypeCond.sfFldComparisonOp == null || objXzDegreeTypeCond.sfFldComparisonOp == '')
    return arrXzDegreeTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzDegreeTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzDegreeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzDegreeTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzDegreeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzDegreeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzDegreeTypeCond),
      xzDegreeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzDegreeTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdDegreeType:关键字列表
 * @returns 对象列表
 **/
export async function XzDegreeType_GetObjLstByIdDegreeTypeLstAsync(
  arrIdDegreeType: Array<string>,
): Promise<Array<clsXzDegreeTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdDegreeTypeLstAsync';
  const strAction = 'GetObjLstByIdDegreeTypeLst';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdDegreeType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzDegreeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzDegreeType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param arrstrIdDegreeTypeLst:关键字列表
 * @returns 对象列表
 */
export async function XzDegreeType_GetObjLstByIdDegreeTypeLstCache(
  arrIdDegreeTypeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdDegreeTypeLstCache';
  try {
    const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
    const arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache.filter(
      (x) => arrIdDegreeTypeLst.indexOf(x.idDegreeType) > -1,
    );
    return arrXzDegreeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdDegreeTypeLst.join(','),
      xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzDegreeTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
          xzDegreeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzDegreeType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzDegreeTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
          xzDegreeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzDegreeType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzDegreeTypeEN>();
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  if (arrXzDegreeTypeObjLstCache.length == 0) return arrXzDegreeTypeObjLstCache;
  let arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzDegreeTypeCond = new clsXzDegreeTypeEN();
  ObjectAssign(objXzDegreeTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzDegreeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzDegreeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzDegreeTypeSel.length == 0) return arrXzDegreeTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzDegreeTypeSel = arrXzDegreeTypeSel.sort(
        XzDegreeType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzDegreeTypeSel = arrXzDegreeTypeSel.sort(objPagerPara.sortFun);
    }
    arrXzDegreeTypeSel = arrXzDegreeTypeSel.slice(intStart, intEnd);
    return arrXzDegreeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzDegreeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzDegreeTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzDegreeType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzDegreeTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzDegreeTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
          xzDegreeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzDegreeType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param strIdDegreeType:关键字
 * @returns 获取删除的结果
 **/
export async function XzDegreeType_DelRecordAsync(strIdDegreeType: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdDegreeType);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param arrIdDegreeType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzDegreeType_DelXzDegreeTypesAsync(
  arrIdDegreeType: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelXzDegreeTypesAsync';
  const strAction = 'DelXzDegreeTypes';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdDegreeType, config);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_DelXzDegreeTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelXzDegreeTypesByCondAsync';
  const strAction = 'DelXzDegreeTypesByCond';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objXzDegreeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzDegreeType_AddNewRecordAsync(
  objXzDegreeTypeEN: clsXzDegreeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objXzDegreeTypeEN.idDegreeType === null || objXzDegreeTypeEN.idDegreeType === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objXzDegreeTypeEN);
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzDegreeTypeEN, config);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objXzDegreeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzDegreeType_AddNewRecordWithMaxIdAsync(
  objXzDegreeTypeEN: clsXzDegreeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzDegreeTypeEN, config);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objXzDegreeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzDegreeType_AddNewRecordWithReturnKeyAsync(
  objXzDegreeTypeEN: clsXzDegreeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzDegreeTypeEN, config);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objXzDegreeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzDegreeType_UpdateRecordAsync(
  objXzDegreeTypeEN: clsXzDegreeTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzDegreeTypeEN.sfUpdFldSetStr === undefined ||
    objXzDegreeTypeEN.sfUpdFldSetStr === null ||
    objXzDegreeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzDegreeTypeEN.idDegreeType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzDegreeTypeEN, config);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objXzDegreeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzDegreeType_UpdateWithConditionAsync(
  objXzDegreeTypeEN: clsXzDegreeTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzDegreeTypeEN.sfUpdFldSetStr === undefined ||
    objXzDegreeTypeEN.sfUpdFldSetStr === null ||
    objXzDegreeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzDegreeTypeEN.idDegreeType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);
  objXzDegreeTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzDegreeTypeEN, config);
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objstrIdDegreeTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzDegreeType_IsExistRecordCache(objXzDegreeTypeCond: clsXzDegreeTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  if (arrXzDegreeTypeObjLstCache == null) return false;
  let arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache;
  if (objXzDegreeTypeCond.sfFldComparisonOp == null || objXzDegreeTypeCond.sfFldComparisonOp == '')
    return arrXzDegreeTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzDegreeTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzDegreeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzDegreeTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzDegreeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzDegreeTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzDegreeTypeCond),
      xzDegreeType_ConstructorName,
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
export async function XzDegreeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param strIdDegreeType:所给的关键字
 * @returns 对象
 */
export async function XzDegreeType_IsExistCache(strIdDegreeType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  if (arrXzDegreeTypeObjLstCache == null) return false;
  try {
    const arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache.filter(
      (x) => x.idDegreeType == strIdDegreeType,
    );
    if (arrXzDegreeTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdDegreeType,
      xzDegreeType_ConstructorName,
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
 * @param strIdDegreeType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzDegreeType_IsExistAsync(strIdDegreeType: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdDegreeType,
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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
 * @param objXzDegreeTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzDegreeType_GetRecCountByCondCache(objXzDegreeTypeCond: clsXzDegreeTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzDegreeTypeObjLstCache = await XzDegreeType_GetObjLstCache();
  if (arrXzDegreeTypeObjLstCache == null) return 0;
  let arrXzDegreeTypeSel = arrXzDegreeTypeObjLstCache;
  if (objXzDegreeTypeCond.sfFldComparisonOp == null || objXzDegreeTypeCond.sfFldComparisonOp == '')
    return arrXzDegreeTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzDegreeTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzDegreeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzDegreeTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzDegreeTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzDegreeTypeSel = arrXzDegreeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzDegreeTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzDegreeTypeCond),
      xzDegreeType_ConstructorName,
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
export async function XzDegreeType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzDegreeType_Controller, strAction);

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
        xzDegreeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzDegreeType_ConstructorName,
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
export function XzDegreeType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzDegreeType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzDegreeTypeEN._CurrTabName;
  switch (clsXzDegreeTypeEN.CacheModeId) {
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
export function XzDegreeType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzDegreeTypeEN._CurrTabName;
    switch (clsXzDegreeTypeEN.CacheModeId) {
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
export async function XzDegreeType_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await XzDegreeType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzDegreeTypeEN.con_IdDegreeType,
    clsXzDegreeTypeEN.con_XwTypeDesc,
    '行政学位类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzDegreeType_CheckPropertyNew(pobjXzDegreeTypeEN: clsXzDegreeTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeID) === true) {
    throw new Error(
      '(errid:Watl000411)字段[学位类型ID]不能为空(In 行政学位类型)!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDesc) === true) {
    throw new Error(
      '(errid:Watl000411)字段[学位类型名称]不能为空(In 行政学位类型)!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.idDegreeType) == false &&
    GetStrLen(pobjXzDegreeTypeEN.idDegreeType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学位类型流水号(idDegreeType)]的长度不能超过4(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.idDegreeType)(clsXzDegreeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeID) == false &&
    GetStrLen(pobjXzDegreeTypeEN.xwTypeID) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学位类型ID(xwTypeID)]的长度不能超过4(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.xwTypeID)(clsXzDegreeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDesc) == false &&
    GetStrLen(pobjXzDegreeTypeEN.xwTypeDesc) > 60
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学位类型名称(xwTypeDesc)]的长度不能超过60(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.xwTypeDesc)(clsXzDegreeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDescEN) == false &&
    GetStrLen(pobjXzDegreeTypeEN.xwTypeDescEN) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学位类型名称_EN(xwTypeDescEN)]的长度不能超过200(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.xwTypeDescEN)(clsXzDegreeTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.memo) == false &&
    GetStrLen(pobjXzDegreeTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.memo)(clsXzDegreeTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.idDegreeType) == false &&
    undefined !== pobjXzDegreeTypeEN.idDegreeType &&
    tzDataType.isString(pobjXzDegreeTypeEN.idDegreeType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学位类型流水号(idDegreeType)]的值:[$(pobjXzDegreeTypeEN.idDegreeType)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeID) == false &&
    undefined !== pobjXzDegreeTypeEN.xwTypeID &&
    tzDataType.isString(pobjXzDegreeTypeEN.xwTypeID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学位类型ID(xwTypeID)]的值:[$(pobjXzDegreeTypeEN.xwTypeID)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDesc) == false &&
    undefined !== pobjXzDegreeTypeEN.xwTypeDesc &&
    tzDataType.isString(pobjXzDegreeTypeEN.xwTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学位类型名称(xwTypeDesc)]的值:[$(pobjXzDegreeTypeEN.xwTypeDesc)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDescEN) == false &&
    undefined !== pobjXzDegreeTypeEN.xwTypeDescEN &&
    tzDataType.isString(pobjXzDegreeTypeEN.xwTypeDescEN) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学位类型名称_EN(xwTypeDescEN)]的值:[$(pobjXzDegreeTypeEN.xwTypeDescEN)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.memo) == false &&
    undefined !== pobjXzDegreeTypeEN.memo &&
    tzDataType.isString(pobjXzDegreeTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzDegreeTypeEN.memo)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzDegreeType_CheckProperty4Update(pobjXzDegreeTypeEN: clsXzDegreeTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.idDegreeType) == false &&
    GetStrLen(pobjXzDegreeTypeEN.idDegreeType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学位类型流水号(idDegreeType)]的长度不能超过4(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.idDegreeType)(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeID) == false &&
    GetStrLen(pobjXzDegreeTypeEN.xwTypeID) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学位类型ID(xwTypeID)]的长度不能超过4(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.xwTypeID)(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDesc) == false &&
    GetStrLen(pobjXzDegreeTypeEN.xwTypeDesc) > 60
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学位类型名称(xwTypeDesc)]的长度不能超过60(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.xwTypeDesc)(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDescEN) == false &&
    GetStrLen(pobjXzDegreeTypeEN.xwTypeDescEN) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学位类型名称_EN(xwTypeDescEN)]的长度不能超过200(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.xwTypeDescEN)(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.memo) == false &&
    GetStrLen(pobjXzDegreeTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 行政学位类型(XzDegreeType))!值:$(pobjXzDegreeTypeEN.memo)(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.idDegreeType) == false &&
    undefined !== pobjXzDegreeTypeEN.idDegreeType &&
    tzDataType.isString(pobjXzDegreeTypeEN.idDegreeType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学位类型流水号(idDegreeType)]的值:[$(pobjXzDegreeTypeEN.idDegreeType)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeID) == false &&
    undefined !== pobjXzDegreeTypeEN.xwTypeID &&
    tzDataType.isString(pobjXzDegreeTypeEN.xwTypeID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学位类型ID(xwTypeID)]的值:[$(pobjXzDegreeTypeEN.xwTypeID)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDesc) == false &&
    undefined !== pobjXzDegreeTypeEN.xwTypeDesc &&
    tzDataType.isString(pobjXzDegreeTypeEN.xwTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学位类型名称(xwTypeDesc)]的值:[$(pobjXzDegreeTypeEN.xwTypeDesc)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.xwTypeDescEN) == false &&
    undefined !== pobjXzDegreeTypeEN.xwTypeDescEN &&
    tzDataType.isString(pobjXzDegreeTypeEN.xwTypeDescEN) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学位类型名称_EN(xwTypeDescEN)]的值:[$(pobjXzDegreeTypeEN.xwTypeDescEN)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.memo) == false &&
    undefined !== pobjXzDegreeTypeEN.memo &&
    tzDataType.isString(pobjXzDegreeTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzDegreeTypeEN.memo)], 非法,应该为字符型(In 行政学位类型(XzDegreeType))!(clsXzDegreeTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjXzDegreeTypeEN.idDegreeType) === true ||
    pobjXzDegreeTypeEN.idDegreeType.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[学位类型流水号]不能为空(In 行政学位类型)!(clsXzDegreeTypeBL:CheckProperty4Update)',
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
export function XzDegreeType_GetJSONStrByObj(pobjXzDegreeTypeEN: clsXzDegreeTypeEN): string {
  pobjXzDegreeTypeEN.sfUpdFldSetStr = pobjXzDegreeTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzDegreeTypeEN);
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
export function XzDegreeType_GetObjLstByJSONStr(strJSON: string): Array<clsXzDegreeTypeEN> {
  let arrXzDegreeTypeObjLst = new Array<clsXzDegreeTypeEN>();
  if (strJSON === '') {
    return arrXzDegreeTypeObjLst;
  }
  try {
    arrXzDegreeTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzDegreeTypeObjLst;
  }
  return arrXzDegreeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzDegreeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzDegreeType_GetObjLstByJSONObjLst(
  arrXzDegreeTypeObjLstS: Array<clsXzDegreeTypeEN>,
): Array<clsXzDegreeTypeEN> {
  const arrXzDegreeTypeObjLst = new Array<clsXzDegreeTypeEN>();
  for (const objInFor of arrXzDegreeTypeObjLstS) {
    const obj1 = XzDegreeType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzDegreeTypeObjLst.push(obj1);
  }
  return arrXzDegreeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzDegreeType_GetObjByJSONStr(strJSON: string): clsXzDegreeTypeEN {
  let pobjXzDegreeTypeEN = new clsXzDegreeTypeEN();
  if (strJSON === '') {
    return pobjXzDegreeTypeEN;
  }
  try {
    pobjXzDegreeTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzDegreeTypeEN;
  }
  return pobjXzDegreeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzDegreeType_GetCombineCondition(objXzDegreeTypeCond: clsXzDegreeTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzDegreeTypeCond.dicFldComparisonOp,
      clsXzDegreeTypeEN.con_IdDegreeType,
    ) == true
  ) {
    const strComparisonOpIdDegreeType: string =
      objXzDegreeTypeCond.dicFldComparisonOp[clsXzDegreeTypeEN.con_IdDegreeType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzDegreeTypeEN.con_IdDegreeType,
      objXzDegreeTypeCond.idDegreeType,
      strComparisonOpIdDegreeType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzDegreeTypeCond.dicFldComparisonOp,
      clsXzDegreeTypeEN.con_XwTypeID,
    ) == true
  ) {
    const strComparisonOpXwTypeID: string =
      objXzDegreeTypeCond.dicFldComparisonOp[clsXzDegreeTypeEN.con_XwTypeID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzDegreeTypeEN.con_XwTypeID,
      objXzDegreeTypeCond.xwTypeID,
      strComparisonOpXwTypeID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzDegreeTypeCond.dicFldComparisonOp,
      clsXzDegreeTypeEN.con_XwTypeDesc,
    ) == true
  ) {
    const strComparisonOpXwTypeDesc: string =
      objXzDegreeTypeCond.dicFldComparisonOp[clsXzDegreeTypeEN.con_XwTypeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzDegreeTypeEN.con_XwTypeDesc,
      objXzDegreeTypeCond.xwTypeDesc,
      strComparisonOpXwTypeDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzDegreeTypeCond.dicFldComparisonOp,
      clsXzDegreeTypeEN.con_XwTypeDescEN,
    ) == true
  ) {
    const strComparisonOpXwTypeDescEN: string =
      objXzDegreeTypeCond.dicFldComparisonOp[clsXzDegreeTypeEN.con_XwTypeDescEN];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzDegreeTypeEN.con_XwTypeDescEN,
      objXzDegreeTypeCond.xwTypeDescEN,
      strComparisonOpXwTypeDescEN,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzDegreeTypeCond.dicFldComparisonOp,
      clsXzDegreeTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzDegreeTypeCond.dicFldComparisonOp[clsXzDegreeTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzDegreeTypeEN.con_Memo,
      objXzDegreeTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzDegreeTypeENS:源对象
 * @param objXzDegreeTypeENT:目标对象
 */
export function XzDegreeType_CopyObjTo(
  objXzDegreeTypeENS: clsXzDegreeTypeEN,
  objXzDegreeTypeENT: clsXzDegreeTypeEN,
): void {
  objXzDegreeTypeENT.idDegreeType = objXzDegreeTypeENS.idDegreeType; //学位类型流水号
  objXzDegreeTypeENT.xwTypeID = objXzDegreeTypeENS.xwTypeID; //学位类型ID
  objXzDegreeTypeENT.xwTypeDesc = objXzDegreeTypeENS.xwTypeDesc; //学位类型名称
  objXzDegreeTypeENT.xwTypeDescEN = objXzDegreeTypeENS.xwTypeDescEN; //学位类型名称_EN
  objXzDegreeTypeENT.memo = objXzDegreeTypeENS.memo; //备注
  objXzDegreeTypeENT.sfUpdFldSetStr = objXzDegreeTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzDegreeTypeENS:源对象
 * @param objXzDegreeTypeENT:目标对象
 */
export function XzDegreeType_GetObjFromJsonObj(
  objXzDegreeTypeENS: clsXzDegreeTypeEN,
): clsXzDegreeTypeEN {
  const objXzDegreeTypeENT: clsXzDegreeTypeEN = new clsXzDegreeTypeEN();
  ObjectAssign(objXzDegreeTypeENT, objXzDegreeTypeENS);
  return objXzDegreeTypeENT;
}
