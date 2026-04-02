/**
 * 类名:clsRsStuTypeWApi
 * 表名:RsStuType(01120162)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:44
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:成长档案(EPortfolio)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学生类别(RsStuType)
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
import { clsRsStuTypeEN } from '@/ts/L0Entity/EPortfolio/clsRsStuTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const rsStuType_Controller = 'RsStuTypeApi';
export const rsStuType_ConstructorName = 'rsStuType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdStuType:关键字
 * @returns 对象
 **/
export async function RsStuType_GetObjByIdStuTypeAsync(
  strIdStuType: string,
): Promise<clsRsStuTypeEN | null> {
  const strThisFuncName = 'GetObjByIdStuTypeAsync';

  if (IsNullOrEmpty(strIdStuType) == true) {
    const strMsg = Format(
      '参数:[strIdStuType]不能为空!(In clsRsStuTypeWApi.GetObjByIdStuTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStuType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdStuType]的长度:[{0}]不正确!(clsRsStuTypeWApi.GetObjByIdStuTypeAsync)',
      strIdStuType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdStuType';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStuType,
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
      const objRsStuType = RsStuType_GetObjFromJsonObj(returnObj);
      return objRsStuType;
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param strIdStuType:所给的关键字
 * @returns 对象
 */
export async function RsStuType_GetObjByIdStuTypeCache(
  strIdStuType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdStuTypeCache';

  if (IsNullOrEmpty(strIdStuType) == true) {
    const strMsg = Format(
      '参数:[strIdStuType]不能为空!(In clsRsStuTypeWApi.GetObjByIdStuTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStuType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdStuType]的长度:[{0}]不正确!(clsRsStuTypeWApi.GetObjByIdStuTypeCache)',
      strIdStuType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  try {
    const arrRsStuTypeSel = arrRsStuTypeObjLstCache.filter((x) => x.idStuType == strIdStuType);
    let objRsStuType: clsRsStuTypeEN;
    if (arrRsStuTypeSel.length > 0) {
      objRsStuType = arrRsStuTypeSel[0];
      return objRsStuType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRsStuTypeConst = await RsStuType_GetObjByIdStuTypeAsync(strIdStuType);
        if (objRsStuTypeConst != null) {
          RsStuType_ReFreshThisCache();
          return objRsStuTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdStuType,
      rsStuType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdStuType:所给的关键字
 * @returns 对象
 */
export async function RsStuType_GetObjByIdStuTypelocalStorage(strIdStuType: string) {
  const strThisFuncName = 'GetObjByIdStuTypelocalStorage';

  if (IsNullOrEmpty(strIdStuType) == true) {
    const strMsg = Format(
      '参数:[strIdStuType]不能为空!(In clsRsStuTypeWApi.GetObjByIdStuTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStuType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdStuType]的长度:[{0}]不正确!(clsRsStuTypeWApi.GetObjByIdStuTypelocalStorage)',
      strIdStuType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRsStuTypeEN._CurrTabName, strIdStuType);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRsStuTypeCache: clsRsStuTypeEN = JSON.parse(strTempObj);
    return objRsStuTypeCache;
  }
  try {
    const objRsStuType = await RsStuType_GetObjByIdStuTypeAsync(strIdStuType);
    if (objRsStuType != null) {
      localStorage.setItem(strKey, JSON.stringify(objRsStuType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRsStuType;
    }
    return objRsStuType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdStuType,
      rsStuType_ConstructorName,
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
 * @param objRsStuType:所给的对象
 * @returns 对象
 */
export async function RsStuType_UpdateObjInLstCache(objRsStuType: clsRsStuTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
    const obj = arrRsStuTypeObjLstCache.find((x) => x.idStuType == objRsStuType.idStuType);
    if (obj != null) {
      objRsStuType.idStuType = obj.idStuType;
      ObjectAssign(obj, objRsStuType);
    } else {
      arrRsStuTypeObjLstCache.push(objRsStuType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      rsStuType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdStuType:所给的关键字
 * @returns 对象
 */
export async function RsStuType_GetNameByIdStuTypeCache(strIdStuType: string) {
  if (IsNullOrEmpty(strIdStuType) == true) {
    const strMsg = Format(
      '参数:[strIdStuType]不能为空!(In clsRsStuTypeWApi.GetNameByIdStuTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStuType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdStuType]的长度:[{0}]不正确!(clsRsStuTypeWApi.GetNameByIdStuTypeCache)',
      strIdStuType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  if (arrRsStuTypeObjLstCache == null) return '';
  try {
    const arrRsStuTypeSel = arrRsStuTypeObjLstCache.filter((x) => x.idStuType == strIdStuType);
    let objRsStuType: clsRsStuTypeEN;
    if (arrRsStuTypeSel.length > 0) {
      objRsStuType = arrRsStuTypeSel[0];
      return objRsStuType.stuTypeDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdStuType,
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
export async function RsStuType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsRsStuTypeEN.con_IdStuType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRsStuTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRsStuTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdStuType = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objRsStuType = await RsStuType_GetObjByIdStuTypeCache(strIdStuType);
  if (objRsStuType == null) return '';
  if (objRsStuType.GetFldValue(strOutFldName) == null) return '';
  return objRsStuType.GetFldValue(strOutFldName).toString();
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
export function RsStuType_SortFunDefa(a: clsRsStuTypeEN, b: clsRsStuTypeEN): number {
  return a.idStuType.localeCompare(b.idStuType);
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
export function RsStuType_SortFunDefa2Fld(a: clsRsStuTypeEN, b: clsRsStuTypeEN): number {
  if (a.stuTypeID == b.stuTypeID) return a.stuTypeDesc.localeCompare(b.stuTypeDesc);
  else return a.stuTypeID.localeCompare(b.stuTypeID);
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
export function RsStuType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRsStuTypeEN.con_IdStuType:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          return a.idStuType.localeCompare(b.idStuType);
        };
      case clsRsStuTypeEN.con_StuTypeID:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          return a.stuTypeID.localeCompare(b.stuTypeID);
        };
      case clsRsStuTypeEN.con_StuTypeDesc:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          return a.stuTypeDesc.localeCompare(b.stuTypeDesc);
        };
      case clsRsStuTypeEN.con_ModifyDate:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsRsStuTypeEN.con_ModifyUserId:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsRsStuTypeEN.con_SpecUniLenDesc:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (a.specUniLenDesc == null) return -1;
          if (b.specUniLenDesc == null) return 1;
          return a.specUniLenDesc.localeCompare(b.specUniLenDesc);
        };
      case clsRsStuTypeEN.con_Memo:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RsStuType]中不存在!(in ${rsStuType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRsStuTypeEN.con_IdStuType:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          return b.idStuType.localeCompare(a.idStuType);
        };
      case clsRsStuTypeEN.con_StuTypeID:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          return b.stuTypeID.localeCompare(a.stuTypeID);
        };
      case clsRsStuTypeEN.con_StuTypeDesc:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          return b.stuTypeDesc.localeCompare(a.stuTypeDesc);
        };
      case clsRsStuTypeEN.con_ModifyDate:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsRsStuTypeEN.con_ModifyUserId:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsRsStuTypeEN.con_SpecUniLenDesc:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (b.specUniLenDesc == null) return -1;
          if (a.specUniLenDesc == null) return 1;
          return b.specUniLenDesc.localeCompare(a.specUniLenDesc);
        };
      case clsRsStuTypeEN.con_Memo:
        return (a: clsRsStuTypeEN, b: clsRsStuTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RsStuType]中不存在!(in ${rsStuType_ConstructorName}.${strThisFuncName})`;
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
export async function RsStuType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRsStuTypeEN.con_IdStuType:
      return (obj: clsRsStuTypeEN) => {
        return obj.idStuType === value;
      };
    case clsRsStuTypeEN.con_StuTypeID:
      return (obj: clsRsStuTypeEN) => {
        return obj.stuTypeID === value;
      };
    case clsRsStuTypeEN.con_StuTypeDesc:
      return (obj: clsRsStuTypeEN) => {
        return obj.stuTypeDesc === value;
      };
    case clsRsStuTypeEN.con_ModifyDate:
      return (obj: clsRsStuTypeEN) => {
        return obj.modifyDate === value;
      };
    case clsRsStuTypeEN.con_ModifyUserId:
      return (obj: clsRsStuTypeEN) => {
        return obj.modifyUserId === value;
      };
    case clsRsStuTypeEN.con_SpecUniLenDesc:
      return (obj: clsRsStuTypeEN) => {
        return obj.specUniLenDesc === value;
      };
    case clsRsStuTypeEN.con_Memo:
      return (obj: clsRsStuTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RsStuType]中不存在!(in ${rsStuType_ConstructorName}.${strThisFuncName})`;
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
export async function RsStuType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsRsStuTypeEN.con_IdStuType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrRsStuType = await RsStuType_GetObjLstCache();
  if (arrRsStuType == null) return [];
  let arrRsStuTypeSel = arrRsStuType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRsStuTypeSel = arrRsStuTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrRsStuTypeSel.length == 0) return [];
  return arrRsStuTypeSel.map((x) => x.idStuType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RsStuType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRsStuTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
      const objRsStuType = RsStuType_GetObjFromJsonObj(returnObj);
      return objRsStuType;
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRsStuTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsRsStuTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRsStuTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRsStuTypeExObjLstCache: Array<clsRsStuTypeEN> = CacheHelper.Get(strKey);
    const arrRsStuTypeObjLstT = RsStuType_GetObjLstByJSONObjLst(arrRsStuTypeExObjLstCache);
    return arrRsStuTypeObjLstT;
  }
  try {
    const arrRsStuTypeExObjLst = await RsStuType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRsStuTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRsStuTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrRsStuTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRsStuTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsRsStuTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRsStuTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRsStuTypeExObjLstCache: Array<clsRsStuTypeEN> = JSON.parse(strTempObjLst);
    const arrRsStuTypeObjLstT = RsStuType_GetObjLstByJSONObjLst(arrRsStuTypeExObjLstCache);
    return arrRsStuTypeObjLstT;
  }
  try {
    const arrRsStuTypeExObjLst = await RsStuType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRsStuTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRsStuTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrRsStuTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRsStuTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRsStuTypeObjLstCache: Array<clsRsStuTypeEN> = JSON.parse(strTempObjLst);
    return arrRsStuTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RsStuType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsRsStuTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
          rsStuType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsStuType_GetObjLstByJSONObjLst(returnObjLst);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRsStuTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsRsStuTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRsStuTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRsStuTypeExObjLstCache: Array<clsRsStuTypeEN> = JSON.parse(strTempObjLst);
    const arrRsStuTypeObjLstT = RsStuType_GetObjLstByJSONObjLst(arrRsStuTypeExObjLstCache);
    return arrRsStuTypeObjLstT;
  }
  try {
    const arrRsStuTypeExObjLst = await RsStuType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRsStuTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRsStuTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrRsStuTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRsStuTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRsStuTypeObjLstCache: Array<clsRsStuTypeEN> = JSON.parse(strTempObjLst);
    return arrRsStuTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RsStuType_GetObjLstCache(): Promise<Array<clsRsStuTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrRsStuTypeObjLstCache;
  switch (clsRsStuTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrRsStuTypeObjLstCache = await RsStuType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrRsStuTypeObjLstCache = await RsStuType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrRsStuTypeObjLstCache = await RsStuType_GetObjLstClientCache();
      break;
    default:
      arrRsStuTypeObjLstCache = await RsStuType_GetObjLstClientCache();
      break;
  }
  return arrRsStuTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RsStuType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRsStuTypeObjLstCache;
  switch (clsRsStuTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrRsStuTypeObjLstCache = await RsStuType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrRsStuTypeObjLstCache = await RsStuType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrRsStuTypeObjLstCache = null;
      break;
    default:
      arrRsStuTypeObjLstCache = null;
      break;
  }
  return arrRsStuTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdStuTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function RsStuType_GetSubObjLstCache(objRsStuTypeCond: clsRsStuTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  let arrRsStuTypeSel = arrRsStuTypeObjLstCache;
  if (objRsStuTypeCond.sfFldComparisonOp == null || objRsStuTypeCond.sfFldComparisonOp == '')
    return arrRsStuTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRsStuTypeCond.sfFldComparisonOp,
  );
  //console.log("clsRsStuTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRsStuTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsStuTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRsStuTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRsStuTypeCond),
      rsStuType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRsStuTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdStuType:关键字列表
 * @returns 对象列表
 **/
export async function RsStuType_GetObjLstByIdStuTypeLstAsync(
  arrIdStuType: Array<string>,
): Promise<Array<clsRsStuTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdStuTypeLstAsync';
  const strAction = 'GetObjLstByIdStuTypeLst';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdStuType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          rsStuType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsStuType_GetObjLstByJSONObjLst(returnObjLst);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param arrstrIdStuTypeLst:关键字列表
 * @returns 对象列表
 */
export async function RsStuType_GetObjLstByIdStuTypeLstCache(arrIdStuTypeLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdStuTypeLstCache';
  try {
    const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
    const arrRsStuTypeSel = arrRsStuTypeObjLstCache.filter(
      (x) => arrIdStuTypeLst.indexOf(x.idStuType) > -1,
    );
    return arrRsStuTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdStuTypeLst.join(','),
      rsStuType_ConstructorName,
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
export async function RsStuType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRsStuTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
          rsStuType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsStuType_GetObjLstByJSONObjLst(returnObjLst);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRsStuTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
          rsStuType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsStuType_GetObjLstByJSONObjLst(returnObjLst);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsRsStuTypeEN>();
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  if (arrRsStuTypeObjLstCache.length == 0) return arrRsStuTypeObjLstCache;
  let arrRsStuTypeSel = arrRsStuTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objRsStuTypeCond = new clsRsStuTypeEN();
  ObjectAssign(objRsStuTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsRsStuTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsStuTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRsStuTypeSel.length == 0) return arrRsStuTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRsStuTypeSel = arrRsStuTypeSel.sort(RsStuType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrRsStuTypeSel = arrRsStuTypeSel.sort(objPagerPara.sortFun);
    }
    arrRsStuTypeSel = arrRsStuTypeSel.slice(intStart, intEnd);
    return arrRsStuTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rsStuType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRsStuTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function RsStuType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRsStuTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsRsStuTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
          rsStuType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsStuType_GetObjLstByJSONObjLst(returnObjLst);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param strIdStuType:关键字
 * @returns 获取删除的结果
 **/
export async function RsStuType_DelRecordAsync(strIdStuType: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(rsStuType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdStuType);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param arrIdStuType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function RsStuType_DelRsStuTypesAsync(arrIdStuType: Array<string>): Promise<number> {
  const strThisFuncName = 'DelRsStuTypesAsync';
  const strAction = 'DelRsStuTypes';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdStuType, config);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_DelRsStuTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelRsStuTypesByCondAsync';
  const strAction = 'DelRsStuTypesByCond';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objRsStuTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RsStuType_AddNewRecordAsync(
  objRsStuTypeEN: clsRsStuTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objRsStuTypeEN.idStuType === null || objRsStuTypeEN.idStuType === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRsStuTypeEN);
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsStuTypeEN, config);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objRsStuTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RsStuType_AddNewRecordWithMaxIdAsync(
  objRsStuTypeEN: clsRsStuTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsStuTypeEN, config);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objRsStuTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RsStuType_AddNewRecordWithReturnKeyAsync(
  objRsStuTypeEN: clsRsStuTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsStuTypeEN, config);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objRsStuTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RsStuType_UpdateRecordAsync(
  objRsStuTypeEN: clsRsStuTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRsStuTypeEN.sfUpdFldSetStr === undefined ||
    objRsStuTypeEN.sfUpdFldSetStr === null ||
    objRsStuTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRsStuTypeEN.idStuType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsStuTypeEN, config);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objRsStuTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RsStuType_UpdateWithConditionAsync(
  objRsStuTypeEN: clsRsStuTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRsStuTypeEN.sfUpdFldSetStr === undefined ||
    objRsStuTypeEN.sfUpdFldSetStr === null ||
    objRsStuTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRsStuTypeEN.idStuType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);
  objRsStuTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsStuTypeEN, config);
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objstrIdStuTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function RsStuType_IsExistRecordCache(objRsStuTypeCond: clsRsStuTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  if (arrRsStuTypeObjLstCache == null) return false;
  let arrRsStuTypeSel = arrRsStuTypeObjLstCache;
  if (objRsStuTypeCond.sfFldComparisonOp == null || objRsStuTypeCond.sfFldComparisonOp == '')
    return arrRsStuTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRsStuTypeCond.sfFldComparisonOp,
  );
  //console.log("clsRsStuTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRsStuTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsStuTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRsStuTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRsStuTypeCond),
      rsStuType_ConstructorName,
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
export async function RsStuType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param strIdStuType:所给的关键字
 * @returns 对象
 */
export async function RsStuType_IsExistCache(strIdStuType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  if (arrRsStuTypeObjLstCache == null) return false;
  try {
    const arrRsStuTypeSel = arrRsStuTypeObjLstCache.filter((x) => x.idStuType == strIdStuType);
    if (arrRsStuTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdStuType,
      rsStuType_ConstructorName,
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
 * @param strIdStuType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function RsStuType_IsExistAsync(strIdStuType: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStuType,
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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export async function RsStuType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
 * @param objRsStuTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function RsStuType_GetRecCountByCondCache(objRsStuTypeCond: clsRsStuTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRsStuTypeObjLstCache = await RsStuType_GetObjLstCache();
  if (arrRsStuTypeObjLstCache == null) return 0;
  let arrRsStuTypeSel = arrRsStuTypeObjLstCache;
  if (objRsStuTypeCond.sfFldComparisonOp == null || objRsStuTypeCond.sfFldComparisonOp == '')
    return arrRsStuTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRsStuTypeCond.sfFldComparisonOp,
  );
  //console.log("clsRsStuTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRsStuTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsStuTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRsStuTypeSel = arrRsStuTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsStuTypeSel = arrRsStuTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRsStuTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRsStuTypeCond),
      rsStuType_ConstructorName,
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
export async function RsStuType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(rsStuType_Controller, strAction);

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
        rsStuType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsStuType_ConstructorName,
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
export function RsStuType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RsStuType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsRsStuTypeEN._CurrTabName;
  switch (clsRsStuTypeEN.CacheModeId) {
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
export function RsStuType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsRsStuTypeEN._CurrTabName;
    switch (clsRsStuTypeEN.CacheModeId) {
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
export async function RsStuType_BindDdl_id_StuTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_id_StuTypeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_StuTypeInDivCache");
  const arrObjLstSel = await RsStuType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsRsStuTypeEN.con_IdStuType,
    clsRsStuTypeEN.con_StuTypeDesc,
    '学生类别',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RsStuType_CheckPropertyNew(pobjRsStuTypeEN: clsRsStuTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRsStuTypeEN.stuTypeID) === true) {
    throw new Error(
      '(errid:Watl000411)字段[学生类别ID]不能为空(In 学生类别)!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjRsStuTypeEN.stuTypeDesc) === true) {
    throw new Error(
      '(errid:Watl000411)字段[学生类别名称]不能为空(In 学生类别)!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.idStuType) == false &&
    GetStrLen(pobjRsStuTypeEN.idStuType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学生类别流水号(idStuType)]的长度不能超过4(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.idStuType)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeID) == false &&
    GetStrLen(pobjRsStuTypeEN.stuTypeID) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学生类别ID(stuTypeID)]的长度不能超过4(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.stuTypeID)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeDesc) == false &&
    GetStrLen(pobjRsStuTypeEN.stuTypeDesc) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学生类别名称(stuTypeDesc)]的长度不能超过50(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.stuTypeDesc)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyDate) == false &&
    GetStrLen(pobjRsStuTypeEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.modifyDate)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyUserId) == false &&
    GetStrLen(pobjRsStuTypeEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.modifyUserId)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.specUniLenDesc) == false &&
    GetStrLen(pobjRsStuTypeEN.specUniLenDesc) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[SpecUniLenDesc(specUniLenDesc)]的长度不能超过50(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.specUniLenDesc)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjRsStuTypeEN.memo) == false && GetStrLen(pobjRsStuTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.memo)(clsRsStuTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.idStuType) == false &&
    undefined !== pobjRsStuTypeEN.idStuType &&
    tzDataType.isString(pobjRsStuTypeEN.idStuType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生类别流水号(idStuType)]的值:[$(pobjRsStuTypeEN.idStuType)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeID) == false &&
    undefined !== pobjRsStuTypeEN.stuTypeID &&
    tzDataType.isString(pobjRsStuTypeEN.stuTypeID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生类别ID(stuTypeID)]的值:[$(pobjRsStuTypeEN.stuTypeID)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeDesc) == false &&
    undefined !== pobjRsStuTypeEN.stuTypeDesc &&
    tzDataType.isString(pobjRsStuTypeEN.stuTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学生类别名称(stuTypeDesc)]的值:[$(pobjRsStuTypeEN.stuTypeDesc)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyDate) == false &&
    undefined !== pobjRsStuTypeEN.modifyDate &&
    tzDataType.isString(pobjRsStuTypeEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsStuTypeEN.modifyDate)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyUserId) == false &&
    undefined !== pobjRsStuTypeEN.modifyUserId &&
    tzDataType.isString(pobjRsStuTypeEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsStuTypeEN.modifyUserId)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.specUniLenDesc) == false &&
    undefined !== pobjRsStuTypeEN.specUniLenDesc &&
    tzDataType.isString(pobjRsStuTypeEN.specUniLenDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[SpecUniLenDesc(specUniLenDesc)]的值:[$(pobjRsStuTypeEN.specUniLenDesc)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.memo) == false &&
    undefined !== pobjRsStuTypeEN.memo &&
    tzDataType.isString(pobjRsStuTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjRsStuTypeEN.memo)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RsStuType_CheckProperty4Update(pobjRsStuTypeEN: clsRsStuTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.idStuType) == false &&
    GetStrLen(pobjRsStuTypeEN.idStuType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学生类别流水号(idStuType)]的长度不能超过4(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.idStuType)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeID) == false &&
    GetStrLen(pobjRsStuTypeEN.stuTypeID) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学生类别ID(stuTypeID)]的长度不能超过4(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.stuTypeID)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeDesc) == false &&
    GetStrLen(pobjRsStuTypeEN.stuTypeDesc) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学生类别名称(stuTypeDesc)]的长度不能超过50(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.stuTypeDesc)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyDate) == false &&
    GetStrLen(pobjRsStuTypeEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.modifyDate)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyUserId) == false &&
    GetStrLen(pobjRsStuTypeEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.modifyUserId)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.specUniLenDesc) == false &&
    GetStrLen(pobjRsStuTypeEN.specUniLenDesc) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[SpecUniLenDesc(specUniLenDesc)]的长度不能超过50(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.specUniLenDesc)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjRsStuTypeEN.memo) == false && GetStrLen(pobjRsStuTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生类别(RsStuType))!值:$(pobjRsStuTypeEN.memo)(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.idStuType) == false &&
    undefined !== pobjRsStuTypeEN.idStuType &&
    tzDataType.isString(pobjRsStuTypeEN.idStuType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生类别流水号(idStuType)]的值:[$(pobjRsStuTypeEN.idStuType)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeID) == false &&
    undefined !== pobjRsStuTypeEN.stuTypeID &&
    tzDataType.isString(pobjRsStuTypeEN.stuTypeID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生类别ID(stuTypeID)]的值:[$(pobjRsStuTypeEN.stuTypeID)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.stuTypeDesc) == false &&
    undefined !== pobjRsStuTypeEN.stuTypeDesc &&
    tzDataType.isString(pobjRsStuTypeEN.stuTypeDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学生类别名称(stuTypeDesc)]的值:[$(pobjRsStuTypeEN.stuTypeDesc)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyDate) == false &&
    undefined !== pobjRsStuTypeEN.modifyDate &&
    tzDataType.isString(pobjRsStuTypeEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsStuTypeEN.modifyDate)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.modifyUserId) == false &&
    undefined !== pobjRsStuTypeEN.modifyUserId &&
    tzDataType.isString(pobjRsStuTypeEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsStuTypeEN.modifyUserId)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.specUniLenDesc) == false &&
    undefined !== pobjRsStuTypeEN.specUniLenDesc &&
    tzDataType.isString(pobjRsStuTypeEN.specUniLenDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[SpecUniLenDesc(specUniLenDesc)]的值:[$(pobjRsStuTypeEN.specUniLenDesc)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.memo) == false &&
    undefined !== pobjRsStuTypeEN.memo &&
    tzDataType.isString(pobjRsStuTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjRsStuTypeEN.memo)], 非法,应该为字符型(In 学生类别(RsStuType))!(clsRsStuTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjRsStuTypeEN.idStuType) === true ||
    pobjRsStuTypeEN.idStuType.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[学生类别流水号]不能为空(In 学生类别)!(clsRsStuTypeBL:CheckProperty4Update)',
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
export function RsStuType_GetJSONStrByObj(pobjRsStuTypeEN: clsRsStuTypeEN): string {
  pobjRsStuTypeEN.sfUpdFldSetStr = pobjRsStuTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRsStuTypeEN);
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
export function RsStuType_GetObjLstByJSONStr(strJSON: string): Array<clsRsStuTypeEN> {
  let arrRsStuTypeObjLst = new Array<clsRsStuTypeEN>();
  if (strJSON === '') {
    return arrRsStuTypeObjLst;
  }
  try {
    arrRsStuTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRsStuTypeObjLst;
  }
  return arrRsStuTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsStuTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RsStuType_GetObjLstByJSONObjLst(
  arrRsStuTypeObjLstS: Array<clsRsStuTypeEN>,
): Array<clsRsStuTypeEN> {
  const arrRsStuTypeObjLst = new Array<clsRsStuTypeEN>();
  for (const objInFor of arrRsStuTypeObjLstS) {
    const obj1 = RsStuType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRsStuTypeObjLst.push(obj1);
  }
  return arrRsStuTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RsStuType_GetObjByJSONStr(strJSON: string): clsRsStuTypeEN {
  let pobjRsStuTypeEN = new clsRsStuTypeEN();
  if (strJSON === '') {
    return pobjRsStuTypeEN;
  }
  try {
    pobjRsStuTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRsStuTypeEN;
  }
  return pobjRsStuTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RsStuType_GetCombineCondition(objRsStuTypeCond: clsRsStuTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_IdStuType,
    ) == true
  ) {
    const strComparisonOpIdStuType: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_IdStuType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_IdStuType,
      objRsStuTypeCond.idStuType,
      strComparisonOpIdStuType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_StuTypeID,
    ) == true
  ) {
    const strComparisonOpStuTypeID: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_StuTypeID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_StuTypeID,
      objRsStuTypeCond.stuTypeID,
      strComparisonOpStuTypeID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_StuTypeDesc,
    ) == true
  ) {
    const strComparisonOpStuTypeDesc: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_StuTypeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_StuTypeDesc,
      objRsStuTypeCond.stuTypeDesc,
      strComparisonOpStuTypeDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_ModifyDate,
      objRsStuTypeCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_ModifyUserId,
      objRsStuTypeCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_SpecUniLenDesc,
    ) == true
  ) {
    const strComparisonOpSpecUniLenDesc: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_SpecUniLenDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_SpecUniLenDesc,
      objRsStuTypeCond.specUniLenDesc,
      strComparisonOpSpecUniLenDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsStuTypeCond.dicFldComparisonOp,
      clsRsStuTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objRsStuTypeCond.dicFldComparisonOp[clsRsStuTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsStuTypeEN.con_Memo,
      objRsStuTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsStuTypeENS:源对象
 * @param objRsStuTypeENT:目标对象
 */
export function RsStuType_CopyObjTo(
  objRsStuTypeENS: clsRsStuTypeEN,
  objRsStuTypeENT: clsRsStuTypeEN,
): void {
  objRsStuTypeENT.idStuType = objRsStuTypeENS.idStuType; //学生类别流水号
  objRsStuTypeENT.stuTypeID = objRsStuTypeENS.stuTypeID; //学生类别ID
  objRsStuTypeENT.stuTypeDesc = objRsStuTypeENS.stuTypeDesc; //学生类别名称
  objRsStuTypeENT.modifyDate = objRsStuTypeENS.modifyDate; //修改日期
  objRsStuTypeENT.modifyUserId = objRsStuTypeENS.modifyUserId; //修改人
  objRsStuTypeENT.specUniLenDesc = objRsStuTypeENS.specUniLenDesc; //SpecUniLenDesc
  objRsStuTypeENT.memo = objRsStuTypeENS.memo; //备注
  objRsStuTypeENT.sfUpdFldSetStr = objRsStuTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsStuTypeENS:源对象
 * @param objRsStuTypeENT:目标对象
 */
export function RsStuType_GetObjFromJsonObj(objRsStuTypeENS: clsRsStuTypeEN): clsRsStuTypeEN {
  const objRsStuTypeENT: clsRsStuTypeEN = new clsRsStuTypeEN();
  ObjectAssign(objRsStuTypeENT, objRsStuTypeENS);
  return objRsStuTypeENT;
}
