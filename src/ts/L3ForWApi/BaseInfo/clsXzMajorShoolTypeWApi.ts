/**
 * 类名:clsXzMajorShoolTypeWApi
 * 表名:XzMajorShoolType(01120632)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:48
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 专业学校类型(XzMajorShoolType)
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
import { clsXzMajorShoolTypeEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorShoolTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzMajorShoolType_Controller = 'XzMajorShoolTypeApi';
export const xzMajorShoolType_ConstructorName = 'xzMajorShoolType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdXzMajorShoolType:关键字
 * @returns 对象
 **/
export async function XzMajorShoolType_GetObjByIdXzMajorShoolTypeAsync(
  strIdXzMajorShoolType: string,
): Promise<clsXzMajorShoolTypeEN | null> {
  const strThisFuncName = 'GetObjByIdXzMajorShoolTypeAsync';

  if (IsNullOrEmpty(strIdXzMajorShoolType) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajorShoolType]不能为空!(In clsXzMajorShoolTypeWApi.GetObjByIdXzMajorShoolTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorShoolType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorShoolType]的长度:[{0}]不正确!(clsXzMajorShoolTypeWApi.GetObjByIdXzMajorShoolTypeAsync)',
      strIdXzMajorShoolType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdXzMajorShoolType';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdXzMajorShoolType,
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
      const objXzMajorShoolType = XzMajorShoolType_GetObjFromJsonObj(returnObj);
      return objXzMajorShoolType;
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param strIdXzMajorShoolType:所给的关键字
 * @returns 对象
 */
export async function XzMajorShoolType_GetObjByIdXzMajorShoolTypeCache(
  strIdXzMajorShoolType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdXzMajorShoolTypeCache';

  if (IsNullOrEmpty(strIdXzMajorShoolType) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajorShoolType]不能为空!(In clsXzMajorShoolTypeWApi.GetObjByIdXzMajorShoolTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorShoolType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorShoolType]的长度:[{0}]不正确!(clsXzMajorShoolTypeWApi.GetObjByIdXzMajorShoolTypeCache)',
      strIdXzMajorShoolType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  try {
    const arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache.filter(
      (x) => x.idXzMajorShoolType == strIdXzMajorShoolType,
    );
    let objXzMajorShoolType: clsXzMajorShoolTypeEN;
    if (arrXzMajorShoolTypeSel.length > 0) {
      objXzMajorShoolType = arrXzMajorShoolTypeSel[0];
      return objXzMajorShoolType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzMajorShoolTypeConst = await XzMajorShoolType_GetObjByIdXzMajorShoolTypeAsync(
          strIdXzMajorShoolType,
        );
        if (objXzMajorShoolTypeConst != null) {
          XzMajorShoolType_ReFreshThisCache();
          return objXzMajorShoolTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzMajorShoolType,
      xzMajorShoolType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdXzMajorShoolType:所给的关键字
 * @returns 对象
 */
export async function XzMajorShoolType_GetObjByIdXzMajorShoolTypelocalStorage(
  strIdXzMajorShoolType: string,
) {
  const strThisFuncName = 'GetObjByIdXzMajorShoolTypelocalStorage';

  if (IsNullOrEmpty(strIdXzMajorShoolType) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajorShoolType]不能为空!(In clsXzMajorShoolTypeWApi.GetObjByIdXzMajorShoolTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorShoolType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorShoolType]的长度:[{0}]不正确!(clsXzMajorShoolTypeWApi.GetObjByIdXzMajorShoolTypelocalStorage)',
      strIdXzMajorShoolType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzMajorShoolTypeEN._CurrTabName, strIdXzMajorShoolType);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzMajorShoolTypeCache: clsXzMajorShoolTypeEN = JSON.parse(strTempObj);
    return objXzMajorShoolTypeCache;
  }
  try {
    const objXzMajorShoolType = await XzMajorShoolType_GetObjByIdXzMajorShoolTypeAsync(
      strIdXzMajorShoolType,
    );
    if (objXzMajorShoolType != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzMajorShoolType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzMajorShoolType;
    }
    return objXzMajorShoolType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdXzMajorShoolType,
      xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolType:所给的对象
 * @returns 对象
 */
export async function XzMajorShoolType_UpdateObjInLstCache(
  objXzMajorShoolType: clsXzMajorShoolTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
    const obj = arrXzMajorShoolTypeObjLstCache.find(
      (x) => x.idXzMajorShoolType == objXzMajorShoolType.idXzMajorShoolType,
    );
    if (obj != null) {
      objXzMajorShoolType.idXzMajorShoolType = obj.idXzMajorShoolType;
      ObjectAssign(obj, objXzMajorShoolType);
    } else {
      arrXzMajorShoolTypeObjLstCache.push(objXzMajorShoolType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzMajorShoolType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdXzMajorShoolType:所给的关键字
 * @returns 对象
 */
export async function XzMajorShoolType_GetNameByIdXzMajorShoolTypeCache(
  strIdXzMajorShoolType: string,
) {
  if (IsNullOrEmpty(strIdXzMajorShoolType) == true) {
    const strMsg = Format(
      '参数:[strIdXzMajorShoolType]不能为空!(In clsXzMajorShoolTypeWApi.GetNameByIdXzMajorShoolTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdXzMajorShoolType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdXzMajorShoolType]的长度:[{0}]不正确!(clsXzMajorShoolTypeWApi.GetNameByIdXzMajorShoolTypeCache)',
      strIdXzMajorShoolType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  if (arrXzMajorShoolTypeObjLstCache == null) return '';
  try {
    const arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache.filter(
      (x) => x.idXzMajorShoolType == strIdXzMajorShoolType,
    );
    let objXzMajorShoolType: clsXzMajorShoolTypeEN;
    if (arrXzMajorShoolTypeSel.length > 0) {
      objXzMajorShoolType = arrXzMajorShoolTypeSel[0];
      return objXzMajorShoolType.typeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdXzMajorShoolType,
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
export async function XzMajorShoolType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzMajorShoolTypeEN.con_IdXzMajorShoolType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzMajorShoolTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzMajorShoolTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdXzMajorShoolType = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzMajorShoolType = await XzMajorShoolType_GetObjByIdXzMajorShoolTypeCache(
    strIdXzMajorShoolType,
  );
  if (objXzMajorShoolType == null) return '';
  if (objXzMajorShoolType.GetFldValue(strOutFldName) == null) return '';
  return objXzMajorShoolType.GetFldValue(strOutFldName).toString();
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
export function XzMajorShoolType_SortFunDefa(
  a: clsXzMajorShoolTypeEN,
  b: clsXzMajorShoolTypeEN,
): number {
  return a.idXzMajorShoolType.localeCompare(b.idXzMajorShoolType);
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
export function XzMajorShoolType_SortFunDefa2Fld(
  a: clsXzMajorShoolTypeEN,
  b: clsXzMajorShoolTypeEN,
): number {
  if (a.typeName == b.typeName) return a.updUserId.localeCompare(b.updUserId);
  else return a.typeName.localeCompare(b.typeName);
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
export function XzMajorShoolType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzMajorShoolTypeEN.con_IdXzMajorShoolType:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          return a.idXzMajorShoolType.localeCompare(b.idXzMajorShoolType);
        };
      case clsXzMajorShoolTypeEN.con_TypeName:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          return a.typeName.localeCompare(b.typeName);
        };
      case clsXzMajorShoolTypeEN.con_UpdUserId:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsXzMajorShoolTypeEN.con_UpdDate:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsXzMajorShoolTypeEN.con_Memo:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzMajorShoolType]中不存在!(in ${xzMajorShoolType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzMajorShoolTypeEN.con_IdXzMajorShoolType:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          return b.idXzMajorShoolType.localeCompare(a.idXzMajorShoolType);
        };
      case clsXzMajorShoolTypeEN.con_TypeName:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          return b.typeName.localeCompare(a.typeName);
        };
      case clsXzMajorShoolTypeEN.con_UpdUserId:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsXzMajorShoolTypeEN.con_UpdDate:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsXzMajorShoolTypeEN.con_Memo:
        return (a: clsXzMajorShoolTypeEN, b: clsXzMajorShoolTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzMajorShoolType]中不存在!(in ${xzMajorShoolType_ConstructorName}.${strThisFuncName})`;
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
export async function XzMajorShoolType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzMajorShoolTypeEN.con_IdXzMajorShoolType:
      return (obj: clsXzMajorShoolTypeEN) => {
        return obj.idXzMajorShoolType === value;
      };
    case clsXzMajorShoolTypeEN.con_TypeName:
      return (obj: clsXzMajorShoolTypeEN) => {
        return obj.typeName === value;
      };
    case clsXzMajorShoolTypeEN.con_UpdUserId:
      return (obj: clsXzMajorShoolTypeEN) => {
        return obj.updUserId === value;
      };
    case clsXzMajorShoolTypeEN.con_UpdDate:
      return (obj: clsXzMajorShoolTypeEN) => {
        return obj.updDate === value;
      };
    case clsXzMajorShoolTypeEN.con_Memo:
      return (obj: clsXzMajorShoolTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzMajorShoolType]中不存在!(in ${xzMajorShoolType_ConstructorName}.${strThisFuncName})`;
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
export async function XzMajorShoolType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzMajorShoolTypeEN.con_IdXzMajorShoolType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzMajorShoolType = await XzMajorShoolType_GetObjLstCache();
  if (arrXzMajorShoolType == null) return [];
  let arrXzMajorShoolTypeSel = arrXzMajorShoolType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzMajorShoolTypeSel.length == 0) return [];
  return arrXzMajorShoolTypeSel.map((x) => x.idXzMajorShoolType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzMajorShoolType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzMajorShoolTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
      const objXzMajorShoolType = XzMajorShoolType_GetObjFromJsonObj(returnObj);
      return objXzMajorShoolType;
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzMajorShoolTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzMajorShoolTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorShoolTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzMajorShoolTypeExObjLstCache: Array<clsXzMajorShoolTypeEN> = CacheHelper.Get(strKey);
    const arrXzMajorShoolTypeObjLstT = XzMajorShoolType_GetObjLstByJSONObjLst(
      arrXzMajorShoolTypeExObjLstCache,
    );
    return arrXzMajorShoolTypeObjLstT;
  }
  try {
    const arrXzMajorShoolTypeExObjLst = await XzMajorShoolType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzMajorShoolTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorShoolTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorShoolTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzMajorShoolTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzMajorShoolTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorShoolTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzMajorShoolTypeExObjLstCache: Array<clsXzMajorShoolTypeEN> =
      JSON.parse(strTempObjLst);
    const arrXzMajorShoolTypeObjLstT = XzMajorShoolType_GetObjLstByJSONObjLst(
      arrXzMajorShoolTypeExObjLstCache,
    );
    return arrXzMajorShoolTypeObjLstT;
  }
  try {
    const arrXzMajorShoolTypeExObjLst = await XzMajorShoolType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzMajorShoolTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorShoolTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorShoolTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzMajorShoolTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzMajorShoolTypeObjLstCache: Array<clsXzMajorShoolTypeEN> = JSON.parse(strTempObjLst);
    return arrXzMajorShoolTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzMajorShoolType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzMajorShoolTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
          xzMajorShoolType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorShoolType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzMajorShoolTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsXzMajorShoolTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzMajorShoolTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzMajorShoolTypeExObjLstCache: Array<clsXzMajorShoolTypeEN> =
      JSON.parse(strTempObjLst);
    const arrXzMajorShoolTypeObjLstT = XzMajorShoolType_GetObjLstByJSONObjLst(
      arrXzMajorShoolTypeExObjLstCache,
    );
    return arrXzMajorShoolTypeObjLstT;
  }
  try {
    const arrXzMajorShoolTypeExObjLst = await XzMajorShoolType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzMajorShoolTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzMajorShoolTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrXzMajorShoolTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzMajorShoolTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzMajorShoolTypeObjLstCache: Array<clsXzMajorShoolTypeEN> = JSON.parse(strTempObjLst);
    return arrXzMajorShoolTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzMajorShoolType_GetObjLstCache(): Promise<Array<clsXzMajorShoolTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzMajorShoolTypeObjLstCache;
  switch (clsXzMajorShoolTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstClientCache();
      break;
    default:
      arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstClientCache();
      break;
  }
  return arrXzMajorShoolTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzMajorShoolType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzMajorShoolTypeObjLstCache;
  switch (clsXzMajorShoolTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzMajorShoolTypeObjLstCache = null;
      break;
    default:
      arrXzMajorShoolTypeObjLstCache = null;
      break;
  }
  return arrXzMajorShoolTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdXzMajorShoolTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzMajorShoolType_GetSubObjLstCache(
  objXzMajorShoolTypeCond: clsXzMajorShoolTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  let arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache;
  if (
    objXzMajorShoolTypeCond.sfFldComparisonOp == null ||
    objXzMajorShoolTypeCond.sfFldComparisonOp == ''
  )
    return arrXzMajorShoolTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorShoolTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorShoolTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorShoolTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorShoolTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzMajorShoolTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzMajorShoolTypeCond),
      xzMajorShoolType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorShoolTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdXzMajorShoolType:关键字列表
 * @returns 对象列表
 **/
export async function XzMajorShoolType_GetObjLstByIdXzMajorShoolTypeLstAsync(
  arrIdXzMajorShoolType: Array<string>,
): Promise<Array<clsXzMajorShoolTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdXzMajorShoolTypeLstAsync';
  const strAction = 'GetObjLstByIdXzMajorShoolTypeLst';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdXzMajorShoolType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzMajorShoolType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorShoolType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param arrstrIdXzMajorShoolTypeLst:关键字列表
 * @returns 对象列表
 */
export async function XzMajorShoolType_GetObjLstByIdXzMajorShoolTypeLstCache(
  arrIdXzMajorShoolTypeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdXzMajorShoolTypeLstCache';
  try {
    const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
    const arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache.filter(
      (x) => arrIdXzMajorShoolTypeLst.indexOf(x.idXzMajorShoolType) > -1,
    );
    return arrXzMajorShoolTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdXzMajorShoolTypeLst.join(','),
      xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzMajorShoolTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
          xzMajorShoolType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorShoolType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzMajorShoolTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
          xzMajorShoolType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorShoolType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzMajorShoolTypeEN>();
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  if (arrXzMajorShoolTypeObjLstCache.length == 0) return arrXzMajorShoolTypeObjLstCache;
  let arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzMajorShoolTypeCond = new clsXzMajorShoolTypeEN();
  ObjectAssign(objXzMajorShoolTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzMajorShoolTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorShoolTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzMajorShoolTypeSel.length == 0) return arrXzMajorShoolTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.sort(
        XzMajorShoolType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.sort(objPagerPara.sortFun);
    }
    arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.slice(intStart, intEnd);
    return arrXzMajorShoolTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzMajorShoolType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzMajorShoolTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzMajorShoolType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzMajorShoolTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzMajorShoolTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
          xzMajorShoolType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzMajorShoolType_GetObjLstByJSONObjLst(returnObjLst);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param strIdXzMajorShoolType:关键字
 * @returns 获取删除的结果
 **/
export async function XzMajorShoolType_DelRecordAsync(
  strIdXzMajorShoolType: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdXzMajorShoolType);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param arrIdXzMajorShoolType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzMajorShoolType_DelXzMajorShoolTypesAsync(
  arrIdXzMajorShoolType: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelXzMajorShoolTypesAsync';
  const strAction = 'DelXzMajorShoolTypes';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdXzMajorShoolType, config);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_DelXzMajorShoolTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelXzMajorShoolTypesByCondAsync';
  const strAction = 'DelXzMajorShoolTypesByCond';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzMajorShoolType_AddNewRecordAsync(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objXzMajorShoolTypeEN);
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorShoolTypeEN, config);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzMajorShoolType_AddNewRecordWithMaxIdAsync(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorShoolTypeEN, config);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzMajorShoolType_AddNewRecordWithReturnKeyAsync(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorShoolTypeEN, config);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzMajorShoolType_UpdateRecordAsync(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzMajorShoolTypeEN.sfUpdFldSetStr === undefined ||
    objXzMajorShoolTypeEN.sfUpdFldSetStr === null ||
    objXzMajorShoolTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzMajorShoolTypeEN.idXzMajorShoolType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorShoolTypeEN, config);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzMajorShoolType_UpdateWithConditionAsync(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzMajorShoolTypeEN.sfUpdFldSetStr === undefined ||
    objXzMajorShoolTypeEN.sfUpdFldSetStr === null ||
    objXzMajorShoolTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzMajorShoolTypeEN.idXzMajorShoolType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);
  objXzMajorShoolTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzMajorShoolTypeEN, config);
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objstrIdXzMajorShoolTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function XzMajorShoolType_IsExistRecordCache(
  objXzMajorShoolTypeCond: clsXzMajorShoolTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  if (arrXzMajorShoolTypeObjLstCache == null) return false;
  let arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache;
  if (
    objXzMajorShoolTypeCond.sfFldComparisonOp == null ||
    objXzMajorShoolTypeCond.sfFldComparisonOp == ''
  )
    return arrXzMajorShoolTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorShoolTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorShoolTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorShoolTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorShoolTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrXzMajorShoolTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzMajorShoolTypeCond),
      xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param strIdXzMajorShoolType:所给的关键字
 * @returns 对象
 */
export async function XzMajorShoolType_IsExistCache(strIdXzMajorShoolType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  if (arrXzMajorShoolTypeObjLstCache == null) return false;
  try {
    const arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache.filter(
      (x) => x.idXzMajorShoolType == strIdXzMajorShoolType,
    );
    if (arrXzMajorShoolTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdXzMajorShoolType,
      xzMajorShoolType_ConstructorName,
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
 * @param strIdXzMajorShoolType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzMajorShoolType_IsExistAsync(
  strIdXzMajorShoolType: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdXzMajorShoolType,
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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
 * @param objXzMajorShoolTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzMajorShoolType_GetRecCountByCondCache(
  objXzMajorShoolTypeCond: clsXzMajorShoolTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzMajorShoolTypeObjLstCache = await XzMajorShoolType_GetObjLstCache();
  if (arrXzMajorShoolTypeObjLstCache == null) return 0;
  let arrXzMajorShoolTypeSel = arrXzMajorShoolTypeObjLstCache;
  if (
    objXzMajorShoolTypeCond.sfFldComparisonOp == null ||
    objXzMajorShoolTypeCond.sfFldComparisonOp == ''
  )
    return arrXzMajorShoolTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzMajorShoolTypeCond.sfFldComparisonOp,
  );
  //console.log("clsXzMajorShoolTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzMajorShoolTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzMajorShoolTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrXzMajorShoolTypeSel = arrXzMajorShoolTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrXzMajorShoolTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzMajorShoolTypeCond),
      xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export async function XzMajorShoolType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzMajorShoolType_Controller, strAction);

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
        xzMajorShoolType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzMajorShoolType_ConstructorName,
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
export function XzMajorShoolType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzMajorShoolType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzMajorShoolTypeEN._CurrTabName;
  switch (clsXzMajorShoolTypeEN.CacheModeId) {
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
export function XzMajorShoolType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzMajorShoolTypeEN._CurrTabName;
    switch (clsXzMajorShoolTypeEN.CacheModeId) {
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
export async function XzMajorShoolType_BindDdl_IdXzMajorShoolTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdXzMajorShoolTypeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdXzMajorShoolTypeInDivCache");
  const arrObjLstSel = await XzMajorShoolType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzMajorShoolTypeEN.con_IdXzMajorShoolType,
    clsXzMajorShoolTypeEN.con_TypeName,
    '专业学校类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzMajorShoolType_CheckPropertyNew(pobjXzMajorShoolTypeEN: clsXzMajorShoolTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjXzMajorShoolTypeEN.typeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[类型名称]不能为空(In 专业学校类型)!(clsXzMajorShoolTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.idXzMajorShoolType) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.idXzMajorShoolType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业学校类型流水号(idXzMajorShoolType)]的长度不能超过4(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.idXzMajorShoolType)(clsXzMajorShoolTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.typeName) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.typeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类型名称(typeName)]的长度不能超过200(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.typeName)(clsXzMajorShoolTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updUserId) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.updUserId)(clsXzMajorShoolTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updDate) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.updDate)(clsXzMajorShoolTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.memo) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.memo)(clsXzMajorShoolTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.idXzMajorShoolType) == false &&
    undefined !== pobjXzMajorShoolTypeEN.idXzMajorShoolType &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.idXzMajorShoolType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业学校类型流水号(idXzMajorShoolType)]的值:[$(pobjXzMajorShoolTypeEN.idXzMajorShoolType)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.typeName) == false &&
    undefined !== pobjXzMajorShoolTypeEN.typeName &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.typeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型名称(typeName)]的值:[$(pobjXzMajorShoolTypeEN.typeName)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updUserId) == false &&
    undefined !== pobjXzMajorShoolTypeEN.updUserId &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjXzMajorShoolTypeEN.updUserId)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updDate) == false &&
    undefined !== pobjXzMajorShoolTypeEN.updDate &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjXzMajorShoolTypeEN.updDate)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.memo) == false &&
    undefined !== pobjXzMajorShoolTypeEN.memo &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzMajorShoolTypeEN.memo)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzMajorShoolType_CheckProperty4Update(
  pobjXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.idXzMajorShoolType) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.idXzMajorShoolType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业学校类型流水号(idXzMajorShoolType)]的长度不能超过4(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.idXzMajorShoolType)(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.typeName) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.typeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类型名称(typeName)]的长度不能超过200(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.typeName)(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updUserId) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.updUserId)(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updDate) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.updDate)(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.memo) == false &&
    GetStrLen(pobjXzMajorShoolTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 专业学校类型(XzMajorShoolType))!值:$(pobjXzMajorShoolTypeEN.memo)(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.idXzMajorShoolType) == false &&
    undefined !== pobjXzMajorShoolTypeEN.idXzMajorShoolType &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.idXzMajorShoolType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业学校类型流水号(idXzMajorShoolType)]的值:[$(pobjXzMajorShoolTypeEN.idXzMajorShoolType)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.typeName) == false &&
    undefined !== pobjXzMajorShoolTypeEN.typeName &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.typeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型名称(typeName)]的值:[$(pobjXzMajorShoolTypeEN.typeName)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updUserId) == false &&
    undefined !== pobjXzMajorShoolTypeEN.updUserId &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjXzMajorShoolTypeEN.updUserId)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.updDate) == false &&
    undefined !== pobjXzMajorShoolTypeEN.updDate &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjXzMajorShoolTypeEN.updDate)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzMajorShoolTypeEN.memo) == false &&
    undefined !== pobjXzMajorShoolTypeEN.memo &&
    tzDataType.isString(pobjXzMajorShoolTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzMajorShoolTypeEN.memo)], 非法,应该为字符型(In 专业学校类型(XzMajorShoolType))!(clsXzMajorShoolTypeBL:CheckProperty4Update)',
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
export function XzMajorShoolType_GetJSONStrByObj(
  pobjXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): string {
  pobjXzMajorShoolTypeEN.sfUpdFldSetStr = pobjXzMajorShoolTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzMajorShoolTypeEN);
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
export function XzMajorShoolType_GetObjLstByJSONStr(strJSON: string): Array<clsXzMajorShoolTypeEN> {
  let arrXzMajorShoolTypeObjLst = new Array<clsXzMajorShoolTypeEN>();
  if (strJSON === '') {
    return arrXzMajorShoolTypeObjLst;
  }
  try {
    arrXzMajorShoolTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzMajorShoolTypeObjLst;
  }
  return arrXzMajorShoolTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzMajorShoolTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzMajorShoolType_GetObjLstByJSONObjLst(
  arrXzMajorShoolTypeObjLstS: Array<clsXzMajorShoolTypeEN>,
): Array<clsXzMajorShoolTypeEN> {
  const arrXzMajorShoolTypeObjLst = new Array<clsXzMajorShoolTypeEN>();
  for (const objInFor of arrXzMajorShoolTypeObjLstS) {
    const obj1 = XzMajorShoolType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzMajorShoolTypeObjLst.push(obj1);
  }
  return arrXzMajorShoolTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzMajorShoolType_GetObjByJSONStr(strJSON: string): clsXzMajorShoolTypeEN {
  let pobjXzMajorShoolTypeEN = new clsXzMajorShoolTypeEN();
  if (strJSON === '') {
    return pobjXzMajorShoolTypeEN;
  }
  try {
    pobjXzMajorShoolTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzMajorShoolTypeEN;
  }
  return pobjXzMajorShoolTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzMajorShoolType_GetCombineCondition(
  objXzMajorShoolTypeCond: clsXzMajorShoolTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorShoolTypeCond.dicFldComparisonOp,
      clsXzMajorShoolTypeEN.con_IdXzMajorShoolType,
    ) == true
  ) {
    const strComparisonOpIdXzMajorShoolType: string =
      objXzMajorShoolTypeCond.dicFldComparisonOp[clsXzMajorShoolTypeEN.con_IdXzMajorShoolType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorShoolTypeEN.con_IdXzMajorShoolType,
      objXzMajorShoolTypeCond.idXzMajorShoolType,
      strComparisonOpIdXzMajorShoolType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorShoolTypeCond.dicFldComparisonOp,
      clsXzMajorShoolTypeEN.con_TypeName,
    ) == true
  ) {
    const strComparisonOpTypeName: string =
      objXzMajorShoolTypeCond.dicFldComparisonOp[clsXzMajorShoolTypeEN.con_TypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorShoolTypeEN.con_TypeName,
      objXzMajorShoolTypeCond.typeName,
      strComparisonOpTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorShoolTypeCond.dicFldComparisonOp,
      clsXzMajorShoolTypeEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objXzMajorShoolTypeCond.dicFldComparisonOp[clsXzMajorShoolTypeEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorShoolTypeEN.con_UpdUserId,
      objXzMajorShoolTypeCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorShoolTypeCond.dicFldComparisonOp,
      clsXzMajorShoolTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objXzMajorShoolTypeCond.dicFldComparisonOp[clsXzMajorShoolTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorShoolTypeEN.con_UpdDate,
      objXzMajorShoolTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzMajorShoolTypeCond.dicFldComparisonOp,
      clsXzMajorShoolTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzMajorShoolTypeCond.dicFldComparisonOp[clsXzMajorShoolTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzMajorShoolTypeEN.con_Memo,
      objXzMajorShoolTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzMajorShoolType(专业学校类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdXzMajorShoolType: 专业学校类型流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzMajorShoolType_GetUniCondStr(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and IdXzMajorShoolType = '{0}'",
    objXzMajorShoolTypeEN.idXzMajorShoolType,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzMajorShoolType(专业学校类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdXzMajorShoolType: 专业学校类型流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzMajorShoolType_GetUniCondStr4Update(
  objXzMajorShoolTypeEN: clsXzMajorShoolTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and IdXzMajorShoolType <> '{0}'",
    objXzMajorShoolTypeEN.idXzMajorShoolType,
  );
  strWhereCond += Format(
    " and IdXzMajorShoolType = '{0}'",
    objXzMajorShoolTypeEN.idXzMajorShoolType,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzMajorShoolTypeENS:源对象
 * @param objXzMajorShoolTypeENT:目标对象
 */
export function XzMajorShoolType_CopyObjTo(
  objXzMajorShoolTypeENS: clsXzMajorShoolTypeEN,
  objXzMajorShoolTypeENT: clsXzMajorShoolTypeEN,
): void {
  objXzMajorShoolTypeENT.idXzMajorShoolType = objXzMajorShoolTypeENS.idXzMajorShoolType; //专业学校类型流水号
  objXzMajorShoolTypeENT.typeName = objXzMajorShoolTypeENS.typeName; //类型名称
  objXzMajorShoolTypeENT.updUserId = objXzMajorShoolTypeENS.updUserId; //修改用户Id
  objXzMajorShoolTypeENT.updDate = objXzMajorShoolTypeENS.updDate; //修改日期
  objXzMajorShoolTypeENT.memo = objXzMajorShoolTypeENS.memo; //备注
  objXzMajorShoolTypeENT.sfUpdFldSetStr = objXzMajorShoolTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzMajorShoolTypeENS:源对象
 * @param objXzMajorShoolTypeENT:目标对象
 */
export function XzMajorShoolType_GetObjFromJsonObj(
  objXzMajorShoolTypeENS: clsXzMajorShoolTypeEN,
): clsXzMajorShoolTypeEN {
  const objXzMajorShoolTypeENT: clsXzMajorShoolTypeEN = new clsXzMajorShoolTypeEN();
  ObjectAssign(objXzMajorShoolTypeENT, objXzMajorShoolTypeENS);
  return objXzMajorShoolTypeENT;
}
